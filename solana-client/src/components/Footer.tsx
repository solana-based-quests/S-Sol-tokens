import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
export const Footer: FC = () => {
    return (
        <div className="flex">
            <footer className="border-t-2 border-[#141414] bg-black w-screen md:px-32 px-4 flex justify-between items-center py-6">
                <div className="font-bold text-3xl">Solana Next</div>
                <div className="flex items-center text-secondary">© 2023 Solana Next</div>
            </footer>
        </div>
    );
};
