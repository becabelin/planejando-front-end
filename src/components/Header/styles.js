import styled from "styled-components";
import { Spaces, Colors, FontSizes, FontWeights } from "../../shared/DesignTokens";

export const Container = styled.div`
  width: 100%;
  height: 10vh;
  background-color: ${Colors.ORANGE};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: ${Spaces.TWO} ${Spaces.FIVE};
  margin-bottom: ${Spaces.THREE};
`;

export const SubTitle = styled.h2`
  font-size: ${FontSizes.THREE};
  color: ${Colors.WHITE};
  font-family: Poppins;
  
`;
export const Title = styled.h1`
  font-size: ${FontSizes.FOUR};
  margin: 10px auto;
  color: ${Colors.WHITE};
  font-family: Poppins;
  
`;

export const Select = styled.select`
  border: none;
  font-weight: ${FontWeights.BOLD};
`;
