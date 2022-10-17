function newUser(name, age, country) {
    var name = name || "Josue";
    var age = age || 18;
    var country = country || "Venezuela";
    console.log(name, age, country);
}

newUser();
newUser("Daniel", "20", "Colombia");

function newAdmin(name = "Josue", age = 18, country = "Venezuela") {
    console.log(name, age, country);
}
newAdmin();
newAdmin("Katherin", 18, "Venezuela");