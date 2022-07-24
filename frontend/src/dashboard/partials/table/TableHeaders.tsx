export const TableBody = ({ row, setIsOpen, setOpenDrawer }: any) => {
  return (
    <>
      <tr key={row._id}
        onClick={() => {
          setIsOpen(row.index);
          setOpenDrawer(row)
        }}
        className="cursor-pointer bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td className="px-6 py-4 text-tiny font-medium  text-black ">
          <img src={row.image} className="inline rounded-md mr-5 w-12" />
          <span>{row.name}</span>
        </td>
        <td className="px-6 py-4  text-tiny font-medium text-gray-600">
          {row.date}
        </td>
        <td className="px-6 py-4 text-tiny font-medium text-black ">
          {row.type}
        </td>
        <td className="px-6 py-4 text-tiny font-medium text-black ">
          {row.ammount}
        </td>
        <td className="px-6 py-4 text-tiny font-medium text-black ">
          {row.status == "failed" ? <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-1.5 rounded-xl dark:bg-red-200 dark:text-red-900">{row.status}</span>
            : row.status == "successful" ? <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-1.5 rounded-xl dark:bg-green-200 dark:text-green-900">{row.status}</span>
              : row.status == "processing" ? <span className="bg-red-800 text-gold text-xs font-semibold mr-2 px-2.5 py-1.5 rounded-xl dark:bg-green-200 dark:text-green-900">{row.status}</span>
                : null
          }
        </td>
      </tr>
    </>
  )
}
