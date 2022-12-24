export interface IHashUtil {
  generate(password: string): Promise<string>;
  compare(password: string, hashedPassword: string): Promise<boolean>;
}
