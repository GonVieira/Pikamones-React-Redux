import axios from "axios";
const initialState = {
  pikamones: [],
  currentPikamones: [],
};
let numberOfPikamones = 386;

console.log("Beginning initial state");
for (let i = 1; i <= numberOfPikamones; i++) {
  let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`);
  initialState.pikamones.push(res.data);
}

console.log("Ending initial state");

export default initialState;
