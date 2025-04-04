const TextSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg mx-auto text-center">
          <h2 className="text-3xl font-light mb-8">About Us</h2>
          <p className="text-lg mb-8">
            Fitzgerald Home Interiors is a full-service interior design firm specializing in creating beautiful, functional spaces that reflect your unique style and personality. Based in the greater Boston area, we work with clients throughout New England to transform their homes into elegant, comfortable living spaces.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div>
              <h3 className="text-xl font-light mb-6">Our Services</h3>
              <ul className="list-none space-y-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                  Interior Design Consultation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                  Space Planning
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                  Custom Furniture Design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                  Color Consultation
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-light mb-6">Why Choose Us</h3>
              <ul className="list-none space-y-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                  Years of Experience
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                  Personalized Approach
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                  Attention to Detail
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                  Quality Craftsmanship
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TextSection 