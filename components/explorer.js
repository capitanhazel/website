// a simple file explorer component
const el = document.createElement('div');
el.classList.add('explorer');
el.setAttribute('type', 'files');

// fetch the files from the site server 
// make each file a link so user can open them