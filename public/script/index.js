(() => {
    document.addEventListener('DOMContentLoaded', function() {
        const elems = document.querySelectorAll('.dropdown-trigger');
        const instances = M.Dropdown.init(elems);
    });
})();