import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sustainable Energy you can trust
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Our mission is to create a cleaner world by making renewable energy the default choice for everyone, everywhere.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/energy-types" 
                className="inline-block bg-sky-500 text-white font-medium px-6 py-3 rounded-md hover:bg-sky-600 transition-colors"
              >
                Discover our energy sources
              </Link>
              <Link 
                to="/offers" 
                className="inline-block bg-sky-500 text-white font-medium px-6 py-3 rounded-md hover:bg-sky-600 transition-colors"
              >
                View our offers
              </Link>
            </div>
          </div>
          
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full h-80">
              <div className="absolute inset-0 bg-white bg-opacity-20 rounded-lg transform rotate-3"></div>
              <div className="absolute inset-0 bg-white bg-opacity-20 rounded-lg transform -rotate-3"></div>
              <div className="absolute inset-0 bg-white bg-opacity-90 rounded-lg shadow-lg flex items-center justify-center p-8">
                <div className="text-center">
                  {/* Windmill logo added here */}
                  <img
                    src={process.env.PUBLIC_URL + '/new-logo.jpeg'}
                    alt="Green Power Energy logo"
                    className="h-32 w-32 rounded-full object-cover bg-white shadow mb-4 mx-auto"
                    style={{ border: '2px solid #15803d' }}
                  />
                  <h3 className="text-2xl font-bold text-primary mb-4">Calculate your savings</h3>
                  <p className="text-gray-600 mb-6">Estimate how much you could save by choosing our energy offers</p>
                  <Link 
                    to="/compare" 
                    className="inline-block bg-primary text-white font-medium px-6 py-2 rounded-md hover:bg-secondary transition-colors"
                  >
                    Compare offers
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
