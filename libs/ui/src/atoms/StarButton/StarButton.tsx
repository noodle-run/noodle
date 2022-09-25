import { cva, VariantProps } from 'class-variance-authority';
import { FC, useState } from 'react';
import { FiStar } from 'react-icons/fi';

const styles = cva(['transition-colors'], {
  variants: {
    isStarred: {
      true: ['text-amber-400', 'fill-amber-400'],
      false: ['text-gray-500', 'dark:hover:text-white', 'hover:text-black'],
    },
  },
});

type StarButtonProps = VariantProps<typeof styles> & {
  onChange?: (newValue: boolean) => void;
};

export const StarButton: FC<StarButtonProps> = ({ isStarred, onChange }) => {
  const [starred, setStarred] = useState(isStarred);

  return (
    <button
      className="p-1"
      onClick={() => {
        setStarred((current) => !current);

        if (onChange) {
          onChange(!starred);
        }
      }}
    >
      <FiStar
        title="Favourite"
        data-testid="favourite-icon"
        size={20}
        className={styles({ isStarred: starred })}
      />
    </button>
  );
};
