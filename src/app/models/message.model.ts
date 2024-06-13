import { Room } from './room.model';

export interface Message {
  messageId: number;
  senderId: number;
  receiverId?: number;
  content: string;
  timestamp: Date;
  roomId: number;
  room: Room;
}
