module.exports = function print(message) {

    const stars = "*".repeat(message.length);

    console.log(stars);
    console.log(message);
    console.log(stars);
}