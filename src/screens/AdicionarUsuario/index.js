import { useFormik } from "formik";
import React from "react";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ErrorSpan } from "../../components/ErrorSpan";
import { Container, Form } from "./styles.js";
import { getCep } from "../../services/cep";
import * as Yup from "yup";

export function AdicionarUsuario() {
  const Schema = Yup.object().shape({
    nome: Yup.string().required("Este campo é obrigatório"),
    idade: Yup.string().required("Este campo é obrigatório"),
    cep: Yup.string().required("Este campo é obrigatório"),
    logradouro: Yup.string().required("Este campo é obrigatório"),
    numero: Yup.string().required("Este campo é obrigatório"),
    cidade: Yup.string().required("Este campo é obrigatório"),
    bairro: Yup.string().required("Este campo é obrigatório"),
    formacoes: Yup.string().required("Este campo é obrigatório"),
    experiencias: Yup.string().required("Este campo é obrigatório"),
    hobbies: Yup.string().required("Este campo é obrigatório"),
  });

  const formik = useFormik({
    initialValues: {
      nome: "",
      idade: "",
      cep: "",
      logradouro: "",
      numero: "",
      cidade: "",
      bairro: "",
      formacoes: "",
      experiencias: "",
      hobbies: "",
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  async function handleCep() {
    if (formik.values.cep) {
      const response = await getCep(formik.values.cep);
      formik.setFieldValue("logradouro", response.data.logradouro);
      formik.setFieldValue("cidade", response.data.localidade);
      formik.setFieldValue("bairro", response.data.bairro);
    } else {
      alert("Preencha o CEP");
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={formik.handleSubmit}>
          <Input
            id="nome"
            placeholder={"Nome"}
            name="nome"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.nome}
          />
          {formik.errors.nome && <ErrorSpan>{formik.errors.nome}</ErrorSpan>}
          <Input
            id="idade"
            placeholder={"Idade"}
            name="idade"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.idade}
          />
          {formik.errors.idade && <ErrorSpan>{formik.errors.idade}</ErrorSpan>}
          <Input
            id="cep"
            placeholder={"CEP"}
            name="cep"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.cep}
          />
          {formik.errors.cep && <ErrorSpan>{formik.errors.cep}</ErrorSpan>}
          <Button type="button" onClick={handleCep}>
            Buscar CEP
          </Button>
          <Input
            id="logradouro"
            placeholder={"Logradouro"}
            name="logradouro"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.logradouro}
          />
          {formik.errors.logradouro && (
            <ErrorSpan>{formik.errors.logradouro}</ErrorSpan>
          )}
          <Input
            id="bairro"
            placeholder={"Bairro"}
            name="bairro"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.bairro}
          />
          {formik.errors.bairro && (
            <ErrorSpan>{formik.errors.bairro}</ErrorSpan>
          )}
          <Input
            id="numero"
            placeholder={"Numero"}
            name="numero"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.numero}
          />
          {formik.errors.numero && (
            <ErrorSpan>{formik.errors.numero}</ErrorSpan>
          )}
          <Input
            id="cidade"
            placeholder={"Cidade"}
            name="cidade"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.cidade}
          />
          {formik.errors.cidade && (
            <ErrorSpan>{formik.errors.cidade}</ErrorSpan>
          )}
          <Input
            id="formacoes"
            placeholder={"Formações"}
            name="formacoes"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.formacoes}
          />
          {formik.errors.formacoes && (
            <ErrorSpan>{formik.errors.formacoes}</ErrorSpan>
          )}
          <Input
            id="experiencias"
            placeholder={"Experiências"}
            name="experiencias"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.experiencias}
          />
          {formik.errors.experiencias && (
            <ErrorSpan>{formik.errors.experiencias}</ErrorSpan>
          )}
          <Input
            id="hobbies"
            placeholder={"Hobbies"}
            name="hobbies"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.hobbies}
          />
          {formik.errors.hobbies && (
            <ErrorSpan>{formik.errors.hobbies}</ErrorSpan>
          )}
          <Button type="submit">Adicionar</Button>
        </Form>
      </Container>
    </>
  );
}
