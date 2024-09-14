import { AlertCircle, AlertTriangle, Info } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const formErrorVariants = cva(
  "flex items-center gap-2 rounded-md p-3 text-sm",
  {
    variants: {
      variant: {
        default: "bg-destructive/15 text-destructive",
        warning: "bg-warning/15 text-warning",
        info: "bg-info/15 text-info",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface FormErrorProps extends VariantProps<typeof formErrorVariants> {
  message: string
  className?: string
}

export default function FormError({ message, variant, className }: FormErrorProps) {
  const IconComponent = {
    default: AlertCircle,
    warning: AlertTriangle,
    info: Info,
  }[variant || "default"]

  return (
    <div
      role="alert"
      className={cn(formErrorVariants({ variant }), className)}
    >
      <IconComponent className="h-4 w-4 flex-shrink-0" />
      <span>{message}</span>
    </div>
  )
}