import React from 'react';

const Types = () => {
    return <div>
        <section className="text-gray-600 body-font lg:mt-16">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
    <h2 className="mb-12 text-4xl text-black font-bold leadi text-center sm:text-5xl">What are the <span className='text-blue-600'>Refer</span>  Benefit</h2>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Encourage your friends to advance their careers with a Professional Certificate by sharing your referral link.</p>
    </div>
    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Program</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Referrer Bonus</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Referre Bonus</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-3"> Professional Certificate in Data Science</td>
            <td className="px-4 py-3">7000</td>
            <td className="px-4 py-3">9000</td>
            
          </tr>
          <tr>
            <td className="border-t-2 border-gray-200 px-4 py-3">Professional Certificate in Digital Marketing</td>
            <td className="border-t-2 border-gray-200 px-4 py-3">8000</td>
            <td className="border-t-2 border-gray-200 px-4 py-3">9000</td>
           
          </tr>
          <tr>
            <td className="border-t-2 border-gray-200 px-4 py-3">Professional Certificate in Cybersecurity</td>
            <td className="border-t-2 border-gray-200 px-4 py-3">10000</td>
            <td className="border-t-2 border-gray-200 px-4 py-3">10000</td>
           
          </tr>
          <tr>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Professional Certificate in Project Management</td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">10000</td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">10000</td>
            
          </tr>
        </tbody>
      </table>
    </div>
    <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
     
    </div>
  </div>
</section>
    </div>;
}



export default Types;