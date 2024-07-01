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
    <header className="flex justify-between items-center p-6">
      <div className="text-lg font-bold">snap</div>
      <nav className="relative">
        <ul className="flex space-x-6">
          <li className="relative">
            <button onClick={() => setFeaturesOpen(!featuresOpen)} className="flex items-center">
              Features
              <img src={featuresOpen ? arrowUp : arrowDown} alt="arrow" className="ml-2" />
            </button>
            {featuresOpen && (
              <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md p-4">
                <li className="flex items-center space-x-2"><img src={todoIcon} alt="Todo" /> <span>Todo List</span></li>
                <li className="flex items-center space-x-2"><img src={calendarIcon} alt="Calendar" /> <span>Calendar</span></li>
                <li className="flex items-center space-x-2"><img src={remindersIcon} alt="Reminders" /> <span>Reminders</span></li>
                <li className="flex items-center space-x-2"><img src={planningIcon} alt="Planning" /> <span>Planning</span></li>
              </ul>
            )}
          </li>
          <li className="relative">
            <button onClick={() => setCompanyOpen(!companyOpen)} className="flex items-center">
              Company
              <img src={companyOpen ? arrowUp : arrowDown} alt="arrow" className="ml-2" />
            </button>
            {companyOpen && (
              <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md p-4">
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
              </ul>
            )}
          </li>
          <li>Careers</li>
          <li>About</li>
        </ul>
      </nav>
      <div>
        <button className="mr-4">Login</button>
        <button className="border rounded px-4 py-2">Register</button>
      </div>
    </header>
  );
};

export default Header;
