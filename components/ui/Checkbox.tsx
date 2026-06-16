import { forwardRef, type ComponentProps } from "react";

export type CheckboxProps = ComponentProps<"input">;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox({ className = "", type = "checkbox", ...props }, ref) {
    return (
      <input
        ref={ref}
        type={type}
        className={`size-4 rounded border-border-light text-primary accent-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${className}`}
        {...props}
      />
    );
  },
);
