// /** @jsx jsx */
// import { jsx } from 'theme-ui';
// import { useStaticQuery, graphql } from 'gatsby';
// import PropTypes from 'prop-types';

// const Media = ({
//   thumbnail,
//   link,
//   icon,
//   description,
// }) => {
//   const data = useStaticQuery(
//     graphql`
//       query Media {
//         allMediaYaml {
//           nodes {
//             firstMedia {
//               thumbnail
//               link
//               icon
//               description
//             }
//           }
//         }
//       }`,
//   );

//   const thumbnailString = thumbnail || data.media.thumbnail;
//   const linkString = link || data.media.link;
//   const iconString = icon || data.media.icon;
//   const descriptionString = description || data.media.description;

//   return (
//     <div>
//       <div
//         sx={{
//           variant: 'text.softCaption',
//         }}
//       >
//         {thumbnailString}
//         {linkString}
//         {iconString}
//         {descriptionString}
//       </div>
//     </div>
//   );
// };

// Media.defaultProps = {
//   icon: 'fa-play',
//   description: 'Watch my TEDx talk.',
// };

// Media.propTypes = {
//   thumbnail: PropTypes.string.isRequired,
//   link: PropTypes.string.isRequired,
//   icon: PropTypes.string,
//   description: PropTypes.string,
// };

// export default Media;
