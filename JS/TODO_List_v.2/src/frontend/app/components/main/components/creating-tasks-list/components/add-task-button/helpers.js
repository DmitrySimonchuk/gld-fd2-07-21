import {
    Modal
} from "../../../../../base";
import {
    FormAddEditTask,
    formAddTaskClassName
} from "../../../form-add-edit-task";
import {
    SaveAddingTask
} from "../../../form-add-edit-task/components";

export function addTask() {
    const form = FormAddEditTask({
        contentTextButton: 'Add task',
        addSaveTask: SaveAddingTask,
        formTaskClassName: formAddTaskClassName,
        taskValues: {
            titleInput: 'task title',
            taskBody: 'task body'
        }
    });

    document.body.append(Modal({
        body: form
    }));
}