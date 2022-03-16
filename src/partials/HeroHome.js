import React, { useState } from 'react';
import { createEarlyAccessRequest, isValidEmail } from '../api';
import Modal from '../utils/Modal';

function HeroHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [email, setemail] = useState('');
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);

  const submitEmail = (e) => {
    e.preventDefault();
    if (isValidEmail(email)) {
      createEarlyAccessRequest(email).then((res) => {
        if (res === true) {
          setIsEmailSubmitted(true);
        }
        else
          setIsEmailSubmitted("retried")
      });
    } else alert("Please enter a valid email address.");
  }
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Protect your brand with <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Certwise</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Your brand is an asset. Treat it like one.<br />Issue secure, verifiable digital credentials and prevent counterfeiting.</p>
              <form onSubmit={submitEmail} className="max-w-md mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <input type='email'
                  required
                  onChange={(e) => setemail(e.target.value)}
                  className='form-input h-full shadow-lg border-sm w-full sm:w-1/2 md:w-1/2 lg:w-7/12 xl:w-7/12 2xl:w-7/12' placeholder="Enter your email" />
                <div className='my-2 lg:invisible xl:invisible md:invisible'>
                </div>
                <div>
                  {isEmailSubmitted === false && <button
                    type='submit'
                    className="btn shadow-lg text-white bg-blue-500 hover:bg-blue-600 w-full h-full sm:w-auto sm:ml-4" >Request Early Access -&gt;
                  </button>}
                  {isEmailSubmitted === true && <div
                    type='submit'
                    className="btn shadow-lg text-white bg-blue-500  w-full h-full sm:w-auto sm:ml-4" >Request sent !
                  </div>}
                </div>
              </form>
              <div>
                {isEmailSubmitted === true && <div className='text-blue-600 mt-3'>
                  <b>
                    You have been added to our Early Access list. Make sure your email is correct and you will receive an email with your invite code.
                  </b>
                </div>}
                {isEmailSubmitted === "retried" && <div className='text-blue-600 mt-3'>
                  <b>
                    We already received your request. We will get in touch with you with an invite code.
                  </b>
                </div>}
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex flex-col justify-center">
                <img className="mx-auto" src={require('../images/console_screenshot.png').default} width="768" height="432" alt="Hero" />
              </div>
              {/* <button className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setVideoModalOpen(true); }} aria-controls="modal">
                <svg className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                  <path d="M10 17l6-5-6-5z" />
                </svg>
                <span className="ml-3">Watch the full video (2 min)</span>
              </button> */}
            </div>

            {/* Modal */}
            {/* <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
              <div className="relative pb-9/16">
                <iframe className="absolute w-full h-full" src="https://player.vimeo.com/video/174002812" title="Video" allowFullScreen></iframe>
              </div>
            </Modal> */}

          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroHome;

