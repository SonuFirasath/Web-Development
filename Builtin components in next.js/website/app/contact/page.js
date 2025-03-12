import React from "react";
import Script from "next/script";
const page = () => {
  return (
    <div>
      <Script>
        {`alert("Welcome to contact page bro ");`}
      </Script>
      Hey Guys contact me now i will answer the call if i am available...
    </div>
  );
};

export default page;
