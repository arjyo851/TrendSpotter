# TrendSpotter - Clothing Recommender System

![Logo](https://socialify.git.ci/arjyo851/TrendSpotter/image?font=Raleway&language=1&name=1&owner=1&pattern=Brick%20Wall&theme=Dark)

TrendSpotter is a powerful clothing recommendation system that utilizes machine learning and image analysis to provide personalized fashion recommendations to users. It is built using Python and Django for the backend, React.js for the frontend, and integrates various technologies to ensure a seamless and efficient user experience.

## Working

![gif](https://github.com/arjyo851/TrendSpotter/blob/main/TrendSpotter.gif)

## Features

- **Fashion Recommendation:** TrendSpotter uses the machine learning model ResNet50 for image analysis. It can recognize clothing items in images and recommend similar products, allowing users to explore the latest fashion trends effortlessly.

- **Caching with Redis:** To optimize performance, TrendSpotter integrates Redis to efficiently cache image data. This reduces response times and enhances the system's overall performance, ensuring a smooth and responsive user experience.

- **Django Rest Framework and Allauth Integration:** TrendSpotter employs Django Rest Framework to design and implement robust APIs. Additionally, Allauth is integrated to facilitate secure user registration, login, and password management functionalities.

- **User-Friendly Frontend:** The frontend is built using React.js to create a user-friendly interface that allows users to interact effortlessly with the trained machine learning model.

## Getting Started

Follow these steps to set up TrendSpotter on your local machine:

1. Clone the repository from GitHub:

```bash
git clone https://github.com/arjyo851/TrendSpotter.git
```


2. Set up the backend using Django and Python virtual environment:
```bash
cd TrendSpotter/backend
python -m venv venv
venv\Scripts\activate.bat
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```


3. Set up the frontend using React.js:

```bash
cd TrendSpotter/frontend
npm install
npm start
```


4. Set up Redis using linux terminal
```bash
sudo service redis-server start
```

5. Access TrendSpotter by visiting http://localhost:3000 in your web browser.

## Contribution Guidelines

Contributions to TrendSpotter are welcome! If you find any bugs, have feature suggestions, or want to make improvements, feel free to open an issue or submit a pull request. 


