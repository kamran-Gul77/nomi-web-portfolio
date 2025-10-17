import { motion } from 'framer-motion';
import { Code2, Sparkles, ArrowRight, Globe } from 'lucide-react';

export default function WebDevHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0d12] via-[#0f1629] to-[#0b0d12]" />

      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-cyan-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(45deg, rgba(0,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(0,255,255,0.1) 75%, rgba(0,255,255,0.1)), linear-gradient(45deg, rgba(0,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(0,255,255,0.1) 75%, rgba(0,255,255,0.1))',
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-6 py-3 mb-8"
          >
            <Code2 className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Premium Website Development</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-green-400 bg-clip-text text-transparent">
              Building Digital Homes
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-8"
          >
            <span className="text-white">
              For Quran Academies
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Crafting beautiful, high-converting websites that help Islamic educational institutions
            reach students worldwide with modern technology and spiritual purpose.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold px-10 py-5 rounded-full text-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                View Our Work
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/5 border-2 border-white/10 text-white font-semibold px-10 py-5 rounded-full text-lg hover:bg-white/10 hover:border-cyan-500/50 transition-all flex items-center gap-3"
            >
              <Globe className="w-6 h-6" />
              Start Your Project
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-20"
          >
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 via-violet-500/30 to-green-500/30 rounded-3xl blur-3xl" />

              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-4 shadow-2xl">
                <div className="bg-gradient-to-br from-[#0f1629] to-[#0b0d12] rounded-2xl overflow-hidden border border-white/5">
                  <div className="flex items-center gap-2 bg-white/5 px-4 py-3 border-b border-white/5">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 text-center text-gray-400 text-sm">
                      quran-academy-demo.com
                    </div>
                  </div>

                  <div className="p-8 h-64 relative">
                    <motion.div
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                      }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                      className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-green-500/10"
                    />

                    <div className="relative grid grid-cols-3 gap-4 h-full">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.2 + i * 0.1 }}
                          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4"
                        >
                          <motion.div
                            animate={{
                              height: ['20%', '80%', '40%'],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: i * 0.3,
                            }}
                            className="bg-gradient-to-t from-cyan-500 to-violet-500 rounded"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-gray-400 text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
