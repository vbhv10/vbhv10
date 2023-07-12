export const projects = [
    {
      id: 1,
      name: 'WebApp (CloudOps)',
      date: '2023',
      tech: ['EC2', 'VPC', 'CloudWatch', 'IAM', 'RDS', 'S3', 'Terraform', 'Packer', 'Python', 'PostgreSQL', 'Django' ],
      tagline:
        'A highly scalable RESTful API for a Cloud Native application with Github Actions using Python Django and Postgres. Deployed using AWS Terraform IaC integrating S3, RDS, Cloudwatch and EC2 using a custom AMI built using Packer.',
      source: 'https://github.com/orgs/VbhvCloud/repositories',
      
    },
    {
      id: 2,
      name: 'Cosmos Modern Data Stack',
      date: '2022',
      tech: ['Kubernetes', 'Terraform', 'Gitlab CI', 'Python', 'ELT', 'Airflow', 'Airbyte', 'DBT', 'Superset', 'Bigquery', 'Data Pipeline'],
      tagline: 'This project optimized data processing and storing with Airbyte, Airflow, DBT. Custom Python connector reduced GCP resources. Airflow orchestrated the workflow, DBT transformed data, and Terraform deployed infrastructure on GKE. Custom VPC, IAP, Ingress ensured secure access. HashiCorp Vault stored login information for added security.'
    },
    {
      id: 3,
      name: 'Greenpeace Cosmos',
      date: '2021-2022',
      tech: ['BigQuery', 'Terraform', 'Gitlab CI', 'Python', 'Firestore', 'Cloud PubSub', 'Cloud Scheduler'],
      tagline: 'In this project, Cloud Functions were created to extract, transform, and insert data into BigQuery. GitLab CI facilitated the CI/CD pipeline, and Terraform was used for deployment on GCP. PubSub and Cloud Scheduler activated the functions, while Firestore tracked their state. Additionally, Hubspot petition APIs were deployed on multiple Cloud Run applications for different regions.',
    },
    {
      id: 4,
      name: "DigiValet Utilities (DVU)",
      date: '2021',
      tech: ['Python', 'Django', 'Docker', 'Vault', 'LDAP', 'SFTP', 'Shell Scripting', 'Postgres', 'Celery'],
      tagline: "Proposed and architected to transport data between remote servers and verify their processes and data. The setup time for servers was reduced from two days of manual work to just 20 minutes through automation. The project was led with a server admin team",
      source: 'https://github.com/vbhv10/code-samples/tree/main/dvu',
    },
    {
      id: 5,
      name: 'Kong API Gateway',
      date: '2021',
      tech: ['Kong', 'Hashicorp Valut', 'Load balancing'],
      tagline: 'Enacted Kong API gateway with features Outh2.0 authentication, load balancer, and Authorization. It has slack alerting with system service and logging over Loki and visualizing with Grafana.'
    },
    {
      id: 6,
      name: 'MARS',
      date: '2020-2021',
      tech: ['Django', 'Bigquery', 'ELK Stack', 'HTML', 'CSS', 'JavaScript', 'SMTP', 'Docker'],
      tagline:
        'System to analyze data from logs, databases, and iPad navigation data on Firebase. APIs were exposed to integrate with third-party services and the system was deployed on a server with Docker. ELK stack, BigQuery Library, MariaDB, and Celery were utilized with Django Framework.'
    },
    {
      id: 7,
      name: 'DCT (Cloud and on-site)',
      date: '2020-2021',
      tech: ['Django', 'SSH Operator', 'Web UI', 'SMTP', 'Docker'],
      tagline: 'The system services start, stop, restart, and status functionalities with a one-click solution through the admin panel on the server. Implemented system lock security module to reduce security risks and assist server admins. Collaborated with the iOS team resulted in upgrading the products internal server configurations tool'
    },
    {
        id: 8,
        name: 'DigiMailer',
        date: '2020',
        tech: ['Python', 'Docker', 'Django', 'SMTP', ],
        tagline: 'Custom Mail Service deployed over the cloud and attached with custom local Mail server to perform Mail actions for all the properties associated with Digivalet'
    },
    {
      id: 9,
      name: 'Snap Sponsor',
      date: '2020-Present',
      tech: ['Django', 'MongoDB', 'APIs'],
      tagline: "It's a personal endeavour to give sponsors and sponsees a forum. iOS is used to construct the front end, and Django and a MongoDB database drive the back end.",
      source: 'https://github.com/vbhv10/code-samples/tree/main/snap%20sponsor',
    },
  ];
  