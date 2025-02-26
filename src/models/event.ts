// สร้าง type ของ object ที่จะใช้
import { Organizer } from './organizer';
import { Participant } from './participant';
export interface Event { 
  id?          : number; 
  category?    : string; 
  title?       : string; 
  description? : string; 
  location?    : string; 
  date?        : string;  
  time?        : string; 
  petsAllowed? : boolean; 
  organizer?   : Organizer | null; 
  organizerId? : number | null;
  participants?: Participant[]; 
}
