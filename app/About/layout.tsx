import Link from "next/link";
import React, { ReactNode } from "react";

const Aboutlayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <nav>
        <ul className="flex justify-center mb-6 mt-6 gap-5 text-xl">
          <li>
            <Link href="/">Mission</Link>
          </li>
          |
          <li>
            <Link href="/About">Vision</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Aboutlayout;
