const uploadSingleFile = async (fileObject) => {
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file

  let uploadPath = __dirname + "/abc/" + fileObject.name;

  // Use the mv() method to place the file somewhere on your server
  try {
    await fileObject.mv(uploadPath);
    return {
      status: "success",
      path: "link image",
      error: null,
    };
  } catch (err) {
    console.log("check error ", err);
    return {
      status: "failed",
      path: null,
      error: JSON.stringify(err),
    };
  }
};
const uploadMutipleFiles = () => {};
module.exports = { uploadSingleFile, uploadMutipleFiles };
