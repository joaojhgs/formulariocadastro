import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

export default function Formulario() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [CPF, setCPF] = useState("");
  const [erros, setErros] = useState({cpf:{valido:true, texto:""}});

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(nome);
        console.log(sobrenome);
        console.log(email);
        console.log(CPF);
      }}
    >
      <TextField
        onChange={(event) => {
          setNome(event.target.value);
        }}
        margin="normal"
        variant="outlined"
        label="Nome"
        value={nome}
        fullWidth
        required
      ></TextField>
      <TextField
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        value={sobrenome}
        margin="normal"
        variant="outlined"
        label="Sobrenome"
        fullWidth
      ></TextField>
      <TextField
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        value={email}
        margin="normal"
        variant="outlined"
        label="Email"
        fullWidth
      ></TextField>
      <TextField
        onChange={(event) => {
          setCPF(event.target.value);
        }}
        value={CPF}
        margin="normal"
        variant="outlined"
        label="CPF"
        fullWidth
      ></TextField>
      <FormControlLabel
        label="Promoçoes"
        control={<Switch defaultChecked name="Novidades" margin="normal" />}
      />
      <FormControlLabel
        label="Novidades"
        control={<Switch defaultChecked margin="normal" />}
      />
      <Button
        type="submit"
        margin="normal"
        variant="contained"
        color="primary"
        fullWidth
      >
        Submit
      </Button>
    </form>
  );
}
