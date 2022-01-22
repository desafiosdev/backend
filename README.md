# Arquivos backend

O sistema poderá ser desenvolvido em qualquer linguagem, desde que a junção dos arquivos de frontend e a utilização do banco de dados não seja difícil de ser unido depois :)

Retornar dados fictícios até que a squad de dba finalize.

Home

-   Se o usuário estiver logado, deverá ser redirecionado para a dashboard.

-   O controller Home deverá somente renderizar uma página html.

Cadastro

-   Se o usuário estiver logado deverá ser direcionado para a dashboard.

-   O controller deverá renderizar uma página html.

-   Quando acessado via método POST, deve esperar: "name", "email", "password".

-   O name não poderá ser vazio

-   O email deve ser um email válido.

-   O email não pode ser repetido (SQL da squad dba).

-   O password deve ter no mínimo 8 caracteres.

-   Caso uma das regras falhe, deverá retornar para a página de login com a mensagem.

-   Fazer hash da senha antes de salvar.

-   Deverá cadastrar o usuário (SQL da squad dba), salvar a sessão e redirecionar para a dashboard.

Login

-   Se o usuário estiver logado deverá ser direcionado para a dashboard.

-   O controller Login deverá renderizar uma página de login.

-   Quando for acessado via POST, deve esperar um "email" e um "password".

-   O email deve ser um email válido.

-   O email deve existir no banco (SQL da squad dba).

-   O password deve ter no mínimo 8 caracteres.

-   Buscar senha baseada no email (SQL da squad dba), a consulta retornará um id e a senha caso existam.

-   A senha passada pelo usuário deve ser "hasheada" e comparada com a vinda do banco.

-   Caso uma das regras falhe, deverá retornar para a página de login com uma mensagem.

-   Após fazer login direcionar para a dashboard.

Dashboard

-   Se o usuário não estiver logado deverá ser direcionado para o login.

-   O controller deverá renderizar uma página html.

-   Buscar no banco o id, name e email do usuário logado by id (SQL da squad dba).

-   Dever ser passado um array com os dados do usuário logado: name e avatar (aguardar SQL da squad dba). O avatar deve ser uma url do gravatar ([um exemplo de como fazer em PHP](https://stackoverflow.com/a/32281719/5278356) , é simplesmente passar para o gravatar o email em md5 e usar o link de uma imagem padrão caso o gravatar não seja encontrado).

-   O controller deverá passar um lista (array) das últimas tarefas (SQL da squad dba), passando o atributo: content (string) e finished (booleano).

-   Ao receber um post, deve esperar um atributo com o name "new_item", que será o conteúdo do item. Deve ser salvo no banco com o atributo concluído como false (aguardar SQL da squad dba).

-   Depois de inserido deve redirecionar para a dashboard novamente.

Logout

-   Ao receber uma requisição POST, a sessão deve ser removida e o usuário direcionado para a página de login.
