import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import Footer from '../components/Footer';

const juniorCouncil = [
  {
    name: 'Aarav Sharma',
    position: 'Junior Coordinator',
    image: '/j1.png',
    linkedin: '#',
  },
  {
    name: 'Priya Patel',
    position: 'Junior Coordinator',
    image: 'https://images.pexels.com/photo-1494790108377-be9c29b29330?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
  },
  {
    name: 'Rahul Singh',
    position: 'Event Manager',
    image: 'https://images.pexels.com/photo-1500648767791-00dcc994a860?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
  },
  {
    name: 'Sneha Gupta',
    position: 'Content Lead',
    image: 'https://images.pexels.com/photo-1438761681033-6461ffad8d80?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
  },
  {
    name: 'Vikram Reddy',
    position: 'PR Executive',
    image: 'https://images.pexels.com/photo-1472099625385-6540b5a8f50c?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
  },
  {
    name: 'Ananya Verma',
    position: 'Social Media Head',
    image: 'https://images.pexels.com/photo-1534528741775-53994a69daeb?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
  },
  {
    name: 'Karan Malhotra',
    position: 'Debate Trainer',
    image: 'https://images.pexels.com/photo-1506794778202-cad84cf45f1d?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
  },
  {
    name: 'Ishita Joshi',
    position: 'Outreach Lead',
    image: 'https://images.pexels.com/photo-1544005313-94ddf0286df2?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
  },
];

export default function JuniorCouncilPage() {
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
              Our Team
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Junior Council
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto rounded-full mb-4" />
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our dedicated junior members who drive innovation and bring fresh perspectives to the society.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Council Grid */}
      <section className="py-24 bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800 via-navy-900 to-navy-900" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {juniorCouncil.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="glass-card overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/30 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent" />

                    <motion.a
                      href={member.linkedin}
                      whileHover={{ scale: 1.1 }}
                      className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <Linkedin className="w-5 h-5 text-navy-900" />
                    </motion.a>
                  </div>

                  <div className="p-5 text-center">
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-gold-500 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-400">{member.position}</p>
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
