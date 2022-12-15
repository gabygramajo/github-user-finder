const inputSearch = document.querySelector("#input-search");
const btnSearch = document.querySelector("#btn-search");
const avatarImg = document.querySelector(".avatar__img");
const userName = document.querySelector(".title-user-name");
const bio = document.querySelector(".bio");
const publicRepo = document.querySelector("#public-repo");
const followers = document.querySelector("#followers");
const following = document.querySelector("#following");
const API = "https://api.github.com"

async function fetchData(url, nickname) {
  const response = await fetch(`${url}/users/${nickname}`);
    
  if(response.status === 200) {
    const data = await response.json();
    return data;
  }
  
} 

async function getData() {
  const nickname = inputSearch.value.trim();
  try {
    const userData = await fetchData(API, nickname);  
    renderData(userData);
  } catch (err) {
    alert('No se pudo encontrar el usuario');
  }
}
function renderData(userData) {
  userName.textContent = userData.name;
  avatarImg.src = userData.avatar_url;
  bio.textContent = userData.bio;
  publicRepo.textContent = userData.public_repos;
  followers.textContent = userData.followers;
  following.textContent = userData.following;
}
btnSearch.addEventListener('click', getData);