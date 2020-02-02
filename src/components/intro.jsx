/** @jsx jsx */
import { jsx } from "theme-ui"

import { useStaticQuery, graphql } from "gatsby"

import circle from "../images/circle.svg"

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
  `)
    
  return (
    <intro>
      <container          
        sx={{
          marginTop: '150px',
          marginBottom: '400px',
          display: 'flex',
          justifyContent: 'center',
        }}>

        <div
          sx={{
            width: 668,
            height: 616,
          }}>
          <img src={circle} alt="Circle" />
        </div>

        <div
          sx={{
            width: 840,
            height: 246,
            variant: 'text.chooChooBoi', 
            alignSelf: 'center',
            position: 'absolute',
          }}>
          {data.site.siteMetadata.title}
        </div>
      </container>
    </intro>
  )
}

export default Intro
