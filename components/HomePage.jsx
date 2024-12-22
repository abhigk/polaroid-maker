import Navbar from "./Navbar";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full max-w-full h-80 flex justify-center items-center font-medium text-3xl md:text-6xl">
        <h1 className="w-full md:w-2/4 text-center">
          Turn Your Memories into Timeless Polaroids
        </h1>
      </div>
    </>
  );
};

export default HomePage;
