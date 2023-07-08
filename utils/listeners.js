import { ready } from '../listeners/ready.js';
import { error } from '../listeners/error.js';
import { interactionCreate } from '../listeners/interactionCreate.js';
import { messageCreate } from '../listeners/messageCreate.js';
import { guildMemberAdd } from "../listeners/guildMemberAdd.js";

export default { ready, error, interactionCreate, messageCreate, guildMemberAdd };