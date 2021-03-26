import Link from "next/link";

export function Menu() {
  return (
    <div className="fixed top-0 left-0 right-0 p-4 flex gap-4">
      <Link href="/" passHref>
        <a className="bg-gray-200 px-4 py-2">Home</a>
      </Link>
      <Link href="/time" passHref>
        <a className="bg-gray-200 px-4 py-2">Time</a>
      </Link>
      <Link href="/load" passHref>
        <a className="bg-gray-200 px-4 py-2">Load</a>
      </Link>
    </div>
  );
}
