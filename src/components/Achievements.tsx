import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Star } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'National Debate Champions',
    description: 'First place at All India Inter-University Debate Championship 2024',
    year: '2024',
  },
  {
    icon: Medal,
    title: 'Best Parliamentary Team',
    description: 'Recognized as the top parliamentary debating team in Delhi NCR',
    year: '2023',
  },
  {
    icon: Award,
    title: 'Inter-College Winners',
    description: 'Sweeping victories at premier inter-college competitions across India',
    year: '2023',
  },
  {
    icon: Star,
    title: 'Speaker Awards',
    description: 'Multiple Best Speaker awards at national and international levels',
    year: '2024',
  },
  {
    icon: Trophy,
    title: 'MUN Excellence',
    description: 'Outstanding delegation awards at prestigious Model UN conferences',
    year: '2024',
  },
  {
    icon: Medal,
    title: 'Youth Parliament',
    description: 'Winners of National Youth Parliament Competition',
    year: '2022',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-navy-800 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-800 via-navy-900 to-navy-900" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Our Legacy
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Achievements & Awards
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto rounded-full" />
        </motion.div>

        {/* Achievement Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                boxShadow: '0 25px 50px -12px rgba(212, 175, 55, 0.15)',
              }}
              className="group glass-card p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-7 h-7 text-navy-900" />
                </div>
              </div>

              {/* Year Badge */}
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gold-500/10 text-gold-500 border border-gold-500/20 mb-4">
                {achievement.year}
              </span>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gold-500 transition-colors">
                {achievement.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {achievement.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl border border-gold-500/20" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trophy Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 glass-card p-8 md:p-12 rounded-2xl bg-gradient-to-r from-gold-500/10 via-gold-500/5 to-gold-500/10 border border-gold-500/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center">
                <Trophy className="w-10 h-10 text-navy-900" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  20+ National Level Wins
                </h3>
                <p className="text-gray-400">
                  Our members have consistently excelled at prestigious national competitions
                </p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-semibold rounded-full"
            >
              View All Awards
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
