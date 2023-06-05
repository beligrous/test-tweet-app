import { PropTypes } from "prop-types";
import { Circle, Ring, Avatar } from "./cart.styled";

const AvatarRing = ({ src }) => {
  return (
    <Circle>
      <Ring>
        <Avatar src={src} alt="avatar" />
      </Ring>
    </Circle>
  );
};

export default AvatarRing;

AvatarRing.propTypes = {
  src: PropTypes.string.isRequired,
};
