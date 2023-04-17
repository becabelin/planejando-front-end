import styled from "styled-components";
import {Colors, FontSizes, Spaces} from "../../shared/DesignTokens";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90vh;
`;

export const ContainerLogin = styled.div`
    width: 100%;
    max-width: 400px;
    background-color: ${Colors.WHITE};
    padding: ${Spaces.FIVE} ${Spaces.THREE};
`;

export const Title = styled.h2`
    font-size: ${FontSizes.THREE};
    margin-bottom: ${Spaces.FOUR};
`;

export const ForgotPassword = styled.a`
    font-size: ${FontSizes.TWO};
    color: ${Colors.BLACK}
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
