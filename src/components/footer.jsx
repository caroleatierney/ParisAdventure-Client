import React from "react";

function Footer() {
  return (
    <div className="flex justify-center items-center">
      <footer className="backdrop-blur-sm justify-center py-4 text-red-800 text-xl font-delius font-extrabold">
        &copy; CopyRight {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default Footer;
