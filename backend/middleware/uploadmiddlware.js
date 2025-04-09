import multer from 'multer';

const storage = multer({dest:'filefolder'});

export default storage;