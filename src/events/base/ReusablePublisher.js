const Publisher = {
  subject: null,
  client: null,
  publish: (data) => {
    return new Promise((resolve, reject) => {
      Publisher.client.publish(
        Publisher.subject,
        JSON.stringify(data),
        (err) => {
          if (err) {
            return reject(err);
          }
          resolve();
        }
      );
    });
  },
};

module.exports.Publisher = Publisher;
