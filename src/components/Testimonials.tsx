import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rohan Gupta',
    role: 'Alumni, Batch of 2022',
    image: 'https://images.pexels.com/photo-1507003211169-0a1dd7228f2d?auto=compress&cs=tinysrgb&w=150',
    quote: 'The Debating Society transformed my college experience. The skills I developed here have been invaluable in my career as a corporate lawyer. The mentorship and exposure I received were unparalleled.',
  },
  {
    id: 2,
    name: 'Ananya Singh',
    role: 'Alumni, Batch of 2021',
    image: 'https://images.pexels.com/photo-1494790108377-be9c29b29330?auto=compress&cs=tinysrgb&w=150',
    quote: 'Being part of the society taught me to think critically and articulate ideas with confidence. It prepared me for my role in policy making and gave me the courage to voice my opinions.',
  },
  {
    id: 3,
    name: 'Karthik Menon',
    role: 'Alumni, Batch of 2020',
    image: 'https://images.pexels.com/photo-1500648767791-00dcc994a860?auto=compress&cs=tinysrgb&w=150',
    quote: 'The friendships and professional network I built through the society continue to support me today. The rigorous training and competitions sharpened my analytical abilities.',
  },
  {
    id: 4,
    name: 'Priyanka Sharma',
    role: 'Alumni, Batch of 2023',
    image: 'https://images.pexels.com/photo-1438761681033-6461ffad8d80?auto=compress&cs=tinysrgb&w=150',
    quote: 'From a shy fresher to a confident speaker, this society shaped who I am today. The supportive community pushed me to excel in ways I never imagined possible.',
  },
  {
    id: 5,
    name: 'Arjun Reddy',
    role: 'Alumni, Batch of 2019',
    image: 'https://images.pexels.com/photo-1472099625385-6540b5a8f50c?auto=compress&cs=tinysrgb&w=150',
    quote: 'The debating techniques I learned here helped me crack my UPSC interviews. The society creates leaders who can think on their feet and present compelling arguments.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Voices of Impact
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Testimonials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto rounded-full" />
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 md:p-12 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 border border-white/10"
            >
              {/* Quote Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center mb-6 mx-auto">
                <Quote className="w-8 h-8 text-navy-900" />
              </div>

              {/* Quote Text */}
              <blockquote className="text-lg md:text-xl text-gray-300 text-center leading-relaxed mb-8">
                "{testimonials[current].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-gold-500/20 mb-4"
                />
                <h4 className="text-white font-semibold text-lg">{testimonials[current].name}</h4>
                <p className="text-gray-400 text-sm">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToPrevious}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold-500 hover:text-navy-900 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? 'w-4 bg-gold-500' : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold-500 hover:text-navy-900 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
