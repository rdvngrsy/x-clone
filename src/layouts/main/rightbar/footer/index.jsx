import { Popover } from "@headlessui/react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mb-4 px-4 flex flex-wrap gap-2 text-[13px]">
      <Link
        to="/"
        className="text-[#71767b] leading-4 hover:underline"
      >
        Hizmet Şartları
      </Link>
      <Link
        to="/"
        className="text-[#71767b] leading-4 hover:underline"
      >
        Gizlilik Politikası
      </Link>
      <Link
        to="/"
        className="text-[#71767b] leading-4 hover:underline"
      >
        Çerez Politikası
      </Link>
      <Link
        to="/"
        className="text-[#71767b] leading-4 hover:underline"
      >
        Imprint
      </Link>
      <Link
        to="/"
        className="text-[#71767b] leading-4 hover:underline"
      >
        Erişilebilirlik
      </Link>
      <Link
        to="/"
        className="text-[#71767b] leading-4 hover:underline"
      >
        Reklam bilgisi
      </Link>
      
				<Popover className="relative inline-flex leading-4">
					<Popover.Button
						className="text-[#71767b] outline-none leading-4 hover:underline inline-flex items-center">
						Daha fazla
						<svg viewBox="0 0 24 24" className="h-[1em] px-0.5">
								<path
									fill="currentColor"
									d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
								/>
						</svg>
					</Popover.Button>
					<Popover.Panel className="w-[176px] max-w-[24rem] bg-black shadow-box rounded-xl absolute bottom-0 right-0 grid overflow-hidden">
						<Link to="/" className="text-[15px] py-3 px-4 leading-5 font-bold hover:bg-[#16181c] transition-colors">
							Hakkında
						</Link>
						<Link to="/" className="text-[15px] py-3 px-4 leading-5 font-bold hover:bg-[#16181c] transition-colors text-nowrap">
							X uygulamasını indir
						</Link>
						<Link to="/" className="text-[15px] py-3 px-4 leading-5 font-bold hover:bg-[#16181c] transition-colors">
							İşletmeler İçin X
						</Link>
						<Link to="/" className="text-[15px] py-3 px-4 leading-5 font-bold hover:bg-[#16181c] transition-colors">
							Geliştiriciler
						</Link>
					</Popover.Panel>
				</Popover>
				<p className="text-[#71767b] leading-4">
					&copy; 2024 Rıdvan Gürsoy
				</p>
			
    </footer>
  );
};

export default Footer;
