import { openDB } from "idb";

// Function to start database
const initdb = async () =>
  openDB("text", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("text")) {
        console.log("Text database already exists");
        return;
      }
      db.createObjectStore("text", { keyPath: "id", autoIncrement: true });
      console.log("Text database created");
    },
  });

// Posting to database
export const postDb = async (text) => {
  console.log("Posting to database");
  const textDb = await openDB("text", 1);
  const tx = textDb.transaction("text", "readwrite");
  const store = tx.objectStore("text");
  const request = store.add({ text: text });
  const result = await request;
  console.log("Your text has been saved to the database!", result);
};

// Getting saved text data from database
export const getDb = async () => {
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
