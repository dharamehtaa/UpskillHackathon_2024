import React from "react";

export default function Panel1() {
  return (
    <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
      <h1 className="p-4 text-4xl text-gray-500 font-semibold leading-none text-center">What our customers are saying about us</h1>
      <div className="flex flex-wrap justify-center">
        {/* Card 1 */}
        <div className="max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-600">
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>Amazing platform! Found my mentor here who guided me through every step of my career transition. Highly recommend!
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-600">
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-600 text-gray-50">
            <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300" />
            <p className="text-xl font-semibold leading-tight">Taylor</p>
            {/* <p className="text-sm uppercase">Aliquam illum</p> */}
          </div>
        </div>
        {/* Card 2 */}
        <div className="max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-600">
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>Incredible experience! The mentors are supportive and knowledgeable. I gained valuable insights that helped me excel in my field.
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-600">
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-600 text-gray-50">
            <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300" />
            <p className="text-xl font-semibold leading-tight">Alex</p>
            {/* <p className="text-sm uppercase">Aliquam illum</p> */}
          </div>
        </div>
        {/* Card 3 */}
        <div className="max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-600">
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>Life-changing! The mentorship sessions provided me with clarity and direction. Grateful for the opportunity.
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-600">
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-600 text-gray-50">
            <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300" />
            <p className="text-xl font-semibold leading-tight">Morgan</p>
            {/* <p className="text-sm uppercase">Aliquam illum</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}
