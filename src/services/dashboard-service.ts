import IDashboardRepository from '../contracts/repositories/i-dashboard-repository';
import IAvatarService from '../contracts/services/i-avatar-service';

export default class DasboardService {
  constructor(
    private readonly repository: IDashboardRepository,
    private readonly avatarService: IAvatarService,
  ) { }

  async getUserById(userId: string): Promise<{ id, name, avatar }> {
    const { id, name, email } = await this.repository.findUserById(userId);

    const avatar = await this.avatarService.generateAvatarBy(email);

    return { id, name, avatar };
  }
}