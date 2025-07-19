export default {
  title: 'How It Works',
  items: [
    {
      step: 'STEP 1',
      name: 'Choose Configuration',
      description:
        'Pick your desired VM count, machine type, cloud region, and honeypot type (e.g., SSH, HTTP, or custom).',
      children: [
        'Flexible virtual machine selection',
        'Regional cloud support',
        'Custom honeypot configurations',
        // 'Intuitive setup wizard',
      ],
    },
    {
      step: 'STEP 2',
      name: 'Deploy to the Cloud',
      description:
      `Click "Deploy".
      Your environment spins up automatically.
      Runs on your preferred cloud platform.`,
      children: [
        'One-click deployment',
        'GCP, AWS, Azure support',
        'Automated provisioning',
      ],
    },
    {
      step: 'STEP 3',
      name: 'Monitor & Analyze',
      description:
       `Access a centralized dashboard.
      Track attack data, system health, and uptime.
       Monitor overall performance in real time.`,
      children: [
        'Real-time attack insights',
        'Attack tracking & log management',
        'Visual dashboard for system metrics',
      ],
    },
  ],
}
