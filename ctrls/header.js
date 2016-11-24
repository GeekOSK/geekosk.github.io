angular.module("GeekOSK")
    .controller('headerCtrl', ['$scope', '$element', "$timeout",
        function($scope, $element, $timeout){
            $scope.fabMenuFocused = false;
            var $this = this;
            $this.isOpen = false;
            $scope.$watch('header.isOpen', function(isOpen) {
                if (isOpen) {
                    $timeout(function() {
                        $scope.fabMenuFocused = $this.isOpen;
                    }, 600);
                } else {
                    $scope.fabMenuFocused = $this.isOpen;
                }
            });
        }
    ]);
