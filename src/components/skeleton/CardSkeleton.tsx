import LoadingSkeleton from "./LoadingSkeleton";

export default function CardSkeleton() {
  return (
    <div className="!space-y-4 rounded-lg border border-border !p-5">
      <LoadingSkeleton className="h-10 w-2/3" />

      <LoadingSkeleton className="h-30 w-full" />

    </div>
  );
}