import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2";
import { calendarApi } from "../api";
import { stringEventsToDateEvents } from "../helpers";
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from "../store/calendar";

export const useCalendarStore = () => {
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.calendar);
    const { user } = useSelector(state => state.auth);


    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    }

    const startSavingEvent = async (calendarEvent) => {

        try {
            //Todo bien
            if (calendarEvent.id) {
                //Actualizando
                await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent);
                dispatch(onUpdateEvent({ ...calendarEvent, user }));
                return
            }

            //Creando
            const { data } = await calendarApi.post('/events', calendarEvent);

            dispatch(onAddNewEvent({ ...calendarEvent, id: data.event.id, user }));

        } catch (error) {
            console.error(error);
            Swal.fire('Error al guardar', error.response.data?.message, 'error');
        }

    }

    const startDeletingEvent = async () => {

        try {
            await calendarApi.delete(`/events/${activeEvent.id}`);
            dispatch(onDeleteEvent());
        
        } catch (error) {
            console.error(error);
            Swal.fire('Error al eliminar evento', error.response.data?.message, 'error');
        }

    }

    const startLoadingEvents = async () => {
        try {
            const { data } = await calendarApi.get('/events');
            const events = stringEventsToDateEvents(data.events);
            console.log(events)
            dispatch(onLoadEvents(events));

        } catch (error) {
            console.log("Error al cargar los eventos");
            console.error(error);
        }
    }

    return {
        //Propiedades
        events,
        activeEvent,
        hasEvenSelected: !!activeEvent,

        //Metodos
        setActiveEvent,
        startLoadingEvents,
        startSavingEvent,
        startDeletingEvent,
    }
}
