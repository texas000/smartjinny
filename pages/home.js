import { useRouter } from 'next/router';
import { Constant } from "../common/constant";

export default function Home({}) {
    const router = useRouter();
    const userAgent = router.asPath;
    let isMobile = /Mobi|Android/i.test(userAgent);

    return (
      <div className="p-2">
        {/* NAV BAR */}
        <div className="navbar bg-base-100 mb-10 shadow-xl rounded-box">
          <div className="navbar bg-base-100">
            <div className="flex-1">
              <a className="btn btn-ghost normal-case text-xl">
                {Constant.SITE_NAME}
              </a>
            </div>
            <div className="flex-none gap-2">
              <div className="form-control hidden sm:block">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered"
                />
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full p-1">
                    <img src="/assets/images/favicon.png" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="toast">
  <div className="alert alert-info">
    <div>
      <span>New message arrived.</span>
    </div>
  </div>
</div>

        {/* HERO BANNER */}
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>

        {/* CODE */}
        <div className="mockup-code">
          <pre data-prefix="$">
            <code>npm i daisyui</code>
          </pre>
        </div>



        {/* FOOTER */}
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <div>
            <p>Copyright © 2023 - All right reserved by {Constant.SITE_NAME}</p>
          </div>
        </footer>
      </div>
    );
}