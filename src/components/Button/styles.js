import styled from "styled-components";

import {Colors, Spaces} from "../../shared/DesignTokens";

export const ButtonComponent = styled.button`
    background-color: ${Colors.WHITE};
    color: ${Colors.BLUE};
    padding: ${Spaces.ONE_HALF};
    border: none;
    margin-top: ${Spaces.THREE};
`;
