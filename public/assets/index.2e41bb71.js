import{r as d,R as u,u as j,s as e,j as n,a as i,b as E,F as b,c as w,g as T}from"./index.78a7a18d.js";function S(t=u){const r=t===u?j:()=>d.exports.useContext(t);return function(){const{store:l}=r();return l}}const D=S();function P(t=u){const r=t===u?D:S(t);return function(){return r().dispatch}}const k=P(),z={electric:"linear-gradient(to left top, #F7D02C, #f7ce2ca1);",fire:"linear-gradient( to left top, #EE8130, #ee823078);",water:"linear-gradient( to left top, #6390F0, #6390f08c);",ghost:"linear-gradient( to left top, #735797, #73579756);",psychic:"linear-gradient( to left top, #F95587, #f955868e);",grass:"linear-gradient( to left top, #7AC74C, #79c74c8b);",normal:"linear-gradient( to left top, #A8A77A, #a8a77a9c);",fighting:"linear-gradient( to left top, #C22E28, #c22d288d);",flying:"linear-gradient( to left top, #A98FF3, #aa8ff3a9);",poison:"linear-gradient( to left top, #A33EA1, #a33ea190);",ground:"linear-gradient( to left top, #E2BF65, #e2bf6590);",rock:"linear-gradient( to left top, #B6A136, #b6a136a4);",bug:"linear-gradient( to left top, #A6B91A, #a6b91a68);",steel:"linear-gradient( to left top, #B7B7CE, #b7b7ce6b);",ice:"linear-gradient( to left top, #96D9D6, #96d9d68a);",dragon:"linear-gradient( to left top, #6F35FC, #6d35fc90);",dark:"linear-gradient( to left top, #705746, #70574688);",fairy:"linear-gradient( to left top, #D685AD, #d685ad8f);"},N=e.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  margin: 8px;
  width: 360px;
  height: 550px;
  border-radius: 5px;
  background: ${({type:t})=>z[t]};

  @media (max-width: 400px) {
    scale: 0.8;
    margin: 0px;
  }
`,B=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-width: 300px;
  min-height: 235px;
`,I=e.img`
  justify-self: center;
  width: 80%;
  height: 90%;
`,V=e.p`
  text-transform: capitalize;
  font-size: 28px;
  font-weight: 900;
  padding: 5px;
`,H=e.div`
  display: flex;
  justify-content: flex-end;
  height: 15%;
  width: 100%;
  position: relative;
`,L=e.div`
  display: flex;
  padding: 5px;
  background-color: black;
  border-radius: 5px;
  margin-right: 35px;
  position: absolute;
  padding: 5px;
`,R=e.p`
  color: #f4f4f4;
  font-size: 18px;
  text-transform: uppercase;
`,_=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  padding: 12px;
  width: 90%;
  height: 75%;
  margin-bottom: 20px;
`,O=e.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  line-height: 15px;
  margin-right: 50px;
`,K=e.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,y=e.p`
  margin-right: 8px;
  text-transform: uppercase;
  font-size: 13px;
`,M=e.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,h=e.p`
  font-weight: 900;
  font-size: 13px;
`,$=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
`,G=e.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 5px;
  line-height: 20px;
  padding: 10px 30px;

  @media (max-width: 400px) {
    padding: 10px 10px;
  }
`,W=e.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`,q=e.p`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
`,J=e.span`
  align-self: center;
  text-transform: capitalize;
  font-weight: 900;
`,Q=e.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`,U=e.p`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-size: 13px;
`,X=e.span`
  align-self: center;
  text-transform: capitalize;
  font-weight: 900;
  font-size: 13px;
`,Y=({poke:t})=>{const[r,c]=d.exports.useState([]),[l,a]=d.exports.useState([]);return d.exports.useEffect(()=>{async function s(){let o=await E.get("https://pokeapi.co/api/v2/stat?limit=6");c(o.data.results)}s()},[]),d.exports.useEffect(()=>{(()=>{let o=[];t.stats.map(p=>{o.push(p.base_stat)}),a(o)})()},[]),n(N,{type:t.types[0].type.name,children:[i(B,{children:i(I,{src:t.sprites.versions["generation-v"]["black-white"].animated.front_default,alt:"Pokemon image"})}),i(H,{children:i(L,{children:i(R,{children:t.types[0].type.name})})}),n(_,{children:[i($,{children:i(V,{children:t.name})}),n(O,{children:[n(K,{children:[r.map(s=>n(y,{children:[s.name,":"]})),i(y,{children:"Height:"}),i(y,{children:"Weigth:"})]}),n(M,{children:[l.map((s,o)=>o===5?n(h,{children:[s," m/s"]}):i(h,{children:s})),n(h,{children:[t.height," m"]}),n(h,{children:[t.weight," Kg"]})]})]}),n(G,{children:[i(W,{children:n(q,{children:["Ability: ",i(J,{children:t.abilities[0].ability.name})]})}),i(Q,{children:n(U,{children:["Hidden Ability:"," ",i(X,{children:t.abilities.length===1?"-":t.abilities[1].ability.name})]})})]})]})]})},Z=e.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%
`,A=e.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    border:none;
    background: none;
    color: #FF003C;
    cursor: pointer;
    &:hover {
        color: #04DAF6;
    }
`,tt=e.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    padding: 0px 5px;
    color: #FF003C;
`,et=({currentPage:t,setCurrentPage:r,postsPerPage:c,totalPosts:l})=>{const a=[];for(let p=1;p<=Math.ceil(l/c);p++)a.push(p);const s=()=>{t>1&&r(t-1)},o=()=>{t<a.length&&r(t+1)};return i(b,{children:n(Z,{children:[t!==1&&i(A,{onClick:s,children:"<"}),n(tt,{children:[t,"/",a.length]}),t<a.length&&i(A,{onClick:o,children:">"})]})})},it=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
  width: 90%;
  height: 100%;
  width: 100%;
  margin: 10px;

  @media (max-width: 400px) {
    margin: 0px;
    width: 50%;
    padding: 0px;
  }
`,nt=e.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`,at=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;

  @media (max-width: 400px) {
    width: 80%;
    height: 80%;
  }
`,st=e.h1`
  font-size: 20px;
  color: white;
`,rt=e.img`
  width: 100%;
  height: 100%;
`,lt=t=>{const[r,c]=d.exports.useState(1),[l]=d.exports.useState(9),a=w(f=>f.pikamones),s=w(f=>f.currentPikamones),o=k(),[p,g]=d.exports.useState(!1);d.exports.useEffect(()=>{c(1);const f=()=>{g(!1);let m=[];for(let x=0;x<a.length;x++)a[x].types[0].type.name===t.optionSelected&&m.push(a[x]),a[x].types[1]!==void 0&&a[x].types[1].type.name===t.optionSelected&&m.push(a[x]);o({type:"SET_FILTERED_PIKAMONES",payload:m}),setTimeout(()=>g(!0),4e3)};t.optionSelected==="All"||t.optionSelected===void 0?(g(!1),o({type:"SET_FILTERED_PIKAMONES",payload:a}),setTimeout(()=>g(!0),4e3)):f()},[t]);const C=r*l,v=C-l,F=s.slice(v,C);return i(b,{children:p?n(b,{children:[i(it,{children:F.map(f=>i(Y,{poke:f}))}),i(nt,{children:i(et,{currentPage:r,setCurrentPage:c,postsPerPage:l,totalPosts:s.length})})]}):n(at,{children:[i(st,{children:"LOADING..."}),i(rt,{src:T,alt:"loading..."})]})})};export{lt as default};
