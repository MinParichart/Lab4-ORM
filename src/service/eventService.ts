// สร้าง type ของ object ที่จะใช้ แต่ว่าเรา ย้าย type ไปไว้ที่ eventService.ts เราก็ต้อง import เข้ามา 
import type { Event } from '../models/event.ts';

import {
  addEvent as addNewEvent,
  getAllEvents as allEvents,
  getEventByCategory as eventByCategory,
  getEventById as eventById
} from '../repository/eventRepository.js';

export function getEventByCategory(category: string): Promise<Event[]> {
  return eventByCategory(category);
}

export function getAllEvents(): Promise<Event[]> {
  return allEvents();
}

export function getEventById(id: number): Promise<Event | undefined> {
  return eventById(id);
}

export function addEvent(newEvent: Event): Promise<Event> {
  return addNewEvent(newEvent);
}