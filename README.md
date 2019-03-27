# Home Page Alfama Cursos

## Descrição
Relayout da página inicial do site Alfama cursos, como forma de teste de contratação.

---

## Estrutura das pastas
```
|_ api
|_ assets
  |_ imgs
    |_ cursos
    |_ home
  |_ fonts
    |_ releway
    |_ roboto
|_ css
  |_ animate.css
  |_ bootstrap
  |_ custom
  |_ fontawesome
  |_ fonts
|_ js
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