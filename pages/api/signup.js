import { MongoClient } from "mongodb";
const url =
  "mongodb+srv://ManmeetSingh:gPjevGaFNXWdT1ID@cluster1.8x4f1.mongodb.net/?retryWrites=true&w=majority";
import bcrypt from "bcrypt";

export default async function SignUp(req, res) {
  if (req.method == "POST") {
    const [name, email, password] = req.data;

    const hashedPassword = bcrypt.hash(password, 10);

    const client = await MongoClient.connect(url);
    const db = client.db();

    const userCollection = db.collection("plantify_users");

    const result = await userCollection.insertOne({
      name: name,
      email: email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Signed Up!" });
  }
}
