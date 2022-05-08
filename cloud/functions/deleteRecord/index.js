// const { init, DYNAMIC_CURRENT_ENV, cloud } = require('wx-server-sdk');
// init({
//   env: DYNAMIC_CURRENT_ENV,
// });

// const db = cloud.database();

// exports.main = async (event,context) => {
//   console.log(event,context);
//   // return await db.createCollection(event.name);
// };





const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()
exports.main = async (event, context) => {
  console.log('event:'+event.name, 'context:'+context.name);
  return await db.createCollection('todos')
}