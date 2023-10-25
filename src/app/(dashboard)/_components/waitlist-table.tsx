"use client";
import { trpc } from "@/trpc/client";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { type FC } from "react";
import { WaitListInvitationForm } from "./waitlist-form";

export const Waitlist: FC = () => {
  const {
    data: waitlist,
    isLoading,
    error,
  } = trpc.waitlist.getWaitList.useQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something wrong happened...</p>;
  }

  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Name</TableColumn>
        <TableColumn>Email</TableColumn>
        <TableColumn>Invitation Status</TableColumn>
        <TableColumn className="text-right">Actions</TableColumn>
      </TableHeader>
      <TableBody>
        {waitlist.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>
              {item.invitationSentAt ? (
                <span className="text-sm">Invited</span>
              ) : (
                <span className="text-sm">No invitation sent</span>
              )}
            </TableCell>
            <TableCell className="text-right">
              {!item.invitationSentAt && (
                <WaitListInvitationForm invitationId={String(item.id)} />
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
