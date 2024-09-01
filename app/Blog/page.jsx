'use client';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Page = () => {
  const theme = useSelector((state) => state.theme); // Access the theme from Redux
  const [showSidebar, setShowSidebar] = useState(true);
  const [showFooter, setShowFooter] = useState(false);
  const [showChat, setShowChat] = useState(true);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  useEffect(() => {
    const handleScroll = () => {
      const content = document.getElementById('main-content');
      const contentHeight = content.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;


      // Show sidebar based on scroll position
      if (scrollPosition > 50) {
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
      <div className="flex static overflow-visible h-[91vh] flex-col md:flex-row w-full">
        
        {/* Sidebar */}
        <aside id="sidebar" className={`sticky hidden md:flex top-0 md:w-2/6 lg:w-1/6 shadow-lg ${showSidebar ? 'block' : 'hidden'} transition-transform ${themeColors.sidebarBg} ${themeColors.sidebarText}`}>
          <div className="p-4 w-full rounded-lg">
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
            <button type="submit" className={`mt-2 text-red-500 text-sm font-semibold hover:text-purple-600 mb-1 border ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} px-3 py-2 ${theme === 'dark' ? 'hover:bg-gray-600' : 'hover:bg-violet-200'} rounded-md`}>
              Log Out
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main id="main-content" className={`w-full md:w-4/7 lg:w-3/6 py-4 px-4 md:px-8 ${theme === 'dark' ? 'bg-gray-900 text-gray-400' : 'bg-white text-gray-900'} shadow-lg rounded-lg overflow-y-auto`}>
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

        {/* Contacts and Chat Section */}
        <div className="relative hidden lg:flex md:w-3/7 lg:w-2/6 flex-col md:flex-row">
          {/* Contacts Section */}
          <div className={`contacts absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-12 w-full h-full ${themeColors.sidebarBg} ${themeColors.text} rounded-l-xl shadow-[0_0_80px_0_rgba(0,0,0,0.1),2rem_2rem_40px_-3rem_rgba(0,0,0,0.5)] cursor-pointer transition-transform duration-500 hover:-translate-x-96`}>
            <i className={`fas fa-bars fa-2x absolute  ${themeColors.text} transition-colors duration-200`}></i>
            <h2 className="mt-2 mb-6 pl-1 text-lg font-bold">Contacts</h2>

            {/* Contact Items */}
            <div className="contact relative mb-4 pl-1 h-18 flex justify-between items-center">
              <div className="flex items-center">
                <div
                  className="pic rogers mr-4 w-16 h-16 bg-cover bg-center rounded-full"
                  style={{ backgroundImage: `url('https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/7/7c/Cap.America_%28We_Don%27t_Trade_Lives_Vision%29.png')` }}
                ></div>
                <div className="text-sm">
                  <p className="name font-medium">Steve Rogers</p>
                  <p className="message text-text3">That is Captain 
                  America </p>
                </div>
              </div>
              <div className="badge absolute top-0 left-10 w-full h-full text-center text-xs bg-text1 text-white rounded-full flex items-center justify-center">
                14
              </div>
            </div>
            {/* Repeat similar structure for other contacts */}
          </div>

          {/* Chat Section */}
          <div className={`chat relative flex flex-col justify-between w-full h-full z-20 ${themeColors.bg} ${themeColors.text} rounded-xl`}>
            <div className="contact bar flex items-center mb-4 m-4 box-border">
              <div
                className="pic stark mr-4 w-16 h-16 bg-cover bg-center rounded-full"
                style={{ backgroundImage: `url('https://www.sideshow.com/storage/product-images/903421/iron-man_marvel_square.jpg')` }}
              ></div>
              <div className="text">
                <p className="name font-bold">Tony Stark</p>
                <p className="message text-text3">And I... am... Iron Man</p>
              </div>
            </div>
            <div className="chatbox grow mb-4">
              <div className="flex items-center">
                <div className="text bubble max-w-4/5 bg-white px-4 py-2 rounded-2xl mb-2 rounded-bl-sm text-gray-900 shadow-md">
                  Hey Tony, how's it going?
                </div>
              </div>
              <div className="flex items-center justify-end">
                <div className="text bubble max-w-4/5 bg-violet-500 px-4 py-2 rounded-2xl mb-2 rounded-br-sm text-white shadow-md">
                  Great, Cap. Just working on a new project.
                </div>
              </div>
              {/* Add more messages */}
            </div>
            <div className="relative mx-6">
              <div className="box-content flex items-center mb-4 bg-input py-3 px-5 rounded-full shadow-md">
                <i className="fas fa-paperclip fa-lg"></i>
                <input
                  className="w-full ml-3 text-sm outline-none bg-transparent placeholder-gray-400"
                  type="text"
                  placeholder="Type your message..."
                />
                <i className="fas fa-paper-plane fa-lg"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Page;
