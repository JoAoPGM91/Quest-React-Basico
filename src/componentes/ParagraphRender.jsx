function ParagraphRender({ color, text, toUpperCase }) {
  return <p style={{ color: color }}>{toUpperCase(text)}</p>;
}

export default ParagraphRender;