import { motion } from "framer-motion";

const data = [
  {
    category: 'ECM Technologies',
    items: ['IBM Case Manager', 'IBM Content Navigator', 'IBM Filenet', 'IBM BAW'],
  },
  {
    category: 'Programming & Scripting',
    items: ['DOJO', 'JavaScript', 'React JS'],
  },
  {
    category: 'Scientific Packages',
    items: ['Numpy', 'Pandas'],
  },
  {
    category: 'Database',
    items: ['Oracle', 'DB2', 'MSSQL'],
  },
  {
    category: 'ETL Tools',
    items: ['Informatica', 'DataStage'],
  },
  {
    category: 'Security Systems',
    items: ['LDAP', 'OAuth2'],
  },
  {
    category: 'Code Repository',
    items: ['GitHub', 'SVN'],
  },
  {
    category: 'Certification',
    items: ['Certified FileNet', 'IBM Case Manager & Filenet'],
  },
  {
    category: 'Cloud Technologies',
    items: ['Azure', 'IBM Cloud with RHEL (OpenShift)'],
  },
];

const Technologies = () => {
  return (
    <div className="container mx-auto p-6">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div 
        whileInView={{ opacity: 1, x: 0}}
        initial={{ opacity: 0, x: -100}}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((section, index) => (
          <div key={index} className="rounded-lg shadow-2xl p-6">
            <h2 className="text-xl mb-4">{section.category}</h2>
            <ul className="list-disc list-inside text-gray-700">
              {section.items.map((item, i) => (
                <li key={i} className="mb-2 text-neutral-400">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
