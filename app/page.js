async function homepageData() {
    const res = await fetch('https://api.smartjinny.com');
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
  
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }    
    return res.status;
}

export default async function Page() {
    const isUp = await homepageData()
    // const router = useRouter();
    // const userAgent = router.asPath;
    // let isMobile = /Mobi|Android/i.test(userAgent);

    return (
      <div className="-pt-[60px]">
        {isUp ? (<div className="toast">
          <div className="alert alert-info">
            <div>
              <span>Server running</span>
            </div>
          </div>
        </div>):(
          <div className="toast">
          <div className="alert alert-info">
            <div>
              <span>Server down</span>
            </div>
          </div>
        </div>
        )}


        {/* HERO BANNER */}
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1675850477322-71ab001e5298?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80")`,
          }}
        >
          <div className="hero-overlay bg-opacity-20"></div>
          <div className="hero-content text-center text-indigo-500">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">SMARTJINNY</h1>
              <p className="mb-5">
                As a skilled web developer with expertise in both frontend and
                backend, I am able to deliver seamless and user-friendly web
                solutions
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>

        
        <div className="mt-6 justify-items-center grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-6">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&h=700&q=80"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                UX/UI
                <div className="badge badge-secondary">DESIGN</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1455894127589-22f75500213a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&h=700&q=80"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Front-end
                <div className="badge badge-secondary">SOFTWARE</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&h=700&q=80"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Back-end
                <div className="badge badge-secondary">SOFTWARE</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CODE */}
        {/* <div className="mockup-code">
          <pre data-prefix="$">
            <code>npm i daisyui</code>
          </pre>
        </div> */}
        <div className="mt-6 justify-items-center grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-6">
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">MY WISHLIST!</h2>
              <p>Wanna know the stuff that I want to get?</p>
              <div className="card-actions justify-end">
                <a
                  href="https://www.amazon.com/hz/wishlist/ls/ref=cm_wl_your_lists"
                  target="_blank"
                >
                  <button className="btn btn-primary">View Wishlist</button>
                </a>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">MY PLAYLIST!</h2>
              <p>Wanna know the am I listening to?</p>
              <div className="card-actions justify-end">
                <a
                  href="https://music.youtube.com/playlist?list=PL_SamN1A4hpnAicd0cZMLVQUK4E_w_3Tj&feature=share"
                  target="_blank"
                >
                  <button className="btn btn-primary">View Playlist</button>
                </a>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">MY CODING LIST!</h2>
              <p>Wanna know the am I wrting?</p>
              <div className="card-actions justify-end">
                <a
                  href="https://music.youtube.com/playlist?list=PL_SamN1A4hpnAicd0cZMLVQUK4E_w_3Tj&feature=share"
                  target="_blank"
                >
                  <button className="btn btn-primary">View Github</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* NOTE */}
        <div className="text-center m-20 text-indigo-500 font-bold">Application is build with Nextjs 13, React 18, TailwindCSS, Vercel, FastAPI, MongoDB</div>
        
      </div>)
  }

  
