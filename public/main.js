var update = document.getElementById('update')

update.addEventListener('click', function () {
    fetch('update', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          'name': 'Brayan'
        })
    })
})