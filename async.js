console.log('person1: show ticket');
console.log('person2: show ticket');

const preMovie = async () => {
  const promiseWifeBringTicks = new Promise((resolve, reject) => {
    setTimeout(() => { resolve('ticket') }, 3000)
  });
  let ticket = await promiseWifeBringTicks;
  console.log(`i have the ${ticket} but...`);
  console.log('Get some popcorn for me');

  const getpopcorn = new Promise((resolve, reject) => {
    resolve('popcorn');
  })
  let popcorn = await getpopcorn;
  console.log(`ohk i get ${popcorn} let's go`);
  console.log('not,i need waterbottle');

  let addbottle = new Promise((resolve, reject) => {
    resolve('bottle');
  })
  let bottle = await addbottle;
  console.log(`so finally i get one ${bottle}`);
  console.log('wait... we forget colddrink');

  const coldDrink = new Promise((resolve, reject) => {
    resolve('ColdDrink');
  })
  let drink = await coldDrink;
  console.log(`i brought this and this is last ${drink}`);

  return ticket;
}

preMovie().then((m) => console.log(`person3 : show the ${m}`));



console.log('person4: show ticket');
console.log('person5: show ticket');