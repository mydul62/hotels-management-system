"use client"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "../ui/button";
const RoomFinder = () => {
  return (
    <div id="divFinder" className=" absolute  z-20  px-16 py-12 mx-auto bg-white mt-[-70px]">
       <div className=" flex justify-start gap-6 items-center">
       <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a location" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Dhaka</SelectItem>
    <SelectItem value="dark">Cox's bazar</SelectItem>
    <SelectItem value="system">Selet</SelectItem>
  </SelectContent>
</Select>
       <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
       <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
 <Button variant={'secondary'}>Find Your Room</Button>
       </div>
    </div>
  );
};

export default RoomFinder;