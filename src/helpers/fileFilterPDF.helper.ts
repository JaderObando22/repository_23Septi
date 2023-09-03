export const fileFilterPDF = (
    req: Express.Request,
    filesPDF: Express.Multer.File,
    callback,
) => {

    //si el archivo no existe o no viene entonces.
    if(!filesPDF) return callback(new Error ('archivo vacio'), false);

    //llegamos hasta el mimetype y tomamos la extension del archivo
    const filesPDFExtension = filesPDF.mimetype.split('/')[1];

    //estas serian las extensiones validas para los archivos
    const validExtension = ['PDF', 'pdf'];

    //si las extensiones validas incluyen la extension del archivo
    if(validExtension.includes(filesPDFExtension)) {
        return callback(null, true);
    }

    callback(null, false);
};
