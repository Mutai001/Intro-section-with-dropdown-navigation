import React from 'react';
import heroImage from '../assets/images/hero-image.jpg';

const MainSection: React.FC = () => {
  return (
    <section className="text-center py-12">
      <h1 className="text-4xl font-bold mb-4">Make remote work</h1>
      <p className="mb-8">
        Get your team in sync, no matter your location. Streamline processes, 
        create team rituals, and watch productivity soar.
      </p>
      <button className="bg-black text-white px-6 py-2 rounded">Learn more</button>
      <div className="flex justify-center mt-8">
        <img src={heroImage} alt="Remote Work" className="w-full max-w-md" />
      </div>
    </section>
  );
};

export default MainSection;
