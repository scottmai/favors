const express = require('express');
const { initDatabase, getCollection } = require('./db');
const cors = require('cors');
const { ObjectId } = require('mongodb');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('/vouchers', async (req, res) => {
    const client = await initDatabase();
    const collection = await getCollection(client);
    const vouchers = await collection.find({ recipient: 'dhivs' }).toArray();

    const json = vouchers.map(v => ({
        id: String(v._id),
        title: v.title,
        image: v.image,
    }))
    // console.log({ json })
    client.close();
    res.json(json);
});

app.post('/redeem/:id', async (req, res) => {
    const voucherId = req.params.id;

    const client = await initDatabase();
    const collection = await getCollection(client);
    const result = await collection.updateOne({ recipient: 'dhivs', _id: ObjectId(voucherId) }, { $set: { is_redeemed: true } })
    console.log(
        `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
    );
    client.close();
    res.json({})
});

app.listen(process.env.PORT || 8000, () => console.log('Example app is listening on port ' + (process.env.PORT || '8000')));
