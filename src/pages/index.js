import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"

//export default () => <div>Привет семье</div>

const Indexpage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard
          date="March 22, 2020"
          title="Lorem ipsum dolor si amet"
          excerpt="Lorem ipsum bla bla bla.............."
          slug="/test"
        />
      </Content>
    </Container>
  )
}

export default Indexpage
