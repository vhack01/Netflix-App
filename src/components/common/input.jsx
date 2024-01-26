import { useRef, useState } from "react";

const Input = ({ label, name, type, data, onChange, errors = {} }) => {
  const input = useRef();
  const inputLabel = useRef();
  const [isFocus, setFocus] = useState(false);

  const handleFocusLost = () => {
    input.current.value.length !== 0 ? setFocus(true) : setFocus(false);
  };

  return (
    <div className="input__group">
      <div className="input__group__container">
        <input
          value={data[name]}
          name={name}
          ref={input}
          type={type}
          id={name}
          className="login__group__input"
          onFocus={() => setFocus(true)}
          onBlur={handleFocusLost}
          onChange={onChange}
          autoComplete="off"
        />
        <label
          ref={inputLabel}
          htmlFor={name}
          className={`login__group__label ${isFocus && "label__focus"}`}
        >
          {label}
        </label>
      </div>

      {errors && <div className="login__error">{errors[name]}</div>}
    </div>
  );
};

export default Input;
