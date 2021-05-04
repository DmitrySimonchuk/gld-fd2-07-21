import {
    TasksService
} from "../../../../../../services/tasks.services";
import {
    CreatingTasksList
} from "../../../../../main/components/creating-tasks-list";
import contentStyles from "../../../../../main/components/content/styles.module.scss";

export function search(e) {
    const q = e.target.value;
    const tasksService = new TasksService();

    if (q.length > 2) {
        tasksService.getTasks(q)
            .then(tasks => {                
                const contentContainer = document.querySelector(`.${contentStyles.contentContainer}`);
                const fr = document.createDocumentFragment();

                const divUserId = document.getElementById('userId');
                const userId = divUserId.innerText;            
                                
                tasks.forEach((task) => {
                    if ( task.userId === userId) {
                        fr.append(CreatingTasksList({
                            userId: task.userId,
                            id: task.id,
                            title: task.title,
                            body: task.body,
                            date_creating: new Date(task.date_creating).getDate(),
                            deadline: task.deadline,
                            status: task.status,
                            priority: task.priority
                        }))
                    }                    
                });
                
                contentContainer.innerHTML = '';
                contentContainer.append(fr);
            })
    }
}