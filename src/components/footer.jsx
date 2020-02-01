import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDribbble } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => (
  <footer>
    <h4>What's next?</h4>
    <p>My partner and I are relocating to London, and I'll be looking for a new team to create magic with.</p>
    <p>
    If you want to chat: <a href="mailto:sweaphin@gmail.com" target="_blank" rel="noopener noreferrer">sweaphin@gmail.com</a> <FontAwesomeIcon icon={faEnvelope} /><br></br>
    If you want to check out more of my work: <a href="https://dribbble.com/JadeTSP" target="_blank" rel="noopener noreferrer">https://dribbble.com/JadeTSP</a> <FontAwesomeIcon icon={faDribbble} /><br></br>
    If you want to be influenced: <a href="https://twitter.com/jadetsssp" target="_blank" rel="noopener noreferrer">@jadetsssp</a> <FontAwesomeIcon icon={faTwitter} /><br></br>
    If you want to : <a href="https://twitter.com/jadetsssp" target="_blank" rel="noopener noreferrer">(link to hidden page with cat photo)</a>
    </p>
  </footer>
)

export default Footer
