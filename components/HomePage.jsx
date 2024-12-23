import Navbar from "./Navbar";
const HomePage = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="w-full max-w-full h-80 flex flex-col justify-center items-center font-medium text-3xl md:text-6xl">
        <h1 className="w-full mb-5 md:mb-6 md:w-2/4 text-center">
          Turn Your Memories into Timeless Polaroids
        </h1>
        <h2 className="font-medium text-base md:text-lg text-center text-light-grey">
          Effortlessly transform any photo into a classic Polaroid-style
          masterpiece.
        </h2>
      </div>
    </>
  );
};

export default HomePage;
