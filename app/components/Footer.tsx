export default function Footer() {
  return (
    <footer className="bg-pink-600 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">YourBrand</h3>
            <p className="text-sm">Empowering you to be your best self.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li><a href="#features" className="hover:text-pink-200">Features</a></li>
              <li><a href="#testimonials" className="hover:text-pink-200">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-pink-200">FAQ</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-bold mb-2">Connect With Us</h4>
            <p className="text-sm">Email: hello@yourbrand.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} YourBrand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

