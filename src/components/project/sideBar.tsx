import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { projectType } from "../../recoil/dashBoard/project";
import { useRecoilValue } from "recoil";
import { sideBarTogleValue } from "../../recoil/sideBarToggle";

export default function SideBar({ item }: { item: projectType }) {
  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = useState(location.pathname);
  const isSidebarVisible = useRecoilValue(sideBarTogleValue);

  let navigation = [
    {
      classify: "Navigation",
      name: "Dashboard",
      path: "dashboard",
      svgPath:
        "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
    },
  ];

  let authentication = [
    {
      classify: "Authentication",
      name: "Users",
      path: "usermanagement",
      svgPath:
        "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
    },
  ];

  let support = [
    {
      classify: "Support",
      name: "API KEY",
      path: "apikey",
      svgPath:
        "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
    },

    {
      classify: "Support",
      name: "Settings",
      path: "settings",
      svgPath:
        "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z",
    },
  ];

  return (
    <div
      className={`h-full flex flex-col  ${
        isSidebarVisible ? "w-28 md:w-48" : "w-16"
      } duration-300 ease-in-out pt-12 `}
    >
      <div className="items-center mx-4 font-bold text-black mt-5">
        Navigation
      </div>
      <div
        id="menu"
        className={`   ${
          isSidebarVisible ? "w-28 md:w-48" : "w-16"
        }   duration-300`}
      >
        {navigation.map((data, index) => (
          <Link
            key={index}
            to={data.path}
            onClick={() => setSelectedMenu(data.path)}
            className={`flex h-22 md-14 space-y-2 flex-col md:flex-row md:space-y-0 md:space-x-2 items-center justify-start py-2  group w-full px-3 ${
              isSidebarVisible && selectedMenu === data.path
                ? "bg-gray-200 border-r-4 border-blue-500"
                : "hover:bg-gray-100"
            }`}
          >
            <div className={"w-6 h-6 aspect-square justify-center"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={
                  selectedMenu === data.path
                    ? "text-indigo-500"
                    : "group-hover:text-indigo-400"
                }
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d={data.svgPath}
                ></path>
              </svg>
            </div>
            <div
              className={`font-medium w-full text-center whitespace-nowrap md:text-left text-sm md:text-lg duration-300 text-gray-500 group-hover:text-indigo-400 origin-left ${
                !isSidebarVisible && "scale-0"
              }`}
            >
              {data.name}
            </div>
          </Link>
        ))}
      </div>
      <div>
        <div className="items-center mx-4 font-bold text-black mt-7">
          Authentication
        </div>
        <div
          id="menu"
          className={`  ${
            isSidebarVisible ? "w-28 md:w-48" : "w-16"
          }  duration-300`}
        >
          {authentication.map((data, index) => (
            <Link
              key={index}
              to={data.path}
              onClick={() => setSelectedMenu(data.path)}
              className={`flex h-22 md-14 space-y-2 flex-col md:flex-row md:space-y-0 md:space-x-2 items-center justify-start py-2  group w-full px-3 ${
                isSidebarVisible && selectedMenu === data.path
                  ? "bg-gray-200 border-r-4 border-blue-500"
                  : "hover:bg-gray-100"
              }`}
            >
              <div className={"w-6 h-6 aspect-square justify-center"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={
                    selectedMenu === data.path
                      ? "text-indigo-500 "
                      : "group-hover:text-indigo-400"
                  }
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d={data.svgPath}
                  ></path>
                </svg>
              </div>
              <div
                className={`font-medium w-full text-center whitespace-nowrap md:text-left text-sm md:text-lg duration-300 text-gray-500 group-hover:text-indigo-400 origin-left ${
                  !isSidebarVisible && "scale-0"
                }`}
              >
                {data.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <div className="items-center mx-4 font-bold text-black mt-7">
          Support
        </div>
        <div
          id="menu"
          className={`   ${
            isSidebarVisible ? "w-28 md:w-48" : "w-16"
          }   duration-300`}
        >
          {support.map((data, index) => (
            <Link
              key={index}
              to={data.path}
              onClick={() => setSelectedMenu(data.path)}
              className={`flex h-22 md-14 space-y-2 flex-col md:flex-row md:space-y-0 md:space-x-2 items-center justify-start py-2 group w-full px-3 ${
                isSidebarVisible && selectedMenu === data.path
                  ? "bg-gray-200  border-r-4 border-blue-500"
                  : "hover:bg-gray-100 "
              }`}
            >
              <div className={"w-6 h-6 aspect-square justify-center"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={
                    selectedMenu === data.path
                      ? "text-indigo-500"
                      : "group-hover:text-indigo-400"
                  }
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d={data.svgPath}
                  ></path>
                </svg>
              </div>
              <div
                className={`font-medium w-full text-center whitespace-nowrap md:text-left text-sm md:text-lg duration-300 text-gray-500 group-hover:text-indigo-400 origin-left ${
                  !isSidebarVisible && "scale-0"
                }`}
              >
                {data.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
