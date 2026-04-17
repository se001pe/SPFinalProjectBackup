'use client';
import Link from 'next/link';

const labels: Record <string, string> = {
    biomed: "Biomedical Science",
    "computer-science": "Computer Science",
    "digital-media": "Digital Media & Design",
    engineering: "Engineering",
};

export default function Breadcrumb( { pathway } : { pathway: string } ) {
    return (
        <nav className = "breadcrumb">
            <ul style={{ display: "flex", gap: "8px", listStyle:"none" }}>
                <li>
                    <Link href="/" className="hover:text-blue-700 transition">Home</Link>
                </li>
                <li> - </li>
                <li>
                    <Link href="#" className="hover:text-blue-700 transition">Pathway</Link>
                </li>
            </ul>
        </nav>
    )
}