# angular-laravel-pagination.js
Javascript Library for Pagination which is compatible with Laravel pagination json data.

### How to Use:
1. Add script **angular-laravel-pagination.js** in your HTML head or body.
2. Angular Laravel Pagination provide callback for action where page changed, just put
   the function in attribute **on-page-change**, don't forget to add page on first parameter.
3. For implementation look at the sample below:
   ```
   <script>

   ......
   angular.module('yourApp',['verzthAngularPagination']);
   ......

   </script>
   ```
   In your HTML file.
   ```
   <v-ng-pagination data="listPage" on-page-change="pageChanged(page)"></v-ng-pagination>
   ```
   OR
   ```
   <div class="v-ng-pagination" data="listPage" on-page-change="pageChanged(page)"></div>
   ```