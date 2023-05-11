// arrays

let users = [
  {id: 1, year: 1998, engine: 1, name: "Tiko"},
  {id: 2, year: 2005, engine: 1.2, name: "Matiz"},
  {id: 3, year: 2010, engine: 1.6, name: "Gentra"},
  {id: 4, year: 2010, engine: 1.5, name: "Cobalt"},
  {id: 5, year: 2012, engine: 2, name: "Malibu"},
  {id: 6, year: 2000, engine: 1.2, name: "Damas"},
  {id: 7, year: 2018, engine: 2.4, name: "Tracker"},
];

let res1 = users.filter((v) => v.year < 2000);
let res2 = users.filter((v) => v.year > 2010);
let res3 = users.sort((a,b) => a.engine - b.engine);
let res4 = users.sort((a,b) => a.year - b.year);
let res5 = users.sort((a,b) => a.name.localeCompare(b.name))
let res6 = users.filter((v) => v.year < 2000);
let res7 = users.filter((v) => v.year > 2000 && v.year < 2010);
let res8 = users.filter((v) => v.year > 2010 && v.year < 2022);
let statuslar = {
  status: "eski ma'lumot",
  status2: "o'rta ma'lumot",
  status3: "yangi ma'lumot",
}
res6.push(statuslar.status);
res7.push(statuslar.status2);
res8.push(statuslar.status3);
console.log(res6);
console.log(res7);
console.log(res8);
