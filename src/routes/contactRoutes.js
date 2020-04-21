import { addNewContact } from '../controllers/contactController.js';

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // middleware   
            console.log(`Request from: ${req.orignalUrl}`)
            console.log(`Request type: ${req.method}`) 
            next();    
        }, (req, res, next) => {
                res.send('Get request was successful!')
            } 
        )

        .post(addNewContact);
        // res.send('Post request was successful'));
    
    app.route('/contact/contactID')
        .put((req, res) => 
        res.send('Update request was successful!'))

        .delete((req, res) =>
        res.send('Delete request was successful!'));
    
}
 export default routes;
