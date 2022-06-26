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
    username: 'johnkidd',
    createdAt: 2021,
    updatedAt: formatDate(),
    profile:
      'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png',
    comments: [
      {
        _id: uuid(),
        firstName: 'Guest',
        lastName: 'User',
        username: 'guestuser',
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
        commentData: 'our darkest moments.',
      },
    ],
  },
  {
    _id: uuid(),
    content: "Keep your face always toward the sunshine, and shadows will fall behind you.",
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
        firstName: 'Guest',
        lastName: 'User',
        username: 'guestuser',
        createdAt: 2021,
        updatedAt: formatDate(),
        profile:
          'https://c8.alamy.com/zooms/9/c6f3f3c389b1482b8da4487bd00ad018/kfeagb.jpg',
        commentData: ' I am prepared enough to do this.',
      },
    ],
  },
  {
    _id: uuid(),
    content: "Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    imgContent:'https://perfecto-web.com/uploads/blog/2017/becomedev-motivation-en.jpg',
    firstName: 'Guest',
    lastName: 'User',
    username: 'guestuser',
    createdAt: 2016,
    updatedAt: formatDate(),
    profile:
      'https://c8.alamy.com/zooms/9/c6f3f3c389b1482b8da4487bd00ad018/kfeagb.jpg',
    comments:[]
  },
  {
    _id: uuid(),
    content: "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    imgContent:"https://i.pinimg.com/736x/27/8d/b4/278db4bb38d9345c97918d53448f7ef9.jpg",
    firstName: 'Namrata',
    lastName: 'Raikwar',
    username: 'namrataraikwar',
    createdAt: 2018,
    updatedAt: formatDate(),
    profile:
    'https://thumbs.dreamstime.com/b/software-language-programmer-avatar-software-language-programmer-avatar-vector-illustration-design-110589729.jpg',
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
        commentData: 'Am I OK with how I’m living today.',
      },
    ],
  },
  {
    _id: uuid(),
    content: "At the end of the day, whether or not those people are comfortable with how you’re living your life doesn’t matter. What matters is whether you’re comfortable with it.",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: 'Savanah',
    lastName: 'solis',
    username: 'savanahsolis',
    createdAt: 2020,
    updatedAt: formatDate(),
    profile:
    'https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg',
    comments: [
      {
        _id: uuid(),
        firstName: 'Namrata',
        lastName: 'Raikwar',
        username: 'namrataraikwar',
        createdAt: 2019,
        updatedAt: formatDate(),
        profile:
        'https://thumbs.dreamstime.com/b/software-language-programmer-avatar-software-language-programmer-avatar-vector-illustration-design-110589729.jpg',
        commentData: 'If life were predictable it would cease to be life.',
      },
    ],
  },
  {
    _id: uuid(),
    content: "You are the programmer write the code run the code.",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: [],
    },
    imgContent:"https://c4.wallpaperflare.com/wallpaper/350/659/616/programmer-code-notebooks-motivational-macbook-headphones-coffee-wallpaper-preview.jpg",
    firstName: 'Guest',
    lastName: 'User',
    username: 'guestuser',
    createdAt: 2016,
    updatedAt: formatDate(),
    profile:
      'https://c8.alamy.com/zooms/9/c6f3f3c389b1482b8da4487bd00ad018/kfeagb.jpg',
    comments:[{
    _id: uuid(),
      firstName: 'Damaris',
    lastName: 'Buck',
    username: 'damarisbuck',
    createdAt: 2021,
    updatedAt: formatDate(),
    profile:
      'https://cdn3.vectorstock.com/i/thumb-large/66/77/avatar-young-bearded-guy-brow-haired-man-vector-32416677.jpg',
      commentData: 'yeah!',
    }]
  },
  {
    _id: uuid(),
    content: "Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    imgContent:"https://media.istockphoto.com/photos/these-night-owls-always-work-with-dedication-picture-id1080277602?k=20&m=1080277602&s=612x612&w=0&h=q_dS31qsno3tzPKGsR2vdbOcqIiDexN6k4nO4w5ARXw=",
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
        username: 'johnkidd',
        createdAt: 2020,
        updatedAt: formatDate(),
        profile:
          'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png',
        commentData: 'life.',
      },
    ],
  },
]
