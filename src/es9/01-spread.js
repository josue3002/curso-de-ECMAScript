const user = {
    userName: "milortjem",
    age: 18,
    country: "VZ"
};

const { userName, ...values } = user;
console.log(userName);
console.log(values);