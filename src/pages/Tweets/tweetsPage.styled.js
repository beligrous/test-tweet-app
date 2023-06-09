import styled from "styled-components";
import { Link } from "react-router-dom";
import background from "../../images/background.png";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 500px;
  overflow: hidden;
  border-radius: 10px;
  background-image: url(${background});
  background-repeat: repeat-y;
`;

export const ListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  margin-top: 40px;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
export const Button = styled(Link)`
  position: absolute;
  top: 0;
  display: inline-block;
  align-self: center;
  color: #5736a3;
  font-size: 16px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  text-decoration: none;
  background-color: #ebd8ff;
  padding: 10px 5px;
  border-radius: 10px;
  border: 1px solid #5736a3;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  cursor: pointer;
  &:hover {
    box-shadow: none;
  }
`;
