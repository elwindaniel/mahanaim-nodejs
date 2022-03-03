exports.sendResponse = async(res, response,)=>{
  res.status(200).send({success:true ,data: response
})
}

exports.sendException = (res, message, code) => {
  res
    .status(code || 500)
    .send({ error: true, message: message || "Something Went Wrong !" });
};

exports.sendBadRequest = (res) => {
  res.status(400).send({ error: true, message: "Bad Request" });
};

exports.sendNotFound = (res) => {
  res.status(401).send({ error: true, message: "Not Authorized" });
};

exports.errorHandler = (err, req, res, next) => {
  if (err.statusCode) {
    switch (err.statusCode) {
      case 400:
        this.sendBadRequest(res);
        break;
      case 401:
        this.sendNotFound(res);
        break;
      case 500:
        this.sendException(res, err);
        break;
      case 404:
        this.sendException(res, "Requested entity not found", 404);
        break;
      default:
        break;
    }
    return;
  }
  this.sendException(res, err.message || err || null);
};
