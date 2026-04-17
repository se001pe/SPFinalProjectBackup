'use client';
import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
return (
    <div className = "flex flex-col w-full p-6 text-cente">
        <div className = "flex flex-col w-full text-center">
            <h1 className = "text-4xl font-bold">About AITE</h1>
        </div>
        <div className = "flex flex-col p-6 text-center">
            <h4 className = "text-base">AITE is an interdistrict magnet high school located in Stamford, CT. AITE puts a focus on
            preparing students with 21st century skills through exposure to a technology-rich curriculum. AITE has recently transitioned 
            to a pathway model. The school's four pathways are: biomedical, computer science, digital media and engineering. Each student 
            will pick a pathway to follow at the end of their sophomore year.</h4>
        </div>
        <Image
        src = "/AITESpring2022-1.jpg"
        alt = "About AITE"
        width = {700}
        height = {500}
    />
    </div>
    );
};
export default About;