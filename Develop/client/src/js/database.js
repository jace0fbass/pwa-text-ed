import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
//open database
const db = await openDB(dbName, 1) 
//create transaction
const tx = db.transaction(storeName, 'readwrite')
//access store from transaction
const store = tx.objectStore(storeName)
//mutatate store
await store.add()
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
//open database
const db = await openDB(dbName, 1) 
//create transaction
const tx = db.transaction(storeName, 'readwrite')
//access store from transaction
const store = tx.objectStore(storeName)
//mutate data
return await store.getAll()
}

initdb();
