import React from 'react';
import { Megaphone, ArrowDown, BadgeQuestionMark } from 'lucide-react'; // ✅ Replaced with lucide icons
import Card from '../component/Card';
import Card2 from '../component/Card2';
import SlideShow from '../component/SlideShow';
import Collaborate from '../component/Collaborate';
import Footer from '../component/Footer';

const Page = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/60 flex flex-col items-center relative overflow-hidden">

      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-32 left-1/3 w-72 h-72 bg-violet-100 rounded-full mix-blend-multiply filter blur-3xl opacity-25"></div>
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto w-full gap-16 py-20 px-8 lg:px-12">

        {/* Left Half - Text Content */}
        <div className="lg:w-1/2 flex flex-col items-start gap-6 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-blue-100">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-semibold text-blue-600 tracking-wide">UPCOMING EVENTS</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
            Join Our <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Exciting Events</span> and Workshops
          </h1>

          <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-xl">
            Discover engaging events, hands-on workshops, and interactive webinars designed to help you learn, connect, and elevate your skills.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              View All Events
              <span className="inline-block ml-2 group-hover:translate-y-1 transition-transform duration-300"><ArrowDown /></span>
            </button>
            <button className="px-8 py-4 bg-white/90 backdrop-blur-sm text-slate-700 font-semibold rounded-xl shadow-md hover:shadow-lg border border-slate-200 hover:border-blue-200 transition-all duration-300">
              Learn More
            </button>
          </div>

          <div className="flex gap-8 mt-6 pt-6 border-t border-slate-200">
            <div>
              <div className="text-3xl font-bold text-slate-900">50+</div>
              <div className="text-sm text-slate-600 mt-1">Events</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">2K+</div>
              <div className="text-sm text-slate-600 mt-1">Attendees</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">100+</div>
              <div className="text-sm text-slate-600 mt-1">Speakers</div>
            </div>
          </div>
        </div>

        {/* Right Half - Image */}
        <div className="lg:w-1/2 w-full relative z-10">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 rounded-2xl opacity-20 blur-xl"></div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-3">
              <div className="rounded-xl overflow-hidden h-96 md:h-[550px]">
                <img src="SaeEvent.jpg" alt="Event showcase" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-slate-100 max-w-xs hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl font-bold"><Megaphone /></span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Upcoming Event</div>
                  <div className="text-xs text-slate-600">Oct 15, 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WHY JOIN US SECTION */}
      <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 pt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-xl animate-pulse"></div>
              <BadgeQuestionMark className="relative w-14 h-14 md:w-16 md:h-16 text-blue-600 mb-3" />
            </div>

            <h1 className="relative text-4xl md:text-6xl font-bold text-center mb-2">
              <span className="relative bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-700 bg-clip-text text-transparent">
                Why join us?
              </span>
            </h1>

            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 rounded-full mt-4 opacity-60"></div>
          </div>

          <div className="mt-12 relative">
            {/* Quarter Circles */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-bl-full"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-tr-full"></div>

            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/40 via-white/60 to-indigo-100/40 backdrop-blur-sm rounded-3xl"></div>
            <div className="relative bg-white/40 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/60 shadow-xl">

              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                Joining SAE events offers an incredible opportunity to gain <span className="font-semibold text-blue-700">real-world exposure</span> to automotive and mobility technologies through hands-on workshops and design sessions. You will get the chance to innovate, build, and participate in <span className="font-semibold text-indigo-700">national-level competitions</span> like BAJA, SUPRA, and Efficycle while networking with professionals from leading companies such as Tata Motors, Mahindra, Maruti Suzuki, and Bosch.
              </p>

              <p className="text-base md:text-lg text-slate-700 leading-relaxed mt-6">
                These events not only help you develop valuable <span className="font-semibold text-blue-700">technical skills</span> with certifications in areas like EV technology and CAD but also significantly boost your resume, internships, and career prospects.
              </p>

              <p className="text-base md:text-lg text-slate-700 leading-relaxed mt-6">
                More than just learning, SAE connects you with a <span className="font-semibold text-indigo-700">passionate community</span> of like-minded engineers who share the same love for automobiles, aerodynamics, and innovation—making the journey both exciting and rewarding.
              </p>

            </div>
          </div>
        </div>
      </div>

      {/* OUR EVENTS SECTION */}
      <div className="w-full flex items-start mt-20">
        <div className="px-8 rounded-r-full border-2 border-white p-6 bg-white/10 bg-gradient-to-br from-blue-400 to-blue-500 shadow-2xl">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            OUR EVENTS
          </h1>
        </div>
      </div>

      {/* Placeholder div under OUR EVENTS */}
      <div className='min-h-screen w-full'>
      <div className="w-full max-w-5xl mx-auto mt-10 grid grid-cols-2 grid-rows-2 ">
  {/* Each grid item */}
  <Card/>
  <Card2/>
  <Card/>
  <Card/>
</div>
</div>
<SlideShow/>
<Collaborate/>
<Footer/>


    </div>
  );
};

export default Page;
