import "./form-input.styles.scss";
const FormInput = ({ label, ...otherProps }) => {
  return (
    <dev className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </dev>
  );
};

export default FormInput;
