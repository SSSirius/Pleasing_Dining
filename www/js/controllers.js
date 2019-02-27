angular.module('starter.controllers', ['onezone-datepicker', 'ion-affix', 'ionic-numberpicker', 'ionic-toast'])
.directive('hideTabs', function ($rootScope) {
    return {
        restrict: 'AE',
        link: function ($scope) {
            $rootScope.hideTabs = 'tabs-item-hide';
            $scope.$on('$destroy', function () {
                $rootScope.hideTabs = '';
            })
        }
    }
    })
    .directive('haTabs', function ($rootScope) {
    return {
        restrict: 'AE',
        link: function ($scope) {
            $rootScope.haTabs = 'has-tabs';
            $scope.$on('$destroy', function () {
                $rootScope.haTabs = '';
            })
        }
    }
    })

.directive('notabs', function ($rootScope) {
        return {
            restrict: 'AE',
            link: function ($scope) {
                $rootScope.hideTabs = 'tabs-item-hide';
            }
        }
    })

.directive('havetabs', function ($rootScope) {
           return {
               restrict: 'AE',
               link: function ($scope) {
                   $rootScope.hideTabs = '';
                    $rootScope.haTabs = 'has-tabs';
               }
           }
    })

.controller('IntroCtrl', function ($scope, $state, $ionicSlideBoxDelegate, $timeout ){

        // Called to navigate to the main app
        $scope.startApp = function () {
            $state.go('tab.dash');
        };
       $timeout(function () {
           $state.go('tab.dash');
       }, 2000);
    })

.controller('DashCtrl', function ($scope,$state, Userinfo, Foods, $ionicModal, Materials,Userdishes) {
    $scope.user = Userinfo.get(0);
    $scope.dishs = Materials.all();
    $scope.todaydishes = Userdishes.get(0);
	//console.log($scope.todaydishes);
	$scope.jieqi = function() {

	}
    //-----------------------create your function here------------------------//
    $scope.materials = Materials.all();
	//$scope.material_rec = $scope.user.material_rec;

    //----------------Today-station----------//addmeal.energy
    $scope.user.protein = $scope.todaydishes.today_protein;
    $scope.user.carbo = $scope.todaydishes.today_carbo;
    $scope.user.fat = $scope.todaydishes.today_fat;
    $scope.user.energy = $scope.todaydishes.today_energy;
    if ($scope.user.protein_need) { $scope.user.protein= $scope.user.today_protein /  $scope.user.protein_need };
    if ($scope.user.fat_need) { $scope.user.fat = $scope.user.today_fat / $scope.user.fat_need };
    if ($scope.user.carbo_need) { $scope.user.carbo = $scope.user.today_carbo / $scope.user.carbo_need };
    if ($scope.user.energy_need) { $scope.user.energy = $scope.user.today_energy / $scope.user.energy_need };
    // console.log($scope.user.today_fat)
    //-----------------------modal------------------------//
    $ionicModal.fromTemplateUrl('templates/tab-dash-search.html', {
        scope: $scope,
        animation: 'slide-in-down'
    }).then(function (modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function () {
        $scope.modal.show();
        document.getElementById("searchbar").focus();
        $scope.data.search = '';
    };
    $scope.data=[{search:''}]
    $scope.closeModal = function () {
        $scope.modal.hide();
    };
    $scope.message = function () {
        var msg;
        if(document.getElementById("searchbar").value.length !==0)
        {
            msg="No Result"
        }
        return msg

    }
    //------------test----------//
    $scope.gotodetail = function () {

        $state.go('tab.dash-food');
        $scope.modal.hide();

    }
    })

.controller('DashfoodCtrl', function ($scope, $stateParams, $state, Materials,$rootScope) {

	 //console.log($stateParams);
     $scope.material = Materials.get($stateParams.foodID);

	 $scope.food_init = function() {
				if (status == 200) {
					$scope.material.name = $stateParams.foodID;
					$scope.material.info = data.info;
				}
           }
    })

.controller('DashmaterialCtrl', function ($scope, $stateParams, $state, Materials,$rootScope) {

     $scope.material = Materials.get($stateParams.materialID);

	 $scope.food_init = function() {

				if (status == 200) {
					$scope.material.info = data.info;
					// $scope.material.func = data.func;
					// $scope.material.badeffect = data.badeffect;
					// console.log(data);
				}
           }
    })

.controller('TodayCtrl', function ($scope, Nutritions) {
    //--------------inject userinfo-----//
    $scope.nutritions = Nutritions.all();
    $scope.judge = Nutritions.get(0);
    for (var i = 0; i < $scope.nutritions.length; i++) {
        if ($scope.nutritions[i].status === 0) {
            $scope.nutritions[i].state = "Normal";
        }
        else if ($scope.nutritions[i].status === 1) {
            $scope.nutritions[i].state = "High";
        } else if ($scope.nutritions[i].status == 2) {
			$scope.nutritions[i].state = "Low";
		}
        else { $scope.nutritions[i].state = "No Data" }
    }
    })

.controller('BookCtrl', function ($scope,  $ionicModal, $state, Foods, Items, $stateParams, Canteens, Userdishes,Meals,$rootScope){

    $scope.userdish = Userdishes.get(0).items;
	$scope.meals = Meals.get(0);
    $scope.foods = Foods.all();
    $scope.bookinit = function() {
		var breakfast = 0;
		var lunch = 0;
		var dinner = 0;
		var addmeal = 0;
		for (var i = 0; i < $scope.userdish.length; i++) {
			if ($scope.userdish[i] == 0) {breakfast += 1;}
			else if ($scope.userdish[i] == 1) {lunch += 1;}
			else if ($scope.userdish[i] == 2) {dinner += 1;}
			else if ($scope.userdish[i] == 3) {addmeal += 1;}
		}
		if (breakfast != 0) {Meals.get(0).info = "Selected";}
		if (lunch != 0) {Meals.get(1).info = "Selected";}
		if (dinner != 0) {Meals.get(2).info = "Selected";}
		if (addmeal != 0) {Meals.get(3).info = "Selected";}
		//console.log(Meals.all());
	};


    /*--------gettotalcount-----*/
    $scope.gettotalcount = function () {
        var i = 0, totalcount = 0;
        for (i; i < Items.length; i = i + 1) {
            if (Items[i].count) {
                totalcount = totalcount + Items[i].count;
            }
        }
        return totalcount;
    };

    $scope.meals = Meals.all()
    $scope.hasinfo = function (index) {
        if ($scope.meals[index].info == "") {
            return false
        }
        else {
            return true
        }
    }


    /*--------list-----*/

    $scope.remove = function (item) {
        $scope.userdish.items.splice($scope.userdish.items.indexOf(item), 1)
    }
    /*--------MealSelected-----*/

    $scope.isOpen = function () {

        return $scope.Open

    }
    $scope.Openmeal=function()
        {if ($scope.Open ) {
        $scope.Open = null;
        } else { $scope.Open = true }
        }

    $scope.selcanteen = function (index) {

        for (var i = 0; i < 4; i++) {
            if (index == i) {
                $scope.meals[i].selected = true;
                $scope.selectmeal = $scope.meals[i].text;

                localStorage.mealSelected = i;

                $scope.Open = null;

            }
            else {
                $scope.meals[i].selected = false;
            };
        }
    }

    for (var i = 0; i < 4; i++) {
        if ($stateParams.mealId == null) {
        }
        else {
            if (i == $stateParams.mealId) {$scope.meals[i].selected= true
                $scope.selectmeal = $scope.meals[i].text;
                localStorage.mealSelected = i;

            };
        }
    };

    $scope.ismealSelected = function (index) {

        return parseInt(localStorage.mealSelected)=== index;

    }


    /*--------CanteenSelected-----*/
    $scope.Selected = 0;

    $scope.canteens = Canteens.all();

    $scope.floors = $scope.canteens[0].items;

    $scope.getcanteen = function (index) {

        $scope.floors = $scope.canteens[index].items;
        if ($scope.isSelected(index) ){
            $scope.Selected = null;
        } else {
            $scope.Selected = index;
        }
    };

    $scope.isSelected = function (index) {
        return $scope.Selected === index;
    }

	$scope.loadfoods = function (index) {
		$scope.foods = Foods.all();
    }

    /*--------list-----*/
    $scope.userdish = Userdishes.get(0);
    $scope.remove = function (item) {

        $scope.userdish.items.splice($scope.userdish.items.indexOf(item), 1)
    }
    })

.controller('BookDetailCtrl', function ($scope, $rootScope, $stateParams, $state, $ionicModal, Foods, Items, $timeout, Meals, $ionicPopup, Canteens, $ionicScrollDelegate, $location, $anchorScroll, Userdishes, ionicToast) {
    $scope.floor = Canteens.get($stateParams.bookId);
    $scope.canteen=Canteens.get(parseInt( $stateParams.bookId/10));
    $scope.foods = Foods.all();
	//console.log($scope.foods);
    var userdishes = Userdishes.get(0);
    $scope.items = Items.all();
    $scope.sel = Foods.get(0)
    $scope.getfood = function (sel) {
        $scope.sel = Foods.get(sel);
    };

    //------------showselect-----------//
    $scope.Showsel = function (item) {
        if ($scope.isShowsel(item)) {
            $scope.setShowsel = item;
        } else {
            $scope.setShowsel = null;
        }
    };
    $scope.isShowsel = function (item) {
        return $scope.setShowsel === null;
    };
    //--------Itemchange-----//
    $scope.Itemchange = function (index, num) {
        if ($scope.items[index].count == 1 && num == -1) {
            $scope.items.splice($scope.items[index], 1);
        }
        else {
            $scope.items[index].count += num

        }
    };

    //--------ItemDelete-----//

    $scope.ItemDelete = function (item) {
        $scope.items.splice($scope.items.indexOf(item), 1);
        // $scope.setShowsel = item;
    };
    $scope.count = function (item) {
        var i = 0, dishcount = 0;
        for (i; i < $scope.items.length; i = i + 1) {
            if ($scope.items[i].count) {
                dishcount = $scope.items[i].count;
            }
        }
        return dishcount;
    };


    //--------gettotalcount-----//
    $scope.gettotalcount = function () {
        var i = 0, totalcount = 0;
        for (i; i < $scope.items.length; i = i + 1) {
            if ($scope.items[i].count) {
                totalcount = totalcount + $scope.items[i].count;
            }
        }
        return totalcount;
    };
    //-------gettotalprice----//
    $scope.gettotalprice = function () {
        var i = 0, totalprice = 0;
        for (i; i < $scope.items.length; i = i + 1) {
            if ($scope.items[i].count) {
                totalprice = totalprice + $scope.items[i].count * $scope.items[i].price;
            }
        }
        return totalprice;
    };
    //-------------------modal------------//
    $ionicModal.fromTemplateUrl('templates/tab-book-choose.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function (sel) {
        $scope.modal.show();
        $scope.nowdish = Foods.get(sel);
        $scope.gram = 0;
        $scope.selid=sel
        $scope.set = 0;
        $scope.energy = 0;
        $scope.unit = 1;
    };
    $scope.closeModal = function () {
        $scope.modal.hide();
    };


    $scope.togglelist = function (items) {
        if ($scope.islistShown(items)) {
            $scope.shownlist = null;

        } else {
            $scope.shownlist = items;
        }
    };
    $scope.islistShown = function (items) {
        return $scope.shownlist === items;
    };
    //-------------add dish--------
    $scope.adddish = function () {
        $scope.hasdish = false
        if (parseFloat($scope.set) === 0) { }
        else
        {
            for (var i = 0; i < $scope.items.length; i++) {
                if ($scope.items[i].id === $scope.nowdish.id) {
                    $scope.items[i].count = $scope.items[i].count + $scope.set;
                     $scope.items[i].energy=$scope.items[i].energy+$scope.energy
                    $scope.hasdish = true;
                }
            }
            if ($scope.hasdish === false) {
                $scope.nowdish.count = $scope.set;
                  $scope.nowdish.energy=$scope.energy
                $scope.items.push($scope.nowdish);
            }
        }
        $scope.modal.hide();
    }

	$scope.userdish = [];

    //--------surebutton & popup------//
    var breakfast = Meals.get(0);
			var lunch   = Meals.get(1);
			var dinner  = Meals.get(2);
			var addmeal = Meals.get(3);
    $scope.SureMsg = function () {

		for (var i = 0; i < $scope.items.length; i++) {
			var thisitem1 = $scope.items[i];

				$scope.userdish.push({
					dishid: thisitem1.id,
                    name: 	thisitem1.name,
                    count: 	thisitem1.count,
                    meal:	localStorage.mealSelected,
					carbo:	1.7,
					energy:	thisitem1.energy,
					fat:	1,
					protein:2,

				});
                // console.log($scope.userdish)
				if(localStorage.mealSelected == 0) {breakfast.energy += thisitem1.energy;  breakfast.info = Number(breakfast.energy).toFixed(2)+"Kcal";}
				else if (localStorage.mealSelected == 1) {lunch.energy += thisitem1.energy;  lunch.info = Number(lunch.energy).toFixed(2)+"Kcal";}
				else if (localStorage.mealSelected == 2) {dinner.energy += thisitem1.energy;  dinner.info = Number(dinner.energy).toFixed(2)+"Kcal";}
				else if (localStorage.mealSelected == 3) {addmeal.energy += thisitem1.energy;  addmeal.info = Number(addmeal.energy).toFixed(2)+"Kcal";}

		}

		Userdishes.edit($scope.userdish);

        if ($scope.items.length > 0) {
            ionicToast.show('success', 'middle', false, 800);
        }
        $scope.setShowsel = 1;
    };

    //----------------calculator----------------//

    $scope.setunit = function (num) {
        $scope.unit = num;
        $scope.gram = 0;
        $scope.set = 0;
        $scope.energy = 0;

    }
    $scope.isunit = function (num) {
        return $scope.unit === num;
    };

    $scope.calculate = function (num) {
        if ($scope.unit === 0) {
            if ($scope.gram + String(num) < 9999) {
                $scope.gram = $scope.gram + String(num);
                $scope.gram = parseFloat($scope.gram);
                if ($scope.gram > parseInt($scope.gram)) {
                    if (String($scope.gram).length - String($scope.gram).indexOf(".") > 3) {
                        $scope.gram = String($scope.gram).substr(0, String($scope.gram).indexOf(".") + 3);

                    };}
                $scope.energy = $scope.nowdish.proqk * $scope.gram / 100;
                $scope.set = $scope.nowdish.set * $scope.gram / $scope.nowdish.gram;
            }
        }
        else if ($scope.unit === 1) {
            if ($scope.nowdish.gram * ($scope.set + String(num)) / $scope.nowdish.set < 9999) {
                $scope.set = $scope.set + String(num);
                $scope.set = parseFloat($scope.set);
                if ($scope.set > parseInt($scope.set)) {
                    if (String($scope.set).length - String($scope.set).indexOf(".") > 2) {
                        $scope.set = String($scope.set).substr(0, String($scope.set).indexOf(".") + 2);
                    }
                };
                $scope.gram = $scope.nowdish.gram * $scope.set / $scope.nowdish.set;
                $scope.energy = $scope.nowdish.proqk * $scope.gram / 100;
            }
        }
        if ($scope.gram > parseInt($scope.gram)) {
            if (String($scope.gram).length - String($scope.gram).indexOf(".") > 3) {
                $scope.gram = String($scope.gram).substr(0, String($scope.gram).indexOf(".") + 3);

            };
        }
        if ($scope.set > parseInt($scope.set)) {
            if (String($scope.set).length - String($scope.set).indexOf(".") > 2) {
                $scope.set = String($scope.set).substr(0, String($scope.set).indexOf(".") + 2);
            }
        };

        if ($scope.energy > parseInt($scope.energy)) {
            if (String($scope.energy).length - String($scope.energy).indexOf(".") > 2) {
                $scope.energy = String($scope.energy).substr(0, String($scope.energy).indexOf(".") + 2);
            }
        }
    }

    $scope.clear = function () {
        if ($scope.unit === 0) {
            var n = String($scope.gram).length;

            if (n != 1) {
                $scope.gram = String($scope.gram).substr(0, n - 1);
            }
            else {
                $scope.gram = 0;
            }
            $scope.energy = $scope.nowdish.proqk * $scope.gram / 100;
            $scope.set = $scope.nowdish.set * $scope.gram / $scope.nowdish.gram;
        }
        else if ($scope.unit === 1) {
            var n = String($scope.set).length;

            if (n != 1) {
                $scope.set = String($scope.set).substr(0, n - 1);
            }
            else {
                $scope.set = 0;
            }
            $scope.gram = $scope.nowdish.gram * $scope.set / $scope.nowdish.set;
            $scope.energy = $scope.nowdish.proqk * $scope.gram / 100;
        }
        if ($scope.gram > parseInt($scope.gram)) {
            if (String($scope.gram).length - String($scope.gram).indexOf(".") > 3) {
                $scope.gram = String($scope.gram).substr(0, String($scope.gram).indexOf(".") + 3);

            }
        }
        if ($scope.set > parseInt($scope.set)) {
            if (String($scope.set).length - String($scope.set).indexOf(".") > 2) {
                $scope.set = String($scope.set).substr(0, String($scope.set).indexOf(".") + 2);
            }
        }
        if ($scope.energy > parseInt($scope.nowpk)) {
            if (String($scope.energy).length - String($scope.energy).indexOf(".") > 2) {
                $scope.energy = String($scope.energy).substr(0, String($scope.energy).indexOf(".") + 2);
            }
        }
    }

    $scope.point = function () {
        if ($scope.unit === 0) {
            if ($scope.gram > parseInt($scope.gram)) { }
            else {
                $scope.gram = $scope.gram + ".";
            }
        }
        else if ($scope.unit === 1) {
            if ($scope.set > parseInt($scope.set)) { }
            else {
                $scope.set = $scope.set + ".";
            }
        }
    };
    //----------------scroll----------------//
    $scope.tag = 1;
    var current = 0;
    $scope.istag = 1;
    $scope.tagtop = [0];
    $scope.getScrollPosition = function () {
        for (var i = 1; i < 6 ; i++) {
            $scope.tagtop[i] = document.getElementById(i).getBoundingClientRect().top;
            if ($scope.tagtop[i] > 44) {
                $scope.istag = i - 1;
                if  ($scope.istag < 1){
                    $scope.istag = 1;
                };
                if($scope.tag != $scope.istag){
                    $scope.tag = $scope.istag
                 // console.log($scope.tag +"!");
                };
                 break;}
                 else if ($scope.tagtop[5] < 0){
                    $scope.tag = 5;
                };
            }
    };
    $scope.scrollTo = function (anchor) {
        current = 0;
        for (var i = 1; i <anchor; i++) {
            var elementHeight = document.getElementById(i).offsetHeight;
            current = current + elementHeight }
            if (current - 44< 0)
        { $ionicScrollDelegate.scrollTo(0, -(current)); }
        else {
            $ionicScrollDelegate.scrollTo(0, current);
        }
        $scope.tag = anchor;
        //  console.log(current - 44);
    };

})

.controller('BookDishCtrl', function ($scope, $stateParams, $state, $ionicModal, Foods,Materials, Items) {
    $scope.dish = Materials.get($stateParams.dishID);
    })

.controller('BookEvaluationCtrl', function ($scope, Userinfo, $stateParams, $state, $ionicModal, Foods, Items, Meals, Userdishes,StaEnergy,$rootScope) {
    var currentDate = new Date();
    $scope.today =currentDate
	var staid = Userinfo.get(0).station;
	var staGroup = StaEnergy.getbysta(staid);
    $scope.meals = Meals.all();
    $scope.mealSelected = 0;
    $scope.selectmeal = $scope.meals[0].text;
	$scope.userdish = Userdishes.get(0).items;
    /*--------MealSelected-----*/
    $scope.isOpen = function () {
        return $scope.Open
    };

    $scope.Openmeal = function () {
        if ($scope.Open) {
            $scope.Open = null;
        } else { $scope.Open = true }
    }

	$scope.meal_energy	=0;
	$scope.meal_carbo	=0;
	$scope.meal_protein	=0;
	$scope.meal_fat		=0;

	$scope.evainit = function () {
		$scope.meal_energy	=0;
		$scope.meal_carbo	=0;
		$scope.meal_protein	=0;
		$scope.meal_fat		=0;
		for (var j = 0;j<$scope.userdish.length;j++){
			if ($scope.userdish[j].meal == 0) {
				$scope.meal_energy 	+= 	$scope.userdish[j].energy;
				$scope.meal_carbo	+=	$scope.userdish[j].carbo;
				$scope.meal_protein	+=	$scope.userdish[j].protein;
				$scope.meal_fat		+=	$scope.userdish[j].fat;
			}
		}
		$scope.meal_energy_need 	=staGroup.breakf_r * Userinfo.get(0).EER;
		$scope.meal_carbo_need		=staGroup.breakf_r * Userinfo.get(0).carbo_need;
		$scope.meal_protein_need	=staGroup.breakf_r * Userinfo.get(0).protein_need;
		$scope.meal_fat_need		=staGroup.breakf_r * Userinfo.get(0).fat_need;
	}

    $scope.selcanteen = function (index) {
		$scope.mealSelected = index;
        for (var i = 0; i < 4; i++) {
            if (index == i) {
                $scope.meals[i].selected = true;
                $scope.selectmeal = $scope.meals[i].text;
                $scope.mealSelected = i;
                $scope.Open = null;

				$scope.meal_energy	=0;
				$scope.meal_carbo	=0;
				$scope.meal_protein	=0;
				$scope.meal_fat		=0;

				for (var j = 0;j<$scope.userdish.length;j++){
					if ($scope.userdish[j].meal == i) {
						$scope.meal_energy 	+= 	$scope.userdish[j].energy;
						$scope.meal_carbo	+=	$scope.userdish[j].carbo;
						$scope.meal_protein	+=	$scope.userdish[j].protein;
						$scope.meal_fat		+=	$scope.userdish[j].fat;
					}
					//console.log($scope.userdish[j].meal);
				}
				staid = Userinfo.get(0).station;
				staGroup = StaEnergy.getbysta(staid);
				if(i == 0){
					$scope.meal_energy_need 	=staGroup.breakf_r * Userinfo.get(0).EER;
					$scope.meal_carbo_need		=staGroup.breakf_r * Userinfo.get(0).carbo_need;
					$scope.meal_protein_need	=staGroup.breakf_r * Userinfo.get(0).protein_need;
					$scope.meal_fat_need		=staGroup.breakf_r * Userinfo.get(0).fat_need;
				}else if (i == 1){
					$scope.meal_energy_need 	=staGroup.lunch_r * Userinfo.get(0).EER;
					$scope.meal_carbo_need		=staGroup.lunch_r * Userinfo.get(0).carbo_need;
					$scope.meal_protein_need	=staGroup.lunch_r * Userinfo.get(0).protein_need;
					$scope.meal_fat_need		=staGroup.lunch_r * Userinfo.get(0).fat_need;
				}else if (i == 2){
					$scope.meal_energy_need 	=staGroup.dinner_r * Userinfo.get(0).EER;
					$scope.meal_carbo_need		=staGroup.dinner_r * Userinfo.get(0).carbo_need;
					$scope.meal_protein_need	=staGroup.dinner_r * Userinfo.get(0).protein_need;
					$scope.meal_fat_need		=staGroup.dinner_r * Userinfo.get(0).fat_need;
				}else {
					$scope.meal_energy_need 	=staGroup.add_r * Userinfo.get(0).EER;
					$scope.meal_carbo_need		=staGroup.add_r * Userinfo.get(0).carbo_need;
					$scope.meal_protein_need	=staGroup.add_r * Userinfo.get(0).protein_need;
					$scope.meal_fat_need		=staGroup.add_r * Userinfo.get(0).fat_need;
				}
            }
            else {
                $scope.meals[i].selected = false;
            };
        }
    }

    for (var i = 0; i < 4; i++) {
        if ($stateParams.mealId == null) {
        }
        else {
            if (i == $stateParams.mealId) {
                $scope.meals[i].selected = true
                $scope.selectmeal = $scope.meals[i].text;
                $scope.mealSelected = i;

            };
        }
    };
    $scope.ismealSelected = function (index) {
        return $scope.mealSelected === index;
    }

    $scope.remove = function (item) {

        $scope.userdish.splice($scope.userdish.indexOf(item), 1);

		$scope.meal_energy	=0;
		$scope.meal_carbo	=0;
		$scope.meal_protein	=0;
		$scope.meal_fat		=0;

		for (var j = 0;j<$scope.userdish.length;j++){
			if ($scope.userdish[j].meal == $scope.mealSelected) {
				$scope.meal_energy 	+= 	$scope.userdish[j].energy;
				$scope.meal_carbo	+=	$scope.userdish[j].carbo;
				$scope.meal_protein	+=	$scope.userdish[j].protein;
				$scope.meal_fat		+=	$scope.userdish[j].fat;
			}
			//console.log($scope.userdish[j].meal);
		}

		var breakfast = 0;
		var lunch = 0;
		var dinner = 0;
		var addmeal = 0;
		if($scope.userdish,length == 0) {
			for (var hii = 0; hii < 4; hii++) {
				Meals.get(hii).info = ""; Meals.get(hii).energy = breakfast;
			}
		}
		for (var i = 0; i < $scope.userdish.length; i++) {
			if ($scope.userdish[i].meal == 0) {breakfast += $scope.userdish[i].energy;}
			else if ($scope.userdish[i].meal == 1) {lunch += $scope.userdish[i].energy;}
			else if ($scope.userdish[i].meal == 2) {dinner += $scope.userdish[i].energy;}
			else if ($scope.userdish[i].meal == 3) {addmeal += $scope.userdish[i].energy;}
		}
		if (breakfast != 0) {Meals.get(0).info = Number(breakfast).toFixed(2)+"cal"; Meals.get(0).energy = breakfast;}
		if (lunch != 0) {Meals.get(1).info = Number(lunch).toFixed(2)+"cal"; Meals.get(1).energy = lunch;}
		if (dinner != 0) {Meals.get(2).info = Number(dinner).toFixed(2)+"cal"; Meals.get(2).energy = dinner;}
		if (addmeal != 0) {Meals.get(3).info = Number(addmeal).toFixed(2)+"cal"; Meals.get(3).energy = addmeal;}


		Userdishes.get(0);
    };
    })

.controller('LoginCtrl', function ($scope, $state, Meals, $rootScope, Userinfo, Userdishes,Sports, Sportitems, Stations,Nutritions) {

     var userdata = Userinfo.get(0);
     var mysports = Sports.get(0).items;
     $scope.userdish = Userdishes.get(0).items;
     $scope.signIn = function (u) {
         $state.go('tab.me',{});
        };
	 $scope.signUp = function (u) {
          $state.go('tab.me', {});
        };

     $scope.tosignup = function () {
         $state.go('tab.signup', {});
     };
     $scope.tologin = function () {
         $state.go('tab.login', {});
     };
     $scope.user=[]
     //------------Validation


     $scope.same = function () {
         if ($scope.user.password !== $scope.user.repassword) {
             $scope.error = true;
         } else {
             $scope.error = false;
         }
     }
     //--------------clear
     $scope.clearname = function () {
         $scope.user.username = "";
     }
     $scope.clearpas = function () {

        //  console.log($scope.user.password);
         $scope.user.password = "";
     }
     $scope.clearrepas = function () {
         $scope.user.repassword = "";
     }
    })

.controller('SportCtrl', function ($scope, Userinfo, Sports,$rootScope, Sportitems,UserSportitems, $ionicSlideBoxDelegate, $ionicModal) {
    //------------------Sport------------------------//
    $scope.token = localStorage.token;

    $scope.user = Userinfo.get(0);
    $scope.sports = Sports.get(0);//-------------rewrite please--------------//

    $scope.sportitems = Sportitems.all();
    $scope.usersportitems = UserSportitems.all();

    $scope.user.energy = function () {
        var energy = 0;
        for (var i = 0; i < $scope.sports.items.length; i++) {
            energy = parseFloat($scope.sports.items[i].costqk) + energy
        }
        return energy;
        };
	$scope.remove = function (item) {

        $scope.sports.items.splice($scope.sports.items.indexOf(item), 1);

    }


    //------------------add  Search------------------------//



    //------------------Slidebbox------------------------//
    $scope.activeTab = 0;
    $scope.onSlideChanged = function (slideIndex) {
        $scope.activeTab = slideIndex;
    };
    $scope.slideTo = function (slideIndex) {
        $scope.activeTab = slideIndex;
        $ionicSlideBoxDelegate.slide(slideIndex);
    }
    //----------------------Modal---------------//
    $ionicModal.fromTemplateUrl('templates/tab-sport-additem.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function (sel) {
        $scope.modal.show();
        $scope.nowitem = Sportitems.get(sel);

        $scope.min = 0;
        $scope.selid=sel;
        $scope.energy = 0;

    };
    $scope.data = [{ search: '' }]
    $scope.closeModal = function () {

        $scope.modal.hide();

    };


    $scope.addsport = function () {
        $scope.hasdish = false
        if (parseFloat($scope.min) === 0) { }
        else {


            $scope.nowitem.time = $scope.min;
            $scope.nowitem.costqk = $scope.nowitem.time * $scope.nowitem.proqk / 60.0;
            // console.log($scope.nowitem);
            Sports.add($scope.nowitem);
            //console.log($scope.nowitem);
        } $scope.modal.hide();
    }




    //----------------Sportcalculator----------------//
    $scope.calculate = function (num) {
        if ($scope.min + String(num) < 999) {
            $scope.min = $scope.min  + String(num);
            $scope.min = parseFloat($scope.min );
            if ($scope.min  > parseInt($scope.min )) {
                if (String($scope.min ).length - String($scope.min ).indexOf(".") > 2) {
                    $scope.min  = String($scope.min ).substr(0, String($scope.min ).indexOf(".") + 2);

                };}
            $scope.energy = $scope.nowitem.proqk * $scope.min / 60;
            if ($scope.energy > parseInt(String($scope.energy))) {
                if (String($scope.energy).length - String($scope.energy).indexOf(".") > 2) {
                    $scope.energy = String($scope.energy).substr(0, String($scope.energy).indexOf(".") + 2);
                }
            };

        };
    }

    $scope.clear = function () {

        var n = String($scope.min).length;

        if (n != 1) {
            $scope.min = String($scope.min).substr(0, n - 1);
        }
        else {
            $scope.min = 0;
        }
        $scope.energy = $scope.nowitem.proqk * $scope.min / 60;
        if ($scope.energy > parseInt(String($scope.energy))) {
            if (String($scope.energy).length - String($scope.energy).indexOf(".") > 2) {
                $scope.energy = String($scope.energy).substr(0, String($scope.energy).indexOf(".") + 2);
            }
        };
    }
    $scope.point = function () {

        if ($scope.min > parseInt($scope.min)) { }
        else {
            $scope.min = $scope.min + ".";
        }
    }
    })

.controller('MeCtrl', function ($scope, $ionicModal,$rootScope, Userinfo,PALs, Conditions, StaEnergy, Stations, $ionicHistory, $state) {
    $scope.user = Userinfo.get(0);

    //-----------SelectState-------//
    $scope.data = Userinfo.get(0);//--find id

    $scope.stationsels = Stations.all();
    var fundsta = function (staname) {
        for (var i = 0; i < $scope.stationsels.length; i++) {
            if ($scope.stationsels[i].name === staname) {
                return $scope.stationsels[i].id;
            }
        }
    }
    var currentDate = new Date();
    var thisYear = currentDate.getFullYear();
    var thisMonth = currentDate.getMonth() +1;
    var thisDay = currentDate.getDate();
    //----------------mysta-----------------
    $scope.sta = StaEnergy.get(0);
    $scope.getSta = function (item) {
        $scope.user.stadate = thisMonth + "." + thisDay  + "." + thisYear;
        var nowsta = fundsta($scope.user.station)
        $scope.sta = StaEnergy.get(nowsta);
    }
    $scope.datetoday= thisMonth + "." + thisDay + "." +thisYear;
    $scope.havemadd=function(){
        if ($scope.sta.morningadd == '') {
            return false}
        else {
            return true}
    };
    $scope.haveaadd = function () {
        if ($scope.sta.afternoonadd == '') {
            return false
        }
        else {
            return true
        }
    };
    //----------------myinfo---------------------------
    var date = new Date($scope.user.birth);
    var bYear = date.getFullYear();
    var bMonth = date.getMonth();
    var bDay = date.getDate();

    var age = "Please Check Your Birthday"
    if (thisYear - bYear > 0) {
        if (thisMonth - bMonth < 0) {
            age = thisYear - bYear - 1;
        }
        else {
            if (thisDay - bDay >= 0) {
                age = thisYear - bYear;
            }
            else { age = thisYear - bYear - 1; }
        }
    };
    //-------------PAL
    $scope.PALsels = PALs.all();

    $scope.PALname = PALs.find($scope.user.PAL);

    $scope.getPal = function (PALname) {
		$scope.user.PAL = PALs.get(PALname);
    }

    $scope.age = age

    $scope.BMI = $scope.user.weight * 10000 / ($scope.user.height * $scope.user.height);
    $scope.condition = Conditions.get($scope.BMI).name;

    $scope.dweightmax = $scope.user.weight + 80;
    $scope.Savemyinfo = function () {
        $scope.user.weightrangemin = 18.5 * ($scope.user.height / 100) * ($scope.user.height / 100);
        $scope.user.weightrangemax = 24.9 * ($scope.user.height / 100) * ($scope.user.height / 100);
        $scope.user.EER				=$scope.user.BEE*$scope.user.PAL*$scope.user.weight;
        $scope.user.protein_need	=$scope.user.EER*0.15/4;
        $scope.user.fat_need		=$scope.user.EER*0.25/9;
        $scope.user.carbo_need		=$scope.user.EER*0.6/4;
		$state.go('tab.me', {});
    }

    //-------------reflect ----
    $scope.reflect = ''
    $scope.commit_ref = function (data) {
        $state.go('tab.me', {});
    }
  //-------------about BMI------
      $ionicModal.fromTemplateUrl('templates/tab-aboutbmi.html', {
        scope: $scope,
        animation: 'slide-in-down'
    }).then(function (modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function () {
        $scope.modal.show();
    };

    $scope.closeModal = function () {
        $scope.modal.hide();
    };
    })
.controller('AboutCtrl', function ($scope, $ionicActionSheet, $timeout, $ionicNavBarDelegate, $ionicHistory, $state, Userinfo, University,$rootScope) {
    $scope.user = Userinfo.get(0);


    //--------photo
    $scope.actshow = function () {// Show the action sheet,
        var hideSheet = $ionicActionSheet.show({

            buttons: [
				{ text: "Camera" },
				{ text: "Choose from Photos" }
            ],
            buttonClicked: function (index) {
                return true;
            },
            cancelText: "Cancel",
            cancel: function () {
                // add cancel code..
            }
        });
    };
    //--------Name-------//

    $scope.nickchange = function () {
        $ionicHistory.goBack();
    }

    //--------Uni------//
    $scope.unis = University.all()

    $scope.seluni = Userinfo.get(0);
    $scope.UniChange = function (item) {
        // console.log($scope.user.uni);
    }

    //-----------Gender-------//
    $scope.gender = [
    { text: "Male", value: "Male" },
    { text: "Female", value: "Female" }
    ];

    //-------------Date----------/

	 $scope.data = Userinfo.get(0);//connect to user data
    var date =new Date( $scope.data.birth);
    $scope.myFunction = function (date) {
        $ionicHistory.goBack()
        $scope.data.birth = date;
    };

    $scope.onezoneDatepicker = {
        date: date,
        mondayFirst: false,
        startDate: new Date(1950, 1, 1),
        endDate: new Date(2050, 12, 31),
        disablePastDays: false,
        disableSwipe: true,
        disableWeekend: false,
        disableDates:false,
        showDatepicker: true,
        showTodayButton: true,
        calendarMode: false,
        hideCancelButton:true,
        hideSetButton: false,
        callback: $scope.myFunction
    };
    })

.controller('AimCtrl', function ($scope, $state, Userinfo, $ionicHistory,$rootScope) {
    $scope.items = ["Notifying Kidney","Detox","Antidiabetics","Replenishing Blood","Moistening Lung","Reduce Internal Heat","Antihypertension","Dispel Cold","Whitening","Aid-sleeping", "Anti-aging","Anti-acne","Protecting Eyes","Nourishing Heart"]
    $scope.shortitems = ["Aphthous Stomatits","Cold", "Laxative"];
	$scope.user = Userinfo.get(0);
    $scope.activeaim = Userinfo.get(0).aims;
    $scope.setaim = function (id, item) {
        if ($scope.activeaim.indexOf(item) != -1) {
            //if exist remove it.
            $scope.activeaim.splice($scope.activeaim.indexOf(item), 1);
        } else {
            //if don't add it.
            if ($scope.activeaim.length < 3) {
                $scope.activeaim.push(item);
            } }

    }
    $scope.setshortaim = function (id, item) {
        if ($scope.activeaim.indexOf(item) != -1) {
            //if exist remove it.
            $scope.activeaim.splice($scope.activeaim.indexOf(item), 1);
        } else {
            //if don't add it.
            if ($scope.activeaim.length < 3) {
                $scope.activeaim.push(item);
            }
        }

    }
    $scope.deleteaim = function (item) {
        $scope.activeaim.splice($scope.activeaim.indexOf(item), 1);
    };
    $scope.Aimchange = function () {
        $ionicHistory.goBack();
        // console.log($scope.activeaim);
    }
     $scope.backdash= function () {
          $rootScope.haTabs = 'has-tabs';
          $state.go('tab.dash');}
    });



