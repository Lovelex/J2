import { Avatar, Grid2 } from "@mui/material";
import PropTypes from "prop-types";

import Paragraph from '@/components/easy/q3/Paragraph';
import SubHeading2 from '@/components/easy/q3/SubHeading2';
import ButtonLink from '@/components/easy/q3/ButtonLink';

const propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  paragraph: PropTypes.string,
  size: PropTypes.object
}

function CourseCard({ size, title, icon, paragraph }) {
  return (
    <Grid2
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        pt: 16,
        pb: 8,
        px: 8,
        overflow: 'visible',
        borderRadius: 4,
        boxShadow: '0px 25px 50px #06168D0B'
      }}
      key={title}
      size={size}
    >
      <Avatar src={icon}
        sx={{ position: 'absolute', top: '-20px', left: '32px' }}
      />
      <SubHeading2 sx={{ mb: 6 }}>{title}</SubHeading2>
      <Paragraph sx={{ mb: 6 }}>{paragraph}</Paragraph>
      <ButtonLink sx={{ mt: 'auto' }}>
        Get Started
      </ButtonLink>
    </Grid2>
  )
}

CourseCard.propTypes = propTypes;

export default CourseCard;
