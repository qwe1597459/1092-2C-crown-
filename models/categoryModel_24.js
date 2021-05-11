const db = require('../utils/database');

const category_24 = class category_24 {
    constructor(id, name, size, remote_url, local_url){
        this.id=id;
        this.name=name;
        this.size=size;
        this.remote_url=remote_url;
        this.local_url=local_url;
    }

    static fetchAll(){
        return db.execute('select * from categories_24');
    }
}


module.exports = category_24;
