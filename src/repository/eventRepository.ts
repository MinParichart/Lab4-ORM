import type { Event } from '../models/event';

export function getEventBycategory(category : string) : Promise<Event[]> { 
  const filterdEvents = events.filter((event) => event.category === category);
  return Promise.resolve(filterdEvents); 
}

export function getAllEvents() : Promise<Event[]> { 
  return Promise.resolve(events); 
}

export function getEventById(id : number) : Promise<Event | undefined> { 
  return Promise.resolve(events.find((event) => event.id === id)); 
}

export function addEvent(newEvent : Event) : Promise<Event> { 
  newEvent.id = events.length + 1; 
  events.push(newEvent); 
  return Promise.resolve(newEvent); 
}

const events : Event [] = [
  {
    id          : 1,
    category    : "Music",
    title       : "Concert",
    description : "A live concert",
    location    : "London",
    date        : "2021-07-01",
    time        : "19:00",
    petsAllowed : false,
    organizer   : "Live Nation",
  },
  {
    id: 2,
    category    : "Music",
    title       : "Festival",
    description : "A music festival",
    location    : "Manchester",
    date        : "2021-07-15",
    time        : "12:00",
    petsAllowed : true,
    organizer   : "Festival Republic",
  },
  {
    id          : 3,
    category    : "Music",
    title       : "Gig",
    description : "A gig",
    location    : "Birmingham",
    date        : "2021-07-30",
    time        : "20:00",
    petsAllowed : true,
    organizer   : "Academy Music Group",
  },
  {
    id          : 4,
    category    : "Sports",
    title       : "Football Match",
    description : "A live football match",
    location    : "London",
    date        : "2021-07-01",
    time        : "19:00",
    petsAllowed : false,
    organizer   : "Premier League",
  },
  {
    id: 5,
    category    : "Music",
    title       : "Festival",
    description : "A music festival",
    location    : "Manchester",
    date        : "2021-07-15",
    time        : "12:00",
    petsAllowed : true,
    organizer   : "Festival Republic",
  },
  {
    id          : 6,
    category    : "Music",
    title       : "Gig",
    description : "A gig",
    location    : "Birmingham",
    date        : "2021-07-30",
    time        : "20:00",
    petsAllowed : true,
    organizer   : "Academy Music Group",
  },
]
