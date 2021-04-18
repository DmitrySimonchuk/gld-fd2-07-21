import { CreatingTasksList } from "../creating-tasks-list";

export function Task(task) {
    const taskSection = document.createElement('section');

    taskSection.append(CreatingTasksList(task, {
        hasOpenButton: false,
        hasEditButton: false        
    }));

    return taskSection;
}