// สร้าง type ของ object ที่จะใช้
import { Organizer } from './organizer';
export interface Event { 
  id          : number; 
  category    : string; 
  title       : string; 
  description : string; 
  location    : string; 
  date        : string;  
  time        : string; 
  petsAllowed : boolean; 
  organizer   : Organizer; 
}
