import { styled } from '@noodle/stitches';
import { Brand } from '../../atoms/Brand';

const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  letterSpacing: '0.3px',
});

const Text = styled('p', {
  fontWeight: 'bold',
  fontSize: '1em',
});

type LogoTextProps = {
  text: string;
  size?: number;
};

export const LogoText: React.FC<LogoTextProps> = ({ text, size }) => (
  <Wrapper>
    <Brand size={size} />
    <Text>{text}</Text>
  </Wrapper>
);
