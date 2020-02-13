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
    </Grid>
  </div>
);

// Banner.defaultProps = {
//   color: 'clay',
// };

// Banner.propTypes = {
//   color: PropTypes.string,
// };

export default Banner;
