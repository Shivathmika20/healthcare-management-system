import { Client} from 'node-appwrite';
import * as sdk from 'node-appwrite';
export const {
    PROJECT_ID,API_KEY,DATABASE_ID,PATIENT_DB_ID,
    DOCTOR_DB_ID,APPOINTMENT_DB_ID,
    BUCKET_STORAGE,BUCKET_ENDPOINT
}=process.env;

export const client = new Client();

client
    .setEndpoint(BUCKET_ENDPOINT!)
    .setProject(PROJECT_ID!)
    .setKey(API_KEY!); 

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users= new sdk.Users(client);