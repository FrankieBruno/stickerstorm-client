// Modify your NavBar.js component to conditionally render links
import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();

  // Check if the user is logged in by looking for the "st_token" in localStorage
  const isLoggedIn = localStorage.getItem("st_token") !== null;

  return (
    <>
      {isLoggedIn && (
        <div className="flex flex-row justify-center mx-auto navbar">
          <div className="mx-10 text-white navbar__item">
            <Link className="nav-link-home" to="/stickers">
              HOME
            </Link>
          </div>
          <div className="mx-10 text-white navbar__item">
            <Link className="nav-link-stickers" to="/stickers/new">
              Create Sticker
            </Link>
          </div>
          <div className="mx-10 nav-link">
            <button
              className="text-white nav-link"
              onClick={() => {
                localStorage.removeItem("st_token");
                navigate("/login");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </>
  );
};
