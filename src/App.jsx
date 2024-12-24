import React from "react";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import './index.css'


function App() {
  const firstName = "Mohamed";

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-10">
       <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden">
        <Image />
        <div className="p-4">
          <Name />
          <Price />
          <Description />
        </div>
      </div>

      <div className="text-center mt-6">
        <h4 className="text-lg font-medium text-gray-800">
          {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
        </h4>
        {firstName && (
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Greeting"
            className="mt-4 w-24 h-24 rounded-full shadow-md"
          />
        )}
      </div>
    </div>
  )
}

export default App
