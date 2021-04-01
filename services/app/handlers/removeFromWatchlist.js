const firebase = require("../utils/firebase");

const removeFromWatchlist = async (req, res) => {
  const { params } = req;
  const db = firebase.database();

  const userRef = db.ref(`${params.userId}`);

  await userRef.child(`${params.movieId}`).remove();

  userRef.once("value", (data) => {
    const values = Object.values(data.val());
    res.status(200).json(values);
  });
};

module.exports = removeFromWatchlist;
