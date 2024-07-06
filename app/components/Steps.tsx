import React from 'react';

const Steps = () => {
    return <div id='howitwork' className='flex mb-48'>
        <div className="px-4 py-1 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
      <div className="relative md:col-span-2 lg:col-span-2">
          <img
            className="inset-0 object-fit object-bottom w-full h-90 rounded shadow-lg lg:absolute"
            src="/process.jpg"
            alt=""
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2 md:col-span-2 lg:col-span-3">
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-indigo-50 shadow-lg">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-black rounded bg-deep-purple-accent-400">
                1
              </span>
              <p className="text-lg font-semibold sm:text-base">
              Understand the Process
              </p>
            </div>
            <p className="text-sm text-gray-900">
              Submit referrals easily via website referral section
            </p>
          </div>
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-teal-50 shadow-lg">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-teal-900 rounded bg-teal-accent-400">
                2
              </span>
              <p className="text-lg font-semibold sm:text-base">
              Eligibility for Rewards
              </p>
            </div>
            <p className="text-sm text-gray-900">
              Earn reward once your referral join an program
            </p>
          </div>
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-teal-50 shadow-lg">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-black rounded md:text-teal-900 bg-deep-purple-accent-400 md:bg-teal-accent-400">
                3
              </span>
              <p className="text-lg font-semibold sm:text-base">
              Bonus Distribution
              </p>
            </div>
            <p className="text-sm text-gray-900">
              Both parties will receive a bonus 30 days after the enrollment
            </p>
          </div>
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-indigo-50 shadow-lg">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-black rounded md:text-teal-900 bg-deep-purple-accent-400 md:bg-teal-accent-400">
                4
              </span>
              <p className="text-lg font-semibold sm:text-base">Prepare for Success</p>
            </div>
            <p className="text-sm text-gray-900">
            Ensure you have all necessary information for the referral.
            Missing a step can delay the process, so carefully follow all instructions.
            </p>
          </div>
        </div>
        
      </div>
    </div>
    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 vertical-button">
        <span>R</span>
        <span>E</span>
        <span>F</span>
        <span>E</span>
        <span className='pb-6'>R</span>
        <span>N</span>
        <span>O</span>
        <span>W</span>
</button>
    </div>;
}



export default Steps;