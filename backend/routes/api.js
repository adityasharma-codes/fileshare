import express from 'express';
import {UploadController,DownloadController} from '../controllers/upload.js';
import storage from '../middleware/uploadmiddlware.js';
const router = express.Router();

router.post("/upload",storage.single('file'),UploadController);
router.get("/files/:fileid",DownloadController);

export default router;