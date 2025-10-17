import { motion } from 'framer-motion';
import { Gauge, Zap, Shield, Award } from 'lucide-react';

export default function PerformanceMetrics() {
  const metrics = [
    {
      icon: Gauge,
      label: 'PageSpeed Score',
      value: 95,
      color: 'cyan',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Zap,
      label: 'Load Time',
      value: 98,
      suffix: '%',
      displayValue: '<2s',
      color: 'violet',
      gradient: 'from-violet-500 to-purple-600',
    },
    {
      icon: Shield,
      label: 'Security Score',
      value: 100,
      color: 'green',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: Award,
      label: 'Accessibility',
      value: 92,
      color: 'orange',
      gradient: 'from-orange-500 to-red-600',
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0d12] via-[#0f1629] to-[#0b0d12]" />

      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500 to-violet-500 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Performance Guaranteed
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            We build websites that are not just beautiful, but blazing fast and secure
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} rounded-3xl blur-2xl opacity-20`} />

              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${metric.gradient} flex items-center justify-center mb-6 mx-auto`}
                >
                  <metric.icon className="w-10 h-10 text-white" />
                </motion.div>

                <div className="mb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, type: 'spring' }}
                    className="text-5xl font-bold mb-2"
                  >
                    <span className={`bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent`}>
                      {metric.displayValue || `${metric.value}${metric.suffix || ''}`}
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${metric.value}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + i * 0.1, duration: 1 }}
                    className="h-2 bg-gradient-to-r from-white/20 to-white/5 rounded-full overflow-hidden mx-auto max-w-[200px]"
                  >
                    <div className={`h-full bg-gradient-to-r ${metric.gradient} rounded-full`} />
                  </motion.div>
                </div>

                <div className="text-gray-400 font-medium">{metric.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Why Performance Matters
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { stat: '53%', desc: 'of users abandon sites that take over 3s to load' },
                { stat: '88%', desc: 'are less likely to return after a bad experience' },
                { stat: '2x', desc: 'higher conversion rates with fast load times' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-3">
                    {item.stat}
                  </div>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
