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
  tbody.innerHTML= ""; //항상 초기화 필요
  
  dataArr.forEach((data)=>{
    const tbodyRow = document.createElement('tr');
    tbodyRow.classList.add('tbody-row');
    tbodyRow.setAttribute('id', data.id);
    
    // <td> 요소로 데이터를 렌더링
    tbodyRow.innerHTML = `
      <td class="checkbox"><input type="checkbox" class="row-checkbox"></td>
      <td class="user-ko-name">${data.name}</td>
      <td class="user-en-name">${data.englishName}</td>
      <td class="user-github"><a target="_blank" href="https://github.com/${data.github}">${data.github}</a></td>
      <td class="user-sex">${data.gender === "male" ? "남성" : "여성"}</td>
      <td class="user-position">${data.role}</td>
      <td class="user-1week">${data.firstWeekGroup}</td>
      <td class="user-2week">${data.secondWeekGroup}</td>
    `;

    tbody.appendChild(tbodyRow);
  })

  setupCheckboxListener();
}

const getFilterItems = () => {
  const koNameInput = document.getElementById("ko-name-filter");
  const enNameInput = document.getElementById("en-name-filter");
  const githubInput = document.getElementById("github-filter");
  const sexSelect  = document.getElementById("sex-filter");
  const positionSelect = document.getElementById("position-filter");
  const firstWeekInput = document.getElementById("week1-group");
  const secondWeekInput = document.getElementById("week2-group");

  return [koNameInput, enNameInput, githubInput, sexSelect, positionSelect, firstWeekInput, secondWeekInput];
}

//검색
const filterSearch = () => {
  const filterItems = getFilterItems();

  const dataArr = JSON.parse(localStorage.getItem('data'));
  const filteredData = dataArr.filter((data)=>{
    return (
      (filterItems[0].value === "" || data.name === filterItems[0].value) &&
      (filterItems[1].value === "" || data.englishName === filterItems[1].value) &&
      (filterItems[2].value === "" || data.github === filterItems[2].value) &&
      (filterItems[3].value === "" || data.gender === filterItems[3].value) &&
      (filterItems[4].value === "" || data.role === filterItems[4].value) &&
      (filterItems[5].value === "" || data.firstWeekGroup === Number(filterItems[5].value)) &&
      (filterItems[6].value === "" || data.secondWeekGroup === Number(filterItems[6].value)) 
    );
  })

  renderTable(filteredData);
}
document.getElementById('search-button').addEventListener('click', filterSearch);

//초기화 
const resetSearch = () => {
  const filterItems = getFilterItems();
  filterItems.forEach((item)=>{
    item.value = "";
  })

  renderTable(JSON.parse(localStorage.getItem('data')));
}
document.getElementById('reset-button').addEventListener('click', resetSearch);

//선택 삭제
const deleteSelectedItem = () => {
  const oldData = JSON.parse(localStorage.getItem('data'));
  const rowCheckBoxes = document.querySelectorAll('.row-checkbox');
  const willRemoveId = [];

  rowCheckBoxes.forEach((checkBox)=>{
    if(checkBox.checked){
      const parentNode = checkBox.closest('.tbody-row');
      willRemoveId.push(Number(parentNode.id));
    }
  })

  const newData = oldData.filter((item)=>(!willRemoveId.includes(item.id)));

  localStorage.setItem('data', JSON.stringify(newData));
  renderTable(newData);
}
document.getElementById('delete-button').addEventListener('click', deleteSelectedItem);

const modalClose = () => {
  modal.style.display = "none";
  
    koNameInput.value = "";
    enNameInput.value = "";
    githubInput.value = "";
    sexSelect.value = "";
    positionSelect.value = "";
    firstWeekInput.value = "";
    secondWeekInput.value = "";
}

//멤버 추가
const addMember = () => {
  const koNameInput = document.getElementById("add-ko-name");
  const enNameInput = document.getElementById("add-en-name");
  const githubInput = document.getElementById("add-github");
  const sexSelect  = document.getElementById("add-sex");
  const positionSelect = document.getElementById("add-position");
  const firstWeekInput = document.getElementById("add-1week");
  const secondWeekInput = document.getElementById("add-2week");

  const data = JSON.parse(localStorage.getItem('data'));
  const lastId = data[data.length-1].id;
  
  if(koNameInput.value === "" ||
    enNameInput.value === ""||
    githubInput.value === ""||
    sexSelect.value === ""||
    positionSelect.value === ""||
    firstWeekInput.value === ""||
    secondWeekInput.value === "")
    {
      alert("모든 필드를 입력해주세요!");
    }
  else{
    const memeber = {
      id: lastId + 1,
      name: koNameInput.value,
      englishName: enNameInput.value,
      github: githubInput.value,
      gender: sexSelect.value,
      role: positionSelect.value,
      firstWeekGroup: firstWeekInput.value,
      secondWeekGroup: secondWeekInput.value,
    }
  
    data.push(memeber);
    localStorage.setItem('data', JSON.stringify(data));
    renderTable(data);
  
    modalClose();
  }
}
document.getElementById('add-member-button').addEventListener("click",addMember);


//모달 기능 구현
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

const modalCloseBtn = document.getElementById('modal-close-icon');
modalCloseBtn.addEventListener('click', modalClose);

//초기 렌더링
renderTable(JSON.parse(localStorage.getItem('data')));
