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

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Manual navigation resets timer
  interface Testimonial {
    name: string;
    image: string;
    quote: string;
  }

  const testimonials: Testimonial[] = [
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

  function goToIndex(index: number) {
    setActiveIndex(index);
    if (intervalRef.current) { }
  }

  // Previous and Next navigation
  function prev(): void {
    goToIndex((activeIndex - 1 + testimonials.length) % testimonials.length);
  }

  function next(): void {
    goToIndex((activeIndex + 1) % testimonials.length);
  }

  return (
    <section className="relative max-w-3xl mx-auto bg-white py-16 px-6 text-center shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-12">Student Testimonials</h2>

      <div className="flex flex-col items-center">
        <img
          src={testimonials[activeIndex].image}
          alt={testimonials[activeIndex].name}
          className="w-32 h-32 rounded-full object-cover shadow-md mb-6 transition-opacity duration-700"
          key={testimonials[activeIndex].name}
        />
        <blockquote className="text-xl italic text-gray-700 mb-4 max-w-xl">
          “{testimonials[activeIndex].quote}”
        </blockquote>
        <footer className="text-gray-500 text-sm mb-8">
          — {testimonials[activeIndex].name}, MASSU Beneficiary
        </footer>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-8">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            ›
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="mt-8 flex justify-center gap-3">
          {testimonials.map((_, i: number) => (
            <button
              key={i}
              onClick={() => goToIndex(i)}
              className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                activeIndex === i ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
  }
