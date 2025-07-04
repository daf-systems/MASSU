export default function Partners() {
  const partners = [
    { name: "UNICEF", logo: "/images/partners/unicef-2.svg" },
    { name: "Airtel", logo: "/images/partners/airtel.jpg" },
    { name: "Mzuzu University", logo: "/images/partners/mzuni.png" },
    { name: "Ministry of Education", logo: "/images/partners/usaid.jpg" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-10">Our Trusted Partners</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We proudly collaborate with organizations that are transforming education and supporting students in Malawi.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center justify-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition duration-300 flex justify-center items-center h-28"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                title={partner.name}
                className="max-h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
