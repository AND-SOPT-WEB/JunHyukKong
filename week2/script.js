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
      <div class="checkbox"><input type="checkbox" class="row-checkbox"></div>
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

//전체 체크 기능
const allCheckbox = document.getElementById('select-all');
allCheckbox.addEventListener('change', (e)=> {
  const isChecked = e.target.checked;
  const otherCheckboxes = document.querySelectorAll(".row-checkbox");
  
  otherCheckboxes.forEach((checkBox) => {
    checkBox.checked = isChecked;
  })
})

//역으로, 만약 하나라도 체크 해제가 되면 전체 체크에도 반영이 되도록
//모든 checkbox를 매번 확인 -> 전부 체크되어있거나, 아니거나로 판단하도록 변경
const otherCheckboxes = document.querySelectorAll(".row-checkbox");
otherCheckboxes.forEach((checkBox) => {
  checkBox.addEventListener('change', ()=>{
    console.log("메롱");
    const isAllCheck = otherCheckboxes.every(checkBox=> checkBox.checked);
    allCheckbox.checked = isAllCheck;
  });
})

renderTable();
