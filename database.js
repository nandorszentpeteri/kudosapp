/* Example
 *
 * "29562398523985629385": {
 *   name: "User name",
 *   feedback: [
 *     {
 *       user: "name of the user",
 *       type: condor || turkey,
 *       message: "lorem ipsum dolor sit amet"
 *     },
 *   ],
 *   numberOfCondor: 0,
 *   numberOfTurkey: 0,
 * }
 */

const database = {};

const createRecord = (user) => {
  Object.assign(database, {
    [user.id]: {
      name: user.name,
      feedback: [],
      numberOfCondor: 0,
      numberOfTurkey: 0,
    },
  });
};

const addCondor = (user, feedback) => {
  if (!database[user.id]) {
    createRecord(user);
  }

  database[user.id].feedback.push({...feedback, type: "condor"});
  database[user.id].numberOfCondor++;
};

const addTurkey = (user, feedback) => {
  if (!database[user.id]) {
    createRecord(user);
  }

  database[user.id].feedback.push({...feedback, type: "turkey"});
  database[user.id].numberOfTurkey++;
};

exports.database = database;
exports.addCondor = addCondor;
exports.addTurkey = addTurkey;
