import { useState } from 'react';

export default function Faq() {
  const [openFaqId, setOpenFaqId] = useState(null);

  const toggleFaq = (index, e) => {
    e.preventDefault();
    setOpenFaqId(openFaqId === index ? null : index);
  };

  const faqs = [
    {
      id: 1,
      q: 'Who can join the diving club?',
      a: 'Everyone! We have coaches who train children as well as adults and even older ones! No prior experience needed.',
    },
    {
      id: 2,
      q: 'Can I join the club from another country?',
      a: 'Yes, absolutely! We welcome members from all over the world and can help with arrangements and online consultations.',
    },
    {
      id: 3,
      q: 'Should I buy my own diving gear?',
      a: "It's not necessary to start. We offer high-quality gear rental for all our tours and courses. You can buy your own later.",
    },
    {
      id: 4,
      q: 'What are the health requirements for diving?',
      a: 'Generally, you need to be in good physical health. A medical questionnaire will be provided before the first dive.',
    },
    {
      id: 5,
      q: 'What to do so that the ears do not hurt?',
      a: 'Our instructors will teach you equalization techniques (popping your ears) to prevent pain and injury during descent.',
    },
    {
      id: 6,
      q: 'I wear glasses. Can I go diving?',
      a: 'Yes! You can use contact lenses or rent a special mask with prescription lenses.',
    },
    {
      id: 7,
      q: 'What are the prices for tours?',
      a: "Prices vary depending on the location and duration. Check our 'Pricing' section or contact us for a custom quote.",
    },
  ];

  return (
    <section className="faq" id="faq">
      <h2>Want to know more?</h2>
      <p className="subtitle">
        Let’s talk about some important things if you’re new to diving
      </p>
      <div className="faq-container">
        {faqs.map((faq) => (
          <details
            key={faq.id}
            className="faq-item"
            open={openFaqId === faq.id}
            onClick={(e) => toggleFaq(faq.id, e)}
          >
            <summary className="faq-question">
              <span className="faq-number">0{faq.id}</span>
              <span className="faq-title">{faq.q}</span>
              <span className="faq-icon"></span>
            </summary>
            <div className="faq-answer">
              <p>{faq.a}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
