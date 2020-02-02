import { addNewContact, getContact, getContactById, updateContactById, deleteContactById } from '../controllers/crmController';
import config from '../config';

const logger = config.logger;

const routes = (app) => {
    app.route('/contact')
    .get(getContact)
    .post(addNewContact);

    app.route('/contact/:contactId')
    .get((req, res, next) => {
        // logger.info('req is', req);
        next();
    }, getContactById)
    .put(updateContactById)  
    .delete(deleteContactById)  
}

export default routes;