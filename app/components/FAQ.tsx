'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQ() {
  const faqs = [
    {
      question: "How does this product fit into my daily routine?",
      answer: "Our product is designed to seamlessly integrate into your daily life. It takes just a few minutes each day, and can be easily incorporated into your existing self-care routine."
    },
    {
      question: "Is this product suitable for sensitive skin?",
      answer: "Yes, our product is formulated with gentle, natural ingredients that are suitable for all skin types, including sensitive skin. However, as with any new product, we recommend doing a patch test first."
    },
    {
      question: "How long until I see results?",
      answer: "While everyone's experience may vary, most of our customers report seeing noticeable improvements within 2-4 weeks of consistent use."
    }
  ]

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-pink-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full bg-white p-4 rounded-lg shadow-md focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-700">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="h-6 w-6 text-pink-500" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-pink-500" />
                )}
              </button>
              {activeIndex === index && (
                <div className="bg-white p-4 rounded-b-lg shadow-md mt-1">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

