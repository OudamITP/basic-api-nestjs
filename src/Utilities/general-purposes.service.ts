/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class GeneralPurposesService {

    stringDecryption(encryptedString: string) {
        if(encryptedString) {
            const splitDecryptedAuthInfo: string = Buffer.from(encryptedString.split(' ')[1], 'base64').toString('utf-8');
            const decryptedAuthInfo: string[] = splitDecryptedAuthInfo.split(':');
            return decryptedAuthInfo;
        }
    }

}
