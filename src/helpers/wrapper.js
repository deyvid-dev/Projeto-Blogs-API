// const { BlogPost, User, Category } = require('../database/models');

// (async () => {
//   const legal = await BlogPost
//   .findOne({ where: { id: 3 }, include: [{ model: User, as: 'user' }, { model: Category, as: 'categories' }] });
//   console.log(JSON.stringify(legal, null, 4));
//   await Category.findAll({ });
// })();

// const saida = {
//   id: 3,
//   title: 'Latest updates, August 1st',
//   content: 'The whole text for the blog post goes here in this key',
//   userId: 1,
//   published: '2022-05-18T18:00:01.000Z',
//   updated: '2022-05-18T18:07:32.000Z',
//   user: {
//     id: 1,
//     displayName: 'Lewis Hamilton',
//     email: 'lewishamilton@gmail.com',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg',
//   },
//   categories: [
//     {
//       id: 1,
//       name: 'Inovação',
//     },
//     {
//       id: 2,
//       name: 'Escola',
//     },
//   ],
// };