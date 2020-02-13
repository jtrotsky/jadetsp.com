/** @jsx jsx */
import { jsx, Grid, Styled } from 'theme-ui';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Intro from './intro';
import Quote from './quote';
import Block from './block';
import Contact from './contact';
import Banner from './common/banner';
import scale from '../images/scale.svg';
import dots from '../images/dots.svg';

const Landing = () => (
  <>
    <Intro />
    <Grid
      sx={{
        paddingTop: [3, 3, 6],
      }}
      columns={[1, 1, 2]}
    >
      <div
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mx: 1,
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
          paddingTop: [3, 0, 0],
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
      sx={{
        paddingTop: [3, 3, 6],
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
          sx={{
            maxWidth: '100%',
          }}
          src={scale}
          alt="Scale"
        />
      </div>

      <div
        id="about"
        sx={{
          display: 'flex',
          justifyContent: ['center', 'center', 'left'],
          alignItems: 'center',
          paddingTop: [3, 3, 0],
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
        paddingTop: [3, 3, 6],
      }}
      columns={[1, 1, 2]}
      gap={0}
    >

      <div
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
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
          py: [2, 2, 0],
          gridRow: [1, 1, null],
        }}
      >
        <img
          sx={{
            maxWidth: '100%',
          }}
          src={dots}
          alt="Dots"
        />
      </div>
    </Grid>

    <Grid
      sx={{
        paddingTop: [3, 3, 6],
        display: 'flex',
        textAlign: '-webkit-center',
      }}
      columns={[1]}
    >
      <Banner>
        <div
          sx={{
            mx: 1,
            my: 3,
          }}
        >
          <h1
            sx={{
              variant: ['text.pugBoi', 'text.pugBoi', 'text.chooChooBoi'],
              color: 'background',
              maxWidth: 600,
            }}
          >
            Great work takes hard work, critical thinking &amp; passion.
          </h1>
          <p
            sx={{
              variant: ['text.smolBoi', 'text.smolBoi', 'text.smolBoi'],
              color: 'background',
              maxWidth: 600,
            }}
          >
            As a design leader, my goal is to create a space where people feel inspired, invested,
            and protected to do their best work.
          </p>
        </div>
      </Banner>
    </Grid>

    <Grid
      sx={{
        paddingTop: [2, 2, 3],
        textAlign: 'center',
      }}
      columns={[3, '2fr 0.15fr 2fr']}
      gap={-1}
    >
      <span
        sx={{
          variant: 'text.pugBoi',
        }}
      >
        <Styled.a
          href="https://dribbble.com/JadeTSP"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: 'clay',
          }}
        >
          See some of my projects
        </Styled.a>
      </span>

      <p
        id="my-work"
        sx={{
          variant: 'text.softCaption',
          alignSelf: 'center',
        }}
      >
        or
      </p>

      <span
        sx={{
          variant: 'text.pugBoi',
        }}
      >
        <Styled.a
          href="https://medium.com/@JadeTSP"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: 'clay',
          }}
        >
          Read about my process
        </Styled.a>
      </span>
    </Grid>

    <Contact />
  </>
);

export default Landing;
