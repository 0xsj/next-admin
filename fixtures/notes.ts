import { Note } from "structs";
import { LoremIpsum } from "lorem-ipsum";
const DATA: Array<Note> = [];

const lore = new LoremIpsum({
  sentencesPerParagraph: {
    max: 10,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});
for (let i = 0; i < 50; ++i) {
  DATA.push({
    id: i.toString(),
    title: "lorem ipsum",
    body: lore.generateParagraphs(1),
  });
}

export default DATA;
