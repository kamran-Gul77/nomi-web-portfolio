import { motion } from 'framer-motion';
import { Heart, Target, Award, Zap } from 'lucide-react';

export default function WebDevAbout() {
  const values = [
    {
      icon: Heart,
      title: 'Purpose-Driven',
      description: 'We understand the spiritual mission behind every Quran Academy',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Target,
      title: 'Conversion Focused',
      description: 'Websites designed to turn visitors into enrolled students',
      gradient: 'from-violet-500 to-purple-600',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'World-class design meets Islamic educational excellence',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed and performance on all devices',
      gradient: 'from-orange-500 to-red-600',
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0d12] via-[#0f1629] to-[#0b0d12]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-green-400 bg-clip-text text-transparent">
              Specialized in Islamic Education
            </span>
          </h2>
          <p className="text-gray-400 text-xl leading-relaxed">
            For the past 5 years, we've dedicated ourselves exclusively to building websites
            for Quran Academies and Islamic educational institutions. We know what works,
            what converts, and what resonates with Muslim parents seeking quality Quranic
            education for their children.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity`} />

                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 mx-auto`}
                >
                  <value.icon className="w-10 h-10 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white text-center mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-3xl blur-3xl" />

          <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12">
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { value: '50+', label: 'Quran Academy Websites Built', color: 'cyan' },
                { value: '98%', label: 'Client Satisfaction Rate', color: 'violet' },
                { value: '2.5x', label: 'Average Enrollment Increase', color: 'green' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="text-center"
                >
                  <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 bg-clip-text text-transparent mb-4`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
