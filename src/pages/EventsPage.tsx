import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

const events = [
  {
    title: 'Freshers Debate',
    date: 'August 2024',
    location: 'Main Auditorium, DTU',
    description: 'Annual welcome debate for new members. Showcase your skills and join our community.',
    image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Parliamentary Debate',
    date: 'October 2024',
    location: 'Convention Center, DTU',
    description: 'Premier parliamentary debating competition with teams from across India.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'MUN Collaboration',
    date: 'November 2024',
    location: 'DTU Campus',
    description: 'Joint Model United Nations conference with international delegates.',
    image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Open House Debate',
    date: 'December 2024',
    location: 'Seminar Hall, DTU',
    description: 'Open format discussions on contemporary issues. All topics welcome.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Annual Debate Fest',
    date: 'February 2025',
    location: 'DTU Main Campus',
    description: 'Flagship annual event featuring multiple debate formats and workshops.',
    image: 'https://images.pexels.com/photos/3184351/pexels-photo-3184351.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Speaker Workshop',
    date: 'March 2025',
    location: 'Media Center, DTU',
    description: 'Intensive public speaking workshop led by renowned orators.',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function EventsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-4 block">
              What We Do
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Upcoming Events
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto rounded-full mb-4" />
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our upcoming debates, workshops, and competitions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-24 bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800 via-navy-900 to-navy-900" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass-card overflow-hidden rounded-2xl card-hover"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent" />
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-gold-500 text-navy-900 text-xs font-semibold">
                    {event.date}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gold-500 transition-colors">
                    {event.title}
                  </h3>

                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                    <MapPin size={14} className="text-gold-500" />
                    {event.location}
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-gold-500 font-medium text-sm group-hover:text-gold-400 transition-colors"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
