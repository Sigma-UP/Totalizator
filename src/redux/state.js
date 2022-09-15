import { rerenderEntireTree } from "../render";


export let updateNewTaskDescription = (newTaskDescription) => {
    state.tasksData.newTask.description.value = newTaskDescription;
    rerenderEntireTree();
}
export let updateNewTaskHeadline = (newTaskHeadline) => {
    state.tasksData.newTask.headline.value = newTaskHeadline;
    rerenderEntireTree();
}
export let state = {
    tasksData: {
        tasks:[
            {headline:'React', description: 'Finish learn React.', deadline:'12:05PM'},
            {headline:'Olya', description: 'I love you!', deadline:'Endless'},
            {headline:'Task Manager', description: 'Finish task.', deadline:'12:05PM'}
        ],
        newTask: {
            headline: {
                value:'', 
                onChange: updateNewTaskHeadline
            }, 
            description: {
                value: '', 
                onChange: updateNewTaskDescription
            }, 
            deadline:''}
    }
}

export let addTask = () => {
    let newTask = {
        headline: state.tasksData.newTask.headline.value,
        description: state.tasksData.newTask.description.value,
        deadline: state.tasksData.newTask.deadline.value,
    }
    state.tasksData.tasks.push(newTask);
    clearNewTaskBuffer();
    rerenderEntireTree();
}
let clearNewTaskBuffer = () => {
    state.tasksData.newTask.description.value = '';
    state.tasksData.newTask.deadline = '';
    state.tasksData.newTask.headline.value = '';
}
    window.state = state;
