import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="">
        Home
      </Link>
      <Link to="/show-books" className="">
        Show Books
      </Link>
      <Link to="/add-books" className="">
        Add Books
      </Link>
    </nav>
  );
};

export default Navbar;
