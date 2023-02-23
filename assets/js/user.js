/*!
=========================================================
* InfoElectric user page
=========================================================

* Copyright: 2022 Ferney Talero (https://devcrud.com)
* Coded by Ferney Talero

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
$(document).ready(function(){
    const nfcInfo = window.localStorage.getItem('NFC');
    const nfcExample = {
        vehicle: {
            id: 1,
            brand: 'BMW',
            color: 'blanco'
        },
        history: [
            {
                id: 1,
                date: '2023-01-01',
                description: 'Mantenimiento de bateria',
                concessionaire: 'Auteco Boyaca'
            },
            {
                id: 2,
                date: '2022-12-01',
                description: 'Mantenimiento de llantas',
                concessionaire: 'Autopartes la 13'
            }
        ]
    }

    $("#txtID").val(nfcExample.vehicle.id)
    $("#txtBrand").val(nfcExample.vehicle.brand)
    $("#txtColor").val(nfcExample.vehicle.color)

    for(let index = 0; index < nfcExample.history.length; index++){
        addRow(nfcExample.history[index])
    }
})

function addRow(rowInfo){
    const table = document.getElementById('tbHistory').insertRow(1)
    let idCell = table.insertCell(0)
    let dateCell = table.insertCell(1)
    let despCell = table.insertCell(2)
    let concCell = table.insertCell(3)
    idCell.innerHTML = rowInfo.id
    dateCell.innerHTML = rowInfo.date
    despCell.innerHTML = rowInfo.description
    concCell.innerHTML = rowInfo.concessionaire
}