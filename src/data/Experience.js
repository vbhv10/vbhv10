export const experience = [
    {
        id: 1,
        role: 'DevOps Engineer',
        company: 'Centric Software',
        period: 'May 2024 – Present',
        location: 'California, USA · Remote',
        points: [
            'Built a GitOps delivery platform on ArgoCD + Kargo backed by 40+ reusable Terraform modules, automating promotions across 4 domains and 21+ AWS accounts.',
            'Own the automated product installer pipeline (install4j + Jenkins) with unattended/console modes and multi-database support (SQL Server, Oracle).',
            'Designed an HCP Vault Dedicated platform and led a zero-downtime migration onto it, eliminating static credentials across all AWS accounts.',
            'Operate applications on Amazon EKS (Helm, ALB, DocumentDB, ElastiCache) and run fleet-wide cluster upgrades; built serverless services with AWS SAM + Lambda.',
        ],
    },
    {
        id: 2,
        role: 'DevOps Engineer',
        company: 'Deqode',
        period: 'Nov 2021 – Aug 2022',
        location: 'Indore, India',
        points: [
            'Designed a modern data stack that cut cloud resource use 3x, with a custom Python connector for Airbyte feeding BigQuery.',
            'Orchestrated workflows with Apache Airflow (Python DAGs) and transformed data with DBT over SSH-enabled instances.',
            'Deployed the full stack on Kubernetes (GKE) using Terraform, Helm, and GitLab CI; secured credentials with HashiCorp Vault.',
            'Built serverless ETL with GCP Cloud Functions, Pub/Sub, Cloud Scheduler, and Firestore for the Greenpeace Cosmos project.',
        ],
    },
    {
        id: 3,
        role: 'Python | DevOps Engineer',
        company: 'DigiValet',
        period: 'Aug 2020 – Oct 2021',
        location: 'Indore, India',
        points: [
            'Architected an automated server setup/data-transfer tool (Django, Paramiko, Celery), cutting setup from 2 days to 20 minutes.',
            'Built the MARS analytics platform with Docker, the ELK stack, BigQuery, and Celery for 30+ enterprise hospitality clients.',
            'Implemented a Kong API gateway (OAuth 2.0, load balancing) with Slack alerting, Loki logging, and Grafana dashboards.',
            'Designed centralized auth and key management with HashiCorp Vault and LDAP.',
        ],
    },
    {
        id: 4,
        role: 'Python Developer Intern',
        company: 'EngineerBabu',
        period: 'Feb 2020 – May 2020',
        location: 'Madhya Pradesh, India',
        points: [
            'Designed and managed RESTful services in Django, improving interoperability and user experience.',
            'Used AWS S3 for scalable file handling and administered EC2 instances with Nginx for performance and security.',
            'Integrated DocuSign for e-signatures and SendGrid for reliable transactional email.',
        ],
    },
];
