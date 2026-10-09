import type { HTMLAttributes } from "react";

type FieldProps = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  inputMode?: HTMLAttributes<HTMLInputElement>["inputMode"];
  min?: number;
  step?: string;
};

export function Field({
  id,
  label,
  type = "text",
  placeholder,
  autoComplete,
  required,
  inputMode,
  min,
  step,
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
        inputMode={inputMode}
        min={min}
        step={step}
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
