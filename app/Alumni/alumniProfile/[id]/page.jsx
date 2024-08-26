// app/Alumni/[id].jsx
import React from 'react';  // Add this line
import Image from 'next/image';
import alumniProfiles from '@app/StaticData';

const AlumniProfile = ({params}) => {
  const id  = params.id;

  console.log(params.id)
  console.log('al')
  // Find the alumni by ID
//   console.log(id)
  const alumni = alumniProfiles.find((alum) => alum.id === parseInt(id));
  console.log(alumni)

  if (!alumni) {
    return <p>Alumni not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col items-center">
        <Image
          src={alumni.image || "not found"}
          alt={alumni.name}
          width={250}
          height={250}
          className="rounded-full object-cover"
        />
        <h1 className="text-2xl font-bold mt-4">{alumni.name}</h1>
        <p className="text-gray-600 mt-2">{alumni.title} at {alumni.company}</p>
        <p className="text-gray-500 mt-2">{alumni.expertise}</p>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">About {alumni.name}</h2>
        <p className="text-gray-700 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
        </p>
        {/* Add more detailed information about the alumni here */}
      </div>
    </div>
  );
};

export default AlumniProfile;
