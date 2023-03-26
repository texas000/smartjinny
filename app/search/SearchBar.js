'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import Loading from '../loading';
import useSWR from 'swr'

import { useRouter } from 'next/navigation';

export default function SearchBar() {
    const searchParams = useSearchParams();

    const search = searchParams.get('search');
    const title = `<h1>Search result for <b>${search}</b></h1>`

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR(`https://api.smartjinny.com/search?search_query=${search}`, fetcher)
    
    const [input, setInput] = useState("");
    const { data: suggestions } = useSWR(input?`https://api.smartjinny.com/search/recommendation?query=${input}`:null, fetcher)

    const router = useRouter();

    if(search) {
        return (
          <div className="lg:w-3/4 w-full">
            <div className="flex flex-col justify-center w-screen px-10 xl:px-20">
              <form action="/discussions" acceptCharset="UTF-8" method="get">
                <div className="border border-gray-300 rounded-lg relative mb-2">
                  <input
                    className="transition focus:outline-0 border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-lg bg-gray-200 py-2 pr-4 pl-10 block w-full appearance-none leading-normal ds-input"
                    placeholder="Search..."
                    type="text"
                    name="q"
                    id="q"
                    autoComplete="off"
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key == "Enter") {
                        e.preventDefault();
                        router.push(`/search?search=${input}`);
                      }
                    }}
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
                    <svg
                      className="fill-current pointer-events-none text-gray-600 w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                    </svg>
                  </div>
                </div>
              </form>
              <div className="bg-white rounded-lg justify-center static">
                {suggestions ? (
                  suggestions.data?.map((ga) => (
                    <a
                      className="block no-underline p-3 px-6 rounded-t-lg text-gray-700 hover:bg-gray-100"
                      href={`/search?search=${ga}`}
                      key={ga}
                    >
                      {ga}
                    </a>
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div
              className="flex justify-center py-10 w-screen text-center text-black text-xl"
              dangerouslySetInnerHTML={{ __html: title }}
            ></div>
            {isLoading ? (
              <div className='flex justify-center w-screen py-48'>
                <Loading />
              </div>
            ) : data ? (
              <div className="flex justify-center w-screen">
                <div className="stats stats-vertical shadow w-screen">
                  {data.data.map((ga) => (
                    <a
                      className="stat hover:text-indigo-500 w-full"
                      key={ga.title}
                      href={ga.link}
                    >
                      <div className="stat-value whitespace-normal text-lg sm:text-xl w-full">
                        {ga.title}
                      </div>
                      <div className="stat-title whitespace-normal w-full">
                        {ga.description}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <div>{JSON.stringify(error)}</div>
            )}
          </div>
        );
    }
    return (
      <div>
          <div className="hero min-h-screen">
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-center text-indigo-500">
              <div className="max-w-md">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  onKeyDown={(e) => {
                    if (e.key == "Enter") {
                      router.push(`/search?search=${e.target.value}`);
                    }
                  }}
                />
              </div>
            </div>
          </div>
      </div>
    );
  }