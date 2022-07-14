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
// export const putDb = async (content) => console.error("putDb not implemented");

export const putDb = async (content) => {
  console.log("Posting to database");
  const jateDb = await openDB("jate", 1);
  const tx = jateDb.transaction("jate", "readwrite");
  const store = tx.objectStore("jate");
  const request = store.put({ id: 1, jate: content });
  const result = await request;
  console.log("Your text has been saved to the database!", result);
};

// TODO: Add logic for a method that gets all the content from the database
// export const getDb = async () => console.error("getDb not implemented");

// Getting saved text data from database
export const getDb = async () => {
  console.log("Getting text from database");
  const jateDb = await openDB("jate", 1);
  const tx = jateDb.transation("jate", "readonly");
  const store = tx.objectStore("jate");
  const request = store.getAll();
  const result = await request;
  console.log("result.value", result);
  return result;
};

// dont need?
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
