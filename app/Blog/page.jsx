'use client';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Page = () => {
  const theme = useSelector((state) => state.theme); // Access the theme from Redux
  const [showSidebar, setShowSidebar] = useState(true);
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const content = document.getElementById('main-content');
      const contentHeight = content.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      // Show footer if scrolled to bottom
      if (scrollPosition + viewportHeight >= contentHeight) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }

      // Show sidebar based on scroll position
      if (scrollPosition > 50) { // Adjust this threshold as needed
        setShowSidebar(true);
      } else {
        setShowSidebar(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme colors based on light and dark mode
  const themeColors = {
    bg: theme === 'dark' ? 'bg-gray-900' : 'bg-white',
    text: theme === 'dark' ? 'text-gray-400' : 'text-gray-900',
    sidebarBg: theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100',
    sidebarText: theme === 'dark' ? 'text-gray-300' : 'text-gray-800',
    hoverBg: theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200',
    footerBg: theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100',
  };

  return (
    <div className={`min-h-screen flex flex-col ${themeColors.bg} ${themeColors.text}`}>
      <div className="flex flex-col md:flex-row w-full">
        
        {/* Sidebar */}
        <aside id="sidebar" className={`md:w-1/4 lg:w-1/5 shadow-lg sticky top-0 ${showSidebar ? 'block' : 'hidden'} transition-transform ${themeColors.sidebarBg} ${themeColors.sidebarText}`}>
          <div className="p-4 border rounded-lg">
            <a href="#" className={`block px-3 py-2 font-semibold ${themeColors.hoverBg} rounded-md`}>
              Stories
            </a>
            <a href="#" className={`block px-3 py-2 font-semibold opacity-90 ${themeColors.hoverBg} rounded-md`}>
            Research paper
            </a>
            <a href="#" className={`block px-3 py-2 font-semibold opacity-90 ${themeColors.hoverBg} rounded-md`}>
            Add a story
            </a>
            <div className="flex items-center pl-1 mt-2">
              <svg className={`w-6 h-6 ${themeColors.sidebarText}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
              </svg>
              <a href="#" className={`ml-2 py-1 font-semibold ${themeColors.hoverBg} rounded-md`}>
                filter
              </a>
            </div>
            <a href="#" className={`block px-3 py-2 font-semibold opacity-90 ${themeColors.hoverBg} rounded-md`}>
              Settings
            </a>
            <button type="submit" className={`mt-2 text-red-500 text-sm font-semibold hover:text-purple-600 mb-1 border ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} px-3 py-2 hover:${theme === 'dark' ? 'bg-gray-600' : 'bg-violet-200'} rounded-md`}>
              Log Out
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main id="main-content" className={`w-full md:w-3/4 lg:w-4/5 py-4 px-4 md:px-8 ${theme === 'dark' ? 'bg-gray-900 text-gray-400' : 'bg-white text-gray-900'} shadow-lg rounded-lg overflow-y-auto`}>
          <div className="p-4">
            <h1 className="font-bold text-xl md:text-2xl my-4">Recently Viewed</h1>

            <div>
              <h2 className="text-xl font-bold mb-4">Today</h2>
              <ul className="space-y-8">
                {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <li key={index} className="flex items-center space-x-4 border-b pb-4">
                    <img src={`https://source.unsplash.com/random/200x200?sig=${item}`} alt={`Product ${item}`} className="w-16 h-16 rounded-full" />
                    <div>
                      <h3 className="text-lg font-semibold">Product {item}</h3>
                      <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                  </li>
                ))}
              </ul>

              <h2 className="text-xl font-bold my-4">Yesterday</h2>
              <ul className="space-y-8">
                {[1, 2, 3].map((item, index) => (
                  <li key={index} className="flex items-center space-x-4 border-b pb-4">
                    <img src={`https://source.unsplash.com/random/200x200?sig=${item+10}`} alt={`Product ${item}`} className="w-16 h-16 rounded-full" />
                    <div>
                      <h3 className="text-lg font-semibold">Product {item}</h3>
                      <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className={`py-4 shadow-lg rounded-lg ${showFooter ? 'block' : 'hidden'} ${themeColors.footerBg}`}>
        <div className="text-center">
          <p className={`text-gray-500 ${themeColors.text}`}>This is the footer content.</p>
        </div>
      </footer>
    </div>
  );
};

export default Page;
