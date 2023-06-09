import { PropTypes } from "prop-types";
import { Circle, Ring, Avatar } from "./avatar.styled";

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
