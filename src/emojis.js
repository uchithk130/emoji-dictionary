const emojis = [
  {
    id: 1,
    image: "😀",
    name: "Grinning Face",
    description:
      "A smiling yellow face with a big grin, showing both the upper and lower teeth. Often used to convey happiness, joy, or excitement."
  },
  {
    id: 2,
    image: "😃",
    name: "Beaming Face with Smiling Eyes",
    description:
      "A bright yellow face with an open smile and smiling eyes. It radiates positivity and happiness, often used to express joy and satisfaction."
  },
  {
    id: 3,
    image: "😄",
    name: "Happy Face with Open Mouth",
    description:
      "A cheerful yellow face with a wide open smile, displaying both the upper and lower teeth. It reflects genuine happiness and delight."
  },
  {
    id: 4,
    image: "😁",
    name: "Grinning Face with Smiling Eyes",
    description:
      "A smiling yellow face with a broad grin and smiling eyes. It's commonly used to express joy, amusement, or happiness."
  },
  {
    id: 5,
    image: "😆",
    name: "Grinning Squinting Face",
    description:
      "A happy yellow face with a wide open grin and squinting eyes, often used to convey laughter, amusement, or a mischievous mood."
  },
  {
    id: 6,
    image: "😅",
    name: "Grinning Face with Sweat",
    description:
      "A smiling yellow face with an open grin and bead-like sweat on its forehead. It's used to express relief, accomplishment, or effort."
  },
  {
    id: 7,
    image: "🤣",
    name: "Rolling On The Floor Laughing",
    description:
      "A yellow face with tears streaming down its cheeks from hearty laughter. It signifies uncontrollable laughter and amusement."
  },
  {
    id: 8,
    image: "😂",
    name: "Face with Tears of Joy",
    description:
      "A laughing yellow face with tears of joy streaming from its eyes. Often used to indicate extreme laughter and amusement."
  },
  {
    id: 9,
    image: "😊",
    name: "Smiling Face with Smiling Eyes",
    description:
      "A smiling yellow face with a gentle smile and smiling eyes. It conveys warmth, friendliness, and happiness."
  },
  {
    id: 10,
    image: "😇",
    name: "Smiling Face with Halo",
    description:
      "A smiling yellow face with a golden halo above its head. It represents innocence, purity, or a good deed."
  },
  {
    id: 11,
    image: "🙂",
    name: "Slightly Smiling Face",
    description:
      "A slightly smiling yellow face with a subtle, closed-mouth smile. It signifies a mild or understated expression of happiness."
  },
  {
    id: 12,
    image: "🙃",
    name: "Upside-Down Face",
    description:
      "An upside-down yellow face with a playful, mischievous smile. It can convey a sense of humor or silliness."
  },
  {
    id: 13,
    image: "😉",
    name: "Winking Face",
    description:
      "A yellow face with one eye closed and a winking expression. Often used to indicate humor, flirtation, or playfulness."
  },
  {
    id: 14,
    image: "😌",
    name: "Relieved Face",
    description:
      "A content yellow face with a relaxed, closed-eyed smile. It expresses relief, satisfaction, or a tranquil state of mind."
  },
  {
    id: 15,
    image: "😍",
    name: "Heart Eyes",
    description:
      "A yellow face with heart-shaped eyes, indicating deep affection or admiration. Often used to express love or admiration for someone or something."
  },
  {
    id: 16,
    image: "😘",
    name: "Face Blowing a Kiss",
    description:
      "A yellow face sending a kiss with puckered lips. It conveys affection, love, or gratitude."
  },
  {
    id: 17,
    image: "😗",
    name: "Kissing Face",
    description:
      "A yellow face with puckered lips and one eye open, sending a kiss. It's often used to express affection or goodnight wishes."
  },
  {
    id: 18,
    image: "😙",
    name: "Kissing Face with Smiling Eyes",
    description:
      "A yellow face with puckered lips, one eye open, and a smiling expression. It's used to express affection, gratitude, or happiness."
  },
  {
    id: 19,
    image: "😚",
    name: "Kissing Face with Closed Eyes",
    description:
      "A yellow face with puckered lips, closed eyes, and a gentle smile. It's often used to convey a loving and affectionate kiss."
  },
  {
    id: 20,
    image: "😋",
    name: "Face Savoring Food",
    description:
      "A yellow face with a closed smile and a tongue sticking out. It's used to express enjoyment of delicious food or flavors."
  },
  {
    id: 21,
    image: "😛",
    name: "Face with Tongue",
    description:
      "A yellow face with a playful, mischievous expression and a tongue sticking out. It's often used to indicate silliness or playfulness."
  },
  {
    id: 22,
    image: "😜",
    name: "Winking Face with Tongue",
    description:
      "A yellow face with one eye closed, a winking expression, and a tongue sticking out. It's used to convey humor, playfulness, or flirtation."
  },
  {
    id: 23,
    image: "🤪",
    name: "Crazy Face",
    description:
      "A yellow face with a zany, wild expression and a tongue sticking out. It's used to convey silliness, craziness, or excitement."
  },
  {
    id: 24,
    image: "😝",
    name: "Squinting Face with Tongue",
    description:
      "A yellow face with tightly closed eyes, a squinting expression, and a tongue sticking out. It's often used to express joking or teasing."
  },
  {
    id: 25,
    image: "🤗",
    name: "Hugging Face",
    description:
      "A yellow face with open arms, giving a hug. It signifies affection, warmth, and a desire for closeness."
  },
  {
    id: 26,
    image: "🤔",
    name: "Thinking Face",
    description:
      "A yellow face with raised eyebrows and a finger resting on the chin. It conveys deep thought, contemplation, or uncertainty."
  },
  {
    id: 27,
    image: "🙄",
    name: "Face with Rolling Eyes",
    description:
      "A yellow face with large, expressive eyes rolling upward. It's often used to convey annoyance, sarcasm, or disbelief."
  },
  {
    id: 28,
    image: "😒",
    name: "Unamused Face",
    description:
      "A yellow face with a flat, closed expression and downcast eyes. It's used to convey boredom, annoyance, or dissatisfaction."
  },
  {
    id: 29,
    image: "😞",
    name: "Disappointed Face",
    description:
      "A yellow face with a frown and closed, downcast eyes. It expresses disappointment, sadness, or regret."
  },
  {
    id: 30,
    image: "😔",
    name: "Pensive Face",
    description:
      "A yellow face with a sad, slightly downturned expression and closed, downcast eyes. It conveys thoughtfulness, sadness, or concern."
  },
  {
    id: 31,
    image: "😌",
    name: "Relieved Face",
    description:
      "A content yellow face with a relaxed, closed-eyed smile. It expresses relief, satisfaction, or a tranquil state of mind."
  },
  {
    id: 32,
    image: "😢",
    name: "Crying Face",
    description:
      "A yellow face with closed, downturned eyes and a single tear falling from one eye. It signifies sadness, grief, or hurt."
  },
  {
    id: 33,
    image: "😭",
    name: "Loudly Crying Face",
    description:
      "A yellow face with closed, downturned eyes and streams of tears flowing from both eyes. It signifies intense sadness, heartbreak, or despair."
  },
  {
    id: 34,
    image: "😪",
    name: "Sleepy Face",
    description:
      "A yellow face with closed eyes and a slight frown. It indicates tiredness, sleepiness, or weariness."
  },
  {
    id: 35,
    image: "😥",
    name: "Sad but Relieved Face",
    description:
      "A yellow face with a frown and closed, downcast eyes, but a relieved, open-mouthed smile. It conveys mixed feelings of sadness and relief."
  },
  {
    id: 36,
    image: "😰",
    name: "Anxious Face with Sweat",
    description:
      "A yellow face with wide, open eyes and a big bead of sweat on its forehead. It represents anxiety, nervousness, or stress."
  },
  {
    id: 37,
    image: "😅",
    name: "Grinning Face with Sweat",
    description:
      "A smiling yellow face with a bead of sweat on its forehead. It's used to express relief, accomplishment, or effort."
  },
  {
    id: 38,
    image: "😓",
    name: "Downcast Face with Sweat",
    description:
      "A yellow face with closed eyes and a drop of sweat on its forehead. It conveys exhaustion, fatigue, or physical strain."
  },
  {
    id: 39,
    image: "🥺",
    name: "Pleading Face",
    description:
      "A yellow face with puppy dog eyes and a small, closed mouth. It's often used to convey a pleading or begging emotion."
  },
  {
    id: 40,
    image: "😔",
    name: "Pensive Face",
    description:
      "A yellow face with a sad, slightly downturned expression and closed, downcast eyes. It conveys thoughtfulness, sadness, or concern."
  },
  {
    id: 41,
    image: "😖",
    name: "Confounded Face",
    description:
      "A yellow face with a crumpled mouth and a quizzical expression. It conveys confusion, frustration, or bewilderment."
  },
  {
    id: 42,
    image: "😣",
    name: "Suffering Face",
    description:
      "A yellow face with closed eyes, eyebrows furrowed, and a trembling mouth. It signifies suffering, pain, or distress."
  },
  {
    id: 43,
    image: "😞",
    name: "Disappointed Face",
    description:
      "A yellow face with a frown and closed, downcast eyes. It expresses disappointment, sadness, or regret."
  },
  {
    id: 44,
    image: "😓",
    name: "Downcast Face with Sweat",
    description:
      "A yellow face with closed eyes and a drop of sweat on its forehead. It conveys exhaustion, fatigue, or physical strain."
  },
  {
    id: 45,
    image: "😩",
    name: "Weary Face",
    description:
      "A yellow face with closed eyes and a downcast expression, often accompanied by a bead of sweat. It represents weariness, frustration, or despair."
  },
  {
    id: 46,
    image: "🥵",
    name: "Hot Face",
    description:
      "A yellow face with closed eyes, a red mask-like pattern on its forehead, and bead-like sweat droplets. It signifies extreme heat, stress, or discomfort."
  },
  {
    id: 47,
    image: "🥶",
    name: "Cold Face",
    description:
      "A blue face with clenched teeth and icicles hanging from its cheeks. It represents extreme cold or discomfort."
  },
  {
    id: 48,
    image: "😵",
    name: "Dizzy Face",
    description:
      "A yellow face with a staggered, closed-eyed expression and a spiraling pattern above its head. It conveys dizziness, disorientation, or being overwhelmed."
  },
  {
    id: 49,
    image: "😡",
    name: "Pouting Face",
    description:
      "A red face with an angry, pouting expression and furrowed eyebrows. It signifies anger, frustration, or annoyance."
  },
  {
    id: 50,
    image: "😠",
    name: "Angry Face",
    description:
      "A red face with an intense, angry expression and clenched teeth. It signifies strong anger, rage, or displeasure."
  },
    {
      id: 51,
      image: "😤",
      name: "Face with Steam From Nose",
      description:
        "A yellow face with closed eyes, a furrowed brow, and a puff of steam coming from its nose. It signifies frustration, anger, or annoyance."
    },
    {
      id: 52,
      image: "😷",
      name: "Face with Medical Mask",
      description:
        "A yellow face with closed eyes and a surgical mask covering its nose and mouth. It's often used to convey illness, health concerns, or protection."
    },
    {
      id: 53,
      image: "🤒",
      name: "Face with Thermometer",
      description:
        "A yellow face with a thermometer in its mouth and a concerned expression. It represents illness, fever, or feeling unwell."
    },
    {
      id: 54,
      image: "🤕",
      name: "Face with Head-Bandage",
      description:
        "A yellow face with a white bandage wrapped around its head, covering one eye. It signifies injury, pain, or feeling unwell."
    },
    {
      id: 55,
      image: "🤢",
      name: "Nauseated Face",
      description:
        "A green face with an unsettled expression and a hand over its mouth. It conveys nausea, sickness, or disgust."
    },
    {
      id: 56,
      image: "🤮",
      name: "Face Vomiting",
      description:
        "A green face with one eye closed and vomit spewing from its mouth. It signifies vomiting or feeling extremely sick."
    },
    {
      id: 57,
      image: "🤧",
      name: "Sneezing Face",
      description:
        "A yellow face with closed eyes and a tissue held to its nose, as if sneezing or blowing its nose. It represents sneezing or having a cold."
    },
    {
      id: 58,
      image: "😇",
      name: "Smiling Face with Halo",
      description:
        "A smiling yellow face with a golden halo above its head. It represents innocence, purity, or a good deed."
    },
    {
      id: 59,
      image: "🥺",
      name: "Pleading Face",
      description:
        "A yellow face with puppy dog eyes and a small, closed mouth. It's often used to convey a pleading or begging emotion."
    },
    {
      id: 60,
      image: "🤥",
      name: "Lying Face",
      description:
        "A yellow face with a long, Pinocchio-like nose. It signifies dishonesty, deceit, or telling a lie."
    },
    {
      id: 61,
      image: "🤫",
      name: "Shushing Face",
      description:
        "A yellow face with one finger held to its lips in a shushing gesture. It represents silence, secrecy, or keeping a secret."
    },
    {
      id: 62,
      image: "🤭",
      name: "Face with Hand Over Mouth",
      description:
        "A yellow face with a hand covering its mouth, as if gasping, giggling, or surprised. It conveys shock, surprise, or laughter."
    },
    {
      id: 63,
      image: "🧐",
      name: "Face with Monocle",
      description:
        "A yellow face with one eyebrow raised and a single eyeglass or monocle over one eye. It signifies curiosity or a scrutinizing gaze."
    },
    {
      id: 64,
      image: "😬",
      name: "Grimacing Face",
      description:
        "A yellow face with a forced smile, showing clenched teeth. It represents discomfort, awkwardness, or nervousness."
    },
    {
      id: 65,
      image: "🥴",
      name: "Woozy Face",
      description:
        "A yellow face with a crooked smile and closed, spiraling eyes. It signifies dizziness, intoxication, or feeling disoriented."
    },
    {
      id: 66,
      image: "🤒",
      name: "Face with Thermometer",
      description:
        "A yellow face with a thermometer in its mouth and a concerned expression. It represents illness, fever, or feeling unwell."
    },
    {
      id: 67,
      image: "🤕",
      name: "Face with Head-Bandage",
      description:
        "A yellow face with a white bandage wrapped around its head, covering one eye. It signifies injury, pain, or feeling unwell."
    },
    {
      id: 68,
      image: "🤢",
      name: "Nauseated Face",
      description:
        "A green face with an unsettled expression and a hand over its mouth. It conveys nausea, sickness, or disgust."
    },
    {
      id: 69,
      image: "🤮",
      name: "Face Vomiting",
      description:
        "A green face with one eye closed and vomit spewing from its mouth. It signifies vomiting or feeling extremely sick."
    },
    {
      id: 70,
      image: "🤧",
      name: "Sneezing Face",
      description:
        "A yellow face with closed eyes and a tissue held to its nose, as if sneezing or blowing its nose. It represents sneezing or having a cold."
    },
    {
      id: 71,
      image: "🤒",
      name: "Face with Thermometer",
      description:
        "A yellow face with a thermometer in its mouth and a concerned expression. It represents illness, fever, or feeling unwell."
    },
    {
      id: 72,
      image: "🤕",
      name: "Face with Head-Bandage",
      description:
        "A yellow face with a white bandage wrapped around its head, covering one eye. It signifies injury, pain, or feeling unwell."
    },
    {
      id: 73,
      image: "🤢",
      name: "Nauseated Face",
      description:
        "A green face with an unsettled expression and a hand over its mouth. It conveys nausea, sickness, or disgust."
    },
    {
      id: 74,
      image: "🤮",
      name: "Face Vomiting",
      description:
        "A green face with one eye closed and vomit spewing from its mouth. It signifies vomiting or feeling extremely sick."
    },
    {
      id: 75,
      image: "🤧",
      name: "Sneezing Face",
      description:
        "A yellow face with closed eyes and a tissue held to its nose, as if sneezing or blowing its nose. It represents sneezing or having a cold."
    },
    {
      id: 76,
      image: "😇",
      name: "Smiling Face with Halo",
      description:
        "A smiling yellow face with a golden halo above its head. It represents innocence, purity, or a good deed."
    },
    {
      id: 77,
      image: "🥺",
      name: "Pleading Face",
      description:
        "A yellow face with puppy dog eyes and a small, closed mouth. It's often used to convey a pleading or begging emotion."
    },
    {
      id: 78,
      image: "🤥",
      name: "Lying Face",
      description:
        "A yellow face with a long, Pinocchio-like nose. It signifies dishonesty, deceit, or telling a lie."
    },
    {
      id: 79,
      image: "🤫",
      name: "Shushing Face",
      description:
        "A yellow face with one finger held to its lips in a shushing gesture. It represents silence, secrecy, or keeping a secret."
    },
    {
      id: 80,
      image: "🤭",
      name: "Face with Hand Over Mouth",
      description:
        "A yellow face with a hand covering its mouth, as if gasping, giggling, or surprised. It conveys shock, surprise, or laughter."
    },
    {
      id: 81,
      image: "🧐",
      name: "Face with Monocle",
      description:
        "A yellow face with one eyebrow raised and a single eyeglass or monocle over one eye. It signifies curiosity or a scrutinizing gaze."
    },
    {
      id: 82,
      image: "😬",
      name: "Grimacing Face",
      description:
        "A yellow face with a forced smile, showing clenched teeth. It represents discomfort, awkwardness, or nervousness."
    },
    {
      id: 83,
      image: "🥴",
      name: "Woozy Face",
      description:
        "A yellow face with a crooked smile and closed, spiraling eyes. It signifies dizziness, intoxication, or feeling disoriented."
    },
    {
      id: 84,
      image: "😫",
      name: "Tired Face",
      description:
        "A yellow face with closed eyes, a slight frown, and a blue bead of sweat on its forehead. It represents exhaustion or fatigue."
    },
    {
      id: 85,
      image: "😩",
      name: "Weary Face",
      description:
        "A yellow face with closed eyes and a downcast expression, often accompanied by a bead of sweat. It represents weariness, frustration, or despair."
    },
    {
      id: 86,
      image: "🥵",
      name: "Hot Face",
      description:
        "A yellow face with closed eyes, a red mask-like pattern on its forehead, and bead-like sweat droplets. It signifies extreme heat, stress, or discomfort."
    },
    {
      id: 87,
      image: "🥶",
      name: "Cold Face",
      description:
        "A blue face with clenched teeth and icicles hanging from its cheeks. It represents extreme cold or discomfort."
    },
    {
      id: 88,
      image: "😵",
      name: "Dizzy Face",
      description:
        "A yellow face with a staggered, closed-eyed expression and a spiraling pattern above its head. It conveys dizziness, disorientation, or being overwhelmed."
    },
    {
      id: 89,
      image: "😡",
      name: "Pouting Face",
      description:
        "A red face with an angry, pouting expression and furrowed eyebrows. It signifies anger, frustration, or annoyance."
    },
    {
      id: 90,
      image: "😠",
      name: "Angry Face",
      description:
        "A red face with an intense, angry expression and clenched teeth. It signifies strong anger, rage, or displeasure."
    },
    {
      id: 91,
      image: "😤",
      name: "Face with Steam From Nose",
      description:
        "A yellow face with closed eyes, a furrowed brow, and a puff of steam coming from its nose. It signifies frustration, anger, or annoyance."
    },
    {
      id: 92,
      image: "😷",
      name: "Face with Medical Mask",
      description:
        "A yellow face with closed eyes and a surgical mask covering its nose and mouth. It's often used to convey illness, health concerns, or protection."
    },
    {
      id: 93,
      image: "🤒",
      name: "Face with Thermometer",
      description:
        "A yellow face with a thermometer in its mouth and a concerned expression. It represents illness, fever, or feeling unwell."
    },
    {
      id: 94,
      image: "🤕",
      name: "Face with Head-Bandage",
      description:
        "A yellow face with a white bandage wrapped around its head, covering one eye. It signifies injury, pain, or feeling unwell."
    },
    {
      id: 95,
      image: "🤢",
      name: "Nauseated Face",
      description:
        "A green face with an unsettled expression and a hand over its mouth. It conveys nausea, sickness, or disgust."
    },
    {
      id: 96,
      image: "🤮",
      name: "Face Vomiting",
      description:
        "A green face with one eye closed and vomit spewing from its mouth. It signifies vomiting or feeling extremely sick."
    },
    {
      id: 97,
      image: "🤧",
      name: "Sneezing Face",
      description:
        "A yellow face with closed eyes and a tissue held to its nose, as if sneezing or blowing its nose. It represents sneezing or having a cold."
    },
    {
      id: 98,
      image: "😇",
      name: "Smiling Face with Halo",
      description:
        "A smiling yellow face with a golden halo above its head. It represents innocence, purity, or a good deed."
    },
    {
      id: 99,
      image: "🥺",
      name: "Pleading Face",
      description:
        "A yellow face with puppy dog eyes and a small, closed mouth. It's often used to convey a pleading or begging emotion."
    },
    {
      id: 100,
      image: "🤥",
      name: "Lying Face",
      description:
        "A yellow face with a long, Pinocchio-like nose. It signifies dishonesty, deceit, or telling a lie."
    } ,
      {
        id: 201,
        image: "🍎",
        name: "Red Apple",
        description:
          "A classic red apple with a green leaf and a yellow shine. Often used to represent apples or healthy eating."
      },
      {
        id: 202,
        image: "🍇",
        name: "Grapes",
        description:
          "A bunch of purple grapes with a green stem. It signifies grapes or the act of winemaking."
      },
      {
        id: 203,
        image: "🍓",
        name: "Strawberry",
        description:
          "A red strawberry with a green leafy top. It represents strawberries or the sweetness of fruit."
      },
      {
        id: 204,
        image: "🍒",
        name: "Cherries",
        description:
          "Two red cherries with green stems. Often used to symbolize cherries or something sweet and delightful."
      },
      {
        id: 205,
        image: "🍑",
        name: "Peach",
        description:
          "A ripe, orange peach with a leaf. It signifies peaches or the idea of something being just right or perfect."
      },
      {
        id: 206,
        image: "🥭",
        name: "Mango",
        description:
          "A tropical mango with green, orange, and yellow colors. Often used to represent mango fruit."
      },
      {
        id: 207,
        image: "🥦",
        name: "Broccoli",
        description:
          "A green broccoli floret. It represents broccoli or healthy eating."
      },
      {
        id: 208,
        image: "🥕",
        name: "Carrot",
        description:
          "A bright orange carrot with a green top. It signifies carrots or healthy eating."
      },
      {
        id: 209,
        image: "🌽",
        name: "Ear of Corn",
        description:
          "An ear of corn with golden kernels and green leaves. Often used to represent corn or harvest season."
      },
      {
        id: 210,
        image: "🍅",
        name: "Tomato",
        description:
          "A red tomato with a green stem. It represents tomatoes or fresh produce."
      },
      {
        id: 211,
        image: "🥒",
        name: "Cucumber",
        description:
          "A green cucumber with white stripes. Often used to symbolize cucumbers or healthy eating."
      },
      {
        id: 212,
        image: "🌶️",
        name: "Hot Pepper",
        description:
          "A red hot pepper with a green stem. It signifies spicy food or heat."
      },
      {
        id: 213,
        image: "🥬",
        name: "Leafy Green",
        description:
          "A leafy green vegetable, often used to represent salads or healthy eating."
      },
      {
        id: 214,
        image: "🥔",
        name: "Potato",
        description:
          "A brown potato with a few eyes. It represents potatoes or comfort food."
      },
      {
        id: 215,
        image: "🍠",
        name: "Sweet Potato",
        description:
          "An orange sweet potato. Often used to represent sweet potatoes or Thanksgiving dishes."
      },
      {
        id: 216,
        image: "🌰",
        name: "Chestnut",
        description:
          "A brown chestnut. It represents chestnuts or the holiday season."
      },
      {
        id: 217,
        image: "🍞",
        name: "Bread",
        description:
          "A loaf of bread with a golden crust. Often used to represent bread or baked goods."
      },
      {
        id: 218,
        image: "🥖",
        name: "Baguette Bread",
        description:
          "A long, French baguette with a golden crust. It signifies baguette bread or French cuisine."
      },
      {
        id: 219,
        image: "🥨",
        name: "Pretzel",
        description:
          "A twisted pretzel with a golden-brown color. Often used to represent pretzels or snacks."
      },
      {
        id: 220,
        image: "🥐",
        name: "Croissant",
        description:
          "A flaky croissant with a golden-brown color. It signifies croissants or French pastries."
      },
      {
        id: 221,
        image: "🥯",
        name: "Bagel",
        description:
          "A round bagel with a hole in the center. Often used to represent bagels or breakfast foods."
      },
      {
        id: 222,
        image: "🍔",
        name: "Hamburger",
        description:
          "A classic hamburger with a patty, lettuce, and cheese. Often used to represent hamburgers or fast food."
      },
      {
        id: 223,
        image: "🍟",
        name: "French Fries",
        description:
          "A serving of hot, crispy French fries. Often used to represent French fries or fast food."
      },
      {
        id: 224,
        image: "🍕",
        name: "Pizza",
        description:
          "A slice of pizza with cheese and pepperoni. Often used to represent pizza or Italian cuisine."
      },
      {
        id: 225,
        image: "🌭",
        name: "Hot Dog",
        description:
          "A hot dog in a bun with ketchup and mustard. Often used to represent hot dogs or outdoor cookouts."
      },
      {
        id: 226,
        image: "🍝",
        name: "Spaghetti",
        description:
          "A plate of spaghetti with tomato sauce and meatballs. Often used to represent pasta or Italian cuisine."
      },
      {
        id: 227,
        image: "🌮",
        name: "Taco",
        description:
          "A taco with ground beef, lettuce, and cheese. Often used to represent tacos or Mexican cuisine."
      },
      {
        id: 228,
        image: "🌯",
        name: "Burrito",
        description:
          "A burrito with rice, beans, and meat. Often used to represent burritos or Mexican cuisine."
      },
      {
        id: 229,
        image: "🍜",
        name: "Steaming Bowl",
        description:
          "A steaming bowl of noodle soup. Often used to represent noodles or hot, comforting dishes."
      },
      {
        id: 230,
        image: "🍲",
        name: "Pot of Food",
        description:
          "A pot filled with stew or soup. Often used to represent soups or home-cooked meals."
      },
      {
        id: 231,
        image: "🍛",
        name: "Curry Rice",
        description:
          "A plate of curry rice with rice and curry sauce. Often used to represent curry dishes."
      },
      {
        id: 232,
        image: "🍚",
        name: "Cooked Rice",
        description:
          "A bowl of cooked white rice. Often used to represent rice dishes or Asian cuisine."
      },
      {
        id: 233,
        image: "🍙",
        name: "Rice Ball",
        description:
          "A rice ball wrapped in seaweed. Often used to represent rice balls or onigiri in Japanese cuisine."
      },
      {
        id: 234,
        image: "🍘",
        name: "Rice Cracker",
        description:
          "A rice cracker with a slight curve. Often used to represent rice crackers or snacks."
      },
      {
        id: 235,
        image: "🍢",
        name: "Oden",
        description:
          "A skewer with various ingredients, often used to represent oden or Japanese hot pot dishes."
      },
      {
        id: 236,
        image: "🍡",
        name: "Dango",
        description:
          "Three sweet dango dumplings on a skewer. Often used to represent dango or Japanese sweets."
      },
      {
        id: 237,
        image: "🍧",
        name: "Shaved Ice",
        description:
          "A cup of shaved ice with syrup and a spoon. Often used to represent shaved ice or frozen desserts."
      },
      {
        id: 238,
        image: "🍨",
        name: "Ice Cream",
        description:
          "A bowl of ice cream with a cherry on top. Often used to represent ice cream or frozen desserts."
      },
      {
        id: 239,
        image: "🍦",
        name: "Soft Ice Cream",
        description:
          "A swirl of soft-serve ice cream in a cone. Often used to represent soft-serve ice cream or frozen treats."
      },
      {
        id: 240,
        image: "🍰",
        name: "Shortcake",
        description:
          "A slice of strawberry shortcake with whipped cream. Often used to represent cake or desserts."
      },
      {
        id: 241,
        image: "🧁",
        name: "Cupcake",
        description:
          "A cupcake with frosting and sprinkles. Often used to represent cupcakes or sweet treats."
      },
      {
        id: 242,
        image: "🥧",
        name: "Pie",
        description:
          "A slice of pie with a golden crust. Often used to represent pie or baked desserts."
      },
      {
        id: 243,
        image: "🍮",
        name: "Flan",
        description:
          "A caramel flan custard dessert. Often used to represent flan or creamy desserts."
      },
      {
        id: 244,
        image: "🍯",
        name: "Honey Pot",
        description:
          "A pot of honey with a honey dipper. Often used to represent honey or sweetness."
      },
      {
        id: 245,
        image: "🍼",
        name: "Baby Bottle",
        description:
          "A baby bottle with milk. Often used to represent baby bottles or feeding infants."
      },
      {
        id: 246,
        image: "☕",
        name: "Hot Beverage",
        description:
          "A cup of hot beverage, often shown as coffee but can represent tea or other hot drinks."
      },
      {
        id: 247,
        image: "🍵",
        name: "Teacup Without Handle",
        description:
          "A teacup without a handle, often used to represent tea or hot beverages."
      },
      {
        id: 248,
        image: "🧉",
        name: "Mate",
        description:
          "A cup with a straw and a traditional South American mate drink. Often used to represent mate or herbal drinks."
      },
      {
        id: 249,
        image: "🍶",
        name: "Sake",
        description:
          "A sake bottle and cup. Often used to represent sake or Japanese alcoholic beverages."
      },
      {
        id: 250,
        image: "🍺",
        name: "Beer Mug",
        description:
          "A glass beer mug with frothy beer. Often used to represent beer or drinking."
      },
      {
        id: 251,
        image: "🍻",
        name: "Clinking Beer Mugs",
        description:
          "Two beer mugs clinking together in a celebratory toast. Often used to represent cheers or celebrations."
      },
      {
        id: 252,
        image: "🥂",
        name: "Clinking Glasses",
        description:
          "Two champagne glasses clinking together. Often used to represent toasts or celebrations."
      },
      {
        id: 253,
        image: "🍷",
        name: "Wine Glass",
        description:
          "A wine glass with red wine. Often used to represent wine or wine-related activities."
      },
      {
        id: 254,
        image: "🥃",
        name: "Tumbler Glass",
        description:
          "A tumbler glass with brown liquor, often used to represent whiskey or other spirits."
      },
      {
        id: 255,
        image: "🍸",
        name: "Cocktail Glass",
        description:
          "A cocktail glass with a martini or other cocktail. Often used to represent cocktails or happy hours."
      },
      {
        id: 256,
        image: "🍹",
        name: "Tropical Drink",
        description:
          "A tropical drink with a colorful umbrella and straw. Often used to represent tropical cocktails or vacations."
      },
      {
        id: 257,
        image: "🍾",
        name: "Bottle with Popping Cork",
        description:
          "A bottle with a popping cork and bubbles, often used to represent celebrations and special occasions."
      },
      {
        id: 258,
        image: "🥄",
        name: "Spoon",
        description:
          "A silver spoon, often used to represent eating, cooking, or kitchen-related activities."
      },
      {
        id: 259,
        image: "🍴",
        name: "Fork and Knife",
        description:
          "A fork and knife, often used to represent dining or restaurants."
      },
      {
        id: 260,
        image: "🥢",
        name: "Chopsticks",
        description:
          "A pair of chopsticks, often used to represent Asian cuisine or eating with chopsticks."
      },
      {
        id: 261,
        image: "🥄",
        name: "Spoon",
        description:
          "A silver spoon, often used to represent eating, cooking, or kitchen-related activities."
      },
      {
        id: 262,
        image: "🏺",
        name: "Amphora",
        description:
          "An ancient Greek or Roman amphora, often used to represent classical art or history."
      },
      {
        id: 263,
        image: "🌍",
        name: "Earth Globe Europe-Africa",
        description:
          "A globe showing Europe and Africa, often used to represent Earth, global matters, or travel."
      },
      {
        id: 264,
        image: "🌎",
        name: "Earth Globe Americas",
        description:
          "A globe showing the Americas, often used to represent Earth, global matters, or travel."
      },
      {
        id: 265,
        image: "🌏",
        name: "Earth Globe Asia-Australia",
        description:
          "A globe showing Asia and Australia, often used to represent Earth, global matters, or travel."
      },
      {
        id: 266,
        image: "🌐",
        name: "Globe with Meridians",
        description:
          "A globe with lines of longitude and latitude, often used to represent the world or global concepts."
      },
      {
        id: 267,
        image: "🗺️",
        name: "World Map",
        description:
          "A detailed world map, often used to represent geography, travel, or exploration."
      },
      {
        id: 268,
        image: "🗾",
        name: "Map of Japan",
        description:
          "A map of Japan, often used to represent Japan or Japanese culture."
      },
      {
        id: 269,
        image: "🧭",
        name: "Compass",
        description:
          "A traditional compass, often used to represent direction, navigation, or exploration."
      },
      {
        id: 270,
        image: "🏔️",
        name: "Snow-Capped Mountain",
        description:
          "A mountain with snow on its peak, often used to represent mountains, winter, or alpine environments."
      },
      {
        id: 271,
        image: "⛰️",
        name: "Mountain",
        description:
          "A mountain without snow, often used to represent mountains, nature, or outdoor activities."
      },
      {
        id: 272,
        image: "🌋",
        name: "Volcano",
        description:
          "An erupting volcano, often used to represent volcanic activity or disasters."
      },
      {
        id: 273,
        image: "🗻",
        name: "Mount Fuji",
        description:
          "Mount Fuji, the famous Japanese volcano, often used to represent Japan or travel to Japan."
      },
      {
        id: 274,
        image: "🏕️",
        name: "Camping",
        description:
          "A camping tent in the wilderness, often used to represent camping, outdoor adventures, or nature."
      },
      {
        id: 275,
        image: "🏖️",
        name: "Beach with Umbrella",
        description:
          "A beach scene with an umbrella, often used to represent beach vacations or relaxation."
      },
      {
        id: 276,
        image: "🏜️",
        name: "Desert",
        description:
          "A desert landscape with sand dunes, often used to represent deserts or arid regions."
      },
      {
        id: 277,
        image: "🏝️",
        name: "Desert Island",
        description:
          "A small island in the ocean, often used to represent remote or deserted islands."
      },
      {
        id: 278,
        image: "🏞️",
        name: "National Park",
        description:
          "A national park with mountains and trees, often used to represent national parks or protected nature areas."
      },
      {
        id: 279,
        image: "🏟️",
        name: "Stadium",
        description:
          "A stadium with seats and a field, often used to represent sports events or stadiums."
      },
      {
        id: 280,
        image: "🏛️",
        name: "Classical Building",
        description:
          "A classical building with columns, often used to represent classical architecture or historic sites."
      },
      {
        id: 281,
        image: "🏗️",
        name: "Building Construction",
        description:
          "A building under construction with a crane, often used to represent construction or development."
      },
      {
        id: 282,
        image: "🧱",
        name: "Brick",
        description:
          "A single brick, often used to represent construction or building materials."
      },
      {
        id: 283,
        image: "🪓",
        name: "Axe",
        description:
          "A single-headed axe, often used to represent chopping, lumberjacks, or woodworking."
      },
      {
        id: 284,
        image: "⛏️",
        name: "Pick",
        description:
          "A mining pick, often used to represent mining, digging, or excavation."
      },
      {
        id: 285,
        image: "🛠️",
        name: "Hammer and Wrench",
        description:
          "A hammer and wrench crossed over each other, often used to represent construction or repair."
      },
      {
        id: 286,
        image: "🗡️",
        name: "Dagger",
        description:
          "A single-edged dagger, often used to represent weapons or historical items."
      },
      {
        id: 287,
        image: "🔪",
        name: "Kitchen Knife",
        description:
          "A kitchen knife with a sharp blade, often used to represent cooking or culinary activities."
      },
      {
        id: 288,
        image: "🏹",
        name: "Bow and Arrow",
        description:
          "A bow and arrow, often used to represent archery or hunting."
      },
      {
        id: 289,
        image: "🛡️",
        name: "Shield",
        description:
          "A medieval shield with a design, often used to represent protection or defense."
      },
      {
        id: 290,
        image: "🔫",
        name: "Pistol",
        description:
          "A pistol with a pointed barrel, often used to represent firearms or shooting."
      },
      {
        id: 291,
        image: "🪃",
        name: "Boomerang",
        description:
          "A boomerang, often used to represent boomerang throwing or indigenous cultures."
      },
      {
        id: 292,
        image: "🏺",
        name: "Amphora",
        description:
          "An ancient Greek or Roman amphora, often used to represent classical art or history."
      },
      {
        id: 293,
        image: "🪚",
        name: "Carpentry Saw",
        description:
          "A carpentry saw with a wooden handle, often used to represent woodworking or construction."
      },
      {
        id: 294,
        image: "🔧",
        name: "Wrench",
        description:
          "A wrench with an adjustable head, often used to represent repairs or maintenance."
      },
      {
        id: 295,
        image: "🔨",
        name: "Hammer",
        description:
          "A single-headed hammer, often used to represent construction or building."
      },
      {
        id: 296,
        image: "⚒️",
        name: "Hammer and Pick",
        description:
          "A crossed hammer and pick, often used to represent mining or labor."
      },
      {
        id: 297,
        image: "🪛",
        name: "Screwdriver",
        description:
          "A screwdriver with a flat head, often used to represent DIY projects or repairs."
      },
      {
        id: 298,
        image: "🪝",
        name: "Fishing Hook",
        description:
          "A fishing hook with a sharp point, often used to represent fishing or angling."
      },
      {
        id: 299,
        image: "🧲",
        name: "Magnet",
        description:
          "A horseshoe magnet with a red tip, often used to represent magnets or attraction."
      },
      {
        id: 300,
        image: "⚖️",
        name: "Balance Scale",
        description:
          "A balance scale with two pans, often used to represent justice, law, or equality."
      }
];

export default emojis;
