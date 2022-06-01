const { connectMongoose } = require("../../mongo-db-connect");
const mongoose = require("mongoose");
const pageModel = require("./models");

const getPageContentMongo = async (pageName) => {
  connectMongoose();
  specificFields = {};
  let pageContent = "";
  try {
    pageContent = await pageModel
      .find({}, { _id: 0 })
      .select("page_content")
      .where({ page_name: pageName });
  } catch (err) {
    pageContent = "";
  }
  if (!pageContent || pageContent == "") {
    pageContent = "";
  } else {
    pageContent = pageContent[0].page_content;
  }
  return pageContent;
};

const UpdatePageContentMongo = async (pageName, content) => {
  connectMongoose();
  const filter = { page_name: pageName };
  const update = { page_content: content };

  // `doc` is the document _after_ `update` was applied because of
  // `new: true`
  let doc = await pageModel.findOneAndUpdate(filter, update, {
    new: true,
    rawResult: true, // Return the raw result from the MongoDB driver
  });

  let updated = false;
  let response = {
    status: 400,
    msg: `Content can not be Updated!`,
  };
  try {
    if (doc.lastErrorObject.updatedExisting == true) {
      updated = true;
    } else {
      updated = false;
    }
  } catch {
    updated = false;
  }
  if (updated == true) {
    response = {
      status: 201,
      msg: `Content Updated Successfully!`,
    };
  } else {
    response = {
      status: 400,
      msg: `Content Could Not Updated!`,
    };
  }

  return response;
};
module.exports = { UpdatePageContentMongo, getPageContentMongo };
