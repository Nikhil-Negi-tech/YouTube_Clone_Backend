import express from 'express';
import { login } from '../controllers/auth.js';
import { updateChannelData , getAllChannel } from '../controllers/channel.js';

const routes = express.Router();
routes.post('/login', login);
routes.patch('/update/:id',updateChannelData);
routes.get('/getAllChannel',getAllChannel)

export default routes;