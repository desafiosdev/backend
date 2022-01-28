import CadastrarUsuariosController from '../../../src/controllers/cadastrar-usuarios-controller';

describe('CadastrarUsuariosController', () => {
  test('should exist', () => {
    expect(CadastrarUsuariosController).toBeDefined();
  })
  test('should have a method called handle', () => {
    const sut = new CadastrarUsuariosController();

    expect(sut.handle).toBeDefined();
  })
  test('should receive a request and response', () => {
    const sut = new CadastrarUsuariosController();
    const spy = jest.spyOn(sut, 'handle');

    sut.handle('request', 'response');

    expect(spy).toBeCalledWith('request', 'response');
  })
});
