/** @jsx jsx */
import { jsx, Grid, Container } from 'theme-ui';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Intro from './intro';
import Quote from './common/quote';
import Block from './common/block';
import Background from './common/background';
import BackgroundImg from './common/background-img';
import Banner from './common/banner';
import Media from './common/media';
import Work from './work';
import Contact from './contact';
import Footer from './footer';
import Header from './header';

const Landing = () => {
  const data = useStaticQuery(
    graphql`
    query {
      ludwigQuote: quotesYaml(name: {eq: "Ludwig Wendzich"}) {
        name
        quote
        role
        formerly
      }
      nicolaQuote: quotesYaml(name: {eq: "Nicola Horlor"}) {
        name
        quote
        role
        formerly
      }
      firstMedia: mediaYaml(name: {eq: "Video"}) {
        name
        thumbnail
        link
        icon
        description
      }
      secondMedia: mediaYaml(name: {eq: "Article"}) {
        name
        thumbnail
        link
        icon
        description
      }
      thirdMedia: mediaYaml(name: {eq: "Interview"}) {
        name
        thumbnail
        link
        icon
        description
      }
      scaleImage: file(relativePath: {eq:"scale.svg"}) {
        publicURL
      }
      dotsImage: file(relativePath: {eq:"dots.svg"}) {
        publicURL
      }
      vendTeamImage: imageSharp(fluid: {originalName: {eq:"img-vend-team.png"}}) {
        fluid(
          maxWidth: 445,
          maxHeight: 653,
          quality: 100,
          duotone: {
            highlight: "#956850",
            shadow: "#192550",
            opacity: 90
            }
        ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
      bigSplatImage: file(relativePath: {eq:"splat-big.svg"}) {
        publicURL
      }
    }`,
  );

  return (
    <div
      sx={{
        overflow: 'hidden',
      }}
    >
      <Container>
        <Header />

        <Intro />

        <div
          sx={{
            position: 'relative',
            top: '160px',
          }}
        >
          <img
            src={data.scaleImage.publicURL}
            title="Inverted Scale Illustration"
            alt="Colourful ripples projecting outward with bigger and bigger impact"
            css="transform: rotate(180deg);"
            sx={{
              display: ['none', 'none', 'inline-block'],
              maxWidth: '100%',
              position: 'absolute',
              left: '-430px',
            }}
          />
        </div>

        <Grid
          sx={{
            paddingTop: [null, null, 4],
            alignSelf: 'center',
            justifyItems: 'center',
          }}
          columns={[1, 1, 2]}
          gap={1}
        >
          <div
            sx={{
              mx: [0, 0, null],
            }}
          >
            <img
              src={data.scaleImage.publicURL}
              title="Scale Illustration"
              alt="Colourful ripples projecting outward with bigger and bigger impact"
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
              paddingTop: 0,
            }}
          >
            <Block
              paragraphOne="I bring a breadth of experience, from helping to launch a startup to
                expanding a seasoned product."
              paragraphTwo="I develop scalable design systems, move fast on user feedback, and
                focus on delivering real impact on people's lives."
            >
              <Media
                name={data.firstMedia.name}
                link={data.firstMedia.link}
                icon={data.firstMedia.icon}
                description={data.firstMedia.description}
              />
            </Block>
          </div>
        </Grid>

        <Grid
          columns={[1, 1, 2]}
          gap={1}
          sx={{
            paddingTop: 2,
            paddingBottom: 2,
          }}
        >
          <div
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: [1, 1, null],
              gridRow: [0, 0, 1],
            }}
          >
            <Block
              paragraphOne="With a decade of design experience, I've learned to recognise the
                unique creative process in each designer."
              paragraphTwo="I tune in for cues on when to push them to solve a problem for
                themselves, or when to collaborate closely to keep the process moving."
            >
              <Media
                name={data.secondMedia.name}
                link={data.secondMedia.link}
                icon={data.secondMedia.icon}
                description={data.secondMedia.description}
              />
            </Block>
          </div>

          <div
            sx={{
              display: 'flex',
              justifyContent: ['center', 'center', 'left'],
              alignItems: 'center',
              gridRow: [1, 1, null],
              mx: 0,
            }}
          >
            <img
              src={data.dotsImage.publicURL}
              title="Dots Illustration"
              alt="Dots in different colours and shapes like individuals in a team"
              sx={{
                maxWidth: '100%',
              }}
            />
          </div>
        </Grid>

        <div
          sx={{
            position: 'relative',
            bottom: '520px',
          }}
        >
          <img
            src={data.dotsImage.publicURL}
            title="Inverted Dots Illustration"
            alt="Dots in different colours and shapes like individuals in a team"
            sx={{
              display: ['none', 'none', 'inline-block'],
              maxWidth: '100%',
              position: 'absolute',
              right: '-270px',
            }}
          />
        </div>
      </Container>

      <BackgroundImg image={data.vendTeamImage.fluid}>
        <Container>
          <Banner
            quote="As a design leader, my goal is to create a space where people feel inspired, invested,
          and protected to do their best work."
          >
            <Media
              name={data.thirdMedia.name}
              link={data.thirdMedia.link}
              icon={data.thirdMedia.icon}
              description={data.thirdMedia.description}
              textColor="background"
            />
          </Banner>
        </Container>
      </BackgroundImg>

      <Background color="plum">
        <Container>
          <Grid
            columns={[1, 1, 2]}
            gap={-1}
          >
            <div
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: [2, 2, 3],
              }}
            >
              <Quote
                quote={data.ludwigQuote.quote}
                name={data.ludwigQuote.name}
                role={data.ludwigQuote.role}
                formerly={data.ludwigQuote.formerly}
              />
            </div>

            <div
              sx={{
                display: 'flex',
                justifyContent: ['center', 'center', 'left'],
                paddingTop: [0, 0, 7],
                marginBottom: 2,
              }}
            >
              <Quote
                quote={data.nicolaQuote.quote}
                name={data.nicolaQuote.name}
                role={data.nicolaQuote.role}
                formerly={data.nicolaQuote.formerly}
              />
            </div>
          </Grid>
        </Container>
      </Background>

      <Container>
        <Work />
      </Container>

      <Background color="night">
        <Container>
          <Contact />
          <Footer />
        </Container>
      </Background>
    </div>
  );
};

export default Landing;
