import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { cart } = useCart([]);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const NavOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar z-10 fixed bg-opacity-30 max-w-screen-xl text-white bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {NavOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavOptions}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/dashboard/cart">
            <button className="btn btn-ghost relative">
              <FaShoppingCart className="text-xl"></FaShoppingCart>
              <div className="badge absolute bg-transparent border-none top-0 right-[5px] text-white bg-yellow-600 rounded-full px-1 py-2 text-xs">
                {cart.length}
              </div>
            </button>
          </Link>
          {!user ? (
            <Link to="/login" className="btn">
              Login
            </Link>
          ) : (
            <div>
              <span>{user?.displayName}</span>
              <button onClick={handleLogOut} className="btn btn-ghost">
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
