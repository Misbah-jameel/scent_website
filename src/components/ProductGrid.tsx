import { Star, Heart } from 'lucide-react';

export default function ProductGrid() {
  const products = [
    {
      id: 1,
      name: "Oud Royale",
      brand: "Inspired by Tom Ford",
      price: "Rs. 1,999",
      originalPrice: "Rs. 3,999",
      rating: 4.8,
      reviews: 234,
      image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      name: "Velvet Rose",
      brand: "Inspired by Chanel",
      price: "Rs. 1,799",
      originalPrice: "Rs. 3,599",
      rating: 4.9,
      reviews: 189,
      image: "https://images.pexels.com/photos/3738386/pexels-photo-3738386.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      name: "Noir Essence",
      brand: "Inspired by Dior",
      price: "Rs. 2,199",
      originalPrice: "Rs. 4,399",
      rating: 4.7,
      reviews: 156,
      image: "https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      name: "Amber Woods",
      brand: "Inspired by Giorgio Armani",
      price: "Rs. 1,899",
      originalPrice: "Rs. 3,799",
      rating: 4.6,
      reviews: 201,
      image: "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 5,
      name: "Silver Shadow",
      brand: "Inspired by Creed",
      price: "Rs. 2,299",
      originalPrice: "Rs. 4,599",
      rating: 4.9,
      reviews: 278,
      image: "https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 6,
      name: "Azure Breeze",
      brand: "Inspired by Versace",
      price: "Rs. 1,699",
      originalPrice: "Rs. 3,399",
      rating: 4.5,
      reviews: 143,
      image: "https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 7,
      name: "Mystic Musk",
      brand: "Inspired by Yves Saint Laurent",
      price: "Rs. 1,999",
      originalPrice: "Rs. 3,999",
      rating: 4.8,
      reviews: 167,
      image: "https://images.pexels.com/photos/3685538/pexels-photo-3685538.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 8,
      name: "Golden Saffron",
      brand: "Inspired by Bvlgari",
      price: "Rs. 2,099",
      originalPrice: "Rs. 4,199",
      rating: 4.7,
      reviews: 192,
      image: "https://images.pexels.com/photos/3685524/pexels-photo-3685524.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section className="bg-[#0a0a0a] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Collection
          </h2>
          <p className="text-gray-400 text-lg">
            Luxury fragrances inspired by the world's most prestigious brands
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gradient-to-b from-[#1a1a1a] to-black border border-gray-800 rounded-lg overflow-hidden hover:border-[#c19e66] transition-all duration-300 group"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <button className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-[#c19e66] hover:text-black transition-all">
                  <Heart size={18} />
                </button>
                {product.originalPrice && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-xs font-bold rounded-sm">
                    SALE
                  </div>
                )}
              </div>
              <div className="p-4">
                <p className="text-[#c19e66] text-xs font-medium mb-1">
                  {product.brand}
                </p>
                <h3 className="text-white font-semibold mb-2 group-hover:text-[#c19e66] transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mb-3">
                  <Star size={14} className="fill-[#c19e66] text-[#c19e66]" />
                  <span className="text-white text-sm font-medium">{product.rating}</span>
                  <span className="text-gray-500 text-xs">({product.reviews})</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-white font-bold text-lg">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-500 text-sm line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
                <button className="w-full bg-[#c19e66] text-black py-2 rounded-sm font-semibold hover:bg-[#d4b479] transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-[#c19e66] text-[#c19e66] px-8 py-3 rounded-sm font-semibold hover:bg-[#c19e66] hover:text-black transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
