import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import multer from 'multer';
import eventRoute from './routes/eventRoute';
import { uploadFile } from './service/uploadFileService';
dotenv.config(); 

const app = express();
const port = 3000;
app.use(express.json());
app.use('/events',eventRoute);

const upload = multer({ storage: multer.memoryStorage() });
 
app.post('/upload', upload.single('file'), async (req: any, res: any) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).send('No file uploaded.');
    }

    const bucket = process.env.SUPABASE_BUCKET_NAME;
    const filePath =  process.env.UPLOAD_DIR;

    if (!bucket || !filePath) {
      return res.status(500).send('Bucket name or file path not configured.');
    }
 
    const ouputUrl = await uploadFile(bucket, filePath, file);

    res.status(200).send(ouputUrl);
  } catch (error) {
    res.status(500).send('Error uploading file.');
  }
});


app.get('/', async (req : Request, res : Response) => { 
  res.send(await 'Hello World')
})

app.listen(port, () => { 
  console.log((`App listening at http://localhost:${port}`))
})

