//your JS code here. If required.
document.getElementById('removeButton').addEventListener('click', () => {
    const colorSelect = document.getElementById('colorSelect');
    colorSelect.remove(colorSelect.selectedIndex);
});
