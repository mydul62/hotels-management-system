import Image from "next/image";
import Banner from "@/components/banner/Banner"
import RoomFinder from "@/components/RoonFinder/RoomFinder"
import OurService from "@/components/Our-service/OurService"

export default function Home() {
  return (
      <main>
        <section className="">
      <div className="">
      <Banner></Banner>
      </div>
      <div>
      <RoomFinder></RoomFinder>
      </div>
     <div 
     style={{
       backgroundImage: `url('https://hotello.stylemixthemes.com/esperanza/wp-content/uploads/sites/6/2018/10/pat2.png?id=1308')`,
       backgroundPosition:'center',
       backgroundRepeat:'repeat'
     }}
     className=" z-10">
     <div>
     <OurService></OurService>
     </div>
     </div>
        </section>
      </main>
  );
}
