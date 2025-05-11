import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";
import { setSearchTerm } from "../redux/productSlice";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [search , setSearch ] = useState()
  const handleSearch =(e)=>{
    e.preventDefault()
    dispatch(setSearchTerm(search))
    navigate('/filter-data')
  }

  
  const openSignUp = ()=>{
    setIsLogin (false)
    setIsModelOpen(true)
  }

  const openLogin = ()=>{
    setIsLogin (true)
    setIsModelOpen(true)
  }

  return (
    <nav className="bg=white shadow-md">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto md:px-16 lg:px-24">
        <div className="text-lg font-bold">
          <Link to="/"> e-shop </Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form onSubmit={handleSearch}>
            <input
              className="w-full px-4 py-2 border"
              type="search"
              placeholder="search for product"
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className="absolute text-red-500 top-3 right-3" />
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-lg" />
            {products.length > 0 && (
              <span className="absolute top-0 flex items-center justify-center w-3 text-xs text-white bg-red-600 rounded-full left-4">
                {products.length}
              </span>
            )}
          </Link>
          <button className="hidden md:block"
          onClick={() => setIsModelOpen(true)}>Login | Register</button>
          <button className="block md:hidden" onClick={() => setIsModelOpen(true)}>
            <FaUser />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center py-4 space-x-10 text-sm font-bold">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/shop" className="hover:underline">
          Shop
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
        <Link to="/" className="hover:underline">
          About
        </Link>
      </div>
      <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
        {isLogin ? <Login openSignUp={openSignUp}/> : <Register openLogin={openLogin}/>}
      </Modal>
    </nav>
  );
};

export default Navbar;
