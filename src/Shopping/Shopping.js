import { CartProvider, useCart } from "react-use-cart";
import Navhome from "../Navhome";
import { Container, Row } from "reactstrap";

function Page() {
  const { addItem } = useCart();

  const products = [{
    "id": 1,
    "title": "ARK: Survival Of The Fittest",
    "genres": [1, 2, 3, 4, 5, 6],
    "publisher": 1,
    "description": "ARK: Survival of the Fittest is a Multiplayer Online Survival Arena (MOSA) game that pits as many as 72 combatants against one another in the struggle for survival in a harsh, changing environment packed with deadly creatures, &#x201C;Evolution Events,&#x201D; and other players.",
    "developer": 1,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/407530/header.jpg?t=1567712233"
  }, {
    "id": 2,
    "title": "Absolver",
    "genres": [1, 2, 3],
    "publisher": 2,
    "description": "Absolver is an online multiplayer combat game where players are placed behind the mask of a Prospect under control of the Guides, the new rulers of the fallen Adal Empire, who will determine your worth in joining their elite corps of Absolvers.",
    "developer": 2,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/473690/header.jpg?t=1568597348"
  }, {
    "id": 3,
    "title": "Albino Lullaby: Episode 1",
    "genres": [1, 2, 3],
    "publisher": 3,
    "description": "Albino Lullaby is a horror adventure game that doesn&apos;t rely on jump scares or gore. Escape from a surreal psychological nightmare as the world dynamically twists and contorts around you.",
    "developer": 3,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/355860/header.jpg?t=1478193061"
  }, {
    "id": 4,
    "title": "Assassin’s Creed® IV Black Flag™",
    "genres": [1, 2],
    "publisher": 4,
    "description": "The year is 1715. Pirates rule the Caribbean and have established their own lawless Republic where corruption, greediness and cruelty are commonplace.Among these outlaws is a brash young captain named Edward Kenway.",
    "developer": 4,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/242050/header.jpg?t=1575984415"
  }, {
    "id": 5,
    "title": "A Plague Tale: Innocence",
    "genres": [1],
    "publisher": 5,
    "description": "Follow the grim tale of young Amicia and her little brother Hugo, in a heartrending journey through the darkest hours of history.",
    "developer": 5,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/752590/header.jpg?t=1583856034"
  }, {
    "id": 6,
    "title": "Arma 3",
    "genres": [1, 7, 8, 6],
    "publisher": 6,
    "description": "Experience true combat gameplay in a massive military sandbox. Deploying a wide variety of single- and multiplayer content, over 20 vehicles and 40 weapons, and limitless opportunities for content creation, this is the PC&#x2019;s premier military game. Authentic, diverse, open - Arma 3 sends you to war.",
    "developer": 6,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/107410/header.jpg?t=1582546432"
  }, {
    "id": 7,
    "title": "ATOM RPG",
    "genres": [5],
    "publisher": 7,
    "description": "ATOM RPG is a post-apocalyptic indie game, inspired by classic CRPGs: Fallout, Wasteland, Deus Ex, Baldur&apos;s Gate and many others.",
    "developer": 7,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/552620/header.jpg?t=1573854271"
  }, {
    "id": 8,
    "title": "Batman™: Arkham Asylum Game of the Year Edition",
    "genres": [1, 2],
    "publisher": 8,
    "description": "Experience what it&#x2019;s like to be Batman and face off against Gotham&apos;s greatest villians. Explore every inch of Arkham Asylum and roam freely on the infamous island.",
    "developer": 8,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/35140/header.jpg?t=1569358035"
  }, {
    "id": 9,
    "title": "American Truck Simulator",
    "genres": [3, 8],
    "publisher": 9,
    "description": "Experience legendary American trucks and deliver various cargoes across sunny California, sandy Nevada, and the Grand Canyon State of Arizona. American Truck Simulator takes you on a journey through the breathtaking landscapes and widely recognized landmarks around the States.",
    "developer": 9,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/270880/header.jpg?t=1581693502"
  }, {
    "id": 10,
    "title": "Araha: Curse of Yieun Island",
    "genres": [2, 3],
    "publisher": 10,
    "description": "Araha: Curse of Yieun Island is a survival horror game. You will explore the hospital on an island as &apos;the Boy&apos; who is looking for his sister. Starting from the abandoned hospital, You will journey through the cursed island covering the Sharman&apos;s sanctum, Cemetary in the mountainside and more.",
    "developer": 10,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/1190130/header.jpg?t=1579589804"
  }, {
    "id": 11,
    "title": "Bear With Me: The Lost Robots",
    "genres": [2, 9, 3],
    "publisher": 11,
    "description": "Bear With Me: The Lost Robots is an all new prequel chapter featuring Amber&#x2019;s brother Flint and the callous detective Ted E. Bear. Take to the gritty and bustling undergrounds of Paper City, discovering new characters and rich lore leading up to the events of the first 3 episodes of Bear With Me.",
    "developer": 11,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/1050000/header.jpg?t=1573066046"
  }, {
    "id": 12,
    "title": "7 Days to Die",
    "genres": [1, 2, 3],
    "publisher": 12,
    "description": "7 Days to Die is an open-world game that is a unique combination of first person shooter, survival horror, tower defense, and role-playing games. Play the definitive zombie survival sandbox RPG that came first. Navezgane awaits!",
    "developer": 12,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/251570/header.jpg?t=1579879756"
  }, {
    "id": 13,
    "title": "Battlefleet Gothic: Armada 2",
    "genres": [6],
    "publisher": 5,
    "description": "Battlefleet Gothic: Armada 2 is the new real-time strategy game adapted from Games Workshop&#x2019;s famous tabletop game that portrays the epic space battles of the Warhammer 40,000 universe.",
    "developer": 13,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/573100/header.jpg?t=1571674851"
  }, {
    "id": 14,
    "title": "Age of Wonders: Planetfall",
    "genres": [6],
    "publisher": 13,
    "description": "Age of Wonders: Planetfall is the new strategy game from Triumph Studios, creators of the critically acclaimed Age of Wonders series, bringing all the exciting tactical turn-based combat and in-depth empire building of its predecessors to space in an all-new, sci-fi setting.",
    "developer": 14,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/718850/header_alt_assets_1.jpg?t=1582034955"
  }, {
    "id": 15,
    "title": "Artifact",
    "genres": [9, 6],
    "publisher": 14,
    "description": "A collaboration between legendary game designer Richard Garfield and Valve, Artifact offers the deepest gameplay and the highest-fidelity experience ever seen in a trading card game.",
    "developer": 15,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/583950/header.jpg?t=1547599761"
  }, {
    "id": 16,
    "title": "Argo",
    "genres": [1, 10],
    "publisher": 6,
    "description": "Jump straight into combat in this official standalone FREE total conversion of Arma 3. Argo is a hardcore tactical first-person shooter, in which you fight across unrestricted terrain, and where a single bullet is all it takes. Master your craft to rank up and become (in)famous on the battlefield.",
    "developer": 6,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/530700/header.jpg?t=1582121845"
  }, {
    "id": 17,
    "title": "Albion Online",
    "genres": [4, 5],
    "publisher": 15,
    "description": "Albion Online is a fantasy sandbox MMORPG featuring a player-driven economy, classless combat system, and intense PvP battles. Explore a vast open world full of danger and opportunity. Grow your wealth, forge alliances, and leave your mark on the world of Albion.",
    "developer": 16,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/761890/header.jpg?t=1579517471"
  }, {
    "id": 18,
    "title": "Battlerite",
    "genres": [1],
    "publisher": 16,
    "description": "BATTLERITE&#x200B; &#x200B;is&#x200B; &#x200B;an&#x200B; &#x200B;action-packed&#x200B; &#x200B;team&#x200B; &#x200B;arena&#x200B; &#x200B;brawler.&#x200B; &#x200B;Experience&#x200B; &#x200B;the&#x200B; &#x200B;unique&#x200B; &#x200B;combination&#x200B; &#x200B;of&#x200B; top-down&#x200B; &#x200B;shooter&#x200B; meets&#x200B; &#x200B;fast-paced&#x200B; &#x200B;fighting&#x200B; &#x200B;game and challenge &#x200B;friends&#x200B; &#x200B;and&#x200B; foes&#x200B; &#x200B;in&#x200B; &#x200B;a&#x200B; &#x200B;battle&#x200B; &#x200B;of reaction. The Arena awaits!",
    "developer": 17,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/504370/header.jpg?t=1556921507"
  }, {
    "id": 19,
    "title": "Asterix & Obelix XXL 3 - The Crystal Menhir",
    "genres": [2],
    "publisher": 17,
    "description": "Set off on an exciting adventure and immerse yourself in the world of Asterix! Alone or in co-op, explore the lands of the Roman empire and unravel the mystery of the Crystal Menhir and its incredible powers!",
    "developer": 18,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/1109690/header.jpg?t=1575449946"
  }, {
    "id": 20,
    "title": "Catherine Classic",
    "genres": [2],
    "publisher": 18,
    "description": "Catherine: a tale of love, betrayal, and the terror of commitment. Experience the mature action-adventure-puzzle game unlike any other from the makers of the Persona series, now enhanced for PC in all its Classic glory. Is love over? Climb to the top or die trying.",
    "developer": 19,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/893180/header.jpg?t=1582800847"
  }, {
    "id": 21,
    "title": "Armello",
    "genres": [2, 3, 5, 6],
    "publisher": 19,
    "description": "Armello is a grim fairy-tale board game come to life, with every match combining deep, tactical card play, rich tabletop strategy and RPG elements. Leverage subterfuge, spells and careful strategy to wrangle control of the game&apos;s chaotic odds as you quest for the throne.",
    "developer": 20,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/290340/header.jpg?t=1572478783"
  }, {
    "id": 22,
    "title": "Batman™: Arkham City - Game of the Year Edition",
    "genres": [1, 2],
    "publisher": 8,
    "description": "Get Batman: Arkham City and all DLC for one low price with the release of the GOTY Edition!",
    "developer": 8,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/200260/header.jpg?t=1573322737"
  }, {
    "id": 23,
    "title": "ASTRONEER",
    "genres": [2, 3],
    "publisher": 20,
    "description": "A game of aerospace industry and interplanetary exploration.",
    "developer": 21,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/361420/header.jpg?t=1578609139"
  }, {
    "id": 24,
    "title": "ARK: Survival Evolved",
    "genres": [1, 2, 3, 4, 5],
    "publisher": 1,
    "description": "Stranded on the shores of a mysterious island, you must learn to survive. Use your cunning to kill or tame the primeval creatures roaming the land, and encounter other players to survive, dominate... and escape!",
    "developer": 1,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/346110/header.jpg?t=1583178772"
  }, {
    "id": 25,
    "title": "Battlerite Royale",
    "genres": [1, 4, 11],
    "publisher": 16,
    "description": "Explore the fantastical Talon Island in a thrilling fusion between a MOBA and Battle Royale game. Choose your Champion and master their unique abilities, loot for treasures alone or with a friend, and rise above the competition in a top-down action-fest. Only the best survive to the end!",
    "developer": 17,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/879160/header.jpg?t=1571235976"
  }, {
    "id": 26,
    "title": "AI: The Somnium Files",
    "genres": [2],
    "publisher": 21,
    "description": "Play as detective Kaname Date on the case of an elusive serial killer in this thrilling, sci-fi murder mystery.",
    "developer": 22,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/948740/header.jpg?t=1569374371"
  }, {
    "id": 27,
    "title": "Blair Witch",
    "genres": [2, 3],
    "publisher": 22,
    "description": "Inspired by the cinematic lore of Blair Witch, experience a new story-driven psychological horror game that studies your reactions to fear and stress.",
    "developer": 23,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/1092660/header.jpg?t=1580201156"
  }, {
    "id": 28,
    "title": "ACE COMBAT™ 7: SKIES UNKNOWN",
    "genres": [1, 8],
    "publisher": 23,
    "description": "Become an ace pilot and soar through photorealistic skies with full 360 degree movement; down enemy aircraft and experience the thrill of engaging in realistic sorties! Aerial combat has never looked or felt better!",
    "developer": 24,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/502500/header.jpg?t=1580308863"
  }, {
    "id": 29,
    "title": "Claybook",
    "genres": [1, 3, 12, 13],
    "publisher": 24,
    "description": "Claybook is a unique world made entirely of clay. Shape your character and the world around you to overcome challenging obstacles.",
    "developer": 25,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/661920/header.jpg?t=1572331500"
  }, {
    "id": 30,
    "title": "Age of Wonders III",
    "genres": [5, 6],
    "publisher": 13,
    "description": "Age of Wonders III is the long anticipated sequel to the award-winning strategy series. Delivering a unique mix of Empire Building, Role Playing and Warfare, Age of Wonders III offers the ultimate in turn-based fantasy strategy for veterans of the series and new players alike!",
    "developer": 14,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/226840/header.jpg?t=1565111067"
  }, {
    "id": 31,
    "title": "BeamNG.drive",
    "genres": [8, 14],
    "publisher": 25,
    "description": "A dynamic soft-body physics vehicle simulator capable of doing just about anything.",
    "developer": 26,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/284160/header.jpg?t=1581529279"
  }, {
    "id": 32,
    "title": "AO International Tennis",
    "genres": [15],
    "publisher": 26,
    "description": "AO International Tennis is the most authentic, community-focused tennis game ever. Make use of comprehensive PlayFace&#x2122;, Stadium Creator, and other customisation features to put a photo-realistic version of yourself in your local tennis competition, up against the greats, including Rafael Nadal.",
    "developer": 27,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/758410/header.jpg?t=1572496262"
  }, {
    "id": 33,
    "title": "BLACKSAD: Under the Skin",
    "genres": [2, 9, 13],
    "publisher": 17,
    "description": "BLACKSAD: Under the Skin - A dark corruption scandal in the heart of the New York City&apos;s underworld for charismatic detective John Blacksad!",
    "developer": 28,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/1003890/header.jpg?t=1581688634"
  }, {
    "id": 34,
    "title": "Black Desert Online",
    "genres": [1, 2, 10, 4, 5, 8, 6],
    "publisher": 27,
    "description": "Black Desert Online is a sandbox, living-world MMORPG. Experience fast-paced, action-packed combat, hunt monsters and huge bosses, fight with friends in a guild to siege nodes and conquer castles, train your life skills such as fishing, trading, crafting, cooking, and much more!",
    "developer": 29,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/582660/header.jpg?t=1582826837"
  }, {
    "id": 35,
    "title": "Assassin’s Creed® Unity",
    "genres": [1, 2],
    "publisher": 4,
    "description": "Assassin&#x2019;s Creed&#xAE; Unity tells the story of Arno, a young man who embarks upon an extraordinary journey to expose the true powers behind the French Revolution. In the brand new co-op mode, you and your friends will also be thrown in the middle of a ruthless struggle for the fate of a nation.",
    "developer": 30,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/289650/header.jpg?t=1575045099"
  }, {
    "id": 36,
    "title": "Clicker Heroes",
    "genres": [2, 9, 10, 3, 5, 8, 6],
    "publisher": 28,
    "description": "Ever wondered what one quadrillion damage per second feels like? Wonder no more! Embark on your quest to attain it today! Start out by clicking on the monster to kill them, and get their gold. Spend that gold on hiring new heroes and get more damage. The more damage you deal, the more gold you will get.",
    "developer": 31,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/363970/header.jpg?t=1512177483"
  }, {
    "id": 37,
    "title": "Call of Cthulhu®",
    "genres": [2, 5],
    "publisher": 5,
    "description": "1924. Private Investigator Pierce is sent to look into the tragic death of the Hawkins family. Plunge into a world of creeping madness and cosmic horror. Cryptic clues, shadowy figures, and pure terror bar your way as you fight to retain your sanity and solve an otherworldly mystery.",
    "developer": 32,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/399810/header.jpg?t=1565103340"
  }, {
    "id": 38,
    "title": "Assassin’s Creed®: Syndicate",
    "genres": [1, 2],
    "publisher": 4,
    "description": "London, 1868. In the heart of the Industrial Revolution, lead your underworld organization and grow your influence to fight those who exploit the less privileged in the name of...",
    "developer": 33,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/368500/header.jpg?t=1575042803"
  }, {
    "id": 39,
    "title": "Amazing Cultivation Simulator / 了不起的修仙模拟器",
    "genres": [3, 5, 8, 6],
    "publisher": 29,
    "description": "&#x72EC;&#x4E00;&#x65E0;&#x4E8C;&#x7684;&#x4FEE;&#x4ED9;&#x6E38;&#x620F;&#xFF0C;&#x5EFA;&#x7ACB;&#x5C5E;&#x4E8E;&#x4F60;&#x7684;&#x4ED9;&#x95E8;&#xFF0C;&#x62DB;&#x6536;&#x5929;&#x8D44;&#x7EDD;&#x4EE3;&#x7684;&#x5F1F;&#x5B50;&#xFF0C;&#x5EFA;&#x9020;&#x7F8E;&#x8F6E;&#x7F8E;&#x5942;&#x7684;&#x5EFA;&#x7B51;&#xFF0C;&#x6536;&#x96C6;&#x5404;&#x79CD;&#x795E;&#x5999;&#x7684;&#x4FEE;&#x884C;&#x529F;&#x6CD5;&#x3001;&#x7075;&#x836F;&#x6CD5;&#x5B9D;&#x3001;&#x795E;&#x901A;&#x79D8;&#x7C4D;&#x3002;&#x642D;&#x5EFA;&#x4FEE;&#x884C;&#x5B9D;&#x5730;&#xFF0C;&#x8BA9;&#x95E8;&#x4E0B;&#x5F1F;&#x5B50;&#x9010;&#x6B65;&#x4FEE;&#x884C;&#x7A81;&#x7834;&#x3002;&#x7B51;&#x57FA;&#x3001;&#x70BC;&#x6C14;&#x3001;&#x7ED3;&#x4E39;&#x3001;&#x5143;&#x795E;&#x7B49;&#x5883;&#x754C;&#xFF0C;&#x6700;&#x7EC8;&#x5EA6;&#x8FC7;&#x5929;&#x52AB;&#x98DE;&#x5347;&#x6210;&#x4ED9;&#x3002;&#x5C06;&#x4F60;&#x7684;&#x95E8;&#x6D3E;&#x4ECE;&#x4E00;&#x65E0;&#x6240;&#x6709;&#x7684;&#x4E61;&#x6751;&#x805A;&#x843D;&#xFF0C;&#x7ECF;&#x8425;&#x6210;&#x5A01;&#x540D;&#x8D6B;&#x8D6B;&#x7684;&#x9AD8;&#x95E8;&#x5927;&#x6D3E;&#x3002;",
    "developer": 34,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/955900/header.jpg?t=1582171273"
  }, {
    "id": 40,
    "title": "ATLAS",
    "genres": [1, 2, 4, 5],
    "publisher": 30,
    "description": "Set sail for the ultimate pirate experience! Embark on a grand adventure alongside thousands of other players in one of the largest game worlds ever built (and even claim a piece of it to call your own). Build your ship, assemble your crew, sail the high seas, and become a pirate legend!",
    "developer": 35,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/834910/header.jpg?t=1573620788"
  }, {
    "id": 41,
    "title": "Brawlhalla",
    "genres": [1, 10, 3, 12],
    "publisher": 4,
    "description": "An epic platform fighter for up to 8 players online or locally. Try casual free-for-alls, ranked matches, or invite friends to a private room. And it&apos;s free! Play cross-platform with millions of players on PS4, XBox One, Nintendo Switch, and Steam! Frequent updates. Over forty Legends.",
    "developer": 36,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/291550/header.jpg?t=1583426143"
  }, {
    "id": 42,
    "title": "Company of Heroes",
    "genres": [1, 6],
    "publisher": 31,
    "description": "Delivering a visceral WWII gaming experience, Company of Heroes redefines RTS by bringing the sacrifice of heroic soldiers, war-ravaged environments, and dynamic battlefields to life. Please visit the &quot;Company of Heroes - Legacy Edition&quot; page for additional user reviews.",
    "developer": 37,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/228200/header.jpg?t=1570195772"
  }, {
    "id": 43,
    "title": "Assetto Corsa Competizione",
    "genres": [14, 8, 15],
    "publisher": 32,
    "description": "Assetto Corsa Competizione is the new official Blancpain GT Series videogame. Thanks to the extraordinary quality of simulation, the game will allow you to experience the real atmosphere of the FIA &#x200B;&#x200B;GT3 homologated championship, competing against official drivers, teams, cars and circuits.",
    "developer": 38,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/805550/header.jpg?t=1580836221"
  }, {
    "id": 44,
    "title": "CardLife: Cardboard Survival",
    "genres": [1, 2, 4, 3, 5],
    "publisher": 33,
    "description": "Hand draw any weapon, tool, building piece and your own character in this innovative science-fantasy creative survival game. Mine for resources, construct unique buildings and battle fantastical beasts with friends or play alone.",
    "developer": 39,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/920690/header.jpg?t=1551692554"
  }, {
    "id": 45,
    "title": "Cities: Skylines",
    "genres": [9, 8, 6],
    "publisher": 13,
    "description": "Cities: Skylines is a modern take on the classic city simulation. The game introduces new game play elements to realize the thrill and hardships of creating and maintaining a real city whilst expanding on some well-established tropes of the city building experience.",
    "developer": 40,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/255710/header.jpg?t=1580202319"
  }, {
    "id": 46,
    "title": "Celeste",
    "genres": [1, 2, 3, 12],
    "publisher": 34,
    "description": "Help Madeline survive her inner demons on her journey to the top of Celeste Mountain, in this super-tight platformer from the creators of TowerFall. Brave hundreds of hand-crafted challenges, uncover devious secrets, and piece together the mystery of the mountain.",
    "developer": 41,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/504230/header.jpg?t=1580863858"
  }, {
    "id": 47,
    "title": "Constructor Plus",
    "genres": [3, 8, 6],
    "publisher": 35,
    "description": "Constructor Plus is the definitive building simulation for the modern day tycoon. Build your dream town full of crackpot undesirables, businesses, and quirky tenants whilst fending off your rivals in the eagerly awaited sequel to Constructor HD. With almost 3 times more content, building just got bigger!",
    "developer": 42,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/898800/header.jpg?t=1575426423"
  }, {
    "id": 48,
    "title": "Conception PLUS: Maidens of the Twelve Stars",
    "genres": [5],
    "publisher": 21,
    "description": "Itsuki Yuge is suddenly summoned to the magical world of Granvania to save it from evil Impurities. To return to his own world, he must save this one with the help of his Star Children born between him and the 12 Star Maidens!",
    "developer": 22,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/906510/header.jpg?t=1573001675"
  }, {
    "id": 49,
    "title": "Brothers: A Tale of Two Sons",
    "genres": [2, 9, 13],
    "publisher": 32,
    "description": "Guide two brothers on an epic fairy tale journey from visionary Swedish film director, Josef Fares and top-tier developer Starbreeze Studios. Control both brothers at once as you experience co-op play in single player mode, like never before.",
    "developer": 43,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/225080/header.jpg?t=1571694004"
  }, {
    "id": 50,
    "title": "Black Squad",
    "genres": [7, 1, 10],
    "publisher": 36,
    "description": "Black Squad is a free-to-play military first-person-shooter. Players can master their skills and show off their strategies with a wide range of game maps, modes, and weapons to choose from. Join thousands of FPS players worldwide in one of the most played games on Steam!",
    "developer": 44,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/550650/header.jpg?t=1580793307"
  }, {
    "id": 51,
    "title": "Assetto Corsa",
    "genres": [14, 8, 15],
    "publisher": 37,
    "description": "Assetto Corsa v1.16 introduces the new &quot;Laguna Seca&quot; laser-scanned track, 7 new cars among which the eagerly awaited Alfa Romeo Giulia Quadrifoglio! Check the changelog for further info!",
    "developer": 38,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/244210/header.jpg?t=1574932208"
  }, {
    "id": 52,
    "title": "Cuphead",
    "genres": [1, 16, 3, 12],
    "publisher": 38,
    "description": "Cuphead is a classic run and gun action game heavily focused on boss battles. Inspired by cartoons of the 1930s, the visuals and audio are painstakingly created with the same techniques of the era, i.e. traditional hand drawn cel animation, watercolor backgrounds, and original jazz recordings.",
    "developer": 45,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/268910/header.jpg?t=1572039891"
  }, {
    "id": 53,
    "title": "Dakar 18",
    "genres": [14, 8],
    "publisher": 39,
    "description": "Based on the world famous annual rally raid organized by Amaury Sport Organisation (A.S.O.) in South America, DAKAR 18 is a realistic simulation of the biggest cross-country rally in the world and features a variety of vehicles, including motorcycles, cars, trucks, quads and SSVs.",
    "developer": 46,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/767390/header.jpg?t=1569506171"
  }, {
    "id": 54,
    "title": "DAEMON X MACHINA",
    "genres": [1],
    "publisher": 40,
    "description": "Pilot your fully customizable Arsenal mech and join your fellow mercenaries in defending humanity from the corrupted machines and gigantic robots in this post-apocalyptic action game!",
    "developer": 47,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/1167450/header.jpg?t=1581706100"
  }, {
    "id": 55,
    "title": "Assassin’s Creed® Odyssey",
    "genres": [1, 2, 3],
    "publisher": 4,
    "description": "Choose your fate in Assassin&apos;s Creed&#xAE; Odyssey. From outcast to living legend, embark on an odyssey to uncover the secrets of your past and change the fate of Ancient Greece.",
    "developer": 48,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/812140/header.jpg?t=1582146584"
  }, {
    "id": 56,
    "title": "Counter-Strike: Source",
    "genres": [1, 7],
    "publisher": 14,
    "description": "Counter-Strike: Source blends Counter-Strike&apos;s award-winning teamplay action with the advanced technology of Source&#x2122; technology.",
    "developer": 15,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/240/header.jpg?t=1580852525"
  }, {
    "id": 57,
    "title": "Closers",
    "genres": [10, 4, 5],
    "publisher": 41,
    "description": "Closers is an episodic anime action RPG bursting with spectacular battles and steeped in an epic storyline. Choose your Closer, gather your friends or dive in solo, and use your amazing powers to protect Earth, in mankind&#x2019;s desperate battle against horrific monsters from another dimension!",
    "developer": 49,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/215830/header.jpg?t=1568146837"
  }, {
    "id": 58,
    "title": "Clicker Heroes 2",
    "genres": [1, 2, 16, 9, 3, 5, 8, 6],
    "publisher": 28,
    "description": "Clicker Heroes 2 is an endless incremental idle Action RPG. Embark on a never-ending journey to the top right of your screen.",
    "developer": 31,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/629910/header.jpg?t=1576653422"
  }, {
    "id": 59,
    "title": "Chivalry: Medieval Warfare",
    "genres": [1, 3],
    "publisher": 42,
    "description": "Besiege castles and raid villages in Chivalry: Medieval Warfare, a fast-paced medieval first person slasher with a focus on multiplayer battles",
    "developer": 50,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/219640/header.jpg?t=1574984340"
  }, {
    "id": 60,
    "title": "Commandos 2 - HD Remaster",
    "genres": [6],
    "publisher": 43,
    "description": "Relive the real-time tactics masterpiece that defined the genre like no other: Commandos 2 - HD Remaster is a true homage to one of gaming&#x2019;s most celebrated masterpieces.",
    "developer": 51,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/1100410/header_alt_assets_0.jpg?t=1583406183"
  }, {
    "id": 61,
    "title": "Counter-Strike",
    "genres": [7, 1],
    "publisher": 14,
    "description": "Play the world&apos;s number 1 online action game. Engage in an incredibly realistic brand of terrorist warfare in this wildly popular team-based game. Ally with teammates to complete strategic missions. Take out enemy sites. Rescue hostages. Your role affects your team&apos;s success. Your team&apos;s success affects your role.",
    "developer": 15,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/10/header.jpg?t=1568751918"
  }, {
    "id": 62,
    "title": "Cultist Simulator",
    "genres": [3, 5, 8, 6],
    "publisher": 44,
    "description": "Seize forbidden treasures. Summon alien gods. Feed on your disciples.Cultist Simulator is a game of apocalypse and yearning. Play as a seeker after unholy mysteries, in a 1920s-themed setting of hidden gods and secret histories.",
    "developer": 52,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/718670/header.jpg?t=1580838445"
  }, {
    "id": 63,
    "title": "Darksiders III",
    "genres": [1, 2, 3, 5],
    "publisher": 45,
    "description": "Return to an apocalyptic Earth in Darksiders III, a hack-n-slash Action Adventure where players assume the role of FURY in her quest to hunt down and dispose of the Seven Deadly Sins. The most enigmatic of the Four Horsemen, FURY must bring balance to the forces that now ravage Earth.",
    "developer": 53,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/606280/header.jpg?t=1570126172"
  }, {
    "id": 64,
    "title": "Blackwake",
    "genres": [1, 3, 6],
    "publisher": 46,
    "description": "Blackwake is a multiplayer naval FPS focused on teamwork and cooperation. Fire the cannons, sink enemy ships or board them with firearms and steel.",
    "developer": 54,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/420290/header.jpg?t=1582336693"
  }, {
    "id": 65,
    "title": "ATOMEGA™",
    "genres": [1, 3],
    "publisher": 4,
    "description": "Grow, fight, collect and evade in the last cosmic arena the very end of time. Acquire MASS to evolve your EXOFORM from the nimble ATOM to the godlike OMEGA and compete for fun and dominance in a fast-paced, multiplayer shooter. ATOMEGA&#x2122; !",
    "developer": 55,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/619880/header.jpg?t=1517337080"
  }, {
    "id": 66,
    "title": "AVICII Invector",
    "genres": [9, 3],
    "publisher": 47,
    "description": "Soar through vocal melodies, sweep each fade and attack every beat in 25 of AVICII&#x2019;s biggest hits, in this enthralling futuristic rhythm-action experience &#x2013; AVICII Invector.",
    "developer": 56,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/986800/header.jpg?t=1579517097"
  }, {
    "id": 67,
    "title": "DARKSIDERS: GENESIS",
    "genres": [1, 2, 5],
    "publisher": 45,
    "description": "DARKSIDERS: GENESIS gives players their first look at the world of DARKSIDERS before the events of the original game. Furthermore, it introduces the fourth and last horseman STRIFE, as well as Co-op gameplay for the first time in the history of the franchise.",
    "developer": 57,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/710920/header.jpg?t=1583825750"
  }, {
    "id": 68,
    "title": "Darwin Project",
    "genres": [1, 9, 10, 3],
    "publisher": 48,
    "description": "In Darwin Project, ten inmates must survive the elements, track each other, fight, craft tools, and use their social skills to be the last one standing. It&apos;s a unique take on battle royale with a Show Director to influence the match and Spectator Interactions to create a one-of-a-kind game show.",
    "developer": 58,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/544920/header.jpg?t=1582672456"
  }, {
    "id": 69,
    "title": "Cuisine Royale",
    "genres": [1, 10, 4],
    "publisher": 49,
    "description": "Cuisine Royale is a brutal multiplayer last-man-standing shooter with realistic weaponry, mystic traps and demonic rituals.",
    "developer": 59,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/884660/header.jpg?t=1582886709"
  }, {
    "id": 70,
    "title": "Crossout",
    "genres": [1, 4, 14, 10],
    "publisher": 50,
    "description": "Join the Open Beta of Crossout, the post-apocalyptic MMO Action game! Craft your unique battle machines from dozens of interchangeable parts and destroy your enemies in explosive PvP online battles!",
    "developer": 60,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/386180/header.jpg?t=1583833342"
  }, {
    "id": 71,
    "title": "Dead by Daylight",
    "genres": [1],
    "publisher": 51,
    "description": "Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught and killed.",
    "developer": 61,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/381210/header.jpg?t=1583856335"
  }, {
    "id": 72,
    "title": "Chernobylite",
    "genres": [1, 2, 3, 5, 8],
    "publisher": 52,
    "description": "Chernobylite is a science-fiction survival horror experience, mixing the free exploration of its disturbing world with challenging combat, unique crafting, and non-linear storytelling. Try to survive and reveal the twisted secrets of Chernobyl in the 3D-scanned recreation of the real Exclusion Zone.",
    "developer": 62,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/1016800/header.jpg?t=1582816591"
  }, {
    "id": 73,
    "title": "Dawn of Man",
    "genres": [3, 8, 6],
    "publisher": 53,
    "description": "Command a settlement of ancient humans, guide them through the ages in their struggle for survival. Hunt, gather, craft tools, fight, research new techs and face the challenges the environment will throw at you.",
    "developer": 63,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/858810/header.jpg?t=1577994124"
  }, {
    "id": 74,
    "title": "Crying Suns",
    "genres": [3, 6],
    "publisher": 44,
    "description": "Crying Suns is a tactical rogue-lite that puts you in the role of a space fleet commander as you explore a mysteriously fallen empire. In this story rich experience inspired by Dune and Foundation, each successful run will uncover the truth about the Empire... and yourself as well.",
    "developer": 64,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/873940/header.jpg?t=1580207463"
  }, {
    "id": 75,
    "title": "Deliver Us The Moon: Fortuna",
    "genres": [1, 2, 3, 13, 8],
    "publisher": 47,
    "description": "Deliver Us The Moon is a Sci-Fi thriller set in an apocalyptic near future, where Earth&apos;s natural resources are depleted. A lone astronaut is sent to the moon on a critical mission to save humanity from extinction.",
    "developer": 65,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/428660/header.jpg?t=1579000471"
  }, {
    "id": 76,
    "title": "Descenders",
    "genres": [1, 14, 15],
    "publisher": 54,
    "description": "Descenders is extreme downhill freeriding for the modern era, with procedurally generated worlds, and where mistakes have real consequences. Will you lead your team to glory and become the next legendary Descender?",
    "developer": 66,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/681280/header.jpg?t=1582816583"
  }, {
    "id": 77,
    "title": "Black Future '88",
    "genres": [1, 2, 3],
    "publisher": 55,
    "description": "Black Future &#x2019;88 is a Synth-Punk roguelike 2D action Shooter. Vertically climb an always evolving procedural tower to reach the top and kill its insane owner&#x2026;before your heart explodes. Shoot, slash, dash and upgrade yourself to survive the endless waves of Homicidal AI, Traps &amp; Colossal Wardens.",
    "developer": 67,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/751820/header.jpg?t=1580900489"
  }, {
    "id": 78,
    "title": "Dungeon Defenders: Awakened",
    "genres": [3, 5, 6],
    "publisher": 56,
    "description": "Dungeon Defenders: Awakened is co-op Tower Defense combined with epic Action RPG combat. You&#x2019;re able to join forces with up to four players to take on a never-ending army of orcs, demons, and dragons! Are your defenses strong enough to save the world of Etheria?",
    "developer": 68,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/1101190/header.jpg?t=1582308089"
  }, {
    "id": 79,
    "title": "BlazBlue: Cross Tag Battle",
    "genres": [1],
    "publisher": 57,
    "description": "THE COLLISION IS INEVITABLE! THE IMPACT WILL BE UNAVOIDABLE! Cross over between 4 different universes! Play as characters from the BlazBlue, Persona, Under Night In-Birth, and (for the first time ever in a fighting game), RWBY series!",
    "developer": 69,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/702890/header.jpg?t=1574317884"
  }, {
    "id": 80,
    "title": "Diesel Brothers: Truck Building Simulator",
    "genres": [9, 14, 8],
    "publisher": 58,
    "description": "Enter the World of Diesel! Grab some of the biggest four-wheelers. Trick these trucks, flip them for a profit or race against your friends online. This can go hard or this can go diesel!",
    "developer": 70,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/750050/header.jpg?t=1568793863"
  }, {
    "id": 81,
    "title": "Dungreed",
    "genres": [1, 3],
    "publisher": 59,
    "description": "Dungreed is a 2D side-scrolling action game with 2D Rogue-LITE elements. You become an adventurer exploring a continuously evolving dungeon to prevent the town from being destroyed. Eliminate enemies, use a variety of weapons and magic, eat food, and defeat evil in the dungeon!",
    "developer": 71,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/753420/header.jpg?t=1576032612"
  }, {
    "id": 82,
    "title": "Battletech",
    "genres": [1, 2, 6],
    "publisher": 60,
    "description": "Take command of your own mercenary outfit of &apos;Mechs and the MechWarriors that pilot them, struggling to stay afloat as you find yourself drawn into a brutal interstellar civil war.",
    "developer": 72,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/637090/header.jpg?t=1574360849"
  }, {
    "id": 83,
    "title": "Dota Underlords",
    "genres": [10, 6],
    "publisher": 14,
    "description": "Hire a crew and destroy your rivals in this new strategy battler set in the world of Dota. Introducing Season One: Explore White Spire and earn rewards on the Battle Pass. Pick from several different game modes, play on your own or with friends, and take advantage of crossplay on PC and mobile.",
    "developer": 15,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/1046930/header.jpg?t=1582824803"
  }, {
    "id": 84,
    "title": "Destiny 2",
    "genres": [1, 2, 7, 10, 4, 5],
    "publisher": 61,
    "description": "Dive into the free-to-play world of Destiny 2 to experience responsive FPS combat, explore the mysteries of our solar system, customize your guardian with unique gear, and unleash elemental abilities against powerful enemies.",
    "developer": 73,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/1085660/header.jpg?t=1583858222"
  }, {
    "id": 85,
    "title": "Crusader Kings II",
    "genres": [10, 5, 8, 6],
    "publisher": 13,
    "description": "Explore one of the defining periods in world history in an experience crafted by the masters of Grand Strategy.",
    "developer": 74,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/203770/header.jpg?t=1583519180"
  }, {
    "id": 86,
    "title": "Deep Rock Galactic",
    "genres": [1, 3],
    "publisher": 62,
    "description": "Deep Rock Galactic is a 1-4 player co-op FPS featuring badass space Dwarves, 100% destructible environments, procedurally-generated caves, and endless hordes of alien monsters.",
    "developer": 75,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/548430/header.jpg?t=1583051657"
  }, {
    "id": 87,
    "title": "Darksburg",
    "genres": [1, 3],
    "publisher": 63,
    "description": "DARKSBURG is a fast paced cooperative action game. Traverse the streets of Darksburg as an unlikely band of Survivors, or lurk in the darkness as the devious Revenants. Challenge friends and foes in an over-the-top struggle against overwhelming odds!",
    "developer": 76,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/939100/header.jpg?t=1583141827"
  }, {
    "id": 88,
    "title": "Far Cry® 4",
    "genres": [1, 2, 7],
    "publisher": 4,
    "description": "Hidden in the towering Himalayas lies Kyrat, a country steeped in tradition and violence. You are Ajay Ghale. Traveling to Kyrat to fulfill your mother&#x2019;s dying wish, you find yourself caught up in a civil war to overthrow the oppressive regime of dictator Pagan Min.",
    "developer": 77,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/298110/header.jpg?t=1575377085"
  }, {
    "id": 89,
    "title": "Curse of the Dead Gods",
    "genres": [1, 2],
    "publisher": 5,
    "description": "You seek untold riches, eternal life, divine powers - it leads to this accursed temple, a seemingly-infinite labyrinth of bottomless pits, deadly traps, and monsters.",
    "developer": 78,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/1123770/header.jpg?t=1583334060"
  }, {
    "id": 90,
    "title": "DARK SOULS™ III",
    "genres": [1, 5],
    "publisher": 64,
    "description": "Dark Souls continues to push the boundaries with the latest, ambitious chapter in the critically-acclaimed and genre-defining series. Prepare yourself and Embrace The Darkness!",
    "developer": 79,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/374320/header.jpg?t=1580308221"
  }, {
    "id": 91,
    "title": "Double Turn",
    "genres": [1, 3],
    "publisher": 65,
    "description": "Double Turn is a pro-wrestling party brawler for up to 4 players. Fight in fast-paced local versus matches or challenge foes 1v1 online. Master the simple combat, execute destructive signature moves, and take down your opponent to take home championship gold.",
    "developer": 80,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/762680/header.jpg?t=1549907896"
  }, {
    "id": 92,
    "title": "DARK SOULS™: REMASTERED",
    "genres": [1, 5],
    "publisher": 66,
    "description": "Then, there was fire. Re-experience the critically acclaimed, genre-defining game that started it all. Beautifully remastered, return to Lordran in stunning high-definition detail running at 60fps.",
    "developer": 81,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/570940/header.jpg?t=1580308688"
  }, {
    "id": 93,
    "title": "FrostRunner",
    "genres": [1, 10, 3, 12],
    "publisher": 67,
    "description": "FrostRunner is a first-person platformer &#x201C;speedrunning&#x201D; game, where the player rapidly completes platforming challenges before the timer runs out. Using their tether tool, players compete to finish each of the 36 unique levels as quickly as possible and earn a place at the top of the leaderboards.",
    "developer": 82,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/934840/header.jpg?t=1566744887"
  }, {
    "id": 94,
    "title": "Cooking Simulator",
    "genres": [9, 3, 8],
    "publisher": 68,
    "description": "Play one of the best cooking games! Take control of a highly polished, realistic kitchen equipped with all kinds of utensils and stands. Unlock and master over 80 recipes or use dozens of lifelike ingredients to cook everything you like. A simulator spiced up with a dash of real-life physics!",
    "developer": 83,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/641320/header.jpg?t=1583248087"
  }, {
    "id": 95,
    "title": "Counter-Strike: Global Offensive",
    "genres": [1, 7, 10],
    "publisher": 69,
    "description": "Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).",
    "developer": 15,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/730/header.jpg?t=1580765900"
  }, {
    "id": 96,
    "title": "Deep Sky Derelicts",
    "genres": [3, 5, 6],
    "publisher": 70,
    "description": "Deep Sky Derelicts is an original combination of turn-based strategy and RPG, enriched with tactical card combat and popular roguelike elements. Explore derelict alien ships, fight, loot and upgrade your gear, all in distinctive retro-futuristic comic book aesthetic style.",
    "developer": 84,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/698640/header.jpg?t=1578491187"
  }, {
    "id": 97,
    "title": "Dota 2",
    "genres": [1, 10, 11, 6],
    "publisher": 14,
    "description": "Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes. And no matter if it&apos;s their 10th hour of play or 1,000th, there&apos;s always something new to discover. With regular updates that ensure a constant evolution of gameplay, features, and heroes, Dota 2 has taken on a life of its own.",
    "developer": 15,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/570/header.jpg?t=1581406684"
  }, {
    "id": 98,
    "title": "ELEX",
    "genres": [1, 2, 5],
    "publisher": 45,
    "description": "ELEX is a handcrafted action role-playing experience from the award-winning creators of the Gothic series, set in a brand new post-apocalyptic Science Fantasy universe that puts players into a huge seamless game world full of original characters, mutated creatures, deep moral choices and powerful action.",
    "developer": 85,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/411300/header.jpg?t=1574337712"
  }, {
    "id": 99,
    "title": "DCL - The Game",
    "genres": [14, 8],
    "publisher": 71,
    "description": "DCL - The Game is the official videogame of the Drone Champions League - the world&#x2019;s leading series for Drone Racing Teams. Fly the original tracks from DCL and experience Drone Racing like a professional pilot. Join the flying revolution!",
    "developer": 86,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/964570/header.jpg?t=1582193560"
  }, {
    "id": 100,
    "title": "EXAPUNKS",
    "genres": [3, 13, 8],
    "publisher": 72,
    "description": "The year is 1997. You used to be a hacker, but now you have the phage. You made a deal: one hack, one dose. There&#x2019;s nothing left to lose&#x2026; except your life.",
    "developer": 87,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/716490/header.jpg?t=1573782831"
  }, {
    "id": 101,
    "title": "Five Nights at Freddy's 2",
    "genres": [3, 8, 1, 6],
    "publisher": 73,
    "description": "Welcome back to the new and improved Freddy Fazbear&apos;s Pizza! As always, Fazbear Entertainment is not responsible for death or dismemberment.",
    "developer": 88,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/332800/header.jpg?t=1579635993"
  }, {
    "id": 102,
    "title": "Dead Cells",
    "genres": [1, 3, 12],
    "publisher": 74,
    "description": "Dead Cells is a rogue-lite, metroidvania inspired, action-platformer. You&apos;ll explore a sprawling, ever-changing castle... assuming you&#x2019;re able to fight your way past its keepers in 2D souls-lite combat. No checkpoints. Kill, die, learn, repeat.",
    "developer": 89,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/588650/header_alt_assets_7.jpg?t=1581606652"
  }, {
    "id": 103,
    "title": "Edge Of Eternity",
    "genres": [3, 5, 6],
    "publisher": 75,
    "description": "Wage epic turn-based battles as you follow Daryon and Selene on their quest to find a cure to the all-consuming Corrosion in this grand tale of hope and sacrifice.",
    "developer": 90,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/269190/header.jpg?t=1581071255"
  }, {
    "id": 104,
    "title": "Darkest Dungeon®",
    "genres": [3, 5, 6],
    "publisher": 76,
    "description": "Darkest Dungeon is a challenging gothic roguelike turn-based RPG about the psychological stresses of adventuring. Recruit, train, and lead a team of flawed heroes against unimaginable horrors, stress, famine, disease, and the ever-encroaching dark. Can you keep your heroes together when all hope is lost?",
    "developer": 91,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/262060/header.jpg?t=1580160435"
  }, {
    "id": 105,
    "title": "Darksiders II Deathinitive Edition",
    "genres": [1, 2, 5],
    "publisher": 45,
    "description": "The ultimate DARKSIDERS II experience! 1080p native resolution. Reworked and tuned game balancing and loot distribution. Improved Graphic Render Engine for even higher visual quality, lighting and shadows. Improved and reworked level, character and environment graphics.",
    "developer": 53,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/388410/header.jpg?t=1570489988"
  }, {
    "id": 106,
    "title": "DESOLATE",
    "genres": [1, 2, 5],
    "publisher": 77,
    "description": "DESOLATE is a first person horror survival experience. Form a research team with up to 4 players and explore an open world filled with mysteries and unsolved questions, or do it all on your own.",
    "developer": 92,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/671510/header.jpg?t=1581515119"
  }, {
    "id": 107,
    "title": "Dead Frontier 2",
    "genres": [1, 10, 3, 4, 5],
    "publisher": 78,
    "description": "Online survival horror at its darkest. As one of the few survivors of the outbreak, you must scratch a living out of the decaying ruins of society. Scavenge for supplies, improve your skills, and trade with other players. All the while, keeping your eyes peeled for the infected lurking around every corner.",
    "developer": 93,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/744900/header.jpg?t=1580829943"
  }, {
    "id": 108,
    "title": "FTL: Faster Than Light",
    "genres": [9, 3, 8, 6],
    "publisher": 79,
    "description": "This &quot;spaceship simulation roguelike-like&quot; allows you to take your ship and crew on an adventure through a randomly generated galaxy filled with glory and bitter defeat.",
    "developer": 94,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/212680/header.jpg?t=1580423188"
  }, {
    "id": 109,
    "title": "Dirty Bomb®",
    "genres": [1, 10, 7],
    "publisher": 80,
    "description": "Work together or die alone! Fight to restore peace to London or tear it down for profit in the most challenging team based shooter around.",
    "developer": 95,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/333930/header.jpg?t=1551717452"
  }, {
    "id": 110,
    "title": "Football Manager 2019",
    "genres": [15, 8],
    "publisher": 31,
    "description": "Simulation gaming perfected. Create your unique footballing story by taking charge of the club you love. Complete control of this stunningly realistic game world is yours - every decision in your hands, or yours to delegate. Your call, your way, your story. Everything you&apos;ve ever dreamed of!",
    "developer": 96,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/872790/header.jpg?t=1576692442"
  }, {
    "id": 111,
    "title": "Forager",
    "genres": [1, 2, 9, 3, 8],
    "publisher": 44,
    "description": "The highly popular and quirky &quot;idle game that you want to actively keep playing&quot;. Explore, craft, gather &amp; manage resources, find secrets and build your base out of nothing! Buy land to explore and expand!",
    "developer": 97,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/751780/header.jpg?t=1580088330"
  }, {
    "id": 112,
    "title": "Fade to Silence",
    "genres": [5],
    "publisher": 81,
    "description": "Fade to Silence is a single-player and co-op survival adventure set in a post-apocalyptic world that is frozen in an eternal winter. Snow and ice have shaped a merciless landscape. Nature is corrupted. Monstrous creatures out of an Eldritch horror dream roam the frozen wasteland.",
    "developer": 98,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/706020/header.jpg?t=1568196449"
  }, {
    "id": 113,
    "title": "Everreach: Project Eden",
    "genres": [1, 7, 3, 5],
    "publisher": 82,
    "description": "Take on the role of Nora Harwood, member of Everreach&#x2019;s Security Division, on a mission to secure the colonization process of Eden and investigate mysterious incidents! Everreach: Project Eden is a fast-paced, story-driven action-RPG set on the visually stunning Planet Eden.",
    "developer": 99,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/915670/header.jpg?t=1580137184"
  }, {
    "id": 114,
    "title": "Days of War: Definitive Edition",
    "genres": [1, 7, 3],
    "publisher": 83,
    "description": "Days of War is an online FPS that re-imagines the team-based, close quarters, nonstop action of classic World War II multiplayer shooters.",
    "developer": 100,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/454350/header_alt_assets_1.jpg?t=1582253185"
  }, {
    "id": 115,
    "title": "Dying Light: Bad Blood",
    "genres": [1, 4, 5],
    "publisher": 84,
    "description": "Enter a zombie-infested area and compete as one of 12 players to become the only survivor - or make a team and fight for survival together.",
    "developer": 101,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/766370/header.jpg?t=1580153498"
  }, {
    "id": 116,
    "title": "Enter the Gungeon",
    "genres": [1, 2, 3],
    "publisher": 85,
    "description": "Enter the Gungeon is a bullet hell dungeon crawler following a band of misfits seeking to shoot, loot, dodge roll and table-flip their way to personal absolution by reaching the legendary Gungeon&#x2019;s ultimate treasure: the gun that can kill the past.",
    "developer": 102,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/311690/header.jpg?t=1575923806"
  }, {
    "id": 117,
    "title": "Deadliest Catch: The Game",
    "genres": [1, 2, 3, 8],
    "publisher": 86,
    "description": "Enter the dangerous world of king crab fishing in the deadly Bering Sea! Take command of your own fishing vessel, use realistic equipment, combat hazardous Alaskan waters and become the world&apos;s best crab catcher!",
    "developer": 103,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/838630/header.jpg?t=1583498344"
  }, {
    "id": 118,
    "title": "Far Cry® 5",
    "genres": [1, 2, 7],
    "publisher": 4,
    "description": "Welcome to Hope County, Montana, home to a fanatical doomsday cult known as Eden&#x2019;s Gate. Stand up to cult leader Joseph Seed &amp; his siblings, the Heralds, to spark the fires of resistance &amp; liberate the besieged community.",
    "developer": 4,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/552520/header.jpg?t=1575655495"
  }, {
    "id": 119,
    "title": "Donut County",
    "genres": [2, 9, 3, 13],
    "publisher": 87,
    "description": "Donut County is a story-based physics puzzle game where you play as an ever-growing hole in the ground. Meet cute characters, steal their trash, and throw them in a hole.",
    "developer": 104,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/702670/header.jpg?t=1578339832"
  }, {
    "id": 120,
    "title": "Islands of Nyne: Battle Royale",
    "genres": [7, 1, 3, 4],
    "publisher": 88,
    "description": "Drop into massive, alien-built arenas and begin the frantic search for weapons and gear - all while trying to stay one step ahead of the advancing plasma field&#x2026; or the sights of other contenders. ION offers its players a skill-driven, first-person-only Battle Royale all built into a unique sci-fi universe.",
    "developer": 105,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/728540/header.jpg?t=1545251662"
  }, {
    "id": 121,
    "title": "DUSK",
    "genres": [1, 3],
    "publisher": 89,
    "description": "Battle through an onslaught of mystical backwater cultists, possessed militants &amp; even darker forces as you attempt to discover just what lurks beneath the Earth in this retro FPS inspired by the &apos;90s legends.",
    "developer": 106,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/519860/header.jpg?t=1581400216"
  }, {
    "id": 122,
    "title": "Dead In Vinland",
    "genres": [2, 3, 5, 8, 6],
    "publisher": 90,
    "description": "DEAD IN VINLAND is a survival/management game, mixed with RPG and adventure elements, about a Viking family trying their best to survive on a mysterious island.",
    "developer": 107,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/573120/header.jpg?t=1568805334"
  }, {
    "id": 123,
    "title": "For The King",
    "genres": [2, 3, 5, 6],
    "publisher": 91,
    "description": "For The King is a strategic RPG that blends tabletop and roguelike elements in a challenging adventure that spans the realms. Set off on a single player experience or play cooperatively both online and locally. INTO THE DEEP ADVENTURE, NOW AVAILABLE FOR FREE!",
    "developer": 108,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/527230/header.jpg?t=1573769343"
  }, {
    "id": 124,
    "title": "DiRT 4",
    "genres": [14, 8, 15],
    "publisher": 92,
    "description": "DiRT 4 is all about embracing fear. It&#x2019;s about the thrill, exhilaration and adrenaline that is absolutely vital to off-road racing. It&#x2019;s about loving the feeling of pushing flat out next to a sheer cliff drop, going for the gap that&#x2019;s too small and seeing how much air you can get. Be Fearless.",
    "developer": 109,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/421020/header.jpg?t=1573486444"
  }, {
    "id": 125,
    "title": "Fantasy General II",
    "genres": [6],
    "publisher": 93,
    "description": "Armies once again draw battle-lines on the war-torn land of Keldonia, and a new generation of commanders will test their bravery and tactics against each other. Fantasy wargaming is back!",
    "developer": 110,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/1025440/header.jpg?t=1582791608"
  }, {
    "id": 126,
    "title": "Into the Breach",
    "genres": [3, 5, 8, 6],
    "publisher": 79,
    "description": "Control powerful mechs from the future to defeat an alien threat. Each attempt to save the world presents a new randomly generated challenge in this turn-based strategy game.",
    "developer": 94,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/590380/header.jpg?t=1569971056"
  }, {
    "id": 127,
    "title": "Conan Exiles",
    "genres": [1, 2, 4, 5, 8, 6],
    "publisher": 94,
    "description": "An online multiplayer survival game, now with mounts and mounted combat, set in the lands of Conan the Barbarian. Survive in a vast open world sandbox, build a home and kingdom, dominate your enemies in single or multiplayer.",
    "developer": 111,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/440900/header.jpg?t=1582882015"
  }, {
    "id": 128,
    "title": "Depth",
    "genres": [1, 3],
    "publisher": 95,
    "description": "Play as a shark or a diver in a dark aquatic world and overcome your enemies by employing cunning, teamwork, and stealth. Depth blends tension and visceral action as you team up against AI or be matched with other players in heart pounding combat.",
    "developer": 112,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/274940/header.jpg?t=1581645045"
  }, {
    "id": 129,
    "title": "Empyrion - Galactic Survival",
    "genres": [2, 3, 8, 6],
    "publisher": 96,
    "description": "Empyrion - Galactic Survival is a 3D open world space sandbox survival adventure. Build powerful ships, mighty space stations and vast planetary settlements to explore, conquer or exploit a variety of different planets and discover the mysteries of Empyrion!",
    "developer": 113,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/383120/header.jpg?t=1578903100"
  }, {
    "id": 130,
    "title": "Don't Starve",
    "genres": [2, 3, 8],
    "publisher": 97,
    "description": "Don&#x2019;t Starve is an uncompromising wilderness survival game full of science and magic. Enter a strange and unexplored world full of strange creatures, dangers, and surprises. Gather resources to craft items and structures that match your survival style.",
    "developer": 114,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/219740/header.jpg?t=1577386240"
  }, {
    "id": 131,
    "title": "Immortal: Unchained",
    "genres": [1, 2, 5],
    "publisher": 98,
    "description": "Unleashed and unforgiving. Can you rise to the challenge? Immortal: Unchained is the latest addition to the genre of ultra-hardcore action RPGs. Take the role of a living weapon, unleashed to stop the source of a cataclysmic event threatening to end all worlds.",
    "developer": 115,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/369440/header.jpg?t=1572359580"
  }, {
    "id": 132,
    "title": "Kingdom Rush Origins",
    "genres": [3, 6],
    "publisher": 99,
    "description": "Command your elven army and defend mystical lands from sea serpents, evil sorcerers, and wave after wave of gnoll tribesman, all with the help of brand-spankin&#x2019; new towers, heroes, and spells to fend off every last baddie.",
    "developer": 116,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/816340/header.jpg?t=1560522383"
  }, {
    "id": 133,
    "title": "Endless Space® 2",
    "genres": [6],
    "publisher": 31,
    "description": "Endless Space 2 is a Strategic Space Opera, featuring the compelling &#x201C;just one more turn&#x201D; gameplay, set in the mysterious Endless universe. As the leader of your civilization, will you impose your vision and build the greatest stellar empire?",
    "developer": 117,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/392110/header.jpg?t=1582556003"
  }, {
    "id": 134,
    "title": "Don't Starve Together",
    "genres": [2, 3, 8],
    "publisher": 97,
    "description": "Don&apos;t Starve Together is the standalone multiplayer expansion of the uncompromising survival game Don&apos;t Starve.",
    "developer": 114,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/322330/header.jpg?t=1579803133"
  }, {
    "id": 135,
    "title": "Garry's Mod",
    "genres": [3, 8],
    "publisher": 14,
    "description": "Garry&apos;s Mod is a physics sandbox. There aren&apos;t any predefined aims or goals. We give you the tools and leave you to play.",
    "developer": 118,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/4000/header.jpg?t=1576464538"
  }, {
    "id": 136,
    "title": "Guacamelee! 2",
    "genres": [1, 2, 3, 12],
    "publisher": 100,
    "description": "Head back to the Mexiverse in this long-awaited sequel to the smash hit Guacamelee! Uppercut your way to victory across stunning new hand-crafted levels. Featuring a dense and colorful world, new luchador moves, sassy new bosses, twice the enemies, and 300% more chickens!",
    "developer": 119,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/534550/header.jpg?t=1582060387"
  }, {
    "id": 137,
    "title": "Elite Dangerous",
    "genres": [1, 2, 4, 5, 8, 6],
    "publisher": 101,
    "description": "Take control of your own starship in a cutthroat galaxy. Elite Dangerous brings gaming&#x2019;s original open world adventure into the modern generation with a connected galaxy, evolving narrative and the entirety of the Milky Way re-created at its full galactic proportions.",
    "developer": 120,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/359320/header.jpg?t=1573730884"
  }, {
    "id": 138,
    "title": "GreedFall",
    "genres": [1, 5],
    "publisher": 5,
    "description": "Engage in a core roleplaying experience, and forge the destiny of a new world seeping with magic, and filled with riches, lost secrets, and fantastic creatures. With diplomacy, deception and force, become part of a living, evolving world - influence its course and shape your story.",
    "developer": 121,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/606880/header.jpg?t=1575302145"
  }, {
    "id": 139,
    "title": "Insurgency: Sandstorm",
    "genres": [1, 7],
    "publisher": 5,
    "description": "Insurgency: Sandstorm is a team-based, tactical FPS based on lethal close quarters combat and objective-oriented multiplayer gameplay. Experience the intensity of modern combat where skill is rewarded, and teamwork wins the fight.",
    "developer": 122,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/581320/header.jpg?t=1582737024"
  }, {
    "id": 140,
    "title": "Fear The Wolves",
    "genres": [1, 7, 2, 4],
    "publisher": 5,
    "description": "Fear the Wolves is a competitive Battle Royale FPS by Vostok Games. Escape Chernobyl pursued by mutants, radiation, horrific anomalies, the weather, and other players.",
    "developer": 123,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/819500/header.jpg?t=1565103569"
  }, {
    "id": 141,
    "title": "DiRT Rally 2.0",
    "genres": [14, 8, 15],
    "publisher": 92,
    "description": "DiRT Rally 2.0 dares you to carve your way through a selection of iconic rally locations from across the globe, in the most powerful off-road vehicles ever made, knowing that the smallest mistake could end your stage.",
    "developer": 109,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/690790/header.jpg?t=1583410509"
  }, {
    "id": 142,
    "title": "Imperator: Rome",
    "genres": [9, 8, 6],
    "publisher": 13,
    "description": "Imperator: Rome is the newest grand strategy title from Paradox Development Studio. Set in the tumultuous centuries from Alexander&#x2019;s Successor Empires in the East to the foundation of the Roman Empire.",
    "developer": 74,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/859580/header.jpg?t=1580115328"
  }, {
    "id": 143,
    "title": "Gravel",
    "genres": [14, 15],
    "publisher": 102,
    "description": "Gravel is the ultimate off-road experience. The most extreme racing game that will let you try out amazing stunts in the wildest places on the planet!",
    "developer": 124,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/558260/header.jpg?t=1576505941"
  }, {
    "id": 144,
    "title": "Divinity: Original Sin 2",
    "genres": [2, 5, 6],
    "publisher": 103,
    "description": "The eagerly anticipated sequel to the award-winning RPG. Gather your party. Master deep, tactical combat. Join up to 3 other players - but know that only one of you will have the chance to become a God.",
    "developer": 125,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/435150/header.jpg?t=1581362845"
  }, {
    "id": 145,
    "title": "Infliction",
    "genres": [2, 3],
    "publisher": 104,
    "description": "Infliction is an interactive nightmare, a journey into the dark secrets of a fractured home. Wander through the heartbreaking remnants of a once-happy family, piecing together clues and trying to atone for past sins. All the while a malevolent force dogs your footsteps, seeking violent retribution.",
    "developer": 126,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/692100/header.jpg?t=1577450554"
  }, {
    "id": 146,
    "title": "GTFO",
    "genres": [1, 7, 4],
    "publisher": 105,
    "description": "GTFO is a hardcore 4 player cooperative first-person shooter, with a focus on team play and atmosphere. It features edge-of-your-seat suspense, team-based puzzle-solving and high-intensity combat.",
    "developer": 127,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/493520/header.jpg?t=1576225411"
  }, {
    "id": 147,
    "title": "Football Manager Touch 2018",
    "genres": [8, 15],
    "publisher": 31,
    "description": "Football Manager Touch 2018 is the speedier route to the digital dugout.",
    "developer": 96,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/624120/header.jpg?t=1571753962"
  }, {
    "id": 148,
    "title": "LEGO® Jurassic World",
    "genres": [1, 17, 2],
    "publisher": 8,
    "description": "Following the epic storylines of Jurassic Park, The Lost World: Jurassic Park and Jurassic Park III, as well as the highly anticipated Jurassic World, LEGO Jurassic World&#x2122; is the first videogame where players will be able to relive and experience all four Jurassic films.",
    "developer": 128,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/352400/header.jpg?t=1573511428"
  }, {
    "id": 149,
    "title": "GRIP: Combat Racing",
    "genres": [1, 3, 14],
    "publisher": 47,
    "description": "GRIP is a high octane, hardcore combat racer, packing ferocious speed and armed to the teeth with heavy weapons. Inspired by games like Rollcage, Wipeout, Motorstorm and Star Wars Podracer, it&apos;s like nothing you&apos;ve ever played before.",
    "developer": 129,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/396900/header.jpg?t=1577108632"
  }, {
    "id": 150,
    "title": "Generation Zero",
    "genres": [1, 2],
    "publisher": 106,
    "description": "Welcome to 1980&#x2019;s Sweden. The local population has disappeared, and hostile machines roam the streets. Explore the atmospheric open world as you attempt to survive, prepare to strike back, and start unraveling the mystery. Play alone or together with up to three friends, as you discover ways to defeat the invaders.",
    "developer": 130,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/704270/header.jpg?t=1579699938"
  }, {
    "id": 151,
    "title": "Green Hell",
    "genres": [3, 8],
    "publisher": 107,
    "description": "Green Hell is a sweltering struggle for survival in the Amazonian rainforest. Clinging to life, the player is set on a journey of durability as the effects of solitude wear heavy not only on the body but also the mind. How long can you survive against the dangers of the unknown?",
    "developer": 131,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/815370/header.jpg?t=1576840553"
  }, {
    "id": 152,
    "title": "Golf With Your Friends",
    "genres": [9, 3, 15],
    "publisher": 108,
    "description": "Why have friends if not to play Golf... With Your Friends! Nothing is out of bounds as you take on 9 courses filled with fast paced, exciting, simultaneous mini golf for up to 12 players! The Par-Tee doesn&apos;t stop there, players can expect additional courses and content throughout early access!",
    "developer": 132,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/431240/header.jpg?t=1581504759"
  }, {
    "id": 153,
    "title": "Besiege",
    "genres": [3, 8],
    "publisher": 109,
    "description": "Besiege is a physics based building game in which you construct medieval siege engines. Battle your way through a 54 level singleplayer campaign, unleash chaos with your friends in multiplayer, create your own worlds with the level editor, customize your game with mods through the workshop.",
    "developer": 133,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/346010/header.jpg?t=1582040457"
  }, {
    "id": 154,
    "title": "Forged Battalion",
    "genres": [3, 8, 6],
    "publisher": 110,
    "description": "Customize your unique faction in a new take on real-time strategy as you fight in a variety of skirmish, solo, and multiplayer battles.&#xA0; You are not only a commander, but also an engineer &#x2013; so you have ultimate control over your faction&#x2019;s units, factories, superweapons and economy.",
    "developer": 134,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/686260/header.jpg?t=1568822448"
  }, {
    "id": 155,
    "title": "Hacknet",
    "genres": [3, 8, 13],
    "publisher": 111,
    "description": "Hacknet is an immersive, terminal-based hacking simulator for PC. Dive down a rabbit hoIe as you follow the instructions of a recently deceased hacker, whose death may not have been the accident the media reports.",
    "developer": 135,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/365450/header.jpg?t=1564615985"
  }, {
    "id": 156,
    "title": "Gloomhaven",
    "genres": [2, 5, 6],
    "publisher": 112,
    "description": "Whether you are drawn to Gloomhaven by the call of adventure or by an avid desire for gold glimmering in the dark, your fate will surely be the same. Gloomhaven, the digital adaptation of the acclaimed board game, mixes Tactical-RPG and dungeon-crawling.",
    "developer": 136,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/780290/header.jpg?t=1582555197"
  }, {
    "id": 157,
    "title": "Idle Champions of the Forgotten Realms",
    "genres": [1, 2, 9, 10, 3, 6],
    "publisher": 113,
    "description": "Idle Champions of the Forgotten Realms is a Dungeons &amp; Dragons strategy video game that brings together D&amp;D characters from novels, adventures, and multiple live streams into a single grand adventure.",
    "developer": 137,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/627690/header.jpg?t=1582137640"
  }, {
    "id": 158,
    "title": "LEGO® Marvel™ Super Heroes",
    "genres": [1, 2, 17],
    "publisher": 8,
    "description": "LEGO&#xAE; Marvel&#x2122; Super Heroes features an original story crossing the entire Marvel Universe. Players take control of Iron Man, Spider-Man, the Hulk, Captain America, Wolverine and many more Marvel characters as they unite to stop Loki and a host of other Marvel villains from assembling a super-weapon capable of destroying the world.",
    "developer": 138,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/249130/header.jpg?t=1573497453"
  }, {
    "id": 159,
    "title": "LEGO® The Incredibles",
    "genres": [17, 1, 2],
    "publisher": 8,
    "description": "Experience the thrilling adventures of the Parr family as they conquer crime and family life through both Disney-Pixar films The Incredibles and Incredibles&#xA0;2, in a LEGO&#xAE; world full of fun and humor.",
    "developer": 139,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/818320/header.jpg?t=1573500526"
  }, {
    "id": 160,
    "title": "LEGO® Harry Potter: Years 1-4",
    "genres": [1, 17],
    "publisher": 8,
    "description": "Build the adventure from Privet Drive to the Triwizard Tournament and experience the magic of the first four Harry Potter stories &#x2013; LEGO style! Explore Hogwarts&#x2122; School of Witchcraft and Wizardry, learn spells, brew potions and relive the adventures like never before with tongue-in-cheek humor and creative customization that is unique to...",
    "developer": 139,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/21130/header.jpg?t=1573262302"
  }, {
    "id": 161,
    "title": "Homefront®: The Revolution",
    "genres": [1, 2, 7],
    "publisher": 114,
    "description": "Homefront&#xAE;: The Revolution is an open-world first person shooter where you must lead the Resistance movement in guerrilla warfare against a superior military force.",
    "developer": 140,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/223100/header.jpg?t=1562640869"
  }, {
    "id": 162,
    "title": "F1™ 2017",
    "genres": [8, 14],
    "publisher": 92,
    "description": "MAKE HISTORY - Win the 2017 World Championship, break every record in the fastest ever F1&#x2122; cars, and race some of the most iconic F1 cars of the last 30 years.",
    "developer": 109,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/515220/header.jpg?t=1573468396"
  }, {
    "id": 163,
    "title": "Grim Dawn",
    "genres": [5, 1, 2, 3],
    "publisher": 115,
    "description": "Enter an apocalyptic fantasy world where humanity is on the brink of extinction, iron is valued above gold and trust is hard earned. This ARPG features complex character development, hundreds of unique items, crafting and quests with choice &amp; consequence.",
    "developer": 141,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/219990/header.jpg?t=1582551836"
  }, {
    "id": 164,
    "title": "Factorio",
    "genres": [1],
    "publisher": 116,
    "description": "Factorio is a game about building and creating automated factories to produce items of increasing complexity, within an infinite 2D world. Use your imagination to design your factory, combine simple elements into ingenious structures, and finally protect it from the creatures who don&apos;t really like you.",
    "developer": 142,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/427520/header.jpg?t=1574715904"
  }, {
    "id": 165,
    "title": "Last Tide",
    "genres": [1, 3, 4],
    "publisher": 95,
    "description": "ONLY BUY if you want to support us during an active development process. Survive shark-infested waters. Experience underwater freedom of movement. Compete in heart-pounding combat within an immersive aquatic environment.",
    "developer": 112,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/858590/header.jpg?t=1581645475"
  }, {
    "id": 166,
    "title": "LEGO® Batman: The Videogame",
    "genres": [1, 2, 17],
    "publisher": 8,
    "description": "When all the villains in Arkham Asylum team up and break loose, only the dynamic duo is bold enough to take them on to save Gotham City. The fun of LEGO, the drama of Batman and the uniqueness of the combination makes for a comical and exciting adventure in LEGO Batman: The Videogame.",
    "developer": 138,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/21000/header.jpg?t=1573509038"
  }, {
    "id": 167,
    "title": "Fimbul",
    "genres": [1, 2, 3],
    "publisher": 117,
    "description": "Fimbul is a single-player comic-book, action adventure set in the final winter before Ragnar&#xF6;k, The Fimbul Winter. You play as an old berserk, travelling to J&#xF6;tunheim to fulfill his destiny, battling Trolls and Jotuns to reclaim an ancient artifact that might, just might save Midgard.",
    "developer": 143,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/771690/header.jpg?t=1551445815"
  }, {
    "id": 168,
    "title": "LEGO® Batman 2 DC Super Heroes™",
    "genres": [1, 17, 2],
    "publisher": 8,
    "description": "Legends Unite! The Dynamic Duo of Batman and Robin join other famous super heroes from the DC Universe including Superman, Wonder Woman and Green Lantern to save Gotham City from destruction at the hands of the notorious villains Lex Luthor and the Joker.",
    "developer": 139,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/213330/header.jpg?t=1573510008"
  }, {
    "id": 169,
    "title": "Miracle snack shop",
    "genres": [9, 3, 8],
    "publisher": 118,
    "description": "Let &apos;s manage a snack shop and suceed a date.",
    "developer": 144,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/995460/header.jpg?t=1570178193"
  }, {
    "id": 170,
    "title": "Nioh: Complete Edition",
    "genres": [1, 5],
    "publisher": 119,
    "description": "Ready to die? Experience the newest brutal action game from Team NINJA and Koei Tecmo Games. In the age of samurai, a lone traveler lands on the shores of Japan. He must fight his way through the vicious warriors and supernatural Yokai that infest the land in order to find that which he seeks.",
    "developer": 145,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/485510/header.jpg?t=1570687109"
  }, {
    "id": 171,
    "title": "LEGO® Marvel Super Heroes 2",
    "genres": [1, 2, 17],
    "publisher": 120,
    "description": "It&apos;s about TIME! Join your favorite Super Heroes and Super Villains from different eras and realities as they go head-to-head with the time-traveling Kang the Conqueror in the all-new, original adventure, LEGO&#xAE; Marvel Super Heroes 2!",
    "developer": 139,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/647830/header.jpg?t=1573498074"
  }, {
    "id": 172,
    "title": "HITMAN™2",
    "genres": [1],
    "publisher": 121,
    "description": "Travel the globe and track your targets across exotic sandbox locations in HITMAN&#x2122; 2. From sun-drenched streets to dark and dangerous rainforests, nowhere is safe from the world&#x2019;s most creative assassin, Agent 47 in the ultimate spy thriller story.",
    "developer": 146,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/863550/header.jpg?t=1579001301"
  }, {
    "id": 173,
    "title": "MotoGP™19",
    "genres": [14, 15],
    "publisher": 102,
    "description": "Race with official 2019 Championship riders! Have fun with the new multiplayer experience and become Race Director. Challenge the new AI, take a ride through the history of the MotoGP&#x2122; and unleash your creativity with the graphic editors.",
    "developer": 124,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/984780/header.jpg?t=1574345282"
  }, {
    "id": 174,
    "title": "Insurgency",
    "genres": [1, 3, 6],
    "publisher": 122,
    "description": "Take to the streets for intense close quarters combat, where a team&apos;s survival depends upon securing crucial strongholds and destroying enemy supply in this multiplayer and cooperative Source Engine based experience.",
    "developer": 122,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/222880/header.jpg?t=1568419207"
  }, {
    "id": 175,
    "title": "Mount & Blade",
    "genres": [3, 5],
    "publisher": 123,
    "description": "Calradia is a land at war, offering great riches and even greater dangers to adventurers and mercenaries that flock to shed their blood on its soil. With courage and a strong sword, an unknown stranger can make a name as a warrior. Free-form sand-box gameplay.",
    "developer": 147,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/22100/header.jpg?t=1568738425"
  }, {
    "id": 176,
    "title": "Kerbal Space Program",
    "genres": [3, 8],
    "publisher": 124,
    "description": "In Kerbal Space Program, take charge of the space program for the alien race known as the Kerbals. You have access to an array of parts to assemble fully-functional spacecraft that flies (or doesn&#x2019;t) based on realistic aerodynamic and orbital physics.",
    "developer": 148,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/220200/header.jpg?t=1571698097"
  }, {
    "id": 177,
    "title": "LEGO® DC Super-Villains",
    "genres": [1, 2, 17],
    "publisher": 8,
    "description": "It&apos;s good to be bad&#x2026; Embark on an all-new&#xA0;DC/LEGO&#xAE; adventure by becoming the best villain the universe has seen. Players will create and play as an all-new super-villain throughout the game, unleashing mischievous antics and wreaking havoc in an action-packed story.",
    "developer": 139,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/829110/header.jpg?t=1578506825"
  }, {
    "id": 178,
    "title": "Lonely Mountains: Downhill",
    "genres": [1, 3, 14, 8, 15],
    "publisher": 125,
    "description": "Just you and your bike - take it on a thrilling ride down an unspoiled mountain landscape. Make your way through thick forests, narrow trails and wild rivers. Race, jump, slide and try not to crash - all the way from the peak to the valley!",
    "developer": 149,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/711540/header.jpg?t=1582816933"
  }, {
    "id": 179,
    "title": "Nex Machina",
    "genres": [1, 3],
    "publisher": 126,
    "description": "Nex Machina is an intense arcade style twin-stick shooter from Housemarque. Taking hints from both Robotron and Smash TV, Nex Machina focuses on pure action, voxel destruction and competition in the distant, cablepunk themed future.",
    "developer": 150,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/404540/header.jpg?t=1572897820"
  }, {
    "id": 180,
    "title": "Myst® Masterpiece Edition",
    "genres": [2, 9, 13],
    "publisher": 127,
    "description": "Enter a world where nothing is as it seems... and adventure knows no bounds!",
    "developer": 151,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/63660/header.jpg?t=1540235431"
  }, {
    "id": 181,
    "title": "Myst V: End of Ages",
    "genres": [2, 9, 13],
    "publisher": 127,
    "description": "The Grand Finale of the greatest adventure! Decide the fate of a civilization in this triumphant final chapter to the Myst saga. Embark on an epic journey into the heart of a shattered empire as the only explorer who can still save it&#x2014; or destroy it with the wrong choices.",
    "developer": 151,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/208110/header.jpg?t=1539644659"
  }, {
    "id": 182,
    "title": "Car Mechanic Simulator 2018",
    "genres": [14, 8],
    "publisher": 128,
    "description": "Build and expand your repair service empire in this incredibly detailed and highly realistic simulation game, where attention to car detail is astonishing. Find classic, unique cars in the new Barn Find module and Junkyard module. You can even add your self-made car in the Car Editor.",
    "developer": 152,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/645630/header.jpg?t=1581942886"
  }, {
    "id": 183,
    "title": "GUILTY GEAR Xrd -REVELATOR-",
    "genres": [1],
    "publisher": 57,
    "description": "Astonishing 3D cell animations and overwhelming content volume, the next-generation fighting game &quot;GUILTY GEAR Xrd -REVELATOR-&quot; is now out on Steam! Total cast of 23 unique characters, and tons of game modes, get ready to ROCK!",
    "developer": 69,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/520440/header.jpg?t=1573764687"
  }, {
    "id": 184,
    "title": "LEGO® MARVEL's Avengers",
    "genres": [1, 2, 17],
    "publisher": 8,
    "description": "Avengers Assemble! The best-selling LEGO&#xAE; MARVEL videogame franchise returns with a new action-packed, Super Hero adventure.",
    "developer": 138,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/405310/header.jpg?t=1573498458"
  }, {
    "id": 185,
    "title": "Injustice™ 2",
    "genres": [1],
    "publisher": 8,
    "description": "Build and power up the ultimate version of your favourite DC legends in INJUSTICE 2. This is your Legend. Your Journey. Your Injustice.",
    "developer": 153,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/627270/header.jpg?t=1573860511"
  }, {
    "id": 186,
    "title": "Narcosis",
    "genres": [2, 3],
    "publisher": 129,
    "description": "Survival, horror at the sunless depths of the Pacific Ocean: Stranded on the seafloor with low light and few tools, an industrial diver takes desperate steps to surface before his oxygen &#x2014; and sanity &#x2014; give out.",
    "developer": 154,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/366870/header.jpg?t=1531522061"
  }, {
    "id": 187,
    "title": "INSOMNIA: The Ark",
    "genres": [1, 5, 3],
    "publisher": 130,
    "description": "INSOMNIA is a dieselpunk sci-fi RPG about the slowly degrading remnants of human society attempting to survive on an abandoned space metropolis. Develop your character, explore lovingly handcrafted locations, interact with peculiar NPCs and factions and try to stay alive in this brutal world.",
    "developer": 155,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/783170/header.jpg?t=1576769728"
  }, {
    "id": 188,
    "title": "Next Day: Survival",
    "genres": [1, 3, 5, 4],
    "publisher": 131,
    "description": "Next Day is a multi-player SURVIVAL game with elements of RPG, in an imaginary country in Eastern Europe. Carry out an array of tasks, learn skills, and develop your character. Have shootouts with opponents and earn a reputation.",
    "developer": 156,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/519190/header.jpg?t=1527259457"
  }, {
    "id": 189,
    "title": "MUSYNX",
    "genres": [3, 8],
    "publisher": 132,
    "description": "Indie&#xA0;rhythm&#xA0;game&#xA0;MUSYNX&#xA0;now&#xA0;on&#xA0;STEAM! Real&#xA0;&quot;KEY&quot;&#xA0;Sound&#xA0;System, Classic&#xA0;Gameplay, Unique&#xA0;Visual&#xA0;Themes&#xA0;and&#xA0;Constant Music&#xA0;Updates! MUSYNX&#xA0;is waiting&#xA0;for&#xA0;you!",
    "developer": 157,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/952040/header.jpg?t=1579663087"
  }, {
    "id": 190,
    "title": "Moonlighter",
    "genres": [1, 2, 3],
    "publisher": 133,
    "description": "Moonlighter is an Action RPG with rogue-lite elements that demonstrates two sides of the coin &#x2013; revealing everyday routines of Will, an adventurous shopkeeper that secretly dreams of becoming a hero.",
    "developer": 158,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/606150/header.jpg?t=1583743386"
  }, {
    "id": 191,
    "title": "Kenshi",
    "genres": [5, 8, 6, 1, 3],
    "publisher": 134,
    "description": "A free-roaming squad based RPG. Focusing on open-ended sandbox gameplay features rather than a linear story. Be a trader, a thief, a rebel, a warlord, an adventurer, a farmer, a slave, or just food for the cannibals. Research new equipment and craft new gear.",
    "developer": 159,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/233860/header.jpg?t=1583332832"
  }, {
    "id": 192,
    "title": "I’m not a Monster",
    "genres": [3, 4, 5, 6],
    "publisher": 135,
    "description": "Retro sci-fi tactical turn-based strategy with an exciting storyline. The Albatross space liner is overrun by lizard-like monsters that can infect humans and turn them into their own kind. Save the passengers and defeat the hostile creatures.",
    "developer": 160,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/826600/header.jpg?t=1583773609"
  }, {
    "id": 193,
    "title": "No Man's Sky",
    "genres": [2, 1],
    "publisher": 136,
    "description": "No Man&apos;s Sky is a game about exploration and survival in an infinite procedurally generated universe.",
    "developer": 161,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/275850/header.jpg?t=1578399134"
  }, {
    "id": 194,
    "title": "Mosaic",
    "genres": [2, 3],
    "publisher": 137,
    "description": "Enter a world that&#x2019;s utterly surreal and eerily familiar. Escape the mundanity of your existence in an experience that will stay with you. Mosaic is a narrative-driven modern adventure game with a story that lasts about 2-3 hours.",
    "developer": 162,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/349270/header.jpg?t=1579647315"
  }, {
    "id": 195,
    "title": "Disco Elysium",
    "genres": [2, 3, 5],
    "publisher": 138,
    "description": "Disco Elysium is a multi award-winning role playing game. You&#x2019;re a detective with a unique skill system at your disposal and a whole city block to carve your path across. Interrogate unforgettable characters, crack murders or take bribes. Become a hero or an absolute disaster of a human being.",
    "developer": 163,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/632470/header.jpg?t=1583156787"
  }, {
    "id": 196,
    "title": "Metro: Last Light Redux",
    "genres": [1, 7],
    "publisher": 114,
    "description": "It is the year 2034. Beneath the ruins of post-apocalyptic Moscow, in the tunnels of the Metro, the remnants of mankind are besieged by deadly threats from outside &#x2013; and within. Mutants stalk the catacombs beneath the desolate surface, and hunt amidst the poisoned skies above.",
    "developer": 164,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/287390/header.jpg?t=1569508864"
  }, {
    "id": 197,
    "title": "PixARK",
    "genres": [1, 2, 9, 3, 4, 5, 6],
    "publisher": 139,
    "description": "Enter a world of mystery, danger, ancient dinosaurs, mythical beasts, and cubes! Work by yourself or with a tribe of others to gather materials, craft useful items, tame wild creatures, and build huge bases to survive in PixARK!",
    "developer": 165,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/593600/header.jpg?t=1581625039"
  }, {
    "id": 198,
    "title": "Out of the Park Baseball 19",
    "genres": [15, 3, 8, 6],
    "publisher": 140,
    "description": "Out of the Park Baseball 19 - officially licensed by MLB and the MLBPA - is the 2018 entry in the world&apos;s best-rated sports gaming franchise! Guide your favorite MLB team to glory, play any historical season or compete online in Perfect Team. A baseball fan&apos;s dream come true!",
    "developer": 166,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/619290/header.jpg?t=1583864183"
  }, {
    "id": 199,
    "title": "Monster Energy Supercross - The Official Videogame 3",
    "genres": [14, 8, 15],
    "publisher": 102,
    "description": "New ground and in-air physics, new rider models and new animations will create a more immersive experience and enable you to enjoy the Supercross world at its best!",
    "developer": 124,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/1089830/header.jpg?t=1583222927"
  }, {
    "id": 200,
    "title": "NASCAR Heat 3",
    "genres": [15, 14],
    "publisher": 141,
    "description": "There are more ways to race than ever before in NASCAR Heat 3! Jump into the enhanced Career Mode, build your own race team and compete in the Xtreme Dirt Tour. Prove that you are the best in the world in the new Online Tournaments feature. Plus, all your favorite modes are back and better than ever.",
    "developer": 167,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/905450/header.jpg?t=1581018835"
  }, {
    "id": 201,
    "title": "MXGP 2019 - The Official Motocross Videogame",
    "genres": [14, 8, 15],
    "publisher": 102,
    "description": "Experience the excitement of the 2019 season for the first time in the series! Race in official MX teams, share your gaming experience with the community thanks to the Track Editor and the Waypoint mode and practice in the Playground to learn to ride like a real pro!",
    "developer": 124,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/1018160/header.jpg?t=1566890048"
  }, {
    "id": 202,
    "title": "Mortal Kombat 11",
    "genres": [1],
    "publisher": 121,
    "description": "Mortal Kombat is back and better than ever in the next evolution of the iconic franchise.",
    "developer": 153,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/976310/header.jpg?t=1583685683"
  }, {
    "id": 203,
    "title": "Raft",
    "genres": [2],
    "publisher": 142,
    "description": "Raft throws you and your friends into an epic oceanic adventure! Alone or together, players battle to survive a perilous voyage across a vast sea! Gather debris, scavenge reefs and build your own floating home, but be wary of the man-eating sharks!",
    "developer": 168,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/648800/header.jpg?t=1575637395"
  }, {
    "id": 204,
    "title": "Neverwinter",
    "genres": [1, 2, 10, 4, 5],
    "publisher": 143,
    "description": "Neverwinter is a free, action MMORPG based on the acclaimed Dungeons &amp; Dragons fantasy roleplaying game. Epic stories, action combat and classic roleplaying await those heroes courageous enough to enter the fantastic world of Neverwinter!",
    "developer": 169,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/109600/header.jpg?t=1579643780"
  }, {
    "id": 205,
    "title": "Paladins®",
    "genres": [1, 10],
    "publisher": 144,
    "description": "Join 25+ million players in Paladins, the free-to-play fantasy team-based shooter sensation. Wield guns and magic as a legendary Champion of the Realm, customizing your core set of abilities to play exactly how you want to play.",
    "developer": 170,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/444090/header.jpg?t=1583351853"
  }, {
    "id": 206,
    "title": "Owlboy",
    "genres": [1, 2, 3],
    "publisher": 145,
    "description": "Owlboy is a story-driven platform adventure game, where you can fly and explore a brand new world in the clouds! Pick up your friends, and bring them with you as you explore the open skies, in one of the most detailed adventures of this era.",
    "developer": 171,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/115800/header.jpg?t=1579965862"
  }, {
    "id": 207,
    "title": "Middle-earth™: Shadow of Mordor™",
    "genres": [1, 5],
    "publisher": 8,
    "description": "Fight through Mordor and uncover the truth of the spirit that compels you, discover the origins of the Rings of Power, build your legend and ultimately confront the evil of Sauron in this new chronicle of Middle-earth.",
    "developer": 172,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/241930/header.jpg?t=1545176745"
  }, {
    "id": 208,
    "title": "Ratropolis",
    "genres": [9, 3, 8, 6],
    "publisher": 146,
    "description": "A fusion of roguelite, tower defense, city-building, and deck-building! We created a new kind of real time strategy game filled with addictive and fast-paced gameplay. Create your deck, defend your city, and build the largest Ratropolis in history!",
    "developer": 173,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/1108370/header.jpg?t=1579795753"
  }, {
    "id": 209,
    "title": "Realm Grinder",
    "genres": [9, 10, 5, 6],
    "publisher": 147,
    "description": "Grow your realm, build alliances, and explore one of the deepest idle RPGs ever!",
    "developer": 174,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/610080/header.jpg?t=1572786426"
  }, {
    "id": 210,
    "title": "Jurassic World Evolution™",
    "genres": [8, 6],
    "publisher": 148,
    "description": "Place yourself at the heart of the Jurassic franchise and build your own Jurassic World. Bioengineer dinosaurs that think, feel and react intelligently to the world around them and face threats posed by espionage, breakouts and devastating tropical storms in an uncertain world where life always finds a way.",
    "developer": 120,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/648350/header.jpg?t=1575974437"
  }, {
    "id": 211,
    "title": "Kingdom Come: Deliverance",
    "genres": [2, 1, 5],
    "publisher": 149,
    "description": "Kingdom Come: Deliverance is a story-driven open-world RPG that immerses you in an epic adventure in the Holy Roman Empire. Avenge your parents&apos; death as you battle invading forces, go on game-changing quests, and make influential choices.",
    "developer": 175,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/379430/header.jpg?t=1582451454"
  }, {
    "id": 212,
    "title": "Mortal Kombat X",
    "genres": [1, 16],
    "publisher": 8,
    "description": "Experience the Next Generation of the #1 Fighting Franchise. Mortal Kombat X combines unparalleled, cinematic presentation with all new gameplay.",
    "developer": 153,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/307780/header.jpg?t=1571846989"
  }, {
    "id": 213,
    "title": "Plane Mechanic Simulator",
    "genres": [9, 3, 8],
    "publisher": 150,
    "description": "England, 1940. The Luftwaffe is preparing for the invasion of Britain and the RAF need every man to stop it. They need you. Join the ground crews as they struggle to keep the aircraft flying. Repair engine, patch bullet holes, rearm machine guns and more.",
    "developer": 176,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/803980/header.jpg?t=1581523840"
  }, {
    "id": 214,
    "title": "Realm Royale",
    "genres": [1, 10, 7, 4],
    "publisher": 151,
    "description": "Be the last Champion standing in Realm Royale! Loot deadly weapons and powerful abilities to create your own Champion. Explore a fantasy world from horseback while outrunning the deadly fog. Can you survive the first 100-person fantasy Battle Royale?",
    "developer": 177,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/813820/header.jpg?t=1582644377"
  }, {
    "id": 215,
    "title": "Parkitect",
    "genres": [3, 8],
    "publisher": 152,
    "description": "Parkitect is a business simulation game that charges you with the construction and management of theme parks! Bringing back the best of classic theme park games with many new features and content on top.",
    "developer": 178,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/453090/header.jpg?t=1575990446"
  }, {
    "id": 216,
    "title": "Deceit",
    "genres": [1, 10, 3],
    "publisher": 153,
    "description": "Deceit tests your instincts at trust and deception in an action-filled, multiplayer first-person shooter. You wake up in unknown surroundings to the sound of the Game Master&#x2019;s unfamiliar voice, surrounded by five others. A third of your group have been infected with a virus, but who will escape?",
    "developer": 179,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/466240/header.jpg?t=1583283139"
  }, {
    "id": 217,
    "title": "Pyre",
    "genres": [1, 3, 5],
    "publisher": 154,
    "description": "Pyre is a party-based RPG from the creators of Bastion and Transistor. Lead your band of exiles to freedom through a series of mystical competitions in the Campaign, or challenge a friend to a fast-paced ritual showdown in the head-to-head Versus Mode.",
    "developer": 180,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/462770/header.jpg?t=1578006248"
  }, {
    "id": 218,
    "title": "Kingdom Two Crowns",
    "genres": [2, 3, 8, 6],
    "publisher": 155,
    "description": "In Kingdom Two Crowns, players must work in the brand-new solo or co-op campaign mode to build their kingdom and secure it from the threat of the Greed. Experience new technology, units, enemies, mounts, and secrets in the next evolution of the award-winning micro strategy franchise!",
    "developer": 181,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/701160/header.jpg?t=1576244479"
  }, {
    "id": 219,
    "title": "Myst IV: Revelation",
    "genres": [2, 9, 13],
    "publisher": 127,
    "description": "In Myst IV: Revelation, the next chapter in the greatest adventure saga of all time, you&apos;ll travel through environments pulsing with life to unearth a treacherous scheme involving two of Myst&apos;s most sinister villains.",
    "developer": 4,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/925940/header.jpg?t=1539644459"
  }, {
    "id": 220,
    "title": "Myst III: Exile",
    "genres": [2, 9, 13],
    "publisher": 127,
    "description": "The story of Myst continues... Return to this strange and wondrous universe, where books become portals into worlds, and where the lessons of the past may yet hold meaning for today...",
    "developer": 182,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/925930/header.jpg?t=1540235785"
  }, {
    "id": 221,
    "title": "Northgard",
    "genres": [3, 8, 6],
    "publisher": 156,
    "description": "Northgard is a strategy game based on Norse mythology in which you control a clan of Vikings vying for the control of a mysterious newfound continent.",
    "developer": 76,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/466560/header.jpg?t=1580399880"
  }, {
    "id": 222,
    "title": "Minion Masters",
    "genres": [1, 10, 3, 4, 6],
    "publisher": 157,
    "description": "Dive into 1v1 battle - or bring a friend for 2v2 - in this dangerously addictive fast-paced hybrid of deckbuilder, MOBA, and tower-defense.",
    "developer": 183,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/489520/header_alt_assets_10.jpg?t=1583823171"
  }, {
    "id": 223,
    "title": "Pathfinder: Kingmaker® - Enhanced Edition",
    "genres": [5, 2],
    "publisher": 114,
    "description": "Pathfinder: Kingmaker is the first isometric party-based computer RPG set in the Pathfinder fantasy universe. Enjoy a classic RPG experience inspired by games like Baldur&apos;s Gate, Fallout 1 and 2 and Arcanum. Explore and conquer the Stolen Lands and make them your kingdom!",
    "developer": 184,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/640820/header.jpg?t=1576778697"
  }, {
    "id": 224,
    "title": "Left 4 Dead 2",
    "genres": [1, 7],
    "publisher": 14,
    "description": "Set in the zombie apocalypse, Left 4 Dead 2 (L4D2) is the highly anticipated sequel to the award-winning Left 4 Dead, the #1 co-op game of 2008. This co-operative action horror FPS takes you and your friends through the cities, swamps and cemeteries of the Deep South, from Savannah to New Orleans across five expansive campaigns.",
    "developer": 15,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/550/header.jpg?t=1571757222"
  }, {
    "id": 225,
    "title": "Distance",
    "genres": [1, 14, 3],
    "publisher": 158,
    "description": "Distance is an atmospheric racing platformer. Fusing futuristic arcade racing with parkour, survive a deadly, mysterious, neon-drenched city by jumping, rotating, and flying.",
    "developer": 185,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/233610/header.jpg?t=1567725507"
  }, {
    "id": 226,
    "title": "Mount & Blade: Warband",
    "genres": [1, 5],
    "publisher": 123,
    "description": "In a land torn asunder by incessant warfare, it is time to assemble your own band of hardened warriors and enter the fray. Lead your men into battle, expand your realm, and claim the ultimate prize: the throne of Calradia!",
    "developer": 147,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/48700/header.jpg?t=1568738359"
  }, {
    "id": 227,
    "title": "realMyst: Masterpiece Edition",
    "genres": [2, 9, 3, 13],
    "publisher": 127,
    "description": "realMyst: Masterpiece Edition is a beautifully updated version of realMYST for today&#x2019;s Mac and Windows computers - celebrating the 20th anniversary of Myst! The models and textures have been reconstructed to provide an amazing graphical experience.",
    "developer": 151,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/244430/header.jpg?t=1568218059"
  }, {
    "id": 228,
    "title": "Pillars of Eternity",
    "genres": [5],
    "publisher": 13,
    "description": "Prepare to be enchanted by a world where the choices you make and the paths you choose shape your destiny. Obsidian Entertainment, the developer of Fallout: New Vegas&#x2122; and South Park: The Stick of Truth&#x2122;, together with Paradox Interactive is proud to present Pillars of Eternity.",
    "developer": 186,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/291650/header.jpg?t=1561476579"
  }, {
    "id": 229,
    "title": "Monster Energy Supercross - The Official Videogame 2",
    "genres": [14, 8, 15],
    "publisher": 102,
    "description": "All the thrills of the Monster Energy AMA Supercross 2018 Championship! Live the life of a pro, put yourself to the test in the Compound, tackle challenges, manage your events and attract new sponsors to earn fame and unlock new content!",
    "developer": 124,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/882020/header.jpg?t=1574345265"
  }, {
    "id": 230,
    "title": "My Memory of Us",
    "genres": [1, 2, 9, 3],
    "publisher": 159,
    "description": "My Memory of Us is a moving fairy tale about friendship and hope in the darkest moments of our times. Enter hand-crafted, gorgeously animated 2D world full of adventure, exploration, stealth and puzzles. Meet the kids brought up in different worlds and help them survive during times of occupation.",
    "developer": 187,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/651500/header.jpg?t=1568989373"
  }, {
    "id": 231,
    "title": "FIA European Truck Racing Championship",
    "genres": [14, 8, 15],
    "publisher": 160,
    "description": "The only official simulation that features all the unique characteristics of the ETRC and offers all racing fans a completely new driving experience: race a giant 5-tonne, 1,000-horsepower truck against 12 competitors while respecting the race rules to avoid penalties.",
    "developer": 188,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/940580/header.jpg?t=1568966469"
  }, {
    "id": 232,
    "title": "Ravenfield",
    "genres": [1, 3],
    "publisher": 161,
    "description": "Fight upon the Ravenfield together with your Blue allies! Take down those pesky Reds using helicopters, tanks, guns, and active ragdoll physics!",
    "developer": 189,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/636480/header.jpg?t=1561416237"
  }, {
    "id": 233,
    "title": "RAD",
    "genres": [1],
    "publisher": 66,
    "description": "RAD is a 3D action rogue-like set in a post-post-apocalyptic world, where humanity has faced armageddon not once, but twice.",
    "developer": 190,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/722560/header.jpg?t=1567546830"
  }, {
    "id": 234,
    "title": "Ice Age: Scrat's Nutty Adventure",
    "genres": [2, 17],
    "publisher": 162,
    "description": "Scrat&#x2019;s on a brand new quest! Sabre-tooth squirrel Scrat is on a nutty quest! His prized possession is locked inside an ancient Scratazon Temple &#x2013; and the only way to get it back is to retrieve four legendary Crystal Nuts, scattered across the land.",
    "developer": 191,
    "price": 9.99,
    "discountprice": 7.80,
    "coverImage": "https://steamcdn-a.akamaihd.net/steam/apps/751060/header.jpg?t=1579695097"
  }];

  return (
    <div>
      <div className="section trending">
        <Container>
          <Row md="4" className="trending-box">
            {products.map((p) => (
              <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv">
              <div className="item">
                <div className="thumb">
                  <a href="product-details.html"><img src={p.coverImage} style={{height : "300px"}} alt=""/></a>
                  <span className="price"><em>{p.price}$</em>{p.discountprice}$</span>
                </div>
                <div className="down-content">
                  <span className="category"></span>
                  <h4>{p.title}</h4>
                  <button className="edition-v" href="#"><i onClick={() => addItem(p)} className="fa fa-shopping-bag"></i></button>
                </div>
              </div>
            </div>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}



function Shopping() {
  return (
    <CartProvider>
      <Navhome />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Page />
      
    </CartProvider>
  );
}

export default Shopping;