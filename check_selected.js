checkSelected = function() {
        var trues = $filter("filter")( $scope.data.tasks , {selected:true} );
        if(trues.length > 0){
            return true;
        }else{
            return false;
        }
    }
