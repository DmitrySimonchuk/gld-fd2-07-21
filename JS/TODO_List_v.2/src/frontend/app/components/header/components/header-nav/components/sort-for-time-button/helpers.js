import {
    TasksService
} from "../../../../../../services/tasks.services";
import {
    CreatingTasksList
} from "../../../../../main/components/creating-tasks-list";
import contentStyles from '../../../../../main/components/content/styles.module.scss';
import {
    PeriodOfTime
} from "../../constans";

export function sortForTime(sectionTime) {

    const tasksService = new TasksService();
    const contentContainer = document.querySelector(`.${contentStyles.contentContainer}`);
    const fr = document.createDocumentFragment();

    const startTime = Date.now();

    const endTimeDay = startTime + 24 * 60 * 60 * 1000;
    const endTimeWeek = startTime + 7 * 24 * 60 * 60 * 1000;
    const endTimeMonth = startTime + 30 * 24 * 60 * 60 * 1000;
    const endTimeYear = startTime + 365 * 24 * 60 * 60 * 1000;

    contentContainer.innerHTML = '';

    tasksService.getTasks().then(tasks => {
        tasks.forEach((task) => {
            switch (sectionTime) {
                case PeriodOfTime.day: {
                    if (task.deadline >= startTime && task.deadline <= endTimeDay) {
                        fr.append(CreatingTasksList({
                            id: task.id,
                            title: task.title,
                            body: task.body,
                            date_creating: new Date(task.date_creating).getDate(),
                            deadline: task.deadline,
                            status: task.status,
                            priority: task.priority
                        }))
                    }
                    break;
                };

                case PeriodOfTime.week: {
                    if (task.deadline >= startTime && task.deadline <= endTimeWeek) {
                        fr.append(CreatingTasksList({
                            id: task.id,
                            title: task.title,
                            body: task.body,
                            date_creating: new Date(task.date_creating).getDate(),
                            deadline: task.deadline,
                            status: task.status,
                            priority: task.priority
                        }))
                    }
                    break;
                };

                case PeriodOfTime.month: {
                    if (task.deadline >= startTime && task.deadline <= endTimeMonth) {
                        fr.append(CreatingTasksList({
                            id: task.id,
                            title: task.title,
                            body: task.body,
                            date_creating: new Date(task.date_creating).getDate(),
                            deadline: task.deadline,
                            status: task.status,
                            priority: task.priority
                        }))
                    }
                    break;
                }

                case PeriodOfTime.year: {
                    if (task.deadline >= startTime && task.deadline <= endTimeYear) {
                        fr.append(CreatingTasksList({
                            id: task.id,
                            title: task.title,
                            body: task.body,
                            date_creating: new Date(task.date_creating).getDate(),
                            deadline: task.deadline,
                            status: task.status,
                            priority: task.priority
                        }))
                    }
                    break;
                }

                default: {
                    fr.append(CreatingTasksList({
                        id: task.id,
                        title: task.title,
                        body: task.body,
                        date_creating: new Date(task.date_creating).getDate(),
                        deadline: task.deadline,
                        status: task.status,
                        priority: task.priority
                    }))
                }
            }
        })
        contentContainer.append(fr);
    })
}