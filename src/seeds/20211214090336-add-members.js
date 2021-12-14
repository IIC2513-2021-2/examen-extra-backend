const { QueryTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface) => {
    const commonData = {
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    async function findExpeditionIdByName(name) {
      const expeditions = await queryInterface.sequelize.query(
        'SELECT "id" FROM "expeditions" WHERE "expeditions"."name" = ?',
        {
          replacements: [name],
          type: QueryTypes.SELECT,
        },
      );

      const [expeditionId] = expeditions.map(({ id }) => id);
      return expeditionId;
    }

    async function buildMemberData(rawData) {
      const expeditionId = await findExpeditionIdByName(rawData.expeditionName);
      return {
        ...rawData.memberData,
        expeditionId,
      };
    }

    const membersRawData = [
      {
        expeditionName: 'Soyuz MS-20',
        memberData: {
          name: 'Alexander Misurkin',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: '',
          bio: '',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/alexander_misur_image_20211102151859.jpg',
          role: 'Commander',
        },
      },
      {
        expeditionName: 'Soyuz MS-20',
        memberData: {
          name: 'Yusaku Maezawa',
          agency: 'Space Adventures',
          nationality: '',
          bio: '',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/yusaku_maezawa_image_20211102152037.jpg',
          role: 'Tourist',
        },
      },
      {
        expeditionName: 'Soyuz MS-20',
        memberData: {
          name: 'Yozo Hirano',
          agency: 'Space Adventures',
          nationality: '',
          bio: '',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/yozo_hirano_image_20211102151705.jpg',
          role: 'Tourist',
        },
      },
      {
        expeditionName: 'Expedition 66',
        memberData: {
          name: 'Pyotr Dubrov',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: '',
          bio: '',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/pyotr_dubrov_image_20201120155626.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 66',
        memberData: {
          name: 'Mark T. Vande Hei',
          agency: 'National Aeronautics and Space Administration',
          nationality: '',
          bio: '',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/mark2520t.2520vande2520hei_image_20181203172617.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 66',
        memberData: {
          name: 'Anton Shkaplerov',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: '',
          bio: '',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/anton_shkaplero_image_20211001184311.jpg',
          role: 'Commander',
        },
      },
      {
        expeditionName: 'Expedition 66',
        memberData: {
          name: 'Raja Chari',
          agency: 'National Aeronautics and Space Administration',
          nationality: '',
          bio: '',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/raja_chari_image_20211001184813.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 66',
        memberData: {
          name: 'Thomas Marshburn',
          agency: 'National Aeronautics and Space Administration',
          nationality: '',
          bio: '',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/thomas_marshbur_image_20211001184611.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 66',
        memberData: {
          name: 'Kayla Barron',
          agency: 'National Aeronautics and Space Administration',
          nationality: '',
          bio: '',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/kayla_barron_image_20211001184846.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 66',
        memberData: {
          name: 'Matthias Maurer',
          agency: 'European Space Agency',
          nationality: '',
          bio: '',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/matthias_maurer_image_20211001184714.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Challenge Movie Crew',
        memberData: {
          name: 'Klim Shipenko',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: '',
          bio: '',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/klim_shipenko_image_20211001184321.jpg',
          role: 'Filmmaker',
        },
      },
      {
        expeditionName: 'Challenge Movie Crew',
        memberData: {
          name: 'Yulia Peresild',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: '',
          bio: '',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/yulia_peresild_image_20211001184315.jpg',
          role: 'Actress',
        },
      },
      {
        expeditionName: 'Expedition 65',
        memberData: {
          name: 'Pyotr Dubrov',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: '',
          bio: '',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/pyotr_dubrov_image_20201120155626.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 65',
        memberData: {
          name: 'Mark T. Vande Hei',
          agency: 'National Aeronautics and Space Administration',
          nationality: '',
          bio: '',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/mark2520t.2520vande2520hei_image_20181203172617.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 65',
        memberData: {
          name: 'Oleg Novitskiy',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: '',
          bio: '',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/oleg2520novitskiy_image_20181201183707.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 65',
        memberData: {
          name: 'Robert S. Kimbrough',
          agency: 'National Aeronautics and Space Administration',
          nationality: '',
          bio: '',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/robert2520s.2520kimbrough_image_20181203171305.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 65',
        memberData: {
          name: 'K. Megan McArthur',
          agency: 'National Aeronautics and Space Administration',
          nationality: '',
          bio: '',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/k._megan_mcarth_image_20210206225642.jpeg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 65',
        memberData: {
          name: 'Akihiko Hoshide',
          agency: 'Japan Aerospace Exploration Agency',
          nationality: '',
          bio: '',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/akihiko_hoshide_image_20210327081731.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 65',
        memberData: {
          name: 'Thomas Pesquet',
          agency: 'European Space Agency',
          nationality: '',
          bio: '',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/thomas2520pesquet_image_20200102120546.jpeg',
          role: 'Commander',
        },
      },
      {
        expeditionName: 'Expedition 65',
        memberData: {
          name: 'Anton Shkaplerov',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: '',
          bio: '',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/anton_shkaplero_image_20211001184311.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 64',
        memberData: {
          name: 'Sergey Ryzhikov',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: '',
          bio: '',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/sergey_ryzhikov_image_20200603213525.jpg',
          role: 'Commander',
        },
      },
      {
        expeditionName: 'Expedition 64',
        memberData: {
          name: 'Kathleen Rubins',
          agency: 'National Aeronautics and Space Administration',
          nationality: '',
          bio: '',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/kathleen2520rubins_image_20181203172435.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 64',
        memberData: {
          name: 'Sergey Kud-Sverchkov',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: '',
          bio: '',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/sergey_kud-sver_image_20200603145217.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 64',
        memberData: {
          name: 'Michael S. Hopkins',
          agency: 'National Aeronautics and Space Administration',
          nationality: '',
          bio: '',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/michael2520s.2520hopkins_image_20181127212118.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 64',
        memberData: {
          name: 'Victor J. Glover',
          agency: 'National Aeronautics and Space Administration',
          nationality: '',
          bio: '',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/victor2520j.2520glover_image_20181203173351.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 64',
        memberData: {
          name: 'Soichi Noguchi',
          agency: 'Japan Aerospace Exploration Agency',
          nationality: '',
          bio: '',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/soichi_noguchi_image_20200402084741.jpeg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 64',
        memberData: {
          name: 'Shannon Walker',
          agency: 'National Aeronautics and Space Administration',
          nationality: '',
          bio: '',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/shannon2520walker_image_20181203171551.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 64',
        memberData: {
          name: 'Oleg Novitskiy',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: '',
          bio: '',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/oleg2520novitskiy_image_20181201183707.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 64',
        memberData: {
          name: 'Pyotr Dubrov',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: '',
          bio: '',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/pyotr_dubrov_image_20201120155626.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 64',
        memberData: {
          name: 'Mark T. Vande Hei',
          agency: 'National Aeronautics and Space Administration',
          nationality: '',
          bio: '',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/mark2520t.2520vande2520hei_image_20181203172617.jpg',
          role: 'Flight Engineer',
        },
      },
    ];

    const membersArray = await Promise.all(membersRawData.map(
      (rawData) => buildMemberData(rawData),
    ));
    await queryInterface.bulkInsert(
      'members',
      membersArray.map((member) => ({ ...member, ...commonData })),
    );
  },

  down: (queryInterface) => queryInterface.bulkDelete('members', null),
};
