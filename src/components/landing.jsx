/** @jsx jsx */
import { jsx, Grid, Container } from 'theme-ui';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import Intro from './intro';
import Quote from './common/quote';
import Block from './common/block';
import Background from './common/background';
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
      aaronQuote: quotesYaml(name: {eq: "Aaron Patzer"}) {
        name
        quote
        role
        formerly
      }
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
      videoMedia: mediaYaml(name: {eq: "Video"}) {
        name
        thumbnail
        link
        icon
        description
      }
      articleMedia: mediaYaml(name: {eq: "Article"}) {
        name
        thumbnail
        link
        icon
        description
      }
      interviewMedia: mediaYaml(name: {eq: "Interview"}) {
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
      vendTeamImage: file(relativePath: {eq:"img-vend-team.png"}) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 500
            height: 350
            quality: 100
            transformOptions: {
                cropFocus: ATTENTION
                duotone: { 
                  shadow: "#3c2920"
                  highlight: "#5e4132"
                  opacity: 70 
                }
              }
          )
        }
      }
      bigSplatImage: file(relativePath: {eq:"splat-big.svg"}) {
        publicURL
      }
    }`,
  );

  // gatsbyImageData(
  //   layout: CONSTRAINED
  //   placeholder: BLURRED
  //   width: 500
  //   height: 350
  //   transformOptions: {
  //     cropFocus: ATTENTION
  //     duotone: { 
  //       shadow: "#3c2920"
  //       highlight: "#5e4132"
  //       opacity: 70 
  //     }
  //   }
  // )

  // const pluginImage = getImage(image);
  const pluginImage = getImage(data.vendTeamImage.childImageSharp.gatsbyImageData);

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
            top: '80px',
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
                name={data.videoMedia.name}
                link={data.videoMedia.link}
                icon={data.videoMedia.icon}
                description={data.videoMedia.description}
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
                name={data.articleMedia.name}
                link={data.articleMedia.link}
                icon={data.articleMedia.icon}
                description={data.articleMedia.description}
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
            bottom: '460px',
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

      <BgImage image={pluginImage}>
        <Container>
          <Banner
            quote="As a design leader, my goal is to create a space where people feel inspired, invested,
          and protected to do their best work."
          >
            <Media
              name={data.interviewMedia.name}
              link={data.interviewMedia.link}
              icon={data.interviewMedia.icon}
              description={data.interviewMedia.description}
              textColor="background"
            />
          </Banner>
        </Container>
      </BgImage>

      <Background color="plum">
        <Container>
          <Grid
            columns={[1, 1, 2]}
            gap={-1}
          >
            <div
              sx={{
                display: 'flex',
                justifyContent: ['center', 'center', 'left'],
                marginTop: [2, 2, 2],
              }}
            >
              <Quote
                quote={data.aaronQuote.quote}
                name={data.aaronQuote.name}
                role={data.aaronQuote.role}
                formerly={data.aaronQuote.formerly}
              />
            </div>

            <div
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: [32, 32, '450px'],
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
                paddingTop: 0,
                marginBottom: 3,
                marginTop: 32,
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
