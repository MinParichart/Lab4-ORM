import express, { Request, Response } from 'express'
const app = express()
const port = 3000
app.use(express.json())

app.get('/', (req : Request, res : Response) => { 
  res.send('Hello World')
})

app.get('/test', (req,res) => { // localhost:3000/test
  let returnObj = { 
    name : 'test', 
    age : 20, 
    address : 'Thai'
  }
  res.send(returnObj)
})

// แสดง events โดยแยก category // localhost:3000/events?category=Sports
// app.get("/events", (req, res) => { 
//   const category = req.query.category;
//   const filteredEvents = events.filter((event) => event.category === category);
//   res.json(filteredEvents);
// });

// แสดง events ทั้งหมด // localhost:3000/events
// app.get('/events', (req : Request, res : Response) => { 
//   res.json(events)
// })

// แสดง events ทั้งหมด // localhost:3000/events
// แสดง events โดยแยก category // localhost:3000/events?category=Sports
app.get("/events", (req, res) => {
  if (req.query.category) {
  const category = req.query.category;
  const filteredEvents = events.filter((event) => event.category === category);
  res.json(filteredEvents);
  } else {
  res.json(events);
  }
});

app.get("/events/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const event = events.find((event) => event.id === id);
  if (event) {
  res.json(event);
  } else {
  res.status(404).send("Event not found");
  }
}); 

app.post("/events", (req, res) => {
  const newEvent : Event = req.body;
  newEvent.id = events.length + 1;
  events.push(newEvent);
  res.json(newEvent);
});

app.listen(port, () => { 
  console.log((`App listening at http://localhost:${port}`))
})


// สร้าง type ของ object ที่จะใช้
interface Event { 
  id          : number; 
  category    : string; 
  title       : string; 
  description : string; 
  location   : string; 
  date        : string;  
  time         : string; 
  petsAllowed : boolean; 
  organizer   : string; 
}

// สร้าง ตัวแปร events เพื่อเก็บข้อมูล list ของ event
const events : Event [] = [
  {
    id: 1,
    category: "Music",
    title: "Concert",
    description: "A live concert",
    location: "London",
    date: "2021-07-01",
    time: "19:00",
    petsAllowed: false,
    organizer: "Live Nation",
  },
  {
    id: 2,
    category: "Music",
    title: "Festival",
    description: "A music festival",
    location: "Manchester",
    date: "2021-07-15",
    time: "12:00",
    petsAllowed: true,
    organizer: "Festival Republic",
  },
  {
    id: 3,
    category: "Music",
    title: "Gig",
    description: "A gig",
    location: "Birmingham",
    date: "2021-07-30",
    time: "20:00",
    petsAllowed: true,
    organizer: "Academy Music Group",
  },
  {
    id: 4,
    category: "Sports",
    title: "Football Match",
    description: "A live football match",
    location: "London",
    date: "2021-07-01",
    time: "19:00",
    petsAllowed: false,
    organizer: "Premier League",
  },
  {
    id: 5,
    category: "Music",
    title: "Festival",
    description: "A music festival",
    location: "Manchester",
    date: "2021-07-15",
    time: "12:00",
    petsAllowed: true,
    organizer: "Festival Republic",
  },
  {
    id: 6,
    category: "Music",
    title: "Gig",
    description: "A gig",
    location: "Birmingham",
    date: "2021-07-30",
    time: "20:00",
    petsAllowed: true,
    organizer: "Academy Music Group",
  },
]

