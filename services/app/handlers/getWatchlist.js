const firebase = require("../utils/firebase");

const getWatchlist = (req, res) => {
  const { params } = req;
  const db = firebase.database();

  const userRef = db.ref(`${params.userId}`);

  userRef.once("value", (data) => {
    const values = Object.values(data.val());
    res.status(200).json(values);
  });
};

module.exports = getWatchlist;
