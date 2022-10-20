const { request, response } = require('express');
const autoCatch = require('../lib/autoCatch');

const { createNewEvent, getAllEvents, getEventById, updateEventOnDB, deleteEventOnDB } = require('./eventServices');

const getEvents = async (req = request, res = response) => {
    const events = await getAllEvents();
    res.json({
        ok:true,
        data:events,
    })
}

const createEvent = async (req = request, res = response) => {
    const event = req.body; 
    event.user = req.uid;

    const newEvent = await createNewEvent( event );

    res.json({
        ok:true,
        data:newEvent,
    })
}

const updateEvent = async (req = request, res = response) => {

    const { id } = req.params;
    const { uid } = req;

    const event = await getEventById( id );

    if(!event) throw { status:404, message:'Event not found' }

    if(event.user.toString() !== uid){
        throw { status:401, message:'No tiene privilegios para editar este evento' }
    } 
    
    const eventToUpdate = { ...req.body, user:uid }

    const eventUpdated = await updateEventOnDB(id, eventToUpdate);

    res.json({
        ok:true,
        data:eventUpdated,
    })
}

const deleteEvent = async (req = request, res = response) => {
    const { id } = req.params;
    const { uid } = req;

    const event = await getEventById( id );

    if(!event) throw { status:404, message:'Event not found' }

    if(event.user.toString() !== uid){
        throw { status:401, message:'No tiene privilegios para eliminar este evento' }
    } 
    
    await deleteEventOnDB(id);

    res.json({
        ok:true,
    })
}

module.exports = autoCatch({
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent,
})