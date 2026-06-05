export interface Question {
  id: number
  step: 'step1' | 'step2' | 'step3'
  subject: string
  question: string
  options: string[]
  correctAnswer: number
  explanationEn: string
  explanationZh: string
  explanationEs: string
}

export const questions: Question[] = [
  // ===== Step 1 - Pathology =====
  {
    id: 1,
    step: 'step1',
    subject: 'Pathology',
    question: 'A 55-year-old male presents with progressive difficulty swallowing both solids and liquids over the past 3 months. Endoscopy reveals irregular mucosal thickening in the lower third of the esophagus. Biopsy shows malignant cells with glandular differentiation. Which of the following is the strongest risk factor for this condition?',
    options: [
      'Helicobacter pylori infection',
      'Chronic gastroesophageal reflux disease (GERD)',
      'Smoking alone',
      'Alcohol consumption alone',
      'Barrett esophagus without dysplasia'
    ],
    correctAnswer: 1,
    explanationEn: 'This patient has esophageal adenocarcinoma (malignant cells with glandular differentiation in the lower esophagus). The strongest risk factor is chronic GERD, which leads to Barrett esophagus (metaplasia) and subsequently increases the risk of adenocarcinoma. Barrett esophagus with dysplasia carries the highest risk, but chronic GERD itself is the primary underlying risk factor.',
    explanationZh: '该患者患有食管腺癌（食管下段恶性细胞伴腺体分化）。最强的危险因素是慢性胃食管反流病（GERD），它会导致巴雷特食管（化生），进而增加腺癌的风险。伴有异型增生的巴雷特食管风险最高，但慢性GERD本身是最主要的潜在危险因素。',
    explanationEs: 'Este paciente tiene adenocarcinoma de esófago (células malignas con diferenciación glandular en el tercio inferior del esófago). El factor de riesgo más fuerte es la enfermedad por reflujo gastroesofágico (GERD) crónica, que conduce a esófago de Barrett (metaplasia) y posteriormente aumenta el riesgo de adenocarcinoma.'
  },
  {
    id: 2,
    step: 'step1',
    subject: 'Pathology',
    question: 'Which of the following best describes the mechanism by which Helicobacter pylori causes gastric ulcer disease?',
    options: [
      'Direct invasion of the gastric mucosa by bacterial toxins',
      'Increased gastrin production leading to acid hypersecretion',
      'Chronic inflammation leading to mucosal damage and reduced mucosal defense',
      'Autoimmune destruction of parietal cells',
      'Blockage of prostaglandin synthesis in gastric mucosa'
    ],
    correctAnswer: 2,
    explanationEn: 'H. pylori causes chronic active gastritis through direct bacterial effects and immune response. The chronic inflammation damages the mucosal barrier and reduces the ability of the stomach to defend itself against acid, leading to ulcer formation. Virulence factors include CagA and VacA.',
    explanationZh: '幽门螺杆菌通过直接的细菌作用和免疫反应引起慢性活动性胃炎。慢性炎症破坏了黏膜屏障，降低了胃对胃酸的防御能力，从而导致溃疡形成。毒力因子包括CagA和VacA。',
    explanationEs: 'H. pylori causa gastritis crónica activa a través de efectos bacterianos directos y respuesta inmune. La inflamación crónica daña la barrera mucosa y reduce la capacidad del estómago para defenderse ácido, lo que conduce a la formación de úlceras.'
  },
  // ===== Step 1 - Internal Medicine =====
  {
    id: 3,
    step: 'step1',
    subject: 'Internal Medicine',
    question: 'A 70-year-old female with a history of hypertension and diabetes mellitus presents with sudden onset of left-sided weakness and facial droop. Symptoms began 2 hours ago. Non-contrast head CT shows no hemorrhage. Blood pressure is 168/92 mmHg. Which of the following is the most appropriate next step in management?',
    options: [
      'Administer recombinant tissue plasminogen activator (rtPA)',
      'Perform mechanical thrombectomy',
      'Administer aspirin 325 mg',
      'Start hypertensive therapy to reduce BP to <140/90',
      'Observe and repeat CT in 24 hours'
    ],
    correctAnswer: 0,
    explanationEn: 'This patient is presenting with acute ischemic stroke within the 3-hour window (symptoms began 2 hours ago). Non-contrast head CT shows no hemorrhage, which is a prerequisite for rtPA administration. rtPA is indicated for acute ischemic stroke when given within 3 hours (or up to 4.5 hours in selected patients) of symptom onset, provided there are no contraindications.',
    explanationZh: '该患者在3小时时间窗内表现为急性缺血性卒中（症状始于2小时前）。非增强头颅CT未见出血，这是rtPA治疗的前提条件。对于急性缺血性卒中，如果在症状出现后3小时内（或选定患者在4.5小时内）给予rtPA，且无禁忌症，则应使用rtPA。',
    explanationEs: 'Este paciente se presenta con un accidente cerebrovascular isquémico agudo dentro de la ventana de 3 horas (los síntomas comenzaron hace 2 horas). La TC de cabeza sin contraste no muestra hemorragia, que es un requisito previo para la administración de rtPA.'
  },
  // ===== Step 2 CK - Internal Medicine =====
  {
    id: 4,
    step: 'step2',
    subject: 'Internal Medicine',
    question: 'A 45-year-old male with known cirrhosis due to chronic hepatitis C infection presents with confusion, asterixis, and a flapping tremor. His medications include propranolol and spironolactone. Laboratory studies show: Na+ 130 mEq/L, K+ 4.5 mEq/L, BUN 5 mg/dL, Cr 0.8 mg/dL. Which of the following is the most likely precipitating factor for his current condition?',
    options: [
      'Acute kidney injury',
      'Gastrointestinal bleeding',
      'Excessive diuretic use',
      'Spontaneous bacterial peritonitis',
      'Recent use of sedatives'
    ],
    correctAnswer: 1,
    explanationEn: 'This patient has hepatic encephalopathy (confusion, asterixis, flapping tremor). The low BUN (5 mg/dL) suggests GI bleeding, as blood in the GI tract increases ammonia production through bacterial breakdown of hemoglobin, which overwhelms the liver\'s ability to detoxify ammonia. GI bleeding is a classic precipitant of hepatic encephalopathy in cirrhotic patients.',
    explanationZh: '该患者患有肝性脑病（意识模糊、扑翼样震颤）。低BUN（5 mg/dL）提示胃肠道出血，因为胃肠道中的血液通过细菌分解血红蛋白增加氨的产生，超过了肝脏解毒氨的能力。胃肠道出血是肝硬化患者肝性脑病的典型诱发因素。',
    explanationEs: 'Este paciente tiene encefalopatía hepática (confusión, asterixis, temblor de aleteo). El BUN bajo (5 mg/dL) sugiere sangrado gastrointestinal, ya que la sangre en el tracto GI aumenta la producción de amoníaco a través de la descomposición bacteriana de la hemoglobina.'
  },
  // ===== Step 2 CK - Pathology =====
  {
    id: 5,
    step: 'step2',
    subject: 'Pathology',
    question: 'A 62-year-old male presents with a 3-month history of progressive dysphagia and weight loss. Endoscopy shows a circumferential lesion in the middle third of the esophagus. Biopsy reveals malignant cells with squamous differentiation. Which of the following is the strongest risk factor for this type of cancer?',
    options: [
      'Chronic gastroesophageal reflux disease',
      'Helicobacter pylori infection',
      'Smoking and alcohol consumption',
      'Barrett esophagus',
      'Achalasia'
    ],
    correctAnswer: 2,
    explanationEn: 'This patient has esophageal squamous cell carcinoma (malignant cells with squamous differentiation in the middle third of the esophagus). The strongest risk factors for squamous cell carcinoma are smoking and alcohol consumption (synergistic effect). In contrast, adenocarcinoma of the esophagus is strongly associated with chronic GERD and Barrett esophagus.',
    explanationZh: '该患者患有食管鳞状细胞癌（食管中段恶性细胞伴鳞状分化）。鳞状细胞癌最强的危险因素是吸烟和饮酒（协同作用）。相比之下，食管腺癌与慢性GERD和巴雷特食管密切相关。',
    explanationEs: 'Este paciente tiene carcinoma de células escamosas de esófago (células malignas con diferenciación escamosa en el tercio medio del esófago). Los factores de riesgo más fuertes para el carcinoma de células escamosas son el tabaquismo y el consumo de alcohol.'
  },
  // ===== Step 3 - Primary Care =====
  {
    id: 6,
    step: 'step3',
    subject: 'Primary Care',
    question: 'A 50-year-old female comes to your office for a health maintenance examination. She has no complaints and no significant past medical history. She is sexually active with one partner and uses condoms inconsistently. Which of the following screening tests is recommended for this patient?',
    options: [
      'Pap smear every 3 years',
      'Mammography annually',
      'Colonoscopy at age 50',
      'Lipid panel every 5 years',
      'Bone density scan (DEXA)'
    ],
    correctAnswer: 2,
    explanationEn: 'This 50-year-old female should have colonoscopy for colorectal cancer screening. Current guidelines recommend starting colorectal cancer screening at age 45-50 for average-risk individuals. Options include colonoscopy every 10 years, or other methods like flexible sigmoidoscopy or stool-based tests. Mammography typically starts at age 40-50 (depending on guidelines), and Pap smears are not needed after age 65 if prior screening was adequate.',
    explanationZh: '这位50岁女性应接受结肠镜检查以筛查结直肠癌。目前的指南建议平均风险个体在45-50岁开始结直肠癌筛查。选项包括每10年一次结肠镜检查，或其他方法如 flexible sigmoidoscopy 或基于粪便的检查。乳房X线摄影通常从40-50岁开始（取决于指南），如果先前筛查充分，65岁后不需要巴氏涂片。',
    explanationEs: 'Esta mujer de 50 años debe someterse a una colonoscopia para el cribado del cáncer colorrectal. Las guías actuales recomiendan iniciar el cribado del cáncer colorrectal a los 45-50 años para individuos de riesgo promedio.'
  },
  // ===== Step 1 - Pharmacology =====
  {
    id: 7,
    step: 'step1',
    subject: 'Pharmacology',
    question: 'A 35-year-old male with a history of generalized anxiety disorder is started on a medication that selectively inhibits the reuptake of serotonin. Two weeks later, he presents with restlessness, inability to sit still, and pacing. Which of the following is the most appropriate management?',
    options: [
      'Discontinue the medication immediately',
      'Add a benzodiazepine',
      'Reduce the dose of the current medication',
      'Add a β-blocker',
      'The symptoms are self-limited and will resolve without intervention'
    ],
    correctAnswer: 2,
    explanationEn: 'This patient is experiencing akathisia, a common side effect of selective serotonin reuptake inhibitors (SSRIs). Akathisia typically occurs early in treatment (first 2-4 weeks) and is characterized by inner restlessness and inability to sit still. The most appropriate management is to reduce the dose of the SSRI. Akathisia can also occur with antipsychotic medications.',
    explanationZh: '该患者正在经历静坐不能，这是选择性5-羟色胺再摄取抑制剂（SSRI）的常见副作用。静坐不能通常发生在治疗早期（前2-4周），其特征是内心不安和无法静坐。最恰当的处理是减少SSRI的剂量。静坐不能也可能发生在抗精神病药物治疗中。',
    explanationEs: 'Este paciente está experimentando acatisia, un efecto secundario común de los inhibidores selectivos de la recaptación de serotonina (ISRS). La acatisia ocurre típicamente al principio del tratamiento y se caracteriza por inquietud interna e incapacidad para estar sentado quieto.'
  },
  // ===== Step 2 CK - Surgery =====
  {
    id: 8,
    step: 'step2',
    subject: 'Surgery',
    question: 'A 68-year-old male presents with a 2-day history of progressively worsening abdominal pain, nausea, and vomiting. On examination, the abdomen is distended and tender. X-ray shows multiple air-fluid levels and dilated loops of small bowel. Which of the following is the most likely cause of his condition?',
    options: [
      'Appendicitis',
      'Diverticulitis',
      'Small bowel obstruction',
      'Cholecystitis',
      'Pancreatitis'
    ],
    correctAnswer: 2,
    explanationEn: 'This patient has a small bowel obstruction (SBO), as evidenced by the triad of abdominal pain, nausea/vomiting, and distention, along with X-ray findings of multiple air-fluid levels and dilated small bowel loops. Common causes of SBO include adhesions (most common), hernias, and tumors. The management typically involves nasogastric decompression and fluid resuscitation.',
    explanationZh: '该患者患有小肠梗阻（SBO），表现为腹痛、恶心/呕吐和腹胀三联征，以及X线显示多个气液平面和扩张的小肠袢。SBO的常见原因包括粘连（最常见）、疝和肿瘤。治疗通常包括鼻胃管减压和液体复苏。',
    explanationEs: 'Este paciente tiene una obstrucción del intestino delgado (SBO), como lo demuestra la tríada de dolor abdominal, náuseas/vómitos y distensión, junto con los hallazgos de rayos X de múltiples niveles aire-líquido y asas de intestino delgado dilatadas.'
  },
  // ===== Step 3 - Internal Medicine =====
  {
    id: 9,
    step: 'step3',
    subject: 'Internal Medicine',
    question: 'A 58-year-old male with type 2 diabetes mellitus presents for follow-up. His HbA1c is 8.2%. He is currently taking metformin 1000 mg twice daily. Which of the following is the most appropriate next step in management?',
    options: [
      'Add a GLP-1 receptor agonist',
      'Add basal insulin',
      'Increase metformin to 1500 mg twice daily',
      'Add a sulfonylurea',
      'No change, reassure the patient'
    ],
    correctAnswer: 0,
    explanationEn: 'This patient has an HbA1c of 8.2% despite metformin therapy, indicating inadequate glycemic control. According to current guidelines, the next step would be to add a second agent. GLP-1 receptor agonists are a preferred choice due to their efficacy in lowering HbA1c, promoting weight loss, and having cardiovascular benefits. Sulfonylureas are less preferred due to risk of hypoglycemia and weight gain.',
    explanationZh: '尽管使用了二甲双胍治疗，该患者的HbA1c为8.2%，表明血糖控制不充分。根据目前的指南，下一步是添加第二种药物。GLP-1受体激动剂是首选，因为它们在降低HbA1c、促进体重减轻和具有心血管益处方面有效。磺脲类药物由于低血糖和体重增加的风险而不太被推荐。',
    explanationEs: 'Este paciente tiene un HbA1c de 8.2% a pesar de la terapia con metformina, lo que indica un control glucémico inadecuado. Según las guías actuales, el siguiente paso sería agregar un segundo agente.'
  },
  // ===== Step 1 - Physiology =====
  {
    id: 10,
    step: 'step1',
    subject: 'Physiology',
    question: 'During a physiological experiment, a researcher studies the renal handling of a substance that is freely filtered at the glomerulus, not reabsorbed, and not secreted. If the plasma concentration of this substance is 1 mg/mL, and the urine excretion rate is 125 mg/min, what is the glomerular filtration rate (GFR)?',
    options: [
      '125 mL/min',
      '100 mL/min',
      '80 mL/min',
      '150 mL/min',
      'Cannot be determined from the given information'
    ],
    correctAnswer: 0,
    explanationEn: 'This question tests understanding of clearance. For a substance that is freely filtered, not reabsorbed, and not secreted (like inulin), the clearance equals the GFR. Clearance = (Urine excretion rate) / (Plasma concentration) = 125 mg/min / 1 mg/mL = 125 mL/min. Inulin clearance is the gold standard for measuring GFR.',
    explanationZh: '这个问题测试对清除率的理解。对于自由滤过、不被重吸收、不被分泌的物质（如菊粉），清除率等于GFR。清除率 =（尿排泄率）/（血浆浓度）= 125 mg/min / 1 mg/mL = 125 mL/min。菊粉清除率是测量GFR的金标准。',
    explanationEs: 'Esta pregunta evalúa la comprensión del aclaramiento. Para una sustancia que se filtra libremente, no se reabsorbe y no se secreta (como la inulina), el aclaramiento equivale a la TFG.'
  }
]

export const subjects = {
  step1: ['Pathology', 'Internal Medicine', 'Pharmacology', 'Physiology', 'Anatomy', 'Biochemistry'],
  step2: ['Internal Medicine', 'Pathology', 'Surgery', 'Pediatrics', 'Obstetrics & Gynecology', 'Psychiatry'],
  step3: ['Primary Care', 'Internal Medicine', 'Emergency Medicine', 'Ethics', 'Patient Safety']
}

export const steps = [
  { id: 'step1', label: 'Step 1', description: 'Foundational sciences and mechanisms of disease' },
  { id: 'step2', label: 'Step 2 CK', description: 'Clinical knowledge and patient care' },
  { id: 'step3', label: 'Step 3', description: 'Patient management and independent practice' }
]
