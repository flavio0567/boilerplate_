// ===== routes.JS ===========//
// ======date:           ====//
// 
const path = require('path');
const product = require('../controllers/product.js');

module.exports = function(app){
    app
    .get('/products/list', (req, res) => {
        product.list(req, res)})
    .get('/products/:id', (req, res) => {
        product.getProductById(req, res)})
    .post('/products/new', (req, res) => {
        product.new(req, res)})
    .put('/products/edit', (req, res) => {
        product.update(req, res)})
    .delete('/delete/:id', (req, res) => {
        product.destroy(req, res)})
    .all("*", (req, res) => { 
        res.sendFile(path.resolve('../ppm/public/dist/index.html'))})
}