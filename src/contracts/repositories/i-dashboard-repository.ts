export default interface IDashboardRepository {
  findUserById(userId: string): Promise<{ id, name, email }>;

  findUserItems(userId: string): Promise<{ id, content }[]>;
}