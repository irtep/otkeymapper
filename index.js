//console.log('kämppä 0, uusi ', uusi.Apartments.Apartment[0]);
//console.log('kämppä 0, vanha ', vanha.Apartments.Apartment[0]);
console.log('vanhat ', vanha);
console.log('uudet ', uusi);



const datamesta = document.getElementById('datat');
const vanhat = vanha.Apartments.Apartment;
const uudet = uusi.Apartments.Apartment;
//console.log('uudet', uudet[0].RentPerMonth);
//console.log('vanhat', vanhat[0].RentPerMonth.__text);
// tänne parit
const mapping = [];
const usedNewKeys = [];

// käy läpi vanhat
vanhat.forEach((item, i) => {
  const pari = {vanhaKey: null, uusiKey: null};

  /*
  Lisätään kerros
  */

  for (let j = 0; j < uudet.length; j++) {
    if (!usedNewKeys.includes(uudet[j].Key) &&
        item.StreetAddress === uudet[j].StreetAddress &&
        item.RoomTypes === uudet[j].RoomTypes &&
        item.RentPerMonth.__text === uudet[j].RentPerMonth) {

        let isUsed = false;

        pari.vanhaKey = item.Key;
        pari.uusiKey = uudet[j].Key

        usedNewKeys.push(uudet[j].Key);

          mapping.push(pari);
  //      console.log('match');
        break;
    }
  }
});

console.log('mapping: ', mapping);
mapping.forEach((item, i) => {
  datamesta.innerHTML += `<br/> ${item.vanhaKey},${item.uusiKey}`;
});
