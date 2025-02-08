import React from "react";

function Footer() {
  return (
    <div>
      <footer className="flex justify-center py-4 text-red-500 text-lg font-extrabold">
        &copy; CopyRight {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default Footer;
