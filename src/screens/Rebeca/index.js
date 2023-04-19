import { useFormik } from "formik";
import React, {useEffect} from "react";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Container, Form } from "./styles";
import {getCep} from "../../services/cep";

export function Rebeca() {
  
  const formik = useFormik({
    initialValues: {
      nome: "Rebeca Alves Sousa",
      idade: "19",
      cep: "60741600",
      logradouro: "",
      numero: "7842",
      cidade: "",
      bairro: "",
      formacoes: "Sistemas para Internet - FIAP",
      experiencias: "BEES - Desenvolvedora java - back end Jr.",
      hobbies: "Viagens e cinema",
    },
  });

  async function handleCep() {
    if(formik.values.cep) {
      const response = await getCep(formik.values.cep);
      formik.setFieldValue('logradouro', response.data.logradouro);
      formik.setFieldValue('cidade', response.data.localidade);
      formik.setFieldValue('bairro', response.data.bairro);
    } else {
      alert("Preencha o CEP")
    }
  }

  useEffect(() => {
      handleCep();
  }, []);

  return (
    <>
      <Header/>
      <Container>
        <Form>
          <Input
            id="nome"
            placeholder={"Nome"}
            name="nome"
            type="text"
            value={formik.values.nome}
            disabled
          />
          <Input
            id="idade"
            placeholder={"Idade"}
            name="idade"
            type="text"
            value={formik.values.idade}
            disabled
          />
          <Input
            id="cep"
            placeholder={"CEP"}
            name="cep"
            type="text"
            value={formik.values.cep}
            disabled
          />
          
          <Input
            id="logradouro"
            placeholder={"Logradouro"}
            name="logradouro"
            type="text"
            value={formik.values.logradouro}
            disabled
          />
          <Input
            id="bairro"
            placeholder={"Bairro"}
            name="bairro"
            type="text"
            value={formik.values.bairro}
            disabled
          />
          <Input
            id="numero"
            placeholder={"Numero"}
            name="numero"
            type="text"
            value={formik.values.numero}
            disabled
          />
          <Input
            id="cidade"
            placeholder={"Cidade"}
            name="cidade"
            type="text"
            value={formik.values.cidade}
            disabled
          />
          <Input
            id="formacoes"
            placeholder={"Formações"}
            name="formacoes"
            type="text"
            value={formik.values.formacoes}
            disabled
          />
          <Input
            id="experiencias"
            placeholder={"Experiências"}
            name="experiencias"
            type="text"
            value={formik.values.experiencias}
            disabled
          />
          <Input
            id="hobbies"
            placeholder={"Hobbies"}
            name="hobbies"
            type="text"
            value={formik.values.hobbies}
            disabled
          />
        </Form>
      </Container>
    </>
  );
}
