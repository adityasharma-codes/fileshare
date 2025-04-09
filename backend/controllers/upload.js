import FileModel from "../models/filemodel.js";
import dotenv from 'dotenv';

export const UploadController = async(req,res)=>{
    try {
        dotenv.config();
        const backendUrl = process.env.BACKEND_URL;

        const fileObject ={
            path:req.file.path,
            name:req.file.originalname,
        }
        const file = await FileModel.create(fileObject);
    
        
       
        return res.status(200).json({path :`${backendUrl}/api/files/${file._id}`});


    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

export const DownloadController = async(req,res)=>{
    try {
        const {fileid} = req.params;
        const file = await FileModel.findById(fileid);
        if(!file) return res.status(404).json({message:"File not found"});

        return res.download(file.path,file.name);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}