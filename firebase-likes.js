import {initializeApp} from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js';
import {getAuth,onAuthStateChanged,signInAnonymously} from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js';
import {collection,deleteDoc,doc,getFirestore,onSnapshot,serverTimestamp,setDoc} from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js';

const firebaseConfig={
  apiKey:'AIzaSyAOmMsu3z5n1Rs-bO30tAotXVdYjN1GL0g',
  authDomain:'sissyclara.firebaseapp.com',
  projectId:'sissyclara',
  storageBucket:'sissyclara.firebasestorage.app',
  messagingSenderId:'1016101768824',
  appId:'1:1016101768824:web:4db7759439e3fdd318a78d'
};

const app=initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);
let user=null;
let counts=new Map();
let mine=new Set();
let votes=[];

function rebuildLikes(){
  counts=new Map();mine=new Set();
  votes.forEach(data=>{const key=data.productId;if(!key)return;counts.set(key,(counts.get(key)||0)+1);if(data.userId===user?.uid)mine.add(key)});
}

function updateButtons(){
  document.querySelectorAll('[data-like-key]').forEach(button=>{
    const key=button.dataset.likeKey;
    button.querySelector('b').textContent=counts.get(key)||0;
    button.querySelector('span').textContent=mine.has(key)?'♥':'♡';
    button.classList.toggle('liked',mine.has(key));
    button.setAttribute('aria-pressed',String(mine.has(key)));
    const spanish=document.documentElement.lang==='es';
    button.setAttribute('aria-label',mine.has(key)?(spanish?'Quitar Me gusta':'Unlike'):(spanish?'Me gusta':'Like'));
    button.disabled=!user;
  });
  sortWishlistCards();
}

function sortWishlistCards(){
  const grid=document.querySelector('#itemGrid');if(!grid)return;
  const cards=[...grid.querySelectorAll('.item-card')];
  if(!cards.length||cards.some(card=>!card.querySelector('[data-like-key]')))return;
  cards.sort((a,b)=>{
    const aLikes=counts.get(a.querySelector('[data-like-key]').dataset.likeKey)||0;
    const bLikes=counts.get(b.querySelector('[data-like-key]').dataset.likeKey)||0;
    if(bLikes!==aLikes)return bLikes-aLikes;
    return Number(a.dataset.id.replace('wish-',''))-Number(b.dataset.id.replace('wish-',''));
  }).forEach(card=>grid.appendChild(card));
}

onAuthStateChanged(auth,current=>{user=current;rebuildLikes();updateButtons();if(!current)signInAnonymously(auth).catch(console.error)});

onSnapshot(collection(db,'likes'),snapshot=>{
  votes=snapshot.docs.map(vote=>vote.data());rebuildLikes();
  updateButtons();
},error=>console.error('Likes could not be loaded:',error));

document.addEventListener('closet:rendered',updateButtons);
document.addEventListener('click',async event=>{
  const button=event.target.closest('[data-like-key]');if(!button)return;
  event.preventDefault();event.stopPropagation();if(!user)return;
  button.disabled=true;const key=button.dataset.likeKey;const vote=doc(db,'likes',`${key}_${user.uid}`);
  try{if(mine.has(key))await deleteDoc(vote);else await setDoc(vote,{productId:key,userId:user.uid,createdAt:serverTimestamp()});}
  catch(error){console.error('Like could not be saved:',error);button.disabled=false;}
});

updateButtons();
