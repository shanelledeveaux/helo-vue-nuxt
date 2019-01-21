const addPost = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { title, imageurl, content } = req.body;

  dbInstance
    .add_product([title, imageurl, content])
    .then(response => res.status(200).send(response))
    .catch(console.log);
};

module.exports = {
  addPost
};
