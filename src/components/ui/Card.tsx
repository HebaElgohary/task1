import React, { type ReactNode } from "react";
import { cn } from "../../utils/cn";

interface CardProps {
  title: string;
  description: string;
  image?: string;
  children?: ReactNode;
  className?: string;
}

export default function Card({
  title,
  description,
  image,
  children,
  className = "",
}: CardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-2xl bg-background shadow-lg transition-shadow duration-300 hover:shadow-xl",
        className
      )}
    >
      {image && (
        <div className="h-52 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col gap-3 !p-5">
        <h2 className="text-xl font-semibold text-primary">
          {title}
        </h2>

        <p className="text-sm leading-6 text-text-secondary">
          {description}
        </p>

        {children && <div className=" !pt-3">{children}</div>}
      </div>
    </article>
  );
}