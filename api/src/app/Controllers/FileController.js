import File from '../Models/Files';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;
    const file = await File.create({
      name,
      path,
    });
    return res.json(file);
  }
}

export default new FileController();
