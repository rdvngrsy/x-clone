import { Popover, Transition } from "@headlessui/react";
import React from "react";
import { useAccount } from "../../../../store/auth/hooks";
import More from "./more";

const Account = () => {
  const account = useAccount();
  return (
    <div className="mt-auto">
      <Popover className="relative">
        <Popover.Button className="my-3 p-3 rounded-full w-full flex text-left hover:bg-[#eff3f41a] outline-none transition-colors items-center">
          <img src={account.avatar} className="w-10 h-10 flex-shrink-0 rounded-full" alt="" />
          <div className="mx-3 text-[15px]">
            <h6 className="font-bold">{account.fullname}</h6>
            <div className="text-[#71767b]">@{account.username}</div>
          </div>
          <svg viewBox="0 0 24 24" className="ml-auto h-[18.75px] text-[#e7e9ea]">
							<path
								fill="currentColor"
								d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
							/>
					</svg>
        </Popover.Button>
        <Transition
          enter="transition duration-200 ease-out"
          enterFrom="transform opacity-0"
          enterTo="transform opacity-0"
          leave="transition duration-200 ease-out"
          leaveFrom="transform opacity-0"
          leaveTo="transform opacity-0"
        >
          <Popover.Panel className="absolute z-10 bottom-[70px] -translate-y-2 left-1/2 -translate-x-1/2 py-3 w-[300px] bg-black shadow-box rounded-2xl">
          {({ close }) => (
							<More close={close}/>
						)}
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default Account;
