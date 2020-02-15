/** @jsx jsx */
import { jsx, Grid } from 'theme-ui';

const Banner = () => (
  <div
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    }}
  >
    <Grid
      sx={{
        display: 'flex',
        textAlign: '-webkit-center',
      }}
      columns={[1]}
    >
      <div
        sx={{
          my: [2, 2, 3],
          mx: 1,
        }}
      >
        <h1
          sx={{
            variant: ['text.smolBoi', 'text.smolBoi', 'text.chooChooBoi'],
            color: 'background',
            maxWidth: 600,
          }}
        >
          As a design leader, my goal is to create a space where people feel inspired, invested,
          and protected to do their best work.
        </h1>
      </div>
    </Grid>
  </div>
);

export default Banner;
