const fixedInputClass = "z-50";

export default function Input({
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired=false,
    placeholder,
    customClass
}){
    return (
        <div className="flex flex-col mb-5 space-y-1">
            <label htmlFor={labelFor} className="">
                {labelText}
            </label>
            <input
                onChange={handleChange}
                value={value}
                id={id}
                name={name}
                type={type}
                required={isRequired}
                className={fixedInputClass+customClass}
                placeholder={placeholder}
            />
        </div>
    );
};