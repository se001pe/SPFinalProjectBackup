'use client';
import React from 'react';
import Link from "next/link";

export default function Apply() {
    return (
    <div className = "flex flex-col w-full">
        <div className = "flex flex-col w-full">
            <h1 className = "text-xl text-center text-bold ">Lottery Information</h1>
        </div>
        <div className = "flex flex-col w-full text-base">
            Magnet school admission is offered through a controlled lottery as outlined in BOE Policy 5117.2 and 5117.2R. 
            The lottery is controlled to balance enrollment to achieve the integration set forth by the Board of Education.
            In a controlled lottery, the number of students accepted annually at each school and from each waitlist are 
            dependent upon overall SPS enrollment. Enrollment numbers are reviewed continuously throughout the lottery process, 
            in order to maintain balance and meet the SPS integration standard. AITE is an “Inter District-wide Magnet School.” 
            There are no assigned attendance areas for Scofield or AITE. All students are admitted via lottery.  
        </div>
    </div>
    )    
}