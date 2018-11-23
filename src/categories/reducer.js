const initialState = {
    categories: [
        {
            title: 'Countries',
            value: 'countries',
            words: [
                'SPAIN',
                'TURKEY',
                'NICARAGUA',
                'CROATIA',
                'MEXICO',
                'IRAN',
                'THAILAND',
                'CUBA',
                'RUSSIA',
                'CANADA'
            ]
        },
        {
            title: 'Beers & Breweries',
            value: 'beers',
            words: [
                'TRULY',
                'DRAKES',
                'COORS',
                'ACE',
                'STONE',
                'DESCHUTES',
                'GUINNESS',
                'CORONA',
                'HEINEKEN',
                'NEWCASTLE'
            ]
        },
        {
            title: 'Board Games',
            value: 'boardGames',
            words: [
                'MONOPOLY',
                'BATTLESHIP',
                'CHESS',
                'PANDEMIC',
                'RISK',
                'LIFE',
                'SCRABBLE',
                'DOMINION',
                'PICTIONARY',
                'BACKGAMMON'
            ]
        },
        {
            title: 'Movies',
            value: 'movies',
            words: [
                'INCREDIBLES',
                'HALLOWEEN',
                'TITANIC',
                'SCREAM',
                'VENOM',
                'SEARCHING',
                'TERMINATOR',
                'OVERLORD',
                'JAWS',
                'PSYCHO'
            ]
        },
        {
            title: 'Animals',
            value: 'animals',
            words: [
                'JELLYFISH',
                'KOALA',
                'HIPPOPOTAMUS',
                'HYENA',
                'ZEBRA',
                'HEDGEHOG',
                'CAMEL',
                'FLAMINGO',
                'IGUANA',
                'LEMUR'
            ]
        }
    ],
    chosenWord: [],
    remainingLives: 7,
    validGuesses: [],
    clickedCategory: ''
};

const categoryReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SELECT_CATEGORY':
            return {
                chosenWord: Array.from(
                    state.categories.find(category => category.value === action.value).words[action.i]
                ),
                remainingLives: 7,
                categories: state.categories,
                clickedCategory: action.value
            }
        case 'NEW_GAME':
            return initialState
        default:
            return state
    }
};

export default categoryReducer;
