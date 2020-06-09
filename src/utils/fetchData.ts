interface ServerResponse {
  data: ServerData;
}

interface ServerData {
  foo: string;
  bar: number;
}

const fetchData = async (dispatch: any) => {
  let word;

  await fetch('https://wordsapiv1.p.rapidapi.com/words/?random=true', {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
      'x-rapidapi-key': '029c4dacf9msh8fb083132a8f5bep12138cjsn16cc5e4cae41',
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      word = data.word;
      dispatch({
        type: 'SET_WORD',
        payload: data.word.toUpperCase(),
      });
    })
    .then(() => {
      dispatch({
        type: 'SET_LOADING',
        payload: false,
      });
    })
    .catch((err) => {
      console.log(err);
    });

  return word;
};

export default fetchData;
