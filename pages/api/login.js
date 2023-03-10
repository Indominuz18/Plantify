import { MongoClient } from "mongodb";
const url =
  "mongodb+srv://ManmeetSingh:gPjevGaFNXWdT1ID@cluster1.8x4f1.mongodb.net/?retryWrites=true&w=majority";
import bcrypt from "bcrypt";
export default async function Login(req, res) {
  if (req.method == "POST") {
    const data = req.body;

    const client = await MongoClient.connect(url);
    const db = client.db();

    const userCollection = db.collection("plantify_users");

    const user = await userCollection.findOne({ email: data.email });
    console.log(user)
    if (user) {
      const user_password = user.password;
      const verify_password = await bcrypt.compare(data.password, user_password);
      if (verify_password) {
        res.json({name: user.name, email: user.email})
        // res.status(201).json({ message: "Logged in!" });
      } else {
        res.status(200).json({ message: "Invalid Password" });
      }
    } else {
      res.status(200).json({ message: "User doesn't exists" });
    }
  }else{
    console.log("user not found")
  }
}
