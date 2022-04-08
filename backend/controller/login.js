const bcrypt = require("bcrypt");
const userDetails = require("../models/user");
const jwt = require("jsonwebtoken");
module.exports.user = async function (req, res) {
  console.log(req.body);
  const user = await userDetails.findOne({ email: req.body.email });
  const status = await bcrypt.compare(req.body.password, user.password);
  if (!user || !status) {
    console.log("user not found check username and password");
    res.json({ token: false, user: "" });
  } else {
    console.log(user);
    const token = jwt.sign({ id: user._id }, "helloworld");
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
      },
    });
  }
};

// to get the data of user for particular jwt token
module.exports.data = async function (req, res) {
  const token = req.headers["x-access-token"];
  await jwt.verify(token, "helloworld", async (err, decoded) => {
    if (err) {
      console.log("invaild token");
      return res.json({ status: false, err: "invaild error" });
    }
    const id = decoded.id;
    const data = await userDetails.findById(id);
    return res.json({
      status: "true",
      email: data.email,
      name: data.name,
      city: data.city,
      pin: data.pin,
    });
  });
};
