import {
    Button
} from "../../../../../base";
import {
    sortForTime
} from "./helpers";
import stylesBtn from '../../../../../base/button/styles.module.scss';

export function SortForTimeButton(periodOfTime) {
    
    const sortFuncWrapper = () => {
        sortForTime(periodOfTime)
    };

    const sortLink = Button({
        classlist: stylesBtn.myButton,
        content: periodOfTime,
        clickHandler: sortFuncWrapper
    });

    sortLink.classList.add('btn');

    return sortLink;
}