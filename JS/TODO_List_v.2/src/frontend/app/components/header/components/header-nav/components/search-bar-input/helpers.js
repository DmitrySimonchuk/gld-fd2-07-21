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
                console.log(tasks);
                const content = document.querySelector(`.${contentStyles.content}`);
                const fr = document.createDocumentFragment();
                console.log(content);
                
                tasks.forEach((task) => {
                    fr.append(CreatingTasksList({
                        id: task.id,
                        title: task.title,
                        body: task.body,
                        date_creating: new Date(task.date_creating).getDate(),
                        dedline: task.dedline,
                        status: task.status,
                        priority: task.priority
                    }))
                });

                console.log(fr);
                console.log(content);
                content.innerHTML = '';
                content.append(fr);
            })
    }
}