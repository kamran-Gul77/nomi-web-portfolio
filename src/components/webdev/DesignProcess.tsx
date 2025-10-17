import { motion } from 'framer-motion';
import { Search, Palette, Code2, Rocket, Settings, CheckCircle } from 'lucide-react';

export default function DesignProcess() {
  const steps = [
    {
      icon: Search,
      title: 'Discovery & Research',
      description: 'Understanding your academy\'s mission, target audience, and unique value proposition',
      duration: '1 week',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Palette,
      title: 'Design & Prototyping',
      description: 'Creating beautiful mockups that reflect your brand and Islamic values',
      duration: '2 weeks',
      gradient: 'from-violet-500 to-purple-600',
    },
    {
      icon: Code2,
      title: 'Development',
      description: 'Building your website with clean code and modern technology stack',
      duration: '3 weeks',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: Settings,
      title: 'Testing & Optimization',
      description: 'Rigorous testing across devices and browsers for perfect performance',
      duration: '1 week',
      gradient: 'from-orange-500 to-red-600',
    },
    {
      icon: Rocket,
      title: 'Launch',
      description: 'Deploying your website and ensuring smooth transition to production',
      duration: '3 days',
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      icon: CheckCircle,
      title: 'Support & Maintenance',
      description: 'Ongoing updates, security patches, and technical support',
      duration: 'Ongoing',
      gradient: 'from-blue-500 to-cyan-600',
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
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-green-400 bg-clip-text text-transparent">
              Our Process
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            A proven 6-step methodology that delivers exceptional results every time
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-violet-500 to-green-500 hidden lg:block" />

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className={`relative grid lg:grid-cols-2 gap-8 mb-16 ${
                  i % 2 === 0 ? '' : 'lg:grid-flow-dense'
                }`}
              >
                <div className={`${i % 2 === 0 ? 'lg:text-right' : 'lg:col-start-2'}`}>
                  <div className="relative inline-block">
                    <div className={`absolute -inset-4 bg-gradient-to-r ${step.gradient} rounded-3xl blur-2xl opacity-20`} />

                    <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all group">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 ${
                          i % 2 === 0 ? 'lg:ml-auto' : ''
                        }`}
                      >
                        <step.icon className="w-8 h-8 text-white" />
                      </motion.div>

                      <div className="inline-block bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1 mb-4">
                        <span className="text-cyan-400 text-sm font-semibold">{step.duration}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{step.description}</p>

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className={`mt-6 h-1 bg-gradient-to-r ${step.gradient} rounded-full ${
                          i % 2 === 0 ? 'lg:ml-auto' : ''
                        }`}
                      />
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.3, type: 'spring' }}
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-xl border-4 border-[#0f1629] relative z-10`}
                  >
                    {i + 1}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="inline-block backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl px-8 py-6">
            <div className="flex items-center gap-6">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                8-10 weeks
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-left">
                <div className="text-white font-semibold mb-1">Average Project Timeline</div>
                <div className="text-gray-400 text-sm">From kickoff to launch</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
