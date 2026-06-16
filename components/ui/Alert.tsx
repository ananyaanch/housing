import type { ComponentProps } from "react";

type AlertVariant = "success";

type AlertProps = ComponentProps<"div"> & {
  variant?: AlertVariant;
};

const variantClasses: Record<AlertVariant, string> = {
  success:
    "border border-success bg-success/10 text-success",
};

export function Alert({
  variant = "success",
  className = "",
  role = "status",
  ...props
}: AlertProps) {
  return (
    <div
      role={role}
      className={`rounded-md px-4 py-3 text-sm ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}
