export default interface IFileService {
    readFileInBase64(path: string): Promise<string>;
}