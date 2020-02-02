import React from "react"

import Intro from "./intro"
import Quote from "./quote"
import Image from "./image"

const Landing = () => (
  <>
    <Intro />
    <Quote />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </>
)

export default Landing
