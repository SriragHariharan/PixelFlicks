import React from 'react'

function Footer() {
  return (
    <div  className='bg-black py-8 px-36 text-gray-100'>
        <div className="mb-12">
            Questions? Call 000-800-919-1694
        </div>
        <div className='grid grid-cols-12'>
            <div className="md:col-span-3 col-span-6 flex flex-col gap-y-4">
                <div>faq</div>
                <div>investor returns</div>
                <div>Privacy</div>
                <div>Speed test</div>
            </div>
            <div className="md:col-span-3 col-span-6 flex flex-col gap-y-4">
                <div>Help centers</div>
                <div>Jobs</div>
                <div>Cookie preferences</div>
                <div>Legal notices</div>
            </div>
            <div className="md:col-span-3 col-span-6 flex flex-col gap-y-4">
                <div>Account</div>
                <div>Ways to watch</div>
                <div>Corporate Information</div>
                <div>Only on Netflix</div>
            </div>
            <div className="md:col-span-3 col-span-6 flex flex-col gap-y-4">
                <div>Media center</div>
                <div>Terms of use</div>
                <div>Contact Us</div>
            </div>
        </div>

        <div className="mt-12">
            &copy; PixelFlicks India ❤️
        </div>
    </div>
  )
}

export default Footer