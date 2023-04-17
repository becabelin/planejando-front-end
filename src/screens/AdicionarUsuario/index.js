import { useFormik } from "formik";
import React from "react";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Label } from "../../assets/styles.js";

export function AdicionarUsuario() {
  const formik = useFormik({
    initialValues: {
      nome: "",
      idade: "",
      cep: "",
      Logradouro: "",
      numero: "",
      cidade: "",
      formacoes: "",
      experiencias: "",
      hobbies: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Header />

      <form onSubmit={formik.handleSubmit}>
        <Label htmlFor="nome">Nome: </Label>
        <Input
          id="nome"
          name="nome"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.nome}
        />
        <Label htmlFor="idade">Idade: </Label>
        <Input
          id="idade"
          name="idade"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.idade}
        />
        <Label htmlFor="cep">CEP</Label>
        <Input
          id="cep"
          name="cep"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.cep}
        />
        <button type="submit">Buscar CEP</button>
        <Label htmlFor="logradouro">Logradouro</Label>
        <Input
          id="logradouro"
          name="logradouro"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.logradouro}
        />
        <Label htmlFor="bairro">Bairro</Label>
        <Input
          id="bairro"
          name="bairro"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.bairro}
        />
        <Label htmlFor="numero">Numero</Label>
        <Input
          id="numero"
          name="numero"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.numero}
        />
        <Label htmlFor="cidade">Cidade</Label>
        <Input
          id="cidade"
          name="cidade"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.cidade}
        />
        <Label htmlFor="formacoes">Formações</Label>
        <Input
          id="formacoes"
          name="formacoes"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.formacoes}
        />
        <Label htmlFor="experiencias">Experiências</Label>
        <Input
          id="experiencias"
          name="experiencias"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.experiencias}
        />
        <Label htmlFor="hobbies">Hobbies</Label>
        <Input
          id="hobbies"
          name="hobbies"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.hobbies}
        />
      </form>
    </>
  );
}
