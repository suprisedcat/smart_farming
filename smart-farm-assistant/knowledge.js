const farmingTopics = {
  // --- VEGETABLES ---
  
  carrot: {
    harvestDays: [70, 80],
    keywords: ["carrot", "carrots", "orange root"],
    responses: {
      overview: "Carrots love cool weather and loose, sandy soil so they can grow straight and long.",
      tips: [
        "Make sure your soil is soft and has no big rocks, or your carrots might grow into funny shapes!",
        "Keep the soil moist until you see the tiny green sprouts pop up.",
        "Thin them out so each carrot has about 2-3 inches of space to grow big."
      ],
      faqs: {
        soil: "Loose, sandy soil is best. If your soil is hard clay, try growing them in a raised bed.",
        bitter: "If they taste bitter, they might have been in the ground too long or got too hot."
      },
      suggestions: ["How to sow carrot seeds", "Best carrot varieties", "When to harvest carrots"]
    }
  },
  
  potato: {
    harvestDays: [90, 120],
    keywords: ["potato", "potatoes", "spuds", "tuber"],
    responses: {
      overview: "Potatoes are fun to grow! You plant a piece of a potato and get a whole bunch back.",
      tips: [
        "Pile soil up around the stems (hilling) as they grow to keep the new potatoes covered and away from the sun.",
        "Wait until the plants turn yellow and die back before you dig up the big potatoes.",
        "Don't plant them where you just grew tomatoes or peppers, as they share the same bugs and sicknesses."
      ],
      faqs: {
        green: "If a potato turns green, don't eat it! It means it was in the sun too long and became bitter.",
        harvest: "You can dig up 'new' potatoes early, or wait for the plant to die for the full-sized ones."
      },
      suggestions: ["How to hill potatoes", "Growing potatoes in bags", "Storing potatoes for winter"]
    }
  },

  tomato: {
    harvestDays: [60, 100],
    keywords: ["tomato", "tomatoes", "cherry tomato", "roma"],
    responses: {
      overview: "Tomatoes are the stars of the summer garden. They love heat, sun, and plenty of food.",
      tips: [
        "Give them a cage or a stake to climb on so the heavy fruit doesn't pull the plant down.",
        "Water the dirt at the bottom, not the leaves, to keep the plant from getting sick.",
        "Pinch off the 'suckers' (the tiny stems growing in the 'V' between branches) to help the plant focus on fruit."
      ],
      faqs: {
        cracking: "If your tomatoes crack open, it's usually because they got a big gulp of water after being dry for too long.",
        sun: "They need at least 6-8 hours of direct sun every day to be happy."
      },
      suggestions: ["How to prune tomatoes", "Best fertilizer for tomatoes", "Stopping tomato pests"]
    }
  },

  pepper: {
    harvestDays: [60, 90],
    keywords: ["pepper", "peppers", "bell pepper", "chili", "capsicum"],
    responses: {
      overview: "Peppers love the heat! Whether they're sweet or spicy, they need warm soil to get started.",
      tips: [
        "Don't put them outside until the nights are consistently warm.",
        "They have shallow roots, so a layer of mulch helps keep the ground from drying out.",
        "Pick them often to encourage the plant to keep making more peppers."
      ],
      faqs: {
        heat: "Hot peppers get spicier if they're a little bit thirsty, but sweet peppers need regular water.",
        color: "Most peppers start green and turn red, yellow, or orange as they get sweeter and riper."
      },
      suggestions: ["Growing hot peppers", "Why are my peppers small?", "Starting peppers from seed"]
    }
  },

  onion: {
    harvestDays: [100, 120],
    keywords: ["onion", "onions", "scallion", "bulb"],
    responses: {
      overview: "Onions are tough and can be started from seeds, tiny bulbs (sets), or small plants.",
      tips: [
        "Keep the area around them weed-free because onions don't like to compete for food.",
        "When the tops turn brown and fall over, it's time to pull them up and let them dry.",
        "Make sure the soil drains well so the bulbs don't rot in the ground."
      ],
      faqs: {
        bolting: "If they grow a flower, use them right away—they won't store well for long.",
        types: "Some onions like long days and some like short days, so pick the right one for where you live!"
      },
      suggestions: ["Sets vs seeds", "When to harvest onions", "Curing onions for storage"]
    }
  },

  garlic: {
    harvestDays: [240, 270],
    keywords: ["garlic", "clove", "bulb"],
    responses: {
      overview: "Garlic is easy to grow! You plant it in the fall, let it sleep through winter, and harvest in early summer.",
      tips: [
        "Plant the individual cloves with the pointy end up and the flat end down.",
        "Cut off the curly 'scapes' in the spring so the plant puts all its energy into the bulb.",
        "Stop watering a few weeks before harvest to help the skins dry out."
      ],
      faqs: {
        planting: "Late October or November is the best time to plant for most people.",
        harvest: "Dig them up when the bottom 3-4 leaves turn brown but the top ones are still green."
      },
      suggestions: ["How to plant garlic", "Hardneck vs softneck garlic", "What are garlic scapes?"]
    }
  },

  lettuce: {
    harvestDays: [30, 60],
    keywords: ["lettuce", "salad", "romaine"],
    responses: {
      overview: "Lettuce is a quick-growing crop that loves cool weather and can even handle a light frost.",
      tips: [
        "Plant small amounts every two weeks so you have fresh salad all season long.",
        "If it gets too hot, give it some shade or it will turn bitter and grow a flower (bolt).",
        "You can just snip the outer leaves and let the middle keep growing for more harvests."
      ],
      faqs: {
        bitter: "Bitterness usually comes from too much heat or not enough water.",
        slugs: "Slugs love lettuce! Try to keep the leaves dry and clear away any dead plant bits nearby."
      },
      suggestions: ["Growing lettuce in pots", "Heat-tolerant greens", "Cut-and-come-again harvest"]
    }
  },

  broccoli: {
    harvestDays: [70, 100],
    keywords: ["broccoli", "cole crops"],
    responses: {
      overview: "These 'cole crops' love cool air and rich soil. They're basically big, edible flower buds!",
      tips: [
        "Watch out for green caterpillars—they love to hide in the leaves and eat holes in them.",
        "Harvest the main head while the buds are still tight and green.",
        "After you cut the main head, many plants will grow smaller 'side shoots' for you to eat later."
      ],
      faqs: {
        bolting: "If you see yellow flowers, you waited too long to harvest!",
        yellowing: "If the leaves turn yellow, the plant might need more nitrogen (food)."
      },
      suggestions: ["Stopping cabbage worms", "Growing broccoli in spring", "Broccoli vs Cauliflower"]
    }
  },

  zucchini: {
    harvestDays: [45, 60],
    keywords: ["zucchini", "squash", "summer squash"],
    responses: {
      overview: "Zucchini plants grow fast and can give you a huge amount of food from just one or two plants.",
      tips: [
        "Give them plenty of space because the leaves grow very big and wide.",
        "Pick the zucchinis when they're small (about 6-8 inches) for the best flavor.",
        "If you don't see fruit, you might need more bees to help move pollen between flowers."
      ],
      faqs: {
        mildew: "If you see white powder on the leaves, it's a fungus. Try to keep the leaves dry and give them more air.",
        monsters: "If you miss a day, they can grow into 'baseball bats' overnight! They're still okay for baking bread."
      },
      suggestions: ["Pollinating by hand", "Stopping squash bugs", "Cooking big zucchinis"]
    }
  },

  cucumber: {
    harvestDays: [50, 70],
    keywords: ["cucumber", "cucumbers", "pickle", "gherkin"],
    responses: {
      overview: "Cucumbers love to climb and drink lots of water. They're perfect for refreshing summer snacks.",
      tips: [
        "Use a trellis or fence for them to climb on—it keeps the fruit clean and saves space.",
        "Check under the big leaves every day so you don't miss any hidden cucumbers.",
        "They need very consistent watering or the fruit can taste bitter."
      ],
      faqs: {
        bitter: "Usually caused by uneven watering or extreme heat stress.",
        beetles: "Watch for striped or spotted beetles; they can make the plants wilt and die."
      },
      suggestions: ["Trellising cucumbers", "Pickling vs slicing types", "Cucumbers in containers"]
    }
  },

  peas: {
    harvestDays: [60, 80],
    keywords: ["peas", "pea", "sugar snap", "snow pea"],
    responses: {
      overview: "Peas are one of the first things you can plant in the spring. They love the cool, damp weather.",
      tips: [
        "Plant them as soon as the ground can be worked in early spring.",
        "Most peas need something to climb on, like a piece of netting or some tall sticks.",
        "Pick them often to keep the plant making more pods."
      ],
      faqs: {
        heat: "Once the weather gets hot, the plants will stop producing and start to dry up.",
        nitrogen: "Peas actually help the soil by making their own nitrogen, so they don't need much fertilizer."
      },
      suggestions: ["When to plant peas", "Best climbing supports", "Shelling vs snap peas"]
    }
  },

  beans: {
    harvestDays: [50, 70],
    keywords: ["beans", "bean", "green bean", "pole bean", "bush bean"],
    responses: {
      overview: "Beans are easy and fast! You can choose 'bush' types that stay small or 'pole' types that climb high.",
      tips: [
        "Wait for the soil to be warm before planting, or the seeds might rot.",
        "Don't touch the plants when they're wet, as this can spread sickness between them.",
        "Pole beans give you more food over a longer time, while bush beans all come at once."
      ],
      faqs: {
        spacing: "Bush beans can be close together, but pole beans need a sturdy trellis.",
        harvest: "Pick them when they're about as thick as a pencil for the best crunch."
      },
      suggestions: ["Bush vs Pole beans", "Growing dried beans", "Bean plant problems"]
    }
  },

  radish: {
    harvestDays: [25, 35],
    keywords: ["radish", "radishes", "daikon"],
    responses: {
      overview: "Radishes are the fastest crop in the garden! Some are ready to eat in just 25 days.",
      tips: [
        "Plant them between slower crops like carrots or parsnips to save space.",
        "Keep the soil moist so they grow fast; if they grow slowly, they get very spicy and woody.",
        "Eat them as soon as they're big enough—they don't stay good in the ground for long."
      ],
      faqs: {
        spicy: "The hotter the weather, the spicier the radish will be.",
        bolting: "They grow flowers very fast when it gets warm, which ruins the root."
      },
      suggestions: ["Fastest radish varieties", "Growing radishes in pots", "Winter radishes"]
    }
  },

  beet: {
    harvestDays: [50, 70],
    keywords: ["beet", "beets", "beetroot"],
    responses: {
      overview: "Beets give you two crops in one: the sweet roots and the tasty green leaves!",
      tips: [
        "Each 'seed' is actually a little cluster of seeds, so you'll need to thin out the extra sprouts.",
        "Don't let the soil dry out completely, or the roots will get tough and stringy.",
        "You can start eating the greens when they're just a few inches tall."
      ],
      faqs: {
        thinning: "Thin them to about 3-4 inches apart so the roots have room to swell up.",
        earthy: "Beets have a natural 'earthy' taste; the smaller ones are usually the sweetest."
      },
      suggestions: ["How to thin beets", "Eating beet greens", "Best time to harvest beets"]
    }
  },

  sweetPotato: {
    harvestDays: [100, 120],
    keywords: ["sweet potato", "yam", "sweetpotatoes"],
    responses: {
      overview: "Sweet potatoes love the heat and a long summer. They grow from 'slips' (sprouted pieces) rather than seeds.",
      tips: [
        "They need at least 4 months of warm weather to make big tubers.",
        "Give them lots of room—the vines love to crawl and cover the whole garden.",
        "After you dig them up, let them sit in a warm, dry place for 10 days to get sweet (curing)."
      ],
      faqs: {
        soil: "Loose, well-drained soil is a must so the roots can expand easily.",
        water: "They're pretty tough, but they'll give you more food if you water them during dry spells."
      },
      suggestions: ["How to grow slips", "Curing sweet potatoes", "Growing in containers"]
    }
  },

  spinach: {
    harvestDays: [40, 50],
    keywords: ["spinach", "leafy greens"],
    responses: {
      overview: "Spinach is a cool-weather favorite that's packed with nutrients.",
      tips: [
        "Plant it in the early spring or late fall when the weather is chilly.",
        "If it gets too hot, it will bolt (grow flowers) and the leaves will get bitter.",
        "Harvest the outer leaves first to let the middle keep growing."
      ],
      faqs: {
        soil: "Spinach likes rich, moist soil with plenty of nitrogen.",
        shade: "In warmer weather, giving spinach some shade can help it last longer."
      },
      suggestions: ["Spring vs fall spinach", "Growing spinach in pots", "Stopping spinach from bolting"]
    }
  },

  kale: {
    harvestDays: [50, 65],
    keywords: ["kale", "curly kale", "lacinato"],
    responses: {
      overview: "Kale is one of the toughest plants in the garden and can even survive a freeze!",
      tips: [
        "A light frost actually makes the leaves taste sweeter.",
        "Pick the lower leaves first and the plant will keep growing taller like a little palm tree.",
        "Watch out for cabbage worms—they love kale just as much as humans do."
      ],
      faqs: {
        bitter: "If kale is too bitter, try harvesting it after a frost or massaging the leaves with oil.",
        types: "Curly kale is great for chips, while Lacinato (Dino) kale is perfect for salads."
      },
      suggestions: ["Making kale chips", "Growing kale in winter", "Best kale varieties"]
    }
  },

  corn: {
    harvestDays: [70, 90],
    keywords: ["corn", "maize", "sweet corn"],
    responses: {
      overview: "Corn is a tall, hungry plant that needs plenty of sun and space to grow big ears.",
      tips: [
        "Plant corn in blocks (like 4 rows of 4) rather than one long line to help with pollination.",
        "It's a heavy feeder, so make sure to give it plenty of compost or fertilizer.",
        "Wait until the silks on the ears turn brown and dry before you check for ripeness."
      ],
      faqs: {
        pollination: "Corn is pollinated by the wind, so tight clusters of plants are essential.",
        pests: "Watch for corn earworms that like to hide at the tip of the ears."
      },
      suggestions: ["Pollinating corn by hand", "Best sweet corn types", "Growing corn in small spaces"]
    }
  },

  eggplant: {
    harvestDays: [70, 90],
    keywords: ["eggplant", "aubergine", "brinjal"],
    responses: {
      overview: "Eggplants are heat-loving beauties that come in many shapes and colors.",
      tips: [
        "They need very warm soil to get started, so don't plant them too early.",
        "Use a stake to support the plant, as the heavy fruit can pull it down.",
        "Pick them when the skin is still shiny—if it turns dull, they might be bitter."
      ],
      faqs: {
        pests: "Flea beetles love to eat tiny holes in eggplant leaves; use row covers to protect them.",
        watering: "Consistent watering is key to preventing the fruit from becoming bitter."
      },
      suggestions: ["Growing Japanese eggplants", "Eggplant pests", "Cooking fresh eggplant"]
    }
  },

  pumpkin: {
    harvestDays: [90, 120],
    keywords: ["pumpkin", "pumpkins", "squash", "gourd"],
    responses: {
      overview: "Pumpkins are the giants of the garden, requiring lots of space for their long vines.",
      tips: [
        "Give them plenty of room to roam—vines can grow 20 feet or more!",
        "Place a piece of wood or cardboard under the growing pumpkins to keep them off the damp ground.",
        "Harvest them before the first hard frost when the vine starts to dry up."
      ],
      faqs: {
        mildew: "Powdery mildew is common on pumpkin leaves; try to keep them dry.",
        pollination: "Bees are essential for pumpkins; if you don't see fruit, you might need to hand-pollinate."
      },
      suggestions: ["Growing giant pumpkins", "Best pie pumpkins", "Pumpkin pest control"]
    }
  },

  cauliflower: {
    harvestDays: [70, 100],
    keywords: ["cauliflower", "cole crops"],
    responses: {
      overview: "Cauliflower is a bit more finicky than broccoli, needing steady temperatures and moisture.",
      tips: [
        "To keep the head white, you might need to tie the leaves over it to block the sun (blanching).",
        "It hates extreme heat or cold, so timing your planting is very important.",
        "Don't let the soil dry out, or the heads will be small and crumbly."
      ],
      faqs: {
        yellowing: "If the head turns yellow, it's usually because it got too much sun.",
        pests: "Cabbage worms and aphids are the main enemies of cauliflower."
      },
      suggestions: ["How to blanch cauliflower", "Growing purple cauliflower", "Cauliflower problems"]
    }
  },

  cabbage: {
    harvestDays: [70, 100],
    keywords: ["cabbage", "cole crops", "head cabbage"],
    responses: {
      overview: "Cabbage is a hardy vegetable that can be grown for spring or fall harvests.",
      tips: [
        "Watch for the heads to feel firm and solid—that's when they're ready to pick.",
        "If a heavy rain is coming, twist the plant slightly to break some roots and prevent the head from splitting.",
        "Keep the soil consistently moist to encourage even growth."
      ],
      faqs: {
        splitting: "Heads split when they get too much water too fast after a dry spell.",
        pests: "Cabbage loopers are green caterpillars that can quickly ruin a crop."
      },
      suggestions: ["Stopping cabbage splitting", "Making sauerkraut", "Best cabbage varieties"]
    }
  },

  asparagus: {
    harvestDays: [730, 1095],
    keywords: ["asparagus", "perennial"],
    responses: {
      overview: "Asparagus is a long-term investment! Once established, it can produce for 20 years or more.",
      tips: [
        "You have to be patient—don't harvest any spears for the first two years while the plant builds strength.",
        "Plant them in a dedicated bed where they won't be disturbed.",
        "In the fall, let the 'ferns' turn yellow and die back before cutting them down."
      ],
      faqs: {
        harvest: "Pick the spears when they're about 6-8 inches tall and the tips are still tight.",
        weeds: "Keeping the bed weed-free is the hardest part of growing asparagus."
      },
      suggestions: ["Starting an asparagus bed", "When to harvest asparagus", "Asparagus varieties"]
    }
  },

  // --- URBAN & INDOOR GARDENING ---

  urbanGardening: {
    keywords: ["urban", "apartment", "small space", "balcony", "indoor", "indoor gardening", "city", "condo"],
    responses: {
      overview: "Urban gardening is all about maximizing small spaces like balconies, windowsills, and indoor rooms to grow fresh food.",
      tips: [
        "Use vertical space! Hanging baskets, wall planters, and tiered shelves can double your growing area.",
        "Choose 'dwarf' or 'determinate' plant varieties—they stay small but still give lots of fruit.",
        "Ensure your indoor plants get enough light; south-facing windows are usually best, or use LED grow lights.",
        "Good drainage is critical in containers to prevent root rot."
      ],
      faqs: {
        light: "Most edible plants need at least 6 hours of sunlight. If you have less, try leafy greens like lettuce or herbs like mint.",
        soil: "Never use garden soil in pots! It's too heavy and doesn't drain well. Use a high-quality potting mix instead.",
        watering: "Pots dry out faster than the ground. Check them daily by sticking your finger an inch into the soil."
      },
      suggestions: ["Best indoor herbs", "Vertical garden ideas", "Self-watering pots", "Grow lights for beginners"]
    }
  },

  containerGardening: {
    keywords: ["container", "pots", "planters", "buckets", "growing in pots", "container garden"],
    responses: {
      overview: "Growing in containers allows you to garden anywhere, even without a yard! You can control the soil quality and move plants to follow the sun.",
      tips: [
        "Bigger is usually better—large pots hold more moisture and give roots more room to grow.",
        "Always make sure your containers have holes in the bottom for water to escape.",
        "Feed your plants regularly with a liquid fertilizer, as nutrients wash out of pots more quickly.",
        "Terracotta pots look great but dry out fast; plastic or glazed ceramic hold water longer."
      ],
      faqs: {
        size: "For tomatoes, use at least a 5-gallon bucket. For herbs, a small 6-inch pot is often enough.",
        material: "Plastic is lightweight and holds moisture well. Fabric pots (grow bags) are great for healthy root growth."
      },
      suggestions: ["Pot size guide", "DIY self-watering containers", "Best soil for pots"]
    }
  },

  windowGarden: {
    keywords: ["window", "windowsill", "kitchen garden", "window box", "ledges"],
    responses: {
      overview: "Windowsills are perfect for mini-gardens! They're great for herbs, microgreens, and small flowers that you want close at hand.",
      tips: [
        "Rotate your pots every few days so the plants don't lean too far toward the window.",
        "Watch out for drafts! Cold windows in winter can hurt sensitive plants like basil.",
        "Window boxes should be securely fastened to avoid accidents.",
        "Microgreens are the fastest window crop—you can harvest them in just 10-14 days."
      ],
      faqs: {
        direction: "South-facing windows get the most light. North-facing windows are best for low-light plants like ferns.",
        pests: "Indoor plants can still get bugs like gnats. Avoid overwatering to keep them away."
      },
      suggestions: ["Herbs for kitchen windows", "Growing microgreens", "Window box flowers"]
    }
  },

  houseplants: {
    keywords: ["houseplant", "indoor plant", "foliage", "decorative plants", "low light plants"],
    responses: {
      overview: "Houseplants brighten up your home and can even help clean the air. Many are very easy to care for once you know their needs.",
      tips: [
        "Most houseplants die from too much water, not too little. Let the soil dry out between waterings.",
        "Dust the leaves occasionally so the plant can breathe and soak up light better.",
        "Keep plants away from heaters or air conditioners, as they like steady temperatures.",
        "If a plant is outgrowing its pot (roots coming out the bottom), it's time to 're-pot' it into a larger one."
      ],
      faqs: {
        beginner: "Snake plants, ZZ plants, and Pothos are almost impossible to kill and great for beginners.",
        brownTips: "Dry air usually causes brown leaf tips. Try misting your plants or using a pebble tray with water."
      },
      suggestions: ["Low light houseplants", "Pet-safe plants", "How to repot"]
    }
  },

  apple: {
    harvestDays: [120, 180],
    keywords: ["apple", "apples", "apple tree", "orchard"],
    responses: {
      overview: "Apple trees take a few years to start, but then they'll give you fruit for decades.",
      tips: [
        "Most apple trees need a different kind of apple tree nearby to help them make fruit (pollination).",
        "Prune them in late winter to keep the tree open to the sun and easy to pick.",
        "If there are too many tiny apples, pick some off so the remaining ones grow big and healthy."
      ],
      faqs: {
        worms: "Watch for tiny holes in the fruit; you might need to use traps or organic sprays.",
        dwarf: "If you have a small yard, look for 'dwarf' trees that stay short."
      },
      suggestions: ["Best apples for your zone", "How to prune fruit trees", "Apple tree pests"]
    }
  },

  strawberry: {
    harvestDays: [30, 45],
    keywords: ["strawberry", "strawberries", "berry"],
    responses: {
      overview: "Strawberries are a garden favorite. They grow close to the ground and come back every year.",
      tips: [
        "Put a layer of straw or mulch under the plants to keep the berries off the dirt and away from bugs.",
        "Birds love them too! You might need to cover the plants with a light net.",
        "Pinch off the flowers in the first year to help the plant grow strong roots for the future."
      ],
      faqs: {
        runners: "The plants send out 'long arms' that grow into new plants. You can let them fill in or cut them back.",
        renovation: "Every 3-4 years, it's best to start with new plants for the biggest harvest."
      },
      suggestions: ["June-bearing vs Everbearing", "Strawberry containers", "Protecting from birds"]
    }
  },

  blueberry: {
    harvestDays: [60, 90],
    keywords: ["blueberry", "blueberries", "berry"],
    responses: {
      overview: "Blueberries are beautiful bushes that need very specific 'acidic' soil to grow well.",
      tips: [
        "Mix lots of peat moss or pine needles into the soil to keep it acidic.",
        "They have shallow roots, so they need regular watering and a good layer of mulch.",
        "Wait until the berries are fully blue and fall off easily into your hand—then they're sweet!"
      ],
      faqs: {
        soil: "If your leaves are turning yellow with green veins, your soil isn't acidic enough.",
        pollination: "Planting two different varieties will give you much bigger and better berries."
      },
      suggestions: ["Testing soil for blueberries", "Netting for berries", "Pruning blueberry bushes"]
    }
  },

  raspberry: {
    harvestDays: [60, 75],
    keywords: ["raspberry", "raspberries", "blackberry", "bramble"],
    responses: {
      overview: "Raspberries grow on long 'canes' and can be either red, black, or even yellow.",
      tips: [
        "They love to spread, so it's best to grow them along a fence or a sturdy wire trellis.",
        "Pruning is key! You usually cut out the old canes that already fruited to make room for new ones.",
        "Pick the berries every day once they start ripening, as they don't last long."
      ],
      faqs: {
        types: "Some varieties fruit in summer, and some fruit in both summer and fall.",
        spreading: "Be careful where you plant them—they will try to take over the whole area!"
      },
      suggestions: ["Pruning summer vs fall raspberries", "Building a berry trellis", "Stopping berry diseases"]
    }
  },

  grape: {
    harvestDays: [120, 150],
    keywords: ["grape", "grapes", "vine", "vineyard"],
    responses: {
      overview: "Grapes are vigorous vines that need a very strong support and heavy pruning every year.",
      tips: [
        "They need full sun and lots of airflow to keep the fruit from getting moldy.",
        "Prune away up to 90% of the previous year's growth in late winter—it feels scary, but it's necessary!",
        "Don't be afraid to cut off some of the leaves if they're shading the fruit too much."
      ],
      faqs: {
        support: "A strong fence, arbor, or trellis is a must for these heavy vines.",
        birds: "Netting is often needed once the grapes start to change color."
      },
      suggestions: ["How to prune grapes", "Best grapes for eating vs juice", "Stopping grape mildew"]
    }
  },

  citrus: {
    harvestDays: [180, 360],
    keywords: ["citrus", "lemon", "orange", "lime", "grapefruit"],
    responses: {
      overview: "Citrus trees love warmth and sun. If you live in a cold place, you can even grow small ones in pots!",
      tips: [
        "They are heavy feeders—give them a special citrus fertilizer a few times a year.",
        "Water deeply but not too often; they don't like to have 'wet feet' (soggy roots).",
        "If a freeze is coming, cover your trees with a blanket to keep them warm."
      ],
      faqs: {
        dropping: "It's normal for a tree to drop some tiny fruits, but if it drops a lot, it might be stressed or thirsty.",
        indoor: "Indoor citrus needs the sunniest window you have and extra humidity in the winter."
      },
      suggestions: ["Citrus in pots", "Fertilizing citrus", "Protecting from frost"]
    }
  },

  watermelon: {
    harvestDays: [80, 100],
    keywords: ["watermelon", "melon", "cantaloupe"],
    responses: {
      overview: "Melons need lots of space, lots of heat, and a long time to grow big and sweet.",
      tips: [
        "They are thirsty plants, so make sure they get plenty of water while the fruit is growing.",
        "Put a piece of cardboard or a flat rock under the melons to keep them off the damp dirt.",
        "Stop watering about a week before harvest to help the sugars concentrate."
      ],
      faqs: {
        ripeness: "For watermelons, look for the 'belly spot' to turn from white to creamy yellow.",
        slip: "Cantaloupes are ready when they 'slip'—the stem cracks and the melon comes off easily with a gentle tug."
      },
      suggestions: ["Checking watermelon ripeness", "Growing melons on a trellis", "Small melon varieties"]
    }
  },

  peach: {
    harvestDays: [90, 120],
    keywords: ["peach", "peaches", "nectarine"],
    responses: {
      overview: "Peaches are the ultimate summer treat, but the trees need a little extra care to stay healthy.",
      tips: [
        "They love a sunny, sheltered spot away from cold winds.",
        "Prune them into an 'open bowl' shape to let light reach all the fruit.",
        "Thin the fruit early so the tree doesn't break under the weight of too many peaches."
      ],
      faqs: {
        pests: "Watch for peach leaf curl, a fungus that makes the leaves look bumpy and red.",
        ripeness: "They're ready when they're slightly soft and have a strong, sweet smell."
      },
      suggestions: ["Stopping peach leaf curl", "Thinning peaches", "Pruning peach trees"]
    }
  },

  cherry: {
    harvestDays: [60, 90],
    keywords: ["cherry", "cherries"],
    responses: {
      overview: "Cherries are beautiful trees that provide a burst of early summer sweetness.",
      tips: [
        "Birds love cherries! You'll almost certainly need netting to save your harvest.",
        "Sweet cherries usually need another tree for pollination, but many sour cherries are self-fertile.",
        "Prune them in the summer rather than winter to avoid diseases."
      ],
      faqs: {
        splitting: "Heavy rain just before harvest can cause the cherries to crack open.",
        varieties: "Sour cherries are tougher and better for baking, while sweet cherries are best fresh."
      },
      suggestions: ["Protecting cherries from birds", "Sweet vs Sour cherries", "Pruning cherry trees"]
    }
  },

  pear: {
    harvestDays: [100, 150],
    keywords: ["pear", "pears"],
    responses: {
      overview: "Pears are elegant trees that are often easier to grow than apples.",
      tips: [
        "Most pears should be picked while they're still hard and then ripened on the counter.",
        "They need a pollinator nearby, so plant two different varieties.",
        "Prune them similarly to apples, keeping the tree open and airy."
      ],
      faqs: {
        ripening: "If you leave them on the tree to get soft, they'll be gritty and not very tasty.",
        fireblight: "Watch for branches that look like they've been burned—this is a common pear disease."
      },
      suggestions: ["How to ripen pears", "Best pear varieties", "Stopping pear diseases"]
    }
  },

  // --- HERBS ---

  basil: {
    harvestDays: [30, 45],
    keywords: ["basil", "pesto", "herb"],
    responses: {
      overview: "Basil is the king of summer herbs. It loves the heat and hates even a tiny bit of cold.",
      tips: [
        "Pinch off the top of the plant often to make it grow bushy instead of tall and thin.",
        "If you see flowers, pinch them off right away or the leaves will start to taste bitter.",
        "Always wait until the nights are warm before putting basil outside."
      ],
      faqs: {
        storage: "Don't put fresh basil in the fridge; it will turn black! Keep it in a glass of water on the counter.",
        watering: "Basil likes to be moist but not soggy. If it wilts, it needs a drink right away."
      },
      suggestions: ["How to prune basil", "Making pesto", "Growing basil indoors"]
    }
  },

  rosemary: {
    harvestDays: [365, 730],
    keywords: ["rosemary", "herb", "perennial"],
    responses: {
      overview: "Rosemary is a tough, woody herb that can live for many years and smells amazing.",
      tips: [
        "It loves full sun and very well-drained soil. It's actually a desert plant!",
        "Don't overwater it—rosemary is much more likely to die from too much water than too little.",
        "You can harvest small sprigs all year round once the plant is established."
      ],
      faqs: {
        winter: "In cold places, you might need to bring it inside for the winter or cover it deeply with mulch.",
        propagation: "It's much easier to grow from a cutting than from a seed."
      },
      suggestions: ["Rosemary in pots", "How to take cuttings", "Rosemary for cooking"]
    }
  },

  mint: {
    harvestDays: [60, 90],
    keywords: ["mint", "peppermint", "spearmint"],
    responses: {
      overview: "Mint is very easy to grow—maybe too easy! It will spread everywhere if you don't keep an eye on it.",
      tips: [
        "It's best to grow mint in a pot so it doesn't take over your entire garden.",
        "It loves water and can handle a little bit of shade better than most herbs.",
        "Cut it back hard a few times a season to keep the leaves fresh and tasty."
      ],
      faqs: {
        spreading: "It spreads through underground runners; even a tiny piece of root can grow a new plant.",
        types: "There are dozens of flavors, from chocolate mint to pineapple mint!"
      },
      suggestions: ["Growing mint in pots", "Using fresh mint", "Different mint varieties"]
    }
  },

  cilantro: {
    harvestDays: [45, 60],
    keywords: ["cilantro", "coriander", "herb"],
    responses: {
      overview: "Cilantro is a cool-weather herb that grows very fast and then goes to seed just as quickly.",
      tips: [
        "Plant a new batch every 2-3 weeks to have a steady supply of leaves.",
        "Once it gets hot, it will grow a tall stem and flowers (bolting); at this point, the leaves aren't as good.",
        "If it goes to seed, let them dry on the plant—now you have coriander seeds for cooking!"
      ],
      faqs: {
        bolting: "There's no way to stop it once it starts, so enjoy it while it's cool!",
        transplanting: "It has a long taproot and doesn't like being moved, so it's best to sow seeds directly."
      },
      suggestions: ["Stopping cilantro from bolting", "Harvesting coriander seeds", "Cool-season herbs"]
    }
  },

  parsley: {
    harvestDays: [70, 90],
    keywords: ["parsley", "herb"],
    responses: {
      overview: "Parsley is a biennial herb that's much tougher than it looks.",
      tips: [
        "The seeds can take a long time to sprout, so be patient!",
        "Harvest the outer leaves first and let the middle keep growing.",
        "It can handle a bit of shade and even a light frost."
      ],
      faqs: {
        types: "Curly parsley is great for garnish, while flat-leaf (Italian) parsley has better flavor for cooking.",
        bolting: "In its second year, it will grow a flower and the leaves will get tough."
      },
      suggestions: ["Curly vs Flat-leaf parsley", "Growing parsley from seed", "Storing fresh parsley"]
    }
  },

  thyme: {
    harvestDays: [60, 90],
    keywords: ["thyme", "herb"],
    responses: {
      overview: "Thyme is a low-growing, aromatic herb that's perfect for borders or pots.",
      tips: [
        "It loves full sun and doesn't need much water once it's settled in.",
        "Prune it back after it flowers to keep the plant from getting too woody.",
        "You can harvest small sprigs anytime you need them."
      ],
      faqs: {
        soil: "Thyme needs very well-drained soil; it hates having 'wet feet'.",
        winter: "It's quite hardy and will usually come back every year."
      },
      suggestions: ["Growing thyme in pots", "Different thyme varieties", "Cooking with fresh thyme"]
    }
  },

  oregano: {
    harvestDays: [60, 90],
    keywords: ["oregano", "herb"],
    responses: {
      overview: "Oregano is a vigorous herb that's essential for Mediterranean cooking.",
      tips: [
        "It loves sun and can handle a bit of dry soil.",
        "The flavor is strongest just before the plant flowers.",
        "Prune it back regularly to keep it from becoming too leggy."
      ],
      faqs: {
        spreading: "It can spread quickly, so give it some room or keep it in a pot.",
        dried: "Oregano is one of the few herbs that tastes even better when it's dried."
      },
      suggestions: ["Drying fresh oregano", "Oregano vs Marjoram", "Growing oregano in pots"]
    }
  },

  lavender: {
    harvestDays: [365, 730],
    keywords: ["lavender", "herb", "flower"],
    responses: {
      overview: "Lavender is a beautiful, fragrant herb that's as useful as it is pretty.",
      tips: [
        "It needs full sun and very well-drained, even slightly sandy soil.",
        "Prune it every year after it flowers to keep the bush from getting too woody and bare in the middle.",
        "Don't overwater it! Lavender loves to be on the dry side."
      ],
      faqs: {
        winter: "Some types are hardier than others, so pick one that likes your climate.",
        uses: "Use the flowers for tea, baking, or just for their wonderful smell."
      },
      suggestions: ["Best lavender for your zone", "How to prune lavender", "Drying lavender flowers"]
    }
  },

  ginger: {
    harvestDays: [240, 300],
    keywords: ["ginger", "rhizome", "spice"],
    responses: {
      overview: "Ginger is a tropical plant that grows from a 'hand' of root (rhizome).",
      tips: [
        "It loves warm, humid weather and partial shade.",
        "If you live in a cold place, you can grow it in a big pot and bring it inside for the winter.",
        "Keep the soil moist but not soggy, or the roots might rot."
      ],
      faqs: {
        planting: "Plant a piece of fresh ginger from the store that has 'eyes' or little bumps on it.",
        harvest: "You can dig up small pieces after a few months, or wait for the full harvest in the fall."
      },
      suggestions: ["Growing ginger in pots", "Starting ginger from the store", "Harvesting fresh ginger"]
    }
  },

  turmeric: {
    harvestDays: [240, 300],
    keywords: ["turmeric", "rhizome", "spice"],
    responses: {
      overview: "Turmeric is a relative of ginger and grows in a very similar way.",
      tips: [
        "It needs a long, warm growing season of at least 8 months.",
        "The leaves are beautiful and tropical-looking, making it a great ornamental plant too.",
        "Wait for the leaves to turn yellow and dry before harvesting the bright orange roots."
      ],
      faqs: {
        color: "Be careful when harvesting—the orange roots will stain your hands and clothes!",
        uses: "Use it fresh in cooking or dry and grind it into a powder."
      },
      suggestions: ["Growing turmeric in pots", "Fresh vs powdered turmeric", "Harvesting turmeric"]
    }
  },

  // --- GENERAL TOPICS ---

  soil: {
    keywords: ["soil", "dirt", "earth", "clay", "sand", "loam", "ph", "nutrients"],
    responses: {
      overview: "Good soil is the secret to a great garden. It's the foundation for everything you grow.",
      tips: [
        "Add compost every year to keep your soil rich and healthy.",
        "Don't walk on your garden beds—it squishes the soil and makes it hard for roots to breathe.",
        "If your soil is heavy clay, add organic matter to help it drain better."
      ],
      faqs: {
        ph: "Most plants like a slightly acidic soil (around pH 6.5). You can test this with a simple kit.",
        types: "Loam is the 'perfect' garden soil—a mix of sand, silt, and clay."
      },
      suggestions: ["How to test soil pH", "Improving clay soil", "What is loam?"]
    }
  },

  composting: {
    keywords: ["compost", "bin", "pile", "scraps", "greens", "browns", "recycling"],
    responses: {
      overview: "Composting turns your kitchen scraps and yard waste into 'black gold' for your plants.",
      tips: [
        "Mix 'greens' (like fruit scraps) with 'browns' (like dry leaves) for the best results.",
        "Turn your pile every few weeks to let air in and speed up the process.",
        "Keep the pile about as damp as a wrung-out sponge."
      ],
      faqs: {
        smell: "If it smells bad, it's likely too wet or needs more air. Add more dry leaves!",
        ready: "It's ready when it's dark, crumbly, and smells like fresh earth."
      },
      suggestions: ["Composting for beginners", "What not to compost", "How to fix a smelly pile"]
    }
  },

  irrigation: {
    keywords: ["water", "watering", "hose", "drip", "sprinkler", "thirst"],
    responses: {
      overview: "Watering correctly is about getting the right amount to the roots at the right time.",
      tips: [
        "Water early in the morning so the plants are ready for the heat of the day.",
        "Water the soil, not the leaves, to help prevent diseases.",
        "Drip irrigation is the most efficient way to water your garden."
      ],
      faqs: {
        amount: "Most gardens need about an inch of water per week, including rain.",
        signs: "Wilting leaves in the morning are a sure sign that your plants are thirsty."
      },
      suggestions: ["Setting up drip irrigation", "Water-saving garden tips", "Best time to water"]
    }
  },

  pests: {
    keywords: ["pests", "bugs", "insects", "aphids", "slugs", "beetles", "worms"],
    responses: {
      overview: "Every garden has some bugs, but you can manage them without using harsh chemicals.",
      tips: [
        "Check your plants often so you can catch problems early.",
        "Invite 'good' bugs like ladybugs and lacewings to help eat the 'bad' ones.",
        "A strong spray of water can often knock pests right off your plants."
      ],
      faqs: {
        aphids: "These tiny bugs suck sap; use soapy water to get rid of them.",
        slugs: "Slugs love damp spots; use beer traps or copper tape to protect your plants."
      },
      suggestions: ["Organic pest control", "Attracting beneficial insects", "Identifying garden bugs"]
    }
  },

  // --- CLIMATE & ENVIRONMENT ---

  tropical: {
    keywords: ["tropical", "humid", "hot", "rainy", "jungle"],
    responses: {
      overview: "Tropical gardening is all about managing heat, high humidity, and heavy rain.",
      tips: [
        "Pick plants that love the heat, like ginger, turmeric, and sweet potatoes.",
        "Good airflow is essential to prevent mold and mildew in the humid air.",
        "Mulch heavily to protect the soil from being washed away by tropical downpours."
      ],
      faqs: {
        pests: "Bugs love the heat too, so stay vigilant!",
        shade: "Some plants might need a bit of afternoon shade to survive the intense sun."
      },
      suggestions: ["Best tropical crops", "Managing humidity in the garden", "Gardening in the rainy season"]
    }
  },

  arid: {
    keywords: ["arid", "dry", "desert", "drought", "water-wise"],
    responses: {
      overview: "Gardening in a dry climate is all about saving every drop of water.",
      tips: [
        "Use thick mulch to keep the soil cool and stop water from evaporating.",
        "Plant in 'sunken beds' to catch any rain and keep the roots cooler.",
        "Pick drought-tolerant plants like rosemary and thyme."
      ],
      faqs: {
        watering: "Deep, infrequent watering is better than shallow daily watering.",
        wind: "Dry winds can dry out plants fast; use windbreaks to protect them."
      },
      suggestions: ["Drought-tolerant veggies", "Saving water in the garden", "Desert gardening tips"]
    }
  },

  temperate: {
    keywords: ["temperate", "four seasons", "mild"],
    responses: {
      overview: "Temperate climates have distinct seasons, giving you a wide range of things to grow.",
      tips: [
        "Use the spring and fall for cool-season crops like lettuce and peas.",
        "Maximize the summer for heat-lovers like tomatoes and peppers.",
        "Plan your garden around your local frost dates."
      ],
      faqs: {
        winter: "Use the winter for planning and preparing your soil for the next year.",
        timing: "Succession planting is key to having a harvest all season long."
      },
      suggestions: ["Four-season garden plan", "Succession planting tips", "Finding your frost dates"]
    }
  },

  cold: {
    keywords: ["cold", "winter", "frost", "snow", "short season"],
    responses: {
      overview: "In a cold climate, your goal is to make the most of a short growing season.",
      tips: [
        "Start seeds indoors to give your plants a head start.",
        "Use row covers or 'cold frames' to protect plants from early and late frosts.",
        "Pick fast-growing varieties that can finish before the first fall freeze."
      ],
      faqs: {
        hardy: "Kale, spinach, and Brussels sprouts can handle quite a bit of cold.",
        soil: "Cold soil can delay planting; use black plastic to help warm it up faster."
      },
      suggestions: ["Short-season gardening", "Protecting plants from frost", "Best winter veggies"]
    }
  },

  coastal: {
    keywords: ["coastal", "salt", "windy", "ocean", "beach"],
    responses: {
      overview: "Coastal gardens have to deal with salty air and often strong winds.",
      tips: [
        "Use windbreaks like fences or hardy hedges to protect your more delicate plants.",
        "Rinse your plants with fresh water occasionally to wash off salt spray.",
        "Choose salt-tolerant plants that are adapted to the coast."
      ],
      faqs: {
        soil: "Coastal soil is often sandy; add plenty of organic matter to help it hold water.",
        humidity: "The ocean can bring damp air, so make sure your plants have good spacing."
      },
      suggestions: ["Salt-tolerant vegetables", "Gardening by the sea", "Improving sandy soil"]
    }
  },

  // --- TROUBLESHOOTING & PROBLEM SOLVER ---

  troubleshooting: {
    keywords: ["problem", "issue", "help", "troubleshoot", "dying", "sick", "bug", "pest", "yellow", "brown", "wilt", "dead", "spots", "holes", "growth", "slow", "failure"],
    responses: {
      overview: "I can help you troubleshoot your garden problems! Whether it's yellowing leaves, pests, or poor growth, let's find the solution together.",
      tips: [
        "Always check the soil moisture first—both too much and too little water cause 80% of garden problems.",
        "Look closely at the underside of leaves for hidden pests like aphids or spider mites.",
        "Consider the sunlight; plants that are 'leggy' or stretching are usually light-starved.",
        "Yellow leaves at the bottom of the plant often mean it needs nitrogen (fertilizer)."
      ],
      faqs: {
        yellow_leaves: "Yellow leaves can mean: 1. Overwatering (most common), 2. Nitrogen deficiency, or 3. Too little light.",
        brown_tips: "Brown, crunchy leaf edges usually mean the plant is thirsty or the air is too dry (low humidity).",
        wilting: "If the plant wilts even when the soil is wet, it might have root rot or a fungal disease like fusarium wilt.",
        holes: "Small holes in leaves are usually from caterpillars or slugs. Large jagged holes might be from beetles or even rabbits.",
        white_powder: "This is likely Powdery Mildew, a fungus. Improve air circulation and avoid getting water on the leaves.",
        pests: "For most bugs, a simple spray of water or organic Neem Oil works wonders. Ladybugs are also great natural helpers!",
        slow_growth: "If your plants aren't growing, check if they're root-bound in their pots or if the weather is too cold/hot for that specific crop."
      },
      suggestions: ["My leaves are yellowing", "Identifying garden pests", "Stopping white mold", "Fixing leggy plants"]
    }
  },

  // --- GROWING TIPS GAME DATA ---
  quizQuestions: [
    {
      question: "Which of these is the best way to tell if your plant needs water?",
      options: [
        "Stick your finger 1-2 inches into the soil",
        "Wait until the leaves are completely brown",
        "Water it every single day regardless",
        "Look at the color of the pot"
      ],
      correct: 0,
      explanation: "Sticking your finger in the soil is the most reliable way. If it's dry, water it; if it's wet, wait!"
    },
    {
      question: "What do ladybugs eat that makes them great for your garden?",
      options: [
        "Plant leaves",
        "Your vegetables",
        "Aphids (tiny pests)",
        "Grass"
      ],
      correct: 2,
      explanation: "Ladybugs are natural predators that eat aphids, which can damage your plants."
    },
    {
      question: "Which direction should a window face for the best light for indoor plants?",
      options: [
        "North",
        "South",
        "East",
        "West"
      ],
      correct: 1,
      explanation: "In the northern hemisphere, south-facing windows provide the most consistent and strongest light."
    },
    {
      question: "What does 'bolting' mean in gardening?",
      options: [
        "The plant is growing very fast",
        "The plant is dying from thirst",
        "The plant has grown a flower prematurely due to heat",
        "Using a bolt to secure a garden fence"
      ],
      correct: 2,
      explanation: "Bolting happens when a plant (like lettuce) flowers early, usually making the leaves bitter."
    },
    {
      question: "Why should you put mulch around your plants?",
      options: [
        "To make the garden look pretty only",
        "To keep moisture in and stop weeds",
        "To attract more bugs",
        "To keep the soil as dry as possible"
      ],
      correct: 1,
      explanation: "Mulch acts as a blanket, keeping the soil cool, moist, and preventing weeds from growing."
    },
    {
      question: "What is 'Black Gold' in gardening terms?",
      options: [
        "Oil found in the yard",
        "Rich, finished compost",
        "Black plastic mulch",
        "Coal"
      ],
      correct: 1,
      explanation: "Finished compost is called 'Black Gold' because it is incredibly valuable for plant health and growth."
    },
    {
      question: "Why should you rotate your crops each year?",
      options: [
        "To confuse the birds",
        "To prevent soil diseases and pests from building up",
        "To make the garden look different",
        "So the plants don't get bored"
      ],
      correct: 1,
      explanation: "Crop rotation prevents pests and diseases that live in the soil from attacking the same type of plant every year."
    },
    {
      question: "Which of these is a 'heavy feeder' (needs lots of nutrients)?",
      options: [
        "Radishes",
        "Cacti",
        "Sweet Corn",
        "Air plants"
      ],
      correct: 2,
      explanation: "Sweet corn is a 'heavy feeder' and needs plenty of nitrogen and compost to grow large ears."
    },
    {
      question: "What is the benefit of 'thinning' your seedlings?",
      options: [
        "It makes the rows look straighter",
        "It gives the remaining plants enough space, light, and nutrients",
        "It's just a way to waste seeds",
        "It prevents the plants from getting too tall"
      ],
      correct: 1,
      explanation: "Thinning ensures that the strongest plants have enough room to grow without competing for resources."
    },
    {
      question: "When is the best time to water your garden?",
      options: [
        "In the middle of the hot afternoon",
        "At midnight",
        "Early morning",
        "Whenever you remember"
      ],
      correct: 2,
      explanation: "Early morning is best because it allows the leaves to dry and ensures the plant is hydrated before the heat of the day."
    }
  ]
};

// Make sure it's available globally
if (typeof window !== 'undefined') {
  window.farmingTopics = farmingTopics;
}
