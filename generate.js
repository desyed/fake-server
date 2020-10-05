var faker = require('faker');

var database = {
    users: [],
    products: []
};

for (var i = 1; i <= 50; i++) {
    database.users.push({
        id: i,
        name: faker.name.findName(),
        email: faker.internet.email,
        avatar: faker.internet.avatar(),
        job: faker.name.jobTitle(),
    });
    database.products.push({
        id: i,
        name: faker.commerce.productName(),
        description: faker.lorem.sentences(),
        price: faker.commerce.price(),
        imageUrl: "https://source.unsplash.com/1600x900/?product",
        quantity: faker.random.number()
    });
}

console.log(JSON.stringify(database));