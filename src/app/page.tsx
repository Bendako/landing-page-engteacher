// import ClassesDetails from "@/components/ClassesDetails";
// import Hero from "@/components/Hero";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col justify-center">
//         <Hero/>
//         <ClassesDetails />
//         <div className="flex flex-col justify-center items-center w-max">
//           <Button variant="default" className="font-black">לחץ</Button>
//         </div>
//       <div>
//       </div>
//     </div>
//   );
// }


import ClassesDetails from "@/components/ClassesDetails";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
        <Hero/>
        <ClassesDetails />
        <div className="flex justify-center w-full">
        </div>
      <div>
      </div>
    </div>
  );
}