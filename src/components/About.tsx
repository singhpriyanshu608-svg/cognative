import { motion } from 'framer-motion';
import { Target, Lightbulb, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-navy-900 relative overflow-hidden">
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
            Who We Are
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            About Our Society
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Shaping Voices, Building Leaders
            </h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              The Debating Society of DTU is a premier platform for intellectual discourse,
              critical thinking, and persuasive communication. Founded over a decade ago,
              we have grown into one of the most prestigious debating societies in Delhi NCR,
              nurturing minds that go on to become leaders, policymakers, and change-makers.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our society provides a nurturing environment where students learn the art of
              argumentation, public speaking, and parliamentary debating. Through workshops,
              competitions, and collaborative events, we empower members to voice their
              opinions with confidence and conviction.
            </p>

            {/* Vision & Mission */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="p-3 rounded-lg bg-gold-500/10">
                  <Target className="w-6 h-6 text-gold-500" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Our Vision</h4>
                  <p className="text-gray-400 text-sm">
                    To be the leading platform for fostering intellectual growth and
                    developing future leaders through the power of debate and dialogue.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="p-3 rounded-lg bg-gold-500/10">
                  <Lightbulb className="w-6 h-6 text-gold-500" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Our Mission</h4>
                  <p className="text-gray-400 text-sm">
                    To create an inclusive community where every voice matters, ideas are
                    challenged constructively, and members develop skills that last a lifetime.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 border border-gold-500 text-gold-500 rounded-full font-medium hover:bg-gold-500/10 transition-all"
            >
              Read More
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>

          {/* Right Content - Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Debate session"
                  className="w-full h-64 object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden shadow-2xl mt-8"
              >
                <img
                  src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Team collaboration"
                  className="w-full h-64 object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden shadow-2xl -mt-4"
              >
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Competition moment"
                  className="w-full h-48 object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden shadow-2xl mt-4"
              >
                <img
                  src="https://images.pexels.com/photos/3184351/pexels-photo-3184351.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Award ceremony"
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -bottom-6 -left-6 glass-card p-4 gold-glow"
            >
              <div className="text-3xl font-bold text-gold-500">10+</div>
              <div className="text-sm text-gray-300">Years of Excellence</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
