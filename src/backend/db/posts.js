import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",  
      likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName:"John",
    lastName: "Kidd",
    username:"kiddJohn",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profile: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png",
    comments:[{
      _id: uuid(),
      firstName:"Adarsh",
      lastName: "Balika",
      username:"adarshbalika",
      createdAt: formatDate(),
      updatedAt: formatDate(),
      profile:'https://c8.alamy.com/zooms/9/c6f3f3c389b1482b8da4487bd00ad018/kfeagb.jpg',
      comment:"Greate things take time."
    }]
  },
  
  {
    _id: uuid(),
    content:"Life is what happens when you're busy making other plans.",  
      likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName:"Damaris",
    lastName: "Buck",
    username:"damarisBuck",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profile: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png",
    comments:[{
      _id: uuid(),
      firstName:"Savanah",
      lastName: "solis",
      username:"savanahsolis",
      createdAt: formatDate(),
      updatedAt: formatDate(),
      profile:'https://c8.alamy.com/zooms/9/c6f3f3c389b1482b8da4487bd00ad018/kfeagb.jpg',
      comment:"If life were predictable it would cease to be life."
    }]
  },
  {
    _id: uuid(),
    content:"Life is what happens when you're busy making other plans.",  
      likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName:"Damaris",
    lastName: "Buck",
    username:"damarisBuck",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profile: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png",
    comments:[{
      _id: uuid(),
      firstName:"Savanah",
      lastName: "solis",
      username:"savanahsolis",
      createdAt: formatDate(),
      updatedAt: formatDate(),
      profile:'https://c8.alamy.com/zooms/9/c6f3f3c389b1482b8da4487bd00ad018/kfeagb.jpg',
      comment:"If life were predictable it would cease to be life."
    }]
  },
  {
    _id: uuid(),
    content:"Life is what happens when you're busy making other plans.",  
      likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName:"Damaris",
    lastName: "Buck",
    username:"damarisBuck",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profile: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png",
    comments:[{
      _id: uuid(),
      firstName:"Savanah",
      lastName: "solis",
      username:"savanahsolis",
      createdAt: formatDate(),
      updatedAt: formatDate(),
      profile:'https://c8.alamy.com/zooms/9/c6f3f3c389b1482b8da4487bd00ad018/kfeagb.jpg',
      comment:"If life were predictable it would cease to be life."
    }]
  },
  {
    _id: uuid(),
    content:"Life is what happens when you're busy making other plans.",  
      likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName:"Damaris",
    lastName: "Buck",
    username:"damarisBuck",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profile: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png",
    comments:[{
      _id: uuid(),
      firstName:"Savanah",
      lastName: "solis",
      username:"savanahsolis",
      createdAt: formatDate(),
      updatedAt: formatDate(),
      profile:'https://c8.alamy.com/zooms/9/c6f3f3c389b1482b8da4487bd00ad018/kfeagb.jpg',
      comment:"If life were predictable it would cease to be life."
    }]
  },
  {
    _id: uuid(),
    content:"Life is what happens when you're busy making other plans.",  
      likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName:"Damaris",
    lastName: "Buck",
    username:"damarisBuck",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profile: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png",
    comments:[{
      _id: uuid(),
      firstName:"Savanah",
      lastName: "solis",
      username:"savanahsolis",
      createdAt: formatDate(),
      updatedAt: formatDate(),
      profile:'https://c8.alamy.com/zooms/9/c6f3f3c389b1482b8da4487bd00ad018/kfeagb.jpg',
      comment:"If life were predictable it would cease to be life."
    }]
  },
  {
    _id: uuid(),
    content:"Life is what happens when you're busy making other plans.",  
      likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName:"Damaris",
    lastName: "Buck",
    username:"damarisBuck",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profile: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png",
    comments:[{
      _id: uuid(),
      firstName:"Savanah",
      lastName: "solis",
      username:"savanahsolis",
      createdAt: formatDate(),
      updatedAt: formatDate(),
      profile:'https://c8.alamy.com/zooms/9/c6f3f3c389b1482b8da4487bd00ad018/kfeagb.jpg',
      comment:"If life were predictable it would cease to be life."
    }]
  },
  {
    _id: uuid(),
    content:"Life is what happens when you're busy making other plans.",  
      likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName:"Damaris",
    lastName: "Buck",
    username:"damarisBuck",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profile: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png",
    comments:[{
      _id: uuid(),
      firstName:"Savanah",
      lastName: "solis",
      username:"savanahsolis",
      createdAt: formatDate(),
      updatedAt: formatDate(),
      profile:'https://c8.alamy.com/zooms/9/c6f3f3c389b1482b8da4487bd00ad018/kfeagb.jpg',
      comment:"If life were predictable it would cease to be life."
    }]
  },
  
];
