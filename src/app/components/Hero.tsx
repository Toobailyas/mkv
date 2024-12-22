import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div id='hero'  className="h-screen bg-cover bg-center bg-fixed flex flex-col justify-between"
    style={{
      backgroundImage: "url('/images/cover-pic (1).jpg')", // Background image
    }}>
         <div className="flex-1 flex items-center justify-center text-center text-white bg-black bg-opacity-50">
        <div>
          <div className='m-7'>
          <h1 className="text-4xl md:text-6xl font-bold">
            We are the Agents of Positive Change
          </h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            High-Quality Education: Providing free, top-tier education to empower individuals and create lasting change. Join MK Volunteers to make a difference.
          </p>
          <div className="py-3 mt-4 rounded-full bg-green-900 hover:bg-slate-700 text-white w-48 mx-auto">
                <Link href="https://docs.google.com/forms/d/1qi2jklZNYRvycZEs3uODNXYEWYBIB8lSPaHS5nEnjVA/viewform" target="_blank">
                    Join Now
                </Link>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Hero