/*

@info 
"This script handles the file database"

@class "Entry"
create a new entry for parsing files here

@example
const test = new Entry('/docs/lorem.md');
*/



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
            "modified": "2024-12-30T08:55"
        },
        this.properties = 
        {
            "title": "Title!",
            "tags": ["Mental health", "Tag"]
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

