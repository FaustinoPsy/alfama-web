# Home Page Alfama Cursos

## Descrição
Relayout da página inicial do site Alfama cursos, como forma de teste de contratação.

---

## Estrutura das pastas
```
|_ api
|_ apresentação
  |_ css
  |_ imgs
  |_ js
|_ assets
  |_ imgs
    |_ cursos
    |_ home
  |_ fonts
    |_ releway
    |_ roboto
  |_ videos
|_ css
  |_ animate.css
  |_ bootstrap
  |_ custom
  |_ fontawesome
  |_ fonts
|_ js
  |_ bigPicture
  |_ bioep
  |_ bootstrap
  |_ custom
  |_ fontawesome
  |_ render
  |_ t-write
  |_ wow
```

---

## Mapa da Página
- Presentation
- Benefícios
- Cursos
- Depoimentos
- Rede Sociais
- Rodapé

---

## Como usar

### Clone o repositório
```git
git clone https://github.com/lucas123ho/alfama-web.git

```
### Instale as dependências da API
#### 1 - Entre na pasta './api'
```bash
cd api
```
#### 2 - Instale com o NPM
```bash
npm i
```
**Ainda nesta pasta**, inicie o servidor local

### Iniciando Servidor Local
```bash
npm start
```

### Acesse
No console aparecerá os dados de acesso:
```bash
Local: http://localhost:PORT
Acesse: http://SEU_IP:PORT
```

## API Config
```JSON
{
  "port": 3001 // Default
}
```
***Path: './api/config.json***

---

## Dependências
### Front-end
- CSS
  - Animate CSS
  - Bootstrap (CSS)
  - Fontawesome (JS)

- Javascript
  - Bioep
  - Bootstrap (JS)
  - Fontawesome (JS)
  - WOW

## API
A API tem duas rotas
- **"/"** = Renderiza a página
- **/cursos** = Retorna os curso (possuí filtro)

### /cursos
A rota **/cursos** retorna os curso em formato JSON. Posuí 3 filtros:
- **q** = Filtra por nome e descrição
- **d** = filtrar por duração
- **s** = filtrar pelo início do curso

#### Exemplo
```URL
http://localhost:3001/cursos?q=admi&d=14&s=imediato
```
##### Retorno:
```JSON
{"cursos":
  [
    {"id":0,
    "type":1,
    "name":"Administração",
    "description":"O Curso Técnico em Administração dá qualificação ao profissional que deseja atuar como Gestor de Recursos Humanos.",
    "duration":"14 Meses",
    "start":"Imediato",
    "location":"Sergipe",
    "imgName":"adm",
    "link":"https://www.alfamacursostecnicos.com.br/cursostecnicos/administracao"}
  ],
  "durations":{"meses":[{"time":14,"posFix":"Meses"}],"horas":[],"outhers":[]},"starts":["Imediato"]
}
```

## Funções importantes
### Filtrar Cursos (filterCursos)
```javascript
filterCursos(filterName, filterDuration, filterStart)
```
| Atributo       | Descrição                      | Padrão | Tipo   |
| -------------- | ------------------------------ | ------ | ------ |
| filterName     | Filtra pelo Título e Descrição |   ''   | String | 
| filterDuration | Filtra pelo duração do curso   |   ''   | String |
| filterStart    | Filtra pelo início do curso    |   ''   | String |

***Obs.: Esta função pode ser invocada em qualquer escopo***
