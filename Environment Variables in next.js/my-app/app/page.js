// "use client";
import Image from "next/image";

export default function Home() {
  console.log("The id is : ",process.env.NEXT_PUBLIC_ID)
  console.log("The secret is : ",process.env.SECRET)
  return (
    <div>
      Hey this is home page.... the id is : {process.env.NEXT_PUBLIC_ID} and the secret is {process.env.SECRET} 
      and the name is {process.env.NAME}
    </div>
  );
}
