import React from "react";

export const CopyIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19 21H11C9.895 21 9 20.105 9 19V11C9 9.895 9.895 9 11 9H19C20.105 9 21 9.895 21 11V19C21 20.105 20.105 21 19 21Z"
            stroke="currentColor"
            strokeWidth="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13 15H5C3.895 15 3 14.105 3 13V5C3 3.895 3.895 3 5 3H13C14.105 3 15 3.895 15 5V13C15 14.105 14.105 15 13 15Z"
            stroke="currentColor"
            strokeWidth="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);

export const LinkIcon = () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <g stroke-linecap="round" strokeWidth="1.25" stroke="currentColor" fill="none" stroke-linejoin="round">
            <path d="M12 12l9-9v7 -7h-7"></path>
            <path d="M9 3h-4c-1.105 0-2 .895-2 2v14c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2v-4"></path>
        </g>
        <path fill="none" d="M0 0h24v24h-24Z"></path>
    </svg>
);

export const Loader = ({ className }: { className?: string }) => (
    <svg
        className={`animate-spin -ml-1 mr-3 h-5 w-5 text-white ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
    >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
    </svg>
);
