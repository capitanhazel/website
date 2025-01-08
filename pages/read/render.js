import { content, title } from './containers.js';
import { database } from './database.js';

function render(id)
{
    const file = database.find(object => object.id === id);
    title.el.innerText = file.data.title;
    content.el.innerText = file.data.content;
}   

render(20250108100243);
setTimeout(() => {
    render(20250108101037);
}, 2000);