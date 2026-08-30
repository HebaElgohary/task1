import React from "react";

interface EmptyStateProps {
  title?: string;
  description?: string;
}


export default function EmptyState({
  title = "No data found",
  description = "There is nothing to display here yet.",
}: EmptyStateProps) {
  return (
    <div className="flex min-h-60 flex-col items-center justify-center rounded-lg border border-border bg-background-secondary p-8 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl">
        📭
      </div>

      <h2 className="mb-2 text-xl font-semibold text-text">
        {title}
      </h2>

      <p className="mb-5 max-w-md text-sm text-text-secondary">
        {description}
      </p>

    </div>
  );
}