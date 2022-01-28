import CadastrarUsuariosController from '../../../src/controllers/cadastrar-usuarios-controller';

describe('CadastrarUsuariosController', () => {
  test('should exist', () => {
    expect(CadastrarUsuariosController).toBeDefined();
  })
  test('should have a method called handle', () => {
    const sut = new CadastrarUsuariosController();

    expect(sut.handle).toBeDefined();
  })
});
