import { Box } from '@chakra-ui/react'

import * as React from 'react'

const faq = {
  title: 'Frequently Asked Questions',
  items: [
    {
      q: 'What is the main purpose of this platform?',
      a: (
        <>
          This platform enables users to deploy honeypots and deception
          environments in the cloud. It helps detect, analyze, and respond to
          cyber threats by attracting attackers to decoy systems and collecting
          real-time threat intelligence.
        </>
      ),
    },
    {
      q: 'Which cloud providers are supported?',
      a: (
        <>
          The platform supports deployment on all major cloud providers
          including
          <strong> AWS, GCP, and Azure</strong>. It uses Terraform or Pulumi to
          provision resources via Infrastructure-as-Code.
        </>
      ),
    },
    {
      q: 'What kind of threats can this platform detect?',
      a: (
        <>
          It detects threats like{' '}
          <strong>unauthorized access, port scanning, malware injection</strong>
          , and suspicious lateral movement. Real-time alerts and dashboards
          help track these incidents efficiently.
        </>
      ),
    },
    {
      q: 'Does the platform support team collaboration?',
      a: (
        <>
          Yes. The platform is designed for security teams, allowing{' '}
          <strong>user roles, shared dashboards,</strong>
          and collaborative investigation of threat data across cloud accounts.
        </>
      ),
    },
  ],
}

export default faq
