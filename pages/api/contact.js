import { MongoClient } from "mongodb";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;

        if (!email ||
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !message ||
            message.trim() === '') {
            res.status(422).json({ message: 'Invalid input.' });
            return;
        }

        // store the data in a database
        const newMessage = {
            email,
            name,
            message
        };

        let client;
        const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.dqvzjc8.mongodb.net/${process.env.mongodb_database}`;

        try {
            client = await MongoClient.connect(connectionString);
        } catch (error) {
            res.status(500).json({ message: 'Could not connect to database.' });
        }

        const db = client.db();
        try {
            const result = await db.collection('messages').insertOne(newMessage);
            newMessage._id = result.insertedId;
        } catch (error) {
            client.close();
            res.status(500).json({ message: 'Could not store message.' });
        }

        client.close();

        res.status(201).json({ message: 'Message stored.', body: newMessage  });
    }
};

export default handler;