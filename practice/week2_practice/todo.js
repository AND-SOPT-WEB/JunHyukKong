//alert("메롱");
const todoBtn = document.getElementById("todo-button");
const ul = document.getElementById("todos");
const input = document.getElementById("todo-input");

const addTodo = () => {
  const li = document.createElement("li");

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '삭제';
  deleteButton.classList.add('delete-btn');


  //혹은 li.textContent로!
  const span = document.createElement("span");
  span.textContent = input.value.trim();
  li.appendChild(span);


  //li.innerText = input.value.trim();
  
  if(span.innerText !== ""){
    ul.appendChild(li);
    input.value = '';
  }
  li.appendChild(deleteButton);


  console.log(li);

  // 삭제 버튼 클릭 시 해당 아이템 삭제
  deleteButton.addEventListener('click', function() {
    ul.removeChild(li);
  });
    

  
}
todoBtn.addEventListener('click', addTodo);



//엔터 눌러도 생성되도록 구현
const pressEnter = (e) => {
  console.log("키 눌림");
  if(e.key === "Enter"){
    addTodo();
  }
}
input.addEventListener("keypress", pressEnter);