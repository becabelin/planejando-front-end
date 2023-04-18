import styled from "styled-components";

import { Colors, FontWeights } from "../../shared/DesignTokens";

export const ButtonComponent = styled.button`
  padding: 8px 20px;
  background-color: ${Colors.ORANGE};
  color: ${Colors.WHITE};
  border-radius: 4px;
  font-weight: ${FontWeights.BOLD};
  border: none;
  box-shadow: 0 0 0.2em ${Colors.GREY};
  display: flex;
  justify-content: left;
`;
