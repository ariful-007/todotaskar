import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { FaBars, FaX } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MainLayOut = (props) => {
  const [saidebar, setSaidebar] = useState(true);

  return (
    <Disclosure as="nav" className="bg-slate-400 h-screen w-full">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 gap-4 items-center">
                  {saidebar ? (
                    <FaBars
                      onClick={() => setSaidebar(!saidebar)}
                      className="text-white text-xl cursor-pointer"
                    />
                  ) : (
                    <FaX
                      onClick={() => setSaidebar(!saidebar)}
                      className="text-white text-xl cursor-pointer"
                    />
                  )}

                  <Link to="/" className=" text-lg font-bold">
                    Daily planner
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100 font-bold" : "",
                              "block px-4 py-2 text-sm text-gray-700 font-bold text-lg"
                            )}
                          >
                            Ariful Islam
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        
                        {({ active }) => (
                          <Link
                            to='/profile'
                            className={classNames(
                              active ? "bg-gray-100 font-bold" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Profile
                          </Link>
                        )}
                      </Menu.Item>
                      
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100 font-bold" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>

            <div className=" flex justify-between mx-auto max-w-full">
              <div
                className={`${
                  saidebar ? "w-[27%] py-3 px-8" : "w-[0]"
                }  bg-slate-600  transition-all duration-500 rounded-sm`}
              >
                <div>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? " text-lg font-bold text-red-600"
                        : " text-lg text-white font-bold"
                    }
                  >
                    Home
                  </NavLink>
                </div>

                <div>
                  <NavLink
                    to="/create-todo"
                    className={({ isActive }) =>
                      isActive
                        ? "text-lg font-bold text-red-600"
                        : " text-lg text-white font-bold "
                    }
                  >
                    Create
                  </NavLink>
                </div>

                <div>
                  <NavLink
                    to="/complated-todo"
                    className={({ isActive }) =>
                      isActive
                        ? "text-lg font-bold text-red-600"
                        : " text-lg text-white font-bold "
                    }
                  >
                    Complated
                  </NavLink>
                </div>

                <div>
                  <NavLink
                    to="/cencel-todo"
                    className={({ isActive }) =>
                      isActive
                        ? "text-lg font-bold text-red-600"
                        : " text-lg text-white font-bold "
                    }
                  >
                    Cencel
                  </NavLink>
                </div>

                <div>
                  <NavLink
                    to="/progress-todo"
                    className={({ isActive }) =>
                      isActive
                        ? "text-lg font-bold text-red-600"
                        : " text-lg text-white font-bold "
                    }
                  >
                    Progress plan
                  </NavLink>
                </div>

                <div>
                  <NavLink
                    to="/new-todo"
                    className={({ isActive }) =>
                      isActive
                        ? "text-lg font-bold text-red-600"
                        : " text-lg text-white font-bold "
                    }
                  >
                    New
                  </NavLink>
                </div>
              </div>
              <div
                className={`${
                  saidebar ? "w-[70%]" : "w-[100%]"
                } bg-slate-600 p-10 transition-all duration-500 rounded-sm`}
              >
                {props.children}
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default MainLayOut;
