angular.module('starter.services', [])
    .factory('Meals', function () {
        // Might use a resource here that returns a JSON array
        var items = [
            { id: 0, text: "Breakfast", selected: false, info: "", energy: 0.0 },
            { id: 1, text: "Lunch", selected: false, info: "", energy: 0.0 },
            { id: 2, text: "Dinner", selected: false, info: "", energy: 0.0 },
            { id: 3, text: "Extra Meal", selected: false, info: "", energy: 0.0 }
        ];
         return {
            all: function () {
                return items;
            },
            remove: function (item) {
                items.splice(items.indexOf(item), 1);
            },
            indexOf: function (item) {
                return items.indexOf(item);
            },
            get: function (itemId) {
                for (var i = 0; i < items.length; i++) {
                    if (items[i].id === parseInt(itemId)) {
                        return items[i];
                    }
                }
                return null;
            }
        };

    })

    .factory('Sports', function () {
        // Might use a resource here that returns a JSON array
        var sports = [{
            id: 0,
            userid: 0,
            date: 2016 - 03 - 09,
            items: []
        }];
        return {
            all: function () {
                return sports;
            },
            remove: function (sport) {
                sports.splice(sports.indexOf(sport), 1);
            },
            get: function (sportId) {
                for (var i = 0; i < sports.length; i++) {
                    if (sports[i].id === parseInt(sportId)) {
                        return sports[i];
                    }
                }
                return null;
            },
            getbyuser: function (userid) {
            	for (var i=0; i<sports.length;i++){
            		if (sports[i].userid === parseInt(userid)){
            			return sports[i];
            		}
            	}
            },
            edit: function(data) {
            	sports[0].userid=data.id;
            	var time = new Date();
				var t = time.getFullYear()+ "-"+ time.getMonth() + "-" + time.getDate();
				sports[0].date=t;
				if (data.sports.length === 0) {
					sports[0].items.splice(0,sports[0].items.length);
					//sports[0].items.push("今天还没有Sports，请加油！");
				} else {
					sports[0].items.splice(0,sports[0].items.length);
					for (var i=0;i<data.sports.length;i++){
						sports[0].items.push({
                    		name: data.sports[i].sport_name,
                   			time: data.sports[i].time,
                    		costqk: data.sports[i].energy_cost
						});
					}
				}
           	},
			edit2: function(data) {
				sports[0].items.splice(0,sports[0].items.length);
			},
            add: function(item) {
            	sports[0].items.push({
                    name: item.name,
                   	time: item.time,
                    costqk: item.costqk
            	});
            }
        };
    })

    .factory('Sportitems', function () {
        var sportitems = [{
            id:0,
            name: "Walking(fast)",
            proqk: 450,
            icon: "img/icon/icon10.png"

        }, {
            id: 1,
            name: "Walking(slow)",
            proqk: 350,
            icon: "img/icon/icon10.png"

        }, {
            id: 2,
            name: "Bicycling",
            proqk: 400,
            icon: "img/icon/icon3.png"
        }, {
            id: 3,
            name: "Climbing Mountain",
            proqk: 474,
            icon: "img/icon/icon16.png"
        }, {
            id: 4,
            name: "Swimming(slow)",
            proqk: 198,
            icon: "img/icon/icon7.png"
        }, {
            id: 5,
            name: "Swimming(fast)",
            proqk: 666,
            icon: "img/icon/icon7.png"
        }, {
            id: 6,
            name: "Gymnastics",
            proqk: 240,
            icon: "img/icon/icon6.png"
        }, {
            id: 7,
            name: "Football",
            proqk: 516,
            icon: "img/icon/icon4.png"
        }
		];
        // Some fake testing data

        return {
            all: function () {
                return sportitems;
            },
            remove: function (sportitem) {
                floors.splice(floors.indexOf(sportitem), 1);
            },
            get: function (sportitemId) {
                for (var i = 0; i < sportitems.length; i++) {
                    if (sportitems[i].id === parseInt(sportitemId)) {
                        return sportitems[i];
                    }
                }
                return null;
            }
        };

    })
    .factory('UserSportitems', function () {
         var sportitems = [{
            id:0,
            name: "Walking(fast)",
            proqk: 450,
            icon: "img/icon/icon10.png"

        }, {
            id: 1,
            name: "Walking(slow)",
            proqk: 350,
            icon: "img/icon/icon10.png"

        }, {
            id: 2,
            name: "Bicycling",
            proqk: 400,
            icon: "img/icon/icon3.png"
        }, {
            id: 3,
            name: "Climbing Mountain",
            proqk: 474,
            icon: "img/icon/icon16.png"
        }, {
            id: 4,
            name: "Swimming(slow)",
            proqk: 198,
            icon: "img/icon/icon7.png"
        }, {
            id: 5,
            name: "Swimming(fast)",
            proqk: 666,
            icon: "img/icon/icon7.png"
        }, {
            id: 6,
            name: "Gymnastics",
            proqk: 240,
            icon: "img/icon/icon6.png"
        }, {
            id: 7,
            name: "Football",
            proqk: 516,
            icon: "img/icon/icon4.png"
        }];
         // Some fake testing data

         return {
             all: function () {
                 return sportitems;
             },
             remove: function (sportitem) {
                 floors.splice(floors.indexOf(sportitem), 1);
             },
             get: function (sportitemId) {
                 for (var i = 0; i < sportitems.length; i++) {
                     if (sportitems[i].id === parseInt(sportitemId)) {
                         return sportitems[i];
                     }
                 }
                 return null;
             }
         };

     })
    .factory('Userdishes', function () {
        var items = [{
               id: 0,
                    userid: 0,
                    date: 2016 - 03 - 10,
                    items: [
                    ],
					today_carbo: 0,
					today_energy: 0,
					today_fat: 0,
					today_protein: 0,
               }];
           // Some fake testing data
		return {
            all: function () {
                    return tems;
                },
            remove: function (item) {
                    items.splice(items.indexOf(item), 1);
                },
            get: function ( itemId) {
                for (var i = 0; i < items.length; i++) {
                    if ( items[i].id === parseInt( itemId)) {
						items[i].today_carbo	=0;
						items[i].today_energy	=0;
						items[i].today_fat		=0;
						items[i].today_protein	=0;
						for(var j = 0; j < items[i].items.length; j++){
							items[i].today_carbo	+=items[i].items[j].carbo;
							items[i].today_energy	+=items[i].items[j].energy;
							items[i].today_fat		+=items[i].items[j].fat;
							items[i].today_protein	+=items[i].items[j].protein;
						}
                            return items[i];
                       }
                   }
                    return null;
               },

				edit: function(data) {
					// items[0].date=t;
                    console.log(data)
					if (data.length === 0) {
						items[0].items.splice(0,items[0].items.length);
					} else {
						items[0].items.splice(0,items[0].items.length);
						for (var i=0;i<data.length;i++){
							items[0].items.push({
								dishid: 	data[i].dishid,
								name: 		data[i].name,
								count:  	data[i].count,
								// canteenid: 	data[i].canteenid,
								meal:    	data[i].meal,
								carbo:   	data[i].carbo,
								energy: 	data[i].energy,
								fat:   		data[i].fat,
								protein:   	data[i].protein
							});
						}
						items[0].today_carbo	=0;
						items[0].today_energy	=0;
						items[0].today_fat		=0;
						items[0].today_protein	=0;
						for(var j = 0; j < items[0].items.length; j++){
							items[0].today_carbo	+=items[0].items[j].carbo;
							items[0].today_energy	+=items[0].items[j].energy;
							items[0].today_fat		+=items[0].items[j].fat;
							items[0].today_protein	+=items[0].items[j].protein;
						}
					}
				},
				edit2: function(data) {
					items[0].items.splice(0,items[0].items.length);
				},
            };
        })



    .factory('Items', function () {
        // Might use a resource here that returns a JSON array
        var items = [];

        return {
            all: function () {
                return items;
            },
            remove: function (item) {
                items.splice(items.indexOf(item), 1);
            },
            indexOf: function (item) {
                return items.indexOf(item);
            },
            get: function (itemId) {
            //    for (var i = 0; i < items.length; i++) {
            //        if (items[i].id === parseInt(itemId)) {
                        return items[itemId];
            //        }
            //    }
            //    return null;
            }
        };

    })

    .factory('Canteens', function () {
        var canteens = [{
            id: 1,
            name: 'Xueyuan',
            items: [{
                id: 11,
                name: 'First Floor Left'
            }, {
                id: 12,
                name: 'First Floor Right'
            }, {
                id: 13,
                name: 'Second Floor Left'
            }, {
                id: 14,
                name: 'Second Floor Right'
            }]
        },
        {
            id: 2,
            name: 'Xiyuan',
            items: [{
                id: 21,
                name: 'First Floor Left'
            }, {
                id: 22,
                name: 'First Floor Right'
            }, {
                id: 23,
                name: 'Second Floor Left'
            }, {
                id: 24,
                name: 'Second Floor Right'
            }, {
                id: 25,
                name: 'Third Floor'
            }]
        },
        {
            id: 3,
            name: 'Xibei',
             items: [{
                id: 31,
                name: 'First Floor Left'
            }, {
                id: 32,
                name: 'First Floor Right'
            }, {
                id: 23,
                name: 'Second Floor'
            }]
        },
        {
            id: 4,
            name: 'Beiyuan',
             items: [{
                id: 41,
                name: 'First Floor'
            }, {
                id: 42,
                name: 'Second Floor'
            }]
        }];
        // Some fake testing data

        return {
            all: function () {
                return canteens;
            },
            remove: function (canteen) {
                canteens.splice(canteens.indexOf(canteen), 1);
            },
            get: function (canteenId) {
                for (var i = 0; i < canteens.length; i++) {
                    if (canteens[i].id === parseInt(canteenId)) {
                        return canteens[i];
                    }
                    for (var j = 0; j < canteens[i].items.length; j++) {
                        if (canteens[i].items[j].id === parseInt(canteenId)) {
                            return canteens[i].items[j];
                        }
                    }
                }
                return null;
            }
        };

    })

    .factory('Nutritions', function () {
        var nutritions = [{
                id:0, name: "Carbohydrate", status: 0
            }, {
                id:1, name: "Protein", status: 0
            }, {
                id:2, name: "Fat", status: 1
            },];
        return {
            all: function () {
                return nutritions;
            },
            remove: function (nutrition) {
                nutritions.splice(nutritions.indexOf(nutrition), 1);
            },
            get: function (nutritionId) {
                for (var i = 0; i < nutritions.length; i++) {
                    if (nutritions[i].id === parseInt(nutritionId)) {
                        return nutritions[i];
                    }
                }
                return null;
            },
			edit: function (data) {
				if (data.today_carbo > 1.3 * data.carbo_need) {
					nutritions[0].status = 1;
				} else if (data.today_carbo < 0.7 * data.carbo_need) {
					nutritions[0].status = 2;
				} else if (data.today_carbo == 0) {
					nutritions[0].status = 3;
				} else {
					nutritions[0].status = 0;
				}

				if (data.today_protein > 1.3 * data.protein_need) {
					nutritions[1].status = 1;
				} else if (data.today_protein < 0.7 * data.protein_need) {
					nutritions[1].status = 2;
				} else if (data.today_protein == 0) {
					nutritions[0].status = 3;
				} else {
					nutritions[1].status = 0;
				}

				if (data.today_fat > 1.3 * data.fat_need) {
					nutritions[2].status = 1;
				} else if (data.today_fat < 0.7 * data.fat_need) {
					nutritions[2].status = 2;
				} else if (data.today_fat == 0) {
					nutritions[0].status = 3;
				} else {
					nutritions[2].status = 0;
				}

                // if (data.today_energy > 1.3 * data.energy_need) {
				// 	nutritions[2].status = 1;
				// } else if (data.today_energy < 0.7 * data.energy_need) {
				// 	nutritions[2].status = 2;
				// } else if (data.today_energy == 0) {
				// 	nutritions[0].status = 3;
				// } else {
				// 	nutritions[2].status = 0;
				// }
			}
        };
    })
    .factory('Foods', function () {
        // Might use a resource here that returns a JSON array
        var foods = [{
            id: 0,
            category: 0,
            name: 'Dumpling',
            face: 'img/food/Dumpling.jpg',
            price: 3.5,
            gram: 150,
            set: 1,
            proqk: 170,
        },{
            id:1,
            category: 0,
            name: 'Sliced Noodles',
            face: 'img/food/Sliced Noodles.jpg',
            price: 3.5,
            gram: 150,
            set: 1,
            proqk: 170,
        },{
            id:2,
            category: 1,
            name: 'Kung Pao Chicken',
            face: 'img/food/Kung Pao Chicken.jpg',

            price: 3.5,
            gram: 150,
            set: 1,
            proqk: 170,
            count: 1,
        },{
            id:3,
            category: 1,
            name: 'Sweet and Sour Spare Ribs',
            face: 'img/food/SweetRib.jpg',
            price: 3.5,
            gram: 150,
            set: 1,
            proqk: 170,
            count: 1,
        },{
            id: 4,
            category: 1,
            name: 'Crispy Chicken',
            face: 'img/food/Chicken.jpg',
            price: 3.5,
            gram: 150,
            set: 1,
            proqk: 170,
            count: 1,
        },{
            id: 5,
            category: 1,
            name: 'Shredded Pork with Garlic Sauce',
            face: 'img/food/Shredded Pork.jpg',
            price: 3.5,
            gram: 150,
            set: 1,
            proqk: 170,
        },
        {
            id:6,
            category: 2,
            name: 'Braised Green Vegetable in Broth',
            face: 'img/food/Vegetable.jpg',
            price: 3.5,
            gram: 150,
            set: 1,
            proqk: 170,
            count: 1,
        },{
            id:7,
            category: 2,
            name: ' Sautéed Sweet Corn with Pine Nuts',
            face: 'img/food/Nuts.png',
            price: 3.5,
            gram: 150,
            set: 1,
            proqk: 170,
            count: 1,
        },{
            id:8,
            category:3,
            name: 'Mapo Tofu',
            face: 'img/food/Mapo.jpg',
            price: 3.5,
            gram: 150,
            set: 1,
            proqk: 170,
        },{
            id: 9,
            category:3,
            name: 'Yu-Shiang Eggplant',
            face: 'img/food/Yu-Shiang Eggplant.png',
            price: 3.5,
            gram: 150,
            set: 1,
            proqk: 170,
        },{
            id: 10,
            category:4,
            name: 'Beijing RoastDuck',
            face: 'img/food/Duck.jpg',
            price: 3.5,
            gram: 150,
            set: 1,
            proqk: 170,
        }];


        // Some fake testing data
        return {
            all: function () {
                return foods;
            },
            remove: function (food) {
                foods.splice(floors.indexOf(food), 1);
            },
            get: function (foodId) {
                for (var i = 0; i < foods.length; i++) {
                    if (foods[i].id == parseInt(foodId)) {
                        return foods[i];
                    }
                }
                return null;
            }
        };

    })

    .factory('Materials', function () {
        // Might use a resource here that returns a JSON array
        var items = [{
           id: 0,
            name: 'Dumpling',
            face: 'img/food/Dumpling.jpg',
            info: " Chinese dumpling is one of the most important foods in Chinese New Year. Since the shape of Chinese dumplings is similar to ancient Chinese gold or silver ingots, they symbolize wealth. Traditionally, the members of a family get together to make dumplings during the New Year's Eve. They may hide a coin in one of the dumplings. The person who finds the coin will likely have a good fortune in the New Year.",
            sort: 2,
        },{
            id:1,
            name: 'Sliced Noodles',
            face: 'img/food/Sliced Noodles.jpg',
            info: " It is a traditional Chinese food, which famous of its unique shape of Noodles.",
            sort: 2,
        },{
            id:2,
            name: 'Kung Pao Chicken',
            face: 'img/food/Kung Pao Chicken.jpg',
			info: "Kung Pao Chicken is a spicy stir-fry dish made with chicken, peanuts, vegetables, and chili peppers. The classic dish in Sichuan cuisine originated in the Sichuan Province of south-western China and includes Sichuan peppercorns. Although the dish is found throughout China, there are regional variations that are typically less spicy than the Sichuan serving. Kung Pao chicken is also a staple of westernized Chinese cuisine.",
            sort:2
        },{
            id:3,
            category: 1,
            name: 'Sweet and Sour Spare Ribs',
            face: 'img/food/SweetRib.jpg',
            info: "Sweet and sour spare ribs is a popular traditional representative of sweet and sour dishes in the dish, its use of fresh pig ribs condiments, fresh meat, crispy sweet and sour taste, popular in Jiangnan area. ",
            sort:2
        },{
            id: 4,
            name: 'Crispy Chicken',
            face: 'img/food/Chicken.jpg',
            info: "It is a traditional Hunan dish",
            sort:2

        },{
            id: 5,
            name: 'Shredded Pork with Garlic Sauce',
            face: 'img/food/Shredded Pork.jpg',
            info: "Fish-Flavored Shredded Pork is a Chinese traditional dishes, with fish flavored seasoning named. According to legend, inspired by old pickle shredded meat dishes, the Republic of China by Sichuan chef create made. The main ingredient of pork, black fungus, and various accessories for practice, but for many carrots, bamboo shoots, pepper etc.",
            sort:2
        },{
            id:6,
            category: 2,
            name: 'Braised Green Vegetable in Broth',
            face: 'img/food/Vegetable.jpg',
            info: "It is a famous Cantonese cuisine",
            sort:2
        },{
            id:7,
            category: 2,
            name: ' Sautéed Sweet Corn with Pine Nuts',
            face: 'img/food/Nuts.png',
            info: "It is a famous Cantonese cuisine",
            sort:2
        },{
            id:8,
            category:3,
            name: 'Mapo Tofu',
            face: 'img/food/Mapo.jpg',
            info: "Mapo doufu (Mapo tofu) is a popular Chinese dish from the Sichuan (Szechuan) province. It is a combination of tofu (bean curd) and minced meat, usually pork or beef, in a spicy chili- and bean-based sauce, typically a thin, oily, and bright red suspension. ",
            sort:2
        },{
            id: 9,
            category:3,
            name: 'Yu-Shiang Eggplant',
            face: 'img/food/Yu-Shiang Eggplant.png',
            info: " Eggplant is one of the few purple vegetable, is also very common home-style vegetables on the dining table, its purple skin is rich in vitamin e and vitamin p, which is unequaled by other vegetables, vitamin p can soften fine blood vessels, prevent vascular bleeding, on patients with hypertension, arteriosclerosis, hemoptysis, and scurvy are useful. ",
            sort:2
        },{
            id: 10,
            category:4,
            name: 'Beijing RoastDuck',
            face: 'img/food/Duck.jpg',
            info: "Beijing roast duck is the reputation of the world famous Beijing dishes,materials used for highquality meat duck Beijing duck,ruddy color,fruit charcoal grilled meat,fat and not greasy.With its red colour,taste mellow,tender meat,fat and not greasy characteristics,known as 'the world 's delicacy'.",
            sort:2
        },{
            id: 11,
            name: "Pineapple",
            face: 'img/food/pineapple.jpg',
            info: "Pineapples can be consumed fresh, cooked, juiced, or preserved. They are found in a wide array of cuisines.",
            sort: 1
        },{
            id: 12,
            name: "Tofu",
            face: 'img/food/Tofu.jpg',
            info: "Tofu, also known as bean curd, is a food made by coagulating soy milk and then pressing the resulting curds into soft white blocks. It is a component in East Asian and Southeast Asian cuisines.",
            sort: 1
        },{
            id: 13,
            name: "Egg",
            face: 'img/food/Egg.jpg',
            info: "Egg yolks and whole eggs store significant amounts of protein and choline, and are widely used in cookery. ",
            sort: 1,
        },{
            id: 14,
            name: "Milk",
            face: 'img/food/Milk.jpg',
            info: "Milk is a pale liquid produced by the mammary glands of mammals. It is the primary source of nutrition for infant mammals before they are able to digest other types of food. ",
            sort: 1,
        },{
            id: 15,
            name: "Spinach",
            face: 'img/food/Spinach.jpg',
            info: "Spinach, along with other green, leafy vegetables, contains an appreciable amount of iron attaining 21% of the Daily Value in a 100 g (3.5 oz) amount of raw spinach (table). ",
            sort: 1,
        },{
             id: 16,
             name: "Banana",
             face: 'img/food/Banana.jpg',
             info: "Banana is the common name for a type of herb and also the name for the herbaceous plants that grow this herb.",
             sort: 1,
        }];

        return {
            all: function () {
                return items;
            },
            remove: function (item) {
                items.splice(items.indexOf(item), 1);
            },
            get: function (itemId) {
                for (var i = 0; i < items.length; i++) {
                    if (items[i].id === parseInt(itemId)) {
                        return items[i];
                    }
                }
                return null;
            }
        };

    })
    .factory('Userinfo', function () {
        // Might use a resource here that returns a JSON array
        var items = [{
            id: 0,
            idcode: 28,
            day: 2,
            img: "img/Avatar.jpg",
            name: "health",
            nickname: 'Black',
            birth: "1994-02-17T16:00:00.000Z",
            gender: "Male",
            uni: "Tongji University",
            height: 180,
            weight: 60,
            state: "",
            station: "Lossing Weight",
            stadate:'2016.1.1',
            today_carbo: 0,
            today_energy: 0,
            today_protein: 0,
            today_fat: 0,
            aims: ["Protecting Eyes", "Anti-acne", "Cold"],
			material_rec: [{
				foodid: 11,
				foodname: "Pineapple",
			}, {
				foodid: 15,
				foodname: "Spinach",
			}, {
				foodid: 16,
				foodname: "Banana",
			}],
            qk: 1200,
			havechecked: 1,
			PAL: 1.50,
			BEE: 21.2,
			EER: 1000,
			dreamweight: 72,
			weightrangemin: 50,
			weightrangemax: 80,
		    energy_need: 85000,
			protein_need: 100,
			fat_need: 100,
			carbo_need: 100

        },	 ];

        return {
            all: function () {
                return items;
            },
            remove: function (item) {
                items.splice(items.indexOf(item), 1);
            },
            get: function (itemId) {
                for (var i = 0; i < items.length; i++) {
                    if (items[i].id === parseInt(itemId)) {
                        return items[i];
                    }
                }
                return null;
            },
            edit: function(item) {
            	items[0].idcode=item.id;
            	items[0].name=item.name;
				items[0].day=item.day;
            	items[0].nickname=item.nickname;
            	items[0].gender=item.gender;
            	items[0].height=item.height;
            	items[0].weight=item.weight;
            	items[0].today_carbo=	item.carbo_today	 ;
            	items[0].today_energy=	item.energy_today ;
            	items[0].today_protein=	item.protein_today	 ;
            	items[0].today_fat=		item.fat_today;

				//items[0].surface_area = 0.0061*item.height+0.0128*item.weight-0.1529;
            	items[0].birth = item.birth + "T16:00:00.000Z";
    			var date = new Date(items[0].birth);
    			var bYear = date.getFullYear();
    			var bMonth = date.getMonth()+1;
    			var bDay = date.getDate();

				var currentDate = new Date();
				var thisYear = currentDate.getFullYear();
				var thisMonth = currentDate.getMonth() +1;
				var thisDay = currentDate.getDate();
				var age = "Invalid Birthday";
				if (thisYear - bYear > 0)
				{
					if (thisMonth - bMonth < 0) {
						age = thisYear - bYear - 1;
					}else if(thisMonth - bMonth > 0){
						age = thisYear - bYear;
					}else {
						if (thisDay - bDay >= 0) {
							age = thisYear - bYear;
						} else { age = thisYear - bYear - 1; }
					}
				};
				items[0].age = age;
				//var metabolize = 166.2;
				//if (age<=19) {
				//	if (items[0].gender=="M"){
				//		metabolize=166.2;
				//	}else{
				//		metabolize=154.0;
				//	}
				//} else if (20<=age<=30) {
				//	if (items[0].gender=="M"){
				//		metabolize=157.8;
				//	}else{
				//		metabolize=146.5;
				//	}
				//} else if (31<=age<=40) {
				//	if (items[0].gender=="M"){
				//		metabolize=158.6;
				//	}else{
				//		metabolize=146.9;
				//	}
				//} else if (41<=age<=50) {
				//	if (items[0].gender=="M"){
				//		metabolize=154.0;
				//	}else{
				//		metabolize=142.4;
				//	}
				//} else if (51<=age) {
				//	if (items[0].gender=="M"){
				//		metabolize=149.0;
				//	}else{
				//		metabolize=138.6;
				//	}
				//}
				//items[0].metabolize=metabolize;
				//items[0].sport_energy=item.daily_energy;
				//items[0].daily_cost_energy=items[0].surface_area*items[0].metabolize*24*1.1+items[0].sport_energy;
				//items[0].qk=items[0].daily_cost_energy;

				items[0].station=item.station;
				items[0].havechecked=item.havechecked;

				if(items[0].gender=="M"){
					items[0].BEE=22.3;
				} else {
					items[0].BEE=21.2;
				}
				items[0].EER			=items[0].BEE*items[0].PAL*items[0].weight;
				items[0].protein_need	=items[0].EER*0.15/4;
				items[0].fat_need		=items[0].EER*0.25/9;
				items[0].carbo_need		=items[0].EER*0.6/4;
				items[0].dreamweight=item.dreamweight;

				items[0].aims=[];
				for(var i =0; i<item.aims.length; i++) {
					items[0].aims.push(item.aims[i]);
				}
				items[0].material_rec = item.mat_result;

				items[0].weightrangemin = 18.5 * (items[0].height / 100) * (items[0].height / 100);
				items[0].weightrangemax = 24.9 * (items[0].height / 100) * (items[0].height / 100);
            },
            edit2: function(item) {
				 items[0].idcode=item.id;
				 items[0].name = item.name;
				 items[0].havecheched = item.havecheched;
				 items[0].nickname=item.nickname;
            	 items[0].birth = item.birth + "T16:00:00.000Z";
				if(items[0].gender=="M"){
					items[0].BEE=22.3;
				} else {
					items[0].BEE=21.2;
				}
				items[0].PAL 			=item.PAL;
				items[0].EER			=items[0].BEE*items[0].PAL*items[0].weight;
				items[0].protein_need	=items[0].EER*0.15/4;
				items[0].fat_need		=items[0].EER*0.25/9;
				items[0].carbo_need		=items[0].EER*0.6/4;

			}
        };
    })
    .factory('Conditions', function(){
    	var items = [
    	{
    		id: 0,
    		name: "Underweight",
    	},
    	{
    		id: 1,
    		name: "Normal Range",
    	},
    	{
    		id: 2,
    		name: "Overweight",
    	},
    	{
    		id: 3,
    		name: "Obese",
    	}
    	];
    	return {
    		get: function (bmi) {
    			if (bmi < 18.5) {
    				return items[0];
    			} else if ( 18.5<=bmi<23.9){
    				return items[1];
    			} else if ( 23.9<=bmi<28){
    				return items[2];
    			} else if ( 28<=bmi){
    				return items[3];
    			}
    		}
    	}
    })

    .factory('University', function () {
        // Might use a resource here that returns a JSON array
        var items = [{
            id: 0,
            name: "Tongji University",
        },{
            id: 1,
            name: "Fudan University",
        },{
            id: 2,
            name: "Jiaotong University",
        },{
            id: 3,
            name: "East China Normal University",
        },{
            id: 4,
            name: "Shanghai University of Finance and Economics",
        },{
            id: 5,
            name: "Shanghai International Studies University",
        },{
            id: 6,
            name: "Shanghai University",
        },];

        return {
            all: function () {
                return items;
            },
            remove: function (item) {
                items.splice(items.indexOf(item), 1);
            },
            get: function (itemId) {
                for (var i = 0; i < items.length; i++) {
                    if (items[i].id === parseInt(itemId)) {
                        return items[i];
                    }
                }
                return null;
            }
        };

    })
    .factory('StaEnergy', function () {
        var stas = [{
            id: 0,
            breakf: '27%',
            lunch: '49%',
            dinner: '24%',
            morningadd: '',
            afternoonadd: '',
            protein: '20%-30%',
            fat: '25%-30%',
            carbohy: '40%-55%',
            breakf_r: 0.27,
            lunch_r: 0.49,
            dinner_r: 0.24,
            add_r: 0,
            foodfruit:'Apple, Melon, Pear, Pineapple (low energy, rich nutrient), Banana',
            foodprotein: 'Yogurt, Cuttlefish, Tuna, Shrimp, Duck (peeled), Egg & Vegetable Soup',
            foodmain: 'Oat, Rice, Rye, Mixed Grains, Okara',
            foodfat: '5-10g nuts, 25-30g oil, vegetable oil (olive oil, soybean oil, camellia oil etc.)'
        },{
            id: 1,
            breakf: '20%',
            lunch: '30%',
            dinner: '30%',
            morningadd: '10%',
            afternoonadd: '10%',
            protein: '20%',
            fat: '20%',
            carbohy: '60%',
            breakf_r: 0.2,
            lunch_r: 0.3,
            dinner_r: 0.3,
            add_r: 0.2,
            foodfruit: 'Low-sugar Fruits',
            foodprotein: 'Egg, Milk, Lean Meat',
            foodmain: 'Oat, Rice, Rye, Mixed Grains, Okara',
            foodfat: '5-10g nuts, 25-30g oil, vegetable oil (olive oil, soybean oil, camellia oil etc.)'
        },{
            id: 2,
            breakf: '30%',
            lunch: '40%',
            dinner: '30%',
            morningadd: '',
            afternoonadd: '',
            protein: '10%-14%',
            fat: '20%-30%',
            carbohy: '55%-65%',
            breakf_r: 0.3,
            lunch_r: 0.4,
            dinner_r: 0.3,
            add_r: 0,
            foodfruit: 'Apple, Melon, Pear, Pineapple (low energy, rich nutrient), Banana',
            foodprotein: 'Yogurt, Cuttlefish, Tuna, Shrimp, Duck (peeled), Egg & Vegetable Soup',
            foodmain: 'Oat, Rice, Rye, Mixed Grains, Okara',
            foodfat: '5-10g nuts, 25-30g oil, vegetable oil( olive oil, soybean oil, camellia oil etc.)'
        }];
        return {
            all: function () {
                return stas;
            },
            remove: function (sta) {
                stas.splice(wins.indexOf(sta), 1);
            },
            get: function (staId) {
                for (var i = 0; i < stas.length; i++) {
                    if (stas[i].id === parseInt(staId)) {
                        return stas[i];
                    }
                }
                return stas[0];
            },
			getbysta: function (sta) {
				if(sta == 'Lossing Weight') {
					return stas[0];
				} else if(sta == 'Normal') {
					return stas[1];
				} else {
					return stas[2];
				}
			}
        };
    })
    .factory('Stations', function () {
        var items = [{
    	    id: 0,
    	    name: "Lossing Weight",
    	},{
    	    id: 1,
    	    name: "Normal",
    	},{
    	    id: 2,
    	    name: "Building Muscle",
    	}];
        return {
            all: function () {
                return items;
            },
            get: function (itemid) {
                return items[itemid].name;
            }
        }
    })
 .factory('PALs', function () {
     var items = [{
         id: 0,
         name: "No Exercse",
         value: 1.5
    },{
         id: 1,
         name: "Daily Exercses for 0.5~1h",
         value: 1.75
    },{
         id: 2,
         name: "Daily Exercses more than 1h",
         value: 2
    }];
    return {
        all: function () {
             return items;
         },
        get: function (itemname) {
             for (var i = 0; i < items.length; i++) {
                 if (items[i].name === itemname) {
                     return items[i].value;
                 }
             }
             return null;

        },
        find: function (itemvalue) {
             for (var i = 0; i < items.length; i++) {
                 if (items[i].value === (itemvalue)) {
                     return items[i].name;
                }
            }
             return null;
        },
    }
});