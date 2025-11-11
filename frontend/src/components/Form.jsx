const Form = ({label, placeholder, ...props}) => {
  return (
    <div {...props}>
      <label>{label}</label>
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default Form;
