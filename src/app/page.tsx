import Image from 'next/image'
import Button from './Button'
import NextJS from './Nextjs'
import AboutMe from './AboutMe'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="flex place-items-center ">
        <Image
          className="rounded-full md:w-[20rem] lg:w-[35rem]"
          src="/joe.png"
          alt="Joe Picture"
          width={200}
          height={100}
          priority
        />

      </div>
      <h3 className='text-sm md:text-2xl lg:text-4xl'>A LITTLE ABOUT</h3>
      <h1 className=' text-xl font-bold sm:text-4xl md:text-6xl lg:text-8xl '>AJIT MEHROTRA</h1>
      <Button title='Learn About Me!' />

      {/* left off here */}
      <AboutMe className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left"></AboutMe>
      <NextJS className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left"></NextJS>

    </main>
  )
}
