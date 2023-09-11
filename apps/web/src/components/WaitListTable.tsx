import { type FC } from 'react';

import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from '@noodle/ui';

import { api } from '@/utils/api';
import { WaitListTableRow } from './WaitListTableRow';

export const WaitListTable: FC = () => {
  const { data, isLoading } = api.waitlist.getWaitList.useQuery();

  if (isLoading) {
    return <>Loading</>;
  }

  return (
    <div className="overflow-hidden pb-2 ">
      <Table>
        <TableCaption>A list of your waitlist invitations.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Reason</TableHead>
            <TableHead>Invitation Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item) => {
            return <WaitListTableRow key={item.id} data={item} />;
          })}
        </TableBody>
      </Table>
    </div>
  );
};
