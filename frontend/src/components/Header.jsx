// const Header = () => {
//     return (
//       <div className="h-16 px-20 bg-white lg:h-20">
//         <div className="flex flex-row justify-between items-center h-full">
//           {/* Left Logo */}
//           <div className="h-full flex items-center w-24">
//             <img src="/logo.png" alt="Left Logo" />
//           </div>
  
//           {/* Right Logo */}
//           <div className="h-full flex items-center">
//             <img src="/logo.png" alt="Right Logo" />
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default Header;
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className=" px-4 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          {/* <div className="flex-shrink-0">
            <img 
              className="h-8 w-auto" 
              src="logo.png" 
              alt="Logo" 
            />
          </div> */}
          {/* <div className="flex flex-row justify-between items-center h-full">          Left Logo */}
          <div className="h-full flex items-center w-24">
            <img src="/logo.png" alt="Left Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">Crypto Takes</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Free Tools</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Resource Centre</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            Crypto Takes
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            Free Tools
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            Resource Centre
          </a>
          <button className="w-full text-left px-3 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;