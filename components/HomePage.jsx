import Navbar from "./Navbar";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import uploadImg from "./local-img/Uploading.png";
import fileImg from "./local-img/files.png";
import downloadImg from "./local-img/download.png";

const HomePage = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="w-full max-w-full h-60 md:h-80 flex flex-col justify-center items-center font-medium text-3xl md:text-6xl">
        <h1 className="w-full mb-5 md:mb-6 md:w-2/4 text-center">
          Turn Your Memories into Digital Polaroids
        </h1>
        <h2 className="font-medium text-base md:text-lg text-center text-light-grey">
          Effortlessly transform any photo into a classic Polaroid-style
          masterpiece.
        </h2>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:gap-7 md:grid-cols-2 px-10 md:px-32 md:pb-28">
        <div className="md:flex md:flex-col md:justify-end">
          <Image
            src={"/images/polaroid-camera-transparent-enhanced.png"}
            width={400}
            height={300}
            alt="Polaroid Camera"
            className="hidden md:block"
          />
        </div>
        <div className="flex flex-col text-center md:text-left md:flex-col-reverse">
          <Image
            src={"/images/example-1.png"}
            width={500}
            height={400}
            alt="Polaroid convert picture"
          />

          <div className="my-8 md:my-6">
            <h2 className="font-medium text-3xl mb-5">
              Capturing Life's Vibrant Memories
            </h2>
            <p>Experience the Art of Timeless Polaroid Captures</p>
          </div>
        </div>
      </div>

      {/* How it works section */}
      <div className="px-5 py-10 md:p-24 bg-primary-pink">
        <div className="w-full max-w-full flex flex-col justify-center items-center text-center text-white font-medium text-2xl pb-5 md:pb-12 md:text-5xl">
          <p>Create Polaroid Images in 3 Simple Steps</p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 text-center">
          <div>
            <Card>
              <CardHeader className="flex justify-center items-center">
                <div>
                  <Image
                    src={uploadImg}
                    alt="Polaroid Camera"
                    className="h-52 w-36"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-medium">Upload Your Photo</p>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader className="flex justify-center items-center">
                <Image
                  src={fileImg}
                  alt="Polaroid Camera"
                  className="h-52 w-52"
                />
              </CardHeader>
              <CardContent>
                <p className="text-xl font-medium">Customize Your Polaroid</p>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader className="flex justify-center items-center">
                <Image
                  src={downloadImg}
                  alt="Polaroid Camera"
                  className="h-52 w-52"
                />
              </CardHeader>
              <CardContent>
                <p className="text-xl font-medium">Download & Share</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
