import { Mail, InboxItem } from "structs";
import { faker } from "@faker-js/faker";

export const INBOX: InboxItem[] = [];

export function createInboxItems(): InboxItem {
  return {
    id: faker.datatype.uuid(),
    sender: faker.internet.email(),
    senderName: faker.name.fullName(),
    recipient: faker.internet.email(),
    subject: faker.lorem.sentence(),
    preview: faker.lorem.sentences(),
    dateCreated: faker.date.past(),
    seen: faker.datatype.boolean(),
  };
}

Array.from({ length: 50 }).forEach(() => {
  INBOX.push(createInboxItems());
});
