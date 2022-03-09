'use strict';

const bcrypt = require('bcrypt');

const PASSWORD_SALT_ROUNDS = 10;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const usersArray = [
      {
        email: 'user@example.org',
        password: await bcrypt.hash('hola.123', PASSWORD_SALT_ROUNDS),
      },
      {
        email: 'test@example.org',
        password: await bcrypt.hash('hola.123', PASSWORD_SALT_ROUNDS),
      },
    ];

    const commonData = {
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await queryInterface.bulkInsert(
      'users',
      usersArray.map((user) => ({ ...user, ...commonData })),
    );
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('users', null);
  }
};
