import styled from "styled-components";

export const Container = styled.div`
  max-width: 170px;
  min-width: 170px;
  min-height: 90px;
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  border: 1px solid lightslategray;
  border-radius: 10px;
  margin: 15px;
`;

export const ImageWrapper = styled.img`
  width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 10px;
`;
