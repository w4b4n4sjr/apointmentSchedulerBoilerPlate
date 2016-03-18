angular.module('myApp').controller('loginController',
  ['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {

    console.log(AuthService.getUserStatus());

    $scope.login = function () {

      // initial values
      $scope.error = false;
      $scope.disabled = true;
      // call login from service
      AuthService.login($scope.loginForm.username, $scope.loginForm.password)
        // handle success
        .then(function () {
          $location.path('/');
          $scope.disabled = false;
          $scope.loginForm = {};
        })
        // handle error
        .catch(function () {
          $scope.error = true;
          $scope.errorMessage = "Invalid username and/or password";
          $scope.disabled = false;
          $scope.loginForm = {};
        });

    };

}]);

angular.module('myApp').controller('logoutController',
  ['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {

    $scope.logout = function () {

      console.log(AuthService.getUserStatus());

      // call logout from service
      AuthService.logout()
        .then(function () {
          $location.path('/login');
        });

    };

}]);

angular.module('myApp').controller('registerController',
  ['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {

    console.log(AuthService.getUserStatus());

    $scope.register = function () {

      // initial values
      $scope.error = false;
      $scope.disabled = true;

      // call register from service
      AuthService.register($scope.registerForm.username, $scope.registerForm.password)
        // handle success
        .then(function () {
          $location.path('/login');
          $scope.disabled = false;
          $scope.registerForm = {};
        })
        // handle error
        .catch(function () {
          $scope.error = true;
          $scope.errorMessage = "Something went wrong!";
          $scope.disabled = false;
          $scope.registerForm = {};
        });

    };
}]);

angular.module('myApp').controller("SuccessCtrl", ['$scope','$http', function($scope, $http){            
            //some useful variables
		    var professionalsReportDetails = null;
		    var professionalsReportProgress = null;
		    var currentReport = null;
		    var currentProfessionalsDetails = null;
		    var currentProfessionalsProgress = null;
		    var currentProfessionals = null;
		    var currentSpecialities = null;
		    var currentSpecialities = null;
		    var currentSpecialitiesProgress = null;
		    var currentSpecialitiesDetails = null;
		    var currentBooking = null;
		    var sideURL_left = '';
		    var sideURL_progression = '';
		    var sideURL_right = '';
		    var sideURL_right_tab = '';
		    var newBookingsBookingsTab_show = null;
		    var newBookingsBookingForm = null;
		    var currentUsers = null;
		    var newUsersProgress = null;
		    var newBookingDetails = null;
		    var newBookingsBookingsTab = null;
		    var newBookingsProgress = null;
		    var newUserDetails = null;
		    $scope.resetRightAndProgressURLs = function(){
		        //this resets left and right URLs so that navigation is smooth for the user
		            sideURL_right = '';
		            sideURL_progression = '';
		            $scope.sideURL_progression = sideURL_progression;
		            $scope.sideURL_right = sideURL_right;
		    }
		    //Here is how I manage the default left and right
		    $scope.manageDefaultLeftAndRight = function(){
		        document.getElementById("defaultLeftAndRight").setAttribute('hidden', 'true');
		    }
		    //For Bookings
		    $scope.setBookings = function(){
		        if(document.getElementById("bookings").value == 1){
		            currentBooking = 'booking';
		            $scope.currentBooking = currentBooking;
		            sideURL_left = "partials/bookings/bookings-left-nav-bar.html";
		            $scope.sideURL_left = sideURL_left;
		            $scope.resetRightAndProgressURLs();
		            }
		        };
		    $scope.setLinkClassInactive = function(){
		        document.getElementById("newBookings").setAttribute('class', '');
		        document.getElementById("listOfBookings").setAttribute('class','');
		        document.getElementById("listOfPendingBookings").setAttribute('class', '');
		        document.getElementById("listOfInvoices").setAttribute('class', '');
		    }
		    $scope.setLinkClassInactive1 = function(){
		        document.getElementById("newUsers").setAttribute('class', '');
		        document.getElementById("listOfUsers").setAttribute('class', '');
		    }
		    
		    $scope.setLinkClassInactive2 = function(){
		        document.getElementById("specialityProfile").setAttribute('class', '');
		        document.getElementById("specialityBookings").setAttribute('class', '');
		    }
		    
		    $scope.setLinkClassInactive3 = function(){
		        document.getElementById("professionals").setAttribute('class', '');
		        document.getElementById("listOfProfessionals").setAttribute('class', '');
		        document.getElementById("bookingsOfProfessional").setAttribute('class', '');
		        document.getElementById("newProfessional").setAttribute('class', '');
		        document.getElementById("professionalWorkingTimes").setAttribute('class', '');
		        document.getElementById("professionalCustomWorkingTimes").setAttribute('class', '');
		    }
		    $scope.setLinkClassInactive4 = function(){
		        document.getElementById("professionalReport").setAttribute('class', '');
		        document.getElementById("specialityReport").setAttribute('class', '');
		    }
		    $scope.setNewBookingDetail = function(){
		        if(document.getElementById("newBookings").value == 11){
		            $scope.setLinkClassInactive();
		            document.getElementById("newBookings").setAttribute('class', 'active');
		            //setting the values of newBookingDetails and newBookingsProgress so thatr both are updated on the view in the right nav bar
		            newBookingDetails = 'bookingdetail';
		            newBookingsProgress = 'bookingprogress';
		            //Binding both values to the scope variable so that they are universally accessible
		            $scope.newBookingDetails = newBookingDetails;
		            $scope.newBookingsProgress = newBookingsProgress;
		            sideURL_progression = "partials/bookings/newBookings/bookings-centre-nav-bar.html";
		            $scope.sideURL_progression = sideURL_progression;
		            sideURL_right = "partials/bookings/newBookings/bookings-right-nav-bar.html";
		            $scope.sideURL_right = sideURL_right;      
		        }
		    }
		    
		    $scope.getListOfBookings = function(){
		        if(document.getElementById("listOfBookings").value == 12){
		            $scope.setLinkClassInactive();
		            document.getElementById("listOfBookings").setAttribute('class','active');
		            newBookingDetails = 'listofbookings';
		            newBookingsProgress = 'progressofbookings';
		            $scope.newBookingDetails = newBookingDetails;
		            $scope.newBookingsProgress = newBookingsProgress;
		            sideURL_progression = "partials/bookings/bookingLists/bookings-centre-nav-bar.html";
		            $scope.sideURL_progression = sideURL_progression;
		            sideURL_right = "partials/bookings/bookingLists/bookings-right-nav-bar.html";
		            $scope.sideURL_right = sideURL_right;
		        }
		    }
		    
		    $scope.getListOfPendingBookings = function(){
		        if(document.getElementById("listOfPendingBookings").value == 13){
		            $scope.setLinkClassInactive();
		            document.getElementById("listOfPendingBookings").setAttribute('class', 'active');
		            newBookingDetails = 'listofpendingbookings';
		            newBookingsProgress = 'progressofpendingbookings';
		            $scope.newBookingDetails = newBookingDetails;
		            $scope.newBookingsProgress = newBookingsProgress;
		            sideURL_progression = "partials/bookings/pending/bookings-centre-nav-bar.html";
		            $scope.sideURL_progression = sideURL_progression;
		            sideURL_right = "partials/bookings/pending/bookings-right-nav-bar.html";
		            $scope.sideURL_right = sideURL_right;
		            //alert("Hola Bonjour");
		        }
		    }
		    
		    $scope.getListOfInvoices = function(){
		        if(document.getElementById("listOfInvoices").value == 14){
		            $scope.setLinkClassInactive();
		            document.getElementById("listOfInvoices").setAttribute('class', 'active');
		            newBookingDetails = 'invoiceofbookings';
		            newBookingsProgress = 'progressofinvoicebookings';
		            $scope.newBookingDetails = newBookingDetails;
		            $scope.newBookingsProgress = newBookingsProgress;
		            sideURL_progression = "partials/bookings/Invoices/bookings-centre-nav-bar.html";
		            $scope.sideURL_progression = sideURL_progression;
		            sideURL_right = "partials/bookings/Invoices/bookings-right-nav-bar.html";
		            $scope.sideURL_right = sideURL_right;
		        }
		    }
		    
		    $scope.deactivateTabs = function(){
		        document.getElementById("firstTab").setAttribute('class','');
		                document.getElementById("secondTab").setAttribute('class','');
		                document.getElementById("firstTabPane").setAttribute('class','tab-pane');
		                document.getElementById("secondTabPane").setAttribute('class','tab-pane');
		    }
		    
		    $scope.activateTab1 = function(){
		            if(document.getElementById("firstTab").value == 111)
		            {
		                $scope.deactivateTabs();
		                document.getElementById("firstTab").setAttribute('class','active');
		                document.getElementById("firstTabPane").setAttribute('class','tab-pane active');
		            }
		        }
		    $scope.activateTab2 = function(){
		    
		    if(document.getElementById("secondTab").value == 112)
		            {
		                $scope.deactivateTabs();
		                document.getElementById("secondTab").setAttribute('class','active');
		                document.getElementById("secondTabPane").setAttribute('class','tab-pane active');
		            }
		    }
		    
		    $scope.addSpecialityModal = function(){
		            document.getElementById("modal").removeAttribute("hidden");
		        }
		        //These respond to the buttons of the modal on the booking tab
		        $scope.ok = function(){
		            document.getElementById("modal").setAttribute('hidden','true');
		        }
		        
		        $scope.cancel = function(){
		            document.getElementById("modal").setAttribute('hidden','true');
		        }
		        
		    //For specialities
		        $scope.setSpecialites = function(){
		            if(document.getElementById("specialites").value == 2){
		                currentSpecialities = 'settingthespecialities';
		                $scope.currentSpecialities = currentSpecialities;
		                sideURL_left = "partials/specialities/specialities-left-nav-bar.html";
		                $scope.sideURL_left = sideURL_left;
		                $scope.resetRightAndProgressURLs();
		            }
		        };
		        
		        $scope.setSpecialityDetail = function(){
		            if(document.getElementById("specialityProfile").value == 21){
		                $scope.setLinkClassInactive2();
		                document.getElementById("specialityProfile").setAttribute('class', 'active');
		                currentSpecialitiesDetails = 'setspecialitiesdetails';
		                $scope.currentSpecialitiesDetails = currentSpecialitiesDetails;
		                currentSpecialitiesProgress = 'setspecialitiesprogress';
		                $scope.currentSpecialitiesProgress = currentSpecialitiesProgress;
		                sideURL_progression = "partials/specialities/listOfSpecialities/specialities-centre-nav-bar.html";
		                $scope.sideURL_progression = sideURL_progression;
		                sideURL_right = "partials/specialities/listOfSpecialities/specialities-right-nav-bar.html";
		                $scope.sideURL_right = sideURL_right;
		            }
		        };
		        
		        $scope.addNewSpeciality = function(){
		            if(document.getElementById("specialityBookings").value == 22){
		                $scope.setLinkClassInactive2();
		                document.getElementById("specialityBookings").setAttribute('class', 'active');
		                currentSpecialitiesDetails = 'addanewSpecialist';
		                $scope.currentSpecialitiesDetails = currentSpecialitiesDetails;
		                currentSpecialitiesProgress = 'setnewspecialistprogress';
		                $scope.currentSpecialitiesProgress = currentSpecialitiesProgress;
		                sideURL_progression = "partials/specialities/addSpeciality/specialities-centre-nav-bar.html";
		                $scope.sideURL_progression = sideURL_progression;
		                sideURL_right = "partials/specialities/addSpeciality/specialities-right-nav-bar.html";
		                $scope.sideURL_right = sideURL_right;
		            }
		        }
		        
                //method for adding new specialities into the database
                $scope.saveNewSpeciality = function(){
                    if(document.getElementById("saveNewSpeciality").value == 220){
                        
                        $http.post('/speciality/newSpeciality', $scope.newSpecialityForm).success(function(data){
                           $scope.newSpecialityForm = {};
                           $scope.specialitys = data;    
                        })
                        .error(function(data){
                           console.log('Error: '+data); 
                        });
                       }
                };
                
		    //For professionals
		        $scope.setProfessionals = function(){
		            if(document.getElementById("professionals").value == 3){
		                currentProfessionals = 'settingprofessionals';
		                $scope.currentProfessionals = currentProfessionals;
		                sideURL_left = "partials/professionals/professionals-left-nav-bar.html";
		                $scope.sideURL_left = sideURL_left;
		                $scope.resetRightAndProgressURLs();
		            }
		        }
		        
		        $scope.setNewProfessionalDetail = function(){
		            if(document.getElementById("newProfessional").value == 31){
		                $scope.setLinkClassInactive3();
		                document.getElementById("newProfessional").setAttribute('class', 'active');
		                currentProfessionalsProgress = 'settingprofessionalprogress';
		                $scope.currentProfessionalsProgress = currentProfessionalsProgress;
		                currentProfessionalsDetails = 'settingaddnewprofessionaldetails';
		                $scope.currentProfessionalsDetails = currentProfessionalsDetails;
		                sideURL_progression = "partials/professionals/addProfessional/professionals-centre-nav-bar.html";
		                $scope.sideURL_progression = sideURL_progression;
		                sideURL_right = "partials/professionals/addProfessional/professionals-right-nav-bar.html";
		                $scope.sideURL_right = sideURL_right;
		            }
		        };
		        
		        $scope.setListOfProfessionals = function(){
		            if(document.getElementById("listOfProfessionals").value == 32){
		                $scope.setLinkClassInactive3();
		                document.getElementById("listOfProfessionals").setAttribute('class', 'active');
		                currentProfessionalsProgress = 'settingprofessionalprogress';
		                $scope.currentProfessionalsProgress = currentProfessionalsProgress;
		                currentProfessionalsDetails = 'settingaddnewprofessionaldetails';
		                $scope.currentProfessionalsDetails = currentProfessionalsDetails;
		                sideURL_progression = "partials/professionals/listOfProfessionals/professionals-centre-nav-bar.html";
		                $scope.sideURL_progression = sideURL_progression;
		                sideURL_right = "partials/professionals/listOfProfessionals/professionals-right-nav-bar.html";
		                $scope.sideURL_right = sideURL_right;
		            }
		        };
		        
		        $scope.setListOfBookingsForProfessionals = function(){
		            if(document.getElementById("bookingsOfProfessional").value == 33){
		                $scope.setLinkClassInactive3();
		                document.getElementById("bookingsOfProfessional").setAttribute('class', 'active');
		                currentProfessionalsProgress = 'settingprofessionalprogress';
		                $scope.currentProfessionalsProgress = currentProfessionalsProgress;
		                currentProfessionalsDetails = 'settingaddnewprofessionaldetails';
		                $scope.currentProfessionalsDetails = currentProfessionalsDetails;
		                sideURL_progression = "partials/professionals/professionalBookings/professionals-centre-nav-bar.html";
		                $scope.sideURL_progression = sideURL_progression;
		                sideURL_right = "partials/professionals/professionalBookings/professionals-right-nav-bar.html";
		                $scope.sideURL_right = sideURL_right;
		            }
		        }
		        
		        $scope.viewProfessionalWorkingTimes = function(){
		            if(document.getElementById("professionalWorkingTimes").value == 34){
		                $scope.setLinkClassInactive3();
		                document.getElementById("professionalWorkingTimes").setAttribute('class', 'active');
		                currentProfessionalsProgress = 'professionalsworkingtimeprogress';
		                $scope.currentProfessionalsProgress = currentProfessionalsProgress;
		                currentProfessionalsDetails = 'settingprofessionalsworkingtime';
		                $scope.currentProfessionalsDetails = currentProfessionalsDetails;
		                sideURL_progression = "partials/professionals/professionalWorkingTimes/professionals-centre-nav-bar.html";
		                $scope.sideURL_progression = sideURL_progression;
		                sideURL_right = "partials/professionals/professionalWorkingTimes/professionals-right-nav-bar.html";
		                $scope.sideURL_right = sideURL_right;
		            }
		        }
		        
		        $scope.viewCustomWorkingTimes = function(){
		            if(document.getElementById("professionalCustomWorkingTimes").value == 35){
		                $scope.setLinkClassInactive3();
		                document.getElementById("professionalCustomWorkingTimes").setAttribute('class', 'active');
		                currentProfessionalsProgress = 'customworkingtimeprogress';
		                $scope.currentProfessionalsProgress = currentProfessionalsProgress;
		                currentProfessionalsDetails = 'settingprofessionalscustomworkingtime';
		                $scope.currentProfessionalsDetails = currentProfessionalsDetails;
		                sideURL_progression = "partials/professionals/professionalCustomWorkingTimes/professionals-centre-nav-bar.html";
		                $scope.sideURL_progression = sideURL_progression;
		                sideURL_right = "partials/professionals/professionalCustomWorkingTimes/professionals-right-nav-bar.html";
		                $scope.sideURL_right = sideURL_right;
		            }
		        };
		        
		        $scope.checkAll = function(){
		            if(document.getElementById("idOfCheckAll").value == 0){
		                document.getElementById("idOfProfessional1").setAttribute('checked', 'true');
		                document.getElementById("idOfProfessional2").setAttribute('checked', 'true');
		                document.getElementById("idOfProfessional3").setAttribute('checked', 'true');
		                console.log("All Checked");
		            }
		        };
		        
		    //For Report
		    $scope.setReports = function(){
		        if(document.getElementById("reports").value == 5){
		            currentReport = 'report';
		            $scope.currentReport = currentReport;
		            sideURL_left = "partials/reports/reports-left-nav-bar.html";
		            $scope.sideURL_left = sideURL_left;
		            $scope.resetRightAndProgressURLs();
		        };
		    };
		    $scope.viewProfessionalsReport = function(){
		        if(document.getElementById("professionalReport").value == 51){
		            $scope.setLinkClassInactive4();
		            document.getElementById("professionalReport").setAttribute('class', 'active');
		            professionalsReportProgress = 'professionalreportprogress';
		            $scope.professionalsReportProgress = professionalsReportProgress;
		            sideURL_progression = "partials/reports/professionalsReports/reports-centre-nav-bar.html";
		            $scope.sideURL_progression = sideURL_progression;
		            professionalsReportDetails = 'professionalreportdetails';
		            $scope.professionalsReportDetails = professionalsReportDetails;
		            sideURL_right = "partials/reports/professionalsReports/reports-right-nav-bar.html";
		            $scope.sideURL_right = sideURL_right;
		        }
		    }
		    
		    $scope.viewSpecialitiesReport = function(){
		        if(document.getElementById("specialityReport").value == 52){
		            $scope.setLinkClassInactive4();
		            document.getElementById("specialityReport").setAttribute('class', 'active');
		            professionalsReportProgress = 'specialityreportprogress';
		            $scope.professionalsReportProgress = professionalsReportProgress;
		            sideURL_progression = "partials/reports/specialitiesReports/reports-centre-nav-bar.html";
		            $scope.sideURL_progression = sideURL_progression;
		            professionalsReportDetails = 'professionalreportdetails';
		            $scope.professionalsReportDetails = professionalsReportDetails;
		            sideURL_right = "partials/reports/specialitiesReports/reports-right-nav-bar.html";
		            $scope.sideURL_right = sideURL_right;
		            console.log("Good with Speciality Reports");
		        }
		    }
		    
		    //For users
		        $scope.setUsers = function(){
		        if(document.getElementById("users").value == 6){
		            //setting the value of currentUsers so that ng-show can take effect on the left nav bar
		            currentUsers = 'user';
		            //binding to scope for universal access
		            $scope.currentUsers = currentUsers;
		            sideURL_left = "partials/users/users-left-nav-bar.html";
		            $scope.sideURL_left = sideURL_left;
		            $scope.resetRightAndProgressURLs();
		            //console.log("Weldone, I have this value for sideBarURL "+$scope.sideURLnewUsers);
		        }
		    };
		        $scope.setNewUsersDetail = function(){
		            if(document.getElementById("newUsers").value == 61){
		                $scope.setLinkClassInactive1();
		                document.getElementById("newUsers").setAttribute('class', 'active');
		                newUserDetails = 'newuserdetails';
		                $scope.newUserDetails = newUserDetails;
		                newUsersProgress = 'userprogress';
		                $scope.newUsersProgress = newUsersProgress;
		                sideURL_progression = "partials/users/newUsers/users-centre-nav-bar.html";
		                $scope.sideURL_progression = sideURL_progression;
		                sideURL_right = "partials/users/newUsers/users-right-nav-bar.html";
		                $scope.sideURL_right = sideURL_right;
		            }
		        }
		        
		        $scope.setListOfUsers = function(){
		            if(document.getElementById("listOfUsers").value = 62){
		                $scope.setLinkClassInactive1();
		                document.getElementById("listOfUsers").setAttribute('class', 'active');
		                newUserDetails = 'listofusers';
		                $scope.newUserDetails = newUserDetails;
		                newUsersProgress = 'listofusersprogress';
		                $scope.newUsersProgress = newUsersProgress;
		                sideURL_progression = "partials/users/listOfUsers/users-centre-nav-bar.html";
		                $scope.sideURL_progression = sideURL_progression;
		                sideURL_right = "partials/users/listOfUsers/users-right-nav-bar.html";
		                $scope.sideURL_right = sideURL_right;
		            }
		        }    
		}]);