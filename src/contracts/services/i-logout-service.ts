export default interface ILogoutService {
  handle(): Promise<void>;
}