// var edit = document.getElementById('update')
// console.log('test');
// edit.addEventListener('click', function () {
//     console.log(this.getAttribute('data-name'))
//     fetch('update', {
//         method: 'put',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({
//           'name': 'Brayan'
//         })
//     })
// })

function remove(name){
     fetch('delete', {
        method: 'delete',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          'name': name
        })
    }).then((response)=> response.json()).then(json => {
        window.location.reload();
    })
    console.log(name)
}