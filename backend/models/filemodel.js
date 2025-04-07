import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  path: { type: String, required: true },
  name: { type: String, required: true },
});

const FileModel = mongoose.model("File", fileSchema);
export default FileModel;
