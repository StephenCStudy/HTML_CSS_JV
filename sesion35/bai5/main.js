let btn = document.getElementById('tbn');
let dataList = [];

// localStorage.setItem('listData', JSON.stringify(dataList));
// JSON.parse(localStorage.getItem ('listData')) || [];




function checkDataInput() {
    let cateID = document.getElementById('cateID').value;
    let CateName = document.getElementById('CateName').value;
    let cateIDhelpBlock = document.getElementById("cateIDhelpBlock");
    let CateNameHelpBlock = document.getElementById("CateNameHelpBlock");
    
    if (cateID === '' || CateName === '') {
        cateIDhelpBlock.style.display = cateID === '' ? 'block' : 'none';
        CateNameHelpBlock.style.display = CateName === '' ? 'block' : 'none';
        return;
    } else {
        cateIDhelpBlock.style.display = 'none';
        CateNameHelpBlock.style.display = 'none';
    }
}



function addNewData() {
    
    let cateID = document.getElementById('cateID').value;
    let CateName = document.getElementById('CateName').value;
    let radioDefaultOn = document.getElementById('radioDefaultOn').checked;
    let radioDefaultOff = document.getElementById('radioDefaultOff').checked;

    checkDataInput();

    let status = radioDefaultOn ? 'Đang hoạt động' : 'Ngừng hoạt động';

    let data = {
        cateID: cateID,
        CateName: CateName,
        status: status
    };

    dataList.push(data);
    localStorage.setItem('listData', JSON.stringify(dataList));
    JSON.parse(localStorage.getItem ('listData')) || [];
    document.getElementById('cateID').value = '';
    document.getElementById('CateName').value = '';

    let tbody = document.getElementById('tbody');
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    // let btndelete = document.createElement('button');
    td1.innerHTML = cateID;
    td2.innerHTML = CateName;
    td3.innerHTML = status;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tbody.appendChild(tr);
    
}

// function deleteData() {
//     let cateID = document.getElementById('cateID').value;

//     dataList = dataList.filter(data => data.cateID !== cateID);

//     let tbody = document.getElementById('tbody');

//     dataList.forEach(data => {
//         let tr = document.createElement('tr');
//         let td1 = document.createElement('td');
//         let td2 = document.createElement('td');
//         let td3 = document.createElement('td');
//         td1.innerHTML = data.cateID;
//         td2.innerHTML = data.CateName;
//         td3.innerHTML = data.status;
//         tr.appendChild(td1);
//         tr.appendChild(td2);
//         tr.appendChild(td3);
//         tbody.appendChild(tr);
//     });
// }