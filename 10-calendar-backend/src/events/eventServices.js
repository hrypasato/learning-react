const Event = require('../schemas/Event');

/* const findUser = async ( args ) => {
    const user = await User.findOne({ ...args });
    return user;
} */

const getAllEvents = async () => {
    const allEvents = await Event.find().populate('user', 'name');
    return allEvents;
}

const createNewEvent = async ( args ) => {
    const newEvent = new Event({ ...args });

    await newEvent.save()
    return newEvent;
}

const getEventById = async( id ) => {
    const event = await Event.findById(id);
    return event;
}

const updateEventOnDB = async ( id, eventToUpdate ) => {
    const eventUpdated = await Event.findByIdAndUpdate(id, eventToUpdate, { new:true });
    return eventUpdated;
}

const deleteEventOnDB = async ( id ) => {
    await Event.findByIdAndDelete( id );
}

module.exports = {
    createNewEvent,
    getAllEvents,
    getEventById,
    updateEventOnDB,
    deleteEventOnDB,
}