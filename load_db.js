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
            title: "One (1) Discord Kiss 😘",
            image: "https://c.tenor.com/XxeAtG5jd8sAAAAM/milk-and-mocha-bear-kiss.gif",
            recipient: 'dhivs',
            is_redeemed: false,
        },
        {
            title: "One (1) Giant Hug",
            image: "https://c.tenor.com/GwFP_tY-jmQAAAAM/hug-hugs-and-love.gif",
            recipient: 'dhivs',
            is_redeemed: false,
        },
        {
            title: "One (1) Python Script (that does anything you like)",
            image: "https://c.tenor.com/BoDofDkAurYAAAAC/peachcry-peachmad.gif",
            recipient: 'dhivs',
            is_redeemed: false,
        },
        {
            title: "One (1) Full body massage",
            image: "https://c.tenor.com/v5s1S21OfjsAAAAC/massage-cat-peachgoma.gif",
            recipient: 'dhivs',
            is_redeemed: false,
        },
        {
            title: "One (1) Road Trip",
            image: "https://c.tenor.com/M00Zqk6Dx7EAAAAi/peachcat-goma.gif",
            recipient: 'dhivs',
            is_redeemed: false,
        },
        {
            title: "One (1) New Squish bb",
            image: "https://c.tenor.com/7XCynZm3u3QAAAAC/goodnight.gif",
            recipient: 'dhivs',
            is_redeemed: false,
        },
        {
            title: "Binge one entire Kdrama together",
            image: "https://c.tenor.com/pcwjMPDBJWIAAAAM/mor-sukoon-mor-hitesh.gif",
            recipient: 'dhivs',
            is_redeemed: false,
        },
        {
            title: "One (1) Foot Massage",
            image: "https://c.tenor.com/4e3M7l4BligAAAAd/duck-paws.gif",
            recipient: 'dhivs',
            is_redeemed: false,
        },
        {
            title: "One (1) Dance Party",
            image: "https://c.tenor.com/ChR2YfU175MAAAAM/happy.gif",
            recipient: 'dhivs',
            is_redeemed: false,
        },
        {
            title: "Have Scottie read one book of your choosing",
            image: "https://i.pinimg.com/originals/80/22/b0/8022b01fdbcdb31c754ee50ed8001a47.gif",
            recipient: 'dhivs',
            is_redeemed: false,
        },
        {
            title: "One long nap",
            image: "https://i.pinimg.com/originals/a4/29/1d/a4291dceda7aa3faeda1900f62c290db.gif",
            recipient: 'dhivs',
            is_redeemed: false,
        },
        {
            title: "Have Scottie learn & play any song on guitar",
            image: "https://c.tenor.com/xT6MvZAHhWwAAAAi/bear-white-bear.gif",
            recipient: 'dhivs',
            is_redeemed: false,
        },
        {
            title: "One (1) Guitar Lesson",
            image: "https://c.tenor.com/C5J9ppsBaeMAAAAC/brown-bear.gif",
            recipient: 'dhivs',
            is_redeemed: false,
        },
        {
            title: "One (1) Driving Lesson",
            image: "https://c.tenor.com/79t5SN6m7T8AAAAi/tkthao219-bubududu.gif",
            recipient: 'dhivs',
            is_redeemed: false,
        },
        {
            title: "One (1) Chicken Tenders date",
            image: "https://c.tenor.com/7-9pd3dJTl4AAAAC/tkthao219-peach.gif",
            recipient: 'dhivs',
            is_redeemed: false,
        },
        {
            title: "One (1) Spa Day",
            image: "https://c.tenor.com/M9qLGyjILxcAAAAi/peach-cat.gif",
            recipient: 'dhivs',
            is_redeemed: false,
        },
        {
            title: "One Professional Couple's Massage",
            image: "https://c.tenor.com/mdBgoiML-AkAAAAi/massage-couple.gif",
            recipient: 'dhivs',
            is_redeemed: false,
        },
        {
            title: "Have Scottie narrate a fanfic",
            image: "https://c.tenor.com/akBy6qWGjs4AAAAi/peach-cat-mochi-peach-cat.gif",
            recipient: 'dhivs',
            is_redeemed: false,
        },
        {
            title: "One Happy Ending Massage",
            image: "https://c.tenor.com/2c9m2eK1_74AAAAC/cute-cat.gif",
            recipient: 'dhivs',
            is_redeemed: false,
        },
        {
            title: "Cuddles",
            image: "https://c.tenor.com/-yQr4mYAmL4AAAAC/lovely-cats.gif",
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