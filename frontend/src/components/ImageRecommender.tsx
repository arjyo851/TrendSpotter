const ImageRecommender = () => {
  return (
    <div
      className="min-h-screen bg-opacity-70 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('https://source.unsplash.com/Hh5SE7THZFI')" }}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="mt-10 text-5xl font-bold text-white">Fashion Recommender</h1>
        <p className="mt-3 text-white text-sm">
          "Your fashion, our recommendation!"
        </p>
        <div className="mt-6 p-4 w-96 mx-auto bg-white bg-opacity-70 rounded-md">
          <input
            className="w-full py-2 px-4 text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="text"
            placeholder="Search for fashion recommendations..."
          />
        </div>
      </div>
    </div>
  );
};

export default ImageRecommender;
