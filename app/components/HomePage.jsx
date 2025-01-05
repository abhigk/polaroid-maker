import Navbar from '../components/Navbar'
import Image from 'next/image'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import uploadImg from './local-img/Uploading.png'
import fileImg from './local-img/files.png'
import downloadImg from './local-img/download.png'
import polaroidBg from './local-img/polaroid-bg.png'
import { Html } from '@react-three/drei'

const HomePage = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className='w-full max-w-full h-60 md:h-80 flex flex-col justify-center items-center font-medium text-3xl md:text-6xl'>
        <h1 className='w-full mb-5 md:mb-6 md:w-2/4 text-center'>Turn Your Memories into Digital Polaroids</h1>
        <h2 className='font-medium text-base md:text-lg text-center text-light-grey'>
          Effortlessly transform any photo into a classic Polaroid-style masterpiece.
        </h2>
      </div>

      {/* Features Section */}
      <div className='grid grid-cols-1 mt-60 md:mt-44 px-10 md:px-32 md:pb-28'>
        <div className='flex flex-col items-center text-center md:flex-col-reverse'>
          <Image src={'/images/example-1.png'} width={500} height={400} alt='Polaroid convert picture' />

          <div className='my-8 md:my-6'>
            <h2 className='font-medium text-3xl mb-5'>Capturing Life's Vibrant Memories</h2>
            <p>Experience the Art of Timeless Polaroid Captures</p>
          </div>
        </div>
      </div>

      {/* How it works section */}
      <div className='px-5 py-10 md:p-24'>
        <div className='w-full max-w-full flex flex-col justify-center items-center text-center text-primary-pink font-semibold text-2xl pb-5 md:pb-12 md:text-5xl'>
          <p>Create Polaroid Images in 3 Simple Steps</p>
        </div>
        <div className='grid grid-cols-1 gap-10 md:gap-12 md:grid-cols-3 text-center'>
          <div>
            <Card>
              <CardHeader className='flex justify-center items-center'>
                <Image src={uploadImg} alt='Polaroid Camera' className='h-32 w-20 md:h-52 md:w-36' />
              </CardHeader>
              <CardContent>
                <p className='text-xl font-medium'>Upload Your Photo</p>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader className='flex justify-center items-center'>
                <Image src={fileImg} alt='Polaroid Camera' className='h-32 w-32 md:h-52 md:w-52' />
              </CardHeader>
              <CardContent>
                <p className='text-xl font-medium'>Customize Your Polaroid</p>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader className='flex justify-center items-center'>
                <Image src={downloadImg} alt='Polaroid Camera' className='h-32 w-32 md:h-52 md:w-52' />
              </CardHeader>
              <CardContent>
                <p className='text-xl font-medium'>Download & Share</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* I want this div behind the model */}
      {/* <div className='h-screen'>
        <Image
          src={polaroidBg}
          id='background-img-polaroid-cover'
          alt='polaroid images'
          className='w-full h-full object-cover'
        />
      </div> */}
    </>
  )
}

export default HomePage
