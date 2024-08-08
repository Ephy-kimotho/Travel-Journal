const places = [
    {
        id: "1",
        title: "Mount Fuji",
        location: "Japan",
        googleMapsUrl: "https://www.google.com/maps/place/Mount+Fuji/",
        startDate: "12 Jan, 2024",
        endDate: "24 Jan, 2021",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        imageURL: "https://images.unsplash.com/photo-1578637387939-43c525550085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
    },
    {
        id: "2",
        title: "Sydney opera house",
        location: "Australia",
        googleMapsUrl: "https://www.google.com/maps/place/Sydney+Opera+House/",
        startDate: "27 May, 2024",
        endDate: "8 June, 20204",
        description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
        imageURL: "https://images.unsplash.com/photo-1584772121849-56c717d6c542?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3lkbmV5JTIwb3BlcmElMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D"

    }
    ,
    {
        id: "3",
        title: "Geirangerfjord",
        location: "Norway",
        googleMapsUrl: "https://www.google.com/maps/place/Geirangerfjord/",
        startDate: "15 July, 2024",
        endDate: "22 July, 2024",
        description: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
        imageURL: "https://images.unsplash.com/photo-1513519107127-1bed33748e4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEdlaXJhbmdlcmZqb3JkfGVufDB8MHwyfHx8MA%3D%3D"

    },
    {
        id: "4",
        title: "Verzaska Valley",
        location: "Switzerland",
        googleMapsUrl: "https://www.google.com/maps/place/Verzaska+Valley/",
        startDate: "17 Oct, 2024",
        endDate: "26 Oct, 2024",
        description: "Verzasca Valley is a picturesque valley in the Ticino region of Switzerland. Renowned for its clear turquoise waters and stunning Alpine scenery, it attracts nature lovers and adventurers. The valley features the Verzasca River, famous for its emerald green color, and the historic Ponte dei Salti, a charming 17th-century double-arched bridge.",
        imageURL: "https://media.istockphoto.com/id/1214012845/photo/emerald-color-soca-river-with-beautiful-narrow-canyon-bovec-slovenia.jpg?s=612x612&w=0&k=20&c=G5SYK8SgIGTbPftdvSnthBLMPKhuSEHQODBfLE2y6Cg="
    },
    {
        id: "5",
        title: "Monument valley",
        location: "United States",
        googleMapsUrl: "https://www.google.com/maps/place/Monument+Valley/@37.1397378,-110.2176492,15z/data=!3m1!4b1!4m6!3m5!1s0x8737238a4066d347:0x6a1bcda44d83a64d!8m2!3d37.1397217!4d-110.2073494!16s%2Fg%2F1td9q_dz?authuser=0&entry=ttu",
        startDate: "9 Sep, 2024",
        endDate: "15 Sep, 2024",
        description: "Monument Valley is a majestic region on the Arizona-Utah border in the United States. Known for its towering sandstone buttes and iconic red desert landscape, it is a symbol of the American West. The area is part of the Navajo Nation and offers stunning views that have been featured in numerous films and photographs. Monument Valley is a popular destination for tourists seeking to experience its unique and dramatic scenery. ",
        imageURL: "https://images.unsplash.com/photo-1575408264798-b50b252663e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TW9udW1lbnQlMjB2YWxsZXl8ZW58MHwwfDB8fHww"
    },
    {
        id: "6",
        title: "Los Angeles",
        location: "United States",
        googleMapsUrl: "https://www.google.com/maps/place/Los+Angeles,+CA,+USA/",
        startDate: "2 Oct, 2024",
        endDate: "9 Oct, 2024",
        description: "Los Angeles (LA) is a vibrant, sprawling city in Southern California known for its entertainment industry, particularly Hollywood, which is the heart of the global film and television industry. LA boasts diverse cultures, iconic landmarks like the Hollywood Sign, Griffith Observatory, and Santa Monica Pier, and a rich arts scene. The city's sunny weather, beautiful beaches, and trendy neighborhoods make it a popular destination. It's also a hub for technology, fashion, and cuisine, offering a unique blend of urban life and natural beauty.",
        imageURL: "https://media.istockphoto.com/id/1462206892/photo/downtown-los-angeles-skyline-view-from-echo-lake-park.webp?b=1&s=170667a&w=0&k=20&c=VusMi3Ilz1ExqvJOyNYEsZvbPl8_I2be00BtqQuWGoM="
    },
    {
        id: "7",
        title: "Maasai mara",
        location: "Kenya",
        googleMapsUrl: "https://www.google.com/maps/place/Maasai+Mara+National+Reserve/@-1.482127,35.1274147,17z/data=!3m1!4b1!4m6!3m5!1s0x182ce8a64a31fdb1:0x296a9587e0c3c410!8m2!3d-1.4821324!4d35.1299896!16s%2Fg%2F11fz7rpkyr?authuser=0&entry=ttu",
        startDate: "12 Jan, 2025",
        endDate: "18 Jan, 2025",
        description: 'The Maasai Mara is a renowned wildlife reserve in southwestern Kenya, known for its stunning landscapes and abundant wildlife. It’s part of the larger Serengeti ecosystem and is famous for the Great Migration, where millions of wildebeest, zebras, and gazelles move annually in search of greener pastures. The reserve is home to the "Big Five" (lion, elephant, buffalo, leopard, and rhino) and offers exceptional safari experiences. Named after the indigenous Maasai people and the Mara River that traverses it, the Maasai Mara is a must-visit destination for nature and wildlife enthusiasts.',
        imageURL: "https://media.istockphoto.com/id/1429482284/photo/the-blue-wildebeest-also-called-the-common-wildebeest-or-the-white-bearded-wildebeest-is-a.webp?b=1&s=170667a&w=0&k=20&c=TbPuo-vNlnc48FcypRqUwYon_xM5qXg0xEUng8Y2ckQ="
    },
    {
        id: "8",
        title: "Nairobi",
        location: "Kenya",
        googleMapsUrl: "https://www.google.com/maps/place/Nairobi/",
        startDate: "23 Jan, 2025",
        endDate: "30 Jan, 2025",
        description: "Nairobi, the capital city of Kenya, is a dynamic and fast-growing urban center known for its blend of modernity and rich cultural heritage. As East Africa's economic hub, Nairobi hosts multinational companies, vibrant markets, and a thriving tech scene, often referred to as 'Silicon Savannah.' The city is home to Nairobi National Park, where wildlife roams against the backdrop of skyscrapers, and the Karen Blixen Museum, celebrating the author of *Out of Africa*. Nairobi's diverse neighborhoods, lively arts scene, and bustling streets reflect its status as a major African metropolis.",
        imageURL: "https://media.istockphoto.com/id/1299026534/photo/nairobi-kenya.webp?b=1&s=170667a&w=0&k=20&c=D6EsxzQx2Xes4DwGDwhlr64jWhbol-8-wwYkUShzuFA="
    }


]

export default places