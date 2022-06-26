const { initDatabase, getCollection } = require('./db');

async function loadDb() {
    const client = await initDatabase();
    const collection = await getCollection(client);
    console.log('initialized db')

    await collection.deleteMany({});
    console.log('cleared db')

    // this option prevents additional documents from being inserted if one fails
    const options = { ordered: true };

    await collection.insertMany([
        {
            title: "One(1) Discord Kiss 😘",
            image: "https://c.tenor.com/XxeAtG5jd8sAAAAM/milk-and-mocha-bear-kiss.gif",
            recipient: 'dhivs',
            is_redeemed: false,
        },
        {
            title: "One(1) Hug",
            image: "https://media4.giphy.com/media/IzXiddo2twMmdmU8Lv/200.webp?cid=ecf05e47429s622142lril7crmxgdw4flqxwvdv20pt6ns5y&rid=200.webp&ct=g",
            recipient: 'dhivs',
            is_redeemed: false,
        },
        {
            title: "One(1) Python Script (that does anything you like)",
            image: "https://media4.giphy.com/media/IzXiddo2twMmdmU8Lv/200.webp?cid=ecf05e47429s622142lril7crmxgdw4flqxwvdv20pt6ns5y&rid=200.webp&ct=g",
            recipient: 'dhivs',
            is_redeemed: false,
        },
        {
            title: "3 free hug",
            image: "https://media4.giphy.com/media/IzXiddo2twMmdmU8Lv/200.webp?cid=ecf05e47429s622142lril7crmxgdw4flqxwvdv20pt6ns5y&rid=200.webp&ct=g",
            recipient: 'dhivs',
            is_redeemed: false,
        },
        {
            title: "4 free hug",
            image: "https://media4.giphy.com/media/IzXiddo2twMmdmU8Lv/200.webp?cid=ecf05e47429s622142lril7crmxgdw4flqxwvdv20pt6ns5y&rid=200.webp&ct=g",
            recipient: 'dhivs',
            is_redeemed: false,
        },
    ], options)
    console.log('inserted into db')

    const results = await collection.find({ recipient: 'dhivs' }).toArray()
    console.log({ results })
    // console.log(String(results[0]._id))

    client.close();
}


loadDb()