const express = require('express');
const { initDatabase, getCollection } = require('./db');
const cors = require('cors');
const { ObjectId } = require('mongodb');
const path = require('path');
var nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'frontend/build')));

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'maiscottie@gmail.com',
        pass: process.env.DHIVS_EMAIL_APP_PASS,
    }
});

app.get('/vouchers', async (req, res) => {
    const client = await initDatabase();
    const collection = await getCollection(client);
    const vouchers = await collection.find({ recipient: 'dhivs' }).toArray();

    const json = vouchers.map(v => ({
        id: String(v._id),
        title: v.title,
        image: v.image,
        is_redeemed: v.is_redeemed,
    }))
    client.close();
    res.json(json);
});

app.post('/redeem/:id', async (req, res) => {
    const voucherId = req.params.id;

    const client = await initDatabase();
    const collection = await getCollection(client);
    const result = await collection.findOneAndUpdate({ recipient: 'dhivs', _id: ObjectId(voucherId) }, { $set: { is_redeemed: true } })
    if (!result) {
        console.log("no matching voucher found with id: " + voucherId)
        return
    }
    const voucher = result.value
    console.log("Found matching voucher: " + voucher.title)

    const sendInfo = await transporter.sendMail({
        from: 'dhivbot@gmail.com',
        to: 'scottmai702@gmail.com',
        subject: 'Dhivs has redeemed a voucher!',
        text: `Dhivs redeemed voucher #${voucherId}: ${voucher.title}`
    })

    console.log({ sendInfo })


    client.close();
    res.json({})
});

app.listen(process.env.PORT || 8000, () => console.log('Example app is listening on port ' + (process.env.PORT || '8000')));
