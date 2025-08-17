const data = {
  profile: {
    name: 'Chaitanya',
    tagline: 'Senior DevOps Engineer · Kubernetes · Terraform · Jenkins · AWS/Azure · Apigee · Apify & AI Automations',
    about1: `I build reliable, scalable infrastructure and automation. 9+ years across AWS & Azure with Kubernetes, Terraform, Jenkins/GitHub Actions, Helm, and strong focus on cloud security and CI/CD.`,
    about2: `I also design data scrapers and AI-driven automations (Apify, Make/Activepieces) through QuickLifeSolutions — helping teams remove toil, speed up delivery, and scale confidently.`,
  },
  skills: {
    core: [
      'Kubernetes', 'Docker', 'Helm', 'Terraform', 'Ansible', 'Jenkins', 'GitHub Actions', 'Git', 'Python', 'Java', 'Bash/Powershell', 'Apigee', 'CICD', 'DevSecOps', 'Monitoring', 'SRE'
    ],
    tooling: [
      'SonarQube', 'Nexus', 'Gradle', 'Maven', 'Grafana', 'Prometheus', 'CloudWatch', 'GuardDuty', 'WAF', 'Cognito', 'SST/Serverless'
    ],
    cloud: ['AWS', 'Azure', 'GCP', 'EKS', 'AKS']
  },
  experience: [
    {
      year: '2025',
      role: 'Senior DevOps Engineer',
      company: 'Infosys · Verizon (Project)',
      period: '2025 — Present',
      summary: 'Leading Apigee API proxy CI/CD, hybrid deployments, and platform automation. Developer enablement & security-by-default.',
      highlights: [
        'Apigee hybrid deployment pipelines with Jenkins & GitLab','Environment-level config promotion & secrets automation','Standardized branching & release strategy (dev → QA → pre-prod → prod)'
      ]
    },
    {
      year: '2023',
      role: 'DevOps Specialist',
      company: 'QuickLifeSolutions',
      period: '2023 — Present',
      summary: 'Built automation & data products: scrapers, AI agents, and cloud-native services for clients.',
      highlights: [
        'Apify actors: Upwork, Google Maps, LinkedIn, Google Hotels, Bing Deals, BestBuy Products','Residential proxy integration & rate-limit resilient crawlers','End-to-end CI/CD with IaC and Kubernetes']
    },
    {
      year: '2016',
      role: 'DevOps / Platform Engineering',
      company: 'Various',
      period: '2016 — 2023',
      summary: 'Hands-on with AWS & Azure, containerization, infra automation, and secure pipelines.',
      highlights: [
        'Implemented IAM, WAF, GuardDuty; cost & capacity optimization','Git-integrated build & release workflows (Jenkins, CodePipeline)','K8s with Helm; blue/green & canary deployments']
    }
  ],
  projects: [
    {
      title: 'CloudWatch Copilot (SaaS)',
      description: 'AI-powered AWS monitoring & self-healing: anomaly detection, runbook actions, and chat-based incident workflows.',
      tags: ['AWS', 'CloudWatch', 'EventBridge', 'Lambda', 'IaC', 'AI'],
      href: 'https://quicklifesolutions.com',
      repo: ''
    },
    {
      title: 'Apify · Upwork Job Scraper',
      description: 'Reliable actor scraping Upwork listings with pagination, anti-blocking, and JSON/CSV outputs for lead gen.',
      tags: ['Apify', 'Crawlee', 'Puppeteer', 'Proxies'],
      href: 'https://apify.com/dainty_screw',
      repo: ''
    },
    {
      title: 'LinkedIn Email Scraper (Google search assisted)',
      description: 'Finds emails from specific LinkedIn profiles via SERP strategies, with rotating residential proxies.',
      tags: ['Apify', 'Crawlee', 'Puppeteer', 'SERP'],
      href: 'https://apify.com/dainty_screw',
      repo: ''
    },
    {
      title: 'Google Hotels Scraper (SEO-optimized rewrite)',
      description: 'Refactored input/output, added limiters (maxPages/maxResults), and improved data quality for SEO.',
      tags: ['Apify', 'Puppeteer', 'Data Quality'],
      href: 'https://apify.com/dainty_screw',
      repo: ''
    },
    {
      title: 'Bing Daily Discounts Scraper',
      description: 'Daily deals collector built on Crawlee + Chrome template with resilient scheduling.',
      tags: ['Apify', 'Crawlee', 'Chrome'],
      href: 'https://apify.com/dainty_screw',
      repo: ''
    },
    {
      title: 'DevOps Learning Lab (Interactive)',
      description: 'Design for a full-stack DevOps self-learning platform with browser shell + quizzes.',
      tags: ['K8s', 'Terraform', 'Jenkins', 'React'],
      href: 'https://quicklifesolutions.com',
      repo: ''
    },
    {
      title: 'Telegram Scraper Toolkit',
      description: 'Node + Apify toolkit for channel/user scraping with safe automations.',
      tags: ['Node.js', 'Apify', 'Automation'],
      href: 'https://quicklifesolutions.com',
      repo: ''
    },
    {
      title: 'YouTube Transcriber + Summarizer',
      description: 'Automates transcript retrieval with structured summaries for faster learning.',
      tags: ['YouTube API', 'Node', 'OpenAI'],
      href: 'https://quicklifesolutions.com',
      repo: ''
    }
  ],
  links: {
    primary: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/chaitanyamelam/' },
      { label: 'Website', href: 'https://quicklifesolutions.com' },
      { label: 'Apify Actors', href: 'https://apify.com/dainty_screw' }
    ],
    network: [
      { label: 'YouTube', href: 'https://www.youtube.com/@CodeMaster-421' },
      { label: 'Instagram', href: 'https://www.instagram.com/quicklifesolutionsofficial/' },
      { label: 'AI Newsletter', href: 'https://sendfox.com/quicklifesolutions' },
      { label: 'Free Consultation', href: 'https://tidycal.com/quicklifesolutions/free-consultation' },
      { label: 'More Tools (Apify)', href: 'https://apify.com/dainty_screw' },
      { label: 'Discord (Support)', href: 'https://discord.gg/2WGj2PDmHb' },
      { label: 'Email', href: 'mailto:codemasterdevops@gmail.com' }
    ]
  }
}

export default data