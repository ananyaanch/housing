import { forwardRef, type ComponentProps } from "react";

export type SelectProps = ComponentProps<"select">;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select({ className = "", children, ...props }, ref) {
    return (
      <select
        ref={ref}
        className={`w-full rounded-md border border-border-light bg-white px-3 py-2.5 text-sm text-text-main focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        {...props}
      >
        {children}
      </select>
    );
  },
);
