const Header = () => {
    return (
      <div className="h-16 px-20 bg-white md:h-20">
        <div className="flex flex-row justify-between items-center h-full">
          {/* Left Logo */}
          <div className="h-full flex items-center w-24">
            <img src="/logo.png" alt="Left Logo" />
          </div>
  
          {/* Right Logo */}
          <div className="h-full flex items-center">
            <img src="/logo.png" alt="Right Logo" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Header;
  