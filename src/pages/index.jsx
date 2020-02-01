import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div`
  max-width: 900px;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12pt;
`

const IndexPage = () => (
  <Container>
    <Layout>
    <SEO title="Home" />
      <p>Together, designers can create beautiful experiences that win people's hearts. 
        But when siloed, companies often end up with disparate product experiences, 
        costly builds, and friction.</p>
      <p>I lead design teams to unite and thrive, by helping designers grow into 
        empathetic leaders and allies, through the colourful prism of diversity.</p>
    </Layout> 
  </Container>
)

export default IndexPage
