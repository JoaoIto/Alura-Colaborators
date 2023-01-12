# Form 

Dentro do formulário da página, são englobados 2 componentes, em que o componente principal, em *index.jsx* engloba a parte  de estado total do componente, enquanto em *input.jsx* temos o componente para o select de cada time, que colocamos em um array, para assim ser manipulado.

---
## `Input.jsx`

**Aqui neste arquivo, compomos o elemento de select dentro do formulário, em que tive o primeiro desafio para entender o que é *`props`* em que basicamente utilizamos para receber o que  foi digitado dentro do componente de Input no formulário.**

Entendemos em que esta propriedade do React, pode ser mutada, e assim dentro do componente principal do Form, podemos mudar todas estas propriedades dependendo do que ela recebe como parâmetro no HTML. De modo a poder receber estas propriedades de modo independente! Veja o trecho de código como é usado, tanto no *input* como componente, tanto no arquivo principal do *form*, veja:


```jsx
return(
        <div className="container">
            <label>{props.label}</label>
            <input 
            value={props.value} 
            onChange={typing} 
            required={props.required} 
            type={props.type} 
            placeholder={props.placeholder}
            />
        </div>
    )
```

Veja agora um exemplo deste componente sendop mutado no arquivo principal do *form*:

```jsx
        <Input
            type="text"
            label="Nome"
            placeholder="Digite o seu nome: "
            value={name}
            onChanges={value => setName(value)}
            required
          />
```

Esta propriedade, além disso podemos utilizar funções personalizadas para este estado de componente, como fizemos na função de typing, utilizada para identificar os campos digitados pelo usuário. Neste trecho:

```jsx
const typing = (event) => {
        props.onChanges(event.target.value)
    }
```

---

## `index.jsx` Principal

**Esteé o arquivo principal  de todo o também componente, formulário, onde utilizamos um recurso do React, chamado de *State*, confira a documentação: [UseState Hooks - React.JS](https://pt-br.reactjs.org/docs/hooks-state.html)**.

**Em resumo, este componente é utilizado, quando dentro da página de React, é mudado o estado de renderização, e já neste componente é um exemplo claro de mudança, onde temos input de campos de texto de modificação para o usuário.**

**Nele, utilizamos um array para o estado de mudança, e um para o definitivo onde guardaremos a informação, onde entendemos pela sintaxe de mome de ``"nameValue" -  "setNameValue"``**

E assim utilizamos deste modo:

```jsx
  const [name, setName] = useState('');
  const [office, setOffice] = useState('');
  const [image, setImage] = useState('');
  const [group, setGroup] = useState('');

  const onSave = (event) => {
    event.preventDefault();
    props.signInColaborator({
      name,
      office,
      image,
      group,
    });

    setName('');
    setOffice('');
    setImage('');
    setGroup('');
  }
```