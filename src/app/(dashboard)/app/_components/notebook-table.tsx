"use client";

import { Icon } from "@/components/icon";
import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

const fakeData = {
  name: "Introduction to Information Security",
  module: "CS759",
  lastEdited: "2 Hours ago",
};

export const NotebookTable = () => {
  return (
    <Table
      isHeaderSticky
      isVirtualized
      fullWidth
      removeWrapper
      aria-label="Example static collection table"
    >
      <TableHeader className="border-b border-default-200">
        <TableColumn className="border-b border-default-200 bg-background dark:border-default-50">
          Name
        </TableColumn>
        <TableColumn className="border-b border-default-200 bg-background dark:border-default-50">
          Module
        </TableColumn>
        <TableColumn className="border-b border-default-200 bg-background dark:border-default-50">
          Last edited
        </TableColumn>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 20 }).map((_, i) => (
          <TableRow key={i}>
            <TableCell className="flex items-center gap-3">
              <Icon name="Lock" size={13} strokeWidth={2} /> {fakeData.name}
            </TableCell>
            <TableCell>
              <Chip color="success" size="sm">
                {fakeData.module}
              </Chip>
            </TableCell>
            <TableCell>{fakeData.lastEdited}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
