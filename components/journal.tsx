import dayjs from "dayjs";

function Root(props: { children: React.ReactNode }) {
  return <div className={"flex flex-col gap-14"}>{props.children}</div>;
}

function Day(props: { date: string; children: React.ReactNode }) {
  return (
    <section className={"flex flex-col gap-4"}>
      <div className="flex items-center gap-4">
        <time
          className="text-mono-11 font-header shrink-0"
          dateTime={props.date}
        >
          {dayjs(props.date).format("dddd, MMMM Do")}
        </time>
        <hr className="border-border rounded-full w-full my-0" />
      </div>
      {props.children}
    </section>
  );
}

function Entry(props: { time: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col bg-mono-2 rounded-lg p-4 border border-border">
      <time
        className="text-mono-11 font-medium font-header text-sm mb-4"
        dateTime={props.time}
      >
        {props.time}
      </time>
      <div className="flex flex-col gap-4 [&>p]:m-0 [&>img]:mt-2 [&>img]:mb-0 [&>img]:rounded-lg">
        {props.children}
      </div>
    </div>
  );
}

export { Root, Day, Entry };
