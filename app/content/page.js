'use client';

import { useState } from "react";
import useSWR from 'swr'

export default function Page() {
        const [file, setFile] = useState(null);

        const fetcher = (...args) => fetch(...args).then(res => res.json())
        const { data, mutate, error, isLoading } = useSWR(`https://api.smartjinny.com/assets`, fetcher)
        
        // Define the onChange handler function to update the selected file
        const onChange = (event) => {
          setFile(event.target.files[0]);
        };
        
        // Define the onClick handler function to send the selected file to the server
        const onClick = async () => {
          const formData = new FormData();
          formData.append("file", file);

          const res = await fetch("https://api.smartjinny.com/upload", {
            method: "POST",
            body: formData,
          }).then((response) => response.json()).then(mutate());

          console.log(res)
        }
    return (
      <div>
        <title>SMARTJINNY | DEVELOPER</title>
        <meta
          content="NUMBER ONE DEVELOPER WITH BEST QUALITY AND FAST BUILD"
          name="description"
        ></meta>
        <meta content="SMARTJINNY | DEVELOPER" property="og:title" />
        <meta
          content="NUMBER ONE DEVELOPER WITH BEST QUALITY AND FAST BUILD"
          property="og:description"
        />
        <meta content="SMARTJINNY | DEVELOPER" property="twitter:title" />
        <meta
          content="NUMBER ONE DEVELOPER WITH BEST QUALITY AND FAST BUILD"
          property="twitter:description"
        />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="Smartjinny" name="generator" />

        <div>
          <div className="flex justify-center w-screen gap-4 p-10">
            <input
              type="file"
              className="file-input file-input-bordered file-input-info w-full max-w-xs"
              onChange={onChange}
            />
            <button className="btn btn-info" onClick={onClick} disabled={!file}>
              Upload
            </button>
          </div>

          <div className="flex justify-center w-screen">
            <div className="stats stats-vertical shadow w-screen">
              {data?.map((ga) => (
                <a
                  className="stat hover:text-indigo-500 w-full"
                  key={ga._id}
                  href={`https://api.smartjinny.com/download/${ga.filename}`}
                  target="_blank"
                >
                  <div className="stat-value whitespace-normal text-lg sm:text-xl w-full">
                    {ga.filename}
                  </div>
                  <div className="stat-title whitespace-normal w-full">
                    {new Date(ga.updated).toLocaleDateString()}{" "}
                    {new Date(ga.updated).toLocaleTimeString()}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}