import { styled } from '@noodle/stitches';
import { FC } from 'react';

function sentenceBuilder(text: string, number: number) {
  return `${number} ${number === 1 ? text : `${text}s`}`;
}

function timeSince(date: Date): string {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

  let interval = seconds / 31536000;
  if (interval > 1) {
    return sentenceBuilder('year', Math.floor(interval));
  }

  interval = seconds / 2592000;
  if (interval > 1) {
    return sentenceBuilder('month', Math.floor(interval));
  }

  interval = seconds / 86400;
  if (interval > 1) {
    return sentenceBuilder('day', Math.floor(interval));
  }

  interval = seconds / 3600;
  if (interval > 1) {
    return sentenceBuilder('hour', Math.floor(interval));
  }

  interval = seconds / 60;
  if (interval > 1) {
    return sentenceBuilder('minute', Math.floor(interval));
  }
  return sentenceBuilder('second', Math.floor(seconds));
}

const Text = styled('p', {
  fontSize: '$sm',
  color: '$gray9',
});
interface TimeSinceProps {
  date: Date;
}

export const TimeSince: FC<TimeSinceProps> = ({ date }) => {
  if (date > new Date()) {
    return <Text>Date must be in the past</Text>;
  }
  return <Text> {`${timeSince(new Date(date))} ago`} </Text>;
};
