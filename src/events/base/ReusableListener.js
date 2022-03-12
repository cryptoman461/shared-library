const listener = {
  subject: null,
  queueGroupName: null,
  client: null,
  ackWait: 5 * 1000,
  subscriptionOptions: () => {
    return listener.client
      .subscriptionOptions()
      .setDeliverAllAvailable()
      .setManualAckMode(true)
      .setAckWait(listener.ackWait)
      .setDurableName(listener.queueGroupName);
  },
  listen: () => {
    const subscripton = listener.client.subscribe(
      listener.subject,
      listener.queueGroupName,
      listener.subscriptionOptions()
    );
    subscripton.on("message", (msg) => {
      console.log(
        `Msg Received: ${listener.subject} / ${listener.queueGroupName}`
      );
      const parsedData = listener.parseMessage(msg);
      listener.onMessage(parsedData, msg);
    });
  },
  parseMessage: (msg) => {
    const data = msg.getData();
    return typeof data === "string"
      ? JSON.parse(data)
      : JSON.parse(data.toString("utf8"));
  },
  onMessage: null,
};

module.exports.Listener = listener;
