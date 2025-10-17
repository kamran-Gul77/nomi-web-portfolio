import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, Crown } from 'lucide-react';

export default function WebDevPricing() {
  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: '$2,999',
      description: 'Perfect for new academies getting started',
      features: [
        '5-7 page website',
        'Responsive design',
        'Contact form',
        'Basic SEO setup',
        'Social media integration',
        '30 days support',
        '2 rounds of revisions',
      ],
      gradient: 'from-cyan-500 to-blue-600',
      popular: false,
    },
    {
      name: 'Professional',
      icon: Sparkles,
      price: '$5,999',
      description: 'Most popular choice for growing academies',
      features: [
        'Up to 15 pages',
        'Advanced responsive design',
        'Booking system',
        'Payment integration',
        'Student portal',
        'Advanced SEO',
        'Blog setup',
        '90 days support',
        '4 rounds of revisions',
        'Performance optimization',
      ],
      gradient: 'from-violet-500 to-purple-600',
      popular: true,
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: 'Custom',
      description: 'Complete solution for established institutions',
      features: [
        'Unlimited pages',
        'Custom functionality',
        'LMS integration',
        'Multi-language support',
        'Advanced analytics',
        'Mobile app (PWA)',
        'API development',
        'White-label solution',
        '1 year support',
        'Unlimited revisions',
        'Dedicated account manager',
        'Priority support',
      ],
      gradient: 'from-green-500 to-emerald-600',
      popular: false,
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0b0d12]" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500 rounded-full blur-[150px]" />
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
              Investment Plans
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. One-time investment for lasting results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative"
            >
              <motion.div
                whileHover={{ y: -10, scale: plan.popular ? 1.02 : 1 }}
                className={`relative backdrop-blur-xl bg-white/5 border-2 ${
                  plan.popular ? 'border-violet-500' : 'border-white/10'
                } rounded-3xl p-8 hover:border-white/20 transition-all h-full ${
                  plan.popular ? 'md:-mt-8' : ''
                }`}
              >
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </motion.div>
                )}

                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 hover:opacity-10 rounded-3xl transition-opacity`} />

                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6 mx-auto`}
                  >
                    <plan.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white text-center mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm text-center mb-6">{plan.description}</p>

                  <div className="text-center mb-8">
                    <span className={`text-5xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                      {plan.price}
                    </span>
                    {plan.price !== 'Custom' && (
                      <span className="text-gray-400 text-lg ml-2">one-time</span>
                    )}
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 rounded-full font-semibold transition-all ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.gradient} text-white shadow-lg shadow-violet-500/50`
                        : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {plan.price === 'Custom' ? 'Contact Us' : 'Get Started'}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">All Plans Include:</h3>
            <div className="grid md:grid-cols-4 gap-6 text-left">
              {[
                'Free domain for 1 year',
                'SSL certificate included',
                'Hosting setup assistance',
                'Training & documentation',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
