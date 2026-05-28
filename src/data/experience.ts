export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Central Supervisor Automation Engineer',
    company: 'PT. Charoen Pokphand Indonesia (Jakarta, Indonesia)',
    period: 'Oct 2022 - Present',
    description: [
      'Developed and optimized PLC programs for Schneider M580, M241, and Allen-Bradley CompactLogix 5380, Siemens S7-1200/1500 enhancing efficiency by 30%.',
      'Designed and deployed HMI/SCADA systems using EcoStruxure Machine SCADA Expert, AVEVA InTouch HMI, and Vijeo Designer, reducing operator response time by 25%.',
      'Integrated PLCs, SCADA, databases, and ERP systems, improving data accuracy by 98% and enabling real-time monitoring.',
      'Led and supervised 15+ automation projects, managing cross-functional teams and ensuring zero critical installation errors.',
      'Conducted system commissioning across all CPI feedmill factories in Indonesia, ensuring compliance with safety and operational standards.'
    ],
    tech: ['Schneider M580/M241', 'AB CompactLogix 5380', 'Siemens S7-1200/1500', 'AVEVA InTouch', 'ERP Systems'],
  },
  {
    id: 'exp-2',
    role: 'Internship (Automation)',
    company: 'PT. Kanca April Nusantara (Surabaya, Indonesia)',
    period: 'Oct 2021 - Dec 2021',
    description: [
      'Designed and assembled control panel wiring, reducing wiring faults by 30% through standardized layout techniques.',
      'Programmed Omron PLC CP1E series for bundle stacker machines, optimizing workflow and increasing efficiency by 25%.',
      'Installed and calibrated sensors and actuators, improving machine precision by 20%.',
      'Configured INVT & Schneider inverters, achieving up to 15% energy savings through optimized motor control.'
    ],
    tech: ['Omron PLC CP1E', 'INVT Inverters', 'Schneider Inverters', 'Control Panel Wiring'],
  },
  {
    id: 'exp-3',
    role: 'Internship (Automation)',
    company: 'PT. Oriental Abadi Indonesia (Surabaya, Indonesia)',
    period: 'Sep 2021',
    description: [
      'Installed and tested Mitsubishi PLC FX3U series wiring, ensuring 100% compliance with safety standards.',
      'Developed Mitsubishi PLC programs, streamlining automation processes and reducing manual intervention by 25%.',
      'Designed Mitsubishi HMI interfaces, improving user experience and reducing operational errors by 20%.',
      'Contributed to IoT projects, enhancing connectivity and increasing data accuracy by 30%.'
    ],
    tech: ['Mitsubishi PLC FX3U', 'Mitsubishi HMI', 'IoT Connectivity', 'Electrical Wiring'],
  },
  {
    id: 'exp-4',
    role: 'Electrical Repair Technician',
    company: 'Telkom MSC Area V Jatim (Surabaya, Indonesia)',
    period: 'Feb 2017 - Feb 2018',
    description: [
      'Repaired and tested Access Points and Optical Network Terminals (ONT), ensuring 99% uptime.',
      'Maintained and repaired Power Supply Units (PSU), preventing failures and reducing downtime by 40%.',
      'Dismantled and handled Telkomsel BTS towers safely, adhering to 100% standard compliance for electrical safety.',
      'Diagnosed and resolved network failures in 200+ devices, improving network stability by 15%.'
    ],
    tech: ['Access Points', 'Optical Network Terminals (ONT)', 'Power Supply Units', 'BTS Towers'],
  },
  {
    id: 'edu-1',
    role: 'Bachelor of Applied Engineering Automation Engineering',
    company: 'Politeknik Perkapalan Negeri Surabaya (GPA: 3.43/4.00)',
    period: 'Sep 2018 - Sep 2022',
    description: [
      'Focused on industrial automation, PLC programming, SCADA systems, and industrial IoT.',
      'Certified in BNSP Industrial Automation System Design Expertise Competency.',
      'Recipients of Incentives for the Vocational Student Entrepreneurship Program (PWMV) Field (IT) (2021).'
    ],
    tech: ['Automation Engineering', 'Industrial IoT', 'System Design'],
  },
  {
    id: 'edu-2',
    role: 'Diploma 1 Audio Video Engineering (Electro)',
    company: 'SMK Negeri 5 Surabaya',
    period: 'Sep 2013 - Sep 2017',
    description: [
      'Specialized in audio-video engineering and basic electronics.'
    ],
    tech: ['Audio Video Engineering', 'Electronics'],
  }
];
