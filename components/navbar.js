import { useState } from "react";

import MenuFeature from "./menu_feature";
import MenuCompany from "./menu_company";
import MobileNavbar from "./mobile_navbar";

export default function Navbar() {
  const [feature, setFeature] = useState(false);
  const [company, setCompany] = useState(false);

  return (
    <nav>
      <div className="flex h-20 items-center justify-between px-10">
        <div className="flex">
          <img src="/logo.svg" />
          <div className="ml-10 hidden items-center gap-5 lg:flex">
            <div className="relative">
              <div>
                <a
                  href="#"
                  onClick={() => setFeature(!feature)}
                  className="text-black/50 hover:text-black"
                >
                  <span>Features</span>
                  <span className="ml-2">
                    <img
                      src={
                        feature ? "/icon-arrow-up.svg" : "/icon-arrow-down.svg"
                      }
                      className="inline-flex"
                    />
                  </span>
                </a>
                <div className={`card ${feature ? "block" : "hidden"} w-40`}>
                  <MenuFeature />
                </div>
              </div>
            </div>
            <div className="relative">
              <div>
                <a
                  href="#"
                  onClick={() => setCompany(!company)}
                  className="text-black/50 hover:text-black"
                >
                  <span>Company</span>
                  <span className="ml-2">
                    <img
                      src={
                        company ? "/icon-arrow-up.svg" : "/icon-arrow-down.svg"
                      }
                      className="inline-flex"
                    />
                  </span>
                </a>
                <div
                  className={`card ${
                    company ? "block" : "hidden"
                  } -right-10 w-32`}
                >
                  <MenuCompany />
                </div>
              </div>
            </div>
            <a href="#" className="text-black/50 hover:text-black">
              Careers
            </a>
            <a href="#" className="text-black/50 hover:text-black">
              About
            </a>
          </div>
        </div>
        <div className="hidden items-center gap-10 lg:flex">
          <a href="#" className="text-black/50 hover:text-black">
            Login
          </a>
          <a
            href="#"
            className="rounded-lg border-2 border-black/50 py-1.5 px-4 text-black/50 hover:text-black"
          >
            Register
          </a>
        </div>
        <MobileNavbar />
      </div>
    </nav>
  );
}
