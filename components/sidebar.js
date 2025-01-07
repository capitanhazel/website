// create the sidebar
const Sidebar = document.createElement('div');
Sidebar.classList.add('sidebar');
document.body.appendChild(Sidebar);


class Widget
{  
    constructor(type = '')
    {
        this.el = document.createElement('div');
        this.sidebar = document.querySelector('div.sidebar');
        this.type = type;
        this.el.classList.add('widget');
        this.el.setAttribute('data-widget-id', type);
        this.sidebar.appendChild(this.el)
    }
}

const home = new Widget('home');
const settings = new Widget('settings');
const search = new Widget('search');
const files = new Widget('files');
const share = new Widget('share');
const explore = new Widget('explore');
const commands = new Widget('commands');
const layout = new Widget('layout');