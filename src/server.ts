import express, { Request, Response } from 'express';
import type { Event } from './models/event.ts';
import {
  addEvent, getAllEvents,
  getEventByCategory,
  getEventById
} from './service/eventService';

const app = express()
const port = 3000
app.use(express.json())


app.get('/', async (req : Request, res : Response) => { 
  res.send(await 'Hello World')
})

// แสดง events ทั้งหมด // localhost:3000/events
// แสดง events โดยแยก category // localhost:3000/events?category=Sports
app.get("/events", async (req, res) => {
  if (req.query.category) {
  const category = req.query.category;
  const filteredEvents = await getEventByCategory(category as string);
  res.json(filteredEvents);
  } else {
  res.json(await getAllEvents());
  }
});

// แสดง events ตาม id ที่เราส่งไป // localhost:3000/5
app.get("/events/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const event = await getEventById(id)
  if (event) {
  res.json((event)); // ก็คือ เอา id ที่ส่งไป มาเก็บไว้ใน ตัวแปร event แล้วส่งไฟล์ json ของ event ที่ id = 5
  } else {
  res.status(404).send("Event not found");
  }
}); 

// เพิ่มข้อมูล events โดย meothod POST // localhost:3000
app.post("/events", async (req, res) => {
  const newEvent : Event = req.body;
  await addEvent(newEvent);
  res.json(newEvent);
});

app.listen(port, () => { 
  console.log((`App listening at http://localhost:${port}`))
})

