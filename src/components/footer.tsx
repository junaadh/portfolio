import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="py-6 w-[80%] sm:w-[600px] md:w-[780px] h-auto bg-gradient-to-br from-gray-700 via-slate-600 to-gray-700 dark:from-gray-800 dark:via-slate-700 dark:to-bg-gray-800 rounded-2xl shadow-2xl flex flex-col items-center justify-center">
        <p className="text-orange-600">
          Created by{" "}
          <span className="font-bold hover:animate-pulse hover:translate-x-4 hover:-translate-y-4">
            Junaadh
          </span>{" "}
          using{" "}
          <span className="font-bold">
            <Link href={"https://nextjs.org"} target="_blank">
              NEXTJS
            </Link>
          </span>
        </p>
      </div>
    </>
  );
}
