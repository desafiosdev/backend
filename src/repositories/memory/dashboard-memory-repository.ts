import IDashboardRepository from '../../contracts/repositories/i-dashboard-repository';

export default class DashboardMemoryRepository implements IDashboardRepository {
  private users = [
    {
      id: '1',
      name: 'Jhon',
      email: 'jhon@email.com',
    },
    {
      id: '2',
      name: 'Lorem',
      email: 'lorem@email.com',
    },
  ];
  private items = [
    {
      id: '1',
      usuarioId: '1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: '2',
      usuarioId: '1',
      content: 'Vestibulum euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget euismod nisl nunc eget.',
    },
    {
      id: '3',
      usuarioId: '2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  async findUserById(userId: string): Promise<{ id: string, name: string, email: string }> {
    return new Promise((resolve, reject) => {
      const userIndex = this.users.findIndex(item => item.id === userId);
      if (userIndex === -1) {
        reject(new Error('User not found'));
      }
      resolve(this.users[userIndex]);
    });
  }

  async findUserItems(userId: string): Promise<{ id: string, content: string }[]> {
    return new Promise((resolve, reject) => {
      const items = this.items.filter(item => item.usuarioId === userId);
      if (!items) {
        reject(new Error('User not found'));
      }
      resolve(items);
    });
  }
}