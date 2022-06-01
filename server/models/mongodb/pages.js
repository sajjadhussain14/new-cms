const { connectMongoose } = require("../../mongo-db-connect");
const mongoose = require("mongoose");
const pageModel = require("./models");

const getAllPageMongo = async () => {
  connectMongoose();
  specificFields = {};
  let records = [];
  fieldsNotNeeded = { page_content: 0, _id: 0, __v: false };
  try {
    records = await pageModel.find({}, { _id: 0 }).select("page_name");
  } catch (err) {
    records = [];
  }
  if (!records) {
    records = [];
  }
  return records;
};

const createpageMongo = async (name) => {
  connectMongoose();

  let pageName = name;
  let pageContent = "";
  let insertQuery = {};
  let response = "";
  let checkexists = await alreadyExists(pageName, pageModel);
  if (checkexists >= 1) {
    return (response = {
      status: 403,
      msg: `Page <strong> ${name} </strong> Already Exists`,
    });
  }

  insertQuery = { page_name: pageName, page_content: pageContent };
  const doc = new pageModel(insertQuery);
  try {
    await doc.save();
    response = {
      status: 200,
      msg: `Page <strong> ${name} </strong> Created Successfully`,
    };
  } catch (err) {
    console.log(err);
    response = {
      status: 309,
      msg: `Page <strong> ${name} </strong> Creation Failed!!!`,
    };
  }
  return response;
};
const alreadyExists = async (pageName, pageModel) => {
  let page = await pageModel.find(
    { page_name: pageName },
    {
      _id: 0,
      page_content: 0,
      __v: false,
    }
  );
  if (!page) {
    page = [];
  }
  return page.length;
};

const deletePageMongo = async (pageName) => {
  let response = "Page <strong> ${pageName} </strong> Deletion Failed!!!";
  connectMongoose();
  let delPage = await pageModel.deleteOne({ page_name: pageName });

  if (delPage.deletedCount && delPage.deletedCount > 0) {
    response = {
      status: 200,
      msg: `Page <strong> ${pageName} </strong> Deleted Successfully!!!`,
    };
  } else {
    response = {
      status: 309,
      msg: `Page <strong> ${pageName} </strong> Deletion Failed!!!`,
    };
  }
  return response;
};

const delPage = async (name, conn) => {};

const createPage = async (name, conn) => {};

const pageExists = async (name, conn) => {};

module.exports = { getAllPageMongo, createpageMongo, deletePageMongo };
