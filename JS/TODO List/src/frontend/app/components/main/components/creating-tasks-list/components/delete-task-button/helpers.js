import { TasksService } from "../../../../../../services/tasks.services";
import { closeModal } from "../../../../../base";

export function deleteTask(e) {
    const taskId = e.target.dataset.id;
    let taskTitle = document.querySelector(`.card[data-id="${taskId}"]`);
    taskTitle = taskTitle.querySelector('.card-title').textContent;
        
    $.confirm({
        title: 'Warning!',
        content: `Confirm you want to delete <p><strong> ${taskTitle}!</p></strong>`,
        type: 'orange',
        buttons: {
            yes: {
                btnClass: 'btn-warning',
                action: function() {                    
                    const tasksService = new TasksService();

                    tasksService.deleteTask(taskId)                        
                        .then(deleteTaskId => {
                            document.querySelector(`.card[data-id="${deleteTaskId}"]`)?.remove();
                            
                            closeModal(e);

                            $.escapeSelector({
                                type: 'green',
                                title: 'Success!',
                                content: `Task successfully deleted!`
                            })                            
                        });
                }
            },
            no: { }
        }
    });
}