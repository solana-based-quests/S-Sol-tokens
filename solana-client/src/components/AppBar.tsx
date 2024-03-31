import dynamic from "next/dynamic";
import React, { useState } from "react";
import { useAutoConnect } from "../contexts/AutoConnectProvider";
import NetworkSwitcher from "./NetworkSwitcher";
import Link from "next/link";

const WalletMultiButtonDynamic = dynamic(
    async () => (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
    { ssr: false }
);

export const AppBar: React.FC = () => {
    const { autoConnect, setAutoConnect } = useAutoConnect();
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <div className="md:px-32 px-4 pt-5">
            {/* NavBar / Header */}
            <div className="mx-auto border border-gray-600 max-w-7xl flex justify-between sticky top-5 px-4 py-3 rounded-md bg-opacity-10 bg-blur z-20 bg-white">
                <div className="navbar-start justify-center flex flex-col">
                    <div className="inline ml-2 my-auto font-semibold text-xl"><Link href={'/'}>Solana Spl Token Program</Link></div>
                    <div className="hidden sm:inline my-auto font-semibold text-xl">
                    {/* <WalletMultiButtonDynamic className="btn-ghost btn-sm relative flex md:hidden text-lg " />  */}
                    </div>
                   
                </div>

                {/* Nav Links */}
                {/* Wallet & Settings */}
                <div className="navbar-end flex gap-x-4">
                    <div className="inline-flex align-items-center items-center justify-items gap-6">
                         <WalletMultiButtonDynamic className="btn-ghost btn-sm rounded-btn text-lg my-auto" /> 
                    </div>
                    <div className="w-1 bg-gray-500 h-full rounded-full hidden md:inline-flex "></div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} className="btn btn-square btn-ghost text-right mr-4">
                            <svg
                                className="w-7 h-7"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="p-2 shadow menu dropdown-content bg-base-100 rounded-box sm:w-52">
                            <li>
                                <div className="form-control bg-opacity-100">
                                    <label className="cursor-pointer label">
                                        <a>Autoconnect</a>
                                        <input
                                            type="checkbox"
                                            checked={autoConnect}
                                            onChange={(e) => setAutoConnect(e.target.checked)}
                                            className="toggle"
                                        />
                                    </label>
                                    <NetworkSwitcher />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
