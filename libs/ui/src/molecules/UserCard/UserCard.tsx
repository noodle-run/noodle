import { signOut } from 'next-auth/react';
import { FC } from 'react';
import { FiChevronUp, FiLogOut, FiSettings, FiUser } from 'react-icons/fi';
import { twMerge } from 'tailwind-merge';
import { useMediaQuery } from 'usehooks-ts';
import { DropdownMenu } from '../../atoms/DropdownMenu';

type UserCardProps = {
  name?: string;
  avatar?: string;
};

export const UserCard: FC<UserCardProps> = ({ name, avatar }) => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  return (
    <DropdownMenu
      buttonAs="div"
      pos="top"
      list={[
        {
          label: 'Profile',
          href: '/dashboard/profile',
          icon: <FiUser />,
        },
        {
          label: 'Sign out',
          onClick: () => signOut(),
          icon: <FiLogOut />,
        },
        {
          label: 'Settings',
          href: '/dashboard/settings',
          icon: <FiSettings />,
        },
      ]}
    >
      <button
        type="button"
        className={twMerge(
          'flex items-center lg:justify-start justify-center w-auto gap-3 p-3 transition-colors lg:w-full focus-visible:border-none focus-within:outline-none',
          name && 'lg:justify-center',
        )}
      >
        <div className="flex items-center gap-3 text-left">
          <img
            src={avatar || '/user-placeholder.svg'}
            alt={name}
            className="w-8 h-8 rounded-full lg:w-10 lg:h-10"
          />
          {name && (
            <div className="hidden lg:block">
              <p className="text-sm font-semibold">{name}</p>
            </div>
          )}
        </div>
        {isDesktop && <FiChevronUp size={24} className="text-zinc-500" />}
      </button>
    </DropdownMenu>
  );
};
