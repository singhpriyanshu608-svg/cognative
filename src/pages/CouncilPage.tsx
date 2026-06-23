const juniorCouncil = [
  {
    name: 'Aarav Sharma',
    position: 'Junior Coordinator',
    image: '/j1.png',
    linkedin: '#',
    bio: 'Some description',
    email: '#'
  },
  {
    name: 'Priya Patel',
    position: 'Junior Coordinator',
    image: 'https://images.pexels.com/photo-1494790108377-be9c29b29330?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    bio: 'Some description',
    email: '#'
  },
  {
    name: 'Rahul Singh',
    position: 'Event Manager',
    image: 'https://images.pexels.com/photo-1500648767791-00dcc994a860?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    bio: 'Some description',
    email: '#'
  },
  {
    name: 'Sneha Gupta',
    position: 'Content Lead',
    image: 'https://images.pexels.com/photo-1438761681033-6461ffad8d80?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    bio: 'Some description',
    email: '#'
  },
  {
    name: 'Vikram Reddy',
    position: 'PR Executive',
    image: 'https://images.pexels.com/photo-1472099625385-6540b5a8f50c?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    bio: 'Some description',
    email: '#'
  },
  {
    name: 'Ananya Verma',
    position: 'Social Media Head',
    image: 'https://images.pexels.com/photo-1534528741775-53994a69daeb?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    bio: 'Some description',
    email: '#'
  },
  {
    name: 'Karan Malhotra',
    position: 'Debate Trainer',
    image: 'https://images.pexels.com/photo-1506794778202-cad84cf45f1d?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    bio: 'Some description',
    email: '#'
  },
  {
    name: 'Ishita Joshi',
    position: 'Outreach Lead',
    image: 'https://images.pexels.com/photo-1544005313-94ddf0286df2?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    bio: 'Some description',
    email: '#'
  },
];

const seniorCouncil = [
  {
    name: 'Modi',
    position: 'President',
    image: '/modiji2.png',
    bio: 'Leading the society with vision and passion...',
    linkedin: '#',
    email: '#',
  },
  {
    name: 'Simran Kaur',
    position: 'Vice President',
    image: '/samay.png',
    bio: 'Driving strategic initiatives...',
    linkedin: '#',
    email: '#',
  },

  {
    name: 'Simran Kaur',
    position: 'Secretary',
    image: '/samay.png',
    bio: 'Driving strategic initiatives...',
    linkedin: '#',
    email: '#',
  },

  {
    name: 'Simran Kaur',
    position: 'Treasurer',
    image: '/samay.png',
    bio: 'Driving strategic initiatives...',
    linkedin: '#',
    email: '#',
  },

];


import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import Footer from '../components/Footer';

export default function CouncilPage() {
  return (
    <div className="pt-20">

      {/* HERO */}
      <section className="py-16 bg-navy-900 relative overflow-hidden">
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
          <div className="text-center">
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Team
            </span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Council
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto rounded-full mb-4" />

            <p className="text-gray-400 max-w-2xl mx-auto">
              Meet the leaders and members driving Cognitive Minds forward.
            </p>
          </div>
        </div>
      </section>

      {/* SENIOR COUNCIL */}
      <section className="py-24 bg-navy-900">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
  {seniorCouncil.map((member) => (
    <motion.div
      key={member.name}
      whileHover={{ y: -8 }}
      className="group"
    >
      <div className="glass-card p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/30 transition-all duration-300 text-center h-full">

        <img
          src={member.image}
          alt={member.name}
          className="w-28 h-28 rounded-2xl object-cover mx-auto mb-4"
        />

        <span className="inline-block px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-xs mb-3">
          {member.position}
        </span>

        <h3 className="text-xl font-semibold text-white mb-2">
          {member.name}
        </h3>

        <p className="text-gray-400 text-sm mb-4">
          {member.bio}
        </p>

        <div className="flex justify-center gap-3">
          <a
            href={member.linkedin}
            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-all"
          >
            <Linkedin size={16} />
          </a>

          <a
            href={member.email}
            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-all"
          >
            <Mail size={16} />
          </a>
        </div>

      </div>
    </motion.div>
  ))}
</div>
      </section>

      {/* JUNIOR COUNCIL */}

      <section className="py-24 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Junior Council
            </h2>

            <p className="text-gray-400">
              Dedicated members bringing fresh ideas and innovation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {juniorCouncil.map((member) => (
              <div
                key={member.name}
                className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />

                <div className="p-5 text-center">
                  <h3 className="text-white font-semibold mb-1">
                    {member.name}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {member.position}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}