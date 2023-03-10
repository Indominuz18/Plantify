import { MongoClient } from "mongodb";
const url =
  "mongodb+srv://ManmeetSingh:gPjevGaFNXWdT1ID@cluster1.8x4f1.mongodb.net/?retryWrites=true&w=majority";
import bcrypt from "bcrypt";
export default async function Login(req, res) {
  if (req.method == "POST") {
    const [email, password] = req.data;

    const client = await MongoClient.connect(url);
    const db = client.db();

    const userCollection = db.collection("plantify_users");

    const user = userCollection.findOne({ email: email });

    if (user) {
      const user_password = user.password;
      const verify_password = await bcrypt.compare(password, user_password);
      if (verify_password) {
        res.status(201).json({ message: "Logged in!" });
      } else {
        res.status(200).json({ message: "Invalid Password" });
      }
    } else {
      res.status(200).json({ message: "User doesn't exists" });
    }
  }
}
