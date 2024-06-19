import React from 'react';
import { FaCloudDownloadAlt } from "react-icons/fa";
import Link from 'next/link';


const DownloadCV = () => {
  return (
    <div>
        <Link
            href="#"
            download
            className="hover:scale-105 inline-flex transition ease-in-out duration-200 gap-2 h-8 overflow-hidden items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            >
            <FaCloudDownloadAlt className='text-2xl animate-pulse' />
            Download Resume
        </Link>
    </div>
)
}

export default DownloadCV