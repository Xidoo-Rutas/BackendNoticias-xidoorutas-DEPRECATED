const user = 'noticias'
const cluster = 'noticias'
const pass = 'NoticiasXidoo';
const db = 'noticias';
const URI = `mongodb+srv://${user}:${pass}@${cluster}.rs6fusv.mongodb.net/${db}?retryWrites=true&w=majority`;

module.exports = {
    db,
    URI
}
