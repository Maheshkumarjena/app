import React from 'react';

const Profile = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img
          className="w-full h-40 object-cover"
          src="/assets/Images/banner.jpg" // Replace with your banner image path
          alt="Banner"
        />
        <img
          className="w-24 h-24 rounded-full border-4 border-white absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src="/assets/Images/profile.jpg" // Replace with your profile image path
          alt="Profile"
        />
      </div>
      <div className="px-6 py-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800">Ansuman Swain</h2>
        <p className="text-gray-600">Java Backend Intern @CredenceSoft || SpringBoot, Java, MySQL, Microservices || CSE Undergrad @ ITER (SOA) || Learner</p>
        <p className="text-sm text-gray-500 mt-2">Bhubaneswar, Odisha, India</p>
        <div className="mt-4">
          <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-500">Message</button>
        </div>
        <div className="mt-2">
          <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-300">More</button>
        </div>
      </div>
      <div className="px-6 py-2 flex justify-center space-x-4">
        <img
          className="w-10 h-10 rounded-full"
          src="/assets/Images/company1.png" // Replace with company logo path
          alt="CredenceSoft"
        />
        <img
          className="w-10 h-10 rounded-full"
          src="/assets/Images/company2.png" // Replace with university logo path
          alt="Siksha 'O' Anusandhan University"
        />
      </div>
    </div>
  );
};

export default Profile;
