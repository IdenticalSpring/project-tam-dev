export interface Account {
  accountId: number;
  email: string;
  password: string;
  fullname: string;
  image?: string;
  phone: string;
  dob: Date;
  gender: string;
  address: string;
  role: string;
  isBan: boolean;
  comments: Comment[];
  notifications: Notification[];
  // orders: Order[];
  // rooms: Room[];
}
