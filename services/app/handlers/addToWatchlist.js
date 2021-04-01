const firebase = require("../utils/firebase");

const addToWatchlist = async (req, res) => {
  const { params, body } = req;
  const db = firebase.database();

  const userRef = db.ref(`${params.userId}`);

  await userRef.child(`${body.id}`).set(body);

  userRef.once("value", (data) => {
    const values = Object.values(data.val());
    res.status(200).json(values);
  });
};

module.exports = addToWatchlist;
