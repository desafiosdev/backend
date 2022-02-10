import ICriarNovoItemRepository from '../../contracts/repositories/i-criar-novo-item-repository';

export default class CriarNovoItemMysqlRepository implements ICriarNovoItemRepository {
  constructor(
  ) { }

  async execute(usuarioId: string, content: string): Promise<string> {
    return new Promise((resolve, reject) => {
      // const itemId = this.connection.driver.escape(this.connection.driver.queryBuilder.connection.createQueryBuilder().insert().into('item').values({
      //   usuarioId,
      //   content,
      // }).getSql());
      // resolve(itemId);
      resolve('any_id');
    });
  }
}