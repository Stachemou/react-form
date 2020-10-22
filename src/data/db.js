import Dexie from 'dexie';

const db = new Dexie('ToDoDatabase');
db.version(1).stores({
    todos: '++id'
});

const db_post = new Dexie('PostBase');
db.version(1).stores({
    post: '++id'
});
export default db;