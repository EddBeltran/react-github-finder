import { Link } from "react-router-dom";
import { FaGithub } from 'react-icons/fa'

function Navbar() {
  return (
    <nav className="bg-blue-900">
      <div className="container mx-auto text-white p-3 flex justify-between">
        <Link to="/" className="flex items-center">
          <FaGithub className='inline pr-2 text-3xl'/>
          <h1>Github finder</h1>
        </Link>
        <div className="flex ">
          <Link to="/" className="px-2">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
