export interface Note {
  id: string;
  title: string;
  body: string;
}

export interface Inbox {
  id: string | number;
  user_id: string | number;
  inbox: InboxItem[];
}
export interface InboxItem {
  id: string | number;
  subject: string;
  body: string;
  dateCreated: any;
}
