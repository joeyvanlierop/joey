import { Clock } from "./clock";
import { Column } from "./column";

export function Footer() {
  return (
    <footer className="h-12 w-full border-t border-[#2e2e2e] absolute bottom-0 flex justify-center items-center text-sm text-[#707070]">
      <Column className="justify-center">
        <div className="flex justify-between items-center">
          <span>
            {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?.slice(0, 7)}:{" "}
            {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE}
          </span>
          <Clock />
        </div>
      </Column>
    </footer>
  );
}
