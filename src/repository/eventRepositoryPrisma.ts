import { PrismaClient } from '@prisma/client';
import type { Event } from '../models/event';


const prisma = new PrismaClient();

export function getEventByCategory(category: string) {
    return prisma.event.findMany({
        where: { category },
    });
}

export function getAllEvents() {
    return prisma.event.findMany();
}

export function getEventById(id: number) {
    return prisma.event.findUnique({
        where: { id },
    });
}

export function addEvent(newEvent: Event) {
    return prisma.event.create({
        data: {
            category: newEvent.category || '',
            title: newEvent.title || '',
            description: newEvent.description || '',
            location: newEvent.location || '',
            date: newEvent.date || '',
            time: newEvent.time || '',
            petsAllowed: newEvent.petsAllowed || false, 
        }
    });
}

// แสดงทั้งชื่อ organizer และ id ของ organizer
// export function getAllEventsWithOrganizer(){
//       return prisma.event.findMany({
//         include: { organizer : true }, 
//     })
// }

// แสดงแค่ชื่อ organizer ไม่แสดง id 
export function getAllEventsWithOrganizer(){
      return prisma.event.findMany({
        include: { 
            organizer : { 
                select : { 
                    name : true, 
                },
            },
        },
      });
    }

// แก้ไขส่วน findEventById ให้แสดงข้อมูลทั้งหมด 
// export function getEventByIdWithOrganizer(id: number){
//     return prisma.event.findUnique({
//         where : { id },
//         include: { 
//             organizer : { 
//                 select : {
//                     name : true,
//                 },
//             },
//          },
//     });
// } 

// แก้ไขส่วน findEventById ให้แสดงชื่อ เวลา และ organizer id เท่านั้น
export function getEventByIdWithOrganizer(id: number){
    return prisma.event.findUnique({
        where : { id },
        select : { 
            id : true, 
            title : true, 
            date : true, 
            organizer : { 
                select : { 
                    name : true, 
                },
            },
        },
    });
} 