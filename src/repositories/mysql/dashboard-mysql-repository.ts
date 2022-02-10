import IDashboardRepository from '../../contracts/repositories/i-dashboard-repository';

export default class DashboardMysqlRepository implements IDashboardRepository {
  constructor(
    // private readonly connection: Connection,
  ) { }

  async findUserById(userId: string): Promise<{ id, name, email }> {
    // const [user] = await this.connection.query(`
    //   SELECT
    //     id,
    //     name,
    //     email
    //   FROM users
    //   WHERE id = ?
    // `, [userId]);

    // if (!user) {
    //   throw new Error('User not found');
    // }

    // return user;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          id: '1',
          name: 'Jhon',
          email: 'jhon@email.com'
        });
      }, 500);
    });
  }

  async findUserItems(userId: string): Promise<{ id, content }[]> {
    // const [items] = await this.connection.query(`
    //   SELECT
    //     id,
    //     content
    //   FROM items
    //   WHERE usuario_id = ?
    // `, [userId]);

    // return items;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: '1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          },
          {
            id: '2',
            content: 'Vestibulum euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget euismod nisl nunc eget.'
          }
        ]);
      }, 500);
    });
  }
}