// import React from "react";
// import { ArrowRight } from "lucide-react";
// import { cn } from "@/lib/utils";

// interface InteractiveHoverButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

// export const InteractiveHoverButton = React.forwardRef<
//   HTMLButtonElement,
//   InteractiveHoverButtonProps
// >(({ children, className, ...props }, ref) => {
//   return (
//     <button
//       ref={ref}
//       className={cn(
//         "group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-background p-2 px-6 text-center font-semibold",
//         className,
//       )}
//       {...props}
//     >
//       <div className="flex items-center gap-2">
//         <div className="h-2 w-2 rounded-full bg-primary transition-all duration-300 group-hover:scale-[100.8]"></div>
//         <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
//           {children}
//         </span>
//       </div>
//       <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
//         <span>{children}</span>
//         <ArrowRight />
//       </div>
//     </button>
//   );
// });

// InteractiveHoverButton.displayName = "InteractiveHoverButton";
// components/InteractiveHoverButton.tsx
import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils"; // make sure this exists or remove 'cn'

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className={cn(
        "group relative inline-flex items-center overflow-hidden rounded-full border border-primary bg-transparent px-6 py-2 font-semibold text-primary transition-colors hover:bg-primary hover:text-white",
        className,
      )}
    >
      {/* Initial state (before hover) */}
      <div className="flex items-center gap-2 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        <div className="h-2 w-2 rounded-full bg-primary transition-transform duration-300 group-hover:scale-110" />
        <span>{children}</span>
      </div>

      {/* Hover state (slides in) */}
      <div className="absolute inset-0 z-10 flex items-center justify-center gap-2 translate-x-12 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight className="h-4 w-4" />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
