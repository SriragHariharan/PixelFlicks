import React from 'react'

function Footer() {
  return (
    <div className='bg-black py-12 px-8 md:px-36 text-neutral-400 border-t border-neutral-800'>
        <div className="mb-12">
            Questions? Call 000-800-919-1694
        </div>
        <div className='grid grid-cols-12 gap-y-8'>
            <div className="md:col-span-3 col-span-6 flex flex-col gap-y-4">
                <div className="hover:text-white hover:underline cursor-pointer transition-colors">FAQ</div>
                <div className="hover:text-white hover:underline cursor-pointer transition-colors">Investor returns</div>
                <div className="hover:text-white hover:underline cursor-pointer transition-colors">Privacy</div>
                <div className="hover:text-white hover:underline cursor-pointer transition-colors">Speed test</div>
            </div>
            <div className="md:col-span-3 col-span-6 flex flex-col gap-y-4">
                <div className="hover:text-white hover:underline cursor-pointer transition-colors">Help centre</div>
                <div className="hover:text-white hover:underline cursor-pointer transition-colors">Jobs</div>
                <div className="hover:text-white hover:underline cursor-pointer transition-colors">Cookie preferences</div>
                <div className="hover:text-white hover:underline cursor-pointer transition-colors">Legal notices</div>
            </div>
            <div className="md:col-span-3 col-span-6 flex flex-col gap-y-4">
                <div className="hover:text-white hover:underline cursor-pointer transition-colors">Account</div>
                <div className="hover:text-white hover:underline cursor-pointer transition-colors">Ways to watch</div>
                <div className="hover:text-white hover:underline cursor-pointer transition-colors">Corporate information</div>
                <div className="hover:text-white hover:underline cursor-pointer transition-colors">Only on Pix</div>
            </div>
            <div className="md:col-span-3 col-span-6 flex flex-col gap-y-4">
                <div className="hover:text-white hover:underline cursor-pointer transition-colors">Media centre</div>
                <div className="hover:text-white hover:underline cursor-pointer transition-colors">Terms of use</div>
                <div className="hover:text-white hover:underline cursor-pointer transition-colors">Contact us</div>
            </div>
        </div>

        <div className="mt-12">
            &copy; Pix India ❤️
        </div>
    </div>
  )
}

export default Footer
