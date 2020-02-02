/** @jsx jsx */
import { jsx } from "theme-ui"

import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          statusUpdate
        }
      }
    }
  `)

  return (
    <header>
      <div
        sx={{
          marginTop: '50px',
          display: 'flex',
          justifyContent: 'space-between',
          alignContent: 'center',
        }}>

        <span
          sx={{
            display: 'flex',
            justifyContent: 'center',
            variant: 'text.signPost',
            width: '32%',
          }}>
          {data.site.siteMetadata.author}
        </span>

        <div
          sx={{
            width: '320px',
            height: '105px',
            display: 'flex',
            justifyContent: 'center',
            variant: 'text.hardCaption',
          }}>
          <p
            sx={{
              margin: '0 0 0 0',
            }}>
          {data.site.siteMetadata.statusUpdate} <a style={{color:"#000"}} href="mailto:sweaphin@gmail.com">Get in touch!</a></p>
        </div>

        <span
          sx={{
            display: 'flex',
            justifyContent: 'center',
            variant: 'text.signPost',
            width: '32%',
          }}>
          About<br></br>
          Work<br></br>
          Contact<br></br>
        </span>
      </div>
    </header>
  )
}

export default Header