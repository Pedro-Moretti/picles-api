import { diskStorage } from 'multer';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

const multerConfig = {
  storage: diskStorage({
    destination: './upload/files',
    filename: (req, file, callback) => {
      const fileName =
        path.parse(file.originalname).name.replace(/\s/g, '') + '-' + uuidv4();

      const extension = path.parse(file.originalname).ext;
      callback(null, `${fileName}${extension}`);
    },
  }),
};

export default multerConfig;