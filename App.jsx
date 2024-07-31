import React from 'react'
import ReactDOM from 'react-dom/client';
import image_logo from './public/images/site_Logo_jpeg.jpg'

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () =>{
  return(
    <div className="header">
      <div className='logo-container'>
      <img
          src={image_logo}
          className='logo'
          alt="Logo"
          width={100}
          height={100}
        />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}


const RestaurantCard = (props) =>{
  const { resData } = props;
  const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.info;
  return(
    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
      <img className='res-logo' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="Res Logo" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating}</h5>
      <h5>{costForTwo}</h5>
      <h5>{deliveryTime} Minutes</h5>
    </div>
  )
}

const resList = [
{
  "info": {
    "id": "636810",
    "name": "The Flour Works",
    "cloudinaryImageId": "k5nzqa4ckiddvn0jmsxk",
    "locality": "Deron Hills",
    "areaName": "Baner",
    "costForTwo": "₹1000 for two",
    "cuisines": [
      "European",
      "American",
      "Bakery"
    ],
    "avgRating": 4.2,
    "parentId": "208292",
    "avgRatingString": "4.2",
    "totalRatingsString": "100+",
    "sla": {
      "deliveryTime": 58,
      "lastMileTravel": 11.3,
      "serviceability": "SERVICEABLE",
      "slaString": "55-60 mins",
      "lastMileTravelString": "11.3 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-07-31 23:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "newg.png",
          "description": "Gourmet"
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
                "description": "Gourmet",
                "imageId": "newg.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "40% OFF",
      "subHeader": "UPTO ₹80"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/the-flour-works-deron-hills-baner-pune-636810",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "202642",
    "name": "Irani Cafe",
    "cloudinaryImageId": "tfsksql6wnebha3zcttj",
    "locality": "Laxman Nagar",
    "areaName": "Baner",
    "costForTwo": "₹200 for two",
    "cuisines": [
      "Bakery",
      "Snacks",
      "Fast Food",
      "Desserts",
      "Beverages",
      "Indian",
      "Street Food"
    ],
    "avgRating": 4.5,
    "parentId": "4057",
    "avgRatingString": "4.5",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 41,
      "lastMileTravel": 8.7,
      "serviceability": "SERVICEABLE",
      "slaString": "40-45 mins",
      "lastMileTravelString": "8.7 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-08-07 00:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
          "description": "Delivery!"
        },
        {
          "imageId": "Rxawards/_CATEGORY-Snacks.png",
          "description": "Delivery!"
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
                "description": "Delivery!",
                "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
              }
            },
            {
              "attributes": {
                "description": "Delivery!",
                "imageId": "Rxawards/_CATEGORY-Snacks.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "ITEMS",
      "subHeader": "AT ₹99"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/irani-cafe-laxman-nagar-baner-pune-202642",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "496036",
    "name": "Great Indian Khichdi by EatFit",
    "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
    "locality": "Wakd road",
    "areaName": "Hinjawadi",
    "costForTwo": "₹200 for two",
    "cuisines": [
      "Home Food",
      "Indian",
      "North Indian",
      "Healthy Food",
      "Snacks",
      "Desserts",
      "Rajasthani",
      "South Indian",
      "Maharashtrian",
      "Sweets"
    ],
    "avgRating": 4.4,
    "veg": true,
    "parentId": "319582",
    "avgRatingString": "4.4",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 41,
      "lastMileTravel": 4.6,
      "serviceability": "SERVICEABLE",
      "slaString": "40-45 mins",
      "lastMileTravelString": "4.6 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-08-01 01:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "v1695133679/badges/Pure_Veg111.png",
          "description": "pureveg"
        }
      ],
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "brand",
          "fontColor": "#7E808C"
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
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "brand"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "ITEMS",
      "subHeader": "AT ₹149"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-wakd-road-hinjawadi-pune-496036",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "558827",
    "name": "HRX by EatFit",
    "cloudinaryImageId": "d8d85afa5c5e92461d30ff2ca867a587",
    "locality": "Opp Yes bank, Nr. H P Gas",
    "areaName": "Hinjawadi",
    "costForTwo": "₹450 for two",
    "cuisines": [
      "Healthy Food",
      "Salads",
      "Keto",
      "Pastas"
    ],
    "avgRating": 4.5,
    "parentId": "335529",
    "avgRatingString": "4.5",
    "totalRatingsString": "100+",
    "sla": {
      "deliveryTime": 44,
      "lastMileTravel": 4.6,
      "serviceability": "SERVICEABLE",
      "slaString": "40-45 mins",
      "lastMileTravelString": "4.6 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-08-01 01:00:00",
      "opened": true
    },
    "badges": {
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "brand",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "brand"
              }
            }
          ]
        }
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
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/hrx-by-eatfit-opp-yes-bank-nr-h-p-gas-hinjawadi-pune-558827",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "528562",
    "name": "Kaati Zone Rolls & Wraps",
    "cloudinaryImageId": "yobd40s5dhg2bad5rzyc",
    "locality": "NV Square",
    "areaName": "Baner",
    "costForTwo": "₹200 for two",
    "cuisines": [
      "Fast Food",
      "Bengali",
      "Beverages",
      "Desserts"
    ],
    "avgRating": 3.4,
    "parentId": "248306",
    "avgRatingString": "3.4",
    "totalRatingsString": "100+",
    "sla": {
      "deliveryTime": 58,
      "lastMileTravel": 10.4,
      "serviceability": "SERVICEABLE",
      "slaString": "55-60 mins",
      "lastMileTravelString": "10.4 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-08-01 01:00:00",
      "opened": true
    },
    "badges": {
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "options available",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "60% OFF",
      "subHeader": "UPTO ₹120"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/kaati-zone-rolls-and-wraps-nv-square-baner-pune-528562",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "2053",
    "name": "RushHrs",
    "cloudinaryImageId": "ueiq0zh6dfn38hagze3d",
    "locality": "Baner",
    "areaName": "Baner",
    "costForTwo": "₹250 for two",
    "cuisines": [
      "American",
      "Burgers",
      "Salads",
      "Fast Food",
      "Desserts"
    ],
    "avgRating": 4.5,
    "parentId": "791",
    "avgRatingString": "4.5",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 43,
      "lastMileTravel": 9.8,
      "serviceability": "SERVICEABLE",
      "slaString": "40-45 mins",
      "lastMileTravelString": "9.8 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-07-31 23:59:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "ITEMS",
      "subHeader": "AT ₹149"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "3.9",
        "ratingCount": "100+"
      },
      "source": "GOOGLE",
      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/rushhrs-baner-pune-2053",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "496037",
    "name": "Cheat Treats by Eatfit",
    "cloudinaryImageId": "e975b355e30661b40e3522641689cede",
    "locality": "Wakd Road",
    "areaName": "Hinjawadi",
    "costForTwo": "₹250 for two",
    "cuisines": [
      "Pizzas",
      "Pastas",
      "Burgers",
      "Chinese",
      "Italian",
      "Desserts",
      "Beverages"
    ],
    "avgRating": 4.2,
    "parentId": "504312",
    "avgRatingString": "4.2",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 50,
      "lastMileTravel": 4.6,
      "serviceability": "SERVICEABLE",
      "slaString": "45-50 mins",
      "lastMileTravelString": "4.6 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-08-01 01:00:00",
      "opened": true
    },
    "badges": {
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "options available",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "ITEMS",
      "subHeader": "AT ₹169"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/cheat-treats-by-eatfit-wakd-road-hinjawadi-pune-496037",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "661116",
    "name": "HRX Beverages - Juices, Coffee & Kombucha",
    "cloudinaryImageId": "3aed4be19affeb4bba136c953ba7283c",
    "locality": "Wakad Road, Nr. H P Gas",
    "areaName": "Hinjawadi",
    "costForTwo": "₹270 for two",
    "cuisines": [
      "Beverages",
      "Juices",
      "Healthy Food",
      "Desserts"
    ],
    "avgRating": 4.9,
    "veg": true,
    "parentId": "509799",
    "avgRatingString": "4.9",
    "totalRatingsString": "20+",
    "sla": {
      "deliveryTime": 57,
      "lastMileTravel": 4.6,
      "serviceability": "SERVICEABLE",
      "slaString": "55-60 mins",
      "lastMileTravelString": "4.6 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-08-01 01:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
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
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/hrx-beverages-juices-coffee-and-kombucha-wakad-road-nr-h-p-gas-hinjawadi-pune-661116",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "605364",
    "name": "Jain Meals by EatFit",
    "cloudinaryImageId": "3ce186c44356aa7bbd661678985b9674",
    "locality": "Wakd Road",
    "areaName": "Hinjawadi",
    "costForTwo": "₹270 for two",
    "cuisines": [
      "Healthy Food",
      "Pizzas",
      "North Indian",
      "Thalis",
      "Biryani",
      "Chinese"
    ],
    "avgRating": 4.4,
    "veg": true,
    "parentId": "512428",
    "avgRatingString": "4.4",
    "totalRatingsString": "10+",
    "sla": {
      "deliveryTime": 44,
      "lastMileTravel": 4.6,
      "serviceability": "SERVICEABLE",
      "slaString": "40-45 mins",
      "lastMileTravelString": "4.6 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-08-01 01:00:00",
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
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
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
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/jain-meals-by-eatfit-wakd-road-hinjawadi-pune-605364",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "496032",
    "name": "EatFit",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/2/b83bc9a8-67dd-4e65-8738-47d72a7d9507_496032.JPG",
    "locality": "Wakd Road",
    "areaName": "Hinjawadi",
    "costForTwo": "₹270 for two",
    "cuisines": [
      "Chinese",
      "Healthy Food",
      "Tandoor",
      "Pizzas",
      "North Indian",
      "Thalis",
      "Biryani"
    ],
    "avgRating": 4.4,
    "parentId": "76139",
    "avgRatingString": "4.4",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 39,
      "lastMileTravel": 4.6,
      "serviceability": "SERVICEABLE",
      "slaString": "35-40 mins",
      "lastMileTravelString": "4.6 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-08-01 01:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "Rxawards/_CATEGORY-Guiltfree.png",
          "description": "Delivery!"
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
                "description": "Delivery!",
                "imageId": "Rxawards/_CATEGORY-Guiltfree.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
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
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/eatfit-wakd-road-hinjawadi-pune-496032",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "35790",
    "name": "The Belgian Waffle Co.",
    "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
    "locality": "Bibwewadi",
    "areaName": "Balewadi",
    "costForTwo": "₹200 for two",
    "cuisines": [
      "Waffle",
      "Desserts",
      "Ice Cream",
      "Beverages"
    ],
    "avgRating": 4.6,
    "parentId": "2233",
    "avgRatingString": "4.6",
    "totalRatingsString": "5K+",
    "sla": {
      "deliveryTime": 55,
      "lastMileTravel": 9.3,
      "serviceability": "SERVICEABLE",
      "slaString": "55-60 mins",
      "lastMileTravelString": "9.3 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-08-01 06:55:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "Rxawards/_CATEGORY-Desserts.png",
          "description": "Delivery!"
        },
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
                "description": "Delivery!",
                "imageId": "Rxawards/_CATEGORY-Desserts.png"
              }
            },
            {
              "attributes": {
                "description": "pureveg",
                "imageId": "v1695133679/badges/Pure_Veg111.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
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
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "4.3",
        "ratingCount": "1K+"
      },
      "source": "GOOGLE",
      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-bibwewadi-balewadi-pune-35790",
    "type": "WEBLINK"
  }
}
];
const Body = () =>{
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
          resList.map((restaurant) =><RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
        }
      </div>
    </div>
  )
}
const App = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);

