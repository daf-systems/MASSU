// components/FormField.tsx
import React from 'react';

interface FormFieldProps {
  id: string;
  name: string;
  type?: string; // Optional for textarea
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  icon: React.ReactNode;
  isTextArea?: boolean;
  required?: boolean;
  error?: string; // To display validation errors specific to this field
}

export default function FormField({
  id,
  name,
  type = 'text', // Default type for input
  placeholder,
  value,
  onChange,
  icon,
  isTextArea = false,
  required = false,
  error,
}: FormFieldProps) {
  const InputComponent = isTextArea ? 'textarea' : 'input';

  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>{' '}
      {/* For accessibility */}
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
        {isTextArea ? <span className="pt-1">{icon}</span> : icon}
      </div>
      <InputComponent
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full border ${
          error ? 'border-red-500' : 'border-gray-300'
        } rounded-lg py-3 pl-10 pr-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition ${
          isTextArea ? 'h-32 resize-none pt-3' : ''
        }`}
        required={required}
        aria-invalid={!!error} // For accessibility
        aria-describedby={error ? `${id}-error` : undefined} // For accessibility
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}