let data = [
  {
    id: 0,
    title: "White and Black",
    content: "Born in France",
    price: 120000
  },

  {
    id: 1,
    title: "Red Knit",
    content: "Born in Seoul",
    price: 110000
  },

  {
    id: 2,
    title: "Grey Yordan",
    content: "Born in the States",
    price: 130000
  }
];

let cartData = [
  { id: 0, name: 'White and Black', count: 2 },
  { id: 2, name: 'Grey Yordan', count: 1 }
] 

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { data, cartData }
