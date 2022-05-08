const cloud = require('wx-server-sdk');

cloud.init();

exports.main = async () => {
  const wxContext = cloud.getWXContext();

  return {
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  };
}

// exports.main = async () => {
//   cloud.init({
//     env: process.env.TCB_ENV,
//   })
//   const db = cloud.database()
//   return db.collection('perm4').where({
//     _openid: 'server'
//   }).limit(1).get()
// }
