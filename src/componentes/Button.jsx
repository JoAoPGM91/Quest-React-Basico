function Button(props) {
  const onButtonClicked = () => {
    alert(`A label desse botão é ${props.label}`);
  };

  return (
    <button
      onClick={onButtonClicked}
      style={{ width: 100, height: 50, color: "#FF5C00" }}
    >
      {props.label}
    </button>
  );
}

export default Button;
