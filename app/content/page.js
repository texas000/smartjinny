'use client';

import { useState } from "react";
import useSWR from 'swr'
import Loading from "../loading";

export default function Page() {
        const [file, setFile] = useState(null);
        const [isLoading, setLoading] = useState(false);

        const fetcher = (...args) => fetch(...args).then(res => res.json())
        const { data, mutate, error } = useSWR(`https://api.smartjinny.com/assets`, fetcher)
        
        // Define the onChange handler function to update the selected file
        const onChange = (event) => {
          const selectedFile = event.target.files[0];
          const fileSizeInBytes = selectedFile.size;
          const fileSizeInMB = fileSizeInBytes / (1024 * 1024);
          if (fileSizeInMB > 5) {
            window.alert('FILE SIZE LIMIT: 5MB')
          } else {
            setFile(event.target.files[0]);
          }
        };
        
        // Define the onClick handler function to send the selected file to the server
        const onClick = async () => {
          setLoading(true)
          const formData = new FormData();
          formData.append("file", file);

          await fetch("https://api.smartjinny.com/upload", {
            method: "POST",
            body: formData,
          }).then(()=> {
            setLoading(false)
            mutate(data);
          })
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

          {isLoading ? (
            <Loading />
          ) : (
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {data?.map((ga) => (
                <div
                  className="flex max-w-xl flex-col items-center align-middle justify-between"
                  key={ga._id}
                >
                  <a
                    className="flex items-center gap-x-4 text-xs max-w-sm max-h-sm"
                    href={`https://api.smartjinny.com/download/${ga.filename}`}
                    target="_blank"
                  >
                    <div
                      className="w-36 h-36 bg-cover bg-clip-padding hover:bg-origin-padding bg-no-repeat"
                      style={{
                        backgroundImage: ga.content_type.split('/')[0]==='image' ? `url(https://api.smartjinny.com/download/${ga.filename})`: 'url(https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png)',
                      }}
                    >
                    </div>
                  </a>
                  <div className="relative font-extrabold mt-8 flex items-center gap-x-4">
                    {ga.filename}
                  </div>
                  <div className="relative text-gray-500 flex items-center gap-x-4">
                    {new Date(ga?.updated).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
}
// {ga.content_type.split('/')[0]==='image' ? <img src={`https://api.smartjinny.com/download/${ga.filename}`}/> : 
//                     <img src='https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png'/>
{/* <div className="flex justify-center w-screen">
              <div className="stats stats-vertical shadow w-screen">
                {data?.reverse().map((ga) => (
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
            </div> */}