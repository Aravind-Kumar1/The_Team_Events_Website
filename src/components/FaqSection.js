import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We provide event planning, catering, decorations, and much more."
    },
    {
      question: "How do I book an event?",
      answer: "You can book an event through our contact form, phone, or email."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards, bank transfers, and cash payments."
    },
    {
      question: "Can I customize my event package?",
      answer: "Yes! We offer flexible and customizable event packages."
    }
  ];

  return (
    <section id="faq" className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <p className="faq-subtitle">Find answers to common questions below.</p>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="faq-icon"
              >
                ▼
              </motion.span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  className="faq-answer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
