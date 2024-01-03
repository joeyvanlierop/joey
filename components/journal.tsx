import dayjs from "dayjs";

function Root(props: { children: React.ReactNode }) {
  return <div className={"flex flex-col gap-14"}>{props.children}</div>;
}

function Section(props: { date: string; children: React.ReactNode }) {
  return (
    <section className={"flex flex-col gap-4"}>
      <div className="flex items-center gap-4">
        <time className="text-mono-11 font-header shrink-0">
          {dayjs(props.date).format("dddd, MMMM Do")}
        </time>
        <div className="h-[1px] bg-mono-5 rounded-full w-full" />
      </div>
      {props.children}
    </section>
  );
}

function Entry(props: { time: string; children: React.ReactNode }) {
  return (
    <div
      className={
        "flex flex-col [&>p]:m-0 [&>img]:mt-2 [&>img]:mb-0 [&>img]:rounded-lg bg-mono-3 rounded-lg p-4"
      }
    >
      <time className="text-mono-11 font-medium font-header text-sm mb-3">
        {props.time}
      </time>
      {props.children}
    </div>
  );
}

export { Root, Section, Entry };
