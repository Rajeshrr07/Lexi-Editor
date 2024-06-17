import React from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import ButtonLikeLinkTextPlugin from './Plugin';
import ButtonLikeLinkTextNode from './ButtonLinkNode';

const editorConfig = {
  namespace: 'MyEditor',
  nodes: [ButtonLikeLinkTextNode],
  onError: (error) => {
    console.error(error);
  },
};

const MyEditor = () => (
  <LexicalComposer initialConfig={editorConfig}>
    <RichTextPlugin
      contentEditable={<ContentEditable />}
      placeholder={<div>Enter some text...</div>}
    />
    <HistoryPlugin />
    <ButtonLikeLinkTextPlugin />
  </LexicalComposer>
);

export default MyEditor;
