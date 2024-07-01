import React, { useState } from 'react';
import arrowDown from '../assets/images/icon-arrow-down.svg';
import arrowUp from '../assets/images/icon-arrow-up.svg';
import todoIcon from '../assets/images/icon-todo.svg';
import calendarIcon from '../assets/images/icon-calendar.svg';
import remindersIcon from '../assets/images/icon-reminders.svg';
import planningIcon from '../assets/images/icon-planning.svg';

const Header: React.FC = () => {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md sticky top-0 z-50">
      <div className="text-2xl font-bold">snap</div>
      <nav className="relative">
        <ul className="flex space-x-6">
          <li className="relative group">
            <button onClick={() => setFeaturesOpen(!featuresOpen)} className="flex items-center focus:outline-none hover:text-gray-300">
              Features
              <img src={featuresOpen ? arrowUp : arrowDown} alt="arrow" className="ml-2 transition-transform duration-200 transform group-hover:rotate-180" />
            </button>
            {featuresOpen && (
              <ul className="absolute top-full left-0 mt-2 bg-white text-gray-800 shadow-lg rounded-md p-4 space-y-2 animate-fade-in-down">
                <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded"><img src={todoIcon} alt="Todo" /> <span>Todo List</span></li>
                <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded"><img src={calendarIcon} alt="Calendar" /> <span>Calendar</span></li>
                <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded"><img src={remindersIcon} alt="Reminders" /> <span>Reminders</span></li>
                <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded"><img src={planningIcon} alt="Planning" /> <span>Planning</span></li>
              </ul>
            )}
          </li>
          <li className="relative group">
            <button onClick={() => setCompanyOpen(!companyOpen)} className="flex items-center focus:outline-none hover:text-gray-300">
              Company
              <img src={companyOpen ? arrowUp : arrowDown} alt="arrow" className="ml-2 transition-transform duration-200 transform group-hover:rotate-180" />
            </button>
            {companyOpen && (
              <ul className="absolute top-full left-0 mt-2 bg-white text-gray-800 shadow-lg rounded-md p-4 space-y-2 animate-fade-in-down">
                <li className="hover:bg-gray-100 p-2 rounded">History</li>
                <li className="hover:bg-gray-100 p-2 rounded">Our Team</li>
                <li className="hover:bg-gray-100 p-2 rounded">Blog</li>
              </ul>
            )}
          </li>
          <li className="hover:text-gray-300 transition duration-200">Careers</li>
          <li className="hover:text-gray-300 transition duration-200">About</li>
        </ul>
      </nav>
      <div>
        <button className="mr-4 hover:text-gray-300 transition duration-200">Login</button>
        <button className="border border-white rounded px-4 py-2 hover:bg-white hover:text-gray-800 transition duration-200">Register</button>
      </div>
    </header>
  );
};

export default Header;
