import tensorflow
import pandas as pd
from PIL import Image
import pickle
import numpy as np
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.resnet50 import ResNet50, preprocess_input
from tensorflow.keras.layers import GlobalMaxPooling2D
from tensorflow.keras.models import Sequential
from numpy.linalg import norm
from sklearn.neighbors import NearestNeighbors
import os

features_list = pickle.load(open("image_features_embedding.pkl", "rb"))
img_files_list = pickle.load(open("img_files.pkl", "rb"))

model = ResNet50(weights="imagenet", include_top=False, input_shape=(224, 224, 3))
model.trainable = False
model = Sequential([model, GlobalMaxPooling2D()])


def extract_img_features(img_path, model):
    img = image.load_img(img_path, target_size=(224, 224)) # loads image and resizes it
    img_array = image.img_to_array(img) # converts image to numpy array
    expand_img = np.expand_dims(img_array, axis=0) # adds one more dimension to the image 
    preprocessed_img = preprocess_input(expand_img) # preprocesses the image
    result_to_resnet = model.predict(preprocessed_img) # predicts the image
    flatten_result = result_to_resnet.flatten() # flattens the result to 1D array
    # normalizing
    result_normlized = flatten_result / norm(flatten_result) # normalizes the result by dividing it with its norm

    return result_normlized

def recommendd(features, features_list):
    neighbors = NearestNeighbors(n_neighbors=6, algorithm='brute', metric='euclidean') # finds the 6 nearest neighbors of the image uploaded by the user
    neighbors.fit(features_list) # fits the features list

    distence, indices = neighbors.kneighbors([features]) # finds the distances and indices of the 6 nearest neighbors

    return indices # returns the indices of the 6 nearest neighbors


    
def recc_images(file_path:str):
                # show_images = Image.open(file_path)
                # size = (400, 400)
                # resized_im = show_images.resize(size)
                # extract features of the uploaded image
                features = extract_img_features(file_path, model)
                img_indicess = recommendd(features, features_list)

                recommended_images = [img_files_list[index] for index in img_indicess[0]]
                return recommended_images
