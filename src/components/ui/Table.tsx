import { cn } from "../../utils/cn";


type row= string[]

interface TableProps{
  columns: string[]
  data: row[];
  striped?: boolean;
  title?:string
  className?:string
}

export default function Table({
  title,
  columns,
  data,
  striped = false,
  className=''
}: TableProps) {
  return (
    <div className={cn("w-full overflow-x-auto  ",className)}>
      <h3 className="text-2xl text-primary font-semibold !mb-2 ">{title}</h3>
      <table className="w-full border-collapse border border-border ">
        <thead className="">
          <tr className="bg-form">
            {columns.map((column) => (
              <th
                key={String(column)}
                className="border border-border !px-4 !py-3 text-left font-semibold text-text"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={
                striped && rowIndex % 2 !== 0
                  ? "bg-form"
                  : ""
              }
            >
              {row.map((r) => (
                <td
                  key={String(r)}
                  className="border border-border !px-4 !py-3 text-text-secondary"
                >
                  {String(r)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}