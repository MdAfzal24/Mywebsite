const Header = () => {
    return (
      <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">MyWebsite</h1>
        <nav>
          <ul className="flex space-x-4">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">About</li>
            <li className="hover:text-gray-300 cursor-pointer">Services</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
          </ul>
        </nav>
      </div>
    );
  };
  
  export default Header;
  