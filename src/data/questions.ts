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
  // ============================================================
  // STEP 1 — FOUNDATIONAL SCIENCES (35 questions)
  // ============================================================

  // --- Pathology (5 questions: id 1-5) ---
  {
    id: 1, step: 'step1', subject: 'Pathology',
    question: 'A 55-year-old male presents with progressive difficulty swallowing both solids and liquids over the past 3 months. Endoscopy reveals irregular mucosal thickening in the lower third of the esophagus. Biopsy shows malignant cells with glandular differentiation. Which of the following is the strongest risk factor for this condition?',
    options: ['Helicobacter pylori infection', 'Chronic gastroesophageal reflux disease (GERD)', 'Smoking alone', 'Alcohol consumption alone', 'Barrett esophagus without dysplasia'],
    correctAnswer: 1,
    explanationEn: 'This patient has esophageal adenocarcinoma. The strongest risk factor is chronic GERD, which leads to Barrett esophagus (metaplasia) and subsequently increases the risk of adenocarcinoma.',
    explanationZh: '患者患有食管腺癌，最强的危险因素是慢性GERD，导致巴雷特食管（化生），进而增加腺癌风险。',
    explanationEs: 'Adenocarcinoma de esófago. El factor de riesgo más fuerte es GERD crónica, que conduce a esófago de Barrett y aumenta el riesgo de adenocarcinoma.'
  },
  {
    id: 2, step: 'step1', subject: 'Pathology',
    question: 'Which of the following best describes the mechanism by which Helicobacter pylori causes gastric ulcer disease?',
    options: ['Direct invasion of gastric mucosa by bacterial toxins', 'Increased gastrin production leading to acid hypersecretion', 'Chronic inflammation leading to mucosal damage and reduced mucosal defense', 'Autoimmune destruction of parietal cells', 'Blockage of prostaglandin synthesis'],
    correctAnswer: 2,
    explanationEn: 'H. pylori causes chronic active gastritis through direct bacterial effects and immune response. Chronic inflammation damages the mucosal barrier, reducing the stomach\'s defense against acid and leading to ulcer formation. Virulence factors include CagA and VacA.',
    explanationZh: '幽门螺杆菌通过直接的细菌作用和免疫反应引起慢性活动性胃炎。慢性炎症破坏黏膜屏障，降低胃对胃酸的防御能力，导致溃疡形成。毒力因子包括CagA和VacA。',
    explanationEs: 'H. pylori causa gastritis crónica activa. La inflamación crónica daña la barrera mucosa, reduciendo la defensa contra el ácido y llevando a la formación de úlceras.'
  },
  {
    id: 3, step: 'step1', subject: 'Pathology',
    question: 'A 62-year-old female with a 30-pack-year smoking history presents with hemoptysis and weight loss. Chest X-ray shows a 4 cm hilar mass. Biopsy reveals small, round blue cells with scant cytoplasm, nuclear molding, and frequent mitotic figures. Which immunohistochemical marker is most likely positive?',
    options: ['Cytokeratin (CK7)', 'Synaptophysin', 'TTF-1', 'CD45 (LCA)', 'Vimentin'],
    correctAnswer: 1,
    explanationEn: 'The biopsy description (small round blue cells with nuclear molding) is classic for small cell lung carcinoma (SCLC), a neuroendocrine tumor. Synaptophysin, chromogranin, and CD56 are neuroendocrine markers positive in SCLC. SCLC is strongly associated with smoking and typically presents as a central/hilar mass.',
    explanationZh: '活检描述（小圆蓝细胞伴核塑形）是小细胞肺癌（SCLC）的典型表现，属于神经内分泌肿瘤。突触素（Synaptophysin）、嗜铬粒蛋白和CD56是SCLC阳性的神经内分泌标志物。SCLC与吸烟密切相关，通常表现为中央型/肺门肿块。',
    explanationEs: 'La biopsia muestra carcinoma de pulmón de células pequeñas (SCLC), un tumor neuroendocrino. La sinaptofisina, cromogranina y CD56 son marcadores neuroendocrinos positivos en SCLC.'
  },
  {
    id: 4, step: 'step1', subject: 'Pathology',
    question: 'A 45-year-old female presents with fatigue, joint pain, and a malar rash. Laboratory studies show anemia, thrombocytopenia, and proteinuria. ANA is positive at 1:640 in a homogeneous pattern. Anti-dsDNA antibodies are elevated. Renal biopsy shows "wire-loop" lesions. What type of hypersensitivity reaction is primarily involved?',
    options: ['Type I (IgE-mediated)', 'Type II (antibody-mediated cytotoxicity)', 'Type III (immune complex deposition)', 'Type IV (T-cell mediated)', 'Type V (receptor stimulation)'],
    correctAnswer: 2,
    explanationEn: 'Systemic lupus erythematosus (SLE) with lupus nephritis ("wire-loop" lesions on renal biopsy). The pathogenesis involves Type III hypersensitivity — immune complex deposition (anti-dsDNA antibody + DNA antigen complexes) in glomeruli, skin, and joints. This activates complement, leading to tissue damage.',
    explanationZh: '系统性红斑狼疮伴狼疮性肾炎（肾活检"铁丝圈"病变）。发病机制涉及III型超敏反应——免疫复合物（抗dsDNA抗体+DNA抗原复合物）沉积在肾小球、皮肤和关节中，激活补体导致组织损伤。',
    explanationEs: 'Lupus eritematoso sistémico con nefritis lúpica. Patogenia: hipersensibilidad tipo III — depósito de inmunocomplejos (anti-dsDNA + complejos de ADN) en glomérulos, piel y articulaciones.'
  },
  {
    id: 5, step: 'step1', subject: 'Pathology',
    question: 'A newborn presents with cyanosis, difficulty feeding, and failure to thrive. Echocardiogram reveals four abnormalities: ventricular septal defect, overriding aorta, pulmonary stenosis, and right ventricular hypertrophy. Which embryonic structure failed to develop properly?',
    options: ['Septum primum', 'Septum secundum', 'Endocardial cushions', 'Conotruncal septum', 'Sinus venosus'],
    correctAnswer: 3,
    explanationEn: 'Tetralogy of Fallot results from anterosuperior displacement of the conotruncal (infundibular) septum, causing the four classic features. The conotruncal septum normally divides the truncus arteriosus into the aorta and pulmonary artery. Abnormal neural crest cell migration contributes to this defect.',
    explanationZh: '法洛四联症是由于圆锥动脉干（漏斗部）隔膜向前上方移位所致，导致四个经典特征。圆锥动脉干隔膜正常将动脉干分为主动脉和肺动脉。异常的神经嵴细胞迁移导致了这一缺陷。',
    explanationEs: 'Tetralogía de Fallot: desplazamiento anterosuperior del septo conotruncal que causa los cuatro defectos clásicos. La migración anormal de células de la cresta neural contribuye.'
  },

  // --- Physiology (4 questions: id 6-9) ---
  {
    id: 6, step: 'step1', subject: 'Physiology',
    question: 'During a physiological experiment, a researcher studies the renal handling of a substance that is freely filtered at the glomerulus, not reabsorbed, and not secreted. If the plasma concentration is 1 mg/mL and the urine excretion rate is 125 mg/min, what is the GFR?',
    options: ['125 mL/min', '100 mL/min', '80 mL/min', '150 mL/min', 'Cannot be determined'],
    correctAnswer: 0,
    explanationEn: 'For a substance freely filtered, not reabsorbed, and not secreted (like inulin), clearance equals GFR. Clearance = (Urine excretion rate) / (Plasma concentration) = 125/1 = 125 mL/min. Inulin clearance is the gold standard for GFR measurement.',
    explanationZh: '对于自由滤过、不被重吸收、不被分泌的物质（如菊粉），清除率等于GFR。清除率 = 尿排泄率 / 血浆浓度 = 125/1 = 125 mL/min。菊粉清除率是测量GFR的金标准。',
    explanationEs: 'Para inulina (filtrada libremente, no reabsorbida, no secretada), el aclaramiento = TFG = 125/1 = 125 mL/min.'
  },
  {
    id: 7, step: 'step1', subject: 'Physiology',
    question: 'A 28-year-old healthy volunteer breathes into a spirometer. At the end of a normal tidal expiration, which of the following best describes the lung volume?',
    options: ['Residual volume', 'Total lung capacity', 'Functional residual capacity', 'Inspiratory reserve volume', 'Vital capacity'],
    correctAnswer: 2,
    explanationEn: 'Functional residual capacity (FRC) is the volume of air remaining in the lungs after a normal tidal expiration. FRC = expiratory reserve volume (ERV) + residual volume (RV). At FRC, the inward elastic recoil of the lungs is balanced by the outward recoil of the chest wall.',
    explanationZh: '功能残气量（FRC）是正常潮气呼气后肺内剩余的空气量。FRC = 补呼气量（ERV）+ 残气量（RV）。在FRC时，肺的向内弹性回缩力与胸壁的向外回缩力平衡。',
    explanationEs: 'Capacidad residual funcional (FRC) = volumen después de una espiración tidal normal = VRE + VR. Equilibrio entre retracción pulmonar y pared torácica.'
  },
  {
    id: 8, step: 'step1', subject: 'Physiology',
    question: 'A 55-year-old male undergoes a cardiac catheterization. The following pressures are recorded: Right atrium: 8 mmHg (normal 2-6), Right ventricle: 60/10 mmHg (normal 15-30/0-8), Pulmonary artery: 60/30 mmHg (normal 15-30/4-12). Which valvular abnormality is most likely present?',
    options: ['Aortic stenosis', 'Aortic regurgitation', 'Mitral stenosis', 'Mitral regurgitation', 'Tricuspid regurgitation'],
    correctAnswer: 3,
    explanationEn: 'Elevated pulmonary artery pressure (60/30) with normal left-sided measurements suggests pulmonary hypertension secondary to left atrial pressure elevation. Mitral regurgitation causes increased left atrial pressure during systole, which transmits backward to the pulmonary circulation, causing pulmonary hypertension.',
    explanationZh: '肺动脉压升高（60/30）伴正常左侧测量值提示继发于左心房压力升高的肺动脉高压。二尖瓣反流在收缩期导致左心房压力升高，向后传递至肺循环，引起肺动脉高压。',
    explanationEs: 'Presiones elevadas en arteria pulmonar sugieren hipertensión pulmonar secundaria a elevación de presión auricular izquierda por regurgitación mitral.'
  },
  {
    id: 9, step: 'step1', subject: 'Physiology',
    question: 'A 35-year-old marathon runner completes a race in hot weather. At the end of the race, which of the following sets of hormonal changes is most likely present?',
    options: ['Increased ADH, increased aldosterone, decreased ANP', 'Decreased ADH, decreased aldosterone, increased ANP', 'Increased ADH, decreased aldosterone, increased ANP', 'Decreased ADH, increased aldosterone, decreased ANP', 'No change in any of these hormones'],
    correctAnswer: 0,
    explanationEn: 'Prolonged exercise in hot weather causes significant fluid loss through sweating, leading to hypovolemia and hyperosmolality. This stimulates ADH release (to retain water) and aldosterone release via the renin-angiotensin system (to retain sodium and water). ANP decreases due to reduced atrial stretch from decreased blood volume.',
    explanationZh: '炎热天气中长时间运动导致大量汗液流失，引起低血容量和高渗透压。这刺激ADH释放（保留水分）和通过肾素-血管紧张素系统释放醛固酮（保留钠和水）。由于血容量减少导致心房牵张减少，ANP降低。',
    explanationEs: 'Ejercicio prolongado en calor → hipovolemia e hiperosmolalidad → ↑ADH, ↑aldosterona, ↓ANP.'
  },

  // --- Pharmacology (5 questions: id 10-14) ---
  {
    id: 10, step: 'step1', subject: 'Pharmacology',
    question: 'A 35-year-old male with generalized anxiety disorder is started on a medication that selectively inhibits serotonin reuptake. Two weeks later, he presents with restlessness and inability to sit still. What is the most appropriate management?',
    options: ['Discontinue the medication immediately', 'Add a benzodiazepine', 'Reduce the dose of the current medication', 'Add a beta-blocker', 'Symptoms are self-limited and will resolve'],
    correctAnswer: 2,
    explanationEn: 'This is akathisia, a common early side effect of SSRIs characterized by inner restlessness. The most appropriate initial management is dose reduction. Akathisia typically occurs in the first 2-4 weeks of treatment.',
    explanationZh: '这是静坐不能，SSRI的常见早期副作用，表现为内心不安。最合适的初始处理是减少剂量。静坐不能通常发生在治疗的前2-4周。',
    explanationEs: 'Acatisia por ISRS — efecto secundario temprano. Manejo: reducción de dosis.'
  },
  {
    id: 11, step: 'step1', subject: 'Pharmacology',
    question: 'A 65-year-old male with atrial fibrillation is started on warfarin for stroke prevention. His INR is monitored regularly and is stable at 2.5. He develops a urinary tract infection and is prescribed trimethoprim-sulfamethoxazole. What change in his INR is most likely to occur?',
    options: ['No change — the drugs do not interact', 'Decrease — TMP-SMX induces warfarin metabolism', 'Increase — TMP-SMX inhibits warfarin metabolism', 'Decrease — TMP-SMX displaces warfarin from albumin', 'Fluctuate unpredictably'],
    correctAnswer: 2,
    explanationEn: 'Trimethoprim-sulfamethoxazole (TMP-SMX) is a potent inhibitor of CYP2C9, the primary enzyme that metabolizes S-warfarin (the more potent enantiomer). This inhibition decreases warfarin clearance, leading to elevated INR and increased bleeding risk. Careful INR monitoring is essential when prescribing TMP-SMX to patients on warfarin.',
    explanationZh: '甲氧苄啶-磺胺甲恶唑（TMP-SMX）是CYP2C9的强效抑制剂，而CYP2C9是代谢S-华法林的主要酶。这种抑制降低华法林清除率，导致INR升高和出血风险增加。在华法林患者中使用TMP-SMX时必须仔细监测INR。',
    explanationEs: 'TMP-SMX inhibe CYP2C9 → ↓ metabolismo de S-warfarina → ↑ INR, ↑ riesgo de sangrado.'
  },
  {
    id: 12, step: 'step1', subject: 'Pharmacology',
    question: 'A 58-year-old male with heart failure and reduced ejection fraction (HFrEF, EF 30%) is currently on lisinopril, carvedilol, and furosemide. He continues to have dyspnea on moderate exertion. Which medication, when added, has been shown to reduce mortality in this patient population?',
    options: ['Digoxin', 'Spironolactone', 'Amiodarone', 'Verapamil', 'Clopidogrel'],
    correctAnswer: 1,
    explanationEn: 'Spironolactone (a mineralocorticoid receptor antagonist) is one of the guideline-directed medical therapies for HFrEF that reduces mortality. The RALES trial showed a 30% reduction in all-cause mortality. Current guidelines recommend MRAs (spironolactone or eplerenone) for patients with HFrEF (EF ≤35%) who remain symptomatic despite ACEi/ARB and beta-blocker therapy.',
    explanationZh: '螺内酯（盐皮质激素受体拮抗剂）是指南推荐的可降低HFrEF死亡率的药物之一。RALES试验显示全因死亡率降低30%。当前指南推荐对尽管使用ACEi/ARB和β阻滞剂治疗仍有症状的HFrEF患者（EF ≤35%）使用MRA。',
    explanationEs: 'Espironolactona (antagonista de receptor de mineralocorticoides) reduce mortalidad en HFrEF. Estudio RALES: ↓30% mortalidad.'
  },
  {
    id: 13, step: 'step1', subject: 'Pharmacology',
    question: 'A 72-year-old female with COPD is prescribed ipratropium bromide for maintenance therapy. She asks how this medication works. Which of the following best describes its mechanism of action?',
    options: ['Beta-2 adrenergic receptor agonism', 'Phosphodiesterase-4 inhibition', 'Muscarinic acetylcholine receptor antagonism', 'Leukotriene receptor antagonism', 'Mast cell stabilization'],
    correctAnswer: 2,
    explanationEn: 'Ipratropium is a short-acting muscarinic antagonist (SAMA). It blocks M3 muscarinic receptors on airway smooth muscle, preventing acetylcholine-mediated bronchoconstriction. This leads to bronchodilation. Unlike beta-agonists, anticholinergics primarily affect the larger, central airways.',
    explanationZh: '异丙托溴铵是短效毒蕈碱拮抗剂（SAMA）。它阻断气道平滑肌上的M3毒蕈碱受体，阻止乙酰胆碱介导的支气管收缩，导致支气管扩张。与β受体激动剂不同，抗胆碱能药主要作用于较大的中央气道。',
    explanationEs: 'Bromuro de ipratropio = antagonista muscarínico de acción corta. Bloquea receptores M3 → broncodilatación.'
  },
  {
    id: 14, step: 'step1', subject: 'Pharmacology',
    question: 'A 25-year-old female is diagnosed with a deep vein thrombosis during pregnancy. She has no history of thrombophilia. Which anticoagulant is most appropriate for this patient?',
    options: ['Warfarin', 'Rivaroxaban', 'Low molecular weight heparin (LMWH)', 'Dabigatran', 'Aspirin'],
    correctAnswer: 2,
    explanationEn: 'Low molecular weight heparin (LMWH) is the anticoagulant of choice during pregnancy. It does not cross the placenta and has a favorable safety profile in pregnancy. Warfarin is teratogenic (causes warfarin embryopathy). DOACs (rivaroxaban, dabigatran) have limited safety data in pregnancy and are generally avoided.',
    explanationZh: '低分子量肝素（LMWH）是妊娠期首选抗凝药。它不穿过胎盘，在妊娠期具有有利的安全性。华法林具有致畸性（导致华法林胚胎病）。DOAC（利伐沙班、达比加群）在妊娠期安全性数据有限，通常避免使用。',
    explanationEs: 'HBPM es el anticoagulante de elección en embarazo. No cruza la placenta. Warfarina es teratogénica. DOACs: datos limitados en embarazo.'
  },

  // --- Internal Medicine (Step 1: id 15-16) ---
  {
    id: 15, step: 'step1', subject: 'Internal Medicine',
    question: 'A 70-year-old female with hypertension and diabetes presents with sudden left-sided weakness and facial droop starting 2 hours ago. Non-contrast head CT shows no hemorrhage. BP is 168/92. What is the most appropriate next step?',
    options: ['Administer rtPA', 'Perform mechanical thrombectomy', 'Administer aspirin 325 mg', 'Start antihypertensive to reduce BP <140/90', 'Observe and repeat CT in 24 hours'],
    correctAnswer: 0,
    explanationEn: 'Acute ischemic stroke within 3-hour window. Non-contrast CT without hemorrhage is a prerequisite. rtPA is indicated within 3 hours (or up to 4.5h in selected patients) of symptom onset with no contraindications. Permissive hypertension is allowed (BP up to 185/110 before rtPA).',
    explanationZh: '急性缺血性卒中，3小时窗口内。非增强CT无出血是先决条件。症状发作3小时内（特定患者可至4.5小时）且无禁忌症时适用rtPA。允许允许性高血压（rtPA前BP不超185/110）。',
    explanationEs: 'ICTUS isquémico agudo en ventana de 3h. TC sin hemorragia. rtPA indicado dentro de 3h del inicio de síntomas sin contraindicaciones.'
  },
  {
    id: 16, step: 'step1', subject: 'Internal Medicine',
    question: 'A 45-year-old male presents with polyuria, polydipsia, and nocturia. Fasting glucose is 320 mg/dL. Urinalysis shows glucosuria but no ketones. Serum pH is 7.38. C-peptide levels are low. What is the most likely pathogenesis?',
    options: ['Insulin resistance with relative deficiency', 'Autoimmune destruction of pancreatic beta cells', 'Amyloid deposition in pancreatic islets', 'Glucagon receptor mutation', 'Renal glucose transporter defect'],
    correctAnswer: 1,
    explanationEn: 'Low C-peptide with hyperglycemia and no ketosis suggests type 1 diabetes mellitus in early stages. Autoimmune destruction of pancreatic beta cells (mediated by T-cells) leads to absolute insulin deficiency. C-peptide is a marker of endogenous insulin production. In type 2 DM, C-peptide is typically normal or elevated.',
    explanationZh: 'C肽降低伴高血糖且无酮症提示早期1型糖尿病。自身免疫性破坏β细胞（T细胞介导）导致绝对胰岛素缺乏。C肽是内源性胰岛素产生的标志物。2型糖尿病中C肽通常正常或升高。',
    explanationEs: 'C-péptido bajo con hiperglucemia → diabetes tipo 1. Destrucción autoinmune de células beta pancreáticas.'
  },

  // --- Anatomy (4 questions: id 17-20) ---
  {
    id: 17, step: 'step1', subject: 'Anatomy',
    question: 'A 34-year-old male sustains a knife wound to the upper medial thigh. He cannot extend his knee and has sensory loss over the anterior thigh and medial leg. Which nerve is most likely injured?',
    options: ['Obturator nerve', 'Femoral nerve', 'Sciatic nerve', 'Superior gluteal nerve', 'Lateral femoral cutaneous nerve'],
    correctAnswer: 1,
    explanationEn: 'Femoral nerve injury causes inability to extend the knee (quadriceps weakness) and sensory loss over the anterior thigh and medial leg (saphenous nerve distribution). The femoral nerve (L2-L4) innervates the quadriceps, sartorius, and provides sensation to the anterior thigh and medial leg.',
    explanationZh: '股神经损伤导致不能伸膝（股四头肌无力）和大腿前部和内侧腿部感觉丧失（隐神经分布）。股神经（L2-L4）支配股四头肌、缝匠肌，并提供大腿前部和内侧腿部的感觉。',
    explanationEs: 'Lesión del nervio femoral → incapacidad para extender la rodilla + pérdida sensorial en muslo anterior y pierna medial.'
  },
  {
    id: 18, step: 'step1', subject: 'Anatomy',
    question: 'During a thyroidectomy, a surgeon carefully identifies and preserves the recurrent laryngeal nerve. Which muscle, if paralyzed due to nerve injury, would cause hoarseness?',
    options: ['Cricothyroid muscle', 'Posterior cricoarytenoid muscle', 'Thyroarytenoid muscle', 'All intrinsic laryngeal muscles except cricothyroid', 'Lateral cricoarytenoid muscle only'],
    correctAnswer: 3,
    explanationEn: 'The recurrent laryngeal nerve innervates all intrinsic laryngeal muscles EXCEPT the cricothyroid (which is innervated by the external branch of the superior laryngeal nerve). Unilateral RLN injury causes hoarseness; bilateral injury can cause airway obstruction due to vocal cord adduction.',
    explanationZh: '喉返神经支配除环甲肌（由喉上神经外支支配）外的所有喉内肌。单侧RLN损伤导致声音嘶哑；双侧损伤可因声带内收导致气道阻塞。',
    explanationEs: 'Nervio laríngeo recurrente inerva todos los músculos laríngeos intrínsecos EXCEPTO cricotiroideo. Lesión unilateral → ronquera.'
  },
  {
    id: 19, step: 'step1', subject: 'Anatomy',
    question: 'A patient with carpal tunnel syndrome presents with numbness and tingling in the hand. Which of the following movements would be most affected if the condition progresses to motor involvement?',
    options: ['Finger adduction', 'Thumb opposition', 'Wrist extension', 'Finger extension at MCP joints', 'Thumb adduction'],
    correctAnswer: 1,
    explanationEn: 'Carpal tunnel syndrome involves compression of the median nerve. Motor involvement affects the thenar muscles (recurrent branch), particularly thumb opposition (opponens pollicis), abduction (abductor pollicis brevis), and flexion (flexor pollicis brevis). Sensation is lost over the lateral 3.5 fingers.',
    explanationZh: '腕管综合征涉及正中神经受压。运动受累影响大鱼际肌（返支），特别是拇指对掌（拇对掌肌）、外展（拇短展肌）和屈曲（拇短屈肌）。外侧3.5个手指感觉丧失。',
    explanationEs: 'Síndrome del túnel carpiano: compresión del nervio mediano. Afecta oposición del pulgar (ramos tenares).'
  },
  {
    id: 20, step: 'step1', subject: 'Anatomy',
    question: 'A 22-year-old male presents with shoulder dislocation after a sports injury. He has difficulty abducting his arm beyond 15 degrees and cannot externally rotate it. Which nerve is most likely injured?',
    options: ['Axillary nerve', 'Suprascapular nerve', 'Radial nerve', 'Musculocutaneous nerve', 'Long thoracic nerve'],
    correctAnswer: 0,
    explanationEn: 'Anterior shoulder dislocation can injure the axillary nerve as it passes through the quadrangular space. The axillary nerve innervates the deltoid (abduction from 15-90°) and teres minor (external rotation). Sensory loss occurs over the "regimental badge" area (lateral shoulder).',
    explanationZh: '肩关节前脱位可损伤穿过四边孔的腋神经。腋神经支配三角肌（15-90°外展）和小圆肌（外旋）。感觉丧失发生在"肩章区"（肩部外侧）。',
    explanationEs: 'Luxación anterior de hombro puede lesionar nervio axilar en espacio cuadrangular → deltoides (abducción) + redondo menor (rotación externa).'
  },

  // --- Biochemistry (4 questions: id 21-24) ---
  {
    id: 21, step: 'step1', subject: 'Biochemistry',
    question: 'A 3-day-old newborn presents with poor feeding, vomiting, and lethargy. Laboratory studies show hyperammonemia, low BUN, and respiratory alkalosis. Urinary orotic acid is markedly elevated. Which enzyme is most likely deficient?',
    options: ['Carbamoyl phosphate synthetase I (CPS I)', 'Ornithine transcarbamylase (OTC)', 'Argininosuccinate synthetase', 'Argininosuccinate lyase', 'Arginase'],
    correctAnswer: 1,
    explanationEn: 'Elevated urinary orotic acid with hyperammonemia is characteristic of ornithine transcarbamylase (OTC) deficiency. In OTC deficiency, carbamoyl phosphate accumulates and is shunted to pyrimidine synthesis, producing excess orotic acid. OTC deficiency is X-linked recessive and is the most common urea cycle disorder.',
    explanationZh: '尿乳清酸升高伴高氨血症是鸟氨酸转氨甲酰酶（OTC）缺乏的特征。OTC缺乏时，氨甲酰磷酸积聚并转向嘧啶合成，产生过量乳清酸。OTC缺乏是X连锁隐性遗传，是最常见的尿素循环障碍。',
    explanationEs: 'Ácido orótico urinario elevado + hiperamonemia → deficiencia de OTC. Carbamoil fosfato acumulado → síntesis de pirimidinas → ↑ ácido orótico.'
  },
  {
    id: 22, step: 'step1', subject: 'Biochemistry',
    question: 'A patient with a history of gout presents with acute joint pain after starting a new medication for tuberculosis. Which drug most likely precipitated this episode by inhibiting uric acid excretion?',
    options: ['Isoniazid', 'Rifampin', 'Pyrazinamide', 'Ethambutol', 'Streptomycin'],
    correctAnswer: 2,
    explanationEn: 'Pyrazinamide inhibits renal tubular secretion of uric acid, leading to hyperuricemia and potentially precipitating acute gout. This is a well-known adverse effect. Isoniazid can cause peripheral neuropathy, rifampin causes hepatotoxicity and orange secretions, ethambutol causes optic neuritis.',
    explanationZh: '吡嗪酰胺抑制肾小管分泌尿酸，导致高尿酸血症并可能诱发急性痛风。这是一个众所周知的副作用。异烟肼可引起周围神经病变，利福平引起肝毒性和橙色分泌物，乙胺丁醇引起视神经炎。',
    explanationEs: 'Pirazinamida inhibe secreción tubular renal de ácido úrico → hiperuricemia → puede precipitar gota aguda.'
  },
  {
    id: 23, step: 'step1', subject: 'Biochemistry',
    question: 'A 20-year-old female of Mediterranean descent develops severe hemolytic anemia after eating fava beans. Laboratory studies show Heinz bodies on peripheral smear. Which enzyme is most likely deficient?',
    options: ['Pyruvate kinase', 'Glucose-6-phosphate dehydrogenase (G6PD)', 'Hexokinase', 'Phosphofructokinase', 'Glutathione reductase'],
    correctAnswer: 1,
    explanationEn: 'Fava bean-induced hemolytic anemia with Heinz bodies is classic for G6PD deficiency. G6PD is the rate-limiting enzyme of the pentose phosphate pathway, which produces NADPH. NADPH is required to regenerate reduced glutathione, which protects RBCs from oxidative stress. Heinz bodies are precipitated hemoglobin. X-linked recessive inheritance.',
    explanationZh: '蚕豆诱发的溶血性贫血伴海因茨小体是G6PD缺乏症的典型表现。G6PD是磷酸戊糖途径的限速酶，产生NADPH。NADPH是再生还原型谷胱甘肽所必需的，后者保护红细胞免受氧化应激。海因茨小体是沉淀的血红蛋白。X连锁隐性遗传。',
    explanationEs: 'Anemia hemolítica por habas + cuerpos de Heinz → deficiencia de G6PD. NADPH necesario para regenerar glutatión reducido que protege eritrocitos.'
  },
  {
    id: 24, step: 'step1', subject: 'Biochemistry',
    question: 'A patient with cystinuria presents with recurrent kidney stones. Which amino acid transporter defect is responsible for this condition?',
    options: ['Neutral amino acid transporter', 'Dibasic amino acid transporter (COLA transporter)', 'Acidic amino acid transporter', 'Branched-chain amino acid transporter', 'Aromatic amino acid transporter'],
    correctAnswer: 1,
    explanationEn: 'Cystinuria is caused by a defect in the COLA transporter (Cystine, Ornithine, Lysine, Arginine) — the dibasic amino acid transporter in the proximal renal tubule and small intestine. Defective reabsorption leads to excessive urinary excretion of these amino acids. Cystine, being relatively insoluble, precipitates to form stones.',
    explanationZh: '胱氨酸尿症由COLA转运蛋白（胱氨酸、鸟氨酸、赖氨酸、精氨酸）——近端肾小管和小肠的二元氨基酸转运蛋白缺陷引起。重吸收缺陷导致这些氨基酸过量从尿液排出。胱氨酸相对不溶，沉淀形成结石。',
    explanationEs: 'Cistinuria: defecto en transportador COLA (Cistina, Ornitina, Lisina, Arginina) en túbulo renal proximal.'
  },

  // --- Microbiology (4 questions: id 25-28) ---
  {
    id: 25, step: 'step1', subject: 'Microbiology',
    question: 'A 45-year-old HIV-positive patient with a CD4 count of 50 cells/mm³ presents with progressive dyspnea, dry cough, and fever. Chest X-ray shows bilateral interstitial infiltrates. Silver stain of bronchoalveolar lavage fluid reveals cup-shaped organisms. What is the most likely diagnosis?',
    options: ['Mycobacterium tuberculosis', 'Pneumocystis jirovecii pneumonia', 'Cytomegalovirus pneumonitis', 'Aspergillosis', 'Cryptococcal pneumonia'],
    correctAnswer: 1,
    explanationEn: 'Pneumocystis jirovecii pneumonia (PCP) in an HIV patient with CD4 <200. Silver stain shows characteristic cup-shaped (crushed ping-pong ball) cysts. PCP is an AIDS-defining illness. Treatment is trimethoprim-sulfamethoxazole. Prophylaxis is indicated when CD4 <200.',
    explanationZh: 'HIV患者CD4<200时的肺孢子菌肺炎（PCP）。银染显示特征性杯状（压扁的乒乓球）囊肿。PCP是艾滋病定义性疾病。治疗用复方新诺明。CD4<200时需预防。',
    explanationEs: 'Neumonía por Pneumocystis jirovecii en VIH con CD4<200. Tinción de plata muestra quistes en forma de copa. Tratamiento: TMP-SMX.'
  },
  {
    id: 26, step: 'step1', subject: 'Microbiology',
    question: 'A 6-year-old child presents with fever, sore throat, and a fine, erythematous "sandpaper" rash that spares the face. Physical exam reveals a strawberry tongue and circumoral pallor. Which organism is responsible?',
    options: ['Streptococcus pneumoniae', 'Streptococcus pyogenes (Group A Strep) - erythrogenic toxin', 'Staphylococcus aureus - TSST-1', 'Corynebacterium diphtheriae', 'Epstein-Barr virus'],
    correctAnswer: 1,
    explanationEn: 'Scarlet fever is caused by Group A Streptococcus (S. pyogenes) strains that produce erythrogenic (pyrogenic) exotoxins. Classic features: sandpaper rash, strawberry tongue, circumoral pallor, and Pastia lines. Unlike toxic shock syndrome (S. aureus), scarlet fever has pharyngitis and the characteristic rash distribution.',
    explanationZh: '猩红热由产生红疹（致热）外毒素的A组链球菌（化脓性链球菌）菌株引起。典型特征：砂纸样皮疹、草莓舌、口周苍白和帕氏线。与中毒性休克综合征（金葡菌）不同，猩红热有咽炎和特征性皮疹分布。',
    explanationEs: 'Escarlatina: Streptococcus pyogenes productor de toxina eritrogénica. Exantema en "papel de lija", lengua de fresa, palidez peribucal.'
  },
  {
    id: 27, step: 'step1', subject: 'Microbiology',
    question: 'A 30-year-old female presents with a single, painless genital ulcer with raised, indurated borders and a clean base. Inguinal lymph nodes are enlarged, rubbery, and nontender. Which of the following is the most likely causative organism?',
    options: ['Herpes simplex virus type 2', 'Haemophilus ducreyi', 'Treponema pallidum', 'Chlamydia trachomatis (L1-L3)', 'Neisseria gonorrhoeae'],
    correctAnswer: 2,
    explanationEn: 'Primary syphilis presents as a painless chancre (single, indurated ulcer with clean base) with nontender, rubbery lymphadenopathy. Herpes causes painful vesicles/ulcers. Chancroid (H. ducreyi) causes painful ulcers with tender lymph nodes. LGV (C. trachomatis L1-L3) causes tender inguinal buboes.',
    explanationZh: '一期梅毒表现为无痛性硬下疳（单个、硬结性溃疡伴清洁基底）伴无痛性、橡皮样淋巴结肿大。疱疹引起痛性水疱/溃疡。软下疳（杜克雷嗜血杆菌）引起疼痛性溃疡伴压痛淋巴结。性病性淋巴肉芽肿引起压痛性腹股沟淋巴结炎。',
    explanationEs: 'Sífilis primaria: chancro indoloro + linfadenopatía no dolorosa. Treponema pallidum. Cicatrización espontánea en 3-6 semanas.'
  },
  {
    id: 28, step: 'step1', subject: 'Microbiology',
    question: 'A 20-year-old college student presents with fever, severe headache, and neck stiffness. CSF analysis shows: WBC 2,500/mm³ (90% neutrophils), glucose 20 mg/dL (serum 90), protein 180 mg/dL. Gram stain shows gram-negative diplococci. What virulence factor enables this organism to cross the blood-brain barrier?',
    options: ['Lipopolysaccharide (LPS)', 'IgA protease', 'Polysaccharide capsule + pili', 'M protein', 'Protein A'],
    correctAnswer: 2,
    explanationEn: 'Neisseria meningitidis (gram-negative diplococci) causes bacterial meningitis. Its polysaccharide capsule enables immune evasion, while type IV pili mediate adhesion and penetration of the blood-brain barrier. LPS causes septic shock. IgA protease helps colonize the nasopharynx. The vaccine covers serogroups A, C, W, Y, and B.',
    explanationZh: '脑膜炎奈瑟菌（革兰阴性双球菌）引起细菌性脑膜炎。其多糖胶囊实现免疫逃逸，而IV型菌毛介导血脑屏障的粘附和穿透。LPS引起感染性休克。IgA蛋白酶帮助定植鼻咽。疫苗覆盖血清群A、C、W、Y和B。',
    explanationEs: 'Neisseria meningitidis: cápsula polisacárida (evasión inmune) + pili tipo IV (penetración BHE). Meningitis bacteriana.'
  },

  // --- Immunology (3 questions: id 29-31) ---
  {
    id: 29, step: 'step1', subject: 'Immunology',
    question: 'A 2-year-old boy presents with recurrent sinopulmonary infections, eczema, and easy bruising. Laboratory studies show thrombocytopenia with small platelets. Which of the following genetic mutations is most likely responsible?',
    options: ['BTK mutation (Bruton tyrosine kinase)', 'WAS gene mutation', 'IL2RG mutation (common gamma chain)', 'ATM gene mutation', 'CD40L mutation'],
    correctAnswer: 1,
    explanationEn: 'Wiskott-Aldrich syndrome: triad of eczema, thrombocytopenia with small platelets, and recurrent infections. Caused by WAS gene mutation affecting cytoskeletal protein. Immune deficiency involves both T and B cells with low IgM, normal IgG, elevated IgA and IgE. X-linked recessive.',
    explanationZh: 'Wiskott-Aldrich综合征：湿疹、血小板减少伴小血小板和反复感染三联征。由影响细胞骨架蛋白的WAS基因突变引起。免疫缺陷涉及T和B细胞，IgM低，IgG正常，IgA和IgE升高。X连锁隐性遗传。',
    explanationEs: 'Síndrome de Wiskott-Aldrich: eczema + trombocitopenia con plaquetas pequeñas + infecciones recurrentes. Mutación gen WAS. Ligado al X.'
  },
  {
    id: 30, step: 'step1', subject: 'Immunology',
    question: 'A 45-year-old male receives a kidney transplant from a deceased donor. Six months later, he develops progressive graft dysfunction. Biopsy shows interstitial fibrosis, tubular atrophy, and arteriosclerosis. Which type of rejection is this?',
    options: ['Hyperacute rejection', 'Acute cellular rejection', 'Acute antibody-mediated rejection', 'Chronic rejection', 'Graft-versus-host disease'],
    correctAnswer: 3,
    explanationEn: 'Chronic rejection occurring >6 months post-transplant is characterized by interstitial fibrosis, tubular atrophy, and vascular changes. It is mediated by both cellular and humoral mechanisms. It is the leading cause of late graft failure and is generally irreversible. Hyperacute rejection occurs within minutes, acute within days to weeks.',
    explanationZh: '移植后>6个月的慢性排斥反应以间质纤维化、肾小管萎缩和血管变化为特征。由细胞和体液机制共同介导。是晚期移植物失败的主要原因，通常不可逆。超急性排斥在数分钟内发生，急性在数天至数周内发生。',
    explanationEs: 'Rechazo crónico (>6 meses): fibrosis intersticial, atrofia tubular, arteriosclerosis. Principal causa de fallo tardío del injerto.'
  },
  {
    id: 31, step: 'step1', subject: 'Immunology',
    question: 'A 28-year-old female with a history of allergic rhinitis is stung by a bee. Within minutes, she develops diffuse urticaria, wheezing, and hypotension. Which immunoglobulin is primarily responsible for this reaction?',
    options: ['IgG', 'IgA', 'IgM', 'IgE', 'IgD'],
    correctAnswer: 3,
    explanationEn: 'This is anaphylaxis, a Type I hypersensitivity reaction mediated by IgE. IgE bound to mast cells and basophils is cross-linked by the allergen (bee venom), triggering degranulation and release of histamine, tryptase, leukotrienes, and prostaglandins. Treatment: epinephrine IM (first-line), antihistamines, corticosteroids.',
    explanationZh: '这是过敏性休克，由IgE介导的I型超敏反应。与肥大细胞和嗜碱性粒细胞结合的IgE被过敏原（蜂毒）交联，触发脱颗粒和释放组胺、类胰蛋白酶、白三烯和前列腺素。治疗：肾上腺素肌注（一线）、抗组胺药、皮质类固醇。',
    explanationEs: 'Anafilaxia: hipersensibilidad tipo I mediada por IgE. Desgranulación de mastocitos → histamina, triptasa. Tx: epinefrina IM.'
  },

  // --- Genetics (2 questions: id 32-33) ---
  {
    id: 32, step: 'step1', subject: 'Genetics',
    question: 'A couple has a child with cystic fibrosis. Both parents are healthy. What is the probability that their next child will be a carrier of the CFTR mutation?',
    options: ['25%', '50%', '75%', '100%', '0%'],
    correctAnswer: 1,
    explanationEn: 'Cystic fibrosis is autosomal recessive. Both parents must be carriers (heterozygous). For each pregnancy: 25% affected (homozygous), 50% carrier (heterozygous), 25% unaffected non-carrier. The question asks specifically about being a carrier, so 50% is correct.',
    explanationZh: '囊性纤维化是常染色体隐性遗传。父母双方必须是携带者（杂合子）。每次妊娠：25%患病（纯合子）、50%携带者（杂合子）、25%无病非携带者。问题专门问携带者概率，因此50%正确。',
    explanationEs: 'Fibrosis quística: autosómica recesiva. Padres portadores obligados. Probabilidad de hijo portador: 50%.'
  },
  {
    id: 33, step: 'step1', subject: 'Genetics',
    question: 'A researcher is studying a family with a rare disease affecting only males. An affected father has no affected sons, but all his daughters are carriers. Which inheritance pattern does this suggest?',
    options: ['Autosomal dominant', 'Autosomal recessive', 'X-linked recessive', 'X-linked dominant', 'Mitochondrial'],
    correctAnswer: 2,
    explanationEn: 'In X-linked recessive inheritance, an affected father transmits his X chromosome (with the mutation) to all daughters (making them carriers), but not to sons (sons get the Y chromosome). Carrier daughters may have affected sons. Examples: hemophilia A, Duchenne muscular dystrophy, G6PD deficiency.',
    explanationZh: '在X连锁隐性遗传中，患病父亲将X染色体（携带突变）传递给所有女儿（使她们成为携带者），但不传给儿子（儿子获得Y染色体）。携带者女儿可能生育患病儿子。例子：血友病A、Duchenne肌营养不良、G6PD缺乏症。',
    explanationEs: 'Herencia ligada al X recesiva: padre afectado → todas hijas portadoras, ningún hijo afectado. Ej: hemofilia A, DMD.'
  },

  // --- Neurology (Step 1: id 34) ---
  {
    id: 34, step: 'step1', subject: 'Neurology',
    question: 'A 55-year-old female presents with progressive muscle weakness that worsens with repetitive activity and improves with rest. She has difficulty swallowing and chewing toward the end of meals. Which autoantibody is most likely positive?',
    options: ['Anti-voltage-gated calcium channel antibody', 'Anti-acetylcholine receptor antibody', 'Anti-MuSK antibody', 'Anti-striated muscle antibody', 'Anti-GQ1b antibody'],
    correctAnswer: 1,
    explanationEn: 'Myasthenia gravis presents with fatiguable weakness (worsens with activity, improves with rest). Bulbar symptoms (dysphagia, dysarthria) are common. Anti-AChR antibodies are positive in 85% of cases. Anti-MuSK antibodies in some seronegative patients. Treatment: pyridostigmine, immunosuppression, thymectomy.',
    explanationZh: '重症肌无力表现为疲劳性无力（活动加重，休息改善）。延髓症状（吞咽困难、构音障碍）常见。85%病例抗AChR抗体阳性。部分血清阴性患者抗MuSK抗体阳性。治疗：吡啶斯的明、免疫抑制、胸腺切除术。',
    explanationEs: 'Miastenia gravis: debilidad fatigable. Anticuerpos anti-AChR positivos en 85%. Síntomas bulbares comunes.'
  },

  // ============================================================
  // STEP 2 CK — CLINICAL KNOWLEDGE (30 questions, id 35-64)
  // ============================================================

  // --- Internal Medicine (5 questions: id 35-39) ---
  {
    id: 35, step: 'step2', subject: 'Internal Medicine',
    question: 'A 45-year-old male with cirrhosis due to chronic hepatitis C presents with confusion, asterixis, and flapping tremor. Labs: Na 130, K 4.5, BUN 5, Cr 0.8. What is the most likely precipitating factor?',
    options: ['Acute kidney injury', 'Gastrointestinal bleeding', 'Excessive diuretic use', 'Spontaneous bacterial peritonitis', 'Recent sedative use'],
    correctAnswer: 1,
    explanationEn: 'Hepatic encephalopathy with low BUN (5 mg/dL) suggests GI bleeding as the precipitant. Blood in the GI tract increases protein load and ammonia production. GI bleeding is a classic precipitant of hepatic encephalopathy in cirrhotic patients.',
    explanationZh: '肝性脑病伴低BUN（5 mg/dL）提示消化道出血为诱因。消化道中的血液增加蛋白质负荷和氨的产生。消化道出血是肝硬化患者肝性脑病的经典诱因。',
    explanationEs: 'Encefalopatía hepática + BUN bajo → sangrado GI. Sangre en tracto GI ↑ producción de amoníaco. Precipitante clásico.'
  },
  {
    id: 36, step: 'step2', subject: 'Internal Medicine',
    question: 'A 68-year-old male with COPD presents with 2 days of increased dyspnea, purulent sputum, and low-grade fever. He uses albuterol and tiotropium at home. O2 sat is 87% on room air. Chest X-ray shows hyperinflation without infiltrate. What is the most appropriate antibiotic?',
    options: ['Amoxicillin', 'Azithromycin or doxycycline', 'Levofloxacin', 'Vancomycin', 'No antibiotics needed - this is viral'],
    correctAnswer: 1,
    explanationEn: 'This is an acute COPD exacerbation (Anthonisen criteria: increased dyspnea + increased sputum purulence + increased sputum volume — 3 of 3 = type 1, antibiotics indicated). First-line antibiotics: azithromycin or doxycycline. Levofloxacin is reserved for severe cases or treatment failure. Steroids and bronchodilators are also indicated.',
    explanationZh: '这是COPD急性加重（Anthonisen标准：呼吸困难加重+痰脓性增加+痰量增加——3/3=1型，需抗生素）。一线抗生素：阿奇霉素或多西环素。左氧氟沙星保留用于重症或治疗失败。也需用类固醇和支气管扩张剂。',
    explanationEs: 'Exacerbación aguda de EPOC (3/3 criterios de Anthonisen). Antibiótico de primera línea: azitromicina o doxiciclina.'
  },
  {
    id: 37, step: 'step2', subject: 'Internal Medicine',
    question: 'A 55-year-old male with hypertension and type 2 diabetes develops acute-onset severe chest pain radiating to the back. Blood pressure is 220/120 mmHg in the right arm and 160/90 in the left arm. Chest X-ray shows a widened mediastinum. What is the most appropriate next step?',
    options: ['Administer aspirin and heparin', 'Start IV beta-blocker (esmolol) to lower heart rate', 'Perform transthoracic echocardiogram', 'Administer sublingual nitroglycerin', 'Start IV nitroprusside immediately'],
    correctAnswer: 1,
    explanationEn: 'Acute aortic dissection (Stanford type A) — severe chest pain, pulse deficit, widened mediastinum. First step: reduce shear stress on the aortic wall by lowering heart rate (target HR ~60) with IV beta-blocker (esmolol or labetalol). Then, lower blood pressure (target SBP 100-120). Type A requires emergent surgery. Avoid anticoagulation.',
    explanationZh: '急性主动脉夹层（Stanford A型）——严重胸痛、脉搏缺失、纵隔增宽。第一步：用静脉β阻滞剂（艾司洛尔或拉贝洛尔）降低心率（目标HR约60）以减少主动脉壁剪切力。然后降压（目标SBP 100-120）。A型需急诊手术。避免抗凝。',
    explanationEs: 'Disección aórtica aguda tipo A: dolor torácico + déficit de pulso + mediastino ensanchado. Primero: betabloqueante IV (esmolol) para ↓FC y cizallamiento.'
  },
  {
    id: 38, step: 'step2', subject: 'Internal Medicine',
    question: 'A 32-year-old female presents with fatigue, joint pain, and photosensitivity. She also notes that her fingers turn white and blue when exposed to cold. Urinalysis shows proteinuria and RBC casts. Which medication has the strongest evidence for preventing disease flares?',
    options: ['Prednisone', 'Hydroxychloroquine', 'Methotrexate', 'Cyclophosphamide', 'Rituximab'],
    correctAnswer: 1,
    explanationEn: 'This patient has systemic lupus erythematosus (SLE) with Raynaud phenomenon and lupus nephritis (RBC casts, proteinuria). Hydroxychloroquine is recommended for ALL patients with SLE regardless of severity, as it reduces disease flares, improves survival, and has antithrombotic and lipid-lowering benefits. It is the cornerstone of SLE management.',
    explanationZh: '该患者患SLE伴雷诺现象和狼疮性肾炎（红细胞管型、蛋白尿）。羟氯喹推荐用于所有SLE患者无论严重程度，因为它减少疾病发作、改善生存率，并具有抗血栓和降脂益处。是SLE治疗的基石。',
    explanationEs: 'LES con Raynaud y nefritis lúpica. Hidroxicloroquina para TODOS los pacientes con LES: reduce brotes, mejora supervivencia.'
  },
  {
    id: 39, step: 'step2', subject: 'Internal Medicine',
    question: 'A 72-year-old male with metastatic prostate cancer presents with confusion, constipation, and bone pain. Labs: Ca 13.2 mg/dL, PTH <10 pg/mL, PTHrP elevated. What is the first step in management?',
    options: ['IV pamidronate', 'Aggressive IV normal saline hydration', 'Calcitonin', 'Subcutaneous denosumab', 'Furosemide'],
    correctAnswer: 1,
    explanationEn: 'Hypercalcemia of malignancy (PTHrP-mediated) requires aggressive fluid resuscitation first. IV normal saline at 200-300 mL/hr restores intravascular volume and promotes calciuresis. After euvolemia is achieved, bisphosphonates (zoledronic acid or pamidronate) can be given. Calcitonin provides rapid but short-lived effect. Furosemide is only used after volume repletion to prevent fluid overload.',
    explanationZh: '恶性肿瘤相关高钙血症（PTHrP介导）首先需要积极液体复苏。静脉生理盐水200-300 mL/hr恢复血管内容量并促进尿钙排泄。达到血容量正常后，可给予双膦酸盐（唑来膦酸或帕米膦酸）。降钙素效果快但短暂。呋塞米仅用于容量补充后预防液体过负荷。',
    explanationEs: 'Hipercalcemia maligna (PTHrP). Primer paso: hidratación IV agresiva con solución salina → restaurar volumen + calciuresis. Luego bifosfonatos.'
  },

  // --- Surgery (4 questions: id 40-43) ---
  {
    id: 40, step: 'step2', subject: 'Surgery',
    question: 'A 68-year-old male presents with 2 days of worsening abdominal pain, nausea, and vomiting. Abdomen is distended and tender. X-ray shows multiple air-fluid levels and dilated small bowel loops. What is the most likely cause?',
    options: ['Appendicitis', 'Diverticulitis', 'Small bowel obstruction', 'Cholecystitis', 'Pancreatitis'],
    correctAnswer: 2,
    explanationEn: 'Small bowel obstruction (SBO): triad of abdominal pain, nausea/vomiting, and distention with X-ray showing air-fluid levels and dilated loops. Most common cause: adhesions from prior abdominal surgery. Management: NPO, nasogastric decompression, IV fluids. Surgery if strangulation or failure of conservative management.',
    explanationZh: '小肠梗阻（SBO）：腹痛、恶心/呕吐和腹胀三联征，X线显示气液平面和扩张肠袢。最常见原因：既往腹部手术后的粘连。处理：禁食、鼻胃管减压、静脉补液。绞窄或保守治疗失败时手术。',
    explanationEs: 'Obstrucción de intestino delgado: dolor + náuseas/vómitos + distensión + niveles aire-líquido. Causa más común: adherencias postquirúrgicas.'
  },
  {
    id: 41, step: 'step2', subject: 'Surgery',
    question: 'A 60-year-old female presents with right upper quadrant pain, fever, and jaundice (Charcot triad). She then develops confusion and hypotension. What is the most appropriate immediate management?',
    options: ['Schedule elective cholecystectomy', 'Start IV antibiotics and admit for observation', 'Emergency ERCP for biliary decompression', 'Percutaneous transhepatic cholangiography (PTC)', 'Start ursodeoxycholic acid'],
    correctAnswer: 2,
    explanationEn: 'Charcot triad (RUQ pain + fever + jaundice) = ascending cholangitis. Adding confusion and hypotension = Reynolds pentad = severe/septic cholangitis. Emergency biliary decompression via ERCP with sphincterotomy and stone extraction is life-saving. IV antibiotics alone are insufficient. Surgery (cholecystectomy) is performed after the acute episode resolves.',
    explanationZh: 'Charcot三联征（右上腹痛+发热+黄疸）= 急性胆管炎。加上意识模糊和低血压 = Reynolds五联征 = 重症/感染性胆管炎。急诊ERCP行胆道减压+括约肌切开取石可挽救生命。仅用静脉抗生素不够。急性发作缓解后进行胆囊切除术。',
    explanationEs: 'Colangitis ascendente grave (pentada de Reynolds): colangiopancreatografía retrógrada endoscópica urgente para descompresión biliar.'
  },
  {
    id: 42, step: 'step2', subject: 'Surgery',
    question: 'A 75-year-old male presents with a pulsatile abdominal mass and sudden-onset severe back pain. He is hypotensive with a heart rate of 120 bpm. What is the most likely diagnosis?',
    options: ['Acute pancreatitis', 'Ruptured abdominal aortic aneurysm', 'Perforated peptic ulcer', 'Renal colic', 'Acute mesenteric ischemia'],
    correctAnswer: 1,
    explanationEn: 'Classic triad: pulsatile abdominal mass + hypotension + back/flank pain = ruptured abdominal aortic aneurysm (AAA). This is a surgical emergency with high mortality. Immediate fluid resuscitation and emergent open or endovascular repair are required. Screening for AAA is recommended for men aged 65-75 with smoking history.',
    explanationZh: '经典三联征：腹部搏动性肿块+低血压+背部/侧腹痛 = 腹主动脉瘤破裂。这是外科急症，死亡率高。需立即液体复苏和急诊开放或血管内修复。推荐有吸烟史的65-75岁男性筛查AAA。',
    explanationEs: 'Tríada clásica: masa pulsátil abdominal + hipotensión + dolor lumbar → AAA roto. Emergencia quirúrgica. Alta mortalidad.'
  },
  {
    id: 43, step: 'step2', subject: 'Surgery',
    question: 'A 50-year-old female develops fever, tachycardia, and confusion 6 hours after a total thyroidectomy. She is extremely anxious and has diffuse muscle rigidity. Labs: Ca 7.8 mg/dL. What is the most appropriate management?',
    options: ['IV calcium gluconate', 'Oral calcium carbonate', 'IV magnesium sulfate', 'Dantrolene and cooling measures', 'IV lorazepam'],
    correctAnswer: 0,
    explanationEn: 'Hypocalcemia is a common complication after thyroidectomy due to inadvertent removal of or damage to the parathyroid glands. Symptoms: perioral numbness, tetany, Chvostek and Trousseau signs, prolonged QT, and in severe cases, seizures and laryngospasm. IV calcium gluconate is the treatment for symptomatic hypocalcemia.',
    explanationZh: '甲状腺切除术后低钙血症是常见并发症，由于意外切除或损伤甲状旁腺。症状：口周麻木、手足抽搐、Chvostek征和Trousseau征、QT延长，严重时癫痫和喉痉挛。静脉葡萄糖酸钙是有症状低钙血症的治疗。',
    explanationEs: 'Hipocalcemia post-tiroidectomía por daño a paratiroides. Tx: gluconato de calcio IV. Signos de Chvostek y Trousseau.'
  },

  // --- Pediatrics (4 questions: id 44-47) ---
  {
    id: 44, step: 'step2', subject: 'Pediatrics',
    question: 'A 3-week-old male presents with projectile, non-bilious vomiting after feeding. He appears hungry immediately after vomiting. On examination, an olive-shaped mass is palpable in the epigastrium. What is the most likely diagnosis?',
    options: ['Gastroesophageal reflux', 'Duodenal atresia', 'Hypertrophic pyloric stenosis', 'Intussusception', 'Malrotation with volvulus'],
    correctAnswer: 2,
    explanationEn: 'Hypertrophic pyloric stenosis typically presents at 3-6 weeks of age with projectile non-bilious vomiting, hungry infant, and an olive-shaped epigastric mass. More common in first-born males. Hypokalemic, hypochloremic metabolic alkalosis is the classic electrolyte abnormality. Treatment: pyloromyotomy.',
    explanationZh: '肥厚性幽门狭窄典型表现为3-6周龄婴儿的喷射性非胆汁性呕吐、饥饿婴儿和上腹部橄榄形肿块。更多见于头胎男婴。低钾低氯性代谢性碱中毒是经典电解质异常。治疗：幽门肌切开术。',
    explanationEs: 'Estenosis pilórica hipertrófica: vómito no bilioso en proyectil a las 3-6 semanas, masa en "oliva" epigástrica. Alcalosis metabólica hipoclorémica.'
  },
  {
    id: 45, step: 'step2', subject: 'Pediatrics',
    question: 'A 2-year-old presents with fever for 5 days, bilateral conjunctivitis, strawberry tongue, cervical lymphadenopathy, and a polymorphous rash. What is the most serious complication to monitor for?',
    options: ['Acute renal failure', 'Coronary artery aneurysm', 'Intussusception', 'Febrile seizures', 'Hepatic failure'],
    correctAnswer: 1,
    explanationEn: 'Kawasaki disease: fever >5 days plus 4 of 5 criteria (conjunctivitis, mucous membrane changes, cervical LAD, rash, extremity changes). The most serious complication is coronary artery aneurysm, which can lead to myocardial infarction. Treatment: IVIG + high-dose aspirin within 10 days of fever onset. Echocardiogram to monitor coronary arteries.',
    explanationZh: '川崎病：发热>5天加5项标准中的4项（结膜炎、黏膜改变、颈部淋巴结肿大、皮疹、肢端改变）。最严重并发症是冠状动脉瘤，可导致心肌梗死。治疗：发热10天内IVIG+大剂量阿司匹林。超声心动图监测冠状动脉。',
    explanationEs: 'Enfermedad de Kawasaki: fiebre >5 días + 4/5 criterios. Complicación más grave: aneurismas coronarios. Tx: IGIV + aspirina.'
  },
  {
    id: 46, step: 'step2', subject: 'Pediatrics',
    question: 'A 6-month-old infant presents with a "whooping" sound during inspiration after paroxysms of coughing, post-tussive emesis, and cyanosis during coughing spells. The mother declined vaccinations. What is the most appropriate treatment?',
    options: ['Amoxicillin', 'Azithromycin', 'Supportive care only', 'Inhaled albuterol', 'Oral prednisolone'],
    correctAnswer: 1,
    explanationEn: 'Pertussis (whooping cough) — paroxysmal cough with inspiratory whoop + post-tussive emesis. Caused by Bordetella pertussis. Macrolides (azithromycin) are the treatment of choice. They reduce infectivity but do not significantly alter the clinical course if given after the paroxysmal phase. Post-exposure prophylaxis with macrolides is recommended for close contacts.',
    explanationZh: '百日咳——阵发性咳嗽伴吸气性吼声+咳后呕吐。由百日咳鲍特菌引起。大环内酯类（阿奇霉素）是首选治疗。可降低传染性但如在阵咳期后给药不会显著改变临床过程。建议密切接触者用大环内酯类进行暴露后预防。',
    explanationEs: 'Tos ferina: tos paroxística + estridor inspiratorio + vómito postusivo. Tx: azitromicina. Profilaxis post-exposición a contactos.'
  },
  {
    id: 47, step: 'step2', subject: 'Pediatrics',
    question: 'A 4-year-old child presents with a 2-day history of bloody diarrhea, abdominal pain, and low-grade fever. Three days ago, the family had a barbecue with undercooked ground beef. What is the most concerning potential complication?',
    options: ['Intussusception', 'Hemolytic uremic syndrome (HUS)', 'Acute appendicitis', 'Reactive arthritis', 'Guillain-Barre syndrome'],
    correctAnswer: 1,
    explanationEn: 'Bloody diarrhea after undercooked beef is classic for E. coli O157:H7 (Shiga toxin-producing). The most concerning complication is hemolytic uremic syndrome (HUS): triad of microangiopathic hemolytic anemia, thrombocytopenia, and acute kidney injury. Antibiotics are CONTRAINDICATED as they increase Shiga toxin release and HUS risk. Supportive care only.',
    explanationZh: '未煮熟的牛肉后血性腹泻是产志贺毒素大肠杆菌O157:H7的典型表现。最令人担忧的并发症是溶血性尿毒症综合征（HUS）：微血管病性溶血性贫血、血小板减少和急性肾损伤三联征。抗生素是禁忌，因其增加志贺毒素释放和HUS风险。仅支持治疗。',
    explanationEs: 'E. coli O157:H7 (toxina Shiga) tras carne poco cocida. Complicación: síndrome urémico hemolítico. Antibióticos CONTRAINDICADOS.'
  },

  // --- Obstetrics & Gynecology (4 questions: id 48-51) ---
  {
    id: 48, step: 'step2', subject: 'Obstetrics & Gynecology',
    question: 'A 28-year-old G1P0 at 32 weeks presents with hypertension (160/100), proteinuria (3+ on dipstick), and 2+ pedal edema. She complains of a severe headache and epigastric pain. What is the definitive management?',
    options: ['Start labetalol and observe', 'Administer magnesium sulfate and prepare for delivery', 'Start nifedipine and bed rest', 'Administer betamethasone and deliver in 48 hours', 'Start hydralazine IV and continue monitoring'],
    correctAnswer: 1,
    explanationEn: 'Severe preeclampsia with severe features (BP ≥160/110, proteinuria, headache, epigastric pain) — these are signs of impending eclampsia / HELLP syndrome. Definitive management is delivery regardless of gestational age. Magnesium sulfate is given for seizure prophylaxis. Antihypertensives (labetalol, hydralazine, nifedipine) control BP but are not definitive.',
    explanationZh: '重度子痫前期伴严重特征（BP≥160/110、蛋白尿、头痛、上腹痛）——这些是即将发生子痫/HELLP综合征的征象。无论孕周，最终治疗是分娩。硫酸镁用于预防惊厥。降压药（拉贝洛尔、肼苯哒嗪、硝苯地平）控制血压但不是最终治疗。',
    explanationEs: 'Preeclampsia grave con signos de gravedad: parto independientemente de edad gestacional + sulfato de magnesio para profilaxis de eclampsia.'
  },
  {
    id: 49, step: 'step2', subject: 'Obstetrics & Gynecology',
    question: 'A 35-year-old woman presents with a 2-year history of infertility. She has irregular menstrual cycles, hirsutism, and acne. BMI is 32. Transvaginal ultrasound shows multiple ovarian follicles with "string of pearls" appearance. What is the first-line treatment for ovulation induction?',
    options: ['Metformin', 'Clomiphene citrate', 'Letrozole', 'Gonadotropins', 'Oral contraceptive pills'],
    correctAnswer: 2,
    explanationEn: 'PCOS with infertility. Letrozole (aromatase inhibitor) is now the first-line agent for ovulation induction in PCOS, as it has higher live birth rates compared to clomiphene citrate. Clomiphene was historically first-line but has antiestrogenic effects on the endometrium. Metformin is adjunctive. Weight loss is recommended for obese patients.',
    explanationZh: 'PCOS伴不孕。来曲唑（芳香化酶抑制剂）现在是PCOS促排卵的一线药物，与克罗米芬相比有更高的活产率。克罗米芬历史上是一线但有对子宫内膜的抗雌激素作用。二甲双胍是辅助用药。肥胖患者建议减重。',
    explanationEs: 'SOP con infertilidad. Letrozol es primera línea para inducción de ovulación (mayores tasas de nacidos vivos que clomifeno).'
  },
  {
    id: 50, step: 'step2', subject: 'Obstetrics & Gynecology',
    question: 'A 32-year-old G2P1 at 28 weeks presents with painless vaginal bleeding. She has had no recent intercourse or trauma. Fetal heart tones are normal. The uterus is soft and non-tender. What is the most likely diagnosis?',
    options: ['Placental abruption', 'Placenta previa', 'Vasa previa', 'Uterine rupture', 'Cervical polyp'],
    correctAnswer: 1,
    explanationEn: 'Painless vaginal bleeding in the third trimester with a soft, non-tender uterus is classic for placenta previa. In contrast, placental abruption presents with painful bleeding + uterine hypertonicity/tenderness. Diagnosis of placenta previa is confirmed by transabdominal ultrasound. Avoid digital cervical exam (may cause hemorrhage).',
    explanationZh: '妊娠晚期无痛性阴道出血伴子宫柔软无压痛是前置胎盘的典型表现。相比之下，胎盘早剥表现为疼痛性出血+子宫高张力/压痛。前置胎盘诊断通过经腹超声确认。避免指检宫颈（可能引起大出血）。',
    explanationEs: 'Sangrado vaginal indoloro en tercer trimestre + útero blando → placenta previa. NO realizar tacto vaginal. Confirmar con ecografía.'
  },
  {
    id: 51, step: 'step2', subject: 'Obstetrics & Gynecology',
    question: 'A 60-year-old postmenopausal female presents with vaginal bleeding. Transvaginal ultrasound shows endometrial thickness of 8 mm. Endometrial biopsy reveals atypical hyperplasia. What is the most appropriate management?',
    options: ['Observation with repeat ultrasound in 6 months', 'Progestin therapy (oral or IUD)', 'Total hysterectomy with bilateral salpingo-oophorectomy', 'Endometrial ablation', 'Tamoxifen therapy'],
    correctAnswer: 2,
    explanationEn: 'Endometrial atypical hyperplasia in a postmenopausal woman carries a high risk of progression to endometrial carcinoma (up to 30%). Total hysterectomy with bilateral salpingo-oophorectomy is the definitive treatment. Progestin therapy may be considered for premenopausal women who wish to preserve fertility.',
    explanationZh: '绝经后子宫内膜不典型增生进展为子宫内膜癌的风险高（可达30%）。全子宫切除+双附件切除是最终治疗。孕激素治疗可考虑用于希望保留生育能力的绝经前妇女。',
    explanationEs: 'Hiperplasia endometrial atípica en posmenopáusica: histerectomía total + salpingooforectomía bilateral. Alto riesgo de progresión a carcinoma.'
  },

  // --- Psychiatry (4 questions: id 52-55) ---
  {
    id: 52, step: 'step2', subject: 'Psychiatry',
    question: 'A 22-year-old male presents with auditory hallucinations, social withdrawal, and disorganized speech for the past 8 months. He believes that the government is reading his thoughts. What is the most appropriate first-line pharmacotherapy?',
    options: ['Haloperidol', 'Risperidone', 'Clozapine', 'Lithium', 'Fluoxetine'],
    correctAnswer: 1,
    explanationEn: 'Schizophrenia: >6 months of psychotic symptoms including hallucinations, delusions (thought broadcasting), disorganized speech, and negative symptoms (social withdrawal). First-line: atypical antipsychotics (risperidone, olanzapine, quetiapine, aripiprazole) due to better tolerability and effects on negative symptoms. Clozapine is reserved for treatment-resistant cases. Haloperidol is typical antipsychotic with more EPS.',
    explanationZh: '精神分裂症：>6个月的精神病性症状包括幻觉、妄想（思维被广播）、言语紊乱和阴性症状（社交退缩）。一线：非典型抗精神病药（利培酮、奥氮平、喹硫平、阿立哌唑），因耐受性好且对阴性症状有效。氯氮平保留用于难治性病例。氟哌啶醇是典型抗精神病药，EPS更多。',
    explanationEs: 'Esquizofrenia (>6 meses síntomas). Primera línea: antipsicóticos atípicos (risperidona, olanzapina). Clozapina para casos resistentes.'
  },
  {
    id: 53, step: 'step2', subject: 'Psychiatry',
    question: 'A 35-year-old female presents with episodes of palpitations, sweating, chest pain, and fear of dying that peak within 10 minutes. Between episodes, she worries about having more attacks and avoids leaving her home. What is the most appropriate first-line treatment?',
    options: ['Alprazolam', 'Sertraline (SSRI)', 'Propranolol', 'Quetiapine', 'Buspirone'],
    correctAnswer: 1,
    explanationEn: 'Panic disorder with agoraphobia. First-line treatment is SSRIs (sertraline, paroxetine, fluoxetine). CBT is also first-line. Benzodiazepines (alprazolam) provide rapid relief but are second-line due to risk of dependence. Beta-blockers (propranolol) can help with somatic symptoms but do not treat the underlying disorder.',
    explanationZh: '惊恐障碍伴广场恐惧症。一线治疗是SSRI（舍曲林、帕罗西汀、氟西汀）。CBT也是一线。苯二氮卓类（阿普唑仑）起效快但为二线因依赖风险。β阻滞剂（普萘洛尔）可帮助躯体症状但不治疗基础疾病。',
    explanationEs: 'Trastorno de pánico con agorafobia. Primera línea: ISRS (sertralina) + TCC. Benzodiacepinas: segunda línea.'
  },
  {
    id: 54, step: 'step2', subject: 'Psychiatry',
    question: 'A 45-year-old male with bipolar I disorder on lithium develops coarse tremor, confusion, severe diarrhea, and ataxia. Lithium level is 2.4 mEq/L. What is the most appropriate immediate management?',
    options: ['Reduce lithium dose by 50%', 'Discontinue lithium and start valproate', 'IV normal saline hydration and hemodialysis', 'Administer oral sodium polystyrene sulfonate', 'Give propranolol for tremor'],
    correctAnswer: 2,
    explanationEn: 'Lithium toxicity (level >2.0 mEq/L) with neurological symptoms (tremor, confusion, ataxia). Severe toxicity requires hemodialysis, which rapidly removes lithium. IV normal saline is for volume repletion but is not sufficient alone. Lithium has a narrow therapeutic index (target 0.6-1.2 mEq/L). Toxicity can be precipitated by dehydration, NSAIDs, ACEi, or thiazides.',
    explanationZh: '锂中毒（水平>2.0 mEq/L）伴神经系统症状（震颤、意识模糊、共济失调）。严重中毒需要血液透析快速清除锂。静脉生理盐水补液但单独不足。锂治疗窗窄（目标0.6-1.2 mEq/L）。脱水、NSAID、ACEi或噻嗪类可诱发中毒。',
    explanationEs: 'Toxicidad por litio (>2.0) con síntomas neurológicos → hemodiálisis. Nivel terapéutico: 0.6-1.2 mEq/L.'
  },
  {
    id: 55, step: 'step2', subject: 'Psychiatry',
    question: 'A 25-year-old female is brought to the ED after she was found wandering on a highway, claiming she was "going to meet the President." She has not slept for 4 days, speaks rapidly, and has spent $5,000 on luxury items. She has no prior psychiatric history. What is the most likely diagnosis?',
    options: ['Schizophrenia', 'Bipolar I disorder, manic episode', 'Schizoaffective disorder', 'Substance-induced psychosis', 'Brief psychotic disorder'],
    correctAnswer: 1,
    explanationEn: 'Bipolar I disorder, manic episode: ≥1 week of elevated/irritable mood + ≥3 of: grandiosity, decreased need for sleep, pressured speech, flight of ideas, distractibility, increased goal-directed activity, risky behaviors (spending spree). No prior psychiatric history + no psychotic symptoms outside mood episode = bipolar I. Schizophrenia requires >6 months. Brief psychotic disorder is <1 month.',
    explanationZh: '双相I型障碍，躁狂发作：≥1周情绪高涨/易激惹+≥3项：夸大、睡眠需求减少、言语急迫、思维奔逸、注意力分散、目标导向活动增加、冒险行为（挥霍）。无既往精神病史+无情绪发作外的精神病性症状=双相I型。精神分裂症需>6个月。短暂精神病性障碍<1个月。',
    explanationEs: 'Trastorno bipolar I, episodio maníaco: ≥1 semana ánimo elevado + grandiosidad, ↓sueño, habla presionada, fuga de ideas, gastos excesivos.'
  },

  // --- Pathology (Step 2: id 56-57) ---
  {
    id: 56, step: 'step2', subject: 'Pathology',
    question: 'A 62-year-old male presents with 3 months of progressive dysphagia and weight loss. Endoscopy shows a circumferential lesion in the middle esophagus. Biopsy reveals malignant cells with squamous differentiation. What is the strongest risk factor?',
    options: ['Chronic GERD', 'H. pylori infection', 'Smoking and alcohol consumption', 'Barrett esophagus', 'Achalasia'],
    correctAnswer: 2,
    explanationEn: 'Esophageal squamous cell carcinoma (middle third, squamous differentiation). Strongest risk factors: smoking + alcohol (synergistic). Adenocarcinoma is associated with GERD and Barrett esophagus. Squamous cell carcinoma is more common worldwide; adenocarcinoma is more common in Western countries.',
    explanationZh: '食管鳞状细胞癌（中段，鳞状分化）。最强危险因素：吸烟+饮酒（协同作用）。腺癌与GERD和巴雷特食管相关。鳞状细胞癌在全球更常见；腺癌在西方国家更常见。',
    explanationEs: 'Carcinoma escamoso de esófago: tabaquismo + alcohol (sinérgico). Adenocarcinoma: GERD + Barrett.'
  },
  {
    id: 57, step: 'step2', subject: 'Pathology',
    question: 'A 50-year-old female with BRCA1 mutation undergoes prophylactic bilateral mastectomy. Pathology of the breast tissue shows atypical ductal hyperplasia. What is her lifetime risk of breast cancer with this finding without intervention?',
    options: ['Slightly elevated (10-15%)', 'Moderately elevated (30-40%)', 'Significantly elevated (50-85%)', 'Same as general population (12%)', 'Nearly 100%'],
    correctAnswer: 2,
    explanationEn: 'BRCA1 mutation carriers have a 50-85% lifetime risk of breast cancer. The atypical ductal hyperplasia is an additional risk factor but the BRCA1 mutation is the primary driver. BRCA1 also increases the risk of ovarian cancer (40-60%). BRCA2 has lower breast cancer risk but higher male breast cancer and pancreatic cancer risk.',
    explanationZh: 'BRCA1突变携带者终生乳腺癌风险50-85%。非典型导管增生是额外风险因素但BRCA1突变是主要驱动因素。BRCA1也增加卵巢癌风险（40-60%）。BRCA2乳腺癌风险较低但男性乳腺癌和胰腺癌风险较高。',
    explanationEs: 'Mutación BRCA1: riesgo de cáncer de mama 50-85% de por vida + riesgo de cáncer de ovario 40-60%.'
  },

  // --- Emergency Medicine (2 questions: id 58-59) ---
  {
    id: 58, step: 'step2', subject: 'Emergency Medicine',
    question: 'A 25-year-old male is brought to the ED after a motorcycle accident. He is unresponsive with a GCS of 6. CT shows an epidural hematoma with mass effect. What is the classic CT appearance?',
    options: ['Crescent-shaped hyperdensity crossing suture lines', 'Biconvex (lens-shaped) hyperdensity not crossing suture lines', 'Diffuse subarachnoid hyperdensity in sulci', 'Intraparenchymal hemorrhage in basal ganglia', 'Linear skull fracture without hematoma'],
    correctAnswer: 1,
    explanationEn: 'Epidural hematoma: biconvex (lens-shaped) hyperdensity that does NOT cross suture lines (limited by dural attachments). Usually caused by tear of the middle meningeal artery (associated with temporal bone fracture). Classic presentation: lucid interval (initial loss of consciousness → awake and alert → rapid deterioration). Surgical emergency.',
    explanationZh: '硬膜外血肿：双凸形（透镜形）高密度影，不跨越颅缝（受硬脑膜附着限制）。通常由脑膜中动脉撕裂引起（与颞骨骨折相关）。经典表现：清醒间隔（初期意识丧失→清醒警觉→迅速恶化）。外科急症。',
    explanationEs: 'Hematoma epidural: hiperdensidad biconvexa que NO cruza suturas. Arteria meníngea media. Intervalo lúcido. Emergencia quirúrgica.'
  },
  {
    id: 59, step: 'step2', subject: 'Emergency Medicine',
    question: 'A 50-year-old male presents with sudden-onset severe epigastric pain radiating to the back, nausea, and vomiting. He has a history of alcoholism. Labs: amylase 1,200, lipase 2,500, ALT 45, AST 50, Ca 7.5. What scoring system is most commonly used to predict severity?',
    options: ['Ranson criteria', 'CURB-65', 'TIMI score', 'CHA2DS2-VASc', 'Glasgow-Blatchford score'],
    correctAnswer: 0,
    explanationEn: 'Acute pancreatitis (alcohol-induced): elevated amylase/lipase (>3x upper limit), epigastric pain, hypocalcemia. Ranson criteria (11 parameters) is the classic severity scoring system. BISAP and APACHE II are also used. Hypocalcemia (<8 mg/dL) is a poor prognostic factor in pancreatitis (saponification consumes calcium).',
    explanationZh: '急性胰腺炎（酒精性）：淀粉酶/脂肪酶升高（>3倍上限）、上腹痛、低钙血症。Ranson标准（11个参数）是经典严重程度评分系统。BISAP和APACHE II也使用。低钙血症（<8 mg/dL）是胰腺炎的不良预后因素（皂化消耗钙）。',
    explanationEs: 'Pancreatitis aguda (alcohólica): amilasa/lipasa elevadas, dolor epigástrico, hipocalcemia. Criterios de Ranson para gravedad.'
  },

  // --- Neurology (Step 2: id 60-61) ---
  {
    id: 60, step: 'step2', subject: 'Neurology',
    question: 'A 70-year-old female presents with unilateral throbbing headache, jaw claudication, and visual disturbances. ESR is 98 mm/hr. Temporal artery biopsy shows granulomatous inflammation. What is the immediate treatment?',
    options: ['Low-dose aspirin', 'High-dose corticosteroids (prednisone)', 'Methotrexate', 'Tocilizumab', 'Sumatriptan'],
    correctAnswer: 1,
    explanationEn: 'Giant cell arteritis (temporal arteritis): headache + jaw claudication + visual symptoms + elevated ESR + granulomatous inflammation on biopsy. Immediate high-dose corticosteroids (prednisone 40-60 mg/day) to prevent irreversible vision loss (anterior ischemic optic neuropathy). Do NOT wait for biopsy results to start treatment. Tocilizumab is for steroid-sparing.',
    explanationZh: '巨细胞动脉炎（颞动脉炎）：头痛+颌跛行+视觉症状+ESR升高+活检肉芽肿性炎症。立即大剂量皮质类固醇（泼尼松40-60 mg/天）以防止不可逆视力丧失（前部缺血性视神经病变）。不要等待活检结果再开始治疗。托珠单抗用于减少激素用量。',
    explanationEs: 'Arteritis de células gigantes: cefalea + claudicación mandibular + VSG elevada. Tratamiento inmediato: corticosteroides dosis altas para prevenir ceguera.'
  },
  {
    id: 61, step: 'step2', subject: 'Neurology',
    question: 'A 32-year-old female presents with unilateral vision loss in the right eye that developed over 2 days, with pain on eye movement. She had a similar episode 2 years ago that resolved spontaneously. MRI shows periventricular white matter lesions. What is the most likely diagnosis?',
    options: ['Optic neuritis secondary to multiple sclerosis', 'Ischemic optic neuropathy', 'Retinal detachment', 'Acute angle-closure glaucoma', 'Central retinal vein occlusion'],
    correctAnswer: 0,
    explanationEn: 'Optic neuritis: subacute vision loss + pain with eye movement + afferent pupillary defect. MRI showing periventricular lesions confirms multiple sclerosis. The prior episode with spontaneous resolution is characteristic of MS relapses. Treatment: high-dose IV methylprednisolone (speeds recovery, does not change long-term disability).',
    explanationZh: '视神经炎：亚急性视力丧失+眼球运动痛+相对性传入性瞳孔障碍。MRI显示脑室周围病变确诊多发性硬化。既往发作自发缓解是MS复发的特征。治疗：大剂量静脉甲泼尼龙（加速恢复，不改变长期残疾）。',
    explanationEs: 'Neuritis óptica + lesiones periventriculares en RM → esclerosis múltiple. Tx: metilprednisolona IV dosis altas.'
  },

  // --- More Step 2 Internal Medicine (id 62-63) ---
  {
    id: 62, step: 'step2', subject: 'Internal Medicine',
    question: 'A 60-year-old male presents with progressive dyspnea on exertion, orthopnea, and paroxysmal nocturnal dyspnea. Examination reveals an S3 gallop, JVD, and bilateral crackles. BNP is 1,200 pg/mL. Chest X-ray shows cardiomegaly and pulmonary vascular congestion. What is the most appropriate initial pharmacotherapy?',
    options: ['IV furosemide', 'Oral metoprolol', 'IV dobutamine', 'Oral lisinopril', 'Oral digoxin'],
    correctAnswer: 0,
    explanationEn: 'Acute decompensated heart failure (ADHF) with volume overload. Initial management: IV loop diuretic (furosemide) for rapid decongestion. ACEi and beta-blockers are chronic HFrEF therapies but are not the first step in acute decompensation. BNP >1,000 is consistent with acute heart failure. Once euvolemic, guideline-directed medical therapy should be optimized.',
    explanationZh: '急性失代偿性心力衰竭伴容量负荷过重。初始处理：静脉袢利尿剂（呋塞米）快速减轻充血。ACEi和β阻滞剂是慢性HFrEF治疗但不是急性失代偿的第一步。BNP>1,000符合急性心衰。容量正常后优化指南指导的药物治疗。',
    explanationEs: 'Insuficiencia cardíaca aguda descompensada: primer paso furosemida IV para descongestión rápida. BNP >1,000.'
  },
  {
    id: 63, step: 'step2', subject: 'Internal Medicine',
    question: 'A 40-year-old female with rheumatoid arthritis on methotrexate presents with a 3-month history of dry cough, dyspnea, and low-grade fever. Chest X-ray shows bilateral reticulonodular infiltrates. Bronchoscopy with biopsy shows non-caseating granulomas. What is the most likely diagnosis?',
    options: ['Pulmonary tuberculosis', 'Methotrexate-induced pneumonitis', 'Rheumatoid arthritis-associated interstitial lung disease', 'Sarcoidosis', 'Pneumocystis pneumonia'],
    correctAnswer: 1,
    explanationEn: 'Methotrexate-induced pneumonitis: subacute cough, dyspnea, fever with bilateral infiltrates and granulomatous inflammation. It is a hypersensitivity reaction that can occur at any dose or duration. Management: discontinue methotrexate and start corticosteroids. RA-associated ILD typically has UIP pattern, not granulomas. TB would show caseating granulomas.',
    explanationZh: '甲氨蝶呤诱导的肺炎：亚急性咳嗽、呼吸困难、发热伴双侧浸润和肉芽肿性炎症。是一种可在任何剂量或持续时间发生的超敏反应。处理：停用甲氨蝶呤并开始皮质类固醇。RA相关ILD通常为UIP型而非肉芽肿。TB显示干酪样肉芽肿。',
    explanationEs: 'Neumonitis por metotrexato: tos subaguda + disnea + infiltrados bilaterales + granulomas no caseificantes. Tx: suspender MTX + corticosteroides.'
  },

  // --- More Step 2 (id 64) ---
  {
    id: 64, step: 'step2', subject: 'Internal Medicine',
    question: 'A 55-year-old male smoker presents with progressive dyspnea, barrel-shaped chest, and diminished breath sounds. Pulmonary function tests show: FEV1/FVC <0.70, FEV1 45% predicted, no significant bronchodilator reversibility. DLCO is decreased. Which of the following is consistent with this pattern?',
    options: ['Asthma', 'Chronic bronchitis', 'Emphysema', 'Bronchiectasis', 'Interstitial lung disease'],
    correctAnswer: 2,
    explanationEn: 'Irreversible airflow obstruction (FEV1/FVC <0.70) with decreased DLCO is characteristic of emphysema. Decreased DLCO reflects destruction of alveolar-capillary membrane. Chronic bronchitis also has irreversible obstruction but typically normal DLCO. Asthma is reversible. GOLD stage 2 (moderate) COPD: FEV1 50-79% predicted. Centriacinar emphysema is strongly associated with smoking.',
    explanationZh: '不可逆气流阻塞（FEV1/FVC<0.70）伴DLCO降低是肺气肿的特征。DLCO降低反映肺泡-毛细血管膜破坏。慢性支气管炎也有不可逆阻塞但DLCO通常正常。哮喘是可逆的。GOLD 2级（中度）COPD：FEV1 50-79%预计值。小叶中央型肺气肿与吸烟密切相关。',
    explanationEs: 'Enfisema: obstrucción irreversible + DLCO disminuida (destrucción membrana alveolo-capilar). GOLD 2: FEV1 45%.'
  },

  // ============================================================
  // STEP 3 — PATIENT MANAGEMENT (16 questions, id 65-80)
  // ============================================================

  // --- Primary Care (4 questions: id 65-68) ---
  {
    id: 65, step: 'step3', subject: 'Primary Care',
    question: 'A 50-year-old female comes for a health maintenance exam. She has no complaints or significant history. Sexually active with one partner, inconsistent condom use. Which screening test is recommended?',
    options: ['Pap smear every 3 years', 'Mammography annually', 'Colonoscopy at age 50', 'Lipid panel every 5 years', 'Bone density scan (DEXA)'],
    correctAnswer: 2,
    explanationEn: 'Colorectal cancer screening starts at age 45-50 for average-risk individuals. Colonoscopy every 10 years, or FIT annually, or flexible sigmoidoscopy every 5 years. Mammography starts at 40-50. Pap smears are not needed after 65 if prior screening adequate.',
    explanationZh: '结直肠癌筛查从45-50岁开始用于平均风险个体。结肠镜每10年一次，或FIT每年一次，或柔性乙状结肠镜每5年一次。乳房X线摄影从40-50岁开始。65岁后如先前筛查充分则不需巴氏涂片。',
    explanationEs: 'Cribado de cáncer colorrectal a los 50 años. Colonoscopia cada 10 años o FIT anual.'
  },
  {
    id: 66, step: 'step3', subject: 'Primary Care',
    question: 'A 65-year-old male with COPD, hypertension, diabetes, and chronic kidney disease (GFR 25) presents for medication review. He is on lisinopril 20 mg, metformin 1000 mg BID, atorvastatin 40 mg, and albuterol PRN. Which medication adjustment is most critical?',
    options: ['Discontinue lisinopril due to CKD', 'Reduce or discontinue metformin due to risk of lactic acidosis', 'Discontinue atorvastatin due to liver risk', 'Add a second antihypertensive', 'No changes needed'],
    correctAnswer: 1,
    explanationEn: 'Metformin is contraindicated when GFR <30 mL/min/1.73m² due to increased risk of lactic acidosis. At GFR 25, metformin should be discontinued. The FDA recommends against metformin use below eGFR 30. ACEi (lisinopril) is actually beneficial in CKD for renoprotection. Alternative diabetes medications for CKD: glipizide, pioglitazone, or DPP-4 inhibitors.',
    explanationZh: '甲双胍在GFR<30 mL/min/1.73m²时禁忌使用，因乳酸酸中毒风险增加。GFR 25时，应停用甲双胍。FDA建议eGFR低于30时反对使用甲双胍。ACEi（赖诺普利）在CKD中对肾脏有保护作用。CKD替代降糖药：格列吡嗪、吡格列酮或DPP-4抑制剂。',
    explanationEs: 'Metformina contraindicada con TFG <30 por riesgo de acidosis láctica. Suspender con TFG 25. IECA beneficioso en ERC.'
  },
  {
    id: 67, step: 'step3', subject: 'Primary Care',
    question: 'A 55-year-old male with a 40-pack-year smoking history comes for a routine visit. He has no respiratory symptoms. What is the USPSTF-recommended screening test for this patient?',
    options: ['Chest X-ray', 'Annual low-dose CT chest', 'Sputum cytology', 'Pulmonary function tests', 'No screening recommended'],
    correctAnswer: 1,
    explanationEn: 'USPSTF recommends annual low-dose CT (LDCT) for lung cancer screening in adults aged 50-80 who have a 20+ pack-year smoking history and currently smoke or quit within the past 15 years. This patient (age 55, 40 pack-years) meets all criteria. LDCT reduces lung cancer mortality by 20% compared to chest X-ray.',
    explanationZh: 'USPSTF推荐对50-80岁、20+包年吸烟史、目前吸烟或过去15年内戒烟的成年人进行每年低剂量CT（LDCT）肺癌筛查。该患者（55岁、40包年）符合所有标准。LDCT相比胸片降低肺癌死亡率20%。',
    explanationEs: 'Cribado de cáncer de pulmón: TC de baja dosis anual para 50-80 años, ≥20 paquetes-año, fumador actual o abandono <15 años.'
  },
  {
    id: 68, step: 'step3', subject: 'Primary Care',
    question: 'A 72-year-old female presents for annual follow-up. She fell twice in the past 6 months. She takes amlodipine, hydrochlorothiazide, and sertraline. Gait is slow and unsteady. Which single intervention has the strongest evidence for preventing falls in community-dwelling older adults?',
    options: ['Vitamin D supplementation', 'Discontinuation of all antihypertensives', 'Multifactorial exercise program (balance + strength training)', 'Home safety modifications', 'Corrective eyewear'],
    correctAnswer: 2,
    explanationEn: 'Exercise programs focusing on balance and strength training have the strongest evidence for fall prevention. Multifactorial interventions (exercise + medication review + home safety) are also effective. Vitamin D alone does not prevent falls unless deficiency is present. Medication review should target psychoactive medications. USPSTF recommends exercise interventions.',
    explanationZh: '以平衡和力量训练为重点的运动计划有最强的防跌倒证据。多因素干预（运动+药物审查+居家安全）也有效。仅维生素D不能预防跌倒除非存在缺乏。药物审查应针对精神活性药物。USPSTF推荐运动干预。',
    explanationEs: 'Programa de ejercicio multifactorial (equilibrio + fuerza) tiene la evidencia más fuerte para prevención de caídas en adultos mayores.'
  },

  // --- Internal Medicine (Step 3: id 69-70) ---
  {
    id: 69, step: 'step3', subject: 'Internal Medicine',
    question: 'A 58-year-old male with type 2 diabetes presents for follow-up. HbA1c is 8.2% on metformin 1000 mg BID. Which is the most appropriate next step?',
    options: ['Add a GLP-1 receptor agonist', 'Add basal insulin', 'Increase metformin to 1500 mg BID', 'Add a sulfonylurea', 'No change needed'],
    correctAnswer: 0,
    explanationEn: 'Inadequate glycemic control (HbA1c 8.2%) on maximally tolerated metformin. GLP-1 receptor agonists are preferred second-line agents: they lower HbA1c effectively, promote weight loss, and have proven cardiovascular benefits. For patients with ASCVD, CKD, or HF, SGLT2 inhibitors are also preferred. Sulfonylureas are less preferred due to hypoglycemia and weight gain.',
    explanationZh: '最大耐受剂量二甲双胍下血糖控制不充分（HbA1c 8.2%）。GLP-1受体激动剂是首选二线药物：有效降低HbA1c、促进减重并具有心血管获益证据。对于ASCVD、CKD或HF患者，SGLT2抑制剂也是首选。磺脲类因低血糖和体重增加而不被推荐。',
    explanationEs: 'HbA1c 8.2% con metformina máxima. Segundo agente: agonista GLP-1 (beneficio CV, pérdida de peso). Alternativa: iSGLT2.'
  },
  {
    id: 70, step: 'step3', subject: 'Internal Medicine',
    question: 'A 50-year-old female with rheumatoid arthritis on methotrexate and prednisone 10 mg daily presents with a 2-week history of progressive dyspnea, dry cough, and fever. CT shows diffuse ground-glass opacities. Bronchoalveolar lavage shows no organisms on special stains. What is the most likely diagnosis?',
    options: ['Bacterial pneumonia', 'Pneumocystis jirovecii pneumonia', 'Methotrexate-induced pneumonitis', 'COVID-19 pneumonia', 'Pulmonary embolism'],
    correctAnswer: 1,
    explanationEn: 'Immunocompromised patient (prednisone + MTX) with subacute dyspnea, dry cough, and diffuse ground-glass opacities — classic for Pneumocystis jirovecii pneumonia (PCP). PCP prophylaxis (TMP-SMX) should be considered for patients on prednisone ≥20 mg/day for >4 weeks. Diagnosis confirmed by PCR or direct fluorescent antibody on BAL fluid.',
    explanationZh: '免疫功能低下患者（泼尼松+MTX）伴亚急性呼吸困难、干咳和弥漫性磨玻璃影——肺孢子菌肺炎（PCP）的典型表现。泼尼松≥20 mg/天持续>4周的患者应考虑PCP预防（TMP-SMX）。通过BAL液PCR或直接荧光抗体确诊。',
    explanationEs: 'Paciente inmunocomprometida con opacidades en vidrio esmerilado difusas → PCP. Profilaxis: TMP-SMX si prednisona ≥20 mg/día >4 semanas.'
  },

  // --- Emergency Medicine (Step 3: id 71-72) ---
  {
    id: 71, step: 'step3', subject: 'Emergency Medicine',
    question: 'A 60-year-old male with a history of MI and HFrEF (EF 25%) presents with palpitations, lightheadedness, and a pulse of 150 bpm. ECG shows a wide-complex tachycardia. BP is 80/50. What is the most appropriate immediate management?',
    options: ['Adenosine 6 mg IV push', 'Synchronized cardioversion', 'Amiodarone 150 mg IV', 'Lidocaine 100 mg IV', 'Carotid sinus massage'],
    correctAnswer: 1,
    explanationEn: 'Unstable wide-complex tachycardia (hypotension + altered mental status/lightheadedness) requires immediate synchronized cardioversion. Adenosine is for stable SVT. Amiodarone is appropriate for stable ventricular tachycardia. The "unstable" designation (hypotension, chest pain, altered mental status, shock) overrides rhythm identification — electricity first.',
    explanationZh: '不稳定宽QRS心动过速（低血压+意识改变/头晕）需要立即同步电复律。腺苷用于稳定SVT。胺碘酮适用于稳定室性心动过速。"不稳定"判断（低血压、胸痛、意识改变、休克）优先于心律识别——先电击。',
    explanationEs: 'Taquicardia de complejo ancho inestable (hipotensión) → cardioversión sincronizada inmediata. Inestabilidad manda electricidad.'
  },
  {
    id: 72, step: 'step3', subject: 'Emergency Medicine',
    question: 'A 30-year-old female presents with 2 days of dysuria, urinary frequency, and suprapubic pain. She is afebrile and has no flank pain. Urine dipstick shows positive leukocyte esterase and nitrites. She is 8 weeks pregnant. What is the most appropriate treatment?',
    options: ['Nitrofurantoin for 5 days', 'Trimethoprim-sulfamethoxazole for 3 days', 'Ciprofloxacin for 3 days', 'Amoxicillin-clavulanate for 7 days', 'No treatment — symptoms are self-limited'],
    correctAnswer: 0,
    explanationEn: 'Uncomplicated UTI in pregnancy. Nitrofurantoin is safe and effective for 5-7 days. TMP-SMX is avoided in the first trimester (folate antagonist — neural tube defects) and near term (kernicterus). Ciprofloxacin is avoided in pregnancy (cartilage damage in animal studies). All UTIs in pregnancy should be treated (risk of pyelonephritis, preterm labor).',
    explanationZh: '妊娠期无并发症UTI。呋喃妥因5-7天安全有效。TMP-SMX在孕早期避免使用（叶酸拮抗剂—神经管缺陷）和近足月（核黄疸）。环丙沙星孕期避免（动物研究软骨损伤）。所有妊娠期UTI均应治疗（肾盂肾炎、早产风险）。',
    explanationEs: 'ITU no complicada en embarazo: nitrofurantoína 5-7 días. Evitar TMP-SMX (1er trimestre) y fluoroquinolonas.'
  },

  // --- Ethics (4 questions: id 73-76) ---
  {
    id: 73, step: 'step3', subject: 'Ethics',
    question: 'A 75-year-old male with end-stage COPD is admitted with respiratory failure. He is intubated and sedated. He has no advance directive. His wife says he "would not want to live on machines." His daughter insists on "doing everything possible." What is the most appropriate next step?',
    options: ['Follow the wife\'s wishes and withdraw care', 'Follow the daughter\'s wishes and continue full support', 'Convene a family meeting to explore the patient\'s values and reach consensus', 'Consult the hospital ethics committee immediately', 'Continue full support until the patient can decide for himself'],
    correctAnswer: 2,
    explanationEn: 'When family members disagree, the best approach is shared decision-making: convene a family meeting to discuss the patient\'s values, prognosis, and treatment options. The goal is to determine what the patient would have wanted (substituted judgment standard). If consensus cannot be reached, ethics consultation may be appropriate, but family meeting is the first step.',
    explanationZh: '当家庭成员意见不一，最佳方法是共同决策：召集家庭会议讨论患者的价值观、预后和治疗选择。目标是确定患者原本会希望什么（替代判断标准）。如无法达成共识，伦理咨询可能合适，但家庭会议是第一步。',
    explanationEs: 'Desacuerdo familiar: reunión familiar para explorar valores del paciente y buscar consenso (decisión compartida).'
  },
  {
    id: 74, step: 'step3', subject: 'Ethics',
    question: 'A 14-year-old female presents to the clinic and requests birth control pills. She does not want her parents to know. She is sexually active with one partner and uses condoms inconsistently. How should the physician proceed?',
    options: ['Inform the parents — minors cannot consent to contraception', 'Prescribe contraception without parental notification — this is within the minor\'s right to confidential care', 'Refuse to prescribe and refer to a gynecologist', 'Require parental consent before any action', 'Report to child protective services'],
    correctAnswer: 1,
    explanationEn: 'Minors have the right to confidential contraceptive services in most jurisdictions. The physician should provide contraception while encouraging communication with parents. Mandatory parental notification would deter adolescents from seeking care. This is NOT a child abuse situation (consensual adolescent sexual activity is not reportable).',
    explanationZh: '在大多数司法管辖区，未成年人有权获得保密的避孕服务。医生应提供避孕同时鼓励与父母沟通。强制性父母通知会阻止青少年寻求护理。这不是虐待儿童的情况（双方同意的青少年性行为不需报告）。',
    explanationEs: 'Menores tienen derecho a servicios anticonceptivos confidenciales. Proveer anticoncepción y alentar comunicación con padres.'
  },
  {
    id: 75, step: 'step3', subject: 'Ethics',
    question: 'A patient with terminal cancer requests physician-assisted death (PAD) in a jurisdiction where it is legal. He has full decision-making capacity, is terminally ill (<6 months prognosis), and has made the request voluntarily without coercion. What additional safeguard is typically required?',
    options: ['Approval from the hospital ethics committee', 'A second physician\'s confirmation + a waiting period', 'Approval from a judge', 'A psychiatric evaluation in all cases', 'Signed consent from at least 2 family members'],
    correctAnswer: 1,
    explanationEn: 'In jurisdictions where PAD is legal, standard safeguards include: (1) terminal illness with <6 months prognosis, (2) patient capacity, (3) voluntary request, (4) second physician confirmation, (5) waiting period between requests, (6) patient must self-administer the medication (in some jurisdictions). Psychiatric evaluation is NOT always required—only if capacity is questioned.',
    explanationZh: '在PAD合法的司法管辖区，标准保护措施包括：(1)终末期疾病预后<6个月，(2)患者能力，(3)自愿请求，(4)第二位医生确认，(5)两次请求间的等待期，(6)患者须自行服药（某些辖区）。精神科评估不总是必需——仅在能力存疑时。',
    explanationEs: 'Muerte médicamente asistida: requiere segundo médico confirmador + período de espera. Evaluación psiquiátrica solo si capacidad cuestionada.'
  },
  {
    id: 76, step: 'step3', subject: 'Ethics',
    question: 'A physician discovers that a colleague has been coming to work with alcohol on his breath and has made several medication errors. What is the most appropriate action?',
    options: ['Confront the colleague directly and tell him to seek help', 'Report to the state medical board immediately without informing the colleague', 'Report to the hospital\'s physician health program or chief of staff', 'Ignore it — it is the colleague\'s personal matter', 'Tell other colleagues to verify the observations'],
    correctAnswer: 2,
    explanationEn: 'Impaired physicians pose a risk to patient safety. The most appropriate action is to report to the hospital\'s physician health program, chief of staff, or department chair. These programs can arrange confidential evaluation and treatment while protecting patients. Most states have physician health programs that offer non-punitive pathways to rehabilitation.',
    explanationZh: '功能受损的医生对患者安全构成风险。最恰当的行动是向医院的医生健康项目、科室主任或部门主管报告。这些项目可安排保密评估和治疗同时保护患者。大多数州有医生健康项目提供非惩罚性的康复途径。',
    explanationEs: 'Médico con deterioro: reportar al programa de salud del médico del hospital o jefe de servicio. Proteger pacientes + ofrecer rehabilitación.'
  },

  // --- Patient Safety (4 questions: id 77-80) ---
  {
    id: 77, step: 'step3', subject: 'Patient Safety',
    question: 'A patient is scheduled for a right-sided nephrectomy. In the preoperative area, the surgical site is marked by the surgeon. During the "time-out" immediately before incision, the circulating nurse notices the consent form says "left nephrectomy." What should the team do?',
    options: ['Proceed — the surgeon marked the right side', 'Proceed — the consent form is administrative and can be corrected later', 'Stop the procedure, resolve the discrepancy, and verify the correct site', 'Ask the patient which kidney is being removed', 'Let the anesthesiologist decide'],
    correctAnswer: 2,
    explanationEn: 'The Universal Protocol (Joint Commission) requires stopping the procedure if ANY discrepancy is identified during the time-out. The entire team must agree on the correct patient, procedure, and site before proceeding. The discrepancy between the marked site and consent form must be resolved before incision. This is a "hard stop" — no exceptions.',
    explanationZh: '联合委员会通用协议要求如果暂停期间发现任何不一致必须停止手术。整个团队必须就正确的患者、手术和部位达成一致才能继续。标记部位与同意书之间的不一致必须在切皮前解决。这是"硬停止"——无例外。',
    explanationEs: 'Protocolo Universal: detener procedimiento ante CUALQUIER discrepancia en el time-out. Verificar paciente, procedimiento y sitio correctos.'
  },
  {
    id: 78, step: 'step3', subject: 'Patient Safety',
    question: 'A nurse calls a physician to report that a patient\'s potassium level is 6.8 mEq/L. The physician gives a verbal order for "calcium gluconate, insulin, and glucose." What is the most important action the nurse should take?',
    options: ['Administer the medications immediately as ordered', 'Ask the physician to enter the order in the EMR directly', 'Perform a read-back of the complete order and document it', 'Ask another nurse to verify the potassium level first', 'Wait for the physician to come to the floor and write the order'],
    correctAnswer: 2,
    explanationEn: 'For verbal orders, the Joint Commission requires the "write down, read back" process: the nurse writes down the complete order, reads it back to the prescriber, and receives confirmation. This reduces medication errors from miscommunication. The order must be signed by the prescriber within the timeframe specified by hospital policy.',
    explanationZh: '对于口头医嘱，联合委员会要求"记下、复述"流程：护士记下完整医嘱，向开嘱者复述，并获得确认。这减少了因沟通不畅导致的用药错误。医嘱必须在医院政策规定的时间范围内由开嘱者签字。',
    explanationEs: 'Órdenes verbales: "escribir, leer de vuelta" — enfermera escribe orden completa, la lee al médico, recibe confirmación.'
  },
  {
    id: 79, step: 'step3', subject: 'Patient Safety',
    question: 'A patient is admitted with community-acquired pneumonia. The resident orders ceftriaxone IV. The patient has a documented severe penicillin allergy (anaphylaxis). What is the most appropriate action by the pharmacist reviewing the order?',
    options: ['Dispense the medication — cross-reactivity is very low', 'Call the resident and recommend changing to aztreonam or levofloxacin', 'Dispense the medication with diphenhydramine premedication', 'Cancel the order without notifying the prescriber', 'Recommend a penicillin skin test first'],
    correctAnswer: 1,
    explanationEn: 'Ceftriaxone (3rd generation cephalosporin) has low cross-reactivity with penicillins (~1%), but in a patient with documented severe penicillin allergy (anaphylaxis), it is prudent to avoid all beta-lactams with potential cross-reactivity. Aztreonam (monobactam) has NO cross-reactivity with penicillins and is safe. Levofloxacin is also an alternative. The pharmacist should contact the prescriber.',
    explanationZh: '头孢曲松与青霉素交叉反应率低（~1%），但对于有明确严重青霉素过敏（过敏性休克）的患者，谨慎避免所有潜在交叉反应的β-内酰胺。氨曲南（单环β-内酰胺）与青霉素无交叉反应，是安全的。左氧氟沙星也是替代选择。药剂师应联系开嘱者。',
    explanationEs: 'Alergia grave a penicilina (anafilaxia): evitar cefalosporinas. Alternativas seguras: aztreonam (sin reactividad cruzada) o levofloxacino.'
  },
  {
    id: 80, step: 'step3', subject: 'Patient Safety',
    question: 'After a patient fall with injury in the hospital, the unit manager convenes a root cause analysis (RCA) meeting. Which of the following is the primary goal of an RCA?',
    options: ['Identify the individual who made the error and ensure accountability', 'Identify system-level causes and contributing factors to prevent recurrence', 'Determine financial liability for the adverse event', 'Document the event for legal protection of the hospital', 'Discipline the staff involved in the incident'],
    correctAnswer: 1,
    explanationEn: 'Root cause analysis (RCA) is a structured method to identify the underlying system-level causes and contributing factors that led to an adverse event. The goal is prevention of recurrence through system improvement, NOT individual blame. RCA asks "what" and "why" — not "who." It is a key component of a just culture and patient safety programs.',
    explanationZh: '根本原因分析（RCA）是一种结构化方法，用于识别导致不良事件的潜在系统层面原因和促成因素。目标是通过系统改进预防再发生，而非责备个人。RCA问"什么"和"为什么"——不问"谁"。这是公正文化和患者安全项目的关键组成部分。',
    explanationEs: 'Análisis de causa raíz: identificar causas a nivel de sistema, NO culpa individual. Meta: prevenir recurrencia mediante mejora del sistema.'
  }
]

export const subjects: Record<string, string[]> = {
  step1: ['Pathology', 'Physiology', 'Pharmacology', 'Internal Medicine', 'Anatomy', 'Biochemistry', 'Microbiology', 'Immunology', 'Genetics', 'Neurology'],
  step2: ['Internal Medicine', 'Surgery', 'Pediatrics', 'Obstetrics & Gynecology', 'Psychiatry', 'Pathology', 'Emergency Medicine', 'Neurology'],
  step3: ['Primary Care', 'Internal Medicine', 'Emergency Medicine', 'Ethics', 'Patient Safety']
}

export const steps = [
  { id: 'step1', label: 'Step 1', description: 'Foundational sciences and mechanisms of disease' },
  { id: 'step2', label: 'Step 2 CK', description: 'Clinical knowledge and patient care' },
  { id: 'step3', label: 'Step 3', description: 'Patient management and independent practice' }
]
