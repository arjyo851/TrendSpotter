import Avatar from "react-avatar";

type MainScreenProps = {
  scrollToRef: React.RefObject<HTMLDivElement>;
};

const MainScreen: React.FC<MainScreenProps> = ({ scrollToRef }) => {
  const handleScroll = () => {
    scrollToRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className="flex flex-col h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1497997092403-f091fcf5b6c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTQ2MDUyOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080')`,
        width: "100%",
      }}
    >
      <div className="flex flex-row m-8 justify-between">
        <Avatar
          name={window.localStorage.getItem("user")?.toString()}
          value="86%"
          size="40"
          round="20px"
          src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3"
          className="cursor-pointer"
        />
        <button
          className="bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300"
          onClick={() => {
            window.localStorage.removeItem("auth_token");
            window.localStorage.removeItem("user");
            window.location.reload();
          }}
        >
          LOGOUT
        </button>
      </div>
      <div className="grid lg:grid-cols-2">
        <div className="hidden lg:block"></div>
        <div className="flex flex-col justify-center items-center text-center">
          <p className="text-white font-bold py-4 mt-20 lg:mt-14 text-4xl md:text-6xl lg:text-8xl text-center w-100">
            TREND SPOTTER
          </p>
          <p className="text-white lg:text-xl py-2 px-5 mt-8 mb-4 lg:mt-4 text-center mx-12">
            Trend Spotter is your visual discovery companion, effortlessly
            matching and recommending similar images, unleashing a world of
            inspiration at your fingertips
          </p>
          <button
            className="bg-white hover:bg-gray-100 text-black py-2 px-4 rounded-full mt-8 lg:mt-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300"
            onClick={handleScroll}
          >
            Try out
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
