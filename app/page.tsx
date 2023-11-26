
import Button from './components/Button'
import Navbar from './components/Navbar'
import Description from './components/landing/Description'
import Experience from './components/landing/Experience'
import Arrow from './components/Arrow'
import Takeaways from './components/landing/Takeaways'
import CultureValues from './components/landing/CultureValues'
import ContactMe from './components/landing/ContactMe'





export default function Home() {
    return (
        <div>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center justify-between ">

                <Description />
                <div className="flex flex-wrap items-center justify-center">
                    <Button title='Experience' href='#experience' />
                    <Button title='Linkedin' href='https://www.linkedin.com/in/ajit-mehrotra/' />
                    <Button title='GitHub' href='https://github.com/Ajit-Mehrotra?tab=repositories' />
                    <Button title='Resume' href='/resume.pdf' />
                    <Button title='Contact' href='#contact' />
                </div>

                {/* left off here */}
                <Arrow padding="py-[2rem]" color="text-gray-400" width={2} />
                <div ></div>
                <Experience />
                <Arrow padding="py-[2rem]" color="text-gray-400" width={2} />
                <Takeaways />
                <Arrow padding="py-[2rem]" color="text-gray-400" width={2} />
                <CultureValues />
                <Arrow padding="py-[2rem]" color="text-gray-400" width={2} />


                <a
                    href="/Me"
                    target="_blank"
                    className={`link bg-gray-200 text-black transition duration-300 hover:bg-yellow-200 hover:font-bold 1 `}
                >
                    <h1 className=' p-4 text-xl font-light '>Check out all my hobbies and interests!</h1>
                </a>

                <div>


                    {/* <h3 className='text-sm md:text-2xl lg:text-3xl text-center p-4 '>
            <a className="link transition duration-300  hover:text-red-500" href="/Me#gaming"> GAMING </a>
            
            <a className="link transition duration-300  hover:text-red-500" href="/Me#shows"> SHOWS </a>
            
            <a className="link transition duration-300  hover:text-red-500" href="/Me#music"> MUSIC </a>
            
            <a className="link transition duration-300  hover:text-red-500" href="/Me#builds"> BUILDS </a>
            
            <a className="link transition duration-300  hover:text-red-500" href="/Me#food"> FOOD </a>
          </h3> */}

                    {/* <h1 className=' text-xl font-bold sm:text-4xl md:text-6xl lg:text-7xl text-center '>my <h1 className="inline-block text-red-500">stats</h1></h1> */}
                </div>
                <Arrow padding="py-[2rem]" color="text-gray-400" width={2} />
                <ContactMe />
            </main>
        </div>
    )
}
