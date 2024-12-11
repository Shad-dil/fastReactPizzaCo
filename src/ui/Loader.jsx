import { Skeleton } from "@/components/ui/skeleton";

const Loader = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 grid-cols-2">
        <Skeleton className="h-[300px] w-full rounded-lg" />
        <Skeleton className="h-[300px] w-full rounded-lg" />
      </div>
    </div>
  );
};

export default Loader;
