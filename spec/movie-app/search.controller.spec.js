describe('Search Controller', function() {
  var $scope;
  var $location;
  var searchUrl = '/results?q=star%20wars';

  beforeEach(module('movieApp'));

  beforeEach(inject(function(_$controller_, _$location_) {
    $scope = {};
    $location = _$location_;

    _$controller_('SearchController', {
      $scope: $scope,
      $location: $location
    });
  }));

  it('should redirect to the query results page for non-empty query', function() {
    $scope.query = 'star wars';
    $scope.search();

    expect($location.url()).toBe(searchUrl);
  });

  it('should not redirect to query results for empty query', function() {
    $scope.query = '';
    $scope.search();

    expect($location.url()).toBe('');
  });
});
