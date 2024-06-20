import React from 'react';
import { FaCloudDownloadAlt } from "react-icons/fa";
import Link from 'next/link';


const DownloadCV = () => {
  return (
    <div>
        <Link
            href="#"
            download
            className="hover:scale-105 inline-flex transition ease-in-out duration-200 gap-2 h-8 overflow-hidden items-center justify-center rounded-md bg-fuchsia-700 px-4 py-2 text-sm font-medium text-gray-50 shadow hover:bg-fuchsia-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
            >
            <FaCloudDownloadAlt className='text-2xl animate-pulse' />
            Download Resume
        </Link>
    </div>
)
}

export default DownloadCV