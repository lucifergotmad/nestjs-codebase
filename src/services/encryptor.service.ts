import Cryptr from "cryptr";

export class Encryptor {
  private cryptr: Cryptr;
  private isEncrypt: boolean;

  constructor() {
    const encKey = process.env.ENCKEY;
    this.isEncrypt = !!Number(process.env.ENCRYPTION_MODE);
    this.cryptr = new Cryptr(encKey);
  }

  doEncrypt(dataBeforeCopy: any, ignore: string[] = []) {
    if (!this.isEncrypt) {
      return dataBeforeCopy;
    }
    if (!dataBeforeCopy) {
      return dataBeforeCopy;
    }
    if (
      typeof dataBeforeCopy === "object" &&
      !(dataBeforeCopy instanceof Date)
    ) {
      const data = Array.isArray(dataBeforeCopy)
        ? [...dataBeforeCopy]
        : { ...dataBeforeCopy };
      Object.keys(data).map((x: any) => {
        const result = ignore.find((find: any) => find === x);
        if (!result) {
          if (Array.isArray(data[x])) {
            data[x] = data[x].map((y: any) => {
              if (typeof y === "string") {
                return this.cryptr.encrypt(y);
              } else if (
                typeof data[x] === "object" &&
                data[x] &&
                !(data[x] instanceof Date)
              ) {
                return this.doEncrypt(y, ignore);
              }
              return false;
            });
          } else {
            if (typeof data[x] === "string" && data[x]) {
              data[x] = this.cryptr.encrypt(data[x]);
            } else if (typeof data[x] === "number" && data[x]) {
              data[x] = data[x];
            } else if (
              typeof data[x] === "object" &&
              data[x] &&
              !(dataBeforeCopy instanceof Date)
            ) {
              data[x] = this.doEncrypt(data[x], ignore);
            }
          }
        }
        return false;
      });
      return data;
    } else if (typeof dataBeforeCopy === "string") {
      const data = this.cryptr.encrypt(dataBeforeCopy);
      return data;
    }
    return dataBeforeCopy;
  }

  doDecrypt(dataBeforeCopy: any, ignore: string[] = []) {
    if (!this.isEncrypt) {
      return dataBeforeCopy;
    }

    if (!dataBeforeCopy) {
      return dataBeforeCopy;
    }

    if (
      typeof dataBeforeCopy === "object" &&
      !(dataBeforeCopy instanceof Date)
    ) {
      const data = Array.isArray(dataBeforeCopy)
        ? [...dataBeforeCopy]
        : { ...dataBeforeCopy };
      Object.keys(data).map((x: any) => {
        const result = ignore.find((find: any) => find === x);
        if (!result) {
          if (Array.isArray(data[x])) {
            data[x] = data[x].map((y: any) => {
              if (typeof y === "string") {
                return this.cryptr.decrypt(y);
              } else if (
                typeof data[x] === "object" &&
                data[x] &&
                !(data[x] instanceof Date)
              ) {
                return this.doDecrypt(y, ignore);
              }
              return false;
            });
          } else {
            if (typeof data[x] === "string" && data[x]) {
              data[x] = this.cryptr.decrypt(data[x]);
            } else if (typeof data[x] === "number" && data[x]) {
              data[x] = data[x];
            } else if (
              typeof data[x] === "object" &&
              data[x] &&
              !(dataBeforeCopy instanceof Date)
            ) {
              data[x] = this.doDecrypt(data[x], ignore);
            }
          }
        }
        return false;
      });
      return data;
    } else if (typeof dataBeforeCopy === "string") {
      const data = this.cryptr.decrypt(dataBeforeCopy);
      return data;
    }
  }
}
