import { Skeleton } from "@/components/ui/skeleton";

const Loader = () => {
  const skeletonRow = [1, 2, 3, 4, 5];
  return (
    <div className="space-y-6">
      {skeletonRow.map(() => {
        return (<>
        <li className="flex gap-4 py-2">
      <Skeleton className="h-24 w-24"/>
      <div className="flex flex-col grow">
       <Skeleton className="h-6 w-[150px]"/>
    
        <div className="mt-auto flex items-center justify-between">
         <Skeleton className="h-6 w-[250px]"/>
         <Skeleton className="h-10 w-[150px]"/>
        </div>
      </div>
    </li>
        </>)
      })}
      
    </div>
  );
};

export default Loader;
