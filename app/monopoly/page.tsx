import { Column } from "@components/column";
import Monopoly from "@components/monopoly";


export default async function Page() {
  return (
    <div className="w-full flex flex-col items-center">
      <Column>
        <Monopoly />
      </Column>
    </div>
  )
}
