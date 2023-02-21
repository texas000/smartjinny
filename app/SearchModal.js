'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useSWR from 'swr'

export default function SearchModal() {
    // You can add any UI inside Loading, including a Skeleton.
    const [input, setInput] = useState("");
    const router = useRouter();

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data } = useSWR(input?`https://api.smartjinny.com/search/recommendation?query=${input}`:null, fetcher)
    return (
      <>
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal sm:modal-middle" htmlFor="">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-6"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="font-bold text-lg">Search</h3>
            <p className="py-4">What can I find you today?</p>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full max-w-xs"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  e.preventDefault();
                  if (input == "home" || "/") {
                    router.push("/");
                  }
                  router.push(`/search?search=${input}`);
                  document.getElementById("my-modal-6").checked = false;
                }
              }}
            />
            <ul className="h-24 min-h-full overflow-hidden my-5">
              {data ? (
                data.data?.map((ga) => (
                  <li
                    key={ga}
                    className="text-indigo-500 cursor-pointer badge badge-primary badge-outline"
                    onClick={(e) => {
                      e.preventDefault();
                      router.push(`/search?search=${ga}`);
                      document.getElementById("my-modal-6").checked = false;
                    }}
                  >
                    {ga}
                  </li>
                ))
              ) : (
                <div className="h-24 min-h-full"></div>
              )}
            </ul>
          </div>
        </div>
      </>
    );
  }