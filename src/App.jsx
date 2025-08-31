import { useState } from "react";
import { URL } from "./constant";

import "./App.css";

function App() {
  const [question, setQuestion] = useState("");

  const [Answer, setAnswer] = useState(undefined);
  const payload = {
    contents: [
      {
        parts: [
          {
            text: question,
          },
        ],
      },
    ],
  };

  const askquestion = async () => {
    let response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    response = await response.json();
    //  console.log(response.candidates[0].content.parts[0].text);
    setAnswer(response.candidates[0].content.parts[0].text);
  };

  return (
    <>
      <div className="grid grid-cols-5 h-screen text-center">
        <div className="col-span-1 w-2/3 bg-gradient-to-b from-yellow-500 to-yellow-700 "></div>
        <div className="col-span-4">
          <h1 className="text-4xl font-bold text-white mt-20 mb-10">
            <span class="bg-gradient-to-r from-blue-500 to-yellow-700 text-transparent bg-clip-text">
              hello user !!!
            </span>
          </h1>
          <div className="container h-140 overflow-auto mb-10 p-5">
            <div className="text-white">{Answer}</div>
          </div>

          <div
            className="border border-white w-1/2 rounded-4xl
             bg-zinc-800 m-auto flex h-12 p-1 pr-5 "
          >
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className=" p-3 outline-none  w-full h-full
                text-white placeholder:text-zinc-400"
              placeholder="Search anything...."
            />
            <button
              onClick={askquestion}
              className="text-yellow-500 font-bold px-4 py-2"
            >
              Ask
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
