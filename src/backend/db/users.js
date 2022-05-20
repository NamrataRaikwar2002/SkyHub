import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    bio:"I am web developer.",
    link:"https://adarshbalika.netlify.app/",
    profile:"https://cdn.pixabay.com/photo/2017/01/30/23/52/female-2022387_960_720.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "John",
    lastName: "kidd",
    username: "kiddJohn",
    password: "kiddJohn123",
    bio:"I am web developer.",
    link:"https://adarshbalika.netlify.app/",
    profile:"https://cdn.pixabay.com/photo/2017/01/30/23/52/female-2022387_960_720.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Damaris",
    lastName: "Buck",
    username: "damarisBuck",
    password: "damarisBuck123",
    bio:"I am web developer.",
    link:"https://adarshbalika.netlify.app/",
    profile:"https://cdn.pixabay.com/photo/2017/01/30/23/52/female-2022387_960_720.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Savanah",
    lastName: "solis",
    username: "savanahsolis",
    password: "savanahsolis123",
    bio:"I am web developer.",
    link:"https://adarshbalika.netlify.app/",
    profile:"https://cdn.pixabay.com/photo/2017/01/30/23/52/female-2022387_960_720.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Brice",
    lastName: "Graham",
    username: "bricegraham",
    password: "adarshBalika123",
    bio:"I am web developer.",
    link:"https://adarshbalika.netlify.app/",
    profile:"https://cdn.pixabay.com/photo/2017/01/30/23/52/female-2022387_960_720.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Michael",
    lastName: "Kidd",
    username: "michaelkidd",
    password: "adarshBalika123",
    bio:"I am web developer.",
    link:"https://adarshbalika.netlify.app/",
    profile:"https://cdn.pixabay.com/photo/2017/01/30/23/52/female-2022387_960_720.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  }
];
