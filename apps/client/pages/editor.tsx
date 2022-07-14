import { Editor } from '@noodle/editor';
import { styled } from '@noodle/stitches';
import { NextPage } from 'next';

const Wrapper = styled('div', {
  maxWidth: '960px',
  margin: '0 auto',
  pt: '$6',
});

const EditorPage: NextPage = () => (
  <Wrapper>
    <Editor />
  </Wrapper>
);

export default EditorPage;
