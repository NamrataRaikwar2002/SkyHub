import { v4 as uuid } from 'uuid'
import { formatDate } from '../utils/authUtils'
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: '1',
    firstName: 'Adarsh',
    lastName: 'Balika',
    username: 'adarshbalika',
    password: 'adarshBalika123',
    bio: 'I am web developer.',
    link: 'https://adarshbalika.netlify.app/',
    profile:
      'https://c8.alamy.com/zooms/9/c6f3f3c389b1482b8da4487bd00ad018/kfeagb.jpg',
    createdAt: 2018,
    updatedAt: formatDate(),
  },
  {
    _id: '2',
    firstName: 'John',
    lastName: 'kiddser',
    username: 'johnkidd',
    password: 'kiddJohn123',
    bio: 'I am web developer.',
    link: 'https://adarshbalika.netlify.app/',
    profile:
      'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png',
    createdAt: 2016,
    updatedAt: formatDate(),
  },
  {
    _id: '3',
    firstName: 'Damaris',
    lastName: 'Buck',
    username: 'damarisbuck',
    password: 'damarisBuck123',
    bio: 'I am web developer.',
    link: 'https://adarshbalika.netlify.app/',
    profile:
      'https://cdn3.vectorstock.com/i/thumb-large/66/77/avatar-young-bearded-guy-brow-haired-man-vector-32416677.jpg',
    createdAt: 2019,
    updatedAt: formatDate(),
  },
  {
    _id: '4',
    firstName: 'Savanah',
    lastName: 'solis',
    username: 'savanahsolis',
    password: 'savanahsolis123',
    bio: 'I am web developer.',
    link: 'https://adarshbalika.netlify.app/',
    profile:
      'https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg',
    createdAt: 2020,
    updatedAt: formatDate(),
  },
  {
    _id: '5',
    firstName: 'Namrata',
    lastName: 'Raikwar',
    username: 'namrataraikwar',
    password: 'namrata123',
    bio: 'I am web developer.',
    link: 'https://adarshbalika.netlify.app/',
    profile:
      'https://thumbs.dreamstime.com/b/software-language-programmer-avatar-software-language-programmer-avatar-vector-illustration-design-110589729.jpg',
    createdAt: 2018,
    updatedAt: formatDate(),
  },
]
