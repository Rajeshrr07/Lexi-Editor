import { createCommand, LexicalNode, $applyNodeReplacement, $isTextNode, TextNode } from 'lexical';

class ButtonLikeLinkTextNode extends TextNode {
  static getType() {
    return 'button-like-link-text';
  }

  static clone(node) {
    return new ButtonLikeLinkTextNode(
      node.__text,
      node.__key,
      node.__url,
      node.__borderRadius,
      node.__borderWidth,
      node.__borderColor,
      node.__xPadding,
      node.__yPadding,
      node.__bodyColor,
      node.__textSize,
      node.__textColor,
      node.__altText
    );
  }

  constructor(
    text,
    key,
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
  ) {
    super(text, key);
    this.__url = url;
    this.__borderRadius = borderRadius;
    this.__borderWidth = borderWidth;
    this.__borderColor = borderColor;
    this.__xPadding = xPadding;
    this.__yPadding = yPadding;
    this.__bodyColor = bodyColor;
    this.__textSize = textSize;
    this.__textColor = textColor;
    this.__altText = altText;
  }

  createDOM() {
    const dom = document.createElement('a');
    dom.style.borderRadius = this.__borderRadius;
    dom.style.borderWidth = this.__borderWidth;
    dom.style.borderColor = this.__borderColor;
    dom.style.borderStyle = 'solid';
    dom.style.padding = `${this.__yPadding} ${this.__xPadding}`;
    dom.style.backgroundColor = this.__bodyColor;
    dom.style.fontSize = this.__textSize;
    dom.style.color = this.__textColor;
    dom.href = this.__url;
    dom.alt = this.__altText;
    dom.innerText = this.getTextContent();
    return dom;
  }

  updateDOM(prevNode, dom) {
    const isUpdated = [
      'borderRadius',
      'borderWidth',
      'borderColor',
      'xPadding',
      'yPadding',
      'bodyColor',
      'textSize',
      'textColor',
      'url',
      'altText',
    ].some((attr) => this[`__${attr}`] !== prevNode[`__${attr}`]);

    if (isUpdated) {
      dom.style.borderRadius = this.__borderRadius;
      dom.style.borderWidth = this.__borderWidth;
      dom.style.borderColor = this.__borderColor;
      dom.style.padding = `${this.__yPadding} ${this.__xPadding}`;
      dom.style.backgroundColor = this.__bodyColor;
      dom.style.fontSize = this.__textSize;
      dom.style.color = this.__textColor;
      dom.href = this.__url;
      dom.alt = this.__altText;
    }
    return isUpdated;
  }
}

export default ButtonLikeLinkTextNode;
