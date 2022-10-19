import { useCalendarStore, useUiStore } from "../../hooks"

export const FabDelete = () => {

    const { startDeletingEvent, hasEvenSelected } = useCalendarStore();


    const onClickDelete = async () => {
        await startDeletingEvent();
    }

    return (
        <button
            onClick={ onClickDelete }
            className="btn btn-danger fab-danger"
            style={{
                display: hasEvenSelected ? '' : 'none',
             }}
        >
            <i className="fas fa-trash-alt"></i>
        </button>
    )
}
