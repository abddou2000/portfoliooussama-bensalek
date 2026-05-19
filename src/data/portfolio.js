export const profile = {
  name: 'Oussama Bensalek',
  firstName: 'Oussama',
  lastName: 'Bensalek',
  shortName: 'O. Bensalek',
  initials: 'OB',
  photo: '/portrait.jpg',
  title: 'Ingénieur Bureau d\'Études — Génie Civil & BTP',
  tagline: 'Concevoir des ouvrages durables, optimiser chaque structure, livrer avec rigueur.',
  location: 'Maroc · Disponible à l\'international',
  email: 'osaing.bet@gmail.com',
  phone: '+212 661 24 73 10',
  linkedin: 'https://www.linkedin.com/in/oussama-bensalek-15a1bb5a/',
  linkedinHandle: '/in/oussama-bensalek',
  bio: `Ingénieur en génie civil spécialisé en calcul de structures et conduite de projets BTP, j'accompagne maîtres d'ouvrage, promoteurs et entreprises de construction depuis plus de huit ans. Mon approche conjugue rigueur réglementaire (Eurocodes, RPS, BAEL), optimisation technico-économique et exigence d'exécution sur site.`,
  stats: [
    { value: '+85', label: 'Projets livrés' },
    { value: '12', label: 'Pays d\'intervention' },
    { value: '+450k', label: 'm² conçus' },
    { value: '8 ans', label: 'D\'expertise' },
  ],
};

export const expertise = [
  {
    icon: 'Building2',
    title: 'Calcul de structures',
    items: ['Béton armé · BAEL / Eurocode 2', 'Charpente métallique · Eurocode 3', 'Sismique · RPS 2011', 'Modélisation Robot, ETABS, SAP2000'],
  },
  {
    icon: 'HardHat',
    title: 'Conduite de travaux',
    items: ['Planning Gantt & chemin critique', 'Suivi budgétaire et avenants', 'Coordination corps d\'état', 'QHSE & contrôle qualité'],
  },
  {
    icon: 'Ruler',
    title: 'Études techniques',
    items: ['APS, APD, DCE', 'Notes de calcul certifiées', 'Plans d\'exécution & ferraillage', 'Métrés et estimations détaillées'],
  },
  {
    icon: 'Layers',
    title: 'BIM & Numérique',
    items: ['Revit · Navisworks', 'Synthèse multi-disciplines', 'Maquette LOD 300/400', 'Détection de clashs'],
  },
];

export const projects = [
  {
    title: 'Tour résidentielle R+18',
    location: 'Casablanca, Anfa',
    year: '2024',
    surface: '24 500 m²',
    role: 'Chef de projet structures',
    description: 'Conception complète de la superstructure béton armé d\'une tour résidentielle haut standing. Étude sismique poussée, optimisation des voiles et noyau central.',
    tags: ['Béton armé', 'Sismique', 'ETABS'],
    accent: 'from-ink-900 to-ink-700',
  },
  {
    title: 'Centre logistique XXL',
    location: 'Tanger, Zone franche',
    year: '2023',
    surface: '38 000 m²',
    role: 'Ingénieur structure principal',
    description: 'Charpente métallique grande portée (45m) pour plateforme logistique. Optimisation poids/coût avec gain de 14% sur le tonnage acier.',
    tags: ['Charpente acier', 'Grande portée', 'Robot'],
    accent: 'from-gold-600 to-gold-400',
  },
  {
    title: 'Hôpital régional 240 lits',
    location: 'Fès',
    year: '2023',
    surface: '18 200 m²',
    role: 'Coordinateur BIM',
    description: 'Synthèse BIM multi-corps d\'état (structure, fluides, CFO/CFA, médical). Maquette LOD 400, détection et résolution de 1 200 clashs.',
    tags: ['BIM', 'Santé', 'Coordination'],
    accent: 'from-ink-800 to-ink-900',
  },
  {
    title: 'Pont à haubans urbain',
    location: 'Rabat',
    year: '2022',
    surface: '320 m linéaires',
    role: 'Études d\'exécution',
    description: 'Note de calcul du tablier mixte acier-béton, étude des câbles et appareils d\'appui. Coordination avec le bureau de contrôle.',
    tags: ['Ouvrage d\'art', 'Mixte', 'Câbles'],
    accent: 'from-ink-900 to-gold-500',
  },
  {
    title: 'Campus universitaire',
    location: 'Marrakech',
    year: '2022',
    surface: '52 000 m²',
    role: 'Direction d\'études',
    description: 'Pilotage d\'une équipe de 9 ingénieurs pour la conception de 6 blocs pédagogiques et résidences. Livraison DCE complet en 7 mois.',
    tags: ['Direction', 'Tertiaire', 'DCE'],
    accent: 'from-ink-700 to-ink-900',
  },
  {
    title: 'Réhabilitation patrimoine',
    location: 'Médina de Fès',
    year: '2021',
    surface: '4 800 m²',
    role: 'Expert structure',
    description: 'Diagnostic structurel et confortement de bâtiments classés UNESCO. Méthodes douces, micropieux, tirants précontraints.',
    tags: ['Patrimoine', 'Confortement', 'UNESCO'],
    accent: 'from-gold-500 to-ink-800',
  },
];

export const experience = [
  {
    period: '2022 — Aujourd\'hui',
    role: 'Ingénieur Bureau d\'Études Senior',
    company: 'BET Structura Engineering',
    description: 'Pilotage d\'études structures sur projets tertiaires, industriels et résidentiels. Encadrement d\'une équipe de 5 ingénieurs.',
  },
  {
    period: '2019 — 2022',
    role: 'Ingénieur Structures',
    company: 'Cabinet AEC Consult',
    description: 'Notes de calcul béton armé et charpente métallique. Coordination avec architectes et bureaux de contrôle SOCOTEC, Veritas.',
  },
  {
    period: '2017 — 2019',
    role: 'Ingénieur Travaux',
    company: 'TGCC Construction',
    description: 'Conduite de chantier sur projets résidentiels R+12. Gestion planning, sous-traitants et contrôle qualité.',
  },
  {
    period: '2012 — 2017',
    role: 'Diplôme d\'Ingénieur d\'État — Génie Civil',
    company: 'École Mohammadia d\'Ingénieurs (EMI) — Rabat',
    description: 'Major de promotion. Mémoire : "Optimisation parasismique des bâtiments élancés en zone sismique".',
  },
];

export const services = [
  {
    title: 'Études de conception',
    description: 'APS, APD, DCE complets. Notes de calcul certifiées Eurocodes & RPA, plans d\'exécution et ferraillage prêts pour chantier.',
    icon: 'PencilRuler',
  },
  {
    title: 'Audit & diagnostic',
    description: 'Diagnostic structurel de bâtiments existants, expertise pathologique, préconisations de confortement et renforcement.',
    icon: 'Search',
  },
  {
    title: 'Maîtrise d\'œuvre',
    description: 'Suivi complet de chantier, contrôle des entreprises, validation des situations, réception et levée des réserves.',
    icon: 'ClipboardCheck',
  },
  {
    title: 'Coordination BIM',
    description: 'Mise en place de processus BIM, modélisation Revit LOD 300/400, synthèse multi-disciplines et détection de clashs.',
    icon: 'Boxes',
  },
];
