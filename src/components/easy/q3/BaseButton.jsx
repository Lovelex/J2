import { ButtonBase } from "@mui/material";
import PropTypes from "prop-types";
import SubHeading3 from "@/components/easy/q3/SubHeading3";
import { HOME } from "@/routes";


const propTypes = {
  sx: PropTypes.object,
  children: PropTypes.node,
  color: PropTypes.string
}

function BaseButton({ sx, children, color }) {
  return (
    <ButtonBase href={HOME} sx={{ ...sx }}>
      <SubHeading3 color={color}>
        {children}
      </SubHeading3>
    </ButtonBase>
  )
}

BaseButton.propTypes = propTypes

export default BaseButton;
