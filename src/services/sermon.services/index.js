const {
  findSermonsByQuery,
  createSermon,
  updateSermonById,
} = require("../../data/sermon.data");
const { findUserByEmail } = require("../../data/user.data");

//=======================Get Users By Query===========================//
exports.getSermonByQuery = async (req) => {
  let query = req.query;
  let sermon = await findSermonsByQuery(query);
  if (!sermon) {
    throw "No Data Found";
  }
  return sermon;
};

//=======================Create sermon===========================//
exports.createSermon = async (req) => {
  const { sermonTitle, sermonPermalink,sermonAuthor,sermonDescription } = req.body;
  const { body, files } = req;
  if (!req.user.email) {
    throw "Not a valid user";
  }
  let user = await findUserByEmail(req.user.email);
  if (user.userType === "admin" || user.userType === "pastor") {
    if (!sermonTitle || !sermonPermalink || !sermonAuthor ||!sermonDescription) {
      throw "missing data";
    }

    let sermonPosted = {
      sermonPostedDate: new Date(),
      sermonPostedBy: req.user.id,
    };
    body.sermonPosted = sermonPosted;
    if (files) {
      if (files.sermonImage) {
        let sermonImage = {
          path: files.sermonImage[0].path,
          mimetype: files.sermonImage[0].mimetype,
          destination: files.sermonImage[0].destination,
          filename: files.sermonImage[0].filename,
          size: files.sermonImage[0].size,
        };
        body.sermonImage = sermonImage;
      }
    }
    const sermon = await createSermon(body);
    return sermon;
  } else {
    throw "You are not allowed!";
  }
};

//=======================Update sermon By Id===========================//
exports.updateSermonById = async (req) => {
  const { body, files } = req;
  const id = req.params.id;
  if (!req.user.email) {
    throw "Not a valid user";
  }
  let user = await findUserByEmail(req.user.email);
  if (user.userType === "admin" || user.userType === "pastor") {
    let sermonEdited = [];
    sermonEdited.push({
      sermonEditedDate: new Date(),
      sermonEditedBy: req.user.id,
    });
    body.sermonEdited = sermonEdited;
    if (files) {
      if (files.sermonImage) {
        let sermonImage = {
            path: files.sermonImage[0].path,
            mimetype: files.sermonImage[0].mimetype,
            destination: files.sermonImage[0].destination,
            filename: files.sermonImage[0].filename,
            size: files.sermonImage[0].size,
        };
        body.sermonImage = sermonImage;
      }
    }
    const sermon = await updateSermonById(id, body);
    return sermon;
  } else {
    throw "You are not allowed!";
  }
};
