import "../styles/globals.css";
import { Constant, GNB } from "../common/constant";
import SearchModal from "./SearchModal";

export default function RootLayout({children}) {
  
  
    return (
      <html lang="en">
        <body>
          <div
            className="absolute navbar bg-base-100 flex justify-between"
            data-theme="cupcake"
          >
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {GNB.map((ga) => (
                    <li key={ga.path}>
                      <a href={ga.path}>{ga.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="navbar-center">
              <a className="btn btn-ghost normal-case text-xl" href="/">
                {Constant.SITE_NAME}
              </a>
            </div>
            <div className="navbar-end">
              {/* SEARCH BUTTON */}
              <label className="btn btn-ghost" htmlFor="my-modal-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </label>
              {/* NOTI BUTTON */}
              {/* <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button> */}
            </div>
            <input type="checkbox" id="search-modal" className="modal-toggle" />
          </div>
          <div className="pt-[64px]">{children}</div>
          <footer className="footer footer-center p-4 bg-base-300 text-base-content mt-10">
            <div>
              <p>
                Copyright © 2023 - All right reserved by {Constant.SITE_NAME}
              </p>
            </div>
          </footer>
          <SearchModal/>
        </body>
      </html>
    );
  }