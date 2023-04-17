import styled from "styled-components";
import {Spaces, Colors} from "../../shared/DesignTokens";

export const Container = styled.div`
    width: 100px;
    height: 100vh;
    background-color: ${Colors.BACKGROUND};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: ${Spaces.TWO};
    border: 1px solid ${Colors.GREY};
`;
