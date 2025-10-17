import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export default function WebDevTestimonials() {
  const testimonials = [
    {
      quote: "They transformed our outdated website into a modern masterpiece. Our enrollment increased by 400% in just 3 months. Highly recommend!",
      author: "Sheikh Mohammad Rahman",
      role: "Director, Al-Furqan Academy",
      rating: 5,
      gradient: "from-cyan-500 to-blue-600",
      metric: "+400% Enrollment",
    },
    {
      quote: "The attention to detail and understanding of Islamic education was remarkable. They delivered beyond our expectations.",
      author: "Ustadha Aisha Hassan",
      role: "Principal, Noor Institute",
      rating: 5,
      gradient: "from-violet-500 to-purple-600",
      metric: "98% Satisfaction",
    },
    {
      quote: "Professional, responsive, and truly dedicated to our success. The website they built perfectly represents our academy's values.",
      author: "Dr. Ibrahim Ali",
      role: "CEO, Barakah Learning",
      rating: 5,
      gradient: "from-green-500 to-emerald-600",
      metric: "+350% Traffic",
    },
    {
      quote: "Best investment we made for our academy. The automated systems save us 20+ hours per week, and parents love the new booking system.",
      author: "Hafiz Abdullah Khan",
      role: "Founder, Hikmah Academy",
      rating: 5,
      gradient: "from-orange-500 to-red-600",
      metric: "20hrs Saved/Week",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0d12] via-[#0f1629] to-[#0b0d12]" />

      <div className="absolute inset-0 opacity-20">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
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
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Hear from academy directors who transformed their institutions with our websites
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all h-full"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 hover:opacity-10 rounded-3xl transition-opacity`} />

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <Quote className="w-12 h-12 text-cyan-400 opacity-50" />
                    <div className={`inline-block bg-gradient-to-r ${testimonial.gradient} rounded-full px-4 py-2`}>
                      <span className="text-white text-sm font-bold">{testimonial.metric}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-xl flex-shrink-0`}>
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>

                    <div className="flex-1">
                      <div className="text-white font-semibold mb-1">{testimonial.author}</div>
                      <div className="text-gray-400 text-sm mb-2">{testimonial.role}</div>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, idx) => (
                          <Star key={idx} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <motion.div
                    className="absolute top-4 right-4 w-20 h-20 bg-cyan-400/10 rounded-full blur-2xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block backdrop-blur-xl bg-white/5 border border-white/10 rounded-full px-8 py-4">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 border-2 border-[#0b0d12] flex items-center justify-center text-white text-sm font-bold`}>
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">50+ Happy Clients</div>
                <div className="text-gray-400 text-sm">Join the growing family</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
