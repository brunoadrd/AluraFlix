import React from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

function CadastroVideo() {
    return (
      <PageDefault>
        <h1>Cadastro de Vídeos</h1>
        <Link to="/cadastro/categorias">Cadastrar Categorias</Link>
      </PageDefault>
    );
  }

  export default CadastroVideo;