import * as fs from 'fs'
import { Injectable } from "@nestjs/common";
import IFileService from './pet/interfaces/file.service.interface';

@Injectable()
export default class FileService implements IFileService {
        async readFile(path: string): Promise<Buffer> {
            return fs.readFileSync(path);
    }
}
