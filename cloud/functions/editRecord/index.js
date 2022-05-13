const cloud = require("wx-server-sdk");
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
});
const db = cloud.database();
exports.main = async (event) => {
  return db
    .collection(event.collectionName)
    .doc(event.id)
    .update({ data: event.data });
};
