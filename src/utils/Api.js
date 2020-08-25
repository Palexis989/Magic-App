import Axios from 'axios';

const axiosInstance = Axios.create({

  baseURL: 'https://api.scryfall.com',

  headers: {

    Accept: 'application/json',

    'Content-Type': 'application/json',

  },

});


export async function getRandomCards() {

  return axiosInstance.get('/cards/random');

}

export async function getCardDetails(id) {
  return axiosInstance.get(`/cards/${id}`);
}

export async function getFuzzyNameCard(value) {
  return axiosInstance.get(`/cards/named?fuzzy=${value}`);
}

export async function getAllPrints(allPrints) {
  return fetch(allPrints)
    .then(response => response.json())
}