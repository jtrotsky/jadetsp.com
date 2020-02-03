/** @jsx jsx */
import { jsx } from 'theme-ui';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Intro from './intro';
import Quote from './quote';
import Block from './block';
import Panel from './common/panel';
import Section from './common/section';
import Banner from './common/banner';
import scale from '../images/scale.svg';
import dots from '../images/dots.svg';

const Landing = () => (
  <>
    <Intro />
    <div>
      <Section>
        <Panel>
          <div>
            <Quote
              quote="Some quote about me being really good at this and that. Will recommend for all
                eternity."
              attribution="-Said by a nice person I worked with"
            />
          </div>
        </Panel>

        <Panel
          sx={{
            variant: 'text.quoteTwo',
          }}
        >
          <div
            sx={{
              paddingTop: '185px',
            }}
          >
            <Quote
              quote="Some quote about me being really good at this and that. Will recommend for all
                eternity."
              attribution="-Said by a nice person I worked with"
            />
          </div>
        </Panel>
      </Section>

      <Section>
        <div
          sx={{
            width: 668,
            height: 616,
          }}
        >
          <img src={scale} alt="Scale" />
        </div>

        <Panel
          sx={{
            paddingTop: '100px',
          }}
        >
          <Block
            paragraphOne="I bring a breadth of experience, from launching a startup to expanding a
              seasoned product."
            paragraphTwo="I move fast on user feedback, and focus on delivering real impact on
              people's lives."
          />
        </Panel>
      </Section>

      <Section>
        <Panel
          sx={{
            paddingTop: '200px',
          }}
        >
          <Block
            paragraphOne="With a decade of design experience, I've learned to recognise the unique
              creative process in each designer."
            paragraphTwo="I tune in for cues on when to push them to solve a problem for themselves,
              or when to collaborate closely to keep the process moving."
          />
        </Panel>

        <img src={dots} alt="Dots" />
      </Section>

      <Banner />
    </div>
  </>
);

export default Landing;
