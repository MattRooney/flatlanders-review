(function() {
  var app = angular.module('gemStore', []);

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2,
      description: 'Some gems have qualities beyond their luster,' +
      ' beyond their shine... Dodeca is one of those gems.',
      reviews: [
          { stars: 3,
            body: "it's ok",
            author: "dad@aol.com"
          },
          { stars: 1,
            body: "it kinda sucks",
            author: "troll@internettrolls.com"
          }
        ],
      canPurchase: true,
      soldOut: false
    },
    {
      name: "Pentagonal Gem",
      price: 5.95,
      description: "... it's a pentagon",
      specifications: "more specifically it has 5 sides.",
      reviews: [
        { stars: 5,
          body: "it's great",
          author: "joeschmoe@tv.com"
        },
        { stars: 1,
          body: "it kinda sucks",
          author: "troll@internettrolls.com"
        }
        ],
      canPurchase:false,
      soldOut: true
    }
  ]
  app.controller('StoreController', function() {
    this.products = gems;
  });

  app.controller('PanelController', function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };

  })
})();
