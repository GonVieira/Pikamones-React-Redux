import axios from "axios";
const initialState = [];
let numberOfPikamones = 151;

for (let i = 1; i <= numberOfPikamones; i++) {
  let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`);
  initialState.push(res.data);
}

export default initialState;
