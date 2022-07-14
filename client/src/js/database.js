import { openDB } from "idb";

// Function to start database
const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// Posting to database

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => console.error("putDb not implemented");

export const postDb = async (text) => {
  console.log("Posting to database");
  const textDb = await openDB("text", 1);
  const tx = textDb.transaction("text", "readwrite");
  const store = tx.objectStore("text");
  const request = store.add({ text: text });
  const result = await request;
  console.log("Your text has been saved to the database!", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error("getDb not implemented");

// Getting saved text data from database
export const getDatabase = async () => {
  console.log("Getting text from database");
  const textDb = await openDB("text", 1);
  const tx = contactDb.transation("text", "readonly");
  const store = tx.objectStore("text");
  const request = store.getAll();
  const result = await request;
  console.log("result.value", result);
  return result;
};

// Deleting data from database
export const deleteDb = async (id) => {
  console.log("Deleting text from database", id);
  const textDb = await openDB("text", 1);
  const tx = textDb.transaction("text", "readwrite");
  const store = tx.objectStore("text");
  const request = store.delete(id);
  const result = await request;
  console.log("result.value", result);
  return result.value;
};

// Start database
initdb();
