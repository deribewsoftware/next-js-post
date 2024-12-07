import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800/20 text-gray-800 dark:text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p className="text-sm">
              We are a team of passionate individuals working towards building something amazing. 
              Join us in our journey to create better solutions.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-blue-500">Home</a></li>
              <li><a href="#about" className="hover:text-blue-500">About</a></li>
              <li><a href="#services" className="hover:text-blue-500">Services</a></li>
              <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-sm">Email: deribewsoftware@gmail.com</p>
            <p className="text-sm">Phone: +251930793119</p>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-800 dark:text-white hover:text-blue-500">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-800 dark:text-white hover:text-blue-400">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-800 dark:text-white hover:text-pink-500">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-800 dark:text-white hover:text-blue-700">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-6 text-center">
          <p className="text-sm">© 2024 BrandName. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
