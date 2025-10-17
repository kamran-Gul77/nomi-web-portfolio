import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github, Heart } from 'lucide-react';

export default function WebDevFooter() {
  const links = {
    services: ['Website Design', 'Web Development', 'E-commerce', 'Mobile Apps', 'Maintenance'],
    company: ['About Us', 'Portfolio', 'Process', 'Pricing', 'Contact'],
    resources: ['Blog', 'Case Studies', 'FAQs', 'Support', 'Documentation'],
  };

  const socials = [
    { icon: Linkedin, href: '#', color: 'from-blue-500 to-blue-600' },
    { icon: Twitter, href: '#', color: 'from-cyan-500 to-blue-500' },
    { icon: Instagram, href: '#', color: 'from-pink-500 to-rose-500' },
    { icon: Github, href: '#', color: 'from-gray-500 to-gray-700' },
  ];

  return (
    <footer className="relative pt-32 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1629] to-[#0b0d12]" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">Q</span>
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  Quran Web Studio
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Specialized in building exceptional websites for Quran Academies and Islamic
                educational institutions worldwide.
              </p>

              <div className="space-y-3">
                {[
                  { icon: Mail, text: 'hello@quranwebstudio.com' },
                  { icon: Phone, text: '+1 (555) 123-4567' },
                  { icon: MapPin, text: 'Global Remote Team' },
                ].map((contact, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <contact.icon className="w-5 h-5" />
                    <span>{contact.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-4"
            >
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center group relative overflow-hidden`}
                >
                  <social.icon className="w-5 h-5 text-white relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {Object.entries(links).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (i + 1) }}
            >
              <h3 className="text-white font-bold text-lg mb-6 capitalize">{category}</h3>
              <ul className="space-y-4">
                {items.map((item, idx) => (
                  <li key={idx}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-cyan-400 transition-colors relative inline-block group"
                    >
                      {item}
                      <span className="absolute left-0 bottom-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Quran Web Studio. All rights reserved.
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-gray-400 text-sm"
            >
              Made with
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="w-4 h-4 fill-red-500 text-red-500" />
              </motion.div>
              for the Ummah
            </motion.div>

            <div className="flex gap-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Cookies</a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-violet-500 to-green-400 opacity-50" />
    </footer>
  );
}
