import { motion } from 'framer-motion';
import {
  Layout, Users, CreditCard, BookOpen, Video, MessageSquare,
  BarChart3, Bell, Shield, Calendar, Award, Smartphone
} from 'lucide-react';

export default function Features() {
  const features = [
    { icon: Layout, title: 'Responsive Design', desc: 'Perfect on all devices' },
    { icon: Users, title: 'Student Management', desc: 'Track progress & enrollment' },
    { icon: CreditCard, title: 'Payment Integration', desc: 'Secure online payments' },
    { icon: BookOpen, title: 'Course Catalog', desc: 'Showcase your programs' },
    { icon: Video, title: 'Video Integration', desc: 'Embed classes & lectures' },
    { icon: MessageSquare, title: 'Live Chat Support', desc: 'Real-time communication' },
    { icon: BarChart3, title: 'Analytics Dashboard', desc: 'Track key metrics' },
    { icon: Bell, title: 'Notifications', desc: 'Email & SMS alerts' },
    { icon: Shield, title: 'Security & Privacy', desc: 'GDPR compliant' },
    { icon: Calendar, title: 'Booking System', desc: 'Schedule classes easily' },
    { icon: Award, title: 'Certificates', desc: 'Automated issuance' },
    { icon: Smartphone, title: 'Mobile App Ready', desc: 'PWA compatible' },
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
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Everything you need to run a successful Quran Academy online
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all h-full">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center mb-4"
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </motion.div>

                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>

                <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
