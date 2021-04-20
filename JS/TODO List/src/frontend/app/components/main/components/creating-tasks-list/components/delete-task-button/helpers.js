import { TasksService } from "../../../../../../services/tasks.services";
import { closeModal } from "../../../../../base";

export function deleteTask(e) {
    const taskId = e.target.dataset.id;
    
    $.confirm({
        title: 'Warning!',
        content: `Confirm you want to delete task with <p><strong> #id ${taskId}!</p></strong>`,
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