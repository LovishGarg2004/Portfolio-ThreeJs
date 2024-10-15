import React from 'react'

const Footer = () => {
    return (
        <section className="c-space mt-80 pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                <a href="https://github.com/LovishGarg2004" target="_blank" className="social-icon hover:bg-black-500 transition-colors duration-25">
                    <img src="/assets/github.svg" alt="github" className="w-1/2 -1/2"/>
                </a>
                <a href="https://x.com/LovishGarg2004" target="_blank" className="social-icon hover:bg-black-500 transition-colors duration-25">
                    <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 -1/2"/>
                </a>
                <a href="https://www.instagram.com/official_lovishgarg200466/profilecard/?igsh=MTB2OHI4ems1eDl1dA==" target="_blank" className="social-icon hover:bg-black-500 transition-colors duration-25">
                    <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 -1/2"/>
                </a>
            </div>

            <p className="text-white-500">
                © 2024 Lovish. All rights reserved.
            </p>
        </section>
    )
}
export default Footer
