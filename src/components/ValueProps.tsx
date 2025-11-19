import { ShieldCheck, Truck, Headphones, Award } from 'lucide-react';

export default function ValueProps() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Money-Back Guarantee",
      description: "100% satisfaction guaranteed or your money back"
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over Rs. 3,500 across Pakistan"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated customer service team always ready"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Long-lasting fragrances with finest ingredients"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#0a0a0a] to-black py-20 border-t border-[#c19e66]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-[#c19e66] to-[#8b7043] rounded-full group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={28} className="text-black" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
