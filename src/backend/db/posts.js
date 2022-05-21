import { v4 as uuid } from 'uuid'
import { formatDate } from '../utils/authUtils'

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: 'John',
    lastName: 'Kidd',
    username: 'jhonkidd',
    createdAt: 2021,
    updatedAt: formatDate(),
    profile:
      'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png',
    comments: [
      {
        _id: uuid(),
        firstName: 'Adarsh',
        lastName: 'Balika',
        username: 'adarshbalika',
        createdAt: 2010,
        updatedAt: formatDate(),
        profile:
          'https://c8.alamy.com/zooms/9/c6f3f3c389b1482b8da4487bd00ad018/kfeagb.jpg',
        commentData: 'Greate things take time.',
      },
    ],
  },

  {
    _id: uuid(),
    content: "Life is what happens when you're busy making other plans.",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: 'Damaris',
    lastName: 'Buck',
    username: 'damarisbuck',
    createdAt: 2021,
    updatedAt: formatDate(),
    profile:
      'https://cdn3.vectorstock.com/i/thumb-large/66/77/avatar-young-bearded-guy-brow-haired-man-vector-32416677.jpg',
    comments: [
      {
        _id: uuid(),
        firstName: 'Savanah',
        lastName: 'solis',
        username: 'savanahsolis',
        createdAt: 2018,
        updatedAt: formatDate(),
        profile:
          'https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg',
        commentData: 'If life were predictable it would cease to be life.',
      },
    ],
  },
  {
    _id: uuid(),
    content: "Life is what happens when you're busy making other plans.",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: 'Savanah',
    lastName: 'solis',
    username: 'savanahsolis',
    createdAt: 2021,
    updatedAt: formatDate(),
    profile:
      'https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg',
    comments: [
      {
        _id: uuid(),
        firstName: 'Damaris',
        lastName: 'Buck',
        username: 'savanahsolis',
        createdAt: 2022,
        updatedAt: formatDate(),
        profile:
          'https://cdn3.vectorstock.com/i/thumb-large/66/77/avatar-young-bearded-guy-brow-haired-man-vector-32416677.jpg',
        commentData: 'If life were predictable it would cease to be life.',
      },
      {
        _id: uuid(),
        firstName: 'Adarsh',
        lastName: 'Balika',
        username: 'adarshbalika',
        createdAt: 2021,
        updatedAt: formatDate(),
        profile:
          'https://c8.alamy.com/zooms/9/c6f3f3c389b1482b8da4487bd00ad018/kfeagb.jpg',
        commentData: 'If life were predictable it would cease to be life.',
      },
    ],
  },
  {
    _id: uuid(),
    content: "Life is what happens when you're busy making other plans.",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: 'Adarsh',
    lastName: 'Balika',
    username: 'adarshbalika',
    createdAt: 2016,
    updatedAt: formatDate(),
    profile:
      'https://c8.alamy.com/zooms/9/c6f3f3c389b1482b8da4487bd00ad018/kfeagb.jpg',
  },
  {
    _id: uuid(),
    content: "Life is what happens when you're busy making other plans.",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: 'Damaris',
    lastName: 'Buck',
    username: 'damarisbuck',
    createdAt: 2018,
    updatedAt: formatDate(),
    profile:
      'https://cdn3.vectorstock.com/i/thumb-large/66/77/avatar-young-bearded-guy-brow-haired-man-vector-32416677.jpg',
    comments: [
      {
        _id: uuid(),
        firstName: 'Savanah',
        lastName: 'solis',
        username: 'savanahsolis',
        createdAt: 2011,
        updatedAt: formatDate(),
        profile:
          'https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg',
        commentData: 'If life were predictable it would cease to be life.',
      },
    ],
  },
  {
    _id: uuid(),
    content: "Life is what happens when you're busy making other plans.",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: 'Damaris',
    lastName: 'Buck',
    username: 'damarisbuck',
    createdAt: 2020,
    updatedAt: formatDate(),
    profile:
      'https://cdn3.vectorstock.com/i/thumb-large/66/77/avatar-young-bearded-guy-brow-haired-man-vector-32416677.jpg',
    comments: [
      {
        _id: uuid(),
        firstName: 'Savanah',
        lastName: 'solis',
        username: 'savanahsolis',
        createdAt: 2019,
        updatedAt: formatDate(),
        profile:
          'https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg',
        commentData: 'If life were predictable it would cease to be life.',
      },
    ],
  },
  {
    _id: uuid(),
    content: "Life is what happens when you're busy making other plans.",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: 'Damaris',
    lastName: 'Buck',
    username: 'damarisbuck',
    createdAt: 2021,
    updatedAt: formatDate(),
    profile:
      'https://cdn3.vectorstock.com/i/thumb-large/66/77/avatar-young-bearded-guy-brow-haired-man-vector-32416677.jpg',
    comments: [
      {
        _id: uuid(),
        firstName: 'John',
        lastName: 'Kidd',
        username: 'jhonkidd',
        createdAt: 2020,
        updatedAt: formatDate(),
        profile:
          'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png',
        commentData: 'If life were predictable it would cease to be life.',
      },
    ],
  },
]
