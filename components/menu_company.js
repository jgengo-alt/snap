import Link from "next/link";

export default function MenuCompany() {
  return (
    <>
      <ul className="flex flex-col gap-3 py-4 pl-6">
        <li className="flex items-center gap-3 text-black/50 hover:text-black">
          <Link href="#">History</Link>
        </li>
        <li className="inline-flex items-center gap-3 text-black/50 hover:text-black">
          <a href="#">Our Team</a>
        </li>
        <li className="inline-flex items-center gap-3 text-black/50 hover:text-black">
          <a href="#">Blog</a>
        </li>
      </ul>
    </>
  );
}
