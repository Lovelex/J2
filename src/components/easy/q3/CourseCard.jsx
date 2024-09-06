import { Avatar } from "@mui/material";
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
    <>
      <Avatar src={icon}
        sx={{ position: 'absolute', top: '-20px', left: '0' }}
      />
      <SubHeading>{title}</SubHeading>
      <Paragraph>{paragraph}</Paragraph>
      <ButtonLink>
        Get Started
      </ButtonLink>
    </>
  )
}

Couses.propTypes = propTypes;

export default Couses;
