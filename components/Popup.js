'use client'
import { useState, useEffect } from 'react';

import { useUser } from '@clerk/nextjs';
import { Transition } from '@headlessui/react';
import { Button } from './ui/button';

function Popup() {
    const user = useUser();
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
      // Simulate a condition to trigger the popup (e.g., after 5 seconds)
      const timeoutId = setTimeout(() => {
        setIsPopupOpen(true);
      }, 5000); // Show popup after 5 seconds
  
      return () => clearTimeout(timeoutId); 
    }, []);
  
    return (
      <div className="relative">
        {/* Your main website content here */}
  
        <Transition show={isPopupOpen} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <p className="text-center mb-4 text-blue-700 font-bold text-xl">👋 Welcome!</p>
              <p>Welcome, <span className='text-red-600 font-bold'>{user?.user?.fullName}</span> We're excited to have you here.</p>
              <Button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"
                onClick={() => setIsPopupOpen(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </Transition>
      </div>
    );
}

export default Popup;