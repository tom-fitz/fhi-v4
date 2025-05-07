const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-light mb-4">Contact</h3>
            <p className="mb-2">30 Rosemary Street</p>
            <p className="mb-2">Needham, MA 02494</p>
            <p className="mb-2">(617) 738-1000</p>
            <p>info@fitzgeraldhomeinteriors.com</p>
          </div>
          
          <div>
            <h3 className="text-xl font-light mb-4">Hours</h3>
            <p className="mb-2">Monday - Friday: 9am - 5pm</p>
            <p className="mb-2">Saturday: By Appointment</p>
            <p>Sunday: Closed</p>
          </div>
          
          <div>
            <h3 className="text-xl font-light mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300 transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Pinterest
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Fitzgerald Home Interiors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 