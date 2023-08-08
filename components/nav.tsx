import { Dot } from "@components/dot";

export function Nav(props) {
  return (
    <nav
      className={`fixed bottom-0 left-1/2 mb-4 flex h-12 w-[94%] -translate-x-1/2 justify-between rounded-full bg-neutral-800 px-6 shadow-[0_0_30px_-15px_rgba(170,170,170,19%)] md:mb-14 md:w-auto md:gap-8`}
    >
      {props.categories?.map((category, idx) => {
        const isSelected = props.selected == idx;

        return (
          <div
            key={idx}
            onClick={() => props.setSelected(idx)}
            tabIndex={0}
            className={`flex min-w-0 flex-shrink cursor-pointer items-center transition-opacity hover:opacity-100 ${
              !isSelected ? "opacity-30" : ""
            } z-20`}
          >
            <Dot color={category.color} />
            <p className="ml-3 overflow-hidden text-ellipsis whitespace-nowrap capitalize">
              {category.name}
            </p>
          </div>
        );
      })}
    </nav>
  );
}
