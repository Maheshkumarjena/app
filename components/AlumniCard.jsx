import React from 'react';
import Link from 'next/link';
// AlumniCard Component to render individual alumni profile

const AlumniCard = ({ name, title, company, image }) => (
    
    <div onClick={()=>navToProfileDetail()}  className="w-[40vw]  xsm:w-[30vw]   md:w-1/5 lg:w-1/5   min-w-[120px] md:min-w-[150px] bg-white rounded-lg shadow-lg text-center mt-4 max-h-[250px] md:max-h-[280px]  lg:max-h-[450px] ">
    <Link href='Profile'>
      <img src={image} alt={name} className="w-full  max-h-[150px] md:max-h-[170px] lg:max-h-[270px] rounded-t-lg object-cover " />
      <div className="p-4">
        <p className="font-bold text-sm md:text-md lg:text-lg">{name}</p>
        <p className="text-[8px] md:text-sm text-gray-600">{title} at {company}</p>
      </div>

    </Link>
    </div>
  );
export default AlumniCard;