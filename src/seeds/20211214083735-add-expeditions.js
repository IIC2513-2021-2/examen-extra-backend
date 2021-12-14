module.exports = {
  up: async (queryInterface) => {
    const expeditionsArray = [
      {
        name: 'Soyuz MS-20',
        startDate: '2021-12-08',
        endDate: '2021-12-20',
        patch: null,
        description: 'The International Space Station (ISS) is a space station, or a habitable artificial satellite, in low Earth orbit. Its first component was launched into orbit in 1998, with the first long-term residents arriving in November 2000. It has been inhabited continuously since that date. The last pressurised module was fitted in 2011, and an experimental inflatable space habitat was added in 2016. The station is expected to operate until 2030. Development and assembly of the station continues, with several new elements scheduled for launch in 2019. The ISS is the largest human-made body in low Earth orbit and can often be seen with the naked eye from Earth. The ISS consists of pressurised habitation modules, structural trusses, solar arrays, radiators, docking ports, experiment bays and robotic arms. ISS components have been launched by Russian Proton and Soyuz rockets, and American Space Shuttles.',
      },
      {
        name: 'Expedition 66',
        startDate: '2021-10-17',
        endDate: null,
        patch: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/mission_patch_images/expedition2520_mission_patch_20211017070255.png',
        description: 'The International Space Station (ISS) is a space station, or a habitable artificial satellite, in low Earth orbit. Its first component was launched into orbit in 1998, with the first long-term residents arriving in November 2000. It has been inhabited continuously since that date. The last pressurised module was fitted in 2011, and an experimental inflatable space habitat was added in 2016. The station is expected to operate until 2030. Development and assembly of the station continues, with several new elements scheduled for launch in 2019. The ISS is the largest human-made body in low Earth orbit and can often be seen with the naked eye from Earth. The ISS consists of pressurised habitation modules, structural trusses, solar arrays, radiators, docking ports, experiment bays and robotic arms. ISS components have been launched by Russian Proton and Soyuz rockets, and American Space Shuttles.',
      },
      {
        name: 'Challenge Movie Crew',
        startDate: '2021-10-05',
        endDate: '22021-10-17',
        patch: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/mission_patch_images/soyuz2520ms-19_mission_patch_20210807140848.png',
        description: 'The International Space Station (ISS) is a space station, or a habitable artificial satellite, in low Earth orbit. Its first component was launched into orbit in 1998, with the first long-term residents arriving in November 2000. It has been inhabited continuously since that date. The last pressurised module was fitted in 2011, and an experimental inflatable space habitat was added in 2016. The station is expected to operate until 2030. Development and assembly of the station continues, with several new elements scheduled for launch in 2019. The ISS is the largest human-made body in low Earth orbit and can often be seen with the naked eye from Earth. The ISS consists of pressurised habitation modules, structural trusses, solar arrays, radiators, docking ports, experiment bays and robotic arms. ISS components have been launched by Russian Proton and Soyuz rockets, and American Space Shuttles.',
      },
      {
        name: 'Expedition 65',
        startDate: '2021-04-17',
        endDate: '2021-10-17',
        patch: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/mission_patch_images/expedition2520_mission_patch_20211017070409.png',
        description: 'The International Space Station (ISS) is a space station, or a habitable artificial satellite, in low Earth orbit. Its first component was launched into orbit in 1998, with the first long-term residents arriving in November 2000. It has been inhabited continuously since that date. The last pressurised module was fitted in 2011, and an experimental inflatable space habitat was added in 2016. The station is expected to operate until 2030. Development and assembly of the station continues, with several new elements scheduled for launch in 2019. The ISS is the largest human-made body in low Earth orbit and can often be seen with the naked eye from Earth. The ISS consists of pressurised habitation modules, structural trusses, solar arrays, radiators, docking ports, experiment bays and robotic arms. ISS components have been launched by Russian Proton and Soyuz rockets, and American Space Shuttles.',
      },
      {
        name: 'Expedition 64',
        startDate: '2020-10-20',
        endDate: '2021-04-17',
        patch: null,
        description: 'The International Space Station (ISS) is a space station, or a habitable artificial satellite, in low Earth orbit. Its first component was launched into orbit in 1998, with the first long-term residents arriving in November 2000. It has been inhabited continuously since that date. The last pressurised module was fitted in 2011, and an experimental inflatable space habitat was added in 2016. The station is expected to operate until 2030. Development and assembly of the station continues, with several new elements scheduled for launch in 2019. The ISS is the largest human-made body in low Earth orbit and can often be seen with the naked eye from Earth. The ISS consists of pressurised habitation modules, structural trusses, solar arrays, radiators, docking ports, experiment bays and robotic arms. ISS components have been launched by Russian Proton and Soyuz rockets, and American Space Shuttles.',
      },
      {
        name: 'Expedition 63',
        startDate: '2020-04-17',
        endDate: '2020-10-20',
        patch: null,
        description: 'The International Space Station (ISS) is a space station, or a habitable artificial satellite, in low Earth orbit. Its first component was launched into orbit in 1998, with the first long-term residents arriving in November 2000. It has been inhabited continuously since that date. The last pressurised module was fitted in 2011, and an experimental inflatable space habitat was added in 2016. The station is expected to operate until 2030. Development and assembly of the station continues, with several new elements scheduled for launch in 2019. The ISS is the largest human-made body in low Earth orbit and can often be seen with the naked eye from Earth. The ISS consists of pressurised habitation modules, structural trusses, solar arrays, radiators, docking ports, experiment bays and robotic arms. ISS components have been launched by Russian Proton and Soyuz rockets, and American Space Shuttles.',
      },
      {
        name: 'Expedition 62',
        startDate: '2020-02-05',
        endDate: '2020-04-17',
        patch: null,
        description: 'The International Space Station (ISS) is a space station, or a habitable artificial satellite, in low Earth orbit. Its first component was launched into orbit in 1998, with the first long-term residents arriving in November 2000. It has been inhabited continuously since that date. The last pressurised module was fitted in 2011, and an experimental inflatable space habitat was added in 2016. The station is expected to operate until 2030. Development and assembly of the station continues, with several new elements scheduled for launch in 2019. The ISS is the largest human-made body in low Earth orbit and can often be seen with the naked eye from Earth. The ISS consists of pressurised habitation modules, structural trusses, solar arrays, radiators, docking ports, experiment bays and robotic arms. ISS components have been launched by Russian Proton and Soyuz rockets, and American Space Shuttles.',
      },
      {
        name: 'Expedition 61',
        startDate: '2019-10-02',
        endDate: '2020-02-05',
        patch: null,
        description: 'The International Space Station (ISS) is a space station, or a habitable artificial satellite, in low Earth orbit. Its first component was launched into orbit in 1998, with the first long-term residents arriving in November 2000. It has been inhabited continuously since that date. The last pressurised module was fitted in 2011, and an experimental inflatable space habitat was added in 2016. The station is expected to operate until 2030. Development and assembly of the station continues, with several new elements scheduled for launch in 2019. The ISS is the largest human-made body in low Earth orbit and can often be seen with the naked eye from Earth. The ISS consists of pressurised habitation modules, structural trusses, solar arrays, radiators, docking ports, experiment bays and robotic arms. ISS components have been launched by Russian Proton and Soyuz rockets, and American Space Shuttles.',
      },
      {
        name: 'Expedition 60',
        startDate: '2019-06-24',
        endDate: '2019-10-02',
        patch: null,
        description: 'The International Space Station (ISS) is a space station, or a habitable artificial satellite, in low Earth orbit. Its first component was launched into orbit in 1998, with the first long-term residents arriving in November 2000. It has been inhabited continuously since that date. The last pressurised module was fitted in 2011, and an experimental inflatable space habitat was added in 2016. The station is expected to operate until 2030. Development and assembly of the station continues, with several new elements scheduled for launch in 2019. The ISS is the largest human-made body in low Earth orbit and can often be seen with the naked eye from Earth. The ISS consists of pressurised habitation modules, structural trusses, solar arrays, radiators, docking ports, experiment bays and robotic arms. ISS components have been launched by Russian Proton and Soyuz rockets, and American Space Shuttles.',
      },
      {
        name: 'Expedition 59',
        startDate: '2019-03-15',
        endDate: '2019-06-24',
        patch: null,
        description: 'The International Space Station (ISS) is a space station, or a habitable artificial satellite, in low Earth orbit. Its first component was launched into orbit in 1998, with the first long-term residents arriving in November 2000. It has been inhabited continuously since that date. The last pressurised module was fitted in 2011, and an experimental inflatable space habitat was added in 2016. The station is expected to operate until 2030. Development and assembly of the station continues, with several new elements scheduled for launch in 2019. The ISS is the largest human-made body in low Earth orbit and can often be seen with the naked eye from Earth. The ISS consists of pressurised habitation modules, structural trusses, solar arrays, radiators, docking ports, experiment bays and robotic arms. ISS components have been launched by Russian Proton and Soyuz rockets, and American Space Shuttles.',
      },
    ];

    const commonData = {
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await queryInterface.bulkInsert(
      'expeditions',
      expeditionsArray.map((expedition) => ({ ...expedition, ...commonData })),
    );
  },

  down: (queryInterface) => queryInterface.bulkDelete('expeditions', null),
};
