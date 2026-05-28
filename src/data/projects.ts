export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'SCADA' | 'PLC' | 'IoT' | 'Software' | 'Dashboard' | 'Integration';
  techStack: string[];
  images: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'silo-dryer-padang',
    title: 'Silo-Dryer Project | Padang',
    description:
      'Developed PLC programs for automatic weight batching, intake-dryer-silo routing, and interlocking. Designed SCADA systems for real-time control, visualization, and automated reporting. Engineered network architectures and integrated platforms with databases.',
    category: 'Integration',
    techStack: [
      'PLC Programming',
      'SCADA',
      'Networking',
      'Database Integration',
    ],
    images: ['/projects/Silo_Dryer.png', '/projects/Silo_Dryer_2.jpg'],
  },

  {
    id: 'feedmill-padang',
    title: 'Feedmill Project | Padang',
    description:
      'Developed PLC logic for automatic routing of intake-hammermill-pelletmill-packing and VFD/VSD control. Implemented SCADA systems for continuous monitoring and created real-time dashboards using Node-RED and Grafana.',
    category: 'SCADA',
    techStack: [
      'PLC Logic',
      'SCADA',
      'Node-RED',
      'Grafana',
      'VFD/VSD',
    ],
    images: ['/projects/Feedmill.png', '/projects/Feedmill_2.jpg'],
  },

  {
    id: 'automatic-bulk-sampler',
    title: 'Automatic Bulk Sampler | Multiple Locations',
    description:
      'Supervised installation and optimized instrumentation across 6 locations (Demak, Semarang, Padang, Krian, Cirebon, Gorontalo). Updated PLC/SCADA programs and integrated sampler automation with databases and networks.',
    category: 'PLC',
    techStack: [
      'Instrumentation',
      'PLC/SCADA',
      'Calibration',
      'System Integration',
    ],
    images: ['/projects/ABS.jpg'],
  },

  {
    id: 'production-dashboard-system',
    title: 'Production Dashboard System',
    description:
      'Designed and developed real-time production dashboards for monitoring machine status, production performance, alarms, and operational KPIs. Integrated PLC, SQL databases, Node-RED, and Grafana to provide centralized plant visibility and reporting.',
    category: 'Dashboard',
    techStack: [
      'Node-RED',
      'Grafana',
      'SQL Server',
      'PLC Integration',
      'REST API',
      'Real-time Monitoring',
    ],
    images: [
      '/projects/Production_Dashboard_1.png',
      '/projects/Production_Dashboard_2.png',
      '/projects/Production_Dashboard_3.png',
    ],
  },

  {
    id: 'power-meter-dashboard',
    title: 'Power Meter Monitoring Dashboard',
    description:
      'Built a real-time power monitoring dashboard for electrical systems and cubicles. Integrated power meters with SCADA and database systems to visualize voltage, current, power consumption, frequency, and energy usage analytics.',
    category: 'Dashboard',
    techStack: [
      'Grafana',
      'Modbus TCP/IP',
      'Power Meter Integration',
      'SQL Database',
      'SCADA',
      'Electrical Monitoring',
    ],
    images: [
      '/projects/Power_Meter_1.png',
      '/projects/Power_Meter_2.png',
    ],
  },

  {
    id: 'plc-protocol-bridge',
    title: 'PLC Protocol Bridge Application',
    description:
      'Developed a protocol bridge application for communication between different industrial devices and platforms. Implemented data exchange between PLCs, OPC servers, databases, and external applications using industrial communication protocols and REST APIs.',
    category: 'Software',
    techStack: [
      'Python',
      'OPC DA/UA',
      'Modbus TCP',
      'REST API',
      'SQL Server',
      'Industrial Communication',
    ],
    images: [
      '/projects/PLC_Bridge_1.png',
      '/projects/PLC_Bridge_2.png',
    ],
  },
];