
            // Table sorting functionality
            document.addEventListener('DOMContentLoaded', function() {
                const tables = document.querySelectorAll('.data-table');
                
                tables.forEach(table => {
                    const headers = table.querySelectorAll('th');
                    
                    headers.forEach((header, index) => {
                        header.style.cursor = 'pointer';
                        header.addEventListener('click', () => sortTable(table, index));
                    });
                });
            });
            
            function sortTable(table, column) {
                const tbody = table.querySelector('tbody');
                const rows = Array.from(tbody.querySelectorAll('tr'));
                
                const isNumeric = rows.every(row => {
                    const cell = row.cells[column];
                    return cell && !isNaN(cell.textContent.trim());
                });
                
                rows.sort((a, b) => {
                    const aVal = a.cells[column].textContent.trim();
                    const bVal = b.cells[column].textContent.trim();
                    
                    if (isNumeric) {
                        return parseFloat(aVal) - parseFloat(bVal);
                    }
                    
                    return aVal.localeCompare(bVal);
                });
                
                rows.forEach(row => tbody.appendChild(row));
            }
            
            // Search functionality
            function searchTable(inputId, tableId) {
                const input = document.getElementById(inputId);
                const table = document.getElementById(tableId);
                
                if (!input || !table) return;
                
                input.addEventListener('input', function() {
                    const filter = this.value.toLowerCase();
                    const rows = table.querySelectorAll('tbody tr');
                    
                    rows.forEach(row => {
                        const text = row.textContent.toLowerCase();
                        row.style.display = text.includes(filter) ? '' : 'none';
                    });
                });
            }
        