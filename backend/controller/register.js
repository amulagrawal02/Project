const userDetails = require("../models/user");
module.exports.user = async function (req, res) {
  console.log(req.body);
  const data = req.body;
  console.log(data.name);
  await userDetails.create(
    {
      name: data.name,
      password: data.password,
      city: data.city,
      pin: data.pin,
      email: data.email,
    },
    (err) => {
      if (!err) {
        console.log("added successfully");
        return;
      } else {
        console.log(err);
      }
    }
  );
  return;
};
