import { useSelector } from 'react-redux';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
const ProfileSettings = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [url,SetUrl]=useState('');
    const [grade,setGrade]=useState('');
    const [specialization,setSpecialization]=useState('');
    const [accountType,setAccountType]=useState('');
    const [dob,setDob]=useState('');
    
    console.log("profilesection")


    
    const theme = useSelector((state) => state.theme);
    const user = useSelector((state) => state.user);

    console.log(user,"user data")

    const handleSave = (e) => {
        e.preventDefault();
        try {
            axios.put('http://localhost:3001/editUser'),{
                name,
                email,
                dob,
                grade,
                specialization,
                accountType,
                url

            }
            console.log(response);
      console.log('Submitted successfully');
        } catch (error) {
            
        }
    };

    return (
        <div
            className={`${
                theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
            } p-6 max-w-4xl mx-auto rounded-lg shadow-md`}
        >
            <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
                <div className="flex-grow">
                    <label className="block font-semibold mb-2">Username</label>
                    <div className="flex items-center">
                        <span
                            className={`${
                                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
                            } px-4 py-2 rounded-l-md`}
                        >
                            workcation.com/
                        </span>
                        <input
                            type="text"
                            className={`${
                                theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
                            } p-2 rounded-r-md focus:outline-none w-full`}
                            placeholder="deblewis"
                        />
                    </div>
                </div>
                <div className="flex-shrink-0 mt-6 md:mt-0 md:ml-6">
                    <img
                        src="/path/to/photo.jpg" // Replace with dynamic image path
                        alt="Profile"
                        className="rounded-full h-24 w-24 object-cover"
                    />
                </div>
            </div>

            <div className="mb-6">
                <label className="block font-semibold mb-2">About</label>
                <textarea
                    className={`${
                        theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
                    } p-2 w-full rounded-md focus:outline-none`}
                    placeholder="Brief description for your profile. URLs are hyperlinked."
                    rows="4"
                ></textarea>
            </div>

            <div className="grid grid-cols-1 ">
                <div>
                    <label className="block font-semibold mb-2">Name</label>
                    <input
                    value={user.name} 
                        onChange={(e)=>setName(e.target.value)}
                        placeholder={user.name}
                        type="text"
                        className={`${
                            theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
                        } p-2 w-full rounded-md focus:outline-none`}
                    />
                </div>
               
            </div>

{/* gird 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block font-semibold mb-2">dob</label>
                    <input
                    value={user.dob} 
                        onChange={(e)=>setDob(e.target.value)}
                        
                        type="text"
                        className={`${
                            theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
                        } p-2 w-full rounded-md focus:outline-none`}
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-2">Account Type</label>
                    <input
                    value={user.type} 
                        onChange={(e)=>setType(e.target.value)}
                        
                        type="text"
                        className={`${
                            theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
                        } p-2 w-full rounded-md focus:outline-none`}
                    />
                </div>
            </div>


{/* gird 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block font-semibold mb-2">URL</label>
                    <input
                        type="text"
                        className={`${
                            theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
                        } p-2 w-full rounded-md focus:outline-none`}
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-2">college</label>
                    <input
                        value={user.college} 
                        onChange={(e)=>setCollege(e.target.value)}
                        
                        type="text"
                        className={`${
                            theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
                        } p-2 w-full rounded-md focus:outline-none`}
                    />
                </div>
              
            </div>


{/* gird 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block font-semibold mb-2">specialization</label>
                    <input
                        type="text"
                        value={user.specialization} 
                        onChange={(e)=>setSpecialization(e.target.value)}
                        className={`${
                            theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
                        } p-2 w-full rounded-md focus:outline-none`}
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-2">Grade</label>
                    <input
                    value={user.grade} 
                        onChange={(e)=>setGrade(e.target.value)}
                        
                        type="text"
                        className={`${
                            theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
                        } p-2 w-full rounded-md focus:outline-none`}
                    />
                </div>
               
            </div>


            <div className="border-t border-gray-300 mt-6 pt-6">
                <h2 className="font-semibold text-lg mb-4">Privacy</h2>

                <div className="space-y-4">
                    {[
                        { label: 'Available to hire', description: 'Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.' },
                        { label: 'Make account private', description: 'Pharetra morbi dui mi mattis tellus sollicitudin cursus pharetra.' },
                        { label: 'Allow commenting', description: 'Integer amet, nunc hendrerit adipiscing nam. Elementum ame.' },
                        { label: 'Allow mentions', description: 'Adipiscing est venenatis enim molestie commodo eu gravid.' },
                    ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">{item.label}</p>
                                <p
                                    className={`${
                                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                    } text-sm`}
                                >
                                    {item.description}
                                </p>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    className={`${
                                        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                                    } toggle-checkbox`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-end mt-6">
                <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-900 px-4 py-2 rounded-md mr-2"
                >
                    Cancel
                </button>
                <button onClick={handleSave}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default ProfileSettings;
