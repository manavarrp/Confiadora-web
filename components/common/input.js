function Input({
  type = "text",
  placeholder = "",
  className,
  register,
  name,
  error,
  ...props
}) {
  console.log(error);
  console.log(props);
  return (
    <div className="flex flex-col w-full">
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full ${className}`}
        {...register(name)}
        {...props}
      />
      {Boolean(error) && <span className="text-red">{error}</span>}
    </div>
  );
}

export default Input;
