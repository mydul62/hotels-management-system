import React from 'react';
import { Skeleton } from "@/components/ui/skeleton"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
const Loading = () => {
  return (
    <div className=" max-w-7xl mx-auto w-[90%] grid md:grid-cols-3 grid-cols-1 gap-6 my-20">
    {
    [1,2,3,4,5,6].map(link=>(
     <Card key={link.id}>
 <CardHeader>
   <CardTitle >
 <div className="flex justify-between items-center gap-4">
 <Skeleton className="w-[20px] h-[20px] rounded-full" />
 <Skeleton className="w-[100%px] h-[30px] rounded-full" />
 </div>
   </CardTitle>
   <CardDescription>
   <Skeleton className="w-[100%] h-[20px] rounded-full" />
   </CardDescription>
 </CardHeader>
 <CardContent>
 <Skeleton className="w-[80%] h-[20px] rounded-full" />
 </CardContent>
 <CardFooter>
 <Skeleton className="w-[50%] h-[20px] rounded-full" />
 </CardFooter>
</Card>
    ))
    }

   </div>
  );
};

export default Loading;