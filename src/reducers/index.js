import { ADD_COMMENT, SORT_OLDEST } from './../constants';

let allUserComments = [
  {
    id: 0,
    rating: 0,
    name: 'User1',
    thumbnail: 'http://i.playground.ru/i/00/00/00/00/user/default/icon.50x50.png',
    time: new Date('7.10.2017 13:30'),
    comment: 'Even in these scenarios though, you can usually skirt away and clear the board.',
    replyTo: null,
    replyToUser: null,
    hasComments: true
  },
  {
    id: 1,
    rating: 0,
    name: 'User-name',
    thumbnail: 'http://i.playground.ru/i/00/00/00/00/user/default/icon.20x20.png',
    time: new Date('7.10.2017 13:30'),
    comment: 'The only really bad position is when you go first and you don\'t have a natural selection or flash reincarnation. Even in these scenarios though, you can usually skirt away and clear the board.',
    replyTo: 0,
    replyToUser: 'User1',
    hasComments: false
  },
  {
    id: 2,
    rating: 0,
    name: 'User1',
    thumbnail: 'http://i.playground.ru/i/00/00/00/00/user/default/icon.20x20.png',
    time: new Date('7.10.2017 13:30'),
    comment: 'Can i add youin game to watch some replays?',
    replyTo: 0,
    replyToUser: 'User-name',
    hasComments: false
  },
  {
    id: 3,
    rating: 22,
    name: 'User-name',
    thumbnail: 'http://i.playground.ru/i/00/00/00/00/user/default/icon.50x50.png',
    time: new Date('7.10.2017 13:30'),
    comment: 'Of course, but despite what one would guess initially, this deck\'s playstyle lends itself to remarkable consistency due to its ability to stabilize. The only really bad position is when you go first and you don\'t have a natural selection or flash reincarnation. Even in these scenarios though, you can usually skirt away and clear the board. Another point of consistency is that when you\'re in end game, you\'ll never be plagued by drawing 2-3 drops every other deck runs. You\'ll always get a power creature or removal.',
    replyTo: null,
    replyToUser: null,
    hasComments: false
  }
]

const createNewComment = (action) => {
  let d = new Date().toISOString();


  let newComment = {
    id: Math.random(),
    rating: 0,
    name: 'MyNick',
    thumbnail: 'http://i.playground.ru/i/00/00/00/00/user/default/icon.50x50.png',
    time: d,
    comment: action.text.comment,
    replyTo: null,
    replyToUser: null,
    hasComments: false
  }

  return newComment;
}

const sortingMachine = (array) => {
  return array.slice().sort((a, b) => a.rating < b.rating);
}

export default (state = allUserComments, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [createNewComment(action), ...state];
    case SORT_OLDEST:
      return sortingMachine(state);
    default:
      return state;
  }
}
