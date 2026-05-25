"use client";
import Link from "next/link";

export default function BackLink() {
  return (
    <Link href="/" className="work-back-link">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M8 2L3 6L8 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      ALL WORK
    </Link>
  );
}
