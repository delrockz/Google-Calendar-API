const { env } = require('process');
require('dotenv').config();
const express=require('express');
const bodyParser=require('body-parser');
const app= express();
const router = express.Router();
const Event = require("./events");
const axios=require('axios');
const mongoose=require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DB_NAME,(err)=>{if(err){console.log(err)}})
const connection= mongoose.connection;
const path=require('path');
const url = "https://accounts.google.com/o/oauth2/v2/auth";
const gscope = "https://www.googleapis.com/auth/calendar.events.readonly";
const clientid = process.env.CLIENT_ID;
const clientsecret = process.env.CLIENT_SECRET;
//dev const redirecturi = "http://localhost:5000/gcapi";
//firebase const redirecturi = "https://calendar-api-7851d.web.app/gcapi";
const redirecturi = "https://googleevents.herokuapp.com/gcapi"
const state = "delrockz";

app.use("/", router);
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'build')));
app.use(bodyParser.json());

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'build','index.html'));
})

router.get('/gauth',async (req,res)=>{
        await res.redirect(`${url}?scope=${gscope}&access_type=offline&include_granted_scopes=true&response_type=code&state=${state}&redirect_uri=${redirecturi}&client_id=${clientid}`);
})

router.get('/gcapi', async (req,res)=>{
    const postData = `code=${req.query.code}&client_id=${clientid}&client_secret=${clientsecret}&redirect_uri=${redirecturi}&grant_type=authorization_code`
    await axios.post('https://www.googleapis.com/oauth2/v4/token', postData, {
        headers : {
            'Content-Type' : 'application/x-www-form-urlencoded'
        }})
        .then(response=>{
            const authToken = response.data.access_token;
            axios.get(`https://www.googleapis.com/calendar/v3/calendars/primary/events?access_token=${authToken}`)
            .then(
                response=>{
                    const eventList=[];
                    const resData = eval(response.data.items);
                    for(var key in resData){
                        eventList.push(resData[key].summary);
                    }
                    let count=1;
                    const countArray=[];
                    const uniqueList=[];
                    eventList.sort();
                    for(var i in eventList){
                        if(uniqueList.includes(eventList[i])){
                                count=count+1
                        }
                        else{
                            if(i!=0){countArray.push(count)}
                            uniqueList.push(eventList[i])
                            count=1;
                        }
                    }
                    countArray.push(count);
                    //connection.once('open',()=>connection.dropCollection("events"));
                    const event=new Event({
                        events : uniqueList,
                        recurrence : countArray
                    });
                    event.save()
                    .then(res.redirect('/'))
                    .catch(err=>{
                        res.json({message : err});
                    })
                })
            })
    .catch(err=>console.log(err))
})

router.route("/fetchEvents").get(async(req, res)=>{
    const result = await Event.find().sort({_id:-1}).limit(1);
    res.json(result);
  });

const port = process.env.PORT || 3000;
app.listen(port);