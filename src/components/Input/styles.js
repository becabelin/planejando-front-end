import styled from "styled-components";
import {Spaces, Colors} from "../../shared/DesignTokens";

export const InputForm = styled.input`
    border: 1px solid ${Colors.GREY};
    padding: ${Spaces.ONE_HALF};
    margin-bottom: ${Spaces.ONE_HALF};

    :focus {
        border: 1px solid ${Colors.BLUE}
    }
`;

export const Label = styled.label`
    margin: ${Spaces.ONE} 0;
`;
