import {Client, Storage, Databases, ID, Account }  from "appwrite"

const client=new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const account=new Account(client);
const storage=new Storage(client);
const database=new Databases(client);

export {client,database,account,ID};
