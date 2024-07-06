import React from 'react';

const Navbar = () => {
    return <div>
        <header className="text-gray-600 body-font shadow-lg">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img className='w-28 h-14' src="/logo-no-background.png" alt="" />
      
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a href='#about' className="mr-5 font-semibold hover:text-gray-900">About us</a>
     
      <a href='#howitworks' className="mr-5 font-semibold hover:text-gray-900">How it works</a>
      <a href='#FAQ' className="mr-5 font-semibold hover:text-gray-900">FAQ</a>
      
    </nav>
    <button  className="inline-flex items-center bg-blue-600 border-0 px-4 py-2  focus:outline-none text-black hover:bg-gray-200 rounded text-base mt-4 md:mt-0"><a href="#start">Start Now</a>
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
    </div>;
}



export default Navbar;