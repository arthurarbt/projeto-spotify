import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://bfrarthur:120568@cluster0.honu6xu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotify");
