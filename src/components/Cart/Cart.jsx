import { useState } from "react";
import PropTypes from "prop-types";
import { getFollow } from "../../service/api";
import { useFollow } from "../../service/context";
import AvatarRing from "./Avatar";
import {
  CartContainer,
  LogoImage,
  Info,
  Button,
  InfoWrap,
} from "./cart.styled";

const Cart = ({ user }) => {
  const { follow, addFollow, removeFollow } = useFollow();
  const isFollowCart = follow
    ? follow.some((item) => item.id === user.id)
    : false;
  const [isFollow, setIsFollow] = useState(isFollowCart);
  const [followers, setFollowers] = useState(user.followers);

  const toggleFollow = async () => {
    let data;
    if (isFollow) {
      setIsFollow(false);
      removeFollow({ id: user.id, followers: user.followers });
      data = followers - 1;
      setFollowers(data);
      getFollow(user.id, data);
      return;
    } else {
      setIsFollow(true);
      addFollow({ id: user.id, followers: user.followers });
      data = followers + 1;
      setFollowers(data);
      getFollow(user.id, data);
    }
  };

  const numberPrettier = (num) => {
    let result;
    if (num < 1000) {
      result = num;
    } else {
      result = num.toString().split("");
      result.splice(-3, 0, ",");
    }
    return result;
  };

  return (
    <CartContainer>
      <LogoImage />
      <AvatarRing src={user.avatar} />
      <InfoWrap>
        <Info>{numberPrettier(user.tweets)} tweets</Info>
        <Info>{numberPrettier(followers)} followers</Info>
        <Button
          style={{ backgroundColor: isFollow ? "#5CD3A8" : "#EBD8FF" }}
          onClick={toggleFollow}
        >
          {isFollow ? "following" : "follow"}
        </Button>
      </InfoWrap>
    </CartContainer>
  );
};

export default Cart;

Cart.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }),
};
