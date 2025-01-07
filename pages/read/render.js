import { Entry } from "../../database/database.js";

/*  =====================================================

this script loads markdown files into a single html page
for quick  reading of content without having to load URL's

NOTE: 
this script uses the database to read file metadata & render

===================================================== */



const container = document.querySelector('div.page');                     // the html target container to append content to

class Page 
{
    constructor(path = "") {
        this.path = path;                                                 // the document path to load
        this.content = document.createElement('div');                     // create the element
        this.content.classList.add('content');                            // add a class for styling

        
        this.database = new Entry(this.path);                             // creates a new database instance
                                                                        
                                     
        this.render();
    }
    async ftch()                                                          // fetch the file URL from the class path input & return it's text
    {
        try 
        {
            
            const response = await fetch(this.path);                      // store the file {object} in variable
            if (!response.ok) { throw new Error('Error!'); }
            
            
            const txt = await response.text();                            // store the file (contents) in variable & return
            return txt;
        } 
        catch (err) 
        { 
            console.log(err);

        }
    }
    async render()
    {
        container.appendChild(this.content);
        this.content.innerText = await this.ftch();
    }
}

const page = new Page('/docs/lorem.md');



/* ----------------------------------------------
    
    @testing

    quick testing if the database works

    -- html --
    here, we create a sample container

    -- page class --
    the {page} class we created, also creates a {new database class} instance
    
    -- database class --
    using the {new database class} instance
    we can access the class
    which creates a database entry
    {page.database} will access the current page's database 
    
    then we JSON.stringify the result!

---------------------------------------------- */

const test = document.createElement('div');
test.innerText = JSON.stringify(page.database.file, null, 2)
container.appendChild(test);






/*  unused code



constructor()
{
    this.title = document.createElement('div');
    this.title.classList.add('title');
    document.querySelector('div.page').appendChild(this.title);
}
render()
{
    this.title.innerText = `${this.path.replace("/docs/", "")}`;
}


*/