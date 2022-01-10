import React from 'react';
import Accordion from '../utils/Accordion';
import Roadmap from './Roadmap';

function Faqs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-20">
          <h2 className="h2">Frequently Asked Questions</h2>
        </div>
        <Roadmap />
        {/* Faqs */}
        <ul className="max-w-3xl mx-auto pl-12">
          <Accordion title="Do I need coding knowledge to use this product?">
            No, our product does not require any coding/programming knowledge. If you know how to use a web browser, you're all set!
          </Accordion>
          <Accordion title="What is the difference between the Free and Paid versions?">
            Credentials issued and published on the trial plan are no longer publicly accessible at the end of your trial. Switch to a paid plan when you're ready to start issuing credentials with us!
          </Accordion>
          <span className="block border-t border-gray-200" aria-hidden="true"></span>
        </ul >

      </div >
    </section >
  );
}

export default Faqs;
