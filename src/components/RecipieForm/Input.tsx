"use client";

import { ChangeEvent, useId } from "react";

type Props = {
  type?: "number" | "string";
  placeholder: string;
  label?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input(props: Props) {
  const id = useId();

  return (
    <div className="w-full flex flex-col gap-1">
      {props.label && (
        <label htmlFor={id} className="text-base font-medium text-gray-500">
          {props.label}
        </label>
      )}
      <input
        id={id}
        type={props.type}
        min={props.type === "number" ? 0 : undefined}
        placeholder={props.placeholder}
        className="w-full px-4 py-2 bg-gray-100 rounded-md text-gray-700"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
