function showMenu(cardNumber) {
    // Example menu items for each card
    const menus = {
        1: ['Item 1', 'Item 2', 'Item 3'],
        2: ['Item A', 'Item B', 'Item C'],
        3: ['Item X', 'Item Y', 'Item Z'],
        4: ['Item 4a', 'Item 4b', 'Item 4c'],
        5: ['Item 5a', 'Item 5b', 'Item 5c'],
        6: ['Item 6a', 'Item 6b', 'Item 6c']
    };

    const sidebar = document.querySelector('.sidebar');
    const menu = document.getElementById('menu');
    
    // Clear existing menu items
    menu.innerHTML = '';

    // Populate menu with items
    menus[cardNumber].forEach((item, index) => {
        const menuItem = document.createElement('li');
        menuItem.textContent = item;
        menuItem.onclick = () => showTable(item);
        menu.appendChild(menuItem);
    });

    // Show the sidebar
    sidebar.style.display = 'block';
}

function showTable(item) {
    const tableContainer = document.querySelector('.table-container');
    
    // Example table content based on item clicked
    const tables = {
        'Item 1': `<table><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Data 1</td><td>Data 2</td></tr></table>`,
        'Item A': `<table><tr><th>Header A</th><th>Header B</th></tr><tr><td>Data A</td><td>Data B</td></tr></table>`,
        // Add more tables for other items
        'Item X': `<table><tr><th>Header A</th><th>Header X</th></tr><tr><td>Data A</td><td>Data B</td></tr></table>`,
        'Item 4a': `<table><tr><th>Header A</th><th>Header 4A</th></tr><tr><td>Data A</td><td>Data B</td></tr></table>`,
        'Item A': `<table><tr><th>Header A</th><th>Header A</th></tr><tr><td>Data A</td><td>Data B</td></tr></table>`,
        'Item 2': `<table><tr><th>Header A</th><th>Header 2</th></tr><tr><td>Data A</td><td>Data B</td></tr></table>`,
        'Item B': `<table><tr><th>Header A</th><th>Header B</th></tr><tr><td>Data A</td><td>Data B</td></tr></table>`,

    };

    // Show the corresponding table
    tableContainer.innerHTML = tables[item] || '<p>No data available</p>';
}
