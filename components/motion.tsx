import { m } from "framer-motion";
import * as motion from "motion/react-client";
import React from "react";

export default function  WildcardKeyframes( { children }: { children: React.ReactNode } ) {
    return (
        <motion.div
            style={box}
            whileHover = {{
                scale: [null,1,1.6],
                transition: {
                    duration: 0.5,
                    times: [0,0.6,1],
                    ease: ["easeInOut","easeOut"],
                },
            }}
            transition = {{

                duration: 0.3,
                ease: "easeOut",
            }}
        >
            {children}
        <motion.p
            style = {{
                color:"white", 
                textAlign: "center", 
                marginTop: 55,
                fontSize: 18,
             }}
            whileHover={{
                y: [-5, 0, -5],
                transition: { duration: 0.6, repeat: Infinity }
            }}
           >
        </motion.p>
      </motion.div>
     
   );
};

const box = {
    width: 150,
    height: 150,
    backgroundColor: "#071516",
    borderRadius: 5,
}