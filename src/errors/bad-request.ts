export class BadRequest extends Error {
  constructor(stack: string) {
    super('Ops! Verifique as informações passadas!');
    this.name = 'BadRequest'
    this.stack = stack
  }
}