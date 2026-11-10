// ============================================================================
//  PROFIL DE L'ÉTABLISSEMENT
//  C'est le fichier à adapter pour décliner le site pour une autre école :
//  identité, coordonnées, tarifs par défaut, textes de l'accueil, cycles, FAQ…
//  Les images référencées se trouvent dans le dossier public/.
//
//  En mode API, les coordonnées et les tarifs (bloc `settings`) sont ensuite
//  remplacés par ceux enregistrés dans l'administration (GET /api/public/settings).
// ============================================================================
import type { Settings } from '../models'

export interface CycleProfile {
  /**
   * Valeur technique du cycle. Doit correspondre aux cycles acceptés par le backend
   * (utils/schemas.js) : Maternelle / Primaire / Collège. N'est pas affichée telle quelle.
   */
  name: string
  /** Libellé affiché sur le site (ex. « Préscolaire » pour la valeur technique « Maternelle »). */
  label: string
  /** Segment d'URL de la page d'admission : /admissions/<slug>. */
  slug: string
  age: string
  text: string
  /** Classes proposées. Doivent correspondre aux classes acceptées par le backend. */
  classes: string[]
  skills: string[]
  programs: { icon: string; title: string; text: string }[]
}

export interface SchoolProfile {
  /** Identifiant technique (sert aussi de clé de stockage des fake data). */
  id: string
  logo: string
  /** Valeurs par défaut des paramètres (affichées avant chargement et utilisées par les fake data). */
  settings: Settings
  footerText: string
  hero: { eyebrow: string; titleLines: string[]; highlight: string; intro: string; images: string[] }
  founder: {
    photo: string
    photoAlt: string
    eyebrow: string
    titleLines: string[]
    greeting: string
    paragraphs: string[]
    signature: string
  }
  history: { title: string; paragraphs: string[]; stats: { value: string; label: string }[] }
  values: { icon: string; title: string; text: string }[]
  faq: { q: string; a: string; link?: { to: string; label: string } }[]
  cycles: CycleProfile[]
  admissions: { documents: string[] }
}

// ----------------------------------------------------------------------------
//  EPL GRATIAS — Adakpamé (Golfe 1), Lomé
//  Données vérifiées : nom, quartier / commune, téléphone principal, cycles et classes,
//  examens (CEPE, BEPC).
//  Données FICTIVES à confirmer avec l'établissement : slogan, e-mail, horaires, tarifs,
//  année de fondation, effectifs, textes de présentation, nom du fondateur.
// ----------------------------------------------------------------------------
export const school: SchoolProfile = {
  id: 'epl-gratias',
  logo: '/gratias-logo.png',
  settings: {
    name: 'École Privée Laïque Gratias',
    shortName: 'EPL Gratias',
    slogan: 'SAVOIR, DISCIPLINE ET RÉUSSITE',
    address: 'Quartier Adakpamé, commune du Golfe 1 — Lomé, Togo',
    email: 'contact@eplgratias.tg',
    phone: '+228 90 08 86 88',
    phone2: '',
    hours: 'Lundi – Vendredi : 7h00 – 17h00',
    annualFee: 95000,
    canteenFee: 500,
    badgeFee: 1000,
    uniformFee: 4000,
    apeFee: 2000,
  },
  footerText:
    'Complexe scolaire privé laïc d’Adakpamé : du jardin d’enfants au collège, un cadre sérieux et bienveillant pour la réussite de chaque élève.',
  hero: {
    eyebrow: 'SAVOIR - DISCIPLINE - RÉUSSITE',
    titleLines: ['École Privée', 'Laïque'],
    highlight: 'GRATIAS',
    intro:
      'Bienvenue sur le site officiel du Complexe Scolaire Gratias, à Adakpamé (Lomé). Du préscolaire au collège, nous accompagnons chaque enfant vers la réussite.',
    images: ['/hero/hero-1.jpg', '/hero/hero-2.jpg', '/hero/hero-3.jpg'],
  },
  founder: {
    photo: '/directeur-general.jpg',
    photoAlt: 'Le fondateur et directeur de l’EPL Gratias',
    eyebrow: 'UN MOT DU FONDATEUR',
    titleLines: ['Instruire, éduquer,', 'faire réussir.'],
    greeting: 'Chers parents, chers élèves,',
    paragraphs: [
      'À l’EPL Gratias, nous croyons que chaque enfant porte en lui la capacité de réussir. Notre mission est de lui offrir un cadre d’apprentissage rigoureux, ouvert à tous et respectueux de chacun.',
      'Établissement laïc, nous accueillons les élèves sans distinction et plaçons le travail, la discipline et le respect au cœur de notre projet éducatif, du jardin d’enfants jusqu’au BEPC.',
    ],
    signature: 'Le Fondateur et Directeur',
  },
  history: {
    title: 'Notre Histoire',
    paragraphs: [
      'Implantée dans le quartier d’Adakpamé, dans la commune du Golfe 1 à l’est de Lomé, l’École Privée Laïque Gratias est née de la volonté d’offrir aux familles du quartier un enseignement de qualité, au plus près de chez elles.',
      'Au fil des années, l’établissement est devenu un complexe scolaire complet, qui accompagne les enfants du préscolaire jusqu’à la fin du collège, en suivant les programmes officiels de l’enseignement général togolais.',
      'Établissement privé et laïc, Gratias prépare ses élèves aux examens nationaux — le CEPE en fin de primaire et le BEPC en fin de collège — tout en développant leur sens civique, leur autonomie et leur goût de l’effort.',
    ],
    stats: [
      { value: '3', label: 'Cycles d’enseignement' },
      { value: '400+', label: 'Élèves' },
      { value: '100%', label: 'Engagement pour la réussite' },
    ],
  },
  values: [
    {
      icon: 'graduation',
      title: 'Excellence',
      text: 'Un enseignement exigeant, tourné vers la réussite aux examens officiels.',
    },
    {
      icon: 'shield',
      title: 'Discipline',
      text: 'Un cadre structuré qui apprend la rigueur, la ponctualité et le respect.',
    },
    {
      icon: 'heart',
      title: 'Laïcité et respect',
      text: 'Une école ouverte à tous, qui accueille chaque enfant sans distinction.',
    },
    { icon: 'users', title: 'Communauté', text: 'Parents, enseignants et élèves unis autour de la réussite.' },
  ],
  faq: [
    {
      q: 'Que signifie « EPL » ?',
      a: 'EPL signifie École Privée Laïque. Gratias est un établissement privé, laïc, qui accueille les élèves du préscolaire au collège, dans le quartier d’Adakpamé à Lomé.',
    },
    {
      q: 'Quels cycles proposez-vous ?',
      a: 'Le préscolaire (petite, moyenne et grande section), le primaire (du CP1 au CM2) et le collège (de la 6e à la 3e).',
      link: { to: '/cycles', label: 'Voir nos cycles' },
    },
    {
      q: 'Vos élèves passent-ils les examens officiels ?',
      a: 'Oui. Les élèves de CM2 présentent le CEPE pour l’entrée en 6e, et les élèves de 3e présentent le BEPC. Nous les y préparons tout au long de l’année.',
    },
    {
      q: 'À combien s’élèvent les frais de scolarité ?',
      a: 'La scolarité annuelle et les frais annexes sont détaillés sur la page Tarifs et scolarité.',
      link: { to: '/tarifs', label: 'Voir les tarifs' },
    },
    {
      q: 'Quelles sont les échéances de paiement ?',
      a: 'Le paiement de la scolarité peut être effectué en trois tranches. Le calendrier est communiqué lors de l’inscription.',
    },
  ],
  cycles: [
    {
      name: 'Maternelle',
      label: 'Préscolaire',
      slug: 'prescolaire',
      age: '3 à 6 ans',
      text: 'Le cycle préscolaire (jardin d’enfants) est la première étape du parcours scolaire. Il favorise l’éveil, la socialisation, l’autonomie et les premiers apprentissages.',
      classes: ['Petite section', 'Moyenne section', 'Grande section'],
      skills: [
        'Éveil et expression corporelle',
        'Développement du langage',
        'Découverte des nombres et des formes',
        'Apprentissage de la vie en groupe',
      ],
      programs: [
        {
          icon: 'idea',
          title: 'Éveil artistique',
          text: 'Dessin, peinture, activités manuelles et créativité.',
        },
        {
          icon: 'heart',
          title: 'Chants et expression',
          text: 'Comptines, chants, rythmes et jeux de mouvement.',
        },
        {
          icon: 'book',
          title: 'Premiers apprentissages',
          text: 'Préparer l’entrée au CP1 en découvrant et en jouant.',
        },
      ],
    },
    {
      name: 'Primaire',
      label: 'Primaire',
      slug: 'primaire',
      age: '6 à 12 ans',
      text: 'Le primaire consolide les apprentissages fondamentaux, du CP1 au CM2. Le cycle est sanctionné par le CEPE (Certificat d’Études du Premier Cycle), qui ouvre l’entrée en classe de 6e.',
      classes: ['CP1', 'CP2', 'CE1', 'CE2', 'CM1', 'CM2'],
      skills: [
        'Lecture, écriture et expression orale',
        'Mathématiques et raisonnement logique',
        'Sciences, histoire-géographie et éducation civique',
        'Préparation au CEPE en classe de CM2',
      ],
      programs: [
        {
          icon: 'book',
          title: 'Savoirs fondamentaux',
          text: 'Lecture, écriture et calcul au quotidien.',
        },
        {
          icon: 'idea',
          title: 'Sciences et découverte',
          text: 'Observer, comprendre et développer sa curiosité.',
        },
        {
          icon: 'graduation',
          title: 'Objectif CEPE',
          text: 'Révisions, devoirs et examens blancs en CM2.',
        },
      ],
    },
    {
      name: 'Collège',
      label: 'Collège',
      slug: 'college',
      age: '11 à 16 ans',
      text: 'Le collège (secondaire 1er cycle) accueille les élèves de la 6e à la 3e. Il approfondit les connaissances et les méthodes de travail, et prépare à l’examen national du BEPC (Brevet d’Études du Premier Cycle).',
      classes: ['6e', '5e', '4e', '3e'],
      skills: [
        'Enseignements généraux approfondis',
        'Méthodologie et autonomie',
        'Suivi régulier des résultats',
        'Préparation au BEPC et à l’orientation',
      ],
      programs: [
        {
          icon: 'graduation',
          title: 'Objectif BEPC',
          text: 'Un suivi renforcé et des examens blancs en classe de 3e.',
        },
        {
          icon: 'book',
          title: 'Langues et culture',
          text: 'Français, anglais et ouverture culturelle.',
        },
        {
          icon: 'shield',
          title: 'Préparer l’avenir',
          text: 'Construire son projet et préparer l’entrée au lycée.',
        },
      ],
    },
  ],
  admissions: {
    documents: [
      'Une (1) copie légalisée de l’acte de naissance ou un jugement supplétif légalisé',
      'Un (1) certificat de scolarité de l’établissement précédent',
      'Les bulletins de notes de l’année écoulée (sauf pour une entrée en petite section)',
      'Le relevé ou l’attestation de réussite au CEPE (pour une entrée en 6e)',
      'Deux (2) photos d’identité récentes',
      'Un (1) carnet de santé',
    ],
  },
}

/** Classes par cycle, dérivées du profil (formulaires, filtres, fake data). */
export const classesByCycle: Record<string, string[]> = Object.fromEntries(
  school.cycles.map((c) => [c.name, c.classes]),
)

/** Libellé affiché d'un cycle à partir de sa valeur technique (« Maternelle » → « Préscolaire »). */
export const cycleLabel = (name: string): string =>
  school.cycles.find((c) => c.name === name)?.label ?? name
