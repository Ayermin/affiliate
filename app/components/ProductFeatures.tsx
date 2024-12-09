import { Heart, Clock, Shield, Sparkles } from 'lucide-react'

export default function ProductFeatures() {
  const features = [
    { icon: Heart, text: "Self-care focused approach" },
    { icon: Clock, text: "Quick and easy to incorporate into your routine" },
    { icon: Shield, text: "Safe and natural ingredients" },
    { icon: Sparkles, text: "Visible results in just weeks" }
  ]

  return (
    <section id="features" className="py-20 bg-pink-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">
          Why You'll Love It
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <feature.icon className="h-12 w-12 text-pink-500 mx-auto mb-4" />
              <p className="text-lg text-gray-700">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

