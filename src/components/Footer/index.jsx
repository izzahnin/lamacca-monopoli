import React from "react";

function Footer() {
  return (
    <div className="w-full items-center justify-center mx-auto">
      <footer className="flex justify-center p-4 midnight bg-white shadow md:px-6 md:py-8 dark:bg-midnight">
        <span className="block text-sm text-white sm:text-center dark:text-white">
          © 2023{" "}
          <a href="/https://www.instagram.com/lamaccamonopoli.mks/" target="_blank" className="hover:underline">
            Lamaccamonopoli.mks
          </a>
        </span>
      </footer>
    </div>
  );
}

export default Footer;
