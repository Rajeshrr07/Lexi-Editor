import React, { useState } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { Button, TextField, InputAdornment } from '@material-ui/core';
import { BorderColor as BorderColorIcon, Link as LinkIcon } from '@material-ui/icons';
import ButtonLikeLinkTextNode from './ButtonLikeLinkTextNode';

const ButtonLikeLinkTextPlugin = () => {
  const [editor] = useLexicalComposerContext();
  const [text, setText] = useState('Button Text');
  const [url, setUrl] = useState('');
  const [borderRadius, setBorderRadius] = useState('5px');
  const [borderWidth, setBorderWidth] = useState('1px');
  const [borderColor, setBorderColor] = useState('#000');
  const [xPadding, setXPadding] = useState('10px');
  const [yPadding, setYPadding] = useState('5px');
  const [bodyColor, setBodyColor] = useState('#fff');
  const [textSize, setTextSize] = useState('16px');
  const [textColor, setTextColor] = useState('#000');
  const [altText, setAltText] = useState('');

  const insertButtonLikeLinkText = () => {
    editor.update(() => {
      const buttonNode = new ButtonLikeLinkTextNode(
        text,
        undefined,
        url,
        borderRadius,
        borderWidth,
        borderColor,
        xPadding,
        yPadding,
        bodyColor,
        textSize,
        textColor,
        altText
      );
      editor.insertNode(buttonNode);
    });
  };

  return (
    <div>
      <TextField
        label="Button Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        fullWidth
      />
      <TextField
        label="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LinkIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Border Radius"
        value={borderRadius}
        onChange={(e) => setBorderRadius(e.target.value)}
        fullWidth
      />
      <TextField
        label="Border Width"
        value={borderWidth}
        onChange={(e) => setBorderWidth(e.target.value)}
        fullWidth
      />
      <TextField
        label="Border Color"
        value={borderColor}
        onChange={(e) => setBorderColor(e.target.value)}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <BorderColorIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Horizontal Padding"
        value={xPadding}
        onChange={(e) => setXPadding(e.target.value)}
        fullWidth
      />
      <TextField
        label="Vertical Padding"
        value={yPadding}
        onChange={(e) => setYPadding(e.target.value)}
        fullWidth
      />
      <TextField
        label="Background Color"
        value={bodyColor}
        onChange={(e) => setBodyColor(e.target.value)}
        fullWidth
      />
      <TextField
        label="Text Size"
        value={textSize}
        onChange={(e) => setTextSize(e.target.value)}
        fullWidth
      />
      <TextField
        label="Text Color"
        value={textColor}
        onChange={(e) => setTextColor(e.target.value)}
        fullWidth
      />
      <TextField
        label="Alt Text"
        value={altText}
        onChange={(e) => setAltText(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={insertButtonLikeLinkText}>
        Insert Button Like Link Text
      </Button>
    </div>
  );
};

export default ButtonLikeLinkTextPlugin;
