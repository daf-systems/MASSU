'use client';
import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    name: "Thoko Banda",
    image: "/images/student1.jpg",
    quote:
      "Thanks to MASSU’s bursary and mentorship, I’m now studying medicine at university!",
  },
  {
    name: "Chifundo Mvula",
    image: "/images/student2.jpg",
    quote:
      "MASSU helped me finish secondary school when I had lost all hope.",
  },
  {
    name: "Madalitso Nkhoma",
    image: "/images/student3.jpg",
    quote:
      "Through the Digital Literacy program, I built my first website and now teach others!",
  },
];

export default function HorizontalTestimonialSpotlight() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // ✅ FIXED

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current); // ✅ FIXED
      }
    };
  }, []);

  const { name, quote } = testimonials[activeIndex];

  return (
    <section className="flex flex-col items-center justify-center px-4 py-16 bg-gray-50 min-h-[350px]">
      {/* Image Row */}
      <div className="flex gap-8 mb-6 relative z-10">
        {testimonials.map((testimonial, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              className={`transition-transform duration-500 transform cursor-pointer ${
                isActive ? 'scale-110 z-20' : 'scale-90 opacity-50 z-10'
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          );
        })}
      </div>

      {/* Testimonial Quote */}
      <blockquote className="text-center max-w-2xl text-gray-800 italic font-serif text-base leading-relaxed mb-2 transition-opacity duration-500">
        “{quote}”
      </blockquote>

      <footer className="text-gray-700 font-semibold text-sm">
        — {name}, MASSU Beneficiary
      </footer>

      {/* Dots */}
      <div className="flex gap-3 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-colors duration-300 shadow-sm ${
              activeIndex === i ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
