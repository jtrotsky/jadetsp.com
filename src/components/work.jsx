/** @jsx jsx */
import { jsx, Grid, Styled } from 'theme-ui';

const Work = () => (
  <div
    id="my-work"
  >
    <Grid
      sx={{
        my: [4, 4, 5],
        mx: 1,
        textAlign: 'center',
      }}
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
            color: 'plum',
          }}
        >
          See snapshots of my work
        </Styled.a>
      </span>

      <p
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
            color: 'plum',
          }}
        >
          Read about my process
        </Styled.a>
      </span>
    </Grid>
  </div>
);

export default Work;
