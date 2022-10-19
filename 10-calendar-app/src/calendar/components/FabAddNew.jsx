import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../../hooks"

const emptyEvent = {
    title: '',
    notes: '',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor:'#fafafa',
    user:{
        _id: '123',
        name:'Miguel',
    },
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
