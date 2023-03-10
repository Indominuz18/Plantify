// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
import { MongoClient } from "mongodb";
const url =
  "mongodb+srv://ManmeetSingh:gPjevGaFNXWdT1ID@cluster1.8x4f1.mongodb.net/?retryWrites=true&w=majority";
// import bcrypt from "bcrypt";

// async function SignUp(req, res) {
//   if (req.method == "POST") {
//     const [email, password] = req.data;

//     const hashedPassword = bcrypt.hash(password, 10);

//     const client = await MongoClient.connect(url);
//     const db = client.db();

//     const userCollection = db.collection("plantify_users");

//     const result = await userCollection.insertOne({
//       email: email,
//       password: hashedPassword,
//     });

//     res.status(201).json({ message: "Signed Up!" });
//   }
// }

// async function Login(req, res) {
//   if (req.method == "POST") {
//     const [email, password] = req.data;

//     const client = await MongoClient.connect(url);
//     const db = client.db();

//     const userCollection = db.collection("plantify_users");

//     const user = userCollection.findOne({ email: email });

//     if (user) {
//       const user_password = user.password;
//       const verify_password = await bcrypt.compare(password, user_password);
//       if (verify_password) {
//         res.status(201).json({ message: "Logged in!" });
//       } else {
//         res.status(200).json({ message: "Invalid Password" });
//       }
//     } else {
//       res.status(200).json({ message: "User doesn't exists" });
//     }
//   }
// }

export default async function getAllProducts(req, res) {
  const client = await MongoClient.connect(url);
  const db = client.db();

  const productCollection = db.collection("products");

  const products = await productCollection.find().toArray();

  const final_products = products.map((product) => {
    return {
      id: product._id.toString(),
      title: product.title,
      description: product.description,
      img: product.img,
      price: product.price,
    };
  });
  client.close();
  res.status(201).send(final_products)
}
