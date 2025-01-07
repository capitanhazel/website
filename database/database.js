const db = 'database.json';

export class Entry
{
    constructor(path)
    {
        this.file =  
        { 
            "path": path,
            "name": path.replace("/docs/", "")
        },
        this.time = 
        {
            "created": "2024-12-30T08:55",
            "modified": "2024-12-30T08:55",
            "accessed": "2024-12-30T08:55",
        },
        this.properties = 
        {
            "title": "",
            "tags": [],
        }
        this.log();
    }
    read(path)
    {
        
    }
    log()
    {
        console.log(this);
    }
}

