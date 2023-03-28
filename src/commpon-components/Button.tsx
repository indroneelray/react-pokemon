import React, { MouseEventHandler } from "react";

type Props = {
    children: React.ReactElement | string;
    disabled?:boolean;
    onClick:MouseEventHandler<HTMLButtonElement>

};

export default function Button({children, onClick, disabled=false}: Props) {
  return (
    <button disabled={disabled} onClick={onClick} className="next border border-solid border-gray-400 p-2 rounded-lg text-gray-700 hover:bg-gray-100 disabled:bg-gray-200 disabled:text-gray-400 disabled:border-gray-300">
      {children}
    </button>
  );
}
