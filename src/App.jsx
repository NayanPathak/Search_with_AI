import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid grid-cols-5 h-screen text-center">
        <div className="col-span-1 w-2/3 bg-gradient-to-b from-yellow-500 to-yellow-700 "></div>
        <div className="col-span-4">
          <h1 className="text-4xl font-bold text-white mt-20 mb-10">
            hello user
          </h1>
          <div className="container h-150"></div>

          <div
            className="border border-white w-1/2 rounded-4xl
             bg-zinc-800 m-auto flex h-12 p-1 pr-5 "
          >
            <input
              type="text"
              className=" p-3 outline-none  w-full h-full
                text-white placeholder:text-zinc-400"
              placeholder="Search anything...."
            />
            <button className="text-yellow-500 font-bold px-4 py-2">Ask</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
