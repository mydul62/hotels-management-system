"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { icons } from "lucide-react";
import { Button } from "@/components/ui/button";
// import useSWR from "swr";

interface Course {
  title: string;
  description: string;
  categories: string[];
  available: boolean;
  id: number;
}

 async function getCourse(): Promise<Course[]>{
 const result = await fetch('http://localhost:4000/couse');
  await new Promise(resolve =>setTimeout(resolve,3000))
 return result.json();
 }
// const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Blog = async () => {
//   const {
//     data: Datas,
//     error,
//     isLoading,
//   } = useSWR("http://localhost:4000/couse", fetcher);
   const Datas =await getCourse()

  return (
    <div className=" max-w-7xl mx-auto w-[90%] grid md:grid-cols-3 grid-cols-1 gap-6 my-20">
      {Datas.map((link) => (
        <Card key={link.id}>
          <CardHeader>
            <CardTitle>{link.title}</CardTitle>
            <CardDescription>{link.description}</CardDescription>
          </CardHeader>
          <CardContent>
            {
              <div className=" flex flex-wrap gap-4">
                {link.categories.map((category, i) => (
                  <p key={i}>{category}</p>
                ))}
              </div>
            }
          </CardContent>
          <CardFooter>
            <div className=" flex flex-row items-center">
              <Button variant="secondary">View now</Button>
              <p>{link.available && <span>Available</span>}</p>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Blog;
