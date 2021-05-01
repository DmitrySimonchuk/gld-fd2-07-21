import { Button } from "../../../../../base";
import { deleteTask } from "./helpers";

export function DeleteTaskButton(id) {
    const btn = Button({
        classlist: `btn to-do-btn-danger`,
        content: 'Delete',
        clickHandler: deleteTask
    });

    btn.setAttribute('data-id', id);

    return btn;
}