import React from "react";

function window() {
  return (
    <div>
      <div class="w-1/2 mx-auto">
        <div class="w-full shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto">
          <div
            class="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black"
            id="headerTerminal"
          >
            <div
              class="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"
              id="closebtn"
            ></div>
            <div
              class="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"
              id="minbtn"
            ></div>
            <div
              class="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"
              id="maxbtn"
            ></div>
            <div class="mx-auto pr-16" id="terminaltitle">
              <p class="text-center text-sm">katsuya.js</p>
            </div>
          </div>
          <div
            class="pl-1 pt-1 h-auto  text-green-200 font-mono text-xs bg-black"
            id="console"
          >
            <p class="pb-1">Last login: </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default window;
