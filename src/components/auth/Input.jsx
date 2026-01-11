function Input({ label, id, placeholder, type, register }) {
  return (
    <div className="input-group">
      <label htmlFor={id} className="font-medium text-gray-600">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="w-full px-4 py-3 border rounded-md outline-none placeholder:text-gray-500"
        {...register(id)}
      />
    </div>
  );
}

export default Input;
