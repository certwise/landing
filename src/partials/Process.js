import React from 'react';

function Process() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
        <div className="py-12 md:py-16">

          {/* Items */}
          <div className="relative max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-start md:max-w-2xl lg:max-w-none">

            <div className="absolute top-1/2 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-300 hidden lg:block" aria-hidden="true"></div>

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full">
              <div className="flex justify-center items-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold mb-3">1</div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Sign Up</h4>
              <p className="text-gray-600 text-center">Create a free account and begin a new digital credential journey with us!</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full">
              <div className="flex justify-center items-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold mb-3">2</div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Design</h4>
              <p className="text-gray-600 text-center">Use our simple drag-and-drop design tool to bring your credential to life. Upload your own logo, and customize as you like.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full">
              <div className="flex justify-center items-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold mb-3">3</div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Issue</h4>
              <p className="text-gray-600 text-center">When you're ready, we'll make credentials live and send a fancy email with their hard-earned credential.</p>
              
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full">
              <div className="flex justify-center items-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold mb-3">4</div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Verify</h4>
              <p className="text-gray-600 text-center">Anybody can verify the authenticity of your recipient's credential. No more counterfeit certificates for you to handle!</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Process;
