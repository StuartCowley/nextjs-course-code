import { MongoClient } from "mongodb";

// /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@atlascluster.c3dyrvm.mongodb.net/meetups?retryWrites=true&w=majority`
    );

    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();
    res.status(201).json({ message: "Meetup inserted" });
  }
}

export default handler;
