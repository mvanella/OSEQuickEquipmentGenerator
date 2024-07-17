function rollDice(sides, numberOfDice = 1) {
    let total = 0;
    for (let i = 0; i < numberOfDice; i++) {
        total += Math.floor(Math.random() * sides) + 1;
    }
    return total;
}

function rollDiceString(rollString) {
    const regex = /^(\d*)d(\d+)([-+]\d+)?$/;
    const match = rollString.match(regex);

    if (!match) {
        throw new Error("Invalid roll string format");
    }

    const numberOfDice = match[1] ? parseInt(match[1], 10) : 1;
    const sides = parseInt(match[2], 10);
    const modifier = match[3] ? parseInt(match[3], 10) : 0;

    let total = 0;
    for (let i = 0; i < numberOfDice; i++) {
        total += Math.floor(Math.random() * sides) + 1;
    }

    total += modifier;

    return total;
}

function rollOnTable(table, ignoreShields = false) {
    let roll = rollDice(table.length);
    if(ignoreShields && !isOdd(roll)){
        roll -= 1;
    }
    return table[roll - 1];
}

function rollOnTableString(table, rollString, ignoreShields = false){
    let roll = rollDiceString(rollString);
    if(ignoreShields && !isOdd(roll)){
        roll -= 1;
    }
    return table[roll - 1];
}

function rollMultipleOnTableDistinct(table, times) {
    const results = [];
    const rolledIndices = new Set();

    while (results.length < times) {
        const rollIndex = rollDice(table.length) - 1;

        if (!rolledIndices.has(rollIndex)) {
            rolledIndices.add(rollIndex);
            results.push(table[rollIndex]);
        }
    }

    return results;
}

function isOdd(num) {
    return num%2;
}

function ViewModel() {
    const self = this;
    self.classList = Object.keys(data.classes);
    self.selectedClass = ko.observable(self.classList[0]);
    self.armor = ko.observable();
    self.weapons = ko.observable();
    self.adventuringGear = ko.observableArray();
    self.extraItems = ko.observable();
    self.equipmentGenerated = ko.observable(false);

    self.generateEquipment = function() {
        const selectedClass = self.selectedClass();
        const classData = data.classes[selectedClass];
        self.adventuringGear([]);

        // Generate armor
        let armor = classData.armor;
        if(classData.shieldsOnly){
            armor = rollDice(2) == 1 ? "None" : "Shield";
        }
        else if (armor.includes("1d")) {
            armor = rollOnTableString(data.armor, armor, classData.ignoreShields === true);
        }
        self.armor(armor);

        // Generate weapons
        const weaponTable = data[classData.weaponTable];
        const weapons = rollMultipleOnTableDistinct(weaponTable, classData.weaponCount);
        self.weapons(weapons.join(", "));

        // Generate initial gear
        self.adventuringGear.push(... data.initialGear);

        // Roll for gold, torches, and rations
        const goldCount = rollDice(6,3);
        const torchCount = rollDice(6);
        const ironRationCount = rollDice(6);
        self.adventuringGear.push(`${goldCount} GP`);
        self.adventuringGear.push(`${torchCount} Torches`);
        self.adventuringGear.push(`${ironRationCount} Iron Rations`);

        // Generate adventuring gear from table
        const generatedGear = rollMultipleOnTableDistinct(data.adventuringGear, 2);

        // Set adventuring gear
        self.adventuringGear.push(... generatedGear);

        // Set extra items
        self.extraItems(classData.extra.join(", "));

        self.equipmentGenerated(true);
    };
}

ko.applyBindings(new ViewModel());
