export interface RingMetric {
  id: string;
  percentage: number;
  displayValue: string;
  label: string;
  context: string;
  color: string;
  surfaceColor: string;
}

export interface CountMetric {
  id: string;
  targetNumber: number;
  suffix?: string;
  label: string;
  context: string;
  surfaceColor: string;
}

export interface SubRole {
  id: string;
  title: string;
  productContext: string;
  bullets: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  location: string;
  period: string;
  summaryNote?: string;
  primaryRole?: string;
  surfaceColor: string;
  bullets?: string[];
  subRoles?: SubRole[];
}

export interface CareerStep {
  id: string;
  role: string;
  company: string;
  years: string;
  highlight: string;
  targetId: string;
  surfaceColor: string;
}

export type ProjectCategory = 'All' | '0→1 Built' | 'PropTech & Integrations' | 'Growth & CX';

export type CaseStudyGraphicType =
  | 'assessment-flow'
  | 'omnichannel-bar'
  | 'bangalore-donut'
  | 'noc-flow'
  | 'adoption-donut'
  | 'sync-nodes';

export interface CaseStudy {
  id: string;
  index: string;
  organization: string;
  category: Exclude<ProjectCategory, 'All'>;
  surfaceColor: string;
  graphicType: CaseStudyGraphicType;
  title: string;
  problem: string;
  action: string;
  outcome: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  modalDetails: {
    overview: string;
    architectureNotes: string[];
    metrics: string[];
    platforms: string[];
  };
}

export interface SkillGroup {
  category: string;
  surfaceColor: string;
  items: string[];
}

export interface RadarAxis {
  axis: string;
  score: number;
  summary: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  note: string;
  surfaceColor: string;
}

export const PROFILE = {
  name: 'Oyeshi Das',
  role: 'Product Manager',
  location: 'Mumbai, India',
  email: 'oyeshi.das09@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/oyeshi-das/',
  headline: 'Product Manager.\nDigital Products & Platforms.',
  subline:
    'I turn customer needs and business challenges into intuitive digital products people love to use.',
  aboutParagraph:
    'Product professional with 5 years across PropTech and B2B SaaS, building AI-enabled, integration-heavy platforms. I use GenAI tools for rapid prototyping and built a 0→1 assessment portal with Google AI Studio. At Lodha Group, I own requirements for BelleVie, the customer app for 20K Lodha customers, and its integrations with Salesforce CRM and SAP. Previously Product Manager at Jio Platforms, scaling a facial-recognition attendance app to 300K DAU.',
  aboutHighlights: [
    { label: 'Customer Scale', value: '20K BelleVie Customers · 300K DAU (Jio mHere)' },
    { label: 'Delivery Record', value: '50+ Features · 55+ CRs · 44 Escalations Closed' },
    { label: 'Recognition', value: 'Outstanding Performance & Exceptional Hire' },
    { label: 'Academic Lens', value: 'MSc GIS · University of Leeds' },
  ],
  contactStatement: 'Open to all Product Manager roles.',
};

export const RING_METRICS: RingMetric[] = [
  {
    id: 'verification',
    percentage: 97,
    displayValue: '97%',
    label: 'User verification improved',
    context: 'AI/ML facial recognition · Jio mHere (300K DAU)',
    color: '#6C63FF',
    surfaceColor: '#E9E5FF',
  },
  {
    id: 'resolution',
    percentage: 99.9,
    displayValue: '99.9%',
    label: 'Issue resolution rate',
    context: 'HP Service Manager ticketing · NPS 95 (JioFiber)',
    color: '#2E9F83',
    surfaceColor: '#DFF7EE',
  },
  {
    id: 'nps',
    percentage: 100,
    displayValue: '100',
    label: 'NPS on client onboarding',
    context: 'Jio mHere enterprise onboarding · 95 on JioFiber',
    color: '#FF8A80',
    surfaceColor: '#FFE8DC',
  },
  {
    id: 'bangalore',
    percentage: 92,
    displayValue: '92%',
    label: 'Bangalore launch adoption',
    context: 'Adapted app journey for Karnataka real-estate flow',
    color: '#6C63FF',
    surfaceColor: '#DDEEFF',
  },
  {
    id: 'triggers',
    percentage: 75,
    displayValue: '75%',
    label: 'Adoption via WA/SMS triggers',
    context: 'Automated post-booking download & opt-in flows',
    color: '#2E9F83',
    surfaceColor: '#FFF6D6',
  },
  {
    id: 'engagement',
    percentage: 48.8,
    displayValue: '48.8%',
    label: 'App engagement (up from 17.7%)',
    context: 'Omnichannel Case Management across SFDC & BelleVie',
    color: '#FF8A80',
    surfaceColor: '#E9E5FF',
  },
];

export const COUNT_METRICS: CountMetric[] = [
  {
    id: 'dau',
    targetNumber: 300,
    suffix: 'K',
    label: 'DAU on attendance SaaS',
    context: 'Jio mHere facial-recognition platform',
    surfaceColor: '#E9E5FF',
  },
  {
    id: 'bellevie-customers',
    targetNumber: 20,
    suffix: 'K',
    label: 'Customers on BelleVie',
    context: 'Lodha homeowner & resident platform',
    surfaceColor: '#DFF7EE',
  },
  {
    id: 'features',
    targetNumber: 50,
    suffix: '+',
    label: 'Features shipped',
    context: 'Near-zero post-release bugs',
    surfaceColor: '#DDEEFF',
  },
  {
    id: 'crs',
    targetNumber: 55,
    suffix: '+',
    label: 'Change requests led',
    context: 'Payments, tax, NOCs & market rollouts',
    surfaceColor: '#FFE8DC',
  },
  {
    id: 'escalations',
    targetNumber: 44,
    label: 'Escalations closed',
    context: 'Root-cause fixes over band-aid patches',
    surfaceColor: '#FFF6D6',
  },
  {
    id: 'layers',
    targetNumber: 100,
    suffix: '+',
    label: 'GIS map layers maintained',
    context: 'Jio Pulse spatial schemas in ArcGIS',
    surfaceColor: '#DFF7EE',
  },
];

export const CAREER_STEPS: CareerStep[] = [
  {
    id: 'gis-analyst',
    role: 'GIS Analyst',
    company: 'Jio Pulse',
    years: '2021 – 2022',
    highlight: '100+ map layers',
    targetId: 'role-gis-analyst',
    surfaceColor: '#DDEEFF',
  },
  {
    id: 'apm',
    role: 'Assistant PM',
    company: 'JioFiber Partner',
    years: '2022 – 2024',
    highlight: '~20K → 71 man-days',
    targetId: 'role-apm',
    surfaceColor: '#DFF7EE',
  },
  {
    id: 'pm',
    role: 'Product Manager',
    company: 'Jio mHere',
    years: '2024 – 2025',
    highlight: '300K DAU · NPS 100',
    targetId: 'role-pm',
    surfaceColor: '#FFE8DC',
  },
  {
    id: 'po',
    role: 'Product Owner',
    company: 'Lodha · BelleVie',
    years: '2025 – Present',
    highlight: '20K users · 55+ CRs',
    targetId: 'exp-lodha',
    surfaceColor: '#E9E5FF',
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'lodha',
    company: 'Lodha Group',
    location: 'Mumbai',
    period: 'Mar 2025 – Present',
    primaryRole: 'Product Owner, BelleVie',
    surfaceColor: '#E9E5FF',
    bullets: [
      'Owns product requirements for BelleVie (20K Lodha customers) as the business bridge between Salesforce CRM, SAP, and mobile app engineering teams',
      'Built and executed the product roadmap; shipped 50+ features with near-zero post-release bugs',
      'Led 55+ change requests across payments, tax compliance, NOC automation, and new-market rollout; authored BRDs from discovery to sign-off',
      'Drove 92% app adoption in the Bangalore market launch, 75% adoption via WhatsApp/SMS booking triggers, and lifted engagement from 17.7% to 48.8%',
      'Delivered Resale & Rental NOC Automation with zero user-facing issues post-release',
      'Tracked 44 escalations to closure, prioritising root-cause fixes over band-aid patches; led UAT cycles and release adoption guides',
    ],
  },
  {
    id: 'jio',
    company: 'Jio Platforms Limited',
    location: 'Mumbai',
    period: 'Sep 2021 – Mar 2025',
    summaryNote: 'Consistent A+ performer · 3 roles in Location Based Services',
    surfaceColor: '#DFF7EE',
    subRoles: [
      {
        id: 'role-pm',
        title: 'Product Manager — Jio mHere',
        productContext: 'B2B SaaS real-time facial-recognition attendance',
        bullets: [
          'Implemented AI/ML facial recognition for 300K DAU, eliminating proxy attendance and improving verification by 97%',
          'Owned roadmap and prioritisation; shipped 10+ features; wrote user stories, designed wireframes, aligned integration teams',
          'Delivered demos and onboarded new business clients; achieved an NPS of 100',
        ],
      },
      {
        id: 'role-apm',
        title: 'Assistant Product Manager — JioFiber Partner',
        productContext: 'GIS-based fibre-planning SaaS',
        bullets: [
          'Cut PAN-India network inventory capture from ~20,000 to 71 man-days',
          'Eliminated location-identification issues (55% of user queries) within a week via a mobile SOP; cut information-gap queries by 35% with an in-app feature tour',
          'Led product direction for an AI chatbot to handle user queries',
          'Introduced a ticketing system integrated with HP Service Manager; 99.9% issue resolution, NPS 95',
        ],
      },
      {
        id: 'role-gis-analyst',
        title: 'GIS Analyst — Jio Pulse',
        productContext: 'GIS map-data visualisation platform',
        bullets: [
          'Maintained 100+ map layers; designed geospatial schemas and validated data in ArcGIS for PAN-India business insights',
        ],
      },
    ],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'assessment-portal',
    index: '01',
    organization: 'Independent 0→1 Build',
    category: '0→1 Built',
    surfaceColor: '#E9E5FF',
    graphicType: 'assessment-flow',
    title: '0→1 AI-Built Assessment Portal',
    problem:
      'Needed an integrity-focused online assessment platform with self-serve bulk question upload and cohort analytics.',
    action:
      'Prototyped and shipped end-to-end with Google AI Studio and Netlify — featuring single-attempt locks, tab-switch detection, bulk upload, and live analytics.',
    outcome: 'Live 0→1 product deployed from spec to production.',
    tags: ['Built with Google AI Studio', 'Deployed on Netlify'],
    liveUrl: 'https://lodhatest2026.netlify.app/admin',
    modalDetails: {
      overview:
        'Designed, specified, and shipped a full-featured assessment portal using GenAI rapid prototyping in Google AI Studio and deployed live on Netlify.',
      architectureNotes: [
        'Admin Portal: Bulk question upload, configurable test settings, duration timers, and pass thresholds.',
        'Candidate Integrity: Enforced single-attempt sessions with real-time tab-switch detection.',
        'Analytics Dashboard: Tracked candidate scores, completion rates, and item performance.',
      ],
      metrics: [
        '0→1 build deployed live on Netlify',
        'End-to-end Admin, Candidate, and Analytics workflows',
      ],
      platforms: ['Google AI Studio', 'React & TypeScript', 'Netlify'],
    },
  },
  {
    id: 'omnichannel-case',
    index: '02',
    organization: 'Lodha Group · BelleVie',
    category: 'Growth & CX',
    surfaceColor: '#DFF7EE',
    graphicType: 'omnichannel-bar',
    title: 'Omnichannel Case Management',
    problem:
      'Customers lacked visibility into support responses while Relationship Managers operated across fragmented email and CRM channels.',
    action:
      'Integrated bidirectional in-app chat between Salesforce and BelleVie so customers see every reply and RMs respond via chat or email.',
    outcome: 'Lifted app engagement from 17.7% to 48.8%.',
    tags: ['CRM', 'CX', '17.7% → 48.8% Engagement'],
    modalDetails: {
      overview:
        'Bridged homeowner support and Relationship Managers by connecting Salesforce Service Cloud directly with BelleVie in-app messaging.',
      architectureNotes: [
        'Defined bidirectional payload contracts between Salesforce Case Management and BelleVie in-app chat.',
        'Enabled RMs to reply natively via email or SFDC while surfacing every update in the customer timeline.',
        'Unified case status tracking across channels to eliminate follow-up calls.',
      ],
      metrics: [
        'App engagement grew from 17.7% to 48.8%',
        '100% response visibility inside the customer app',
      ],
      platforms: ['Salesforce Service Cloud', 'BelleVie Chat', 'Email Relay'],
    },
  },
  {
    id: 'bangalore-rollout',
    index: '03',
    organization: 'Lodha Group · BelleVie',
    category: 'PropTech & Integrations',
    surfaceColor: '#DDEEFF',
    graphicType: 'bangalore-donut',
    title: 'Bangalore Market Launch',
    problem:
      'Karnataka’s real-estate compliance and onboarding processes differed from Mumbai workflows.',
    action:
      'Adapted the BelleVie app journey for Karnataka’s process and coordinated SFDC, mobile app, and regional business teams through launch.',
    outcome: 'Achieved 92% app adoption in the Bangalore launch.',
    tags: ['New Market', 'Process Design', '92% Adoption'],
    modalDetails: {
      overview:
        'Expanded BelleVie into Bangalore with region-aware onboarding, documentation, and milestone states while keeping the core codebase unified.',
      architectureNotes: [
        'Mapped Karnataka-specific legal and operational workflows with regional stakeholders.',
        'Translated regional process deltas into modular Salesforce and BelleVie configurations.',
        'Led cross-team UAT sign-offs on schedule with zero impact to existing markets.',
      ],
      metrics: [
        '92% app adoption in Bangalore market launch',
        'Zero disruption to existing Mumbai production flows',
      ],
      platforms: ['BelleVie', 'Salesforce CRM', 'Regional Operations'],
    },
  },
  {
    id: 'noc-launch',
    index: '04',
    organization: 'Lodha Group · BelleVie',
    category: 'PropTech & Integrations',
    surfaceColor: '#FFE8DC',
    graphicType: 'noc-flow',
    title: 'NOC Automation',
    problem:
      'Resale and rental NOC requests depended on slow manual checks across profiles, documents, and payment clearances.',
    action:
      'Automated end-to-end NOC issuance across BelleVie, SFDC, and SAP covering profile verification, document review, and payment confirmation.',
    outcome: 'Zero user-facing issues after release.',
    tags: ['Integration', 'Payments', 'SAP'],
    modalDetails: {
      overview:
        'Delivered a unified digital Resale & Rental NOC workflow inside BelleVie, connecting Salesforce eligibility rules with SAP payment confirmation.',
      architectureNotes: [
        'Authored BRDs mapping state transitions across BelleVie, Salesforce CRM, and SAP Finance.',
        'Automated profile verification, structured document review queues, and SAP payment reconciliation.',
        'Executed rigorous UAT across tax and payment edge cases prior to go-live.',
      ],
      metrics: [
        'Zero user-facing issues after release',
        'Automated 3-system verification & clearance',
      ],
      platforms: ['BelleVie', 'Salesforce CRM', 'SAP Finance'],
    },
  },
  {
    id: 'adoption-triggers',
    index: '05',
    organization: 'Lodha Group · BelleVie',
    category: 'Growth & CX',
    surfaceColor: '#FFF6D6',
    graphicType: 'adoption-donut',
    title: 'App Adoption Triggers',
    problem:
      'Newly booked buyers missed timely onboarding nudges or received communications without eligibility checks.',
    action:
      'Launched WhatsApp and SMS opt-in flows plus automated post-booking download triggers backed by booking-stage validations.',
    outcome: 'Drove 75% app adoption via booking triggers.',
    tags: ['Growth', 'Messaging', '75% Adoption'],
    modalDetails: {
      overview:
        'Created automated lifecycle messaging triggers activated at qualifying booking milestones to bring 20K Lodha customers onto BelleVie.',
      architectureNotes: [
        'Defined strict Salesforce booking-stage eligibility checks to prevent duplicate or premature triggers.',
        'Implemented explicit WhatsApp and SMS opt-in consent capture.',
        'Paired deep-linked invites with quick-reference onboarding guides.',
      ],
      metrics: [
        '75% app adoption driven by WhatsApp/SMS booking triggers',
        '100% consent-compliant messaging pipeline',
      ],
      platforms: ['WhatsApp Business API', 'SMS Gateway', 'Salesforce', 'BelleVie'],
    },
  },
  {
    id: 'cross-platform-sync',
    index: '06',
    organization: 'Lodha Group · BelleVie',
    category: 'PropTech & Integrations',
    surfaceColor: '#E9E5FF',
    graphicType: 'sync-nodes',
    title: 'Cross-Platform Sync',
    problem:
      'Manual resident and inventory creation plus stale RFC records across platforms created ops overhead and data drift.',
    action:
      'Built a middleware-free batch model refreshing RFCs across 3 platforms and automated resident & inventory provisioning from SFDC to BelleVie.',
    outcome: 'Zero manual entries with full cross-system parity.',
    tags: ['Automation', 'APIs', '0 Manual Entries'],
    modalDetails: {
      overview:
        'Eliminated manual provisioning and multi-system drift using a deterministic batch reconciliation pattern across BelleVie, Salesforce, and SAP.',
      architectureNotes: [
        'Designed a lightweight 3-platform RFC batch refresh model without middleware licensing cost.',
        'Automated resident profile and unit inventory creation directly from Salesforce into BelleVie.',
        'Added deterministic retry rules and exception logging for root-cause traceability.',
      ],
      metrics: [
        '0 manual entries required post-launch',
        '3-platform RFC synchronisation with zero middleware',
      ],
      platforms: ['Salesforce', 'SAP', 'BelleVie', 'REST / Batch APIs'],
    },
  },
];

export const RADAR_AXES: RadarAxis[] = [
  {
    axis: 'Product',
    score: 96,
    summary: 'Strategy, 0→1 GenAI prototyping, PRDs/BRDs & 50+ features shipped',
  },
  {
    axis: 'Stakeholder Mgmt',
    score: 94,
    summary: 'Business bridge across Salesforce, SAP, app engineering & ops',
  },
  {
    axis: 'Data',
    score: 90,
    summary: 'SQL, ArcGIS/GIS, Power BI, Tableau & cohort analytics',
  },
  {
    axis: 'Technical',
    score: 86,
    summary: 'APIs & batch sync design, Python, JS/React, Git & AI/LLM tools',
  },
  {
    axis: 'Design',
    score: 84,
    summary: 'User journeys, Figma wireframes, feature tours & intuitive UX',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Product',
    surfaceColor: '#E9E5FF',
    items: [
      'Product Strategy',
      '0→1 Development',
      'Roadmap Prioritisation',
      'PRDs/BRDs',
      'User Research',
      'User Journeys',
      'Pricing Strategy',
      'Product Analytics',
      'Engagement & Retention',
    ],
  },
  {
    category: 'Delivery & Stakeholders',
    surfaceColor: '#FFE8DC',
    items: [
      'Cross-functional Stakeholder Management',
      'UAT',
      'Executive Communication',
    ],
  },
  {
    category: 'Technical',
    surfaceColor: '#DFF7EE',
    items: [
      'APIs & Integrations',
      'SQL',
      'Python',
      'JavaScript',
      'React',
      'Git',
      'AI/LLM Tools',
    ],
  },
  {
    category: 'Data & Design',
    surfaceColor: '#DDEEFF',
    items: [
      'Tableau',
      'Power BI',
      'Excel',
      'Figma',
      'Wireframing',
      'ArcGIS / GIS',
    ],
  },
  {
    category: 'Platforms',
    surfaceColor: '#FFF6D6',
    items: ['Salesforce', 'SAP', 'Jira'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'MSc Geographical Information Systems',
    institution: 'University of Leeds',
    location: 'UK',
    period: '2019–2021',
    note: 'Thesis: Multi-Criteria Evaluation for Retrofitting SUDS',
    surfaceColor: '#E9E5FF',
  },
  {
    degree: 'BA (Hons) Geography, First Class',
    institution: 'Banaras Hindu University',
    location: 'Varanasi, India',
    period: '2016–2019',
    note: 'Graduated with First Class Honours',
    surfaceColor: '#DFF7EE',
  },
];

export interface ChatPreset {
  id: string;
  question: string;
  answer: string;
  actionLabel?: string;
  actionHref?: string;
}

export const CHAT_PRESETS: ChatPreset[] = [
  {
    id: 'what-i-do',
    question: 'What do you do?',
    answer:
      'I’m a Product Manager with 5 years across PropTech and B2B SaaS. At Lodha Group, I own BelleVie (20K customers) and its Salesforce CRM & SAP integrations, and I use GenAI tools like Google AI Studio to prototype 0→1 products.',
    actionLabel: 'See my experience',
    actionHref: '#experience',
  },
  {
    id: 'biggest-impact',
    question: 'Biggest impact?',
    answer:
      'Lifted BelleVie engagement from 17.7% to 48.8%, drove 92% Bangalore launch adoption & 75% trigger adoption, closed 44 escalations, scaled Jio mHere to 300K DAU (+97% verification, NPS 100), and cut network capture from ~20,000 to 71 man-days.',
    actionLabel: 'View impact charts',
    actionHref: '#impact',
  },
  {
    id: 'tech-skills',
    question: 'Tech skills?',
    answer:
      'APIs & batch integrations, Salesforce, SAP, Jira, SQL, Python, JavaScript/React, Git, AI/LLM tools (Google AI Studio), Figma, Tableau, Power BI, and ArcGIS.',
    actionLabel: 'Explore skills radar',
    actionHref: '#skills',
  },
  {
    id: 'reach-you',
    question: 'How to reach you?',
    answer:
      'Email me at oyeshi.das09@gmail.com or connect on LinkedIn. I’m open to all Product Manager roles.',
    actionLabel: 'Go to contact',
    actionHref: '#contact',
  },
];
