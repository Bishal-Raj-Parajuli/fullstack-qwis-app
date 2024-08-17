const dummyData = {
  userData: {
    userName: 'Bishal Raj Parajuli',
    totalPoint: 100,
    country: 'Nepal',
  },
  category: [
    {
      categoryName: 'Kids',
      blitzTime: 3,
      description:
        'Fun and educational questions designed specifically for children. These questions are crafted to be engaging and suitable for young minds, encouraging learning through play and exploration.',
    },
    {
      categoryName: 'Science',
      blitzTime: 3,
      description:
        'Challenge yourself with questions about scientific facts, discoveries, and theories. Dive into various fields of science, from biology and chemistry to physics and astronomy, and expand your understanding of the natural world.',
    },
    {
      categoryName: 'History',
      blitzTime: 4,
      description:
        'Explore significant historical events, figures, and eras through a range of thought-provoking questions. Delve into ancient civilizations, historical milestones, and influential personalities that have shaped our world.',
    },
    {
      categoryName: 'Geography',
      blitzTime: 3,
      description:
        "Discover and test your knowledge of the world's geography. From countries and capitals to landmarks and natural wonders, these questions cover a broad spectrum of geographical knowledge and map skills.",
    },
    {
      categoryName: 'Sports',
      blitzTime: 2,
      description:
        "Put your sports knowledge to the test with questions covering a variety of sports, athletes, and events. Whether it's about football, basketball, tennis, or the Olympic Games, these questions will challenge your understanding of sports history and trivia.",
    },
    {
      categoryName: 'Music',
      blitzTime: 3,
      description:
        'Showcase your music trivia skills with questions spanning different genres, artists, and musical history. From classical compositions to modern hits, these questions will test your knowledge of music and its evolution.',
    },
    {
      categoryName: 'Movies',
      blitzTime: 4,
      description:
        'Immerse yourself in the world of cinema with questions about classic films, contemporary releases, actors, directors, and film history. These questions will challenge your knowledge of movies and the entertainment industry.',
    },
    {
      categoryName: 'Literature',
      blitzTime: 5,
      description:
        'Delve into the world of literature with questions about famous books, authors, and literary genres. From timeless classics to modern bestsellers, test your understanding of literary works and the authors behind them.',
    },
    {
      categoryName: 'Technology',
      blitzTime: 3,
      description:
        'Stay up-to-date with the latest tech trends and innovations. Answer questions about gadgets, software, technological advancements, and key figures in the tech industry to gauge your knowledge of the digital world.',
    },
    {
      categoryName: 'General Knowledge',
      blitzTime: 4,
      description:
        'Challenge yourself with a diverse set of questions covering a wide range of topics. From current events and popular culture to obscure facts and trivia, this category tests your overall knowledge and understanding of the world.',
    },
  ],
  questions: [
    {
      categoryName: 'Kids',
      questionTitle: 'What color is the sun?',
      option: [
        { answer: 'Red', correct: false },
        { answer: 'Blue', correct: false },
        { answer: 'Yellow', correct: true },
        { answer: 'Green', correct: false },
      ],
    },
    {
      categoryName: 'Kids',
      questionTitle: "Which animal is known as the 'King of the Jungle'?",
      option: [
        { answer: 'Elephant', correct: false },
        { answer: 'Lion', correct: true },
        { answer: 'Tiger', correct: false },
        { answer: 'Giraffe', correct: false },
      ],
    },
    {
      categoryName: 'Kids',
      questionTitle: 'How many days are there in a week?',
      option: [
        { answer: '5', correct: false },
        { answer: '6', correct: false },
        { answer: '7', correct: true },
        { answer: '8', correct: false },
      ],
    },
    {
      categoryName: 'Kids',
      questionTitle: 'What is the name of the toy cowboy in Toy Story?',
      option: [
        { answer: 'Buzz Lightyear', correct: false },
        { answer: 'Woody', correct: true },
        { answer: 'Mr. Potato Head', correct: false },
        { answer: 'Rex', correct: false },
      ],
    },
    {
      categoryName: 'Kids',
      questionTitle:
        'Which fruit is known for having its seeds on the outside?',
      option: [
        { answer: 'Apple', correct: false },
        { answer: 'Banana', correct: false },
        { answer: 'Strawberry', correct: true },
        { answer: 'Orange', correct: false },
      ],
    },
    {
      categoryName: 'Kids',
      questionTitle: 'What is the capital of France?',
      option: [
        { answer: 'Berlin', correct: false },
        { answer: 'Madrid', correct: false },
        { answer: 'Paris', correct: true },
        { answer: 'Rome', correct: false },
      ],
    },
    {
      categoryName: 'Kids',
      questionTitle: 'What type of animal is a penguin?',
      option: [
        { answer: 'Mammal', correct: false },
        { answer: 'Bird', correct: true },
        { answer: 'Reptile', correct: false },
        { answer: 'Fish', correct: false },
      ],
    },
    {
      categoryName: 'Kids',
      questionTitle: 'What is the main ingredient in a sandwich?',
      option: [
        { answer: 'Rice', correct: false },
        { answer: 'Bread', correct: true },
        { answer: 'Pasta', correct: false },
        { answer: 'Fruit', correct: false },
      ],
    },
    {
      categoryName: 'Kids',
      questionTitle: 'Which planet is known as the Red Planet?',
      option: [
        { answer: 'Earth', correct: false },
        { answer: 'Mars', correct: true },
        { answer: 'Jupiter', correct: false },
        { answer: 'Saturn', correct: false },
      ],
    },
    {
      categoryName: 'Kids',
      questionTitle: 'What shape has three sides?',
      option: [
        { answer: 'Square', correct: false },
        { answer: 'Triangle', correct: true },
        { answer: 'Circle', correct: false },
        { answer: 'Rectangle', correct: false },
      ],
    },
    {
      categoryName: 'Kids',
      questionTitle:
        'Who is the famous wizard with a lightning-shaped scar on his forehead?',
      option: [
        { answer: 'Harry Potter', correct: true },
        { answer: 'Ron Weasley', correct: false },
        { answer: 'Hermione Granger', correct: false },
        { answer: 'Albus Dumbledore', correct: false },
      ],
    },
    {
      categoryName: 'Kids',
      questionTitle: 'What do you call a baby cat?',
      option: [
        { answer: 'Puppy', correct: false },
        { answer: 'Kitten', correct: true },
        { answer: 'Cub', correct: false },
        { answer: 'Calf', correct: false },
      ],
    },
    {
      categoryName: 'Kids',
      questionTitle: 'How many legs does a spider have?',
      option: [
        { answer: '4', correct: false },
        { answer: '6', correct: false },
        { answer: '8', correct: true },
        { answer: '10', correct: false },
      ],
    },
    {
      categoryName: 'Kids',
      questionTitle: 'What do bees make?',
      option: [
        { answer: 'Milk', correct: false },
        { answer: 'Butter', correct: false },
        { answer: 'Honey', correct: true },
        { answer: 'Cheese', correct: false },
      ],
    },
    {
      categoryName: 'Kids',
      questionTitle: 'Which color is the sky on a clear day?',
      option: [
        { answer: 'Blue', correct: true },
        { answer: 'Red', correct: false },
        { answer: 'Yellow', correct: false },
        { answer: 'Purple', correct: false },
      ],
    },
    {
      categoryName: 'Kids',
      questionTitle: 'What do you use to write on a chalkboard?',
      option: [
        { answer: 'Pen', correct: false },
        { answer: 'Pencil', correct: false },
        { answer: 'Crayon', correct: false },
        { answer: 'Chalk', correct: true },
      ],
    },
    {
      categoryName: 'Kids',
      questionTitle: 'What is the largest ocean in the world?',
      option: [
        { answer: 'Atlantic Ocean', correct: false },
        { answer: 'Indian Ocean', correct: false },
        { answer: 'Arctic Ocean', correct: false },
        { answer: 'Pacific Ocean', correct: true },
      ],
    },
    {
      categoryName: 'Kids',
      questionTitle: 'Which animal is known for its long neck?',
      option: [
        { answer: 'Elephant', correct: false },
        { answer: 'Giraffe', correct: true },
        { answer: 'Lion', correct: false },
        { answer: 'Horse', correct: false },
      ],
    },
    {
      categoryName: 'Kids',
      questionTitle: 'What is the name of the fairy in Peter Pan?',
      option: [
        { answer: 'Tinkerbell', correct: true },
        { answer: 'Cinderella', correct: false },
        { answer: 'Snow White', correct: false },
        { answer: 'Aurora', correct: false },
      ],
    },
    {
      categoryName: 'Kids',
      questionTitle: 'What do you call the person who fixes cars?',
      option: [
        { answer: 'Doctor', correct: false },
        { answer: 'Chef', correct: false },
        { answer: 'Mechanic', correct: true },
        { answer: 'Teacher', correct: false },
      ],
    },
    {
      categoryName: 'Kids',
      questionTitle: "Which animal is known as man's best friend?",
      option: [
        { answer: 'Cat', correct: false },
        { answer: 'Dog', correct: true },
        { answer: 'Rabbit', correct: false },
        { answer: 'Hamster', correct: false },
      ],
    },
    {
      categoryName: 'Kids',
      questionTitle:
        'What do you call the process of a caterpillar turning into a butterfly?',
      option: [
        { answer: 'Hibernation', correct: false },
        { answer: 'Migration', correct: false },
        { answer: 'Metamorphosis', correct: true },
        { answer: 'Photosynthesis', correct: false },
      ],
    },
    {
      categoryName: 'Kids',
      questionTitle: 'What do you call a group of lions?',
      option: [
        { answer: 'Pack', correct: false },
        { answer: 'Herd', correct: false },
        { answer: 'Pride', correct: true },
        { answer: 'School', correct: false },
      ],
    },
    {
      categoryName: 'Kids',
      questionTitle: 'Which planet is closest to the Sun?',
      option: [
        { answer: 'Venus', correct: false },
        { answer: 'Earth', correct: false },
        { answer: 'Mercury', correct: true },
        { answer: 'Mars', correct: false },
      ],
    },
    {
      categoryName: 'Kids',
      questionTitle: 'What type of tree produces acorns?',
      option: [
        { answer: 'Pine', correct: false },
        { answer: 'Oak', correct: true },
        { answer: 'Maple', correct: false },
        { answer: 'Birch', correct: false },
      ],
    },
    {
      categoryName: 'Kids',
      questionTitle: "What is the name of Mickey Mouse's pet dog?",
      option: [
        { answer: 'Pluto', correct: true },
        { answer: 'Goofy', correct: false },
        { answer: 'Donald', correct: false },
        { answer: 'Daisy', correct: false },
      ],
    },
    {
      categoryName: 'Science',
      questionTitle: 'What is the chemical symbol for water?',
      option: [
        { answer: 'O2', correct: false },
        { answer: 'H2O', correct: true },
        { answer: 'CO2', correct: false },
        { answer: 'NaCl', correct: false },
      ],
    },
    {
      categoryName: 'Science',
      questionTitle: "What planet is known as the 'Red Planet'?",
      option: [
        { answer: 'Earth', correct: false },
        { answer: 'Mars', correct: true },
        { answer: 'Jupiter', correct: false },
        { answer: 'Saturn', correct: false },
      ],
    },
    {
      categoryName: 'Science',
      questionTitle: 'What gas do plants use for photosynthesis?',
      option: [
        { answer: 'Oxygen', correct: false },
        { answer: 'Nitrogen', correct: false },
        { answer: 'Carbon Dioxide', correct: true },
        { answer: 'Hydrogen', correct: false },
      ],
    },
    {
      categoryName: 'Science',
      questionTitle: 'What is the hardest natural substance on Earth?',
      option: [
        { answer: 'Gold', correct: false },
        { answer: 'Iron', correct: false },
        { answer: 'Diamond', correct: true },
        { answer: 'Platinum', correct: false },
      ],
    },
    {
      categoryName: 'Science',
      questionTitle: 'How many bones are there in the human body?',
      option: [
        { answer: '206', correct: true },
        { answer: '208', correct: false },
        { answer: '210', correct: false },
        { answer: '212', correct: false },
      ],
    },
    {
      categoryName: 'Science',
      questionTitle: 'What is the chemical formula for table salt?',
      option: [
        { answer: 'NaCl', correct: true },
        { answer: 'KCl', correct: false },
        { answer: 'CaCl2', correct: false },
        { answer: 'MgCl2', correct: false },
      ],
    },
    {
      categoryName: 'Science',
      questionTitle: 'What type of energy is stored in food?',
      option: [
        { answer: 'Kinetic Energy', correct: false },
        { answer: 'Potential Energy', correct: false },
        { answer: 'Chemical Energy', correct: true },
        { answer: 'Thermal Energy', correct: false },
      ],
    },
    {
      categoryName: 'Science',
      questionTitle: 'What is the process by which plants make their own food?',
      option: [
        { answer: 'Respiration', correct: false },
        { answer: 'Photosynthesis', correct: true },
        { answer: 'Digestion', correct: false },
        { answer: 'Fermentation', correct: false },
      ],
    },
    {
      categoryName: 'Science',
      questionTitle: 'Which planet is known for its rings?',
      option: [
        { answer: 'Mars', correct: false },
        { answer: 'Saturn', correct: true },
        { answer: 'Uranus', correct: false },
        { answer: 'Neptune', correct: false },
      ],
    },
    {
      categoryName: 'Science',
      questionTitle: "What is the most common gas in Earth's atmosphere?",
      option: [
        { answer: 'Oxygen', correct: false },
        { answer: 'Nitrogen', correct: true },
        { answer: 'Carbon Dioxide', correct: false },
        { answer: 'Argon', correct: false },
      ],
    },
    {
      categoryName: 'Science',
      questionTitle: 'What is the chemical symbol for gold?',
      option: [
        { answer: 'Au', correct: true },
        { answer: 'Ag', correct: false },
        { answer: 'Pb', correct: false },
        { answer: 'Fe', correct: false },
      ],
    },
    {
      categoryName: 'Science',
      questionTitle: 'What part of the plant conducts photosynthesis?',
      option: [
        { answer: 'Roots', correct: false },
        { answer: 'Stem', correct: false },
        { answer: 'Leaves', correct: true },
        { answer: 'Flowers', correct: false },
      ],
    },
    {
      categoryName: 'Science',
      questionTitle: 'What is the boiling point of water in Celsius?',
      option: [
        { answer: '100°C', correct: true },
        { answer: '90°C', correct: false },
        { answer: '110°C', correct: false },
        { answer: '80°C', correct: false },
      ],
    },
    {
      categoryName: 'Science',
      questionTitle:
        'Which organ in the human body is primarily responsible for pumping blood?',
      option: [
        { answer: 'Liver', correct: false },
        { answer: 'Brain', correct: false },
        { answer: 'Heart', correct: true },
        { answer: 'Lungs', correct: false },
      ],
    },
    {
      categoryName: 'Science',
      questionTitle: 'What is the primary source of energy for the Earth?',
      option: [
        { answer: 'Moon', correct: false },
        { answer: 'Sun', correct: true },
        { answer: 'Stars', correct: false },
        { answer: 'Wind', correct: false },
      ],
    },
    {
      categoryName: 'Science',
      questionTitle:
        'What is the name of the process by which water changes into vapor?',
      option: [
        { answer: 'Condensation', correct: false },
        { answer: 'Evaporation', correct: true },
        { answer: 'Precipitation', correct: false },
        { answer: 'Sublimation', correct: false },
      ],
    },
    {
      categoryName: 'Science',
      questionTitle: 'What is the chemical symbol for silver?',
      option: [
        { answer: 'Si', correct: false },
        { answer: 'Ag', correct: true },
        { answer: 'Au', correct: false },
        { answer: 'Pb', correct: false },
      ],
    },
    {
      categoryName: 'Science',
      questionTitle: 'Which gas is essential for human respiration?',
      option: [
        { answer: 'Carbon Dioxide', correct: false },
        { answer: 'Oxygen', correct: true },
        { answer: 'Nitrogen', correct: false },
        { answer: 'Helium', correct: false },
      ],
    },
    {
      categoryName: 'Science',
      questionTitle: 'What is the unit of electrical resistance?',
      option: [
        { answer: 'Ampere', correct: false },
        { answer: 'Volt', correct: false },
        { answer: 'Ohm', correct: true },
        { answer: 'Watt', correct: false },
      ],
    },
    {
      categoryName: 'Science',
      questionTitle: "Which planet is known as the 'Giant Planet'?",
      option: [
        { answer: 'Earth', correct: false },
        { answer: 'Jupiter', correct: true },
        { answer: 'Mars', correct: false },
        { answer: 'Neptune', correct: false },
      ],
    },
    {
      categoryName: 'Science',
      questionTitle:
        'What is the primary function of the human digestive system?',
      option: [
        { answer: 'Breathing', correct: false },
        { answer: 'Pumping blood', correct: false },
        { answer: 'Breaking down food', correct: true },
        { answer: 'Moving', correct: false },
      ],
    },
    {
      categoryName: 'Science',
      questionTitle:
        'What substance is commonly used to cool and preserve food?',
      option: [
        { answer: 'Salt', correct: false },
        { answer: 'Sugar', correct: false },
        { answer: 'Ice', correct: true },
        { answer: 'Vinegar', correct: false },
      ],
    },
    {
      categoryName: 'History',
      questionTitle: 'Who was the first President of the United States?',
      option: [
        { answer: 'Thomas Jefferson', correct: false },
        { answer: 'George Washington', correct: true },
        { answer: 'Abraham Lincoln', correct: false },
        { answer: 'John Adams', correct: false },
      ],
    },
    {
      categoryName: 'History',
      questionTitle: 'What ancient civilization built the pyramids of Giza?',
      option: [
        { answer: 'Romans', correct: false },
        { answer: 'Greeks', correct: false },
        { answer: 'Egyptians', correct: true },
        { answer: 'Mayans', correct: false },
      ],
    },
    {
      categoryName: 'History',
      questionTitle: 'Which event started World War I?',
      option: [
        { answer: 'The sinking of the Titanic', correct: false },
        {
          answer: 'The assassination of Archduke Franz Ferdinand',
          correct: true,
        },
        { answer: 'The signing of the Treaty of Versailles', correct: false },
        { answer: 'The bombing of Pearl Harbor', correct: false },
      ],
    },
    {
      categoryName: 'History',
      questionTitle:
        'Who was the famous queen of ancient Egypt known for her beauty and political acumen?',
      option: [
        { answer: 'Cleopatra', correct: true },
        { answer: 'Nefertiti', correct: false },
        { answer: 'Hatshepsut', correct: false },
        { answer: 'Maatkare', correct: false },
      ],
    },
    {
      categoryName: 'History',
      questionTitle: 'What was the main purpose of the Great Wall of China?',
      option: [
        { answer: 'Trade protection', correct: false },
        { answer: 'Military defense', correct: true },
        { answer: 'Cultural exchange', correct: false },
        { answer: 'Religious purpose', correct: false },
      ],
    },
    {
      categoryName: 'History',
      questionTitle:
        'Which explorer is credited with discovering the New World in 1492?',
      option: [
        { answer: 'Ferdinand Magellan', correct: false },
        { answer: 'Christopher Columbus', correct: true },
        { answer: 'Marco Polo', correct: false },
        { answer: 'Vasco da Gama', correct: false },
      ],
    },
    {
      categoryName: 'History',
      questionTitle:
        'What was the primary cause of the fall of the Roman Empire?',
      option: [
        { answer: 'Barbarian invasions', correct: true },
        { answer: 'Economic prosperity', correct: false },
        { answer: 'Technological advancement', correct: false },
        { answer: 'Religious reforms', correct: false },
      ],
    },
    {
      categoryName: 'History',
      questionTitle:
        'Which war was fought between the North and South regions in the United States?',
      option: [
        { answer: 'The War of 1812', correct: false },
        { answer: 'The Civil War', correct: true },
        { answer: 'The Spanish-American War', correct: false },
        { answer: 'World War I', correct: false },
      ],
    },
    {
      categoryName: 'History',
      questionTitle: 'Who was the first Emperor of China?',
      option: [
        { answer: 'Qin Shi Huang', correct: true },
        { answer: 'Liu Bang', correct: false },
        { answer: 'Wudi', correct: false },
        { answer: 'Tang Taizong', correct: false },
      ],
    },
    {
      categoryName: 'History',
      questionTitle:
        'What was the main purpose of the Berlin Wall during the Cold War?',
      option: [
        { answer: 'Trade regulation', correct: false },
        { answer: 'Travel restriction', correct: true },
        { answer: 'Military base', correct: false },
        { answer: 'Cultural exchange', correct: false },
      ],
    },
    {
      categoryName: 'History',
      questionTitle:
        'Which civilization is known for creating the concept of democracy?',
      option: [
        { answer: 'Romans', correct: false },
        { answer: 'Greeks', correct: true },
        { answer: 'Egyptians', correct: false },
        { answer: 'Mesopotamians', correct: false },
      ],
    },
    {
      categoryName: 'History',
      questionTitle:
        'Who was the leader of the Soviet Union during World War II?',
      option: [
        { answer: 'Leon Trotsky', correct: false },
        { answer: 'Joseph Stalin', correct: true },
        { answer: 'Vladimir Lenin', correct: false },
        { answer: 'Mikhail Gorbachev', correct: false },
      ],
    },
    {
      categoryName: 'History',
      questionTitle:
        'Which ancient civilization is known for their use of cuneiform writing?',
      option: [
        { answer: 'Egyptians', correct: false },
        { answer: 'Mesopotamians', correct: true },
        { answer: 'Indus Valley', correct: false },
        { answer: 'Chinese', correct: false },
      ],
    },
    {
      categoryName: 'History',
      questionTitle:
        'Who was the famous queen of England during the Spanish Armada?',
      option: [
        { answer: 'Elizabeth I', correct: true },
        { answer: 'Victoria', correct: false },
        { answer: 'Mary I', correct: false },
        { answer: 'Anne', correct: false },
      ],
    },
    {
      categoryName: 'History',
      questionTitle: 'Which empire was ruled by Genghis Khan?',
      option: [
        { answer: 'Ottoman Empire', correct: false },
        { answer: 'Roman Empire', correct: false },
        { answer: 'Mongol Empire', correct: true },
        { answer: 'Byzantine Empire', correct: false },
      ],
    },
    {
      categoryName: 'History',
      questionTitle: 'What was the primary goal of the Crusades?',
      option: [
        { answer: 'Economic expansion', correct: false },
        { answer: 'Religious conquest', correct: true },
        { answer: 'Political dominance', correct: false },
        { answer: 'Scientific discovery', correct: false },
      ],
    },
    {
      categoryName: 'History',
      questionTitle:
        'Who was the famous Renaissance artist known for painting the Mona Lisa?',
      option: [
        { answer: 'Michelangelo', correct: false },
        { answer: 'Leonardo da Vinci', correct: true },
        { answer: 'Raphael', correct: false },
        { answer: 'Donatello', correct: false },
      ],
    },
    {
      categoryName: 'History',
      questionTitle: 'Which revolution led to the end of monarchy in France?',
      option: [
        { answer: 'Industrial Revolution', correct: false },
        { answer: 'American Revolution', correct: false },
        { answer: 'French Revolution', correct: true },
        { answer: 'Russian Revolution', correct: false },
      ],
    },
    {
      categoryName: 'History',
      questionTitle:
        'Who was the leader of the Indian independence movement against British rule?',
      option: [
        { answer: 'Jawaharlal Nehru', correct: false },
        { answer: 'Mahatma Gandhi', correct: true },
        { answer: 'Subhas Chandra Bose', correct: false },
        { answer: 'Bhagat Singh', correct: false },
      ],
    },
    {
      categoryName: 'History',
      questionTitle:
        'Which empire was known for its system of roads and aqueducts?',
      option: [
        { answer: 'Roman Empire', correct: true },
        { answer: 'Ottoman Empire', correct: false },
        { answer: 'Ming Dynasty', correct: false },
        { answer: 'Mongol Empire', correct: false },
      ],
    },
    {
      categoryName: 'History',
      questionTitle: 'What was the significance of the Magna Carta?',
      option: [
        { answer: 'It ended the Crusades', correct: false },
        { answer: 'It limited the power of the king', correct: true },
        { answer: 'It established the British Empire', correct: false },
        { answer: 'It started the Renaissance', correct: false },
      ],
    },
    {
      categoryName: 'History',
      questionTitle: 'Which country was the first to land a human on the moon?',
      option: [
        { answer: 'Russia', correct: false },
        { answer: 'China', correct: false },
        { answer: 'United States', correct: true },
        { answer: 'India', correct: false },
      ],
    },
    {
      categoryName: 'History',
      questionTitle:
        'Who was the leader of the Bolshevik Revolution in Russia?',
      option: [
        { answer: 'Joseph Stalin', correct: false },
        { answer: 'Vladimir Lenin', correct: true },
        { answer: 'Leon Trotsky', correct: false },
        { answer: 'Nicholas II', correct: false },
      ],
    },
    {
      categoryName: 'Geography',
      questionTitle: 'What is the largest continent by area?',
      option: [
        { answer: 'Africa', correct: false },
        { answer: 'Asia', correct: true },
        { answer: 'Europe', correct: false },
        { answer: 'North America', correct: false },
      ],
    },
    {
      categoryName: 'Geography',
      questionTitle: 'Which country has the longest coastline?',
      option: [
        { answer: 'Australia', correct: false },
        { answer: 'Canada', correct: true },
        { answer: 'Russia', correct: false },
        { answer: 'United States', correct: false },
      ],
    },
    {
      categoryName: 'Geography',
      questionTitle: 'What is the capital of Brazil?',
      option: [
        { answer: 'Rio de Janeiro', correct: false },
        { answer: 'São Paulo', correct: false },
        { answer: 'Brasília', correct: true },
        { answer: 'Salvador', correct: false },
      ],
    },
    {
      categoryName: 'Geography',
      questionTitle: 'Which river is the longest in the world?',
      option: [
        { answer: 'Amazon River', correct: false },
        { answer: 'Nile River', correct: true },
        { answer: 'Yangtze River', correct: false },
        { answer: 'Mississippi River', correct: false },
      ],
    },
    {
      categoryName: 'Geography',
      questionTitle: 'What is the smallest country in the world by land area?',
      option: [
        { answer: 'Monaco', correct: false },
        { answer: 'Vatican City', correct: true },
        { answer: 'San Marino', correct: false },
        { answer: 'Liechtenstein', correct: false },
      ],
    },
    {
      categoryName: 'Geography',
      questionTitle: 'Which mountain range separates Europe and Asia?',
      option: [
        { answer: 'Andes', correct: false },
        { answer: 'Rockies', correct: false },
        { answer: 'Ural Mountains', correct: true },
        { answer: 'Himalayas', correct: false },
      ],
    },
    {
      categoryName: 'Geography',
      questionTitle: 'Which desert is the largest in the world?',
      option: [
        { answer: 'Gobi Desert', correct: false },
        { answer: 'Kalahari Desert', correct: false },
        { answer: 'Sahara Desert', correct: true },
        { answer: 'Arctic Desert', correct: false },
      ],
    },
    {
      categoryName: 'Geography',
      questionTitle: 'What is the highest mountain peak in the world?',
      option: [
        { answer: 'K2', correct: false },
        { answer: 'Kangchenjunga', correct: false },
        { answer: 'Mount Everest', correct: true },
        { answer: 'Lhotse', correct: false },
      ],
    },
    {
      categoryName: 'Geography',
      questionTitle: 'Which country is known as the Land of the Rising Sun?',
      option: [
        { answer: 'China', correct: false },
        { answer: 'Japan', correct: true },
        { answer: 'Thailand', correct: false },
        { answer: 'South Korea', correct: false },
      ],
    },
    {
      categoryName: 'Geography',
      questionTitle: 'What is the longest river in Africa?',
      option: [
        { answer: 'Nile River', correct: true },
        { answer: 'Congo River', correct: false },
        { answer: 'Zambezi River', correct: false },
        { answer: 'Limpopo River', correct: false },
      ],
    },
    {
      categoryName: 'Geography',
      questionTitle: 'Which city is known as the City of Canals?',
      option: [
        { answer: 'Amsterdam', correct: false },
        { answer: 'Venice', correct: true },
        { answer: 'Bangkok', correct: false },
        { answer: 'Venice', correct: true },
      ],
    },
    {
      categoryName: 'Geography',
      questionTitle: 'What is the largest ocean on Earth?',
      option: [
        { answer: 'Atlantic Ocean', correct: false },
        { answer: 'Indian Ocean', correct: false },
        { answer: 'Southern Ocean', correct: false },
        { answer: 'Pacific Ocean', correct: true },
      ],
    },
    {
      categoryName: 'Geography',
      questionTitle: 'Which country has the most islands?',
      option: [
        { answer: 'Norway', correct: false },
        { answer: 'Sweden', correct: true },
        { answer: 'Canada', correct: false },
        { answer: 'Australia', correct: false },
      ],
    },
    {
      categoryName: 'Geography',
      questionTitle: 'What is the capital city of Australia?',
      option: [
        { answer: 'Sydney', correct: false },
        { answer: 'Melbourne', correct: false },
        { answer: 'Brisbane', correct: false },
        { answer: 'Canberra', correct: true },
      ],
    },
    {
      categoryName: 'Geography',
      questionTitle:
        'Which mountain is located on the border between Nepal and China?',
      option: [
        { answer: 'K2', correct: false },
        { answer: 'Kangchenjunga', correct: false },
        { answer: 'Mount Everest', correct: true },
        { answer: 'Makalu', correct: false },
      ],
    },
    {
      categoryName: 'Geography',
      questionTitle: 'What is the capital city of Canada?',
      option: [
        { answer: 'Toronto', correct: false },
        { answer: 'Vancouver', correct: false },
        { answer: 'Ottawa', correct: true },
        { answer: 'Montreal', correct: false },
      ],
    },
    {
      categoryName: 'Geography',
      questionTitle: 'Which country is known for its fjords?',
      option: [
        { answer: 'Sweden', correct: false },
        { answer: 'Norway', correct: true },
        { answer: 'Finland', correct: false },
        { answer: 'Denmark', correct: false },
      ],
    },
    {
      categoryName: 'Geography',
      questionTitle: 'What is the largest island in the Mediterranean Sea?',
      option: [
        { answer: 'Sicily', correct: true },
        { answer: 'Crete', correct: false },
        { answer: 'Cyprus', correct: false },
        { answer: 'Corsica', correct: false },
      ],
    },
    {
      categoryName: 'Geography',
      questionTitle: 'Which desert is located in northern Africa?',
      option: [
        { answer: 'Gobi Desert', correct: false },
        { answer: 'Kalahari Desert', correct: false },
        { answer: 'Sahara Desert', correct: true },
        { answer: 'Mojave Desert', correct: false },
      ],
    },
    {
      categoryName: 'Geography',
      questionTitle: "Which U.S. state is known as the 'Sunshine State'?",
      option: [
        { answer: 'California', correct: false },
        { answer: 'Texas', correct: false },
        { answer: 'Florida', correct: true },
        { answer: 'Arizona', correct: false },
      ],
    },
    {
      categoryName: 'Geography',
      questionTitle: 'Which of the following countries is landlocked?',
      option: [
        { answer: 'Portugal', correct: false },
        { answer: 'Spain', correct: false },
        { answer: 'Switzerland', correct: true },
        { answer: 'Italy', correct: false },
      ],
    },
    {
      categoryName: 'Geography',
      questionTitle: 'What is the capital of Japan?',
      option: [
        { answer: 'Osaka', correct: false },
        { answer: 'Kyoto', correct: false },
        { answer: 'Tokyo', correct: true },
        { answer: 'Hiroshima', correct: false },
      ],
    },
    {
      categoryName: 'Geography',
      questionTitle: "Which continent is known as the 'Dark Continent'?",
      option: [
        { answer: 'Asia', correct: false },
        { answer: 'Africa', correct: true },
        { answer: 'Australia', correct: false },
        { answer: 'South America', correct: false },
      ],
    },
    {
      categoryName: 'Sports',
      questionTitle: "Which sport is known as the 'king of sports'?",
      option: [
        { answer: 'Basketball', correct: false },
        { answer: 'Football', correct: true },
        { answer: 'Tennis', correct: false },
        { answer: 'Cricket', correct: false },
      ],
    },
    {
      categoryName: 'Sports',
      questionTitle:
        'Who holds the record for the most goals scored in a single World Cup tournament?',
      option: [
        { answer: 'Pelé', correct: false },
        { answer: 'Diego Maradona', correct: false },
        { answer: 'Miroslav Klose', correct: false },
        { answer: 'Just Fontaine', correct: true },
      ],
    },
    {
      categoryName: 'Sports',
      questionTitle: 'In which sport would you perform a slam dunk?',
      option: [
        { answer: 'Basketball', correct: true },
        { answer: 'Volleyball', correct: false },
        { answer: 'Baseball', correct: false },
        { answer: 'Soccer', correct: false },
      ],
    },
    {
      categoryName: 'Sports',
      questionTitle:
        'What is the maximum number of players on a football (soccer) team on the field at one time?',
      option: [
        { answer: '10', correct: false },
        { answer: '11', correct: true },
        { answer: '12', correct: false },
        { answer: '13', correct: false },
      ],
    },
    {
      categoryName: 'Sports',
      questionTitle: 'Which country won the FIFA World Cup in 2018?',
      option: [
        { answer: 'Germany', correct: false },
        { answer: 'France', correct: true },
        { answer: 'Brazil', correct: false },
        { answer: 'Argentina', correct: false },
      ],
    },
    {
      categoryName: 'Sports',
      questionTitle:
        'In which sport would you use a racket to hit a shuttlecock?',
      option: [
        { answer: 'Tennis', correct: false },
        { answer: 'Badminton', correct: true },
        { answer: 'Squash', correct: false },
        { answer: 'Table Tennis', correct: false },
      ],
    },
    {
      categoryName: 'Sports',
      questionTitle:
        'Who is considered the greatest swimmer of all time with the most Olympic gold medals?',
      option: [
        { answer: 'Michael Phelps', correct: true },
        { answer: 'Ian Thorpe', correct: false },
        { answer: 'Ryan Lochte', correct: false },
        { answer: 'Mark Spitz', correct: false },
      ],
    },
    {
      categoryName: 'Sports',
      questionTitle:
        'Which country is known for its famous rugby team called the All Blacks?',
      option: [
        { answer: 'South Africa', correct: false },
        { answer: 'Australia', correct: false },
        { answer: 'New Zealand', correct: true },
        { answer: 'England', correct: false },
      ],
    },
    {
      categoryName: 'Sports',
      questionTitle:
        'How many players are there on a standard ice hockey team?',
      option: [
        { answer: '5', correct: false },
        { answer: '6', correct: true },
        { answer: '7', correct: false },
        { answer: '8', correct: false },
      ],
    },
    {
      categoryName: 'Sports',
      questionTitle: 'What is the term for a score of zero in tennis?',
      option: [
        { answer: 'Love', correct: true },
        { answer: 'Fault', correct: false },
        { answer: 'Deuce', correct: false },
        { answer: 'Break', correct: false },
      ],
    },
    {
      categoryName: 'Sports',
      questionTitle: 'Which sport uses a shuttlecock as part of its equipment?',
      option: [
        { answer: 'Baseball', correct: false },
        { answer: 'Badminton', correct: true },
        { answer: 'Football', correct: false },
        { answer: 'Golf', correct: false },
      ],
    },
    {
      categoryName: 'Sports',
      questionTitle: "Who is known as the 'Great One' in ice hockey?",
      option: [
        { answer: 'Wayne Gretzky', correct: true },
        { answer: 'Mario Lemieux', correct: false },
        { answer: 'Gordie Howe', correct: false },
        { answer: 'Bobby Orr', correct: false },
      ],
    },
    {
      categoryName: 'Sports',
      questionTitle: 'What is the official distance of a marathon race?',
      option: [
        { answer: '21.1 km', correct: false },
        { answer: '42.2 km', correct: true },
        { answer: '50 km', correct: false },
        { answer: '10 km', correct: false },
      ],
    },
    {
      categoryName: 'Sports',
      questionTitle: 'In which sport would you use a bat to hit a ball?',
      option: [
        { answer: 'Cricket', correct: true },
        { answer: 'Football', correct: false },
        { answer: 'Basketball', correct: false },
        { answer: 'Tennis', correct: false },
      ],
    },
    {
      categoryName: 'Sports',
      questionTitle:
        "Which event is considered the decathlon's most important race?",
      option: [
        { answer: '100 meters', correct: false },
        { answer: '400 meters', correct: false },
        { answer: '1500 meters', correct: true },
        { answer: '10,000 meters', correct: false },
      ],
    },
    {
      categoryName: 'Sports',
      questionTitle: 'What is the term for a score of 10 in bowling?',
      option: [
        { answer: 'Strike', correct: true },
        { answer: 'Spare', correct: false },
        { answer: 'Split', correct: false },
        { answer: 'Gutter', correct: false },
      ],
    },
    {
      categoryName: 'Sports',
      questionTitle: 'Which country won the first FIFA World Cup?',
      option: [
        { answer: 'Brazil', correct: false },
        { answer: 'Argentina', correct: false },
        { answer: 'Italy', correct: false },
        { answer: 'Uruguay', correct: true },
      ],
    },
    {
      categoryName: 'Sports',
      questionTitle: "Which sport is known for its event called the 'Ironman'?",
      option: [
        { answer: 'Triathlon', correct: true },
        { answer: 'Marathon', correct: false },
        { answer: 'Cycling', correct: false },
        { answer: 'Swimming', correct: false },
      ],
    },
    {
      categoryName: 'Sports',
      questionTitle: 'What is the term for a perfect game in 10-pin bowling?',
      option: [
        { answer: 'Strike', correct: false },
        { answer: 'Gutter', correct: false },
        { answer: 'Spare', correct: false },
        { answer: '300', correct: true },
      ],
    },
    {
      categoryName: 'Sports',
      questionTitle: "In which sport would you perform a 'dunk'?",
      option: [
        { answer: 'Basketball', correct: true },
        { answer: 'Volleyball', correct: false },
        { answer: 'Football', correct: false },
        { answer: 'Soccer', correct: false },
      ],
    },
    {
      categoryName: 'Sports',
      questionTitle: "Which country is home to the famous sport 'Sumo'?",
      option: [
        { answer: 'China', correct: false },
        { answer: 'Japan', correct: true },
        { answer: 'Korea', correct: false },
        { answer: 'Thailand', correct: false },
      ],
    },
    {
      categoryName: 'Sports',
      questionTitle: "In which sport would you encounter a 'hole-in-one'?",
      option: [
        { answer: 'Golf', correct: true },
        { answer: 'Tennis', correct: false },
        { answer: 'Baseball', correct: false },
        { answer: 'Soccer', correct: false },
      ],
    },
    {
      categoryName: 'Music',
      questionTitle: "Which band released the album 'Abbey Road'?",
      option: [
        { answer: 'The Beatles', correct: true },
        { answer: 'The Rolling Stones', correct: false },
        { answer: 'Pink Floyd', correct: false },
        { answer: 'Led Zeppelin', correct: false },
      ],
    },
    {
      categoryName: 'Music',
      questionTitle: "Who is known as the 'King of Pop'?",
      option: [
        { answer: 'Elvis Presley', correct: false },
        { answer: 'Michael Jackson', correct: true },
        { answer: 'Prince', correct: false },
        { answer: 'Madonna', correct: false },
      ],
    },
    {
      categoryName: 'Music',
      questionTitle: "What genre is the song 'Billie Jean'?",
      option: [
        { answer: 'Rock', correct: false },
        { answer: 'Pop', correct: true },
        { answer: 'Jazz', correct: false },
        { answer: 'Country', correct: false },
      ],
    },
    {
      categoryName: 'Music',
      questionTitle:
        "Which musical instrument is known as the 'King of Instruments'?",
      option: [
        { answer: 'Piano', correct: false },
        { answer: 'Guitar', correct: false },
        { answer: 'Violin', correct: false },
        { answer: 'Organ', correct: true },
      ],
    },
    {
      categoryName: 'Music',
      questionTitle:
        "Which artist is famous for the song 'Like a Rolling Stone'?",
      option: [
        { answer: 'Bob Dylan', correct: true },
        { answer: 'Bruce Springsteen', correct: false },
        { answer: 'Neil Young', correct: false },
        { answer: 'Johnny Cash', correct: false },
      ],
    },
    {
      categoryName: 'Music',
      questionTitle: 'What is the title of the famous opera by Mozart?',
      option: [
        { answer: 'Carmen', correct: false },
        { answer: 'The Magic Flute', correct: true },
        { answer: 'La Traviata', correct: false },
        { answer: 'The Barber of Seville', correct: false },
      ],
    },
    {
      categoryName: 'Music',
      questionTitle:
        "Which song is known for the line 'I will always love you'?",
      option: [
        { answer: 'Whitney Houston - I Will Always Love You', correct: true },
        { answer: 'Celine Dion - My Heart Will Go On', correct: false },
        { answer: 'Adele - Someone Like You', correct: false },
        { answer: 'Mariah Carey - Hero', correct: false },
      ],
    },
    {
      categoryName: 'Music',
      questionTitle:
        "Which genre does the song 'Smells Like Teen Spirit' belong to?",
      option: [
        { answer: 'Pop', correct: false },
        { answer: 'Rock', correct: true },
        { answer: 'Hip Hop', correct: false },
        { answer: 'Jazz', correct: false },
      ],
    },
    {
      categoryName: 'Music',
      questionTitle: "Who composed the 'Four Seasons'?",
      option: [
        { answer: 'Ludwig van Beethoven', correct: false },
        { answer: 'Antonio Vivaldi', correct: true },
        { answer: 'Johann Sebastian Bach', correct: false },
        { answer: 'Wolfgang Amadeus Mozart', correct: false },
      ],
    },
    {
      categoryName: 'Music',
      questionTitle:
        'Which song by Queen became an anthem for Live Aid in 1985?',
      option: [
        { answer: 'Bohemian Rhapsody', correct: true },
        { answer: 'We Will Rock You', correct: false },
        { answer: 'Another One Bites the Dust', correct: false },
        { answer: 'Under Pressure', correct: false },
      ],
    },
    {
      categoryName: 'Music',
      questionTitle: "Which artist is known for the album 'Born to Run'?",
      option: [
        { answer: 'Bruce Springsteen', correct: true },
        { answer: 'Bob Dylan', correct: false },
        { answer: 'Tom Petty', correct: false },
        { answer: 'Neil Young', correct: false },
      ],
    },
    {
      categoryName: 'Music',
      questionTitle:
        "What is the name of the famous song by The Beatles that includes the lyrics 'Come together, right now, over me'?",
      option: [
        { answer: 'Hey Jude', correct: false },
        { answer: 'Come Together', correct: true },
        { answer: 'Let It Be', correct: false },
        { answer: 'Here Comes the Sun', correct: false },
      ],
    },
    {
      categoryName: 'Music',
      questionTitle: 'Which instrument is commonly associated with jazz music?',
      option: [
        { answer: 'Violin', correct: false },
        { answer: 'Trumpet', correct: true },
        { answer: 'Guitar', correct: false },
        { answer: 'Piano', correct: false },
      ],
    },
    {
      categoryName: 'Music',
      questionTitle:
        'Which song by Adele won the Grammy Award for Record of the Year in 2012?',
      option: [
        { answer: 'Someone Like You', correct: false },
        { answer: 'Rolling in the Deep', correct: true },
        { answer: 'Set Fire to the Rain', correct: false },
        { answer: 'Hello', correct: false },
      ],
    },
    {
      categoryName: 'Music',
      questionTitle: 'Who is the lead singer of the band U2?',
      option: [
        { answer: 'Bono', correct: true },
        { answer: 'The Edge', correct: false },
        { answer: 'Adam Clayton', correct: false },
        { answer: 'Larry Mullen Jr.', correct: false },
      ],
    },
    {
      categoryName: 'Music',
      questionTitle:
        "Which famous composer was known for his 'Symphony No. 9'?",
      option: [
        { answer: 'Ludwig van Beethoven', correct: true },
        { answer: 'Johann Sebastian Bach', correct: false },
        { answer: 'Wolfgang Amadeus Mozart', correct: false },
        { answer: 'Franz Schubert', correct: false },
      ],
    },
    {
      categoryName: 'Music',
      questionTitle: "Which famous artist is known for the song 'Purple Rain'?",
      option: [
        { answer: 'Prince', correct: true },
        { answer: 'David Bowie', correct: false },
        { answer: 'Elton John', correct: false },
        { answer: 'Freddie Mercury', correct: false },
      ],
    },
    {
      categoryName: 'Music',
      questionTitle:
        "What genre of music is associated with the term 'grunge'?",
      option: [
        { answer: 'Rock', correct: true },
        { answer: 'Pop', correct: false },
        { answer: 'Jazz', correct: false },
        { answer: 'Classical', correct: false },
      ],
    },
    {
      categoryName: 'Music',
      questionTitle: "Which artist is known for the hit song 'Shape of You'?",
      option: [
        { answer: 'Ed Sheeran', correct: true },
        { answer: 'Justin Bieber', correct: false },
        { answer: 'Sam Smith', correct: false },
        { answer: 'Adele', correct: false },
      ],
    },
    {
      categoryName: 'Music',
      questionTitle: "Who composed the famous ballet 'Swan Lake'?",
      option: [
        { answer: 'Pyotr Ilyich Tchaikovsky', correct: true },
        { answer: 'Franz Liszt', correct: false },
        { answer: 'Johannes Brahms', correct: false },
        { answer: 'Gustav Mahler', correct: false },
      ],
    },
    {
      categoryName: 'Music',
      questionTitle:
        "Which band is famous for the album 'Dark Side of the Moon'?",
      option: [
        { answer: 'The Rolling Stones', correct: false },
        { answer: 'Led Zeppelin', correct: false },
        { answer: 'Pink Floyd', correct: true },
        { answer: 'The Who', correct: false },
      ],
    },
    {
      categoryName: 'Music',
      questionTitle:
        "What is the name of the classical piece known as 'The Four Seasons'?",
      option: [
        { answer: 'Concerto for Two Violins', correct: false },
        { answer: 'Symphony No. 40', correct: false },
        { answer: 'The Four Seasons', correct: true },
        { answer: 'Piano Concerto No. 21', correct: false },
      ],
    },
    {
      categoryName: 'Movies',
      questionTitle:
        'Which movie won the Academy Award for Best Picture in 1994?',
      option: [
        { answer: 'Pulp Fiction', correct: false },
        { answer: 'The Shawshank Redemption', correct: false },
        { answer: 'Forrest Gump', correct: true },
        { answer: 'The Usual Suspects', correct: false },
      ],
    },
    {
      categoryName: 'Movies',
      questionTitle: "Who directed the film 'Inception'?",
      option: [
        { answer: 'Steven Spielberg', correct: false },
        { answer: 'Christopher Nolan', correct: true },
        { answer: 'Martin Scorsese', correct: false },
        { answer: 'Quentin Tarantino', correct: false },
      ],
    },
    {
      categoryName: 'Movies',
      questionTitle: "Which actor played the role of Jack Dawson in 'Titanic'?",
      option: [
        { answer: 'Leonardo DiCaprio', correct: true },
        { answer: 'Brad Pitt', correct: false },
        { answer: 'Johnny Depp', correct: false },
        { answer: 'Tom Cruise', correct: false },
      ],
    },
    {
      categoryName: 'Movies',
      questionTitle:
        "What is the name of the fictional African country in 'Black Panther'?",
      option: [
        { answer: 'Wakanda', correct: true },
        { answer: 'Zamunda', correct: false },
        { answer: 'Elbonia', correct: false },
        { answer: 'Nambutu', correct: false },
      ],
    },
    {
      categoryName: 'Movies',
      questionTitle:
        "In which movie did Robert De Niro famously say, 'You talking to me?'",
      option: [
        { answer: 'Goodfellas', correct: false },
        { answer: 'Taxi Driver', correct: true },
        { answer: 'The Godfather', correct: false },
        { answer: 'Raging Bull', correct: false },
      ],
    },
    {
      categoryName: 'Movies',
      questionTitle: "Which film series features the character 'Darth Vader'?",
      option: [
        { answer: 'Star Wars', correct: true },
        { answer: 'Harry Potter', correct: false },
        { answer: 'The Lord of the Rings', correct: false },
        { answer: 'The Matrix', correct: false },
      ],
    },
    {
      categoryName: 'Movies',
      questionTitle: 'Who won the Academy Award for Best Actress in 2019?',
      option: [
        { answer: 'Renee Zellweger', correct: true },
        { answer: 'Charlize Theron', correct: false },
        { answer: 'Joaquin Phoenix', correct: false },
        { answer: 'Scarlett Johansson', correct: false },
      ],
    },
    {
      categoryName: 'Movies',
      questionTitle:
        "What is the name of the fictional school in the 'Harry Potter' series?",
      option: [
        { answer: 'Hogwarts', correct: true },
        { answer: 'Ravenclaw', correct: false },
        { answer: 'Durmstrang', correct: false },
        { answer: 'Beauxbatons', correct: false },
      ],
    },
    {
      categoryName: 'Movies',
      questionTitle:
        "Which movie features the famous line, 'Here's looking at you, kid'?",
      option: [
        { answer: 'Casablanca', correct: true },
        { answer: 'Gone with the Wind', correct: false },
        { answer: 'Citizen Kane', correct: false },
        { answer: 'The Maltese Falcon', correct: false },
      ],
    },
    {
      categoryName: 'Movies',
      questionTitle: "Who played the lead role in the film 'The Godfather'?",
      option: [
        { answer: 'Marlon Brando', correct: true },
        { answer: 'Al Pacino', correct: false },
        { answer: 'Robert De Niro', correct: false },
        { answer: 'Jack Nicholson', correct: false },
      ],
    },
    {
      categoryName: 'Movies',
      questionTitle:
        'Which movie won the Academy Award for Best Animated Feature in 2020?',
      option: [
        { answer: 'Frozen II', correct: false },
        { answer: 'Toy Story 4', correct: false },
        { answer: 'Soul', correct: true },
        { answer: 'Onward', correct: false },
      ],
    },
    {
      categoryName: 'Movies',
      questionTitle:
        'In which movie does Tom Hanks play the character Forrest Gump?',
      option: [
        { answer: 'Cast Away', correct: false },
        { answer: 'Forrest Gump', correct: true },
        { answer: 'Saving Private Ryan', correct: false },
        { answer: 'Apollo 13', correct: false },
      ],
    },
    {
      categoryName: 'Movies',
      questionTitle:
        'Which movie features a famous dance scene on a staircase?',
      option: [
        { answer: 'The Birdcage', correct: false },
        { answer: 'Saturday Night Fever', correct: true },
        { answer: 'La La Land', correct: false },
        { answer: 'Singing in the Rain', correct: false },
      ],
    },
    {
      categoryName: 'Movies',
      questionTitle: "Who directed 'Jurassic Park'?",
      option: [
        { answer: 'Steven Spielberg', correct: true },
        { answer: 'James Cameron', correct: false },
        { answer: 'George Lucas', correct: false },
        { answer: 'Ridley Scott', correct: false },
      ],
    },
    {
      categoryName: 'Movies',
      questionTitle: "What is the name of the ship in 'Titanic'?",
      option: [
        { answer: 'The Britannic', correct: false },
        { answer: 'The Lusitania', correct: false },
        { answer: 'The Titanic', correct: true },
        { answer: 'The Queen Mary', correct: false },
      ],
    },
    {
      categoryName: 'Movies',
      questionTitle: 'Who won the Academy Award for Best Director in 2018?',
      option: [
        { answer: 'Guillermo del Toro', correct: true },
        { answer: 'Christopher Nolan', correct: false },
        { answer: 'Jordan Peele', correct: false },
        { answer: 'Paul Thomas Anderson', correct: false },
      ],
    },
    {
      categoryName: 'Movies',
      questionTitle:
        "Which film features the famous quote, 'You can't handle the truth!'?",
      option: [
        { answer: 'A Few Good Men', correct: true },
        { answer: 'The Godfather', correct: false },
        { answer: '12 Angry Men', correct: false },
        { answer: 'The Shawshank Redemption', correct: false },
      ],
    },
    {
      categoryName: 'Movies',
      questionTitle:
        'Which film features a giant gorilla climbing the Empire State Building?',
      option: [
        { answer: 'King Kong', correct: true },
        { answer: 'Godzilla', correct: false },
        { answer: 'Jurassic Park', correct: false },
        { answer: 'The Incredible Hulk', correct: false },
      ],
    },
    {
      categoryName: 'Movies',
      questionTitle: "Who played the character of Neo in 'The Matrix'?",
      option: [
        { answer: 'Keanu Reeves', correct: true },
        { answer: 'Laurence Fishburne', correct: false },
        { answer: 'Hugo Weaving', correct: false },
        { answer: 'Will Smith', correct: false },
      ],
    },
    {
      categoryName: 'Movies',
      questionTitle: 'Which movie features the character Jack Sparrow?',
      option: [
        { answer: 'Pirates of the Caribbean', correct: true },
        { answer: 'The Hobbit', correct: false },
        { answer: 'Indiana Jones', correct: false },
        { answer: 'Sherlock Holmes', correct: false },
      ],
    },
    {
      categoryName: 'Movies',
      questionTitle:
        'In which film did Marlon Brando play the character Vito Corleone?',
      option: [
        { answer: 'The Godfather', correct: true },
        { answer: 'Apocalypse Now', correct: false },
        { answer: 'On the Waterfront', correct: false },
        { answer: 'A Streetcar Named Desire', correct: false },
      ],
    },
    {
      categoryName: 'Literature',
      questionTitle: "Who wrote 'Pride and Prejudice'?",
      option: [
        { answer: 'Jane Austen', correct: true },
        { answer: 'Charles Dickens', correct: false },
        { answer: 'Emily Brontë', correct: false },
        { answer: 'George Eliot', correct: false },
      ],
    },
    {
      categoryName: 'Literature',
      questionTitle:
        "Which novel begins with the line 'It was the best of times, it was the worst of times'?",
      option: [
        { answer: 'A Tale of Two Cities', correct: true },
        { answer: 'Great Expectations', correct: false },
        { answer: 'Oliver Twist', correct: false },
        { answer: 'David Copperfield', correct: false },
      ],
    },
    {
      categoryName: 'Literature',
      questionTitle: "Who is the author of '1984'?",
      option: [
        { answer: 'Aldous Huxley', correct: false },
        { answer: 'George Orwell', correct: true },
        { answer: 'Ray Bradbury', correct: false },
        { answer: 'Philip K. Dick', correct: false },
      ],
    },
    {
      categoryName: 'Literature',
      questionTitle:
        "What is the name of the hobbit hero in 'The Lord of the Rings'?",
      option: [
        { answer: 'Frodo Baggins', correct: true },
        { answer: 'Samwise Gamgee', correct: false },
        { answer: 'Gandalf', correct: false },
        { answer: 'Aragorn', correct: false },
      ],
    },
    {
      categoryName: 'Literature',
      questionTitle: 'Which play was written by William Shakespeare?',
      option: [
        { answer: 'Murder in the Cathedral', correct: false },
        { answer: 'Waiting for Godot', correct: false },
        { answer: 'Hamlet', correct: true },
        { answer: 'Death of a Salesman', correct: false },
      ],
    },
    {
      categoryName: 'Literature',
      questionTitle:
        "What is the title of the first book in the 'Harry Potter' series?",
      option: [
        { answer: 'The Chamber of Secrets', correct: false },
        { answer: 'The Goblet of Fire', correct: false },
        { answer: "Harry Potter and the Philosopher's Stone", correct: true },
        { answer: 'The Order of the Phoenix', correct: false },
      ],
    },
    {
      categoryName: 'Literature',
      questionTitle: "Who wrote 'To Kill a Mockingbird'?",
      option: [
        { answer: 'Harper Lee', correct: true },
        { answer: 'Mark Twain', correct: false },
        { answer: 'Ernest Hemingway', correct: false },
        { answer: 'John Steinbeck', correct: false },
      ],
    },
    {
      categoryName: 'Literature',
      questionTitle:
        'Which book series features a character named Katniss Everdeen?',
      option: [
        { answer: 'Divergent', correct: false },
        { answer: 'The Hunger Games', correct: true },
        { answer: 'Percy Jackson', correct: false },
        { answer: 'Maze Runner', correct: false },
      ],
    },
    {
      categoryName: 'Literature',
      questionTitle: "Who is the author of 'One Hundred Years of Solitude'?",
      option: [
        { answer: 'Gabriel Garcia Marquez', correct: true },
        { answer: 'Jorge Luis Borges', correct: false },
        { answer: 'Mario Vargas Llosa', correct: false },
        { answer: 'Isabel Allende', correct: false },
      ],
    },
    {
      categoryName: 'Literature',
      questionTitle: 'What is the title of the epic poem by Homer?',
      option: [
        { answer: 'The Iliad', correct: false },
        { answer: 'The Odyssey', correct: true },
        { answer: 'The Aeneid', correct: false },
        { answer: 'The Divine Comedy', correct: false },
      ],
    },
    {
      categoryName: 'Literature',
      questionTitle: "Who wrote 'Brave New World'?",
      option: [
        { answer: 'Aldous Huxley', correct: true },
        { answer: 'George Orwell', correct: false },
        { answer: 'J.D. Salinger', correct: false },
        { answer: 'Ray Bradbury', correct: false },
      ],
    },
    {
      categoryName: 'Literature',
      questionTitle: 'Which novel by J.D. Salinger features Holden Caulfield?',
      option: [
        { answer: 'The Catcher in the Rye', correct: true },
        { answer: 'Franny and Zooey', correct: false },
        { answer: 'Raise High the Roof Beam, Carpenters', correct: false },
        { answer: 'Nine Stories', correct: false },
      ],
    },
    {
      categoryName: 'Literature',
      questionTitle:
        "What is the name of the detective in Arthur Conan Doyle's stories?",
      option: [
        { answer: 'Hercule Poirot', correct: false },
        { answer: 'Sherlock Holmes', correct: true },
        { answer: 'Miss Marple', correct: false },
        { answer: 'Philip Marlowe', correct: false },
      ],
    },
    {
      categoryName: 'Literature',
      questionTitle: "Who wrote 'Moby Dick'?",
      option: [
        { answer: 'Herman Melville', correct: true },
        { answer: 'Mark Twain', correct: false },
        { answer: 'Nathaniel Hawthorne', correct: false },
        { answer: 'Edgar Allan Poe', correct: false },
      ],
    },
    {
      categoryName: 'Literature',
      questionTitle: 'Which novel is set in the dystopian future of Gilead?',
      option: [
        { answer: "The Handmaid's Tale", correct: true },
        { answer: '1984', correct: false },
        { answer: 'Brave New World', correct: false },
        { answer: 'Fahrenheit 451', correct: false },
      ],
    },
    {
      categoryName: 'Literature',
      questionTitle: "Who wrote 'The Great Gatsby'?",
      option: [
        { answer: 'F. Scott Fitzgerald', correct: true },
        { answer: 'Ernest Hemingway', correct: false },
        { answer: 'John Steinbeck', correct: false },
        { answer: 'William Faulkner', correct: false },
      ],
    },
    {
      categoryName: 'Literature',
      questionTitle:
        "What is the name of the author who wrote 'The Chronicles of Narnia'?",
      option: [
        { answer: 'J.K. Rowling', correct: false },
        { answer: 'C.S. Lewis', correct: true },
        { answer: 'J.R.R. Tolkien', correct: false },
        { answer: 'Philip Pullman', correct: false },
      ],
    },
    {
      categoryName: 'Literature',
      questionTitle:
        'Which book is considered a classic of Russian literature and written by Leo Tolstoy?',
      option: [
        { answer: 'Crime and Punishment', correct: false },
        { answer: 'Anna Karenina', correct: true },
        { answer: 'The Brothers Karamazov', correct: false },
        { answer: 'The Master and Margarita', correct: false },
      ],
    },
    {
      categoryName: 'Literature',
      questionTitle: "Who wrote the novel 'Don Quixote'?",
      option: [
        { answer: 'Miguel de Cervantes', correct: true },
        { answer: 'Gabriel Garcia Marquez', correct: false },
        { answer: 'Jorge Luis Borges', correct: false },
        { answer: 'Pablo Neruda', correct: false },
      ],
    },
    {
      categoryName: 'Literature',
      questionTitle: 'Which novel features the character Holden Caulfield?',
      option: [
        { answer: 'The Catcher in the Rye', correct: true },
        { answer: 'To Kill a Mockingbird', correct: false },
        { answer: 'The Bell Jar', correct: false },
        { answer: 'On the Road', correct: false },
      ],
    },
    {
      categoryName: 'Technology',
      questionTitle: "What does 'HTTP' stand for?",
      option: [
        { answer: 'HyperText Transfer Protocol', correct: true },
        { answer: 'HyperText Transmission Protocol', correct: false },
        { answer: 'HyperTransfer Text Protocol', correct: false },
        { answer: 'Hypertext Transfer Protocol', correct: false },
      ],
    },
    {
      categoryName: 'Technology',
      questionTitle: 'Which company developed the Windows operating system?',
      option: [
        { answer: 'Apple', correct: false },
        { answer: 'Microsoft', correct: true },
        { answer: 'IBM', correct: false },
        { answer: 'Google', correct: false },
      ],
    },
    {
      categoryName: 'Technology',
      questionTitle: 'Who is known as the father of the World Wide Web?',
      option: [
        { answer: 'Tim Berners-Lee', correct: true },
        { answer: 'Bill Gates', correct: false },
        { answer: 'Steve Jobs', correct: false },
        { answer: 'Vint Cerf', correct: false },
      ],
    },
    {
      categoryName: 'Technology',
      questionTitle:
        'Which programming language is known for its use in web development?',
      option: [
        { answer: 'Java', correct: false },
        { answer: 'Python', correct: false },
        { answer: 'JavaScript', correct: true },
        { answer: 'C++', correct: false },
      ],
    },
    {
      categoryName: 'Technology',
      questionTitle: 'What is the primary function of a GPU?',
      option: [
        { answer: 'Data Storage', correct: false },
        { answer: 'Processing Graphics', correct: true },
        { answer: 'Managing System Memory', correct: false },
        { answer: 'Network Communication', correct: false },
      ],
    },
    {
      categoryName: 'Technology',
      questionTitle: "What does 'USB' stand for?",
      option: [
        { answer: 'Universal Serial Bus', correct: true },
        { answer: 'Universal System Bus', correct: false },
        { answer: 'Universal Service Bus', correct: false },
        { answer: 'Universal Serial Band', correct: false },
      ],
    },
    {
      categoryName: 'Technology',
      questionTitle: 'What is the main purpose of an operating system?',
      option: [
        { answer: 'To manage hardware and software resources', correct: true },
        { answer: 'To compile source code', correct: false },
        { answer: 'To run applications only', correct: false },
        { answer: 'To connect to the internet', correct: false },
      ],
    },
    {
      categoryName: 'Technology',
      questionTitle: 'Which company is known for its iPhone and iPad devices?',
      option: [
        { answer: 'Samsung', correct: false },
        { answer: 'Sony', correct: false },
        { answer: 'Apple', correct: true },
        { answer: 'Huawei', correct: false },
      ],
    },
    {
      categoryName: 'Technology',
      questionTitle:
        'What technology is used for creating virtual private networks (VPNs)?',
      option: [
        { answer: 'HTTP', correct: false },
        { answer: 'IPSec', correct: true },
        { answer: 'FTP', correct: false },
        { answer: 'SMTP', correct: false },
      ],
    },
    {
      categoryName: 'Technology',
      questionTitle:
        'Which company is the creator of the Android operating system?',
      option: [
        { answer: 'Apple', correct: false },
        { answer: 'Google', correct: true },
        { answer: 'Microsoft', correct: false },
        { answer: 'IBM', correct: false },
      ],
    },
    {
      categoryName: 'Technology',
      questionTitle: "What is the primary function of an 'IP address'?",
      option: [
        { answer: 'To identify devices on a network', correct: true },
        { answer: 'To encrypt data', correct: false },
        { answer: 'To manage memory', correct: false },
        { answer: 'To store files', correct: false },
      ],
    },
    {
      categoryName: 'Technology',
      questionTitle:
        "Which technology company is known for the slogan 'Think Different'?",
      option: [
        { answer: 'Microsoft', correct: false },
        { answer: 'Apple', correct: true },
        { answer: 'IBM', correct: false },
        { answer: 'Intel', correct: false },
      ],
    },
    {
      categoryName: 'Technology',
      questionTitle: "What does 'AI' stand for in technology?",
      option: [
        { answer: 'Artificial Intelligence', correct: true },
        { answer: 'Automatic Integration', correct: false },
        { answer: 'Advanced Interface', correct: false },
        { answer: 'Algorithmic Instruction', correct: false },
      ],
    },
    {
      categoryName: 'Technology',
      questionTitle:
        'Which social media platform was founded by Mark Zuckerberg?',
      option: [
        { answer: 'Twitter', correct: false },
        { answer: 'Instagram', correct: false },
        { answer: 'Facebook', correct: true },
        { answer: 'LinkedIn', correct: false },
      ],
    },
    {
      categoryName: 'Technology',
      questionTitle: "What is the primary function of a 'router' in a network?",
      option: [
        { answer: 'To route network traffic', correct: true },
        { answer: 'To store data', correct: false },
        { answer: 'To run applications', correct: false },
        { answer: 'To manage power', correct: false },
      ],
    },
    {
      categoryName: 'Technology',
      questionTitle: "What does 'Wi-Fi' stand for?",
      option: [
        { answer: 'Wireless Fidelity', correct: true },
        { answer: 'Wireless Frequency', correct: false },
        { answer: 'Wireless Finder', correct: false },
        { answer: 'Wireless Field', correct: false },
      ],
    },
    {
      categoryName: 'Technology',
      questionTitle:
        'Which programming language is known for its use in data science and machine learning?',
      option: [
        { answer: 'Java', correct: false },
        { answer: 'Python', correct: true },
        { answer: 'C#', correct: false },
        { answer: 'Ruby', correct: false },
      ],
    },
    {
      categoryName: 'Technology',
      questionTitle:
        "What is the purpose of a 'firewall' in computer security?",
      option: [
        { answer: 'To prevent unauthorized access', correct: true },
        { answer: 'To store files', correct: false },
        { answer: 'To improve internet speed', correct: false },
        { answer: 'To run applications', correct: false },
      ],
    },
    {
      categoryName: 'Technology',
      questionTitle:
        "Which company is known for its 'Surface' line of tablets and laptops?",
      option: [
        { answer: 'Apple', correct: false },
        { answer: 'Microsoft', correct: true },
        { answer: 'Dell', correct: false },
        { answer: 'HP', correct: false },
      ],
    },
    {
      categoryName: 'Technology',
      questionTitle: "What does 'URL' stand for?",
      option: [
        { answer: 'Uniform Resource Locator', correct: true },
        { answer: 'Universal Resource Locator', correct: false },
        { answer: 'Uniform Reference Locator', correct: false },
        { answer: 'Universal Reference Locator', correct: false },
      ],
    },
    {
      categoryName: 'Technology',
      questionTitle:
        'Which technology is used to make phone calls over the internet?',
      option: [
        { answer: 'VoIP', correct: true },
        { answer: 'VPN', correct: false },
        { answer: 'HTTP', correct: false },
        { answer: 'FTP', correct: false },
      ],
    },
    {
      categoryName: 'Technology',
      questionTitle: "What does 'SSD' stand for in computing?",
      option: [
        { answer: 'Solid State Drive', correct: true },
        { answer: 'Solid State Disk', correct: false },
        { answer: 'System Storage Device', correct: false },
        { answer: 'Sequential Storage Device', correct: false },
      ],
    },
    {
      categoryName: 'Technology',
      questionTitle:
        "Which company is known for its search engine and 'AdWords' advertising platform?",
      option: [
        { answer: 'Yahoo', correct: false },
        { answer: 'Microsoft', correct: false },
        { answer: 'Google', correct: true },
        { answer: 'Bing', correct: false },
      ],
    },
    {
      categoryName: 'Technology',
      questionTitle: "What is the primary function of 'RAM' in a computer?",
      option: [
        { answer: 'To store data permanently', correct: false },
        {
          answer: 'To execute programs and store temporary data',
          correct: true,
        },
        { answer: 'To manage network connections', correct: false },
        { answer: 'To cool down the computer', correct: false },
      ],
    },
    {
      categoryName: 'General Knowledge',
      questionTitle: 'Who was the first person to walk on the Moon?',
      option: [
        { answer: 'Neil Armstrong', correct: true },
        { answer: 'Buzz Aldrin', correct: false },
        { answer: 'Michael Collins', correct: false },
        { answer: 'Yuri Gagarin', correct: false },
      ],
    },
    {
      categoryName: 'General Knowledge',
      questionTitle: 'What is the capital city of France?',
      option: [
        { answer: 'Paris', correct: true },
        { answer: 'London', correct: false },
        { answer: 'Rome', correct: false },
        { answer: 'Berlin', correct: false },
      ],
    },
    {
      categoryName: 'General Knowledge',
      questionTitle: 'Which planet is known as the Red Planet?',
      option: [
        { answer: 'Mars', correct: true },
        { answer: 'Venus', correct: false },
        { answer: 'Jupiter', correct: false },
        { answer: 'Saturn', correct: false },
      ],
    },
    {
      categoryName: 'General Knowledge',
      questionTitle: 'What is the largest ocean on Earth?',
      option: [
        { answer: 'Pacific Ocean', correct: true },
        { answer: 'Atlantic Ocean', correct: false },
        { answer: 'Indian Ocean', correct: false },
        { answer: 'Arctic Ocean', correct: false },
      ],
    },
    {
      categoryName: 'General Knowledge',
      questionTitle: "Who wrote the play 'Romeo and Juliet'?",
      option: [
        { answer: 'William Shakespeare', correct: true },
        { answer: 'George Bernard Shaw', correct: false },
        { answer: 'Christopher Marlowe', correct: false },
        { answer: 'Tennessee Williams', correct: false },
      ],
    },
    {
      categoryName: 'General Knowledge',
      questionTitle: 'What is the chemical symbol for gold?',
      option: [
        { answer: 'Au', correct: true },
        { answer: 'Ag', correct: false },
        { answer: 'Fe', correct: false },
        { answer: 'Pb', correct: false },
      ],
    },
    {
      categoryName: 'General Knowledge',
      questionTitle: 'What is the smallest unit of life?',
      option: [
        { answer: 'Atom', correct: false },
        { answer: 'Cell', correct: true },
        { answer: 'Molecule', correct: false },
        { answer: 'Organ', correct: false },
      ],
    },
    {
      categoryName: 'General Knowledge',
      questionTitle: 'Which country is known as the Land of the Rising Sun?',
      option: [
        { answer: 'China', correct: false },
        { answer: 'Japan', correct: true },
        { answer: 'South Korea', correct: false },
        { answer: 'Thailand', correct: false },
      ],
    },
    {
      categoryName: 'General Knowledge',
      questionTitle: 'Who painted the Mona Lisa?',
      option: [
        { answer: 'Leonardo da Vinci', correct: true },
        { answer: 'Vincent van Gogh', correct: false },
        { answer: 'Pablo Picasso', correct: false },
        { answer: 'Claude Monet', correct: false },
      ],
    },
    {
      categoryName: 'General Knowledge',
      questionTitle: 'What is the longest river in the world?',
      option: [
        { answer: 'Nile', correct: true },
        { answer: 'Amazon', correct: false },
        { answer: 'Yangtze', correct: false },
        { answer: 'Mississippi', correct: false },
      ],
    },
    {
      categoryName: 'General Knowledge',
      questionTitle: "Which element is represented by the symbol 'O'?",
      option: [
        { answer: 'Oxygen', correct: true },
        { answer: 'Osmium', correct: false },
        { answer: 'Oganesson', correct: false },
        { answer: 'Oganesson', correct: false },
      ],
    },
    {
      categoryName: 'General Knowledge',
      questionTitle: 'What is the hardest natural substance on Earth?',
      option: [
        { answer: 'Diamond', correct: true },
        { answer: 'Gold', correct: false },
        { answer: 'Iron', correct: false },
        { answer: 'Quartz', correct: false },
      ],
    },
    {
      categoryName: 'General Knowledge',
      questionTitle: 'What is the official language of Brazil?',
      option: [
        { answer: 'Spanish', correct: false },
        { answer: 'Portuguese', correct: true },
        { answer: 'French', correct: false },
        { answer: 'English', correct: false },
      ],
    },
    {
      categoryName: 'General Knowledge',
      questionTitle: 'Which continent is the Sahara Desert located on?',
      option: [
        { answer: 'Africa', correct: true },
        { answer: 'Asia', correct: false },
        { answer: 'Australia', correct: false },
        { answer: 'South America', correct: false },
      ],
    },
    {
      categoryName: 'General Knowledge',
      questionTitle: 'What is the capital of Canada?',
      option: [
        { answer: 'Toronto', correct: false },
        { answer: 'Vancouver', correct: false },
        { answer: 'Montreal', correct: false },
        { answer: 'Ottawa', correct: true },
      ],
    },
    {
      categoryName: 'General Knowledge',
      questionTitle: 'What is the largest mammal in the world?',
      option: [
        { answer: 'Elephant', correct: false },
        { answer: 'Blue Whale', correct: true },
        { answer: 'Giraffe', correct: false },
        { answer: 'Hippopotamus', correct: false },
      ],
    },
    {
      categoryName: 'General Knowledge',
      questionTitle: 'Who invented the telephone?',
      option: [
        { answer: 'Alexander Graham Bell', correct: true },
        { answer: 'Thomas Edison', correct: false },
        { answer: 'Nikola Tesla', correct: false },
        { answer: 'Guglielmo Marconi', correct: false },
      ],
    },
    {
      categoryName: 'General Knowledge',
      questionTitle: 'Which planet is closest to the Sun?',
      option: [
        { answer: 'Mercury', correct: true },
        { answer: 'Venus', correct: false },
        { answer: 'Earth', correct: false },
        { answer: 'Mars', correct: false },
      ],
    },
    {
      categoryName: 'General Knowledge',
      questionTitle: 'What is the smallest country in the world by land area?',
      option: [
        { answer: 'Monaco', correct: false },
        { answer: 'Vatican City', correct: true },
        { answer: 'San Marino', correct: false },
        { answer: 'Liechtenstein', correct: false },
      ],
    },
    {
      categoryName: 'General Knowledge',
      questionTitle: 'Which scientist developed the theory of relativity?',
      option: [
        { answer: 'Isaac Newton', correct: false },
        { answer: 'Albert Einstein', correct: true },
        { answer: 'Galileo Galilei', correct: false },
        { answer: 'Niels Bohr', correct: false },
      ],
    },
    {
      categoryName: 'General Knowledge',
      questionTitle: 'What is the capital of Australia?',
      option: [
        { answer: 'Sydney', correct: false },
        { answer: 'Melbourne', correct: false },
        { answer: 'Canberra', correct: true },
        { answer: 'Brisbane', correct: false },
      ],
    },
  ],
};

export default dummyData;
