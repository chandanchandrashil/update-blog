const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

// middleware
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
}

const uri = `mongodb+srv://${process.env.BD_NAME}:${process.env.BD_PASSWORD}@cluster0.bwgvxez.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const updateBlogsDB = client.db("updateBlogsDB");
    const blogsCollection = updateBlogsDB.collection("blogsCollection");
    const usersCollection = updateBlogsDB.collection("usersCollection");

    app.get("/all-blogs", async (req, res) => {
      const blogsData = await blogsCollection.find();
     
      const result = await blogsData.toArray();

      res.send(result);
    });

    // Save a single blog post
    app.post("/all-blogs", async (req, res) => {
      const blogData = req.body;
      const result = await blogsCollection.insertOne(blogData);

      res.send(result);
    });

    // get single blog post
    app.get("/all-blogs/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await blogsCollection.findOne(query);
      res.send(result);
    });

    // users information save

    app.put("/users/:email", async (req, res) => {
      const email = req.params.email;
      const user = req.body;
      const query = { email: email };
      const options = { upsert: true };
      const updateDoc = {
        $set: user,
      };

      const result = await usersCollection.updateOne(query, updateDoc, options);
      console.log(result);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello there welcome update-blog site!");
});

app.listen(port, (req, res) => {
  console.log(`update blog listening on port ${port}`);
});
