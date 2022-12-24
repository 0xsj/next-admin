export interface Note {
  id: string;
  title: string;
  body: string;
}

export interface InboxItem {
  id: string;
  sender: string;
  recipient: string;
  subject: string | Mail["subject"];
  preview: string;
  dateCreated: string | any | Mail["dateCreated"];
  seen: boolean;
  type?: "notification" | "subscription";
}

export interface Mail {
  id: string | number | any;
  sender: string;
  recipient: string | User;
  subject: string;
  body: string;
  dateCreated: any;
  sign: string | any;
}

export interface User {
  id: string;
  name: string;
  email: string;
}
