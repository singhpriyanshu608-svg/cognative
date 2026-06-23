import { motion } from 'framer-motion';
import {
  FileText,
  BookOpen,
  Scale,
  Users,
  Award,
} from 'lucide-react';
import { ExternalLink } from 'lucide-react';

const RULEBOOK_LINK =
  'https://drive.google.com/file/d/YOUR_FILE_ID/view';


const rules = [
  {
    icon: BookOpen,
    title: 'Tournament Guidelines',
    description:
      'Complete rules and regulations for participating in debate tournaments.',
  },
  {
    icon: Scale,
    title: 'Judging Criteria',
    description:
      'Detailed scoring rubric and evaluation parameters for judges.',
  },
  {
    icon: Users,
    title: 'Team Formation',
    description:
      'Guidelines for team composition and registration requirements.',
  },
  {
    icon: Award,
    title: 'Speaker Rules',
    description:
      'Time limits, speaking order, and conduct expectations for speakers.',
  },
];

export default function RuleBook() {
  console.log("RULEBOOK COMPONENT LOADED");
  
  return (
    <section
      id="rulebook"
      className="py-24 bg-navy-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

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
            Resources
          </span>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Rule Book
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto rounded-full mb-4" />

          <p className="text-gray-400 max-w-2xl mx-auto">
            Official guidelines and regulations for all society activities and
            competitions.
          </p>
        </motion.div>

        {/* Featured Rulebook Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="glass-card p-8 md:p-12 rounded-2xl bg-gradient-to-r from-gold-500/10 via-gold-500/5 to-gold-500/10 border border-gold-500/20 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* PDF Icon */}
              <div className="w-24 h-28 rounded-xl bg-gradient-to-br from-navy-700 to-navy-800 border border-white/10 flex items-center justify-center relative shadow-2xl">
                <FileText className="w-10 h-10 text-gold-500" />
                <div className="absolute bottom-2 text-[10px] text-gray-400">
                  PDF
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Official Rule Book 2024-25
                </h3>

                            <p className="text-gray-400 mb-4">
              Official handbook containing all rules, regulations and competition
              guidelines for Cognitive Minds events and tournaments.
            </p>

            <p className="text-sm text-gold-500">
              Google Drive PDF • Updated 2024-25
            </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
  <motion.a
    href={RULEBOOK_LINK}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-semibold rounded-full shadow-lg hover:shadow-gold-500/20 transition-all"
  >
    <ExternalLink className="w-5 h-5" />
    Open Rule Book
  </motion.a>
</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Rule Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rules.map((rule, index) => (
            <motion.div
              key={rule.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="glass-card p-6 rounded-xl bg-white/5 border border-white/10 hover:border-gold-500/30 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <rule.icon className="w-7 h-7 text-gold-500" />
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gold-500 transition-colors">
                  {rule.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {rule.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            For any clarifications or queries regarding the rule book, please
            contact the Senior Council at{' '}
            <a
              href="mailto:debating@dtu.ac.in"
              className="text-gold-500 hover:underline"
            >
              debating@dtu.ac.in
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}