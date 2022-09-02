import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ScrollToTop from "../Tools/ScrollToTop";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
export default function Layout({ children }) {
  const [components, setComponents] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      const components = (
        <>
          {/* <Navbar /> */}
          {children}
          {/* <ScrollToTop /> */}
          <Footer />
        </>
      );
      setComponents(components);
    }, 2500);
  });
  return (
    <div className="content">
      {components && <>{components}</>}
      {!components && (
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          layout
          className=" bg-white flex justify-center h-screen items-center"
        >
          <div className="loader">
            {[1, 2, 3, 4, 5, 6, 7].map((index) => (
              <div className="loader-square" key={index}></div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
