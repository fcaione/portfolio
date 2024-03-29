import Assembly from "../images/Assembly.png"
import Literary from "../images/LiteraryLounge.png"
import Mancala from "../images/Mancala.png"
import Swish from "../images/SwishSesh.png"
import Thredz from "../images/Thredz.png"

const projects = [
  {
    "title": "Thredz",
    "description": "E-commerce website with user-friendly listing creating, commenting and profile browsing functionalities. Add to cart and checkout functionality coming soon!",
    "tools": ["PostgreSQL", "Express", "React", "Node.js", "Stripe.js", "Tailwind"],
    "github": "https://github.com/fcaione/ecommerce-frontend",
    "deployed": "https://thredz.netlify.app/",
    "pc_image": Thredz
  },
  {
    "title": "Swish Sesh",
    "description": "Intramural basketball scheduling website with secure payment processing using stripe",
    "tools": ["MongoDB", "Express", "React", "Node.js", "Stripe.js", "Tailwind"],
    "github": "https://github.com/mannyaalonso/swish-sesh",
    "deployed": "https://swish-sesh.herokuapp.com/",
    "pc_image": Swish
  },
  {
    "title": "Assembly",
    "description": "Professional connections website for users to join organizations and connect with other professionals. Future updates included instant messaging and video chat functionality.",
    "tools": ["PostgreSQL", "Flask", "React", "Python", "Tailwind"],
    "github": "https://github.com/fcaione/assembly",
    "deployed": "https://assembly-react.netlify.app/",
    "pc_image": Assembly
  },
  {
    "title": "Literary Lounge",
    "description": "Book-review wesbite with full CRUD functionality and user authentication. Add new books, favorite books, and write reviews!",
    "tools": ["MongoDB", "Express", "React", "Node.js", "CSS"],
    "github": "https://github.com/fcaione/SocialReading",
    "deployed": "https://literarylounge.herokuapp.com/",
    "pc_image": Literary
  },
  {
    "title": "Mancala",
    "description": "Classic mancala with a cozy/8-bit theme. Click `Let's Play` and control both player 1 and player 2's moves. AI coming soon!",
    "tools": ["Javascript", "HTML", "CSS"],
    "github": "https://github.com/fcaione/Mancala",
    "deployed": "https://cozy-mancala.surge.sh/",
    "pc_image": Mancala
  },
]

export {projects}