const testimonials = [
    {
      name: "John D.",
      text: "Cognitive Automation Systems transformed our internal processes.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sarah M.",
      text: "Highly professional team with excellent automation expertise.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Alex P.",
      text: "The automation solutions provided saved us a lot of time and resources.",
      image: "https://randomuser.me/api/portraits/men/56.jpg",
    },
  ];
  
  export default function Testimonials() {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-black font-semibold text-center mb-12">
            What Our Clients Say
          </h3>
  
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mb-4 object-cover"
                />
                <p className="text-gray-700 mb-4">“{t.text}”</p>
                <p className="font-semibold text-gray-900">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  