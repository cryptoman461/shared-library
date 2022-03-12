const { Subjects } = require("./Subjects");

const TicketUpdatedEvent = {
  subject: Subjects.TicketUpdated,
  data: {
    id: "",
    title: "",
    price: 0,
    userId: "",
  },
};

module.exports.TicketUpdatedEvent = TicketUpdatedEvent;
