/** @jsx jsx */
import { jsx, Grid, Styled } from 'theme-ui';

const Work = () => (
  <div>
    <Grid
      sx={{
        my: [4, 4, 5],
        mx: 1,
        textAlign: 'center',
      }}
      // columns={[3, '2fr 0.15fr 2fr']} // how to make center grid smaller?
      columns={[1, 1, 3]}
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
          justifySelf: 'center',
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
  </div>
);

export default Work;
