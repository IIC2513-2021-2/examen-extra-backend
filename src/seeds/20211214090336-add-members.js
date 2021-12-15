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
          nationality: 'Russian',
          bio: 'Alexander Alexanderovich Misurkin (Russian: Aлександр Aлександрович Мисуркин) born on September 23, 1977, a major in the Russian Air Force, is a Russian cosmonaut, selected in 2006. He flew aboard Soyuz TMA-08M on 28 March 2013 as his first space mission, and launched on Soyuz MS-06 as his second flight, in 2017. He was Commander of the International Space Station for Expedition 54.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/alexander_misur_image_20211102151859.jpg',
          role: 'Commander',
        },
      },
      {
        expeditionName: 'Soyuz MS-20',
        memberData: {
          name: 'Yusaku Maezawa',
          agency: 'Space Adventures',
          nationality: 'Japanese',
          bio: 'Yusaku Maezawa is a Japanese billionaire entrepreneur and art collector. He founded Start Today in 1998 and launched the online fashion retail website Zozotown in 2004, now Japan\'s largest. Most recently, Maezawa introduced a custom-fit apparel brand ZOZO and at-home measurement system, the ZOZOSUIT, in 2018.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/yusaku_maezawa_image_20211102152037.jpg',
          role: 'Tourist',
        },
      },
      {
        expeditionName: 'Soyuz MS-20',
        memberData: {
          name: 'Yozo Hirano',
          agency: 'Space Adventures',
          nationality: 'Japanese',
          bio: 'Born in Ehime Prefecture, Japan in 1985. Yozo joined ZOZO Co. Ltd shortly after graduating from university, in charge of management and casting director of the photography team.  After leaving ZOZO, he started working as a producer and manager for Yusaku Maezawa’s private projects.\r\n\r\nExact date of birth is unknown.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/yozo_hirano_image_20211102151705.jpg',
          role: 'Tourist',
        },
      },
      {
        expeditionName: 'Expedition 66',
        memberData: {
          name: 'Pyotr Dubrov',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: 'Russian',
          bio: 'Dubrov was selected by Roscosmos as a cosmonaut on 8 October 2012, as one of eight cosmonauts selected as part of Roscosmos\'s 2012 selection group.\r\nIn 2020 he was assigned to the backup crew of Soyuz MS-17, backing up Russian cosmonaut Sergey Kud-Sverchkov as Flight Engineer on ISS Expedition 63/64',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/pyotr_dubrov_image_20201120155626.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 66',
        memberData: {
          name: 'Mark T. Vande Hei',
          agency: 'National Aeronautics and Space Administration',
          nationality: 'American',
          bio: 'Mark Thomas Vande Hei is a NASA astronaut who served as a flight Engineer for Expedition 53 and 54 on the International Space Station.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/mark2520t.2520vande2520hei_image_20181203172617.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 66',
        memberData: {
          name: 'Anton Shkaplerov',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: 'Russian',
          bio: 'Anton Nikolaevich Shkaplerov (Russian: Антон Николаевич Шкаплеров) (born February 20, 1972 in Sevastopol, Ukrainian SSR) is a Russian cosmonaut. He is a veteran of three spaceflights and is a former Commander of the International Space Station.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/anton_shkaplero_image_20211001184311.jpg',
          role: 'Commander',
        },
      },
      {
        expeditionName: 'Expedition 66',
        memberData: {
          name: 'Raja Chari',
          agency: 'National Aeronautics and Space Administration',
          nationality: 'American',
          bio: 'Raja Jon Vurputoor Chari is an American test pilot and NASA astronaut of the class of 2017. He is a graduate of the U.S. Air Force Academy, MIT, and U.S. Naval Test Pilot School, and has over 2,000 flying hours.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/raja_chari_image_20211001184813.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 66',
        memberData: {
          name: 'Thomas Marshburn',
          agency: 'National Aeronautics and Space Administration',
          nationality: 'American',
          bio: 'Thomas Henry "Tom" Marshburn is an American physician and a NASA astronaut. He served as a Mission Specialist on STS-127. Marshburn was a member of the Soyuz TMA-07M crew which launched to ISS in December 2012 to join Expedition 34. Served as flight engineer for Expedition 34 and 35.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/thomas_marshbur_image_20211001184611.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 66',
        memberData: {
          name: 'Kayla Barron',
          agency: 'National Aeronautics and Space Administration',
          nationality: 'American',
          bio: 'Kayla Jane Barron is an American submarine warfare officer and NASA astronaut candidate of the class of 2017.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/kayla_barron_image_20211001184846.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 66',
        memberData: {
          name: 'Matthias Maurer',
          agency: 'European Space Agency',
          nationality: 'German',
          bio: 'Maurer applied to the European Space Agency as an astronaut in 2008, but was not initially appointed to the European Astronaut Corps. He formally joined the European Astronaut Corps in July 2015. In March 2018, he gained certification to perform International Space Station-related spacewalks in the American spacesuit EMU. In 2018 he also successfully graduated from both basic astronaut training and pre-assignment training and thus became fully certified to go to space.\r\nOn 28 July 2020, Maurer was announced as a backup for Thomas Pesquet for the ISS expedition 65. His own flight is scheduled to take place no earlier than September 2021 aboard SpaceX Crew-3.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/matthias_maurer_image_20211001184714.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Challenge Movie Crew',
        memberData: {
          name: 'Klim Shipenko',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: 'Russian',
          bio: 'Klim Shipenko is a Russian film director, screenwriter, actor and producer.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/klim_shipenko_image_20211001184321.jpg',
          role: 'Filmmaker',
        },
      },
      {
        expeditionName: 'Challenge Movie Crew',
        memberData: {
          name: 'Yulia Peresild',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: 'Russian',
          bio: 'Yulia Sergeevna Peresild is a Russian stage and film actress.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/yulia_peresild_image_20211001184315.jpg',
          role: 'Actress',
        },
      },
      {
        expeditionName: 'Expedition 65',
        memberData: {
          name: 'Pyotr Dubrov',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: 'Russian',
          bio: 'Dubrov was selected by Roscosmos as a cosmonaut on 8 October 2012, as one of eight cosmonauts selected as part of Roscosmos\'s 2012 selection group.\r\nIn 2020 he was assigned to the backup crew of Soyuz MS-17, backing up Russian cosmonaut Sergey Kud-Sverchkov as Flight Engineer on ISS Expedition 63/64',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/pyotr_dubrov_image_20201120155626.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 65',
        memberData: {
          name: 'Mark T. Vande Hei',
          agency: 'National Aeronautics and Space Administration',
          nationality: 'American',
          bio: 'Mark Thomas Vande Hei is a NASA astronaut who served as a flight Engineer for Expedition 53 and 54 on the International Space Station.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/mark2520t.2520vande2520hei_image_20181203172617.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 65',
        memberData: {
          name: 'Oleg Novitskiy',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: 'Russian',
          bio: 'Oleg Viktorovich Novitskiy, lieutenant colonel in the Russian Air Force, is a Russian cosmonaut.\r\n\r\nNovitskiy was selected as a cosmonaut in 2006.Between February 2007 to July 2009 he completed basic spaceflight training and passed state exams with excellent grades. On August 1, 2009, he was qualified as a test-cosmonaut by the Interdepartmental Qualification Board, and between August 2009 to March 2010 he took the ISS advanced training course.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/oleg2520novitskiy_image_20181201183707.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 65',
        memberData: {
          name: 'Robert S. Kimbrough',
          agency: 'National Aeronautics and Space Administration',
          nationality: 'American',
          bio: 'Robert Shane Kimbrough is a retired United States Army officer, and a NASA astronaut. He was part of the first group of candidates selected for NASA astronaut training following the Space Shuttle Columbia disaster. Kimbrough is a veteran of two spaceflights, the first being a Space Shuttle flight, and the second being a 6-month mission to the ISS on board a Russian Soyuz craft. He was the commander of the International Space Station for Expedition 50, and returned to Earth in April 2017.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/robert2520s.2520kimbrough_image_20181203171305.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 65',
        memberData: {
          name: 'K. Megan McArthur',
          agency: 'National Aeronautics and Space Administration',
          nationality: 'American',
          bio: 'Katherine Megan McArthur is an American oceanographer and a National Aeronautics and Space Administration (NASA) astronaut. She has served as a Capsule Communicator (CAPCOM) for both the space shuttle and space station. Megan McArthur has flown one space shuttle mission, STS-125. She is known as the last person to be hands on with the Hubble Space Telescope (although she was not actually "hands on" since she was using the robotic arm at the time). McArthur has served in a number of positions including working in the Shuttle Avionics Laboratory (SAIL). She is married to fellow astronaut Robert L. Behnken.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/k._megan_mcarth_image_20210206225642.jpeg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 65',
        memberData: {
          name: 'Akihiko Hoshide',
          agency: 'Japan Aerospace Exploration Agency',
          nationality: 'Japanese',
          bio: 'Akihiko Hoshide is a Japanese engineer and JAXA astronaut. On August 30, 2012, Hoshide became the third Japanese astronaut to walk in space. His space selfies from 2012, including another space selfie that was posted on Instagram, appeared at the top of many selfie lists of 2013.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/akihiko_hoshide_image_20210327081731.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 65',
        memberData: {
          name: 'Thomas Pesquet',
          agency: 'European Space Agency',
          nationality: 'French',
          bio: 'Thomas Gautier Pesquet is a French aerospace engineer, pilot, and European Space Agency astronaut. Pesquet was selected by ESA as a candidate in May 2009, and he successfully completed his basic training in November 2010. From November 2016 to June 2017, Pesquet was part of Expeditions 50 and 51 on the International Space Station as a flight engineer.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/thomas2520pesquet_image_20200102120546.jpeg',
          role: 'Commander',
        },
      },
      {
        expeditionName: 'Expedition 65',
        memberData: {
          name: 'Anton Shkaplerov',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: 'Russian',
          bio: 'Anton Nikolaevich Shkaplerov (Russian: Антон Николаевич Шкаплеров) (born February 20, 1972 in Sevastopol, Ukrainian SSR) is a Russian cosmonaut. He is a veteran of three spaceflights and is a former Commander of the International Space Station.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/anton_shkaplero_image_20211001184311.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 64',
        memberData: {
          name: 'Sergey Ryzhikov',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: 'Russian',
          bio: 'Sergey Nikolayevich Ryzhiko born on August 19, 1974, lieutenant colonel of Russian Air Force, is a Russian cosmonaut, selected in 2006. Ryzhikov launched on his first spaceflight onboard the Soyuz MS-02 spacecraft. He spent approximately six months onboard the International Space Station taking part in Expedition 49/50, returning to Earth on April 10, 2017.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/sergey_ryzhikov_image_20200603213525.jpg',
          role: 'Commander',
        },
      },
      {
        expeditionName: 'Expedition 64',
        memberData: {
          name: 'Kathleen Rubins',
          agency: 'National Aeronautics and Space Administration',
          nationality: 'American',
          bio: 'Kathleen Hallisey "Kate" Rubins is a NASA astronaut. She became the 60th woman to fly in space when she launched on a Soyuz spacecraft to the International Space Station on July 6, 2016. She returned to Earth on October 30, 2016 aboard a Soyuz. She was a crew member of Expedition 48 and Expedition 49 of the International Space Station.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/kathleen2520rubins_image_20181203172435.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 64',
        memberData: {
          name: 'Sergey Kud-Sverchkov',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: 'Russian',
          bio: 'Sergey Vladimirvich Kud-Sverchkov Is a Kazakh-Russian engineer and cosmonaut selected in 2010.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/sergey_kud-sver_image_20200603145217.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 64',
        memberData: {
          name: 'Michael S. Hopkins',
          agency: 'National Aeronautics and Space Administration',
          nationality: 'American',
          bio: 'Michael Scott Hopkins (born December 28, 1968) is a Colonel in the U.S. Air Force, and a current NASA astronaut. Hopkins was selected in June 2009 as a member of the NASA Astronaut Group 20. He made his first spaceflight as a Flight Engineer on Soyuz TMA-10M/Expedition 37/Expedition 38, from September 2013 until March 2014. He was the first member of his astronaut class to fly in space. As well as being the first member of his class to fly in space, he is set to become the first member of his class to return to space in 2019 as Commander of the first operational SpaceX Crew Dragon mission to the International Space Station.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/michael2520s.2520hopkins_image_20181127212118.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 64',
        memberData: {
          name: 'Victor J. Glover',
          agency: 'National Aeronautics and Space Administration',
          nationality: 'American',
          bio: 'Victor Jerome Glover is a NASA astronaut of the class of 2013.\r\n\r\nGlover is a Commander in the U.S. Navy who hails from Pomona, California and Prosper, Texas. He is an F/A-18 pilot and graduate of the U.S. Air Force Test Pilot School. Glover holds degrees from California Polytechnic State University at San Luis Obispo, Air University and Naval Postgraduate School. He was a naval legislative fellow working on the personal staff of the Honorable John McCain supporting defense and foreign relations policy and oversight.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/victor2520j.2520glover_image_20181203173351.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 64',
        memberData: {
          name: 'Soichi Noguchi',
          agency: 'Japan Aerospace Exploration Agency',
          nationality: 'Japanese',
          bio: 'Soichi Noguchi (野口 聡一 Noguchi Sōichi, born 15 April 1965 in Yokohama, Japan) is a Japanese aeronautical engineer and JAXA astronaut. His first spaceflight was as a Mission Specialist aboard STS-114 on 26 July 2005 for NASA\'s first "return to flight" Space Shuttle mission after the Columbia disaster. He was most recently in space as part of the Soyuz TMA-17 crew and Expedition 22 to the International Space Station (ISS), returning to Earth on 2 June 2010. He is the fifth Japanese astronaut to fly in space and the fourth to fly on the space shuttle.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/soichi_noguchi_image_20200402084741.jpeg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 64',
        memberData: {
          name: 'Shannon Walker',
          agency: 'National Aeronautics and Space Administration',
          nationality: 'American',
          bio: 'Shannon Walker is an American scientist and a NASA astronaut, whose first space mission was Expedition 24 on the International Space Station with take-off on 15 June 2010.She is married to a fellow NASA astronaut, the Australian-born Andy Thomas. She is a member of the Aircraft Owners and Pilots Association (AOPA) and The Ninety-Nines International Organization of Women Pilots.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/shannon2520walker_image_20181203171551.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 64',
        memberData: {
          name: 'Oleg Novitskiy',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: 'Russian',
          bio: 'Oleg Viktorovich Novitskiy, lieutenant colonel in the Russian Air Force, is a Russian cosmonaut.\r\n\r\nNovitskiy was selected as a cosmonaut in 2006.Between February 2007 to July 2009 he completed basic spaceflight training and passed state exams with excellent grades. On August 1, 2009, he was qualified as a test-cosmonaut by the Interdepartmental Qualification Board, and between August 2009 to March 2010 he took the ISS advanced training course.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/oleg2520novitskiy_image_20181201183707.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 64',
        memberData: {
          name: 'Pyotr Dubrov',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: 'Russian',
          bio: 'Dubrov was selected by Roscosmos as a cosmonaut on 8 October 2012, as one of eight cosmonauts selected as part of Roscosmos\'s 2012 selection group.\r\nIn 2020 he was assigned to the backup crew of Soyuz MS-17, backing up Russian cosmonaut Sergey Kud-Sverchkov as Flight Engineer on ISS Expedition 63/64',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/pyotr_dubrov_image_20201120155626.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 64',
        memberData: {
          name: 'Mark T. Vande Hei',
          agency: 'National Aeronautics and Space Administration',
          nationality: 'American',
          bio: 'Mark Thomas Vande Hei is a NASA astronaut who served as a flight Engineer for Expedition 53 and 54 on the International Space Station.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/mark2520t.2520vande2520hei_image_20181203172617.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 63',
        memberData: {
          name: 'Christopher Cassidy',
          agency: 'National Aeronautics and Space Administration',
          nationality: 'American',
          bio: 'Christopher John "Chris" Cassidy is a NASA astronaut and United States Navy SEAL. Chris Cassidy achieved the rank of Captain in the U.S. Navy. He was the Chief of the Astronaut Office at NASA from July 2015 until June 2017.\r\n\r\nCassidy attended York High School, in York, Maine. He then graduated from the Naval Academy Preparatory School in Newport, Rhode Island, in 1989. He received a Bachelor of Science degree in Mathematics from the United States Naval Academy in 1993 and a Master of Science degree in Ocean Engineering from MIT in 2000. While in the Navy, Cassidy passed BUD/S and became a Navy SEAL. While a SEAL he served several tours of duty supporting the fight in the War on Terror. His first spaceflight was on Space Shuttle mission STS-127, and his second was as a flight engineer for Expedition 35/36, launched aboard Soyuz TMA-08M. He was in space between July 15–31, 2009 and March 28 – September 10, 2013. Cassidy has worked as a CAPCOM for both International Space Station and Space Shuttle missions in the past.\r\n\r\nCassidy announced his retirement from both the Navy and NASA Astronaut Corps on May 28, 2021.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/christopher_cas_image_20200408132634.jpeg',
          role: 'Commander',
        },
      },
      {
        expeditionName: 'Expedition 63',
        memberData: {
          name: 'Anatoli Ivanishin',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: 'Russian',
          bio: 'Anatoli Alekseyevich Ivanishin (Russian: Анатолий Алексеевич Иванишин; born 15 January 1969 in Irkutsk) is a Russian cosmonaut. His first visit to space was to the International Space Station on board the Soyuz TMA-22 spacecraft as an Expedition 29 / Expedition 30 crew member, launching in November 2011 and returning in April 2012. Ivanishin was the Commander of the International Space Station for Expedition 49. His third and last spaceflight was as a flight engineer during Expedition 62 / Expedition 63  in 2020. \r\nIvanishin retired in October 2021 to focus on science career.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/anatoli_ivanish_image_20200402084238.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 63',
        memberData: {
          name: 'Ivan Vagner',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: 'Russian',
          bio: 'Ivan Viktorovitch Vagner is a Russian Engineer and Cosmonaut who was selected in October 2010. He graduated from the Baltic State Technical University in 2008, before working as an engineer for RKK Energia.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/ivan_vagner_image_20200225164902.jpeg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 63',
        memberData: {
          name: 'Sergey Ryzhikov',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: 'Russian',
          bio: 'Sergey Nikolayevich Ryzhiko born on August 19, 1974, lieutenant colonel of Russian Air Force, is a Russian cosmonaut, selected in 2006. Ryzhikov launched on his first spaceflight onboard the Soyuz MS-02 spacecraft. He spent approximately six months onboard the International Space Station taking part in Expedition 49/50, returning to Earth on April 10, 2017.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/sergey_ryzhikov_image_20200603213525.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 63',
        memberData: {
          name: 'Sergey Kud-Sverchkov',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: 'Russian',
          bio: 'Sergey Vladimirvich Kud-Sverchkov Is a Kazakh-Russian engineer and cosmonaut selected in 2010.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/sergey_kud-sver_image_20200603145217.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 63',
        memberData: {
          name: 'Kathleen Rubins',
          agency: 'National Aeronautics and Space Administration',
          nationality: 'American',
          bio: 'Kathleen Hallisey "Kate" Rubins is a NASA astronaut. She became the 60th woman to fly in space when she launched on a Soyuz spacecraft to the International Space Station on July 6, 2016. She returned to Earth on October 30, 2016 aboard a Soyuz. She was a crew member of Expedition 48 and Expedition 49 of the International Space Station.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/kathleen2520rubins_image_20181203172435.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 62',
        memberData: {
          name: 'Andrew R. Morgan',
          agency: 'National Aeronautics and Space Administration',
          nationality: 'American',
          bio: 'Andrew Richard "Drew" Morgan is a NASA astronaut from the class of 2013.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/andrew2520r.2520morgan_image_20181127210807.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 62',
        memberData: {
          name: 'Jessica Meir',
          agency: 'National Aeronautics and Space Administration',
          nationality: 'American',
          bio: 'Jessica Ulrika Meir is Assistant Professor of Anesthesia at Harvard Medical School, Massachusetts General Hospital, Boston, following postdoctoral research in comparative physiology at the University of British Columbia. She has studied the diving physiology and behavior of emperor penguins in Antarctica, and the physiology of bar-headed geese, which are able to migrate over the Himalayas. In 2000, Meir graduated with a Master of Space Studies from the International Space University in Strasbourg, France. In September 2002, Meir served as an aquanaut on the NASA Extreme Environment Mission Operations 4 (NEEMO 4) crew. In June 2013 she was named an astronaut candidate by NASA, becoming one of the eight members of NASA Astronaut Group 21. She is from Caribou, Maine.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/jessica_meir_image_20200417064900.jpeg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 62',
        memberData: {
          name: 'Oleg Skripochka',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: 'Russian',
          bio: 'Oleg Ivanovich Skripochka (Russian: Оле́г Ива́нович Скри́почка; born 24 December 1969 in Nevinnomyssk, Stavropol Krai, Russian SFSR, Soviet Union) is a Russian cosmonaut. He served as an Expedition 25/26 and 61/62 crewmember.\r\nDecember 1st, 2021 Roskosmos announced Skripochka\'s retirement from active duty and his assignment to a training official role within the russian space agency.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/oleg_skripochka_image_20200417064956.jpeg',
          role: 'Commander',
        },
      },
      {
        expeditionName: 'Expedition 62',
        memberData: {
          name: 'Anatoli Ivanishin',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: 'Russian',
          bio: 'Anatoli Alekseyevich Ivanishin (Russian: Анатолий Алексеевич Иванишин; born 15 January 1969 in Irkutsk) is a Russian cosmonaut. His first visit to space was to the International Space Station on board the Soyuz TMA-22 spacecraft as an Expedition 29 / Expedition 30 crew member, launching in November 2011 and returning in April 2012. Ivanishin was the Commander of the International Space Station for Expedition 49. His third and last spaceflight was as a flight engineer during Expedition 62 / Expedition 63  in 2020. \r\nIvanishin retired in October 2021 to focus on science career.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/anatoli_ivanish_image_20200402084238.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 62',
        memberData: {
          name: 'Ivan Vagner',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: 'Russian',
          bio: 'Ivan Viktorovitch Vagner is a Russian Engineer and Cosmonaut who was selected in October 2010. He graduated from the Baltic State Technical University in 2008, before working as an engineer for RKK Energia.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/ivan_vagner_image_20200225164902.jpeg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 62',
        memberData: {
          name: 'Christopher Cassidy',
          agency: 'National Aeronautics and Space Administration',
          nationality: 'American',
          bio: 'Christopher John "Chris" Cassidy is a NASA astronaut and United States Navy SEAL. Chris Cassidy achieved the rank of Captain in the U.S. Navy. He was the Chief of the Astronaut Office at NASA from July 2015 until June 2017.\r\n\r\nCassidy attended York High School, in York, Maine. He then graduated from the Naval Academy Preparatory School in Newport, Rhode Island, in 1989. He received a Bachelor of Science degree in Mathematics from the United States Naval Academy in 1993 and a Master of Science degree in Ocean Engineering from MIT in 2000. While in the Navy, Cassidy passed BUD/S and became a Navy SEAL. While a SEAL he served several tours of duty supporting the fight in the War on Terror. His first spaceflight was on Space Shuttle mission STS-127, and his second was as a flight engineer for Expedition 35/36, launched aboard Soyuz TMA-08M. He was in space between July 15–31, 2009 and March 28 – September 10, 2013. Cassidy has worked as a CAPCOM for both International Space Station and Space Shuttle missions in the past.\r\n\r\nCassidy announced his retirement from both the Navy and NASA Astronaut Corps on May 28, 2021.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/christopher_cas_image_20200408132634.jpeg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 61',
        memberData: {
          name: 'Oleg Skripochka',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: 'Russian',
          bio: 'Oleg Ivanovich Skripochka (Russian: Оле́г Ива́нович Скри́почка; born 24 December 1969 in Nevinnomyssk, Stavropol Krai, Russian SFSR, Soviet Union) is a Russian cosmonaut. He served as an Expedition 25/26 and 61/62 crewmember.\r\nDecember 1st, 2021 Roskosmos announced Skripochka\'s retirement from active duty and his assignment to a training official role within the russian space agency.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/oleg_skripochka_image_20200417064956.jpeg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 61',
        memberData: {
          name: 'Aleksandr Skvortsov',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: 'Russian',
          bio: 'Aleksandr Aleksandrovich Skvortsov (Russian: Aлександр Aлександрович Скворцов; born May 6, 1966) is a Russian cosmonaut. He has had two spaceflights, which were long-duration missions aboard the International Space Station. His first spaceflight took place from April to September 2010, and was launched with the spacecraft Soyuz TMA-18. He arrived at the station part way through Expedition 23, of which Oleg Kotov was the Commander. When Expedition 24 began in June, Skvortsov became Commander.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/aleksandr2520skvortsov_image_20191231114359.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 61',
        memberData: {
          name: 'Christina Koch',
          agency: 'National Aeronautics and Space Administration',
          nationality: 'American',
          bio: 'Christina Hammock Koch (born January 29, 1979) is a NASA astronaut of the class of 2013.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/christina2520koch_image_20191231114328.jpeg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 61',
        memberData: {
          name: 'Luca Parmitano',
          agency: 'European Space Agency',
          nationality: 'Italian',
          bio: 'Luca Parmitano (born 27 September 1976 in Paternò, Sicily) is an Italian engineer and astronaut in the European Astronaut Corps for the European Space Agency (ESA). The astronauts work on missions at the International Space Station. He was selected as an ESA astronaut in May 2009. Parmitano is also a Lieutenant Colonel and pilot for the Italian Air Force. Parmitano is the youngest astronaut to undertake a long-duration mission, at 36 years and eight months old on the launch day of his mission.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/luca2520parmitano_image_20191231114250.jpeg',
          role: 'Commander',
        },
      },
      {
        expeditionName: 'Expedition 61',
        memberData: {
          name: 'Andrew R. Morgan',
          agency: 'National Aeronautics and Space Administration',
          nationality: 'American',
          bio: 'Andrew Richard "Drew" Morgan is a NASA astronaut from the class of 2013.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/andrew2520r.2520morgan_image_20181127210807.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 61',
        memberData: {
          name: 'Jessica Meir',
          agency: 'National Aeronautics and Space Administration',
          nationality: 'American',
          bio: 'Jessica Ulrika Meir is Assistant Professor of Anesthesia at Harvard Medical School, Massachusetts General Hospital, Boston, following postdoctoral research in comparative physiology at the University of British Columbia. She has studied the diving physiology and behavior of emperor penguins in Antarctica, and the physiology of bar-headed geese, which are able to migrate over the Himalayas. In 2000, Meir graduated with a Master of Space Studies from the International Space University in Strasbourg, France. In September 2002, Meir served as an aquanaut on the NASA Extreme Environment Mission Operations 4 (NEEMO 4) crew. In June 2013 she was named an astronaut candidate by NASA, becoming one of the eight members of NASA Astronaut Group 21. She is from Caribou, Maine.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/jessica_meir_image_20200417064900.jpeg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 60',
        memberData: {
          name: 'Aleksey Ovchinin',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: 'Russian',
          bio: 'Aleksey Nikolayevich Ovchinin born 28 September 1971 in Rybinsk, Yaroslavl Oblast, Russian SFSR is a Russian Air Force Major and cosmonaut, who was selected in 2006. Ovchinin made his first spaceflight in 2016, and was assigned as Commander of Soyuz MS-10 in 2018.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/aleksey2520ovchinin_image_20181201184641.jpg',
          role: 'Commander',
        },
      },
      {
        expeditionName: 'Expedition 60',
        memberData: {
          name: 'Luca Parmitano',
          agency: 'European Space Agency',
          nationality: 'Italian',
          bio: 'Luca Parmitano (born 27 September 1976 in Paternò, Sicily) is an Italian engineer and astronaut in the European Astronaut Corps for the European Space Agency (ESA). The astronauts work on missions at the International Space Station. He was selected as an ESA astronaut in May 2009. Parmitano is also a Lieutenant Colonel and pilot for the Italian Air Force. Parmitano is the youngest astronaut to undertake a long-duration mission, at 36 years and eight months old on the launch day of his mission.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/luca2520parmitano_image_20191231114250.jpeg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 60',
        memberData: {
          name: 'Nick Hague',
          agency: 'National Aeronautics and Space Administration',
          nationality: 'American',
          bio: 'Tyler Nicklaus Hague is an American Flight Test Engineer and a NASA astronaut of the class of 2013.\r\nSelected to be a flight engineer of Expedition 57 / 58 to the International Space Station, he launched on board Soyuz MS-10, which aborted shortly after launch on October 11, 2018.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/nick2520hague_image_20181127210946.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 60',
        memberData: {
          name: 'Aleksandr Skvortsov',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: 'Russian',
          bio: 'Aleksandr Aleksandrovich Skvortsov (Russian: Aлександр Aлександрович Скворцов; born May 6, 1966) is a Russian cosmonaut. He has had two spaceflights, which were long-duration missions aboard the International Space Station. His first spaceflight took place from April to September 2010, and was launched with the spacecraft Soyuz TMA-18. He arrived at the station part way through Expedition 23, of which Oleg Kotov was the Commander. When Expedition 24 began in June, Skvortsov became Commander.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/aleksandr2520skvortsov_image_20191231114359.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 60',
        memberData: {
          name: 'Christina Koch',
          agency: 'National Aeronautics and Space Administration',
          nationality: 'American',
          bio: 'Christina Hammock Koch (born January 29, 1979) is a NASA astronaut of the class of 2013.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/christina2520koch_image_20191231114328.jpeg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 60',
        memberData: {
          name: 'Andrew R. Morgan',
          agency: 'National Aeronautics and Space Administration',
          nationality: 'American',
          bio: 'Andrew Richard "Drew" Morgan is a NASA astronaut from the class of 2013.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/andrew2520r.2520morgan_image_20181127210807.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 59',
        memberData: {
          name: 'Oleg Kononenko',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: 'Russian',
          bio: 'Oleg Dmitriyevich Kononenko (Russian: Олег Дмитриевич Кононенко) is a Russian cosmonaut. He has flown to the International Space Station three times, as a flight engineer for Expedition 17 aboard Soyuz TMA-12, as a flight engineer on Expedition 30 and commander of Expedition 31 aboard Soyuz TMA-03M, and as a flight engineer on Expedition 44 and Expedition 45 aboard Soyuz TMA-17M. Kononenko has accumulated over 533 days in orbit during three long duration flights to ISS.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/oleg2520kononenko_image_20181129233442.jpg',
          role: 'Commander',
        },
      },
      {
        expeditionName: 'Expedition 59',
        memberData: {
          name: 'David Saint-Jacques',
          agency: 'Canadian Space Agency',
          nationality: 'Canadian',
          bio: 'David Saint-Jacques is a Canadian astronaut with the Canadian Space Agency (CSA).\r\nHe was also an engineer, an astrophysicist, and a physician prior to joining the CSA.\r\nHe was selected to join the CSA in the 2009 CSA selection along with Jeremy Hansen.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/david2520saint-jacques_image_20181127210456.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 59',
        memberData: {
          name: 'Anne McClain',
          agency: 'National Aeronautics and Space Administration',
          nationality: 'American',
          bio: 'Anne Charlotte McClain is a lieutenant colonel in the U.S. Army currently assigned to NASA Astronaut Group 21.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/anne2520mcclain_image_20181127210625.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 59',
        memberData: {
          name: 'Nick Hague',
          agency: 'National Aeronautics and Space Administration',
          nationality: 'American',
          bio: 'Tyler Nicklaus Hague is an American Flight Test Engineer and a NASA astronaut of the class of 2013.\r\nSelected to be a flight engineer of Expedition 57 / 58 to the International Space Station, he launched on board Soyuz MS-10, which aborted shortly after launch on October 11, 2018.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/nick2520hague_image_20181127210946.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 59',
        memberData: {
          name: 'Aleksey Ovchinin',
          agency: 'Russian Federal Space Agency (ROSCOSMOS)',
          nationality: 'Russian',
          bio: 'Aleksey Nikolayevich Ovchinin born 28 September 1971 in Rybinsk, Yaroslavl Oblast, Russian SFSR is a Russian Air Force Major and cosmonaut, who was selected in 2006. Ovchinin made his first spaceflight in 2016, and was assigned as Commander of Soyuz MS-10 in 2018.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/aleksey2520ovchinin_image_20181201184641.jpg',
          role: 'Flight Engineer',
        },
      },
      {
        expeditionName: 'Expedition 59',
        memberData: {
          name: 'Christina Koch',
          agency: 'National Aeronautics and Space Administration',
          nationality: 'American',
          bio: 'Christina Hammock Koch (born January 29, 1979) is a NASA astronaut of the class of 2013.',
          photo: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/christina2520koch_image_20191231114328.jpeg',
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
