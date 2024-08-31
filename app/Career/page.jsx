'use client';
import React from 'react';
import { useSelector } from 'react-redux';

const careers = [
  {
    title: 'Software Engineering',
    description: 'Develop and maintain software applications, websites, and systems.',
  },
  {
    title: 'Mechanical Engineering',
    description: 'Design and develop mechanical systems and components.',
  },
  {
    title: 'Chemical Engineering',
    description: 'Work with chemical processes and develop products in various industries.',
  },
  {
    title: 'Biotechnology',
    description: 'Apply biological principles to develop products and technologies in healthcare, agriculture, and environmental sectors.',
  },
  // Add more careers as needed
];

const CareerPage = () => {
  const theme = useSelector((state) => state.theme.theme); // Access the theme from Redux

  const themeColors = {
    bg: theme === 'dark' ? 'bg-gray-900' : 'bg-white',
    text: theme === 'dark' ? 'text-white' : 'text-gray-900',
    cardBg: theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100',
    cardText: theme === 'dark' ? 'text-white' : 'text-gray-800',
    cardBorder: theme === 'dark' ? 'border-gray-700' : 'border-gray-200',
  };

  return (
    <div className={`min-h-screen py-8 px-4 ${themeColors.bg} ${themeColors.text}`}>
      <h1 className="text-3xl font-bold mb-8 text-center">Career Perspectives</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {careers.map((career, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg ${themeColors.cardBg} ${themeColors.cardText} border ${themeColors.cardBorder}`}
          >
            <h2 className="text-xl font-semibold mb-4">{career.title}</h2>
            <p className="text-md">{career.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerPage;
