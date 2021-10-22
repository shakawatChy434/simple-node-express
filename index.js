const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

/* Call this  middleWare  which is using above */
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Its my second initialize. ');
});

/* Our Working Zoon Area Start */

const users = [
    { id: 0, name: 'az', email: 'az@gmail.com', phone: '3943432029' },
    { id: 1, name: 'a', email: 'a@gmail.com', phone: '0283432029' },
    { id: 2, name: 'b', email: 'b@gmail.com', phone: '928359080' },
    { id: 3, name: 'c', email: 'c@gmail.com', phone: '2475874489' },
    { id: 4, name: 'd', email: 'd@gmail.com', phone: '290435879904' },
    { id: 5, name: 'e', email: 'e@gmail.com', phone: '289065724855' },
    { id: 6, name: 'f', email: 'f@gmail.com', phone: '823174892609' },
]
/* Search all user part Start */
/* app.get('/users', (req, res) => {
    res.send(user);
}); */
/* Search all user part End */

/* App "Method: Like that -> (app.get, app.post) etc" */
/* Use Srach Queary part Start*/
//Use Queary Selector 
app.get('/users', (req, res) => {
    const search = req.query.search;
    /* Add a condistion  */
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    } else {
        res.send(users)
    };
})
/* Use Srach Queary part End*/

/* search particular id start */

// App Method:
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log("Hittings:post gotted hittes", req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
});

/* Dynamic API */
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})
/* search particular id end */

/* Create  special route / parametar part start */
app.get('/fruits/mangos/fazli', (req, res) => {
    res.send('yami yammi tok marka fazli');
})
/* Create  special route / parametar part end */


/* Our Working Zoon Area End. */

app.listen(port, () => {
    console.log('Listing To Prot', port)
})