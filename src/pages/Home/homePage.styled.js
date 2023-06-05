import { Link } from "react-router-dom";
import styled from "styled-components";
import hero from "../../images/hero.jpeg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 50px;
  min-height: 700px;
  border-radius: 20px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.3),
      rgba(47, 48, 58, 0.3)
    ),
    url(${hero});
  background-position: center;
  background-size: cover;
`;

export const Title = styled.p`
  color: #ebd8ff;
  font-size: 35px;
  font-weight: bold;
`;

export const Button = styled(Link)`
  text-decoration: none;
  align-self: center;
  margin-top: 40px;
  padding: 20px 10px;
  border-radius: 10.3108px;
  background-color: #5736a3;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  color: #ebd8ff;
  cursor: pointer;
  &:hover {
    border: 1 px solid #5736a3;
    box-shadow: none;
    color: red;
  }
`;
