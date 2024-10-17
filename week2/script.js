import { members } from "./constant.js";

if(!localStorage.getItem('data')){
  localStorage.setItem('data', JSON.stringify(members));
}

const setupCheckboxListener = () => {
  //전체 체크 기능
  const allCheckbox = document.getElementById('select-all');
  allCheckbox.addEventListener('change', (e)=> {
    const isChecked = e.target.checked;
    const otherCheckboxes = document.querySelectorAll(".row-checkbox");
    
    otherCheckboxes.forEach((checkBox) => {
      checkBox.checked = isChecked;
    })
  })

  //개별 체크 -> 전체 체크 반영하는 기능
  const otherCheckboxes = document.querySelectorAll(".row-checkbox");
  otherCheckboxes.forEach((checkBox) => {
    checkBox.addEventListener('change', ()=>{
      //querySelectAll은 NodeList를 반환, NodeList는 forEach 메서드는 지원하지만 every 메서드는 지원 x
      const isAllCheck = Array.from(otherCheckboxes).every(checkBox=> checkBox.checked);
      allCheckbox.checked = isAllCheck;
    });
  })
}

const renderTable = (dataArr) => {
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

  setupCheckboxListener();
}


const modal = document.getElementById('modal');
document.getElementById("add-button").addEventListener("click", ()=>{
  modal.style.display = "flex";
})
window.onclick = (e)=>{
  //modal-content를 누르면 modal이 아닌 modal-content를 눌렀다고 인식
  if(e.target === modal){
    modal.style.display = "none";
  }
}

//초기 렌더링
renderTable(JSON.parse(localStorage.getItem('data')));
