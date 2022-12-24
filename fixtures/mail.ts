import { Mail } from "structs";
import { faker } from "@faker-js/faker";

export const MAIL: Mail[] = [];

export function createMail(): Mail {
  return {
    id: faker.datatype.uuid(),
    sender: faker.internet.email(),
    recipient: faker.internet.email(),
    subject: faker.lorem.sentence(),
    body: faker.lorem.paragraphs(),
    dateCreated: faker.date.past(),
    sign: "",
  };
}

Array.from({ length: 5 }).forEach(() => {
  MAIL.push(createMail());
});
