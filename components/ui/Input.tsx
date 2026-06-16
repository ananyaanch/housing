import { forwardRef, type ComponentProps } from "react";

export type InputProps = ComponentProps<"input">;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input({ className = "", ...props }, ref) {
    return (
      <input
        ref={ref}
        className={`w-full rounded-md border border-border-light bg-white px-3 py-2.5 text-sm text-text-main placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        {...props}
      />
    );
  },
);
