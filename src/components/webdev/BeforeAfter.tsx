import { motion } from 'framer-motion';
import { ArrowRight, X, Check } from 'lucide-react';

export default function BeforeAfter() {
  const comparisons = [
    {
      before: 'Outdated design driving visitors away',
      after: 'Modern, engaging UI that converts',
    },
    {
      before: 'Slow loading times frustrating users',
      after: '95+ PageSpeed score on all pages',
    },
    {
      before: 'Not mobile-friendly, losing 60% traffic',
      after: 'Perfect responsive design for all devices',
    },
    {
      before: 'Manual enrollment & payment processing',
      after: 'Automated systems saving 20+ hours/week',
    },
    {
      before: 'Poor SEO, invisible on Google',
      after: 'Top rankings for key search terms',
    },
    {
      before: 'No analytics or tracking',
      after: 'Comprehensive dashboard with insights',
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0b0d12]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-green-400 bg-clip-text text-transparent">
              Before & After
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            See the transformation we bring to Quran Academy websites
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6">
          {comparisons.map((comparison, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative"
            >
              <div className="grid md:grid-cols-[1fr,auto,1fr] gap-6 items-center">
                <motion.div
                  whileHover={{ x: -5 }}
                  className="backdrop-blur-xl bg-red-500/5 border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <X className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <div className="text-red-400 text-xs font-semibold mb-2">BEFORE</div>
                      <p className="text-gray-300">{comparison.before}</p>
                    </div>
                  </div>
                </motion.div>

                <div className="hidden md:block">
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 flex items-center justify-center"
                  >
                    <ArrowRight className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="backdrop-blur-xl bg-green-500/5 border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <div className="text-green-400 text-xs font-semibold mb-2">AFTER</div>
                      <p className="text-gray-300">{comparison.after}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-block backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-4">
              Ready for Your Transformation?
            </div>
            <p className="text-gray-400 mb-6">
              Let's discuss how we can elevate your Quran Academy's online presence
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold px-10 py-4 rounded-full"
            >
              Schedule Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
