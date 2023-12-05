import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.avif'

<meta name="Company Profile Fahri" content="Ini adalah code challenge kedua dari purwadhika"></meta>

export default () => {

  const [state, setState] = useState(false)

  return (
      <nav className=" bg-white w-full border-b md:border-0 md:static">
          <div className="items-center px-4 max-w-screen-full mx-auto md:flex md:px-8">
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link to= "/">
                        <img
                            src={Logo} 
                            width={120} 
                            height={50}
                            alt="SleeplessNight Logo"
                        />
                    </Link>
                  <div className="md:hidden">
                      <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                          onClick={() => setState(!state)}
                      >
                          {
                              state ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                              ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                  </svg>
                              )
                          }
                      </button>
                  </div>
              </div>
              <div className={`text-lg  font-semibold flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ state ? 'block' : 'hidden'}`}>
                  <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0 font-semibold">
                  <li className='text-gray-600 hover:text-indigo-600'>
                     <Link to="/">Home</Link>
                     </li>
                  <li className='text-gray-600 hover:text-indigo-600'>
                     <Link to="/About">About Us</Link>
                     </li>
                 <li className='text-gray-600 hover:text-indigo-600'>
                    <Link to="/Product">Product</Link>
                    </li>
                <li className='text-gray-600 hover:text-indigo-600'>
                    <Link to="/Teams">Teams</Link>
                    </li>
                  </ul>
              </div>
          </div>
      </nav>
  )
}