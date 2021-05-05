import {
    Button
} from "../../../base";
import { 
    labelFormForTask 
} from "./constants";

import styles from './styles.module.scss';

export function FormAddEditTask({
    contentTextButton,
    addSaveTask,
    formTaskClassName,
    taskValues = {}
}) {
    const form = document.createElement('form');

    const deadlineLabel = document.createElement('label');
    const deadlineInput = document.createElement('input');    

    const titleInput = document.createElement('input');
    
    const taskBodyTextarea = document.createElement('textarea');
    
    const statusLabel = document.createElement('label');
    const statusSelect = document.createElement('select');
    const statusOptionToDo = document.createElement('option');
    const statusOptionInProgress = document.createElement('option');
    const statusOptionDone = document.createElement('option');
    
    const priorityLabel = document.createElement('label');
    const prioritySelect = document.createElement('select');
    const priorityOptionSoSo = document.createElement('option');
    const priorityOptionImportant = document.createElement('option');

    const formSubmitButton = Button({
        content: contentTextButton,
        type: 'submit'
    });

    form.addEventListener('submit', addSaveTask);

    form.classList.add(formTaskClassName);

    deadlineLabel.classList.add('mb-3', 'form-label');
    deadlineInput.classList.add('form-control', 'mb-3', 'datetime-local');

    titleInput.classList.add('form-control', 'mb-3', 'form-title');

    taskBodyTextarea.classList.add('form-control', 'mb-3', 'form-body');   
        
    statusLabel.classList.add('mb-3', 'form-label');
    statusSelect.classList.add('form-control', 'mb-3');    

    priorityLabel.classList.add('mb-3', 'form-label');
    prioritySelect.classList.add('form-control', 'mb-3');        
        
    deadlineInput.setAttribute('required', '');
    deadlineInput.setAttribute('name', 'deadline');
    deadlineInput.setAttribute("type", "datetime-local");    
    
    titleInput.setAttribute('required', '');
    titleInput.setAttribute('placeholder', `${taskValues.titleInput}`);
    taskBodyTextarea.setAttribute('placeholder', `${taskValues.taskBody}`);

    titleInput.setAttribute('name', 'title');

    taskBodyTextarea.setAttribute('name', 'body');
    taskBodyTextarea.setAttribute('rows', 5);
    
    statusSelect.setAttribute('name', 'status');
    statusOptionToDo.setAttribute('value', 'To do');
    statusOptionInProgress.setAttribute('value', labelFormForTask.InProgress);
    statusOptionDone.setAttribute('value', labelFormForTask.Done);
    
    prioritySelect.setAttribute('name', 'priority');
    priorityOptionSoSo.setAttribute('value', labelFormForTask.SoSo);
    priorityOptionImportant.setAttribute('value', labelFormForTask.Important);
    
    deadlineLabel.textContent = labelFormForTask.Dedline;
    
    statusLabel.textContent = labelFormForTask.Status;
    statusOptionToDo.textContent = labelFormForTask.ToDo;
    statusOptionInProgress.textContent = labelFormForTask.InProgress;
    statusOptionDone.textContent = labelFormForTask.Done;

    priorityLabel.textContent = labelFormForTask.Priority;
    priorityOptionSoSo.textContent = labelFormForTask.SoSo;
    priorityOptionImportant.textContent = labelFormForTask.Important;

    deadlineLabel.append(deadlineInput);

    statusSelect.append(statusOptionToDo, statusOptionInProgress, statusOptionDone);
    statusLabel.append(statusSelect);   
    
    prioritySelect.append(priorityOptionSoSo, priorityOptionImportant);
    priorityLabel.append(prioritySelect);
    
    form.append(
        deadlineLabel,
        titleInput,
        taskBodyTextarea,
        statusLabel,
        priorityLabel,        
        formSubmitButton
    );

    return form;
}