export type QueryResults = ReadonlyArray<{
  title: string;
  text: string;
  time: string;
  hash: string;
}>;

const mockResults: QueryResults = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    text: "And who owned that wand?",
    time: "00:27:55-00:28:10",
    hash: "2cf24dba5fb0a30e26e83b2ac5b9e29e",
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    text: "And who owned that wand?",
    time: "00:27:55-00:28:10",
    hash: "2cf24dba5fb0a30e26e83b2ac5b9e29e",
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    text: "And who owned that wand?",
    time: "00:27:55-00:28:10",
    hash: "2cf24dba5fb0a30e26e83b2ac5b9e29e",
  },
];

export { mockResults };
