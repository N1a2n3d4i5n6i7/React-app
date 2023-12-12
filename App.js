import React from "react";
import  ReactDOM  from "react-dom/client";
/** Planning and listing components
 * Header
 * -Logo
 * -Navigation
 * -cart
 * Body
 * -Search Bar
 * - Restaurants container (list of all restaurents)
 * single Restaurant (images, restaurent names, rating, discounts
 * footer
 * - address
 * newsletter
 */
// Header Cmponent
const Headercomponent = () => {
    return (
        <div class="site-header">
        <nav className="navbar navbar-expand bg-danger">
            <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link" href="#">logo</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Cart Value</a></li>
            </ul>
        </nav>
    </div>
    )

};

const jsonData = [
    {
        "info": {
            "id": "408183",
            "name": "Pizza Hut",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "locality": "Pallavi towers",
            "areaName": "Anantapur",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 3.8,
            "feeDetails": {
                "restaurantId": "408183",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 1000
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 1000
            },
            "parentId": "721",
            "avgRatingString": "3.8",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "26 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-11 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "FREE ITEM"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-hut-pallavi-towers-anantapur-anantapur-408183",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "385795",
            "name": "KFC",
            "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
            "locality": "Anantpur",
            "areaName": "Anantapur",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "385795",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 2900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 2900
            },
            "parentId": "547",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 9.9,
                "serviceability": "SERVICEABLE",
                "slaString": "33 mins",
                "lastMileTravelString": "9.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-11 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-anantpur-anantapur-anantapur-385795",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "367252",
            "name": "Sri Krishna Grand",
            "cloudinaryImageId": "qsgezhnaesogrk8hairs",
            "locality": "Kamalanagar",
            "areaName": "Anantapur",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "South Indian"
            ],
            "avgRating": 4.2,
            "veg": true,
            "feeDetails": {
                "restaurantId": "367252",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 1200
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 1200
            },
            "parentId": "193891",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 17,
                "lastMileTravel": 1.9,
                "serviceability": "SERVICEABLE",
                "slaString": "17 mins",
                "lastMileTravelString": "1.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-11 22:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/sri-krishna-grand-kamalanagar-anantapur-anantapur-367252",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "413090",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "s2qt7eqtinbc95telugg",
            "locality": "Town Mall",
            "areaName": "Anantapur",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            "avgRating": 3.5,
            "feeDetails": {
                "restaurantId": "413090",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 1200
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 1200
            },
            "parentId": "2456",
            "avgRatingString": "3.5",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 25,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-11 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/dominos-pizza-town-mall-anantapur-anantapur-413090",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "235739",
            "name": "Hyderabad Biryani House",
            "cloudinaryImageId": "pcuu3y2t4yvhimf4nc97",
            "locality": "Gulzarpet",
            "areaName": "Anantapur",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Biryani",
                "Chinese",
                "Continental",
                "North Indian",
                "South Indian",
                "Indian"
            ],
            "avgRating": 3.9,
            "feeDetails": {
                "restaurantId": "235739",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 1000
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 1000
            },
            "parentId": "485",
            "avgRatingString": "3.9",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 3.5,
                "serviceability": "SERVICEABLE",
                "slaString": "20 mins",
                "lastMileTravelString": "3.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-11 22:45:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/hyderabad-biryani-house-gulzarpet-anantapur-anantapur-235739",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "100646",
            "name": "Hangout Cafe",
            "cloudinaryImageId": "nshry9uccnxzrabbaagd",
            "locality": "Sreekantam Circle",
            "areaName": "Adimurthy Nagar",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Pizzas",
                "Desserts"
            ],
            "avgRating": 3.8,
            "feeDetails": {
                "restaurantId": "100646",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 1000
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 1000
            },
            "parentId": "378818",
            "avgRatingString": "3.8",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "23 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-11 22:40:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/hangout-cafe-sreekantam-circle-adimurthy-nagar-anantapur-100646",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "102792",
            "name": "Biryani zone",
            "cloudinaryImageId": "z2evtb83d3dirrurwik4",
            "locality": "kamala Nagar",
            "areaName": "Anantapur",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Biryani",
                "South Indian",
                "North Indian",
                "Chinese",
                "Indian",
                "Andhra"
            ],
            "avgRating": 3.7,
            "feeDetails": {
                "restaurantId": "102792",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 1000
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 1000
            },
            "parentId": "47048",
            "avgRatingString": "3.7",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 17,
                "lastMileTravel": 2.3,
                "serviceability": "SERVICEABLE",
                "slaString": "17 mins",
                "lastMileTravelString": "2.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-11 22:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/biryani-zone-kamala-nagar-anantapur-anantapur-102792",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "303252",
            "name": "The Vintage",
            "cloudinaryImageId": "kvvzxqkkzvskjn04saaj",
            "locality": "Srinagar Colony",
            "areaName": "Anantapur",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Continental",
                "Pizzas",
                "Burgers",
                "Biryani",
                "South Indian",
                "North Indian",
                "Chinese",
                "Pastas",
                "Ice Cream"
            ],
            "avgRating": 3.8,
            "feeDetails": {
                "restaurantId": "303252",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 1500
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 1500
            },
            "parentId": "215205",
            "avgRatingString": "3.8",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 5.5,
                "serviceability": "SERVICEABLE",
                "slaString": "34 mins",
                "lastMileTravelString": "5.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-11 23:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/the-vintage-srinagar-colony-anantapur-anantapur-303252",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "304791",
            "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
            "cloudinaryImageId": "idojilsforkdjuyzgpjh",
            "locality": "Tata Nagar",
            "areaName": "Anantapur",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Desserts",
                "Ice Cream",
                "Ice Cream Cakes"
            ],
            "avgRating": 4.2,
            "veg": true,
            "feeDetails": {
                "restaurantId": "304791",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 1200
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 1200
            },
            "parentId": "582",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 2.1,
                "serviceability": "SERVICEABLE",
                "slaString": "19 mins",
                "lastMileTravelString": "2.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-11 21:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-tata-nagar-anantapur-anantapur-304791",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "101175",
            "name": "Raghavendra Hotel",
            "cloudinaryImageId": "juuhhvvrtgac97dytly0",
            "locality": "Police Complex",
            "areaName": "Anantapur",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Indian",
                "Home Food"
            ],
            "avgRating": 4.2,
            "veg": true,
            "feeDetails": {
                "restaurantId": "101175",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 1200
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 1200
            },
            "parentId": "164532",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 16,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "16 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-11 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/raghavendra-hotel-police-complex-anantapur-anantapur-101175",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "102796",
            "name": "Ruchi's family restaurant",
            "cloudinaryImageId": "bte4uz7xp4jybskyvdav",
            "locality": "Subash Road",
            "areaName": "Anantapur",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Biryani",
                "Tandoor",
                "North Indian",
                "South Indian",
                "Chinese",
                "Beverages",
                "Desserts"
            ],
            "avgRating": 4,
            "feeDetails": {
                "restaurantId": "102796",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 900
            },
            "parentId": "172995",
            "avgRatingString": "4.0",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 17,
                "lastMileTravel": 1.7,
                "serviceability": "SERVICEABLE",
                "slaString": "17 mins",
                "lastMileTravelString": "1.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-11 22:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/ruchis-family-restaurant-subash-road-anantapur-anantapur-102796",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "211085",
            "name": "Parklane Bakers",
            "cloudinaryImageId": "ijh6dotpmdux6mitv9tp",
            "locality": "Pilligundla",
            "areaName": "Anantapur",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Desserts",
                "Sweets",
                "Beverages"
            ],
            "avgRating": 3.6,
            "feeDetails": {
                "restaurantId": "211085",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 1200
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 1200
            },
            "parentId": "155738",
            "avgRatingString": "3.6",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 2.1,
                "serviceability": "SERVICEABLE",
                "slaString": "22 mins",
                "lastMileTravelString": "2.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-11 21:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/parklane-bakers-pilligundla-anantapur-anantapur-211085",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "322538",
            "name": "Emerald Veg Restaurant",
            "cloudinaryImageId": "swkqaj45fca7ynjxpp5i",
            "locality": "Kamalanagar",
            "areaName": "Anantapur",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "South Indian",
                "Indian",
                "Andhra",
                "North Indian",
                "Chinese"
            ],
            "avgRating": 3.6,
            "veg": true,
            "feeDetails": {
                "restaurantId": "322538",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 1200
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 1200
            },
            "parentId": "453291",
            "avgRatingString": "3.6",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 2.1,
                "serviceability": "SERVICEABLE",
                "slaString": "21 mins",
                "lastMileTravelString": "2.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-11 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/emerald-veg-restaurant-kamalanagar-anantapur-anantapur-322538",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "337967",
            "name": "Chennur Dum Biryani",
            "cloudinaryImageId": "cpy778ay8d9xmyrephok",
            "locality": "Saptha Giri Circle",
            "areaName": "Anantapur",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Biryani",
                "Indian",
                "South Indian",
                "North Indian"
            ],
            "avgRating": 3.6,
            "feeDetails": {
                "restaurantId": "337967",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 1000
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 1000
            },
            "parentId": "59938",
            "avgRatingString": "3.6",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 17,
                "lastMileTravel": 2.3,
                "serviceability": "SERVICEABLE",
                "slaString": "17 mins",
                "lastMileTravelString": "2.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-11 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/chennur-dum-biryani-saptha-giri-circle-anantapur-anantapur-337967",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "303461",
            "name": "Mehfil Arabic Restaurant",
            "cloudinaryImageId": "yov3hh0g7nzjurs42ovw",
            "locality": "Gulzarpet",
            "areaName": "Anantapur",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Arabian",
                "Biryani",
                "Indian",
                "Chinese",
                "South Indian",
                "North Indian"
            ],
            "avgRating": 4,
            "feeDetails": {
                "restaurantId": "303461",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 1200
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 1200
            },
            "parentId": "134984",
            "avgRatingString": "4.0",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 2,
                "serviceability": "SERVICEABLE",
                "slaString": "20 mins",
                "lastMileTravelString": "2.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-11 22:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/mehfil-arabic-restaurant-gulzarpet-anantapur-anantapur-303461",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "101864",
            "name": "SS Palace (Old SS Paradise)",
            "cloudinaryImageId": "eqyghffrmwmpqzv3hkjt",
            "locality": "kamala Nagar",
            "areaName": "Anantapur",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Biryani",
                "North Indian",
                "Chinese",
                "Tandoor",
                "South Indian",
                "Indian"
            ],
            "avgRating": 4,
            "feeDetails": {
                "restaurantId": "101864",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 1200
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 1200
            },
            "parentId": "195122",
            "avgRatingString": "4.0",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 17,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "17 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-11 22:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/ss-palace-old-ss-paradise-kamala-nagar-anantapur-anantapur-101864",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "100804",
            "name": "Idly 'N' More",
            "cloudinaryImageId": "q2u2bcnl6ipzu4osu3ph",
            "locality": "Chandra Hospital Circle",
            "areaName": "Anantapur",
            "costForTwo": "₹100 for two",
            "cuisines": [
                "South Indian",
                "North Indian",
                "Chinese"
            ],
            "avgRating": 3.9,
            "veg": true,
            "feeDetails": {
                "restaurantId": "100804",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 1200
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 1200
            },
            "parentId": "105934",
            "avgRatingString": "3.9",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 0.9,
                "serviceability": "SERVICEABLE",
                "slaString": "19 mins",
                "lastMileTravelString": "0.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-11 22:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹75 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/idly-n-more-chandra-hospital-circle-anantapur-anantapur-100804",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "401925",
            "name": "LUCKY 9 Tadipatri Dum Biryani Family Restaurant ",
            "cloudinaryImageId": "bdoiwbmzflwtbqpxwdrg",
            "locality": "Georgepet",
            "areaName": "Anantapur",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Biryani"
            ],
            "avgRating": 3.8,
            "feeDetails": {
                "restaurantId": "401925",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 1200
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 1200
            },
            "parentId": "249622",
            "avgRatingString": "3.8",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 2.5,
                "serviceability": "SERVICEABLE",
                "slaString": "19 mins",
                "lastMileTravelString": "2.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-11 22:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/lucky-9-tadipatri-dum-biryani-family-restaurant-georgepet-anantapur-anantapur-401925",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "299044",
            "name": "Infinity Cafe and Bistro",
            "cloudinaryImageId": "atqqfrddsfgbhxtlvexu",
            "locality": "Ashok Nagar",
            "areaName": "Anantapur",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "American",
                "Beverages",
                "Pizzas",
                "Salads"
            ],
            "avgRating": 4,
            "feeDetails": {
                "restaurantId": "299044",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 1700
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 1700
            },
            "parentId": "107124",
            "avgRatingString": "4.0",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 4.4,
                "serviceability": "SERVICEABLE",
                "slaString": "29 mins",
                "lastMileTravelString": "4.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-11 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/infinity-cafe-and-bistro-ashok-nagar-anantapur-anantapur-299044",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "372879",
            "name": "Biryani Mandirr ( Family Restaurant )",
            "cloudinaryImageId": "atdium4a46vmdnbzsd6a",
            "locality": "Ashok Nagar",
            "areaName": "Anantapur",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Biryani",
                "North Indian",
                "Chinese",
                "Seafood"
            ],
            "avgRating": 3.7,
            "feeDetails": {
                "restaurantId": "372879",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 1500
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 1500
            },
            "parentId": "380155",
            "avgRatingString": "3.7",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-11 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/biryani-mandirr-family-restaurant-ashok-nagar-anantapur-anantapur-372879",
            "type": "WEBLINK"
        }
    }
]
// Restaurent component
const Restocomponent = (props) => {
    console.log(props.resData.info.name);
    return (
    <div className="card">
    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBBgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYHAQj/xABCEAACAQMDAQYDBQcCBAUFAAABAgMABBEFEiExBhMiQVFhFHGBBzKRobEVI0JSwdHwM3IkQ2LhFqKywvElY3OCkv/EABoBAAIDAQEAAAAAAAAAAAAAAAQFAAIDAQb/xAApEQACAgIDAAICAQMFAAAAAAABAgADBBESITETQSJRBTJCYVJxgZGx/9oADAMBAAIRAxEAPwDosiD0oSVB6Yo+RaDmFcmsAlA5oGYdaPnFATDmpJIDkDpmg7gZyc/SjHJoWYZBqSQGXpQsnHSi5BQ8gqSQRlphFTPUeC3AHJOBUk1+pCI2kcJEpZyeFAyanntrSzXdqV6kB/kXBahtc1NtGiFlZDfqEo/eOv8AD7CnWeiKdOdrkrcTTEF2ccjj7vtQdl5+o5xf40OfyijutCm3LFNcsyjqBx+lPOnx3Cs2nXAlKjJRhg0+C3bTQ0cVsGlnXw8Dw465qrnOpRTOIoWWUr0HP6UOL7OXRjB/4qkod9SGWbupGjmVkZeCGFMWRWPtVzdQftC1WG7eP9oRgbHHG8/ymsssjK208EcMMdDR1VvyD/M8/lYrY7aPhlkWGabkelQxuGp5FbQWJzmoyDTjmkTUkkfIrw89afxty1ansd2QOuIb6+Ji08HC4OGmPoPb3qrsFGzOquzqBdj9Dt9VuZZdRkaO0iAwAcGRs9AfQDk+nFdV0+2g06wit7NBBDCSdsa8nNUkXZ20hu+9jt0HdIY0UHKquPT35z68VaQTFY9rNhjjaDwTilVt5cw5KgBCZ5cK3dxjnPLt09On0qqtr+6NqIbmVTOR43iUqBkDHGTnrRrgmWJZM726L6VWakCs8aLnauOfM/P/AD1oZjNVX6hH7xnVi7quNoXyb39R+NVeudn7HWwzXkQS4UbUni+8nTHz+Rq3s2SWSRgrlhxuPAI9qYJWnjlEe1ZVJXafInocdcVdHK9icdAZyXX+z13orjvCs0TdJY1wAfQ+hqoYDyruItBtMUoSWJ0xIjDcPeuadtOz8WkOLuwP/ByNhkZstGx6fQ+VM6MgP0YHZVryZYim4pxJ3Y44pEqB70VMI3GKVIEH7xpVJJ9LyE0HNRUxFBTk5qTsBuMigpOTRtweuahgtnupQkfA82PpXGYKNmdAJOhAsbiAqlmJwFFDyr1I6dOa0lhN3N21raovdLx3jEZ3EgdetZ/tLp7aTczajZoWtWYNdxA52np3gHp6ihq8tLG4iaNUVG4BIvrQkgFFCRJohJGwZT5ih5OKKBmUDfrU2n7FnaZxlIUMh+lRSdan06PvrbUoxnebRiv0Iz+tZ2/0GbY4BtUH9yq07uXsI9SuXHfXEzu7MOBg4FWFi09x381qFaz7rEihsEH2HmaqlhuEs7ezdVMypgDyGPKnWok7jkGPLBwAwGPelO+zPX6cJxXuSpcbUjjYq5aUors/l6n0PlUegXYnlmZJmkYN/F/LQOtuweMBHZwvB3EhsnjA/wA6VFphnhiLsFIYgjxYOfc+dd4DjMktte4aXSxatd3mm6pb3UkQc98JlVSCGXPI/UVH2pjjtdckaLHdXC96uDnrUOsahBNdlpNo2oRuT1NP7ZOI7+yhBy0dqgf54x/Q0VQSCOos/lNMpJMEt5MOMUfniqeFzvBzVoreEUfEMexpmaRNMJqfUksNC079r6vaWLOVSaUIxHUL612qUQ6dYQ2MRG2JdiK3hyB7D+lcq+zZoU7W2Zn64kC/7tpxXSr+47+9CR48K+LgZXn16igMttdQikD2ERqzWzGRSSVwUToev+fhQypHu7xtrMrbVXgY8jWT1ftjeWN/NaJCndQuVJZfEQvQ9aZYdqoJ7aNrkjvmHkeM55yKAIJm62pvU2skgE67ecDgg5/Gq+4urVJWMilVfgMxB39Tgc5/+aC0mbdb4NxkhvDJkZcc9QPniqTUdNu73W50F62yEBsjg8+WfpVdA+whdS8j1cO0qxfd3DYEj8S9PInnrRUE5KtO4aPc3AbGcZ/z8aqtMWSAGFlVmIODjcSR5n1ND9m7yaUutzBPCElZMydSc5BNQfudcCaeeOTuQLV4kIxvLDP9h0qq1COw1zRriIIGS4jZe8Ksu1h90njjB9atgNzMq7iNo4z1oG/wZHj3gjaMx44HmD/npVlbR3Miu5w+SKWCWSCdds0bFZBjowppUVd9tLZ7btPesysFnKyKSMZ8IB/MGqRjTtG5KDFrDR1FgnpSqPOaVWlZ9MS0DcHniipWoKXBZRuPNRm4iWHcjiga4fnhBwT70r0/DxyRxloti7u8A/SlcXksYKRRcZwpGNxGeevUVXeG+keMyb5A/wC8jJ4AHX2/zpSK7Ja5tfUYpT8Y2YXpMoS1VJYyDIe870n7g9W9MjOKOu7hJIHA8RHhlRuu3OM1TXcPxF2rxrhXBjLb8qyY48AOMYz6c4otZpYmmml4hRuTKzJhfx+fFVUkEcZCB9zH6rZHs3fBFDfAXLZjJ6RN/Kfb0p8uCowMA9CfOoNb7WtqU5sdAgS57s4a7mXKIQf4QeuKi+DecKbqeRp2HMjOevy8qdVM3AcoAwXfUc4AHiGDSsZ1tLxZXJ7ogpIB5owwR+H54ptzbXSq/eIkRjA3NNII1+hOM0NFDuci4vLXB6BWL/8ApBrQlWGjOqGB2olD2ht7rSNYDrK0lpKd0b5458s0dNcqsCrjc0gwTn9KvFjhuYPgr17e6gPQd4A6n2BwaB7QaXqqwxR6dDAYkxgoMSfhS6xOwDPR42YeB73/AImduL57d7WWPcyREqGIwBg8Y9+v5Va2Xwl1a3FtODtm2tC6nLBv5aA1ixuJp+5traZtuDgBscjkD8Km0PTNQ01mub6eGzgVg+53G4Ee396hUFdj2cF9iuwsHv3JP/DUMF/G1yWCwsHmSTyUc8n54+lZrVb/APaWr3F0DlHbCf7R0/v9as+1Haf9oB7TTty27NmSQ/elNVOl6fPe3MdvaRs8reXp8zRNCMq8rIpzLltbhWJNbLls+Q88cVc29rcXAHw0EkgxyVQkVcadpen6bPHb93+0NQY9MbkQ+yjr8zW1h7NajdW67r1Y5XYFY4xjYnmT+IqHIJ/oEzGOqDdhnN20y/T79pKB/tzQkisjbZBsb+Vhiui33Z3ULW8kUXM3cIBsZSGMhJ9D5/Kpr3s5M9sVuzBcZUt3Ui+Ij29xmq/O47I6k+Gpv6W1Mr9nUYn7W2rMfDCrSn6D+9b+4QWUt7eByxLbzuxhcDpxWP0Cyg0bWmvbaRjFseNo3Oe6J46/THNayK9lnMjSJGYFHBiP3/xA5+tDZFgc7EstTV7Bmcu9XsNXtrhbiGNHjGQ2Bls+f04rFSywz3E5s2Zoo2K7m9uDWx1DQ9OuL2aTS4bic4yRuCon1x/egouzYs7NQkCLvkG77zEdR0J/7VgjovsyatnEqrLV9Sjjfa6bUwqFsAfStLpWoJpemRRz3In2ZdnkOZCSTx8utZzWrDd4Iu6KR4GyMKh+eAf1oCe4SK2bc4BG9kYn72CBgDPHTzrTiHGhM0tNRM6jbX1rNtmhdSCNyk8AijI1hlAbwh2GeOeP8Ncl7P6jcRCN3ik7l5NhfzBPv1x7dK6Bpup28aiKaYQsMKGOMMWOB9c+dYvWUOodXYLRuXUsytIFhQFCcHPlQs9mz3PxE0g3ECPAJxjOenrU4TfKclUPQDHX1P1ry7WeAwRWds11vlVZDvJCqTyx+X9qzXe5qdfcxn2sW0dvYaZdFmM7zMgB/l25P5hfxrneQeQeK3v213Y/aOmach/0YGmcefiOF/8ASeK59Fnbzj6U6xgRWNxXcRzOpLxSrzNKiJlPouWWpLY2boBPHIX9VNV0klRLcrGx3thW4Y5xgVjfy4Hh7NU1y/LyWt1Z6XdjK3E8Rc4DA52kH+9Q2vZ2ytv3tvfgHO+RmXxMPL5UYtrbGMSBF2E59jxyePeoLmCGOJmMrBc53Fvvcng0oDjfYEMIPmzKi77RabaJNNeN8OsTHwgjD7enH0FYLVNel7Y2zQQu8Vus/wC8ReuzAx88+dVH2owzpqMDTEH7yMobqQcj8jVN2Z+JGowR2b7JGPJzgKo6lvYCmGPjqo5wa20k8ROj2djBaWQW37uOFF5Y8AD3qq1DVJpHaLRoGYqNzzMoLY9geB9c0HrWsxzyBV3raKfAqr/qN03Ee9FaZILTT/iy8SzTzBtkrYJjUHHH49apfkMo0sMxsUMdmB6YLi6kkjuBKZXHjaYEscehNWcti1pENqE56DdVgb23eSPaQWkG4NGCR8s/KpZbqCQyS7o+6iTJDeftQLZDk9RkMZAJUWF7cB+7msk64YbsEfPPlVvJew24dAMheqryBms/Z3LsW1GR1lklQskS8Ko9PXP5cUo1t7yOdxNF32zwiInP/UQPMitWZ/szAhAdASTWre/vbfvtC1GWORhkW7kbZPZWPIPsa51dveTzsmoSzNIjYZZScqfTHlW5sdSt7UGAkPG0n7ts+ROck+WDj8af2m0U6pam6iUnUoE3EgD/AIiMDkcfxDy9aKovAPFxA8mhivJGOv1MfbWccgBJ4romhaL8Ja/CQv3d7LH3szBckDyQVi+xtv8AG69ao3+kmZZP9qjP67a6h9neox32qa0TEpuIiO7ZuhHT6c1pkbY8FmNAK1l/v6mm7O9m9P0e3aW2EouZVw0svLHzpWeqPDrDWz24WIR4709WORx+dGakJI4VkLtjHHpny4FVKJcxFJZxAFbncSQSPLg/WleTlOjAAeTWuv5BsmaC/aIwxPtU7AMe3vVBrFzLdRSi3C4CEqem/HufSlFfXUt7PBIsfdHGzc3GPT50XqdnHcwJBEyxk4LYHr5CrDJ+caAkNATppz7UI7mxg+MEbOqDc8cYHHXIPr9KstPkju4BAz5hmTvEbdjj0qPtDLqOlDuEiBi/hZ8AA+fHoR/Ssxpoefs9fWyzoZbcttMJOFzzgZA4q6KOM3SvQKib6yKWwMA/0wSSccAY5rDanrktxdzwrcusLP4dpwwXOeKl7CTyGHEt08wkPOTngA8H06/jWv1bT9KtUSU2kO9zwQmccZOAOa4VCNoiDsjPriZjb2eK5tJXwWdMkMeHI9T8s/nVBPd2cWw/DqUcL4M8dP15rWyQiS+mYI/dEsoMakbcA/eJAAyM+fHHrXtl2Ts5EYT253xvwW8fh9fy/WrrYq/1CZPiMx9mKury5urmLuMhY/FGueDg1s9Bsmvvh55UKyRtkg9QetXtnoFpA7fuIF2nAIGCfnVzb2MaSHCDBIPSqWW8xoTaioVSSytUW4XuyxY88+XlUveJbXMsmc4G52ztVeeua91eZLOwYSP3RlBRZl42t5Dn19Kw3b7tD8J2fbR5Y3a6uUChjgbkGCXwOhPTB5qtVRdgJax9AmYXtlq6672ovb+InuSwjh//ABqNo/HBP1qtQYFRQrxnjHlips5p4o0NRYTs7nopUgaVdnJ3VmqFzTyaazIgy7BR7nFQ+S0l0fWEiu5tMuMK+3vIW/nUckfMcn5YPy9NxeX2EtQZFHUjPhz71jtS1SwuLaVklzIS7oRnIVRgnI8sjH1oDSPtD1DRLN9NWFJ8oTHJITlPbIpU2OGfazdcriNGB/ahvF5Z2pdZEXo4/iIwDzQul2bWGkCSQET348+GWEH8tzZHyU0dpUF1rlxbX2s8fCg7F2Y3Z559aJ1497q9wFKhIMQADoAvH65P1ottpXxlqgLLOUrdNtl/aIkABK425OTg+la+60iKeOKW4QNGp2ndztzx/WqvsjpyTztdzrk5Kx/StbLPcR2skzwiWGIHcqpnd7Y9c4pNkOxs6jqv8a/JQakO4CwxRoWBCIrDgH3oWa0t1Zkue7c7vGoGOMeVCdsluInt5FKB5ee6jYlgfLIoqxsLi+naeSGQOgAdpPuZxXQpCgmQ27HQgraXZSl1WeaNIU2oUYcD39qq75Y9NuEkgAe3ZSCFb7zHzz1+lH3MT6fbS7oiolm6k8uuaH1SzL2k10CRHHsBVceHPrRFZJ+5xa0cHmNHUPh0NLHQI9XU75TtbCjHdjPTPmeatIrmFe6mWQtkBkK9B04x5+le2upi67N29hI8aLIuJGbjbgf1NZ/S0iN33HeDvGLHw/dHvWO2JO/ROB1RRzk1nYpp3bC7a24t76xeWAA9CWG5fxBrq3Y66tr/ALP2rWVvFFGVIl2p0cEhhj5g1zrWQ0Fvpt8VAe1umibAzuV0PHyyKvew9/PpaTQLDmGaZnIJ+4T5UaLh0x+xFVr1qOA/c3OswxyWZjZufLNYIapc27PZSXLMqkiQ7vCg9D+Fba8MM1uH7wIccE84NZ27ghWTulEYQjlyudxJIpdlvpzyHU0poDab7gE99bwybEhWSKVRsZWPi5/PmrXR73ZLKLuRkbcOC2eg8x6VVyTQwyjuyNsGUUFR19R78VNb6WjBT3jpNcL0bk5PPFBVPwYFIbbWeJ3LbtGtpqvcxO6kFgzYbkAf5isxqOj2Olx3LWrHMsLMysQQAOPSrVtNNrGrvIytC2CT0c4rPdrNRjXRru8IAuJU7gkrgnB9aco/yDsaMFp5Ke/Jyu0uLiyuTLZTNE24nIPB59K3ei9qLTVttprkKwzu64uVPhLDhc5PFYFDgANyT096uLTRrpx++RIARx3rYJH+3r+NMba0YflF6WMDtZ1aLR7m3iuI/jWmVw2JVUF0GPI+Zz0FNj+Is5YraQTd2N3jc5JbPQ9cevl1rJ6HLq+jqfh74SRSD7ksLOoPkRzVm2vdoAd8osrlPNDG0RHyPNLWrXelYQ4XN/cs0mn2cdtDHvmlm8Zl3zNlhu8vXjyFaBVVEycE9ScYyff8K5JqXa3Vbfu1XS2h2Fn3klgxz5kcUY/b7VHsTqEkMEULkRwRLk96R95yT5DpWoxnPZmLXr4JuO03aSx0W1LX04Tax2W4IZpvQDzHPnXCdTvrnVtQlvbvO+Q8KTnaPIVob2K37SvJfxDZqGMyIz53fLNZ+RWiZkkXay8MD5UZVSK4PY5bqRqMCvTTSea9zmiJlFSrylUknaDP71XatK/weVGWJ8GOWJ9B881G059aV1HPc6RcLFLtk2numHDA+ZBHSsbiQvU6fJiroSWspt4Cg7xQuRkDOMMTyMHgZB9qB020udd1AWyXKRKDl5JVxwPYefyqx0zT7vUtVEdwHO5y0/HQe3vzW/XstBapZnTVSKaLrt55oJ71rH+Ztj4xY8m8hiaPZabYxGeR53wqjc+0kn2/pWEmaWfWriFzgS3TjKryAWNdAtLC7nuknvCQtu4JPqQc/hWH1WMQa+84J7sXPeLxjhuR+tDJazqdmMlrRXGppWsmi0tLeKWH90MKWUgk/jWVfWdY0+YRyXU8SqxEiqwJI8mGfMHyq/1AzqiP3LEBwQQeDmq1bKeW6lupbctvbwZwTn1oWltEloxccU6gD27z3SalcvdttG5ml48PsvJyK1r6sZ0gS3nXIhEmN+S4xySAPvY8qz1o0jW9zHdO0txGxQMzDkeQNFW9v3RJIOZgACOQpA6frWz/AJdQGx1qUNIO285ntLSWVYRczbe6CfeVepJyT7elZiC8m+HuI3jzKRHg56lSTnnimq95b3Mt1NaLM0zFIwednpgfKjktLmCESXkTxrICGRkx+NFIBWvHczFuiHYeSz1m+S6iggt4SZXby5LZ5J9+tEWNnFYTo0oKyuvUc7z5gVXaSyi7triOQmNV7ssw+6vp88gUcbJkuu9394+7OSeAPShn0vW4Rw+QedSxmuV1e0MMSue6mRmVgBvYZ4Un5+1ESXV4unkWD20LKcMH8fPmuQeD9DWb7XTyad2agFtKYJ7i73KYiVOAKw9vczwTd8sjbt2SNxO8+poyvGZ0DbiS1Atmh5Ox9jtYS+ivIb+9lzGwTumXaN3ng1s+5spEkkdkZAu4H1x+lcVsLvSNXVWmlNhf/d35Az/euj6HqSWvZj4K+f4ufLqTH/zVJyCT5GsnpT+4dw4IwTdZ3LKxtrS7upriN49h5ztyoY/1rzUbZFRVRWkgQ5JVtpB9mrJ6fqWpWlwix6U5tzISwecDj+tXmq9pLS2t545ZYoo5BgM3LAemPTrVBjVDseyxFxHcq9c1WfVr2Cy00ywd2C89xuGEGfTnk+tYbtRetq18mm6eQba1GXkY+Ffdj+NP1btIb9jp+hRFFnfxSn70h6CjNH0eOVfhYgGt4vFNKf8Amv5n+1EdUr8j/wDErssPiQ/7wfRdIK+O2UgqPFdMPEfZR/CPlknzrW2WnWkRjMMfeMUHjYcsfeiVMcEUaQKccKTjOPevNQS5SIQW6jumB3SA4NKLsp7z2eoQlSVjSiOMO/aCcRoc5Udfam3NuojfbtXGMluSa80zvhKYwe9KLjceg/vUeq3iNE0cccnfRkSNz97NC8Ty0DNQet6g8rNtbu4dqDoxU5PyGapO0uiyakgnExjmjTCKcd3gdePLpR93qhWARWzd5dSNnbt4X25o+KR2VYJ4xFLgbuvn1IplTk2U65eQOypbNhfZyqGW5tbjfEZEuFbOFOTmrvV45rzTkv7y3ktphxh4yokHmRnrWg7WXV3oNvE2lraxqTtadIR3gHkMmsHd391etvu7maY+W9s0+Vg4DCLmHE6nuw+5968PhNRhm9adg1pKSRSMda8pgFe1JJ0ppKjSC/vr62t7KMsm/Mxzjw9Kid60XY/WtPtna1YO103JwmePTND5TkVnqEUKGbuWq6NHbyn4KFUdmCs2MA8eo+n50Ve3JscqYWLtyvh454wMVZxSiYd6F24A4bAqvvXWO5YOue853OcjjjgeVJD37DjvyC4nuIEkupe7BGQuNuGzwCDWN15GLTL3Y7yNtrDOfCxyp/HI/Ct5ZpJeI+V3IuFyQQrN8vT3rEfaDcSaXr+l3LBBHNH3c8ak4ZSefr55+VEYy7bWpR34wKy1DVGljhvpUeLI2LswCfLJq+XVIrWTvr5FHdKVPdr94+X+fOq8IgCjcXjPKSKOoqC40Zb4Mss0vdnrsbBPtXbsQM2/BCKsoKum7lfpks+ravPfPMiW4k+5jq3t8hRk1xcrrIlGRaohVVB6HzPzrx9ENiM2XexDHlypPv6140F815gxq0LRFSP4SfXHHNZM4315O2YqWKCd7g+mXyW2tlRm57vLZjAYg+Q/Oiu1N9JOjrcb1UR5IPHPyoizt1sUE0SbVKkmONsgeRByOKqryOVblJ7hGMEj+H0PsaoGDPsfUJqrK16bvcKGlXsWkW0DW/cqoDMzDr5+X0ovRoZ9TuDGhH3gPkPOrWC/k1ORe7hmCquGGNwqD4i27J6VfahdHu765lPw0bNke3T086vTW9zHkJS+5aUGvZlftTnt3vbW2tiO6sA0BOf4sAn9a90zshZ2FpHfdrppLdHUOmnwnEpB6GRv4B7dfXHSiOwtpGmkv2j1RVmnhupGtFlGQ8xAJkPqF5x/1fKq6SS57Q6o00srOCd2WOc+59T7U1e0VLqKMeg3uWbyXtn2is7Q9z2e7O2MUf8AOYwxPuSaurbtPev+7vtJtJYv4gijj9KpbSGCGT4UeFscAHAP51YFFkIUsx8O7hsHApVbmWEx3XiUAQvUdAtO0lo7aFqM+m34G74d3Jjb29R8xXINZsb/AE7UZbLV0lS6iPiSRic+4PmPeuqQz7Nk8bSI2NysB09qsO1WjRduOyhuooQusWKFo2Xq4HVM+YPlRmHlLYeDexfnYjIvNTsTl3ZmJVNxdIPFDHhCfJm4H5ZP0rfaLZyQ2EASQBXOWAHJFYHsxk6fd88GaP8AJW/vXQtNnVoY0Y4xxj+1D/yrty0JTCA47hD9/IscMUmz95hpwBtxzxj6V7qV09nbPJOjuSoQLENwbHOeKnnjLxbUwoGcK3AzjjPpVNqktuNOMcTSrLBy8ecjf6ZPl8jSqoCzQ1CLCV8numal8ffM0TvFaxpkqidfUH0ND6pqptbofDgjcmQBzkf0NV2nXHw8TrJIlv3nQqDyc44qBAlreLmQvuJI3rnI67hz1o0UKHJ11Bja2gNy2tbaO4khu5O8EhOSic+dW12cSxTrx5FSfFjHFVkV/HFj4dN+4gYjbHFGxCETYLt3ocFdx6Ag5HuOlDWcidmFVEEdSTUtOXVNHntyPvKcccg9Qfxrj+GU7XGHBII9Oa7ppg7ydoiSSF8XntwelcZ7QQrba/qMCcKlw2Prz/WnX8W5NWjFuWungiHmpgfbNDKeanU0ygkk3nzFeV5k+uK9qTs2veZ86niuZofFbSCCUcB1UZofAXqtelwK4QCNGWDEHYk019rLxiN9aumjBzgBR+gqM39+RiS/nfHTc2aHklI5qIyEnmufGn6neRP3DZdUvzGsf7SvAiDA2ylf0qtu/wDi5Vlunlmkz1lctj5DyqQpIwyBhf5idoH1PFOSTTraPvbm5gkY4AjSQEfl1qjMqeCa01PceIP/AHJtO1CS2zFJG0tu3JUdVPqK1Wl9y+ZIJTIDhjnqvzHlWQu9Xurzf+ybYWdkPD3oUAt6kfWg7Z57RxcxyTiQgfvvFnH9BkVnsOe+oU+O1a/js/8Ak6msYQbkOQeqnkGs1r+oXiTdxZWDSSE+F+gWquy7a3MJ7ucQzkdd2Ub8Rx+VWA7aWv35NOuMn+WVW/8AaKHbDRn5SDLZF4mT2+k6o9oHuZo7eEKWdVXcaPk0WG4sI7F7tzyGbI8WPb0qhvO30BTZHpFw+P57gKPyWotI7Tar2m1c6e7DT43t5CrW+TISBwC55xjPSrDDUNuVOaxGpoNe7S6X2Xs0gOGnRcRWcWNxx5sfIe/WsPoGvx612jlj7SQfE22oL3IROlvzxtHkOnNZhLG8ub7uIopbi4kcqqKC8kjZ6Y6k1s7TTYOxUKXWsd1LrbLvh05WB7o+RlYdMfyjPNGBQo0ICzsx2ZddtLRNC0a00S3JaKCNUz03Encx+ZJoDs7AIoe8CZZ/T0qy7cs2oWtlqIy/fRxybh0OVBNC6OVWzUqRnzIPvSjOY9x/gKOAkuoxSAJLGocxNu69BT476JdivtBdcsR06ZqaWOYOjW7AqT4o3Jxj1Bqvniha6SCNSWnPix0QDkn68UCmmXRm1jMj/j9w+Ofv4g6gd0rDHqTWi7LTSQ6oqI+0SqUwfXyqkMZQYXYQACABg1b9mIzc6/aP0EeSR5/5xWVZHyDjN7UHwMW/U55e6edJ7U9oNKOMpMk6kDjDDPH/APY/CrDTLoRyoCpf5dBQn2k6glt9q183SMJFDKfnGvP5ig4774e+2To0IJ8LDkN8qdZtHLsfqefxrgNgzZao8otBFCe6kMgILc+H/BQhjDXPczpkume8UcE8/nXqxJqFuo78oGwQw/hAHn86flp7eRIMMY0wXAJ5+dJl/HqGkbgSaWq3LTMUfCZKMct6/wBqqLxpRdG37rYsXgDL0Izk4/H9Ks9PjvnmAJZEl4Fy/GD5gfhUVzpM4mmuZZW7gHBUjlcDqPnRSOFJ2YMydA6jLa3kEbEBzE+DHzzmraOJ4beIzIGkQbs+eepz+FPs4z3ak8KeED/rRLtLIknc/wDNXauE/L9KGttLHUKSsINy47MW5PfzgYT7o9xXEu0U63Ov6lKn3WuXx9Dj+ldv1y8i7JdjbiZnzcd3tXI/1JWGAK+fjnOSSWPJJ8/en2DSa6u4qyXDP1HjrUymoo6mAo2Dx3WlXoOOle1J2bFpSfOh2lqDvD60kbjmpOyfdlcGmMcVGGpFqkkjfBPIpjMsUbNj2Cjoaex5qNxuZAegOTXD3JuMdry4K97ctGu3HdxeEY/vSWHaCollIIwcuTkenyqQkCvM1ziP1Nfms/1GNhQQy94uGPIw/iBBpsUZiXaHLD3p+aaWq2hM2dm9M8ODU2nXcmnX0N5b472JsjPQjHQ0OTTSakrNFN2wvY0lj0e1s9K77PezWsf7589RvPQfKspMj96z7mZmOXZiWLH3J5NTV71GK5qdm67KzL2g7JPpzgNeadlVU8ZiJ8B+nK0Hpidynwc6ggdNy9Pb51nNG1G70XUI7+yYd4mQUP3ZFPVW9j+uK6hp8OkdrrU3GnsYLoAGWBv9SM+uPP5igM2hm/JYzwcpUHB/JT2sLwQlJn7xQfCQOntTtqtMwKqjn7nv06fhV1/4cvozggOoHUdaUHZ+/uH2/D4Cnwsx6UhKWctaMdC2nW+QlZHbu8hLAMG8sc/jW10O0g0WwuNX1DEMccW9mbyUc5qbTez9rpsZu9Sli2INzFzhR8zXJvtY+0OPXh+xdEkI05G/fSjjvyOgH/SKa4OCyn5LIoz88OPjr8mC1W6uO0et3+ovkfFTtMxb+BSeBn2GB9K0Wix2eqAQtMZJrcbVdmxvHtVNpsceo6M+nxsIbqKUyr6SqQOD8scVUq09hd5UtFLGec/2pq68hqKlPE7nXLOMJZG1AK5C4fPpVgsC2sSIisVUbR5CspY9o47WDTP2s22S5hMu5ei54Gce3NafTLiK8gWWC4SYeqNkY+VIMjBtUkrGleShHcjeRS7x7lYowK4HU+lCSWckTvFEdom4ZS2cH61aQ2Cb9wcDxbunOaNGnoxy5yuc4Wskx7h4Jd7Ub2U9vC9vHCdxlmPAVgSSfatHo+nraQJqGpOIngDOoY4EQx1PrjFU+p9qdB0AEPMj3C9IovG//aubdru3F/2jHwyZtrDzgU+J/Tcf6UwxsAg8ngt+V1xWTfaF2tPaTU1itmb9m2xPc/8A3G83P6D2z61k1zgA14OfLmpEX1puBoai/sx6CpQMUxeKfmuzonte03rSqSTQDrUknHSlSqTsb5U00qVSSIfeFeyjpSpVJyQk814a9pVJIwedeUqVSSNNeGvKVSSeU0nmlSqSRjMS2Pzp8FxPazCe2mkhmU+GSNsMPrXtKuGSazRftQ7S29wlrNJbXanjdcQ+L8VIq67R/aprum2Cy2trpwcsVy0TnH/nrylVtdSuzOd652s13tMAdX1GaSPbuEKYWMf/AKj+tUJG6MEknI3V5Sqq/c6PI6B2SbvI2KPGcqy9a0WoRpqGjfFXCjv1jyHXg0qVVb2WWQdrD/8AUIY/4UgjVfYBf+1U8cssP7yGV42Hmjbf0r2lVhKv7LS31/Wo0AXVbzb6GUmorzWNVuz3d1qd5KpHR5mNKlXdCTfUqwgGT1yec08qFOB6UqVdM4I5QM1IelKlXJ2eU6lSqST0UqVKpJP/2Q==" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.resData.info.name}</h5>
    <p className="card-text">Rating: { props.resData.info.avgRatingString
}</p>
      <p className="card-text"> Chicken</p>
      <p className="card-text">{ props.resData.info.areaName}</p>
      <p className="card-text">{props.resData.info.sla.deliveryTime}Mins</p>
        <a href="#" className="btn btn-primary">Check Menu</a> 
    </div>
  </div>
    )
}


// Body component
const Bodycomponent = () => {
    return (
        <div className="body">
            <div className="search-retro">
            <input placeholder = "search Resto here" type = "search" names = "" id = ""></input>
        </div>
       <div className="resto-container">
        {/* <Restocomponent prpsData = {jsonData[0]}/>
        <Restocomponent prpsData = {jsonData[1]}/>
        <Restocomponent prpsData = {jsonData[2]}/>
        <Restocomponent prpsData = {jsonData[3]}/> */}
        {
             jsonData.map(rest => <Restocomponent resData = {rest}/>)
        }
        
       </div>
        </div>
    )
};

// Footer component
const Footercomponent = () => {
    return (
        <div className="site-footer">
        <nav className="navbar navbar-expand bg-danger">
            <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Cart Value</a></li>
             </ul>
        </nav>
    </div>
    )
};
// App component
const Appcomponent = ()=>{
    return (
        <div className="App">
            <Headercomponent></Headercomponent>
            <Bodycomponent></Bodycomponent>
            <Footercomponent></Footercomponent>
        </div>
    )
}


const root2 = ReactDOM.createRoot(document.getElementById("root"));

root2.render(<Appcomponent></Appcomponent>); 