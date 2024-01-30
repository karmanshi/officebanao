import React, { useCallback } from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './workorder.css';
import { useState } from 'react';

const Navbar = () => {
    const [formData, setFormData] = useState({
        name: '',
        startDate: '',
        endDate: '',
        code:''
      });
      const handleInputChange = useCallback((e) => {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }));
      }, []);
    
      const handleSubmit = useCallback((e) => {
        e.preventDefault();
    
        // Log form data to the console
        console.log('Submitted Data:', formData);
    
        // Reset the form fields
        setFormData({
            name: '',
            startDate: '',
            endDate: '',
            code:''
        });
      }, [formData]);
    
    


    function closeNav() {
        document.getElementById("mySidepanel").style.width = "0";
    }
    function openNav() {
        document.getElementById("mySidepanel").style.width = "30vw";
    }

    return (
        <div className='m-0 p-6'>
            <div className='grid grid-cols-2 gap-4'>
                <div className='flex justify-content-start items-align-center'>
                    <i className="bi bi-chevron-left font-bold text-xl"></i>
                    <h1 className='text-start font-bold text-xl ml-2'>
                        Create Workorder
                    </h1>

                </div>
                <div className='flex justify-end items-center' >

                    <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 rounded-xl text-xl px-8 py-1.5 text-center " onClick={openNav}>Save</button>

                    <div>

                        <div id="mySidepanel" className="sidepanel">
                            <button type="button" className="closebtn" onClick={closeNav}>×</button>

                            <div className='w-100 flex justify-start text-left m-10'>
                                <form className=" w-[100%]" onSubmit={handleSubmit}>
                                    <div className="mb-5">
                                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Client</label >
                                        <select name="name" value={formData.name} onChange={handleInputChange}  id="client" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Client Name 
                                        ">
                                            <option>Client Name</option>
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="C">C</option>
                                            <option value="D">D</option>
                                        </select>
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="Datefcommencement" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of commencement</label>
                                        <input type="date" id="Datefcommencement" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" " required name="startDate" value={formData.startDate} onChange={handleInputChange}  />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="Dateofcompletion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of completion</label>
                                        <input type="date" id="Dateofcompletion" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" " required name="endDate" value={formData.endDate} onChange={handleInputChange}  />
                                    </div>

                                    <div className="mb-5">
                                        <label htmlFor="rfqcode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">RFQ Code</label>
                                        <input type="text" id="rfqcode" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="RFQ Code" required name="code" value={formData.code} onChange={handleInputChange}  />
                                    </div>


                                    <button type="submit" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 rounded-xl text-xl px-8 py-1.5 ">Done</button>

                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='my-5'>
                <ul className="flex font-bold ">
                    <li className=" border-b-4 border-black py-2.5 px-20" id="overview_link">
                        <Link className="hover:text-blue-800" to="/">Overview</Link>
                    </li>
                    <li className="border-b-4 border-black-500 py-2.5 px-20" id="other_link">
                        <Link className="text-slate-400	 hover:text-blue-800" to="/other">Other</Link>
                    </li>

                </ul>
            </div>
            <Outlet></Outlet>

        </div>
    )
}

export default Navbar
