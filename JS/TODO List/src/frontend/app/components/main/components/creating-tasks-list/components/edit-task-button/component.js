import { Button } from "../../../../../base";
import { editTask } from "./helpers";

export function EditTaskButton(id) {
    const btn = Button({
        classlist: `btn btn-secondary`,
        content: 'Edit',
        clickHandler: editTask
    });

    btn.setAttribute('data-id', id);

    return btn;
}