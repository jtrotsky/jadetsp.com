/** @jsx jsx */
import { jsx, Grid } from 'theme-ui';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Intro from './intro';
import Quote from './quote';
import Block from './block';
import Panel from './common/panel';
// import Banner from './common/banner';
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
      <Panel>
        <Quote
          quote="Some quote about me being really good at this and that. Will recommend for all
            eternity."
          attribution="-Said by a nice person I worked with"
        />
      </Panel>
    </Grid>

    <Grid
      columns={[1, 1, 2]}
    >
      <div />
      <Panel>
        <Quote
          quote="Some quote about me being really good at this and that. Will recommend for all
            eternity."
          attribution="-Said by a nice person I worked with"
        />
      </Panel>
    </Grid>

    <Grid
      sx={{
        paddingTop: 6,
      }}
      columns={[1, 1, 2]}
    >
      <Panel>
        <img
          sx={{
            // width: '600px',
          }}
          src={scale}
          alt="Scale"
        />
      </Panel>

      <Panel>
        <Block
          paragraphOne="I bring a breadth of experience, from launching a startup to expanding a
            seasoned product."
          paragraphTwo="I move fast on user feedback, and focus on delivering real impact on
            people's lives."
        />
      </Panel>
    </Grid>

    <Grid
      sx={{
        paddingTop: 6,
      }}
      columns={[1, 1, 2]}
    >

      <Panel>
        <Block
          paragraphOne="With a decade of design experience, I've learned to recognise the unique
            creative process in each designer."
          paragraphTwo="I tune in for cues on when to push them to solve a problem for themselves,
            or when to collaborate closely to keep the process moving."
        />
      </Panel>

      <img
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
        src={dots}
        alt="Dots"
      />
    </Grid>

    {/* <Banner /> */}

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
  </>
);

export default Landing;
