import { motion } from 'framer-motion';
import { ExternalLink, Users, TrendingUp, Globe } from 'lucide-react';

export default function QuranAcademyShowcase() {
  const projects = [
    {
      name: 'Al-Furqan Online Academy',
      tagline: 'Premier Online Quran Learning Platform',
      gradient: 'from-cyan-500 to-blue-600',
      stats: {
        students: '5,000+',
        conversion: '+320%',
        countries: '45',
      },
      features: ['Live Classes', 'Student Portal', 'Payment Gateway', 'Multi-language'],
    },
    {
      name: 'Noor Tajweed Institute',
      tagline: 'Excellence in Tajweed Education',
      gradient: 'from-violet-500 to-purple-600',
      stats: {
        students: '3,500+',
        conversion: '+280%',
        countries: '32',
      },
      features: ['Course Management', 'Certificate System', 'Parent Dashboard', 'Video Library'],
    },
    {
      name: 'Barakah Quran Center',
      tagline: 'Connecting Hearts with the Quran',
      gradient: 'from-green-500 to-emerald-600',
      stats: {
        students: '7,200+',
        conversion: '+450%',
        countries: '60',
      },
      features: ['Booking System', 'Progress Tracking', 'Mobile App', 'Community Forum'],
    },
    {
      name: 'Hikmah Academy Global',
      tagline: 'Islamic Education Worldwide',
      gradient: 'from-orange-500 to-red-600',
      stats: {
        students: '4,800+',
        conversion: '+380%',
        countries: '38',
      },
      features: ['LMS Integration', 'Membership Plans', 'Live Streaming', 'Resource Library'],
    },
    {
      name: 'Nur Learning Hub',
      tagline: 'Illuminating Minds Through Quran',
      gradient: 'from-pink-500 to-rose-600',
      stats: {
        students: '6,100+',
        conversion: '+410%',
        countries: '52',
      },
      features: ['Gamification', 'Social Learning', 'AI Recommendations', 'Analytics Dashboard'],
    },
    {
      name: 'Taqwa Institute Online',
      tagline: 'Building Righteous Character',
      gradient: 'from-blue-500 to-cyan-600',
      stats: {
        students: '8,500+',
        conversion: '+520%',
        countries: '68',
      },
      features: ['Automated Scheduling', 'Multi-teacher', 'CRM Integration', 'Email Marketing'],
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0b0d12]" />

      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${100 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 200}px`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-violet-500 rounded-full blur-3xl" />
          </motion.div>
        ))}
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
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-green-400 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Websites we've built that are transforming Quran education worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -15 }}
              className="group"
            >
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all h-full">
                <div className={`h-56 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZDUiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAyMCAwIEwgMCAwIDAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZDUpIi8+PC9zdmc+')] opacity-30" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-20 h-20 bg-white/90 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <div className={`text-3xl font-bold bg-gradient-to-br ${project.gradient} bg-clip-text text-transparent`}>
                        {project.name.split(' ')[0].charAt(0)}
                      </div>
                    </div>

                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-white text-sm font-semibold">
                      View Live Site
                    </div>
                  </div>

                  <motion.div
                    initial={{ y: '100%' }}
                    whileHover={{ y: 0 }}
                    className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center"
                  >
                    <ExternalLink className="w-16 h-16 text-white" />
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{project.tagline}</p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      { icon: Users, label: 'Students', value: project.stats.students },
                      { icon: TrendingUp, label: 'Growth', value: project.stats.conversion },
                      { icon: Globe, label: 'Countries', value: project.stats.countries },
                    ].map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <stat.icon className={`w-4 h-4 text-${['cyan', 'violet', 'green'][idx]}-400 mx-auto mb-2`} />
                        <div className="text-white text-sm font-bold mb-1">{stat.value}</div>
                        <div className="text-gray-500 text-xs">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`} />
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
