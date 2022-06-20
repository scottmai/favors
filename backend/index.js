const express = require('express');
const { initDatabase, getCollection } = require('./db');
const app = express();

app.get('/vouchers', async (req, res) => {
    const client = await initDatabase();
    const collection = await getCollection(client);
    const vouchers = await collection.find({ recipient: 'dhivs' }).toArray();

    const json = vouchers.map(v => ({
        id: String(v._id),
        title: v.title,
        image: v.image,
    }))
    console.log({ json })
    res.json({ vouchers: json });
});

app.listen(8000, () => console.log('Example app is listening on port 8000.'));
