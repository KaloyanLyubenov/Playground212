import { useState } from "react";
import "../../newStyles/navBarStatic.css";
import { AnimatePresence, motion } from "framer-motion";
import { useAuthContext } from "../AuthContext";

const fullNavBar = {
  start: {
    y: -100,
  },
  end: {
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
    },
  },
  exit: {
    y: -100,
  },
};

const dropdownMenuVariants = {
  start: { height: 0 },
  end: {
    height: 80,
    transition: {
      duration: 0.2,
      type: "tween",
    },
  },
  exit: {
    height: 0,
    transition: {
      delay: 0.1,
    },
  },
};

const dropDownOptions = {
  start: { opacity: 0 },
  end: {
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "tween",
      delay: 0.1,
    },
  },
  exit: {
    opacity: 0,
  },
};

function NavbarStatic() {
  const [isPortfolioHovered, setIsPortfolioHovered] = useState(false);
  const { handlePageChange } = useAuthContext();

  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  const goToAccount = () => {
    window.location.assign("/account");
  };

  return (
    <>
      <motion.div
        className="static-navbar-container"
        variants={fullNavBar}
        initial="start"
        animate="end"
        exit="exit"
      >
        <div className="menu-container">
          <div className="first-part">
            <a href="/" className="logo">
              FORBIDDEN MEDIA
            </a>
          </div>
          <div className="middle-part">
            <div
              onMouseEnter={() => setIsPortfolioHovered(true)}
              onMouseLeave={() => setIsPortfolioHovered(false)}
            >
              <motion.p whileHover={{ scale: 1.1 }} className="p">
                Portfolio
              </motion.p>
              <AnimatePresence>
                {isPortfolioHovered && (
                  <motion.div
                    className="dropdown-menu"
                    initial="start"
                    animate="end"
                    exit="exit"
                    variants={dropdownMenuVariants}
                  >
                    <motion.div variants={dropDownOptions}>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        className="a"
                        href="/portfolio/photography"
                      >
                        PHOTOGRAPHY
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        className="a"
                        href="/portfolio/photography"
                      >
                        VIDEOGRAPHY
                      </motion.a>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <p className="p">About me</p>
            <p className="p">Contact</p>
          </div>
          <div className="end-part">
            {localStorage.getItem("token") ? (
              <>
                <p onClick={goToAccount} className="p">
                  Account
                </p>
                <p onClick={logOut} className="p">
                  Sing out
                </p>
              </>
            ) : (
              <p onClick={() => handlePageChange("login")} className="p">
                Sign In
              </p>
            )}
          </div>
          <div className="small-icon-container">
            <div className="small-icon">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default NavbarStatic;
