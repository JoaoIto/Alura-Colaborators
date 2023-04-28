import React from "react";
import { IColaborator } from "../../shared/interfaces/Icolaborator";
import { Input } from "./Input";
import { List } from "./List";
import { useState } from "react";

interface FormProps{
  signInColaborator: (colaborator: IColaborator) => void,
  times: string[]
}

export function Form({signInColaborator, times}: FormProps) {

  const [name, setName] = useState('');
  const [office, setOffice] = useState('');
  const [image, setImage] = useState('');
  const [group, setGroup] = useState('');

  const onSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signInColaborator({
      name,
      office,
      group,
      img: ""
    });

    setName('');
    setOffice('');
    setImage('');
    setGroup('');
  }

  return (
    <>
      <fieldset className="
        h-5/6,
        w-screen
        flex
        flex-col
        items-center
        justify-evenly
        bg-aqua
        border-5
        border-solid
        border-gray-700
        rounded-lg
      ">
        <form 
        className="
          flex
          flex-col
          items-center
          justify-evenly
          h-800
          w-full
        "
        onSubmit={onSave}>
          <Input
            type="text"
            label="Nome"
            placeholder="Digite o seu nome: "
            value={name}
            onChanges={value => setName(value)}
            required
          />

          <Input
            type="text"
            label="Cargo"
            placeholder="Digite o seu cargo: "
            value={office}
            onChanges={value => setOffice(value)}
            required
          />

          <Input
            type="text"
            label="Foto"
            placeholder="Coloque a url da sua foto: "
            value={image}
            onChanges={value => setImage(value)}
          />

          <List 
          label="Times" 
          itens={times} 
          required 
          value={group}
          onChanges={value => setGroup(value)}
          />
          
          <button className="
            h-20
            w-3/5
            flex
            items-center
            justify-center
            p-6
            rounded-10
            bg-blue-400
            text-white
            m-6
            rounded-lg
            border-solid
            border-2
            border-slate-500
            font-bold
            text-2xl
            font-inter
          ">Criar Card</button>
        </form>
      </fieldset>
    </>
  );
}
