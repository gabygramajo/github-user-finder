const form = document.querySelector(".searcher");
const inputSearch = document.querySelector("#input-search");
const btnSearch = document.querySelector("#btn-search");
const avatarImg = document.querySelector(".avatar__img");
const userName = document.querySelector(".title-user-name");
const bio = document.querySelector(".bio");
const publicRepo = document.querySelector("#public-repo");
const followers = document.querySelector("#followers");
const following = document.querySelector("#following");
const API = "https://api.github.com";

async function fetchData(url, nickname) {
  const response = await fetch(`${url}/users/${nickname}`);
    
  if(response.status === 200) {
    const data = await response.json();
    return data;
  }
  
} 

async function getData(event) {

  if(inputSearch.value === '') 
    return 

  const nickname = inputSearch.value.trim();
  try {
    const userData = await fetchData(API, nickname);  
    renderData(userData);
  } catch (err) {
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.classList.remove('inactive');
  }
  inputSearch.value = "";
}
function renderData(userData) {
  userName.textContent = userData.name;
  avatarImg.src = userData.avatar_url;
  bio.textContent = userData.bio;
  publicRepo.textContent = userData.public_repos;
  followers.textContent = userData.followers;
  following.textContent = userData.following;
}
function keyEvent (key) {
  if(key.code === 'Enter')
    getData();
}

form.addEventListener('submit', (event) => {
  // avoid recharging
  event.preventDefault();
});
btnSearch.addEventListener('click', getData);
inputSearch.addEventListener('keypress', keyEvent)