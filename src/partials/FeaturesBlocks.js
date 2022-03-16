import React from 'react';
import { GiPadlock } from 'react-icons/gi';
import { MdOutlineMoreTime, MdOutlineCheck } from 'react-icons/md';
import { AiOutlineRise, AiOutlineEye } from 'react-icons/ai';
import { VscDebugDisconnect } from 'react-icons/vsc';

function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Explore the features</h2>
            <p className="text-xl text-gray-600">Start issuing digital credentials from scratch. Or simply upgrade from an existing printed certificate process. Certwise has you covered.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none auto">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full">
              <div className="w-14 h-14 bg-blue-600 rounded-full">
                <GiPadlock className="w-8 h-8 fill-current text-gray-100 m-3 p-0.5" />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 mt-1 pt-2">Secure data management</h4>
              <p className="text-gray-600 text-center">We use industry standard technology to ensure that your recipients' information is protected.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full">
              <div className="w-14 h-14 bg-blue-600 rounded-full">
                <MdOutlineCheck className="w-8 h-8 fill-current text-gray-100 m-3 p-0.5" />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 mt-1 pt-2">Instant Verification</h4>
              <p className="text-gray-600 text-center">Recipients can now share their certificates with confidence. Quickly and easily verify the authenticity of the certificate.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full">
              <div className="w-14 h-14 bg-blue-600 rounded-full">
                <AiOutlineRise className="w-8 h-8 fill-current text-gray-100 m-3 p-0.5" />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 mt-1 pt-2">Analytics</h4>
              <div className="rounded-full px-2 text-xs mb-2 border border-indigo-600 text-indigo-600">Coming Soon</div>
              <p className="text-gray-600 text-center">Use data analytics to understand how your recipients share their credentials, and how other people engage with it.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full">
              <div className="w-14 h-14 bg-blue-600 rounded-full">
                <AiOutlineEye className="w-8 h-8 fill-current text-gray-100 m-3 p-0.5" />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 mt-1 pt-2">White Labelling</h4>
              <div className="rounded-full px-2 text-xs mb-2 border border-indigo-600 text-indigo-600">Coming Soon</div>
              <p className="text-gray-600 text-center">Recipients recognize &amp; trust your logo and domain, so that's what they see, not ours.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full">
              <div className="w-14 h-14 bg-blue-600 rounded-full">
               <MdOutlineMoreTime className="w-8 h-8 fill-current text-gray-100 m-3 p-0.5" />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 mt-1 pt-2">Forever Promise</h4>
              <p className="text-gray-600 text-center">We charge per credential, not per month. You like to keep your credentials up. So do we.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full">
              <div className="w-14 h-14 bg-blue-600 rounded-full">
                <VscDebugDisconnect className="w-8 h-8 fill-current text-gray-100 m-3 p-0.5" />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 mt-1 pt-2">Integrate with your tools</h4>
              <div className="rounded-full px-2 text-xs mb-2 border border-indigo-600 text-indigo-600">Coming Soon</div>
              <p className="text-gray-600 text-center">Use your existing tools with certwise to set up a seamless, automatic process.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
