// the html target container to append content to
const parent = document.querySelector('div.page'); 


// simple dynamic html generator!
class Container
{
    constructor(classes = [])
    {
        this.el = document.createElement('div');
        this.el.classList.add(classes);
        parent.appendChild(this.el);
    }
}

export const title = new Container('title');
export const content = new Container('content');