import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class EncryptDecryptService {

  constructor() {}

  encryptAES(value: any, key: any): string{
    return CryptoJS.AES.encrypt(value, key).toString();
  }

  decryptAES(value: any,  key: any): string{
    return CryptoJS.AES.decrypt(value, key).toString(CryptoJS.enc.Utf8);
  }


}
