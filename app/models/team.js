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
    image:
      's3.eu-west-3.amazonaws.com/ebdo/front/website/team/marie%2Bpierre.png'
  },
  {
    name: 'Mathieu Palain',
    job: 'Journaliste',
    description:
      'Depuis que je suis journaliste, mes potes, se sont remis à lire. Ces mecs, il ne leur serait jamais venu à l’idée de mettre les pieds dans une librairie. Ils se disaient : « Ce n’est pas pour moi, c’est un truc d’intello». J’aimerais que cet hebdo leur parle.',
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
      "«Alors tu déménages à Paris ?» Pour quoi faire ? Lille m'a adoptée. C'est d'ici que je pars et c'est ici que je me retrouve. Ebdo a envie de multiplier les regards, et c'est pour ça que j'ai envie d'Ebdo.",
    email: 'h.saberan@ebdo-lejournal.com',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/haydee.png'
  },
  {
    name: 'Anne Jouan',
    job: 'Journaliste',
    description:
      '"C\'est excitant une naissance ! Surtout quand beaucoup pensent que les journaux print sont morts. Parce que je crois en la presse, parce que j\'aime le journalisme et sentir le papier entre mes doigts, je suis heureuse de participer à Ebdo. Sans publicité !" Dessin © V.Cabut "',
    email: 'a.jouan@ebdo-lejournal.com',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/anne.png'
  },
  {
    name: 'Alice Babin',
    job: 'Journaliste',
    description:
      "«Écrire, comme on marche dans la rue», disait l'autre. C'est ça, comme on respire et comme on vit quoi. Un journalisme du journalier, de la vie, un journalisme de tout et de tous. Car tout a sa place. Tout mérite d'être raconté. Je pense que c'est ça, Ebdo.",
    email: 'a.babin@ebdo-lejournal.com',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/alice.png'
  },
  {
    name: 'Charlotte Chaffanjon',
    job: 'Journaliste',
    description:
      "«Écrire, comme on marche dans la rue», disait l'autre. C'est ça, comme on respire et comme on vit quoi. Un journalisme du journalier, de la vie, un journalisme de tout et de tous. Car tout a sa place. Tout mérite d'être raconté. Je pense que c'est ça, Ebdo.",
    email: 'a.babin@ebdo-lejournal.com',
    image: 's3.eu-west-3.amazonaws.com/ebdo/front/website/team/alice.png'
  }
]

export { Team, TeamList }
