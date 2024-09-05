import { Avatar, Box, Card } from "@mui/material";
import PropTypes from "prop-types";

import Paragraph from '@/components/easy/q3/Paragraph';
import SubHeading from '@/components/easy/q3/SubHeading';
import ButtonLink from '@/components/easy/q3/ButtonLink';


const propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  paragraph: PropTypes.string
}

function Couses({ title, icon, paragraph }) {
  return (
    <Box sx={{ position: 'relative',height: '100%', p: 4, my: 2, border: '1px solid #E2E8F0' }}>
      <Avatar src={icon}
        sx={{ position: 'absolute', top: '-20px', left: '0' }}
      />
      <SubHeading>{title}</SubHeading>
      <Paragraph>{paragraph}</Paragraph>
      <ButtonLink>
        Get Started
      </ButtonLink>
    </Box>

  )
}

Couses.propTypes = propTypes;

export default Couses;
