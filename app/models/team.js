import { Record } from 'immutable'
const Team = new Record(
  {
    name: null,
    job: null,
    description: null,
    email: null,
    image: null
  },
  'team'
)
const TeamList = [
  {
    name: 'Laurent Beccaria',
    job: 'Président',
    description:
      'Ces dernières années, voir vingt couvertures sur le même sujet, tourner les pages sans que rien me m’accroche, cela me rend triste. Les journaux ont perdu leur magie. Je suis convaincu que nous ne sommes pas voués à être mal informés.',
    email: 'l.beccaria@rollinpublications.fr',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/laurent.jpg'
  },
  {
    name: 'Patrick de Saint-Exupéry',
    job: 'Co-directeur de la rédaction',
    description:
      "Faire sentir aux lecteurs le goût du lait, les odeurs, la boue, partager ce que j’avais vu et appris. Il est aujourd'hui possible de donner des clés de compréhension au lecteur pour qu'il trouve sa place dans le monde et qu'il en devienne acteur.",
    email: 'p.desaintexupery@rollinpublications.fr',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/patrick.png'
  },
  {
    name: 'Constance Poniatowski',
    job: 'Co-directrice de la rédaction',
    description:
      'Ebdo sera un journal inspirant pour soi, pour les petites choses du quotidien, qui sont trop souvent négligées dans ce qu’on appelle la grande presse et qui sont si importantes dans nos vies.',
    email: 'c.poniatowski@ebdo-lejournal.com',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/constance.png'
  },
  {
    name: 'Quintin Leeds',
    job: 'Directeur artistique',
    description:
      'Il faut que tout soit immédiatement compréhensible. Ce journal sera aussi accessible à ceux qui ne lisent pas la presse d’habitude. Beaucoup de sujets peuvent être traités plus efficacement par une image.',
    email: 'q.leeds@rollinpublications.fr',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/quintin.png'
  },
  {
    name: 'Thierry Mandon',
    job: 'Directeur de la publication',
    description:
      'Nous vivons dans des îlots qui ne se parlent plus. C’est cette cassure que je veux combler. Ebdo répondra au principe d’éducation populaire pour recréer du lien. Une université sans diplôme, ouverte, qui met à la portée de tous les sujets essentiels.',
    email: 't.mandon@rollinpublications.fr',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/thierry.png'
  },
  {
    name: 'Nicolas Delesalle',
    job: 'Rédacteur en chef',
    description:
      'Les journalistes d’Ebdo seront les yeux, les oreilles, le nez des gens pour qui ils écrivent. Ils rapporteront ce qu’ils verront pour les aider à mieux comprendre ce qui se passe.',
    email: 'n.delesalle@ebdo-lejournal.com',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/nicolas.jpeg'
  },
  {
    name: 'Maxime Guedj',
    job: 'Directeur de la stratégie numérique',
    description:
      "L'alliance du papier, pour sa capacité à reconnecter au réel et à créer du lien social, et d'Internet, pour sa capacité de communication massive et instantanée, permettra le rassemblement d'une communauté de lecteurs forte, soudée et pleine d'énergie !",
    email: 'm.guedj@rollinpublications.fr',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/maxime.png'
  },
  {
    name: 'Anne-Sophie Jacques',
    job:
      'Rédactrice en chef adjointe, chargée de la relation avec les lecteurs',
    description:
      "Le projet d'Ebdo, c'est de retrouver le lien avec les lecteurs, de partir à leur rencontre partout en France, mais surtout d'échanger, de partager, de se nourrir les uns les autres, parce que sans nos lecteurs, nous ne sommes rien",
    email: 'as.jacques@ebdo-lejournal.com',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/annesophie.png'
  },
  {
    name: 'Isabelle Talès',
    job: "Chef d'édition",
    description:
      'Depuis quelque temps, je vois que le lecteur ne se plonge plus dans les journaux. La presse s’adresse aux gens d’une certaine manière, parce qu’elle a toujours fait comme ça. Mais elle ne pense pas assez aux lecteurs qui ont changé',
    email: 'i.tales@ebdo-lejournal.com',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/isalbelle.png'
  },
  {
    name: 'Marie-Pierre Subtil',
    job:
      'Rédactrice en chef de 6Mois et en charge du festival Les rendez-vous de juillet',
    description:
      'Aujourd’hui, on doit pratiquer le journalisme autrement. Tisser des liens étroits avec ceux qui nous lisent. Je suis frappée par tous les gens qui essaient de changer leur mode de vie. Nous sommes comme eux, nous voulons changer notre métier.',
    email: 'mp.subtil@6mois.fr',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/mp.png'
  },
  {
    name: 'Mathieu Palain',
    job: 'Journaliste',
    description:
      'Depuis que je suis journaliste, mes potes, se sont remis à lire. Ces mecs, il ne leur serait jamais venu à l’idée de mettre les pieds dans une librairie. Ils se disaient :  Ce n’est pas pour moi, c’est un truc d’intello. J’aimerais que cet hebdo leur parle.',
    email: 'm.palain@ebdo-lejournal.com',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/mathieup.png'
  },
  {
    name: 'Léna Mauger',
    job: 'Journaliste',
    description:
      'Il y avait deux wagons de passagers. Collés les uns aux autres, on a partagé nos repas, de l’eau, des bouts de vie... Chaque semaine, Ebdo vous fera prendre le train : vous allez apprendre, être étonnés, lire des histoires vraies, des bouts de vie.',
    email: 'l.mauger@ebdo-lejournal.com',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/lena.png'
  },
  {
    name: 'Tiphaine Honnet',
    job: 'Journaliste',
    description:
      'Toi lecteur, moi journaliste. Avec Ebdo, couchons sur le papier cette histoire d’amour inachevée et faisons naître un journal à échelle humaine.',
    email: 't.honnet@ebdo-lejournal.com',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/tiphaine.png'
  },
  {
    name: 'Thibaut Solano',
    job: 'Journaliste installé à Lyon',
    description:
      'Raconter ce qui se passe au bout du monde ou au pied de votre immeuble, dans les grandes villes ou à la campagne. Aider à comprendre sans donner de leçon à personne. C’est cela, l’esprit d’Ebdo.',
    email: 't.solano@ebdo-lejournal.com',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/thibaut.jpg'
  },
  {
    name: 'Seymourina Cruse',
    job: 'Journaliste',
    description:
      'Ebdo échappe à la définition, son lecteur n’est pas une cible, toujours un peu jeune et déjà un peu vieux quel que soit son âge, simple et complexe, lourd et léger, une vaste diversité. Ouvrir ce journal qui parle à tous nos mille morceaux.',
    email: 's.cruse@ebdo-lejournal.com',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/seymourina.jpg'
  },
  {
    name: 'Haydée Sabéran',
    job: 'Journaliste installée à Lille',
    description:
      "Alors tu déménages à Paris ? Pour quoi faire ? Lille m'a adoptée. C'est d'ici que je pars et c'est ici que je me retrouve. Ebdo a envie de multiplier les regards, et c'est pour ça que j'ai envie d'Ebdo.",
    email: 'h.saberan@ebdo-lejournal.com',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/haydee.png'
  },
  {
    name: 'Anne Jouan',
    job: 'Journaliste',
    description:
      "C'est excitant une naissance ! Surtout quand beaucoup pensent que les journaux print sont morts. Parce que je crois en la presse, parce que j'aime le journalisme et sentir le papier entre mes doigts, je suis heureuse de participer à Ebdo. Sans publicité ! Dessin © V.Cabut",
    email: 'a.jouan@ebdo-lejournal.com',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/anne.png'
  },
  {
    name: 'Alice Babin',
    job: 'Journaliste',
    description:
      "Écrire, comme on marche dans la rue, disait l'autre. C'est ça, comme on respire et comme on vit quoi. Un journalisme du journalier, de la vie, un journalisme de tout et de tous. Car tout a sa place. Tout mérite d'être raconté. Je pense que c'est ça, Ebdo.",
    email: 'a.babin@ebdo-lejournal.com',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/alice.png'
  },
  {
    name: 'Charlotte Chaffanjon',
    job: 'Journaliste',
    description:
      "Ebdo ? Un saut dans le vide. Des histoires vraies, des histoires folles, des histoires hallucinantes, des histoires qui font réfléchir, et puis d'autres qui font rêver, qui font peur, qui font pleurer, qui font voyager. Des histoires proches ou plus lointaines. Une aventure.",
    email: 'c.chaffanjon@ebdo-lejournal.com',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/charlottec.jpg'
  },
  {
    name: 'Mathieu Lehot',
    job: 'Journaliste',
    description:
      'Ebdo me rappelle ces bons mots de l’artiste Jean Dubuffet :  Le journal, quand on le barbouille d’encre, se plisse, c’est un papier peu résistant. Tant mieux, va pour les plissements ! Comme il boit de bon cœur ! C’est un papier avide buveur. Après quoi il fournit inlassablement . A la santé d’Ebdo !',
    email: 'm.lehot@ebdo-lejournal.com',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/mathieul.png'
  },
  {
    name: 'Estelle Maussion',
    job: 'Journaliste',
    description:
      'Face au flux d\'informations, aux réseaux sociaux et au "buzz", on se sent écrasé, noyé, désemparé. Pour résister et respirer, nous allons prendre de la hauteur, donner des repères, miser sur le sens. Bref, parler de l\'actualité autrement.',
    email: 'e.maussion@ebdo-lejournal.com',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/estelle.jpg'
  },
  {
    name: 'Emile Rabaté',
    job: 'Journaliste installé à Lorient',
    description:
      'Si Ebdo était une personne, ce serait cet ami qu’on aime retrouver autour d’une bière ou d’un café, pour le plaisir de bavarder, prendre et donner des nouvelles, dans l’assurance que ce moment passé ensemble ouvre en nous d’autres horizons. Un ami simple et généreux, pas pédant, qui sait aussi bien parler qu’écouter. On se retrouve en terrasse ?',
    email: 'e.rabate@ebdo-lejournal.com',
    image: ''
  },
  {
    name: 'Emmanuelle Morau',
    job: 'Journaliste',
    description:
      "L'audace, c'est ce que j'ai aimé dans le projet d'Ebdo. Elle nourrira notre curiosité et provoquera de belles rencontres, j'en suis convaincue.",
    email: 'e.morau@ebdo-lejournal.com',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/emmanuelle.png'
  },
  {
    name: 'Samuel Forey',
    job: 'Journaliste',
    description:
      "Le grand reportage, c'est aller, chercher, raconter avec la même passion les antipodes et le café du coin. En route pour de nouvelles et incroyables aventures !",
    email: 's.forey@ebdo-lejournal.com',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/samuel.png'
  },
  {
    name: 'Sylvain Venayre',
    job: 'Historien',
    description:
      'Les historiens sont des espèces de voyageurs. Avec eux, Ebdo partira sur les grands chemins du passé. Pour mieux voir, comprendre et sentir le présent.',
    email: 's.venayre@ebdo-lejournal.com',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/sylvain.png'
  },
  {
    name: 'Benoist Simmat',
    job: 'Journaliste, responsable des pages BD',
    description:
      "Surprise, sourire, rire, questionnements. Je connais le regard et les réactions de ceux qui découvrent une bande dessinée. Paradoxalement, ce mode narratif n'a jamais été aussi en vogue. Ebdo l'utilisera pour expliquer les thématiques d'actualités restant difficile à éclairer avec des mots. Nouveau journal, nouveaux modes de lecture … Photo © Yan Jumeau",
    email: 'b.simmat@ebdo-lejournal.com',
    image: ''
  },
  {
    name: 'Marion Vasseur',
    job: 'Chargée de communication digitale',
    description:
      "Lassée de lire les mêmes unes partout. En rejoignant Ebdo, j'adhère à l'envie partagée par l'équipe : un renouveau de l'information chaque semaine sur papier.",
    email: 'm.vasseur@ebdo-lejournal.com',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/marion.jpg'
  },
  {
    name: 'Nicolas Foucher',
    job: 'Rédacteur photo',
    description:
      "En naviguant sur Internet, j'ai l'impression que le journalisme semble ne se résumer qu'à une succession de \"copier-coller\". Ebdo, c'est la promesse d'un journalisme fondé non pas sur le réflexe, mais sur la réflexion. Avec vous.",
    email: 'n.foucher@ebdo-lejournal.com',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/nicolas.png'
  },
  {
    name: 'Léa Taillefert-Rolland',
    job: 'Rédactrice graphiste',
    description:
      "C'est une nouvelle aventure, une mission passionnante, celle de mettre en image les mots de nos équipes mais aussi les vôtres, nos lecteurs. Créer un journal qui vous ressemble et régaler vos yeux !",
    email: 'l.taillefert@ebdo-lejournal.com',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/lea.png'
  },
  {
    name: 'Sandra Fauché',
    job: 'Rédactrice graphiste',
    description:
      'Un journal papier à l’heure des réseaux numériques, j’ai voulu participer ! Ebdo racontera l’aventure de nos vies. Il sera accueillant, généreux, joyeux, vif, incisif parfois. Sa voix sera singulière comme celle de chacun d’entre nous.',
    email: 's.fauche@ebdo-lejournal.com',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/sandra.png'
  },
  {
    name: 'Clémentine Simonet',
    job: 'Rédactrice graphiste',
    description:
      "Le papier est un support formidable, qui permet de tout imaginer et d'aider à comprendre notre monde. La preuve : il a traversé toutes les époques. Continuons à en faire un élément essentiel de nos vies.",
    email: 'c.simonet@ebdo-lejournal.com',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/clementine.png'
  },
  {
    name: 'Safia Bouda',
    job: 'Secrétaire de rédaction',
    description:
      'Mon boulot, c’est qu’un lecteur, en découvrant un titre, une légende photo, ait envie de plonger dans l’article. Puis qu’il comprenne tout, qu’il ne décroche pas. Passionnant quand on choisit de s’adresser au plus grand nombre, et à ceux qui ne lisent plus la presse, ou qui ne la lisent pas encore…',
    email: 's.bouda@ebdo-lejournal.com',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/safia.png'
  },
  {
    name: 'Bertrand Courrège',
    job: 'Secrétaire de rédaction',
    description:
      'Distinguer l’essentiel de l’accessoire, éclairer et approfondir. Chaque semaine, Ebdo fera le tri et rendra intéressant ce qui est important.',
    email: 'b.courrege@ebdo-lejournal.com',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/bertrand.png'
  },
  {
    name: 'Margaux Velikonia',
    job: 'Secrétaire de rédaction',
    description:
      "Je vois Ebdo comme un journal que l'on picore, dévore, commente, emporte avec soi, du petit déj' à la nuit tombée. On aura envie de s'en saisir, de s'y plonger, quand il traînera sur la table basse du salon et nous fera réfléchir même une fois refermé !",
    email: 'm.velikonia@ebdo-lejournal.com',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/margaux.jpg'
  },
  {
    name: 'Damien Carême',
    job: 'Représentant des lecteurs',
    description:
      "En apportant l'ensemble des données sur les sujets au lecteur, sans pression d'annonceurs ou d'actionnaires-financiers, et dans un langage accessible à tous, Ebdo sera un véritable outil d'éducation populaire dans lequel les lecteurs se reconnaîtront. Je serai heureux de veiller à cela. Quelle formidable aventure !",
    email: 'd.careme@ebdo-lejournal.com',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/damien.png'
  },
  {
    name: 'Sharlie Minette',
    job: 'Organisatrice de la tournée',
    description:
      'Ebdo n’est pas qu’une aventure de presse, c’est un projet de société. À bord du minibus, nous partons à votre rencontre partout en France et en Belgique. Vos avis et vos envies enrichissent chaque jour ce que sera Ebdo : un journal qui vous ressemble.',
    email: 's.minette@ebdo-lejournal.com',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/sharlie.png'
  },
  {
    name: 'Thibaut Brugat-Dreux',
    job: 'Organisateur de la tournée',
    description:
      'Sortir de sa zone de confort. Se remettre en question. Accepter d’avoir tort. Ebdo sera, devra être là ou on ne l’attend pas.',
    email: 'thibaut@ebdo-lejournal.com'
    // image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/thibaut.jpg'
  },
  {
    name: 'Magali Gasperini Courroy',
    job: 'Rédactrice photo',
    description:
      'C’est une aventure enthousiasmante. Une belle promesse à vous, lecteurs. Inventer, réinventer. Vous donner à voir le monde, qu’il soit de l’autre côté de la Terre ou de l’autre côté de la rue.',
    email: 'm.gasperini@ebdo-lejournal.com'
    // image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/thibaut.jpg'
  },
  {
    name: 'Olivier Monod',
    job: 'Journaliste',
    description:
      ' Parler de science simplement. Démythifier certains sujets, en réenchanter d’autres. Répondre à vos questions et éclairer les controverses. Ebdo, c’est tout ça et plus encore. ',
    email: 'o.monod@ebdo-lejournal.com'
    // image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/thibaut.jpg'
  },
  {
    name: 'Gaëlle Macke',
    job: 'Co-Rédactrice en chef',
    description:
      'S’écarter du buzz pour écouter le bruit du monde. S’éloigner des écrans pour regarder la vie en vrai. Et, sans relâche, expliquer, échanger, confronter, poser des repères, donner du sens. Pour faire comprendre et mieux se comprendre. Ensemble.',
    email: 'g.macke@ebdo-lejournal.com'
    // image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/thibaut.jpg'
  },
  {
    name: 'Anne-Sophie Novel',
    job: 'Journaliste installée à Bordeaux',
    description:
      "J'aime la presse qui traite autant des plaies du monde que de celles et ceux qui les pansent. Ebdo et ses Ebdonautes rêvent d'un journalisme qui offre un rapport apaisé au monde. Puisse ce rêve se réaliser !",
    email: 'as.novel@ebdo-lejournal.com'
    // image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/thibaut.jpg'
  },
  {
    name: 'Arthur Frayer-Laleix',
    job: '',
    description:
      "Pour moi, le meilleur journal possible est celui qui me prend à contre-pied. Celui qui fait vaciller mes certitudes. J'avais un avis sur le foot, la chasse, les migrants, l'Amérique, la tarte aux pommes... et voilà que la lecture d'un article me fait douter. Ebdo sera ce journal qui nous pousse à penser à contre-courant de nos certitudes.",
    email: 'a.frayer@ebdo-lejournal.com'
    // image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/thibaut.jpg'
  },
  // {
  //   name: 'Adélaïde Michel',
  //   job: 'Animatrice de communauté',
  //   description: '',
  //   email: 'a.michel@ebdo-lejournal.com'
  //   // image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/thibaut.jpg'
  // },
  // {
  //   name: 'Steven Sanséau',
  //   job: 'Webmestre', // LOOOOOOOLL
  //   description: '',
  //   email: 's.sanseau@ebdo-lejournal.com'
  //   // image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/thibaut.jpg'
  // },
  {
    name: 'Adrien Absolu',
    job: 'Journaliste',
    description:
      'Ebdo, pour moi, c’est d’abord une terrible excitation. Celle d’exercer un nouveau métier, de participer à une aventure collective, de rencontrer plein de gens – nouveaux collègues, futurs lecteurs. De sauter dans le vide. C’est le sel et le piment. ',
    email: 'a.absolu@ebdo-lejournal.com'
    // image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/thibaut.jpg'
  }
]

export { Team, TeamList }
