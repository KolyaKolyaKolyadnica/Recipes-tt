"use client";
import { cousines } from "@/constants/cousines";
import { useState } from "react";
import ChevronDown from "../Icons/ChevronDown";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function Dropdown(props: Props) {
  const { value, onChange } = props;

  const [isOpen, setIsOpen] = useState(false);

  function handleChange(value: string) {
    onChange(value);
    setIsOpen(false);
  }

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white font-medium text-gray-700 hover:bg-gray-100"
      >
        <p className="w-full">{value || "Choose cuisine"}</p>
        <ChevronDown />
      </button>

      {isOpen && (
        <div className="absolute w-full max-h-60 mt-2 rounded-md overflow-y-scroll bg-white ring-1 ring-black z-50">
          <div className="py-1">
            {cousines.map((item) => {
              return (
                <button
                  key={item}
                  onClick={() => handleChange(item)}
                  className="flex justify-start w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
