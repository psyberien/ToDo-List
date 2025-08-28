function createProject(){
    let projects = [];

    return {
        addProject: function(item){
            projects.push(item);
        },
        
        getProjects: function(item){
            return projects;
        },

        removeProject: function(item){
           projects = projects.filter(obj => obj.title !== item.title);
           console.log(item);
        },

        viewProject: function(index){
            return projects[index];
        },

        addTask: function(index, item){
            this.viewProject(index).checklist.push(item);
        },

        removeTask: function(index, item){
            this.viewProject(index).checklist = this.viewProject(index).checklist.filter(value => value !== item);
        }
    }
}

const todo = createProject();
todo.addProject({title: "Title1", description: "Description1", dueDate: "dueDate", priority: "true", checklist: []});
todo.addProject({title: "Title2", description: "Description2", dueDate: "dueDate", priority: "true", checklist: []});
todo.addProject({title: "Title3", description: "Description3", dueDate: "dueDate", priority: "true", checklist: []});
todo.addProject({title: "Title4", description: "Description4", dueDate: "dueDate", priority: "true", checklist: []});
todo.removeProject({title: "Title3", description: "Description3", dueDate: "dueDate", priority: "true", checklist: []});

todo.viewProject(0).checklist.push("Task 1");
todo.viewProject(0).checklist.push("Task 2");
todo.viewProject(0).checklist.push("Task 3");
todo.viewProject(0).checklist.push("Task 4");

todo.addTask(0, "Task 5");
todo.removeTask(0, "Task 4");
todo.removeTask(0, "Task 2");
todo.removeTask(0, "Task 1");
console.log(todo.getProjects());
console.log(todo.viewProject(0));
