import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ChevronDown, X } from 'lucide-react';

const motionsList = [
  {
    id: 1,
    title: 'This House Believes AI Will Replace Traditional Education',
    category: 'Technology',
    difficulty: 'Advanced',
    date: 'June 2024',
    description: 'Exploring the impact of artificial intelligence on educational systems worldwide.',
  },
  {
    id: 2,
    title: 'This House Supports Universal Basic Income',
    category: 'Economics',
    difficulty: 'Intermediate',
    date: 'May 2024',
    description: 'Debating the merits and challenges of implementing UBI in modern economies.',
  },
  {
    id: 3,
    title: 'This House Would Ban Social Media For Minors',
    category: 'Social',
    difficulty: 'Beginner',
    date: 'April 2024',
    description: 'Examining the effects of social media on youth mental health and development.',
  },
  {
    id: 4,
    title: 'This House Believes Democracy is the Best Form of Government',
    category: 'Politics',
    difficulty: 'Advanced',
    date: 'March 2024',
    description: 'Analyzing different governance models and their effectiveness.',
  },
  {
    id: 5,
    title: 'This House Would Make Voting Mandatory',
    category: 'Politics',
    difficulty: 'Intermediate',
    date: 'February 2024',
    description: 'Discussing compulsory voting and civic engagement.',
  },
  {
    id: 6,
    title: 'This House Supports Nuclear Energy as Primary Power Source',
    category: 'Environment',
    difficulty: 'Advanced',
    date: 'January 2024',
    description: 'Evaluating nuclear energy in the context of climate change.',
  },
  {
    id: 7,
    title: 'This House Would Legalize All Drugs',
    category: 'Social',
    difficulty: 'Advanced',
    date: 'December 2023',
    description: 'Debating drug legalization policies and their societal impacts.',
  },
  {
    id: 8,
    title: 'This House Believes Tech Giants Should Be Broken Up',
    category: 'Technology',
    difficulty: 'Intermediate',
    date: 'November 2023',
    description: 'Examining antitrust concerns in the technology sector.',
  },
];

const categories = ['All', 'Technology', 'Economics', 'Social', 'Politics', 'Environment'];
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function Motions() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filteredMotions = motionsList.filter((motionItem) => {
    const matchesSearch = motionItem.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || motionItem.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || motionItem.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Intermediate':
        return 'bg-gold-500/10 text-gold-500 border-gold-500/20';
      case 'Advanced':
        return 'bg-red-500/10 text-red-400 border-red-500/20';
      default:
        return 'bg-white/10 text-gray-400 border-white/20';
    }
  };

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
            Debate Topics
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

                  {/* Difficulty Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">Difficulty</label>
                    <div className="flex flex-wrap gap-2">
                      {difficulties.map((difficulty) => (
                        <button
                          key={difficulty}
                          onClick={() => setSelectedDifficulty(difficulty)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            selectedDifficulty === difficulty
                              ? 'bg-gold-500 text-navy-900'
                              : 'bg-white/5 text-gray-300 hover:bg-white/10'
                          }`}
                        >
                          {difficulty}
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
              {/* Category & Difficulty */}
              <div className="flex items-center gap-2 mb-4">
                <span className={`text-xs font-medium ${getCategoryColor(motionItem.category)}`}>
                  {motionItem.category}
                </span>
                <span className="text-gray-600">•</span>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full border ${getDifficultyColor(
                    motionItem.difficulty
                  )}`}
                >
                  {motionItem.difficulty}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gold-500 transition-colors leading-snug">
                {motionItem.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4">{motionItem.description}</p>

              {/* Date */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{motionItem.date}</span>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-gold-500 text-sm font-medium hover:text-gold-400 transition-colors"
                >
                  View Details
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
                setSelectedDifficulty('All');
              }}
              className="text-gold-500 hover:text-gold-400 transition-colors"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
