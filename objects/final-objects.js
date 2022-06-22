let supplyCards = {
  victoryCards: {
    'Province': {
      'amount': 12,
      'cost': 8,
      'value': 6,
      'type': 'vc'
    },
    'Duchy': {
      'amount': 12,
      'cost': 5,
      'value': 3,
      'type': 'vc'
    },
    'Estate': {
      'amount': 12,
      'cost': 2,
      'value': 1,
      'type': 'vc'
    },
    'Curse': {
      'amount': 10,
      'cost': 0,
      'value': -1,
      'type': 'vc'
    }
  },
  coinCards: {
    'Gold': {
      'amount': 30,
      'cost': 6,
      'value': 3,
      'type': 'coin'
    },
    'Silver': {
      'amount': 40,
      'cost': 3,
      'value': 2,
      'type': 'coin'
    },
    'Copper': {
      'amount': 46,
      'cost': 0,
      'value': 1,
      'type': 'coin'
    }
  },
  actionCards: {
    'Cellar': {
      'amount': 10,
      'cost': 2,
      'value': {
        'card': 0,
        'action': 1,
        'buy': 0,
        'treasure': 0
      },
      'type': 'action'
    },
    'Moat': {
      'amount': 10,
      'cost': 2,
      'value': {
        'card': 0,
        'action': 0,
        'buy': 0,
        'treasure': 2
      },
      'type': 'action'
    },
    'Smithy': {
      'amount': 10,
      'cost': 4,
      'value': {
        'card': 3,
        'action': 0,
        'buy': 0,
        'treasure': 0
      },
      'type': 'action'
    },
    'Militia': {
      'amount': 10,
      'cost': 4,
      'value': {
        'card': 0,
        'action': 0,
        'buy': 0,
        'treasure': 2
      },
      'type': 'action'
    },

    'Market': {
      'amount': 10,
      'cost': 5,
      'value': {
        'card': 1,
        'action': 1,
        'buy': 1,
        'treasure': 1
      },
      'type': 'action'
    },
    
  }
}

// console.log supplyCard keys
// console.log coinCard values
// let coinValues = Object.entries(supplyCards.coinCards)
// for(const [coins, coinValue] of coinValues){
//   console.log(coinValue)
// }
// console.log total amount of all coinCards
// create a function that takes in an actionCard name. then return the treasure of that card
// total = 0
// let coins = Object.keys(supplyCards.coinCards)
// for(coin of coins){
//   total += supplyCards.coinCards[coin].amount
// }

// console.log(total)


// let test = Object.values(supplyCards.coinCards)
// console.log(test)

