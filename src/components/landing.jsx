/** @jsx jsx */
import { jsx, Grid, Container } from 'theme-ui';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import Header from './header';
import Intro from './intro';
import Quote from './quote';
import Block from './block';
import Background from './common/background';
import Banner from './banner';
import Media from './media';
import Work from './work';
import Contact from './contact';
// import Footer from './footer';
import Scale from '../images/scale.svg';
import Dots from '../images/dots.svg';


const Landing = () => {
  const data = useStaticQuery(
    graphql`
    query {
      ludwigQuote: allQuotesYaml(filter: {name: {eq: "Ludwig Wendzich"}}) {
        edges {
          node {
            name
            quote
            role
            formerly
          }
        }
      }
      nicolaQuote: allQuotesYaml(filter: {name: {eq: "Nicola Horlor"}}) {
        edges {
          node {
            name
            quote
            role
            formerly
          }
        }
      }
      firstMedia: allMediaYaml(filter: {name: {eq: "TEDx"}}) {
        edges {
          node {
            thumbnail
            link
            icon
            description
          }
        }
      }
      secondMedia: allMediaYaml(filter: {name: {eq: "Article"}}) {
        edges {
          node {
            thumbnail
            link
            icon
            description
          }
        }
      }
      thirdMedia: allMediaYaml(filter: {name: {eq: "Interview"}}) {
        edges {
          node {
            thumbnail
            link
            icon
            description
          }
        }
      }
    }`,
  );

  return (
    <>
      <Container>
        <Intro />

        <Grid
          sx={{
            paddingTop: [null, null, 4],
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
              paddingTop: 0,
            }}
          >
            <Block
              paragraphOne="I bring a breadth of experience, from helping to launch a startup to
                expanding a seasoned product."
              paragraphTwo="I develop scalable design systems, move fast on user feedback, and
                focus on delivering real impact on people's lives."
            >
              <div
                sx={{
                  my: 1,
                }}
              >
                {
                  data.firstMedia.edges.map((post) => {
                    const {
                      link,
                      icon,
                      description,
                    } = post.node;

                    return (
                      <Media
                        link={link}
                        icon={icon}
                        description={description}
                      />
                    );
                  })
                }
              </div>
            </Block>
          </div>
        </Grid>

        <Grid
          columns={[1, 1, 2]}
          gap={0}
          sx={{
            paddingTop: [2, 2, null],
          }}
        >

          <div
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              my: [1, 1, null],
              gridRow: [0, 0, 1],
            }}
          >
            <Block
              paragraphOne="With a decade of design experience, I've learned to recognise the
                unique creative process in each designer."
              paragraphTwo="I tune in for cues on when to push them to solve a problem for
                themselves, or when to collaborate closely to keep the process moving."
            >
              <div
                sx={{
                  my: 1,
                }}
              >
                {
                  data.secondMedia.edges.map((post) => {
                    const {
                      link,
                      icon,
                      description,
                    } = post.node;

                    return (
                      <Media
                        link={link}
                        icon={icon}
                        description={description}
                      />
                    );
                  })
                }
              </div>
            </Block>
          </div>

          <div
            sx={{
              display: 'flex',
              justifyContent: ['center', 'center', 'left'],
              alignItems: 'center',
              gridRow: [1, 1, null],
              mx: 1,
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

      <Background color="tan" overlay="img-vend-team">
        <Container>
          <Banner
            quote="As a design leader, my goal is to create a space where people feel inspired, invested,
          and protected to do their best work."
          >
            {
              data.thirdMedia.edges.map((post) => {
                const {
                  link,
                  icon,
                  description,
                } = post.node;

                return (
                  <Media
                    link={link}
                    icon={icon}
                    description={description}
                    textColor="white"
                  />
                );
              })
            }
          </Banner>
        </Container>
      </Background>

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
                marginTop: [5, 5, 4],
              }}
            >
              {
                data.ludwigQuote.edges.map((post) => {
                  const {
                    name,
                    quote,
                    role,
                    formerly,
                  } = post.node;

                  return (
                    <Quote
                      quote={quote}
                      name={name}
                      role={role}
                      formerly={formerly}
                    />
                  );
                })
              }
            </div>

            <div
              sx={{
                display: 'flex',
                justifyContent: ['center', 'center', 'left'],
                paddingTop: [3, 3, 7],
                marginBottom: [3, 3, 2],
              }}
            >
              {
                data.nicolaQuote.edges.map((post) => {
                  const {
                    name,
                    quote,
                    role,
                    formerly,
                  } = post.node;

                  return (
                    <Quote
                      quote={quote}
                      name={name}
                      role={role}
                      formerly={formerly}
                    />
                  );
                })
              }
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
        </Container>
      </Background>

      {/* <Background color="night">
        <Container>
          <Footer />
        </Container>
      </Background> */}
    </>
  );
};

export default Landing;
