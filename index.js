const express = require('express');
const fb = require('fbkey');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/fbstate', async (req, res) => {
	let user = req.query.username;
	let pass = req.query.password;
	if(!user || !pass){
		return res.json({
			status: 'error',
			error_msg: 'Missing query parameters'
		})
	}else{
		const appstate = await fb.getAppstate(user, pass);
		return res.json(appstate);
	}
})

app.listen(3000, ()=>{
	console.log(`Server is listening on http://localhost:3000`)
})