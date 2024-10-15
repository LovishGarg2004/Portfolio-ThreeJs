import React from 'react'
import Globe from "react-globe.gl"
import Button from "/src/components/Button.jsx"
import {useState} from "react";
import RotatingGlobe from "../components/RotatingGlobe.jsx";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("lovishgarg2004@gmail.com");
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false)
        }, 2000);
    }

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">
                                Hi, I'm Lovish Garg
                            </p>
                            <p className="grid-subtext">
                                Proficient in MERN and DSA; with a solid foundation in Web-development principles and a drive for continual learning and growth.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:w-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I specialize in JavaScript, Node.js with a focus on React and Next.js ecosystems.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <RotatingGlobe />


                        </div>

                        <div>
                            <p className="grid-headtext">
                                I work remotely across most timezones
                            </p>
                            <p className="grid-subtext">
                                I'm based in India, with remote work available.
                            </p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-20" />
                        </div>
                    </div>

                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">
                                My Passion for Coding.
                            </p>
                            <p className="grid-subtext">
                                I love solving problems and building things through code. Coding isn't just my profession-it is my passion.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[136px] sm:h-[276px] h-fit object-cover sm:object-top"/>
                        <div className="space-y-2">
                            <p className="grid-subtext"></p>
                        </div>
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">
                                Contact me
                            </p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} alt="copy"/>
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                                    lovishgarg2004@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About
