
function xx(){
    return {
        "book": {
            "metadata": {
                "type": "specific"
            },
            "relatedInfo": [
                {
                    "title": [
                        "دیگران نیز این موارد را جستجو کرده‌اند"
                    ],
                    "value": [
                        {
                            "subTitle": "مهری محمدی مقدم, آنتوان دوسنت اگزوپری",
                            "imageUrl": "https://shahreketabonline.com/images/ProductImages/9786008099222.jpg",
                            "title": "شاهین مالت"
                        },
                        {
                            "subTitle": "مهری محمدی مقدم, آنتوان دوسنت اگزوپری",
                            "imageUrl": "https://shahreketabonline.com/images/ProductImages/9786008099222.jpg",
                            "title": "آنجا که خانه ام نیست "
                        },
                        {
                            "subTitle": "مهری محمدی مقدم, آنتوان دوسنت اگزوپری",
                            "imageUrl": "https://shahreketabonline.com/images/ProductImages/9786008099222.jpg",
                            "title": "دوریت کوچک"
                        },
                        {
                            "subTitle": "مهری محمدی مقدم, آنتوان دوسنت اگزوپری",
                            "imageUrl": "https://shahreketabonline.com/images/ProductImages/9786008099222.jpg",
                            "title": "آفرت "
                        },
                        {
                            "subTitle": "مهری محمدی مقدم, آنتوان دوسنت اگزوپری",
                            "imageUrl": "https://shahreketabonline.com/images/ProductImages/9786008099222.jpg",
                            "title": "گل سنگ  "
                        }
                    ]
                }
            ],
            "info": {
                "subTitle": "از مهری محمدی مقدم, آنتوان دوسنت اگزوپری",
                "entities": [
                    {
                        "title": "نویسنده",
                        "value": [
                            "مهری محمدی مقدم",
                            "آنتوان دوسنت اگزوپری"
                        ]
                    },
                    {
                        "title": "مترجم",
                        "value": [
                            "مهری محمدی مقدم",
                            "آنتوان دوسنت اگزوپری"
                        ]
                    },
                    {
                        "title": "دسته‌بندی",
                        "value": [
                            "داستان جهان"
                        ]
                    }
                ],
                "imageUrl": "https://shahreketabonline.com/images/ProductImages/9786008099222.jpg",
                "description": null,
                "source": {
                    "title": "شهر کتاب",
                    "url": "https://shahreketabonline.com/Products/Details/194702/شازده_کوچولو"
                },
                "title": "شازده کوچولو"
            }
        },
        "dataModelRepo": {
            "timeToLive": 86400,
            "found": true,
            "dataModels": [
                {
                    "clause": "SHOULD",
                    "boost": 50,
                    "value": "book",
                    "operation": "EQUAL",
                    "key": "type"
                },
                {
                    "clause": "SHOULD",
                    "boost": 10,
                    "value": "کتاب",
                    "operation": "EQUAL",
                    "key": "keyword"
                },
                {
                    "clause": "SHOULD",
                    "boost": 10,
                    "value": "618796",
                    "operation": "EQUAL",
                    "key": "book"
                }
            ],
            "categoryStorage": "smart",
            "categoryName": "book"
        }
    }
}