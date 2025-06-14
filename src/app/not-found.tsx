import Link from "next/link";
import { TEXT } from "@/constant/text";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <h2 className="text-4xl font-bold text-text-500 p-5">
        {TEXT.common.pageNotFound}
      </h2>
      <p className="text-text-300">{TEXT.common.resourceNotFound}</p>
      <Link href="/" className="text-secondary p-5">
        {TEXT.common.returnHome}
      </Link>
    </div>
  );
}
