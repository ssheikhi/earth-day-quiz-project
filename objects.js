const steps = [
    {
        id: 'step 1',
        question: `What are you up to on a typical Friday night?`,
        choices: [
            { text: `Alone in my burrow`, score: 5 },
            { text: `Rarely seen out`, score: 2 },
            { text: `Strutting my stuff`, score: 4 },
            { text: `Following the herd`, score: 3 }
        ]
    },
    {
        id: 'step 2',
        question: `You and your best friend show up to a party wearing the same outfit. What's your reaction?`,
        choices: [
            { text: `No big deal`, score: 5 },
            { text: `How embarrassing!`, score: 1 },
            { text: `Fight!`, score: 2 },
            { text: `Change outfits`, score: 3 }
        ]
    },
    {
        id: 'step 3',
        question: `Choose a snack:`,
        choices: [
            { text: `Seafood`, score: 5 },
            { text: `Fruit and/or insects`, score: 4 },
            { text: `Meat`, score: 2 },
            { text: `Salad`, score: 1 }
        ]
    },
    {
        id: 'step 4',
        question: `What do you look for in a partner?`,
        choices: [
            { text: `Bright colours`, score: 2 },
            { text: `Loud grunting sounds`, score: 3 },
            { text: `A complex system of glands`, score: 1 },
            { text: `Old-fashioned values`, score: 4 }
        ]
    },
    {
        id: 'step 5',
        question: `Choose a hobby:`,
        choices: [
            { text: `Feats of strength`, score: 3 },
            { text: `Work around the house`, score: 2 },
            { text: `Swimming`, score: 5 },
            { text: `None of the above`, score: 1 }
        ]
    }
];


const results = [
    { name: "Sea Otter", description: "Social and playful", image: "./images/sea_otter.jpg" },
    { name: "Honey Bee", description: "Hard-working and communal", image: "./images/honey_bee.jpg" },
    { name: "Whooping Crane", description: "Loyal team player", image: "./images/whooping_crane.jpg" },
    { name: "Pangolin", description: "Practical and protective", image: "./images/pangolin.jpg" },
    { name: "Red-Capped Manakin", description: "Loves to dance", image: "./images/red_capped_manakin.jpg" },
    { name: "Woolly Mammoth", description: "Unique and resilient", image: "./images/woolly_mammoth.jpg" },
    { name: "Cuttlefish", description: "Intelligent and adaptable", image: "./images/cuttlefish.jpg" },
    { name: "Komodo Dragon", description: "Fearless and strong", image: "./images/komodo_dragon.jpg" },
    { name: "Mantis Shrimp", description: "Creative and colorful", image: "./images/mantis_shrimp.jpg" },
    { name: "Honey Badger", description: "Tough and determined", image: "./images/honey_badger.jpg" }
];



export { steps, results };

