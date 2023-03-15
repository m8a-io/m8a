import { hash, verify, argon2id } from "argon2";
import { randomBytes } from "crypto";

export class HashService {
  /**
   * Get a string with a password and a generated salt value
   * @param password
   * @param salt (optional)
   * @returns password:salt
   */
  public getPasswordWithSalt(password: string, salt?: string): string {
    if (!salt) {
      salt = randomBytes(16).toString("base64");
    }
    if (salt.split("").length < 24)
      throw new Error(
        "Salt is too small. Must be at least 24 characters long."
      );
    return [password, salt].join(":");
  }

  /**
   * Get the salt value from a password and salt combined string
   * @param passwordWithSalt
   * @returns the salt value
   */
  public async getSalt(passwordWithSalt: string): Promise<string> {
    this.checkPassWithSalt(passwordWithSalt);
    return Promise.resolve(passwordWithSalt.split(":")[1]);
  }

  /**
   * Hash the password for saving in the database
   * @param passWithSalt
   * @returns a hashed password
   */
  public async hashPassword(passWithSalt: string): Promise<string> {
    this.checkPassWithSalt(passWithSalt);
    return await hash(passWithSalt, {
      type: argon2id,
    });
  }

  /**
   * Check to see if a password input is valid against the stored password and salt value
   * @param passwordHash from the database
   * @param passwordWithSalt user input password plus the salt from the database
   * @returns a true or false value verifying the given password is valid
   */
  public async verifyPassword(
    passwordWithSalt: string,
    passwordHash: string
  ): Promise<boolean> {
    this.checkPassWithSalt(passwordWithSalt);
    try {
      if (await verify(passwordHash, passwordWithSalt)) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      throw new Error(`Validation of password failed with error: ${err}.`);
    }
  }

  /**
   * Check to make sure the password with salt string is correctly formed.
   * @param passwordWithSalt
   */
  private checkPassWithSalt(passwordWithSalt: string): void {
    const passWithSaltParts = passwordWithSalt.split(":");
    if (passWithSaltParts.length < 2)
      throw new Error("Password with Salt string is malformed.");
    const salt = passwordWithSalt.split(":")[1];
    if (salt.split("").length < 24)
      throw new Error(
        "Salt is too small. Must be at least 24 characters long."
      );
  }
}
