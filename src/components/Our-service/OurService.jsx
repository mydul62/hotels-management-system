import Title from "@/components/Our-service/Title"
import Image from "next/image";
const OurService = () => {
  return (
    <div className="max-w-7xl mx-auto  py-[120px]">
     <Title></Title>
     
     
     <div>
     <div className=" flex flex-row">
     <div className="w-1/2 ">
     <img className=" w-full"
     src="https://i.ibb.co.com/G01RtG4/mahim06.jpg"
     width={500}
     height={500}
     alt="service image"
     />
     </div>
     <div className=" w-1/2 flex justify-center items-center bg-white px-20">
     <div className=" text-center space-y-6">
     <p className='flex justify-center'><img className=' w-44 -mb-8' src="https://i.ibb.co.com/17WdLBV/file-processed.png" alt="" /></p>
     <h2 className=" text-2xl font-medium">ROOMS & APARTMENTS</h2>
     <p className=" text-xl">Abundantly tree made. Days saw thing whales may, creeping after abundantly waters, fourth so were, gathered above cattle lights waters.</p>
     </div>
     </div>
     </div>
     <div className=" flex flex-row-reverse">
     <div className="w-1/2 ">
     <img className=" w-full"
     src="https://i.ibb.co.com/7nMw5TR/mahim22.jpg"
     width={500}
     height={500}
     alt="service image"
     />
     </div>
     <div className=" w-1/2 flex justify-center items-center bg-white px-20">
     <div className=" text-center space-y-6">
     <p className='flex justify-center'><img className=' w-44 -mb-8' src="https://i.ibb.co.com/17WdLBV/file-processed.png" alt="" /></p>
     <h2 className=" text-2xl font-medium">RESTAURANT</h2>
     <p className=" text-xl">Divide yielding. Lesser man said shall So. And. Void under lights rule evening were also replenish firmament fish. Night upon.</p>
     </div>
     </div>
     </div>
     <div className=" flex flex-row">
     <div className="w-1/2 ">
     <img className=" w-full"
     src="https://i.ibb.co.com/G01RtG4/mahim06.jpg"
     width={500}
     height={500}
     alt="service image"
     />
     </div>
     <div className=" w-1/2 flex justify-center items-center bg-white px-20">
     <div className=" text-center space-y-6">
     <p className='flex justify-center'><img className=' w-44 -mb-8' src="https://i.ibb.co.com/17WdLBV/file-processed.png" alt="" /></p>
     <h2 className=" text-2xl font-medium">
     SPA & FITNESS</h2>
     <p className=" text-xl">Fourth, give yielding. Signs, made. Herb. Behold make sixth two deep fly which without darkness beginning they’re winged days. Whose.</p>
     </div>
     </div>
     </div>
     </div>
    </div>
  );
};

export default OurService;