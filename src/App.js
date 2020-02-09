import React from "react"
import { Frame, useCycle } from "framer"
import "./styles.css"

//const = value is a constant and cannot be changes
//let = value can be changed let should be used instead of var in javascript
//var = defines value that can be changed
//parameter
function microwave(food) {
  //function body
  //return value
  return "heated" + food
}

//defining a function
function sandwichMaker(meat) {
  let sandwich = "bread"
  sandwich = sandwich + meat
  sandwich = sandwich + "leaf"
  sandwich = sandwich + "bread"
  return sandwich
}

//call the function
//variable
console.log(microwave(sandwichMaker("bacon")))

export default function App() {
  //use useCycle is a function that accepts two variables
  //array destructuring or cherry picking
  let [mode, cycleMode] = useCycle("off", "on")
  //let result = useCycle(0, 60)
  //let [trackBg, cycleTrackBg] = useCycle("#999", "orange")
  //array
  //can be done with other way
  // let knobX = result[0]
  //let cycleKnobX = result[1]
  console.log(mode)
  return (
    <div className="App">
      {/* call function in the ui */}
      <div>{sandwichMaker("bacon")}</div>
      <Frame
        width={120}
        height={60}
        borderRadius={30}
        center
        onTap={function handleTap() {
          //change the vale in knobX
          cycleMode()
          console.log("tapped!")
        }}
        background="#999"
        animate={mode}
        variants={{
          off: { background: "#999" },
          on: { background: "orange" }
        }}
      >
        <Frame
          size={60}
          borderRadius={30}
          animate={mode}
          variants={{
            off: { x: 0 },
            on: { x: 60 }
          }}
          transition={{ duration: 0.2 }}
          background="white"
          shadow="0 1px 5px rgba(0,0,0,0.5)"
        />
      </Frame>
    </div>
  )
}
