type FieldProps = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
};

export function Field({
  id,
  label,
  type = "text",
  placeholder,
  autoComplete,
  required,
}: FieldProps) {
  return (
    <div className="form-field">
      <label htmlFor={id}>
        {label}
        {required && <span className="req"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
      />
    </div>
  );
}

type ChoicesProps = {
  name: string;
  legend: string;
  options: string[];
  multiple?: boolean;
  defaultValue?: string;
};

export function Choices({
  name,
  legend,
  options,
  multiple = false,
  defaultValue,
}: ChoicesProps) {
  return (
    <fieldset className="form-field">
      <legend className="form-label">{legend}</legend>
      <div className="chips">
        {options.map((option) => (
          <label className="chip" key={option}>
            <input
              type={multiple ? "checkbox" : "radio"}
              name={name}
              value={option}
              defaultChecked={option === defaultValue}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
