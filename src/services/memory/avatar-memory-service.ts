import IAvatarService from '../../contracts/services/i-avatar-service';

export default class AvatarMemoryService implements IAvatarService {
  async generateAvatarBy(data: string): Promise<string> {
    return new Promise((resolve) => resolve('any_avatar'));
  }
}