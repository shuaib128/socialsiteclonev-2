const dbName = 'postTempDataBase';
const objectStoreName = 'postTempDataBaseObjectStore';

const openDatabase = () => {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open(dbName, 1);

        request.onerror = (event) => {
            console.error('Database error:', event.target.error);
            reject(event.target.error);
        };

        request.onsuccess = (event) => {
            const db = event.target.result;
            resolve(db);
        };

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            const objectStore = db.createObjectStore(objectStoreName, { keyPath: 'id' });
            // Add any desired indexes
        };
    });
};

export const storeDataInIndexedDB = async (data) => {
    try {
        const db = await openDatabase();
        const transaction = db.transaction(objectStoreName, 'readwrite');
        const objectStore = transaction.objectStore(objectStoreName);

        for (const item of data) {
            objectStore.add(item);
        }

        transaction.oncomplete = () => {};
    } catch (error) {
        console.error('Data storage error:', error);
    }
};

export const retrieveDataFromIndexedDB = async () => {
    return new Promise((resolve, reject) => {
        openDatabase()
            .then((db) => {
                const transaction = db.transaction(objectStoreName, 'readonly');
                const objectStore = transaction.objectStore(objectStoreName);

                const request = objectStore.getAll();

                request.onsuccess = (event) => {
                    const data = event.target.result;
                    console.log(data);
                    resolve(data);
                };

                request.onerror = (event) => {
                    console.error('Data retrieval error:', event.target.error);
                    reject(event.target.error);
                };
            })
            .catch((error) => {
                console.error('Database error:', error);
                reject(error);
            });
    });
};

export const modifyDataToIndexedDB = async (data) => {
    const db = await openDatabase();

    // Start a transaction and get a reference to the object store
    const transaction = db.transaction(objectStoreName, 'readwrite');
    const objectStore = transaction.objectStore(objectStoreName);

    // Retrieve the object to update using the specified key
    const getObjectRequest = objectStore.get(1);

    getObjectRequest.onerror = (event) => {
        console.error('Failed to retrieve object:', event.target.error);
    };

    getObjectRequest.onsuccess = (event) => {
        // Get the retrieved object
        const objectToUpdate = event.target.result;

        // Add a new array to the object
        objectToUpdate.files = data

        // Update the object in the object store
        const updateObjectRequest = objectStore.put(objectToUpdate);

        updateObjectRequest.onerror = (event) => {
            console.error('Failed to update object:', event.target.error);
        };

        updateObjectRequest.onsuccess = (event) => {};
    }
}

export const clearDataFromIndexedDB = async () => {
    try {
        const db = await openDatabase();
        const transaction = db.transaction(objectStoreName, 'readwrite');
        const objectStore = transaction.objectStore(objectStoreName);
        const request = objectStore.clear();

        request.onsuccess = () => {};
    } catch (error) {
        console.error('Data clearing error:', error);
    }
};