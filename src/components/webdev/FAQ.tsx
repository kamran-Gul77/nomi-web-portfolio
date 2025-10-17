import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How long does it take to build a website?',
      answer: 'Typically 8-10 weeks from kickoff to launch. This includes discovery, design, development, testing, and deployment. Timeline may vary based on project complexity and client feedback cycles.',
    },
    {
      question: 'Do you provide hosting and domain services?',
      answer: 'Yes! We assist with domain registration and can recommend reliable hosting providers. We also offer managed hosting services where we handle all technical aspects for you.',
    },
    {
      question: 'Will my website be mobile-friendly?',
      answer: 'Absolutely! All our websites are built with a mobile-first approach, ensuring perfect performance across all devices including smartphones, tablets, and desktops.',
    },
    {
      question: 'Can you integrate payment systems for course fees?',
      answer: 'Yes, we integrate secure payment gateways like Stripe, PayPal, and others. We ensure PCI compliance and handle all technical aspects of payment processing.',
    },
    {
      question: 'Do you offer ongoing maintenance and support?',
      answer: 'Yes! All our packages include initial support period. We also offer ongoing maintenance plans that include regular updates, security patches, backups, and technical support.',
    },
    {
      question: 'Can students book classes directly through the website?',
      answer: 'Yes! We can integrate advanced booking systems that allow students to view teacher availability, book classes, reschedule, and receive automated reminders.',
    },
    {
      question: 'Will I be able to update content myself?',
      answer: 'Absolutely! We build user-friendly CMS systems and provide comprehensive training so you can easily update text, images, courses, and other content without technical knowledge.',
    },
    {
      question: 'Do you handle website content and copywriting?',
      answer: 'Yes! We offer content creation services including copywriting, photography recommendations, and content strategy tailored for Islamic education institutions.',
    },
    {
      question: 'What happens if I need changes after launch?',
      answer: 'We provide support period after launch for minor adjustments. For major changes or new features, we offer flexible hourly rates or retainer packages.',
    },
    {
      question: 'Can you migrate content from my existing website?',
      answer: 'Yes! We can migrate all your existing content, student data, and media files to your new website. We ensure zero downtime during the migration process.',
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
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Common Questions
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Everything you need to know about our website development services
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-semibold text-white pr-8">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center"
                  >
                    {openIndex === i ? (
                      <Minus className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className="w-5 h-5 text-white" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="pt-4 border-t border-white/10">
                          <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-gray-400 mb-6">We're here to help! Schedule a free consultation call.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold px-8 py-4 rounded-full"
            >
              Book Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
