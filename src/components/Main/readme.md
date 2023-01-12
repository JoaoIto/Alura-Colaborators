# Main

Neste arquivo, temos os arquivos dos componentes, de *`ListTimes`*, *`Group`*,  *`Dev`*, onde, respectivamente, são separados do maior para o menorem questão de componente, onde desempenham funções diferentes, porém que se complementam e compartilham funções a partir da `props` de informações de cada colaborador adicionado.

## ListTimes

**Nesta propriedade temos a `props` compartilhada de *`App.js`* já que precisamos das informações do estado dos colaboradores para montar toda seção de colaboradores a partir do método de array de `map()`, assim podemos passar pelos valores do array, e construir o componente na página. Deste modo:**

```jsx
{props.times.map((time) => (
        <Group
          key={time.name}
          name={time.name}
          primaryColor={time.primaryColor}
          secondColor={time.secondColor}
          colaborators={props.colaborators.filter(
            (colaborator) => colaborator.group === time.name
          )}
        />
      ))}
```

## Group

O componente maior de Group, tem a função de compandar cada acesso dentro de ListTimes, o que seriam cada escola, (programação, front-end, devops...)

**Para  que não seja repetido cada trecho de escola, de forma a repetir muitos trechos pequenos de código, construímos um componente, que consegue pegar as informações recebidas de times, e colaboradores vindas de *`App.js`*, e assim montar também a partir de `map()` e assim construir de forma independente uma da outra, sem repetir código, e ainda gerando melhor leitura na exportação de um só array de estado. Veja o trecho:**

```jsx
return (
    <Section
      style={{
        backgroundColor: props.primaryColor,
        border: props.secondColor,
      }}
    >
      <TitleCard>{props.name}</TitleCard>
      {props.colaborators.map((colaborator) => (
        <Dev
          key={colaborator.name}
          {...colaborator}
          primaryColor={props.primaryColor}
          secondColor={props.secondColor}
        />
      ))}
    </Section>
  );
```

## Dev

**Neste componente de Dev, utilizamos este componente para que consigamos puxar daquelas informações puxadas do usuário, que são desestruturadas quando chegam dentro do componente, de depois jogadas ao grupo, com suas respectivas informações! Utilizamos esta desestruturação apenas para melhor leitura do objeto de props recebida, porém mesmo assim poderíamos utilizar ainda a props, e somente ir especificando dentro dos campos o que deverá ser feito. Veja o trecho de código feito:**

```jsx
export function Dev({ name, image, office, secondColor }) {
  return (
    <Devs>
      <Background style={{ backgroundColor: secondColor }}>
        <Icon src={image} alt={name} />
      </Background>
      <Name>{name}</Name>
      <Office>{office}</Office>
    </Devs>
  );
}
```