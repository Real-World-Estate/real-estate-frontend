import { image, pictures } from "..";

export const data = [
  {
    id: "our-hotels",
    category: "hotels",
    photos: [
      pictures.hotel1,
      pictures.hotel2,
      pictures.hotel3,
      pictures.hotel4,
      pictures.hotel5,
      pictures.pool,
      pictures.room1,
      pictures.room2,
      pictures.room4,
      pictures.room5,
      pictures.bath1,
      pictures.bath2,
      pictures.bath3,
    ],
    description: [
      "Welcome to our luxurious hotels, where every detail is designed to exceed your expectations and provide you with an unforgettable stay. Located in the heart of [City Name], our hotels offers prime locations surrounded by the city's top attractions, dining, and entertainment options. Whether you're traveling for business or leisure, our hotels provide the perfect blend of sophistication, comfort, and convenience.",

      "Step into our elegant lobbies, where modern design meets timeless luxury. Our friendly and attentive staff are dedicated to ensuring your every need is met from the moment you arrive. Whether you require assistance with luggage, recommendations for local attractions, or reservations at our on-site restaurants, we are here to make your stay as seamless and enjoyable as possible.",

      "Indulge in the ultimate relaxation in our beautifully appointed guest rooms and suites, featuring plush bedding, contemporary furnishings, and state-of-the-art amenities. From breathtaking city views to spacious living areas, each accommodation is designed to provide a sanctuary of comfort and tranquility. Wake up refreshed and rejuvenated, ready to start your day with a delicious breakfast at our onsite restaurants before exploring all that [City Name] has to offer. Whether you're here for business meetings, sightseeing, or simply to unwind, our hotel promises a truly exceptional experience from start to finish.",
    ],

    statistics: {
      rooms: 5,
      pool: "2X8m",
      parking: 2,
      bathrooms: 5,
    },
  },
  {
    id: "our-apartments",
    category: "apartments",
    photos: [
      pictures.room5,
      pictures.parlor2,
      pictures.bath4,
      pictures.kitchen1,
      pictures.room9,
      pictures.room12,
      pictures.parlor1,
      pictures.kitchen,
      pictures.bath,
    ],
    description: [
      "Welcome to our beautifully appointed apartments nestled in the heart of [City Name], where comfort, convenience, and cleanliness converge. Located in a vibrant and sought-after neighborhood, our apartments offer an ideal living space for those seeking a tranquil yet urban lifestyle. Situated within close proximity to shopping centers, restaurants, parks, and public transportation, residents enjoy easy access to all the amenities the city has to offer.",

      "Each of our meticulously designed apartments boasts modern furnishings and stylish decor, creating an inviting atmosphere that feels like home from the moment you step inside. With spacious layouts and ample natural light, our apartments provide the perfect backdrop for both relaxation and entertainment. Whether you're enjoying a quiet evening in or hosting friends for a gathering, you'll appreciate the comfort and functionality of our thoughtfully furnished living spaces.",

      "In addition to the tastefully decorated interiors, our apartments feature pristine bathrooms and fully equipped kitchens, complete with high-quality appliances and ample storage space. Residents can unwind after a long day with a refreshing shower or prepare delicious meals with ease, knowing that everything they need is right at their fingertips. With the added convenience of included water and regular cleaning services, residents can spend less time worrying about chores and more time enjoying the best that city living has to offer",
    ],
    statistics: {
      rooms: 2,
      bathrooms: 2,
      furnished: true,
      balcony: 2,
      kitchen: 1,
    },
  },
  {
    id: "our-bungalows",
    category: "bungalows",
    photos: [
      pictures.room3,
      pictures.bungalow1,
      pictures.bungalow2,
      pictures.bungalow3,
      pictures.bungalow4,
      pictures.bungalow5,
    ],
    description: [
      "Welcome to our beautiful bungalows nestled in the quiet parts of [City Name], where peace, tranquility, and comfort meet. Located in a quiet and peaceful neighborhood, our bungalows offer an ideal space for those seeking a tranquil and peaceful stay.",

      "Each of our meticulously designed apartments boasts modern furnishings and stylish decor, creating an inviting atmosphere that feels like home from the moment you step inside. With spacious layouts and ample natural light, our apartments provide the perfect backdrop for both relaxation and entertainment. Whether you're enjoying a quiet evening in or hosting friends for a gathering, you'll appreciate the comfort and functionality of our thoughtfully furnished living spaces.",

      "In addition to the tastefully decorated interiors, our apartments feature pristine bathrooms and fully equipped kitchens, complete with high-quality appliances and ample storage space. Residents can unwind after a long day with a refreshing shower or prepare delicious meals with ease, knowing that everything they need is right at their fingertips. With the added convenience of included water and regular cleaning services, residents can spend less time worrying about chores and more time enjoying the best that city living has to offer",
    ],
    statistics: {
      rooms: 5,
      parking: 1,
      bathrooms: 3,
      furnished: false,
    },
  },
  {
    id: "our-cleanings",
    category: "cleanings",
    photos: [
      image.manPic2,
      pictures.cleaner,
      pictures.clothesFumigation,
      image.manPic1,
      pictures.cleaningWindows,
      pictures.fumigationPic,
      pictures.detergentSponge,
      image.manPic7,
      pictures.plantFumigation,
      pictures.shelveFumigation,
      pictures.wipingTable,
    ],
    description: [
      "Welcome to our professional cleaning and fumigation company, where cleanliness meets peace of mind. With a focus on delivering exceptional service and exceeding expectations, we are your trusted partner in creating a safe and hygienic environment for your home or business. Specializing in both cleaning and fumigation services, we offer comprehensive solutions to address all your sanitation needs.",

      "Our team of trained professionals utilizes the latest techniques and environmentally friendly products to ensure thorough cleaning and effective fumigation. Whether you're dealing with stubborn stains, unpleasant odors, or pest infestations, we have the expertise and resources to tackle even the toughest challenges. From residential properties to commercial establishments, we tailor our services to meet the unique needs of each client, delivering results that exceed expectations every time.",

      "At our cleaning and fumigation company, we understand the importance of maintaining a healthy living and working environment. That's why we go above and beyond to provide reliable and efficient service that you can count on. Whether you're looking for a one-time deep cleaning or regular maintenance services, we are committed to delivering exceptional results that leave your space looking and feeling fresh and revitalized. Experience the difference with our professional cleaning and fumigation services and enjoy a cleaner, healthier environment today.",
    ],
    statistics: {
      rooms: "5+",
      pool: "5+",
      parking: 0,
      bathrooms: "5+",
      furnished: true,
      kitchen: "5+",
    },
  },
  {
    id: "our-stores",
    category: "stores",
    photos: [
      pictures.niceInside2,
      pictures.cafeStore,
      pictures.storesRoad,
      pictures.niceStore,
      pictures.sidewalkStore,
      pictures.outdoorStore,
      pictures.insideStore,
    ],
    description: [
      "Welcome to our premier retail spaces, strategically positioned in the heart of [City Name]'s bustling shopping district. Located in a prime location with high foot traffic and visibility, our stores offer an unparalleled opportunity for businesses to thrive and succeed. Whether you're a boutique retailer, a trendy cafe, or a specialty shop, our versatile spaces provide the perfect backdrop to showcase your brand and attract customers.",

      "Step inside our modern and well-maintained storefronts, where sleek design meets functionality. With spacious layouts, large display windows, and ample storage space, our stores offer the flexibility to customize the space to suit your unique needs and vision. Whether you're looking to create an inviting retail environment, a cozy cafe atmosphere, or a chic boutique experience, our prime locations provide the ideal canvas to bring your concept to life.",

      "In addition to the prime location and versatile spaces, our rental packages include a range of amenities and support services to help you succeed. From dedicated property management and maintenance to marketing assistance and promotional opportunities, we are committed to providing our tenants with the resources they need to thrive in today's competitive market. Join us in [City Name]'s premier shopping destination and take your business to new heights with our prime retail spaces.",
    ],
    statistics: {
      rooms: 5,
      pool: "2X8m",
      parking: 2,
      bathrooms: 4,
      furnished: true,
      kitchen: 1,
    },
  },
  {
    id: "our-detergents",
    category: "detergents",
    photos: [
      pictures.soapInCompany,
      pictures.detergentHands,
      pictures.pouringDetergent,
      pictures.detsInFactory,
      pictures.detergentLab,
      pictures.soap,
      pictures.detergents,
    ],
    description: [
      "Welcome to our leading detergent production company, where innovation meets cleanliness. With a commitment to quality and sustainability, we are dedicated to providing high-performance detergent solutions for both household and commercial use. Our state-of-the-art manufacturing facilities and cutting-edge technology ensure that our products are of the highest standard, delivering superior cleaning power while minimizing environmental impact.",

      "At our detergent production company, we offer a diverse range of products to meet the needs of every customer. From laundry detergents to dishwashing liquids, fabric softeners to multi-purpose cleaners, we have a solution for all your cleaning needs. Our products are formulated with premium ingredients to deliver exceptional results, leaving your clothes, dishes, and surfaces sparkling clean with every use.",

      "In addition to our commitment to quality, we prioritize sustainability in everything we do. From sourcing eco-friendly ingredients to reducing waste and energy consumption in our manufacturing processes, we strive to minimize our environmental footprint and contribute to a cleaner, greener future. With our detergent products, you can trust that you're not only getting superior cleaning power but also making a positive impact on the planet. Experience the difference with our detergent production company and enjoy a cleaner, brighter tomorrow.",
    ],
    statistics: {
      rooms: 5,
      pool: "2X8m",
      parking: 2,
      bathrooms: 4,
      furnished: true,
      kitchen: 1,
    },
  },
];
