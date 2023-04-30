import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id },"ahihi3300", {
    expiresIn: "30d",
  });
};

export default generateToken;
