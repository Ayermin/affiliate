import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-2 text-pink-600">
            Discover Your Best Self
          </h2>
          <h3 className="text-2xl mb-8 text-gray-600">
            Empower your journey with our transformative solution.
          </h3>
          <Link href="#" className="bg-pink-500 text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:bg-pink-600">
            Start Your Journey
          </Link>
        </div>
        <div className="md:w-1/2">
          <Image 
            src="/placeholder.svg?height=400&width=400" 
            alt="Happy woman using our product" 
            width={400} 
            height={400}
            className="rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

