import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = React.ComponentPropsWithRef<"input"> & {
  className?: string;
  value: string;
  label: string;
  id: string;
};
const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, value, label, id, ...rest } = props;

  return (
    <div className={twMerge("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        ref={ref}
        value={value}
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...rest}
      />
    </div>
  );
});

Input.displayName = "Input";

export default Input;
