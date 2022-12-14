const db = require("../util/database");

class Blog {
    constructor(id, title, content, author, status) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
        this.status = status;
    };

    save() {
        return db.execute("insert into `blog` (title, content, author, status) values(?, ?, ?, ?)", [this.title, this.content, this.author, this.status]);
    };

    static fetchAll() {
        return db.execute("select * from `blog` where status = ?", [1]);
    };


    static findById(id) {
        return db.execute("select * from `blog` where id = ?", [id]);
    };

    update() {
        return db.execute("UPDATE `blog` SET title = ?, content = ?, author = ? , status = ? WHERE id = ?", [this.title, this.content, this.author, this.status, this.id]);
    };

    static delete(id) {
        return db.execute("UPDATE `blog` SET status = ? WHERE id = ?", [0, id]);
    };
};




module.exports = Blog;