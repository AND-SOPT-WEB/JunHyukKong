import { members } from "./constant.js";

if(!localStorage.getItem('data')){
  localStorage.setItem('data', JSON.stringify(members));
}

const renderTable = () => {
  const dataArr = JSON.parse(localStorage.getItem('data'));

  const tbody = document.getElementById('tbody');
  
  dataArr.forEach((data)=>{
    const tbodyRow = document.createElement('div');
    tbodyRow.classList.add('tbody-row');
    //취약하지만, 외부적으로 거드릴 수는 없기 때문에 innerHTML로 편하게 렌더링
    tbodyRow.innerHTML = `
      <div class="checkbox row-checkbox" ><input type="checkbox"></div>
      <div class="user-ko-name">${data.name}</div>
      <div class="user-en-name">${data.englishName}</div>
      <div class="user-github"> ${data.github}</div>
      <div class="user-sex">${data.gender}</div>
      <div class="user-position">${data.role}</div>
      <div class="user-1week">${data.firstWeekGroup}</div>
      <div class="user-2week">${data.secondWeekGroup}</div>
    `

    tbody.appendChild(tbodyRow);
  })

}

renderTable();
