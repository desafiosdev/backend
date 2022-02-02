export default interface IDashboardRepository {
  findUserById(userId: string): Promise<{ id, name, email }>;
}