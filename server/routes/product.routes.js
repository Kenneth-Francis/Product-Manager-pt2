const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get(   '/api/products',     ProductController.getAll);
    app.get(   '/api/products/:id', ProductController.getOne);
    app.patch( '/api/products/:id', ProductController.updateOne);
    app.post(  '/api/products',     ProductController.createOne);
    app.delete('/api/products/:id', ProductController.deleteOne);
}
