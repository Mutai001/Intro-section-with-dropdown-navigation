import React from 'react';
import heroImage from '../assets/images/image-hero-desktop.png';
import databiz from '../assets/images/client-databiz.svg';
import audiophile from '../assets/images/client-audiophile.svg';
import meet from '../assets/images/client-meet.svg';
import maker from '../assets/images/client-maker.svg';

const MainSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left py-12 px-6">
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-4">Make remote work</h1>
        <p className="mb-8">
          Get your team in sync, no matter your location. Streamline processes, 
          create team rituals, and watch productivity soar.
        </p>
        <button className="bg-black text-white px-6 py-2 rounded">Learn more</button>
        <div className="flex space-x-4 justify-center md:justify-start mt-8">
          <img src={databiz} alt="Databiz" />
          <img src={audiophile} alt="Audiophile" />
          <img src={meet} alt="Meet" />
          <img src={maker} alt="Maker" />
        </div>
      </div>
      <div className="flex-1 mt-12 md:mt-0">
        <img src={heroImage} alt="Remote Work" className="w-full" />
      </div>
    </section>
  );
};

export default MainSection;
