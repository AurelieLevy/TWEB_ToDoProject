# ToDo project
This project was done as part of the TWEB course of HEIG-VD (Yverdon, Switzerland).

The principle is simple. We relied on an application offering todo lists named Wunderlist. This application provides an API allowing developers to ling it with their own application. You can find this API here:

<center> <a href="https://developer.wunderlist.com/documentation">https://developer.wunderlist.com/documentation> </a></center>

Wunderlist is downloadable for  Mac, Windows, Android and iOS.

Our application is a gamification of the use of Wunderlist. When you finished a task, you win more or less coins, allowing you to buy images.

## How to use
First, you will need to download Wunderlist, then you will need to register. Be careful to remember your credentials, you will need it on our application.

Once you did this, you can go on the following url:

<center> <a href="https://remij1.github.io/#!/dashboard">https://remij1.github.io/#!/dashboard> </a></center>

Here, you will find two pages: ``` My photos``` and ```Shop```.

The first will show you the pictures you have already bought and the tasks you completed.  They are the tasks that provided you your gold.

The second is the shop where you will be able to buy others pictures.

At the top, you will find your name and the amount of gold you have earned.

## Backend
### Database
The backend is linked to a database mongoose. In this database, you have a schema representing a user. The attributs saved are:

    1. The user wunderlist Id (Number)
    2. The money (gold) the user has (Number)
    3. The images the user own ({ imageId: Number, value: Number })
    4. The wunderlist taskIds that has been already handled (Number)

### Endpoints used
You can use our backend with several endpoints that we already made. Here are their explanations:

1. Connection
```
POST /access_token HTTP 1.1
Header: Content-Type application/json
{
    "code": "fds3r24323dsfsg005942fdsasdbfsd1f862q13a"
}

Response format: 
{
    "access_token": "00842d3df1e234234dfsr165653452rea7407ef8dfb4f4e42dsfsw3423"
}
```

2. Get user info (points, name, profile info, etc ... to see what is displayed)
```
GET /user_info HTTP 1.1
Header: x-access-token obtained by the endpoint /access_token

Response format: {
    "userId": 489113,
    "userName":"Bal Der",
    "gold":156
}
```


3. Get purchasable images
```
GET /images?filter=buyable HTTP 1.1
Header: x-access-token obtained by the endpoint /access_token

Response format:
[
    {
        "imageId": 1,
        "value": 5
    },
    ...
]
```


4. Get already purchased images
```
GET /images?filter=owned HTTP 1.1
Header: x-access-token obtained by the endpoint /access_token

Response format:
[
    {
        "value": 20,
        "imageId": 2
    },
    ...
]
```

5. Purchase an image choosen
```
POST /images/:idImage HTTP 1.1
Header: x-access-token obtained by the endpoint /access_token

Response format:
{
    "got": "Merci de votre achat",
    "imageId": 1
}
```

6. Retrieving all the finished tasks of a user
```
GET /tasks HTTP 1.1
Header: x-access-token obtained by the endpoint /access_token

Response format:
{
    "id": 7893351861,
    "created_at": "2017-12-10T19:42:46.686Z",
    "created_by_id": 70132624,
    "created_by_request_id": "16aab7[...]",
    "due_date": "2017-12-17",
    "completed": true,
    "completed_at": "2017-12-24T08:57:06.835Z",
    "completed_by_id": 735342241,
    "starred": true,
    "list_id": 3212354347893351246,
    "revision": 7,
    "title": "Christmas preparation",
    "type": "task"
}
```
### Frontend
The frontend was made by using AngularJS, Yeoman and Grunt.

AngularJS allow use to create a Single-Page Applications. As we spoke before, there are two modules: ```My Photos``` and ```Shop```.