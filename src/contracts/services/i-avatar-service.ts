export default interface IAvatarService {
  generateAvatarBy(data: string): Promise<string>;
}