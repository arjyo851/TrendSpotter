import React from "react";
import { useState } from "react";
import Api from "../api/ApiConfig";
import Card from "./Card";
import LoadingIcons from "react-loading-icons";
import { toast } from "react-hot-toast";

type ImageRecommenderProps = {
  resultRef: React.RefObject<HTMLDivElement>;
};

const ImageRecommender: React.FC<ImageRecommenderProps> = ({ resultRef }) => {
  const [data, setData] = useState<any>(null);
  const [file, setFile] = useState<FileList | null>(null);
  const [loading, setLoading] = useState<any>(false);
  const buttonClasses = 'text-white p-4 bg-green-400 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300'

  const handleFile = () => {
    if (file) {
      setLoading(true);
      const bin = file[0];
      const formData = new FormData();
      formData.append("file", bin);
      Api.post("/file/upload/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + window.localStorage.getItem("auth_token"),
        },
      })
        .then((res) => {
          setData(res.data.result);
          setLoading(false);
        })
        .catch((e) => {
          console.log(e.message);
          setLoading(false);
        });
    }
  };

  return (
    <>
      <div
        className="flex flex-col justify-center items-center max-w-4xl mx-auto"
        ref={resultRef}
      >
        <div className="mt-24 mb-12">
          <h1 className="text-2xl text-center md:text-5xl font-bold text-[#333] mb-8">
            Upload Image
          </h1>
          <p className="text-xs text-center">
            (Upload size should be less than 2 mb)
          </p>
        </div>
        <div className="w-full">
          <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <div className="font-medium text-gray-600" id="response">
                Browse or drop image
              </div>
            </span>
            <input
              type="file"
              name="file"
              className="hidden"
              onChange={(e) => {
                e.preventDefault();
                const element: HTMLInputElement = e.target;
                setFile(element.files);
                document.getElementById(
                  "response"
                )!.innerHTML = `File Selected: ${element.files![0].name}`;
              }}
            />
          </label>
          <div className="flex my-8 justify-center">
            <button
              className={!loading ? buttonClasses : (buttonClasses + ' cursor-not-allowed opacity-50')}
              onClick={!file ? () => toast.error('Please upload an image') : handleFile}
            >
              {!loading ? 'Generate' : 'Generating'}
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        {!loading ? (
          data &&
          data.recommended_images.map((item: any) => {
            return <Card key={item} id={item} />;
          })
        ) : (
          <LoadingIcons.Bars stroke="#000000" fill="#000000" speed={0.75} />
        )}
      </div>
    </>
  );
};

export default ImageRecommender;
