import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  disabled?: boolean;
  text?: string;
  to: string;
  children: ReactNode;
};
export default function Button(props: Props) {
  if (props.disabled) {
    return (
      <button
        disabled
        aria-disabled="true"
        className="px-4 py-2 rounded-md bg-gray-400 text-gray-300 cursor-not-allowed"
      >
        {props.children}
      </button>
    );
  }

  return (
    <Link href={props.to} className="px-4 py-2 rounded-md">
      {props.children}
    </Link>
  );
}
