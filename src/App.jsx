import ParagraphRender from "./componentes/ParagraphRender.jsx";
import Button from "./componentes/Button.jsx";
import "./App.css";

function App() {
  const text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit.";

  // eslint-disable-next-line no-unused-vars
  const toUpperCase = (text) => text.toLocaleUpperCase();

  const color = "#FF5C00";

  return (
    <>
      <ParagraphRender
        text={text}
        color={color}
        toUpperCase={(t) => t.toUpperCase()}
      />
      <Button label="Clique aqui" />
    </>
  );
}

export default App;
