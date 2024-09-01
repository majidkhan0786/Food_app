import { Button, ButtonProps } from "./shared/button";
import { cn } from "../Utils/utils";

interface LoadingButtonProps extends ButtonProps {
  loading: boolean;
}

export default function LoadingButton({
  loading,
  disabled,
  className,
  ...props
}: LoadingButtonProps) {
  return (
    <Button
      disabled={loading || disabled}
      className={cn("flex items-center gap-2", className)}
      {...props}
    >
      {loading && <i className="fa fa-spinner fa-spin"></i>}
      {props.children}
    </Button>
  );
}
