import { MongoClient } from "mongodb";
const url =
  "mongodb+srv://ManmeetSingh:gPjevGaFNXWdT1ID@cluster1.8x4f1.mongodb.net/?retryWrites=true&w=majority";
import bcrypt from "bcrypt";

export default async function SignUp(req, res) {
  if (req.method == "POST") {
    const data = req.body;

    if(data.password.length < 6 || !data.password.contains("1234567890")){
      res.status(200).json({message: "Password should be atleast 6 chars long and should have a numeric"})
    }

    const hashedPassword = bcrypt.hash(data.password, 10, async (err, hash) => {
      if (!err) {
        const client = await MongoClient.connect(url);
        const db = client.db();

        const userCollection = db.collection("plantify_users");

        const result = await userCollection.insertOne({
          name: data.name,
          email: data.email,
          password: hash,
        });
        console.log(result);
      } else {
        res.status(200).json({ message: err.message });
      }
    });

    res.status(201).json({ message: "Signed Up!" });
  }
}
