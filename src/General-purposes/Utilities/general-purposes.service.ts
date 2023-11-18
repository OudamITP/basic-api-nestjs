import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class GeneralPurposesService {

    async stringDecryption(encryptedString: string): Promise<string[]> {
        if(!encryptedString) {
            throw new Error('encryptedString is null or invalid');
        }

        const splitDecryptedAuthInfo: string = Buffer.from(encryptedString.split(' ')[1], 'base64').toString('utf-8');
        const decryptedAuthInfo: string[] = splitDecryptedAuthInfo.split(':');
        return decryptedAuthInfo;
    }

    async validatvalidateRequestion(req: Request) {
        const authInfo: string = req.headers['authorization'];

        if(!authInfo) {
          throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        }
    
        const decryptedAuthInfo: string[] = await this.stringDecryption(authInfo);
        const username = decryptedAuthInfo[0];
        const password = decryptedAuthInfo[1];
         
        if(username !== 'admin' || password !== '123') {
          throw new HttpException('Invalid username or password', HttpStatus.UNAUTHORIZED);
        }
        return true;
    }

}
