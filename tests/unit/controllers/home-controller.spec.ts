import HomeController from '../../../src/controllers/home-controller';

describe('HomeController', () => {
  test('should exist', () => {
    expect(HomeController).toBeDefined();
  })
  test('should have a method called handle', () => {
    const sut = new HomeController();

    expect(sut.handle).toBeDefined();
  })
  test('should receive a request and response', () => {
    const sut = new HomeController();
    const spy = jest.spyOn(sut, 'handle');

    sut.handle('request', 'response');

    expect(spy).toBeCalledWith('request', 'response');
  })
})
