const { Subjects } = require("./Subjects");

const TicketCreatedEvent = {
  subject: Subjects.TicketCreated,
  data: {
    id: "",
    title: "",
    price: 0,
    userId: "",
  },
};

module.exports.TicketCreatedEvent = TicketCreatedEvent;
