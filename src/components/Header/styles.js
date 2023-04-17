import styled from "styled-components";
import {Spaces, Colors, FontWeights} from "../../shared/DesignTokens";

export const Container = styled.div`
    width: 100%;
    height: 10vh;
    background-color: ${Colors.ORANGE};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${Spaces.FIVE};
`;
