import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { CartWidget } from "./CartWidget";

export default function NavbarComp() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("https://fakestoreapi.com/products/categories");
      const data = await response.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "Man", href: "/category/man", current: false },
    { name: "Women", href: "/category/women", current: false },
    { name: "Accessories", href: "/category/accessories", current: false },
  ];
  

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Disclosure as="nav" className="bg-[#ffffff] max-width[100%]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                {/* Resto del código... */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-[#4f9ee3] text-white"
                            : "text-gray-500 hover:bg-[#4f9ee3] hover:text-white",
                          "rounded-md px-3 py-2 text-md font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <button className="text-gray-500 hover:bg-[#4f9ee3] hover:text-white px-3 py-2 rounded-md text-md font-medium">
                            Category
                          </button>
                          <Disclosure.Panel>
                            <div className="space-y-1 px-2 pb-3 pt-2">
                              {categories.map((category) => (
                                <NavLink
                                  key={category}
                                  to={`/category/${category}`}
                                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                  activeClassName="bg-gray-900 text-white"
                                >
                                  {category}
                                </NavLink>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <CartWidget />
                  </div>
                </div>
              </div>
              {/* Resto del código... */}
            </div>
            {/* Resto del código... */}
          </div>
        </>
      )}
    </Disclosure>
  );
}

