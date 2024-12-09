import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Busy Mom & Entrepreneur",
      content: "This product has been a game-changer for me. It fits perfectly into my hectic schedule and has made such a positive impact on my life!",
      image: "/placeholder.svg?height=80&width=80"
    },
    {
      name: "Emily Chen",
      role: "Yoga Instructor",
      content: "I've recommended this to all my clients. It's the perfect complement to a balanced, healthy lifestyle. The results speak for themselves!",
      image: "/placeholder.svg?height=80&width=80"
    }
  ]

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">
          Hear from Our Community
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  width={80} 
                  height={80} 
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-bold text-pink-600">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

