"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Alumni from '@components/Alumni';
import AlumniCard from '@components/AlumniCard';
import alumniProfiles from '@app/StaticData';

const SearchInput = () => {
  
  const theme = useSelector(state => state.theme);
  return (
<>

    <div className='max-w-1500 px-[2vw] md:px-4 lg:px-6 '>

    <div className={`pt-[3vw] ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} outline-none focus:outline-none`}>
      <div className="relative flex">
        <select 
          className={`h-10 px-4  rounded-l-full text-sm focus:outline-none outline-none border-2 
            ${theme === 'dark' ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-500'} 
            border-r-1 cursor-pointer max-h-10 overflow-y-hidden`}>
          <option className="font-medium cursor-pointer" value="filter">filter</option>
        </select>
        <input 
          type="search" 
          name="search"
          placeholder="Search"
          className={`h-10 flex px-5 w-full rounded-r-full text-sm focus:outline-none border-2 border-l-0 
            ${theme === 'dark' ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-500'}`}
          autoComplete="off" 
          spellCheck="false" 
          required 
          step="any" 
          autoCapitalize="none" 
          autoFocus 
        />
        <button 
          type="submit" 
          className="absolute inset-y-0 right-0 mr-2 flex items-center px-2">
          <FontAwesomeIcon 
            icon={faSearch} 
            className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} 
          />
        </button>
      </div>
      
    </div>
    </div>
    <Alumni renderAll="true"  />
    </>

  );
};

export default SearchInput;
