import styled from "styled-components";
import {Spaces, Colors} from "../../shared/DesignTokens";

export const Container = styled.div`
    width: 100%;
    margin: ${Spaces.TWO} 0;
    padding: ${Spaces.ONE};
    display: flex;
    justify-content: center;
    border-left: ${(props) => props.active && `3px solid ${Colors.BLUE}`}
`;
