import React from 'react'

function Subscribe() {
    return (
        <div className='w-screen h-56 flex flex-col lg:flex-row lg:items-center justify-center px-10 py-5 lg:py-0 gap-5 lg:px-28 xl:px-52  bg-[#ed2e35]'>
            <div className='lg:basis-1/2 lg:text-2xl text-lg'>
                <h1 className='text-white font-bold text-3xl'>Newsletter </h1>
                <p className='text-gray-200 whitespace-nowrap'>Stay tune and get the latest update</p>
            </div>
            <div className='flex lg:basis-1/2 lg:px-5'>
                <input class="shadow appearance-none  rounded w-full py-3 px-3 text-gray-700  leading-tight focus:border-[#ed2e35] border-r-0 rounded-r-none focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter mail address" />
                <button class="bg-gray-900 hover:bg-red-700 text-white font-bold py-2 px-10 rounded focus:outline-dashed focus:shadow-outline border-l-0 rounded-l-none" type="button">
                    Submit
                </button>
            </div>
        </div>
    )
}

export default Subscribe