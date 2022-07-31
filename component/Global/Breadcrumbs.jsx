import { Fragment } from "react";

export default function Breadcrumbs({first}) {
    var sample = [
      {
        path: "/",
        label: "Account",
        enable: true,
      },
      {
        path: "/",
        label: "Profile",
        enable: true,
      },
    ];
    if(first) {
        sample=first
    }
    return (
        <div className="flex items-center p-4 overflow-y-auto whitespace-nowrap">
        <a href="/" className="text-gray-600 dark:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
        </a>
        {sample.map(ga=>(
            <Fragment key={ga.label}>
                <span className="mx-5 text-gray-500 dark:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
        </span>

        <a href={ga.path} className="text-gray-600 dark:text-gray-200 hover:underline">
            {ga.label}
        </a>
            </Fragment>
        ))}
        
    </div>
    );
}