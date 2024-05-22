import { useState } from "react";

const charAsciiArray = [
  { char: "a", ascii: 97 },
  { char: "b", ascii: 98 },
  { char: "c", ascii: 99 },
  { char: "d", ascii: 100 },
  { char: "e", ascii: 101 },
  { char: "f", ascii: 102 },
  { char: "g", ascii: 103 },
  { char: "h", ascii: 104 },
  { char: "i", ascii: 105 },
  { char: "j", ascii: 106 },
  { char: "k", ascii: 107 },
  { char: "l", ascii: 108 },
  { char: "m", ascii: 109 },
  { char: "n", ascii: 110 },
  { char: "o", ascii: 111 },
  { char: "p", ascii: 112 },
  { char: "q", ascii: 113 },
  { char: "r", ascii: 114 },
  { char: "s", ascii: 115 },
  { char: "t", ascii: 116 },
  { char: "u", ascii: 117 },
  { char: "v", ascii: 118 },
  { char: "w", ascii: 119 },
  { char: "x", ascii: 120 },
  { char: "y", ascii: 121 },
  { char: "z", ascii: 122 },
];

const App: React.FC = () => {
  const [input, s etInput] = useState<string>("");
  const [asciiCodes, setAsciiCodes] = useState<string>("");

  const findAsciiCode = (char: string): number | null => {
    const pair = charAsciiArray.find((item) => item.char === char);
    return pair ? pair.ascii : null;
  };

  const findCharFromAscii = (ascii: number): string | null => {
    const pair = charAsciiArray.find((item) => item.ascii === ascii);
    return pair ? pair.char : null;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInput = e.target.value;
    setInput(newInput);
    const asciiValues = newInput
      .split("")
      .map((char) => {
        const asciiValue = findAsciiCode(char);
        return asciiValue !== null ? asciiValue.toString() : "";
      })
      .filter((value) => value !== "")
      .join(", ");
    setAsciiCodes(asciiValues);
  };

  const handleAsciiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAsciiInput = e.target.value;
    setAsciiCodes(newAsciiInput);
    const chars = newAsciiInput
      .split(",")
      .map((asciiStr) => {
        const code = parseInt(asciiStr.trim(), 10);
        if (!isNaN(code)) {
          const char = findCharFromAscii(code);
          return char !== null ? char : "";
        } else {
          return "";
        }
      })
      .filter((char) => char !== "")
      .join("");
    setInput(chars);
  };

  const generateConversion = () => {
    const asciiValues = input
      .split("")
      .map((char) => {
        const asciiValue = findAsciiCode(char);
        return asciiValue !== null ? asciiValue.toString() : "";
      })
      .filter((value) => value !== "")
      .join(", ");
    setAsciiCodes(asciiValues);
  };

  return (
    <div className="App py-14 lg:py-12 px-4 lg:px-[26rem]">
      <header className="App-header">
        <h1 className="font-bold text-[#444444] text-lg lg:text-4xl">
          Convert Small Letter to ASCII Code
        </h1>
        <div className="py-5 lg:py-10 flex flex-col lg:flex-row">
          <div className="">
            <label className="">
              Word:
              <textarea 
                type="text" 
                value={input} 
                onChange={handleInputChange} 
                className="border border-slate-200 h-48 outline-slate-100 shadow-xl block rounded-sm p-0 w-72 w-80" 
                placeHolder="Small letter"

              />
            </label>
          </div>
          <div className="pt-9 lg:pt-0 lg:pl-9">
            <label>
              ASCII Codes (comma-separated):
              <textarea
                type="text"
                value={asciiCodes}
                onChange={handleAsciiChange}
                placeHolder="ASCII code"
                className="border border-slate-200 h-48 outline-slate-100 shadow-xl block rounded-sm p-0 w-72 w-80"
              />
            </label>
          </div>
          {/* <button onClick={generateConversion}>Generate</button> */}
        </div>
      </header>
    </div>
  );
};

export default App;
