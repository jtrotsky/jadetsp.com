/** @jsx jsx */
import { jsx } from 'theme-ui';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Intro from './intro';
import Quote from './quote';
import Block from './block';
import Panel from './common/panel';
import Section from './common/section';
// import Banner from './common/banner';
import scale from '../images/scale.svg';
import dots from '../images/dots.svg';

const Landing = () => (
  <>
    <Intro />
    <Section>
      <div
        sx={{
          paddingTop: 6,
          paddingLeft: 3,
        }}
      >
        <Panel>
          <Quote
            quote="Some quote about me being really good at this and that. Will recommend for all
              eternity."
            attribution="-Said by a nice person I worked with"
          />
        </Panel>
      </div>
    </Section>

    <Section>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginInlineStart: 'auto',
          paddingRight: 6,
        }}
      >
        <Panel>
          <Quote
            quote="Some quote about me being really good at this and that. Will recommend for all
              eternity."
            attribution="-Said by a nice person I worked with"
          />
        </Panel>
      </div>
    </Section>

    <Section>
      <div
        sx={{
          paddingTop: 7,
          display: 'flex',
        }}
      >
        <div
          sx={{
            display: 'flex',
          }}
        >
          <Panel>
            <img
              sx={{
                width: '600px',
              }}
              src={scale}
              alt="Scale"
            />
          </Panel>
        </div>

        <div
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginLeft: 5,
          }}
        >
          <Panel>
            <Block
              paragraphOne="I bring a breadth of experience, from launching a startup to expanding a
                seasoned product."
              paragraphTwo="I move fast on user feedback, and focus on delivering real impact on
                people's lives."
            />
          </Panel>
        </div>
      </div>
    </Section>

    <Section>
      <div
        sx={{
          display: 'flex',
          paddingTop: 3,
        }}
      >
        <Block
          paragraphOne="With a decade of design experience, I've learned to recognise the unique
            creative process in each designer."
          paragraphTwo="I tune in for cues on when to push them to solve a problem for themselves,
            or when to collaborate closely to keep the process moving."
        />

        <img
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
          src={dots}
          alt="Dots"
        />
      </div>
    </Section>

    {/* <Banner /> */}

    <Section>
      <div
        sx={{
          paddingTop: 5,
          display: 'block',
        }}
      >
        <span
          sx={{
            variant: 'text.chooChooBoi',
            width: '50%',
            justifyContent: 'center',
            textAlign: 'center',
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
            alignSelf: 'center',
          }}
        >
          or
        </p>
        <span
          sx={{
            variant: 'text.chooChooBoi',
            width: '50%',
            justifyContent: 'center',
            textAlign: 'center',
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
      </div>
    </Section>
  </>
);

export default Landing;
