const findIndexOfCharacter = (letter: string, word: string) => {
  const indices = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) indices.push(i);
  }

  return indices;
};

export default findIndexOfCharacter;
