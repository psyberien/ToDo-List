function createProject(){
    let projects = [{name: "Default", id: 0, checklist: []}];
    
    return {
        addProject: function(item){
            projects.push(item);
        },
        
        getProjects: function(item){
            return projects;
        },

        removeProject: function(item){
           projects = projects.filter(obj => obj.name !== item.name);
        },

        viewProject: function(index){
            return projects[index];
        },

        addTask: function(index, item){
            this.viewProject(index).checklist.push(item);
        },

        removeTask: function(index, item){
            this.viewProject(index).checklist = this.viewProject(index).checklist.filter(value => value.title !== item.title);
        },
    }

    

}

const todo = createProject();
todo.addProject({name: "Name1", id: 0, checklist: []});
todo.addProject({name: "Name2", id: 1, checklist: []});
todo.addProject({name: "Name3", id: 2, checklist: []});
todo.addProject({name: "Name4", id: 3, checklist: []});
todo.addProject({name: "Sogoi", id: 3, checklist: []});

todo.removeProject({name: "Name3", checklist: []});

todo.addTask(0, {title: "Title1", dueDate: "date", priorty: "true"});
todo.addTask(0, {title: "Title2", dueDate: "date", priorty: "true"});
todo.addTask(0, {title: "Title3", dueDate: "date", priorty: "true"});
todo.addTask(0, {title: "Title4", dueDate: "date", priorty: "true"});
todo.removeTask(0 , {title: "Title2", dueDate: "date", priorty: "true"})
todo.removeTask(0 , {title: "Title3", dueDate: "date", priorty: "true"})



console.log(todo.getProjects());

const projectOptions = todo.getProjects().map(obj => ({name: `${obj.name}`, id: `${obj.id}`}));
console.log(projectOptions);
console.log(projectOptions[0].name);
const selectList = document.createElement('select');
selectList.id = 'projects';
selectList.setAttribute('name', 'projects');

projectOptions.forEach(optionData => {
    const option = document.createElement('option');
    option.id = optionData.id;
    option.textContent = optionData.name;
    selectList.appendChild(option);
})

const container = document.querySelector("#projects");
container.setAttribute('name', 'projects');
container.appendChild(selectList);

const modal =  document.querySelector("#myModal");
const addTask = document.querySelector("#addTask");

const pushTask = document.querySelector("#pushTask");
const myForm = document.querySelector("#taskForm")
    
myForm.addEventListener("submit", function(event){
    event.preventDefault();

    const formData = new FormData(event.target);
    const title = formData.get("title");
    const description = formData.get("description");
    const myDate = formData.get("myDate");
    const projects = formData.get("projects");
    const index = todo.getProjects().findIndex(item => item.name === projects);
    console.log(index);
    todo.addTask(index, {title, description, myDate});
    console.log(todo.getProjects());
   modal.style.display = "none";
});


function openModal(){
    modal.style.display = "block";
}

function closeModal(){
    modal.style.display = "none";
}

 addTask.addEventListener("click", function(event){
    myForm.reset();
    openModal();
 });

 const span = document.querySelector(".close");

 span.addEventListener("click", function(event){
    closeModal();
 });
