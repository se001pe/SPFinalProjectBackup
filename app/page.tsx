'use client';
import React from 'react';
import { motion } from 'framer-motion';
import HomeHeader from "@/components/homeheader";
import WildcardKeyframes from "@/components/motion";
import HTMLContent from '@/components/count';
import { MotionConfig } from 'framer-motion';
import Link from 'next/link';

const labels = {
    biomed: "Biomedical Science",
    "computer-science": "Computer Science",
    "digital-media": "Digital Media",
    engineering: "Engineering",
};

const Home: React.FC = () => {

return (
    <div>
        <div className = "flex flex-row w-full text-center p-10">
            <HomeHeader />
        </div>
        <div className = "flex flex-row w-full align-center px-50 gap-x-20">
            <Link href="pathways/biomed">
                <WildcardKeyframes>
                    <motion.p
                        style={{ color: "gold",fontSize: 18, fontWeight:700, lineHeight: "1.6", fontFamily: "Times New Roman", textAlign:"center"}}
                        whileHover={{y: [-5, 0, -5]}}
                        transition={{duration: 0.6, repeat:Infinity}}
                    >
                        {labels.biomed}
                    </motion.p>
                </WildcardKeyframes>
            </Link>
                <Link href="pathways/computer-science">
                    <WildcardKeyframes>
                    <motion.p
                        style={{ color: "gold",fontSize: 18}}
                        whileHover={{y: [-5, 0, -5]}}
                        transition={{duration: 0.6, repeat:Infinity}}
                    >
                        {labels["computer-science"]}
                    </motion.p>
                </WildcardKeyframes>
             </Link>
            <WildcardKeyframes>
                <motion.p
                    style={{ color: "gold",fontSize: 18,textAlign:"center"}}
                    whileHover={{y: [-5, 0, -5]}}
                    transition={{duration: 0.6, repeat:Infinity}}
                >
                    {labels["digital-media"]}
                </motion.p>
                </WildcardKeyframes>
            <Link href = "pathways/engineering">
                <WildcardKeyframes>
                    <motion.p
                        style={{ color: "gold",fontSize: 18,textAlign:"center"}}
                        whileHover={{y: [-5, 0, -5]}}
                        transition={{duration: 0.6, repeat:Infinity}}
                    >
                        {labels.engineering}
                    </motion.p>
                 </WildcardKeyframes>
                </Link>
             </div>
            <div className = "flex flex-col p=10">
                <HTMLContent />        
            </div>
     </div>
    );
};
export default Home;