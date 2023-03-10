export default function FormField({
  label,
  type,
  name,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
  placeholder,
}: {
  label?: string;
  type?: string;
  name?: string;
  value?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSurpriseMe?: boolean;
  handleSurpriseMe?: () => void;
  placeholder?: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={name} className="block text-sm font-medium text-gray-900">
          {label}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className={"font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black"}
          >
            Surprise me
          </button>
        )}
      </div>
      <input
        name={name}
        type={type}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className={
          "bg-gray-200 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3"
        }
      />
    </div>
  );
}
