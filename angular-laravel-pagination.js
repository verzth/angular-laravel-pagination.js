(function (angular) {
    angular.module('verzthAngularPagination',[])
        .directive('vNgPagination',function () {
            var $template = '';
            $template+='<ul class="pagination justify-content-center">';
            $template+='<li class="page-item" ng-if="data.current_page>1">';
            $template+='<a class="page-link" ng-href="#" aria-label="Previous" ng-click="pageChange({page:data.current_page-1});$event.preventDefault();">';
            $template+='<span aria-hidden="true">&laquo;</span>';
            $template+='<span class="sr-only">Previous</span>';
            $template+='</a>';
            $template+='</li>';

            $template+='<li class="page-item" ng-if="data.current_page>1" ng-click="pageChange({page:1});$event.preventDefault();"><a class="page-link" href="#">1</a></li>';
            $template+='<li class="page-item" ng-if="data.current_page>2" ng-click="pageChange({page:2});$event.preventDefault();"><a class="page-link" href="#">2</a></li>';
            $template+='<li class="page-item" ng-if="data.current_page==7" ng-click="pageChange({page:3});$event.preventDefault();"><a class="page-link" href="#">3</a></li>';

            $template+='<li class="page-item disabled" ng-if="data.current_page>7"><a class="page-link" href="#">...</a></li>';

            $template+='<li class="page-item" ng-if="data.current_page>5"><a class="page-link" href="#" ng-click="pageChange({page:data.current_page-3});$event.preventDefault();">{{ data.current_page-3 }}</a></li>';
            $template+='<li class="page-item" ng-if="data.current_page>4"><a class="page-link" href="#" ng-click="pageChange({page:data.current_page-3});$event.preventDefault();">{{ data.current_page-2 }}</a></li>';
            $template+='<li class="page-item" ng-if="data.current_page>3"><a class="page-link" href="#" ng-click="pageChange({page:data.current_page-3});$event.preventDefault();">{{ data.current_page-1 }}</a></li>';

            $template+='<li class="page-item active"><a class="page-link" href="#" ng-click="$event.preventDefault()">{{ data.current_page }}</a></li>';

            $template+='<li class="page-item" ng-if="data.current_page<data.last_page-2"><a class="page-link" href="#" ng-click="pageChange({page:data.current_page+1});$event.preventDefault();">{{ data.current_page+1 }}</a></li>';
            $template+='<li class="page-item" ng-if="data.current_page<data.last_page-3"><a class="page-link" href="#" ng-click="pageChange({page:data.current_page+2});$event.preventDefault();">{{ data.current_page+2 }}</a></li>';
            $template+='<li class="page-item" ng-if="data.current_page<data.last_page-4"><a class="page-link" href="#" ng-click="pageChange({page:data.current_page+3});$event.preventDefault();">{{ data.current_page+3 }}</a></li>';

            $template+='<li class="page-item disabled" ng-if="data.current_page<data.last_page-6"><a class="page-link" href="#">...</a></li>';

            $template+='<li class="page-item" ng-if="data.current_page==data.last_page-6"><a class="page-link" href="#" ng-click="pageChange({page:data.last_page-2});$event.preventDefault();">{{ data.last_page-2 }}</a></li>';
            $template+='<li class="page-item" ng-if="data.current_page<data.last_page-1"><a class="page-link" href="#" ng-click="pageChange({page:data.last_page-1});$event.preventDefault();">{{ data.last_page-1 }}</a></li>';
            $template+='<li class="page-item" ng-if="data.current_page<data.last_page"><a class="page-link" href="#" ng-click="pageChange({page:data.last_page});$event.preventDefault();">{{ data.last_page }}</a></li>';

            $template+='<li class="page-item" ng-if="data.current_page<data.last_page">';
            $template+='<a class="page-link" ng-href="{{ data.next_page_url }}" aria-label="Previous" ng-click="pageChange({page:data.current_page+1});$event.preventDefault();">';
            $template+='<span aria-hidden="true">&raquo;</span>';
            $template+='<span class="sr-only">Next</span>';
            $template+='</a>';
            $template+='</li>';
            $template+='</ul>';

            return {
                restrict : "EC",
                scope : {
                    data : "=",
                    pageChange : "&onPageChange"
                },
                template : $template
            }
        });
})(angular);