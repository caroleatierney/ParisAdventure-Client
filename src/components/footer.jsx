import React from "react";

function Footer() {
  return (
    <div>
      <footer className="flex backdrop-blur-sm justify-center py-4 text-red-800 text-xl font-delius font-extrabold">
        &copy; CopyRight {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default Footer;
