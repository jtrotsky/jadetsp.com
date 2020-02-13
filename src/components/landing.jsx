/** @jsx jsx */
import { jsx, Grid, Container } from 'theme-ui';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './header';
import Intro from './intro';
import Quote from './quote';
import Block from './block';
import Background from './common/background';
import Banner from './banner';
import Work from './work';
import Contact from './contact';
import Footer from './footer';
import Scale from '../images/scale.svg';
import Dots from '../images/dots.svg';


const Landing = () => (
  <>
    <Container>
      <Header />

      <Intro />

      <Grid
        columns={[1, 1, 2]}
      >
        <div
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Quote
            quote="Some quote about me being really good at this and that. Will recommend for all
              eternity."
            attribution="-Said by a nice person I worked with"
          />
        </div>
      </Grid>

      <Grid
        columns={[1, 1, 2]}
        gap={0}
      >

        <div />

        <div
          sx={{
            display: 'flex',
            justifyContent: ['center', 'center', 'left'],
          }}
        >
          <Quote
            quote="In her time at Vend, Jade personally mentored me and developed a design
            practice that changed the way I have pursued product design as a career."
            attribution="-Nicola Horlor, Product Designer at Vend. Previously design graduate
            from AUT."
          />
        </div>
      </Grid>

      <Grid
        sx={{
          paddingTop: [2, 2, 4],
        }}
        columns={[1, 1, 2]}
        gap={0}
      >
        <div
          sx={{
            mx: 1,
          }}
        >
          <img
            src={Scale}
            title="Scale Illustration"
            alt="Colourful half-circles projecting outward from the left of the screen"
            sx={{
              maxWidth: '100%',
            }}
          />
        </div>

        <div
          id="about"
          sx={{
            display: 'flex',
            justifyContent: ['center', 'center', 'left'],
            alignItems: 'center',
            my: [2, 2, 3],
            mx: 1,
          }}
        >
          <Block
            paragraphOne="I bring a breadth of experience, from launching a startup to expanding a
              seasoned product."
            paragraphTwo="I move fast on user feedback, and focus on delivering real impact on
              people's lives."
          />
        </div>
      </Grid>

      <Grid
        sx={{
          my: [0, 0, 3],
        }}
        columns={[1, 1, 2]}
        gap={0}
      >

        <div
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            my: [2, 2, 3],
            mx: 1,
            gridRow: [0, 0, 1],
          }}
        >
          <Block
            paragraphOne="With a decade of design experience, I've learned to recognise the unique
              creative process in each designer."
            paragraphTwo="I tune in for cues on when to push them to solve a problem for themselves,
              or when to collaborate closely to keep the process moving."
          />
        </div>

        <div
          sx={{
            display: 'flex',
            justifyContent: ['center', 'center', 'left'],
            alignItems: 'center',
            gridRow: [1, 1, null],
          }}
        >
          <img
            src={Dots}
            title="Dots Illustration"
            alt="A grid of colourful dots filling the right-hand side of the screen"
            sx={{
              maxWidth: '100%',
            }}
          />
        </div>
      </Grid>
    </Container>

    <Background color="clay">
      <Container>
        <Banner />
      </Container>
    </Background>

    <Container>
      <Work />
    </Container>

    <Background color="green">
      <Container>
        <Contact />
        <Footer />
      </Container>
    </Background>
  </>
);

export default Landing;
