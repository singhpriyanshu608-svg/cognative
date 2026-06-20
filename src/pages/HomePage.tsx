import { motion } from 'framer-motion';
import { Calendar, Users, Award, Clock, ArrowRight, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import heroImage from "../assets/hero.png";
const stats = [
  { icon: Users, value: '500+', label: 'Members' },
  { icon: Calendar, value: '50+', label: 'Events' },
  { icon: Award, value: '20+', label: 'National Wins' },
  { icon: Clock, value: '10+', label: 'Years Legacy' },
];

const featuredEvents = [
  {
    title: 'Freshers Debate',
    date: 'August 2024',
    image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Parliamentary Debate',
    date: 'October 2024',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Annual Debate Fest',
    date: 'February 2025',
    image: 'https://images.pexels.com/photos/3184351/pexels-photo-3184351.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const achievements = [
  { title: 'National Debate Champions', year: '2024' },
  { title: 'Best Parliamentary Team', year: '2023' },
  { title: 'Inter-College Winners', year: '2023' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/70 to-navy-900" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6 px-6 py-2 rounded-full border border-gold-500/30 bg-gold-500/5"
            >
              <span className="text-gold-500 text-sm font-medium tracking-wider uppercase">
                DTU
              </span>
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              The Debating Society
              <span className="block text-gold-500 mt-2">DTU</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Ideas challenged. Arguments refined. Leaders created.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Link to="/events">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-semibold rounded-full text-lg hover:shadow-xl hover:shadow-gold-500/25 transition-all flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar size={20} />
                  Explore Events
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-full text-lg hover:bg-white/10 backdrop-blur-sm transition-all flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Users size={20} />
                  Join Society
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  className="glass-card px-6 py-6"
                >
                  <stat.icon className="w-8 h-8 text-gold-500 mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 rounded-full bg-gold-500" />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Section */}
      <section className="py-24 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* About Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-4 block">
              Who We Are
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Shaping Voices, Building Leaders
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto rounded-full mb-6" />
            <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
              The Debating Society of DTU is a premier platform for intellectual discourse,
              critical thinking, and persuasive communication. Founded over a decade ago,
              we have grown into one of the most prestigious debating societies in Delhi NCR.
            </p>
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 border border-gold-500 text-gold-500 rounded-full font-medium hover:bg-gold-500/10 transition-all"
              >
                Learn More About Us
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </motion.div>

          {/* Featured Events */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-2 block">
                  Upcoming
                </span>
                <h3 className="text-2xl md:text-3xl font-semibold text-white">
                  Featured Events
                </h3>
              </div>
              <Link to="/events">
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-gold-500 font-medium flex items-center gap-2 hover:text-gold-400 transition-colors"
                >
                  View All
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {featuredEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group glass-card overflow-hidden rounded-xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-gold-500 text-navy-900 text-xs font-semibold">
                      {event.date}
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="text-lg font-semibold text-white group-hover:text-gold-500 transition-colors">
                      {event.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-2xl bg-gradient-to-r from-gold-500/10 via-gold-500/5 to-gold-500/10 border border-gold-500/20"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center">
                  <Trophy className="w-10 h-10 text-navy-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Our Achievements
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {achievements.map((achievement) => (
                      <span
                        key={achievement.title}
                        className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-sm border border-white/10"
                      >
                        {achievement.title} ({achievement.year})
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <Link to="/achievements">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-semibold rounded-full"
                >
                  View All Awards
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
