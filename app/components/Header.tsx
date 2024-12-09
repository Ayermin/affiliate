import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-pink-600">YourBrand</div>
          <div>
            <Link href="#features" className="text-gray-700 hover:text-pink-600 px-3 py-2">Features</Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-pink-600 px-3 py-2">Testimonials</Link>
            <Link href="#faq" className="text-gray-700 hover:text-pink-600 px-3 py-2">FAQ</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

