const cloud = require('wx-server-sdk');
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
});
const db = cloud.database();
exports.main = async (event, context) => {
  console.log('event:'+event);
  await db.collection(event.collectionName).add({
    data: event.data,
  });
};
