import { Button, TableCell, TableRow } from '@noodle/ui';

import { WaitListInvitationForm } from './WaitListInvitationForm';

type Reason = 'STUDENT' | 'PROJECT' | 'BOTH';

type WaitListRow = {
  id: string;
  name: string;
  email: string;
  reason: Reason;
  approved: boolean;
  invitationSentAt: string | null;
  createdAt: string;
};

export const WaitListTableRow = ({ data }: { data: WaitListRow }) => {
  return (
    <TableRow>
      <TableCell className="font-medium">
        <span>{data.name}</span>
        <span className="text-secondary-foreground bg-primary-500/50 ml-2 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors">
          {data.email}
        </span>
      </TableCell>
      <TableCell>
        <span className="text-sm">{data.reason}</span>
      </TableCell>
      <TableCell>
        {data.invitationSentAt ? (
          <span className="text-sm">Invited</span>
        ) : (
          <span className="text-sm">No invitation sent</span>
        )}
      </TableCell>
      <TableCell className="text-right">
        {!data.invitationSentAt && (
          <WaitListInvitationForm invitationId={data.id} />
        )}
      </TableCell>
    </TableRow>
  );
};
