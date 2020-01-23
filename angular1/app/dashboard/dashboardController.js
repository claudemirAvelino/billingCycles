(function () {
  angular.module('primeiraApp').controller('DashboardCtrl', [
    '$http',
    DashboardController
  ])

  function DashboardController($http) {
    const _self = this;

    _self.getSummary = function () {
      const url = 'http://localhost:3003/api/billingSummary';

      $http.get(url).then(function (data) {
        const {credit = 0, debt = 0} = data.data;
        _self.credit = credit;
        _self.debt = debt;
        _self.total = credit - debt;
      }).catch(function (err) {
        console.log('erro: ', err);
      })
    }

    _self.getSummary();
  }
})()
