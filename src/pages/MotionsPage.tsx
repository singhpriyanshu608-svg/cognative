import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ChevronDown, X } from 'lucide-react';

const motionsList = [
  {
    id: 1,
    title: 'This House Believes AI Will Replace Traditional Education',
    category: 'Technology',
    event: 'IITB',
    infoSlide:
      'Definitions, context, statistics, stakeholder analysis and debate framing.',
  },
  {
    id: 2,
    title: 'THBT multilateral development banks should cease financing all greenfield infrastructure in environmentally sensitive regions (Amazon, Congo Basin, Himalayas, etc.)',
    category: 'Economics',
    event: 'IITB',
    infoSlide:
      'Definitions, context, statistics, stakeholder analysis and debate framing.',
  },

  {
   id: 3,
    title: '"THS the usage of statistical risk assessment by US courts in pre-trial decisions"',
    category: 'Economics',
    event: 'IITB',
    infoSlide:
      'Definitions, context, statistics, stakeholder analysis and debate framing.',

  },

  {
    id: 4,
    title: '"THS governments banning foreign ownership of media covering local or national news"',
    category: 'Technology',
    event: 'IITB',
    infoSlide:
      'Definitions, context, statistics, stakeholder analysis and debate framing.',
  }
];

const categories = ['All', 'Technology', 'Economics', 'Social', 'Politics', 'Environment'];
const events = [
  'All',
  'IITB',
  'IITKPD',
  'IITDPD',
  'DTUPD',
  'DTUPD',
];

export default function Motions() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState('All');
  interface Motion {
  id: number;
  title: string;
  category: string;
  event: string;
  infoSlide: string;
}

const [selectedMotion, setSelectedMotion] = useState<Motion | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredMotions = motionsList.filter((motionItem) => {
    const matchesSearch = motionItem.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || motionItem.category === selectedCategory;
    const matchesEvent =
  selectedEvent === 'All' ||
  motionItem.event === selectedEvent;
   return matchesSearch && matchesCategory && matchesEvent;
  });

  

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Technology: 'text-blue-400',
      Economics: 'text-green-400',
      Social: 'text-purple-400',
      Politics: 'text-orange-400',
      Environment: 'text-teal-400',
    };
    return colors[category] || 'text-gray-400';
  };

  return (
    <section id="motions" className="py-24 bg-navy-800 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-800 via-navy-900 to-navy-900" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-4 block">
            
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Motion Archive
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our curated collection of debate motions across various topics and difficulty levels.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            {/* Search Box */}
            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search motions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-gold-500/50 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Filter Toggle */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:border-gold-500/50 transition-colors"
            >
              <Filter className="w-5 h-5" />
              Filters
              <ChevronDown
                className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`}
              />
            </motion.button>
          </div>

          {/* Filter Options */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 glass-card p-6 rounded-xl"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">Category</label>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            selectedCategory === category
                              ? 'bg-gold-500 text-navy-900'
                              : 'bg-white/5 text-gray-300 hover:bg-white/10'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
<div>
  <label className="block text-sm font-medium text-gray-300 mb-3">
    Event
  </label>

  <div className="flex flex-wrap gap-2">
    {events.map((event) => (
      <button
        key={event}
        onClick={() => setSelectedEvent(event)}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
          selectedEvent === event
            ? 'bg-gold-500 text-navy-900'
            : 'bg-white/5 text-gray-300 hover:bg-white/10'
        }`}
      >
        {event}
      </button>
    ))}
  </div>
</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <span className="text-gray-400 text-sm">
            Showing {filteredMotions.length} motion{filteredMotions.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Motions Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredMotions.map((motionItem, index) => (
            <motion.div
              key={motionItem.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="group glass-card p-6 rounded-xl bg-white/5 border border-white/10 hover:border-gold-500/30 transition-all duration-300"
            >
              {/* Category & Event */}
              <div className="flex items-center gap-2 mb-4">
                <span className={`text-xs font-medium ${getCategoryColor(motionItem.category)}`}>
                  {motionItem.category}
                </span>
                <span className="text-gray-600">•</span>
                <span className="text-gold-500 text-xs font-medium">
                {motionItem.event}
              </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gold-500 transition-colors leading-snug">
                {motionItem.title}
              </h3>

              {/* Description */}

              {/* Date */}
              <div className="flex items-center justify-between">
            
                          <motion.button
            whileHover={{ x: 5 }}
            onClick={() => setSelectedMotion(motionItem)}
            className="text-gold-500 text-sm font-medium hover:text-gold-400 transition-colors"
          >
            Info Slide →
          </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredMotions.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 text-lg mb-4">No motions found</div>
            <button
                      onClick={() => {
          setSearchQuery('');
          setSelectedCategory('All');
          setSelectedEvent('All');
        }}
              className="text-gold-500 hover:text-gold-400 transition-colors"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>
      <AnimatePresence>
  {selectedMotion && (
    <motion.div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-navy-900 border border-gold-500/20 rounded-2xl p-8 max-w-3xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">
            {selectedMotion.title}
          </h2>

          <button
            onClick={() => setSelectedMotion(null)}
            className="text-gray-400 hover:text-white"
          >
            <X />
          </button>
        </div>

        <p className="text-gold-500 mb-4">
          {selectedMotion.event}
        </p>

        <p className="text-gray-300 leading-relaxed">
          {selectedMotion.infoSlide}
        </p>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </section>
  );
}
