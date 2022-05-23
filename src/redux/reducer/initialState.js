import axios from "axios";
const initialState = {
  pikamones: [],
  currentPikamones: [],
};
let numberOfPikamones = 386;

for (let i = 1; i <= numberOfPikamones; i++) {
  let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`);
  initialState.pikamones.push(res.data);
}

export default initialState;
