// สร้าง type ของ object ที่จะใช้ แต่ว่าเรา ย้าย type ไปไว้ที่ eventService.ts เราก็ต้อง import เข้ามา 
import type { Event } from '../models/event.ts';

import * as repo from '../repository/eventRepository.js';

export function getEventByCategory(category: string): Promise<Event[]> {
  return repo.getEventByCategory(category);
}

export function getAllEvents(): Promise<Event[]> {
  return repo.getAllEvents();
}

export function getEventById(id: number): Promise<Event | undefined> {
  return repo.getEventById(id);
}

export function addEvent(newEvent: Event): Promise<Event> {
  return repo.addEvent(newEvent);
}