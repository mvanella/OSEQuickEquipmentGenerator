const data = {
  "classes": {
      "Acrobat": {"armor": "Leather", "weaponTable": "acrobatWeapons", "weaponCount": 2, "extra": []},
      "Assassin": {"armor": "Leather", "weaponTable": "weapons", "weaponCount": 2, "extra": []},
      "Barbarian": {"armor": "1d4", "weaponTable": "weapons", "weaponCount": 2, "extra": []},
      "Bard": {"armor": "1d4", "ignoreShields": true, "weaponTable": "bardWeapons", "weaponCount": 2, "extra": []},
      "Cleric": {"armor": "1d6", "weaponTable": "clericWeapons", "weaponCount": 2, "extra": ["Holy symbol"]},
      "Drow": {"armor": "1d6", "weaponTable": "weapons", "weaponCount": 2, "extra": ["Holy symbol"]},
      "Druid": {"armor": "Leather", "weaponTable": "druidWeapons", "weaponCount": 2, "extra": ["Sprig of mistletoe"]},
      "Duergar": {"armor": "1d6", "weaponTable": "weapons", "weaponCount": 2, "extra": []},
      "Dwarf": {"armor": "1d6", "weaponTable": "weapons", "weaponCount": 2, "extra": []},
      "Elf": {"armor": "1d6", "weaponTable": "weapons", "weaponCount": 2, "extra": []},
      "Fighter": {"armor": "1d6", "weaponTable": "weapons", "weaponCount": 2, "extra": []},
      "Gnome": {"armor": "Leather", "weaponTable": "weapons", "weaponCount": 2, "extra": []},
      "Halfling": {"armor": "1d6", "weaponTable": "weapons", "weaponCount": 2, "extra": []},
      "Half-elf": {"armor": "1d6", "weaponTable": "weapons", "weaponCount": 2, "extra": []},
      "Half-orc": {"armor": "1d4", "weaponTable": "weapons", "weaponCount": 2, "extra": []},
      "Illusionist": {"armor": "None", "weaponTable": "daggers", "weaponCount": 1, "extra": []},
      "Knight": {"armor": "1d4+2", "weaponTable": "knightWeapons", "weaponCount": 2, "extra": []},
      "Magic-user": {"armor": "None", "weaponTable": "daggers", "weaponCount": 1, "extra": []},
      "Paladin": {"armor": "1d6", "weaponTable": "weapons", "weaponCount": 2, "extra": ["Holy symbol"]},
      "Ranger": {"armor": "1d4", "weaponTable": "weapons", "weaponCount": 2, "extra": []},
      "Svirfneblin": {"armor": "1d6", "weaponTable": "weapons", "weaponCount": 2, "extra": []},
      "Thief": {"armor": "Leather", "weaponTable": "weapons", "weaponCount": 2, "extra": ["Thieves' tools"]},
      "Acolyte": {"armor": "1d6", "weaponTable": "bluntWeapons", "weaponCount": 2, "extra": ["Holy Symbol"]},
      "Gargantua": {"armor": "1d6","weaponTable":"weapons","weaponCount":2,"extra":[]},
      "Goblin":{"armor":"1d6","weaponTable":"weapons","weaponCount":2,"extra":[]},
      "Hephaestan":{"armor":"1d4","weaponTable":"weapons","weaponCount":2,"extra":[]},
      "Kineticist":{"armor":"None","weaponTable":"weapons","weaponCount":2,"extra":[]},
      "Mage":{"armor":"None","weaponTable":"mageWeapons","weaponCount":2,"extra":[]},
      "Phase Elf":{"armor": "1d6","weaponTable":"weapons","weaponCount":2,"extra":[]},
      "Wood Elf":{"armor":"1d2","weaponTable":"weapons","weaponCount":2,"extra":[]},
      "Beast Master":{"armor":"1d4","weaponTable":"weapons","weaponCount":2,"extra":[]},
      "Dragonborn":{"armor":"1d6","weaponTable":"weapons","weaponCount":2,"extra":[]},
      "Mutoid":{"armor":"1d2","weaponTable":"mutoidWeapons","weaponCount":2,"extra":[]},
      "Mycelian":{"armor":"1d2","shieldsOnly":true,"weaponTable":"weapons","weaponCount":2,"extra":[]},
      "Tiefling":{"armor":"1d4","weaponTable":"weapons","weaponCount":2,"extra":[]}
  },
  "armor": ["Leather", "Leather + shield", "Chainmail", "Chainmail + shield", "Plate mail", "Plate mail + shield"],
  "adventuringGear": ["Crowbar", "Hammer (small) + 12 iron spikes", "Holy water", "Lantern + 3 flasks of oil", "Mirror (hand-sized, steel)", "Pole (10' long, wooden)", "Rope (50')", "Rope (50’) + grappling hook", "Sack (large)", "Sack (small)", "Stakes (3) + mallet", "Wolfsbane (1 bunch)"],
  "weapons": ["Battle axe", "Crossbow + 20 bolts", "Hand axe", "Mace", "Pole arm", "Short bow + 20 arrows", "Short sword", "Silver dagger", "Sling + 20 stones", "Spear", "Sword", "War hammer"],
  "acrobatWeapons": ["Pole arm", "Short bow + 20 arrows", "Spear", "Staff"],
  "bardWeapons": ["Crossbow + 20 bolts", "Short sword", "Sling + 20 stones", "Sword"],
  "clericWeapons": ["Mace", "Sling + 20 stones", "Staff", "War hammer"],
  "druidWeapons": ["Club", "Dagger", "Sling + 20 stones", "Staff"],
  "knightWeapons": ["Lance", "Short sword", "Sword", "War hammer"],
  "daggers": ["Dagger"],
  "bluntWeapons": ["Club","Mace","Sling + 20 stones","Staff", "War hammer"],
  "mageWeapons":["Dagger","Short sword","Staff","Sword"],
  "mutoidWeapons":["Crossbow + 20 bolts", "Hand axe", "Mace", "Short bow + 20 arrows", "Short sword", "Silver dagger", "Sling + 20 stones", "Spear", "Sword", "War hammer"],
  "initialGear": ["Backpack", "Tinder box", "Waterskin"],
}