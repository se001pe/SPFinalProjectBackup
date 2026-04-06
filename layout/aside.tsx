'use client';
import React from 'react';
import ButtonUI from "@/layout/ui/button";
import { FaRegFile } from "react-icons/fa6";
import Link from "next/link";

const Aside: React.FC = () => {
  return (    
    <aside className="w-64 bg-zinc-600 p-6 border-r border-zinc-700">
        <FaRegFile />
        <p className="text-base text-white">
          <Link href = "pathways/biomed">Biomedical Science Pathway</ Link>
        </p>
        <FaRegFile />
        <p className="text-base text-white">
          <Link href = "pathways/computer-science">Computer Science Pathway</Link>
        </p>
        <FaRegFile />
        <p className="text-base text-white">
          <Link href = "pathways/engineering">Engineering Pathway</Link>
        </p>
        
    </aside>
    
  );
}
export default Aside;