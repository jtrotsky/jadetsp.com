/** @jsx jsx */
import { jsx, Grid } from 'theme-ui';
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
        paddingTop: 6,
      }}
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
          quote="Some quote about me being really good at this and that. Will recommend for all
            eternity."
          attribution="-Said by a nice person I worked with"
        />
      </div>
    </Grid>

    <Grid
      sx={{
        paddingTop: 6,
      }}
      columns={[1, 1, 2]}
      gap={0}
    >
      <div>
        <img
          sx={{
            maxWidth: '100%',
            paddingLeft: 1,
          }}
          src={scale}
          alt="Scale"
        />
      </div>

      <div
        sx={{
          display: 'flex',
          justifyContent: ['center', 'center', 'left'],
          alignItems: 'center',
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
        paddingTop: 6,
      }}
      columns={[1, 1, 2]}
      gap={0}
    >

      <div
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
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
        paddingTop: 6,
        display: 'flex',
        textAlign: '-webkit-center',
      }}
      columns={[1]}
    >
      <Banner>
        <div>
          <h1
            sx={{
              variant: 'text.bigBoi',
              color: 'background',
              width: '686px',
            }}
          >
            Great work takes hard work, critical thinking &amp; passion.
          </h1>
          <p
            sx={{
              paddingTop: 1,
              variant: 'text.pugBoi',
              color: 'background',
              width: '686px',
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
        paddingTop: 6,
        justifyItems: 'center',
        textAlign: 'center',
      }}
      columns={[1, 1, 3]}
    >
      <span
        sx={{
          variant: 'text.chooChooBoi',
        }}
      >
        <a
          href="https://dribbble.com/JadeTSP"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            textDecoration: 'none',
            color: 'text',
          }}
        >
          See some of my projects
        </a>
      </span>

      <p
        sx={{
          variant: 'text.softCaption',
        }}
      >
        or
      </p>

      <span
        sx={{
          variant: 'text.chooChooBoi',
        }}
      >
        <a
          href="https://medium.com/@JadeTSP"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            textDecoration: 'none',
            color: 'text',
          }}
        >
          Read about my process
        </a>
      </span>
    </Grid>

    <Contact />
  </>
);

export default Landing;
