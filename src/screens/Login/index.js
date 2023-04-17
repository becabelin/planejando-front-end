import React from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ErrorSpan } from "../../components/ErrorSpan";
import {
  Container,
  ContainerLogin,
  Title,
  ForgotPassword,
  Form,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from 'yup';

export function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/home");
  }

  const SignupSchema = Yup.object().shape({
    password: Yup.string()
      .min(10, 'A senha informada é muito curta')
      .required('Este campo é obrigatório'),
    email: Yup.string().email('O e-mail informado é inválido').required('Este campo é obrigatório'),
  });

  
  return (
    <>
      <Header />
      <Container>
        <ContainerLogin>
          <Title>Acesse sua conta FIT.NEZ</Title>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={SignupSchema}
            onSubmit={() => {
              handleLogin();
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Input
                  label="E-mail"
                  placeholder="Preencha o e-mail cadastrado"
                  type="text"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && (<ErrorSpan>{errors.email}</ErrorSpan>)}
                <Input
                  label="Senha"
                  placeholder="Preencha a senha cadastrada"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && (<ErrorSpan>{errors.password}</ErrorSpan>)}
                <ForgotPassword href="/">Esqueci minha senha</ForgotPassword>
                <Button type="submit">Submit</Button>
              </Form>
            )}
          </Formik>
        </ContainerLogin>
      </Container>
    </>
  );
}
