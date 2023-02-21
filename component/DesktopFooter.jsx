import { Constant } from "../common/constant";

export default function DesktopFooter({}) {
    return (
        <footer className="footer footer-center p-4 bg-base-300 text-base-content mt-10">
          <div>
            <p>Copyright © 2023 - All right reserved by {Constant.SITE_NAME}</p>
          </div>
        </footer>
    );
}