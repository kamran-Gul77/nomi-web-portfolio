import { motion } from 'framer-motion';
import { Code2, Database, Smartphone, Lock, Zap, Palette } from 'lucide-react';

export default function TechStack() {
  const technologies = [
    {
      category: 'Frontend',
      icon: Code2,
      color: 'cyan',
      gradient: 'from-cyan-500 to-blue-600',
      tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      category: 'Backend',
      icon: Database,
      color: 'violet',
      gradient: 'from-violet-500 to-purple-600',
      tools: ['Node.js', 'Supabase', 'PostgreSQL', 'API Development', 'Authentication'],
    },
    {
      category: 'Mobile',
      icon: Smartphone,
      color: 'green',
      gradient: 'from-green-500 to-emerald-600',
      tools: ['Responsive Design', 'PWA', 'Mobile-First', 'Cross-Browser', 'Touch Optimized'],
    },
    {
      category: 'Security',
      icon: Lock,
      color: 'orange',
      gradient: 'from-orange-500 to-red-600',
      tools: ['SSL/HTTPS', 'Data Encryption', 'Secure Payments', 'GDPR Compliant', 'Regular Audits'],
    },
    {
      category: 'Performance',
      icon: Zap,
      color: 'yellow',
      gradient: 'from-yellow-500 to-orange-600',
      tools: ['CDN', 'Image Optimization', 'Lazy Loading', 'Caching', 'Core Web Vitals'],
    },
    {
      category: 'Design',
      icon: Palette,
      color: 'pink',
      gradient: 'from-pink-500 to-rose-600',
      tools: ['Figma', 'UI/UX', 'Brand Identity', 'Islamic Design', 'Accessibility'],
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0b0d12]" />

      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(0,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
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
              Cutting-Edge Technology
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            We use the latest web technologies to build fast, secure, and scalable websites
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all h-full">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center mb-6`}
                >
                  <tech.icon className="w-10 h-10 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-6">{tech.category}</h3>

                <div className="space-y-3">
                  {tech.tools.map((tool, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tech.gradient}`} />
                      <span className="text-gray-300">{tool}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className={`mt-6 h-1 bg-gradient-to-r ${tech.gradient} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
