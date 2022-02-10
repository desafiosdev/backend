export default interface IDashboardRepository {
  findUserById(userId: string): Promise<{ id: string, name: string, email: string }>;

  findUserItems(userId: string): Promise<{ id: string, content: string }[]>;
}