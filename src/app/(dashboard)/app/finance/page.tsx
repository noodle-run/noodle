import { TypographyH2 } from "@/components/TypographyH2";
import { TypographyH3 } from "@/components/TypographyH3";
import { CalendarIcon } from "lucide-react";
import { Button } from "@nextui-org/react";

export default function Page() {
  return (
    <main>
      <TypographyH2>Finance Report</TypographyH2>
      <div className="mt-4 flex flex-col rounded-large px-4 py-2 dark:border-default-50">
      <div className="flex justify-between">
      <TypographyH3>November <CalendarIcon size={28} className="inline-block"/></TypographyH3>
      <div className="grid lg:grid-cols-2 gap-4">
      <Button
          variant="faded"
          size="sm"
          className="min-w-min px-2 text-tiny text-default-500"
          radius="md"
        >
            Add Revenue
        </Button>
        <Button
          variant="faded"
          size="sm"
          className="min-w-min px-2 text-tiny text-default-500"
          radius="md"
        >
            Add Expenses
        </Button>
        </div>
        </div>
      <div className="mt-6 grid lg:grid-cols-2 gap-4">
      <div className="relative overflow-x-auto rounded-md">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700/70 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Revenue
                </th>
                <th scope="col" className="px-6 py-3">
                    USD ($)
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800/70 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1/11/2023
                </th>
                <td className="px-6 py-4">
                    Salary
                </td>
                <td className="px-6 py-4">
                    3000
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800/70 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1/11/2023
                </th>
                <td className="px-6 py-4">
                    Allowance
                </td>
                <td className="px-6 py-4">
                    400
                </td>
                
            </tr>
            <tr className="bg-white border-b dark:border-gray-700 dark:bg-gray-800/70">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1/11/2023
                </th>
                <td className="px-6 py-4">
                    Birthday Gift
                </td>
                <td className="px-6 py-4">
                    400
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800/70">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    2/11/2023
                </th>
                <td className="px-6 py-4">
                    Car Wash Service
                </td>
                <td className="px-6 py-4">
                    200
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-700/70">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                </th>
                <td className="px-6 py-4 font-medium whitespace-nowrap">
                    Total
                </td>
                <td className="px-6 py-4">
                    4000
                </td>
            </tr>
        </tbody>
    </table>
</div>

<div className="relative overflow-x-auto rounded-md">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700/70 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Expenses
                </th>
                <th scope="col" className="px-6 py-3">
                    USD ($)
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800/70 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1/11/2023
                </th>
                <td className="px-6 py-4">
                    MacBook Pro
                </td>
                <td className="px-6 py-4">
                    2099
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800/70 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    2/11/2023
                </th>
                <td className="px-6 py-4">
                    Starbucks
                </td>
                <td className="px-6 py-4">
                    5
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800/70">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    2/11/2023
                </th>
                <td className="px-6 py-4">
                    Apple Magic Mouse 2
                </td>
                <td className="px-6 py-4">
                    109
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-700/70">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                </th>
                <td className="px-6 py-4 font-medium whitespace-nowrap">
                    Total
                </td>
                <td className="px-6 py-4">
                    2213
                </td>
            </tr>
        </tbody>
    </table>
</div>
</div>
</div>
    </main>
  );
}
