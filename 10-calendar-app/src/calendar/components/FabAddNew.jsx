import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../../hooks"

const emptyEvent = {
    title: '',
    notes: '',
    start: new Date(),
    end: addHours(new Date(), 2),
    user:{ },
}

export const FabAddNew = () => {

    const { openDateModal } = useUiStore();
    const { setActiveEvent } = useCalendarStore();


    const onClickNewEvent = () => {
        openDateModal();
        setActiveEvent({ ...emptyEvent });
    }

    return (
        <button
            onClick={ onClickNewEvent }
            className="btn btn-primary fab"
        >
            <i className="fas fa-plus"></i>
        </button>
    )
}
