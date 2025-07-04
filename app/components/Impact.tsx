export default function Impact() {
  const stats = [
    { value: "800+", label: "Students Sponsored" },
    { value: "120+", label: "Mentors Trained" },
    { value: "50+", label: "Schools Reached" },
    { value: "3", label: "Regions of Malawi" },
  ];

  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-extrabold text-blue-900 mb-12">Our Impact</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300"
          >
            <p className="text-4xl font-bold text-blue-700">{stat.value}</p>
            <p className="text-gray-700 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
