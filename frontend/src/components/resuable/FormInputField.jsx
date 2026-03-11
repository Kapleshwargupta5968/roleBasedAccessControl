const FormInputField = ({
    label,
    type = "text",
    name,
    value,
    onChange,
    placeholder
}) => {
  return (
    <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
            {label}
        </label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </div>
  );
};

export default FormInputField
