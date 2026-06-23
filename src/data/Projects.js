export const projects = [
    {
      id: 101,
      name: 'GitOps Delivery Platform',
      date: '2024 - Present',
      category: 'Professional',
      company: 'Centric Software',
      isPrivate: true,
      tech: ['ArgoCD', 'Kargo', 'Terraform', 'AWS', 'EKS', 'Kustomize', 'GitOps'],
      tagline:
        'A multi-account GitOps delivery platform for a SaaS PLM product, built on ArgoCD ApplicationSets and Kargo progressive delivery and backed by a library of 40+ reusable Terraform modules. Automates dev → qa → preprod → prod promotions across 4 domains and 21+ AWS accounts through a self-service model.',
    },
    {
      id: 102,
      name: 'C8 Product Installer Automation',
      date: '2024 - Present',
      category: 'Professional',
      company: 'Centric Software',
      isPrivate: true,
      tech: ['install4j', 'Jenkins', 'Java', 'SQL Server', 'Oracle', 'CI/CD', 'Shell'],
      tagline:
        'Automated cross-platform installer pipeline for an enterprise PLM product. Supports unattended and console install modes, multi-database setup (SQL Server, Oracle), and is hardened across hundreds of release builds via Jenkins.',
    },
    {
      id: 103,
      name: 'HCP Vault Dedicated Platform',
      date: '2025 - 2026',
      category: 'Professional',
      company: 'Centric Software',
      isPrivate: true,
      tech: ['HashiCorp Vault', 'Terraform', 'AWS', 'OIDC', 'EKS', 'Secrets Management'],
      tagline:
        'A HashiCorp Vault (HCP Vault Dedicated) platform with JWT/OIDC auth for private EKS clusters, DR replication, and Secrets Sync to AWS Secrets Manager via Workload Identity Federation. Led a zero-downtime migration onto it, eliminating static credentials across all AWS accounts.',
    },
    {
      id: 104,
      name: 'Aura Serverless Platform',
      date: '2025 - Present',
      category: 'Professional',
      company: 'Centric Software',
      isPrivate: true,
      tech: ['AWS SAM', 'Lambda', 'Python', 'TypeScript', 'Terraform', 'Event-Driven'],
      tagline:
        'An event-driven, serverless application platform for the innovation team, built with AWS SAM and Lambda using Python and TypeScript, with infrastructure managed in Terraform and local testing via LocalStack.',
    },
    {
      id: 1,
      name: 'Kubernetes DevOps Automation Suite',
      date: '2023',
      category: 'Personal',
      tech: ['Kubernetes', 'Jenkins', 'Kafka', 'Terraform', 'CI/CD', 'Packer', 'Python', 'PostgreSQL', 'Kuernetes Operator', 'Golang'],
      tagline:
        'This project showcases a comprehensive solution for automating the deployment of cloud-native applications. Leveraging Infrastructure as Code (IaC), Kubernetes, Helm charts, Continuous Integration/Continuous Deployment (CI/CD) pipelines, and modern DevOps practices, it streamlines development, deployment, and management processes.',
      source: 'https://github.com/vbhv10/Kubernetes-DevOps-Automation-Suite/',
      
    },
    {
      id: 2,
      name: 'CloudOps Automator',
      date: '2023',
      tech: ['EC2', 'VPC', 'CloudWatch', 'IAM', 'Lambda', 'S3', 'Terraform', 'Packer', 'Python', 'PostgreSQL', 'Django' ],
      tagline:
        'A highly scalable RESTful API for a Cloud Native application with Github Actions using Python Django and Postgres. Deployed using AWS Terraform IaC integrating S3, RDS, Cloudwatch and EC2 using a custom AMI built using Packer.',
      source: 'https://github.com/orgs/VbhvCloud/',
      
    },
    {
      id: 3,
      name: 'Cosmos Modern Data Stack',
      date: '2022',
      tech: ['Kubernetes', 'Terraform', 'Gitlab CI', 'Python', 'ELT', 'Airflow', 'Airbyte', 'DBT', 'Superset', 'Bigquery', 'Data Pipeline'],
      tagline: 'This project optimized data processing and storing with Airbyte, Airflow, DBT. Custom Python connector reduced GCP resources. Airflow orchestrated the workflow, DBT transformed data, and Terraform deployed infrastructure on GKE. Custom VPC, IAP, Ingress ensured secure access. HashiCorp Vault stored login information for added security.'
    },
    {
      id: 4,
      name: 'Greenpeace Cosmos',
      date: '2021-2022',
      tech: ['BigQuery', 'Terraform', 'Gitlab CI', 'Python', 'Firestore', 'Cloud PubSub', 'Cloud Scheduler'],
      tagline: 'In this project, Cloud Functions were created to extract, transform, and insert data into BigQuery. GitLab CI facilitated the CI/CD pipeline, and Terraform was used for deployment on GCP. PubSub and Cloud Scheduler activated the functions, while Firestore tracked their state. Additionally, Hubspot petition APIs were deployed on multiple Cloud Run applications for different regions.',
    },
    {
      id: 5,
      name: "DigiValet Utilities (DVU)",
      date: '2021',
      tech: ['Python', 'Django', 'Docker', 'Vault', 'LDAP', 'SFTP', 'Shell Scripting', 'Postgres', 'Celery'],
      tagline: "Proposed and architected to transport data between remote servers and verify their processes and data. The setup time for servers was reduced from two days of manual work to just 20 minutes through automation. The project was led with a server admin team",
      source: 'https://github.com/vbhv10/code-samples/tree/main/dvu',
    },
    {
      id: 6,
      name: 'Kong API Gateway',
      date: '2021',
      tech: ['Kong', 'Hashicorp Valut', 'Load balancing'],
      tagline: 'Enacted Kong API gateway with features Outh2.0 authentication, load balancer, and Authorization. It has slack alerting with system service and logging over Loki and visualizing with Grafana.'
    },
    {
      id: 7,
      name: 'MARS',
      date: '2020-2021',
      tech: ['Django', 'Bigquery', 'ELK Stack', 'HTML', 'CSS', 'JavaScript', 'SMTP', 'Docker'],
      tagline:
        'System to analyze data from logs, databases, and iPad navigation data on Firebase. APIs were exposed to integrate with third-party services and the system was deployed on a server with Docker. ELK stack, BigQuery Library, MariaDB, and Celery were utilized with Django Framework.'
    },
    {
      id: 8,
      name: 'DCT (Cloud and on-site)',
      date: '2020-2021',
      tech: ['Django', 'SSH Operator', 'Web UI', 'SMTP', 'Docker'],
      tagline: 'The system services start, stop, restart, and status functionalities with a one-click solution through the admin panel on the server. Implemented system lock security module to reduce security risks and assist server admins. Collaborated with the iOS team resulted in upgrading the products internal server configurations tool'
    },
    {
        id: 9,
        name: 'DigiMailer',
        date: '2020',
        tech: ['Python', 'Docker', 'Django', 'SMTP', ],
        tagline: 'Custom Mail Service deployed over the cloud and attached with custom local Mail server to perform Mail actions for all the properties associated with Digivalet'
    },
    {
      id: 10,
      name: 'Snap Sponsor',
      date: '2020-Present',
      tech: ['Django', 'MongoDB', 'APIs'],
      tagline: "It's a personal endeavour to give sponsors and sponsees a forum. iOS is used to construct the front end, and Django and a MongoDB database drive the back end.",
      source: 'https://github.com/vbhv10/code-samples/tree/main/snap%20sponsor',
    },
  ];
  