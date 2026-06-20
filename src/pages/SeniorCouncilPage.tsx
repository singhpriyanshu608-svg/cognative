import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import Footer from '../components/Footer';

const seniorCouncil = [
  {
    name: 'Modi',
    position: 'President',
    image: '/modiji2.png',
    bio:"Leading the society with vision and passion, fostering meaningful discourse and contributing towards Viksit Bharat 2047.",
    email: '#',
  },
  {
    name: 'Simran Kaur',
    position: 'Vice President',
    image: '/samay.png',
    bio: 'Driving strategic initiatives and fostering member engagement.',
    linkedin: '#',
    email: '#',
  },
  {
    name: 'Arjun Mehta',
    position: 'Secretary',
    image: '/sunil.png',
    bio: 'Managing operations and ensuring smooth execution of all activities.',
    linkedin: '#',
    email: '#',
  },
  {
    name: 'Neha Singh',
    position: 'Treasurer',
    image: '/udit.png',
    bio: 'Overseeing financial operations and resource allocation.',
    linkedin: '#',
    email: '#',
  },
  {
    name: 'Rohit Sharma',
    position: 'Convenor',
    image: '/kunal.png',
    bio: 'Coordinating with external bodies and managing partnerships.',
    linkedin: '#',
    email: '#',
  },
];

export default function SeniorCouncilPage() {
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
              Leadership
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Senior Council
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto rounded-full mb-4" />
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our executive board of experienced leaders guiding the society toward excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* President Featured */}
      <section className="py-24 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="glass-card p-8 md:p-12 rounded-2xl bg-gradient-to-r from-gold-500/10 via-gold-500/5 to-gold-500/10 border border-gold-500/20 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden ring-4 ring-gold-500/30">
                    <img
                      src={seniorCouncil[0].image}
                      alt={seniorCouncil[0].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-lg bg-gold-500 flex items-center justify-center">
                    <span className="text-navy-900 font-bold text-sm">1</span>
                  </div>
                </div>
                <div className="text-center md:text-left flex-1">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-500 text-sm font-medium mb-3">
                    President
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                    {seniorCouncil[0].name}
                  </h3>
                  <p className="text-gray-400 mb-4">{seniorCouncil[0].bio}</p>
                  <div className="flex items-center gap-4 justify-center md:justify-start">
                    <motion.a
                      href={seniorCouncil[0].linkedin}
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 text-white transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={seniorCouncil[0].email}
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 text-white transition-all"
                    >
                      <Mail className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Members */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seniorCouncil.slice(1).map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="glass-card p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/30 transition-all duration-300 text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="w-24 h-24 rounded-xl overflow-hidden ring-2 ring-gold-500/20 group-hover:ring-gold-500/50 transition-all">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-gold-500 text-xs font-medium border border-white/10 mb-3">
                    {member.position}
                  </span>

                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gold-500 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{member.bio}</p>

                  <div className="flex items-center gap-2 justify-center">
                    <motion.a
                      href={member.linkedin}
                      whileHover={{ scale: 1.1 }}
                      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 text-white transition-all"
                    >
                      <Linkedin className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={member.email}
                      whileHover={{ scale: 1.1 }}
                      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 text-white transition-all"
                    >
                      <Mail className="w-4 h-4" />
                    </motion.a>
                  </div>
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
