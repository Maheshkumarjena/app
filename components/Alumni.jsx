import React from 'react'
import AlumniCard from './AlumniCard';

const Alumni = ({ alumniData, numToShow }) => {

    // E

    return (
      <div className=' max-w-[1500px] px-[1px] md:px-4 lg:px-6'>
        <h2 className=' font-extrabold font-mono text-3xl mt-[8vw] '> Alumni </h2>
        <div className="flex w-[full] flex-wrap justify-between  max-h-[1500px]   gap-1 ">
        {alumniData.slice(0, numToShow).map((alum, index) => (
          <AlumniCard
            key={index}
            name={alum.name}
            title={alum.title}
            company={alum.company}
            image={alum.image}
          />
        ))}
      </div>
      </div>
    );
  };
export default Alumni