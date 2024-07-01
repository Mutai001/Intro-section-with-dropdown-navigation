import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-6">
      <div className="text-lg font-bold">snap</div>
      <nav>
        <ul className="flex space-x-6">
          <li>Features</li>
          <li>Company</li>
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
