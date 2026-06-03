export interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'PLC Programming',
    skills: [
      { name: 'Schneider M580/M241/M221', level: 95 },
      { name: 'Siemens S7-1200/1500', level: 90 },
      { name: 'AB CompactLogix 5380', level: 85 },
      { name: 'Omron & Mitsubishi', level: 85 },
    ],
  },
  {
    name: 'SCADA & HMI',
    skills: [
      { name: 'EcoStruxure Machine SCADA Expert', level: 90 },
      { name: 'AVEVA InTouch / Edge', level: 85 },
      { name: 'Vijeo Designer, Machine Expert', level: 90 },
      { name: 'GX-Designer', level: 85 },
    ],
  },
  {
    name: 'Software & Database',
    skills: [
      { name: 'Node-RED & Grafana', level: 85 },
      { name: 'Python & VB.NET', level: 80 },
      { name: 'SQL Server & MySQL', level: 85 },
      { name: 'ERP Systems Integration', level: 80 },
    ],
  },
  {
    name: 'Industrial Network',
    skills: [
      { name: 'Modbus TCP/RTU', level: 95 },
      { name: 'EtherNet/IP, Profinet', level: 90 },
      { name: 'OPC DA/UA', level: 85 },
      { name: 'Instrumentation & Wiring', level: 90 },
    ],
  },
];
