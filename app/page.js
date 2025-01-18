
import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: 'Forum.io',
  description: 'Welcome to Forum.io. A fast,reliable,convinient chat app accross the world',
}


export default function Home() {
  return (
   
    <div>
       
      {/* Hero Section */}
      <section className="bg-gradient-to-r bg-[#8AAAE5]  text-slate-100 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center md:text-left">
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Connect. Chat. Collaborate.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
            Welcome to the future of communication! Seamlessly connect with your friends, family, and colleagues through our fast and secure chat platform.
          </p>

          {/* Call to Action */}
          <div className="mt-8 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
  <Link 
    href="/" 
    className="px-8 py-3 text-lg font-medium bg-white text-blue-600 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
  >
    Get Started
  </Link>
  <Link 
    href="/forums" 
    className="px-8 py-3 text-lg font-medium border-2 border-white rounded-lg text-white hover:bg-white hover:text-blue-600 transition duration-300"
  >
    Chat Now
  </Link>
</div>

        </div>

        {/* Hero Image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="./hero.png" // Replace with your hero image path
            alt="Chat illustration"
            className="w-full"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            Explore the features that make our chat platform unique.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16l-4-4m0 0l4-4m-4 4h16"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Messaging</h3>
              <p className="text-gray-600">
                Enjoy lightning-fast messaging with no delays.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m0-4h.01M17 16h1m-1-4h1m0-4h-1M7 16H6m1-4H6m0-4h1M12 20h1m1 0h-1m-1 0H9m2 0H7m2 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Conversations</h3>
              <p className="text-gray-600">
                Keep your chats private with end-to-end encryption.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c1.66 0 3-1.34 3-3S13.66 2 12 2 9 3.34 9 5s1.34 3 3 3zm0 4c-4.28 0-8 1.67-8 3.75V18h16v-2.25C20 13.67 16.28 12 12 12z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Global Reach</h3>
              <p className="text-gray-600">
                Connect with anyone, anywhere in the world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
