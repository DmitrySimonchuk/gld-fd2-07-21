import { Modal } from "../../../../../base";
import { FormAddTask } from "../../../form-add-task";

export function addTask(e) {
    const modal = Modal({
        body: FormAddTask()
    });

    document.body.append(modal);
}