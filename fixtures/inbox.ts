import { InboxItem } from "structs";

export const inboxMock: InboxItem[] = [];

for (let i = 0; i < 10; i++) {
  inboxMock.push({
    id: i + 1,
    subject: `Subject ${i + 1}`,
    body: `Body of message ${i + 1}`,
    dateCreated: new Date(),
  });
}
