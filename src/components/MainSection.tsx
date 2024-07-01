import React from 'react';
import heroImage from '../assets/images/client-audiophile.svg';
import databiz from '../assets/images/client-databiz.svg';
import audiophile from '../assets/images/client-audiophile.svg';
import meet from '../assets/images/client-meet.svg';
import maker from '../assets/images/client-maker.svg';

const MainSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left py-12 px-6 bg-gradient-to-b from-indigo-100 to-white">
      <div className="flex-1">
        <h1 className="text-5xl font-bold mb-4 text-gray-900 animate-fade-in">Make remote work</h1>
        <p className="mb-8 text-gray-700 animate-fade-in-delay">
          Get your team in sync, no matter your location. Streamline processes, 
          create team rituals, and watch productivity soar.
        </p>
        <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">Learn more</button>
        <div className="flex space-x-4 justify-center md:justify-start mt-8 animate-fade-in-delay">
          <img src={databiz} alt="Databiz" className="w-20 hover:scale-110 transition-transform duration-300" />
          <img src={audiophile} alt="Audiophile" className="w-20 hover:scale-110 transition-transform duration-300" />
          <img src={meet} alt="Meet" className="w-20 hover:scale-110 transition-transform duration-300" />
          <img src={maker} alt="Maker" className="w-20 hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
      <div className="flex-1 mt-12 md:mt-0 animate-fade-in-delay">
        <img src={heroImage} alt="Remote Work" className="w-full rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105" />
      </div>
    </section>
  );
};

export default MainSection;
