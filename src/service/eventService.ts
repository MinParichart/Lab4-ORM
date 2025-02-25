// สร้าง type ของ object ที่จะใช้ แต่ว่าเรา ย้าย type ไปไว้ที่ eventService.ts เราก็ต้อง import เข้ามา 
import type { Event } from '../models/event';

import * as repo from '../repository/eventRepositoryPrisma';

export function getEventByCategory(category: string){
  return repo.getEventByCategory(category);
}

export function getAllEvents(){
  return repo.getAllEvents();
}

export function getEventById(id: number){
  return repo.getEventById(id);
}

export function addEvent(newEvent: Event){
  return repo.addEvent(newEvent);
}