const toDoList = [
  {
    id: 1,
    title: "Gift for Kaz",
    description: "Buy a birthday gift for Kaz",
    complete: false,
  },
  {
    id: 2,
    title: "Lunch with Saejima",
    description: "Grab lunch with Saejima at Kanrai",
    complete: true,
  }
];

function add(title, decription, complete, id){
  const newTask = {
    id: id,
    title: title,
    description: decription,
    complete: complete,
  }
  toDoList.push(newTask);
};

function remove(start, end){
  toDoList.splice(start, end);
};

function editTask(title, newTitle, newDescription, complete){  
  for (const item of toDoList){
    if(item.title === title) {
      item.title = newTitle;
      item.description = newDescription;
      item.complete = complete;
      return;
    }
  }
};

function markComplete(title){
  for (const item of toDoList){
    if(item.title === title) {
      item.complete = true;
    }
  }
};

function displayLength(){
  console.log('You have ' + toDoList.length + ' things to do');
  console.log('');
};

function app(){
  console.log('Welcome to the ToDo Application');
  console.log('================================');
  
  // TO DO LIST EDITOR
  add('Meeting with Nishida', '2:00PM strategy meeting on Thursday', false, 3);
  //remove(0,1);
  editTask('Lunch with Saejima', 'Buy New Jacket', 'Old jacket ripped, get a new one', true);
  markComplete('Gift for Kaz');

  // TO DO LIST BODY
  console.log('Here is a list of your tasks:');
  displayLength();

  // Iterate over the todos array and console.log each todo below this comment
  for (const item of toDoList){
    console.log('Task ' + item.id);
    console.log('Task Title: ' + item.title);
    console.log('Task Description: ' + item.description);
    if(item.complete){
      console.log('This task is complete')
    } else {
      console.log('This task is not complete')
    }
    console.log('');
  } 
};

app();