export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'SCADA' | 'PLC' | 'IoT' | 'Software' | 'Dashboard' | 'Integration';
  date: string; // Format: YYYY-MM
  techStack: string[];
  images: string[];
  responsibilities?: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'silo-dryer-maros',
    title: 'Silo-Dryer Project | Charoen Pokphand Indonesia Maros',
    description:
      'Automation and integration project for silo and dryer operations to improve material handling efficiency, production visibility, and process reliability.',
    responsibilities: [
      'Designed PLC logic for automatic weight batching and process interlocking',
      'Developed intake-dryer-silo automatic routing system',
      'Created SCADA system for real-time monitoring and control',
      'Implemented alarm, trend, and reporting features on SCADA',
      'Integrated PLC and SCADA systems with SQL databases',
      'Designed industrial network architecture and communication infrastructure',
      'Performed system commissioning, troubleshooting, and optimization',
    ],
    category: 'Integration',
    date: '2024-05',
    techStack: [
      'PLC Programming',
      'SCADA',
      'Networking',
      'Database Integration',
    ],
    images: [
      '/projects/Silo_Dryer_1.png',
      '/projects/Silo_Dryer_2.jpg',
      '/projects/Silo_Dryer_3.jpg',
      '/projects/Silo_Dryer_4.png',
      '/projects/Silo_Dryer_5.jpg'
    ],
  },

  {
    id: 'feedmill-padang',
    title: 'Feedmill Project | Charoen Pokphand Indonesia Padang',
    description:
      'Automation project for feedmill production processes covering intake, grinding, pelleting, and packing systems with centralized monitoring and operational dashboards.',
    responsibilities: [
      'Developed PLC logic for automatic routing between production processes',
      'Configured VFD/VSD control for process equipment and motors',
      'Designed SCADA system for plant monitoring and operation control',
      'Created production dashboards using Node-RED and Grafana',
      'Integrated PLC data with SQL databases for reporting and analytics',
      'Implemented alarm and operational monitoring systems',
      'Supported system testing, commissioning, and troubleshooting',
    ],
    category: 'SCADA',
    date: '2024-03',
    techStack: [
      'PLC Logic',
      'SCADA',
      'Node-RED',
      'Grafana',
      'VFD/VSD',
    ],
    images: [
      '/projects/Feedmill_1.png',
      '/projects/Feedmill_2.jpg',
      '/projects/Feedmill_3.jpeg',
      '/projects/Feedmill_4.jpeg',
      '/projects/Feedmill_5.jpg'
    ],
  },

  {
    id: 'automatic-bulk-sampler',
    title: 'Automatic Bulk Sampler | Multiple Locations',
    description:
      'Instrumentation and automation standardization project for automatic bulk sampler systems deployed across multiple factory locations.',
    responsibilities: [
      'Supervised instrumentation installation at multiple factory locations',
      'Performed calibration and validation of field instruments',
      'Updated PLC and SCADA programs for sampler automation systems',
      'Integrated sampler systems with databases and plant networks',
      'Conducted system testing and commissioning activities',
      'Provided troubleshooting and system performance optimization',
      'Coordinated implementation standards across all project sites',
    ],
    category: 'PLC',
    date: '2023-11',
    techStack: [
      'Instrumentation',
      'PLC/SCADA',
      'Calibration',
      'System Integration',
    ],
    images: [
      '/projects/ABS_1.jpg',
      '/projects/ABS_2.png',
      '/projects/ABS_3.png',
      '/projects/ABS_4.png',
      '/projects/ABS_5.jpg'
    ],
  },

  {
    id: 'dashboard-dryer-system',
    title: 'Dashboard For Dryer System',
    description:
      'Centralized monitoring platform for real-time production visibility, machine performance tracking, and operational KPI analysis.',
    responsibilities: [
      'Designed and developed real-time production dashboards',
      'Integrated PLC data with SQL Server databases',
      'Built data processing workflows using Node-RED',
      'Developed visualization and analytics dashboards in Grafana',
      'Implemented machine status, alarm, and KPI monitoring systems',
      'Created REST API integration for external data access',
      'Optimized dashboard performance and data reliability',
    ],
    category: 'Dashboard',
    date: '2024-02 - 2025-05',
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
      'Energy monitoring system designed to provide real-time electrical parameter visualization and power consumption analysis for industrial facilities.',
    responsibilities: [
      'Integrated power meters using Modbus TCP/IP communication',
      'Developed real-time electrical monitoring dashboards in Grafana',
      'Collected and stored electrical data into SQL databases',
      'Monitored voltage, current, power, frequency, and energy consumption',
      'Designed dashboard layouts for electrical cubicles and distribution systems',
      'Implemented historical trends and energy usage analytics',
      'Supported troubleshooting and system validation activities',
    ],
    category: 'Dashboard',
    date: '2026-05',
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
      '/projects/Power_Meter_3.png',
      '/projects/Power_Meter_4.png'
    ],
  },

  {
    id: 'plc-protocol-bridge',
    title: 'PLC Protocol Bridge Application',
    description:
      'Industrial communication middleware application designed to bridge data exchange between PLCs, OPC servers, and external systems.',
    responsibilities: [
      'Developed industrial protocol bridge applications using Python',
      'Implemented communication between PLCs and OPC DA/UA servers',
      'Integrated Modbus TCP devices with external applications',
      'Built REST API services for data exchange and system integration',
      'Developed real-time data logging and synchronization systems',
      'Integrated industrial data with SQL Server databases',
      'Performed communication troubleshooting and system optimization',
    ],
    category: 'Software',
    date: '2026-03',
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

  {
    id: 'medicine-weighing-web-interface',
    title: 'Medicine Weighing and Verification System',
    description:
      'Developed a barcode verification and weighing system to prevent operator mistakes during medicine pouring processes by ensuring the medicine formula matches the active feed formula before dispensing.',
    responsibilities: [
      'Developed a web-based interface using Python for weighing and verification processes',
      'Designed database architecture for historical weighing and transaction records',
      'Integrated the system with Bench Scale BBA231-3CC150A/S using RS232 serial communication',
      'Implemented barcode verification to validate feed and medicine formula matching',
      'Integrated the system with printers for automatic weighing report printing',
      'Performed system testing and validation to improve operational safety and accuracy',
    ],
    category: 'Software',
    date: '2026-05',
    techStack: [
      'Python',
      'Web Interface',
      'SQL Database',
      'RS232 Communication',
      'Barcode System',
      'Industrial Integration',
    ],
    images: [
      '/projects/Medicine_Weighing_1.png',
      '/projects/Medicine_Weighing_2.png'
    ],
  },

  {
    id: 'feedmill-maros',
    title: 'New Feedmill Factory Project | Charoen Pokphand Indonesia Maros',
    description:
      'Automation and control system development project for a new feedmill factory to support production expansion and increasing market demand.',
    responsibilities: [
      'Designed control system architecture for the silo-dryer area',
      'Developed industrial network topology for silo-dryer operations',
      'Developed PLC, SCADA, and database systems for silo-dryer automation',
      'Coordinated automation scope and technical discussions with FAMSUN vendors from China',
      'Supervised field installation activities for automation and control systems',
      'Performed machine commissioning together with vendors, project teams, and production teams',
      'Integrated automation systems with SAP ERP systems to ensure reliable data communication',
      'Collaborated with cross-functional teams to ensure successful project execution and startup',
    ],
    category: 'Integration',
    date: '2025-10 - Present',
    techStack: [
      'PLC Programming',
      'SCADA',
      'Industrial Networking',
      'Database Integration',
      'SAP Integration',
      'System Commissioning',
    ],
    images: [
      '/projects/Maros_Feedmill_1.png',
      '/projects/Maros_Feedmill_2.png',
      '/projects/Maros_Feedmill_3.jpg',
      '/projects/Maros_Feedmill_4.png',
      '/projects/Maros_Feedmill_5.jpg'
    ],
  },

  {
    id: 'auto-moisture-static-sampling',
    title: 'Auto Moisture Static Sampling for Dryer Process | Charoen Pokphand Indonesia Makassar',
    description:
      'Automation project for real-time corn moisture sampling and monitoring in dryer processes to replace manual sampling methods and improve process efficiency, data accuracy, and operational visibility.',
    responsibilities: [
      'Developed PLC programs for automatic sampling, moisture scanning, cleaning, and purging sequences',
      'Designed and developed SCADA interfaces using EcoStruxure Machine SCADA Expert',
      'Integrated PLC systems with Hydronix Hydro-Mix HMXT-01 sensors using Modbus RTU over TCP communication via ZLAN 5143D',
      'Implemented real-time moisture monitoring and process visualization systems',
      'Integrated moisture reading data with databases for SAP transactions and reporting purposes',
      'Performed system testing, troubleshooting, and process optimization',
    ],
    category: 'Integration',
    date: '2025-08',
    techStack: [
      'PLC Programming',
      'EcoStruxure Machine SCADA Expert',
      'Modbus RTU over TCP',
      'Hydronix Hydro-Mix HMXT-01',
      'SQL Database',
      'SAP Integration',
    ],
    images: [
      '/projects/Auto_Moisture_Static_1.jpeg',
      '/projects/Auto_Moisture_Static_2.png',
      '/projects/Auto_Moisture_Static_3.png',
      '/projects/Auto_Moisture_Static_4.png'
    ],
  },

  {
    id: 'mobile-auto-moisture-sampler',
    title: 'Mobile Auto Moisture Sampler | Charoen Pokphand Indonesia Padang',
    description:
      'Automation project for moisture sampling during corn unloading processes to improve sampling accuracy, reduce manual recording errors, and accelerate operational processes.',
    responsibilities: [
      'Developed PLC programs using Schneider M221 for automatic sampling, moisture scanning, cleaning, and purging sequences',
      'Integrated PLC processes with VB.NET-based applications for sample data recording and monitoring',
      'Coordinated and supervised electrical, mechanical, and network installation activities with project teams',
      'Performed testing and commissioning activities together with Quality Control teams',
      'Validated system performance to ensure compliance with operational and quality control standards',
      'Supported troubleshooting and system optimization during implementation',
    ],
    category: 'PLC',
    date: '2025-05',
    techStack: [
      'Schneider M221',
      'PLC Programming',
      'VB.NET',
      'Moisture Monitoring',
      'Industrial Automation',
      'System Commissioning',
    ],
    images: [
      '/projects/Mobile_Moisture_1.jpeg',
      '/projects/Mobile_Moisture_2.png',
      '/projects/Mobile_Moisture_3.jpg',
      '/projects/Mobile_Moisture_4.jpg'
    ],
  },

  {
    id: 'wastewater-treatment-automation',
    title: 'Wastewater Treatment Plant Automation | Charoen Pokphand Indonesia Padang',
    description:
      'Automation project for wastewater treatment operations aimed at replacing manual processes with an automated control system, improving operational efficiency, process consistency, and environmental compliance.',
    responsibilities: [
      'Developed PLC programs for wastewater treatment process automation, including wastewater transfer, pH stabilization, chemical dosing, and final discharge sequences',
      'Designed and developed a web-based SCADA system using Python, Flask, and Dash for real-time monitoring and control',
      'Integrated PLC systems with LUTRON PPH-2108 pH sensors using Modbus RTU over TCP communication via ZLAN 5143D',
      'Implemented automatic pH monitoring and chemical dosing control to maintain wastewater quality standards',
      'Developed event and alarm logging systems for operational traceability and reporting purposes',
      'Integrated process data and alarm history with databases for reporting and analysis',
      'Performed system testing, commissioning, troubleshooting, and process optimization',
    ],
    category: 'SCADA',
    date: '2024-10',
    techStack: [
      'PLC Programming',
      'Python',
      'Flask',
      'Dash',
      'Modbus RTU over TCP',
      'LUTRON PPH-2108',
      'SQL Database',
      'Web-Based SCADA',
    ],
    images: [
      '/projects/WWTP_1.png',
      '/projects/WWTP_2.png',
      '/projects/WWTP_3.jpg',
      '/projects/WWTP_4.jpg'
    ],
  },

  {
    id: 'production-videotron-information-display',
    title: 'Production Videotron Information System | Charoen Pokphand Indonesia Padang',
    description:
      'Real-time production information display system developed to improve synchronization between medicine dosing activities and mixer batching operations while providing production visibility for packing and palletizing processes.',
    responsibilities: [
      'Designed industrial network architecture and communication topology for the production information display system',
      'Supervised videotron installation and network infrastructure deployment',
      'Conducted system testing, validation, and operational trials prior to production implementation',
      'Integrated real-time production data from SCADA systems into SQL databases',
      'Developed data synchronization mechanisms between SCADA systems and videotron displays',
      'Implemented real-time visualization of active feed formulas and production status for packing operations',
      'Collaborated with production teams to ensure the displayed information met operational requirements',
    ],
    category: 'Integration',
    date: '2024-12',
    techStack: [
      'SCADA Integration',
      'SQL Database',
      'Industrial Networking',
      'Real-time Data Integration',
      'Videotron System',
      'Production Monitoring',
    ],
    images: [
      '/projects/Videotron_1.png',
      '/projects/Videotron_2.jpg',
      '/projects/Videotron_3.jpg',
      '/projects/Videotron_4.jpg'
    ],
  },

];