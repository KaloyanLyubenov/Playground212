import React, { useEffect, useState } from "react";
import LogoContainer from "../LogoContainer";
import "../../newStyles/navBar.css";
import { AnimatePresence, motion, spring } from "framer-motion";
import { useLogoContext } from "../LogoContext";
import { useAuthContext } from "../AuthContext";

const fullNavBar = {
  start: {
    y: -100,
  },
  end: {
    y: 0,
    transition: {
      duration: 0.2,
      type: spring,
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

function Navbar() {
  const [fullMenuVisibility, setFullMenuVisibility] = useState(false);
  const [isPortfolioHovered, setIsPortfolioHovered] = useState(false);
  const { setLogoShrunk } = useLogoContext();
  const { handlePageChange } = useAuthContext();

  const handleScroll = () => {
    const scrollOffset = window.scrollY;
    if (scrollOffset >= 550) {
      setFullMenuVisibility(true);
      setLogoShrunk(true);
    } else {
      setFullMenuVisibility(false);
      setLogoShrunk(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  const goToAccount = () => {
    window.location.assign("/account");
  };

  return (
    <>
      <LogoContainer />
      {fullMenuVisibility && (
        <motion.div
          className="navbar-container"
          variants={fullNavBar}
          initial="start"
          animate="end"
          exit="exit"
        >
          <div className="menu-container">
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
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Navbar;
