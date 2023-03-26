async function homepageData() {
    const res = await fetch('https://api.smartjinny.com', {cache: 'force-cache'});
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.status;
}

export default async function Page() {
    const isUp = await homepageData()

    return (
      <div className="-pt-[60px]">
        {isUp ? (
          <div className="toast">
            <div className="alert alert-info cursor-pointer">
              <a href="https://api.smartjinny.com/">
                <span>Server running</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="toast">
            <div className="alert alert-info">
              <a href="https://api.smartjinny.com/">
                <span>Server down</span>
              </a>
            </div>
          </div>
        )}

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
              <a href="/cafe">
                <button className="btn btn-primary">Go to Cafe</button>
              </a>
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
                src="/model/smartjin-top.jpeg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">3D AVATAR</h2>
              <p>#3D RENDERING<br/>#THREE.JS<br/>#CUSTOMIZED</p>
              <div className="card-actions justify-end">
                <a
                  href="/avatar"                  
                >
                  <button className="btn btn-primary">View Avatar</button>
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
              <p>#FAVORITE<br/>#YOUTUBE MUSIC<br/>#KOREAN</p>
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
              <p>#GITHUB<br/>#INTEGRATION<br/>#SMARTJINNY</p>
              <div className="card-actions justify-end">
                <a href="https://github.com/texas000" target="_blank">
                  <button className="btn btn-primary">View Github</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* NOTE */}
        <div className="text-center m-20 text-indigo-500 font-bold">
          Application is build with Nextjs 13, React 18, TailwindCSS, Vercel,
          FastAPI, MongoDB
        </div>
      </div>
    );
  }

  
