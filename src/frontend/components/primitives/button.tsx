import { Button as FrontendButton } from "@trebired/frontend/react";
import type { ReactNode } from "react";

type ButtonVariant = "ghost" | "primary" | "secondary";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href: string;
  variant?: ButtonVariant;
};

export function Button({ children, className, href, variant = "primary" }: ButtonProps) {
  return (
    <FrontendButton className={className} href={href} softRedirect variant={variant}>
    {children}
    </FrontendButton>
  );
}
