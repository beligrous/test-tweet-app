import styled from "styled-components";
import img from "../../images/pictureLogo.png";
import logoImg from "../../images/Logo.png";

export const CartContainer = styled.li`
  margin: 0 auto;
  position: relative;
  display: flex;
  box-sizing: border-box;
  padding-top: 28px;
  width: 380px;
  height: 460px;
  background-image: url(${img}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-repeat: no-repeat;
  background-position: top;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const LogoImage = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  object-fit: cover;
  object-position: center top;
  content: url(${logoImg});
`;

export const Info = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  margin-bottom: 16px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  display: block;
  margin: 26px auto 0 auto;
  border-width: 0;
  width: 196px;
  background: #ebd8ff;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  padding: 14px 0;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  cursor: pointer;
  &:hover {
    box-shadow: none;
    border: 1px solid #373737;
  }
`;

export const InfoWrap = styled.div`
  align-self: flex-end;
  flex-grow: 1;
  margin-bottom: 36px;
  font-family: "Montserrat";
  font-style: normal;

  &::before {
    content: "";
    display: block;
    margin-bottom: 62px;
    height: 8px;
    width: 100%;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;
