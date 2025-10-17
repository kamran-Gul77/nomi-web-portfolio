import { motion } from 'framer-motion';
import { MessageSquare, FileText, Pencil, Code2, TestTube, Rocket, HeadphonesIcon } from 'lucide-react';

export default function ClientJourney() {
  const journey = [
    {
      week: 'Week 1',
      phase: 'Discovery Call',
      icon: MessageSquare,
      activities: ['Understand your goals', 'Analyze competitors', 'Define target audience'],
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      week: 'Week 2',
      phase: 'Planning & Strategy',
      icon: FileText,
      activities: ['Create sitemap', 'Content strategy', 'Technical requirements'],
      gradient: 'from-violet-500 to-purple-600',
    },
    {
      week: 'Week 3-4',
      phase: 'Design Phase',
      icon: Pencil,
      activities: ['Wireframes', 'Visual design', 'Client feedback & revisions'],
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      week: 'Week 5-7',
      phase: 'Development',
      icon: Code2,
      activities: ['Frontend development', 'Backend integration', 'Feature implementation'],
      gradient: 'from-orange-500 to-red-600',
    },
    {
      week: 'Week 8',
      phase: 'Testing & QA',
      icon: TestTube,
      activities: ['Device testing', 'Performance optimization', 'Bug fixes'],
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      week: 'Week 9',
      phase: 'Launch',
      icon: Rocket,
      activities: ['Deploy to production', 'DNS configuration', 'Go live celebration'],
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      week: 'Ongoing',
      phase: 'Support',
      icon: HeadphonesIcon,
      activities: ['24/7 monitoring', 'Regular updates', 'Technical support'],
      gradient: 'from-indigo-500 to-violet-600',
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
              Your Journey With Us
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            A transparent, collaborative process from concept to launch and beyond
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {journey.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative"
              >
                {i < journey.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                    className="absolute left-[47px] md:left-[67px] top-24 w-px bg-gradient-to-b from-cyan-500 to-violet-500 -z-10"
                    style={{ height: '120px' }}
                  />
                )}

                <div className="flex items-start gap-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, type: 'spring' }}
                    className="relative flex-shrink-0"
                  >
                    <div className={`w-24 h-24 md:w-32 md:h-32 rounded-2xl md:rounded-3xl bg-gradient-to-br ${step.gradient} flex items-center justify-center`}>
                      <step.icon className="w-10 h-10 md:w-14 md:h-14 text-white" />
                    </div>

                    <div className="absolute -bottom-3 -right-3 bg-[#0b0d12] rounded-full px-3 py-1 border border-white/20">
                      <span className={`text-xs font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                        {step.week}
                      </span>
                    </div>
                  </motion.div>

                  <div className="flex-1">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:border-white/20 transition-all"
                    >
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{step.phase}</h3>

                      <div className="space-y-3">
                        {step.activities.map((activity, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + i * 0.1 + idx * 0.05 }}
                            className="flex items-center gap-3"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.gradient}`} />
                            <span className="text-gray-300">{activity}</span>
                          </motion.div>
                        ))}
                      </div>

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + i * 0.1, duration: 0.8 }}
                        className={`mt-6 h-1 bg-gradient-to-r ${step.gradient} rounded-full`}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
