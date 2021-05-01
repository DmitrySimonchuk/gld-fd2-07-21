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
    console.log(e + '  111');
    console.log(q + '  222');

    if (q.length > 2) {
        tasksService.getTasks(q)
            .then(tasks => {                
                const contentContainer = document.querySelector(`.${contentStyles.contentContainer}`);
                const fr = document.createDocumentFragment();
                                
                tasks.forEach((task) => {
                    fr.append(CreatingTasksList({
                        id: task.id,
                        title: task.title,
                        body: task.body,
                        date_creating: new Date(task.date_creating).getDate(),
                        deadline: task.deadline,
                        status: task.status,
                        priority: task.priority
                    }))
                });
                
                contentContainer.innerHTML = '';
                contentContainer.append(fr);
            })
    }
}