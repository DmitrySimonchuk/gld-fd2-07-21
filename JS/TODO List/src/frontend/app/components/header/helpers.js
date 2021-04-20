import { Modal } from "../base";
import { FormAddTask } from "../main/components/form-add-task";

export function openModalToAddTask(e) {
    const modal = Modal({
        body: FormAddTask()
    });

    document.body.append(modal);
}