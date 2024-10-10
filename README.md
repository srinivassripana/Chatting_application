#MongoDB connection with express

## 1. first create the mongodb and the express environment 
## 2. connect the mongoose as it is key to the mongoDB for the data schema
## 3. establish the ports and the get statments
## 4. now create the views for the template using ejs as they are the key for template interface
## 5. now create a separate folder for the mongodb schema make sure create a model after schema cause model is key to inset the data in schema format
## 6. create an another init.js file cause this helps us to create database with multiple data
## 7. getting the data form the database to the interface is an async function that we can observe in the console to avoid that we use async await process
## 8. i just want to display all the chats in the interface so i choose to create a ejs template in the "/chats".
## 9. now mainly app.get is used to interact with user request and post is used to deal with the database.
## 10. next urlencoder is mainly used to parse the params that we get and we use it as there should not be any trouble.
## 11.to perform the put and delete we install the method-override to perform the put and delete methods.
## 12. i had used the public . there i had creted css files that helps to connect with the ejs files and we mostly use to for the static pages.
