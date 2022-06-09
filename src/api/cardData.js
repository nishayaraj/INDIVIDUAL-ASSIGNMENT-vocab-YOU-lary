/* eslint-disable no-console */
import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// FIXME:  GET ALL CARDS
const getCards = (uid, category) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocabulary.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        const cards = Object.values(response.data);
        if (category) {
          resolve(cards.filter((card) => (card.category.toLowerCase() === category.toLowerCase())));
        }

        resolve(cards);
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

// FIXME: CREATE Cards
const createCard = (cardObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/vocabulary.json`, cardObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/vocabulary/${response.data.name}.json`, payload)
        .then(() => {
          getCards(cardObj.uid).then((data) => resolve(data));
        });
    }).catch(reject);
});

// FIXME: GET SINGLE Card
const getSingleCard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocabulary/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// FIXME: DELETE card
const deleteCard = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/vocabulary/${firebaseKey}.json`)
    .then(() => {
      getCards(uid)
        .then((cardsArray) => resolve(cardsArray));
    })
    .catch((error) => reject(error));
});

// FIXME: UPDATE card
const updateCard = (cardObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/vocabulary/${cardObj.firebaseKey}.json`, cardObj)
    .then(() => getCards(cardObj.uid)
      .then((data) => resolve(data)))
    .catch((error) => reject(error));
});

// const javaScript = (uid) => new Promise((resolve, reject) => {
//   getCards(uid)
//     .then((cardLanguage) => {
//       const jsCards = cardLanguage.filter((card) => card.category === '');
//       resolve(jsCards);
//     }).catch((error) => reject(error));
// });

export {
  getCards,
  createCard,
  getSingleCard,
  deleteCard,
  updateCard,
};
