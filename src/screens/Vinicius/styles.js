import styled from "styled-components";
import { Colors, FontSizes, Spaces } from "../../shared/DesignTokens";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  border: 2px solid ${Colors.ORANGE};
  padding: ${Spaces.TWO} ;
  align-items: center;
  border-radius: 22px;
`;

export const Label = styled.p`
  color: ${Colors.WHITE};
  text-align: left;
  font-family: Poppins;
  padding: ${Spaces.ONE_HALF} 0;
  font-size: ${FontSizes.TWO};
`;
