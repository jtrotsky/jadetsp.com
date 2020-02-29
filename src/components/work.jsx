/** @jsx jsx */
import { jsx, Grid, Styled } from 'theme-ui';

const Work = () => (
  <div
    id="my-work"
  >
    <Grid
      sx={{
        my: 2,
        mx: 1,
        textAlign: 'center',
        alignItems: 'center',
      }}
      columns={[1, 1, '1fr 0.2fr 1fr']}
      gap={-1}
    >
      <Styled.h3>
        <Styled.a
          href="https://dribbble.com/JadeTSP"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: 'plum',
          }}
        >
          See some of my work
        </Styled.a>
      </Styled.h3>

      <p
        sx={{
          variant: 'text.softCaption',
          justifySelf: 'center',
        }}
      >
        or
      </p>

      <Styled.h3>
        <Styled.a
          href="https://medium.com/@JadeTSP"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: 'plum',
          }}
        >
          Read about my process
        </Styled.a>
      </Styled.h3>
    </Grid>
  </div>
);

export default Work;
