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
  test('should receive params on request', () => {
    const sut = new CadastrarUsuariosController();
    const spy = jest.spyOn(sut, 'handle');
    const cadastrarUsuariosRequest: CadastrarUsuariosRequest = {
      name: 'any_name',
      email: 'any_email',
      password: 'any_password'
    };

    sut.handle(cadastrarUsuariosRequest, 'response');

    expect(spy).toBeCalledWith(cadastrarUsuariosRequest, 'response');
  });
});
