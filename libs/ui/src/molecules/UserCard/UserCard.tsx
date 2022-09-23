import { FC } from 'react';
import { FiChevronDown, FiChevronUp, FiSettings, FiUser } from 'react-icons/fi';
import { useMediaQuery } from 'usehooks-ts';
import { DropdownMenu } from '../../atoms/DropdownMenu';

type UserCardProps = {
  name: string;
  avatar: string;
  course: string;
};

export const UserCard: FC<UserCardProps> = ({ name, avatar, course }) => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  return (
    <DropdownMenu
      trigger={
        <button
          type="button"
          className="flex items-center justify-center w-auto gap-3 p-3 transition-colors lg:w-full lg:justify-between focus-visible:border-none focus-within:outline-none"
        >
          <div className="flex items-center gap-3 text-left">
            <img
              src={avatar}
              alt="Avatar"
              className="w-8 h-8 rounded-full lg:w-10 lg:h-10"
            />
            <div className="hidden lg:block">
              <p className="text-sm font-semibold">{name}</p>
              <p className="text-xs text-gray-500">{course}</p>
            </div>
          </div>
          {isDesktop ? (
            <FiChevronUp size={24} className="text-zinc-500" />
          ) : (
            <FiChevronDown size={20} className="text-zinc-500" />
          )}
        </button>
      }
      list={[
        {
          label: 'Profile',
          href: '/dashboard/profile',
          icon: <FiUser />,
        },
        {
          label: 'Settings',
          href: '/dashboard/settings',
          icon: <FiSettings />,
        },
      ]}
    />
  );
};
