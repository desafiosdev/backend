import { Router } from 'express'
import { makeCadastrarUsuario } from './factories/cadastrar-usuario';
import { makeCriarNovoItem } from './factories/criar-novo-item';
import { makeDashboard } from './factories/dashboard';
import { makeHome } from './factories/home';
import { makeLogarUsuario } from './factories/logar-usuario';
import { makeLogout } from './factories/logout';
import { manipulateController } from './helpers/manipulate-controller';

export default (router: Router): void => {
  router.get('/', (req, res) => manipulateController(makeHome, req, res));
  router.get('/dashboard', (req, res) => manipulateController(makeDashboard, req, res));
  router.post('/items', (req, res) => manipulateController(makeCriarNovoItem, req, res));
  router.get('/login', (req, res) => manipulateController(makeLogarUsuario, req, res));
  router.get('/cadastrar', (req, res) => manipulateController(makeCadastrarUsuario, req, res));
  router.get('/logout', (req, res) => manipulateController(makeLogout, req, res));
}