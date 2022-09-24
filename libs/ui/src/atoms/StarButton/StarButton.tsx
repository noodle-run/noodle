import { cva, VariantProps } from 'class-variance-authority';
import { FC, useState } from 'react';
import { FiStar } from 'react-icons/fi';

const styles = cva(['transition-colors'], {
  variants: {
    isStarred: {
      true: ['text-amber-400', 'fill-amber-400'],
      false: ['text-gray-500'],
    },
  },
});

type StarButtonProps = VariantProps<typeof styles> & {
  onChange: (newValue: boolean) => void;
};

export const StarButton: FC<StarButtonProps> = ({ isStarred, onChange }) => {
  const [starred, setStarred] = useState(isStarred);

  return (
    <button
      onClick={() => {
        setStarred((current) => !current);

        onChange(!starred);
      }}
    >
      <FiStar
        title="Favourite"
        data-testid="favourite-icon"
        size={24}
        className={styles({ isStarred: starred })}
      />
    </button>
  );
};
