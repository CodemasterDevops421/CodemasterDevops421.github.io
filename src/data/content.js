const data = {
  profile: {
    name: 'Melam Chaitanya Kumar',
    tagline: 'Senior DevOps & Cloud Security Engineer · AWS · Azure · Kubernetes · Terraform · CI/CD',
    about1: 'Senior DevOps and Cloud Security Engineer with 10 years of experience in cloud infrastructure, automation, and security.',
    about2: 'Specialized in AWS, Azure, Kubernetes (EKS/AKS), Terraform, and CI/CD pipelines. Skilled in Linux system administration, PostgreSQL, Kafka streaming, and Hazelcast caching.'
  },
  skills: {
    'Cloud Platforms': [
      'AWS (EKS, EC2, S3, RDS, IAM)',
      'Azure (AKS, Storage, SQL)'
    ],
    'Kubernetes': [
      'AWS EKS',
      'Azure AKS',
      'Helm',
      'Kustomize',
      'ArgoCD'
    ],
    'Infrastructure Automation': [
      'Terraform',
      'Ansible',
      'CloudFormation'
    ],
    'Databases': [
      'PostgreSQL',
      'AWS RDS',
      'Azure SQL',
      'MongoDB'
    ],
    'Streaming & Caching': [
      'Kafka',
      'Hazelcast'
    ],
    'Operating Systems': [
      'Linux (Ubuntu, CentOS, RHEL)',
      'Windows'
    ],
    'DevOps Tools': [
      'Jenkins',
      'GitHub Actions',
      'Azure DevOps'
    ],
    'Security': [
      'IAM',
      'Encryption',
      'Secrets Management'
    ],
    'Observability': [
      'Prometheus',
      'AWS CloudWatch'
    ]
  },
  experience: [
    {
      year: '2021',
      role: 'DevOps Specialist',
      company: 'PMAM IT Service Private Limited',
      period: 'Jan 2021 – Present',
      summary: 'Designed and deployed Kubernetes clusters and automated cloud infrastructure across AWS and Azure.',
      highlights: [
        'Designed and deployed Kubernetes clusters on AWS EKS and Azure AKS for microservices.',
        'Automated EC2 instance provisioning and security hardening using Terraform and Ansible.',
        'Configured and optimized PostgreSQL (AWS RDS, Azure SQL) for high availability.',
        'Integrated Kafka for real-time streaming and Hazelcast caching for high-performance applications.',
        'Managed Azure Blob Storage and AWS S3 for scalable object storage.',
        'Developed CI/CD pipelines using Jenkins and Azure DevOps to automate deployments.',
        'Implemented role-based access controls (RBAC) and IAM policies for secure cloud operations.'
      ]
    },
    {
      year: '2015',
      role: 'DevOps Engineer',
      company: "Kohl's Department Stores (Reva Consulting Inc)",
      period: 'Sept 2015 – May 2020',
      summary: 'Managed AWS infrastructure and automated deployments with Terraform and Jenkins.',
      highlights: [
        'Deployed AWS EKS and EC2-based applications with Terraform.',
        'Automated Terraform-based deployments with Jenkins pipelines.',
        'Managed Git, Jenkins, and Kubernetes for automated build and deployment.',
        'Integrated Kafka-based data pipelines for log aggregation and streaming.',
        'Configured Nexus Artifactory for storing artifacts and dependencies.',
        'Developed Ansible playbooks for infrastructure provisioning.'
      ]
    },
    {
      year: '2014',
      role: 'Middleware Engineer',
      company: 'Reva Consulting Inc',
      period: 'Feb 2014 – Sept 2015',
      summary: 'Supported Linux-based WebLogic middleware with automation and security enhancements.',
      highlights: [
        'Managed Linux-based WebLogic servers for middleware applications.',
        'Created Jenkins master-slave configurations for optimized builds.',
        'Implemented SSL security and high availability for WebLogic.',
        'Developed Bash and Python scripts for automation.'
      ]
    }
  ],
  projects: [
    {
      title: 'AWS EKS & VPC Setup',
      description: 'Built AWS EKS clusters with Terraform, configured networking, IAM roles, and Auto Scaling.',
      tags: ['AWS', 'EKS', 'Terraform', 'VPC', 'IAM'],
      href: '',
      repo: ''
    },
    {
      title: 'AWS EC2 & Storage Optimization',
      description: 'Automated EC2 provisioning with security groups and S3 lifecycle policies.',
      tags: ['AWS', 'EC2', 'Terraform', 'S3'],
      href: '',
      repo: ''
    },
    {
      title: 'Kafka Streaming with AWS MSK',
      description: 'Deployed Kafka clusters on AWS MSK for log processing and real-time analytics.',
      tags: ['AWS', 'MSK', 'Kafka', 'Streaming'],
      href: '',
      repo: ''
    },
    {
      title: 'Azure Kubernetes (AKS) CI/CD Pipeline',
      description: 'Built AKS clusters and automated deployments using GitHub Actions and Helm.',
      tags: ['Azure', 'AKS', 'GitHub Actions', 'Helm', 'CI/CD'],
      href: '',
      repo: ''
    }
  ],
  links: {
    primary: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/chaitanyamelam/' },
      { label: 'GitHub', href: 'https://github.com/CodemasterDevops421' },
      { label: 'YouTube', href: 'https://www.youtube.com/@CodeMaster-421' },
      { label: 'Email', href: 'mailto:melamchaitanyakumar@gmail.com' },
      { label: 'Phone', href: 'tel:+916305161054' }
    ],
    network: []
  }
}

export default data

