import Image from "next/image";
import { IoBedOutline } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { FaChartArea } from "react-icons/fa6";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const page = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(https://i.ibb.co.com/kq7Sm18/mahim1-3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "darken",
        }}
        className=" min-h-[400px] bg-[#0000006f] "
      ></div>
      <div className=" my-24 max-w-7xl mx-auto ">
        <div className=" w-[75%]">
          <div className=" h-[100px] bg-slate-500"></div>
          <div className="grid grid-cols-2 gap-6 mt-12">
            <Card>
              <CardHeader>
                <div>
                <Image 
                  src="/public/Image/mahim06.jpg"
                  alt="Room Image"
                  width={150}
                  height={150}
                ></Image>
                </div>
                <CardTitle>
                <h3 className=" text-center">Deluxe Black Room</h3>
                </CardTitle>
                <CardDescription>
                <p className=" text-center">A spacious deluxe room which has a double bed and a single bed. Ideal for any...</p>
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="flex justify-between  items-center ">
                <div className=" flex justify-center items-center">
                <IoPeople />
                <span>2</span>
                </div>
                <div className=" flex justify-center items-center">
                <IoBedOutline />
                <span>3</span>
                </div>
                <div className=" flex justify-center items-center">
                <FaChartArea />
                <span>3</span>
                </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      <div className=" w-[25%]"></div>
      Rooms
    </div>
  );
};

export default page;
