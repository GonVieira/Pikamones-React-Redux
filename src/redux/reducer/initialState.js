const initialState = [];
let numberOfPikamones = 55;

for (let i = 1; i <= numberOfPikamones; i++) {
  let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`);
  initialState.push(res.data);
}

export default initialState;