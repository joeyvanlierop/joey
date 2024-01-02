import dayjs from "dayjs";

function Root(props: { children: React.ReactNode }) {
  return <div className={"flex flex-col gap-14"}>{props.children}</div>;
}

function Section(props: { date: string; children: React.ReactNode }) {
  return (
    <section className={"flex flex-col gap-4"}>
      <div className="flex items-center gap-4">
        <time className="text-[#a0a0a0] shrink-0">
          {dayjs(props.date).format("dddd, MMMM Do")}
        </time>
        <div className="h-[1px] bg-[#a0a0a0] rounded-full w-full" />
      </div>
      {props.children}
    </section>
  );
}

function Entry(props: { time: string; children: React.ReactNode }) {
  return (
    <div
      className={
        "flex flex-col [&>p]:m-0 [&>img]:my-2 [&>img]:rounded-md bg-[#242424] rounded-xl p-4"
      }
    >
      <time className="text-[#a0a0a0] font-semibold font-header text-sm mb-3">
        {props.time}
      </time>
      {props.children}
    </div>
  );
}

export { Root, Section, Entry };
