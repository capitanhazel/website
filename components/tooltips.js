/* steps:
 * create tooltip
 * listen to element hover
 * return the data-widget-id attribute of the hovered element as a tooltip
 * spawn tooltip beside the element
 * remove tooltip after hover
*/

const widgets = document.querySelectorAll('[data-widget-id]');
const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');


// @optimization
// we do this to limit the event listeneres to only specific elements
widgets.forEach((widget) => {
    widget.addEventListener('mouseover', (e) => {
        document.body.appendChild(tooltip);
        tooltip.textContent = e.target.getAttribute('data-widget-id');
        
        const rect = e.target.getBoundingClientRect();
        tooltip.style.left = `${rect.left + window.scrollX + rect.width + 10}px`;
        tooltip.style.top = `${rect.top + window.scrollY + rect.height - 25}px`;
    });

    widget.addEventListener('mouseout', (e) => {
        document.body.removeChild(tooltip);
    });
});
