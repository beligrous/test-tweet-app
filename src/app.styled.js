import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  border-radius: 20px;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;
