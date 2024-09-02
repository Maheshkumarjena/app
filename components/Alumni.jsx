"use client"
import React from 'react'
import AlumniCard from './AlumniCard';
import { useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import axios from 'axios';


const Alumni = ({ renderAll, numToShow }) => {
  const theme=useSelector
  ((state)=>state.theme)
  
  const [alumnis,setAlumnis]=useState([]);

  useEffect(()=>{
     const getUser=()=>{
        axios.get('http://localhost:3001/getUser')
        .then((response)=>
          setAlumnis(response.data.filter((alumnis)=>alumnis.type==='alumni'))
      )
      .catch((err)=>
        console.log(err)
    )
  }
  getUser()
},[])

console.log(alumnis)

  // E
    const dataToRender = renderAll ? alumnis : alumnis.slice(0, numToShow);


    return (
      <div className=   {`w-[100vw] ${theme==="dark" ? "bg-gray-900" : "bg-white"} `}>
         <div className='max-w-[1500px] m-auto px-[2vw] md:px-4 ' >

        <h2 className=' font-extrabold font-mono text-3xl mt-[5vw] '> Alumni </h2>
        <div className="flex w-[full] flex-wrap justify-around md:justify-between   gap-1 ">
        {dataToRender.map((alum) => (
                <AlumniCard
                    name={alum.name}
                    title={alum.title}
                    college={alum.collegeName}
                    image={alum.image}
                    id={alum._id}
                />
            ))}
      </div>
      </div>
      </div>
    );
  };
export default Alumni