'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import Loading from '../loading';
import useSWR from 'swr'

import { useRouter } from 'next/navigation';

export default function SearchBar() {
    const searchParams = useSearchParams();

    const search = searchParams.get('search');
    const title = `Search result for <b>${search}</b>`

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR(`https://api.smartjinny.com/search?search_query=${search}`, fetcher)
    
    const router = useRouter();

    if(search) {
        return (
          <div className="p-20">
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
            <h1
              className="text-center text-black text-xl"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h1>
            {isLoading ? (
              <Loading />
            ) : data ? (
              <div>
                {/* {JSON.stringify(data)} */}
                {data.data.map((ga) => (
                  <div key={ga.title}>
                    <a href={ga.link} className="text-blue-700 font-semibold" target="_blank">
                      {ga.title}
                    </a>
                    <p className="text-gray-500">{ga.description}</p>
                  </div>
                ))}
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