import IAvatarService from '../../contracts/services/i-avatar-service';
import IEncrypterService from '../../contracts/services/i-encrypter-service';

export default class GravatarAdapter implements IAvatarService {
  private readonly size: number = 150;
  private readonly defaultImage: string = 'https://i.imgur.com/c8A7WeL.png';
  private readonly forceDefault: boolean = true;
  private readonly rating: string = 'pg';

  constructor(
    private readonly encrypterService: IEncrypterService,
  ) { }

  async generateAvatarBy(data: string): Promise<string> {
    const hash = await this.encrypterService.hash(data);
    const url = `https://www.gravatar.com/avatar/${hash}?s=${this.size}&d=${this.defaultImage}&r=${this.rating}&f=${this.forceDefault}`;

    return new Promise((resolve) => resolve(url));
  }
}