const Select = ({
  className,
  onChange,
  options = [],
  emptyOptions,
  name,
  register,
  error,
  ...props
}) => {
  return (
    <div className='flex flex-col w-full'>
      <select
<<<<<<<< Updated upstream:components/common/SelectList.js
        onChange={onChange}
========
>>>>>>>> Stashed changes:components/common/Select.js
        className={className}
        {...register(name)}
        {...props}
        onChange={onChange}
      >
        <option value=''>{emptyOptions}</option>
        {options &&
          options.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
      </select>
      {Boolean(error) && <span className='text-red'>{error}</span>}
    </div>
  )
}

export default Select
