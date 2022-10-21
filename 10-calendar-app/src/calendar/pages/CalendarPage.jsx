import { useEffect, useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { CalendarEvent, CalendarModal, FabAddNew, FabDelete, Navbar } from "../components";
import { localizer, getMessagesES } from '../../helpers';
import { useAuthStore, useCalendarStore, useUiStore } from '../../hooks';


export const CalendarPage = () => {

    const { user } = useAuthStore();
    const { openDateModal } = useUiStore();
    const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');

    const eventStyleGetter = (event, start, end, isSelected) => {
        
        const isMyEvent = user.uid === (event.user._id || event.user.uid );
        
        const style = {
            backgroundColor: isMyEvent ? '#347CF7' : '#465660',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white',
        }

        return {
            style,
        }
    }


    const onDoubleClick = ( event ) => {
        openDateModal();
    }

    const onSelect = ( event ) => {
        setActiveEvent(event);
    }

    const onViewChanged = ( event ) => {
        localStorage.setItem('lastView', event);
    }

    useEffect(() => {
        startLoadingEvents();
    }, [])
    

    return (
        <>
            <Navbar />
            <Calendar
                messages={ getMessagesES() }
                defaultView={ lastView }
                culture='es'
                localizer={localizer}
                events={ events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100vh - 80px' }}
                eventPropGetter={ eventStyleGetter }
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelect }
                onView={ onViewChanged }
                components={{
                    event:CalendarEvent
                }}
            />
            <CalendarModal/>
            <FabAddNew/>
            <FabDelete/>
        </>
    );
}