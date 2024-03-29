const express = require('express')
const bodyParser = require('body-parser');
const axios = require('axios')

const app = express();
app.use(express.json())
app.use(bodyParser.json())

const events = []

app.post('/events', (req, res) => {
    const event = req.body;

    events.push(event);

    axios.post('http://posts-clusterip-srv:4000/events', event);
    axios.post('http://comments-srv:4040/events', event);
    axios.post('http://query-srv:4002/events', event);
    axios.post('http://moderation-srv:4003/events', event);

    res.send({ status: "ok" })
});

app.get('/events', (req, res) => {
    res.send(events)
})
 
app.listen(4005, ()=>{
    console.log("Event-Bus Server running at port 4005..");
})
