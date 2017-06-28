var seedLabels = [
  { 
    id: "1",
    className: "green",
    name: "green",
  },
  {
    id: "2",
    className: "yellow",
    name: "yellow",
  },
  {
    id: "3",
    className: "orange",
    name: "orange",
  },
  {
    id: "4",
    className: "red",
    name: "red",
  },
  {
    id: "5",
    className: "purple",
    name: "purple",
  },
  {
    id: "6",
    className: "blue",
    name: "blue",
  },
];

var seedMembers = [
  {
    id: "1",
    initials: "VR",
    username: "vpr99",
    fullName: "Victor Reyes",
    memberBoardIds: ["1","2"],
    subscribedBoardIds: ["1", "2"],
    starredBoardIds: ["2"],
  },
  {
    id: "2",
    initials: "TP",
    username: "tp16",
    fullName: "Taylor Peat",
    memberBoardIds: ["1"],
    subscribedBoardIds: ["1"],
  },
  {
    id: "3",
    initials: "KW",
    username: "kevster44",
    fullName: "Kevin Wang",
    memberBoardIds: ["2"],
    subscribedBoardIds: ["2"],
  },
];

var seedImages = [
  {
    name: "chorizo.png",
    src: app.baseURL + "public/images/Mascots/chorizo.png",
    date: new Date(),
    cover: true,
  },
  {
    name: "pete.png",
    src: app.baseURL + "public/images/Mascots/pete.png",
    date: new Date(new Date() + 100000000),
    cover: false,
  },
];

var seedComments = [
  {
    cardId: "1",
    memberId: "1",
    date: new Date(),
    body: "This is a comment by the first member.",
  },
];

var seedChecklists1 = [
  {
    title: "First Checklist",
    checklistItems: [
      {
        description: "Completed checklist item",
        completed: true,
      },
      {
        description: "Another item",
        completed: false,
      },
    ],
  },
  {
    title: "Another Checklist",
    checklistItems: [
      {
        description: "The card on the main board will show current checklist progress.",
        completed: false,
      },
    ],
  },
];

var seedCards = [
  {
    id: "1",
    listId: "1",
    listSlot: 1,
    title: "Cards do many cool things. Click on this card to open it and learn more...",
    description: "Cards have a symbol to indicate if they contain a description.",
    labelIds: ["1","2"],
    memberIds: ["1","2"],
    comments: seedComments,
    dueDate: new Date(),
    completed: true,
    attachments: seedImages,
    checklists: seedChecklists1,
    subscribedMemberIds: ["1"],
  },
  {
    id: "2",
    listId: "2",
    listSlot: 2,
    title: "You can also change the background and more.",
  },
  {
    id: "3",
    listId: "1",
    listSlot: 3,
    title: "Another list with stuff",
    description: "Another description",
    memberIds: ["1"],
    dueDate: new Date(new Date() - 100000000),
    subscribedMemberIds: ["2"],
  },
  {
    id: "4",
    listId: "1",
    listSlot: 4,
    title: "Use the + in the top menu to make your first board now.",
  },
  {
    id: "5",
    listId: "3",
    listSlot: 1,
    title: "This is a card. Drag it onto \"Tried it\" to show it's done.",
  },
  {
    id: "6",
    listId: "2",
    listSlot: 1,
    dueDate: new Date(+new Date() + 100000000),
    title: "Add members to a board (via the sidebar to collaborate, share and discuss.",
  },
  {
    id: "7",
    listId: "3",
    listSlot: 2,
    title: "Add all the cards and lists you need",
    description: "Here's the description",
    labelIds: ["2"],
  },
  {
    id: "8",
    listId: "4",
    listSlot: 1,
    title: "Cards and lists can be moved in between boards as well.",
    memberIds: ["1"],
  },
  {
    id: "9",
    listId: "1",
    listSlot: 2,
    title: "Cards and lists can be archived and sent back to the board.",
    archived: true,
  },
  {
    id: "10",
    listId: "4",
    listSlot: 2,
    title: "A card for the second board.",
    description: "Filling space.",
    labelIds: ["1", "3"],
    memberIds: ["3"],
  },
];

var seedActivities = [
  {
    memberId: "1",
    cardId: "1",
    date: new Date(),
    comment: false,
    description: "changed the due date of this card to Nov 9 at 12:00 PM",
  },
  {
    memberId: "1",
    cardId: "1",
    date: new Date(),
    comment: false,
    description: "added fasd to this card",
  },
  {
    memberId: "1",
    cardId: "1",
    date: new Date(),
    comment: false,
    description: "moved this card lower",
  }
];


var seedListsBoard1 = [
  {
    id: "1",
    title: "Stuff to try (this is a list)",
    subscribedMemberIds: ["1"],
  },
  {
    id: "2",
    title: "Tried it (another list)",
  },
  {
    id: "3",
    title: "Third List",
  },
];

var seedListsBoard2 = [
  {
    id: "4",
    listOrder: 1,
    title: "Second Board List",
  },
];

var seedBackgrounds = [
  { 
    id: '1',
    type: 'color',
    name: 'dark-cyan',
    color: "#0079BF",
    darkFont: false,
  },
  { 
    id: '2',  
    type: 'color',
    name: 'orange',
    color: "#D29034",
    darkFont: false,
  },
  { 
    id: '3',  
    type: 'color',
    name: 'olive',
    color: "#519839",
    darkFont: false,
  },
  { 
    id: '4',  
    type: 'color',
    name: 'red',
    color: "#B04632",
    darkFont: false,
  },
  { 
    id: '5',  
    type: 'color',
    name: 'pink',
    color: "#89609E",
    darkFont: false,
  },
  { 
    id: '6',  
    type: 'color',
    name: 'violet',
    color: "#CD5A91",
    darkFont: false,
  },
  { 
    id: '7',  
    type: 'color',
    name: 'green',
    color: "#4BBF6B",
    darkFont: false,
  },
  { 
    id: '8',  
    type: 'color',
    name: 'turquoise',
    color: "#00AECC",
    darkFont: false,
  },
  { 
    id: '9',  
    type: 'color',
    name: 'gray',
    color: "#838C91",
    darkFont: false,
  },
  { 
    id: '10',
    type: 'image',
    name: 'baells',
    image: app.baseURL + 'public/images/backgrounds/images/baells.jpg',
    thumb: app.baseURL + 'public/images/backgrounds/thumbs/baells.jpg',
    size: 'cover',
    color: "#FFF",
    darkFont: false,
  },
  { 
    id: '11',
    type: 'image',
    name: 'hubble',
    image: app.baseURL + 'public/images/backgrounds/images/hubble.jpg',
    thumb: app.baseURL + 'public/images/backgrounds/thumbs/hubble.jpg',
    size: 'cover',
    color: "#FFF",
    darkFont: false,
  },
  { 
    id: '12',
    type: 'image',
    name: 'rain',
    image: app.baseURL + 'public/images/backgrounds/images/rain.jpg',
    thumb: app.baseURL + 'public/images/backgrounds/thumbs/rain.jpg',
    size: 'cover',
    color: "#FFF",
    darkFont: false,
  },
  { 
    id: '13',
    type: 'image',
    name: 'dew',
    image: app.baseURL + 'public/images/backgrounds/images/dew.jpg',
    thumb: app.baseURL + 'public/images/backgrounds/thumbs/dew.jpg',
    size: 'cover',
    color: "#FFF",
    darkFont: true,
  },
  { 
    id: '14',
    type: 'image',
    name: 'snowflakes',
    image: app.baseURL + 'public/images/backgrounds/images/snowflakes.jpg',
    thumb: app.baseURL + 'public/images/backgrounds/thumbs/snowflakes.jpg',
    size: 'cover',
    color: "#FFF",
    darkFont: false,
  },
  { 
    id: '15',
    type: 'image',
    name: 'new-york',
    image: app.baseURL + 'public/images/backgrounds/images/new-york.jpg',
    thumb: app.baseURL + 'public/images/backgrounds/thumbs/new-york.jpg',
    size: 'cover',
    color: "#FFF",
    darkFont: false,
  },
  { 
    id: '16',
    type: 'image',
    name: 'glen-canyon',
    image: app.baseURL + 'public/images/backgrounds/images/glen-canyon.jpg',
    thumb: app.baseURL + 'public/images/backgrounds/thumbs/glen-canyon.jpg',
    size: 'cover',
    color: "#FFF",
    darkFont: true,
  },
  { 
    id: '17',
    type: 'image',
    name: 'maldives',
    image: app.baseURL + 'public/images/backgrounds/images/maldives.jpg',
    thumb: app.baseURL + 'public/images/backgrounds/thumbs/maldives.jpg',
    size: 'cover',
    color: "#FFF",
    darkFont: false,
  },
  { 
    id: '18',
    type: 'image',
    name: 'pond',
    image: app.baseURL + 'public/images/backgrounds/images/pond.jpg',
    thumb: app.baseURL + 'public/images/backgrounds/thumbs/pond.jpg',
    size: 'cover',
    color: "#FFF",
    darkFont: false,
  },
  { 
    id: '19',
    type: 'pattern',
    name: 'purty_wood_dark',
    image: app.baseURL + 'public/images/backgrounds/patterns/purty_wood_dark.png',
    thumb: app.baseURL + 'public/images/backgrounds/patterns/purty_wood_dark.png',
    size: 'auto',
    color: "#FFF",
    darkFont: false,
  },
  { 
    id: '20',
    type: 'pattern',
    name: 'irongrip',
    image: app.baseURL + 'public/images/backgrounds/patterns/irongrip.png',
    thumb: app.baseURL + 'public/images/backgrounds/patterns/irongrip.png',
    size: 'auto',
    color: "#FFF",
    darkFont: false,
  },
  { 
    id: '21',
    type: 'pattern',
    name: 'wild_oliva',
    image: app.baseURL + 'public/images/backgrounds/patterns/wild_oliva.png',
    thumb: app.baseURL + 'public/images/backgrounds/patterns/wild_oliva.png',
    size: 'auto',
    color: "#FFF",
    darkFont: false,
  },
  { 
    id: '22',
    type: 'pattern',
    name: 'hex',
    image: app.baseURL + 'public/images/backgrounds/patterns/hex.png',
    thumb: app.baseURL + 'public/images/backgrounds/patterns/hex.png',
    size: 'auto',
    color: "#FFF",
    darkFont: false,
  },
  { 
    id: '23',
    type: 'pattern',
    name: 'wave',
    image: app.baseURL + 'public/images/backgrounds/patterns/wave.png',
    thumb: app.baseURL + 'public/images/backgrounds/patterns/wave.png',
    size: 'auto',
    color: "#FFF",
    darkFont: false,
  },
  { 
    id: '24',
    type: 'pattern',
    name: 'bricks',
    image: app.baseURL + 'public/images/backgrounds/patterns/bricks.png',
    thumb: app.baseURL + 'public/images/backgrounds/patterns/bricks.png',
    size: 'auto',
    color: "#FFF",
    darkFont: false,
  },
  { 
    id: '25',
    type: 'pattern',
    name: 'purple-blur',
    image: app.baseURL + 'public/images/backgrounds/patterns/purple-blur.png',
    thumb: app.baseURL + 'public/images/backgrounds/patterns/purple-blur.png',
    size: 'cover',
    color: "#FFF",
    darkFont: false,
  },
  { 
    id: '26',
    type: 'pattern',
    name: 'orange-blur',
    image: app.baseURL + 'public/images/backgrounds/patterns/orange-blur.png',
    thumb: app.baseURL + 'public/images/backgrounds/patterns/orange-blur.png',
    size: 'cover',
    color: "#FFF",
    darkFont: false,
  },
  { 
    id: '27',
    type: 'pattern',
    name: 'random_grey_variations',
    image: app.baseURL + 'public/images/backgrounds/patterns/random_grey_variations.png',
    thumb: app.baseURL + 'public/images/backgrounds/patterns/random_grey_variations.png',
    size: 'auto',
    color: "#FFF",
    darkFont: false,
  },
];

var seedBoards = [
  {
    id: "1",
    title: "My Title",
    visibility: "private",
    memberIds: ["1", "2"],
    adminMemberIds: ["2"],
    customLabels: ["1"],
    localStorageKey: "board_1",
    lists: seedListsBoard1,
    backgrounds: seedBackgrounds,
    backgroundId: "1",
  },
  {
    id: "2",
    title: "Second Board",
    visibility: "private",
    memberIds: ["1"],
    customLabels: ["2"],
    localStorageKey: "board_2",
    lists: seedListsBoard2,
    backgrounds: seedBackgrounds,
    backgroundId: "2",
  }
];