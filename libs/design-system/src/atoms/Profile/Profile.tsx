import { styled } from '@noodle/stitches';
import NextImage from 'next/image';
import { FC } from 'react';

const Image = styled(NextImage, {
  borderRadius: '$2xl',
});

type ImageProps = {
  readonly src: string;
};

export const Profile: FC<ImageProps> = ({ src }) => (
  <Image src={src} alt="Profile" width={50} height={50} />
);
