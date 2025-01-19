"use client";

"use client";
import { useState, useEffect } from "react";

import { useUser } from "@clerk/nextjs";
import { Transition } from "@headlessui/react";
import { Button } from "./ui/button";
import { IoClose } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";


function Popup() {
  const user = useUser();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Simulate a condition to trigger the popup (e.g., after 5 seconds)
    const timeoutId = setTimeout(() => {
      setIsPopupOpen(true);
    }, 1000); // Show popup after 5 seconds

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="relative">
      {/* Your main website content here */}

      <Transition
        show={isPopupOpen}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg flex flex-col items-end shadow-lg w-96">
            <button
              className="bg-transparent hover:bg-slate-100  rounded mt-3"
              onClick={() => setIsPopupOpen(false)}
            >
              <IoClose className="text-red-600 text-2xl" />
            </button>
            <div>
              <p className="text-center mb-4 text-blue-700 font-bold text-xl">
                👋 Welcome!
              </p>
              <p>
                Welcome,{" "}
                <span className="text-red-600 font-bold">
                  {user?.user?.fullName}
                </span>{" "}
                We're excited to have you here.
              </p>
              <Link href="/forums" onClick={()=>setIsPopupOpen(false)}>
              
              <Button className="mt-2 bg-blue-500 text-slate-200 text-sm hover:bg-blue-600">
                Explore Forums <GoArrowUpRight className="text-xl font-bold"/>
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default Popup;
