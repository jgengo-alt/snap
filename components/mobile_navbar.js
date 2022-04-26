import { useState } from "react";
import MenuFeature from "./menu_feature";
import MenuCompany from "./menu_company";

export default function MobileNavbar() {
  const [aside, setAside] = useState(false);
  const [menuFeature, setMenuFeature] = useState(true);
  const [menuCompany, setMenuCompany] = useState(true);

  return (
    <div className="flex lg:hidden">
      <img src="icon-menu.svg" onClick={() => setAside(true)} />
      <div className={`absolute inset-0 ${aside ? "" : "hidden"} bg-black/70`}>
        <aside className="absolute top-0 right-0 h-screen w-8/12 bg-white p-6">
          <div className="flex flex-col">
            <button className="self-end ">
              <img src="icon-close-menu.svg" onClick={() => setAside(false)} />
            </button>
            <details onClick={() => setMenuFeature(!menuFeature)} open>
              <summary className="flex items-center gap-3">
                <span className="font-medium text-black/50">Features</span>
                <span>
                  <img
                    src={
                      menuFeature ? "icon-arrow-up.svg" : "icon-arrow-down.svg"
                    }
                    alt='arrow dropdown'
                  />
                </span>
              </summary>
              <MenuFeature />
            </details>

            <details
              className="mt-6"
              onClick={() => setMenuCompany(!menuCompany)}
              open
            >
              <summary className="flex items-center gap-3">
                <span className="font-medium text-black/50">Company</span>
                <span>
                  <img
                    src={
                      menuCompany ? "icon-arrow-up.svg" : "icon-arrow-down.svg"
                    }
                    alt='arrow dropdown'
                  />
                </span>
              </summary>
              <MenuCompany />
            </details>
            <a href="#" className="mt-4 text-black/50 hover:text-black">
              Careers
            </a>
            <a href="#" className="mt-4 text-black/50 hover:text-black">
              About
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
