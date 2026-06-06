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
  /** Whether this question was AI-generated (most are) */
  aiGenerated?: boolean
  /** Difficulty tier for filtering / highlighting */
  difficulty?: 'Easy' | 'Medium' | 'Hard'
  /** High-yield topic tag — shown as a badge on the question card */
  highYieldTag?: string
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
  },

  // ============================================================
  // EXTENDED QUESTION BANK — 500 additional questions
  // ============================================================

  // --- Pathology Extended (id: 81-100) ---
  {
    id: 81, step: 'step1', subject: 'Pathology',
    question: 'A 58-year-old female with rheumatoid arthritis on long-term methotrexate develops progressive dyspnea and non-productive cough. HRCT shows bilateral interstitial infiltrates with a ground-glass pattern. Which pathologic process is most likely present?',
    options: ['Usual interstitial pneumonia (UIP)', 'Diffuse alveolar damage (DAD)', 'Nonspecific interstitial pneumonia (NSIP)', 'Organizing pneumonia (OP)', 'Lymphocytic interstitial pneumonia (LIP)'],
    correctAnswer: 0,
    explanationEn: 'Methotrexate can cause drug-induced interstitial lung disease, most commonly presenting as UIP pattern on HRCT. Treatment: discontinue MTX, corticosteroids.',
    explanationZh: '甲氨蝶呤可导致药物性间质性肺病，HRCT最常见表现为UIP模式。治疗：停用MTX，糖皮质激素。',
    explanationEs: 'Metotrexato causa enfermedad pulmonar intersticial, patrón UIP. Tratamiento: suspender MTX, corticosteroides.'
  },
  {
    id: 82, step: 'step1', subject: 'Pathology',
    question: 'A 45-year-old male with HIV/AIDS (CD4 45 cells/mm3) presents with multiple purple-red papules on his face and trunk. Biopsy shows spindle cell proliferation with slit-like vascular spaces. Which virus is implicated?',
    options: ['EBV', 'HHV-8 (KSHV)', 'HPV type 16', 'CMV', 'HSV-1'],
    correctAnswer: 1,
    explanationEn: 'Kaposi sarcoma is an HHV-8 (KSHV) associated vascular tumor. In HIV patients, KS is an AIDS-defining illness with spindle cells, slit-like vessels, and hyaline globules on histology.',
    explanationZh: '卡波西肉瘤是HHV-8（KSHV）相关血管肿瘤。HIV患者中KS是AIDS定义性疾病。组织学显示梭形细胞、裂隙样血管和透明小球。',
    explanationEs: 'Sarcoma de Kaposi: tumor vascular asociado a HHV-8. Enfermedad definitoria de SIDA.'
  },
  {
    id: 83, step: 'step1', subject: 'Pathology',
    question: 'A 2-year-old child has a palpable abdominal mass. Urinalysis shows elevated VMA and HVA. Biopsy shows small round blue cells with rosette formation. Which genetic abnormality is most characteristic?',
    options: ['t(8;14) - MYC', 't(11;22) - EWS-FLI1', 'MYCN amplification', 'del(13q) - RB1', 't(9;22) - BCR-ABL'],
    correctAnswer: 2,
    explanationEn: 'Neuroblastoma (child + abdominal mass + elevated VMA/HVA + Homer-Wright rosettes). MYCN amplification is characteristic and associated with poor prognosis. Arises from neural crest cells in adrenal medulla or sympathetic chain.',
    explanationZh: '神经母细胞瘤（儿童腹部肿块+VMA/HVA升高+Homer-Wright菊形团）。MYCN扩增是最特征性遗传异常，与不良预后相关。起源于肾上腺髓质或交感链的神经嵴细胞。',
    explanationEs: 'Neuroblastoma: masa abdominal en niño, VMA/HVA elevados. Amplificación MYCN = mal pronóstico.'
  },
  {
    id: 84, step: 'step1', subject: 'Pathology',
    question: 'A 60-year-old female with chronic hypertension dies suddenly. Autopsy reveals a 6 cm fusiform dilation of the infrarenal abdominal aorta with laminated mural thrombus. Histology shows thinning of the media with loss of elastic fibers. Which risk factor most strongly associates with this condition?',
    options: ['Hyperlipidemia', 'Hypertension', 'Smoking', 'Diabetes mellitus', 'Family history'],
    correctAnswer: 2,
    explanationEn: 'Atherosclerotic AAA. Smoking is the STRONGEST modifiable risk factor for AAA development, growth, and rupture. Ultrasound screening is recommended for men aged 65-75 with smoking history.',
    explanationZh: '动脉粥样硬化性AAA。吸烟是AAA发生、增长和破裂的最强可改变危险因素。建议对有吸烟史的65-75岁男性进行超声筛查。',
    explanationEs: 'AAA aterosclerótico: tabaquismo es el factor de riesgo más fuerte. Cribado ecográfico en hombres 65-75 con historia tabáquica.'
  },
  {
    id: 85, step: 'step1', subject: 'Pathology',
    question: 'A 35-year-old female presents with fatigue, weight gain, and cold intolerance. TSH is elevated, free T4 is low. Thyroid biopsy shows lymphocytic infiltration with germinal centers and Hurthle cell metaplasia. What type of hypersensitivity is primarily involved?',
    options: ['Type I (IgE-mediated)', 'Type II (antibody-mediated)', 'Type III (immune complex)', 'Type IV (T-cell mediated)', 'Type V (receptor stimulation)'],
    correctAnswer: 3,
    explanationEn: 'Hashimoto thyroiditis is the classic Type IV hypersensitivity (T-cell mediated). CD8+ T-cells destroy thyroid follicles. Anti-TPO and anti-thyroglobulin antibodies are present but the primary mechanism is cell-mediated.',
    explanationZh: '桥本甲状腺炎是IV型超敏反应（T细胞介导）的典型例子。CD8+T细胞破坏甲状腺滤泡。存在抗TPO和抗甲状腺球蛋白抗体，但主要机制是细胞介导。',
    explanationEs: 'Tiroiditis de Hashimoto: hipersensibilidad tipo IV (mediada por células T). Infiltración linfocítica, metaplasia de Hürthle.'
  },
  {
    id: 86, step: 'step1', subject: 'Pathology',
    question: 'A 52-year-old female has a 2 cm, well-circumscribed, firm, mobile breast mass. Core biopsy shows stromal proliferation with cystic spaces and a "leaf-like" architecture. What is the diagnosis?',
    options: ['Fibroadenoma', 'Phyllodes tumor', 'Intraductal papilloma', 'Invasive ductal carcinoma', 'Tubular adenoma'],
    correctAnswer: 1,
    explanationEn: 'Phyllodes tumor: leaf-like pattern with stromal hypercellularity and cystic spaces. Treatment: wide local excision with clear margins. More common in 40-50s vs fibroadenoma in younger women.',
    explanationZh: '叶状肿瘤：叶状模式伴间质细胞增多和囊性空间。治疗：广泛局部切除确保切缘干净。多见于40-50岁女性，与纤维腺瘤多见于年轻女性不同。',
    explanationEs: 'Tumor filoides: patrón "en hoja", estroma hipercelular. Tratamiento: escisión local amplia con márgenes.'
  },
  {
    id: 87, step: 'step1', subject: 'Pathology',
    question: 'A premature infant develops abdominal distension, feeding intolerance, and bloody stools. Abdominal X-ray shows pneumatosis intestinalis. What is the most likely pathologic finding in the bowel wall?',
    options: ['Transmural inflammation with granulomas', 'Hemorrhagic necrosis with gas in the bowel wall', 'Aganglionic segment with proximal dilation', 'Villous atrophy with crypt hyperplasia', 'Pseudomembrane formation'],
    correctAnswer: 1,
    explanationEn: 'Necrotizing enterocolitis (NEC) in premature infants: hemorrhagic necrosis with pneumatosis intestinalis (gas in bowel wall). Risk factors: prematurity, formula feeding, intestinal ischemia. May progress to perforation requiring surgery.',
    explanationZh: '早产儿坏死性小肠结肠炎（NEC）：出血性坏死伴肠壁积气（pneumatosis intestinalis）。危险因素：早产、配方喂养、肠道缺血。可进展为穿孔需手术。',
    explanationEs: 'Enterocolitis necrotizante: necrosis hemorrágica con neumatosis intestinal. Prematuros, alimentación con fórmula.'
  },
  {
    id: 88, step: 'step1', subject: 'Pathology',
    question: 'A 40-year-old male presents with fever, night sweats, and weight loss. Lymph node biopsy shows effacement of architecture by a mixed infiltrate of eosinophils, plasma cells, histiocytes, and rare large binucleate cells with prominent nucleoli (Reed-Sternberg cells). CD15 and CD30 are positive. Diagnosis?',
    options: ['Diffuse large B-cell lymphoma', 'Follicular lymphoma', 'Classical Hodgkin lymphoma', 'Anaplastic large cell lymphoma', 'Peripheral T-cell lymphoma'],
    correctAnswer: 2,
    explanationEn: 'Classical Hodgkin lymphoma: Reed-Sternberg cells (CD15+, CD30+, CD45-), mixed inflammatory background. RS cells are derived from crippled germinal center B cells. Subtypes: nodular sclerosis (most common), mixed cellularity, lymphocyte-rich, lymphocyte-depleted.',
    explanationZh: '经典霍奇金淋巴瘤：Reed-Sternberg细胞（CD15+、CD30+、CD45-），混合炎症背景。RS细胞来源于功能缺陷的生发中心B细胞。亚型：结节硬化型（最常见）、混合细胞型、淋巴细胞丰富型、淋巴细胞消减型。',
    explanationEs: 'Linfoma de Hodgkin clásico: células de Reed-Sternberg CD15+ CD30+, fondo inflamatorio mixto.'
  },
  {
    id: 89, step: 'step1', subject: 'Pathology',
    question: 'A 50-year-old female has an asymptomatic thyroid nodule. FNA shows papillary structures with cells containing ground-glass nuclei (Orphan Annie eye nuclei), nuclear grooves, and psammoma bodies. What mutation is most commonly associated?',
    options: ['RET proto-oncogene', 'RAS mutation', 'PAX8/PPARγ rearrangement', 'BRAF V600E mutation', 'TP53 mutation'],
    correctAnswer: 3,
    explanationEn: 'Papillary thyroid carcinoma (PTC): Orphan Annie eye nuclei, nuclear grooves, psammoma bodies. BRAF V600E is the most common mutation (~45-70%). RET/PTC rearrangements are less common but more frequent in radiation-induced PTC. RAS and PAX8/PPARγ are more typical of follicular carcinoma.',
    explanationZh: '甲状腺乳头状癌（PTC）：Orphan Annie眼核、核沟、砂粒体。BRAF V600E是最常见突变（~45-70%）。RET/PTC重排较少见，但在辐射诱导的PTC中更频繁。RAS和PAX8/PPARγ更常见于滤泡癌。',
    explanationEs: 'Carcinoma papilar de tiroides: núcleos en "vidrio esmerilado", cuerpos de psammoma. Mutación BRAF V600E más común.'
  },
  {
    id: 90, step: 'step1', subject: 'Pathology',
    question: 'A liver biopsy from a patient with chronic hepatitis C shows macrovesicular steatosis, ballooning degeneration of hepatocytes, Mallory-Denk bodies, and pericellular fibrosis (chicken-wire pattern). There is no history of alcohol use. What is the diagnosis?',
    options: ['Alcoholic hepatitis', 'Nonalcoholic steatohepatitis (NASH)', 'Autoimmune hepatitis', 'Primary biliary cholangitis', 'Wilson disease'],
    correctAnswer: 1,
    explanationEn: 'NASH histology is identical to alcoholic hepatitis: steatosis, ballooning degeneration, Mallory-Denk bodies, and pericellular (chicken-wire) fibrosis. Hepatitis C is a known risk factor for NASH. Distinguishing from alcoholic hepatitis requires clinical history.',
    explanationZh: 'NASH组织学与酒精性肝炎相同：脂肪变性、气球样变性、Mallory-Denk小体和窦周（鸡笼样）纤维化。丙型肝炎是已知的NASH危险因素。与酒精性肝炎的鉴别需要临床病史。',
    explanationEs: 'NASH: histología idéntica a hepatitis alcohólica. Esteatosis, degeneración balonizante, cuerpos de Mallory. Sin consumo de alcohol.'
  },

  // --- Pharmacology Extended (id: 101-115) ---
  {
    id: 101, step: 'step1', subject: 'Pharmacology',
    question: 'A 65-year-old male with AF on warfarin (INR 2.3) develops DVT. Which of the following best explains recurrent thrombosis despite therapeutic INR?',
    options: ['VKORC1 mutation causing warfarin resistance', 'Inadequate protein C inhibition', 'Concurrent aspirin use', 'Excessive vitamin K intake', 'CYP3A4 induction'],
    correctAnswer: 0,
    explanationEn: 'Warfarin resistance due to VKORC1 mutation alters the warfarin binding site, requiring higher doses. CYP2C9 variants also affect metabolism. Pharmacogenetic testing can guide dosing in patients with recurrent thrombosis on therapeutic doses.',
    explanationZh: '华法林抵抗：VKORC1突变改变华法林结合位点，需要更高剂量。CYP2C9变异也影响代谢。对治疗剂量下仍复发性血栓的患者，药物遗传学检测可指导剂量。',
    explanationEs: 'Resistencia a warfarina: mutación VKORC1 altera sitio de unión. Pruebas farmacogenéticas guían dosificación.'
  },
  {
    id: 102, step: 'step1', subject: 'Pharmacology',
    question: 'A 72-year-old on tamsulosin for BPH experiences orthostatic hypotension. Which receptor subtype mediates this adverse effect?',
    options: ['Alpha-1A', 'Alpha-1B', 'Alpha-1D', 'Alpha-2A', 'Beta-1'],
    correctAnswer: 1,
    explanationEn: 'Tamsulosin is uroselective (alpha-1A), but retains alpha-1B affinity in vascular smooth muscle causing orthostatic hypotension. Alpha-1A: prostate; alpha-1B: blood vessels; alpha-1D: bladder.',
    explanationZh: '坦索罗辛具泌尿选择性（alpha-1A），但保留对血管平滑肌alpha-1B亲和力导致体位性低血压。Alpha-1A：前列腺；alpha-1B：血管；alpha-1D：膀胱。',
    explanationEs: 'Tamsulosina: afinidad alfa-1B vascular residual → hipotensión ortostática.'
  },
  {
    id: 103, step: 'step1', subject: 'Pharmacology',
    question: 'A patient on metformin is scheduled for coronary angiography with iodinated contrast. What is the most appropriate management?',
    options: ['Continue metformin', 'Hold metformin day of procedure + 48h after; restart after confirming normal renal function', 'Discontinue metformin permanently', 'Double metformin dose', 'Hold metformin for 24h before only'],
    correctAnswer: 1,
    explanationEn: 'Metformin should be withheld before contrast and 48h after due to risk of contrast-induced nephropathy → metformin accumulation → lactic acidosis. Check renal function before restarting.',
    explanationZh: '二甲双胍在造影剂前暂停，术后48小时也暂停（造影剂肾病风险→二甲双胍蓄积→乳酸酸中毒）。重启前复查肾功能。',
    explanationEs: 'Metformina: suspender día procedimiento + 48h post-contraste. Reiniciar tras confirmar función renal.'
  },
  {
    id: 104, step: 'step1', subject: 'Pharmacology',
    question: 'A patient with gout and HLA-B*5801 positive is started on allopurinol. What severe adverse reaction is he at highest risk for?',
    options: ['SJS/TEN', 'Agranulocytosis', 'Acute interstitial nephritis', 'Hepatotoxicity', 'Rhabdomyolysis'],
    correctAnswer: 0,
    explanationEn: 'HLA-B*5801 strongly associates with allopurinol-induced SJS/TEN. Screening recommended in high-risk populations (Han Chinese, Thai, Korean) before starting allopurinol.',
    explanationZh: 'HLA-B*5801与别嘌醇诱导的SJS/TEN密切相关。高风险人群（汉族、泰国、韩国）使用别嘌醇前应筛查HLA-B*5801。',
    explanationEs: 'Alopurinol + HLA-B*5801 → alto riesgo SJS/TEN. Cribado en poblaciones de alto riesgo.'
  },
  {
    id: 105, step: 'step1', subject: 'Pharmacology',
    question: 'Which of the following antibiotics exerts its bactericidal effect by binding to the 30S ribosomal subunit and causing misreading of mRNA?',
    options: ['Amoxicillin', 'Ciprofloxacin', 'Gentamicin', 'Clindamycin', 'Linezolid'],
    correctAnswer: 2,
    explanationEn: 'Aminoglycosides (gentamicin) bind the 30S ribosomal subunit, causing misreading of mRNA and production of faulty proteins. They require oxygen-dependent transport for uptake (ineffective against anaerobes). Amoxicillin: cell wall; ciprofloxacin: DNA gyrase; clindamycin: 50S; linezolid: 50S.',
    explanationZh: '氨基糖苷类（庆大霉素）结合30S核糖体亚基，导致mRNA错读并产生错误蛋白。需要氧依赖性转运摄取（对厌氧菌无效）。阿莫西林：细胞壁；环丙沙星：DNA旋转酶；克林霉素：50S；利奈唑胺：50S。',
    explanationEs: 'Aminoglucósidos (gentamicina): unión a subunidad 30S → lectura errónea de ARNm. Requieren oxígeno para captación.'
  },
  {
    id: 106, step: 'step1', subject: 'Pharmacology',
    question: 'A patient on digoxin for CHF also takes verapamil for hypertension. Digoxin levels are elevated despite a stable dose. What mechanism explains this drug interaction?',
    options: ['Increased absorption of digoxin', 'Decreased renal clearance of digoxin via P-glycoprotein inhibition', 'Increased protein binding displacement', 'Decreased hepatic metabolism', 'Increased enterohepatic recirculation'],
    correctAnswer: 1,
    explanationEn: 'Verapamil inhibits P-glycoprotein (P-gp) in renal tubules, decreasing renal tubular secretion of digoxin → elevated digoxin levels. Other P-gp inhibitors: amiodarone, quinidine, cyclosporine. Digoxin has a narrow therapeutic index.',
    explanationZh: '维拉帕米抑制肾小管P-糖蛋白（P-gp），减少地高辛的肾小管分泌→地高辛水平升高。其他P-gp抑制剂：胺碘酮、奎尼丁、环孢素。地高辛治疗窗窄。',
    explanationEs: 'Verapamilo inhibe P-glicoproteína renal → disminuye secreción de digoxina → niveles elevados.'
  },
  {
    id: 107, step: 'step1', subject: 'Pharmacology',
    question: 'A patient in status epilepticus fails to respond to lorazepam. What is the next-line agent?',
    options: ['Phenytoin or fosphenytoin', 'Levetiracetam', 'Valproic acid', 'Carbamazepine', 'Ethosuximide'],
    correctAnswer: 0,
    explanationEn: 'Status epilepticus protocol: 1st line: benzodiazepine (lorazepam IV); 2nd line: fosphenytoin/phenytoin, valproic acid, or levetiracetam; 3rd line: phenobarbital or midazolam infusion; 4th line: propofol/pentobarbital (anesthetic doses). Fosphenytoin is preferred over phenytoin (less phlebitis, faster administration).',
    explanationZh: '癫痫持续状态方案：一线：苯二氮䓬类（劳拉西泮IV）；二线：磷苯妥英/苯妥英、丙戊酸或左乙拉西坦；三线：苯巴比妥或咪达唑仑输注；四线：丙泊酚/戊巴比妥（麻醉剂量）。磷苯妥英优于苯妥英（静脉炎少，给药快）。',
    explanationEs: 'Estatus epiléptico: 1ra línea lorazepam; 2da línea fosfenitoína/fenitoína.'
  },
  {
    id: 108, step: 'step1', subject: 'Pharmacology',
    question: 'Which of the following antihypertensives directly inhibits renin, reducing angiotensin I and angiotensin II levels?',
    options: ['Lisinopril', 'Losartan', 'Aliskiren', 'Spironolactone', 'Metoprolol'],
    correctAnswer: 2,
    explanationEn: 'Aliskiren is a direct renin inhibitor, blocking the rate-limiting step of the RAAS cascade. ACE inhibitors (lisinopril) block angiotensin I → II conversion. ARBs (losartan) block AT1 receptors. Spironolactone is an aldosterone antagonist. Metoprolol is a beta-blocker.',
    explanationZh: '阿利吉仑是直接肾素抑制剂，阻断RAAS级联的限速步骤。ACE抑制剂（赖诺普利）阻断Ang I→II转化。ARB（氯沙坦）阻断AT1受体。螺内酯是醛固酮拮抗剂。美托洛尔是β阻滞剂。',
    explanationEs: 'Aliskiren: inhibidor directo de renina. Bloquea paso limitante del SRAA.'
  },

  // --- Physiology Extended (id: 121-130) ---
  {
    id: 121, step: 'step1', subject: 'Physiology',
    question: 'At FRC, which forces are balanced?',
    options: ['Inward elastic recoil of lungs and outward recoil of chest wall', 'Surface tension and atmospheric pressure', 'Airway resistance and lung compliance', 'Pulmonary artery pressure and left atrial pressure', 'Diaphragmatic contraction and abdominal wall tension'],
    correctAnswer: 0,
    explanationEn: 'At FRC, inward elastic recoil of the lungs balances the outward elastic recoil of the chest wall. In emphysema (loss of recoil), FRC increases. In fibrosis (increased recoil), FRC decreases.',
    explanationZh: 'FRC时肺的向内弹性回缩力与胸壁的向外弹性回缩力平衡。肺气肿（弹性回缩力丧失）时FRC增加。纤维化（回缩力增加）时FRC降低。',
    explanationEs: 'CRF: equilibrio entre retracción pulmonar y pared torácica. Enfisema → CRF aumentada.'
  },
  {
    id: 122, step: 'step1', subject: 'Physiology',
    question: 'During which cardiac cycle phase are both the aortic and mitral valves closed, and ventricular volume remains constant?',
    options: ['Rapid ventricular filling', 'Reduced ventricular ejection', 'Isovolumetric relaxation', 'Isovolumetric contraction', 'Atrial systole'],
    correctAnswer: 2,
    explanationEn: 'Isovolumetric relaxation: period between aortic valve closure and mitral valve opening. Both valves closed, ventricular pressure falls but volume stays constant. On PV loop: downward vertical segment.',
    explanationZh: '等容舒张期：主动脉瓣关闭到二尖瓣开放的时期。两个瓣膜均关闭，心室压力下降但容积不变。在PV环上为向下垂直段。',
    explanationEs: 'Relajación isovolumétrica: ambas válvulas cerradas, presión cae, volumen constante.'
  },
  {
    id: 123, step: 'step1', subject: 'Physiology',
    question: 'In the proximal convoluted tubule, which transport mechanism is responsible for the majority of sodium reabsorption?',
    options: ['Na+/K+ ATPase on luminal membrane', 'SGLT2 on basolateral membrane', 'Na+/H+ exchanger (NHE3) on luminal + Na+/K+ ATPase on basolateral', 'Na+/Cl- cotransporter on luminal', 'ENaC channels on luminal'],
    correctAnswer: 2,
    explanationEn: 'Proximal tubule: NHE3 on apical membrane (driven by basolateral Na+/K+ ATPase gradient) is the predominant Na+ reabsorption mechanism (~65% of filtered Na+). SGLT2 also contributes but is secondary.',
    explanationZh: '近端小管：管腔膜NHE3（由基底侧Na+/K+ ATPase梯度驱动）是主要钠重吸收机制（~65%滤过钠）。SGLT2也有贡献但为次要。',
    explanationEs: 'Túbulo proximal: NHE3 luminal + Na+/K+ ATPasa basolateral → reabsorción ~65% Na+.'
  },
  {
    id: 124, step: 'step1', subject: 'Physiology',
    question: 'A lesion of the posterior pituitary would most likely impair which functions?',
    options: ['Thyroid hormone regulation', 'Cortisol secretion', 'Water balance and uterine contraction', 'Growth hormone release', 'Prolactin inhibition'],
    correctAnswer: 2,
    explanationEn: 'Posterior pituitary (neurohypophysis): stores/releases ADH (vasopressin) and oxytocin, synthesized in hypothalamus. ADH: water balance (V2 receptors, collecting ducts). Oxytocin: uterine contraction, milk ejection. Anterior pituitary hormones (TSH, ACTH, GH, prolactin) are not affected.',
    explanationZh: '垂体后叶储存/释放ADH（血管加压素）和催产素（下丘脑合成）。ADH：水分平衡（V2受体，集合管）。催产素：子宫收缩，射乳。垂体前叶激素不受影响。',
    explanationEs: 'Hipófisis posterior: ADH (balance hídrico) + oxitocina (contracción uterina).'
  },
  {
    id: 125, step: 'step1', subject: 'Physiology',
    question: 'Which of the following is true about the countercurrent multiplier system in the loop of Henle?',
    options: ['It is an active process in the descending limb', 'It creates a hypertonic medullary interstitium via active NaCl transport in the thick ascending limb', 'It primarily involves the vasa recta', 'It uses urea as the primary osmolyte in the thin ascending limb', 'It is abolished by ADH'],
    correctAnswer: 1,
    explanationEn: 'Countercurrent multiplier: thick ascending limb actively transports NaCl into interstitium (Na+/K+/2Cl- cotransporter), creating hypertonic medullary gradient. Descending limb is permeable to water. Vasa recta acts as countercurrent EXCHANGER, not multiplier. ADH enhances urea recycling.',
    explanationZh: '逆流倍增器：髓袢升支粗段主动转运NaCl到间质（Na+/K+/2Cl-共转运体），形成高渗髓质梯度。降支对水通透。直小血管是逆流交换器而非倍增器。ADH增强尿素循环。',
    explanationEs: 'Multiplicador contracorriente: rama ascendente gruesa transporta NaCl activamente → intersticio hipertónico.'
  },
  {
    id: 126, step: 'step1', subject: 'Physiology',
    question: 'A healthy person hyperventilates for 2 minutes. Which cardiovascular change occurs?',
    options: ['Increased cerebral blood flow', 'Decreased cerebral blood flow', 'Increased coronary blood flow', 'Peripheral vasodilation', 'Increased cardiac output'],
    correctAnswer: 1,
    explanationEn: 'Hyperventilation → decreased PaCO2 (hypocapnia) → cerebral vasoconstriction → decreased cerebral blood flow. This is why hyperventilation can cause dizziness/syncope. Hypocapnia also shifts the hemoglobin-oxygen dissociation curve left, increasing O2 affinity.',
    explanationZh: '过度通气→PaCO2降低（低碳酸血症）→脑血管收缩→脑血流减少。这就是为什么过度通气可导致头晕/晕厥。低碳酸血症还使血红蛋白氧解离曲线左移，增加O2亲和力。',
    explanationEs: 'Hiperventilación → hipocapnia → vasoconstricción cerebral → reducción del flujo sanguíneo cerebral.'
  },
  {
    id: 127, step: 'step1', subject: 'Physiology',
    question: 'Stretch of the right atrial wall causes release of which hormone?',
    options: ['ADH (vasopressin)', 'Aldosterone', 'Atrial natriuretic peptide (ANP)', 'Renin', 'Erythropoietin'],
    correctAnswer: 2,
    explanationEn: 'ANP is released from atrial myocytes in response to atrial stretch (increased volume/pressure). Effects: natriuresis, diuresis, vasodilation, inhibition of renin/aldosterone. Counterbalances RAAS. BNP is released from ventricles.',
    explanationZh: 'ANP由心房肌细胞响应心房牵张（容量/压力增加）释放。效应：利钠、利尿、血管扩张、抑制肾素/醛固酮。抗衡RAAS。BNP由心室释放。',
    explanationEs: 'ANP: liberado por estiramiento auricular. Efectos: natriuresis, diuresis, vasodilatación.'
  },
  {
    id: 128, step: 'step1', subject: 'Physiology',
    question: 'Which of the following correctly pairs a hormone with its effect on serum calcium?',
    options: ['PTH — decreases calcium', 'Calcitonin — increases calcium', '1,25-dihydroxyvitamin D — increases calcium', 'Calcitonin — decreases phosphate', 'PTH — decreases phosphate reabsorption'],
    correctAnswer: 2,
    explanationEn: '1,25-(OH)2 vitamin D (calcitriol) increases intestinal absorption of calcium and phosphate, and bone resorption → increases serum calcium. PTH also increases calcium (bone resorption, renal reabsorption, and calcitriol synthesis) but DECREASES phosphate (inhibits renal reabsorption). Calcitonin decreases calcium.',
    explanationZh: '1,25-(OH)2维生素D（骨化三醇）增加肠道钙磷吸收和骨吸收→升高血钙。PTH也升高血钙（骨吸收、肾重吸收、骨化三醇合成）但降低血磷（抑制肾重吸收）。降钙素降低血钙。',
    explanationEs: 'Calcitriol: aumenta absorción intestinal de calcio y fósforo. PTH: ↑calcio, ↓fosfato. Calcitonina: ↓calcio.'
  },

  // --- Biochemistry Extended (id: 141-155) ---
  {
    id: 141, step: 'step1', subject: 'Biochemistry',
    question: 'A 6-month-old infant presents with cataracts, hepatomegaly, and failure to thrive. Urine reducing substances are positive, but glucose oxidase test is negative. Which enzyme deficiency is most likely?',
    options: ['Galactokinase', 'Galactose-1-phosphate uridylyltransferase (GALT)', 'UDP-galactose-4-epimerase', 'Aldolase B', 'Fructokinase'],
    correctAnswer: 1,
    explanationEn: 'Classical galactosemia due to GALT deficiency. Accumulation of galactose-1-phosphate causes cataracts, hepatomegaly, failure to thrive, and E. coli sepsis. Urine reducing substances positive (galactose), glucose oxidase negative (does not detect galactose). Treatment: galactose-free diet.',
    explanationZh: '典型半乳糖血症因GALT缺乏。半乳糖-1-磷酸蓄积导致白内障、肝大、发育迟缓和大肠杆菌败血症。尿还原物质阳性（半乳糖），葡萄糖氧化酶阴性（不检测半乳糖）。治疗：无半乳糖饮食。',
    explanationEs: 'Galactosemia clásica: déficit de GALT. Cataratas, hepatomegalia, sepsis por E. coli. Dieta sin galactosa.'
  },
  {
    id: 142, step: 'step1', subject: 'Biochemistry',
    question: 'Which vitamin is a required cofactor for prolyl hydroxylase and lysyl hydroxylase in collagen synthesis?',
    options: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin E', 'Vitamin K'],
    correctAnswer: 1,
    explanationEn: 'Vitamin C (ascorbic acid) is required for prolyl hydroxylase and lysyl hydroxylase, which hydroxylate proline and lysine residues in collagen. Without vitamin C, collagen is under-hydroxylated and unstable → scurvy (bleeding gums, poor wound healing, ecchymosis).',
    explanationZh: '维生素C（抗坏血酸）是脯氨酸羟化酶和赖氨酸羟化酶的必需辅因子，羟化胶原中的脯氨酸和赖氨酸残基。缺乏维生素C导致胶原羟化不足和不稳定→坏血病（牙龈出血、伤口愈合不良、瘀斑）。',
    explanationEs: 'Vitamina C: cofactor de prolil y lisil hidroxilasa. Deficiencia → escorbuto (colágeno inestable).'
  },
  {
    id: 143, step: 'step1', subject: 'Biochemistry',
    question: 'A patient with a deficiency of glucose-6-phosphatase is most likely to have which metabolic abnormality?',
    options: ['Hyperglycemia after fasting', 'Severe hypoglycemia after short fasts with lactic acidosis and hyperuricemia', 'Mild hypoglycemia only during prolonged exercise', 'Ketotic hypoglycemia without lactic acidosis', 'Hyperglycemia with hyperammonemia'],
    correctAnswer: 1,
    explanationEn: 'von Gierke disease (G6Pase deficiency, glycogen storage disease type I): inability to release glucose from liver → severe fasting hypoglycemia + lactic acidosis (blocked gluconeogenesis) + hyperuricemia (lactate competes with urate for renal excretion) + hypertriglyceridemia. Doll-like facies, hepatomegaly.',
    explanationZh: 'von Gierke病（G6Pase缺乏，糖原贮积症I型）：肝脏无法释放葡萄糖→严重空腹低血糖+乳酸酸中毒（糖异生受阻）+高尿酸血症（乳酸竞争尿酸肾排泄）+高甘油三酯血症。娃娃脸、肝大。',
    explanationEs: 'Enfermedad de von Gierke (déficit G6Pasa): hipoglucemia severa en ayuno + acidosis láctica + hiperuricemia.'
  },
  {
    id: 144, step: 'step1', subject: 'Biochemistry',
    question: 'A patient with phenylketonuria (PKU) has a deficiency of which enzyme?',
    options: ['Homogentisic acid oxidase', 'Phenylalanine hydroxylase', 'Tyrosinase', 'Branched-chain ketoacid dehydrogenase', 'Tyrosine aminotransferase'],
    correctAnswer: 1,
    explanationEn: 'PKU: deficiency of phenylalanine hydroxylase (PAH) or its cofactor tetrahydrobiopterin (BH4). Results in accumulation of phenylalanine → phenylketones in urine (musty odor), intellectual disability if untreated. Treatment: phenylalanine-restricted diet. Maternal PKU can cause fetal effects (microcephaly, heart defects) even if mother is asymptomatic.',
    explanationZh: 'PKU：苯丙氨酸羟化酶（PAH）或其辅因子四氢生物蝶呤（BH4）缺乏。导致苯丙氨酸蓄积→尿苯丙酮（鼠臭味），未经治疗导致智力障碍。治疗：限制苯丙氨酸饮食。母体PKU即使母亲无症状也可导致胎儿影响（小头畸形、心脏缺陷）。',
    explanationEs: 'Fenilcetonuria: déficit de fenilalanina hidroxilasa. Acumulación de fenilalanina → discapacidad intelectual.'
  },
  {
    id: 145, step: 'step1', subject: 'Biochemistry',
    question: 'During prolonged fasting, the brain adapts by using which primary fuel source?',
    options: ['Glucose only', 'Ketone bodies', 'Free fatty acids', 'Amino acids', 'Lactate'],
    correctAnswer: 1,
    explanationEn: 'After 3-5 days of starvation, the brain shifts from glucose to ketone bodies (beta-hydroxybutyrate, acetoacetate) as its primary fuel, sparing muscle protein. Ketone bodies are synthesized in the liver from fatty acids. This adaptation reduces the need for gluconeogenesis from amino acids.',
    explanationZh: '饥饿3-5天后，大脑从葡萄糖转向酮体（β-羟丁酸、乙酰乙酸）作为主要燃料，节约肌肉蛋白。酮体在肝脏由脂肪酸合成。此适应减少对氨基酸糖异生的需求。',
    explanationEs: 'Ayuno prolongado: cerebro usa cuerpos cetónicos como combustible principal, preservando proteína muscular.'
  },
  {
    id: 146, step: 'step1', subject: 'Biochemistry',
    question: 'Which of the following correctly describes the regulation of phosphofructokinase-1 (PFK-1), the rate-limiting enzyme of glycolysis?',
    options: ['Activated by ATP and citrate; inhibited by AMP and fructose-2,6-bisphosphate', 'Activated by AMP and fructose-2,6-bisphosphate; inhibited by ATP and citrate', 'Activated by glucagon; inhibited by insulin', 'Activated by NADH; inhibited by NAD+', 'Activated by acetyl-CoA; inhibited by oxaloacetate'],
    correctAnswer: 1,
    explanationEn: 'PFK-1: activated by AMP (low energy signal), fructose-2,6-bisphosphate (hormonal regulation via insulin/glucagon), and Pi. Inhibited by ATP (high energy) and citrate (TCA cycle intermediate). This is the COMMITTED step of glycolysis. Fructose-2,6-bisphosphate is synthesized by PFK-2 (activated by insulin).',
    explanationZh: 'PFK-1：被AMP（低能量信号）、果糖-2,6-二磷酸（通过胰岛素/胰高血糖素激素调节）和Pi激活。被ATP（高能量）和柠檬酸（TCA循环中间产物）抑制。这是糖酵解的承诺步骤。果糖-2,6-二磷酸由PFK-2合成（被胰岛素激活）。',
    explanationEs: 'PFK-1: activado por AMP y fructosa-2,6-bisfosfato; inhibido por ATP y citrato. Paso comprometido de glucólisis.'
  },

  // --- Microbiology Extended (id: 161-175) ---
  {
    id: 161, step: 'step1', subject: 'Microbiology',
    question: 'A 25-year-old sexually active female presents with a purulent cervical discharge. Gram stain shows gram-negative diplococci within neutrophils. What is the most likely complication if this infection is untreated?',
    options: ['Reactive arthritis (Reiter syndrome)', 'Pelvic inflammatory disease and tubal infertility', 'Guillain-Barré syndrome', 'Rheumatic fever', 'Membranous glomerulonephritis'],
    correctAnswer: 1,
    explanationEn: 'Neisseria gonorrhoeae (gram-negative diplococci in neutrophils) can ascend to cause PID, leading to tubal scarring, adhesions, and infertility. Other complications: Fitz-Hugh-Curtis syndrome (perihepatitis), disseminated gonococcal infection (arthritis-dermatitis syndrome). Treatment: ceftriaxone + azithromycin/doxycycline (cover chlamydia co-infection).',
    explanationZh: '淋球菌（中性粒细胞内革兰阴性双球菌）可上行引起PID，导致输卵管瘢痕、粘连和不孕。其他并发症：Fitz-Hugh-Curtis综合征（肝周炎）、播散性淋球菌感染（关节炎-皮炎综合征）。治疗：头孢曲松+阿奇霉素/多西环素（覆盖衣原体合并感染）。',
    explanationEs: 'N. gonorrhoeae: diplococos gram-negativos intracelulares. Complicación: EPI → infertilidad tubárica.'
  },
  {
    id: 162, step: 'step1', subject: 'Microbiology',
    question: 'A 4-year-old child presents with low-grade fever, a "slapped cheek" rash on the face, and a lacy reticular rash on the trunk and extremities. Which virus is responsible?',
    options: ['Measles virus', 'Rubella virus', 'Parvovirus B19', 'HHV-6 (Roseola)', 'Coxsackievirus'],
    correctAnswer: 2,
    explanationEn: 'Erythema infectiosum (Fifth disease) caused by parvovirus B19. "Slapped cheek" facial rash → lacy reticular rash on body. In adults, may cause arthralgia/arthritis. Immunocompromised: pure red cell aplasia. Pregnant women: hydrops fetalis (infects fetal RBC precursors).',
    explanationZh: '传染性红斑（第五病）由细小病毒B19引起。"掌掴脸颊"面部皮疹→身体花边网状皮疹。成人可导致关节痛/关节炎。免疫缺陷者：纯红细胞再生障碍。孕妇：胎儿水肿（感染胎儿红细胞前体）。',
    explanationEs: 'Eritema infeccioso (quinta enfermedad): parvovirus B19. Rash en "mejilla abofeteada" + patrón reticular.'
  },
  {
    id: 163, step: 'step1', subject: 'Microbiology',
    question: 'A patient with a prosthetic heart valve develops fever, night sweats, and positive blood cultures 6 weeks after surgery. The organism is a gram-positive coccus that grows in clusters and is coagulase-negative. What is the most likely pathogen?',
    options: ['Staphylococcus aureus', 'Staphylococcus epidermidis', 'Streptococcus viridans', 'Enterococcus faecalis', 'Streptococcus pyogenes'],
    correctAnswer: 1,
    explanationEn: 'Staphylococcus epidermidis: coagulase-negative, gram-positive cocci in clusters. Most common cause of prosthetic valve endocarditis (early, <1 year post-op). Produces biofilm that adheres to prosthetic material. Also common in central line-associated bloodstream infections. Treatment: vancomycin + rifampin + gentamicin.',
    explanationZh: '表皮葡萄球菌：凝固酶阴性，革兰阳性球菌成簇排列。人工瓣膜心内膜炎（早期，术后<1年）最常见病原。产生生物膜粘附人工材料。也是中心静脉导管相关血流感染的常见病因。治疗：万古霉素+利福平+庆大霉素。',
    explanationEs: 'S. epidermidis: coagulasa-negativo, produce biofilm. Causa más común de endocarditis de válvula protésica temprana.'
  },
  {
    id: 164, step: 'step1', subject: 'Microbiology',
    question: 'A 30-year-old male presents with a painless genital ulcer with clean base and raised, indurated borders. The lesion resolves spontaneously. Which test confirms the diagnosis?',
    options: ['HSV PCR', 'Dark-field microscopy or serologic testing for Treponema pallidum', 'Gram stain of ulcer exudate', 'Tzanck smear', 'Culture on Thayer-Martin agar'],
    correctAnswer: 1,
    explanationEn: 'Primary syphilis: painless chancre (clean base, indurated border) 3-90 days after exposure. Diagnosis: dark-field microscopy (direct visualization of spirochetes) or serologic testing (nontreponemal: VDRL/RPR; treponemal: FTA-ABS). Penicillin G is the treatment.',
    explanationZh: '一期梅毒：无痛硬下疳（清洁基底、硬结边缘），暴露后3-90天出现。诊断：暗视野显微镜（直接观察螺旋体）或血清学检测（非密螺旋体：VDRL/RPR；密螺旋体：FTA-ABS）。苄星青霉素治疗。',
    explanationEs: 'Sífilis primaria: chancro indoloro. Diagnóstico: microscopía de campo oscuro o serología. Tratamiento: penicilina G.'
  },
  {
    id: 165, step: 'step1', subject: 'Microbiology',
    question: 'A patient presents with diarrhea 5 days after completing a course of clindamycin for a dental infection. Stool studies show a toxin-producing gram-positive anaerobic rod. What is the most likely organism?',
    options: ['Bacteroides fragilis', 'Clostridium perfringens', 'Clostridioides difficile', 'Escherichia coli O157:H7', 'Campylobacter jejuni'],
    correctAnswer: 2,
    explanationEn: 'C. difficile: gram-positive anaerobic spore-forming rod. Produces toxins A (enterotoxin) and B (cytotoxin). Antibiotic-associated diarrhea/pseudomembranous colitis, especially after clindamycin, fluoroquinolones, cephalosporins. Diagnosis: toxin PCR or EIA. Treatment: oral vancomycin or fidaxomicin (first-line); metronidazole as alternative.',
    explanationZh: '艰难梭菌：革兰阳性厌氧产芽孢杆菌。产生毒素A（肠毒素）和B（细胞毒素）。抗生素相关腹泻/伪膜性结肠炎，尤其是克林霉素、氟喹诺酮类、头孢菌素后。诊断：毒素PCR或EIA。治疗：口服万古霉素或非达霉素；甲硝唑为替代。',
    explanationEs: 'C. difficile: bacilo gram-positivo anaerobio, toxinas A y B. Colitis pseudomembranosa post-antibióticos.'
  },
  {
    id: 166, step: 'step1', subject: 'Microbiology',
    question: 'A patient with HIV (CD4 75) has retinitis with "pizza pie" appearance on fundoscopy. What is the most likely pathogen?',
    options: ['Toxoplasma gondii', 'CMV', 'HSV', 'VZV', 'Candida'],
    correctAnswer: 1,
    explanationEn: 'CMV retinitis: "pizza pie" or "cottage cheese and ketchup" appearance (yellow-white retinal infiltrates + hemorrhages). CD4 < 50. Most common cause of blindness in AIDS patients. Treatment: valganciclovir, ganciclovir. CMV is a herpesvirus (HHV-5) causing latent infection reactivated in immunosuppression.',
    explanationZh: 'CMV视网膜炎："比萨饼"或"奶酪番茄酱"外观（黄白色视网膜浸润+出血）。CD4<50。AIDS患者最常见的失明原因。治疗：缬更昔洛韦、更昔洛韦。CMV是疱疹病毒（HHV-5），潜伏感染在免疫抑制时再激活。',
    explanationEs: 'Retinitis por CMV: aspecto en "pizza" (infiltrados blancos + hemorragias). CD4 < 50. Principal causa de ceguera en SIDA.'
  },
  {
    id: 167, step: 'step1', subject: 'Microbiology',
    question: 'A 20-year-old college student presents with sore throat, fever, cervical lymphadenopathy, and splenomegaly. Peripheral smear shows atypical lymphocytes (Downey cells). Monospot test is positive. Which virus is responsible?',
    options: ['CMV', 'EBV', 'Adenovirus', 'HHV-6', 'HIV'],
    correctAnswer: 1,
    explanationEn: 'Infectious mononucleosis: EBV (HHV-4) infection. Classic triad: pharyngitis, lymphadenopathy, splenomegaly + fever + atypical lymphocytosis. Monospot detects heterophile antibodies. Avoid contact sports (splenic rupture risk). Ampicillin/amoxicillin causes morbilliform rash if given. Complications: splenic rupture, airway obstruction, Burkitt lymphoma, nasopharyngeal carcinoma.',
    explanationZh: '传染性单核细胞增多症：EBV（HHV-4）感染。经典三联征：咽炎、淋巴结肿大、脾大+发热+异型淋巴细胞增多。Monospot检测异嗜性抗体。避免接触性运动（脾破裂风险）。给予氨苄西林/阿莫西林会导致麻疹样皮疹。并发症：脾破裂、气道阻塞、Burkitt淋巴瘤、鼻咽癌。',
    explanationEs: 'Mononucleosis infecciosa: EBV (HHV-4). Faringitis, linfadenopatía, esplenomegalia + linfocitos atípicos.'
  },

  // --- Immunology Extended (id: 181-190) ---
  {
    id: 181, step: 'step1', subject: 'Immunology',
    question: 'A 2-year-old boy has recurrent pyogenic infections (pneumonia, otitis media, skin abscesses). Laboratory studies show normal T cell count and function but very low levels of all immunoglobulin classes. What is the most likely diagnosis?',
    options: ['DiGeorge syndrome', 'X-linked agammaglobulinemia (Bruton disease)', 'Severe combined immunodeficiency (SCID)', 'Wiskott-Aldrich syndrome', 'Chronic granulomatous disease'],
    correctAnswer: 1,
    explanationEn: 'X-linked agammaglobulinemia: BTK gene mutation → failure of B cell maturation → pan-hypogammaglobulinemia. Recurrent pyogenic infections starting after 6 months (when maternal IgG wanes). Normal T cells. Treatment: IVIG. Affects only males.',
    explanationZh: 'X连锁无丙种球蛋白血症：BTK基因突变→B细胞不能成熟→全低丙种球蛋白血症。6个月后开始反复化脓性感染（母体IgG消退）。T细胞正常。治疗：IVIG。仅影响男性。',
    explanationEs: 'Agammaglobulinemia ligada a X: mutación BTK → fallo maduración células B → sin inmunoglobulinas.'
  },
  {
    id: 182, step: 'step1', subject: 'Immunology',
    question: 'Which complement deficiency is associated with recurrent Neisseria infections?',
    options: ['C1q deficiency', 'C3 deficiency', 'C5-C9 (MAC) deficiency', 'Factor H deficiency', 'C1 inhibitor deficiency'],
    correctAnswer: 2,
    explanationEn: 'C5-C9 (membrane attack complex, MAC) deficiency → inability to lyse gram-negative bacteria (Neisseria meningitidis, N. gonorrhoeae). Patients have recurrent disseminated Neisseria infections. C1q deficiency: SLE-like syndrome. C3 deficiency: severe pyogenic infections. C1 inhibitor deficiency: hereditary angioedema. Factor H: atypical HUS.',
    explanationZh: 'C5-C9（膜攻击复合物）缺乏→无法裂解革兰阴性菌（脑膜炎球菌、淋球菌）。患者反复播散性奈瑟菌感染。C1q缺乏：狼疮样综合征。C3缺乏：严重化脓性感染。C1抑制剂缺乏：遗传性血管性水肿。H因子：非典型HUS。',
    explanationEs: 'Déficit C5-C9 (MAC): infecciones recurrentes por Neisseria. Incapaz de lisar gram-negativos.'
  },
  {
    id: 183, step: 'step1', subject: 'Immunology',
    question: 'A 5-year-old boy develops eczema, easy bruising, and recurrent infections. Lab shows thrombocytopenia with small platelets and elevated IgE. What is the defect?',
    options: ['Phagocyte NADPH oxidase defect', 'T cell receptor rearrangement defect', 'WAS gene mutation → defective cytoskeletal protein in hematopoietic cells', 'CD40 ligand deficiency', 'Adenosine deaminase deficiency'],
    correctAnswer: 2,
    explanationEn: 'Wiskott-Aldrich syndrome: X-linked, WAS gene mutation → defective WASP protein (actin cytoskeleton regulation). Triad: eczema, thrombocytopenia (small platelets), recurrent infections. Elevated IgE and IgA, low IgM. Lymphoreticular malignancies risk. Treatment: hematopoietic stem cell transplant.',
    explanationZh: 'Wiskott-Aldrich综合征：X连锁，WAS基因突变→WASP蛋白缺陷（肌动蛋白细胞骨架调节）。三联征：湿疹、血小板减少（小血小板）、反复感染。IgE和IgA升高，IgM降低。淋巴网状恶性肿瘤风险。治疗：造血干细胞移植。',
    explanationEs: 'Wiskott-Aldrich: mutación WAS → proteína WASP defectuosa. Tríada: eczema, trombocitopenia, infecciones recurrentes.'
  },
  {
    id: 184, step: 'step1', subject: 'Immunology',
    question: 'Which type of hypersensitivity reaction is responsible for hemolytic disease of the newborn (erythroblastosis fetalis)?',
    options: ['Type I', 'Type II', 'Type III', 'Type IV', 'Type V'],
    correctAnswer: 1,
    explanationEn: 'Hemolytic disease of the newborn: Type II hypersensitivity (antibody-mediated cytotoxicity). Rh-negative mother produces anti-RhD IgG after exposure to Rh+ fetal blood. In a subsequent pregnancy with Rh+ fetus, maternal IgG crosses placenta and causes fetal RBC hemolysis. Prevention: Rho(D) immune globulin (RhoGAM) at 28 weeks and within 72 hours of delivery.',
    explanationZh: '新生儿溶血病：II型超敏反应（抗体介导的细胞毒作用）。Rh阴性母亲暴露Rh+胎儿血液后产生抗RhD IgG。在随后Rh+胎儿妊娠中，母体IgG穿过胎盘引起胎儿红细胞溶血。预防：28周和分娩72小时内给予Rho(D)免疫球蛋白（RhoGAM）。',
    explanationEs: 'Enfermedad hemolítica del recién nacido: hipersensibilidad tipo II. IgG anti-RhD materna cruza placenta.'
  },
  {
    id: 185, step: 'step1', subject: 'Immunology',
    question: 'A kidney transplant patient develops rising creatinine 2 weeks post-transplant. Biopsy shows interstitial mononuclear cell infiltrate and tubulitis. What type of rejection is this?',
    options: ['Hyperacute rejection', 'Acute antibody-mediated rejection', 'Acute cellular rejection', 'Chronic rejection', 'Graft-versus-host disease'],
    correctAnswer: 2,
    explanationEn: 'Acute cellular rejection: T-cell mediated (Type IV hypersensitivity), occurs days to weeks post-transplant. Histology: interstitial lymphocytic infiltrate + tubulitis (lymphocytes invading tubular epithelium). Hyperacute rejection: minutes (preformed antibodies). Antibody-mediated: C4d deposition in capillaries. Chronic: fibrous intimal thickening.',
    explanationZh: '急性细胞排斥：T细胞介导（IV型超敏反应），移植后数天至数周发生。组织学：间质淋巴细胞浸润+肾小管炎（淋巴细胞侵入肾小管上皮）。超急性排斥：数分钟（预先形成抗体）。抗体介导：毛细血管C4d沉积。慢性：纤维性内膜增厚。',
    explanationEs: 'Rechazo celular agudo: mediado por células T (tipo IV). Infiltrado linfocítico intersticial + tubulitis.'
  },

  // --- Genetics Extended (id: 201-210) ---
  {
    id: 201, step: 'step1', subject: 'Genetics',
    question: 'A couple has a child with cystic fibrosis (CF). What is the probability that their next child will be a carrier of the CF mutation?',
    options: ['0%', '25%', '50%', '75%', '100%'],
    correctAnswer: 2,
    explanationEn: 'CF is autosomal recessive. If both parents are carriers (Aa), each pregnancy: 25% affected (aa), 50% carrier (Aa), 25% unaffected non-carrier (AA). Since the question asks about carriers specifically, the answer is 50%.',
    explanationZh: 'CF为常染色体隐性遗传。如父母双方均为携带者（Aa），每次妊娠：25%患病（aa）、50%携带者（Aa）、25%未患病非携带者（AA）。问题专门问携带者概率，答案为50%。',
    explanationEs: 'Fibrosis quística: autosómica recesiva. Padres portadores (Aa): 50% probabilidad hijo portador.'
  },
  {
    id: 202, step: 'step1', subject: 'Genetics',
    question: 'A 3-year-old boy with developmental delay, autistic features, and seizures is found to have a CGG trinucleotide repeat expansion in the FMR1 gene. What is the diagnosis?',
    options: ['Huntington disease', 'Myotonic dystrophy', 'Fragile X syndrome', 'Friedreich ataxia', 'Spinocerebellar ataxia type 1'],
    correctAnswer: 2,
    explanationEn: 'Fragile X syndrome: CGG repeat expansion in FMR1 gene (>200 repeats = full mutation). Most common inherited cause of intellectual disability. Features: long face, large ears, macroorchidism (post-puberty), autism spectrum behaviors. X-linked dominant with anticipation (maternal transmission).',
    explanationZh: '脆性X综合征：FMR1基因CGG重复扩增（>200次重复=完全突变）。最常见的遗传性智力障碍病因。特征：长脸、大耳、巨睾（青春期后）、自闭症谱系行为。X连锁显性遗传伴早现遗传（母系传递）。',
    explanationEs: 'Síndrome X frágil: expansión CGG en FMR1. Discapacidad intelectual hereditaria más común. Cara alargada, orejas grandes.'
  },
  {
    id: 203, step: 'step1', subject: 'Genetics',
    question: 'Which pattern of inheritance is characterized by transmission from an affected father to ALL daughters but NO sons?',
    options: ['Autosomal dominant', 'Autosomal recessive', 'X-linked dominant', 'X-linked recessive', 'Mitochondrial'],
    correctAnswer: 2,
    explanationEn: 'X-linked dominant: affected father transmits the X chromosome to ALL daughters (they inherit his only X) but NO sons (sons inherit the Y chromosome). Example: hypophosphatemic rickets (vitamin D-resistant rickets), Rett syndrome. In X-linked recessive, father-to-daughter transmission also occurs but daughters are carriers (usually not affected).',
    explanationZh: 'X连锁显性遗传：患病父亲将X染色体传递给所有女儿（她们继承其唯一的X染色体）而不传递给儿子（儿子继承Y染色体）。例子：低磷血症性佝偻病（维生素D抵抗性佝偻病）、Rett综合征。X连锁隐性遗传中父亲到女儿传递同样发生但女儿为携带者（通常不患病）。',
    explanationEs: 'Dominante ligada a X: padre afectado → TODAS hijas afectadas, NINGÚN hijo afectado.'
  },
  {
    id: 204, step: 'step1', subject: 'Genetics',
    question: 'A child has a homozygous deletion in the RB1 gene on chromosome 13. What cancer is this child at highest risk for?',
    options: ['Wilms tumor', 'Retinoblastoma', 'Neuroblastoma', 'Hepatoblastoma', 'Osteosarcoma'],
    correctAnswer: 1,
    explanationEn: 'Retinoblastoma: RB1 gene (13q14 deletion). Two-hit hypothesis: in hereditary form, first hit is germline (inherited), second hit is somatic. Bilateral retinoblastoma is almost always hereditary. Also increases risk of osteosarcoma, soft tissue sarcomas, and melanoma later in life.',
    explanationZh: '视网膜母细胞瘤：RB1基因（13q14缺失）。两次打击假说：遗传形式中第一次打击为生殖系（遗传），第二次为体细胞。双侧视网膜母细胞瘤几乎总是遗传性。也增加日后骨肉瘤、软组织肉瘤和黑色素瘤风险。',
    explanationEs: 'Retinoblastoma: deleción RB1 (13q14). Hipótesis de dos golpes. Bilateral = hereditario.'
  },
  {
    id: 205, step: 'step1', subject: 'Genetics',
    question: 'Marfan syndrome results from a mutation in which gene, and produces which type of aortic pathology?',
    options: ['COL1A1 — aortic dissection', 'FBN1 — aortic root dilation and dissection', 'TGFBR2 — aortic coarctation', 'COL3A1 — aortic aneurysm', 'ELN — supravalvular aortic stenosis'],
    correctAnswer: 1,
    explanationEn: 'Marfan syndrome: FBN1 mutation → defective fibrillin-1 → increased TGF-beta signaling. Features: tall stature, arachnodactyly, lens dislocation (upward), aortic root dilation → dissection/rupture. Treatment: beta-blockers/losartan to slow aortic dilation; elective aortic root replacement when ≥5.0 cm.',
    explanationZh: '马凡综合征：FBN1突变→fibrillin-1缺陷→增加TGF-β信号。特征：高身材、蜘蛛指（趾）、晶状体脱位（向上）、主动脉根部扩张→夹层/破裂。治疗：β阻滞剂/氯沙坦减缓主动脉扩张；选择性主动脉根部置换（≥5.0cm时）。',
    explanationEs: 'Síndrome de Marfan: mutación FBN1 → fibrilina-1 defectuosa. Dilatación/disección de raíz aórtica.'
  },

  // --- Anatomy Extended (id: 221-230) ---
  {
    id: 221, step: 'step1', subject: 'Anatomy',
    question: 'A patient presents with wrist drop after a fracture of the mid-shaft of the humerus. Which nerve is most likely injured?',
    options: ['Median nerve', 'Ulnar nerve', 'Radial nerve', 'Axillary nerve', 'Musculocutaneous nerve'],
    correctAnswer: 2,
    explanationEn: 'Radial nerve: runs in the spiral (radial) groove of the humerus. Mid-shaft humerus fracture → radial nerve injury → wrist drop (loss of wrist and finger extension). Also affects triceps, brachioradialis, supinator. Sensory loss: posterior arm/forearm, dorsal hand (1st web space).',
    explanationZh: '桡神经：在肱骨螺旋沟走行。肱骨中段骨折→桡神经损伤→垂腕（失去伸腕和伸指功能）。也影响肱三头肌、肱桡肌、旋后肌。感觉丧失：臂后侧/前臂后侧、手背（第一指蹼间隙）。',
    explanationEs: 'Nervio radial: fractura diáfisis humeral → muñeca caída (pérdida extensión).'
  },
  {
    id: 222, step: 'step1', subject: 'Anatomy',
    question: 'An injury to the ulnar nerve at the elbow results in which characteristic hand deformity?',
    options: ['Ape hand (simian hand)', 'Claw hand (main en griffe)', 'Wrist drop', 'Benediction hand', 'Dupuytren contracture'],
    correctAnswer: 1,
    explanationEn: 'Ulnar nerve injury at elbow → claw hand: hyperextension of MCP joints, flexion of PIP and DIP joints in ring and little fingers (lumbricals 3-4 and interossei loss). Also: Froment sign (flexor pollicis longus compensates for adductor pollicis).',
    explanationZh: '肘部尺神经损伤→爪形手：环指和小指MCP关节过伸、PIP和DIP关节屈曲（第3-4蚓状肌和骨间肌丧失）。Froment征（拇长屈肌代偿拇收肌）。',
    explanationEs: 'Lesión nervio cubital a nivel del codo → "mano en garra". Signo de Froment positivo.'
  },
  {
    id: 223, step: 'step1', subject: 'Anatomy',
    question: 'Which of the following is a content of the femoral triangle (from lateral to medial)?',
    options: ['Femoral nerve → femoral vein → femoral artery → lymphatics', 'Femoral nerve → femoral artery → femoral vein → lymphatics', 'Femoral artery → femoral nerve → femoral vein', 'Femoral vein → femoral artery → femoral nerve', 'Lymphatics → femoral nerve → femoral artery → femoral vein'],
    correctAnswer: 1,
    explanationEn: 'Femoral triangle contents (lateral to medial): NAVEL — Nerve (femoral), Artery (femoral), Vein (femoral), Empty space, Lymphatics (with canal of Cloquet). Boundaries: inguinal ligament (superior), sartorius (lateral), adductor longus (medial).',
    explanationZh: '股三角内容（从外侧到内侧）：NAVEL — 神经（股神经）、动脉（股动脉）、静脉（股静脉）、空隙、淋巴管（含Cloquet管）。边界：腹股沟韧带（上）、缝匠肌（外）、长收肌（内）。',
    explanationEs: 'Triángulo femoral (lateral a medial): NAVEL — Nervio, Arteria, Vena, Espacio vacío, Linfáticos.'
  },
  {
    id: 224, step: 'step1', subject: 'Anatomy',
    question: 'During a thyroidectomy, a patient develops hoarseness and difficulty with high-pitched sounds. Which structure is most likely injured?',
    options: ['Recurrent laryngeal nerve', 'External branch of the superior laryngeal nerve', 'Glossopharyngeal nerve', 'Hypoglossal nerve', 'Internal branch of the superior laryngeal nerve'],
    correctAnswer: 1,
    explanationEn: 'External branch of superior laryngeal nerve innervates the cricothyroid muscle (tensor of vocal cords, responsible for high-pitched sounds). Injury → inability to produce high-pitched sounds, vocal fatigue. Recurrent laryngeal nerve injury → hoarseness (vocal cord paralysis). Internal branch → loss of sensation above vocal cords.',
    explanationZh: '喉上神经外支支配环甲肌（声带张力肌，负责高音）。损伤→无法发出高音、声音疲劳。喉返神经损伤→声音嘶哑（声带麻痹）。内支→声带以上感觉丧失。',
    explanationEs: 'Rama externa del laríngeo superior: inerva cricotiroideo. Lesión → incapacidad para tonos agudos.'
  },
  {
    id: 225, step: 'step1', subject: 'Anatomy',
    question: 'A patient with carpal tunnel syndrome has paresthesias in which distribution?',
    options: ['Dorsal aspect of the hand', 'Fifth finger and ulnar half of fourth finger', 'Thumb, index, middle, and radial half of ring finger (palmar)', 'Whole palmar surface', 'Thenar eminence only'],
    correctAnswer: 2,
    explanationEn: 'Carpal tunnel syndrome: median nerve compression at the wrist → paresthesias in thumb, index, middle, and radial half of ring finger. Thenar atrophy may occur in severe/chronic cases. Tinel sign (tapping wrist) and Phalen maneuver (wrist flexion) may reproduce symptoms. Dorsal sensation is NOT affected (radial/ulnar nerves).',
    explanationZh: '腕管综合征：正中神经在腕部受压→拇指、食指、中指和环指桡侧半感觉异常。严重/慢性病例可出现鱼际萎缩。Tinel征（叩击腕部）和Phalen试验（屈腕）可诱发症状。背侧感觉不受影响（桡/尺神经）。',
    explanationEs: 'Síndrome del túnel carpiano: compresión nervio mediano. Parestesias en pulgar, índice, medio y mitad radial del anular.'
  },

  // --- Neurology Extended (id: 241-250) ---
  {
    id: 241, step: 'step1', subject: 'Neurology',
    question: 'A 70-year-old male with hypertension presents with sudden onset of face and arm weakness (right side) that began 45 minutes ago. CT head without contrast shows no hemorrhage. What is the next best step?',
    options: ['Start aspirin 325 mg immediately', 'Administer IV tPA (alteplase)', 'Start heparin infusion', 'Obtain MRI before any intervention', 'Start clopidogrel and aspirin'],
    correctAnswer: 1,
    explanationEn: 'Ischemic stroke within 3-4.5 hour window → IV tPA (alteplase) 0.9 mg/kg (10% bolus, 90% infusion over 1 hour). Must first rule out hemorrhage on CT. Other exclusion criteria: recent surgery, bleeding diathesis, uncontrolled hypertension, recent intracranial hemorrhage.',
    explanationZh: '缺血性脑卒中在3-4.5小时时间窗内→IV tPA（阿替普酶）0.9mg/kg（10%推注，90%输注1小时）。必须先CT排除出血。其他排除标准：近期手术、出血倾向、未控制的高血压、近期颅内出血。',
    explanationEs: 'Ictus isquémico <3-4.5h → tPA IV (alteplasa). Descartar hemorragia en TC primero.'
  },
  {
    id: 242, step: 'step1', subject: 'Neurology',
    question: 'A 45-year-old female presents with progressive bilateral leg weakness over 3 days, starting in the feet and ascending. She had a diarrheal illness 2 weeks ago. CSF shows albuminocytologic dissociation (elevated protein, normal WBC). What is the diagnosis?',
    options: ['Multiple sclerosis', 'Myasthenia gravis', 'Guillain-Barré syndrome (AIDP)', 'Amyotrophic lateral sclerosis', 'Transverse myelitis'],
    correctAnswer: 2,
    explanationEn: 'Guillain-Barré syndrome (AIDP): ascending symmetric weakness, often post-infectious (Campylobacter jejuni most common). CSF: albuminocytologic dissociation (high protein, normal cells). Treatment: IVIG or plasmapheresis. Monitor respiratory function (may require mechanical ventilation). Avoid steroids (not effective).',
    explanationZh: '格林-巴利综合征（AIDP）：上升性对称性无力，常见于感染后，空肠弯曲菌最常见。CSF：蛋白细胞分离（蛋白高，细胞正常）。治疗：IVIG或血浆置换。监测呼吸功能（可能需要机械通气）。避免使用激素（无效）。',
    explanationEs: 'Síndrome de Guillain-Barré: debilidad ascendente post-infecciosa. LCR: disociación albúmino-citológica.'
  },
  {
    id: 243, step: 'step1', subject: 'Neurology',
    question: 'Which neurotransmitter is primarily deficient in Alzheimer disease?',
    options: ['Dopamine', 'Acetylcholine', 'Serotonin', 'Norepinephrine', 'GABA'],
    correctAnswer: 1,
    explanationEn: 'Alzheimer disease: loss of cholinergic neurons in the nucleus basalis of Meynert → decreased acetylcholine in the cortex. Treatment: acetylcholinesterase inhibitors (donepezil, rivastigmine, galantamine) for mild-moderate disease. Memantine (NMDA antagonist) for moderate-severe. Pathology: amyloid plaques (Aβ) and neurofibrillary tangles (hyperphosphorylated tau).',
    explanationZh: '阿尔茨海默病：Meynert基底核胆碱能神经元丧失→皮层乙酰胆碱减少。治疗：乙酰胆碱酯酶抑制剂（多奈哌齐、卡巴拉汀、加兰他敏）用于轻中度。美金刚（NMDA拮抗剂）用于中重度。病理：淀粉样斑块（Aβ）和神经原纤维缠结（过度磷酸化tau）。',
    explanationEs: 'Alzheimer: déficit de acetilcolina por pérdida de neuronas colinérgicas. Tratamiento: inhibidores de acetilcolinesterasa.'
  },
  {
    id: 244, step: 'step1', subject: 'Neurology',
    question: 'A 30-year-old female presents with unilateral vision loss that improves over weeks, followed months later by leg weakness and sensory changes. Brain MRI shows periventricular white matter lesions. CSF shows oligoclonal bands. What is the diagnosis?',
    options: ['Guillain-Barré syndrome', 'Multiple sclerosis', 'Neuromyelitis optica (NMO)', 'Acute disseminated encephalomyelitis (ADEM)', 'CNS lymphoma'],
    correctAnswer: 1,
    explanationEn: 'MS: autoimmune demyelinating disease of the CNS. Classic presentation: relapsing-remitting episodes of neurologic deficits separated in time and space (optic neuritis + spinal cord lesion). CSF: oligoclonal bands (IgG). MRI: Dawson fingers (periventricular lesions perpendicular to ventricles). Young women most affected.',
    explanationZh: 'MS：CNS自身免疫性脱髓鞘疾病。典型表现：复发缓解型神经功能缺损，时间空间上分散（视神经炎+脊髓病变）。CSF：寡克隆区带（IgG）。MRI：Dawson手指征（垂直于脑室的脑室周围病变）。年轻女性最常受累。',
    explanationEs: 'Esclerosis múltiple: enfermedad desmielinizante autoinmune. Bandas oligoclonales en LCR. Lesiones periventriculares en RM.'
  },
  {
    id: 245, step: 'step1', subject: 'Neurology',
    question: 'Which of the following brain structures, when lesioned, results in Wernicke aphasia?',
    options: ['Broca area (inferior frontal gyrus)', 'Wernicke area (superior temporal gyrus)', 'Arcuate fasciculus', 'Angular gyrus', 'Supramarginal gyrus'],
    correctAnswer: 1,
    explanationEn: 'Wernicke area (posterior superior temporal gyrus, BA 22): lesion → Wernicke (receptive/fluent) aphasia. Features: fluent but nonsensical speech, poor comprehension, poor repetition, word salad. Patients are unaware of their deficit. Usually due to MCA inferior division stroke.',
    explanationZh: 'Wernicke区（颞上回后部，BA 22）：病变→Wernicke（感觉性/流畅性）失语。特征：流畅但无意义言语，理解差，复述差，言语杂乱。患者不自知有缺陷。通常因MCA下分支中风。',
    explanationEs: 'Área de Wernicke (giro temporal superior posterior): lesión → afasia receptiva/fluente.'
  },

  // ============================================================
  // STEP 2 CK — CLINICAL KNOWLEDGE (id: 301-380)
  // ============================================================

  // --- Internal Medicine Step 2 (id: 301-320) ---
  {
    id: 301, step: 'step2', subject: 'Internal Medicine',
    question: 'A 55-year-old male with DM2, HTN, and hyperlipidemia presents with acute-onset severe chest pain radiating to the back. BP 190/100 (right arm), 140/90 (left arm). CXR shows widened mediastinum. What is the most appropriate next step?',
    options: ['Start heparin and obtain CT angiogram of the chest', 'Obtain an ECG and cardiac enzymes', 'Administer tPA immediately', 'Start aspirin and clopidogrel', 'Obtain a transthoracic echocardiogram'],
    correctAnswer: 0,
    explanationEn: 'Acute aortic dissection (Stanford type A). BP differential between arms, widened mediastinum, severe chest pain → suspect dissection. First step: reduce shear stress on aortic wall — IV beta-blocker (esmolol/labetalol) to HR ~60, then lower BP (target SBP 100-120). CT angiogram confirms. Type A requires emergent surgery.',
    explanationZh: '急性主动脉夹层（Stanford A型）。双臂血压差、纵隔增宽、剧烈胸痛→怀疑夹层。第一步：减少主动脉壁剪切力——IV β阻滞剂（艾司洛尔/拉贝洛尔）将心率降至~60，然后降压（目标SBP 100-120）。CT血管造影确诊。A型需急诊手术。',
    explanationEs: 'Disección aórtica aguda tipo A: diferencial de PA entre brazos, mediastino ensanchado. Beta-bloqueante IV + TAC angiográfica.'
  },
  {
    id: 302, step: 'step2', subject: 'Internal Medicine',
    question: 'A 68-year-old female with CHF (EF 30%) presents with progressive dyspnea, orthopnea, and bilateral lower extremity edema. She is on lisinopril and metoprolol. JVP is elevated, lungs have crackles, S3 gallop. What medication reduces mortality in this patient?',
    options: ['Furosemide', 'Spironolactone or eplerenone', 'Digoxin', 'Hydralazine + isosorbide dinitrate', 'Dobutamine'],
    correctAnswer: 1,
    explanationEn: 'HFrEF mortality-reducing medications: beta-blockers (metoprolol succinate, carvedilol, bisoprolol), ACEi/ARB, ARNI (sacubitril/valsartan), mineralocorticoid receptor antagonists (spironolactone, eplerenone), SGLT2 inhibitors. Furosemide improves symptoms but NOT mortality. Digoxin reduces hospitalizations but NOT mortality.',
    explanationZh: 'HFrEF降低死亡率药物：β阻滞剂、ACEi/ARB、ARNI、醛固酮受体拮抗剂（螺内酯、依普利酮）、SGLT2抑制剂。呋塞米改善症状但不降低死亡率。地高辛减少住院但不降低死亡率。',
    explanationEs: 'ICFEr: espironolactona/eplerenona reduce mortalidad. Furosemida mejora síntomas pero no sobrevida.'
  },
  {
    id: 303, step: 'step2', subject: 'Internal Medicine',
    question: 'A 32-year-old female with SLE on chronic prednisone presents with acute-onset severe hip pain, unable to bear weight. MRI shows femoral head with serpentine border, subchondral collapse. What is the diagnosis?',
    options: ['Osteoarthritis', 'Septic arthritis', 'Avascular necrosis (osteonecrosis) of the femoral head', 'Transient osteoporosis of the hip', 'Stress fracture of the femoral neck'],
    correctAnswer: 2,
    explanationEn: 'Avascular necrosis: risk factors — corticosteroids (most common non-traumatic cause), SLE, sickle cell disease, alcohol, trauma. MRI: "serpentine border" sign, subchondral collapse (crescent sign on X-ray). May progress to secondary osteoarthritis requiring total hip arthroplasty.',
    explanationZh: '股骨头缺血性坏死：危险因素—糖皮质激素（最常见非创伤原因）、SLE、镰状细胞病、酒精、创伤。MRI："蛇形边缘"征、软骨下塌陷（X线新月征）。可进展为继发性骨关节炎需全髋关节置换术。',
    explanationEs: 'Necrosis avascular: corticoides (causa no traumática más común), LES, drepanocitosis. RM: colapso subcondral.'
  },
  {
    id: 304, step: 'step2', subject: 'Internal Medicine',
    question: 'A 45-year-old IV drug user presents with fever, chills, and a new holosystolic murmur at the left sternal border that increases with inspiration. Echocardiogram shows a large mobile vegetation on the tricuspid valve. Blood cultures are pending. What is the most likely organism?',
    options: ['Streptococcus viridans', 'Staphylococcus aureus', 'Enterococcus faecalis', 'Streptococcus bovis', 'Candida albicans'],
    correctAnswer: 1,
    explanationEn: 'Right-sided endocarditis in IVDU: tricuspid valve most common, caused by S. aureus. Murmur increases with inspiration (Carvallo sign). Look for septic pulmonary emboli. Treatment: anti-staphylococcal penicillin or vancomycin (if MRSA suspected). Surgery if vegetation >2 cm or persistent bacteremia.',
    explanationZh: 'IVDU右心内膜炎：三尖瓣最常见，由金黄色葡萄球菌引起。杂音随吸气增强（Carvallo征）。注意脓毒性肺栓塞。治疗：抗葡萄球菌青霉素或万古霉素。如赘生物>2cm或持续菌血症需手术。',
    explanationEs: 'Endocarditis derecha en UDIV: S. aureus, válvula tricúspide. Embolia pulmonar séptica.'
  },
  {
    id: 305, step: 'step2', subject: 'Internal Medicine',
    question: 'A 60-year-old male with COPD (FEV1 45% predicted) presents with increased sputum purulence, dyspnea, and wheezing. He is afebrile. CXR shows hyperinflation without infiltrate. What is the most appropriate antibiotic?',
    options: ['Azithromycin or doxycycline', 'Ceftriaxone + azithromycin', 'Vancomycin + piperacillin-tazobactam', 'Levofloxacin for 14 days', 'No antibiotics — this is viral'],
    correctAnswer: 0,
    explanationEn: 'Acute COPD exacerbation with 2/3 cardinal symptoms (increased dyspnea, increased sputum volume, increased sputum purulence). Antibiotics indicated if all 3 or if 2 with increased purulence as one. First-line: macrolide (azithromycin) or doxycycline for 5 days. Add steroids (prednisone 40 mg x 5 days) and bronchodilators.',
    explanationZh: 'COPD急性加重伴3个主要症状中的2个（呼吸困难加重、痰量增加、痰脓性增加）。满足全部3个或含脓性加重的2个时使用抗生素。一线：大环内酯或强力霉素5天。加用激素（泼尼松40mg×5天）和支气管扩张剂。',
    explanationEs: 'Exacerbación aguda de EPOC: antibiótico si 2/3 criterios cardinales (con purulencia). Azitromicina o doxiciclina.'
  },
  {
    id: 306, step: 'step2', subject: 'Internal Medicine',
    question: 'A 35-year-old female presents with fatigue, joint pain, and Raynaud phenomenon. Exam shows puffy fingers and telangiectasias on the face. ANA is positive (nucleolar pattern), anti-Scl-70 is positive. What is the most concerning complication to screen for?',
    options: ['Pulmonary arterial hypertension', 'Interstitial lung disease', 'Scleroderma renal crisis', 'Digital ulcers and gangrene', 'Esophageal dysmotility'],
    correctAnswer: 1,
    explanationEn: 'Systemic sclerosis (scleroderma): anti-Scl-70 (anti-topoisomerase I) is associated with diffuse cutaneous disease and INTERSTITIAL LUNG DISEASE (ILD) — the leading cause of death. Screen with PFTs and HRCT. Anti-centromere is associated with limited disease and PAH (also screened but ILD more common with anti-Scl-70).',
    explanationZh: '系统性硬化症：抗Scl-70与弥漫性皮肤病和间质性肺病（ILD）相关——ILD是主要死因。使用肺功能检查和HRCT筛查。抗着丝粒抗体与局限性疾病和PAH相关（也需筛查但ILD在抗Scl-70阳性中更常见）。',
    explanationEs: 'Esclerosis sistémica: anti-Scl-70 → EPID (principal causa de muerte). Cribado con PFT y TACAR.'
  },
  {
    id: 307, step: 'step2', subject: 'Internal Medicine',
    question: 'Which of the following statins is LEAST likely to cause drug interactions because it is NOT metabolized by CYP3A4?',
    options: ['Atorvastatin', 'Simvastatin', 'Lovastatin', 'Rosuvastatin', 'None — all statins use CYP3A4'],
    correctAnswer: 3,
    explanationEn: 'Rosuvastatin and pravastatin are NOT significantly metabolized by CYP450 enzymes. Rosuvastatin is mostly excreted unchanged. Atorvastatin, simvastatin, and lovastatin are metabolized by CYP3A4 → many drug interactions (e.g., with macrolides, azole antifungals, protease inhibitors). Pitavastatin also avoids CYP3A4.',
    explanationZh: '瑞舒伐他汀和普伐他汀不主要通过CYP450代谢。瑞舒伐他汀大部分以原形排泄。阿托伐他汀、辛伐他汀和洛伐他汀通过CYP3A4代谢→很多药物相互作用（如大环内酯类、唑类抗真菌药、蛋白酶抑制剂）。匹伐他汀也避免CYP3A4。',
    explanationEs: 'Rosuvastatina y pravastatina: no metabolizadas por CYP3A4. Menos interacciones farmacológicas.'
  },
  {
    id: 308, step: 'step2', subject: 'Internal Medicine',
    question: 'A 62-year-old male with prostate cancer presents with severe back pain and lower extremity weakness. MRI shows vertebral body collapse with epidural extension compressing the spinal cord. What is the most appropriate immediate management?',
    options: ['Start chemotherapy', 'Start high-dose dexamethasone and obtain emergent neurosurgical consultation', 'Schedule radiation therapy for next week', 'Start IV antibiotics', 'Place a thoracolumbar brace and observe'],
    correctAnswer: 1,
    explanationEn: 'Malignant spinal cord compression is an oncologic emergency. Immediate management: high-dose dexamethasone (reduce edema) + emergent neurosurgical/radiation oncology consultation. MRI is the imaging of choice. Surgery (decompression) + radiation generally preferred over radiation alone for patients who are surgical candidates.',
    explanationZh: '恶性脊髓压迫是肿瘤急症。立即处理：大剂量地塞米松（减轻水肿）+紧急神经外科/放疗科会诊。MRI是首选影像。对适合手术的患者，手术（减压）+放疗通常优于单纯放疗。',
    explanationEs: 'Compresión medular maligna: emergencia oncológica. Dexametasona dosis alta + neurocirugía urgente.'
  },
  {
    id: 309, step: 'step2', subject: 'Internal Medicine',
    question: 'A 50-year-old male with cirrhosis (Child-Pugh B) presents with increasing abdominal distension, shifting dullness, and a fluid wave. Diagnostic paracentesis shows SAAG (serum-ascites albumin gradient) ≥ 1.1 g/dL. What is the most appropriate management?',
    options: ['Furosemide alone', 'Spironolactone + furosemide + sodium restriction', 'Therapeutic paracentesis only', 'TIPS (transjugular intrahepatic portosystemic shunt)', 'IV albumin alone'],
    correctAnswer: 1,
    explanationEn: 'Portal hypertensive ascites (SAAG ≥1.1): management — sodium restriction (<2g/day) + diuretics (spironolactone 100mg + furosemide 40mg, titrate). Spontaneous bacterial peritonitis prophylaxis if ascitic protein <1.5 g/dL + Child-Pugh B/C or prior SBP. Large-volume paracentesis for refractory/tension ascites. TIPS for refractory ascites.',
    explanationZh: '门脉高压性腹水（SAAG≥1.1）：管理—限钠（<2g/天）+利尿剂（螺内酯100mg+呋塞米40mg，滴定调整）。如腹水蛋白<1.5g/dL+Child-Pugh B/C或既往SBP，需SBP预防。大量腹穿用于难治性/张力性腹水。TIPS用于难治性腹水。',
    explanationEs: 'Ascitis portal hipertensiva: restricción de sodio + espironolactona + furosemida.'
  },
  {
    id: 310, step: 'step2', subject: 'Internal Medicine',
    question: 'A 28-year-old female with Graves disease is started on methimazole. After 3 weeks, she develops severe sore throat and fever of 39.2°C. WBC is 800 cells/mm3 with absolute neutrophil count of 100. What is the most appropriate management?',
    options: ['Continue methimazole and add G-CSF', 'Discontinue methimazole, start broad-spectrum antibiotics, and admit for febrile neutropenia', 'Switch to propylthiouracil', 'Add prednisone for thyroid storm prevention', 'Decrease methimazole dose by 50%'],
    correctAnswer: 1,
    explanationEn: 'Agranulocytosis is a rare but life-threatening adverse effect of methimazole (and PTU) — incidence ~0.2-0.5%. Presentation: fever + severe sore throat + neutropenia (ANC <500). Management: STOP the drug immediately, admit, start broad-spectrum antibiotics (febrile neutropenia protocol). Do NOT switch to PTU (cross-reactivity). Consider radioactive iodine or surgery.',
    explanationZh: '粒细胞缺乏症是甲巯咪唑（和PTU）罕见但危及生命的不良反应—发生率~0.2-0.5%。表现：发热+严重咽痛+中性粒细胞减少（ANC<500）。处理：立即停药、入院、开始广谱抗生素（发热性中性粒细胞减少方案）。不可换用PTU（交叉反应）。考虑放射性碘或手术。',
    explanationEs: 'Agranulocitosis por metimazol: suspender INMEDIATAMENTE, antibióticos de amplio espectro, hospitalizar.'
  },

  // --- Surgery Step 2 (id: 331-345) ---
  {
    id: 331, step: 'step2', subject: 'Surgery',
    question: 'A 35-year-old male presents with RLQ abdominal pain, nausea, anorexia, and low-grade fever. Pain started periumbilically and migrated to RLQ. McBurney point tenderness, Rovsing sign positive. CT shows dilated appendix with wall thickening and surrounding fat stranding. Management?',
    options: ['IV antibiotics alone for 7 days', 'Appendectomy (laparoscopic) + perioperative antibiotics', 'Observation and serial abdominal exams', 'Colonoscopy to evaluate the appendix', 'Percutaneous drainage of any abscess'],
    correctAnswer: 1,
    explanationEn: 'Acute appendicitis: appendectomy is the standard of care. Antibiotics alone may be considered in selected uncomplicated cases, but appendectomy remains definitive. Laparoscopic approach is preferred (less pain, faster recovery). Perioperative antibiotics reduce surgical site infection.',
    explanationZh: '急性阑尾炎：阑尾切除术是标准治疗。抗生素单独可能考虑用于特定的非复杂性病例，但阑尾切除术仍是根治方法。首选腹腔镜（疼痛少、恢复快）。围手术期抗生素减少手术部位感染。',
    explanationEs: 'Apendicitis aguda: apendicectomía laparoscópica + antibióticos perioperatorios.'
  },
  {
    id: 332, step: 'step2', subject: 'Surgery',
    question: 'A 70-year-old male presents with abdominal pain, distension, and obstipation for 3 days. He has had no flatus or bowel movements. CT shows a transition point in the sigmoid colon with proximal dilation. No free air or pneumatosis. What is the initial management?',
    options: ['Emergent laparotomy', 'Colonoscopy for decompression', 'IV fluids, NPO, NG tube decompression, and surgical consultation', 'High-dose steroids', 'Immediate colonic stent placement'],
    correctAnswer: 2,
    explanationEn: 'Large bowel obstruction: initial management is resuscitation (IV fluids, NPO, NG tube), then determine cause. Sigmoid volvulus → endoscopic detorsion. Malignant obstruction → stent or surgery. Steroids have no role. If perforation (free air) or peritonitis develops → emergent surgery.',
    explanationZh: '大肠梗阻：初始处理为复苏（静脉补液、禁食、胃肠减压），然后确定病因。乙状结肠扭转→内镜复位。恶性梗阻→支架或手术。激素无作用。如出现穿孔（游离气体）或腹膜炎→急诊手术。',
    explanationEs: 'Obstrucción de intestino grueso: reanimación (IV, NPO, SNG) + consulta quirúrgica.'
  },
  {
    id: 333, step: 'step2', subject: 'Surgery',
    question: 'A 55-year-old female with symptomatic gallstones undergoes laparoscopic cholecystectomy. Post-op day 1, she develops RUQ pain, fever, and jaundice. Bilirubin is 5.0, alkaline phosphatase elevated. What complication is most likely?',
    options: ['Retained common bile duct stone', 'Bile duct injury with leak or obstruction', 'Post-cholecystectomy syndrome', 'Acute pancreatitis', 'Wound infection'],
    correctAnswer: 1,
    explanationEn: 'Bile duct injury is a serious complication of cholecystectomy (0.3-0.6% incidence). Presentation: post-op pain, fever, jaundice, elevated LFTs. Imaging: MRCP or ERCP. This is more concerning than retained stone given the timing. Bile leak → biloma → possible infection. May require ERCP with stent or surgical repair.',
    explanationZh: '胆管损伤是胆囊切除术的严重并发症（发生率0.3-0.6%）。表现：术后疼痛、发热、黄疸、肝功能升高。影像：MRCP或ERCP。考虑发生时间，比残留结石更需关注。胆漏→胆汁瘤→可能感染。可能需要ERCP支架或手术修复。',
    explanationEs: 'Lesión de vía biliar post-colecistectomía: dolor, fiebre, ictericia, LFT elevadas.'
  },
  {
    id: 334, step: 'step2', subject: 'Surgery',
    question: 'A 65-year-old male smoker presents with sudden onset of severe left flank pain, gross hematuria, and nausea. CT without contrast shows a 6 mm stone in the proximal left ureter with moderate hydronephrosis. He cannot keep fluids down. Management?',
    options: ['Outpatient management with tamsulosin, analgesics, and increased fluid intake', 'Admission for IV fluids, analgesia, and urology consultation', 'Emergent nephrostomy tube placement', 'Extracorporeal shock wave lithotripsy (ESWL)', 'Open ureterolithotomy'],
    correctAnswer: 1,
    explanationEn: 'Ureteral stone with intractable nausea/vomiting → cannot tolerate oral intake → admission for IV hydration and pain management. Stone >5 mm has lower likelihood of spontaneous passage. If infection present (fever, WBC in urine) → emergent decompression. ESWL or ureteroscopy is elective, not emergent.',
    explanationZh: '输尿管结石伴难治性恶心呕吐→不能耐受口服→入院静脉补液和止痛。>5mm结石自行排出可能性较低。如存在感染（发热、尿WBC）→紧急减压。ESWL或输尿管镜是择期手术而非急诊。',
    explanationEs: 'Cálculo ureteral + vómitos intratables: ingreso para hidratación IV + analgesia.'
  },
  {
    id: 335, step: 'step2', subject: 'Surgery',
    question: 'A burn patient has full-thickness burns covering the entire anterior trunk (18%), entire right arm (9%), and anterior right leg (9%). Using the Rule of Nines, what is the estimated TBSA burned and what is the fluid resuscitation for the first 24 hours?',
    options: ['36% — Parkland formula: 4 mL x 36% x weight(kg) LR, half in first 8 hours', '27% — 3 mL x 27% x weight(kg) NS', '45% — 2 mL x 45% x weight(kg) LR', '36% — 2 mL x 36% x weight(kg) NS', '36% — no formula needed; give maintenance fluids'],
    correctAnswer: 0,
    explanationEn: 'Rule of Nines: anterior trunk = 18%, entire arm = 9%, anterior leg = 9% → total 36% TBSA. Parkland formula: 4 mL/kg/%TBSA of Lactated Ringers, half in first 8 hours from time of burn, half over next 16 hours. >15% TBSA in adults → formal fluid resuscitation required.',
    explanationZh: '九分法：前躯干=18%、全臂=9%、腿前=9%→总共36%TBSA。Parkland公式：4mL/kg/%TBSA乳酸林格液，烧伤时刻起前8小时给一半，后16小时给另一半。成人>15%TBSA→需正式液体复苏。',
    explanationEs: 'Regla de los 9: 36% SCQ. Parkland: 4 mL x 36% x kg LR, mitad en primeras 8h.'
  },

  // --- Pediatrics Step 2 (id: 351-360) ---
  {
    id: 351, step: 'step2', subject: 'Pediatrics',
    question: 'A 6-month-old infant presents with 3 days of rhinorrhea, cough, and low-grade fever. Today, the mother reports the infant had a sudden episode of coughing that was severe and "barking" in nature, followed by noisy breathing. On exam: inspiratory stridor at rest, subcostal retractions. What is the most likely diagnosis?',
    options: ['Epiglottitis', 'Croup (laryngotracheobronchitis)', 'Bacterial tracheitis', 'Foreign body aspiration', 'Retropharyngeal abscess'],
    correctAnswer: 1,
    explanationEn: 'Croup: parainfluenza virus, 6 months-3 years, "barking" cough + inspiratory stridor, steeple sign on X-ray. Treatment: dexamethasone (0.6 mg/kg) + nebulized epinephrine for moderate-severe. Epiglottitis: H. flu, rapid onset, drooling, toxic appearance, thumbprint sign — DO NOT examine throat or agitate child.',
    explanationZh: '哮吼（喉气管支气管炎）：副流感病毒，6个月-3岁，"犬吠样"咳嗽+吸气性喘鸣，X线尖塔征。治疗：地塞米松（0.6mg/kg）+雾化肾上腺素（中重度）。会厌炎：流感嗜血杆菌，快速起病、流口水、中毒貌、拇指征——不要检查咽部或刺激患儿。',
    explanationEs: 'Crup (laringotraqueobronquitis): virus parainfluenza, tos "perruna" + estridor inspiratorio.'
  },
  {
    id: 352, step: 'step2', subject: 'Pediatrics',
    question: 'A 2-week-old neonate presents with projectile, non-bilious vomiting after every feed. The infant appears hungry and feeds vigorously after vomiting. Exam reveals a palpable "olive-shaped" mass in the epigastrium. What is the most likely electrolyte abnormality?',
    options: ['Hypokalemia, hyperchloremic metabolic acidosis', 'Hypokalemia, hypochloremic metabolic alkalosis', 'Hyperkalemia, metabolic acidosis', 'Hyponatremia, hypokalemia, metabolic acidosis', 'Normal electrolytes — no abnormality expected'],
    correctAnswer: 1,
    explanationEn: 'Hypertrophic pyloric stenosis: projectile non-bilious vomiting in 2-6 week old male infant, palpable olive mass. Loss of HCl from stomach → hypochloremic, hypokalemic metabolic alkalosis (paradoxical aciduria). Diagnosis: ultrasound. Treatment: pyloromyotomy AFTER correcting fluid/electrolyte abnormalities.',
    explanationZh: '肥厚性幽门狭窄：2-6周男婴喷射性非胆汁性呕吐，触及橄榄状包块。胃内HCl丢失→低氯、低钾代谢性碱中毒（反常性酸性尿）。诊断：超声。治疗：纠正液体/电解质失衡后行幽门肌切开术。',
    explanationEs: 'Estenosis pilórica hipertrófica: vómito no bilioso en proyectil, oliva palpable. Alcalosis metabólica hipoclorémica.'
  },
  {
    id: 353, step: 'step2', subject: 'Pediatrics',
    question: 'A 3-year-old presents with fever for 5 days, bilateral conjunctival injection, erythematous cracked lips, strawberry tongue, cervical lymphadenopathy, and a polymorphous rash. What is the most serious complication without treatment?',
    options: ['Aseptic meningitis', 'Coronary artery aneurysm', 'Acute renal failure', 'Hepatic failure', 'Disseminated intravascular coagulation'],
    correctAnswer: 1,
    explanationEn: 'Kawasaki disease: fever ≥5 days + 4/5 criteria (conjunctivitis, mucositis, rash, cervical lymphadenopathy, extremity changes). Most serious complication: coronary artery aneurysm (untreated ~25% risk). Treatment: IVIG (2 g/kg) + high-dose aspirin within 10 days. Avoid ibuprofen (antagonizes aspirin antiplatelet effect).',
    explanationZh: '川崎病：发热≥5天+4/5标准（结膜炎、黏膜炎、皮疹、颈部淋巴结肿大、四肢变化）。最严重并发症：冠状动脉瘤（未治疗~25%风险）。治疗：10天内IVIG（2g/kg）+大剂量阿司匹林。避免布洛芬（拮抗阿司匹林抗血小板作用）。',
    explanationEs: 'Kawasaki: fiebre ≥5 días + 4/5 criterios. Complicación: aneurisma coronario. Tratamiento: IVIG + aspirina.'
  },
  {
    id: 354, step: 'step2', subject: 'Pediatrics',
    question: 'A 12-month-old previously healthy infant presents with sudden onset of severe, intermittent, crampy abdominal pain with drawing up of legs. Between episodes, the infant appears normal. Physical exam reveals a "sausage-shaped" mass in the right upper quadrant. Stool is positive for occult blood ("currant jelly" stools). What is the initial management?',
    options: ['Emergent laparotomy', 'Air or contrast enema (diagnostic and therapeutic)', 'Abdominal ultrasound only — no intervention needed', 'IV antibiotics and observation', 'Colonoscopy with biopsy'],
    correctAnswer: 1,
    explanationEn: 'Intussusception: ileocecal region, 3 months-3 years, "currant jelly" stools, sausage-shaped mass. Air or contrast enema is both diagnostic ("coiled spring" sign) and therapeutic (reduces intussusception ~80% success). Contraindicated if perforation (free air) or peritonitis → then surgery. Ultrasound shows "target/doughnut" sign.',
    explanationZh: '肠套叠：回盲部，3个月-3岁，"果酱样"便，香肠状包块。空气或对比灌肠兼具诊断（"弹簧圈"征）和治疗（套叠复位~80%成功率）。如有穿孔（游离气体）或腹膜炎则为禁忌→手术。超声显示"靶征/甜甜圈征"。',
    explanationEs: 'Invaginación intestinal: heces en "jalea de grosella", masa en salchicha. Enema de aire/contraste diagnóstico y terapéutico.'
  },
  {
    id: 355, step: 'step2', subject: 'Pediatrics',
    question: 'A 4-year-old child presents with sudden onset of high fever to 40°C and sore throat. Exam reveals erythematous tonsils with exudates, palatal petechiae, and tender anterior cervical lymphadenopathy. There is a scarlatiniform rash. What is the most likely organism?',
    options: ['Streptococcus pyogenes (Group A Streptococcus)', 'Epstein-Barr virus', 'Adenovirus', 'Corynebacterium diphtheriae', 'Arcanobacterium haemolyticum'],
    correctAnswer: 0,
    explanationEn: 'Scarlet fever: Group A Streptococcus (S. pyogenes) producing erythrogenic toxin → scarlatiniform rash (sandpaper-like, spares palms/soles, Pastia lines in skin folds). Also: strawberry tongue, desquamation during recovery. Treatment: penicillin or amoxicillin. Complications if untreated: rheumatic fever, post-streptococcal glomerulonephritis.',
    explanationZh: '猩红热：A群链球菌产生红疹毒素→猩红热样皮疹（砂纸样、掌跖豁免、皮肤褶皱Pastia线）。亦有草莓舌、恢复期脱屑。治疗：青霉素或阿莫西林。未经治疗并发症：风湿热、链球菌感染后肾小球肾炎。',
    explanationEs: 'Escarlatina: S. pyogenes productor de toxina eritrogénica. Rash "papel de lija", lengua de fresa.'
  },
  {
    id: 356, step: 'step2', subject: 'Pediatrics',
    question: 'A newborn is found to have an absent red reflex in the right eye on routine exam at the 2-week visit. There is leukocoria (white pupil). No family history of eye problems. What is the most likely diagnosis?',
    options: ['Congenital cataract', 'Retinoblastoma', 'Retinopathy of prematurity', 'Congenital glaucoma', 'Persistent hyperplastic primary vitreous'],
    correctAnswer: 1,
    explanationEn: 'Leukocoria in a newborn → retinoblastoma until proven otherwise. This is a medical emergency requiring prompt ophthalmology referral. Retinoblastoma: RB1 mutation, most common primary intraocular malignancy in children. Other causes of leukocoria: congenital cataract, Coats disease, persistent fetal vasculature.',
    explanationZh: '新生儿白瞳症→淋巴瘤排除前先考虑视网膜母细胞瘤。这是需要紧急眼科转诊的医疗急症。视网膜母细胞瘤：RB1突变，儿童最常见的原发性眼内恶性肿瘤。白瞳症其他原因：先天性白内障、Coats病、永存原始玻璃体增生症。',
    explanationEs: 'Leucocoria en recién nacido → retinoblastoma hasta descartar. Emergencia, derivación urgente a oftalmología.'
  },

  // --- Obstetrics & Gynecology Step 2 (id: 371-380) ---
  {
    id: 371, step: 'step2', subject: 'Obstetrics & Gynecology',
    question: 'A 28-year-old G1P0 at 32 weeks gestation presents with acute-onset severe abdominal pain, vaginal bleeding, and a rigid, tender uterus that does not relax between contractions. Fetal heart rate shows prolonged decelerations. What is the most likely diagnosis?',
    options: ['Placenta previa', 'Placental abruption (abruptio placentae)', 'Uterine rupture', 'Preterm labor', 'Vasa previa'],
    correctAnswer: 1,
    explanationEn: 'Placental abruption: painful vaginal bleeding (vs placenta previa: painless), rigid/tender uterus (blood dissecting into myometrium — Couvelaire uterus), fetal distress. Risk factors: trauma, hypertension, cocaine, PROM, prior abruption. Emergency: deliver by C-section if fetal distress. Monitor for DIC.',
    explanationZh: '胎盘早剥：痛性阴道出血（vs前置胎盘：无痛性）、子宫僵硬/压痛（血液浸润子宫肌层—Couvelaire子宫）、胎儿窘迫。危险因素：创伤、高血压、可卡因、胎膜早破、既往早剥。急诊：如有胎儿窘迫行剖宫产。监测DIC。',
    explanationEs: 'Desprendimiento prematuro de placenta: sangrado DOLOROSO, útero rígido. Emergencia: cesárea.'
  },
  {
    id: 372, step: 'step2', subject: 'Obstetrics & Gynecology',
    question: 'A 25-year-old G2P1 at 28 weeks presents with pruritic, urticarial papules and plaques that began on the abdomen within the striae and spared the umbilicus. No vesicles or bullae. LFTs and bile acids are normal. What is the most likely diagnosis?',
    options: ['Intrahepatic cholestasis of pregnancy', 'Pruritic urticarial papules and plaques of pregnancy (PUPPP)', 'Pemphigoid gestationis', 'Atopic eruption of pregnancy', 'Impetigo herpetiformis'],
    correctAnswer: 1,
    explanationEn: 'PUPPP (pruritic urticarial papules and plaques of pregnancy): most common pregnancy-related rash, usually in primigravidas, 3rd trimester. Starts in striae, spares umbilicus. No risk to fetus. Treatment: topical steroids, antihistamines. Resolves after delivery. Cholestasis has pruritus WITHOUT primary rash + elevated bile acids.',
    explanationZh: 'PUPPP（妊娠瘙痒性荨麻疹性丘疹和斑块）：最常见妊娠相关皮疹，常见于初产妇，孕晚期。始于妊娠纹内、脐部豁免。对胎儿无风险。治疗：外用激素、抗组胺药。产后消退。胆汁淤积症有瘙痒无原发性皮疹+胆汁酸升高。',
    explanationEs: 'PUPPP: rash más común del embarazo, primigrávidas, 3er trimestre. Respeta ombligo, inicia en estrías.'
  },
  {
    id: 373, step: 'step2', subject: 'Obstetrics & Gynecology',
    question: 'A 22-year-old female presents with cyclic pelvic pain, dysmenorrhea, and dyspareunia. Pelvic exam reveals a tender, fixed, retroverted uterus with nodularity in the posterior cul-de-sac and uterosacral ligaments. CA-125 is mildly elevated. What is the most likely diagnosis?',
    options: ['Uterine fibroids (leiomyomas)', 'Endometriosis', 'Pelvic inflammatory disease', 'Ovarian cancer', 'Adenomyosis'],
    correctAnswer: 1,
    explanationEn: 'Endometriosis: endometrial glands/stroma outside uterus. Triad: dysmenorrhea, dyspareunia, infertility. Exam: fixed retroverted uterus, uterosacral nodularity, tender adnexal masses (endometriomas — "chocolate cysts"). CA-125 may be elevated but NOT diagnostic (used for monitoring). Definitive diagnosis: laparoscopy with biopsy.',
    explanationZh: '子宫内异症：子宫内膜腺体/间质位于子宫外。三联征：痛经、性交痛、不孕。检查：固定后倾子宫、宫骶韧带结节、附件压痛包块（内异囊肿—巧克力囊肿）。CA-125可能升高但非诊断性（用于监测）。确诊：腹腔镜活检。',
    explanationEs: 'Endometriosis: dismenorrea, dispareunia, infertilidad. Útero fijo retrovertido, nódulos uterosacros.'
  },
  {
    id: 374, step: 'step2', subject: 'Obstetrics & Gynecology',
    question: 'A 32-year-old G3P2 at 37 weeks is in active labor. After delivery of the fetal head, the shoulders do not deliver with gentle downward traction (turtle sign). What is the first maneuver indicated?',
    options: ['Apply fundal pressure (Kristeller maneuver)', 'McRoberts maneuver (hyperflexion of maternal hips) + suprapubic pressure', 'Immediate episiotomy', 'Deliver the posterior arm', 'Zavanelli maneuver (cephalic replacement)'],
    correctAnswer: 1,
    explanationEn: 'Shoulder dystocia: McRoberts maneuver (hyperflexion of thighs against abdomen) + suprapubic pressure is the FIRST maneuver. This resolves ~40% of cases. NEVER apply fundal pressure (increases risk of brachial plexus injury). Other maneuvers: Rubin II, Wood screw, delivery of posterior arm. Zavanelli is a last resort.',
    explanationZh: '肩难产：McRoberts法（大腿极度屈曲贴腹）+耻骨上加压是第一手法，解决~40%病例。切勿宫底加（增加臂丛神经损伤风险）。其他手法：Rubin II、Wood旋转、后臂娩出。Zavanelli法为最后手段。',
    explanationEs: 'Distocia de hombros: PRIMERO McRoberts + presión suprapúbica. NUNCA presión fúndica.'
  },
  {
    id: 375, step: 'step2', subject: 'Obstetrics & Gynecology',
    question: 'A 45-year-old female presents with heavy menstrual bleeding (menorrhagia) and pelvic pressure for 6 months. Pelvic ultrasound shows multiple well-circumscribed hypoechoic masses within the myometrium. What is the most likely diagnosis?',
    options: ['Endometrial polyps', 'Uterine leiomyomas (fibroids)', 'Adenomyosis', 'Endometrial carcinoma', 'Ovarian cystadenoma'],
    correctAnswer: 1,
    explanationEn: 'Uterine fibroids (leiomyomas): benign smooth muscle tumors, most common pelvic tumor in women. Symptoms: menorrhagia (submucosal), pelvic pressure, urinary frequency (anterior), constipation (posterior). Degeneration can cause acute pain (red degeneration in pregnancy). Treatment: depends on symptoms and fertility goals — medical (OCPs, LNG-IUD, GnRH agonists) or surgical (myomectomy, hysterectomy).',
    explanationZh: '子宫肌瘤（平滑肌瘤）：良性平滑肌肿瘤，女性最常见盆腔肿瘤。症状：月经过多（黏膜下）、盆腔压迫、尿频（前壁）、便秘（后壁）。变性可导致急性腹痛（妊娠期红色变性）。治疗：取决于症状和生育需求—药物（OCP、LNG-IUD、GnRH激动剂）或手术（肌瘤剔除、子宫切除）。',
    explanationEs: 'Leiomiomas uterinos: tumor pélvico más común. Menorragia + presión pélvica.'
  },

  // --- Psychiatry Step 2 (id: 391-400) ---
  {
    id: 391, step: 'step2', subject: 'Psychiatry',
    question: 'A 24-year-old college student presents with 2 weeks of elevated mood, decreased need for sleep (2-3 hours/night), grandiosity, pressured speech, and excessive spending (bought a $5,000 car he cannot afford). He has no history of depression. What is the first-line pharmacotherapy?',
    options: ['SSRI (fluoxetine)', 'Lithium or valproic acid', 'Benzodiazepine', 'Atypical antipsychotic alone', 'SNRI (venlafaxine)'],
    correctAnswer: 1,
    explanationEn: 'Bipolar I disorder, manic episode: at least 1 week of elevated/irritable mood + ≥3 DIGFAST criteria (Distractibility, Insomnia/decreased need for sleep, Grandiosity, Flight of ideas, Activity increase, Speech pressured, Thoughtlessness/risky behavior). First-line: mood stabilizer (lithium, valproate) + atypical antipsychotic. Antidepressants alone can trigger mania.',
    explanationZh: '双相I型障碍，躁狂发作：至少1周升高/易激惹心境+≥3项DIGFAST标准。一线：心境稳定剂（锂盐、丙戊酸盐）+非典型抗精神病药。单用抗抑郁药可触发躁狂。',
    explanationEs: 'Trastorno bipolar I, episodio maníaco. Primera línea: estabilizador del ánimo (litio o valproato).'
  },
  {
    id: 392, step: 'step2', subject: 'Psychiatry',
    question: 'A 35-year-old female with a history of sexual abuse presents to the ED after cutting her forearms. She says she did it "to feel something" during a period of intense emptiness. She has a history of unstable relationships, impulsivity, and chronic suicidal ideation. What is the most likely diagnosis?',
    options: ['Bipolar II disorder', 'Major depressive disorder', 'Borderline personality disorder', 'Schizoaffective disorder', 'Histrionic personality disorder'],
    correctAnswer: 2,
    explanationEn: 'BPD: pervasive pattern of instability in interpersonal relationships, self-image, and affects, with marked impulsivity. ≥5 criteria: frantic efforts to avoid abandonment, unstable relationships, identity disturbance, impulsivity, recurrent suicidal/self-harm behavior, affective instability, chronic emptiness, inappropriate anger, transient paranoia/dissociation. Treatment: DBT (dialectical behavior therapy) is gold standard.',
    explanationZh: '边缘性人格障碍：人际关系、自我形象和情感普遍不稳定，伴显著冲动。≥5项标准。治疗：DBT（辩证行为疗法）是金标准。',
    explanationEs: 'Trastorno límite de personalidad: DBT (terapia dialéctica conductual) es tratamiento de elección.'
  },
  {
    id: 393, step: 'step2', subject: 'Psychiatry',
    question: 'A 50-year-old male with chronic schizophrenia on haloperidol for 5 years develops involuntary, repetitive movements of the tongue, lips, and jaw (chewing, lip-smacking, tongue protrusion). What is the most appropriate management?',
    options: ['Increase haloperidol dose', 'Switch to a higher-potency typical antipsychotic', 'Switch to clozapine or a second-generation antipsychotic with lower D2 affinity', 'Add benztropine', 'No treatment needed — this will resolve spontaneously'],
    correctAnswer: 2,
    explanationEn: 'Tardive dyskinesia: irreversible, late-onset movement disorder from chronic D2 antagonism (typical antipsychotics). Management: switch to clozapine or quetiapine (lower D2 affinity), or use VMAT2 inhibitors (valbenazine, deutetrabenazine). Do NOT increase dose or add anticholinergics (may worsen). Prevention: use atypical antipsychotics, monitor with AIMS scale.',
    explanationZh: '迟发性运动障碍：不可逆、晚发性运动障碍，由慢性D2拮抗（典型抗精神病药）导致。处理：换用氯氮平或喹硫平，或使用VMAT2抑制剂。不可增加剂量或加用抗胆碱药（可能加重）。预防：使用非典型抗精神病药，AIMS量表监测。',
    explanationEs: 'Discinesia tardía: irreversible por bloqueo D2 crónico. Cambiar a clozapina o agregar inhibidor VMAT2.'
  },

  // --- Emergency Medicine Step 2 (id: 411-420) ---
  {
    id: 411, step: 'step2', subject: 'Emergency Medicine',
    question: 'A 20-year-old male presents with sudden-onset severe chest pain and shortness of breath. He is tall, thin, and a smoker. There is decreased breath sound on the RIGHT side with hyperresonance to percussion. Trachea is deviated to the LEFT. BP is 85/60, HR 130. What is the most appropriate immediate management?',
    options: ['Chest X-ray to confirm diagnosis', 'Immediate needle decompression at the 2nd intercostal space, midclavicular line, right side', 'CT chest with contrast', 'Start IV antibiotics for pneumonia', 'Intubation and mechanical ventilation'],
    correctAnswer: 1,
    explanationEn: 'Tension pneumothorax: tracheal deviation AWAY from affected side, hypotension, tachycardia, distended neck veins. This is a clinical diagnosis — do NOT wait for imaging. Immediate needle decompression: large-bore needle at 2nd ICS midclavicular line (or 5th ICS anterior axillary line), followed by chest tube insertion.',
    explanationZh: '张力性气胸：气管偏向健侧、低血压、心动过速、颈静脉怒张。这是临床诊断——不要等影像。立即穿刺减压：大口径针头在锁骨中线第2肋间，随后置入胸腔引流管。',
    explanationEs: 'Neumotórax a tensión: diagnóstico CLÍNICO. Descompresión inmediata con aguja + tubo torácico.'
  },
  {
    id: 412, step: 'step2', subject: 'Emergency Medicine',
    question: 'A 30-year-old male is brought to the ED after a motorcycle accident. He is unresponsive with a GCS of 6. His pupils are unequal (right 5 mm fixed, left 3 mm reactive). He has flexor posturing on the right and extensor posturing on the left. What is the most appropriate next step?',
    options: ['CT head without contrast', 'Immediate intubation + hyperventilation to PaCO2 25-30 + mannitol', 'Neurosurgery consult without imaging', 'Place an ICP monitor', 'Give IV phenytoin for seizure prophylaxis'],
    correctAnswer: 1,
    explanationEn: 'Signs of uncal herniation: unilateral dilated fixed pupil (CN III compression), contralateral hemiparesis, decerebrate/decorticate posturing. Emergent management: intubate, mild hyperventilation (target PaCO2 30-35, NOT below 30 — can cause ischemia), mannitol 1 g/kg IV, head of bed 30 degrees. Then CT head → neurosurgery for decompression.',
    explanationZh: '钩回疝体征：单侧瞳孔散大固定（动眼神经受压）、对侧偏瘫、去大脑/去皮层强直。紧急处理：插管、轻度过度通气（目标PaCO2 30-35，不可低于30可导致缺血）、甘露醇1g/kg IV、床头抬高30度。然后CT→神经外科减压。',
    explanationEs: 'Herniación uncal: pupila dilatada unilateral fija. Intubar, hiperventilación moderada, manitol IV.'
  },
  {
    id: 413, step: 'step2', subject: 'Emergency Medicine',
    question: 'A 55-year-old male is stung by multiple bees and develops urticaria, facial swelling, stridor, and wheezing within minutes. BP 70/40, HR 130. What is the MOST important first-line treatment?',
    options: ['IV diphenhydramine 50 mg', 'IM epinephrine 0.3-0.5 mg (1:1000) into the anterolateral thigh', 'IV methylprednisolone 125 mg', 'Albuterol nebulizer', 'IV fluids 2 L bolus'],
    correctAnswer: 1,
    explanationEn: 'Anaphylaxis with hypotension (anaphylactic shock): IM epinephrine is the FIRST and most important treatment. Dose: 0.3-0.5 mg IM (1:1000) into anterolateral thigh, repeat every 5-15 min if needed. Adjuncts: IV fluids, antihistamines, steroids (NOT for acute management — delayed onset). Airway edema → consider early intubation.',
    explanationZh: '过敏性休克：IM肾上腺素是第一且最重要的治疗。剂量：0.3-0.5mg大腿前外侧IM（1:1000），每5-15分钟可重复。辅助：IV液体、抗组胺药、激素（非急性处理——起效延迟）。气道水肿→考虑早期插管。',
    explanationEs: 'Anafilaxia con shock: adrenalina IM (primero y más importante). 0.3-0.5 mg en muslo anterolateral.'
  },

  // ============================================================
  // STEP 3 — PATIENT MANAGEMENT (id: 501-550)
  // ============================================================

  // --- Primary Care Step 3 (id: 501-515) ---
  {
    id: 501, step: 'step3', subject: 'Primary Care',
    question: 'A 55-year-old asymptomatic male asks about screening for colon cancer. He has no family history. What is the recommended screening regimen?',
    options: ['Colonoscopy every 10 years starting at age 45', 'Fecal occult blood test annually starting at age 50', 'Sigmoidoscopy every 5 years starting at age 50', 'CT colonography every 5 years starting at age 55', 'No screening needed — he is asymptomatic'],
    correctAnswer: 0,
    explanationEn: 'USPSTF recommends colorectal cancer screening in adults aged 45-75. Options: colonoscopy q10 years (preferred), FIT annually, FIT-DNA q3 years, CT colonography q5 years, flexible sigmoidoscopy q5-10 years. Earlier screening if family history (age 40 or 10 years before youngest affected relative).',
    explanationZh: 'USPSTF建议45-75岁成人进行结直肠癌筛查。选择：结肠镜每10年（首选）、FIT每年、FIT-DNA每3年、CT结肠成像每5年、软式乙状结肠镜每5-10年。如有家族史则更早筛查（40岁或比最早患病亲属年龄早10年）。',
    explanationEs: 'Cribado CCR desde 45 años. Colonoscopia cada 10 años preferido. USPSTF recomienda hasta 75 años.'
  },
  {
    id: 502, step: 'step3', subject: 'Primary Care',
    question: 'A 60-year-old female with DM2, HTN, and dyslipidemia has an LDL of 140. She is on atorvastatin 40 mg. What is the most appropriate change to her lipid-lowering therapy?',
    options: ['Increase atorvastatin to 80 mg', 'Add ezetimibe', 'Switch to rosuvastatin', 'Add fenofibrate', 'Continue current therapy — LDL is adequate'],
    correctAnswer: 1,
    explanationEn: 'High-intensity statin (atorvastatin 40-80 or rosuvastatin 20-40) + maximally tolerated statin. If LDL remains above goal on maximally tolerated statin, add ezetimibe (non-statin therapy). If still not at goal, consider PCSK9 inhibitor. Goal LDL <70 mg/dL for ASCVD or DM with risk factors.',
    explanationZh: '高强度他汀+最大耐受他汀。如在最大耐受他汀下LDL仍未达标，加用依折麦布（非他汀治疗）。如仍未达标，考虑PCSK9抑制剂。ASCVD或DM伴危险因素者LDL目标<70mg/dL。',
    explanationEs: 'Estatinas alta intensidad + ezetimiba si no alcanza meta de LDL <70.'
  },
  {
    id: 503, step: 'step3', subject: 'Primary Care',
    question: 'A 70-year-old female is seen for annual wellness visit. She has osteoporosis (T-score -3.0 at hip) and is on alendronate for 4 years. What should be discussed at this visit?',
    options: ['Continue alendronate indefinitely', 'Consider a "drug holiday" after 5 years of bisphosphonate therapy', 'Switch to denosumab immediately', 'Stop all osteoporosis medications', 'Add teriparatide to alendronate'],
    correctAnswer: 1,
    explanationEn: 'Bisphosphonates accumulate in bone with long half-life. After 5 years of oral (3 years IV), consider a "drug holiday" for 2-3 years in patients at lower risk (no recent fractures, T-score better than -2.5). High-risk patients may continue up to 10 years. Rare complications: atypical femoral fractures, ONJ — risk increases after >5 years.',
    explanationZh: '双膦酸盐在骨中蓄积，半衰期长。口服5年（IV 3年）后，低风险患者（无近期骨折、T评分优于-2.5）考虑"药物假期"2-3年。高风险患者可继续使用至10年。罕见并发症：非典型股骨骨折、ONJ——>5年后风险增加。',
    explanationEs: 'Bisfosfonatos: considerar "vacaciones farmacológicas" tras 5 años en pacientes de bajo riesgo.'
  },
  {
    id: 504, step: 'step3', subject: 'Primary Care',
    question: 'A 45-year-old male smoker (30 pack-years) presents for a routine check. He has no respiratory symptoms. What preventive screening should be offered?',
    options: ['Chest X-ray annually', 'Low-dose CT chest annually', 'Sputum cytology q6 months', 'Pulmonary function tests annually', 'No screening recommended'],
    correctAnswer: 1,
    explanationEn: 'USPSTF lung cancer screening: annual low-dose CT for adults aged 50-80 with ≥20 pack-year smoking history who currently smoke or quit within 15 years. Chest X-ray and sputum cytology are NOT recommended (do not reduce mortality). Screening stops once person has not smoked for 15 years or develops health problem limiting life expectancy.',
    explanationZh: 'USPSTF肺癌筛查：50-80岁成人每年低剂量CT，吸烟史≥20包年，目前吸烟或戒烟<15年。胸片和痰细胞学不推荐（不降低死亡率）。超过15年未吸烟或出现限制预期寿命的健康问题则停止筛查。',
    explanationEs: 'Cribado cáncer pulmón: TAC baja dosis anual, 50-80 años, ≥20 paquetes-año, fumador activo o <15 años exfumador.'
  },
  {
    id: 505, step: 'step3', subject: 'Primary Care',
    question: 'A 65-year-old diabetic patient has a non-healing ulcer on the plantar aspect of the foot. On exam, the ulcer is 2 cm, surrounded by callus, with a probing depth to bone. The patient cannot feel a 10-g monofilament at the site. What is the most important next step?',
    options: ['Start oral antibiotics for 2 weeks', 'Apply topical antibiotics and a hydrocolloid dressing', 'Obtain a plain X-ray to evaluate for osteomyelitis and refer to podiatry/wound care', 'Debride the callus only and schedule follow-up in 1 month', 'Recommend bed rest and elevation'],
    correctAnswer: 2,
    explanationEn: 'Diabetic foot ulcer with probe to bone test positive → high likelihood of osteomyelitis. Obtain X-ray (though may be negative early) + consider MRI. Neuropathic (insensate) foot requires OFFLOADING (total contact cast, removable cast walker) + debridement. Antibiotics if infection confirmed (bone culture preferred). Multidisciplinary approach.',
    explanationZh: '糖尿病足溃疡探骨试验阳性→骨髓炎可能性高。拍X线（但早期可能阴性）+考虑MRI。神经病变（感觉缺失）足需要减压（全接触支具、可移除步行支具）+清创。如感染确认用抗生素（骨培养优选）。多学科方法。',
    explanationEs: 'Úlcera diabética con prueba de sonda a hueso: sospechar osteomielitis. Radiografía + derivación a podología.'
  },

  // --- Ethics & Patient Safety Step 3 (id: 521-530) ---
  {
    id: 521, step: 'step3', subject: 'Ethics',
    question: 'A 78-year-old with advanced dementia (no advance directive) develops aspiration pneumonia. Her daughter (healthcare proxy) insists on "everything." The medical team believes aggressive treatment is non-beneficial. What is the most appropriate approach?',
    options: ['Follow the proxy\'s decision — she has the legal authority', 'Transfer care to another physician', 'Withhold antibiotics since treatment is futile', 'Engage in a goals-of-care discussion, explain the patient\'s prognosis, and seek consensus on what the patient would have wanted', 'Consult the hospital ethics committee immediately'],
    correctAnswer: 3,
    explanationEn: 'When there is disagreement about goals of care, the first step is ALWAYS communication: explain prognosis, explore values, seek consensus. If a surrogate demands "futile" care, the physician is NOT obligated to provide it but should work through shared decision-making. Ethics consult is appropriate if consensus cannot be reached after thorough discussion.',
    explanationZh: '对治疗目标存在分歧时，第一步始终是沟通：解释预后、探索价值观、寻求共识。如代理人坚持"无效"治疗，医生没有义务提供，但应通过共同决策来解决。如经充分讨论仍无法达成共识，伦理咨询是合适的。',
    explanationEs: 'Desacuerdo sobre objetivos de cuidado: primero comunicación, discutir pronóstico, valores del paciente.'
  },
  {
    id: 522, step: 'step3', subject: 'Ethics',
    question: 'A medical student is asked to perform a pelvic exam on an anesthetized patient for educational purposes without the patient\'s prior consent. What is the most appropriate response?',
    options: ['Perform the exam — it is standard practice for teaching hospitals', 'Perform the exam only if the attending physician verbally consents', 'Decline to perform the exam because informed consent is required for examinations under anesthesia for educational purposes', 'Perform the exam if the patient is a public hospital patient', 'Ask the circulating nurse if it is okay'],
    correctAnswer: 2,
    explanationEn: 'Informed consent is REQUIRED for any examination or procedure performed under anesthesia that is purely for educational purposes. Performing exams on anesthetized patients without prior consent is an ethical violation and potentially battery (unlawful touching). This has been addressed by multiple professional medical organizations.',
    explanationZh: '对麻醉患者进行纯教育目的的检查或操作，必须获得知情同意。未经事先同意对麻醉患者进行检查违反伦理，可能构成非法接触。多个专业医疗组织已对此予以明确。',
    explanationEs: 'Examen pélvico educativo en paciente anestesiada SIN consentimiento = violación ética. Requiere consentimiento informado.'
  },
  {
    id: 523, step: 'step3', subject: 'Patient Safety',
    question: 'A nurse notices that a medication order for "metoprolol 5 mg IV" seems incorrect (usual dose is 5 mg PO or 1-5 mg IV). Which of the following is the best safety practice?',
    options: ['Administer the medication as ordered — the physician knows best', 'Use the "two-challenge rule": state the concern clearly twice; if the physician still insists, follow the order', 'State the concern using structured communication (CUS: Concerned, Uncomfortable, Safety issue) and verify the order', 'Ask another nurse to administer the medication', 'Ignore the order and document the concern in the chart'],
    correctAnswer: 2,
    explanationEn: 'TeamSTEPPS structured communication tools: CUS (I am Concerned, I am Uncomfortable, This is a Safety issue). Other tools: SBAR (Situation, Background, Assessment, Recommendation), check-back (closed-loop communication). Empowering all team members to speak up is a key principle of high-reliability organizations.',
    explanationZh: 'TeamSTEPPS结构化沟通工具：CUS（我担忧、我不适、这是安全问题）。其他工具：SBAR（情境、背景、评估、建议）、复述确认（闭环沟通）。赋能所有团队成员勇于提出问题是高可靠性组织的关键原则。',
    explanationEs: 'CUS: Preocupado, Incómodo, problema de Seguridad. Comunicación estructurada para seguridad del paciente.'
  },
  {
    id: 524, step: 'step3', subject: 'Patient Safety',
    question: 'After a wrong-site surgery occurs, what is the most appropriate immediate next step?',
    options: ['Conduct a root cause analysis', 'Disclose the error to the patient and family, apologize, and explain what happened', 'Fire the surgeon involved', 'Contact the hospital attorney before speaking to anyone', 'Report to CMS and Joint Commission'],
    correctAnswer: 1,
    explanationEn: 'After a medical error: FIRST priority is the patient — disclose the error promptly and honestly, apologize (many states have apology laws protecting such statements), explain what happened and the plan to address it. Root cause analysis, reporting, and system improvements happen later but patient disclosure should be immediate.',
    explanationZh: '医疗差错后：首要任务在于患者——及时诚实地披露错误、道歉（许多州有道歉法保护此类陈述）、解释发生了什么和解决方案。根本原因分析、报告和系统改进可稍后进行，但患者披露应即刻完成。',
    explanationEs: 'Error médico: PRIMERO revelar al paciente/familia, disculparse, explicar plan. RCA y mejoras después.'
  },

  // --- Internal Medicine / Complex Cases Step 3 (id: 541-550) ---
  {
    id: 541, step: 'step3', subject: 'Internal Medicine',
    question: 'A 65-year-old male with DM2 and CKD (eGFR 35) has persistently elevated potassium (5.8). He takes lisinopril and metformin. What is the most appropriate management?',
    options: ['Discontinue lisinopril immediately', 'Start dietary potassium restriction + loop diuretic + discontinue lisinopril if persistent', 'Start sodium polystyrene sulfonate (Kayexalate) daily', 'Add spironolactone', 'No intervention — potassium < 6.0 is acceptable'],
    correctAnswer: 1,
    explanationEn: 'ACEi/ARB-induced hyperkalemia in CKD: first try dietary K+ restriction + loop diuretic (furosemide). If persistent and clinically significant, may need to reduce/discontinue ACEi/ARB. Patiromer or sodium zirconium cyclosilicate are newer options for chronic management. Kayexalate is for acute treatment only and has GI side effects. NEVER add spironolactone (worsens hyperkalemia).',
    explanationZh: 'ACEi/ARB引起的高钾血症在CKD：首先尝试饮食限钾+袢利尿剂（呋塞米）。如持续存在且有临床意义，可能需要减少/停用ACEi/ARB。Patiromer或环硅酸锆钠是慢性管理的新选择。聚苯乙烯磺酸钠仅用于急性治疗且胃肠道副作用大。切勿加用螺内酯（加重高钾血症）。',
    explanationEs: 'Hiperpotasemia por IECA en ERC: restricción dietética K+ + furosemida. Si persiste, reducir IECA.'
  },
  {
    id: 542, step: 'step3', subject: 'Internal Medicine',
    question: 'A 50-year-old male with alcohol use disorder is admitted with altered mental status. He is malnourished. Which of the following should be given BEFORE administering IV glucose?',
    options: ['Lorazepam', 'Thiamine', 'Naloxone', 'Folate', 'Magnesium'],
    correctAnswer: 1,
    explanationEn: 'Wernicke encephalopathy risk in malnourished alcoholic patients. ALWAYS give thiamine (100 mg IV/IM) BEFORE glucose. Glucose administration without thiamine can precipitate or worsen Wernicke encephalopathy. Thiamine is a cofactor for pyruvate dehydrogenase and alpha-ketoglutarate dehydrogenase in glucose metabolism.',
    explanationZh: '营养不良酒精患者存在Wernicke脑病风险。始终在葡萄糖前给予硫胺素（100mg IV/IM）。葡萄糖无硫胺素可促发或加重Wernicke脑病。硫胺素是丙酮酸脱氢酶和α-酮戊二酸脱氢酶的辅因子。',
    explanationEs: 'SIEMPRE tiamina ANTES de glucosa en paciente alcohólico desnutrido. Previene/trata encefalopatía de Wernicke.'
  },
  {
    id: 543, step: 'step3', subject: 'Internal Medicine',
    question: 'A hospitalized patient develops acute confusion, agitation, and visual hallucinations on post-op day 2 after hip surgery. Symptoms are worse at night. What is the most appropriate initial management?',
    options: ['Start haloperidol 5 mg IV immediately', 'Start lorazepam for agitation', 'Identify and treat underlying cause (infection, medications, electrolyte abnormalities, pain); use non-pharmacologic measures first', 'Restrain the patient for safety', 'Order a psychiatric consultation immediately'],
    correctAnswer: 2,
    explanationEn: 'Delirium: acute, fluctuating disturbance in attention, awareness, and cognition. Post-op patients are high-risk. Management: FIRST identify and treat underlying cause (infection, medication side effects (anticholinergics, opioids, benzodiazepines), electrolyte abnormalities, urinary retention, pain). Non-pharmacologic: reorientation, sleep hygiene, family presence, avoid restraints. Antipsychotics (low-dose haloperidol) only if patient is a danger to self/others or severely distressed.',
    explanationZh: '谵妄：急性波动性注意力、意识和认知障碍。术后患者高风险。管理：首先识别并治疗基础病因（感染、药物副作用、电解质异常、尿潴留、疼痛）。非药物：定向再训练、睡眠卫生、家人陪伴、避免约束。抗精神病药仅在患者危害自身/他人或严重痛苦时使用。',
    explanationEs: 'Delirium postoperatorio: identificar y tratar causa subyacente PRIMERO. Medidas no farmacológicas.'
  },
  {
    id: 544, step: 'step3', subject: 'Patient Safety',
    question: 'During morning rounds, a resident notices that a patient received 10-fold the intended dose of morphine (50 mg instead of 5 mg) overnight. The patient is somnolent but has stable vital signs. What is the first action?',
    options: ['Administer naloxone immediately', 'Notify the attending physician and nursing supervisor, assess the patient, and disclose the error to the patient/family', 'Document the error in the medical record without telling the patient', 'Call risk management and do not speak to the patient', 'Wait until the end of the shift to address it'],
    correctAnswer: 1,
    explanationEn: 'Medication overdose: FIRST assess patient stability. If stable (normal vitals, though somnolent), monitor closely. If respiratory depression → naloxone. Notify attending/supervisor, report via incident reporting system, DISCLOSE to patient/family honestly. This is both an ethical obligation and promotes a safety culture. Root cause analysis should follow.',
    explanationZh: '用药过量：首先评估患者稳定性。如稳定（生命体征正常，虽嗜睡），密切监测。如呼吸抑制→纳洛酮。通知主治/主管，通过事件报告系统报告，诚实地向患者/家属披露。这既是道德义务，也促进安全文化。随后进行根因分析。',
    explanationEs: 'Sobredosis de medicación: evaluar estabilidad primero. Revelar error al paciente/familia. Notificar al supervisor.'
  },
  {
    id: 545, step: 'step3', subject: 'Emergency Medicine',
    question: 'A patient on a mechanical ventilator suddenly develops high peak airway pressures, hypotension, unilateral decreased breath sounds, and tracheal deviation away from the affected side. Oxygen saturation drops to 78%. What is the immediate action?',
    options: ['Increase FiO2 to 100%', 'Order a stat chest X-ray', 'Perform needle decompression and prepare for chest tube insertion', 'Suction the endotracheal tube', 'Administer a fluid bolus for hypotension'],
    correctAnswer: 2,
    explanationEn: 'Tension pneumothorax in a ventilated patient: rise in peak/plateau pressures + hypotension + tracheal deviation away. This is a clinical diagnosis — do NOT wait for CXR. Immediate needle decompression (2nd ICS, midclavicular line or 5th ICS anterior axillary line) → chest tube. Ventilated patients are at high risk because positive pressure can rapidly convert a simple pneumothorax to tension.',
    explanationZh: '通气患者张力性气胸：峰压/平台压升高+低血压+气管偏离。这是临床诊断——不要等胸片。立即穿刺减压→置入胸腔引流管。通气患者风险高因正压可迅速将单纯气胸变为张力性。',
    explanationEs: 'Neumotórax a tensión en ventilador: descompresión con aguja INMEDIATA + tubo torácico.'
  },
  {
    id: 546, step: 'step1', subject: 'Pathology',
    question: 'A 62-year-old male with a 40-pack-year smoking history presents with cough and weight loss. CT reveals a 3 cm hilar mass. Histopathology shows small cells with scant cytoplasm, finely granular chromatin, and positive synaptophysin. What is the most likely diagnosis?',
    options: ['Small cell lung carcinoma', 'Squamous cell carcinoma', 'Adenocarcinoma', 'Large cell carcinoma', 'Carcinoid tumor'],
    correctAnswer: 0,
    explanationEn: 'Small cell lung carcinoma (SCLC): small cells with scant cytoplasm, salt-and-pepper chromatin, positive neuroendocrine markers (synaptophysin, chromogranin). Strongly associated with smoking.',
    explanationZh: '小细胞肺癌（SCLC）：小细胞、胞质少、椒盐样染色质，突触素等神经内分泌标志物阳性。与吸烟强相关。',
    explanationEs: 'Carcinoma de células pequeñas (SCLC): células pequeñas, cromatina sal y pimienta, marcadores neuroendocrinos positivos.'
  },
  {
    id: 547, step: 'step1', subject: 'Pathology',
    question: 'A 45-year-old female presents with progressive joint pain, morning stiffness >1 hour, and symmetric involvement of small hand joints. Labs show positive anti-CCP and elevated CRP. What is the most specific autoantibody for this condition?',
    options: ['Anti-CCP', 'Rheumatoid factor', 'Anti-nuclear antibody', 'Anti-dsDNA', 'Anti-Smith antibody'],
    correctAnswer: 0,
    explanationEn: 'Anti-CCP (anti-citrullinated protein antibody) is >95% specific for rheumatoid arthritis. RF is more sensitive but less specific.',
    explanationZh: '抗CCP抗体（抗瓜氨酸化蛋白抗体）对类风湿关节炎特异性>95%。RF更敏感但特异性较低。',
    explanationEs: 'Anti-CCP es >95% específico para artritis reumatoide.'
  },
  {
    id: 548, step: 'step1', subject: 'Pathology',
    question: 'A 70-year-old male presents with bone pain and weakness. Labs show WBC 85,000/μL, 80% blasts, and marked lymphadenopathy. Bone marrow biopsy shows >20% blasts. Which cytogenetic abnormality confers the worst prognosis?',
    options: ['t(9;22) BCR-ABL', 't(8;21)', 'inv(16)', 't(15;17)', 'Trisomy 12'],
    correctAnswer: 0,
    explanationEn: 't(9;22) producing BCR-ABL fusion (Philadelphia chromosome) confers poor prognosis in CML and some ALL. t(15;17) is APL and responds to all-trans retinoic acid.',
    explanationZh: 't(9;22) 产生BCR-ABL融合（费城染色体），预后最差。t(15;17)与急性早幼粒白血病相关，对全反式维甲酸有反应。',
    explanationEs: 't(9;22) BCR-ABL confiere mal pronóstico. t(15;17) es LPA, responde a ácido todo-trans retinoico.'
  },
  {
    id: 549, step: 'step1', subject: 'Pathology',
    question: 'A 55-year-old male with chronic COPD presents with worsening dyspnea and barrel chest. Chest X-ray shows hyperinflation with flattened diaphragms. PFTs reveal FEV1/FVC < 0.70. Which pathologic change is most likely present?',
    options: ['Destruction of alveolar walls (emphysema)', 'Bronchial smooth muscle hypertrophy', 'Mucous gland hyperplasia', 'Fibrotic thickening of alveolar septa', 'Pulmonary arterial medial hypertrophy'],
    correctAnswer: 0,
    explanationEn: 'COPD with emphysema shows destruction of alveolar walls (centrilobular in smokers, panacinar in α1-antitrypsin deficiency). Reduces elastic recoil → air trapping.',
    explanationZh: 'COPD合并肺气肿可见肺泡壁破坏（吸烟者为小叶中心型，α1-抗胰蛋白酶缺乏者为全小叶型）。降低弹性回缩→空气滞留。',
    explanationEs: 'EPOC con enfisema: destrucción de paredes alveolares.'
  },
  {
    id: 550, step: 'step1', subject: 'Pathology',
    question: 'A 50-year-old female presents with progressive difficulty swallowing both solids and liquids. Barium swallow shows a bird\'s beak appearance. Manometry reveals absence of peristalsis and failure of LES to relax. What is the pathogenesis?',
    options: ['Degeneration of inhibitory neurons in myenteric plexus', 'Autoimmune destruction of myenteric plexus', 'Chronic GERD → metaplasia', 'Infectious infiltration', 'Smooth muscle dystrophy'],
    correctAnswer: 0,
    explanationEn: 'Achalasia: loss of inhibitory neurons (NOS/VIP-producing) in myenteric plexus (Auerbach), causing LES relaxation failure and aperistalsis.',
    explanationZh: '贲门失弛缓症：肌间神经丛（Auerbach）抑制性神经元（NOS/VIP产生）丢失，导致LES松弛失败和无蠕动。',
    explanationEs: 'Acalasia: pérdida de neuronas inhibitorias en plexo mientérico.'
  },

  {
    id: 551, step: 'step1', subject: 'Pathology',
    question: 'A 60M diabetic, painless gross hematuria. Cystoscopy: papillary bladder mass. BX: urothelial CA. Strongest risk factor?',
    options: ['Smoking', 'Chronic UTIs', 'Schistosoma haematobium', 'Aniline dyes', 'Cyclophosphamide'],
    correctAnswer: 0,
    explanationEn: 'Smoking ~50% of bladder cancer. Aromatic amines excreted in urine.',
    explanationZh: '吸烟是膀胱癌最强危险因素。',
    explanationEs: 'Tabaquismo: factor de riesgo más fuerte.'
  },
  {
    id: 552, step: 'step1', subject: 'Pathology',
    question: 'A 45M chronic Crohn disease, weight loss, RUQ mass. CT: focal wall thickening. BX: noncaseating granulomas. Complication risk?',
    options: ['Small bowel adenocarcinoma', 'Strictures needing surgery', 'Toxic megacolon', 'PSC', 'Amyloidosis'],
    correctAnswer: 0,
    explanationEn: 'Crohn disease (transmural, skip lesions) increases small bowel adenocarcinoma risk.',
    explanationZh: '克罗恩病增加小肠腺癌风险。',
    explanationEs: 'Crohn aumenta riesgo de adenocarcinoma intestinal.'
  },
  {
    id: 553, step: 'step1', subject: 'Pathology',
    question: 'A 70M back pain + fatigue. Labs: anemia, elevated PSA. Bone scan: diffuse osteoblastic mets. Primary?',
    options: ['Prostate CA', 'Lung CA', 'Multiple myeloma', 'RCC', 'Colorectal CA'],
    correctAnswer: 0,
    explanationEn: 'Prostate cancer → osteoblastic (sclerotic) bone mets. PSA elevated.',
    explanationZh: '前列腺癌→成骨性骨转移，PSA升高。',
    explanationEs: 'Cáncer de próstata: metástasis osteoblásticas.'
  },
  {
    id: 554, step: 'step1', subject: 'Pathology',
    question: 'A 35F multiple fractures, palpable femur mass. XR: moth-eaten bone destruction. BX: small round blue cells. Dx?',
    options: ['Ewing sarcoma', 'Osteosarcoma', 'Chondrosarcoma', 'Giant cell tumor', 'Metastatic neuroblastoma'],
    correctAnswer: 0,
    explanationEn: 'Ewing sarcoma: small round blue cells, CD99+, t(11;22). Adolescents/young adults.',
    explanationZh: '尤文肉瘤：小圆蓝细胞，t(11;22)。',
    explanationEs: 'Sarcoma de Ewing: células pequeñas redondas azules.'
  },
  {
    id: 555, step: 'step1', subject: 'Pathology',
    question: 'A 65F acute onset pain, cold, pale limb. 6h history of atrial fibrillation. Diagnosis?',
    options: ['Acute limb ischemia', 'DVT', 'Cellulitis', 'Compartment syndrome', 'Arterial thrombosis'],
    correctAnswer: 0,
    explanationEn: 'Acute limb ischemia: 6 Ps (Pain, Pallor, Paresthesia, Poikilothermia, Paralysis, Pulselessness). From embolic source (AFib).',
    explanationZh: '急性肢体缺血：6P征，栓塞源（房颤）。',
    explanationEs: 'Isquemia aguda de miembro: 6 P, fuente embólica.'
  },
  {
    id: 556, step: 'step1', subject: 'Physiology',
    question: 'A 65M with hx of MI, dyspnea on exertion. Exam: high-pitched diastolic decrescendo murmur at RUSB. Dx?',
    options: ['Aortic regurgitation', 'Mitral stenosis', 'Aortic stenosis', 'Mitral regurgitation', 'Tricuspid stenosis'],
    correctAnswer: 0,
    explanationEn: 'AR: diastolic decrescendo murmur at RUSB. Causes: aortic root dilation, bicuspid valve, endocarditis.',
    explanationZh: 'AR：RUSB舒张期递减型杂音。',
    explanationEs: 'IA: soplo diastólico decreciente en BESD.'
  },
  {
    id: 557, step: 'step1', subject: 'Physiology',
    question: 'A 70M syncope and angina on exertion. Exam: harsh crescendo-decrescendo systolic murmur at RUSB, radiates to carotids. Mechanism?',
    options: ['LV outflow obstruction', 'AV incompetence', 'LV inflow obstruction', 'Mitral prolapse', 'Pulmonary HTN'],
    correctAnswer: 0,
    explanationEn: 'Aortic stenosis: LV outflow obstruction. Triad: angina, syncope, dyspnea.',
    explanationZh: 'AS：左室流出道梗阻。三联征：心绞痛、晕厥、呼吸困难。',
    explanationEs: 'EA: obstrucción del tracto de salida VI.'
  },
  {
    id: 558, step: 'step1', subject: 'Physiology',
    question: 'A 45M asbestosis exposure, progressive dyspnea. PFTs: normal FEV1/FVC, decreased DLCO. Mechanism?',
    options: ['Thickening of alveolar-capillary membrane', 'Destruction of alveolar walls', 'Airway obstruction', 'Chest wall deformity', 'Pulmonary vascular obstruction'],
    correctAnswer: 0,
    explanationEn: 'DLCO decreases with membrane thickening (fibrosis) or surface area loss (emphysema).',
    explanationZh: 'DLCO减低：膜增厚或表面积减少。',
    explanationEs: 'DLCO baja: engrosamiento de membrana.'
  },
  {
    id: 559, step: 'step1', subject: 'Physiology',
    question: 'A medical student doing Starling curve problems. If venous return increases, what happens to cardiac output according to Frank-Starling law?',
    options: ['Increases due to greater preload', 'Decreases due to afterload', 'Stays constant', 'Increases HR only', 'Decreases stroke volume'],
    correctAnswer: 0,
    explanationEn: 'Frank-Starling: increased venous return → increased preload → increased sarcomere stretch → increased stroke volume and CO.',
    explanationZh: 'Frank-Starling：静脉回流增加→前负荷增加→心输出量增加。',
    explanationEs: 'Frank-Starling: mayor retorno venoso → mayor precarga → mayor GC.'
  },
  {
    id: 560, step: 'step1', subject: 'Physiology',
    question: 'A hypoxic patient at altitude has PaO2 50 mmHg. Which factor shifts the O2-hemoglobin dissociation curve to the right, improving O2 unloading?',
    options: ['Increased 2,3-BPG', 'Decreased temperature', 'Decreased PCO2', 'Increased pH', 'Fetal hemoglobin'],
    correctAnswer: 0,
    explanationEn: 'Right shift (improved O2 unloading): increased 2,3-BPG, increased PCO2, decreased pH, increased temperature.',
    explanationZh: '右移（增加O2释放）：2,3-BPG增加、PCO2增加、pH降低。',
    explanationEs: 'Desviación derecha: 2,3-BPG aumentado, PCO2 aumentado.'
  },
  {
    id: 561, step: 'step1', subject: 'Pharmacology',
    question: 'A 45M with HTN, started new med. 2 weeks later: dry cough. Which class?',
    options: ['ACE inhibitor', 'Beta-blocker', 'CCB', 'Thiazide diuretic', 'ARB'],
    correctAnswer: 0,
    explanationEn: 'ACE inhibitors → increased bradykinin → dry cough. ARBs do not cause cough.',
    explanationZh: 'ACEI→缓激肽增加→干咳。ARB不引起咳嗽。',
    explanationEs: 'IECA → tos seca por bradicinina.'
  },
  {
    id: 562, step: 'step1', subject: 'Pharmacology',
    question: 'A 22M with GAD prescribed med that enhances GABA-mediated Cl- influx. Complains of drowsiness. Which med?',
    options: ['Diazepam', 'Sertraline', 'Buspirone', 'Propranolol', 'Imipramine'],
    correctAnswer: 0,
    explanationEn: 'Diazepam (benzodiazepine): enhances GABA-A Cl- influx → CNS depression, sedation, dependence risk.',
    explanationZh: '地西泮：增强GABA-A Cl-内流→CNS抑制。',
    explanationEs: 'Diazepam: potencia GABA → depresión SNC.'
  },
  {
    id: 563, step: 'step1', subject: 'Pharmacology',
    question: 'A 55M with T2DM, started on med that decreases hepatic glucose production. GI upset + metallic taste. Which med?',
    options: ['Metformin', 'Glyburide', 'Sitagliptin', 'Pioglitazone', 'Empagliflozin'],
    correctAnswer: 0,
    explanationEn: 'Metformin (biguanide): decreases hepatic glucose production, increases insulin sensitivity. GI side effects, lactic acidosis risk.',
    explanationZh: '二甲双胍：减少肝糖生成，增加胰岛素敏感性。GI副作用。',
    explanationEs: 'Metformina: reduce producción hepática de glucosa.'
  },
  {
    id: 564, step: 'step1', subject: 'Pharmacology',
    question: 'A 30F with UTI, prescribed TMP-SMX. 2 days later: hemolytic anemia. PMH: G6PD deficiency. Mechanism?',
    options: ['Oxidative stress → RBC hemolysis', 'Immune-mediated', 'Microangiopathic', 'Thrombotic', 'Sequestration'],
    correctAnswer: 0,
    explanationEn: 'Sulfonamides (TMP-SMX) cause oxidative stress → hemolysis in G6PD deficiency. Avoid in G6PD patients.',
    explanationZh: '磺胺类→氧化应激→G6PD缺乏者溶血。',
    explanationEs: 'Sulfonamidas → estrés oxidativo en deficiencia de G6PD.'
  },
  {
    id: 565, step: 'step1', subject: 'Pharmacology',
    question: 'A 70M with AFib on warfarin. INR: 8.5, mild epistaxis. What is the management?',
    options: ['Hold warfarin, give vitamin K', 'Fresh frozen plasma', 'Protamine sulfate', 'Continue warfarin', 'Add aspirin'],
    correctAnswer: 0,
    explanationEn: 'Elevated INR 8.5 with mild bleeding: hold warfarin, oral vitamin K (1-2.5mg). If major bleeding → 4F-PCC or FFP.',
    explanationZh: 'INR 8.5轻度出血：停华法林、口服维生素K。',
    explanationEs: 'INR 8.5: suspender warfarina, vitamina K oral.'
  },















  {
    id: 566, step: 'step1', subject: 'Microbiology',
    question: 'A 25F with fever, pharyngitis, and cervical lymphadenopathy. Heterophile antibody positive. Peripheral smear shows atypical lymphocytes >50%. Dx?',
    options: ['Infectious mononucleosis (EBV)', 'Strep pharyngitis', 'CMV', 'HIV acute infection', 'Toxoplasmosis'],
    correctAnswer: 0,
    explanationEn: 'EBV (HHV4): infectious mononucleosis triad: fever, pharyngitis, lymphadenopathy. Heterophile ab (Monospot) positive. Atypical lymphocytes (CD8+ T cells).',
    explanationZh: 'EBV：传染性单核细胞增多症。三联征：发热、咽炎、淋巴结肿大。',
    explanationEs: 'Mononucleosis infecciosa por VEB: fiebre, faringitis, linfadenopatía.'
  },
  {
    id: 567, step: 'step1', subject: 'Microbiology',
    question: 'A 30M with HIV (CD4 50) presents with retinitis. Fundoscopy shows hemorrhagic cotton-wool spots. What is the most likely organism?',
    options: ['CMV', 'Toxoplasma', 'HSV', 'EBV', 'VZV'],
    correctAnswer: 0,
    explanationEn: 'CMV retinitis in HIV: CD4 <50. Fundoscopy: hemorrhagic cotton-wool spots, pizza pie appearance.',
    explanationZh: 'CMV视网膜炎：CD4<50时出现。眼底：出血性棉絮斑。',
    explanationEs: 'Retinitis por CMV: CD4 <50, exudados algodonosos.'
  },
  {
    id: 568, step: 'step1', subject: 'Microbiology',
    question: 'A 45F with prosthetic heart valve presents with fever and new murmur. Blood cultures grow Gram-positive cocci in clusters that are catalase positive and coagulase negative. What organism?',
    options: ['Staphylococcus epidermidis', 'Staph aureus', 'Strep viridans', 'Enterococcus faecalis', 'Strep bovis'],
    correctAnswer: 0,
    explanationEn: 'S. epidermidis: coagulase-negative staph, biofilm formation on prosthetic devices. Catalase positive differentiates from strep.',
    explanationZh: '表皮葡萄球菌：凝固酶阴性，生物膜形成。在人工装置上感染。',
    explanationEs: 'S. epidermidis: coagulasa negativo, biofilm en dispositivos.'
  },
  {
    id: 569, step: 'step1', subject: 'Microbiology',
    question: 'A 40M farmer with draining sinus tract in leg. Gram stain: Gram-positive, beaded, branching filamentous bacteria. What organism?',
    options: ['Nocardia asteroides', 'Actinomyces israelii', 'Streptomyces', 'Mycobacterium', 'Aspergillus'],
    correctAnswer: 1,
    explanationEn: 'Actinomyces israelii: Gram-positive, branching filaments, sulfur granules. Not acid-fast. Normal oral flora.',
    explanationZh: '放线菌：革兰阳性分枝菌丝，硫磺颗粒。非抗酸。',
    explanationEs: 'Actinomyces: filamentos grampositivos, gránulos de azufre.'
  },
  {
    id: 570, step: 'step1', subject: 'Microbiology',
    question: 'A 35M with HIV (CD4 30) presents with ring-enhancing lesions on brain CT. Serology positive for anti-Toxoplasma IgG. What is the management?',
    options: ['Pyrimethamine + sulfadiazine + folinic acid', 'Amphotericin B', 'Ganciclovir', 'Acyclovir', 'Fluconazole'],
    correctAnswer: 0,
    explanationEn: 'Toxoplasma encephalitis: ring-enhancing lesions, CD4 <100. Treatment: pyrimethamine + sulfadiazine + folinic acid (rescue).',
    explanationZh: '弓形虫脑炎：环形增强病变，CD4<100。治疗：乙胺嘧啶+磺胺嘧啶+亚叶酸。',
    explanationEs: 'Toxoplasmosis cerebral: pirimetamina + sulfadiazina + folínico.'
  },
  {
    id: 571, step: 'step1', subject: 'Immunology',
    question: 'A 20F with recurrent meningococcal infections, absence of C5-C9. Which complement pathway is deficient?',
    options: ['Terminal complement (MAC)', 'Classical pathway', 'Alternative pathway', 'Lectin pathway', 'C3 deficiency'],
    correctAnswer: 0,
    explanationEn: 'Terminal complement deficiency (C5-C9): inability to form MAC → recurrent Neisseria infections. C3 deficiency causes recurrent pyogenic infections.',
    explanationZh: '终末补体缺乏（C5-C9）：无法形成MAC→复发性奈瑟菌感染。',
    explanationEs: 'Deficiencia de complemento terminal: infecciones por Neisseria recurrentes.'
  },
  {
    id: 572, step: 'step1', subject: 'Immunology',
    question: 'A 3M boy with recurrent pyogenic infections, low B cells, low T cells, absent thymic shadow on CXR. Dx?',
    options: ['SCID', 'DiGeorge syndrome', 'Bruton agammaglobulinemia', 'Hyper-IgM syndrome', 'Wiskott-Aldrich'],
    correctAnswer: 0,
    explanationEn: 'SCID: both B and T cell deficiency, absent thymic shadow. X-linked (gamma chain) or ADA deficiency. Recurrent infections from infancy.',
    explanationZh: 'SCID：B和T细胞均缺乏，胸腺影缺失。婴儿期反复感染。',
    explanationEs: 'SCID: deficiencia de células B y T, sombra tímica ausente.'
  },
  {
    id: 573, step: 'step1', subject: 'Immunology',
    question: 'A 5M boy with recurrent sinopulmonary infections. Labs: low IgG, IgA, IgE, normal WBC count, no B cells. Dx?',
    options: ['Bruton (X-linked) agammaglobulinemia', 'CVID', 'SCID', 'DiGeorge', 'Wiskott-Aldrich'],
    correctAnswer: 0,
    explanationEn: 'Bruton agammaglobulinemia: X-linked (BTK mutation), no B cells, low all Ig. Normal T cells. Infections after 6 months (maternal IgG wanes).',
    explanationZh: 'Bruton：X连锁（BTK突变），无B细胞，所有Ig低。',
    explanationEs: 'Agammaglobulinemia de Bruton: sin células B, todas Ig bajas.'
  },
  {
    id: 574, step: 'step1', subject: 'Anatomy',
    question: 'During thyroidectomy, a patient develops hoarseness post-op. Which nerve was most likely injured?',
    options: ['Recurrent laryngeal nerve', 'Superior laryngeal nerve', 'Hypoglossal nerve', 'Vagus nerve', 'Glossopharyngeal nerve'],
    correctAnswer: 0,
    explanationEn: 'Recurrent laryngeal nerve (branch of vagus): innervates all intrinsic laryngeal muscles EXCEPT cricothyroid. Injury → hoarseness.',
    explanationZh: '喉返神经：支配除环甲肌外所有喉内肌。损伤→声音嘶哑。',
    explanationEs: 'Nervio laríngeo recurrente: lesión → ronquera.'
  },
  {
    id: 575, step: 'step1', subject: 'Anatomy',
    question: 'A patient fractures the surgical neck of the humerus. Which nerve is at highest risk of injury?',
    options: ['Axillary nerve', 'Radial nerve', 'Ulnar nerve', 'Median nerve', 'Musculocutaneous nerve'],
    correctAnswer: 0,
    explanationEn: 'Axillary nerve (C5-C6): wraps around surgical neck of humerus. Injury → deltoid paralysis, loss of shoulder abduction (15-90 degrees).',
    explanationZh: '腋神经：绕肱骨外科颈。损伤→三角肌麻痹。',
    explanationEs: 'Nervio axilar: rodea cuello quirúrgico del húmero.'
  },
  {
    id: 576, step: 'step1', subject: 'Anatomy',
    question: 'A patient fractures the midshaft of the humerus. Which nerve is most likely injured?',
    options: ['Radial nerve', 'Axillary nerve', 'Ulnar nerve', 'Median nerve', 'Musculocutaneous nerve'],
    correctAnswer: 0,
    explanationEn: 'Radial nerve runs in radial groove of humerus. Midshaft fracture → wrist drop (extensor paralysis).',
    explanationZh: '桡神经走行于桡神经沟。肱骨干骨折→垂腕。',
    explanationEs: 'Nervio radial: fractura de diáfisis humeral → mano caída.'
  },
  {
    id: 577, step: 'step2', subject: 'Internal Medicine',
    question: 'A 72M with HTN, DM, CAD presents with progressive dyspnea, orthopnea, and bilateral lower extremity edema. Exam: JVD, crackles at lung bases, S3 gallop. BNP 1200. CXR: pulmonary edema. What is the first-line management?',
    options: ['IV furosemide', 'IV metoprolol', 'IV nitroglycerin', 'IV digoxin', 'IV morphine'],
    correctAnswer: 0,
    explanationEn: 'Acute decompensated HF: first-line is IV loop diuretic (furosemide) for volume overload. Add vasodilators if hypertensive.',
    explanationZh: '急性失代偿心衰：一线治疗为IV袢利尿剂。',
    explanationEs: 'IC aguda descompensada: diurético de asa IV.'
  },
  {
    id: 578, step: 'step2', subject: 'Internal Medicine',
    question: 'A 65F with COPD presents with 3-day history of increased dyspnea, increased sputum volume, and purulent sputum. O2 sat 88% on room air. What is the most appropriate management?',
    options: ['Oxygen, bronchodilators, steroids, antibiotics', 'Oxygen only', 'Antibiotics only', 'Steroids only', 'Chest physiotherapy'],
    correctAnswer: 0,
    explanationEn: 'COPD exacerbation: O2 (target 88-92%), SABA/SAMA, systemic steroids, antibiotics if anthonisen criteria (increased dyspnea + sputum volume + purulence).',
    explanationZh: 'COPD急性加重：吸氧+SABA/SAMA+全身激素+抗生素。',
    explanationEs: 'Exacerbación de EPOC: O2 + broncodilatadores + esteroides + antibióticos.'
  },
  {
    id: 579, step: 'step1', subject: 'Biochemistry',
    question: 'A newborn presents with failure to thrive, hepatomegaly, and hypoglycemia. Newborn screening positive for galactose-1-phosphate. Deficiency?',
    options: ['Galactose-1-phosphate uridyltransferase', 'Hexokinase', 'Glucose-6-phosphatase', 'Pyruvate kinase', 'Lactase'],
    correctAnswer: 0,
    explanationEn: 'Classic galactosemia: GALT deficiency. Accumulation of galactose-1-phosphate. Infants: vomiting, jaundice, cataracts, E. coli sepsis.',
    explanationZh: '经典半乳糖血症：GALT缺乏。婴儿期呕吐、黄疸、白内障。',
    explanationEs: 'Galactosemia clasica: deficiencia de GALT.'
  },
  {
    id: 580, step: 'step1', subject: 'Biochemistry',
    question: 'A 5yo boy with mental retardation, self-mutilation, spasticity. Elevated serum uric acid. Deficiency?',
    options: ['HGPRT (Lesch-Nyhan)', 'PRPP synthetase', 'Adenine phosphoribosyltransferase', 'Xanthine oxidase', 'Glucose-6-phosphatase'],
    correctAnswer: 0,
    explanationEn: 'Lesch-Nyhan: X-linked recessive, HGPRT deficiency. Hyperuricemia, gout, self-mutilation, neurocognitive deficits.',
    explanationZh: 'Lesch-Nyhan综合征：X连锁隐性，HGPRT缺乏。高尿酸、自残。',
    explanationEs: 'Síndrome de Lesch-Nyhan: deficiencia de HGPRT, XLR.'
  },
  {
    id: 581, step: 'step1', subject: 'Biochemistry',
    question: 'A patient with severe hypoglycemia during fasting. Liver biopsy: increased glycogen with abnormal outer branches. Dx?',
    options: ['Cori disease (GDE deficiency)', 'Von Gierke (G6Pase)', 'McArdle (muscle phosphorylase)', 'Pompe (acid alpha-glucosidase)', 'Andersen (branching enzyme)'],
    correctAnswer: 0,
    explanationEn: 'Cori (type III): debranching enzyme (GDE) deficiency. Mild hypoglycemia (gluconeogenesis intact), muscle cramps, hepatomegaly.',
    explanationZh: 'Cori病（III型）：脱支酶缺乏。轻度低血糖，肝大。',
    explanationEs: 'Enfermedad de Cori: deficiencia de enzima desramificante.'
  },
  {
    id: 582, step: 'step1', subject: 'Biochemistry',
    question: 'A 3yo with recurrent infections, severe combined immunodeficiency. Absent T and B cells, very low ADA enzyme. Dx?',
    options: ['SCID (adenosine deaminase deficiency)', 'Bruton agammaglobulinemia', 'CVID', 'Wiskott-Aldrich', 'Ataxia-telangiectasia'],
    correctAnswer: 0,
    explanationEn: 'ADA deficiency: autosomal recessive SCID. Accumulation of dATP inhibits ribonucleotide reductase → lymphocyte toxicity.',
    explanationZh: 'ADA缺乏：常隐SCID。dATP蓄积抑制核苷酸还原酶→淋巴细胞毒性。',
    explanationEs: 'Deficiencia de ADA: SCID AR, acumulación de dATP.'
  },
  {
    id: 583, step: 'step1', subject: 'Biochemistry',
    question: 'A child with fair skin, blue eyes, mental retardation. Musty odor. Elevated phenylalanine on newborn screen. Dx?',
    options: ['Phenylketonuria (PAH deficiency)', 'Alkaptonuria', 'Maple syrup urine disease', 'Tyrosinemia', 'Homocystinuria'],
    correctAnswer: 0,
    explanationEn: 'PKU: phenylalanine hydroxylase deficiency or BH4 cofactor deficiency. Phe → Tyr blocked. Intellectual disability if untreated.',
    explanationZh: 'PKU：苯丙氨酸羟化酶缺乏。未治疗→智力障碍。',
    explanationEs: 'Fenilcetonuria: deficiencia de PAH, retraso mental si no se trata.'
  },
  {
    id: 584, step: 'step1', subject: 'Biochemistry',
    question: 'A patient with gouty arthritis. Urate crystals in joints. Which enzyme inhibition would decrease uric acid production?',
    options: ['Xanthine oxidase', 'PRPP synthetase', 'HGPRT', 'Adenosine deaminase', 'Purine nucleoside phosphorylase'],
    correctAnswer: 0,
    explanationEn: 'Allopurinol inhibits xanthine oxidase → decreases conversion of xanthine → uric acid. Used for gout treatment.',
    explanationZh: '别嘌醇抑制黄嘌呤氧化酶→减少尿酸生成。痛风治疗。',
    explanationEs: 'Alopurinol inhibe xantina oxidasa → reduce ácido úrico.'
  },
  {
    id: 585, step: 'step1', subject: 'Biochemistry',
    question: 'A 2yo with hepatosplenomegaly, bone pain, anemia. Bone marrow: Gaucher cells (crinkled tissue paper). Deficiency?',
    options: ['Beta-glucocerebrosidase', 'Hexosaminidase A', 'Sphingomyelinase', 'Alpha-galactosidase', 'Alpha-L-iduronidase'],
    correctAnswer: 0,
    explanationEn: 'Gaucher disease: glucocerebrosidase deficiency. Glucocerebroside accumulation. Type 1 (adult): hepatosplenomegaly, bone crises, no CNS involvement.',
    explanationZh: 'Gaucher病：β-葡萄糖脑苷脂酶缺乏。Gaucher细胞（皱纸样）。I型无CNS受累。',
    explanationEs: 'Enfermedad de Gaucher: deficiencia de beta-glucocerebrosidasa.'
  },
  {
    id: 586, step: 'step1', subject: 'Biochemistry',
    question: 'A 6yo with developmental regression, cherry-red spot on macula, normal liver. Deficiency?',
    options: ['Hexosaminidase A (Tay-Sachs)', 'Beta-glucocerebrosidase', 'Sphingomyelinase', 'Alpha-galactosidase', 'Glucocerebrosidase'],
    correctAnswer: 0,
    explanationEn: 'Tay-Sachs: hexosaminidase A deficiency → GM2 ganglioside accumulation. Cherry-red spot, developmental regression, death by age 4.',
    explanationZh: 'Tay-Sachs：己糖胺酶A缺乏→GM2神经节苷脂蓄积。樱桃红斑，发育倒退。',
    explanationEs: 'Enfermedad de Tay-Sachs: deficiencia de hexosaminidasa A.'
  },
  {
    id: 587, step: 'step1', subject: 'Biochemistry',
    question: 'A patient with severe hypertriglyceridemia (TG >1000). Pancreatitis risk. Deficiency of which apolipoprotein?',
    options: ['Apo C-II', 'Apo A-I', 'Apo B-100', 'Apo E', 'Apo B-48'],
    correctAnswer: 0,
    explanationEn: 'Apo C-II activates lipoprotein lipase. Deficiency → severe hypertriglyceridemia, pancreatitis, eruptive xanthomas.',
    explanationZh: 'Apo C-II激活脂蛋白脂肪酶。缺乏→严重高甘油三酯血症。',
    explanationEs: 'Apo C-II activa lipoproteína lipasa. Deficiencia grave.'
  },
  {
    id: 588, step: 'step1', subject: 'Biochemistry',
    question: 'A newborn with hypotonia, poor feeding, lactic acidosis. MRI: basal ganglia necrosis. Deficiency of which enzyme in TCA cycle?',
    options: ['Pyruvate dehydrogenase', 'Alpha-ketoglutarate dehydrogenase', 'Succinate dehydrogenase', 'Fumarase', 'Isocitrate dehydrogenase'],
    correctAnswer: 0,
    explanationEn: 'Pyruvate dehydrogenase deficiency: cannot convert pyruvate → acetyl-CoA. Buildup of pyruvate → lactate (lactic acidosis), neurologic deficits.',
    explanationZh: '丙酮酸脱氢酶缺乏：不能将丙酮酸→乙酰辅酶A。乳酸酸中毒。',
    explanationEs: 'Deficiencia de piruvato deshidrogenasa: acidosis láctica.'
  },
  {
    id: 589, step: 'step1', subject: 'Biochemistry',
    question: 'A 25M with muscle cramps and myoglobinuria after intense exercise. Decreased glucose-6-phosphatase in muscle. Dx?',
    options: ['McArdle disease (type V)', 'Von Gierke (type I)', 'Cori (type III)', 'Pompe (type II)', 'Hers (type VI)'],
    correctAnswer: 0,
    explanationEn: 'McArdle: muscle phosphorylase deficiency. Cannot break down glycogen in muscle. Exercise intolerance, myoglobinuria, "second wind" phenomenon.',
    explanationZh: 'McArdle病（V型）：肌磷酸化酶缺乏。运动后肌红蛋白尿。',
    explanationEs: 'Enfermedad de McArdle: deficiencia de fosforilasa muscular.'
  },
  {
    id: 590, step: 'step1', subject: 'Biochemistry',
    question: 'A patient takes isoniazid for TB prophylaxis. Develops peripheral neuropathy. Which vitamin supplementation prevents this?',
    options: ['Vitamin B6 (pyridoxine)', 'Vitamin B12', 'Folic acid', 'Vitamin B1', 'Vitamin C'],
    correctAnswer: 0,
    explanationEn: 'Isoniazid depletes pyridoxine (B6) → peripheral neuropathy. B6 is cofactor for many enzymes including heme synthesis.',
    explanationZh: '异烟肼消耗吡哆醇（B6）→周围神经病变。补充B6预防。',
    explanationEs: 'Isoniazida agota piridoxina (B6) → neuropatía periférica.'
  },
  {
    id: 591, step: 'step1', subject: 'Biochemistry',
    question: 'A 40M chronic alcoholic presents with confusion, ophthalmoplegia, ataxia. Which vitamin deficiency?',
    options: ['Thiamine (B1)', 'Niacin (B3)', 'Pyridoxine (B6)', 'Cobalamin (B12)', 'Folic acid'],
    correctAnswer: 0,
    explanationEn: 'Wernicke encephalopathy: thiamine (B1) deficiency. Triad: confusion, ophthalmoplegia, ataxia. Give IV thiamine before glucose.',
    explanationZh: 'Wernicke脑病：硫胺素（B1）缺乏。三联征：意识模糊、眼肌麻痹、共济失调。',
    explanationEs: 'Encefalopatía de Wernicke: deficiencia de tiamina (B1).'
  },
  {
    id: 592, step: 'step1', subject: 'Biochemistry',
    question: 'A patient with pellagra (dermatitis, diarrhea, dementia, death). Which vitamin deficiency and which amino acid pathway blocked?',
    options: ['Niacin (B3); tryptophan → niacin', 'Vitamin B12; methionine → SAM', 'Vitamin C; proline hydroxylation', 'Vitamin A; vision pathway', 'Vitamin D; calcium absorption'],
    correctAnswer: 0,
    explanationEn: 'Pellagra: niacin (B3) deficiency. Carcinoid syndrome and Hartnup disease also cause pellagra (impaired tryptophan → niacin conversion).',
    explanationZh: '糙皮病：烟酸（B3）缺乏。色氨酸→烟酸途径受阻。',
    explanationEs: 'Pelagra: deficiencia de niacina (B3). Triptófano → niacina bloqueado.'
  },
  {
    id: 593, step: 'step1', subject: 'Biochemistry',
    question: 'A newborn with severe jaundice, kernicterus. Unconjugated hyperbilirubinemia. Deficiency of which enzyme?',
    options: ['UDP-glucuronosyltransferase (Crigler-Najjar)', 'Heme oxygenase', 'Biliverdin reductase', 'Gamma-glutamyl transpeptidase', ' Alkaline phosphatase'],
    correctAnswer: 0,
    explanationEn: 'Crigler-Najjar: UGT1A1 deficiency → unconjugated hyperbilirubinemia. Type I: severe, kernicterus risk. Type II: milder, responds to phenobarbital.',
    explanationZh: 'Crigler-Najjar：UGT1A1缺乏→非结合型高胆红素血症。I型严重。',
    explanationEs: 'Crigler-Najjar: deficiencia de UGT1A1, hiperbilirrubinemia no conjugada.'
  },
  {
    id: 594, step: 'step1', subject: 'Genetics',
    question: 'A 5yo boy with mental retardation, large testes, prominent ears, and a long face. Dx?',
    options: ['Fragile X syndrome (FMR1)', 'Down syndrome', 'Klinefelter syndrome', 'Turner syndrome', 'Prader-Willi syndrome'],
    correctAnswer: 0,
    explanationEn: 'Fragile X: X-linked, FMR1 gene CGG repeat expansion. Post-pubertal macro-orchidism, long face, large ears, intellectual disability.',
    explanationZh: '脆性X综合征：X连锁，FMR1基因CGG重复扩增。青春期后巨睾。',
    explanationEs: 'Síndrome de X frágil: FMR1, macroorquidismo postpuberal.'
  },
  {
    id: 595, step: 'step1', subject: 'Genetics',
    question: 'A 30F with a history of multiple colonic polyps and osteomas. Dx?',
    options: ['Gardner syndrome (FAP variant)', 'Hereditary nonpolyposis colorectal cancer', 'Peutz-Jeghers syndrome', 'Familial adenomatous polyposis', 'Cowden syndrome'],
    correctAnswer: 0,
    explanationEn: 'Gardner syndrome: FAP variant with extracolonic manifestations: osteomas, epidermal cysts, desmoid tumors. APC gene mutation.',
    explanationZh: 'Gardner综合征：FAP变异型，骨瘤、表皮囊肿。APC突变。',
    explanationEs: 'Síndrome de Gardner: variante de FAP, osteomas, quistes epidérmicos.'
  },
  {
    id: 596, step: 'step1', subject: 'Genetics',
    question: 'A patient with triple-bottle-brush chromosomes (Fanconi anemia) and young-onset leukemia. Inheritance?',
    options: ['Autosomal recessive', 'Autosomal dominant', 'X-linked recessive', 'X-linked dominant', 'Mitochondrial'],
    correctAnswer: 0,
    explanationEn: 'Fanconi anemia: AR or XLR. Bone marrow failure, congenital abnormalities (thumb, kidney), increased AML risk. Chromosome breakage on DEB test.',
    explanationZh: 'Fanconi贫血：常隐或X连锁。骨髓衰竭，先天畸形，AML风险。',
    explanationEs: 'Anemia de Fanconi: AR o XLR. Rotura cromosómica.'
  },
  {
    id: 597, step: 'step1', subject: 'Genetics',
    question: 'A 2yo with ataxia, telangiectasias, and recurrent sinus infections. IgA deficiency. Dx?',
    options: ['Ataxia-telangiectasia (ATM gene)', 'Wiskott-Aldrich syndrome', 'SCID', 'Hyper-IgE syndrome', 'DiGeorge syndrome'],
    correctAnswer: 0,
    explanationEn: 'Ataxia-telangiectasia: AR, ATM gene (DNA repair). Cerebellar ataxia, telangiectasias, IgA deficiency, increased cancer/radiation sensitivity.',
    explanationZh: '共济失调-毛细血管扩张症：AR，ATM基因。小脑性共济失调，IgA缺乏。',
    explanationEs: 'Ataxia-telangiectasia: AR, gen ATM. IgA deficiente.'
  },
  {
    id: 598, step: 'step1', subject: 'Genetics',
    question: 'A 55M with multiple colonic adenomas and endometrial cancer. Dx?',
    options: ['Lynch syndrome (HNPCC)', 'FAP', 'Peutz-Jeghers', 'Cowden syndrome', 'MUTYH-associated polyposis'],
    correctAnswer: 0,
    explanationEn: 'Lynch syndrome: germline mutation in DNA mismatch repair genes (MLH1, MSH2). Proximal colon cancer, endometrial cancer, sebaceous skin tumors.',
    explanationZh: 'Lynch综合征：DNA错配修复基因胚系突变。近端结肠癌、子宫内膜癌。',
    explanationEs: 'Síndrome de Lynch: gen de reparación de bases erróneas.'
  },
  {
    id: 599, step: 'step1', subject: 'Genetics',
    question: 'A patient with xeroderma pigmentosum. Mechanism of disease?',
    options: ['Nucleotide excision repair defect', 'Mismatch repair defect', 'Base excision repair defect', 'Homologous recombination defect', 'Non-homologous end joining defect'],
    correctAnswer: 0,
    explanationEn: 'XP: NER defect → cannot repair UV-induced thymine dimers → skin cancers (BCC, SCC, melanoma), severe photosensitivity.',
    explanationZh: '着色性干皮病：核苷酸切除修复缺陷。不能修复UV诱导的胸腺嘧啶二聚体。',
    explanationEs: 'Xeroderma pigmentoso: defecto en reparación por escisión de nucleótidos.'
  },
  {
    id: 600, step: 'step1', subject: 'Genetics',
    question: 'A 10yo boy with muscle weakness, calf hypertrophy, and Gowers sign. Dx?',
    options: ['Duchenne muscular dystrophy (dystrophin)', 'Becker muscular dystrophy', 'Myotonic dystrophy', 'Facioscapulohumeral dystrophy', 'Spinal muscular atrophy'],
    correctAnswer: 0,
    explanationEn: 'Duchenne: XLR, frameshift mutation → no dystrophin. Onset <5 yo, proximal muscle weakness, Gowers sign, cardiomyopathy. Elevated CK.',
    explanationZh: 'Duchenne肌营养不良：X连锁隐性，无抗肌萎缩蛋白。Gowers征。',
    explanationEs: 'Distrofia muscular de Duchenne: XLR, sin distrofina.'
  },
  {
    id: 601, step: 'step1', subject: 'Genetics',
    question: 'A 40F with eyelid myotonia and frontal balding. Dx?',
    options: ['Myotonic dystrophy (DM1)', 'Facioscapulohumeral dystrophy', 'Duchenne muscular dystrophy', 'Becker muscular dystrophy', 'Oculopharyngeal dystrophy'],
    correctAnswer: 0,
    explanationEn: 'Myotonic dystrophy type 1: autosomal dominant, CTG repeat expansion in DMPK gene. Myotonia, frontal balding, cataracts, cardiac conduction defects.',
    explanationZh: '强直性肌营养不良1型：常显，CTG重复扩增。肌强直、额秃、白内障。',
    explanationEs: 'Distrofia miotónica tipo 1: AD, repetición CTG en DMPK.'
  },
  {
    id: 602, step: 'step1', subject: 'Genetics',
    question: 'A mother of a child with Down syndrome asks about recurrence risk. Karyotype shows 21/14 Robertsonian translocation. Mother is carrier. Risk?',
    options: ['10-15%', '1-2%', '50%', '90%', '<1%'],
    correctAnswer: 0,
    explanationEn: 'If mother is balanced Robertsonian translocation carrier (14;21), recurrence risk for Down syndrome is 10-15%. If father is carrier: 2-5%.',
    explanationZh: '母亲是平衡罗伯逊易位携带者（14;21），DS复发风险10-15%。',
    explanationEs: 'Riesgo de recurrencia: 10-15% si madre es portadora equilibrada.'
  },
  {
    id: 603, step: 'step1', subject: 'Genetics',
    question: 'A 20F with short stature, webbed neck, coarctation of aorta, and bicuspid aortic valve. Karyotype?',
    options: ['45,X (Turner syndrome)', '47,XXY (Klinefelter)', '47,XYY', '47,XXX', '46,XX/45,X (mosaic)'],
    correctAnswer: 0,
    explanationEn: 'Turner syndrome: 45,X. Short stature, webbed neck, coarctation of aorta, bicuspid aortic valve, streak ovaries, infertility.',
    explanationZh: 'Turner综合征：45,X。身材矮小、颈蹼、主动脉缩窄。',
    explanationEs: 'Síndrome de Turner: 45,X. Estatura baja, cuello alado.'
  },
  {
    id: 604, step: 'step1', subject: 'Behavioral Science',
    question: 'A 30F is referred to a psychiatrist by her PCP. She has a history of multiple somatic complaints with no organic cause. She has a demanding personality and is often angry. Defense mechanism?',
    options: ['Somatization', 'Denial', 'Projection', 'Rationalization', 'Acting out'],
    correctAnswer: 0,
    explanationEn: 'Somatization: expressing psychological distress as physical symptoms. Often seen in patients with personality traits that make it difficult to express emotions directly.',
    explanationZh: '躯体化：将心理痛苦表达为躯体症状。',
    explanationEs: 'Somatización: expresar malestar psicológico como síntomas físicos.'
  },
  {
    id: 605, step: 'step1', subject: 'Behavioral Science',
    question: 'A 25M is told he has cancer. He says "No, the lab must have mixed up the samples." Which stage of grief?',
    options: ['Denial', 'Anger', 'Bargaining', 'Depression', 'Acceptance'],
    correctAnswer: 0,
    explanationEn: 'Stage 1 of grief (Kübler-Ross): denial. Patient refuses to accept the diagnosis. Other stages: anger, bargaining, depression, acceptance.',
    explanationZh: '悲伤第一阶段（Kübler-Ross）：否认。患者拒绝接受诊断。',
    explanationEs: 'Etapa 1 del duelo: negación. Rechaza el diagnóstico.'
  },
  {
    id: 606, step: 'step1', subject: 'Behavioral Science',
    question: 'A patient refuses treatment that is clearly in his best interest. He is competent. What should the physician do?',
    options: ['Respect autonomy and discharge', 'Proceed with treatment', 'Get court order', 'Call psychiatric consult', 'Sedate the patient'],
    correctAnswer: 0,
    explanationEn: 'Competent patients have the right to refuse treatment, even life-saving treatment. Autonomy overrides beneficence when patient is competent.',
    explanationZh: '有决策能力的患者有权拒绝治疗，包括救命治疗。自主权优先。',
    explanationEs: 'Paciente competente puede rechazar tratamiento. Autonomía protege.'
  },
  {
    id: 607, step: 'step1', subject: 'Behavioral Science',
    question: 'A 40F has intrusive thoughts about contamination and spends hours washing her hands. She recognizes these thoughts are excessive. Dx?',
    options: ['Obsessive-compulsive disorder', 'Generalized anxiety disorder', 'Specific phobia', 'Social anxiety disorder', 'Illness anxiety disorder'],
    correctAnswer: 0,
    explanationEn: 'OCD: obsessions (intrusive thoughts) and/or compulsions (repetitive behaviors). Patient recognizes thoughts are excessive (ego-dystonic).',
    explanationZh: '强迫症：强迫思维（侵入性想法）和/或强迫行为。患者认识到想法过度。',
    explanationEs: 'TOC: obsesiones e intrusiones. Paciente reconoce que son excesivas.'
  },
  {
    id: 608, step: 'step1', subject: 'Behavioral Science',
    question: 'A 20F believes she is fat despite being 5\'4" and 90 lbs. She fears weight gain, amenorrhea, and has enamel erosion. Dx?',
    options: ['Anorexia nervosa, restricting type', 'Bulimia nervosa', 'Binge eating disorder', 'Body dysmorphic disorder', 'Avoidant/restrictive food intake disorder'],
    correctAnswer: 0,
    explanationEn: 'Anorexia nervosa: intense fear of weight gain, distorted body image, <85% ideal body weight. Restricting type: no binging/purging.',
    explanationZh: '神经性厌食症（限制型）：强烈恐惧体重增加，体重<85%理想体重。',
    explanationEs: 'Anorexia nerviosa, tipo restrictivo: miedo intenso a ganar peso.'
  },
  {
    id: 609, step: 'step1', subject: 'Behavioral Science',
    question: 'A 55M with alcohol use disorder is admitted to hospital. 2 days later, he develops tremor, agitation, and visual hallucinations. Management?',
    options: ['Benzodiazepines', 'Haloperidol', 'Naltrexone', 'Disulfiram', 'Acamprosate'],
    correctAnswer: 0,
    explanationEn: 'Alcohol withdrawal: symptoms begin 6-24h after last drink. Benzodiazepines (diazepam, chlordiazepoxide) are first-line to prevent seizures and delirium.',
    explanationZh: '酒精戒断：末次饮酒后6-24h开始。苯二氮卓类是一线治疗。',
    explanationEs: 'Abstinencia alcohólica: benzodiacepinas son primera línea.'
  },
  {
    id: 610, step: 'step1', subject: 'Behavioral Science',
    question: 'A 30M gets a new job and is very excited. He has a history of bipolar disorder but stopped his medications. He spends $10,000 on unnecessary items. Dx?',
    options: ['Bipolar I disorder, manic episode', 'Bipolar II disorder', 'Cyclothymic disorder', 'Schizoaffective disorder', 'ADHD'],
    correctAnswer: 0,
    explanationEn: 'Bipolar I: manic episode (elevated/expansive/irritable mood, goal-directed activity, risky behavior, decreased need for sleep). Distinct from hypomania (Bipolar II).',
    explanationZh: '双相I型：躁狂发作（情绪高涨、目标导向活动、风险行为）。',
    explanationEs: 'Trastorno bipolar I: episodio maníaco. Actividad orientada a metas.'
  },
  {
    id: 611, step: 'step1', subject: 'Behavioral Science',
    question: 'A 50F has worry about multiple events, muscle tension, and sleep disturbance for >6 months. No avoidance behavior. Dx?',
    options: ['Generalized anxiety disorder', 'Panic disorder', 'Social anxiety disorder', 'Specific phobia', 'Adjustment disorder'],
    correctAnswer: 0,
    explanationEn: 'GAD: excessive worry >6 months, muscle tension, sleep disturbance, fatigue. No avoidance ( differentiates from phobic disorders).',
    explanationZh: 'GAD：过度担忧>6个月，肌肉紧张，睡眠障碍。无回避行为。',
    explanationEs: 'TAG: preocupación excesiva >6 meses, tensión muscular.'
  },
  {
    id: 612, step: 'step1', subject: 'Behavioral Science',
    question: 'A 45M shoots his wife and then says "The CIA implanted a chip in my brain to make me do it." Dx?',
    options: ['Schizophrenia, paranoid type', 'Brief psychotic disorder', 'Delusional disorder', 'Schizoaffective disorder', 'Shared psychotic disorder'],
    correctAnswer: 0,
    explanationEn: 'Schizophrenia: ≥2 of: delusions, hallucinations, disorganized speech, disorganized/catatonic behavior, negative symptoms. Duration >6 months.',
    explanationZh: '精神分裂症：≥2项：妄想、幻觉、言语紊乱、行为紊乱、阴性症状。病程>6月。',
    explanationEs: 'Esquizofrenia: ≥2 de: delirios, alucinaciones, habla desorganizada.'
  },
  {
    id: 613, step: 'step1', subject: 'Behavioral Science',
    question: 'A 5yo boy is brought to the clinic. His parents report he has episodes where he stops talking and stares blankly for 10-30 seconds. EEG: 3Hz spike-and-wave. Dx?',
    options: ['Absence seizures (petit mal)', 'Complex partial seizures', 'Simple partial seizures', 'Tonic-clonic seizures', 'Myoclonic seizures'],
    correctAnswer: 0,
    explanationEn: 'Absence seizures: brief loss of consciousness (10-30s), staring, eyelid fluttering. EEG: 3Hz spike-and-wave. Treated with ethosuximide.',
    explanationZh: '失神发作：短暂意识丧失（10-30秒），凝视。EEG：3Hz棘慢波。',
    explanationEs: 'Ausencias: pérdida breve de conciencia, 10-30s. EEG: 3Hz.'
  },
  {
    id: 614, step: 'step1', subject: 'Biostatistics',
    question: 'A new screening test for a disease has 95% sensitivity and 90% specificity. The disease prevalence is 1%. What is the positive predictive value?',
    options: ['~9%', '95%', '90%', '~50%', '~1%'],
    correctAnswer: 0,
    explanationEn: 'PPV = (sensitivity × prevalence) / [(sensitivity × prevalence) + ((1-specificity) × (1-prevalence)]. With 1% prevalence, most positives are false positives.',
    explanationZh: 'PPV = (敏感度×患病率) / [(敏感度×患病率)+((1-特异度)×(1-患病率)]。患病率1%时，多数阳性为假阳性。',
    explanationEs: 'VPP = (sensibilidad × prevalencia) / [...] . Con prevalencia 1%, mayoría son falsos positivos.'
  },
  {
    id: 615, step: 'step1', subject: 'Biostatistics',
    question: 'A clinical trial compares Drug A vs placebo. 100 patients per group. Drug A: 20 improve, 80 no change. Placebo: 10 improve, 90 no change. NNT?',
    options: ['10', '5', '20', '50', '100'],
    correctAnswer: 0,
    explanationEn: 'NNT = 1 / Absolute Risk Reduction. ARR = (20/100) - (10/100) = 0.1. NNT = 1/0.1 = 10. Number needed to treat to prevent one additional bad outcome.',
    explanationZh: 'NNT = 1/绝对风险降低。ARR = 20% - 10% = 0.1。NNT = 10。',
    explanationEs: 'NNT = 1/reducción absoluta de riesgo. ARR = 0.1, NNT = 10.'
  },
  {
    id: 616, step: 'step1', subject: 'Biostatistics',
    question: 'A study reports RR = 0.6 with 95% CI: 0.4 - 0.8. Is the result statistically significant?',
    options: ['Yes, because the CI does not include 1.0', 'No, because the CI is wide', 'Yes, because p < 0.05', 'No, because RR < 1.0', 'Cannot determine'],
    correctAnswer: 0,
    explanationEn: 'For ratio measures (RR, OR, HR), statistical significance if CI does NOT include 1.0. Here CI [0.4, 0.8] excludes 1.0 → significant.',
    explanationZh: '对于比值指标（RR、OR、HR），CI不包含1.0→有统计学意义。',
    explanationEs: 'Significancia estadística: IC no incluye 1.0 para medidas de razón.'
  },
  {
    id: 617, step: 'step1', subject: 'Biostatistics',
    question: 'A researcher wants to study a rare exposure. Which study design is most appropriate?',
    options: ['Case-control', 'Cohort', 'Cross-sectional', 'Randomized controlled trial', 'Ecological'],
    correctAnswer: 0,
    explanationEn: 'Case-control: starts with outcome, looks back at exposure. Efficient for rare diseases or outbreaks. Measures odds ratio.',
    explanationZh: '病例对照研究：从结局开始，回顾暴露。适合罕见病或暴发。测量OR。',
    explanationEs: 'Caso-control: empieza con desenlace, busca exposición retrospectiva.'
  },
  {
    id: 618, step: 'step1', subject: 'Biostatistics',
    question: 'A test has a high false positive rate. What happens to specificity and NPV?',
    options: ['Low specificity, low PPV', 'High specificity, high NPV', 'Low sensitivity, high NPV', 'High sensitivity, low NPV', 'Low specificity, high PPV'],
    correctAnswer: 0,
    explanationEn: 'High false positive rate → low specificity. Low specificity → low PPV (more false positives among all positive tests). NPV depends on sensitivity and prevalence.',
    explanationZh: '高假阳性率→低特异度→低PPV。NPV取决于敏感度和患病率。',
    explanationEs: 'Alta tasa de falsos positivos → baja especificidad → baja VPP.'
  },
  {
    id: 619, step: 'step2', subject: 'Surgery',
    question: 'A 55M with known AAA (5.5 cm) presents with severe abdominal/back pain and hypotension. Management?',
    options: ['Immediate laparotomy', 'CT angiography first', 'Endovascular repair only', 'Observation', 'IV fluids only'],
    correctAnswer: 0,
    explanationEn: 'Ruptured AAA: emergency. Hypotension, severe abdominal/back pain. Immediate laparotomy (or EVAR if unstable). Mortality 80-90%.',
    explanationZh: '破裂AAA：急症。低血压、严重腹痛/背痛。立即开腹手术。死亡率80-90%。',
    explanationEs: 'AAA roto: emergencia. Hipotensión, dolor abdominal/espada. Laparotomía inmediata.'
  },
  {
    id: 620, step: 'step2', subject: 'Surgery',
    question: 'A 30M presents 6 hours after a stab wound to the left lower chest. BP 90/60, distended neck veins, absent breath sounds on left. Dx?',
    options: ['Tension pneumothorax', 'Cardiac tamponade', 'Hemothorax', 'Flail chest', 'Ruptured diaphragm'],
    correctAnswer: 0,
    explanationEn: 'Tension pneumothorax: tracheal deviation away from affected side, distended neck veins, hypotension (obstructed venous return), absent breath sounds.',
    explanationZh: '张力性气胸：气管向健侧偏移，颈静脉怒张，患侧呼吸音消失。',
    explanationEs: 'Neumotórax a tensión: desviación traqueal, ingurgitación yugular, hipotensión.'
  },
  {
    id: 621, step: 'step2', subject: 'Surgery',
    question: 'A 70F with atrial fibrillation develops acute mesenteric ischemia. Which vessel is most likely occluded?',
    options: ['Superior mesenteric artery', 'Inferior mesenteric artery', 'Celiac trunk', 'Splenic artery', 'Hepatic artery'],
    correctAnswer: 0,
    explanationEn: 'SMA embolism (from AFib) → acute mesenteric ischemia. "Pain out of proportion to exam." Lactic acidosis, urgent embolectomy/resection.',
    explanationZh: 'SMA栓塞（来自房颤）→急性肠系膜缺血。"疼痛与查体不成比例。"',
    explanationEs: 'Isquemia mesentérica aguda: embolia de AMS por FA. Dolor desproporcionado.'
  },
  {
    id: 622, step: 'step2', subject: 'Surgery',
    question: 'A 25M with right lower quadrant pain, fever, and leukocytosis. RLQ tenderness, pain at internal rotation of hip (obturator sign). Dx?',
    options: ['Acute appendicitis', 'Diverticulitis', 'PID', 'Ectopic pregnancy', 'Mesenteric adenitis'],
    correctAnswer: 0,
    explanationEn: 'Acute appendicitis: RLQ pain (McBurney point), fever, leukocytosis. Obturator sign (irritation of obturator internus), Rovsing sign.',
    explanationZh: '急性阑尾炎：RLQ疼痛（McBurney点），发热，白细胞增多。闭孔内肌征。',
    explanationEs: 'Apendicitis aguda: dolor en FID, fiebre, leucocitosis. Signo del obturador.'
  },
  {
    id: 623, step: 'step2', subject: 'Surgery',
    question: 'A 60M with alcohol use disorder presents with severe epigastric pain radiating to back, nausea, and vomiting. Amylase and lipase >3x ULN. Management?',
    options: ['Aggressive IV fluids, NPO, analgesia', 'Immediate surgery', 'Endoscopic retrograde cholangiopancreatography', 'Antibiotics immediately', 'TPN'],
    correctAnswer: 0,
    explanationEn: 'Acute pancreatitis: amylase/lipase >3x ULN. Initial management: aggressive IV fluids, NPO, analgesics. ERCP only if gallstone pancreatitis with cholangitis.',
    explanationZh: '急性胰腺炎：淀粉酶/脂肪酶>3倍ULN。初始治疗：积极静脉补液、禁食、镇痛。',
    explanationEs: 'Pancreatitis aguda: lípidos >3x LSN. Fluidos IV agresivos, NPO, analgésicos.'
  },
  {
    id: 624, step: 'step2', subject: 'Surgery',
    question: 'A 45F with suspected breast cancer has a 2-cm mass in the UOQ. Next step in diagnosis?',
    options: ['Core needle biopsy', 'Fine needle aspiration', 'Excisional biopsy', 'Mammography only', 'Ultrasound only'],
    correctAnswer: 0,
    explanationEn: 'Breast mass evaluation:成像 (mammogram/US) → core needle biopsy (preferred) for diagnosis. FNA is less accurate, excisional if core inconclusive.',
    explanationZh: '乳腺肿块评估：影像学→空心针穿刺活检（首选）确诊。FNA准确性较低。',
    explanationEs: 'Masa mamaria: imagen → biopsia con aguja gruesa (preferida).'
  },
  {
    id: 625, step: 'step2', subject: 'Surgery',
    question: 'A 70M with localized prostate cancer (Gleason 7, PSA 10). What is the most appropriate management?',
    options: ['Active surveillance or radiation therapy', 'Immediate radical prostatectomy', 'Hormone therapy only', 'Chemotherapy', 'Watchful waiting without monitoring'],
    correctAnswer: 0,
    explanationEn: 'Prostate cancer management depends on age, comorbidities, Gleason score, PSA. Gleason 7 (intermediate risk): active surveillance (if <10y life expectancy) or radiation + ADT.',
    explanationZh: '前列腺癌治疗取决于年龄、合并症、Gleason评分。Gleason 7：主动监测或放疗+ADT。',
    explanationEs: 'Cáncer de próstata Gleason 7: vigilancia activa o radioterapia + ADT.'
  },
  {
    id: 626, step: 'step2', subject: 'Surgery',
    question: 'A 30F in a MVC has pelvic fracture and hypotension. FAST exam positive. Next step?',
    options: ['Pelvic angiography/embolization or external fixation', 'Exploratory laparotomy', 'Retrograde cystography', 'Foley catheter only', 'CT pelvis'],
    correctAnswer: 0,
    explanationEn: 'Unstable pelvic fracture with hemorrhage: stabilization (external fixator), angiographic embolization, or preperitoneal packing. FAST positive suggests intraperitoneal bleeding.',
    explanationZh: '不稳定骨盆骨折伴出血：固定、血管造影栓塞、或腹膜前填塞。',
    explanationEs: 'Fractura pélvica inestable con hemorragia: fijación, embolización.'
  },
  {
    id: 627, step: 'step2', subject: 'Surgery',
    question: 'A 55M with cirrhosis and ascites develops spontaneous bacterial peritonitis. Diagnostic paracentesis: PMN count?',
    options: ['>250 cells/mm3', '>500 cells/mm3', '>1000 cells/mm3', '>50 cells/mm3', '>100 cells/mm3'],
    correctAnswer: 0,
    explanationEn: 'SBP diagnosis: paracentesis with PMN count >250 cells/mm3. Treat with cefotaxime or ceftriaxone. Secondary peritonitis: higher PMN, multiple organisms.',
    explanationZh: 'SBP诊断：穿刺PMN>250 cells/mm3。用头孢噻肟或头孢曲松治疗。',
    explanationEs: 'PPS: paracentesis con PMN >250 células/mm3. Tratar con cefotaxima.'
  },
  {
    id: 628, step: 'step2', subject: 'Surgery',
    question: 'A 40M with Crohn disease develops fever, RLQ pain, and a palpable mass. CT shows inflammatory phlegmon. Management?',
    options: ['IV antibiotics and bowel rest', 'Immediate surgery', 'Steroids only', 'Biologics only', 'TPN only'],
    correctAnswer: 0,
    explanationEn: 'Crohn disease complication: inflammatory phlegmon/abscess. Initial management: IV antibiotics, bowel rest. Surgery if perforation, free air, or failed medical management.',
    explanationZh: '克罗恩病并发症：炎症包块/脓肿。初始治疗：IV抗生素、肠道休息。',
    explanationEs: 'Complicación de Crohn: flegmón inflamatorio. Manejo inicial: antibióticos IV, reposo de intestino.'
  },
  {
    id: 629, step: 'step2', subject: 'Surgery',
    question: 'A 65M with chronic mesenteric ischemia presents with "food fear," weight loss, and postprandial abdominal pain. Vascular supply?',
    options: ['Celiac trunk, SMA, IMA', 'Hepatic artery only', 'Splenic artery only', 'Renal arteries', 'Iliac arteries'],
    correctAnswer: 0,
    explanationEn: 'Chronic mesenteric ischemia: "intestinal angina." Pain 15-60 min after eating, food fear, weight loss. Caused by atherosclerosis of celiac, SMA, IMA.',
    explanationZh: '慢性肠系膜缺血："肠绞痛"。进食后15-60分钟疼痛，恐食症，体重下降。',
    explanationEs: 'Isquemia mesentérica crónica: "angina intestinal." Dolor postprandial.'
  },
  {
    id: 630, step: 'step2', subject: 'Surgery',
    question: 'A 20M with sudden severe testicular pain, nausea, and a high-riding testis with absent cremasteric reflex. Management?',
    options: ['Immediate surgical exploration and orchiopexy', 'Antibiotics', 'Scrotal ultrasound first', 'Analgesics and observation', 'FNA aspiration'],
    correctAnswer: 0,
    explanationEn: 'Testicular torsion: surgical emergency. Sudden severe pain, nausea, high-riding testis, absent cremasteric reflex. Must explore within 6h to save testis.',
    explanationZh: '睾丸扭转：外科急症。突发剧痛、恶心、睾丸高位、提睾反射消失。6小时内手术挽救睾丸。',
    explanationEs: 'Torsión testicular: emergencia quirúrgica. Dolor súbito. Explorar <6h.'
  },
  {
    id: 631, step: 'step2', subject: 'Surgery',
    question: 'A 50F with gallstone pancreatitis, cholecystitis, and cholangitis. Which procedure should be done urgently?',
    options: ['ERCP with sphincterotomy', 'Open cholecystectomy', 'Percutaneous cholecystostomy', 'MRCP', 'HIDA scan'],
    correctAnswer: 0,
    explanationEn: 'Ascending cholangitis with gallstone pancreatitis: emergent ERCP with sphincterotomy and stone extraction. Antibiotics alone are insufficient.',
    explanationZh: '胆石性胰腺炎伴胆管炎：急诊ERCP+括约肌切开取石。仅用抗生素不足。',
    explanationEs: 'Colangitis con pancreatitis biliar: ERCP urgente con esfinterotomía.'
  },
  {
    id: 632, step: 'step2', subject: 'Surgery',
    question: 'A 45M with portal hypertension and variceal bleeding. Initial stabilization done. Definitive management?',
    options: ['Endoscopic variceal ligation (banding)', 'Open portacaval shunt', 'Splenorenal shunt', 'Liver transplant immediately', 'TIPS as first-line'],
    correctAnswer: 0,
    explanationEn: 'Variceal bleeding: stabilize (IV fluids, blood), then endoscopic variceal ligation (banding) or sclerotherapy. TIPS if endoscopy fails. Beta-blockers for prevention.',
    explanationZh: '静脉曲张出血：稳定后内镜套扎或硬化治疗。内镜失败→TIPS。',
    explanationEs: 'Hemorragia variceal: estabilizar, luego ligadura endoscópica. TIPS si falla.'
  },
  {
    id: 633, step: 'step2', subject: 'Surgery',
    question: 'A 70F with large incisional hernia presents with irreducibility, pain, and vomiting. No bowel sounds. Management?',
    options: ['Emergency surgery (strangulated)', 'Attempt reduction', 'Elective repair', 'Observe', 'NG tube only'],
    correctAnswer: 0,
    explanationEn: 'Incisional hernia with pain, vomiting, absent bowel sounds → strangulated. Emergency surgery to prevent bowel necrosis. Do not attempt reduction if strangulated.',
    explanationZh: '切口疝伴疼痛、呕吐、肠鸣音消失→绞窄。急诊手术防止肠坏死。',
    explanationEs: 'Hernia incisional con dolor, vómitos → estrangulada. Cirugía de emergencia.'
  },
  {
    id: 634, step: 'step2', subject: 'Pediatrics',
    question: 'A 2yo with cough, tachypnea, and wheezing. RR 50, mild retractions. No prior wheezing episodes. Dx?',
    options: ['Bronchiolitis (RSV)', 'Asthma', 'Pneumonia', 'Croup', 'Foreign body aspiration'],
    correctAnswer: 0,
    explanationEn: 'Bronchiolitis: first episode of wheezing in infants <2yo, typically RSV. Tachypnea, wheezing, cough. Supportive care: oxygen, fluids.',
    explanationZh: '细支气管炎：<2岁婴儿首次喘息发作，通常RSV所致。支持治疗。',
    explanationEs: 'Bronquiolitis: primer episodio de sibilancias en <2 años, típicamente VRS.'
  },
  {
    id: 635, step: 'step2', subject: 'Pediatrics',
    question: 'A newborn has meconium ileus. What is the most likely underlying condition?',
    options: ['Cystic fibrosis', 'Hirschsprung disease', 'Intussusception', 'Volvulus', 'Necrotizing enterocolitis'],
    correctAnswer: 0,
    explanationEn: 'Meconium ileus: impacted meconium in distal ileum in newborns. Highly specific for cystic fibrosis (90% of CF newborns have meconium ileus).',
    explanationZh: '胎粪性肠梗阻：新生儿回肠末端胎粪嵌塞。对CF高度特异（90%CF新生儿有此表现）。',
    explanationEs: 'íleo meconial: meconio impactado en íleon distal. Altamente específico para fibrosis quística.'
  },
  {
    id: 636, step: 'step2', subject: 'Pediatrics',
    question: 'A 3yo with a harsh, "barky" cough, inspiratory stridor, and hoarseness. No fever. Dx?',
    options: ['Croup (laryngotracheobronchitis)', 'Epiglottitis', 'Bronchiolitis', 'Asthma', 'Retropharyngeal abscess'],
    correctAnswer: 0,
    explanationEn: 'Croup: parainfluenza virus. Barky cough, inspiratory stridor, hoarseness. Steeple sign on XR. Treatment: dexamethasone, nebulized epinephrine if severe.',
    explanationZh: '哮吼：副流感病毒。犬吠样咳嗽、吸气性喘鸣、声嘶。XR：尖塔征。',
    explanationEs: 'Crup: virus parainfluenza. Tos perruna, estridor inspiratorio. Signo de la campana.'
  },
  {
    id: 637, step: 'step2', subject: 'Pediatrics',
    question: 'A 4yo with fever, drooling, muffled voice, and inspiratory stridor. Looks toxic. What is the most likely Dx and management?',
    options: ['Epiglottitis → secure airway immediately', 'Croup → dexamethasone', 'Foreign body → Heimlich', 'Retropharyngeal abscess → I&D', 'Bacterial tracheitis → antibiotics'],
    correctAnswer: 0,
    explanationEn: 'Epiglottitis: H. influenzae type b (now rare due to vaccine). High fever, drooling, toxic appearance, inspiratory stridor. SECURE AIRWAY FIRST (anesthesia/ENT).',
    explanationZh: '会厌炎：流感嗜血杆菌b型。高热、流涎、中毒貌、吸气性喘鸣。首先确保安全气道。',
    explanationEs: 'Epiglotitis: fiebre alta, sialorrea, aspecto tóxico. ASEGURAR VÍA AÉREA PRIMERO.'
  },
  {
    id: 638, step: 'step2', subject: 'Pediatrics',
    question: 'A 2yo with a white pupillary reflex (leukocoria). Dx?',
    options: ['Retinoblastoma', 'Cataract', 'Retinopathy of prematurity', 'Chorioretinitis (toxoplasmosis)', 'Hyphema'],
    correctAnswer: 0,
    explanationEn: 'Retinoblastoma: most common primary intraocular malignancy in children. Leukocoria (white reflex), strabismus. RB1 gene mutation. May be hereditary.',
    explanationZh: '视网膜母细胞瘤：儿童最常见原发性眼内恶性肿瘤。白瞳症、斜视。RB1基因突变。',
    explanationEs: 'Retinoblastoma: tumor intraocular primario más común en niños. Leucocoria.'
  },
  {
    id: 639, step: 'step2', subject: 'Pediatrics',
    question: 'A newborn has bilious vomiting on day 2 of life. XR: double-bubble sign. Dx?',
    options: ['Duodenal atresia', 'Malrotation with volvulus', 'Pyloric stenosis', 'Hirschsprung disease', 'Necrotizing enterocolitis'],
    correctAnswer: 0,
    explanationEn: 'Duodenal atresia: bilious vomiting in newborn, double-bubble sign (dilated stomach + duodenum). Associated with Down syndrome (trisomy 21).',
    explanationZh: '十二指肠闭锁：新生儿胆汁性呕吐，双泡征。与21三体相关。',
    explanationEs: 'Aetesia duodenal: vómitos biliares en recién nacido, signo de doble burbuja.'
  },
  {
    id: 640, step: 'step2', subject: 'Pediatrics',
    question: 'A 3wk old newborn with progressive vomiting (non-bilious), palpable olive-shaped mass in epigastrium. Dx?',
    options: ['Pyloric stenosis', 'Duodenal atresia', 'Malrotation', 'GERD', 'Necrotizing enterocolitis'],
    correctAnswer: 0,
    explanationEn: 'Pyloric stenosis: non-bilious projectile vomiting at 2-8 weeks, olive-shaped epigastric mass, visible peristalsis. Hypochloremic hypokalemic metabolic alkalosis.',
    explanationZh: '幽门狭窄：2-8周非胆汁性喷射性呕吐，橄榄形上腹肿块。低氯低钾代谢性碱中毒。',
    explanationEs: 'Estenosis pilórica: vómitos en proyectil no biliares, 2-8 semanas. Masa en oliva.'
  },
  {
    id: 641, step: 'step2', subject: 'Pediatrics',
    question: 'A 5yo with delayed separation of umbilical stump, poor wound healing, and recurrent bacterial infections. Dx?',
    options: ['Leukocyte adhesion deficiency', 'Chronic granulomatous disease', 'Hyper-IgE syndrome', 'Neutropenia', 'Complement deficiency'],
    correctAnswer: 0,
    explanationEn: 'LAD: defect in LFA-1 integrin (CD18) → neutrophils cannot extravasate to sites of infection. Delayed umbilical cord separation, no pus formation.',
    explanationZh: '白细胞黏附缺陷：LFA-1整合素缺陷→中性粒细胞不能外渗。脐带延迟脱落，无化脓。',
    explanationEs: 'Deficiencia de adherencia leucocitaria: defecto en LFA-1, retraso en caída de cordón.'
  },
  {
    id: 642, step: 'step2', subject: 'Pediatrics',
    question: 'A 10yo with fever, weight loss, and night sweats. PPD 15mm induration. CXR: hilar lymphadenopathy. Management?',
    options: ['Start RIPE therapy', 'Observe', 'INH monotherapy', 'BCG vaccination', 'Chest CT'],
    correctAnswer: 0,
    explanationEn: 'Latent TB: >10mm induration if risk factors, >15mm if no risk. Active TB: symptoms + CXR findings → start RIPE. Children <5yo get INH preventive therapy for latent.',
    explanationZh: '活动性TB：症状+CXR表现→开始RIPE治疗。学龄前儿童潜伏TB用INH预防。',
    explanationEs: 'TB activa: síntomas + RX → iniciar RIPE. Niños <5 años: INH profilaxis.'
  },
  {
    id: 643, step: 'step2', subject: 'Pediatrics',
    question: 'A newborn with jitteriness, high-pitched cry, and hypertonia 2 days after birth. Mother has a hx of smoking crack cocaine. Dx?',
    options: ['Neonatal abstinence syndrome (opioids)', 'Neonatal cocaine withdrawal', 'Hypoglycemia', 'Hypocalcemia', 'Kernicterus'],
    correctAnswer: 0,
    explanationEn: 'Neonatal abstinence syndrome: opioid-exposed newborns. Symptoms 1-3 days after birth: tremors, hypertonia, high-pitched cry, sleep disturbances.',
    explanationZh: '新生儿戒断综合征：阿片类暴露新生儿。出生后1-3天症状：震颤、肌张力增高、高调哭声。',
    explanationEs: 'Síndrome de abstinencia neonatal: recién nacido expuesto a opioides. Temblores, hipertonía.'
  },
  {
    id: 644, step: 'step2', subject: 'Pediatrics',
    question: 'A 2yo with a fever >5 days, bilateral conjunctival injection without exudate, and strawberry tongue. Dx?',
    options: ['Kawasaki disease', 'Measles', 'Scarlet fever', 'Toxic shock syndrome', 'Stevens-Johnson syndrome'],
    correctAnswer: 0,
    explanationEn: 'Kawasaki: fever >5 days + 4/5 criteria: conjunctival injection, oral changes (strawberry tongue), cervical lymphadenopathy, extremity changes, rash.',
    explanationZh: '川崎病：发热>5天+4/5项标准：结膜炎、口腔改变（草莓舌）、颈淋巴结病、四肢改变、皮疹。',
    explanationEs: 'Enfermedad de Kawasaki: fiebre >5 días + 4/5 criterios. Lengua en fresa.'
  },
  {
    id: 645, step: 'step2', subject: 'Pediatrics',
    question: 'A 10yo with periorbital edema, gross hematuria, and hypertension after a strep throat infection. Dx?',
    options: ['Post-streptococcal glomerulonephritis', 'IgA nephropathy (Berger disease)', 'Membranous nephropathy', 'Minimal change disease', 'Alport syndrome'],
    correctAnswer: 0,
    explanationEn: 'PSGN: occurs 2-4 weeks after GAS infection. Periorbital edema, hypertension, gross hematuria, low C3. Subepithelial humps on EM.',
    explanationZh: 'PSGN：GAS感染后2-4周出现。眶周水肿、高血压、肉眼血尿、C3降低。EM：上皮下驼峰。',
    explanationEs: 'GN postestreptocócica: 2-4 semanas post-GAS. Edema periorbitario, hematuria.'
  },
  {
    id: 646, step: 'step2', subject: 'Pediatrics',
    question: 'A 3yo with abdominal distension, blue discoloration around umbilicus (Cullen sign), and hypotension. Dx?',
    options: ['Pancreatitis', 'Appendicitis', 'Intussusception', 'Volvulus', 'Ruptured spleen'],
    correctAnswer: 0,
    explanationEn: 'Pancreatitis in children: often from trauma, infection, or medications. Cullen sign (periumbilical ecchymosis) indicates retroperitoneal hemorrhage.',
    explanationZh: '儿童胰腺炎：常由创伤、感染或药物引起。Cullen征（脐周瘀斑）提示腹膜后出血。',
    explanationEs: 'Pancreatitis en niños: a menudo por trauma. Signo de Cullen: equimosis periumbilical.'
  },
  {
    id: 647, step: 'step2', subject: 'Pediatrics',
    question: 'A 7yo with a history of easy bruising and petechiae. Labs: normal PT/aPTT, decreased platelets. Dx?',
    options: ['ITP', 'Hemophilia A', 'TTP', 'DIC', 'Von Willebrand disease'],
    correctAnswer: 0,
    explanationEn: 'ITP: isolated thrombocytopenia in otherwise healthy child. Often post-viral. Acute ITP in children: usually self-limited. Chronic if >12 months.',
    explanationZh: 'ITP：健康儿童孤立性血小板减少。常发生于病毒感染后。儿童急性ITP常自限。',
    explanationEs: 'PTI: trombocitopenia aislada en niño sano. A menudo postviral.'
  },
  {
    id: 648, step: 'step2', subject: 'OB/GYN',
    question: 'A 28F at 32 weeks gestation has severe headache, visual disturbances, and BP 170/110. Dx?',
    options: ['Preeclampsia with severe features', 'Chronic hypertension', 'Gestational hypertension', 'HELLP syndrome', 'Eclampsia'],
    correctAnswer: 0,
    explanationEn: 'Preeclampsia: hypertension + proteinuria after 20 weeks. Severe features: BP ≥160/110, thrombocytopenia, renal insufficiency, pulmonary edema, visual/cerebral symptoms.',
    explanationZh: '子痫前期：20周后高血压+蛋白尿。严重特征：BP≥160/110、血小板减少、肾功能不全、肺水肿、视觉/大脑症状。',
    explanationEs: 'Preeclampsia: hipertensión + proteinuria post-20 semanas. Características severas.'
  },
  {
    id: 649, step: 'step2', subject: 'OB/GYN',
    question: 'A 22F with severe menstrual cramps since menarche. Dyspareunia. Uterus normal size. Next step in diagnosis?',
    options: ['Pelvic ultrasound or MRI', 'Hysterosalpingogram', 'Laparoscopy with biopsy', 'Pap smear', 'CA-125 only'],
    correctAnswer: 0,
    explanationEn: 'Endometriosis: dysmenorrhea, dyspareunia, chronic pelvic pain. Diagnosis: laparoscopy with biopsy (gold standard). Ultrasound may show endometriomas ("chocolate cysts").',
    explanationZh: '子宫内膜异位症：痛经、性交痛、慢性盆腔痛。诊断：腹腔镜+活检（金标准）。',
    explanationEs: 'Endometriosis: dismenorrea, dispareunia. Diagnóstico: laparoscopia con biopsia (oro).'
  },
  {
    id: 650, step: 'step2', subject: 'OB/GYN',
    question: 'A 55F with postmenopausal bleeding. Endometrial thickness 8mm on ultrasound. Next step?',
    options: ['Endometrial biopsy', 'Hysterectomy', 'Pelvic ultrasound only', 'CA-125', 'CT abdomen'],
    correctAnswer: 0,
    explanationEn: 'Postmenopausal bleeding: endometrial biopsy is mandatory to rule out endometrial carcinoma. If endometrium >4mm on ultrasound, biopsy is indicated.',
    explanationZh: '绝经后出血：必须进行子宫内膜活检以排除子宫内膜癌。超声子宫内膜>4mm→活检。',
    explanationEs: 'Sangrado postmenopáusico: biopsia de endometrio obligatoria para descartar cáncer.'
  },
  {
    id: 651, step: 'step2', subject: 'OB/GYN',
    question: 'A 25F with irregular menses, hirsutism, and obesity. LH:FSH ratio 3:1. Dx?',
    options: ['PCOS', 'Cushing syndrome', 'Congenital adrenal hyperplasia', 'Androgen-secreting tumor', 'Hyperprolactinemia'],
    correctAnswer: 0,
    explanationEn: 'PCOS: irregular menses, hirsutism, obesity, polycystic ovaries on ultrasound. Labs: ↑LH, ↓FSH, ↑testosterone, ↑insulin. Rotterdam criteria: 2 of 3 + exclude others.',
    explanationZh: 'PCOS：月经不规律、多毛、肥胖、超声多囊卵巢。LH↑、FSH↓、睾酮↑。鹿特丹标准：3项中2项+排除其他。',
    explanationEs: 'SOP: menstruaciones irregulares, hirsutismo, obesidad. LH↑, FSH↓.'
  },
  {
    id: 652, step: 'step2', subject: 'OB/GYN',
    question: 'A 30F with right lower quadrant pain and a positive pregnancy test. CMP: 5 weeks. Next step?',
    options: ['Transvaginal ultrasound', 'Laparoscopy', 'Quantitative beta-hCG', 'D&C', 'CT abdomen'],
    correctAnswer: 0,
    explanationEn: 'Suspected ectopic pregnancy: quantitative beta-hCG + transvaginal ultrasound. If beta-hCG >1500 and no intrauterine pregnancy on US → ectopic.',
    explanationZh: '疑似异位妊娠：定量β-hCG+经阴道超声。β-hCG>1500且US未见宫内妊娠→异位妊娠。',
    explanationEs: 'Embarazo ectópico sospechado: beta-hCG cuantitativa + ecografía transvaginal.'
  },
  {
    id: 653, step: 'step2', subject: 'OB/GYN',
    question: 'A 16yo F with lower abdominal pain and purulent cervical discharge. Fever. Adnexal tenderness. Dx?',
    options: ['PID (pelvic inflammatory disease)', 'Appendicitis', 'Ectopic pregnancy', 'Ovarian torsion', 'Endometriosis'],
    correctAnswer: 0,
    explanationEn: 'PID: lower abdominal pain, purulent cervical discharge, adnexal tenderness, fever. Complications: infertility, ectopic pregnancy, chronic pelvic pain.',
    explanationZh: 'PID：下腹痛、脓性宫颈分泌物、附件压痛、发热。并发症：不孕、异位妊娠、慢性盆腔痛。',
    explanationEs: 'EPI: dolor abdominal bajo, flujo cervical purulento, fiebre. Infertilidad.'
  },
  {
    id: 654, step: 'step2', subject: 'OB/GYN',
    question: 'A 40F with multiple leiomyomas (fibroids) presents with menorrhagia and iron deficiency anemia. Uterus size 18 weeks. Management?',
    options: ['Hysterectomy or myomectomy', 'Oral contraceptives', 'GnRH agonists long-term', 'Hysteroscopic resection only', 'Uterine artery embolization only'],
    correctAnswer: 0,
    explanationEn: 'Symptomatic fibroids: menorrhagia, bulk symptoms. Medical: OCP, GnRH agonists (short-term). Surgical: myomectomy (fertility desired), hysterectomy (completed childbearing).',
    explanationZh: '症状性肌瘤：月经过多、占位症状。手术：肌瘤切除术（希望保留生育）、子宫切除术（已完成生育）。',
    explanationEs: 'Miomas sintomáticos: menorragia. Quirúrgico: miomectomía (conservar fertilidad), histerectomía.'
  },
  {
    id: 655, step: 'step2', subject: 'OB/GYN',
    question: 'A 35F with 3 prior cesarean sections presents with placenta previa and painless vaginal bleeding at 34 weeks. Management?',
    options: ['Urgent cesarean section', 'Vaginal delivery trial', 'Bed rest only', 'Tocolytics', 'Steroids only'],
    correctAnswer: 0,
    explanationEn: 'Placenta previa: painless vaginal bleeding in third trimester. Prior C-section → increased risk of placenta accreta. If bleeding heavy → emergent C-section.',
    explanationZh: '前置胎盘： third trimester无痛性阴道流血。既往剖宫产→胎盘植入风险增加。出血严重→急诊剖宫产。',
    explanationEs: 'Placenta previa: sangrado vaginal indoloro en tercer trimestre. Cesárea urgente si sangrado grave.'
  },
  {
    id: 656, step: 'step2', subject: 'OB/GYN',
    question: 'A 20F with primary amenorrhea. She has breast development but no pubic hair. Dx?',
    options: ['Androgen insensitivity syndrome (AIS)', 'Turner syndrome', 'Swyer syndrome', 'Müllerian agenesis', 'Kallmann syndrome'],
    correctAnswer: 0,
    explanationEn: 'AIS: 46,XY, androgen receptor defect. Female phenotype (breast development from peripheral conversion of androgens to estrogen), no pubic hair (androgen-dependent), absent uterus.',
    explanationZh: 'AIS：46,XY，雄激素受体缺陷。女性表型（乳腺发育），无阴毛（雄激素依赖），无子宫。',
    explanationEs: 'Síndrome de insensibilidad androgénica: 46,XY, defecto en receptor de andrógenos.'
  },
  {
    id: 657, step: 'step2', subject: 'OB/GYN',
    question: 'A 30F has yellow, frothy vaginal discharge and草莓 cervix on speculum exam. Management?',
    options: ['Metronidazole', 'Clotrimazole', 'Azithromycin', 'Ceftriaxone', 'Doxycycline'],
    correctAnswer: 0,
    explanationEn: 'Trichomonas vaginalis: yellow frothy discharge, "strawberry cervix." Treat with metronidazole (2g single dose). Treat sexual partners.',
    explanationZh: '阴道毛滴虫：黄色泡沫状分泌物、"草莓宫颈"。甲硝唑2g单次剂量治疗。性伴侣同治。',
    explanationEs: 'Tricomonas vaginalis: flujo amarillo espumoso. Metronidazol 2g dosis única.'
  },
  {
    id: 658, step: 'step2', subject: 'Internal Medicine',
    question: 'A 65M with CAD, EF 35%, NYHA class III. On ACEI, beta-blocker, spirnolactone. Next step?',
    options: ['ICD placement', 'Pacemaker', 'Amiodarone', 'Warfarin', 'Digoxin'],
    correctAnswer: 0,
    explanationEn: 'Primary prevention of SCD in HFrEF (EF ≤35%): ICD placement. CRT if LBBB with QRS ≥150ms.',
    explanationZh: 'HFrEF（EF≤35%）SCD一级预防：ICD置入。QRS≥150ms+LBBB→CRT。',
    explanationEs: 'Prevención primaria de MS en ICrFE: colocación de DAI.'
  },
  {
    id: 659, step: 'step2', subject: 'Internal Medicine',
    question: 'A 55F with palpitations, dizziness. ECG: irregularly irregular with no P waves. Management?',
    options: ['Rate control with beta-blocker', 'Immediate cardioversion', 'Amiodarone', 'Warfarin only', 'Aspirin'],
    correctAnswer: 0,
    explanationEn: 'Atrial fibrillation: rate control (beta-blocker, CCB, digoxin) for most patients. Anticoagulate based on CHA2DS2-VASc score.',
    explanationZh: '房颤：大多数患者率控制（β阻滞剂、CCB、地高辛）。按CHADSVASc评分抗凝。',
    explanationEs: 'FA: control de frecuencia (beta-bloqueante) para la mayoría.'
  },
  {
    id: 660, step: 'step2', subject: 'Internal Medicine',
    question: 'A 50M with 3-month history of dysphagia to solids and liquids. GERD unresponsive to PPIs. Dx?',
    options: ['Achalasia', 'Esophageal cancer', 'DES', 'Scleroderma', 'Eosinophilic esophagitis'],
    correctAnswer: 0,
    explanationEn: 'Achalasia: dysphagia to BOTH solids and liquids from onset. Incomplete LES relaxation, increased LES pressure. Barium: bird beak.',
    explanationZh: '贲门失弛缓：固体+液体吞咽困难。LES松弛不全、压力增高。钡餐：鸟嘴征。',
    explanationEs: 'Acalasia: disfagia a sólidos Y líquidos desde el inicio. Pico de ave.'
  },
  {
    id: 661, step: 'step2', subject: 'Internal Medicine',
    question: 'A 70F with osteoporosis (T-score -2.8), post-menopausal. First-line treatment?',
    options: ['Bisphosphonates (alendronate)', 'Teriparatide', 'Denosumab', 'Calcitonin', 'Calcium + vitamin D only'],
    correctAnswer: 0,
    explanationEn: 'First-line for osteoporosis: bisphosphonates (alendronate). Inhibit osteoclasts. Take with water, remain upright 30 min.',
    explanationZh: '骨质疏松一线：双膦酸盐（阿仑膦酸钠）。抑制破骨细胞。空腹用水送服，服药后直立30分钟。',
    explanationEs: 'Primera línea para osteoporosis: bifosfonatos (alendronato).'
  },
  {
    id: 662, step: 'step2', subject: 'Internal Medicine',
    question: 'A 45M with chronic hepatitis B (HBV DNA 10^6, ALT elevated). Indication for treatment?',
    options: ['HBV DNA >20000 IU/mL or ALT >2x ULN', 'HBsAg positive only', 'Anti-HBc IgM positive', 'HBsAg loss', 'HBV DNA undetectable'],
    correctAnswer: 0,
    explanationEn: 'CHB treatment: HBV DNA >20,000 IU/mL (HBeAg+) or >2,000 (HBeAg-), plus elevated ALT. First-line: tenofovir or entecavir.',
    explanationZh: '慢乙肝治疗指征：HBV DNA>20,000IU/mL（HBeAg+）或>2,000（HBeAg-）+ALT升高。一线：替诺福韦或恩替卡韦。',
    explanationEs: 'Tratamiento de HBCD: ADN VHB >20,000 UI/mL + ALT elevada.'
  },
  {
    id: 663, step: 'step2', subject: 'Internal Medicine',
    question: 'A 60M with CKD stage 4 (eGFR 25), anemia (Hb 9.5), ferritin 150. Management?',
    options: ['Erythropoiesis-stimulating agent (ESA)', 'Iron supplementation', 'Blood transfusion', 'B12 supplementation', 'Folic acid'],
    correctAnswer: 0,
    explanationEn: 'CKD anemia: evaluate iron stores first. If iron-deficient → IV iron. If iron-replete → ESA (epoetin alfa). Target Hb 10-11 g/dL.',
    explanationZh: 'CKD贫血：先评估铁储备。缺铁→IV铁剂。铁充足→ESA（阿法依泊汀）。目标Hb 10-11 g/dL。',
    explanationEs: 'Anemia en ERC: evaluar reservas de hierro. Si hierro suficiente → AEE.'
  },
  {
    id: 664, step: 'step2', subject: 'Internal Medicine',
    question: 'A 30F with malar rash, photosensitivity, and arthralgias. ANA 1:1280, dsDNA positive. Dx?',
    options: ['SLE', 'Dermatomyositis', 'Sjogren syndrome', 'Systemic sclerosis', 'Mixed connective tissue disease'],
    correctAnswer: 0,
    explanationEn: 'SLE: malar rash, photosensitivity, oral ulcers, arthritis, serositis, renal/neuro disorder. ANA+, anti-dsDNA+, anti-Smith+.',
    explanationZh: 'SLE：颧部红斑、光敏感、口腔溃疡、关节炎、浆膜炎、肾脏/神经病变。ANA+、抗dsDNA+、抗Smith+。',
    explanationEs: 'LES: eritema malar, fotosensibilidad, artritis. ANA+, anti-dsDNA+.'
  },
  {
    id: 665, step: 'step2', subject: 'Internal Medicine',
    question: 'A 55M with RA for 10 years. Deformed joints, subcutaneous nodules. Most serious pulmonary complication?',
    options: ['Interstitial lung disease (UIP pattern)', 'Pleural effusion', 'Bronchiectasis', 'Lung cancer', 'Pulmonary hypertension'],
    correctAnswer: 0,
    explanationEn: 'RA pulmonary complications: ILD (usual interstitial pneumonia pattern), rheumatoid nodules in lung, pleural effusion (exudative).',
    explanationZh: 'RA肺部并发症：ILD（寻常型间质性肺炎模式）、肺类风湿结节、胸腔积液（渗出性）。',
    explanationEs: 'Complicaciones pulmonares de AR: EPI (patrón UIP), nódulos reumatoides.'
  },
  {
    id: 666, step: 'step2', subject: 'Internal Medicine',
    question: 'A 40F with recurrent DVT despite warfarin (INR 2-3). What should be checked?',
    options: ['Antiphospholipid antibody syndrome', 'Protein C deficiency', 'Protein S deficiency', 'Factor V Leiden', 'MTHFR mutation'],
    correctAnswer: 0,
    explanationEn: 'Recurrent VTE despite anticoagulation → consider antiphospholipid antibody syndrome (lupus anticoagulant, anticardiolipin, anti-beta2-GP1).',
    explanationZh: '抗凝治疗中复发VTE→考虑抗磷脂抗体综合征（狼疮抗凝物、抗心磷脂、抗β2-GP1）。',
    explanationEs: 'VTE recurrente a pesar de anticoagulación → síndrome antifosfolípido.'
  },
  {
    id: 667, step: 'step2', subject: 'Internal Medicine',
    question: 'A 70M with severe AS (valve area 0.8 cm2), dyspnea on exertion. Management?',
    options: ['Aortic valve replacement (TAVR or SAVR)', 'Medical management only', 'Balloon valvuloplasty', 'Watchful waiting', 'Mitral valve repair'],
    correctAnswer: 0,
    explanationEn: 'Severe AS (valve area <1.0 cm2) with symptoms → aortic valve replacement. TAVR for high surgical risk, SAVR for low risk.',
    explanationZh: '严重AS（瓣口面积<1.0 cm2）有症状→主动脉瓣置换。高危外科风险→TAVR，低危→SAVR。',
    explanationEs: 'EA grave (área <1.0 cm2) con síntomas → reemplazo valvular aórtico.'
  },
  {
    id: 668, step: 'step2', subject: 'Internal Medicine',
    question: 'A 55M with T2DM, HTN, CKD (eGFR 40). UACR 800 mg/g. First-line agent to slow CKD progression?',
    options: ['SGLT2 inhibitor', 'ACEI/ARB', 'DPP-4 inhibitor', 'Sulfonylurea', 'Metformin'],
    correctAnswer: 0,
    explanationEn: 'CKD with diabetes: SGLT2 inhibitors (dapagliflozin, empagliflozin) reduce CKD progression and CV events. ACEI/ARB for BP control.',
    explanationZh: 'CKD合并糖尿病：SGLT2抑制剂（达格列净、恩格列净）减缓CKD进展并减少CV事件。ACEI/ARB控制血压。',
    explanationEs: 'ERC con diabetes: iSGLT2 reducen progresión de ERC y eventos CV.'
  },
  {
    id: 669, step: 'step2', subject: 'Internal Medicine',
    question: 'A 35F with severe headache, photophobia, and nuchal rigidity. CT head normal. Next step?',
    options: ['Lumbar puncture', 'MRI brain', 'EEG', 'Empiric antibiotics', 'CT venography'],
    correctAnswer: 0,
    explanationEn: 'Suspected SAH with normal CT → lumbar puncture to look for xanthochromia (bilirubin in CSF from degraded blood).',
    explanationZh: '疑似SAH但CT正常→腰椎穿刺寻找黄染（降解血中胆红素）。',
    explanationEs: 'SAH sospechada con TC normal → punción lumbar buscando xantocromía.'
  },
  {
    id: 670, step: 'step2', subject: 'Internal Medicine',
    question: 'A 65M with COPD, FEV1/FVC 0.6, FEV1 45% predicted. Appropriate pharmacotherapy?',
    options: ['LABA + LAMA + ICS', 'SABA only', 'LAMA only', 'LABA + ICS', 'SABA + theophylline'],
    correctAnswer: 0,
    explanationEn: 'GOLD group E (FEV1 <50%, ≥2 exacerbations): LABA + LAMA + ICS. LAMA is core for symptomatic patients with FEV1 <60%.',
    explanationZh: 'GOLD E组（FEV1<50%、≥2次急性加重）：LABA+LAMA+ICS。LAMA是有症状且FEV1<60%患者的核心用药。',
    explanationEs: 'Grupo E GOLD (FEV1 <50%): LABA + LAMA + CIE.'
  },
  {
    id: 671, step: 'step2', subject: 'Internal Medicine',
    question: 'A 50F with progressive dysphagia, weight loss. Endoscopy: median raphe ulcer. Biopsy: squamous cell carcinoma. Stage T1a. Management?',
    options: ['Endoscopic mucosal resection', 'Esophagectomy', 'Chemoradiation', 'Stent placement', 'Palliative care'],
    correctAnswer: 0,
    explanationEn: 'Esophageal SCC T1a (lamina propria/submucosa superficial): EMR or endoscopic submucosal dissection (ESD). T1b or deeper → esophagectomy.',
    explanationZh: '食管鳞癌T1a（黏膜固有层/浅表黏膜下）：EMR或ESD。T1b或更深→食管切除术。',
    explanationEs: 'CE esofágico T1a: REM o disección submucosa endoscópica.'
  },
  {
    id: 672, step: 'step2', subject: 'Internal Medicine',
    question: 'A 30M with HIV (CD4 250), PPD 10mm induration. CXR normal. Management?',
    options: ['Start INH + B6 for 9 months', 'Observe', 'Start RIPE', 'Start fluconazole', 'Start TMP-SMX'],
    correctAnswer: 0,
    explanationEn: 'Latent TB in HIV: if CD4 ≥200 and no active TB, treat with INH + B6 × 9 months. If CD4 <200, start ART first, then treat LTBI.',
    explanationZh: 'HIV合并潜伏TB：CD4≥200且无活动性TB→INH+B6×9月。CD4<200→先ART，后治疗LTBI。',
    explanationEs: 'TB latente en VIH: CD4 ≥200 → INH + B6 × 9 meses.'
  },
  {
    id: 673, step: 'step2', subject: 'Internal Medicine',
    question: 'A 70F with osteoporosis, falls. On alendronate × 5 years. What monitoring is needed?',
    options: ['Discontinue alendronate (drug holiday)', 'Continue alendronate', 'Switch to denosumab', 'Start teriparatide', 'Dual-energy X-ray absorptiometry'],
    correctAnswer: 0,
    explanationEn: 'Bisphosphonate holiday: after 3-5 years, reassess fracture risk. If low risk → discontinue. If high risk → continue or switch to denosumab.',
    explanationZh: '双膦酸盐药物假期：3-5年后重新评估骨折风险。低风险→停药。高风险→继续或换用地诺单抗。',
    explanationEs: 'Vacaciones con bifosfonatos: a los 3-5 años, reevaluar riesgo.'
  },
  {
    id: 674, step: 'step2', subject: 'Internal Medicine',
    question: 'A 45M with sudden-onset tearing chest pain, radiating to back. BP 180/110. CXR: widened mediastinum. Management?',
    options: ['CT aortogram', 'Transthoracic echocardiogram', 'Aortography', 'MRI aorta', 'ESR/CRP'],
    correctAnswer: 0,
    explanationEn: 'Suspected aortic dissection: CT aortogram (gold standard). Stanford type A (ascending) → surgical repair. Type B (descending) → medical management (BP control).',
    explanationZh: '疑似主动脉夹层：CTA（金标准）。Stanford A型（升主动脉）→手术修复。B型（降主动脉）→药物治疗（血压控制）。',
    explanationEs: 'Disección aórtica: angiotomografía. Tipo A → cirugía. Tipo B → tratamiento médico.'
  },
  {
    id: 675, step: 'step2', subject: 'Internal Medicine',
    question: 'A 25F with 3-day history of high fever, jaundice, and RUQ pain. Hx of sickle cell disease. Dx?',
    options: ['Acute cholestasis of sepsis', 'Cholecystitis', 'Hepatic sequestration', 'Intrahepatic cholestasis of pregnancy', 'Drug-induced liver injury'],
    correctAnswer: 0,
    explanationEn: 'Sickle cell with acute RUQ pain, jaundice → cholecystitis (pigment stones) or hepatic sequestration (rapid splenomegaly, anemia).',
    explanationZh: '镰状细胞病急性RUQ痛、黄疸→胆囊炎（色素性结石）或肝 sequestration（快速脾大、贫血）。',
    explanationEs: 'Células falciformes: colecistitis o secuestro hepático. Dolor IR, ictericia.'
  },
  {
    id: 676, step: 'step2', subject: 'Internal Medicine',
    question: 'A 60M with CKD (eGFR 25), secondary hyperparathyroidism (PTH 300). Management?',
    options: ['Cinacalcet or active vitamin D', 'Calcitriol only', 'Parathyroidectomy', 'Bisphosphonates', 'Cinacalcet only'],
    correctAnswer: 0,
    explanationEn: 'CKD-MBD: secondary hyperparathyroidism. If PTH >300 → calcimimetics (cinacalcet) or active vitamin D (calcitriol). Severe → PTX.',
    explanationZh: 'CKD-MBD：继发性甲旁亢。PTH>300→拟钙剂（西那卡塞）或活性维生素D（骨化三醇）。严重→甲旁切。',
    explanationEs: 'ERP-MRC: hiperparatiroidismo secundario. PTH >300 → cinacalcet o vitamina D activa.'
  },
  {
    id: 677, step: 'step2', subject: 'Internal Medicine',
    question: 'A 50F with multiple sclerosis, relapsing-remitting course. MRI: new T2 hyperintense lesions. Management?',
    options: ['Disease-modifying therapy (interferon beta, natalizumab)', 'High-dose steroids only', 'Plasmapheresis', 'Methotrexate', 'Symptomatic treatment only'],
    correctAnswer: 0,
    explanationEn: 'RRMS: disease-modifying therapies (interferon beta, glatiramer acetate, natalizumab, ocrelizumab). Acute relapses: high-dose steroids.',
    explanationZh: 'RRMS：疾病修饰治疗（干扰素β、格拉默、那他珠单抗、奥瑞珠单抗）。急性复发：高剂量激素。',
    explanationEs: 'EMRR: terapias modificadoras de la enfermedad (interferón beta, natalizumab).'
  },
  {
    id: 678, step: 'step2', subject: 'Psychiatry',
    question: 'A 40F with recurrent episodes of terror accompanied by palpitations, sweating, and fear of dying. No trigger. Dx?',
    options: ['Panic disorder', 'Generalized anxiety disorder', 'Specific phobia', 'Social anxiety disorder', 'Agoraphobia'],
    correctAnswer: 0,
    explanationEn: 'Panic disorder: recurrent unexpected panic attacks (intense fear, palpitations, sweating, shortness of breath). May have agoraphobia.',
    explanationZh: '惊恐障碍：反复意外惊恐发作（强烈恐惧、心悸、出汗、呼吸困难）。可伴广场恐惧症。',
    explanationEs: 'Trastorno de pánico: ataques de pánico inesperados recurrentes.'
  },
  {
    id: 679, step: 'step2', subject: 'Psychiatry',
    question: 'A 35M with 3-month history of depressed mood, anhedonia, weight gain, and hypersomnia. Sleep study: early onset REM. Dx?',
    options: ['Major depressive disorder', 'Seasonal affective disorder', 'Atypical depression', 'Dysthymia', 'Adjustment disorder'],
    correctAnswer: 0,
    explanationEn: 'MDD: ≥5 of SIGECAPS for ≥2 weeks. Atypical depression: mood reactivity, weight gain, hypersomnia, leaden paralysis, rejection sensitivity.',
    explanationZh: 'MDD：≥5项SIGECAPS持续≥2周。不典型抑郁：情绪可反应性、体重增加、睡眠过多、铅样瘫痪、拒绝敏感。',
    explanationEs: 'TDM: ≥5 de SIGECAPS por ≥2 semanas. Depresión atípica: reactividad del estado de ánimo.'
  },
  {
    id: 680, step: 'step2', subject: 'Psychiatry',
    question: 'A 50M with schizophrenia, auditory hallucinations, and disorganized speech. On haloperidol. Develops involuntary sucking and chewing movements. Dx?',
    options: ['Tardive dyskinesia', 'Acute dystonia', 'Akathisia', 'Parkinsonism', 'Neuroleptic malignant syndrome'],
    correctAnswer: 0,
    explanationEn: 'Tardive dyskinesia: involuntary movements (bucco-linguo-masticatory) from long-term antipsychotic use. Irreversible in many cases.',
    explanationZh: '迟发性运动障碍：长期抗精神病药使用导致的不自主运动（口-舌-颊三联征）。多数不可逆。',
    explanationEs: 'Discinesia tardía: movimientos involuntarios (triada buco-linguo-masticaatoria).'
  },
  {
    id: 681, step: 'step2', subject: 'Psychiatry',
    question: 'A 30F with binge eating and purging (vomiting, laxatives) 3 times/week. Body weight normal. Dx?',
    options: ['Bulimia nervosa', 'Anorexia nervosa, binge/purge type', 'Binge eating disorder', 'OSFED', 'Purging disorder'],
    correctAnswer: 0,
    explanationEn: 'Bulimia: binge eating + compensatory behaviors (vomiting, laxatives, exercise). Body weight usually normal. High risk of electrolyte disturbances.',
    explanationZh: '神经性贪食：暴食+代偿行为（呕吐、泻药、运动）。体重通常正常。电解质紊乱高风险。',
    explanationEs: 'Bulimia: atracones + conductas compensatorias. Peso corporal usualmente normal.'
  },
  {
    id: 682, step: 'step2', subject: 'Psychiatry',
    question: 'A 45M with alcohol use disorder wants to quit. He has a seizure 24h after last drink. Management?',
    options: ['Benzodiazepines (lorazepam)', 'Haloperidol', 'Naltrexone', 'Disulfiram', 'Acamprosate'],
    correctAnswer: 0,
    explanationEn: 'Alcohol withdrawal seizures: benzodiazepines (lorazepam, diazepam). Prevent progression to delirium tremens. Thiamine before glucose.',
    explanationZh: '酒精戒断癫痫发作：苯二氮卓类（劳拉西泮、地西泮）。预防进展为震颤性谵妄。给葡萄糖前先给硫胺素。',
    explanationEs: 'Convulsiones por abstinencia alcohólica: benzodiacepinas. Prevenir delirium trements.'
  },
  {
    id: 683, step: 'step2', subject: 'Psychiatry',
    question: 'A 25F with episodes of "spaciness" and hand washing 10 times before leaving home. She recognizes these are unreasonable. Dx?',
    options: ['Obsessive-compulsive disorder', 'Generalized anxiety disorder', 'Illusion anxiety disorder', 'Body dysmorphic disorder', 'Adjustment disorder'],
    correctAnswer: 0,
    explanationEn: 'OCD: obsessions (intrusive thoughts) and compulsions (repetitive behaviors). Insight varies: good (aware excessive), poor, or absent (absent = schizophrenia).',
    explanationZh: 'OCD：强迫思维（侵入性想法）和强迫行为（重复行为）。自知力：好、差、缺失（缺失=精神分裂症）。',
    explanationEs: 'TOC: obsesiones y compulsiones. Insight: bueno, pobre, ausente.'
  },
  {
    id: 684, step: 'step2', subject: 'Psychiatry',
    question: 'A 40M with chronic back pain, multiple somatic complaints, and a history of multiple doctors. Dx?',
    options: ['Somatic symptom disorder', 'Factitious disorder', 'Malingering', 'Illusion anxiety disorder', 'Conversion disorder'],
    correctAnswer: 0,
    explanationEn: 'Somatic symptom disorder: excessive thoughts/feelings/behaviors related to somatic symptoms. Distress and impairment. "Doctor shopping" common.',
    explanationZh: '躯体症状障碍：与躯体症状相关的过度想法/感觉/行为。痛苦和功能障碍。"医生购物"常见。',
    explanationEs: 'Trastorno de síntomas somáticos: pensamientos/conductas excesivas relacionadas con síntomas somáticos.'
  },
  {
    id: 685, step: 'step2', subject: 'Psychiatry',
    question: 'A 20F is brought by police after dancing wildly at a concert. She says she took "some pills." Tachycardia, hypertension, dilated pupils. Dx?',
    options: ['Amphetamine intoxication', 'Cocaine intoxication', 'PCP intoxication', 'LSD intoxication', 'MDMA intoxication'],
    correctAnswer: 0,
    explanationEn: 'Amphetamine intoxication: euphoria, grandiosity, tachycardia, hypertension, dilated pupils, psychosis. "Party pills" at concerts/raves.',
    explanationZh: '苯丙胺中毒：欣快、夸大、心动过速、高血压、瞳孔扩大、精神病性症状。"派对药丸"在音乐会/锐舞中。',
    explanationEs: 'Intoxicación por anfetaminas: euforia, grandiosidad, midriasis, psicosis.'
  },
  {
    id: 686, step: 'step2', subject: 'Psychiatry',
    question: 'A 65M with 6-month history of memory loss, getting lost, and personality changes. MMSE 20/30. Dx?',
    options: ['Alzheimer disease', 'Vascular dementia', 'Lewy body dementia', 'Frontotemporal dementia', 'Normal pressure hydrocephalus'],
    correctAnswer: 0,
    explanationEn: 'Alzheimer: gradual memory loss, disorientation, personality changes. MMSE <24. Affected: hippocampus → entorhinal cortex → neocortex.',
    explanationZh: '阿尔茨海默病：渐进性记忆丧失、定向障碍、人格改变。MMSE<24。受累：海马→内嗅皮层→新皮层。',
    explanationEs: 'Enfermedad de Alzheimer: pérdida gradual de memoria. MMSE <24. Hipocampo → neocórtex.'
  },
  {
    id: 687, step: 'step2', subject: 'Psychiatry',
    question: 'A 55F with 3-month history of worry about multiple events, muscle tension, and sleep disturbance. Dx?',
    options: ['Generalized anxiety disorder', 'Panic disorder', 'Somatization disorder', 'Adjustment disorder', 'Dysthymia'],
    correctAnswer: 0,
    explanationEn: 'GAD: excessive anxiety/worry about multiple events ≥6 months. Restlessness, fatigue, concentration problems, irritability, muscle tension, sleep disturbance.',
    explanationZh: 'GAD：对多个事件的过度焦虑/担忧≥6个月。坐立不安、疲劳、注意力问题、易激惹、肌肉紧张、睡眠障碍。',
    explanationEs: 'TAG: ansiedad/preocupación excesiva por múltiples eventos ≥6 meses.'
  },
  {
    id: 688, step: 'step2', subject: 'Psychiatry',
    question: 'A 30M with 1-week history of auditory hallucinations, delusions of persecution, and disorganized behavior. Dx?',
    options: ['Schizophrenia, first episode', 'Brief psychotic disorder', 'Schizophreniform disorder', 'Schizoaffective disorder', 'Delusional disorder'],
    correctAnswer: 0,
    explanationEn: 'Schizophrenia requires ≥6 months (including prodrome/active/residual phases). Schizophreniform: 1-6 months. Brief psychotic: <1 month.',
    explanationZh: '精神分裂症需要≥6个月（包括前驱/活跃/残留期）。精神分裂症样：1-6个月。短暂精神病性：<1个月。',
    explanationEs: 'Esquizofrenia requiere ≥6 meses. Esquizofreniforme: 1-6 meses. Psicótico breve: <1 mes.'
  },
  {
    id: 689, step: 'step2', subject: 'Psychiatry',
    question: 'A 40F with rapid cycling bipolar disorder (4 episodes/year). On lithium. Which agent can help as adjunct?',
    options: ['Lamotrigine', 'Fluoxetine', 'Carbamazepine', 'Valproate', 'Quetiapine'],
    correctAnswer: 0,
    explanationEn: 'Rapid cycling bipolar: ≥4 episodes/year. Lamotrigine (mood stabilizer) helpful for bipolar depression and rapid cycling. Avoid antidepressants alone.',
    explanationZh: '快速循环双相：≥4次发作/年。拉莫三嗪（心境稳定剂）对双相抑郁和快速循环有帮助。避免单用抗抑郁药。',
    explanationEs: 'Ciclado rápido en bipolar: ≥4 episodios/año. Lamotrigina útil como adyuvante.'
  },
  {
    id: 690, step: 'step2', subject: 'Psychiatry',
    question: 'A 16yo F with restricted eating, fear of weight gain, and amenorrhea. BMI 17. Dx?',
    options: ['Anorexia nervosa, restricting type', 'Anorexia nervosa, binge/purge type', 'Bulimia nervosa', 'Avoidant/restrictive food intake disorder', 'Somatization disorder'],
    correctAnswer: 0,
    explanationEn: 'Anorexia nervosa: restriction of energy intake → significantly low body weight. Intense fear of weight gain, disturbed body image. Amenorrhea (in females).',
    explanationZh: '神经性厌食症：限制能量摄入→显著低体重。强烈恐惧体重增加，体像障碍。闭经（女性）。',
    explanationEs: 'Anorexia nerviosa: restricción de ingesta → peso corporal significativamente bajo.'
  },
  {
    id: 691, step: 'step2', subject: 'Psychiatry',
    question: 'A 45M with chronic back pain, requests higher opioid doses. Urine drug screen negative for opioids. What is the next step?',
    options: ['Address pseudoaddiction vs addiction', 'Discharge from practice', 'Increase opioid dose', 'Switch to fentanyl patch', 'Refer to pain clinic'],
    correctAnswer: 0,
    explanationEn: 'Pseudoaddiction: behaviors that look like addiction but are actually due to unrelieved pain. Address pain adequately. If addiction present → referral.',
    explanationZh: '假性成瘾：看起来像成瘾的行为，但实际上是由于疼痛未缓解。充分处理疼痛。如果成瘾→转诊。',
    explanationEs: 'Pseudoadicción: comportamientos que parecen adicción pero son por dolor no aliviado.'
  },
  {
    id: 692, step: 'step2', subject: 'Psychiatry',
    question: 'A 25M with social anxiety disorder. He avoids eye contact and fears embarrassment. First-line treatment?',
    options: ['CBT + SSRI (paroxetine, sertraline)', 'Benzodiazepines long-term', 'Exposure therapy only', 'Beta-blockers only', 'Group therapy'],
    correctAnswer: 0,
    explanationEn: 'Social anxiety disorder: CBT (exposure therapy) + SSRI (paroxetine, sertraline, fluvoxamine). Beta-blockers for performance-only anxiety.',
    explanationZh: '社交焦虑障碍：CBT（暴露疗法）+SSRI（帕罗西汀、舍曲林、氟伏沙明）。β阻滞剂仅用于表演型焦虑。',
    explanationEs: 'Trastorno de ansiedad social: TCC + ISRS. Betabloqueantes solo para ansiedad de actuación.'
  },
  {
    id: 693, step: 'step2', subject: 'Emergency Medicine',
    question: 'A 50M with chest pain 45 min, ST elevation in V1-V4. BP 90/60. Next step?',
    options: ['Immediate PCI (primary angioplasty)', 'IV thrombolytics', 'Heparin only', 'Aspirin only', 'Wait for cardiology'],
    correctAnswer: 0,
    explanationEn: 'STEMI <12h: primary PCI preferred. If PCI not available in 120 min → thrombolytics.',
    explanationZh: 'STEMI<12h：首选直接PCI。若120分钟内无法PCI→溶栓。',
    explanationEs: 'IMECEST <12h: ANGIOPLASTIA PRIMARIA. Si no disponible en 120 min → tromboliticos.'
  },
  {
    id: 694, step: 'step2', subject: 'Emergency Medicine',
    question: 'A 25F with bee sting, urticaria, stridor, and hypotension. Management?',
    options: ['Epinephrine 0.3mg IM immediately', 'Diphenhydramine IV', 'Cetirizine PO', 'Albuterol inhaler', 'Hydrocortisone IV'],
    correctAnswer: 0,
    explanationEn: 'Anaphylaxis: epinephrine IM (0.3-0.5mg) immediately. Adjuncts: antihistamines, steroids.',
    explanationZh: '过敏性休克：立即肾上腺素IM（0.3-0.5mg）。辅助：抗组胺药、激素。',
    explanationEs: 'Anafilaxia: adrenalina IM inmediata. Adjuntos: antihistaminicos, esteroides.'
  },
  {
    id: 695, step: 'step2', subject: 'Emergency Medicine',
    question: 'A 60M with acute onset severe chest pain, tearing, radiating to back. BP 180/110. CXR: widened mediastinum. Management?',
    options: ['CT aortogram immediately', 'Transthoracic echocardiogram', 'Aortography', 'MRI aorta', 'ESR/CRP'],
    correctAnswer: 0,
    explanationEn: 'Suspected aortic dissection: CT aortogram (gold standard). Type A → surgical repair. Type B → medical BP control.',
    explanationZh: '疑似主动脉夹层：CTA（金标准）。A型→手术修复。B型→药物血压控制。',
    explanationEs: 'Diseccion aortica: angiotomografia (oro). Tipo A → cirugia. Tipo B → control TA.'
  },
  {
    id: 696, step: 'step2', subject: 'Emergency Medicine',
    question: 'A 45F with methanol ingestion, visual blurring, and metabolic acidosis. Antidote?',
    options: ['Fomepizole (or ethanol)', 'N-acetylcysteine', 'Dimercaprol', 'Pyridoxine', 'Deferoxamine'],
    correctAnswer: 0,
    explanationEn: 'Methanol/ethylene glycol toxicity: fomepizole (alcohol dehydrogenase inhibitor) or ethanol. Then hemodialysis.',
    explanationZh: '甲醇/乙二醇中毒：甲吡唑（乙醇脱氢酶抑制剂）或乙醇。然后血液透析。',
    explanationEs: 'Toxicidad por metanol: fomepizol (inhibidor de ADH) o etanol. Luego hemodialis.'
  },
  {
    id: 697, step: 'step2', subject: 'Emergency Medicine',
    question: 'A 30M with electrical burn injury, entry wound on hand, exit on foot. What must be monitored?',
    options: ['Compartment syndrome and rhabdomyolysis', 'Only wound infection', 'Only tetanus prophylaxis', 'Only fracture', 'Only arrhythmia'],
    correctAnswer: 0,
    explanationEn: 'Electrical burns: deep tissue damage, compartment syndrome, rhabdomyolysis (CK, myoglobinuria, AKI). Cardiac monitoring.',
    explanationZh: '电烧伤：深部组织损伤、骨筋膜室综合征、横纹肌溶解（CK、肌红蛋白尿、AKI）。心电监测。',
    explanationEs: 'Quemaduras electricas: dao tisular profundo, rabdomiolisis, sindrome compartimental. Monitorizacion cardiaca.'
  },
  {
    id: 698, step: 'step2', subject: 'Emergency Medicine',
    question: 'A 40M with tension pneumothorax after MVC. BP 80/50, tracheal deviation. Immediate intervention?',
    options: ['Needle decompression (14G in 2nd ICS, MCL)', 'Chest tube only', 'Oxygen only', 'Intubation immediately', 'Positive pressure ventilation'],
    correctAnswer: 0,
    explanationEn: 'Tension pneumothorax: needle decompression (2nd ICS, MCL) → chest tube. Do NOT wait for CXR.',
    explanationZh: '张力性气胸：针减压（第2肋间隙，锁骨中线）→胸腔引流管。不要等CXR。',
    explanationEs: 'Neumotorax a tension: descompresion con aguja (2º EIC, LCM) → tubo toracico.'
  },
  {
    id: 699, step: 'step2', subject: 'Emergency Medicine',
    question: 'A 65M found down, T 39.5C, BP 70/40, petechial rash. Management?',
    options: ['IV ceftriaxone + vancomycin immediately', 'Wait for blood cultures', 'Penicillin only', ' Ampicillin only', 'Observe'],
    correctAnswer: 0,
    explanationEn: 'Suspected bacterial meningitis: empiric IV antibiotics (ceftriaxone + vancomycin) BEFORE LP if septic shock, seizures, immunocompromised.',
    explanationZh: '疑似细菌性脑膜炎：脓毒性休克、癫痫发作、免疫抑制时，LP前先给经验性IV抗生素（头孢曲松+万古霉素）。',
    explanationEs: 'Meningitis bacteriana: antibioticos IV empiricos (ceftriaxona + vancomicina) ANTES PL si choque septico.'
  },
  {
    id: 700, step: 'step2', subject: 'Emergency Medicine',
    question: 'A 25F with vaginal bleeding at 8 weeks gestation, closed OS. TVUS: intrauterine gestational sac. Management?',
    options: ['Observe (threatened abortion)', 'Immediate D&C', 'Methotrexate', 'Misoprostol', 'Bed rest only'],
    correctAnswer: 0,
    explanationEn: 'Threatened abortion: vaginal bleeding <20 weeks with closed OS, viable IUP. Manage with observation, avoid intercourse.',
    explanationZh: '先兆流产：<20周阴道出血伴宫颈口闭，宫内妊娠存活。观察，避免性交。',
    explanationEs: 'Aborto amenazado: sangrado <20 semanas, OIC cerrado, EGI viable. Observacion.'
  },
  {
    id: 701, step: 'step2', subject: 'Emergency Medicine',
    question: 'A 55M with acute stroke, last known normal 2h ago. NIHSS 12. No hemorrhage on CT. Management?',
    options: ['IV alteplase (tPA) within 4.5h', 'Aspirin only', 'Heparin only', 'Mechanical thrombectomy only', 'Observe'],
    correctAnswer: 0,
    explanationEn: 'Acute ischemic stroke: IV alteplase within 4.5h of last known well. Mechanical thrombectomy up to 24h if LVO.',
    explanationZh: '急性缺血性卒中：最后正常时间4.5h内IV阿替普酶。大血管闭塞24h内可机械取栓。',
    explanationEs: 'ACV isquemico agudo: alteplasa IV dentro de 4.5h. Trombectomia mecanica hasta 24h.'
  },
  {
    id: 702, step: 'step2', subject: 'Emergency Medicine',
    question: 'A 3yo with fever 39.5C, irritable, bulging fontanelle. LP: elevated WBC, low glucose, elevated protein. Management?',
    options: ['IV ceftriaxone + vancomycin', 'Ampicillin only', 'Cefotaxime only', 'Penicillin only', 'Chloramphenicol'],
    correctAnswer: 0,
    explanationEn: 'Bacterial meningitis in infants/children: IV ceftriaxone + vancomycin. Add ampicillin if <1 month or immunocompromised (Listeria).',
    explanationZh: '婴儿/儿童细菌性脑膜炎：IV头孢曲松+万古霉素。<1月或免疫抑制加用氨苄西林（李斯特菌）。',
    explanationEs: 'Meningitis bacteriana en ninos: ceftriaxona IV + vancomicina. Agregar ampicilina si <1 mes.'
  },
  {
    id: 703, step: 'step2', subject: 'Emergency Medicine',
    question: 'A 70F with atrial fibrillation, on warfarin. INR 5.8, no bleeding. Management?',
    options: ['Hold warfarin, give vitamin K 2.5mg PO', 'Fresh frozen plasma', 'Protamine sulfate', 'Continue warfarin', 'Add aspirin'],
    correctAnswer: 0,
    explanationEn: 'Elevated INR 4.5-10 with no bleeding: hold warfarin, give vitamin K 1-2.5mg PO. If major bleeding → 4F-PCC or FFP + vitamin K 5-10mg IV.',
    explanationZh: 'INR 4.5-10无出血：停华法林，给维生素K 1-2.5mg PO。大出血→4F-PCC或FFP+维生素K 5-10mg IV。',
    explanationEs: 'INR 4.5-10 sin sangrado: suspender warfarina, vitamina K 1-2.5mg VO.'
  },
  {
    id: 704, step: 'step2', subject: 'Emergency Medicine',
    question: 'A 20M with sickle cell disease, severe chest pain, dyspnea, and fever. CXR: new infiltrate. Dx?',
    options: ['Acute chest syndrome', 'Pneumonia', 'Pulmonary embolism', 'Atelectasis', 'Pleural effusion'],
    correctAnswer: 0,
    explanationEn: 'Acute chest syndrome: sickle cell crisis complication. Fever, chest pain, dyspnea, new pulmonary infiltrate. Treat with oxygen, antibiotics, transfusion.',
    explanationZh: '急性胸综合征：镰状细胞危象并发症。发热、胸痛、呼吸困难、新发肺浸润。治疗：氧、抗生素、输血。',
    explanationEs: 'Sindrome toracico agudo: complicacion de crisis de celulas falciformes. Tratar con oxigeno, antibioticos.'
  },
  {
    id: 705, step: 'step2', subject: 'Emergency Medicine',
    question: 'A 45M with TCA overdose, wide QRS tachycardia. Management?',
    options: ['Sodium bicarbonate', 'Lidocaine', 'Amiodarone', 'Magnesium sulfate', 'Procainamide'],
    correctAnswer: 0,
    explanationEn: 'TCA overdose: wide QRS (>100ms). Sodium bicarbonate → alkalinizes serum, binds TCA. Also prevents hypotension.',
    explanationZh: 'TCA过量：宽QRS（>100ms）。碳酸氢钠→碱化血清，结合TCA。也预防低血压。',
    explanationEs: 'Sobredosis de TCA: QRS ancho (>100ms). Bicarbonato de sodio. Alcaliniza suero.'
  },
  {
    id: 706, step: 'step2', subject: 'Emergency Medicine',
    question: 'A 30F with CO poisoning, headache, cherry-red skin. Management?',
    options: ['100% oxygen or hyperbaric oxygen', 'Naloxone', 'Flumazenil', 'Pyridoxine', 'Deferoxamine'],
    correctAnswer: 0,
    explanationEn: 'CO poisoning: 100% O2 (reduces t1/2 of COHb from 4h to 40min). Hyperbaric O2 if severe (COHb >25%, neurologic symptoms).',
    explanationZh: 'CO中毒：100% O2（COHb半衰期从4h降至40min）。严重（COHb>25%、神经症状）用高压氧。',
    explanationEs: 'Intoxicacion por CO: O2 100% (reduce vida media de COHb). O2 hiperbarico si grave.'
  },
  {
    id: 707, step: 'step2', subject: 'Emergency Medicine',
    question: 'A 55M with suspected aspiration pneumonia, poor dentition. Most likely organism?',
    options: ['Anaerobes (Bacteroides, Fusobacterium)', 'Streptococcus pneumoniae', 'Haemophilus influenzae', 'Staphylococcus aureus', 'Klebsiella pneumoniae'],
    correctAnswer: 0,
    explanationEn: 'Aspiration pneumonia: anaerobes (Bacteroides, Fusobacterium) from oropharyngeal flora. Risk: poor dentition, altered mental status, dysphagia.',
    explanationZh: '吸入性肺炎：口咽部菌群的厌氧菌（拟杆菌、梭杆菌）。风险：牙齿卫生差、意识障碍、吞咽困难。',
    explanationEs: 'Neumonia por aspiracion: anaerobios (Bacteroides). Riesgo: mala denticion, alteracion mental.'
  },
  {
    id: 708, step: 'step2', subject: 'Emergency Medicine',
    question: 'A 40F with anaphylaxis, no response to epinephrine 2 doses. Next step?',
    options: ['IV epinephrine infusion', 'Higher dose IM epinephrine', 'Nebulized epinephrine', 'Vasopressin', 'Dopamine'],
    correctAnswer: 0,
    explanationEn: 'Refractory anaphylaxis: IV epinephrine infusion (1-10 mcg/min titration). Ensure airway, continue IM epinephrine.',
    explanationZh: '难治性过敏性休克：IV肾上腺素输注（1-10 mcg/min滴定）。确保气道，继续IM肾上腺素。',
    explanationEs: 'Anafilaxia refractaria: infusion IV de adrenalina (1-10 mcg/min). ASEGURAR VIA AEREA.'
  },
  {
    id: 709, step: 'step2', subject: 'Emergency Medicine',
    question: 'A 25M with posterior hip dislocation after MVC. Neurovascular exam shows absent dorsalis pedis pulse. Management?',
    options: ['Immediate reduction + vascular evaluation', 'Immediate fasciotomy', 'Traction', 'Cast immobilization', 'CT scan only'],
    correctAnswer: 0,
    explanationEn: 'Hip dislocation with absent distal pulse: immediate closed reduction + vascular evaluation (angiography). Risk of AVN and vascular injury.',
    explanationZh: '髋关节脱位伴远端脉搏消失：立即闭合复位+血管评估（血管造影）。AVN和血管损伤风险。',
    explanationEs: 'Luxacion de cadera sin pulso distal: reduccion inmediata + evaluacion vascular. Riesgo de necrosis avascular.'
  },
  {
    id: 710, step: 'step2', subject: 'Emergency Medicine',
    question: 'A 35F with severe asthma exacerbation, silent chest, PaCO2 55. Management?',
    options: ['Intubation and mechanical ventilation', 'Continue albuterol nebulization', 'Magnesium sulfate only', 'Heliox only', 'CPAP only'],
    correctAnswer: 0,
    explanationEn: 'Life-threatening asthma: silent chest, PaCO2 normal or elevated (sign of fatigue). Intubate and mechanical ventilation.',
    explanationZh: '危及生命哮喘：寂静胸、PaCO2正常或升高（疲劳征象）。插管和机械通气。',
    explanationEs: 'Asma con riesgo vital: torax silencioso, PaCO2 normal o elevada. Intubar y ventilacion mecanica.'
  },
  {
    id: 711, step: 'step2', subject: 'Emergency Medicine',
    question: 'A 60M with acute mesenteric ischemia, atrial fibrillation. Management?',
    options: ['Urgent embolectomy or endovascular therapy', 'Laparotomy only', 'Anticoagulation only', 'Vasopressors only', 'Observation'],
    correctAnswer: 0,
    explanationEn: 'Acute mesenteric ischemia from embolism (AFib source): urgent embolectomy or endovascular therapy. High mortality.',
    explanationZh: '急性肠系膜缺血来自栓塞（房颤来源）：紧急取栓术或血管内治疗。高死亡率。',
    explanationEs: 'Isquemia mesenterica aguda por embolia (origen FA): embolectomia urgente. Alta mortalidad.'
  },
  {
    id: 712, step: 'step3', subject: 'Primary Care',
    question: 'A 45F for routine health maintenance. No comorbidities. Recommended screening?',
    options: ['Lipid panel every 5 years', 'Mammogram annually', 'Colonoscopy annually', 'Pap smear annually', 'Bone density scan'],
    correctAnswer: 0,
    explanationEn: 'Women 40-75: lipid panel every 5 years (USPSTF). Mammogram women 50-74 every 2 years. Colonoscopy 45-75 every 10 years.',
    explanationZh: '女性40-75岁：血脂面板每5年（USPSTF）。 mammogram 50-74岁每2年。结肠镜45-75岁每10年。',
    explanationEs: 'Mujeres 40-75: perfil lipidico cada 5 anos. Mamografia 50-74 cada 2 anos. Colonoscopia cada 10 anos.'
  },
  {
    id: 713, step: 'step3', subject: 'Primary Care',
    question: 'A 55M with T2DM, HbA1c 8.5%. On metformin. Next step in management?',
    options: ['Add SGLT2 inhibitor or GLP-1 RA', 'Add insulin immediately', 'Add sulfonylurea', 'Add TZD', 'Observe'],
    correctAnswer: 0,
    explanationEn: 'T2DM with HbA1c >7% on metformin: add SGLT2i (cardiovascular/renal benefit) or GLP-1 RA (weight loss, CV benefit).',
    explanationZh: 'T2DM伴HbA1c>7%使用二甲双胍：加用SGLT2i（心血管/肾脏获益）或GLP-1 RA（减重、CV获益）。',
    explanationEs: 'DM2 con HbA1c >7% con metformina: agregar iSGLT2 o agonista GLP-1.'
  },
  {
    id: 714, step: 'step3', subject: 'Primary Care',
    question: 'A 65M for pneumococcal vaccination. He received PPSV23 at age 60. What to give now?',
    options: ['PCV20 (or PCV15 followed by PPSV23)', 'PPSV23 again', 'PCV13 only', 'No vaccination needed', 'MMR booster'],
    correctAnswer: 0,
    explanationEn: 'Pneumococcal vaccine: if PPSV23 given before 65, give PCV20 (or PCV15 then PPSV23 ≥1 year later) at age 65.',
    explanationZh: '肺炎球菌疫苗：如果65岁前给过PPSV23，65岁时给PCV20（或PCV15后≥1年给PPSV23）。',
    explanationEs: 'Vacuna neumococica: si PPSV23 antes de 65, dar PCV20 a los 65 (o PCV15 luego PPSV23).'
  },
  {
    id: 715, step: 'step3', subject: 'Primary Care',
    question: 'A 50F with family history of breast cancer (mother, age 45). Recommended screening?',
    options: ['Contrast-enhanced MRI annually + mammogram', 'Mammogram only', 'CBE only', 'Genetic testing first', 'Ultrasound only'],
    correctAnswer: 0,
    explanationEn: 'High-risk for breast cancer (family history premenopausal): annual mammogram + contrast-enhanced MRI starting at age 30-40.',
    explanationZh: '乳腺癌高风险（绝经前家族史）：30-40岁开始每年 mammogram+对比增强MRI。',
    explanationEs: 'Alto riesgo de cancer de mama (historia familiar premenopausica): mamografia + RM anual.'
  },
  {
    id: 716, step: 'step3', subject: 'Primary Care',
    question: 'A 40M with obesity (BMI 32), no comorbidities. Recommended weight loss approach?',
    options: ['Lifestyle modification (diet + exercise)', 'Bariatric surgery', 'Orlistat', 'Phentermine/topiramate', 'GLP-1 agonist'],
    correctAnswer: 0,
    explanationEn: 'Obesity BMI 30-35: first-line lifestyle modification (diet + exercise). If fails → consider medications (GLP-1, orlistat). BMI ≥40 or ≥35 with comorbidities → bariatric surgery.',
    explanationZh: '肥胖BMI 30-35：一线生活方式干预（饮食+运动）。失败→考虑药物（GLP-1、奥利司他）。BMI≥40或≥35伴合并症→减肥手术。',
    explanationEs: 'Obesidad IMC 30-35: modificacion de estilo de vida. Si falla → medicamentos. IMC ≥40 → cirugia bariatrica.'
  },
  {
    id: 717, step: 'step3', subject: 'Primary Care',
    question: 'A 60F with osteoporosis (T-score -2.8), no prior fractures. First-line treatment?',
    options: ['Bisphosphonates (alendronate)', 'Teriparatide', 'Denosumab', 'Calcitonin', 'Calcium + vitamin D only'],
    correctAnswer: 0,
    explanationEn: 'First-line for osteoporosis: bisphosphonates (alendronate). Take with water, remain upright 30 min.',
    explanationZh: '骨质疏松一线：双膦酸盐（阿仑膦酸钠）。空腹用水送服，服药后直立30分钟。',
    explanationEs: 'Primera linea para osteoporosis: bifosfonatos (alendronato). Tomar con agua, permanecer erguida 30 min.'
  },
  {
    id: 718, step: 'step3', subject: 'Primary Care',
    question: 'A 55M with hypertension, T2DM, CKD (eGFR 42). Target BP?',
    options: ['<130/80 mmHg', '<140/90 mmHg', '<150/90 mmHg', '<120/80 mmHg', '<135/85 mmHg'],
    correctAnswer: 0,
    explanationEn: 'HTN with T2DM/CKD: target BP <130/80 mmHg (ACC/AHA 2022). If ≥65 years: <130/80 also (SBP <130).',
    explanationZh: '高血压伴T2DM/CKD：目标BP<130/80 mmHg（ACC/AHA 2022）。≥65岁：<130/80（SBP<130）。',
    explanationEs: 'HTA con DM2/ERC: objetivo PA <130/80 mmHg. Si ≥65 anos: tambien <130/80.'
  },
  {
    id: 719, step: 'step3', subject: 'Primary Care',
    question: 'A 45F with major depressive disorder, PHQ-9 score 12. First-line treatment?',
    options: ['SSRI (sertraline, escitalopram) + psychotherapy', 'TCA (amitriptyline)', 'MAOI', 'Benzodiazepine long-term', 'ECT'],
    correctAnswer: 0,
    explanationEn: 'MDD first-line: SSRI (sertraline, escitalopram) + psychotherapy (CBT). TCA if SSRI fails.',
    explanationZh: 'MDD一线：SSRI（舍曲林、艾司西酞普兰）+心理治疗（CBT）。SSRI失败用TCA。',
    explanationEs: 'TDM primera linea: ISRS (sertralina, escitalopram) + psicoterapia (TCC).'
  },
  {
    id: 720, step: 'step3', subject: 'Primary Care',
    question: 'A 70M with BPH, IPSS 20, PSA 2.5. Management?',
    options: ['Alpha-blocker (tamsulosin)', '5-alpha-reductase inhibitor alone', 'Antibiotics', 'TURP immediately', 'Observe'],
    correctAnswer: 0,
    explanationEn: 'BPH moderate symptoms (IPSS 8-19): alpha-blocker (tamsulosin). Severe (IPSS ≥20) or enlarged prostate: 5-ARI (finasteride). Combination if severe.',
    explanationZh: 'BPH中度症状（IPSS 8-19）：α阻滞剂（坦索罗辛）。重度（IPSS≥20）或前列腺增大：5-ARI（非那雄胺）。重度可联合。',
    explanationEs: 'HBP sintomas moderados: alfa-bloqueante. Graves: 5-ARI. Combinacion si graves.'
  },
  {
    id: 721, step: 'step3', subject: 'Primary Care',
    question: 'A 50F with dry eyes, dry mouth, and difficulty swallowing. Anti-SSA (Ro) positive. Dx?',
    options: ['Sjogren syndrome', 'SLE', 'Rheumatoid arthritis', 'Scleroderma', 'Dermatomyositis'],
    correctAnswer: 0,
    explanationEn: 'Sjogren syndrome: dry eyes (keratoconjunctivitis sicca), dry mouth (xerostomia). Anti-SSA (Ro), anti-SSB (La). Associated with extraglandular manifestations.',
    explanationZh: '干燥综合征：干眼（角膜结膜炎干燥型）、口干（口腔干燥）。抗SSA（Ro）、抗SSB（La）。伴腺外表现。',
    explanationEs: 'Sindrome de Sjogren: ojos secos, boca seca. Anti-SSA (Ro). Manifestaciones extraglandulares.'
  },
  {
    id: 722, step: 'step3', subject: 'Primary Care',
    question: 'A 60M with chronic low back pain, no red flags. First-line management?',
    options: ['NSAIDs + physical therapy', 'Opioids', 'Muscle relaxants long-term', 'Surgery', 'Bed rest'],
    correctAnswer: 0,
    explanationEn: 'Chronic low back pain without red flags: first-line NSAIDs + physical therapy. Avoid opioids, muscle relaxants >1 week.',
    explanationZh: '慢性腰痛无红旗征：一线NSAIDs+物理治疗。避免阿片类、肌肉松弛剂>1周。',
    explanationEs: 'Dolor lumbar cronica sin banderas rojas: AINEs + fisioterapia. Evitar opioides.'
  },
  {
    id: 723, step: 'step3', subject: 'Primary Care',
    question: 'A 40F with recurrent headaches, throbbing, 2-3 episodes/month. Prophylaxis?',
    options: ['Beta-blocker (propranolol) or anticonvulsant', 'Triptan daily', 'Ergotamine daily', 'Opioids', 'Antibiotics'],
    correctAnswer: 0,
    explanationEn: 'Migraine prophylaxis: beta-blockers (propranolol, metoprolol), anticonvulsants (topiramate, valproate), CGRP mAbs. Indicated if ≥4 episodes/month.',
    explanationZh: '偏头痛预防：β阻滞剂（普萘洛尔、美托洛尔）、抗惊厥药（托吡酯、丙戊酸盐）、CGRP单抗。适应≥4次发作/月。',
    explanationEs: 'Profilaxis de migrana: beta-bloqueantes, anticonvulsivantes. Indicado si ≥4 episodios/mes.'
  },
  {
    id: 724, step: 'step3', subject: 'Primary Care',
    question: 'A 55M with metabolic syndrome (obesity, HTN, T2DM, low HDL). Statin eligibility?',
    options: ['High-intensity statin (atorvastatin 40-80mg)', 'Low-intensity statin', 'No statin needed', 'Fibrate', 'Ezetimibe only'],
    correctAnswer: 0,
    explanationEn: 'Diabetes 40-75 years: high-intensity statin (atorvastatin 40-80mg). If 10-year ASCVD risk ≥7.5% → moderate-high intensity.',
    explanationZh: '糖尿病40-75岁：高强度他汀（阿托伐他汀40-80mg）。10年ASCVD风险≥7.5%→中高强度。',
    explanationEs: 'Diabetes 40-75 anos: estatina de alta intensidad (atorvastatina 40-80mg).'
  },
  {
    id: 725, step: 'step3', subject: 'Primary Care',
    question: 'A 65F with recurrent UTIs (3 episodes/year). Preventive strategy?',
    options: ['Postcoital antibiotic or daily antibiotic prophylaxis', 'Cranberry supplement only', 'Estrogen cream only', 'Increase fluid intake only', 'Surgery'],
    correctAnswer: 0,
    explanationEn: 'Recurrent UTIs: postcoital antibiotic (if associated with intercourse) or daily antibiotic prophylaxis (TMP-SMX, nitrofurantoin). Menopause → vaginal estrogen.',
    explanationZh: '复发UTI：性交后抗生素（如与性交相关）或每日抗生素预防（TMP-SMX、呋喃妥因）。绝经→阴道雌激素。',
    explanationEs: 'ITU recurrentes: antibiotico postcoital o profilaxis diaria. Menopausia → estrogeno vaginal.'
  },
  {
    id: 726, step: 'step3', subject: 'Primary Care',
    question: 'A 50M with dyslipidemia, Adjunct to lifestyle?',
    options: ['Statin therapy', 'Fibrates', 'Omega-3 supplements', 'Plant sterols', 'Red yeast rice'],
    correctAnswer: 0,
    explanationEn: 'Dyslipidemia first-line: statin (atorvastatin, rosuvastatin). Lifestyle modification (diet, exercise) concurrent.',
    explanationZh: '血脂异常一线：他汀（阿托伐他汀、瑞舒伐他汀）。同时生活方式干预（饮食、运动）。',
    explanationEs: 'Dislipidemia primera linea: estatina. Modificacion de estilo de vida concomitante.'
  },
  {
    id: 727, step: 'step3', subject: 'Ethics',
    question: 'A 30F refuses blood transfusion due to religious beliefs, needs emergency surgery. Surgeon should?',
    options: ['Respect autonomy, seek alternative treatments', 'Transfuse against wishes', 'Get court order', 'Wait for family', 'Proceed with surgery without transfusion'],
    correctAnswer: 0,
    explanationEn: 'Competent patient refusing treatment: respect autonomy. Seek acceptable alternatives (volume expanders, oxygen-carrying solutions).',
    explanationZh: '有决策能力患者拒绝治疗：尊重自主权。寻求可接受的替代方案（容量扩张剂、携氧溶液）。',
    explanationEs: 'Paciente competente rechaza tratamiento: respetar autonomia. Buscar alternativas.'
  },
  {
    id: 728, step: 'step3', subject: 'Ethics',
    question: 'A 25F is brought by police after suicide attempt. She refuses evaluation. What to do?',
    options: ['Assess decision-making capacity first', 'Treat empirically', 'Call psychiatry for involuntary hold', 'Discharge', 'Observe'],
    correctAnswer: 0,
    explanationEn: 'Suspected suicide attempt: assess decision-making capacity. If incompetent → treat. If competent and no immediate danger → cannot force evaluation.',
    explanationZh: '疑似自杀企图：评估决策能力。无决策能力→治疗。有决策能力且无即时危险→不能强制评估。',
    explanationEs: 'Intento de suicidio: evaluar capacidad de decisión. Si incompetente → tratar.'
  },
  {
    id: 729, step: 'step3', subject: 'Ethics',
    question: 'A physician discovers a colleague has been practicing while impaired (alcohol). Appropriate action?',
    options: ['Report to state medical board / impairment program', 'Confront colleague privately only', 'Ignore', 'Tell patients', 'Report to police'],
    correctAnswer: 0,
    explanationEn: 'Impaired physician: report to state medical board or physician health program. Ensures patient safety while providing pathway to treatment.',
    explanationZh: '受损医师：报告州医学委员会或医师健康计划。确保患者安全，同时提供治疗途径。',
    explanationEs: 'Medico impedido: reportar a junta medica estatal. Asegura seguridad del paciente.'
  },
  {
    id: 730, step: 'step3', subject: 'Ethics',
    question: 'A 45F wants her genetic test results kept from her family (hereditary cancer syndrome). Physician should?',
    options: ['Keep confidentiality, encourage disclosure', 'Tell family directly', 'Tell at-risk relatives', 'Ignore', 'Document only'],
    correctAnswer: 0,
    explanationEn: 'Genetic test results: patient confidentiality paramount. Encourage patient to disclose to at-risk relatives. Only breach if imminent harm and patient refuses.',
    explanationZh: '基因检测结果：患者保密性至关重要。鼓励患者告知风险亲属。仅在 imminent harm且患者拒绝时突破保密。',
    explanationEs: 'Resultados de pruebas geneticas: confidencialidad del paciente. Alentar a informar a familiares en riesgo.'
  },
  {
    id: 731, step: 'step3', subject: 'Ethics',
    question: 'A medical student posts a photo of an interesting XR on social media (no identifiers). Ethical issue?',
    options: ['Yes, patient confidentiality breach even without identifiers', 'No, no identifiers visible', 'Yes, but only if patient name shown', 'No, educational purpose', 'Yes, but only if posted by physician'],
    correctAnswer: 0,
    explanationEn: 'Even without identifiers, posting XR/imaging may breach confidentiality if recognizable by others. Always obtain patient consent.',
    explanationZh: '即使无标识符，发布XR/影像如果他人可辨认也可能违反保密。始终获得患者同意。',
    explanationEs: 'Incluso sin identificadores, publicar imagenes puede violar confidencialidad. Siempre obtener consentimiento.'
  },
  {
    id: 732, step: 'step3', subject: 'Ethics',
    question: 'A 70M with advance directive (DNR), now with pneumonia. Family demands full treatment. Physician should?',
    options: ['Follow advance directive (DNR)', 'Follow family wishes', 'Get ethics committee', 'Transfer care', 'Wait for court'],
    correctAnswer: 0,
    explanationEn: 'Advance directive (DNR): legally binding. If patient lacks capacity, surrogate decision-maker should follow patient wishes. Family disagreement → ethics committee.',
    explanationZh: '预嘱（DNR）：法律约束力。如果患者无决策能力，代理人应遵循患者意愿。家庭分歧→伦理委员会。',
    explanationEs: 'Directiva anticipada (DNR): juridicamente vinculante. Si paciente sin capacidad, representante debe seguir deseos del paciente.'
  },
  {
    id: 733, step: 'step3', subject: 'Ethics',
    question: 'A physician receives a gift ($100) from grateful patient. Acceptable?',
    options: ['No, exceeds acceptable value', 'Yes, minor token of appreciation', 'Yes, if patient insists', 'No, but only if cash', 'Yes, if <$500'],
    correctAnswer: 0,
    explanationEn: 'Gifts from patients: should be of nominal value (<$50), not influence clinical decisions. $100 exceeds acceptable threshold.',
    explanationZh: '患者礼物：应具有名义价值（<$50），不影响临床决策。$100超出可接受阈值。',
    explanationEs: 'Regalos de pacientes: valor nominal (<$50). $100 excede el limite aceptable.'
  },
  {
    id: 734, step: 'step3', subject: 'Ethics',
    question: 'A 16yo wants confidential STD testing without parental consent. Physician should?',
    options: ['Provide confidential testing (mature minor doctrine)', 'Notify parents', 'Refuse testing', 'Require parental consent', 'Call police'],
    correctAnswer: 0,
    explanationEn: 'Mature minor doctrine: adolescents capable of understanding can consent to STD testing/treatment, contraceptive care without parental consent.',
    explanationZh: '成熟未成年人原则：有能力理解的青少年可同意STD检测/治疗、避孕护理，无需父母同意。',
    explanationEs: 'Doctrina del menor maduro: adolescentes capaces de entender pueden consentir pruebas de ETS sin consentimiento parental.'
  },
  {
    id: 735, step: 'step3', subject: 'Ethics',
    question: 'A physician advertises "highest quality care, 100% satisfaction guaranteed." Ethical issue?',
    options: ['Yes, false advertising', 'No, free speech', 'Yes, but only if physician is specialist', 'No, if evidence-based', 'Yes, but only if quantitative'],
    correctAnswer: 0,
    explanationEn: 'Medical advertising: must be truthful, not misleading. "100% satisfaction guaranteed" is misleading/unverifiable. Also violates professionalism.',
    explanationZh: '医疗广告：必须真实，不误导。"100%满意度保证"是误导/无法验证。也违反专业性。',
    explanationEs: 'Publicidad medica: debe ser veridica. "100% satisfaccion garantizada" es enganosa. Viola profesionalismo.'
  },
  {
    id: 736, step: 'step3', subject: 'Patient Safety',
    question: 'A nurse administers medication to wrong patient (same name). Root cause analysis should focus on?',
    options: ['System factors, not individual blame', 'Punishing the nurse', 'Ignoring the event', 'Documenting only', 'Reporting to board'],
    correctAnswer: 0,
    explanationEn: 'Root cause analysis (RCA): focus on system factors (processes, checklists, barcoding) not individual blame. Just culture: report errors without fear.',
    explanationZh: '根本原因分析（RCA）：关注系统因素（流程、检查清单、条形码），而非个人责备。公正文化：无恐惧地报告错误。',
    explanationEs: 'Analisis de causa raiz: enfocarse en factores del sistema, no culpar al individuo. Cultura justa.'
  },
  {
    id: 737, step: 'step3', subject: 'Patient Safety',
    question: 'A 55M undergoes surgery, wrong site (right knee instead of left). This is classified as?',
    options: ['Never event (sentinel event)', 'Adverse event', 'Near miss', 'Complication', 'Expected outcome'],
    correctAnswer: 0,
    explanationEn: 'Wrong-site surgery: never event (sentinel event). Prevent with universal protocol (sign-in, time-out, sign-out).',
    explanationZh: '手术部位错误：从来不发生事件（哨点事件）。用通用协议预防（签入、暂停核对、签出）。',
    explanationEs: 'Cirugia en sitio equivocado: evento centinela. Prevenir con protocolo universal.'
  },
  {
    id: 738, step: 'step3', subject: 'Patient Safety',
    question: 'A 40F develops hospital-acquired pneumonia after mechanical ventilation. Prevention bundle includes?',
    options: ['Elevate head of bed 30-45 degrees, oral care, wean ventilator daily', 'Antibiotics prophylaxis', 'Steroids', 'Diuretics', 'Blood transfusion'],
    correctAnswer: 0,
    explanationEn: 'VAP prevention bundle: elevate HOB 30-45°, oral chlorhexidine, daily sedation vacation + wean trial, deep vein thrombosis prophylaxis.',
    explanationZh: 'VAP预防集束化措施：床头抬高30-45°、口腔氯己定、每日镇静假期+脱机试验、深静脉血栓预防。',
    explanationEs: 'Paquete de prevencion de NVAP: elevar cabecera 30-45°, clorhexidina oral, vacaciones de sedacion.'
  },
  {
    id: 739, step: 'step3', subject: 'Patient Safety',
    question: 'A 65M with fall in hospital, fractured hip. Prevention strategy?',
    options: ['Fall risk assessment + environmental modifications', 'Restraints', 'Sedation', 'Opioids', 'Isolation'],
    correctAnswer: 0,
    explanationEn: 'Hospital fall prevention: fall risk assessment (Morse), bed alarms, assistive devices, environmental modifications, scheduled toileting.',
    explanationZh: '医院跌倒预防：跌倒风险评估（Morse）、床边报警器、辅助设备、环境改造、定时如厕。',
    explanationEs: 'Prevencion de caidas: evaluacion de riesgo, alarmas de cama, modificaciones ambientales.'
  },
  {
    id: 740, step: 'step3', subject: 'Patient Safety',
    question: 'A 50F with medication error (10x overdose of insulin). Disclosure to patient should include?',
    options: ['Apology, explanation, plan to prevent recurrence', 'No disclosure necessary', 'Blame system', 'Minimize error', 'Ignore'],
    correctAnswer: 0,
    explanationEn: 'Medication error disclosure: apologize, explain what happened, plan to prevent recurrence. Open disclosure improves trust, may reduce litigation.',
    explanationZh: '用药错误披露：道歉、解释发生的情况、预防复发的计划。公开披露提高信任，可能减少诉讼。',
    explanationEs: 'Divulgacion de error de medicacion: disculparse, explicar, plan para prevenir recurrencia.'
  },
  {
    id: 741, step: 'step2', subject: 'Infectious Disease',
    question: 'A 30M with HIV (CD4 180), 2-week history of fever, weight loss, lymphadenopathy. Blood culture: Mycobacterium avium complex. Management?',
    options: ['Clarithromycin + ethambutol', 'Isoniazid + rifampin', 'Ciprofloxacin', 'Acyclovir', 'Ceftriaxone'],
    correctAnswer: 0,
    explanationEn: 'MAC in HIV (CD4 <50): clarithromycin + ethambutol. Add rifabutin or amikacin if severe.',
    explanationZh: 'HIV中的MAC（CD4<50）：克拉霉素+乙胺丁醇。重症加利福布丁或阿米卡星。',
    explanationEs: 'MAC en VIH (CD4 <50): claritromicina + etambutol.'
  },
  {
    id: 742, step: 'step2', subject: 'Infectious Disease',
    question: 'A 55M with cirrhosis and ascites, fever 38.5C. WBC in ascitic fluid 800 with 80% PMNs. Dx and management?',
    options: ['SBP → ceftriaxone IV', 'SBP → ciprofloxacin PO', 'Secondary peritonitis → surgery', 'Cholecystitis → antibiotics', 'Hepatitis → supportive'],
    correctAnswer: 0,
    explanationEn: 'SBP: ascitic PMN >250 cells/mm3. Empiric therapy: ceftriaxone or cefotaxime IV. Consider secondary peritonitis if cultures show multiple organisms.',
    explanationZh: 'SBP：腹水PMN>250 cells/mm3。经验治疗：头孢曲松或头孢噻肟IV。培养示多种菌→考虑继发性腹膜炎。',
    explanationEs: 'PPS: PMN en ascitis >250. Tratamiento empirico: ceftriaxona IV.'
  },
  {
    id: 743, step: 'step2', subject: 'Infectious Disease',
    question: 'A 20M with fever, headache, and petechial rash. Nuchal rigidity. CSF: elevated WBC, low glucose. Gram stain: Gram-negative diplococci. Organism?',
    options: ['Neisseria meningitidis', 'Streptococcus pneumoniae', 'Haemophilus influenzae', 'Listeria monocytogenes', 'E. coli'],
    correctAnswer: 0,
    explanationEn: 'Neisseria meningitidis: Gram-negative diplococci, petechial rash, young adults. Rifampin or ciprofloxacin prophylaxis for close contacts.',
    explanationZh: '脑膜炎奈瑟菌：革兰阴性双球菌，瘀点疹，青少年。密接者利福平或环丙沙星预防。',
    explanationEs: 'Neisseria meningitidis: diplococos gramnegativos, exantema petequial. Profilaxis con rifampicina.'
  },
  {
    id: 744, step: 'step2', subject: 'Infectious Disease',
    question: 'A 75M with COPD, fever, and cough. CXR: left lower lobe consolidation. Urine antigen S. pneumoniae positive. Management?',
    options: ['Ceftriaxone or levofloxacin', 'Amoxicillin only', 'Ceftriaxone + vancomycin', 'Metronidazole only', 'Azithromycin only'],
    correctAnswer: 0,
    explanationEn: 'Community-acquired pneumonia: S. pneumoniae urine antigen positive. Treat with ceftriaxone + azithromycin, or levofloxacin monotherapy.',
    explanationZh: '社区获得性肺炎：肺炎链球菌尿抗原阳性。头孢曲松+阿奇霉素，或左氧氟沙星单药。',
    explanationEs: 'NAC: antígeno urinario de S. pneumoniae positivo. Ceftriaxona + azitromicina o levofloxacino.'
  },
  {
    id: 745, step: 'step2', subject: 'Infectious Disease',
    question: 'A 65M on chemotherapy, neutropenic (ANC 200), fever 39C. Management?',
    options: ['Cefepime or piperacillin-tazobactam immediately', 'Wait for blood cultures', 'Vancomycin only', 'Fluconazole only', 'Metronidazole only'],
    correctAnswer: 0,
    explanationEn: 'Febrile neutropenia: empiric IV broad-spectrum antibiotics immediately (cefepime, piperacillin-tazobactam, or meropenem). Add vancomycin if skin infection suspected.',
    explanationZh: '中性粒细胞减少伴发热：立即经验性IV广谱抗生素（头孢吡肟、哌拉西林他唑巴坦或美罗培南）。疑皮肤感染加万古霉素。',
    explanationEs: 'Neutropenia febril: antibioticos IV de amplio espectro inmediatos (cefepime, piperacilina-tazobactam).'
  },
  {
    id: 746, step: 'step2', subject: 'Infectious Disease',
    question: 'A 40M with chronic HCV (genotype 1a). Recommended treatment?',
    options: ['Glecaprevir-pibrentasvir or sofosbuvir-velpatasvir', 'Interferon + ribavirin', 'Ribavirin only', 'Pegylated interferon only', 'Observe'],
    correctAnswer: 0,
    explanationEn: 'HCV: DAA therapy (glecaprevir-pibrentasvir or sofosbuvir-velpatasvir) for all genotypes. >95% SVR. No need for interferon.',
    explanationZh: 'HCV：DAA治疗（格卡瑞韦派伦他韦或索磷布韦维帕他韦）适用所有基因型。>95%SVR。无需干扰素。',
    explanationEs: 'VHC: AAD (glecaprevir-pibrentasvir o sofosbuvir-velpatasvir) para todos los genotipos. >95% RVS.'
  },
  {
    id: 747, step: 'step2', subject: 'Infectious Disease',
    question: 'A 30F with painful genital ulcers and inguinal lymphadenopathy in tropics. Dx?',
    options: ['Chancroid (Haemophilus ducreyi)', 'Syphilis', 'HSV', 'LGV', 'Granuloma inguinale'],
    correctAnswer: 0,
    explanationEn: 'Chancroid: painful genital ulcers + painful inguinal lymphadenopathy (bubo). Haemophilus ducreyi. Treat with azithromycin or ceftriaxone.',
    explanationZh: '软下疳：痛性生殖器溃疡+痛性腹股沟淋巴结炎（横痃）。杜克雷嗜血杆菌。阿奇霉素或头孢曲松治疗。',
    explanationEs: 'Chancroide: ulceras genitales dolorosas + adenopatia inguinal dolorosa (bubo). Azitromicina o ceftriaxona.'
  },
  {
    id: 748, step: 'step2', subject: 'Infectious Disease',
    question: 'A 5yo with ring-shaped rash, fever, arthritis. Dx?',
    options: ['Lyme disease (Borrelia burgdorferi)', 'Rocky Mountain Spotted Fever', 'Ehrlichiosis', 'Lupus', 'Juvenile idiopathic arthritis'],
    correctAnswer: 0,
    explanationEn: 'Lyme disease: erythema migrans (bullseye rash), arthritis, fever. Early localized disease: doxycycline or amoxicillin.',
    explanationZh: '莱姆病：游走性红斑（靶形皮疹）、关节炎、发热。早期局限期：多西环素或阿莫西林。',
    explanationEs: 'Enfermedad de Lyme: eritema migrans (lesion en diana), artritis. Tratamiento: doxiciclina o amoxicilina.'
  },
  {
    id: 749, step: 'step2', subject: 'Infectious Disease',
    question: 'A 50M with untreated HIV (CD4 100) presents with progressive cognitive decline, memory loss, and motor dysfunction. Dx?',
    options: ['HIV-associated neurocognitive disorder (HAND)', 'CJD', 'Alzheimer disease', 'Cryptococcal meningitis', 'Toxoplasmosis'],
    correctAnswer: 0,
    explanationEn: 'HAND: cognitive decline, memory loss, motor dysfunction in advanced HIV. CD4 <200. MRI: cortical atrophy, white matter changes.',
    explanationZh: 'HAND：进展性认知下降、记忆丧失、运动功能障碍，见于HIV晚期。CD4<200。MRI：皮质萎缩、白质改变。',
    explanationEs: 'HAND: deterioro cognitivo, perdida de memoria, disfuncion motora en VIH avanzado. CD4 <200.'
  },
  {
    id: 750, step: 'step2', subject: 'Infectious Disease',
    question: 'A 25F with rusty sputum, fever, and rigors. CXR: right upper lobe consolidation. Dx?',
    options: ['Streptococcus pneumoniae pneumonia', 'Mycoplasma pneumoniae', 'Chlamydia pneumoniae', 'Klebsiella pneumoniae', 'Pneumocystis jirovecii'],
    correctAnswer: 0,
    explanationEn: 'Pneumococcal pneumonia: rusty sputum, shaking rigors, lobar consolidation, leukocytosis. Risk: splenectomy, sickle cell, HIV.',
    explanationZh: '肺炎链球菌肺炎：铁锈色痰、寒战、大叶性实变、白细胞增多。风险：脾切除、镰状细胞、HIV。',
    explanationEs: 'Neumonia neumococica: esputo herrumbroso, escalofrios, consolidacion lobar. Riesgo: esplenectomia.'
  },
  {
    id: 751, step: 'step2', subject: 'Infectious Disease',
    question: 'A 60M on TNF-alpha inhibitor (adalimumab) for RA. Latent TB screening positive. Management?',
    options: ['Isoniazid + B6 for 9 months', 'Start RIPE immediately', 'No treatment needed', 'Stop adalimumab only', 'Empiric TB treatment'],
    correctAnswer: 0,
    explanationEn: 'LTBI before TNF-alpha inhibitor: treat with INH + B6 for 9 months. Start TNF inhibitor after 1-2 months of LTBI therapy.',
    explanationZh: 'TNF-α抑制剂前LTBI：INH+B6治疗9个月。LTBI治疗1-2个月后开始TNF抑制剂。',
    explanationEs: 'TBL antes de anti-TNF: INH + B6 por 9 meses. Iniciar anti-TNF despues de 1-2 meses de terapia de TBL.'
  },
  {
    id: 752, step: 'step2', subject: 'Infectious Disease',
    question: 'A 45M with travel to sub-Saharan Africa, fever, chills. Blood smear: ring forms in RBCs. Dx?',
    options: ['Plasmodium falciparum malaria', 'Babesia', 'Trypanosoma brucei', 'Leishmania', 'Toxoplasma'],
    correctAnswer: 0,
    explanationEn: 'Malaria (P. falciparum): ring forms, cerebral malaria risk, severe anemia. Blood smear is gold standard for diagnosis.',
    explanationZh: '恶性疟：环状体，脑疟风险，严重贫血。血涂片是诊断金标准。',
    explanationEs: 'Malaria por P. falciparum: formas en anillo, riesgo de malaria cerebral. Frotis sanguineo es el oro.'
  },
  {
    id: 753, step: 'step2', subject: 'Infectious Disease',
    question: 'A 60F on long-term IV antibiotics via central line. Blood culture: Candida albicans. Management?',
    options: ['Remove central line + echinocandin (caspofungin)', 'Continue antibiotics', 'Fluconazole only', 'Observe', 'Amphotericin B only'],
    correctAnswer: 0,
    explanationEn: 'Candidemia: remove central line + echinocandin (caspofungin, micafungin) or fluconazole if susceptible. Ophthalmologic exam for endophthalmitis.',
    explanationZh: '念珠菌血症：拔除中心静脉导管+棘白菌素（卡泊芬净、米卡芬净）或敏感则氟康唑。眼科检查排除眼内炎。',
    explanationEs: 'Candidemia: retirar linea central + equinocandina (caspofungina). Examen oftalmologico para endoftalmitis.'
  },
  {
    id: 754, step: 'step2', subject: 'Infectious Disease',
    question: 'A 65M with Chagas cardiomyopathy, RBBB, and CHF. Origin of infection?',
    options: ['Triatomine bug (South America)', 'Mosquito', 'Tick', 'Sand fly', 'Tsetse fly'],
    correctAnswer: 0,
    explanationEn: 'Chagas disease: Trypanosoma cruzi via triatomine bug (kissing bug). Chronic phase: cardiomyopathy (RBBB), megaesophagus/megacolon.',
    explanationZh: 'Chagas病：锥蝽（接吻虫）传播克氏锥虫。慢性期：心肌病（RBBB）、巨食管/巨结肠。',
    explanationEs: 'Enfermedad de Chagas: Trypanosoma cruzi por chinche besucona. Fase cronica: miocardiopatia (BRD).'
  },
  {
    id: 755, step: 'step2', subject: 'Infectious Disease',
    question: 'A 55F with fever, joint pain, and migratory polyarthritis 2 weeks after travel. Dx?',
    options: ['Acute rheumatic fever (post-GAS)', 'Lyme disease', 'Disseminated gonococcal infection', 'Rheumatoid arthritis', 'Viral arthritis'],
    correctAnswer: 0,
    explanationEn: 'Acute rheumatic fever: migratory polyarthritis, carditis, chorea, subcutaneous nodules, erythema marginatum. 2-3 weeks after GAS pharyngitis.',
    explanationZh: '急性风湿热：游走性多关节炎、心脏炎、舞蹈病、皮下结节、边缘性红斑。GAS咽炎后2-3周。',
    explanationEs: 'Fiebre reumatica aguda: poliartritis migratoria, carditis, corea. 2-3 semanas despues de faringitis por EGA.'
  },
  {
    id: 756, step: 'step2', subject: 'Neurology',
    question: 'A 70F with progressive tremor at rest, rigidity, and bradykinesia. Cogwheel rigidity on exam. Dx?',
    options: ['Parkinson disease', 'Essential tremor', 'Multiple system atrophy', 'Progressive supranuclear palsy', 'Drug-induced parkinsonism'],
    correctAnswer: 0,
    explanationEn: 'Parkinson disease: resting tremor, rigidity (cogwheel), bradykinesia, postural instability. Loss of dopaminergic neurons in substantia nigra.',
    explanationZh: '帕金森病：静止性震颤、强直（齿轮样）、运动迟缓、姿势不稳。黑质多巴胺能神经元丢失。',
    explanationEs: 'Enfermedad de Parkinson: temblor en reposo, rigidez (rueda dentada), bradicinesia. Perdida de neuronas dopaminergicas.'
  },
  {
    id: 757, step: 'step2', subject: 'Neurology',
    question: 'A 25F with first unprovoked generalized tonic-clonic seizure. Neurologic exam normal. CT and EEG normal. Management?',
    options: ['Observation only (no AED)', 'Start phenytoin immediately', 'Start levetiracetam immediately', 'Start carbamazepine', 'Valproate'],
    correctAnswer: 0,
    explanationEn: 'First unprovoked seizure: no AED unless risk of recurrence (abnormal EEG, imaging, neuro deficit). Observe and counsel on driving/exertion.',
    explanationZh: '首次无诱因癫痫发作：除非复发风险（EEG异常、影像学异常、神经功能缺陷），不启动AED。观察并告知驾驶/运动注意事项。',
    explanationEs: 'Primera crisis no provocada: sin FAE a menos que riesgo de recurrencia. Observar y aconsejar.'
  },
  {
    id: 758, step: 'step2', subject: 'Neurology',
    question: 'A 65M with sudden onset vertigo, gait instability, and dysphagia. Dx?',
    options: ['Lateral medullary syndrome (Wallenberg)', 'Vestibular neuritis', 'Meniere disease', 'BPPV', 'Labyrinthitis'],
    correctAnswer: 0,
    explanationEn: 'Lateral medullary syndrome (Wallenberg): PICA infarct. Vertigo, ipsilateral Horner, contralateral pain/temperature loss, dysphagia.',
    explanationZh: '延髓外侧综合征（Wallenberg）：PICA梗塞。眩晕、同侧Horner、对侧痛温觉丧失、吞咽困难。',
    explanationEs: 'Sindrome bulbar lateral (Wallenberg): infarto de PICA. Vertigo, Horner ipsilateral, disfagia.'
  },
  {
    id: 759, step: 'step2', subject: 'Neurology',
    question: 'A 60F with subacute cognitive decline, myoclonus, and periodic sharp waves on EEG. Dx?',
    options: ['Creutzfeldt-Jakob disease', 'Alzheimer disease', 'Frontotemporal dementia', 'Lewy body dementia', 'Vascular dementia'],
    correctAnswer: 0,
    explanationEn: 'CJD: rapidly progressive dementia, myoclonus, periodic sharp waves on EEG, 14-3-3 protein in CSF. Prion disease, fatal within 1 year.',
    explanationZh: '克雅病：快速进展性痴呆、肌阵挛、EEG周期性尖波及14-3-3蛋白。朊病毒病，1年内死亡。',
    explanationEs: 'ECJ: demencia rapidamente progresiva, mioclonias, ondas agudas periodicas en EEG. Proteina 14-3-3 en LCR.'
  },
  {
    id: 760, step: 'step2', subject: 'Neurology',
    question: 'A 30F with unilateral facial weakness, ear pain, and vesicles in external auditory canal. Dx?',
    options: ['Ramsay Hunt syndrome (VZV)', 'Bell palsy', ' Trigeminal neuralgia', 'Myasthenia gravis', ' Lyme disease'],
    correctAnswer: 0,
    explanationEn: 'Ramsay Hunt: VZV reactivation in geniculate ganglion. Facial paralysis + ear vesicles (zoster oticus). Treat with acyclovir + steroids.',
    explanationZh: 'Ramsay Hunt综合征：VZV在膝状神经节再激活。面瘫+耳部疱疹（耳带状疱疹）。阿昔洛韦+激素治疗。',
    explanationEs: 'Sindrome de Ramsay Hunt: VZV en ganglio geniculado. Paralisis facial + vesiculas en oido. Aciclovir + esteroides.'
  },
  {
    id: 761, step: 'step2', subject: 'Neurology',
    question: 'A 50M with recurrent episodes of vertigo lasting hours, tinnitus, and hearing loss. Dx?',
    options: ['Meniere disease', 'BPPV', 'Vestibular neuritis', 'Acoustic neuroma', 'Labyrinthitis'],
    correctAnswer: 0,
    explanationEn: 'Meniere disease: episodic vertigo (hours), fluctuating sensorineural hearing loss, tinnitus, aural fullness. Endolymphatic hydrops.',
    explanationZh: '梅尼埃病：发作性眩晕（数小时）、波动性SNHL、耳鸣、耳胀满感。内淋巴积水。',
    explanationEs: 'Enfermedad de Meniere: vertigo episodico (horas), hipoacusia fluctuante, acufeno, plenitud aural.'
  },
  {
    id: 762, step: 'step2', subject: 'Neurology',
    question: 'A 45M with progressive proximal muscle weakness, dry eyes. EMG: NMJ defect with decrement on repetitive stimulation. Dx?',
    options: ['Lambert-Eaton myasthenic syndrome', 'Myasthenia gravis', 'Polymyositis', 'Dermatomyositis', 'Inclusion body myositis'],
    correctAnswer: 0,
    explanationEn: 'Lambert-Eaton: proximal weakness, dry mouth (dysautonomia), improved strength with repeated effort. Associated with small cell lung cancer.',
    explanationZh: 'Lambert-Eaton：近端肌无力、口干（自主神经功能障碍）、反复用力后力量改善。与小细胞肺癌相关。',
    explanationEs: 'Sindrome de Lambert-Eaton: debilidad proximal, boca seca. Mejoria con esfuerzo repetido. Asociado a cancer de pulmon microcitico.'
  },
  {
    id: 763, step: 'step2', subject: 'Neurology',
    question: 'A 55W with progressive dementia, visual hallucinations, and parkinsonism. Fluctuating cognition. Dx?',
    options: ['Lewy body dementia', 'Alzheimer disease', 'Parkinson disease dementia', 'Frontotemporal dementia', 'Vascular dementia'],
    correctAnswer: 0,
    explanationEn: 'Dementia with Lewy bodies: visual hallucinations, parkinsonism, fluctuating cognition, REM sleep behavior disorder. Alpha-synuclein pathology.',
    explanationZh: '路易体痴呆：视幻觉、帕金森综合征、波动性认知、REM睡眠行为障碍。α-突触核蛋白病理。',
    explanationEs: 'Demencia con cuerpos de Lewy: alucinaciones visuales, parkinsonismo, fluctuacion cognitiva.'
  },
  {
    id: 764, step: 'step2', subject: 'Neurology',
    question: 'A 40F with episodes of unilateral pulsating headache with nausea, photophobia, and preceding aura. Dx?',
    options: ['Migraine with aura', 'Cluster headache', 'Tension headache', 'Trigeminal neuralgia', 'Giant cell arteritis'],
    correctAnswer: 0,
    explanationEn: 'Migraine with aura: throbbing/pulsating, unilateral, nausea, photophobia, preceding aura (visual, sensory). Lasts 4-72h.',
    explanationZh: '有先兆偏头痛：搏动性、单侧、恶心、畏光、前兆（视觉、感觉）。持续4-72h。',
    explanationEs: 'Migrana con aura: pulsante, unilateral, nauseas, fotofobia, aura previa. Dura 4-72h.'
  },
  {
    id: 765, step: 'step2', subject: 'Neurology',
    question: 'A 70M with sudden onset left facial droop, right arm weakness. CT head normal within 3h. Management?',
    options: ['IV alteplase (tPA) + mechanical thrombectomy consideration', 'Aspirin only', 'Heparin', 'Observe', 'Steroids'],
    correctAnswer: 0,
    explanationEn: 'Acute ischemic stroke <4.5h: IV alteplase. If LVO → mechanical thrombectomy up to 24h. Do not delay for other imaging.',
    explanationZh: '急性缺血性卒中<4.5h：IV阿替普酶。大血管闭塞→24h内机械取栓。不要为其他影像延迟治疗。',
    explanationEs: 'ACV isquemico <4.5h: alteplasa IV. Si oclusion de gran vaso → trombectomia mecanica hasta 24h.'
  },
  {
    id: 766, step: 'step2', subject: 'Cardiology',
    question: 'A 65M with HFrEF (EF 30%), NYHA II, on ACEI, beta-blocker. Next step?',
    options: ['Add sacubitril-valsartan (ARNI)', 'Add spironolactone', 'Add digoxin', 'Add ivabradine', 'Observe'],
    correctAnswer: 0,
    explanationEn: 'HFrEF EF ≤40%: ACEI/ARB → ARNI (sacubitril-valsartan) superior to ACEI alone. Add MRA when EF ≤35%.',
    explanationZh: 'HFrEF EF≤40%：ACEI/ARB→ARNI（沙库巴曲缬沙坦）优于单用ACEI。EF≤35%加MRA。',
    explanationEs: 'ICrFE FE ≤40%: IECA/ARA-II → ARNI superior a IECA solo. Agregar ARM cuando FE ≤35%.'
  },
  {
    id: 767, step: 'step2', subject: 'Cardiology',
    question: 'A 55M with NSTEMI, chest pain ongoing, ST depression. Management?',
    options: ['Anti-thrombotics + PCI', 'Thrombolytics', 'Observation', 'Heparin only', 'Oxygen only'],
    correctAnswer: 0,
    explanationEn: 'NSTEMI: anti-thrombotics (aspirin, P2Y12 inhibitor, heparin) + PCI (within 24h). Thrombolytics NOT indicated.',
    explanationZh: 'NSTEMI：抗栓治疗（阿司匹林、P2Y12抑制剂、肝素）+PCI（24h内）。溶栓不适用。',
    explanationEs: 'IMSEST: antitromboticos (ASA, inhibidor P2Y12, heparina) + ICP (en 24h). Tromboliticos NO indicados.'
  },
  {
    id: 768, step: 'step2', subject: 'Cardiology',
    question: 'A 30F with syncope, prolonged QT on ECG. Family history of sudden cardiac death. Management?',
    options: ['Beta-blocker + ICD if symptomatic', 'Pacemaker', 'Amiodarone only', 'Sotalol', 'Observe'],
    correctAnswer: 0,
    explanationEn: 'Long QT syndrome: beta-blocker (propranolol, nadolol). ICD if syncope or VT despite beta-blockers. Avoid QT-prolonging drugs.',
    explanationZh: '长QT综合征：β阻滞剂（普萘洛尔、纳多洛尔）。晕厥或VT-->ICD。避免延长QT药物。',
    explanationEs: 'Sindrome de QT largo: beta-bloqueante (propranolol, nadolol). DAI si sincope o TV.'
  },
  {
    id: 769, step: 'step2', subject: 'Cardiology',
    question: 'A 60W with hypertension and CKD. On lisinopril 40mg, amlodipine 10mg. BP 150/95. Next step?',
    options: ['Add thiazide diuretic (chlorthalidone)', 'Add beta-blocker', 'Add hydralazine', 'Add clonidine', 'Increase lisinopril'],
    correctAnswer: 0,
    explanationEn: 'Resistant HTN: 3 drugs at max doses including diuretic. If not controlled → add spironolactone or thiazide. Chlorthalidone in CKD (if eGFR >30).',
    explanationZh: '顽固性HTN：最大剂量3种药含利尿剂。若未控制→加螺内酯或噻嗪。CKD(eGFR>30)用氯噻酮。',
    explanationEs: 'HTA resistente: 3 farmacos a dosis maxima incluyendo diuretico. Agregar espironolactona.'
  },
  {
    id: 770, step: 'step2', subject: 'Cardiology',
    question: 'A 70M with severe AS (valve area 0.7 cm2), angina, and syncope. Management?',
    options: ['Aortic valve replacement (TAVR or SAVR)', 'Medical management only', 'Balloon valvuloplasty', 'Heart transplant', 'Nitrates + beta-blocker'],
    correctAnswer: 0,
    explanationEn: 'Symptomatic severe AS: valve replacement (TAVR if high-risk, SAVR if low-risk). No medical therapy improves survival.',
    explanationZh: '严重AS有症状：瓣膜置换（高危TAVR、低危SAVR）。药物治疗不改善生存率。',
    explanationEs: 'EA grave sintomatica: reemplazo valvular (TAVI si alto riesgo, SAV si bajo riesgo).'
  },
  {
    id: 771, step: 'step2', subject: 'Cardiology',
    question: 'A 55F with acute pericarditis. Positional chest pain, relieved leaning forward. ECG: diffuse ST elevation. Management?',
    options: ['NSAIDs + colchicine', 'Aspirin only', 'Corticosteroids first-line', 'Morphine', 'Antibiotics'],
    correctAnswer: 0,
    explanationEn: 'Acute pericarditis: NSAIDs (ibuprofen) + colchicine x 3 months. Prednisone only if contraindicated or recurrent.',
    explanationZh: '急性心包炎：NSAIDs（布洛芬）+秋水仙碱x3月。禁忌或复发才用泼尼松。',
    explanationEs: 'Pericarditis aguda: AINEs + colchicina x 3 meses. Prednisona solo si contraindicado.'
  },
  {
    id: 772, step: 'step2', subject: 'Cardiology',
    question: 'A 65F with mitral stenosis, atrial fibrillation. Management?',
    options: ['Rate control + anticoagulation', 'Cardioversion only', 'Amiodarone only', 'Aspirin only', 'Pacemaker'],
    correctAnswer: 0,
    explanationEn: 'Mitral stenosis with AF: high thromboembolic risk. Anticoagulate (warfarin) regardless of CHA2DS2-VASc score.',
    explanationZh: '二尖瓣狭窄伴房颤：高血栓栓塞风险。不论CHADSVASc评分均抗凝（华法林）。',
    explanationEs: 'Estenosis mitral con FA: alto riesgo tromboembolico. Anticoagular independientemente de puntaje CHADSVASc.'
  },
  {
    id: 773, step: 'step2', subject: 'Cardiology',
    question: 'A 30M with palpitations, WPW pattern on ECG. Episodes of AVRT. Management?',
    options: ['Catheter ablation', 'Medications (flecainide)', 'Beta-blocker only', 'Verapamil only', 'Observe'],
    correctAnswer: 0,
    explanationEn: 'WPW with symptomatic SVT (AVRT): catheter ablation definitive. Do NOT use verapamil or digoxin (may precipitate VF).',
    explanationZh: 'WPW伴症状性SVT（AVRT）： 导管消融根治。不用维拉帕米或地高辛（可能触发VF）。',
    explanationEs: 'WPW con TVS sintomatica (AVRT): ablacion con cateter. NO usar verapamilo ni digoxina.'
  },
  {
    id: 774, step: 'step2', subject: 'Cardiology',
    question: 'A 75M with isolated systolic hypertension (SBP 160, DBP 72). Management?',
    options: ['Thiazide diuretic or CCB', 'Beta-blocker', 'Alpha-blocker', 'Hydralazine', 'Clonidine'],
    correctAnswer: 0,
    explanationEn: 'Isolated systolic HTN (SBP >140, DBP <90): first-line thiazide diuretic or CCB. Beta-blockers less effective for isolated systolic HTN.',
    explanationZh: 'ISH（SBP>140,DBP<90）：一线噻嗪类利尿剂或CCB。β阻滞剂对ISH效果较差。',
    explanationEs: 'HTA sistolica aislada: tiazida o BCC. Betabloqueantes menos efectivos.'
  },
  {
    id: 775, step: 'step2', subject: 'Cardiology',
    question: 'A 60F with acute pulmonary edema, BP 220/130. Management?',
    options: ['Nitroglycerin IV + furosemide IV', 'Morphine only', 'Beta-blocker immediately', 'ACE inhibitor immediately', 'Hydralazine'],
    correctAnswer: 0,
    explanationEn: 'Acute hypertensive heart failure (flash pulmonary edema): nitroglycerin IV (afterload reduction) + furosemide IV. BiPAP/CPAP.',
    explanationZh: '急性高血压性心衰（爆发性肺水肿）：硝酸甘油IV（降低后负荷）+呋塞米IV。BiPAP/CPAP。',
    explanationEs: 'IC hipertensiva aguda: nitroglicerina IV + furosemida IV. BiPAP/CPAP.'
  },
  {
    id: 776, step: 'step2', subject: 'Endocrinology',
    question: 'A 25F with weight loss, tachycardia, and exophthalmos. Thyroid: diffuse goiter, bruit. Dx?',
    options: ['Graves disease', 'Thyroiditis', 'Toxic multinodular goiter', 'Toxic adenoma', 'Jod-Basedow phenomenon'],
    correctAnswer: 0,
    explanationEn: 'Graves disease: diffuse goiter with bruit, exophthalmos, pretibial myxedema. TSI (TSH receptor antibodies) positive. T4 high, TSH suppressed.',
    explanationZh: 'Graves病：弥漫性甲状腺肿伴血管杂音、突眼、胫前黏液性水肿。TSI（TSH受体抗体）阳性。T4高，TSH抑制。',
    explanationEs: 'Enfermedad de Graves: bocio difuso con soplo, exoftalmos. TSI positivos. T4 alta, TSH suprimida.'
  },
  {
    id: 777, step: 'step2', subject: 'Endocrinology',
    question: 'A 60M with T2DM, HbA1c 10.5%, weight loss. Random glucose 320. Management?',
    options: ['Insulin therapy', 'SGLT2 inhibitor only', 'Metformin only', 'Sulfonylurea', 'Lifestyle modification'],
    correctAnswer: 0,
    explanationEn: 'T2DM with HbA1c >10% and catabolic symptoms (weight loss, hyperglycemia): insulin therapy. Severe insulin deficiency likely.',
    explanationZh: 'T2DM伴HbA1c>10%和代谢紊乱症状（体重减轻、高血糖）：胰岛素治疗。可能严重胰岛素缺乏。',
    explanationEs: 'DM2 con HbA1c >10% y sintomas catabolicos: insulinoterapia. Probable deficiencia severa de insulina.'
  },
  {
    id: 778, step: 'step2', subject: 'Endocrinology',
    question: 'A 35F with galactorrhea, amenorrhea, and headache. Visual field: bitemporal hemianopia. Prolactin 350. Dx?',
    options: ['Prolactinoma (macro)', 'Pituitary adenoma (non-functioning)', 'Craniopharyngioma', 'Empty sella', 'Hypothyroidism'],
    correctAnswer: 0,
    explanationEn: 'Prolactinoma: galactorrhea, amenorrhea, bitemporal hemianopia (optic chiasm compression). Prolactin >250 → macroadenoma (>10mm).',
    explanationZh: '泌乳素瘤：乳溢、闭经、双颞侧偏盲（视交叉受压）。泌乳素>250→巨腺瘤（>10mm）。',
    explanationEs: 'Prolactinoma: galactorrea, amenorrea, hemianopsia bitemporal. Prolactina >250 → macroadenoma (>10mm).'
  },
  {
    id: 779, step: 'step2', subject: 'Endocrinology',
    question: 'A 50F with hypercalcemia, low PTH, and lung nodule on CXR. Dx?',
    options: ['Humoral hypercalcemia of malignancy (PTHrP)', 'Primary hyperparathyroidism', 'Familial hypocalciuric hypercalcemia', 'Sarcoidosis', 'Milk-alkali syndrome'],
    correctAnswer: 0,
    explanationEn: 'Hypercalcemia with low PTH → malignancy (PTHrP from squamous cell lung cancer). Also: bone metastases, multiple myeloma.',
    explanationZh: '高钙血症伴低PTH→恶性肿瘤（鳞状细胞肺癌的PTHrP）。也见于骨转移、多发性骨髓瘤。',
    explanationEs: 'Hipercalcemia con PTH baja → malignidad (PTHrP de carcinoma escamoso de pulmon).'
  },
  {
    id: 780, step: 'step2', subject: 'Endocrinology',
    question: 'A 45F with fatigue, hypotension, and hyperpigmentation of gums. Dx?',
    options: ['Addison disease (primary adrenal insufficiency)', 'Secondary adrenal insufficiency', 'Cushing syndrome', 'Conn syndrome', 'Pheochromocytoma'],
    correctAnswer: 0,
    explanationEn: 'Addison: fatigue, hypotension, hyperpigmentation (MSH effect from pro-opiomelanocortin). Labs: low cortisol, high ACTH, hyperkalemia, hyponatremia.',
    explanationZh: 'Addison：乏力、低血压、色素沉着（阿黑皮素原的MSH效应）。化验：低皮质醇、高ACTH、高钾、低钠。',
    explanationEs: 'Enfermedad de Addison: fatiga, hipotension, hiperpigmentacion. Cortisol bajo, ACTH alta.'
  },
  {
    id: 781, step: 'step2', subject: 'Endocrinology',
    question: 'A 55M with pheochromocytoma (24h urine metanephrines elevated). Management before surgery?',
    options: ['Alpha-blocker (phenoxybenzamine)', 'Beta-blocker first', 'CCB only', 'No treatment needed', 'Diuretic'],
    correctAnswer: 0,
    explanationEn: 'Pheochromocytoma: alpha-blocker (phenoxybenzamine) BEFORE surgery to prevent hypertensive crisis. Beta-blocker only AFTER alpha-blockade established.',
    explanationZh: '嗜铬细胞瘤：术前α阻滞剂（酚妥拉明）预防高血压危象。β阻滞剂仅在α阻滞建立后。',
    explanationEs: 'Feocromocitoma: alfa-bloqueante (fenoxibenzamina) ANTES cirugia. Betabloqueante SOLO DESPUES de alfa-bloqueo.'
  },
  {
    id: 782, step: 'step2', subject: 'Endocrinology',
    question: 'A 65M with T2DM, on metformin + sulfonylurea. HbA1c 8.8%. eGFR 48. Next step?',
    options: ['Add specific agent based on CV/renal risk', 'Increase sulfonylurea', 'Switch to insulin', 'Stop metformin', 'Add TZD'],
    correctAnswer: 0,
    explanationEn: 'T2DM with CKD (eGFR 48): metformin can be used (dose reduced) if eGFR ≥30. Next: SGLT2i (CKD benefit) or GLP-1 RA.',
    explanationZh: 'T2DM伴CKD（eGFR 48）：eGFR≥30可继续用二甲双胍（减量）。下一步：SGLT2i（CKD获益）或GLP-1 RA。',
    explanationEs: 'DM2 con ERC (eGFR 48): metformina puede usarse si eGFR ≥30. Siguiente: iSGLT2 o agonista GLP-1.'
  },
  {
    id: 783, step: 'step2', subject: 'Endocrinology',
    question: 'A 45M with suspected acromegaly. GH not suppressed after glucose load. Dx confirmed. Initial imaging?',
    options: ['Pituitary MRI with contrast', 'CT head', 'TSH, PRL', 'Visual field testing', 'Octreotide scan'],
    correctAnswer: 0,
    explanationEn: 'Acromegaly: confirm with OGTT (GH not suppressed). Pituitary MRI to localize tumor. Treat with transsphenoidal surgery.',
    explanationZh: '肢端肥大症：OGTT确认（GH不被抑制）。垂体MRI定位肿瘤。经蝶窦手术治疗。',
    explanationEs: 'Acromegalia: confirmar con PTOG (GH no suprimida). RM hipofisaria para localizar tumor.'
  },
  {
    id: 784, step: 'step2', subject: 'Endocrinology',
    question: 'A 70F with osteoporosis, vertebral fracture. Bisphosphonate failed. Management?',
    options: ['Teriparatide (anabolic) or denosumab', 'More bisphosphonate', 'Calcitonin only', 'No treatment', 'Parathyroidectomy'],
    correctAnswer: 0,
    explanationEn: 'Bisphosphonate failure: teriparatide (anabolic, PTH analog) or denosumab (RANKL inhibitor). Anabolic if high fracture risk.',
    explanationZh: '双膦酸盐失败：特立帕肽（合成代谢，PTH类似物）或地诺单抗（RANKL抑制剂）。高骨折风险用合成代谢。',
    explanationEs: 'Falla de bifosfonato: teriparatida (anabolico) o denosumab (inhibidor RANKL).'
  },
  {
    id: 785, step: 'step2', subject: 'Endocrinology',
    question: 'A 30F with Hashimoto thyroiditis, palpitations, and weight loss. Neck: firm, tender goiter. Dx?',
    options: ['Subacute granulomatous thyroiditis (De Quervain)', 'Graves disease', 'Toxic nodule', 'Thyroid cancer', 'Riedel thyroiditis'],
    correctAnswer: 0,
    explanationEn: 'De Quervain thyroiditis: painful, tender goiter, post-viral. Elevated ESR. Transient thyrotoxicosis → hypothyroidism → recovery.',
    explanationZh: '亚急性肉芽肿性甲状腺炎（De Quervain）：痛性、压痛甲状腺肿，病毒感染后。ESR升高。一过性甲亢→甲减→恢复。',
    explanationEs: 'Tiroiditis subaguda de De Quervain: bocio doloroso, postviral. VSG elevada. Tirotoxicosis transitoria → hipotiroidismo.'
  },
  {
    id: 786, step: 'step2', subject: 'Pulmonology',
    question: 'A 60M with COPD, 60 pack-year smoking, chronic cough. CXR: 3cm spiculated RUL mass. Next step?',
    options: ['CT-guided lung biopsy', 'Bronchoscopy with BAL', 'Sputum cytology', 'PET-CT', 'Thoracotomy'],
    correctAnswer: 0,
    explanationEn: 'Lung nodule/mass: CT-guided biopsy or bronchoscopy for diagnosis. If central nodule → bronchoscopy; if peripheral → CT-guided.',
    explanationZh: '肺结节/肿块：CT引导下肺穿刺活检或支气管镜诊断。中央型→支气管镜；周围型→CT引导。',
    explanationEs: 'Nodulo pulmonar: biopsia guiada por TC o broncoscopia para diagnostico.'
  },
  {
    id: 787, step: 'step2', subject: 'Pulmonology',
    question: 'A 55M with COPD (FEV1 35% predicted), recurrent exacerbations. No prior home O2. SaO2 89% at rest. Management?',
    options: ['Home oxygen therapy (LTOT)', 'SABA only', 'LABA only', 'ICS only', 'Pulmonary rehabilitation'],
    correctAnswer: 0,
    explanationEn: 'COPD with resting SaO2 ≤88% or PaO2 ≤55 mmHg: LTOT >15h/day. Reduces mortality. Also indicated if cor pulmonale or Hct >55.',
    explanationZh: 'COPD静息SaO2≤88%或PaO2≤55mmHg：长期氧疗>15h/天。降低死亡率。也适用于肺心病或Hct>55。',
    explanationEs: 'EPOC con SaO2 ≤88% en reposo: oxigenoterapia domiciliaria >15h/dia. Reduce mortalidad.'
  },
  {
    id: 788, step: 'step2', subject: 'Pulmonology',
    question: 'A 45W with dyspnea on exertion, dry cough. High-resolution CT: ground-glass opacities, honeycombing. Dx?',
    options: ['Idiopathic pulmonary fibrosis (UIP)', 'Bronchiectasis', 'Sarcoidosis', 'Hypersensitivity pneumonitis', 'Asbestosis'],
    correctAnswer: 0,
    explanationEn: 'IPF (UIP pattern): ground-glass opacities, honeycombing, traction bronchiectasis. Older adults, progressive dyspnea. Anti-fibrotic therapy.',
    explanationZh: 'IPF（UIP模式）：磨玻璃影、蜂窝肺、牵引性支气管扩张。老年、进行性呼吸困难。抗纤维化治疗。',
    explanationEs: 'FPI (patrón UIP): vidrio esmerilado, panalizacion. Adultos mayores, disnea progresiva.'
  },
  {
    id: 789, step: 'step2', subject: 'Pulmonology',
    question: 'A 30M with asthma, using albuterol daily. Nighttime awakenings 3/week. Inhaled ICS?',
    options: ['Add low-dose ICS', 'Add LABAs', 'SABA alone', 'ICS/LABA', 'Add montelukast'],
    correctAnswer: 0,
    explanationEn: 'Asthma step-up: if using SABA daily or nighttime awakenings >2/week → add low-dose ICS. GINA step 2.',
    explanationZh: '哮喘升阶梯：每日使用SABA或夜间觉醒>2次/周→加用低剂量ICS。GINA阶梯2。',
    explanationEs: 'Asma escalon: si usa SABA diario o despertares nocturnos >2/sem → agregar CIE dosis baja.'
  },
  {
    id: 790, step: 'step2', subject: 'Pulmonology',
    question: 'A 20F with cystic fibrosis. Recurrent Pseudomonas infections. Which medication can prevent lung function decline?',
    options: ['Azithromycin (3/week, anti-inflammatory)', 'Inhaled colistin', 'IV meropenem', 'Oral ciprofloxacin', 'Acyclovir'],
    correctAnswer: 0,
    explanationEn: 'CF: azithromycin 3x/week (anti-inflammatory, not antibacterial effect) reduces exacerbations/lung function decline. Also: dornase alfa, Ivacaftor.',
    explanationZh: 'CF：阿奇霉素3x/周（抗炎作用，非抗菌）减少急性加重/肺功能下降。也：阿法链道酶、伊伐卡托。',
    explanationEs: 'FQ: azitromicina 3x/semana (antiinflamatorio) reduce exacerbaciones. Tambien: dornasa alfa, ivacaftor.'
  },
  {
    id: 791, step: 'step2', subject: 'Pulmonology',
    question: 'A 50M with massive hemoptysis (>500 mL/24h). Management?',
    options: ['Bronchial artery embolization or rigid bronchoscopy', 'Chest tube', 'Observation', 'Antibiotics', 'Steroids'],
    correctAnswer: 0,
    explanationEn: 'Massive hemoptysis: secure airway (intubate non-bleeding lung), bronchial artery embolization or rigid bronchoscopy for localization.',
    explanationZh: '大咯血：确保气道（插管健侧肺）、支气管动脉栓塞或硬质支气管镜定位。',
    explanationEs: 'Hemoptisis masiva: asegurar VA, embolizacion de arteria bronquial o broncoscopia rigida.'
  },
  {
    id: 792, step: 'step2', subject: 'Pulmonology',
    question: 'A 65M with obstructive sleep apnea (AHI 35), BMI 32. What is the first-line treatment?',
    options: ['CPAP', 'Oral appliance', 'Positional therapy', 'Weight loss only', 'Surgery (UPPP)'],
    correctAnswer: 0,
    explanationEn: 'OSA (AHI ≥15): CPAP is first-line. Oral appliance if CPAP intolerant. Weight loss (adjunct). Surgery last resort.',
    explanationZh: 'OSA（AHI≥15）：CPAP是一线。不耐受CPAP用口腔矫治器。减重（辅助）。手术为最后手段。',
    explanationEs: 'AOS (IAH ≥15): CPAP es primera linea. Dispositivo oral si intolerancia. Perdida de peso adjunta.'
  },
  {
    id: 793, step: 'step2', subject: 'Pulmonology',
    question: 'A 45F with TB (cavitary on CXR), on RIPE therapy. 2 months later: sputum culture positive. Management?',
    options: ['Continue therapy, check adherence + DST', 'Add streptomycin', 'Switch to second-line', 'Discharge from treatment', 'Repeat CXR only'],
    correctAnswer: 0,
    explanationEn: 'TB with positive culture at 2 months: check adherence, repeat drug susceptibility testing. If pan-susceptible → continue RIPE.',
    explanationZh: '治疗2月痰培养阳性：检查依从性、重复药敏。若全敏感→继续RIPE。',
    explanationEs: 'TB con cultivo positivo a los 2 meses: verificar adherencia, repetir sensibilidad.'
  },
  {
    id: 794, step: 'step2', subject: 'Pulmonology',
    question: 'A 70M with 40 pack-year smoking, productive cough for 3 months each year for 3 years. PFTs: FEV1/FVC 0.45. Dx?',
    options: ['COPD (chronic bronchitis)', 'Asthma', 'Bronchiectasis', 'Cystic fibrosis', 'ILD'],
    correctAnswer: 0,
    explanationEn: 'COPD: chronic cough sputum ≥3 months/year for ≥2 years. FEV1/FVC <0.7 confirms obstruction. Smoking is main risk.',
    explanationZh: 'COPD：慢性咳嗽咯痰≥3月/年持续≥2年。FEV1/FVC<0.7确认阻塞。吸烟是主要风险。',
    explanationEs: 'EPOC: tos productiva cronica ≥3 meses/ano por ≥2 anos. FEV1/FVC <0.7 confirma obstruccion.'
  },
  {
    id: 795, step: 'step2', subject: 'Pulmonology',
    question: 'A 55W with bilateral hilar lymphadenopathy, erythema nodosum, cough. Dx?',
    options: ['Sarcoidosis', 'TB', 'Lymphoma', 'Lung cancer', 'Fungal pneumonia'],
    correctAnswer: 0,
    explanationEn: 'Sarcoidosis: bilateral hilar lymphadenopathy, noncaseating granulomas, elevated ACE. Lofgren syndrome: BHL + erythema nodosum + arthritis.',
    explanationZh: '结节病：双侧肺门淋巴结肿大、非干酪样肉芽肿、ACE升高。Lofgren综合征：BHL+结节性红斑+关节炎。',
    explanationEs: 'Sarcoidosis: adenopatia hiliar bilateral, granulomas no caseificantes. Sindrome de Lofgren.'
  },
  {
    id: 796, step: 'step2', subject: 'Pulmonology',
    question: 'A 60M with acute PE, massive (sBP <90). CT: bilateral central PE. Management?',
    options: ['Systemic thrombolysis (tPA)', 'IV heparin only', 'LMWH only', 'Catheter-directed thrombolysis', 'Observation'],
    correctAnswer: 0,
    explanationEn: 'Massive PE (sBP <90): systemic thrombolysis (tPA 100mg over 2h). If contraindicated → surgical embolectomy or catheter-directed.',
    explanationZh: '大面积PE（sBP<90）：全身溶栓（tPA 100mg 2h）。禁忌→手术取栓或导管溶栓。',
    explanationEs: 'TEP masivo (PAS <90): trombolisis sistemica (tPA 100mg en 2h). Contraindicada → embolectomia quirurgica.'
  },
  {
    id: 797, step: 'step2', subject: 'Pulmonology',
    question: 'A 30W with pleural effusion, TB endemic area. Pleural fluid: lymphocyte predominant, elevated ADA. Management?',
    options: ['Treat as TB pleuritis with RIPE', 'Thoracentesis only', 'Antibiotics', 'Plasmapheresis', 'Observe'],
    correctAnswer: 0,
    explanationEn: 'TB pleural effusion: lymphocytic exudate, elevated ADA (>40 U/L). Treat as TB with RIPE therapy for 2 months + 4 months INH/rifampin.',
    explanationZh: 'TB胸腔积液：淋巴细胞渗出液，ADA升高（>40U/L）。RIPE治疗2月+INH/利福平4月。',
    explanationEs: 'Derrame pleural tuberculoso: exudado linfocitico, ADA elevada. Tratar con RIPE.'
  },
  {
    id: 798, step: 'step2', subject: 'Pulmonology',
    question: 'A 40M with interstitial lung disease, bird exposure. HRCT: centrilobular nodules. Dx?',
    options: ['Hypersensitivity pneumonitis', 'IPF', 'Sarcoidosis', 'Asbestosis', 'Silicosis'],
    correctAnswer: 0,
    explanationEn: 'Hypersensitivity pneumonitis: exposure to bird antigens/mold, centrilobular nodules, lymphocytosis on BAL. Remove antigen, steroids.',
    explanationZh: '过敏性肺炎：暴露于鸟类抗原/霉菌，小叶中心结节，BAL淋巴细胞增多。去除抗原，激素。',
    explanationEs: 'Neumonitis por hipersensibilidad: exposicion a antigenos de aves. Retirar antigeno, esteroides.'
  },
  {
    id: 799, step: 'step2', subject: 'Pulmonology',
    question: 'A 65M with malignant pleural effusion, recurrent. Management after thoracentesis?',
    options: ['Pleurodesis (talc) or tunneled pleural catheter', 'Repeat thoracentesis', 'Radiation', 'Chemotherapy', 'Observe'],
    correctAnswer: 0,
    explanationEn: 'Recurrent malignant pleural effusion: pleurodesis (talc slurry) or tunneled pleural catheter. Improves dyspnea, reduces recurrence.',
    explanationZh: '复发恶性胸腔积液：胸膜固定术（滑石粉）或隧道式胸腔导管。改善呼吸困难，减少复发。',
    explanationEs: 'Derrame pleural maligno recurrente: pleurodesis (talco) o cateter pleural tunelizado.'
  },
  {
    id: 800, step: 'step2', subject: 'Pulmonology',
    question: 'A 25M with spontaneous pneumothorax, 2nd episode. Management?',
    options: ['Video-assisted thoracoscopic surgery (VATS)', 'Observation', 'Needle aspiration', 'Oxygen', 'Chest tube'],
    correctAnswer: 0,
    explanationEn: 'Recurrent spontaneous pneumothorax: VATS pleurodesis or bleb resection. Prevents future recurrences.',
    explanationZh: '复发自发性气胸：VATS胸膜固定术或肺大疱切除。预防未来复发。',
    explanationEs: 'Neumotorax espontaneo recurrente: VATS con pleurodesis o reseccion de ampollas.'
  },
  {
    id: 801, step: 'step2', subject: 'Nephrology',
    question: 'A 55M with acute kidney injury (Cr 3.2, baseline 1.0), FENa <1%, BUN/Cr >20. Dx?',
    options: ['Prerenal AKI (hypovolemia)', 'Acute tubular necrosis', 'Acute interstitial nephritis', 'Glomerulonephritis', 'Obstructive uropathy'],
    correctAnswer: 0,
    explanationEn: 'Prerenal AKI: FENa <1%, BUN/Cr >20, bland sediment. Treatment: IV fluids, correct underlying cause.',
    explanationZh: '肾前性AKI：FENa<1%，BUN/Cr>20，尿沉渣正常。治疗：IV液体，纠正根本原因。',
    explanationEs: 'LRA prerrenal: FENa <1%, BUN/Cr >20. Tratamiento: fluidos IV.'
  },
  {
    id: 802, step: 'step2', subject: 'Nephrology',
    question: 'A 60F with CKD (eGFR 22), hyperphosphatemia, hypocalcemia, PTH 450. Dx?',
    options: ['Secondary hyperparathyroidism (CKD-MBD)', 'Primary hyperparathyroidism', 'Tertiary hyperparathyroidism', 'Osteoporosis', ' Paget disease'],
    correctAnswer: 0,
    explanationEn: 'CKD-MBD: secondary HPT from reduced phosphate excretion, low calcitriol. Phosphate binders, calcitriol, cinacalcet.',
    explanationZh: 'CKD-MBD：继发性甲旁亢因磷排出减少、骨化三醇降低。磷结合剂、骨化三醇、西那卡塞。',
    explanationEs: 'ERC-MRC: hiperparatiroidismo secundario. Quelantes de fosforo, calcitriol, cinacalcet.'
  },
  {
    id: 803, step: 'step2', subject: 'Nephrology',
    question: 'A 30M with hematuria, proteinuria, and hypertension post-URI. Renal biopsy: mesangial IgA deposits on IF. Dx?',
    options: ['IgA nephropathy (Berger disease)', 'PSGN', 'Membranous nephropathy', 'Minimal change disease', 'FSGS'],
    correctAnswer: 0,
    explanationEn: 'IgA nephropathy: gross hematuria concurrent with URI (synpharyngitic), mesangial IgA deposits. Most common primary GN worldwide.',
    explanationZh: 'IgA肾病：与上呼吸道感染同时发生的肉眼血尿（同步性咽炎），系膜IgA沉积。全球最常见原发性GN。',
    explanationEs: 'Nefropatia IgA: hematuria macroscopica simultanea con IVRS, depositos mesangiales de IgA.'
  },
  {
    id: 804, step: 'step2', subject: 'Nephrology',
    question: 'A 50F with nephrotic syndrome (proteinuria 5g/24h, edema, hypoalbuminemia), renal biopsy: normal LM, foot process effacement on EM. Dx?',
    options: ['Minimal change disease', 'Membranous nephropathy', 'FSGS', 'Membranoproliferative GN', 'Diabetic nephropathy'],
    correctAnswer: 0,
    explanationEn: 'MCD: most common nephrotic syndrome in children. Normal light microscopy, podocyte foot process effacement. Responds to steroids.',
    explanationZh: '微小病变病：儿童最常见肾病综合征。光镜正常，足细胞足突融合。对激素反应良好。',
    explanationEs: 'Enfermedad de cambios minimos: microscopia optica normal, borramiento de podocitos. Responde a esteroides.'
  },
  {
    id: 805, step: 'step2', subject: 'Nephrology',
    question: 'A 65M with nephrotic syndrome, renal biopsy: subepithelial deposits (spike and dome). Anti-PLA2R antibody positive. Dx?',
    options: ['Membranous nephropathy', 'Minimal change disease', 'FSGS', 'IgA nephropathy', 'PSGN'],
    correctAnswer: 0,
    explanationEn: 'Membranous nephropathy: subepithelial deposits (spike and dome), anti-PLA2R+, phospholipase A2 receptor antibodies. Common in adults.',
    explanationZh: '膜性肾病：上皮下沉积（钉突样），抗PLA2R+。成人常见。',
    explanationEs: 'Nefropatia membranosa: depositos subepiteliales (espigas y domos), anti-PLA2R+.'
  },
  {
    id: 806, step: 'step2', subject: 'Nephrology',
    question: 'A 70M on ACEI and NSAIDs develops acute kidney injury. FENa is 3.5% with eosinophils in urine. Dx?',
    options: ['Acute interstitial nephritis (AIN)', 'Prerenal AKI', 'ATN', 'Postrenal AKI', 'RPGN'],
    correctAnswer: 0,
    explanationEn: 'AIN: drug-induced (NSAIDs, PCNs, sulfonamides, PPIs). Eosinophils in urine, eosinophiluria, fever, rash. Stop offending agent, steroids.',
    explanationZh: 'AIN：药物性（NSAIDs、青霉素类、磺胺类、PPIs）。尿嗜酸性粒细胞。停用致病药物，激素。',
    explanationEs: 'NIA: inducido por farmacos (AINEs, penicilinas). Eosinofiluria. Suspender agente, esteroides.'
  },
  {
    id: 807, step: 'step2', subject: 'Nephrology',
    question: 'A 20M with acute kidney injury and rapidly progressive glomerulonephritis. Anti-GBM antibody positive. Dx?',
    options: ['Goodpasture syndrome', 'Wegener granulomatosis (GPA)', 'Microscopic polyangiitis', 'SLE nephritis', 'Churg-Strauss syndrome'],
    correctAnswer: 0,
    explanationEn: 'Goodpasture syndrome: anti-GBM antibodies, RPGN + pulmonary hemorrhage. Treat with plasmapheresis + cyclophosphamide + steroids.',
    explanationZh: 'Goodpasture综合征：抗GBM抗体，RPGN+肺出血。血浆置换+环磷酰胺+激素。',
    explanationEs: 'Sindrome de Goodpasture: anticuerpos anti-MBG, GN rapidamente progresiva + hemorragia pulmonar.'
  },
  {
    id: 808, step: 'step2', subject: 'Nephrology',
    question: 'A 45F with CKD (eGFR 28), K+ 5.8. ECG: peaked T waves. Management?',
    options: ['IV calcium gluconate → insulin + glucose + kayexalate', 'Calcium only', 'Diuretic only', 'Hemodialysis immediate', 'Insulin only'],
    correctAnswer: 0,
    explanationEn: 'Hyperkalemia with ECG changes: IV calcium gluconate (stabilize cardiac membrane) → insulin + glucose (shift K+) → kayexalate/hydralite (remove).',
    explanationZh: '高钾血症伴ECG改变：IV葡萄糖酸钙（稳定心肌膜）→胰岛素+葡萄糖（移位K+）→Kayexalate（移除K+）。',
    explanationEs: 'Hiperpotasemia con cambios en ECG: gluconato de calcio IV → insulina + glucosa → kayexalate.'
  },
  {
    id: 809, step: 'step2', subject: 'Nephrology',
    question: 'A 55M with ADPKD, HTN, CKD stage 3. Family history: father ESRD at 55. Management for kidney protection?',
    options: ['ACEI/ARB + tolvaptan (vasopressin receptor antagonist)', 'Beta-blocker + tolvaptan', 'Diuretic only', 'Hydralazine', 'Observe'],
    correctAnswer: 0,
    explanationEn: 'ADPKD: ACEI/ARB for HTN. Tolvaptan (V2 antagonist) slows cyst growth, delays ESRD. Indicated for rapidly progressive ADPKD.',
    explanationZh: 'ADPKD：ACEI/ARB治疗高血压。托伐普坦（V2拮抗剂）减缓囊肿生长，延缓ESRD。快速进展ADPKD适用。',
    explanationEs: 'PQRAD: IECA/ARA-II para HTA. Tolvaptan (antagonista V2) enlentece crecimiento de quistes.'
  },
  {
    id: 810, step: 'step2', subject: 'Nephrology',
    question: 'A 60M with nephrotic syndrome, renal biopsy: segmental sclerosis with hyalinosis. Does not respond to steroids. Dx?',
    options: ['FSGS (primary)', 'Minimal change disease', 'Membranous nephropathy', 'IgA nephropathy', 'Diabetic nephropathy'],
    correctAnswer: 0,
    explanationEn: 'FSGS: segmental sclerosis on biopsy. Steroid-resistant nephrotic syndrome. Progression to ESRD. Treat with CNIs or rituximab.',
    explanationZh: 'FSGS：活检节段性硬化。激素抵抗性肾病综合征。进展至ESRD。CNIs或利妥昔单抗治疗。',
    explanationEs: 'GESF: esclerosis segmentaria en biopsia. Sindrome nefrotico resistente a esteroides.'
  },
  {
    id: 811, step: 'step3', subject: 'Preventive Medicine',
    question: 'A 65F for cervical cancer screening (Pap + HPV). Prior screenings all normal. When to discontinue?',
    options: ['Age 65 if last 3 Paps normal', 'Age 70', 'Age 75', 'Age 80', 'Never'],
    correctAnswer: 0,
    explanationEn: 'Cervical cancer screening: discontinue at age 65 if adequate prior screening (3 consecutive negative Paps or 2 negative HPV tests).',
    explanationZh: '宫颈癌筛查：65岁停筛，前提是此前筛查充分（连续3次Pap阴性或2次HPV阴性）。',
    explanationEs: 'Tamizaje cervical: suspender a los 65 anos si cumplio tamizajes previos adecuados.'
  },
  {
    id: 812, step: 'step3', subject: 'Preventive Medicine',
    question: 'A 50M for colon cancer screening. No family history. Average risk. Preferred method?',
    options: ['Colonoscopy every 10 years', 'Barium enema', 'Yearly CT colonography', 'Flexible sigmoidoscopy', 'FOBT'],
    correctAnswer: 0,
    explanationEn: 'CRC screening average risk: colonoscopy every 10 years (preferred). Alternatives: FIT, Cologuard (DNA), etc.',
    explanationZh: 'CRC筛查平均风险：结肠镜每10年（首选）。替代方案：FIT、Cologuard（DNA）。',
    explanationEs: 'Tamizaje de CCR riesgo promedio: colonoscopia cada 10 anos (preferida).'
  },
  {
    id: 813, step: 'step3', subject: 'Preventive Medicine',
    question: 'A 65F for bone density screening (DXA). T-score -1.8. Dx?',
    options: ['Osteopenia', 'Osteoporosis', 'Normal bone density', 'Severe osteoporosis', 'Osteomalacia'],
    correctAnswer: 0,
    explanationEn: 'DXA: T-score -1.8 = osteopenia (-1 to -2.5). Treat if -2.5 or less (osteoporosis) or if high FRAX risk.',
    explanationZh: 'DXA：T-score -1.8=骨量减少（-1至-2.5）。≤-2.5（骨质疏松）或FRAX高风险时治疗。',
    explanationEs: 'DXA: T-score -1.8 = osteopenia. Tratar si ≤-2.5 o alto riesgo FRAX.'
  },
  {
    id: 814, step: 'step3', subject: 'Preventive Medicine',
    question: 'A 50F at high risk for breast cancer (BRCA1 mutation). Preventive strategy?',
    options: ['Prophylactic bilateral mastectomy', 'Annual mammogram only', 'Lumpectomy', 'Tamoxifen only', 'Chemotherapy'],
    correctAnswer: 0,
    explanationEn: 'BRCA1 mutation: prophylactic bilateral mastectomy at age 35-40 or when childbearing complete. Reduces breast cancer risk 90%.',
    explanationZh: 'BRCA1突变：35-40岁或完成生育后预防性双侧乳房切除术。降低乳腺癌风险90%。',
    explanationEs: 'Mutacion BRCA1: mastectomia profilactica bilateral. Reduce riesgo de cancer de mama 90%.'
  },
  {
    id: 815, step: 'step3', subject: 'Preventive Medicine',
    question: 'A 35M with BMI 39, T2DM, hypertension. Bariatric surgery candidate?',
    options: ['Yes, BMI ≥35 with obesity-related comorbidities', 'No, BMI <40', 'Yes, but only for BMI ≥45', 'No, T2DM is contraindication', 'Yes, but only BMI ≥50'],
    correctAnswer: 0,
    explanationEn: 'Bariatric surgery: BMI ≥40 or BMI ≥35 with obesity-related comorbidities. Results in significant weight loss, DM remission.',
    explanationZh: '减肥手术：BMI≥40或BMI≥35伴肥胖相关合并症。显著减重、DM缓解。',
    explanationEs: 'Cirugia bariatrica: IMC ≥40 o IMC ≥35 con comorbilidades. Remision de DM.'
  },
  {
    id: 816, step: 'step3', subject: 'Biostatistics',
    question: 'A study compares mortality between Drug A and placebo. Mortality 5% vs 10%. NNT?',
    options: ['20', '10', '50', '100', '200'],
    correctAnswer: 0,
    explanationEn: 'NNT = 1/ARR = 1/(0.10-0.05) = 1/0.05 = 20. Number needed to treat to prevent 1 death.',
    explanationZh: 'NNT = 1/ARR = 1/(0.10-0.05) = 1/0.05 = 20。预防1例死亡需要治疗20例。',
    explanationEs: 'NNT = 1/RAR = 1/(0.10-0.05) = 20. Para prevenir 1 muerte.'
  },
  {
    id: 817, step: 'step3', subject: 'Biostatistics',
    question: 'A study has p = 0.03. What does this mean?',
    options: ['Probability observed result (or more extreme) if null hypothesis true', 'Probability that null hypothesis is true', 'Probability that treatment is effective', 'Probability of Type I error', 'Probability of Type II error'],
    correctAnswer: 0,
    explanationEn: 'p-value: probability of obtaining observed result (or more extreme) if null hypothesis is true. NOT probability null hypothesis is true.',
    explanationZh: 'p值：如果零假设为真，获得观察结果（或更极端）的概率。不是零假设为真的概率。',
    explanationEs: 'Valor p: probabilidad de obtener resultado observado (o mas extremo) si hipotesis nula es cierta.'
  },
  {
    id: 818, step: 'step3', subject: 'Biostatistics',
    question: 'A study has statistical power of 80%. What does this mean?',
    options: ['80% chance of finding true difference if one exists', '80% chance treatment works', '20% chance of Type I error', '80% chance of valid results', '80% chance of rejecting null hypothesis'],
    correctAnswer: 0,
    explanationEn: 'Statistical power = 1 - beta (Type II error). 80% power means 80% chance of detecting a true difference if one exists.',
    explanationZh: '统计功效=1-β（II类错误）。80%功效意味着如果存在真实差异，有80%几率检测到。',
    explanationEs: 'Potencia estadistica = 1-beta. 80% significa 80% probabilidad de detectar diferencia real si existe.'
  },
  {
    id: 819, step: 'step3', subject: 'Biostatistics',
    question: 'Cutoff is moved to increase test sensitivity. What happens to specificity?',
    options: ['Decreases', 'Increases', 'No change', 'Cannot be determined', 'Same'],
    correctAnswer: 0,
    explanationEn: 'Lowering cutoff increases sensitivity but decreases specificity. Trade-off: false positives increase.',
    explanationZh: '降低阈值增加敏感度但降低特异度。权衡：假阳性增加。',
    explanationEs: 'Bajar umbral aumenta sensibilidad pero disminuye especificidad. Compensacion: mas falsos positivos.'
  },
  {
    id: 820, step: 'step3', subject: 'Biostatistics',
    question: 'A screening test for a rare cancer (prevalence 0.1%) has 99% sensitivity and 99% specificity. If a patient tests positive, most likely?',
    options: ['False positive', 'True positive', 'Cancer present', 'Need more testing', 'Indeterminate'],
    correctAnswer: 0,
    explanationEn: 'With 0.1% prevalence and 99%/99% test: PPV = (0.01*0.99)/(0.01*0.99 + 0.999*0.01) ≈ 9%. 91% chance positive test is false positive.',
    explanationZh: '患病率0.1%、敏感度特异度各99%：PPV≈9%。91%可能阳性检查是假阳性。',
    explanationEs: 'Con prevalencia 0.1% y prueba 99%/99%: VPP ≈ 9%. 91% de positivos son falsos positivos.'
  },
  {
    id: 821, step: 'step1', subject: 'Pathology',
    question: 'Autopsy of a 55F with cirrhosis, daughter has same disease. Liver: alpha1-antitrypsin deficiency. PAS-positive globules in?',
    options: ['Hepatocyte endoplasmic reticulum', 'Hepatocyte mitochondria', 'Bile canaliculi', 'Kupffer cells', 'Portal tracts'],
    correctAnswer: 0,
    explanationEn: 'A1AT deficiency: misfolded A1AT accumulates in hepatocyte ER (PAS+ globules), leads to cirrhosis and panacinar emphysema. PiZZ phenotype.',
    explanationZh: 'A1AT缺乏：错误折叠A1AT积聚在肝细胞ER（PAS+球状体），导致肝硬化和全小叶肺气肿。PiZZ表型。',
    explanationEs: 'Deficiencia de A1AT: globulos PAS+ en RE de hepatocitos. Cirrosis y enfisema panacinar.'
  },
  {
    id: 822, step: 'step1', subject: 'Pathology',
    question: 'A 70M with BPH wakes up unable to void. Acute urinary retention. What is the immediate management?',
    options: ['Foley catheter placement', 'Transurethral resection immediately', 'Alpha-blocker', 'Finasteride', 'Observation'],
    correctAnswer: 0,
    explanationEn: 'Acute urinary retention → Foley catheter placement. Then urologic workup and alpha-blocker or surgery based on cause.',
    explanationZh: '急性尿潴留→留置导尿管。然后泌尿系统检查和α阻滞剂或手术。',
    explanationEs: 'Retencion urinaria aguda → colocacion de sonda de Foley. Luego estudio urologico.'
  },
  {
    id: 823, step: 'step1', subject: 'Pathology',
    question: 'A 30F with Hashimoto thyroiditis. Most likely histologic finding on biopsy?',
    options: ['Lymphocytic infiltrate + Hurthle cell metaplasia', 'Granulomas', 'Caseating granulomas', 'Amyloid', 'Follicular hyperplasia'],
    correctAnswer: 0,
    explanationEn: 'Hashimoto thyroiditis: diffuse lymphocytic infiltration, Hurthle cell metaplasia, lymphoid follicles. Anti-TPO and anti-Tg antibodies.',
    explanationZh: '桥本甲状腺炎：弥漫性淋巴细胞浸润、Hurthle细胞化生、淋巴滤泡。抗TPO和抗Tg抗体。',
    explanationEs: 'Tiroiditis de Hashimoto: infiltracion linfocitica difusa, metaplasia de celulas de Hurthle.'
  },
  {
    id: 824, step: 'step1', subject: 'Physiology',
    question: 'In a patient with metabolic acidosis and high anion gap, MUDPILES mnemonic includes which conditions?',
    options: ['Methanol, Uremia, DKA, Paraldehyde, Isoniazid, Lactate, Ethylene glycol, Salicylate', 'Only DKA', 'Only lactate', 'Ketoacidosis only', 'Uremia only'],
    correctAnswer: 0,
    explanationEn: 'MUDPILES: Methanol, Uremia, DKA, Paraldehyde, INH/Iron, Lactate, Ethylene glycol, Salicylate. High anion gap metabolic acidosis.',
    explanationZh: 'MUDPILES：甲醇、尿毒症、DKA、副醛、INH/铁、乳酸、乙二醇、水杨酸。高阴离子间隙代谢性酸中毒。',
    explanationEs: 'MUDPILES: Metanol, Uremia, CAD, Paraldehido, INH/Hierro, Lactato, Etilenglicol, Salicilato.'
  },
  {
    id: 825, step: 'step1', subject: 'Physiology',
    question: 'During exercise, what happens to pulmonary vascular resistance and O2 extraction?',
    options: ['Pulmonary vascular resistance decreases, O2 extraction increases', 'PVR increases', 'Both increase', 'Both decrease', 'No change'],
    correctAnswer: 0,
    explanationEn: 'Exercise: increased CO → PVR decreases (recruitment of pulmonary capillaries). O2 extraction increases (a-V O2 difference widens).',
    explanationZh: '运动：CO增加→PVR降低（肺毛细血管募集）。O2提取增加（a-V O2差增大）。',
    explanationEs: 'Ejercicio: GC aumentado → RVP disminuye (reclutamiento capilar). Extraccion de O2 aumenta.'
  },
  {
    id: 826, step: 'step1', subject: 'Pathology',
    question: 'A 60M with chronic hepatitis C, cirrhosis. Most likely complication causing death?',
    options: ['Hepatocellular carcinoma', 'Variceal hemorrhage', 'SBP', 'Hepatic encephalopathy', 'Hepatorenal syndrome'],
    correctAnswer: 0,
    explanationEn: 'HCC: leading cause of death in cirrhosis. HCV cirrhosis has ~3%/year risk of HCC. Surveillance with ultrasound + AFP every 6 months.',
    explanationZh: 'HCC：肝硬化死亡的主要原因。HCV肝硬化约3%/年HCC风险。每6月超声+AFP监测。',
    explanationEs: 'CHC: principal causa de muerte en cirrosis. VHC ~3%/ano riesgo. Vigilancia con ecografia + AFP.'
  },
  {
    id: 827, step: 'step1', subject: 'Pathology',
    question: 'A 45F with breast cancer, ER+/PR+/HER2-. Most appropriate adjuvant therapy?',
    options: ['Endocrine therapy (tamoxifen or aromatase inhibitor)', 'Trastuzumab', 'Chemotherapy alone', 'Pertuzumab', 'Lapatinib'],
    correctAnswer: 0,
    explanationEn: 'ER+/PR+: endocrine therapy (tamoxifen premenopausal, AI postmenopausal). HER2- → no anti-HER2 therapy needed.',
    explanationZh: 'ER+/PR+：内分泌治疗（绝经前他莫昔芬，绝经后AI）。HER2-→无需抗HER2治疗。',
    explanationEs: 'RE+/RP+: terapia endocrina (tamoxifeno premenopausia, IA postmenopausia). HER2- → sin anti-HER2.'
  },
  {
    id: 828, step: 'step1', subject: 'Physiology',
    question: 'A 55M with chronic vomiting develops metabolic alkalosis. Mechanism?',
    options: ['Loss of HCl → contraction alkalosis', 'Loss of HCO3-', 'Gain of acid', 'Loss of potassium', 'Renal acid retention'],
    correctAnswer: 0,
    explanationEn: 'Vomiting: loss of HCl → metabolic alkalosis. Also volume contraction activates renin-angiotensin-aldosterone → further alkalosis.',
    explanationZh: '呕吐：丢失HCl→代谢性碱中毒。容量收缩也激活RAS→进一步碱中毒。',
    explanationEs: 'Vomitos: perdida de HCl → alcalosis metabolica. Contraccion de volumen activa RAA.'
  },
  {
    id: 829, step: 'step1', subject: 'Pathology',
    question: 'A 30F with ovarian cancer (BRCA1 mutation). Risk of which other cancer?',
    options: ['Breast cancer', 'Lung cancer', 'Colon cancer', 'Cervical cancer', 'Uterine cancer'],
    correctAnswer: 0,
    explanationEn: 'BRCA1 mutation: increased risk of breast (60-70% lifetime), ovarian (40-50%), fallopian tube, peritoneal, pancreatic cancer.',
    explanationZh: 'BRCA1突变：增加乳腺癌（60-70%终身）、卵巢癌（40-50%）、输卵管癌、腹膜癌、胰腺癌风险。',
    explanationEs: 'Mutacion BRCA1: mayor riesgo de cancer de mama (60-70%), ovario (40-50%).'
  },
  {
    id: 830, step: 'step1', subject: 'Physiology',
    question: 'A 45M with cirrhosis and ascites develops hepatorenal syndrome type 1. Mechanism?',
    options: ['Splanchnic vasodilation → renal vasoconstriction', 'Direct renal toxicity', 'Obstructive uropathy', 'Glomerulonephritis', 'ATN'],
    correctAnswer: 0,
    explanationEn: 'HRS type 1: splanchnic vasodilation (due to portal HTN) → renal vasoconstriction (compensatory) → decreased renal perfusion. Treat with terlipressin + albumin.',
    explanationZh: 'HRS 1型：内脏血管扩张（门脉高压）→肾血管收缩（代偿性）→肾灌注减少。特利加压素+白蛋白治疗。',
    explanationEs: 'SHR tipo 1: vasodilatacion esplacnica → vasoconstriccion renal compensatoria. Terlipresina + albumina.'
  },
  {
    id: 831, step: 'step2', subject: 'Hematology',
    question: 'A 60M with fatigue, pallor. CBC: Hb 7.5, MCV 105, hypersegmented neutrophils. Dx?',
    options: ['Megaloblastic anemia (B12/folate deficiency)', 'Iron deficiency anemia', 'Anemia of chronic disease', 'Thalassemia', 'Sideroblastic anemia'],
    correctAnswer: 0,
    explanationEn: 'Macrocytic anemia (MCV >100) with hypersegmented neutrophils: B12 or folate deficiency. Check B12, folate, homocysteine, MMA.',
    explanationZh: '大细胞性贫血（MCV>100）伴多分叶中性粒细胞：B12或叶酸缺乏。检查B12、叶酸、同型半胱氨酸、MMA。',
    explanationEs: 'Anemia macrocitica (VCM >100) con neutrofilos hipersegmentados: deficit de B12/folato.'
  },
  {
    id: 832, step: 'step2', subject: 'Hematology',
    question: 'A 25F with heavy menses. CBC: Hb 9.0, MCV 72, low ferritin. Dx?',
    options: ['Iron deficiency anemia', 'Anemia of chronic disease', 'Thalassemia', 'Sideroblastic anemia', 'Megaloblastic anemia'],
    correctAnswer: 0,
    explanationEn: 'Microcytic anemia (MCV <80), low ferritin: iron deficiency anemia. Most common cause: blood loss. Treat with iron supplementation.',
    explanationZh: '小细胞性贫血（MCV<80），低铁蛋白：缺铁性贫血。最常见原因：失血。补铁治疗。',
    explanationEs: 'Anemia microcitica (VCM <80), ferritina baja: anemia ferropenica. Causa mas comun: perdida de sangre.'
  },
  {
    id: 833, step: 'step2', subject: 'Hematology',
    question: 'A 55M with splenomegaly, Hb 12, WBC 90K with immature myeloid forms. Dx?',
    options: ['CML', 'AML', 'ALL', 'CLL', 'Myelofibrosis'],
    correctAnswer: 0,
    explanationEn: 'CML: leukocytosis with left shift (immature myeloid forms), splenomegaly, Philadelphia chromosome (BCR-ABL). Treat with tyrosine kinase inhibitors.',
    explanationZh: 'CML：白细胞增多伴左移（未成熟髓系细胞）、脾大、费城染色体（BCR-ABL）。酪氨酸激酶抑制剂治疗。',
    explanationEs: 'LMC: leucocitosis con desviacion a la izquierda, esplenomegalia, cromosoma Filadelfia.'
  },
  {
    id: 834, step: 'step2', subject: 'Hematology',
    question: 'A 45M with splenomegaly, Hb 9, myelofibrosis. JAK2 V617F positive. Dx?',
    options: ['Primary myelofibrosis', 'CML', 'Essential thrombocythemia', 'Polycythemia vera', 'MDS'],
    correctAnswer: 0,
    explanationEn: 'Primary myelofibrosis: JAK2 V617F+ (50%), splenomegaly, tear-drop RBCs, leukoerythroblastic blood picture. Bone marrow fibrosis.',
    explanationZh: '原发性骨髓纤维化：JAK2 V617F+（50%）、脾大、泪滴形红细胞、白红幼血象。骨髓纤维化。',
    explanationEs: 'Mielofibrosis primaria: JAK2 V617F+, esplenomegalia, eritrocitos en lagrima.'
  },
  {
    id: 835, step: 'step2', subject: 'Hematology',
    question: 'A 70M with anemia, thrombocytopenia, and blasts in peripheral blood. Bone marrow: 25% blasts. Dx?',
    options: ['AML', 'MDS', 'ALL', 'CML', 'Lymphoma'],
    correctAnswer: 0,
    explanationEn: 'AML: >20% blasts in bone marrow or peripheral blood. Sudden onset anemia, thrombocytopenia, neutropenia (marrow failure).',
    explanationZh: 'AML：骨髓或外周血原始细胞>20%。突发贫血、血小板减少、中性粒细胞减少（骨髓衰竭）。',
    explanationEs: 'LAM: >20% blastos en medula osea o sangre periferica.'
  },
  {
    id: 836, step: 'step2', subject: 'Hematology',
    question: 'A 5yo with fever, pallor, and petechiae. CBC: pancytopenia. Bone marrow: hypocellular with few blasts. Dx?',
    options: ['ALL', 'AML', 'MDS', 'CML', 'Hodgkin lymphoma'],
    correctAnswer: 0,
    explanationEn: 'ALL: most common childhood leukemia. Pancytopenia, fever, bone pain. Hypercellular marrow with >20% lymphoblasts.',
    explanationZh: 'ALL：最常见儿童白血病。全血细胞减少、发热、骨痛。骨髓细胞丰富伴>20%淋巴母细胞。',
    explanationEs: 'LLA: leucemia infantil mas comun. Pancitopenia, fiebre, dolor oseo.'
  },
  {
    id: 837, step: 'step2', subject: 'Hematology',
    question: 'A 60M with macrocytic anemia, no response to B12 or folate. Bone marrow: ringed sideroblasts. Dx?',
    options: ['Sideroblastic anemia', 'Iron deficiency', 'Megaloblastic anemia', 'Anemia of chronic disease', 'Thalassemia'],
    correctAnswer: 0,
    explanationEn: 'Sideroblastic anemia: ringed sideroblasts on bone marrow iron stain. Defect in heme synthesis. Acquired (MDS) or congenital. B6 may help.',
    explanationZh: '铁粒幼细胞性贫血：骨髓铁染色见环形铁粒幼细胞。血红素合成缺陷。获得性（MDS）或先天性。B6可能有效。',
    explanationEs: 'Anemia sideroblastica: sideroblastos en anillo. Defecto en sintesis de hemo.'
  },
  {
    id: 838, step: 'step2', subject: 'Hematology',
    question: 'A 40F with fatigue. CBC: Hb 7, MCV 78, RDW normal, Hb electrophoresis: HbA2 elevated. Dx?',
    options: ['Beta-thalassemia trait', 'Alpha-thalassemia', 'Iron deficiency anemia', 'Anemia of chronic disease', 'Sideroblastic anemia'],
    correctAnswer: 0,
    explanationEn: 'Beta-thalassemia trait (minor): mild anemia, MCV low, RDW normal, HbA2 >3.5%. No treatment needed. Genetic counseling.',
    explanationZh: '轻型β-地中海贫血：轻度贫血，MCV低，RDW正常，HbA2>3.5%。无需治疗。遗传咨询。',
    explanationEs: 'Rasgo beta-talasemico: anemia leve, VCM bajo, HbA2 >3.5%. Sin tratamiento.'
  },
  {
    id: 839, step: 'step2', subject: 'Hematology',
    question: 'A 70M with normocytic anemia, CKD (eGFR 20). Ferritin 200, iron saturation 18%. Appropriate management?',
    options: ['ESA (epoetin alfa) + IV iron', 'Iron only', 'Blood transfusion', 'B12', 'Folate'],
    correctAnswer: 0,
    explanationEn: 'CKD anemia: ESA + IV iron if iron stores low (ferritin <200, TSAT <30%). Target Hb 10-11 g/dL.',
    explanationZh: 'CKD贫血：ESA+IV铁，如果铁储备低（铁蛋白<200，TSAT<30%）。目标Hb 10-11 g/dL。',
    explanationEs: 'Anemia de ERC: AEE + hierro IV si reservas bajas.'
  },
  {
    id: 840, step: 'step2', subject: 'Hematology',
    question: 'A 50F with recurrent DVT on warfarin (INR 2-3). Antiphospholipid antibodies positive. Management?',
    options: ['Warfarin higher INR (3-4) or LMWH', 'Continue same warfarin dose', 'Aspirin', 'DOAC', 'Clopidogrel'],
    correctAnswer: 0,
    explanationEn: 'APS with recurrent VTE: warfarin to target INR 3-4, or LMWH. Single positive APS with provoked VTE: warfarin INR 2-3.',
    explanationZh: 'APS复发VTE：华法林目标INR 3-4，或LMWH。单次阳性APS伴诱发VTE：华法林INR 2-3。',
    explanationEs: 'SAF con VTE recurrente: warfarina INR 3-4 o HBPM.'
  },
  {
    id: 841, step: 'step2', subject: 'Hematology',
    question: 'A 65M with fatigue, weight loss, peripheral neuropathy. Serum protein electrophoresis: M-spike IgG lambda. Dx?',
    options: ['Multiple myeloma', 'Monoclonal gammopathy of undetermined significance (MGUS)', 'Waldenstrom macroglobulinemia', 'Amyloidosis', 'CLL'],
    correctAnswer: 0,
    explanationEn: 'Multiple myeloma: CRAB criteria (hyperCalcemia, Renal insufficiency, Anemia, Bone lesions). M spike, >10% plasma cells in marrow.',
    explanationZh: '多发性骨髓瘤：CRAB标准（高钙血症、肾功能不全、贫血、骨病变）。M峰，骨髓浆细胞>10%。',
    explanationEs: 'Mieloma multiple: criterios CRAB. Pico M, >10% celulas plasmaticas en medula.'
  },
  {
    id: 842, step: 'step2', subject: 'Hematology',
    question: 'A newborn with prolonged bleeding after circumcision. PT normal, aPTT prolonged. Mixing study corrects. Dx?',
    options: ['Hemophilia A (factor VIII deficiency)', 'Hemophilia B (factor IX)', 'Von Willebrand disease', 'Factor VII deficiency', 'Factor XIII deficiency'],
    correctAnswer: 0,
    explanationEn: 'Hemophilia A: X-linked, factor VIII deficiency. Prolonged aPTT, normal PT, mixing study corrects. Factor VIII assay confirms.',
    explanationZh: '血友病A：X连锁，因子VIII缺乏。aPTT延长，PT正常，混合试验纠正。因子VIII测定确认。',
    explanationEs: 'Hemofilia A: ligada al X, deficit de factor VIII. aPTT prolongado, TP normal.'
  },
  {
    id: 843, step: 'step2', subject: 'Hematology',
    question: 'A 30F with epistaxis, menorrhagia, mucosal bleeding. PT normal, aPTT normal. Dx?',
    options: ['Von Willebrand disease (type 1)', 'Hemophilia A', 'Platelet disorder', 'Factor VII deficiency', 'Factor XIII deficiency'],
    correctAnswer: 0,
    explanationEn: 'VWD: mucosal bleeding (epistaxis, menorrhagia), normal PT/aPTT. Most common inherited bleeding disorder. Type 1 most common (partial quantitative).',
    explanationZh: 'VWD：黏膜出血（鼻衄、月经过多），PT/aPTT正常。最常见遗传性出血性疾病。1型最常见。',
    explanationEs: 'Enfermedad de von Willebrand: sangrado mucoso (epistaxis, menorragia). PT/aPTT normales.'
  },
  {
    id: 844, step: 'step2', subject: 'Hematology',
    question: 'A 55M with sudden onset severe hemolytic anemia, hemoglobinuria after eating fava beans. Dx?',
    options: ['G6PD deficiency', 'Hereditary spherocytosis', 'PNH', 'Sickle cell disease', 'Thalassemia'],
    correctAnswer: 0,
    explanationEn: 'G6PD deficiency: X-linked, hemolytic anemia after oxidative stress (fava beans, sulfonamides, primaquine). Heinz bodies, bite cells on smear.',
    explanationZh: 'G6PD缺乏：X连锁，氧化应激（蚕豆、磺胺类、伯氨喹）后溶血性贫血。Heinz小体，咬痕细胞。',
    explanationEs: 'Deficiencia de G6PD: anemia hemolitica tras estres oxidativo (habas, sulfonamidas).'
  },
  {
    id: 845, step: 'step2', subject: 'Hematology',
    question: 'A 60M with pancytopenia, aplastic (hypocellular) bone marrow. No blasts. Dx?',
    options: ['Aplastic anemia', 'MDS', 'AML', 'CML', ' ALL'],
    correctAnswer: 0,
    explanationEn: 'Aplastic anemia: pancytopenia with hypocellular bone marrow (empty marrow). Rule out drugs, infections (parvovirus B19, hepatitis).',
    explanationZh: '再生障碍性贫血：全血细胞减少伴低细胞性骨髓（空骨髓）。排除药物、感染（细小病毒B19、肝炎）。',
    explanationEs: 'Anemia aplasica: pancitopenia con medula hipocelular. Descartar farmacos, infecciones.'
  },
  {
    id: 846, step: 'step2', subject: 'Dermatology',
    question: 'A 25F with recurrent oral and genital ulcers, erythema nodosum. Dx?',
    options: ['Behcet disease', 'SLE', 'Crohn disease', 'HSV', 'Syphilis'],
    correctAnswer: 0,
    explanationEn: 'Behcet disease: recurrent oral/genital ulcers, uveitis, erythema nodosum, pathergy test positive. Treat with colchicine, steroids.',
    explanationZh: '白塞病：反复口腔/生殖器溃疡、葡萄膜炎、结节性红斑、针刺反应阳性。秋水仙碱、激素。',
    explanationEs: 'Enfermedad de Behcet: ulceras orales/genitales recurrentes, uveitis. Colchicina, esteroides.'
  },
  {
    id: 847, step: 'step2', subject: 'Dermatology',
    question: 'A 50M with psoriasis, joint pain (DIP joints), nail pitting. Dx?',
    options: ['Psoriatic arthritis', 'Rheumatoid arthritis', 'Osteoarthritis', 'Ankylosing spondylitis', 'Reactive arthritis'],
    correctAnswer: 0,
    explanationEn: 'Psoriatic arthritis: DIP joint involvement, nail pitting, psoriatic skin lesions. RF negative. HLA-B27 association.',
    explanationZh: '银屑病关节炎：DIP关节受累、甲凹点、银屑病皮损。RF阴性。HLA-B27关联。',
    explanationEs: 'Artritis psoriasica: afectacion de IFD, piqueteado ungueal. FR negativo.'
  },
  {
    id: 848, step: 'step2', subject: 'Dermatology',
    question: 'A 30M with honey-colored crusted lesions around nose. Dx?',
    options: ['Impetigo (S. aureus/GAS)', 'Cellulitis', 'Folliculitis', 'Erysipelas', 'Herpes simplex'],
    correctAnswer: 0,
    explanationEn: 'Impetigo: honey-colored crusted lesions. S. aureus (non-bullous) or GAS. Treat with topical mupirocine or oral cephalexin.',
    explanationZh: '脓疱疮：蜜色结痂皮损。金葡菌（非大疱性）或GAS。局部莫匹罗星或口服头孢氨苄。',
    explanationEs: 'Impetigo: lesiones costrosas de color miel. S. aureus o EGA. Mupirocina topica.'
  },
  {
    id: 849, step: 'step2', subject: 'Dermatology',
    question: 'A 10yo with pruritic papules and burrows on wrists and interdigital spaces. Dx?',
    options: ['Scabies', 'Atopic dermatitis', 'Contact dermatitis', 'Psoriasis', 'Lichen planus'],
    correctAnswer: 0,
    explanationEn: 'Scabies: burrows, pruritus worse at night, interdigital spaces/wrists. Treat with permethrin 5% cream.',
    explanationZh: '疥疮：隧道、夜间瘙痒加重、指缝/腕部。5%氯氰菊酯乳膏治疗。',
    explanationEs: 'Escabiosis: tuneles, prurito nocturno, espacios interdigitales. Permetrina 5%.'
  },
  {
    id: 850, step: 'step2', subject: 'Dermatology',
    question: 'A 60M with erythema multiforme. Target lesions on palms and soles. Most common trigger?',
    options: ['HSV infection', 'Mycoplasma pneumoniae', 'Mycobacterium TB', 'Poxvirus', 'Fungus'],
    correctAnswer: 0,
    explanationEn: 'Erythema multiforme: target lesions, often triggered by HSV. Also from Mycoplasma (EM major/Stevens-Johnson syndrome). Self-limited.',
    explanationZh: '多形红斑：靶形皮损，常由HSV触发。也可由支原体（EM重型/Stevens-Johnson综合征）触发。自限性。',
    explanationEs: 'Eritema multiforme: lesiones en diana, frecuentemente desencadenado por VHS. Autolimitado.'
  },
  {
    id: 851, step: 'step2', subject: 'Dermatology',
    question: 'A 45F with purpura on lower extremities, abdominal pain, and joint pain. Urinalysis: hematuria and proteinuria. Dx?',
    options: ['Henoch-Schonlein purpura (IgA vasculitis)', 'ITP', 'ANCA vasculitis', 'SLE', 'PAN'],
    correctAnswer: 0,
    explanationEn: 'HSP: palpable purpura (lower extremities), abdominal pain, arthralgia, renal disease. IgA deposition. Common in children.',
    explanationZh: 'HSP：可触性紫癜（下肢）、腹痛、关节痛、肾病。IgA沉积。常见于儿童。',
    explanationEs: 'Purpura de Schonlein-Henoch: purpura palpable, dolor abdominal, artralgia. Deposicion de IgA.'
  },
  {
    id: 852, step: 'step2', subject: 'Dermatology',
    question: 'A 60M with sun-exposed areas blistering, fragile skin. Nikolsky sign positive. Dx?',
    options: ['Pemphigus vulgaris', 'Bullous pemphigoid', 'SLE', 'Dermatitis herpetiformis', 'Erythema multiforme'],
    correctAnswer: 0,
    explanationEn: 'Pemphigus vulgaris: intraepidermal blistering, oral involvement, Nikolsky sign. Anti-desmoglein IgG. Treat with steroids + immunosuppression.',
    explanationZh: '寻常型天疱疮：表皮内水疱、口腔受累、Nikolsky征。抗桥粒芯蛋白IgG。激素+免疫抑制。',
    explanationEs: 'Penfigo vulgar: ampollas intraepidermicas, afectacion oral, signo de Nikolsky.'
  },
  {
    id: 853, step: 'step2', subject: 'Dermatology',
    question: 'A 70F with tense blisters on flexor surfaces, oral sparing. Nikolsky sign negative. Dx?',
    options: ['Bullous pemphigoid', 'Pemphigus vulgaris', 'Dermatitis herpetiformis', 'Epidermolysis bullosa', 'Linear IgA disease'],
    correctAnswer: 0,
    explanationEn: 'Bullous pemphigoid: subepidermal blisters, flexural, oral sparing, Nikolsky negative. Anti-BP180/230 IgG. Responds to steroids.',
    explanationZh: '大疱性类天疱疮：表皮下疱、屈侧、口腔豁免、Nikolsky阴性。抗BP180/230 IgG。激素有效。',
    explanationEs: 'Penfigoide ampolloso: ampollas subepidermicas, flexural, sin afectacion oral.'
  },
  {
    id: 854, step: 'step2', subject: 'Dermatology',
    question: 'A 20M with recurrent herpes simplex labialis. Best management?',
    options: ['Valacyclovir or acyclovir (topical or oral)', 'Antifungals', 'Antibiotics', 'Steroids', 'Surgery'],
    correctAnswer: 0,
    explanationEn: 'HSV labialis: valacyclovir or acyclovir. Prodrome tingling → start immediately. For frequent recurrences: daily suppressive therapy.',
    explanationZh: '单纯疱疹唇炎：伐昔洛韦或阿昔洛韦。前驱期刺痛感→立即开始。频繁复发：每日抑制治疗。',
    explanationEs: 'Herpes labial: valaciclovir o aciclovir. Iniciar inmediatamente al prodromo.'
  },
  {
    id: 855, step: 'step2', subject: 'Dermatology',
    question: 'A 10yo with atopic dermatitis (eczema), severe pruritus, and lichenification. Management?',
    options: ['Topical steroids + emollients', 'Systemic antibiotics', 'Systemic steroids first-line', 'Topical antifungals', 'Systemic antifungals'],
    correctAnswer: 0,
    explanationEn: 'Atopic dermatitis: emollients (ceramides), topical steroids (mild/mod for acute). If severe → systemic immunosuppression.',
    explanationZh: '特应性皮炎：润肤剂（神经酰胺），局部激素（轻/中度急性）。严重→全身免疫抑制。',
    explanationEs: 'Dermatitis atopica: emolientes, esteroides topicos. Si grave → inmunosupresion sistemica.'
  },
  {
    id: 856, step: 'step2', subject: 'Ophthalmology',
    question: 'A 60M with sudden onset painless vision loss ("curtain coming down"). Dx?',
    options: ['Retinal artery occlusion', 'Retinal vein occlusion', 'Retinal detachment', 'Macular degeneration', 'Cataract'],
    correctAnswer: 0,
    explanationEn: 'Central retinal artery occlusion: sudden painless vision loss, cherry-red spot. Emergency. Ocular massage, anterior chamber paracentesis.',
    explanationZh: '视网膜中央动脉阻塞：突发无痛性视力丧失，樱桃红斑。眼科急症。眼球按摩、前房穿刺。',
    explanationEs: 'Oclusion de arteria central de la retina: perdida subita indolora de vision.'
  },
  {
    id: 857, step: 'step2', subject: 'Ophthalmology',
    question: 'A 70M with gradual vision loss, needing more light to read. Fundoscopy: drusen, RPE changes. Dx?',
    options: ['Age-related macular degeneration (dry)', 'Cataract', 'Glaucoma', 'Retinal detachment', 'Diabetic retinopathy'],
    correctAnswer: 0,
    explanationEn: 'AMD dry: drusen, RPE changes, gradual vision loss. Anti-oxidant vitamins (AREDS2 formula) may slow progression.',
    explanationZh: 'AMD干性：玻璃膜疣、RPE改变、渐进性视力下降。抗氧化维生素（AREDS2配方）可延缓进展。',
    explanationEs: 'DMAE seca: drusas, cambios en EPR. Vitaminas antioxidantes (AREDS2).'
  },
  {
    id: 858, step: 'step2', subject: 'Ophthalmology',
    question: 'A 65M with sudden onset blurred vision, halos around lights. Exam: mid-dilated, fixed pupil, increased IOP. Dx?',
    options: ['Acute angle-closure glaucoma', 'Open-angle glaucoma', 'Macular degeneration', 'Cataract', 'Optic neuritis'],
    correctAnswer: 0,
    explanationEn: 'Acute angle-closure glaucoma: mid-dilated fixed pupil, increased IOP, halos. Emergency. Pilocarpine, acetazolamide, mannitol.',
    explanationZh: '急性闭角型青光眼：瞳孔中等散大固定、IOP升高、虹视。眼科急症。毛果芸香碱、乙酰唑胺、甘露醇。',
    explanationEs: 'Glaucoma agudo de angulo cerrado: pupila midriatica fija, aumento de PIO.'
  },
  {
    id: 859, step: 'step2', subject: 'Ophthalmology',
    question: 'A 30F with multiple sclerosis, sudden onset painful vision loss in left eye. Dx?',
    options: ['Optic neuritis', 'Retinal artery occlusion', 'Glaucoma', 'Cataract', 'Macular degeneration'],
    correctAnswer: 0,
    explanationEn: 'Optic neuritis: painful vision loss, RAPD, usually unilateral. Associated with MS. IV methylprednisolone may speed recovery.',
    explanationZh: '视神经炎：痛性视力丧失，RAPD，通常单侧。与MS关联。IV甲泼尼龙可加速恢复。',
    explanationEs: 'Neuritis optica: perdida dolorosa de vision, RAPD. Asociada a EM.'
  },
  {
    id: 860, step: 'step2', subject: 'Ophthalmology',
    question: 'A 60F with scleritis, deep boring eye pain, bluish-red sclera. Dx?',
    options: ['Scleritis', 'Episcleritis', 'Conjunctivitis', 'Keratitis', 'Uveitis'],
    correctAnswer: 0,
    explanationEn: 'Scleritis: deep eye pain, bluish-red discoloration. May be associated with RA, GPA, etc. Requires systemic therapy (NSAIDs, steroids).',
    explanationZh: '巩膜炎：深部眼痛，蓝红色巩膜。可能与RA、GPA等关联。需全身治疗（NSAIDs、激素）。',
    explanationEs: 'Escleritis: dolor ocular profundo, esclerotica azul-rojiza. Asociada a AR, GPA.'
  },
  {
    id: 861, step: 'step2', subject: 'Ophthalmology',
    question: 'A 55M with sudden onset vitreous hemorrhage in a diabetic patient. Most likely cause?',
    options: ['Proliferative diabetic retinopathy', 'Central retinal vein occlusion', 'Retinal tear', 'Macular edema', 'Posterior vitreous detachment'],
    correctAnswer: 0,
    explanationEn: 'Proliferative diabetic retinopathy: neovascularization → vitreous hemorrhage, retinal detachment. Treatment: panretinal photocoagulation.',
    explanationZh: '增生性糖尿病视网膜病变：新生血管→玻璃体出血、视网膜脱离。治疗：全视网膜光凝。',
    explanationEs: 'Retinopatia diabetica proliferativa: neovascularizacion → hemorragia vitrea.'
  },
  {
    id: 862, step: 'step2', subject: 'Ophthalmology',
    question: 'A 25M with red eye, mucopurulent discharge, and preauricular lymphadenopathy. Dx?',
    options: ['Adenoviral conjunctivitis', 'Bacterial conjunctivitis', 'Allergic conjunctivitis', 'Herpes keratitis', 'Scleritis'],
    correctAnswer: 0,
    explanationEn: 'Adenoviral conjunctivitis: mucopurulent discharge, preauricular lymphadenopathy, highly contagious. Symptomatic treatment.',
    explanationZh: '腺病毒性结膜炎：黏液脓性分泌物、耳前淋巴结肿大、高度传染性。对症治疗。',
    explanationEs: 'Conjuntivitis adenovirica: secrecion mucopurulenta, adenopatia preauricular.'
  },
  {
    id: 863, step: 'step2', subject: 'Ophthalmology',
    question: 'A 70M with bilateral cataracts, glare at night. Best management?',
    options: ['Phacoemulsification with IOL implantation', 'Glasses', 'Topical steroid', 'Observation', 'Laser'],
    correctAnswer: 0,
    explanationEn: 'Cataract: surgical phacoemulsification with intraocular lens implantation when vision affects quality of life. Outpatient, highly successful.',
    explanationZh: '白内障：当视力影响生活质量时，超声乳化+IOL植入手术。门诊手术，成功率极高。',
    explanationEs: 'Catarata: facoemulsificacion con implante de LIO. Exitoso, ambulatorio.'
  },
  {
    id: 864, step: 'step2', subject: 'ENT',
    question: 'A 5yo with ear pain, fever, and bulging tympanic membrane. Dx?',
    options: ['Acute otitis media', 'Otitis media with effusion', 'Otitis externa', 'Mastoiditis', 'TMJ dysfunction'],
    correctAnswer: 0,
    explanationEn: 'AOM: bulging erythematous TM, ear pain, fever. Common after URI. First-line: watchful waiting (age >2) or amoxicillin.',
    explanationZh: 'AOM：鼓膜隆起充血、耳痛、发热。URI后常见。一线：观察等待（>2岁）或阿莫西林。',
    explanationEs: 'OMA: membrana timpanica abombada, otalgia, fiebre. Amoxicilina o espera vigilante.'
  },
  {
    id: 865, step: 'step2', subject: 'ENT',
    question: 'A 40M with unilateral hearing loss, tinnitus, and balance problems. MRI: acoustic neuroma. Management?',
    options: ['Surgical resection or stereotactic radiosurgery', 'Observation only', 'Hearing aid only', 'Steroids', 'Antibiotics'],
    correctAnswer: 0,
    explanationEn: 'Acoustic neuroma (vestibular schwannoma): hearing loss, tinnitus, vertigo. MRI of internal auditory canal. Resection or radiosurgery.',
    explanationZh: '听神经瘤（前庭神经鞘瘤）：听力下降、耳鸣、眩晕。内听道MRI。切除或放射外科。',
    explanationEs: 'Neurinoma del acustico: hipoacusia, acufeno, vertigo. Reseccion o radiocirugia.'
  },
  {
    id: 866, step: 'step2', subject: 'ENT',
    question: 'A 30M with unilateral clear nasal discharge after head trauma. What is this and what is the risk?',
    options: ['CSF leak → meningitis risk', 'Sinusitis', 'Allergic rhinitis', 'Nasal polyps', 'Deviated septum'],
    correctAnswer: 0,
    explanationEn: 'CSF rhinorrhea: clear nasal discharge after head trauma. Risk of ascending bacterial meningitis. Confirm with beta-2 transferrin.',
    explanationZh: 'CSF鼻漏：头部外伤后清亮鼻分泌物。上行细菌性脑膜炎风险。β-2转铁蛋白确认。',
    explanationEs: 'Rinorrea de LCR despues de trauma craneal. Riesgo de meningitis ascendente.'
  },
  {
    id: 867, step: 'step2', subject: 'ENT',
    question: 'A 50M with painless neck mass, smoker. What is the most likely Dx and next step?',
    options: ['Squamous cell carcinoma → fine needle aspiration', 'Thyroid nodule → US', 'Lymphoma → CT', 'Cyst → observation', 'Infection → antibiotics'],
    correctAnswer: 0,
    explanationEn: 'Neck mass + smoking history: head and neck squamous cell carcinoma. Next step: fine needle aspiration or biopsy.',
    explanationZh: '颈部肿块+吸烟史：头颈部鳞状细胞癌。下一步：细针穿刺或活检。',
    explanationEs: 'Masa cervical + tabaquismo: carcinoma escamoso de cabeza y cuello. PAFF o biopsia.'
  },
  {
    id: 868, step: 'step2', subject: 'ENT',
    question: 'A 10yo with recurrent group A streptococcal pharyngitis. Management?',
    options: ['Penicillin or cephalexin', 'Amoxicillin', 'Azithromycin', 'Ciprofloxacin', 'Observation'],
    correctAnswer: 0,
    explanationEn: 'GAS pharyngitis: penicillin VK (or amoxicillin) for 10 days. Treat even if symptoms resolve to prevent rheumatic fever.',
    explanationZh: 'GAS咽炎：青霉素VK（或阿莫西林）治疗10天。即使症状消失也治疗以预防风湿热。',
    explanationEs: 'Faringitis por EGA: penicilina VK (o amoxicilina) por 10 dias. Prevenir fiebre reumatica.'
  },
  {
    id: 869, step: 'step2', subject: 'Rheumatology',
    question: 'A 55F with morning stiffness >1h, symmetric polyarthritis (MCP, PIP), rheumatoid nodules. Anti-CCP positive. Dx?',
    options: ['Rheumatoid arthritis', 'Osteoarthritis', 'Psoriatic arthritis', 'SLE', 'Gout'],
    correctAnswer: 0,
    explanationEn: 'RA: symmetric polyarthritis, morning stiffness >1h, anti-CCP+, RF+. Treat with DMARDs (methotrexate) early.',
    explanationZh: 'RA：对称性多关节炎、晨僵>1h、抗CCP+、RF+。早期DMARDs（甲氨蝶呤）治疗。',
    explanationEs: 'AR: poliartritis simetrica, rigidez matutina >1h, anti-CCP+.'
  },
  {
    id: 870, step: 'step2', subject: 'Rheumatology',
    question: 'A 65M with acute onset monoarticular arthritis in MTP joint (podagra). Joint aspirate: negatively birefringent crystals. Dx?',
    options: ['Gout (monosodium urate)', 'Pseudogout (CPPD)', 'Septic arthritis', 'Osteoarthritis', 'RA'],
    correctAnswer: 0,
    explanationEn: 'Gout: negatively birefringent monosodium urate crystals. Acute: NSAIDs, colchicine, steroids. Chronic: allopurinol/febuxostat.',
    explanationZh: '痛风：负双折射单钠尿酸盐晶体。急性：NSAIDs、秋水仙碱、激素。慢性：别嘌醇/非布索坦。',
    explanationEs: 'Gota: cristales de urato monosodico con birrefringencia negativa.'
  },
  {
    id: 871, step: 'step2', subject: 'Rheumatology',
    question: 'A 70F with knee pain, crepitus, bony enlargement. Radiograph: joint space narrowing, subchondral sclerosis, osteophytes. Dx?',
    options: ['Osteoarthritis', 'RA', 'Gout', 'Pseudogout', 'Psoriatic arthritis'],
    correctAnswer: 0,
    explanationEn: 'OA: joint space narrowing, subchondral sclerosis, osteophytes. Non-inflammatory. Weight loss, exercise, NSAIDs.',
    explanationZh: 'OA：关节间隙变窄、软骨下硬化、骨赘。非炎症性。减重、运动、NSAIDs。',
    explanationEs: 'OA: estrechamiento del espacio articular, esclerosis subcondral, osteofitos.'
  },
  {
    id: 872, step: 'step2', subject: 'Rheumatology',
    question: 'A 45F with Raynaud phenomenon, sclerodactyly, and dysphagia. Anti-Scl-70 positive. Dx?',
    options: ['Systemic sclerosis (diffuse)', 'Limited systemic sclerosis (CREST)', 'SLE', 'Sjogren syndrome', 'Mixed connective tissue disease'],
    correctAnswer: 0,
    explanationEn: 'Systemic sclerosis: sclerodactyly, Raynaud, pulmonary fibrosis, anti-Scl-70+. Treat with immunosuppression for lung disease.',
    explanationZh: '系统性硬化症：指端硬化、雷诺现象、肺纤维化、抗Scl-70+。肺病用免疫抑制。',
    explanationEs: 'Esclerosis sistemica: esclerodactilia, Raynaud, fibrosis pulmonar, anti-Scl-70+.'
  },
  {
    id: 873, step: 'step2', subject: 'Rheumatology',
    question: 'A 30F with Raynaud, arthralgias, and dilated nail fold capillaries. Anti-U1RNP positive. Dx?',
    options: ['Mixed connective tissue disease', 'Systemic sclerosis', 'SLE', 'Polymyositis', 'Sjogren syndrome'],
    correctAnswer: 0,
    explanationEn: 'MCTD: features of SLE, systemic sclerosis, polymyositis. Anti-U1RNP+. Raynaud, edema of hands, arthritis.',
    explanationZh: 'MCTD：SLE、系统性硬化症、多肌炎特征。抗U1RNP+。雷诺、手部浮肿、关节炎。',
    explanationEs: 'EMTC: caracteristicas de LES, esclerosis sistemica. Anti-U1RNP+.'
  },
  {
    id: 874, step: 'step2', subject: 'Rheumatology',
    question: 'A 50M with proximal muscle weakness, elevated CK. Anti-Jo-1 positive. Dx?',
    options: ['Polymyositis', 'Dermatomyositis', 'Inclusion body myositis', 'Polymyalgia rheumatica', 'Myasthenia gravis'],
    correctAnswer: 0,
    explanationEn: 'Polymyositis: proximal muscle weakness, elevated CK, anti-Jo-1+. Anti-synthetase syndrome: ILD, mechanics hands, Raynaud.',
    explanationZh: '多肌炎：近端肌无力、CK升高、抗Jo-1+。抗合成酶综合征：ILD、技工手、雷诺。',
    explanationEs: 'Polimiositis: debilidad proximal, CK elevada, anti-Jo-1+.'
  },
  {
    id: 875, step: 'step2', subject: 'Rheumatology',
    question: 'A 55F with proximal muscle weakness, heliotrope rash, Gottron papules. Dx?',
    options: ['Dermatomyositis', 'Polymyositis', 'Inclusion body myositis', 'Polymyalgia rheumatica', 'SLE'],
    correctAnswer: 0,
    explanationEn: 'Dermatomyositis: heliotrope rash (periorbital), Gottron papules (knuckles). Anti-Mi-2+. Associated with malignancy.',
    explanationZh: '皮肌炎：紫罗兰色皮疹（眶周）、Gottron丘疹（指关节）。抗Mi-2+。与恶性肿瘤相关。',
    explanationEs: 'Dermatomiositis: eritema en heliotropo, papulas de Gottron. Anti-Mi-2+.'
  },
  {
    id: 876, step: 'step2', subject: 'Rheumatology',
    question: 'A 70F with shoulder and pelvic girdle pain, morning stiffness, ESR 85. Dx?',
    options: ['Polymyalgia rheumatica', 'Giant cell arteritis', 'Rheumatoid arthritis', 'Fibromyalgia', 'Osteoarthritis'],
    correctAnswer: 0,
    explanationEn: 'PMR: shoulder/pelvic girdle pain/stiffness, elevated ESR/CRP, age >50. Treat with low-dose prednisone (rapid response).',
    explanationZh: 'PMR：肩/骨盆带疼痛和僵硬、ESR/CRP升高、年龄>50。低剂量泼尼松迅速见效。',
    explanationEs: 'PMR: dolor/rigidez en cinturas escapular y pelvica. VSG elevada. Prednisona baja dosis.'
  },
  {
    id: 877, step: 'step2', subject: 'Rheumatology',
    question: 'A 75M with new headache, jaw claudication, and visual disturbance. ESR 100. Dx?',
    options: ['Giant cell arteritis (temporal arteritis)', 'Polymyalgia rheumatica', 'Migraine', 'Tension headache', 'Cluster headache'],
    correctAnswer: 0,
    explanationEn: 'GCA: headache, jaw claudication, visual disturbance, ESR >50. EMERGENCY: high-dose steroids immediately to prevent blindness.',
    explanationZh: 'GCA：头痛、颌跛行、视觉障碍、ESR>50。急症：立即高剂量激素预防失明。',
    explanationEs: 'ACG: cefalea, claudicacion mandibular, alteracion visual. Emergencia: esteroides altas dosis.'
  },
  {
    id: 878, step: 'step2', subject: 'Rheumatology',
    question: 'A 55M with back pain improving with exercise, morning stiffness. Sacroiliitis on MRI. HLA-B27 positive. Dx?',
    options: ['Ankylosing spondylitis', 'Mechanical back pain', 'RA', 'Psoriatic arthritis', 'Reactive arthritis'],
    correctAnswer: 0,
    explanationEn: 'AS: inflammatory back pain (improves with exercise), sacroiliitis, HLA-B27+. Bamboo spine, uveitis, aortic regurgitation.',
    explanationZh: 'AS：炎性背痛（运动后改善）、骶髂关节炎、HLA-B27+。竹节样脊柱、葡萄膜炎、主动脉反流。',
    explanationEs: 'EA: dolor lumbar inflamatorio, sacroiliitis, HLA-B27+.'
  },
  {
    id: 879, step: 'step2', subject: 'Rheumatology',
    question: 'A 40M with acute monoarthritis after GI infection (Salmonella). HLA-B27 positive. Dx?',
    options: ['Reactive arthritis (Reiter syndrome)', 'Ankylosing spondylitis', 'Psoriatic arthritis', 'Gout', 'Pseudogout'],
    correctAnswer: 0,
    explanationEn: 'Reactive arthritis: conjunctivitis + urethritis + arthritis (cannot see, cannot pee, cannot bend knee). Post-GI or GU infection.',
    explanationZh: '反应性关节炎：结膜炎+尿道炎+关节炎（不能看、不能尿、不能弯膝）。累及GI或GU感染后。',
    explanationEs: 'Artritis reactiva: conjuntivitis + uretritis + artritis. Post-infeccion GI/GU.'
  },
  {
    id: 880, step: 'step2', subject: 'Rheumatology',
    question: 'A 60F with Sjogren syndrome, dry eyes, dry mouth, and anti-SSA/Ro positive. Monitoring for?',
    options: ['Lymphoma (non-Hodgkin)', 'SLE progression', ' Osteoporosis', 'Cardiomyopathy', 'Lung cancer'],
    correctAnswer: 0,
    explanationEn: 'Sjogren syndrome: highest risk of lymphoma (4-40x). Monitor for parotid swelling, splenomegaly, lymphadenopathy.',
    explanationZh: '干燥综合征：淋巴瘤风险最高（4-40倍）。监测腮腺肿胀、脾大、淋巴结肿大。',
    explanationEs: 'Sindrome de Sjogren: mayor riesgo de linfoma. Monitorizar inflamacion parotidea.'
  },
  {
    id: 881, step: 'step2', subject: 'Orthopedics',
    question: 'A 70F with hip fracture (femoral neck), displaced. Management?',
    options: ['Hemiarthroplasty or total hip arthroplasty', 'Internal fixation', 'Traction', 'Non-weight bearing', 'Cast'],
    correctAnswer: 0,
    explanationEn: 'Displaced femoral neck fracture: hemiarthroplasty or THA. Non-displaced: internal fixation with screws.',
    explanationZh: '移位性股骨颈骨折：半髋或全髋关节置换。无移位：螺钉内固定。',
    explanationEs: 'Fractura desplazada de cuello femoral: hemiartroplastia o ATC.'
  },
  {
    id: 882, step: 'step2', subject: 'Orthopedics',
    question: 'A 20M with anterior shoulder dislocation after football injury. Management?',
    options: ['Closed reduction + sling immobilization', 'Open reduction', 'Surgery immediately', 'Cast', 'Observation'],
    correctAnswer: 0,
    explanationEn: 'Anterior shoulder dislocation: closed reduction, sling immobilization. Recurrent dislocations → surgical repair (Bankart).',
    explanationZh: '肩关节前脱位：闭合复位、吊带固定。复发性脱位→手术修复（Bankart）。',
    explanationEs: 'Luxacion anterior de hombro: reduccion cerrada, inmovilizacion con cabestrillo.'
  },
  {
    id: 883, step: 'step2', subject: 'Orthopedics',
    question: 'A 45F with carpal tunnel syndrome, positive Phalen and Tinel signs. Management?',
    options: ['Wrist splint + NSAIDs → if fails, carpal tunnel release', 'Surgery immediately', 'Phalen maneuver', 'EMG/NCV only', 'Steroid injection only'],
    correctAnswer: 0,
    explanationEn: 'CTS: wrist splint, NSAIDs, steroid injection. If severe or fails → surgical release (open or endoscopic).',
    explanationZh: 'CTS：腕夹板、NSAIDs、激素注射。严重或失败→手术松解（开放或内镜）。',
    explanationEs: 'STC: ferula de muneca, AINEs. Si grave → liberacion quirurgica.'
  },
  {
    id: 884, step: 'step2', subject: 'Orthopedics',
    question: 'A 60F with Colles fracture (distal radius, dorsal angulation). Management?',
    options: ['Closed reduction + cast', 'Open reduction', 'Traction', 'Splint only', 'Observation'],
    correctAnswer: 0,
    explanationEn: 'Colles fracture: closed reduction + cast immobilization. If intra-articular or displaced → ORIF.',
    explanationZh: 'Colles骨折：闭合复位+石膏固定。关节内或移位→ORIF。',
    explanationEs: 'Fractura de Colles: reduccion cerrada + yeso. Si intraarticular → RAFI.'
  },
  {
    id: 885, step: 'step2', subject: 'Orthopedics',
    question: 'A 65W with knee pain, locking, and effusion. MRI: bucket-handle meniscus tear. Management?',
    options: ['Arthroscopic meniscectomy or repair', 'NSAIDs only', 'Physical therapy', 'Corticosteroid injection', 'Observation'],
    correctAnswer: 0,
    explanationEn: 'Bucket-handle meniscus tear: causes locking, requires arthroscopic surgery (repair or partial meniscectomy).',
    explanationZh: '桶柄状半月板撕裂：导致交错，需要关节镜手术（修复或部分切除）。',
    explanationEs: 'Rotura en asa de cubo de menisco: causa bloqueo, requiere cirugia artroscopica.'
  },
  {
    id: 886, step: 'step2', subject: 'Orthopedics',
    question: 'A 25M with ACL tear (pivot-shift test). Management?',
    options: ['Surgical reconstruction for young athletes', 'Conservative (bracing, PT)', 'Cast immobilization', 'Steroid injection', 'Arthroscopic debridement only'],
    correctAnswer: 0,
    explanationEn: 'ACL tear: surgical reconstruction for young athletes or active individuals. Conservative for sedentary older patients.',
    explanationZh: 'ACL撕裂：年轻运动员或活动量大者手术重建。久坐老年患者可保守。',
    explanationEs: 'Rotura de LCA: reconstruccion quirurgica para atletas jovenes.'
  },
  {
    id: 887, step: 'step2', subject: 'Orthopedics',
    question: 'A 55M with rotator cuff tear, shoulder pain, and weakness with abduction. Management?',
    options: ['Physical therapy → if fails, surgical repair', 'Surgery immediately', 'Steroid injection', 'NSAIDs only', 'Observation'],
    correctAnswer: 0,
    explanationEn: 'Rotator cuff tear: PT first. If fails or large tear → surgical repair. Acute traumatic large tears → early repair.',
    explanationZh: '肩袖撕裂：先PT。如果失败或大撕裂→手术修复。急性创伤大撕裂→早期修复。',
    explanationEs: 'Rotura del manguito rotador: fisioterapia. Si falla → reparacion quirurgica.'
  },
  {
    id: 888, step: 'step2', subject: 'Orthopedics',
    question: 'A 70F with osteoporotic vertebral compression fracture (T12). Management?',
    options: ['Kyphoplasty or vertebroplasty', 'Open reduction', 'Bracing only', 'Cast', 'Surgery decompression'],
    correctAnswer: 0,
    explanationEn: 'Osteoporotic vertebral compression fracture: kyphoplasty/vertebroplasty if severe pain. Calcitonin for acute pain.',
    explanationZh: '骨质疏松性椎体压缩骨折：剧痛可行椎体后凸成形术/椎体成形术。降钙素缓解急性疼痛。',
    explanationEs: 'Fractura vertebral por compresion: cifoplastia/vertebroplastia si dolor intenso.'
  },
  {
    id: 889, step: 'step2', subject: 'Orthopedics',
    question: 'A 40M with Achilles tendon rupture (palpable gap, positive Thompson test). Management?',
    options: ['Surgical repair for active individuals', 'Conservative (casting)', 'NSAIDs', 'Physical therapy', 'Steroid injection'],
    correctAnswer: 0,
    explanationEn: 'Achilles tendon rupture: surgical repair for young/active patients. Conservative (casting) for sedentary older patients.',
    explanationZh: '跟腱断裂：年轻/活跃患者手术修复。久坐老年患者保守（石膏固定）。',
    explanationEs: 'Rotura del tendon de Aquiles: reparacion quirurgica para jovenes activos.'
  },
  {
    id: 890, step: 'step2', subject: 'Orthopedics',
    question: 'A 70F with hip fracture (intertrochanteric). Management?',
    options: ['Dynamic hip screw or intramedullary nail', 'Hemiarthroplasty', 'Total hip replacement', 'Traction', 'Non-weight bearing'],
    correctAnswer: 0,
    explanationEn: 'Intertrochanteric fracture: dynamic hip screw or IM nail. Femoral neck fracture: hemiarthroplasty/THA.',
    explanationZh: '转子间骨折：动力髋螺钉或髓内钉。股骨颈骨折：半髋/全髋。',
    explanationEs: 'Fractura intertrocanterea: tornillo deslizante de cadera o clavo intramedular.'
  },
  {
    id: 891, step: 'step2', subject: 'Geriatrics',
    question: 'A 80F with fall, fractured hip, and delirium. Prevention strategy for future falls?',
    options: ['Multifactorial intervention (exercise, vision, medications, home safety)', 'Restraints', 'Sedation', 'Bed rest', 'Isolation'],
    correctAnswer: 0,
    explanationEn: 'Fall prevention: multifactorial (exercise/PT, vision correction, medication review, home safety). Restraints increase falls.',
    explanationZh: '跌倒预防：多因素干预（运动/PT、视力矫正、药物审查、居家安全）。约束增加跌倒风险。',
    explanationEs: 'Prevencion de caidas: intervencion multifactorial (ejercicio, vision, medicamentos).'
  },
  {
    id: 892, step: 'step2', subject: 'Geriatrics',
    question: 'A 85M with dementia, agitation, and wandering. Non-pharmacologic management failed. Pharmacologic option?',
    options: ['Antipsychotics (risperidone, olanzapine) with caution', 'Benzodiazepines', 'Melatonin', 'Cholinesterase inhibitors only', 'Observation'],
    correctAnswer: 0,
    explanationEn: 'Dementia with agitation: non-pharm first. If fails → low-dose antipsychotics (risperidone) with caution (black box: mortality risk).',
    explanationZh: '痴呆伴激越：先非药物。失败→低剂量抗精神病药（利培酮），注意黑框警告。',
    explanationEs: 'Demencia con agitacion: primero no farmacologico. Si falla → antipsicoticos dosis baja.'
  },
  {
    id: 893, step: 'step2', subject: 'Geriatrics',
    question: 'A 75M with multiple comorbidities, polypharmacy (15 medications). Strategy to prevent adverse drug events?',
    options: ['Medication reconciliation and deprescribing', 'Add more medications', 'Increase doses', 'Stop all medications', 'Refer to pharmacy only'],
    correctAnswer: 0,
    explanationEn: 'Polypharmacy: medication reconciliation, deprescribe unnecessary medications. Beers criteria for potentially inappropriate medications.',
    explanationZh: '多重用药：药物调和、精简不必要药物。Beers标准识别潜在不当用药。',
    explanationEs: 'Polifarmacia: reconciliacion de medicamentos, desprescripcion. Criterios de Beers.'
  },
  {
    id: 894, step: 'step2', subject: 'Geriatrics',
    question: 'A 90F with advanced dementia, recurrent aspiration pneumonia, and feeding tube placement. Goals of care?',
    options: ['Discuss goals of care (palliative/hospice)', 'Place feeding tube', 'Aggressive antibiotics', 'ICU transfer', 'Surgery'],
    correctAnswer: 0,
    explanationEn: 'Advanced dementia: feeding tubes do not improve survival, increase aspiration risk. Discuss palliative/hospice care.',
    explanationZh: '晚期痴呆：喂养管不改善生存率，增加误吸风险。讨论安宁疗护/临终关怀。',
    explanationEs: 'Demencia avanzada: tubos de alimentacion no mejoran supervivencia. Discutir cuidados paliativos.'
  },
  {
    id: 895, step: 'step2', subject: 'Geriatrics',
    question: 'A 80M with urinary incontinence (urge type). First-line management?',
    options: ['Bladder training + anticholinergics', 'Surgery', 'Foley catheter', 'Antibiotics', 'Observation'],
    correctAnswer: 0,
    explanationEn: 'Urge incontinence: bladder training, pelvic floor exercises, anticholinergics (oxybutynin) or beta-3 agonists (mirabegron).',
    explanationZh: '急迫性尿失禁：膀胱训练、盆底肌锻炼、抗胆碱能药（奥昔布宁）或β3激动剂（米拉贝隆）。',
    explanationEs: 'Incontinencia de urgencia: entrenamiento vesical, ejercicios de suelo pelvico, anticolinergicos.'
  },
  {
    id: 896, step: 'step2', subject: 'Geriatrics',
    question: 'A 85F with osteoporosis (T-score -3.0), vertebral fracture, and fall history. Hip protector?',
    options: ['Hip protectors + vitamin D + calcium', 'Hip protectors alone', 'Surgery', 'Hip replacement', 'Observation'],
    correctAnswer: 0,
    explanationEn: 'Osteoporosis with falls: hip protectors + vitamin D (800 IU/day) + calcium (1200mg/day). Bisphosphonates for secondary fracture prevention.',
    explanationZh: '骨质疏松伴跌倒：髋部保护器+维生素D（800IU/天）+钙（1200mg/天）。双膦酸盐预防继发骨折。',
    explanationEs: 'Osteoporosis con caidas: protectores de cadera + vitamina D + calcio.'
  },
  {
    id: 897, step: 'step2', subject: 'Geriatrics',
    question: 'A 75M with delirium, hyperactive type, combative. Management?',
    options: ['Treat underlying cause + low-dose haloperidol', 'Benzodiazepines', 'Restraints', 'Sedation', 'Ignore'],
    correctAnswer: 0,
    explanationEn: 'Delirium: treat underlying cause (infection, meds, electrolyte). Hyperactive: low-dose haloperidol. Avoid benzos (worsen).',
    explanationZh: '谵妄：治疗基础病因（感染、药物、电解质）。亢进型：低剂量氟哌啶醇。避免苯二氮卓（加重）。',
    explanationEs: 'Delirium: tratar causa subyacente. Hiperactivo: haloperidol baja dosis. Evitar benzos.'
  },
  {
    id: 898, step: 'step2', subject: 'Geriatrics',
    question: 'A 80M with dementia, caregiver stress. What support should be provided?',
    options: ['Caregiver education, respite care, support groups', 'Medication for caregiver', 'Hospitalization', 'Nursing home only', 'No intervention'],
    correctAnswer: 0,
    explanationEn: 'Caregiver support: education, respite care, support groups, adult day care. Prevent caregiver burnout/depression.',
    explanationZh: '照护者支持：教育、喘息照护、支持团体、成人日间照料。预防照护者倦怠/抑郁。',
    explanationEs: 'Apoyo al cuidador: educacion, cuidado de relevo, grupos de apoyo.'
  },
  {
    id: 899, step: 'step2', subject: 'Gastroenterology',
    question: 'A 55M with GERD, heartburn 3x/week, not responsive to lifestyle. Management?',
    options: ['PPI (omeprazole 20mg daily)', 'H2 blocker', 'Antacids', 'Fundoplication', 'Sucralfate'],
    correctAnswer: 0,
    explanationEn: 'GERD not responsive to lifestyle: PPI once daily. If symptoms persist or atypical → endoscopy.',
    explanationZh: 'GERD生活方式无效：PPI每日一次。症状持续或不典型→内镜。',
    explanationEs: 'ERGE sin respuesta a estilo de vida: IBP diario. Si persiste → endoscopia.'
  },
  {
    id: 900, step: 'step2', subject: 'Gastroenterology',
    question: 'A 45M with H. pylori positive peptic ulcer disease. Treatment?',
    options: ['PPI + clarithromycin + amoxicillin +/- metronidazole', 'PPI alone', 'Clarithromycin alone', 'Amoxicillin alone', 'Surgery'],
    correctAnswer: 0,
    explanationEn: 'H. pylori: triple therapy (PPI + amoxicillin + clarithromycin) or quadruple (PPI + bismuth + tetracycline + metronidazole). Check eradication with urea breath test.',
    explanationZh: 'H. pylori：三联（PPI+阿莫西林+克拉霉素）或四联（PPI+铋剂+四环素+甲硝唑）。呼气试验确认根除。',
    explanationEs: 'H. pylori: triple (IBP+amoxicilina+claritromicina) o cuadruple. Prueba de aliento.'
  },
  {
    id: 901, step: 'step2', subject: 'Gastroenterology',
    question: 'A 60F with dysphagia to solids progressing to liquids, weight loss. Barium: irregular narrowing mid-esophagus. Dx?',
    options: ['Esophageal cancer', 'Achalasia', 'Esophageal web (Plummer-Vinson)', 'Benign stricture', 'Eosinophilic esophagitis'],
    correctAnswer: 0,
    explanationEn: 'Esophageal cancer: progressive dysphagia (solids→liquids), weight loss, irregular narrowing. Risk: smoking, alcohol, Barrett esophagus.',
    explanationZh: '食管癌：进行性吞咽困难（固体→液体），体重下降，不规则狭窄。风险：吸烟、酒精、Barrett食管。',
    explanationEs: 'Cancer de esofago: disfagia progresiva, perdida de peso. Estrechamiento irregular.'
  },
  {
    id: 902, step: 'step2', subject: 'Gastroenterology',
    question: 'A 30F with dysphagia, food impaction, and endoscopy showing linear furrows and trachealization. Dx?',
    options: ['Eosinophilic esophagitis', 'GERD', 'Achalasia', 'Esophageal cancer', 'Esophageal web'],
    correctAnswer: 0,
    explanationEn: 'EoE: linear furrows, trachealization, eosinophilic infiltrate. Atopic history. Treat with topical steroids (budesonide slurry).',
    explanationZh: '嗜酸性食管炎：线状沟、气管化。特应性病史。局部激素（布地奈德混悬液）治疗。',
    explanationEs: 'Esofagitis eosinofilica: surcos lineales, infiltrado eosinofilico. Budesonida topica.'
  },
  {
    id: 903, step: 'step2', subject: 'Gastroenterology',
    question: 'A 50M with cirrhosis, varices on screening endoscopy. Grade 2 (moderate). Preventive strategy?',
    options: ['Non-selective beta-blocker (propranolol)', 'Endoscopic variceal ligation', 'TIPS', 'Observation', 'Antibiotics'],
    correctAnswer: 0,
    explanationEn: 'Varices prophylaxis: non-selective beta-blockers (propranolol, nadolol) for medium/large varices. If intolerant → band ligation.',
    explanationZh: '静脉曲张预防：中/大静脉曲张用非选择性β阻滞剂（普萘洛尔）。不耐受→套扎。',
    explanationEs: 'Profilaxis de varices: beta-bloqueante no selectivo. Si intolerancia → ligadura en banda.'
  },
  {
    id: 904, step: 'step2', subject: 'Gastroenterology',
    question: 'A 40M with acute severe ulcerative colitis (stools 10/day, Hb 8). Management?',
    options: ['IV steroids + surgical consultation', 'Oral steroids', 'Infliximab', 'Cyclosporine', 'Colectomy immediately'],
    correctAnswer: 0,
    explanationEn: 'Severe UC: IV steroids (hydrocortisone or methylprednisolone). If no improvement 3-5 days → infliximab or cyclosporine or colectomy.',
    explanationZh: '重症UC：IV激素。3-5天无改善→英夫利昔单抗或环孢素或结肠切除术。',
    explanationEs: 'CU grave: esteroides IV. Sin mejoria 3-5 dias → infliximab o colectomia.'
  },
  {
    id: 905, step: 'step2', subject: 'Gastroenterology',
    question: 'A 60F with RUQ pain, fatty food intolerance, and Murphy sign positive. Dx?',
    options: ['Acute cholecystitis', 'Biliary colic', 'Choledocholithiasis', 'Pancreatitis', 'Hepatitis'],
    correctAnswer: 0,
    explanationEn: 'Acute cholecystitis: RUQ pain, Murphy sign, fever. Usually due to impacted gallstone in cystic duct. Treatment: cholecystectomy.',
    explanationZh: '急性胆囊炎：RUQ痛、Murphy征、发热。通常因胆囊管结石嵌顿。治疗：胆囊切除术。',
    explanationEs: 'Colecistitis aguda: dolor en HCD, signo de Murphy, fiebre. Colecistectomia.'
  },
  {
    id: 906, step: 'step2', subject: 'Gastroenterology',
    question: 'A 65M with jaundice, RUQ pain, fever, and chills (Charcot triad). Dx?',
    options: ['Ascending cholangitis', 'Cholecystitis', 'Hepatitis', 'Pancreatitis', 'Cirrhosis'],
    correctAnswer: 0,
    explanationEn: 'Ascending cholangitis: jaundice + RUQ pain + fever/chills (Charcot triad). Add altered mental status + hypotension = Reynolds pentad.',
    explanationZh: '上行性胆管炎：黄疸+RUQ痛+发热寒战（Charcot三联征）。加意识改变+低血压=Reynolds五联征。',
    explanationEs: 'Colangitis ascendente: ictericia + dolor HCD + fiebre/escalofrios (triada de Charcot).'
  },
  {
    id: 907, step: 'step2', subject: 'Gastroenterology',
    question: 'A 45M with epigastric pain, nausea, NSAID use. Endoscopy: multiple gastric erosions. Management?',
    options: ['Stop NSAIDs + PPI', 'Continue NSAIDs + add antacid', 'Sucralfate only', 'H2 blocker', 'Observation'],
    correctAnswer: 0,
    explanationEn: 'NSAID gastropathy: stop NSAIDs + PPI. If NSAIDs must continue → PPI prophylaxis + consider COX-2 inhibitor.',
    explanationZh: 'NSAID胃病：停NSAID+PPI。若必须继续→PPI预防+考虑COX-2抑制剂。',
    explanationEs: 'Gastropatia por AINE: suspender AINE + IBP. Si debe continuar → profilaxis con IBP.'
  },
  {
    id: 908, step: 'step2', subject: 'Gastroenterology',
    question: 'A 30M with recurrent aphthous ulcers, uveitis, and pustular skin lesions. Dx?',
    options: ['Behcet disease (GI involvement)', 'Crohn disease', 'Ulcerative colitis', 'SLE', 'Celiac disease'],
    correctAnswer: 0,
    explanationEn: 'Behcet disease: oral/genital ulcers, uveitis, skin lesions, GI involvement (ileocecal ulcers). Treated with steroids + immunosuppression.',
    explanationZh: '白塞病：口腔/生殖器溃疡、葡萄膜炎、皮损、GI受累（回盲部溃疡）。激素+免疫抑制。',
    explanationEs: 'Enfermedad de Behcet: ulceras orales/genitales, uveitis, afectacion GI.'
  },
  {
    id: 909, step: 'step2', subject: 'Gastroenterology',
    question: 'A 25F with diarrhea, weight loss, and dermatitis herpetiformis. Anti-tTG positive. Dx?',
    options: ['Celiac disease', 'Crohn disease', 'Ulcerative colitis', 'Whipple disease', 'IBS'],
    correctAnswer: 0,
    explanationEn: 'Celiac disease: diarrhea, weight loss, dermatitis herpetiformis, anti-tTG+, anti-endomysial+. Gluten-free diet.',
    explanationZh: '乳糜泻：腹泻、体重下降、疱疹样皮炎、抗tTG+。无麸质饮食。',
    explanationEs: 'Enfermedad celiaca: diarrea, perdida de peso, dermatitis herpetiforme. Dieta sin gluten.'
  },
  {
    id: 910, step: 'step2', subject: 'Gastroenterology',
    question: 'A 45M with hepatitis C (genotype 1a), compensated cirrhosis. Treatment?',
    options: ['Glecaprevir-pibrentasvir or sofosbuvir-velpatasvir', 'Interferon + ribavirin', 'Ribavirin only', 'Pegylated interferon', 'Observation'],
    correctAnswer: 0,
    explanationEn: 'HCV with compensated cirrhosis: DAA therapy (glecaprevir-pibrentasvir). >95% SVR. No liver transplant unless decompensated.',
    explanationZh: 'HCV代偿期肝硬化：DAA治疗（格卡瑞韦派伦他韦）。>95%SVR。失代偿前行肝移植评估。',
    explanationEs: 'VHC con cirrosis compensada: AAD (glecaprevir-pibrentasvir).'
  },
  {
    id: 911, step: 'step2', subject: 'Gastroenterology',
    question: 'A 70M with acute pancreatitis (alcohol-related), necrosis on CT. Management?',
    options: ['Supportive care (IV fluids, NPO, pain control) + monitor for complications', 'Immediate surgery', 'ERCP', 'Antibiotics for all', 'TPN immediately'],
    correctAnswer: 0,
    explanationEn: 'Severe pancreatitis with necrosis: supportive care initially. If infected necrosis → broad-spectrum antibiotics + step-up approach (drain, debridement).',
    explanationZh: '重症胰腺炎伴坏死：初始支持治疗。如果感染坏死→广谱抗生素+升阶方法（引流、清创）。',
    explanationEs: 'Pancreatitis grave con necrosis: soporte inicial. Si infectada → antibioticos + drenaje.'
  },
  {
    id: 912, step: 'step2', subject: 'Gastroenterology',
    question: 'A 45M with pancolitis on colonoscopy for ulcerative colitis. Surveillance for?',
    options: ['Annual colonoscopy for dysplasia after 8 years', 'Annual colonoscopy after 1 year', 'No surveillance', 'CT abdomen', 'Capsule endoscopy'],
    correctAnswer: 0,
    explanationEn: 'UC with pancolitis: annual surveillance colonoscopy for dysplasia starting 8 years after diagnosis.',
    explanationZh: 'UC全结肠炎：确诊8年后每年监测结肠镜查异型增生。',
    explanationEs: 'CU con pancolitis: colonoscopia de vigilancia anual para displasia a los 8 anos.'
  },
  {
    id: 913, step: 'step2', subject: 'Gastroenterology',
    question: 'A 55W with hematemesis, known cirrhosis. Variceal bleeding. Initial management?',
    options: ['Octreotide + prophylactic antibiotics + band ligation', 'TIPS immediately', 'Beta-blocker', 'Observation', 'Antacids'],
    correctAnswer: 0,
    explanationEn: 'Variceal bleeding: octreotide/somatostatin + prophylactic antibiotics + band ligation/EVL. Beta-blockers for secondary prophylaxis.',
    explanationZh: '静脉曲张出血：奥曲肽+预防性抗生素+套扎。β阻滞剂用于二级预防。',
    explanationEs: 'Hemorragia variceal: octreotida + antibioticos profilacticos + ligadura en banda.'
  },
  {
    id: 914, step: 'step2', subject: 'Hepatology',
    question: 'A 45M with jaundice, RUQ pain, fever, hepatomegaly. AST 1500, ALT 1200, AST:ALT 1.5:1. Dx?',
    options: ['Acute viral hepatitis', 'Alcoholic hepatitis', 'Acetaminophen toxicity', 'Autoimmune hepatitis', 'Ischemic hepatitis'],
    correctAnswer: 0,
    explanationEn: 'Acute viral hepatitis: markedly elevated AST/ALT (1000s), ALT > AST usually. However, various viruses have different patterns.',
    explanationZh: '急性病毒性肝炎：AST/ALT显著升高（千位数），通常ALT>AST。不同病毒有不同模式。',
    explanationEs: 'Hepatitis viral aguda: AST/ALT marcadamente elevadas (miles).'
  },
  {
    id: 915, step: 'step2', subject: 'Hepatology',
    question: 'A 55M with cirrhosis, ascites, and esophageal varices, worsening dyspnea. Echo: normal LV function. Dx?',
    options: ['Cirrhotic cardiomyopathy', 'Heart failure', 'Pulmonary hypertension', 'Pericarditis', 'Myocarditis'],
    correctAnswer: 0,
    explanationEn: 'Cirrhotic cardiomyopathy: diastolic dysfunction, normal systolic function, impaired response to stress. Often asymptomatic.',
    explanationZh: '肝硬化心肌病：舒张功能障碍、收缩功能正常、应激反应受损。常无症状。',
    explanationEs: 'Miocardiopatia cirrotica: disfuncion diastolica, funcion sistolica normal.'
  },
  {
    id: 916, step: 'step2', subject: 'Hepatology',
    question: 'A 60M with portal hypertension and splenomegaly. Platelet 45K. Management?',
    options: ['Treat underlying liver disease + consider TIPS', 'Splenectomy', 'Platelet transfusion', 'Aspirin', 'Observation'],
    correctAnswer: 0,
    explanationEn: 'Cirrhosis thrombocytopenia: treat underlying liver disease, consider TIPS. Splenectomy if refractory. Monitor for varices.',
    explanationZh: '肝硬化血小板减少：治疗基础肝病，考虑TIPS。顽固者可脾切除术。监测静脉曲张。',
    explanationEs: 'Trombocitopenia en cirrosis: tratar enfermedad hepatica, considerar TIPS.'
  },
  {
    id: 917, step: 'step2', subject: 'Hepatology',
    question: 'A 50M with alcohol use disorder, AST 180, ALT 80, AST:ALT 2:1. Dx?',
    options: ['Alcoholic hepatitis', 'Viral hepatitis', 'Acetaminophen toxicity', 'Ischemic hepatitis', 'Autoimmune hepatitis'],
    correctAnswer: 0,
    explanationEn: 'Alcoholic hepatitis: AST:ALT >2:1, AST <400, GGT elevated. Discriminant function: steroid responsive if DF >32.',
    explanationZh: '酒精性肝炎：AST:ALT>2:1，AST<400，GGT升高。判别函数>32者对激素反应。',
    explanationEs: 'Hepatitis alcoholica: AST:ALT >2:1, AST <400. Responde a esteroides si DF >32.'
  },
  {
    id: 918, step: 'step2', subject: 'Hepatology',
    question: 'A 65F with autoimmune hepatitis, ANA+, anti-smooth muscle antibody +. Management?',
    options: ['Steroids + azathioprine', 'Interferon', 'Bisphosphonates', 'Antibiotics', 'Observation'],
    correctAnswer: 0,
    explanationEn: 'AIH: ANA+, anti-SMA+, LKM1+, IgG elevated. Treat with prednisone + azathioprine. Good response to immunosuppression.',
    explanationZh: 'AIH：ANA+、抗SMA+、LKM1+、IgG升高。泼尼松+硫唑嘌呤。免疫抑制反应良好。',
    explanationEs: 'HAI: ANA+, anti-ML+, LKM1+. Prednisona + azatioprina.'
  },
  {
    id: 919, step: 'step2', subject: 'Hepatology',
    question: 'A 70M with NASH cirrhosis, no alcohol history. Metabolic syndrome present. Most common cause?',
    options: ['Non-alcoholic steatohepatitis (NASH)', 'Alcohol', 'Hepatitis B', 'Hepatitis C', 'Autoimmune'],
    correctAnswer: 0,
    explanationEn: 'NASH: most common cause of cryptogenic cirrhosis. Metabolic syndrome (obesity, DM2, HTN). Liver biopsy: steatosis + inflammation + ballooning.',
    explanationZh: 'NASH：最常见的隐源性肝硬化病因。代谢综合征（肥胖、DM2、HTN）。肝活检：脂肪变+炎症+气球样变。',
    explanationEs: 'EHNA: causa mas comun de cirrosis criptogenica. Sindrome metabolico.'
  },
  {
    id: 920, step: 'step2', subject: 'Hepatology',
    question: 'A 40M with acute hepatitis B (HBsAg+, anti-HBc IgM+). Management?',
    options: ['Supportive care (most acute HBV resolves spontaneously)', 'Entecavir immediately', 'Tenofovir', 'Interferon', 'Liver transplant'],
    correctAnswer: 0,
    explanationEn: 'Acute hepatitis B: 95% of adults clear infection spontaneously. Supportive care. Monitor for progression to chronic (>6 months).',
    explanationZh: '急性乙型肝炎：95%成人自发清除感染。支持治疗。监测是否进展为慢性（>6个月）。',
    explanationEs: 'Hepatitis B aguda: 95% de adultos eliminan espontaneamente. Soporte.'
  },
  {
    id: 921, step: 'step2', subject: 'Hepatology',
    question: 'A 55M with cirrhosis, new onset ascites. Diagnostic paracentesis shows glucose 70, protein 2.0, PMN 350. Dx?',
    options: ['Spontaneous bacterial peritonitis (SBP)', 'Secondary peritonitis', 'Tuberculous peritonitis', 'Malignant ascites', 'Chylous ascites'],
    correctAnswer: 0,
    explanationEn: 'SBP: PMN >250 cells/mm3, monomicrobial. Secondary peritonitis: PMN >500, multiple organisms. Treat with cefotaxime or ceftriaxone.',
    explanationZh: 'SBP：PMN>250 cells/mm3，单一菌种。继发性：PMN>500，多种菌。头孢噻肟或头孢曲松。',
    explanationEs: 'PPS: PMN >250, monomicrobiana. Cefotaxima o ceftriaxona.'
  },
  {
    id: 922, step: 'step2', subject: 'Hepatology',
    question: 'A 50M with cirrhosis, MELD score 22. Ascites, varices. When to refer for liver transplant?',
    options: ['Now (MELD >15 with complications)', 'When MELD reaches 30', 'Wait for decompensation', 'Never', 'After 1 year of ascites'],
    correctAnswer: 0,
    explanationEn: 'Liver transplant: MELD >15 or decompensation (ascites, variceal bleed, encephalopathy). MELD score predicts 90-day mortality.',
    explanationZh: '肝移植：MELD>15或失代偿（腹水、静脉曲张出血、肝性脑病）。MELD评分预测90天死亡率。',
    explanationEs: 'Trasplante hepatico: MELD >15 o descompensacion. MELD predice mortalidad a 90 dias.'
  },
  {
    id: 923, step: 'step2', subject: 'Hepatology',
    question: 'A 45F with fatigue, pruritus, and elevated alkaline phosphatase. Anti-mitochondrial antibody positive. Dx?',
    options: ['Primary biliary cholangitis', 'Primary sclerosing cholangitis', 'AIH', 'NASH', 'Drug-induced liver injury'],
    correctAnswer: 0,
    explanationEn: 'PBC: anti-mitochondrial antibody (AMA)+, elevated ALP, pruritus, fatigue. Treat with ursodeoxycholic acid.',
    explanationZh: 'PBC：抗线粒体抗体（AMA）+、ALP升高、瘙痒、乏力。熊去氧胆酸治疗。',
    explanationEs: 'CBP: anticuerpo antimitocondrial +, FA elevada, prurito. Acido ursodesoxicolico.'
  },
  {
    id: 924, step: 'step3', subject: 'Preventive Medicine',
    question: 'A 35F with diabetes for 5 years, no retinopathy. Recommended eye screening interval?',
    options: ['Annual dilated eye exam', 'Every 3 years', 'Every 5 years', 'Every 10 years', 'Only when symptomatic'],
    correctAnswer: 0,
    explanationEn: 'Diabetes: annual dilated eye exam for retinopathy screening. Type 1: start within 5 years of dx. Type 2: at diagnosis.',
    explanationZh: '糖尿病：每年散瞳眼底检查筛查视网膜病变。1型：确诊5年内开始。2型：确诊时开始。',
    explanationEs: 'Diabetes: examen ocular con dilatacion anual. DM1: a los 5 anos del dx.'
  },
  {
    id: 925, step: 'step3', subject: 'Preventive Medicine',
    question: 'A 45M smoker for screening for abdominal aortic aneurysm. Indication?',
    options: ['One-time ultrasound for men 65-75 with smoking history', 'Annually for all over 50', 'Only if symptomatic', 'CT scan annually', 'All over 65 regardless'],
    correctAnswer: 0,
    explanationEn: 'AAA screening: one-time ultrasound for men 65-75 with smoking history. USPSTF recommends.',
    explanationZh: 'AAA筛查：65-75岁有吸烟史男性一次超声。USPSTF推荐。',
    explanationEs: 'Tamizaje de AAT: ecografia unica para hombres 65-75 con tabaquismo.'
  },
  {
    id: 926, step: 'step3', subject: 'Preventive Medicine',
    question: 'A 60F with HTN, T2DM, obesity. Statin eligibility?',
    options: ['High-intensity statin (atorvastatin)', 'No statin needed', 'Low-intensity statin', 'Fibrate', 'Ezetimibe only'],
    correctAnswer: 0,
    explanationEn: 'T2DM 40-75: high-intensity statin (atorvastatin 40-80mg). Reduces ASCVD risk regardless of baseline LDL.',
    explanationZh: 'T2DM 40-75岁：高强度他汀（阿托伐他汀）。无论基线LDL水平均降低ASCVD风险。',
    explanationEs: 'DM2 40-75: estatina de alta intensidad. Reduce riesgo EASCVA.'
  },
  {
    id: 927, step: 'step3', subject: 'Preventive Medicine',
    question: 'A 40M with family history of colon cancer (father at age 50). Screening?',
    options: ['Colonoscopy starting age 40 (10 years before earliest family diagnosis)', 'Colonoscopy at 50', 'Colonoscopy at 45', 'Colonoscopy at 55', 'CT colonography'],
    correctAnswer: 0,
    explanationEn: 'Family history of CRC in first-degree relative: colonoscopy starting age 40 or 10 years before earliest dx age.',
    explanationZh: '一级亲属CRC家族史：40岁或最早诊断年龄前10年开始结肠镜筛查。',
    explanationEs: 'Historia familiar de CCR: colonoscopia a los 40 o 10 anos antes de edad de dx mas temprano.'
  },
  {
    id: 928, step: 'step3', subject: 'Preventive Medicine',
    question: 'A 55M with HTN, obese, sedentary. He asks about benefits of exercise. What amount is recommended?',
    options: ['150 min/week moderate or 75 min/week vigorous', '300 min/week moderate', '60 min/week moderate', '120 min/week moderate', '90 min/week vigorous'],
    correctAnswer: 0,
    explanationEn: 'Physical activity: 150 min/week moderate-intensity or 75 min/week vigorous-intensity aerobic activity. Plus muscle-strengthening 2x/week.',
    explanationZh: '体力活动：150分钟/周中等强度或75分钟/周高强度。加力量训练2次/周。',
    explanationEs: 'Actividad fisica: 150 min/sem moderada o 75 min/sem vigorosa.'
  },
  {
    id: 929, step: 'step1', subject: 'Pathology',
    question: "A 58-year-old male with chronic hepatitis C cirrhosis develops a 3 cm liver nodule on surveillance ultrasound. AFP is 450 ng/mL. Biopsy shows malignant hepatocytes with thickened trabeculae. Which molecular pathway is most commonly altered in this tumor?",
    options: ["Wnt/beta-catenin pathway", "RAS/RAF/MAPK pathway", "JAK/STAT pathway", "Hedgehog pathway", "Notch pathway"],
    correctAnswer: 0,
    explanationEn: "Hepatocellular carcinoma (HCC). Beta-catenin mutations (CTNNB1) are found in 20-40% of HCCs, leading to nuclear accumulation and Wnt pathway activation. Other common mutations include TP53 and TERT promoter.",
    explanationZh: "肝细胞癌（HCC）。20-40%的HCC存在β-catenin（CTNNB1）突变，导致核积累和Wnt通路激活。其他常见突变包括TP53和TERT启动子。",
    explanationEs: "CHC. Mutaciones CTNNB1 en 20-40%. Wnt/beta-catenina activada.",
    difficulty: 'Medium'
  },
  {
    id: 930, step: 'step1', subject: 'Pathology',
    question: "A 40-year-old female presents with a painful, firm breast mass that fluctuates with her menstrual cycle. Ultrasound shows a well-circumscribed hypoechoic mass. Core biopsy reveals stromal and glandular proliferation with a pericanalicular pattern. Diagnosis?",
    options: ["Fibroadenoma", "Phyllodes tumor", "Invasive ductal carcinoma", "Fibrocystic change", "Intraductal papilloma"],
    correctAnswer: 0,
    explanationEn: "Fibroadenoma: most common benign breast tumor in young women. Pericanalicular (glands surrounded by stroma) or intracanalicular (compressed slit-like glands) patterns. Estrogen-responsive, can enlarge during pregnancy or menstruation.",
    explanationZh: "纤维腺瘤：年轻女性最常见的良性乳腺肿瘤。管周型（基质环绕腺体）或管内型（压缩裂隙状腺体）。雌激素反应性，孕期或月经期可增大。",
    explanationEs: "Fibroadenoma: tumor benigno mas comun en jovenes. Patron pericanalicular o intracanalicular.",
    difficulty: 'Medium'
  },
  {
    id: 931, step: 'step1', subject: 'Pathology',
    question: "A 67-year-old male with a 40-pack-year smoking history presents with a solitary pulmonary nodule. Biopsy shows keratin pearls and intercellular bridges. Which gene is most frequently mutated in this tumor type?",
    options: ["TP53", "KRAS", "EGFR", "ALK", "BRAF"],
    correctAnswer: 0,
    explanationEn: "Squamous cell carcinoma of the lung: keratin pearls and intercellular bridges are diagnostic. TP53 mutations are the most common (80-90% of cases). Strongly associated with smoking. Typically central location.",
    explanationZh: "肺鳞状细胞癌：角化珠和细胞间桥是诊断依据。TP53突变最常见（80-90%）。与吸烟密切相关，通常为中央型。",
    explanationEs: "Carcinoma escamoso pulmonar: perlas de queratina, puentes intercelulares. TP53 mutado en 80-90%.",
    difficulty: 'Medium'
  },
  {
    id: 932, step: 'step1', subject: 'Pathology',
    question: "A 50-year-old female with rheumatoid arthritis on long-term methotrexate develops generalized lymphadenopathy. Biopsy of a cervical lymph node shows effacement of architecture by large atypical lymphoid cells with Reed-Sternberg-like morphology. EBV is positive by in situ hybridization. What is the most likely diagnosis?",
    options: ["Diffuse large B-cell lymphoma, EBV+", "Classical Hodgkin lymphoma", "Burkitt lymphoma", "Methotrexate-associated lymphoproliferative disorder", "Follicular lymphoma"],
    correctAnswer: 3,
    explanationEn: "Methotrexate (MTX) and other immunosuppressants can cause iatrogenic lymphoproliferative disorders (LPD), often EBV-driven. These can resemble Hodgkin or non-Hodgkin lymphoma. Many regress upon MTX withdrawal alone.",
    explanationZh: "甲氨蝶呤（MTX）等免疫抑制剂可引起医源性淋巴增殖性疾病（LPD），通常由EBV驱动。可类似霍奇金或非霍奇金淋巴瘤。许多病例仅停用MTX即可消退。",
    explanationEs: "Trastorno linfoproliferativo asociado a metotrexato. EBV+. Puede regresar al suspender MTX.",
    highYieldTag: 'Immunosuppression-related lymphoma',
    difficulty: 'Hard'
  },
  {
    id: 933, step: 'step1', subject: 'Physiology',
    question: "A researcher measures cardiac output in a healthy volunteer at rest and during exercise. During exercise, which of the following changes contributes MOST to the increase in cardiac output?",
    options: ["Increased heart rate and stroke volume", "Increased heart rate only", "Increased stroke volume only", "Decreased systemic vascular resistance only", "Increased preload only"],
    correctAnswer: 0,
    explanationEn: "During exercise, cardiac output increases through both increased heart rate (sympathetic activation) and increased stroke volume (enhanced venous return via muscle pump, increased contractility). CO = HR x SV.",
    explanationZh: "运动时心输出量通过心率增加（交感激活）和每搏量增加（肌肉泵增强静脉回流、收缩力增强）共同提高。CO = HR x SV。",
    explanationEs: "Durante el ejercicio: FC y VS aumentan. Activacion simpatica + retorno venoso.",
    difficulty: 'Medium'
  },
  {
    id: 934, step: 'step1', subject: 'Physiology',
    question: "Which segment of the nephron is the primary site of action for thiazide diuretics?",
    options: ["Proximal convoluted tubule", "Thick ascending limb of loop of Henle", "Distal convoluted tubule", "Collecting duct", "Glomerulus"],
    correctAnswer: 2,
    explanationEn: "Thiazide diuretics (e.g., hydrochlorothiazide) block the Na+/Cl- cotransporter (NCC) in the distal convoluted tubule. Loop diuretics act on the thick ascending limb (NKCC2). K-sparing diuretics act on the collecting duct.",
    explanationZh: "噻嗪类利尿剂（如氢氯噻嗪）阻断远曲小管的Na+/Cl-共转运体（NCC）。袢利尿剂作用于髓袢升支粗段（NKCC2）。保钾利尿剂作用于集合管。",
    explanationEs: "Tiazidas: bloquean cotransportador Na+/Cl- en tubulo contorneado distal.",
    highYieldTag: 'Diuretic site of action',
    difficulty: 'Medium'
  },
  {
    id: 935, step: 'step1', subject: 'Physiology',
    question: "A 25-year-old mountain climber ascends to 4,500 meters. Which of the following is the PRIMARY mechanism of her immediate respiratory response to high altitude?",
    options: ["Central chemoreceptor response to increased arterial PCO2", "Peripheral chemoreceptor response to decreased arterial PO2", "Central chemoreceptor response to decreased arterial PO2", "Pulmonary stretch receptor activation", "Baroreceptor reflex"],
    correctAnswer: 1,
    explanationEn: "Acute hypoxic ventilatory response is mediated primarily by peripheral chemoreceptors (carotid and aortic bodies) sensing decreased PaO2. Central chemoreceptors respond to CO2/pH, not O2. This response increases minute ventilation.",
    explanationZh: "急性缺氧通气反应主要由外周化学感受器（颈动脉体和主动脉体）感知PaO2下降介导。中枢化学感受器对CO2/pH反应，而非O2。此反应增加每分通气量。",
    explanationEs: "Respuesta ventilatoria hipoxica: quimiorreceptores perifericos detectan baja PaO2.",
    difficulty: 'Medium'
  },
  {
    id: 936, step: 'step1', subject: 'Physiology',
    question: "In cardiac muscle, which of the following best explains the long plateau phase (phase 2) of the action potential?",
    options: ["Sodium influx through fast Na+ channels", "Calcium influx through L-type Ca2+ channels balanced by potassium efflux", "Potassium efflux through delayed rectifier K+ channels only", "Chloride influx through Cl- channels", "Sodium-calcium exchanger reversal"],
    correctAnswer: 1,
    explanationEn: "Phase 2 (plateau): L-type Ca2+ channel opening allows Ca2+ influx, which is balanced by K+ efflux through delayed rectifier channels. This prolonged depolarization prevents tetany and allows sufficient time for ventricular filling.",
    explanationZh: "平台期（2期）：L型Ca2+通道开放允许Ca2+内流，与延迟整流K+通道的K+外流平衡。此延长去极化防止强直收缩，确保心室充盈时间充足。",
    explanationEs: "Fase 2 (meseta): entrada Ca2+ canales tipo L balanceada por salida K+. Previene tetania.",
    highYieldTag: 'Cardiac action potential',
    difficulty: 'Medium'
  },
  {
    id: 937, step: 'step1', subject: 'Pharmacology',
    question: "A patient on warfarin for atrial fibrillation develops a deep vein thrombosis despite a therapeutic INR (2.5). Which of the following best explains this apparent treatment failure?",
    options: ["Warfarin resistance due to VKORC1 mutation", "Warfarin only prevents arterial clots", "Concomitant vitamin K intake completely inactivates warfarin", "Warfarin does not affect existing thrombi", "Protein C deficiency"],
    correctAnswer: 0,
    explanationEn: "Warfarin resistance can occur due to VKORC1 mutations reducing warfarin binding to its target enzyme. Other causes: poor compliance, high vitamin K intake, drug interactions. Genotyping for VKORC1 and CYP2C9 can help guide dosing.",
    explanationZh: "华法林耐药可由VKORC1突变导致华法林与其靶酶结合减少。其他原因：依从性差、高维生素K摄入、药物相互作用。VKORC1和CYP2C9基因分型可指导剂量。",
    explanationEs: "Resistencia a warfarina: mutacion VKORC1. Genotipificacion puede guiar dosis.",
    difficulty: 'Medium'
  },
  {
    id: 938, step: 'step1', subject: 'Pharmacology',
    question: "Which of the following beta-blockers also has alpha-1 blocking activity, making it particularly useful in hypertensive emergencies?",
    options: ["Metoprolol", "Atenolol", "Labetalol", "Propranolol", "Esmolol"],
    correctAnswer: 2,
    explanationEn: "Labetalol is a combined alpha-1 and non-selective beta blocker. IV labetalol is used in hypertensive emergencies, including pregnancy-induced hypertension and aortic dissection. Carvedilol also has alpha-blocking properties.",
    explanationZh: "拉贝洛尔是α1和非选择性β受体联合阻滞剂。静脉拉贝洛尔用于高血压急症，包括妊娠期高血压和主动脉夹层。卡维地洛也具有α阻滞作用。",
    explanationEs: "Labetalol: bloqueador alfa-1 y beta no selectivo. Util en emergencias hipertensivas.",
    highYieldTag: 'Beta blocker subtypes',
    difficulty: 'Medium'
  },
  {
    id: 939, step: 'step1', subject: 'Pharmacology',
    question: "A patient on isoniazid for latent TB develops peripheral neuropathy. Which vitamin deficiency is responsible for this adverse effect?",
    options: ["Vitamin B1 (Thiamine)", "Vitamin B6 (Pyridoxine)", "Vitamin B12 (Cobalamin)", "Vitamin B3 (Niacin)", "Vitamin B9 (Folate)"],
    correctAnswer: 1,
    explanationEn: "Isoniazid (INH) causes peripheral neuropathy by interfering with pyridoxine (B6) metabolism. It forms a complex with pyridoxal phosphate, the active form of B6. Pyridoxine supplementation (25-50 mg/day) prevents this. Other INH side effects: hepatitis, SLE-like syndrome.",
    explanationZh: "异烟肼通过干扰吡哆醇（B6）代谢引起周围神经病变。与磷酸吡哆醛（B6活性形式）形成复合物。补充吡哆醇（25-50mg/天）可预防。其他INH副作用：肝炎、SLE样综合征。",
    explanationEs: "Isoniazida: neuropatia periferica por deficit de piridoxina (B6). Suplementar B6.",
    highYieldTag: 'INH neuropathy',
    difficulty: 'Medium'
  },
  {
    id: 940, step: 'step1', subject: 'Pharmacology',
    question: "Which of the following antiepileptic drugs works primarily by enhancing GABA-mediated inhibition through increased frequency of chloride channel opening?",
    options: ["Phenytoin", "Carbamazepine", "Valproic acid", "Phenobarbital", "Ethosuximide"],
    correctAnswer: 3,
    explanationEn: "Phenobarbital (and other barbiturates) enhances GABA-A receptor activity by increasing the duration (not frequency) of chloride channel opening. Benzodiazepines increase frequency of opening. This distinction is high-yield for USMLE.",
    explanationZh: "苯巴比妥通过延长氯通道开放时间增强GABA-A受体活性。苯二氮卓类药物增加开放频率。此区别是USMLE高频考点。",
    explanationEs: "Fenobarbital: aumenta duracion de apertura de canal Cl-. Benzodiazepinas: frecuencia.",
    highYieldTag: 'GABA mechanism distinction',
    difficulty: 'Hard'
  },
  {
    id: 941, step: 'step1', subject: 'Biochemistry',
    question: "A 3-day-old neonate develops lethargy, poor feeding, and seizures. Labs show hyperammonemia with normal blood glucose and no metabolic acidosis. Urine orotic acid is markedly elevated. Enzyme deficiency?",
    options: ["Carbamoyl phosphate synthetase I (CPS I)", "Ornithine transcarbamylase (OTC)", "Argininosuccinate synthetase", "Argininosuccinate lyase", "Arginase"],
    correctAnswer: 1,
    explanationEn: "OTC deficiency: X-linked, most common urea cycle disorder. Elevated orotic acid (carbamoyl phosphate shunted to pyrimidine synthesis). Hyperammonemia, no acidosis, normal glucose. CPS I deficiency has LOW orotic acid (key distinction).",
    explanationZh: "OTC缺乏症：X连锁，最常见尿素循环障碍。乳清酸升高（氨甲酰磷酸转向嘧啶合成）。高氨血症，无酸中毒，血糖正常。CPS I缺乏乳清酸降低（关键区别）。",
    explanationEs: "Deficiencia OTC: X-ligada. Acido orotico elevado. Hiperamonemia sin acidosis.",
    highYieldTag: 'Urea cycle disorders',
    difficulty: 'Hard'
  },
  {
    id: 942, step: 'step1', subject: 'Biochemistry',
    question: "A patient with G6PD deficiency develops hemolytic anemia after eating fava beans. Which of the following best explains why RBCs are particularly susceptible?",
    options: ["RBCs lack mitochondria for oxidative phosphorylation", "RBCs rely exclusively on the pentose phosphate pathway for NADPH production", "RBCs have high levels of glutathione reductase", "RBCs cannot synthesize new proteins", "RBCs have high oxygen tension"],
    correctAnswer: 1,
    explanationEn: "RBCs lack mitochondria and cannot generate NADPH via other pathways. The pentose phosphate pathway (G6PD is rate-limiting) is the ONLY source of NADPH in RBCs. NADPH is needed to regenerate reduced glutathione, which protects against oxidative stress.",
    explanationZh: "红细胞缺乏线粒体，无法通过其他途径产生NADPH。磷酸戊糖途径（G6PD为限速酶）是红细胞NADPH的唯一来源。NADPH用于再生还原型谷胱甘肽，保护细胞免受氧化应激。",
    explanationEs: "G6PD: via de pentosas fosfato es UNICA fuente de NADPH en eritrocitos.",
    difficulty: 'Medium'
  },
  {
    id: 943, step: 'step1', subject: 'Biochemistry',
    question: "During prolonged fasting (>48 hours), which of the following is the primary fuel source for the brain?",
    options: ["Glucose from hepatic glycogenolysis", "Glucose from hepatic gluconeogenesis", "Ketone bodies from hepatic fatty acid oxidation", "Free fatty acids from adipose tissue", "Lactate from muscle glycolysis"],
    correctAnswer: 2,
    explanationEn: "After 2-3 days of fasting, the brain adapts to use ketone bodies (beta-hydroxybutyrate, acetoacetate) as its primary fuel, reducing glucose requirement from ~120g/day to ~40g/day. This spares muscle protein from gluconeogenesis.",
    explanationZh: "禁食2-3天后，大脑适应使用酮体（β-羟丁酸、乙酰乙酸）作为主要燃料，葡萄糖需求从~120g/天降至~40g/天。此机制节省肌肉蛋白质用于糖异生。",
    explanationEs: "Ayuno >48h: cerebro usa cuerpos cetonicos. Reduce requerimiento de glucosa.",
    difficulty: 'Medium'
  },
  {
    id: 944, step: 'step1', subject: 'Microbiology',
    question: "A 20-year-old college student presents with sore throat, fever, cervical lymphadenopathy, and splenomegaly. Peripheral smear shows atypical lymphocytes (>10% of WBCs). Heterophile antibody test is positive. Which virus is responsible?",
    options: ["Cytomegalovirus (CMV)", "Epstein-Barr virus (EBV)", "HIV", "Adenovirus", "Human herpesvirus 6 (HHV-6)"],
    correctAnswer: 1,
    explanationEn: "EBV causes infectious mononucleosis: fever, pharyngitis, lymphadenopathy, splenomegaly. Atypical lymphocytes (Downey cells) on smear. Positive Monospot (heterophile antibody). CMV mono is heterophile-negative. Avoid contact sports due to splenomegaly risk of rupture.",
    explanationZh: "EBV引起传染性单核细胞增多症：发热、咽炎、淋巴结肿大、脾肿大。外周血涂片异型淋巴细胞。Monospot（嗜异性抗体）阳性。CMV单核细胞增多症嗜异性抗体阴性。因脾破裂风险应避免接触性运动。",
    explanationEs: "Mononucleosis infecciosa por VEB. Linfocitos atipicos, Monospot positivo.",
    highYieldTag: 'EBV mononucleosis',
    difficulty: 'Medium'
  },
  {
    id: 945, step: 'step1', subject: 'Microbiology',
    question: "A patient develops pseudomembranous colitis after a course of clindamycin. Which toxin-mediated mechanism is responsible?",
    options: ["Clostridium difficile toxins A and B inactivate Rho GTPases", "Clostridium perfringens alpha toxin (lecithinase)", "Staphylococcus aureus enterotoxin superantigen", "Shigella Shiga toxin inhibiting 28S rRNA", "Bacillus cereus cereulide toxin"],
    correctAnswer: 0,
    explanationEn: "C. difficile toxins: Toxin A (enterotoxin) and Toxin B (cytotoxin) glucosylate and inactivate Rho family GTPases (Rho, Rac, Cdc42), disrupting actin cytoskeleton, causing cell rounding and death. Pseudomembranes: fibrin, neutrophils, cellular debris.",
    explanationZh: "艰难梭菌毒素：毒素A（肠毒素）和毒素B（细胞毒素）葡糖基化并灭活Rho家族GTP酶，破坏肌动蛋白骨架，导致细胞变圆和死亡。伪膜：纤维蛋白、中性粒细胞、细胞碎片。",
    explanationEs: "C. difficile: toxinas A y B inactivan Rho GTPasas. Colitis pseudomembranosa.",
    difficulty: 'Medium'
  },
  {
    id: 946, step: 'step1', subject: 'Microbiology',
    question: "A 2-year-old unvaccinated child presents with paroxysmal cough followed by an inspiratory \"whoop,\" post-tussive emesis, and lymphocytosis (WBC 60,000 with 80% lymphocytes). Which organism?",
    options: ["Bordetella pertussis", "Mycoplasma pneumoniae", "Chlamydia trachomatis", "Respiratory syncytial virus (RSV)", "Haemophilus influenzae type B"],
    correctAnswer: 0,
    explanationEn: "Bordetella pertussis causes whooping cough (pertussis). Three stages: catarrhal, paroxysmal (whooping cough), convalescent. Profound lymphocytosis is a hallmark (pertussis toxin stimulates lymphocytosis). Treat with macrolides (azithromycin). Prevent with DTaP/Tdap.",
    explanationZh: "百日咳鲍特菌引起百日咳。三期：卡他期、痉咳期（鸡鸣样回声）、恢复期。显著淋巴细胞增多是特征。大环内酯类（阿奇霉素）治疗。DTaP/Tdap预防。",
    explanationEs: "Bordetella pertussis: tos ferina. Linfocitosis marcada. Macrolidos.",
    highYieldTag: 'Pertussis',
    difficulty: 'Medium'
  },
  {
    id: 947, step: 'step1', subject: 'Immunology',
    question: "A 6-month-old infant presents with recurrent sinopulmonary infections, failure to thrive, and absent tonsillar tissue. Serum immunoglobulins are markedly decreased. Flow cytometry shows absent B cells with normal T cell counts. Which mutation is most likely?",
    options: ["BTK gene mutation", "CD40 ligand deficiency", "ADA deficiency", "RAG1/RAG2 mutation", "IL-2 receptor gamma chain mutation"],
    correctAnswer: 0,
    explanationEn: "X-linked (Bruton) agammaglobulinemia: BTK mutation blocks B cell maturation at pre-B stage. Absent B cells, all immunoglobulins low. Presents after 6 months when maternal IgG wanes. Normal T cells. Recurrent bacterial infections.",
    explanationZh: "X连锁无丙种球蛋白血症（Bruton）：BTK突变阻断前B细胞成熟。B细胞缺失，所有免疫球蛋白降低。6个月后母体IgG消退时发病。T细胞正常。反复细菌感染。",
    explanationEs: "Agammaglobulinemia de Bruton: mutacion BTK, celulas B ausentes. >6 meses.",
    highYieldTag: 'Bruton agammaglobulinemia',
    difficulty: 'Medium'
  },
  {
    id: 948, step: 'step1', subject: 'Immunology',
    question: "In the germinal center reaction, which enzyme is responsible for class switch recombination from IgM to IgG?",
    options: ["RAG1/RAG2", "Terminal deoxynucleotidyl transferase (TdT)", "Activation-induced cytidine deaminase (AID)", "DNA-dependent protein kinase (DNA-PK)", "Artemis nuclease"],
    correctAnswer: 2,
    explanationEn: "AID (Activation-Induced Cytidine Deaminase) is essential for both somatic hypermutation and class switch recombination in germinal centers. AID deficiency causes Hyper-IgM syndrome type 2 (elevated IgM, low IgG/IgA/IgE).",
    explanationZh: "AID（活化诱导胞苷脱氨酶）对生发中心的体细胞高频突变和类别转换重组均至关重要。AID缺乏导致高IgM综合征2型（IgM升高，IgG/IgA/IgE降低）。",
    explanationEs: "AID: esencial para hipermutacion somatica y cambio de clase. Deficit = Hiper-IgM tipo 2.",
    difficulty: 'Medium'
  },
  {
    id: 949, step: 'step1', subject: 'Anatomy',
    question: "A patient develops foot drop after a fibular neck fracture. Which nerve is most likely injured?",
    options: ["Tibial nerve", "Common peroneal (fibular) nerve", "Superficial peroneal nerve", "Deep peroneal nerve", "Sural nerve"],
    correctAnswer: 1,
    explanationEn: "Common peroneal nerve wraps around the fibular neck and is vulnerable to injury there. Results in foot drop (loss of dorsiflexion), steppage gait. Sensory loss over anterolateral leg and dorsum of foot. Deep peroneal: dorsiflexion. Superficial peroneal: eversion.",
    explanationZh: "腓总神经绕行腓骨颈，此处易受伤。导致足下垂（背屈丧失）、跨阈步态。小腿前外侧和足背感觉丧失。腓深神经：背屈。腓浅神经：外翻。",
    explanationEs: "Nervio peroneo comun: vulnerable en cuello de perone. Pie caido.",
    difficulty: 'Medium'
  },
  {
    id: 950, step: 'step1', subject: 'Anatomy',
    question: "During a thyroidectomy, a patient develops hoarseness post-operatively. Which nerve was most likely injured?",
    options: ["Superior laryngeal nerve (external branch)", "Superior laryngeal nerve (internal branch)", "Recurrent laryngeal nerve", "Glossopharyngeal nerve", "Hypoglossal nerve"],
    correctAnswer: 2,
    explanationEn: "Recurrent laryngeal nerve (RLN) injury causes hoarseness (unilateral) or stridor/respiratory distress (bilateral). RLN innervates all intrinsic laryngeal muscles except cricothyroid (external branch of superior laryngeal nerve).",
    explanationZh: "喉返神经损伤导致声音嘶哑（单侧）或喘鸣/呼吸困难（双侧）。喉返神经支配除环甲肌（喉上神经外支）外的所有喉内肌。",
    explanationEs: "Nervio laringeo recurrente: ronquera unilateral, estridor bilateral.",
    highYieldTag: 'Thyroid surgery complication',
    difficulty: 'Medium'
  },
  {
    id: 951, step: 'step1', subject: 'Pathology',
    question: "A 70-year-old male presents with bone pain, fatigue, and recurrent infections. Labs: Hb 8 g/dL, calcium 12 mg/dL, creatinine 2.5 mg/dL. Serum protein electrophoresis shows an M-spike in the gamma region. Urine Bence Jones protein is positive. Bone marrow biopsy shows >20% plasma cells. Diagnosis?",
    options: ["Monoclonal gammopathy of undetermined significance (MGUS)", "Multiple myeloma", "Waldenstrom macroglobulinemia", "Primary amyloidosis", "Smoldering myeloma"],
    correctAnswer: 1,
    explanationEn: "Multiple myeloma: CRAB criteria (HyperCalcemia, Renal insufficiency, Anemia, Bone lesions). M-spike, Bence Jones protein (free light chains in urine), >10% clonal plasma cells in bone marrow. MGUS: <10% plasma cells, no CRAB.",
    explanationZh: "多发性骨髓瘤：CRAB标准（高钙血症、肾功能不全、贫血、骨病变）。M蛋白峰、本周蛋白（尿游离轻链）、骨髓>10%克隆浆细胞。MGUS：<10%浆细胞，无CRAB。",
    explanationEs: "Mieloma multiple: criterios CRAB. Pico M, proteinuria Bence Jones.",
    highYieldTag: 'CRAB criteria',
    difficulty: 'Medium'
  },
  {
    id: 952, step: 'step1', subject: 'Pathology',
    question: "A kidney biopsy from a patient with nephrotic syndrome shows normal glomeruli on light microscopy but diffuse effacement of foot processes on electron microscopy. Immunofluorescence is negative. Diagnosis?",
    options: ["Focal segmental glomerulosclerosis (FSGS)", "Membranous nephropathy", "Minimal change disease", "Membranoproliferative GN", "IgA nephropathy"],
    correctAnswer: 2,
    explanationEn: "Minimal change disease: normal light microscopy, foot process effacement on EM, negative IF. Most common cause of nephrotic syndrome in children. Responds to corticosteroids. Selective proteinuria (mostly albumin).",
    explanationZh: "微小病变病：光镜正常、电镜足突融合、免疫荧光阴性。儿童肾病综合征最常见病因。对糖皮质激素敏感。选择性蛋白尿（以白蛋白为主）。",
    explanationEs: "Enfermedad de cambios minimos: ME con fusion podocitaria. Corticosensibles.",
    highYieldTag: 'Nephrotic syndrome',
    difficulty: 'Medium'
  },
  {
    id: 953, step: 'step1', subject: 'Physiology',
    question: "A patient with hyperaldosteronism would be expected to have which set of laboratory findings?",
    options: ["Hypernatremia, hypokalemia, metabolic alkalosis", "Hyponatremia, hyperkalemia, metabolic acidosis", "Hypernatremia, hyperkalemia, metabolic acidosis", "Hyponatremia, hypokalemia, metabolic alkalosis", "Normonatremia, hyperkalemia, metabolic acidosis"],
    correctAnswer: 0,
    explanationEn: "Aldosterone increases Na+ reabsorption (leading to hypernatremia) and K+/H+ secretion (leading to hypokalemia and metabolic alkalosis) in the distal tubule/collecting duct. \"Aldosterone escape\" prevents severe edema.",
    explanationZh: "醛固酮增多：Na+重吸收↑（高钠血症）、K+/H+分泌↑（低钾血症和代谢性碱中毒）。\"醛固酮逃逸\"防止严重水肿。",
    explanationEs: "Hiperaldosteronismo: hipernatremia, hipokalemia, alcalosis metabolica.",
    difficulty: 'Medium'
  },
  {
    id: 954, step: 'step1', subject: 'Physiology',
    question: "In the cardiac cycle, the dicrotic notch on the aortic pressure tracing corresponds to which event?",
    options: ["Opening of the aortic valve", "Closing of the aortic valve", "Opening of the mitral valve", "Closing of the mitral valve", "Peak systolic pressure"],
    correctAnswer: 1,
    explanationEn: "The dicrotic notch (incisura) represents aortic valve closure, causing a brief backward flow that produces a small pressure rise in the aorta. This marks the end of systole and beginning of diastole.",
    explanationZh: "重搏切迹（降中峡）代表主动脉瓣关闭，导致短暂回流在主动脉产生小幅压力上升。标志收缩期结束、舒张期开始。",
    explanationEs: "Escotadura dicrota: cierre de valvula aortica. Fin de sistole.",
    difficulty: 'Medium'
  },
  {
    id: 955, step: 'step1', subject: 'Pharmacology',
    question: "A patient on lithium for bipolar disorder develops polyuria, polydipsia, and dilute urine with low specific gravity. Which of the following best explains this adverse effect?",
    options: ["Lithium blocks ADH receptors on collecting duct", "Lithium downregulates aquaporin-2 expression in collecting duct", "Lithium stimulates ANP secretion", "Lithium directly inhibits thirst center", "Lithium increases GFR"],
    correctAnswer: 1,
    explanationEn: "Lithium causes nephrogenic diabetes insipidus by reducing aquaporin-2 expression in the collecting duct, impairing the kidney's response to ADH. Patients produce large volumes of dilute urine despite normal/high ADH levels. Amiloride can help.",
    explanationZh: "锂剂通过降低集合管水通道蛋白2表达导致肾性尿崩症，肾脏对ADH反应受损。尽管ADH水平正常或偏高，产生大量稀释尿。阿米洛利可帮助。",
    explanationEs: "Litio: diabetes insipida nefrogenica. Reduce acuaporina-2 en tubulo colector.",
    highYieldTag: 'Lithium ADR',
    difficulty: 'Medium'
  },
  {
    id: 956, step: 'step1', subject: 'Biochemistry',
    question: "A patient presents with orange-red tonsils and decreased plasma HDL levels. Which condition is most likely?",
    options: ["Familial hypercholesterolemia", "Tangier disease", "Abetalipoproteinemia", "LCAT deficiency", "Niemann-Pick disease type C"],
    correctAnswer: 1,
    explanationEn: "Tangier disease: ABCA1 transporter mutation. Defect in cholesterol efflux from cells to nascent HDL → low/absent HDL, orange tonsils (cholesterol ester deposits), hepatosplenomegaly, peripheral neuropathy. Increased risk of premature CAD.",
    explanationZh: "Tangier病：ABCA1转运蛋白突变。胆固醇从细胞流出至新生HDL缺陷→HDL低/缺失、橙色扁桃体（胆固醇酯沉积）、肝脾肿大、周围神经病变。早发冠心病风险增加。",
    explanationEs: "Enfermedad de Tangier: mutacion ABCA1. HDL bajo, amigdalas anaranjadas.",
    difficulty: 'Medium'
  },
  {
    id: 957, step: 'step1', subject: 'Microbiology',
    question: "A patient who recently traveled to Southeast Asia presents with fever, chills, and cyclic fevers every 48 hours. Which Plasmodium species is most likely?",
    options: ["Plasmodium falciparum", "Plasmodium vivax/Plasmodium ovale", "Plasmodium malariae", "Plasmodium knowlesi", "Plasmodium berghei"],
    correctAnswer: 1,
    explanationEn: "P. vivax and P. ovale cause tertian malaria (fever every 48 hours). P. malariae: quartan (every 72h). P. falciparum: irregular/daily. P. vivax/ovale have hypnozoites in liver that cause relapse; treat with primaquine for liver stage.",
    explanationZh: "间日疟原虫和卵形疟原虫引起间日疟（每48小时发热）。三日疟原虫：三日疟（每72小时）。恶性疟原虫：不规则/每日。间日疟/卵形疟在肝脏有休眠体可复发；伯氨喹治疗肝期。",
    explanationEs: "P. vivax/ovale: fiebre terciana (cada 48h). Hipnozoitos hepaticos.",
    highYieldTag: 'Malaria periodicity',
    difficulty: 'Medium'
  },
  {
    id: 958, step: 'step1', subject: 'Immunology',
    question: "Which complement component deficiency is associated with recurrent Neisseria infections?",
    options: ["C1q deficiency", "C3 deficiency", "C5-C9 (MAC) deficiency", "C1 esterase inhibitor deficiency", "Factor H deficiency"],
    correctAnswer: 2,
    explanationEn: "Deficiency of terminal complement components (C5, C6, C7, C8, C9) forming the Membrane Attack Complex (MAC) predisposes to recurrent Neisseria infections (N. meningitidis, N. gonorrhoeae). MAC is essential for killing gram-negative diplococci.",
    explanationZh: "末端补体成分（C5-C9）形成膜攻击复合物（MAC）缺乏易导致复发性奈瑟菌感染（脑膜炎奈瑟菌、淋病奈瑟菌）。MAC是杀灭革兰阴性双球菌的关键。",
    explanationEs: "Deficiencia C5-C9 (MAC): infecciones recurrentes por Neisseria.",
    difficulty: 'Medium'
  },
  {
    id: 959, step: 'step2', subject: 'Internal Medicine',
    question: "A 65-year-old male with CAD, HFrEF (EF 30%), and HTN is on lisinopril, carvedilol, and furosemide. Despite optimal medical therapy, he has NYHA Class III symptoms. Which additional medication has shown mortality benefit in this population?",
    options: ["Digoxin", "Spironolactone (MRA)", "Hydralazine plus isosorbide dinitrate", "Ivabradine", "Amlodipine"],
    correctAnswer: 1,
    explanationEn: "RALES trial: spironolactone (MRA) reduced mortality in HFrEF NYHA III-IV. Current guidelines: MRA (spironolactone or eplerenone) for all HFrEF with EF <=35%. Monitor potassium and creatinine.",
    explanationZh: "RALES试验：螺内酯（MRA）降低HFrEF NYHA III-IV死亡率。当前指南：所有EF<=35%的HFrEF患者使用MRA。监测血钾和肌酐。",
    explanationEs: "RALES: espironolactona reduce mortalidad en IC NYHA III-IV. MRA para FEVI <=35%.",
    highYieldTag: 'HFrEF GDMT',
    difficulty: 'Medium'
  },
  {
    id: 960, step: 'step2', subject: 'Internal Medicine',
    question: "A 55-year-old female on metformin and glipizide for T2DM presents with confusion and sweating. Fingerstick glucose is 45 mg/dL. She is alert and able to swallow. Best management?",
    options: ["IV 50% dextrose (D50)", "IM glucagon", "15-20 g oral glucose (e.g., 4 oz juice, glucose tablets)", "Octreotide SC", "Observation and repeat glucose in 15 min"],
    correctAnswer: 2,
    explanationEn: "Hypoglycemia in a conscious patient: Rule of 15 — give 15-20 g of fast-acting carbohydrate (oral glucose preferred), recheck in 15 minutes. Repeat if still <70. IV dextrose only if altered mental status or unable to take PO. IM glucagon if no IV access.",
    explanationZh: "清醒患者低血糖：15法则——给予15-20克速效碳水化合物，15分钟后复查。若仍<70重复。IV葡萄糖仅用于意识改变或无法口服者。IM胰高血糖素用于无静脉通路时。",
    explanationEs: "Hipoglucemia paciente consciente: regla de 15. 15-20g carbohidratos rapidos.",
    difficulty: 'Medium'
  },
  {
    id: 961, step: 'step2', subject: 'Internal Medicine',
    question: "A 72-year-old male with COPD presents with increased dyspnea, purulent sputum, and wheezing. ABG: pH 7.28, PaCO2 70, PaO2 55, HCO3 32. What is the acid-base disorder?",
    options: ["Acute respiratory acidosis", "Chronic respiratory acidosis", "Acute on chronic respiratory acidosis", "Metabolic acidosis with respiratory compensation", "Mixed respiratory and metabolic acidosis"],
    correctAnswer: 2,
    explanationEn: "COPD patients have chronic CO2 retention with compensatory metabolic alkalosis (elevated HCO3). An acute exacerbation further increases PaCO2. pH <7.35 + elevated PaCO2 + elevated HCO3 = acute on chronic respiratory acidosis. Expected HCO3 compensation in chronic: ~4 mEq/L per 10 mmHg PaCO2.",
    explanationZh: "COPD患者有慢性CO2潴留伴代偿性代谢性碱中毒（HCO3升高）。急性加重使PaCO2进一步升高。pH<7.35 + PaCO2↑ + HCO3↑ = 慢性呼酸急性加重。",
    explanationEs: "EPOC con exacerbacion: acidosis respiratoria aguda sobre cronica.",
    difficulty: 'Medium'
  },
  {
    id: 962, step: 'step2', subject: 'Internal Medicine',
    question: "A 45-year-old African American female presents with dyspnea on exertion, bilateral hilar lymphadenopathy on CXR, and non-caseating granulomas on transbronchial biopsy. Serum ACE level is elevated. What is the first-line treatment if she is symptomatic?",
    options: ["Methotrexate", "Prednisone (corticosteroids)", "Infliximab (anti-TNF)", "Hydroxychloroquine", "Observation without treatment"],
    correctAnswer: 1,
    explanationEn: "Sarcoidosis: non-caseating granulomas, bilateral hilar lymphadenopathy, elevated ACE. First-line for symptomatic pulmonary disease: corticosteroids (prednisone 0.5 mg/kg/day). Methotrexate is second-line/steroid-sparing.",
    explanationZh: "结节病：非干酪样肉芽肿、双侧肺门淋巴结肿大、ACE升高。有症状肺病一线治疗：糖皮质激素。甲氨蝶呤为二线/激素节省治疗。",
    explanationEs: "Sarcoidosis: granulomas no caseificantes. Tratamiento: prednisona.",
    highYieldTag: 'Sarcoidosis treatment',
    difficulty: 'Medium'
  },
  {
    id: 963, step: 'step2', subject: 'Internal Medicine',
    question: "A 50-year-old male with cirrhosis presents with increasing abdominal girth. Paracentesis reveals ascitic fluid with PMN count of 350 cells/mm3. He is afebrile. Diagnosis?",
    options: ["Secondary bacterial peritonitis", "Spontaneous bacterial peritonitis (SBP)", "Tuberculous peritonitis", "Malignant ascites", "Pancreatic ascites"],
    correctAnswer: 1,
    explanationEn: "SBP diagnosis: ascitic fluid PMN >=250 cells/mm3 WITHOUT an intra-abdominal surgical source. Treat with IV cefotaxime or ceftriaxone + albumin (reduces hepatorenal syndrome risk). SBP prophylaxis: norfloxacin or TMP-SMX if prior SBP or ascitic protein <1.5.",
    explanationZh: "SBP诊断：腹水PMN>=250个/mm3且无腹腔内手术源。IV头孢噻肟或头孢曲松+白蛋白（降低肝肾综合征风险）。SBP预防：既往SBP或腹水蛋白<1.5。",
    explanationEs: "PBE: PMN >=250 en ascitis. Cefotaxima + albumina.",
    difficulty: 'Medium'
  },
  {
    id: 964, step: 'step2', subject: 'Internal Medicine',
    question: "Wells criteria are used to determine the pre-test probability of which condition?",
    options: ["Deep vein thrombosis (DVT)", "Pulmonary embolism (PE)", "Acute coronary syndrome", "Aortic dissection", "Heart failure exacerbation"],
    correctAnswer: 1,
    explanationEn: "Wells criteria for PE: clinical signs of DVT (3 pts), PE as likely or more likely than alternative dx (3), HR >100 (1.5), immobilization/surgery <4 wks (1.5), prior DVT/PE (1.5), hemoptysis (1), malignancy (1). Score >4 = PE likely → CT pulmonary angiogram.",
    explanationZh: "PE Wells标准：DVT临床体征（3分）、PE可能性大于其他诊断（3分）、HR>100（1.5分）、制动/手术<4周（1.5分）、既往DVT/PE（1.5分）、咯血（1分）、恶性肿瘤（1分）。>4分→CT肺血管造影。",
    explanationEs: "Criterios de Wells para EP. >4 puntos = EP probable → angioTAC.",
    highYieldTag: 'Wells criteria',
    difficulty: 'Medium'
  },
  {
    id: 965, step: 'step2', subject: 'Internal Medicine',
    question: "A 28-year-old female with SLE on hydroxychloroquine presents with pleuritic chest pain, fever, and a friction rub on auscultation. EKG shows diffuse ST elevation and PR depression. Troponin is normal. Diagnosis?",
    options: ["Myocardial infarction", "Acute pericarditis", "Pulmonary embolism", "Myocarditis", "Costochondritis"],
    correctAnswer: 1,
    explanationEn: "Acute pericarditis: pleuritic chest pain (worse lying flat, better leaning forward), pericardial friction rub, diffuse ST elevation with PR depression on EKG. Normal troponin distinguishes from myocarditis (troponin elevated). SLE increases risk.",
    explanationZh: "急性心包炎：胸膜炎性胸痛（平卧加重、前倾减轻）、心包摩擦音、弥漫性ST抬高伴PR压低。肌钙蛋白正常区别于心肌炎（肌钙蛋白升高）。SLE增加风险。",
    explanationEs: "Pericarditis aguda: dolor pleuritico, frote pericardico, ST difuso.",
    difficulty: 'Medium'
  },
  {
    id: 966, step: 'step2', subject: 'Surgery',
    question: "A 65-year-old male presents with RLQ abdominal pain, fever, and leukocytosis. CT shows a thickened, dilated appendix with surrounding fat stranding. No perforation or abscess. Management?",
    options: ["IV antibiotics alone", "Laparoscopic appendectomy", "CT-guided percutaneous drainage", "Colonoscopy", "Observation and serial abdominal exams"],
    correctAnswer: 1,
    explanationEn: "Acute appendicitis without perforation/abscess: urgent appendectomy (laparoscopic preferred). IV antibiotics alone may be considered in select uncomplicated cases but surgery remains standard. Percutaneous drainage for abscess, followed by interval appendectomy.",
    explanationZh: "急性阑尾炎无穿孔/脓肿：紧急阑尾切除术（首选腹腔镜）。单纯IV抗生素可用于特定非复杂性病例，但手术仍为标准。经皮引流用于脓肿，之后择期阑尾切除。",
    explanationEs: "Apendicitis aguda no complicada: apendicectomia laparoscopica urgente.",
    difficulty: 'Medium'
  },
  {
    id: 967, step: 'step2', subject: 'Surgery',
    question: "A patient is post-operative day 3 after an open cholecystectomy. She develops fever to 38.8C, tachycardia, and purulent drainage from the incision site. The wound is opened and there is erythema extending 2 cm beyond the wound edges. What is the most appropriate classification?",
    options: ["Superficial surgical site infection (SSI)", "Deep incisional SSI", "Organ/space SSI", "Wound dehiscence only", "Seroma"],
    correctAnswer: 1,
    explanationEn: "Deep incisional SSI: involves deep soft tissues (fascia/muscle), occurs within 30 days (or 90 days if implant), purulent drainage from deep incision, wound dehiscence or deliberate opening with fever/pain. Superficial SSI: skin/subcutaneous only.",
    explanationZh: "深部切口SSI：累及深部软组织（筋膜/肌肉），术后30天内（有植入物90天），深部切口脓性引流、伤口裂开或故意开放伴发热/疼痛。浅表SSI：仅皮肤/皮下。",
    explanationEs: "ISQ incisional profunda: fascias/musculo, drenaje purulento profundo.",
    difficulty: 'Medium'
  },
  {
    id: 968, step: 'step2', subject: 'Surgery',
    question: "A 60-year-old female on warfarin for atrial fibrillation sustains a ground-level fall. CT head shows a 15 mm acute subdural hematoma with 8 mm midline shift. INR is 3.5. Management?",
    options: ["Immediate craniotomy for evacuation", "Reverse anticoagulation with 4-factor PCC + vitamin K, then surgery", "Observation with serial CT scans", "Burr hole drainage at bedside", "Mannitol and hyperventilation only"],
    correctAnswer: 1,
    explanationEn: "Subdural hematoma with significant mass effect (midline shift >5 mm) requires surgical evacuation. However, INR must be reversed first: 4-factor PCC (rapid reversal) + IV vitamin K (sustained reversal) + FFP if PCC unavailable. Fresh frozen plasma alone is slower.",
    explanationZh: "硬膜下血肿伴明显占位效应（中线移位>5mm）需手术清除。但先逆转INR：4因子PCC+IV维生素K。单纯新鲜冰冻血浆较慢。",
    explanationEs: "Hematoma subdural con efecto de masa: revertir INR con PCC 4F + vit K. Luego cirugia.",
    difficulty: 'Medium'
  },
  {
    id: 969, step: 'step2', subject: 'Surgery',
    question: "A 70-year-old male presents with acute-onset severe abdominal pain out of proportion to physical exam findings. He has a history of atrial fibrillation (not on anticoagulation). CT angiography shows superior mesenteric artery occlusion. Lactate is 6 mmol/L. Best management?",
    options: ["IV heparin and observation", "Catheter-directed thrombolysis", "Emergent laparotomy with embolectomy", "IV antibiotics and bowel rest", "Papaverine infusion"],
    correctAnswer: 2,
    explanationEn: "Acute mesenteric ischemia from SMA embolism (classic: Afib, pain out of proportion, elevated lactate): emergent laparotomy with embolectomy is standard. If bowel is necrotic, resection is needed. \"Time is bowel\" — irreversible ischemia in 6 hours.",
    explanationZh: "急性肠系膜缺血（SMA栓塞，典型：房颤、与体征不成比例的疼痛、乳酸升高）：紧急剖腹探查取栓。坏死肠管需切除。\"时间就是肠道\"——6小时内不可逆缺血。",
    explanationEs: "Isquemia mesenterica aguda: laparotomia urgente + embolectomia. Lactato elevado.",
    difficulty: 'Medium'
  },
  {
    id: 970, step: 'step2', subject: 'Pediatrics',
    question: "A 2-week-old infant presents with projectile non-bilious vomiting after every feed, visible gastric peristaltic waves, and an olive-shaped mass in the epigastrium. Labs show hypochloremic, hypokalemic metabolic alkalosis. Diagnosis?",
    options: ["Gastroesophageal reflux disease (GERD)", "Pyloric stenosis", "Duodenal atresia", "Malrotation with volvulus", "Intussusception"],
    correctAnswer: 1,
    explanationEn: "Hypertrophic pyloric stenosis: 2-8 weeks old, first-born males, projectile non-bilious vomiting, \"olive\" mass in epigastrium. Labs: hypochloremic, hypokalemic metabolic alkalosis (paradoxical aciduria). Diagnosis: ultrasound (pyloric thickness >3-4 mm, length >15 mm). Treatment: pyloromyotomy.",
    explanationZh: "肥厚性幽门狭窄：2-8周龄、头胎男性、喷射性非胆汁性呕吐、上腹部\"橄榄\"肿块。化验：低氯低钾代谢性碱中毒（反常性酸性尿）。超声诊断。幽门肌切开术治疗。",
    explanationEs: "Estenosis pilorica: vomito proyectil no bilioso, masa en \"oliva\". Alcalosis hipocloremica.",
    highYieldTag: 'Pyloric stenosis',
    difficulty: 'Medium'
  },
  {
    id: 971, step: 'step2', subject: 'Pediatrics',
    question: "A 3-year-old child presents with colicky abdominal pain, \"currant jelly\" stools, and a sausage-shaped mass in the right upper quadrant on exam. Best next diagnostic step?",
    options: ["Abdominal X-ray", "Abdominal ultrasound", "Barium enema", "CT abdomen", "Diagnostic laparoscopy"],
    correctAnswer: 1,
    explanationEn: "Intussusception: ileocolic telescoping, children 3 months-3 years. Classic triad: colicky pain, currant jelly stools, sausage mass (only in <50%). Diagnosis: ultrasound (target/doughnut sign). Treatment: air or contrast enema reduction (success 80-90%).",
    explanationZh: "肠套叠：回结肠套叠，3个月-3岁儿童。典型三联征：绞痛、果酱样便、腊肠样肿块（仅<50%出现）。超声诊断（靶征/甜甜圈征）。空气或造影灌肠复位（成功率80-90%）。",
    explanationEs: "Intususcepcion: dolor colico, heces en jalea. Ecografia: signo en diana.",
    difficulty: 'Medium'
  },
  {
    id: 972, step: 'step2', subject: 'Pediatrics',
    question: "A 5-year-old unvaccinated child presents with fever, sore throat, and a gray pseudomembrane on the tonsils that bleeds when scraped. Which finding is most concerning?",
    options: ["Cervical lymphadenopathy", "Cardiac arrhythmia or myocarditis", "Acute glomerulonephritis", "Arthritis", "Encephalopathy"],
    correctAnswer: 1,
    explanationEn: "Diphtheria (Corynebacterium diphtheriae): pseudomembrane, bull neck. Exotoxin causes myocarditis (most common cause of death) and neuritis (palatal paralysis, cranial nerve palsies). Treat with antitoxin + antibiotics (erythromycin/penicillin). Prevent with DTaP/Tdap.",
    explanationZh: "白喉（白喉棒状杆菌）：伪膜、牛颈。外毒素引起心肌炎（最常见死因）和神经炎（腭麻痹、颅神经麻痹）。抗毒素+抗生素治疗。DTaP/Tdap预防。",
    explanationEs: "Difteria: pseudomembrana, miocarditis por exotoxina. Antitoxina + antibioticos.",
    highYieldTag: 'Diphtheria complication',
    difficulty: 'Medium'
  },
  {
    id: 973, step: 'step2', subject: 'Obstetrics & Gynecology',
    question: "A 28-year-old G1P0 at 32 weeks gestation presents with severe headache, epigastric pain, and visual disturbances. BP is 170/110 mmHg. Urine dipstick shows 3+ protein. Platelets are 90,000/microliter and AST is 120 U/L. Diagnosis?",
    options: ["Gestational hypertension", "Preeclampsia without severe features", "Preeclampsia with severe features", "Eclampsia", "HELLP syndrome"],
    correctAnswer: 3,
    explanationEn: "This patient meets criteria for preeclampsia with severe features (BP >=160/110, thrombocytopenia, elevated AST, severe headache, epigastric pain). Management: IV magnesium sulfate (seizure prophylaxis), antihypertensives (labetalol/hydralazine), delivery planning.",
    explanationZh: "重度子痫前期（BP>=160/110、血小板减少、肝酶升高、严重头痛、上腹痛）。处理：IV硫酸镁（预防子痫发作）、降压药、计划分娩。",
    explanationEs: "Preeclampsia severa: PAS>=160 mmHg. Sulfato de magnesio IV, antihipertensivos.",
    highYieldTag: 'Severe preeclampsia',
    difficulty: 'Medium'
  },
  {
    id: 974, step: 'step2', subject: 'Obstetrics & Gynecology',
    question: "A 32-year-old female presents with irregular heavy menstrual bleeding and an enlarged, irregularly shaped uterus on bimanual exam. Pelvic ultrasound shows multiple well-circumscribed hypoechoic masses within the myometrium. Diagnosis?",
    options: ["Endometrial polyps", "Uterine leiomyomas (fibroids)", "Adenomyosis", "Endometrial hyperplasia", "Uterine sarcoma"],
    correctAnswer: 1,
    explanationEn: "Uterine leiomyomas (fibroids): most common benign uterine tumor. Well-circumscribed, hypoechoic on ultrasound. Symptoms: menorrhagia, pelvic pressure/pain, reproductive issues. Degeneration can cause acute pain. Treatment: medical (NSAIDs, OCPs, GnRH agonists) or surgical (myomectomy, hysterectomy).",
    explanationZh: "子宫平滑肌瘤（肌瘤）：最常见良性子宫肿瘤。超声边界清楚、低回声。症状：月经过多、盆腔压迫/疼痛、生育问题。变性可致急性疼痛。治疗：药物或手术。",
    explanationEs: "Leiomiomas uterinos: tumor benigno mas comun. Hipocoicos en ecografia.",
    difficulty: 'Medium'
  },
  {
    id: 975, step: 'step2', subject: 'Obstetrics & Gynecology',
    question: "A 25-year-old G1P0 at 39 weeks in active labor. Cervical exam is 6 cm dilated, 100% effaced, 0 station. Fetal heart tracing shows late decelerations with each contraction. What is the most likely cause?",
    options: ["Cord compression", "Head compression", "Uteroplacental insufficiency", "Maternal fever", "Fetal sleep cycle"],
    correctAnswer: 2,
    explanationEn: "Late decelerations: gradual decrease in FHR starting after contraction peak, returning to baseline after contraction ends. Caused by uteroplacental insufficiency (reduced oxygen delivery to fetus). Management: maternal repositioning, O2, IV fluids, reduce contractions. If persistent, expedite delivery.",
    explanationZh: "晚期减速：宫缩高峰后FHR逐渐下降，宫缩结束后恢复正常。由子宫胎盘功能不全（胎儿氧供减少）导致。处理：母体体位、吸氧、IV液体、减少宫缩。持续存在则加速分娩。",
    explanationEs: "Desaceleraciones tardias: insuficiencia uteroplacentaria. Reposicion materna, O2.",
    difficulty: 'Medium'
  },
  {
    id: 976, step: 'step2', subject: 'Psychiatry',
    question: "A 22-year-old male presents with 2 weeks of elevated mood, decreased need for sleep (3 hours/night feels rested), racing thoughts, pressured speech, and impulsive spending of $10,000. He has no prior psychiatric history. What is the diagnosis?",
    options: ["Bipolar I disorder, manic episode", "Bipolar II disorder, hypomanic episode", "Schizoaffective disorder", "ADHD", "Substance-induced mood disorder"],
    correctAnswer: 0,
    explanationEn: "Bipolar I manic episode: >=7 days (or any duration if hospitalized) of elevated/irritable mood + >=3 of: grandiosity, decreased need for sleep, pressured speech, flight of ideas, distractibility, increased goal-directed activity, risky behavior. Causes marked functional impairment (spending $10,000).",
    explanationZh: "双相I型躁狂发作：>=7天情绪高涨/易激惹 + >=3症状：夸大、睡眠需求减少、言语急促、思维奔逸、注意力分散、目标导向活动增加、冒险行为。导致显著功能损害。",
    explanationEs: "Trastorno bipolar I, episodio maniaco: >=7 dias, >=3 criterios.",
    difficulty: 'Medium'
  },
  {
    id: 977, step: 'step2', subject: 'Psychiatry',
    question: "A 35-year-old female presents with a 6-month history of low mood, anhedonia, weight gain, hypersomnia, and leaden paralysis. She reports that positive events can temporarily lift her mood. Which subtype of depression does this describe?",
    options: ["Melancholic depression", "Atypical depression", "Catatonic depression", "Psychotic depression", "Postpartum depression"],
    correctAnswer: 1,
    explanationEn: "Atypical depression: mood reactivity (mood brightens with positive events), hyperphagia/weight gain, hypersomnia, leaden paralysis (heavy feeling in limbs), rejection sensitivity. Responds better to MAOIs than tricyclics. Contrast with melancholic: anhedonia, worse in morning, early awakening, weight loss.",
    explanationZh: "非典型抑郁：情绪反应性、食欲亢进/体重增加、嗜睡、铅样麻痹（肢体沉重感）、拒绝敏感性。MAOIs优于三环类。对比忧郁型：快感缺乏、晨重夜轻、早醒、体重减轻。",
    explanationEs: "Depresion atipica: reactividad animica, hiperfagia, hipersomnia, paralisis plomiza.",
    difficulty: 'Medium'
  },
  {
    id: 978, step: 'step2', subject: 'Emergency Medicine',
    question: "A 45-year-old male presents with sudden-onset \"thunderclap\" headache, described as the worst headache of his life, during sexual activity. Non-contrast CT head is normal. Next best step?",
    options: ["MRI brain", "Lumbar puncture", "CT angiography", "Discharge with migraine treatment", "Transcranial Doppler"],
    correctAnswer: 1,
    explanationEn: "Thunderclap headache: subarachnoid hemorrhage until proven otherwise. CT normal in up to 6% within 24 hours. LP is required to detect xanthochromia (RBC breakdown products, takes 6-12 hours to develop). CT angiography can detect aneurysm but LP is the standard next step when CT is negative.",
    explanationZh: "雷击样头痛：SAH排除前不能排除。24小时内CT正常率可达6%。LP检测黄变症（RBC分解产物，需6-12小时）。CTA可检测动脉瘤，但CT阴性时LP为标准下一步。",
    explanationEs: "Cefalea en trueno: HSA hasta demostrar lo contrario. TAC normal → PL.",
    difficulty: 'Medium'
  },
  {
    id: 979, step: 'step2', subject: 'Emergency Medicine',
    question: "A 22-year-old male is brought to the ED after a motorcycle accident. He is unresponsive, pupils are unequal (right 5 mm fixed, left 3 mm reactive), and he has decerebrate posturing. BP is 190/100, HR 50. What is the immediate management priority?",
    options: ["CT head without contrast", "Hyperventilation to PaCO2 30 mmHg", "Mannitol 1 g/kg IV or hypertonic saline", "Neurosurgery consult for craniotomy", "Phenytoin loading dose"],
    correctAnswer: 2,
    explanationEn: "Signs of transtentorial herniation (Cushing triad: HTN, bradycardia, irregular breathing; fixed dilated pupil; decerebrate posturing). Immediate management: elevate head of bed, hyperosmolar therapy (mannitol 1 g/kg or hypertonic saline), brief hyperventilation (PaCO2 30-35). Then CT and neurosurgery.",
    explanationZh: "经天幕疝体征（库欣三联征：高血压、心动过缓、不规则呼吸；固定散大瞳孔；去大脑强直）。紧急处理：抬高床头、高渗治疗、短暂过度通气。然后CT和神经外科。",
    explanationEs: "Herniacion transtentorial: manitol/hipertonica, hiperventilacion breve. Luego TAC.",
    difficulty: 'Medium'
  },
  {
    id: 980, step: 'step2', subject: 'Internal Medicine',
    question: "A 70-year-old female with a history of CHF and HTN presents with acute dyspnea, bilateral crackles, and an S3 gallop. CXR shows pulmonary edema. She is on lisinopril 20 mg daily. BP is 160/95. What is the initial IV medication for this acute decompensated heart failure?",
    options: ["IV furosemide", "IV metoprolol", "IV digoxin", "IV milrinone", "IV dopamine"],
    correctAnswer: 0,
    explanationEn: "ADHF with volume overload: IV loop diuretic (furosemide) is first-line. Vasodilators (nitroglycerin IV) if hypertensive. Non-invasive positive pressure ventilation (CPAP/BiPAP) if respiratory distress. Avoid beta blockers and calcium channel blockers in acute setting.",
    explanationZh: "ADHF伴容量过负荷：IV袢利尿剂（呋塞米）一线。高血压可加血管扩张剂（硝酸甘油IV）。呼吸窘迫可无创正压通气。急性期避免β受体阻滞剂和钙通道阻滞剂。",
    explanationEs: "ICAD aguda con congestion: furosemida IV. Vasodilatadores si HTA.",
    difficulty: 'Medium'
  },
  {
    id: 981, step: 'step2', subject: 'Internal Medicine',
    question: "A 55-year-old female with recently diagnosed T2DM (A1c 9.5%) is asymptomatic. She has no known ASCVD, CKD, or HF. Which first-line medication is recommended by ADA guidelines?",
    options: ["Insulin glargine", "Metformin + comprehensive lifestyle modification", "SGLT2 inhibitor (empagliflozin)", "GLP-1 receptor agonist", "Sulfonylurea"],
    correctAnswer: 1,
    explanationEn: "ADA first-line for T2DM: metformin + lifestyle modification. SGLT2i or GLP-1 RA added if ASCVD, CKD, or HF (regardless of A1c). Insulin if severely uncontrolled (A1c >10% or symptomatic hyperglycemia). Target A1c: <7% for most adults.",
    explanationZh: "ADA T2DM一线：二甲双胍+生活方式。如有ASCVD/CKD/HF加SGLT2i或GLP-1RA。严重未控制（A1c>10%或有症状）加胰岛素。A1c目标：大多数成人<7%。",
    explanationEs: "ADA: metformina + cambios estilo de vida primera linea.",
    difficulty: 'Medium'
  },
  {
    id: 982, step: 'step2', subject: 'Internal Medicine',
    question: "A 65-year-old male with cirrhosis presents with confusion, asterixis, and fetor hepaticus. He is arousable but disoriented. What is the first-line pharmacologic treatment?",
    options: ["Rifaximin", "Lactulose", "Neomycin", "L-ornithine L-aspartate (LOLA)", "Flumazenil"],
    correctAnswer: 1,
    explanationEn: "Hepatic encephalopathy: lactulose (non-absorbable disaccharide) is first-line. Acidifies colon → converts NH3 to NH4+ (non-absorbable), also cathartic effect. Rifaximin is added as second-line for recurrent episodes. Goals: 2-3 soft bowel movements/day.",
    explanationZh: "肝性脑病：乳果糖一线。酸化结肠→NH3转化为NH4+（不可吸收），兼有导泻作用。利福昔明作为二线用于反复发作。目标：每日2-3次软便。",
    explanationEs: "Encefalopatia hepatica: lactulosa primera linea. Acidifica colon.",
    difficulty: 'Medium'
  },
  {
    id: 983, step: 'step2', subject: 'Surgery',
    question: "A patient develops fever, tachycardia, and increased wound pain on post-op day 1 after an emergency appendectomy for perforated appendicitis. The wound appears erythematous with crepitus on palpation. Gram stain shows gram-positive rods. What is the most feared complication?",
    options: ["Necrotizing fasciitis (Clostridium perfringens)", "Superficial wound infection", "Dehiscence", "Seroma", "Hematoma"],
    correctAnswer: 0,
    explanationEn: "Necrotizing fasciitis: surgical emergency. Pain out of proportion, crepitus (gas in tissues), rapidly spreading. Organisms: Type I (polymicrobial), Type II (Group A Strep), Clostridium (gas gangrene). Treatment: emergent surgical debridement + broad-spectrum IV antibiotics.",
    explanationZh: "坏死性筋膜炎：外科急症。疼痛与体征不成比例、捻发音（组织内气体）、迅速扩散。细菌：I型（多种菌）、II型（A组链球菌）、梭菌（气性坏疽）。治疗：紧急清创+广谱IV抗生素。",
    explanationEs: "Fascitis necrotizante: dolor desproporcionado, crepitacion. Desbridamiento urgente.",
    difficulty: 'Medium'
  },
  {
    id: 984, step: 'step2', subject: 'Pediatrics',
    question: "A 6-month-old infant presents with \"cold-like\" symptoms for 2 days, now with wheezing, tachypnea, and nasal flaring. CXR shows hyperinflation with peribronchial cuffing. Nasopharyngeal swab is positive for RSV. Which treatment is indicated for this otherwise healthy infant?",
    options: ["Ribavirin", "Systemic corticosteroids", "Nebulized albuterol", "Supportive care (suctioning, hydration, oxygen if needed)", "Palivizumab"],
    correctAnswer: 3,
    explanationEn: "Bronchiolitis (RSV is most common cause) in healthy infants: supportive care only — nasal suctioning, hydration, supplemental oxygen if SpO2 <90%. Bronchodilators and corticosteroids are NOT routinely recommended (AAP guidelines). Palivizumab is for prophylaxis in high-risk infants.",
    explanationZh: "健康婴儿毛细支气管炎（RSV最常见）：仅支持治疗——吸鼻、补液、必要时吸氧。不常规推荐支气管扩张剂和糖皮质激素（AAP指南）。帕利珠单抗用于高危婴儿预防。",
    explanationEs: "Bronquiolitis por VRS: cuidados de soporte solamente. Sin broncodilatadores.",
    difficulty: 'Medium'
  },
  {
    id: 985, step: 'step2', subject: 'Pediatrics',
    question: "A 2-year-old presents with fever for 5 days, bilateral non-purulent conjunctivitis, strawberry tongue, cervical lymphadenopathy, and a polymorphous rash. Which serious complication must be screened for?",
    options: ["Acute glomerulonephritis", "Coronary artery aneurysms", "Retropharyngeal abscess", "Acute rheumatic fever", "Encephalitis"],
    correctAnswer: 1,
    explanationEn: "Kawasaki disease: fever >=5 days + >=4 of: conjunctivitis, oral changes, rash, extremity changes, cervical lymphadenopathy. Treat with IVIG + high-dose aspirin within 10 days to prevent coronary artery aneurysms (risk 25% if untreated, 5% if treated).",
    explanationZh: "川崎病：发热>=5天+>=4项。IVIG+大剂量阿司匹林10天内治疗预防冠状动脉瘤（未治疗25%、治疗5%风险）。",
    explanationEs: "Kawasaki: fiebre >=5 dias + 4 criterios. IGIV + aspirina. Aneurismas coronarios.",
    difficulty: 'Medium'
  },
  {
    id: 986, step: 'step2', subject: 'Obstetrics & Gynecology',
    question: "A 35-year-old G3P2 at 12 weeks presents with vaginal bleeding and an open cervical os on speculum exam. Products of conception are seen at the os. Ultrasound shows no fetal cardiac activity. Diagnosis?",
    options: ["Threatened abortion", "Inevitable abortion", "Incomplete abortion", "Complete abortion", "Missed abortion"],
    correctAnswer: 1,
    explanationEn: "Inevitable abortion: vaginal bleeding + open cervical os but products NOT yet passed. Incomplete: some products passed. Complete: all products passed, os closed. Missed: fetal demise without symptoms, os closed. Threatened: bleeding with closed os.",
    explanationZh: "难免流产：阴道出血+宫口开大但组织未排出。不全流产：部分组织排出。完全流产：全部排出、宫口闭合。稽留流产：胎儿死亡无症状、宫口闭合。先兆流产：出血伴宫口闭。",
    explanationEs: "Aborto inevitable: sangrado + cuello abierto, productos no expulsados.",
    difficulty: 'Medium'
  },
  {
    id: 987, step: 'step2', subject: 'Psychiatry',
    question: "A 45-year-old male with a history of alcohol use disorder presents with confusion, nystagmus, and ataxia 2 days after admission. He has been receiving IV fluids with dextrose. Which vitamin deficiency is most likely?",
    options: ["Vitamin B12", "Thiamine (Vitamin B1)", "Pyridoxine (Vitamin B6)", "Folate (Vitamin B9)", "Niacin (Vitamin B3)"],
    correctAnswer: 1,
    explanationEn: "Wernicke encephalopathy: acute thiamine deficiency. Classic triad: confusion, ataxia, nystagmus/ophthalmoplegia (only ~16% have all 3). High-dose IV thiamine BEFORE glucose (glucose can precipitate/worsen). Untreated can progress to Korsakoff syndrome (irreversible anterograde amnesia, confabulation).",
    explanationZh: "Wernicke脑病：急性硫胺素缺乏。经典三联征：意识模糊、共济失调、眼震/眼肌麻痹。IV大剂量硫胺素优于葡萄糖（葡萄糖可诱发/加重）。未治疗进展为Korsakoff综合征。",
    explanationEs: "Encefalopatia de Wernicke: deficit de tiamina. Confusion, ataxia, nistagmo.",
    difficulty: 'Medium'
  },
  {
    id: 988, step: 'step2', subject: 'Emergency Medicine',
    question: "An 18-year-old male is brought to the ED after a high-speed MVA. He is hypotensive (80/50), tachycardic (130), and has distended neck veins with muffled heart sounds. FAST exam shows pericardial fluid. Diagnosis and immediate management?",
    options: ["Tension pneumothorax — needle decompression", "Cardiac tamponade — pericardiocentesis", "Massive hemothorax — chest tube", "Aortic rupture — emergent thoracotomy", "Neurogenic shock — IV fluids"],
    correctAnswer: 1,
    explanationEn: "Beck triad (hypotension, distended neck veins, muffled heart sounds) = cardiac tamponade. Immediate treatment: pericardiocentesis (subxiphoid approach). Pulsus paradoxus >10 mmHg is also characteristic. FAST exam confirms pericardial fluid.",
    explanationZh: "Beck三联征（低血压、颈静脉怒张、心音遥远）=心脏压塞。紧急处理：心包穿刺（剑突下入路）。奇脉>10mmHg亦为特征。FAST检查确认心包积液。",
    explanationEs: "Taponamiento cardiaco: triada de Beck. Pericardiocentesis urgente.",
    difficulty: 'Medium'
  },
  {
    id: 989, step: 'step2', subject: 'Internal Medicine',
    question: "A 60-year-old male with T2DM and HTN develops new-onset gross hematuria. Urinalysis shows dysmorphic RBCs and RBC casts. Serum creatinine has risen from 1.0 to 1.8 mg/dL over 3 weeks. C3 and C4 levels are low. Anti-nuclear antibody is positive. What is the most likely diagnosis?",
    options: ["Post-streptococcal glomerulonephritis", "IgA nephropathy", "Lupus nephritis", "Granulomatosis with polyangiitis", "Goodpasture syndrome"],
    correctAnswer: 2,
    explanationEn: "Lupus nephritis: dysmorphic RBCs + RBC casts (glomerular source), rising creatinine, low complement (C3/C4 — immune complex consumption), ANA positive. Post-streptococcal GN: low C3 but normal C4, history of pharyngitis/impetigo. IgA nephropathy: normal complement.",
    explanationZh: "狼疮性肾炎：变形RBC+红细胞管型（肾小球来源）、肌酐升高、低补体（C3/C4——免疫复合物消耗）、ANA阳性。链球菌感染后GN：C3低但C4正常、咽炎/脓疱疮史。IgA肾病：补体正常。",
    explanationEs: "Nefritis lupica: hematies dismorficos, cilindros hematicos, C3/C4 bajos.",
    difficulty: 'Medium'
  },
  {
    id: 990, step: 'step2', subject: 'Internal Medicine',
    question: "A 70-year-old female presents with progressive dysphagia to both solids and liquids, regurgitation of undigested food, and weight loss. Barium swallow shows dilated esophagus with a \"bird's beak\" narrowing at the gastroesophageal junction. Manometry shows incomplete LES relaxation and absent peristalsis. Diagnosis?",
    options: ["Achalasia", "Esophageal carcinoma", "Scleroderma esophagus", "Diffuse esophageal spasm", "Esophageal stricture"],
    correctAnswer: 0,
    explanationEn: "Achalasia: degeneration of myenteric (Auerbach) plexus. Incomplete LES relaxation + absent peristalsis on manometry. Barium: \"bird's beak\" at GEJ + dilated esophagus. Treatment: pneumatic dilation, Heller myotomy, or POEM. Increased risk of esophageal SCC.",
    explanationZh: "贲门失弛缓症：肠肌（Auerbach）丛变性。测压：LES不完全松弛+蠕动缺失。钡餐：GEJ\"鸟嘴征\"+食管扩张。治疗：气囊扩张、Heller肌切开术或POEM。食管鳞癌风险增加。",
    explanationEs: "Acalasia: pico de pajaro en esofagograma. Manometria: relajacion incompleta EEI.",
    difficulty: 'Medium'
  },
  {
    id: 991, step: 'step2', subject: 'Surgery',
    question: "A 75-year-old male with ASCVD is found to have a 5.8 cm infrarenal abdominal aortic aneurysm on screening ultrasound. He is asymptomatic. Management?",
    options: ["Observation with annual ultrasound", "Elective surgical repair (open or EVAR)", "Serial ultrasound every 6 months", "Beta blocker therapy only", "Statin therapy only"],
    correctAnswer: 1,
    explanationEn: "AAA repair thresholds: >=5.5 cm in men, >=5.0 cm in women, or rapid growth >1 cm/year. Options: open repair or EVAR (endovascular aneurysm repair). EVAR has lower perioperative mortality but requires lifelong surveillance. Continue medical optimization (statin, antiplatelet).",
    explanationZh: "AAA修复阈值：男性>=5.5cm、女性>=5.0cm或快速增长>1cm/年。选择：开放修复或EVAR（腔内修复）。EVAR围手术期死亡率低但需终身监测。继续药物优化。",
    explanationEs: "AAA >=5.5cm hombres: reparacion electiva (abierta o EVAR).",
    difficulty: 'Medium'
  },
  {
    id: 992, step: 'step2', subject: 'Pediatrics',
    question: "A 4-year-old presents with a limp and refuses to bear weight on the right leg. There is no history of trauma. He is afebrile. Hip ultrasound shows a joint effusion. Labs including WBC, ESR, and CRP are normal. What is the most likely diagnosis?",
    options: ["Septic arthritis", "Transient synovitis", "Legg-Calve-Perthes disease", "Slipped capital femoral epiphysis", "Osteomyelitis"],
    correctAnswer: 1,
    explanationEn: "Transient synovitis: most common cause of acute hip pain in children 3-8 years, often post-viral. Afebrile, normal labs. Differentiate from septic arthritis using Kocher criteria: fever (non-weight bearing, ESR >40, WBC >12,000, fever >38.5). >=4 criteria = septic arthritis until proven otherwise.",
    explanationZh: "暂时性滑膜炎：3-8岁儿童急性髋痛最常见原因，常病毒感染后。无发热、实验室正常。Kocher标准鉴别化脓性关节炎。>=4项=化脓性关节炎可能。",
    explanationEs: "Sinovitis transitoria: dolor de cadera agudo, afebril, laboratorios normales.",
    difficulty: 'Medium'
  },
  {
    id: 993, step: 'step2', subject: 'Emergency Medicine',
    question: "A patient presents after a bee sting with urticaria, angioedema of the lips, and stridor. BP is 80/50. What is the first-line medication — and the route of administration?",
    options: ["IM epinephrine 0.3-0.5 mg (1:1000)", "IV epinephrine 0.1 mg (1:10,000)", "IV diphenhydramine", "IV methylprednisolone", "IM diphenhydramine"],
    correctAnswer: 0,
    explanationEn: "Anaphylaxis with hypotension and stridor: IM epinephrine 0.3-0.5 mg (EpiPen 0.3 mg) in the anterolateral thigh — NO contraindications. IV epinephrine reserved for refractory shock in ICU setting. Adjuncts: H1/H2 blockers, corticosteroids (prevent biphasic reaction, NOT acute treatment).",
    explanationZh: "过敏性休克伴低血压和喘鸣：IM肾上腺素0.3-0.5mg（大腿前外侧）——无禁忌证。IV肾上腺素仅用于ICU难治性休克。辅助：H1/H2拮抗剂、糖皮质激素（预防双相反应，非急性治疗）。",
    explanationEs: "Anafilaxia con hipotension: adrenalina IM 0.3-0.5 mg. Sin contraindicaciones.",
    difficulty: 'Medium'
  },
  {
    id: 994, step: 'step2', subject: 'Obstetrics & Gynecology',
    question: "A 29-year-old female with PCOS presents with infertility. She has oligomenorrhea, hirsutism, and BMI 32 kg/m2. Labs: LH elevated, FSH normal, testosterone mildly elevated. Pelvic ultrasound shows polycystic ovaries. What is the first-line treatment to induce ovulation?",
    options: ["Clomiphene citrate", "Letrozole (aromatase inhibitor)", "Metformin", "Gonadotropins", "Laparoscopic ovarian drilling"],
    correctAnswer: 1,
    explanationEn: "PCOS infertility: Letrozole is now first-line for ovulation induction (superior to clomiphene: higher live birth rate, lower multiple pregnancy). Lifestyle modification (weight loss 5-10%) can restore ovulation. Metformin may help metabolic aspects but less effective alone for ovulation.",
    explanationZh: "PCOS不孕症：来曲唑现为诱导排卵一线（优于氯米芬：活产率更高、多胎率更低）。生活方式改善（减重5-10%）可恢复排卵。二甲双胍对代谢有帮助但单独促排卵效果差。",
    explanationEs: "Infertilidad SOP: letrozol primera linea. Perdida de peso 5-10%.",
    difficulty: 'Medium'
  },
  {
    id: 995, step: 'step2', subject: 'Psychiatry',
    question: "A 50-year-old male with a 30-year history of alcohol abuse presents with tactile hallucinations (feeling bugs crawling on skin), autonomic hyperactivity, and generalized tonic-clonic seizure. He is 48 hours after his last drink. What is the diagnosis?",
    options: ["Alcohol withdrawal (delirium tremens)", "Alcoholic hallucinosis", "Wernicke encephalopathy", "Alcohol-induced psychotic disorder", "Hepatic encephalopathy"],
    correctAnswer: 0,
    explanationEn: "Delirium tremens (DT): peak 48-96 hours after last drink. Triad: altered mental status, autonomic hyperactivity (tachycardia, HTN, diaphoresis), hallucinations (classically tactile — formication). Seizures peak at 24-48h. CIWA-Ar scoring guides treatment. Benzodiazepines are first-line.",
    explanationZh: "震颤谵妄（DT）：末次饮酒后48-96小时达峰。三联征：意识改变、自主神经亢进、幻觉（典型触幻觉——蚁走感）。CIWA-Ar评分指导治疗。苯二氮卓一线。",
    explanationEs: "Delirium tremens: 48-96h post-alcohol. Benzodiazepinas primera linea.",
    difficulty: 'Medium'
  },
  {
    id: 996, step: 'step2', subject: 'Internal Medicine',
    question: "A patient with known HIV (CD4 count 25 cells/mm3, not on ART) presents with progressive dyspnea, dry cough, and diffuse bilateral interstitial infiltrates on CXR. LDH is markedly elevated. Induced sputum with silver stain shows cup-shaped organisms. What is the most likely pathogen?",
    options: ["Mycobacterium tuberculosis", "Pneumocystis jirovecii", "Cytomegalovirus", "Cryptococcus neoformans", "Histoplasma capsulatum"],
    correctAnswer: 1,
    explanationEn: "Pneumocystis jirovecii pneumonia (PJP/PCP): CD4 <200 (especially <50), diffuse interstitial infiltrates, elevated LDH. Diagnosis: silver stain of induced sputum or BAL showing cysts. Treatment: TMP-SMX (first-line). Prophylaxis: TMP-SMX when CD4 <200.",
    explanationZh: "肺孢子菌肺炎（PJP）：CD4<200（尤其<50）、弥漫性间质浸润、LDH升高。诊断：诱导痰或BAL银染显示包囊。治疗：TMP-SMX（一线）。预防：CD4<200时TMP-SMX。",
    explanationEs: "Neumonia por P. jirovecii: CD4 <200. TMP-SMX tratamiento y profilaxis.",
    difficulty: 'Medium'
  },
  {
    id: 997, step: 'step2', subject: 'Internal Medicine',
    question: "A 55-year-old smoker presents with cough, hemoptysis, and weight loss. CXR shows a right upper lobe cavitary lesion. Sputum AFB smear is positive. The patient lives alone. What is the next step in management?",
    options: ["Start RIPE therapy (rifampin, isoniazid, pyrazinamide, ethambutol)", "Admit for airborne isolation and start RIPE", "Await culture and sensitivity", "Treat with fluoroquinolone monotherapy", "Bronchoscopy for diagnosis"],
    correctAnswer: 1,
    explanationEn: "Active pulmonary TB with positive AFB smear: admit for airborne isolation (negative pressure room, N95). Start empiric RIPE therapy. Do NOT wait for culture. Report to public health. Directly observed therapy (DOT) recommended. Check baseline LFTs, visual acuity (ethambutol), platelets.",
    explanationZh: "活动性肺结核AFB涂片阳性：收入院空气隔离（负压病房、N95）。开始经验性RIPE治疗。不等培养。报告公共卫生。推荐DOT。检查基线肝功、视力（乙胺丁醇）、血小板。",
    explanationEs: "TB pulmonar activa BAAR+: aislamiento aereo + RIPE empirico.",
    difficulty: 'Medium'
  },
  {
    id: 998, step: 'step2', subject: 'Emergency Medicine',
    question: "An 80-year-old female from a nursing home presents with confusion, fever (39.0C), and hypotension (85/50). She has an indwelling Foley catheter. Urine is cloudy with positive leukocyte esterase and nitrite. Lactate is 4 mmol/L. After IV fluids (30 mL/kg), she remains hypotensive. Next vasopressor?",
    options: ["Dopamine", "Norepinephrine", "Epinephrine", "Vasopressin", "Phenylephrine"],
    correctAnswer: 1,
    explanationEn: "Sepsis/septic shock with persistent hypotension after fluid resuscitation: norepinephrine is first-line vasopressor (Surviving Sepsis Guidelines). Add vasopressin as second agent if refractory. Source control: remove/replace Foley. Broad-spectrum antibiotics within 1 hour.",
    explanationZh: "脓毒症/感染性休克液体复苏后仍低血压：去甲肾上腺素一线升压药。无效加血管加压素二线。感染源控制：更换尿管。1小时内使用广谱抗生素。",
    explanationEs: "Shock septico: norepinefrina primera linea. Vasopresina segunda linea.",
    difficulty: 'Medium'
  },
  {
    id: 999, step: 'step3', subject: 'Primary Care',
    question: "A 50-year-old female presents for a routine health maintenance visit. She is asymptomatic. She had a normal screening colonoscopy at age 50. When should her next colonoscopy be performed according to USPSTF?",
    options: ["1 year", "3 years", "5 years", "10 years", "No further screening needed"],
    correctAnswer: 3,
    explanationEn: "USPSTF: screening colonoscopy every 10 years starting at age 45 (recently lowered from 50) through age 75. After a normal colonoscopy, repeat in 10 years. FIT annually or FIT-DNA every 3 years are alternatives. Age 76-85: individualized decision.",
    explanationZh: "USPSTF：45岁起每10年结肠镜筛查（最近从50岁下调）至75岁。正常结肠镜后10年复查。FIT每年或FIT-DNA每3年为替代选项。76-85岁：个体化决策。",
    explanationEs: "USPSTF: colonoscopia cada 10 anos desde los 45.",
    difficulty: 'Medium'
  },
  {
    id: 1000, step: 'step3', subject: 'Primary Care',
    question: "A 55-year-old male smoker (35 pack-years) asks about lung cancer screening. He quit smoking 5 years ago. According to USPSTF guidelines, what should be recommended?",
    options: ["Annual low-dose CT chest", "Chest X-ray annually", "No screening needed", "Annual sputum cytology", "Annual PET-CT"],
    correctAnswer: 0,
    explanationEn: "USPSTF: annual low-dose CT for lung cancer screening in adults aged 50-80 with >=20 pack-year smoking history who currently smoke or quit within the past 15 years. This patient qualifies (55 years, 35 pack-years, quit 5 years ago).",
    explanationZh: "USPSTF：50-80岁、>=20包年吸烟史、目前吸烟或戒烟15年内，每年低剂量CT肺癌筛查。该患者符合条件。",
    explanationEs: "USPSTF: TAC baja dosis anual pulmon 50-80 anos, >=20 paq-ano.",
    difficulty: 'Medium'
  },
  {
    id: 1001, step: 'step3', subject: 'Primary Care',
    question: "A 65-year-old female with osteoporosis is being treated with alendronate 70 mg weekly. She has been on therapy for 5 years without fractures. BMD is stable. What is the appropriate next step?",
    options: ["Continue alendronate indefinitely", "Consider bisphosphonate holiday after 5 years", "Switch to denosumab", "Switch to teriparatide", "Stop all treatment permanently"],
    correctAnswer: 1,
    explanationEn: "Bisphosphonate holiday: after 5 years of oral (alendronate) or 3 years of IV (zoledronic acid) in low-risk patients, consider a drug holiday. High-risk patients (prior fractures, very low BMD) may continue up to 10 years. Reassess BMD after 1-2 years of holiday.",
    explanationZh: "双膦酸盐假期：低风险患者口服5年或IV 3年后考虑药物假期。高风险患者可继续至10年。假期1-2年后重新评估BMD。",
    explanationEs: "Bifosfonatos: vacaciones despues de 5 anos en riesgo bajo.",
    difficulty: 'Medium'
  },
  {
    id: 1002, step: 'step3', subject: 'Primary Care',
    question: "A 48-year-old female with obesity (BMI 34), HTN, and T2DM presents for routine follow-up. She smokes 1 pack/day and drinks 2 glasses of wine nightly. She asks about the most impactful lifestyle change for her health. What is the single most beneficial intervention?",
    options: ["Smoking cessation", "Weight loss", "Alcohol reduction", "Starting a statin", "Glycemic control"],
    correctAnswer: 0,
    explanationEn: "Smoking cessation is the single most impactful modifiable risk factor for reducing cardiovascular and all-cause mortality. While all listed interventions are important, smoking cessation provides the greatest absolute risk reduction. Brief intervention (5As: Ask, Advise, Assess, Assist, Arrange) is effective.",
    explanationZh: "戒烟是降低心血管和全因死亡率最重要的可改变危险因素。虽然所有列出的干预措施都重要，但戒烟提供最大的绝对风险降低。简短干预（5A：询问、建议、评估、协助、安排随访）有效。",
    explanationEs: "Cese de tabaquismo: intervencion mas impactante. Modelo 5A.",
    difficulty: 'Medium'
  },
  {
    id: 1003, step: 'step3', subject: 'Ethics',
    question: "A 75-year-old patient with advanced dementia has no advance directive. His daughter and son disagree about continuing tube feeding. The daughter wants to continue; the son wants to withdraw. The patient has no appointed health care proxy. According to standard hierarchy for surrogate decision-making, who decides?",
    options: ["The daughter as the eldest child", "Both children must agree or go to ethics committee", "The spouse, then adult children by majority", "The attending physician", "Court-appointed guardian"],
    correctAnswer: 2,
    explanationEn: "Surrogate decision-making hierarchy (most states): 1) Court-appointed guardian, 2) Spouse, 3) Adult children (majority rules), 4) Parents, 5) Adult siblings. If no surrogate available and no advance directive, treating physician may make decisions in consultation with ethics committee.",
    explanationZh: "代理决策层级：1）法院指定监护人，2）配偶，3）成年子女（多数决定），4）父母，5）成年兄弟姐妹。无代理人和预先指示时，主治医生可与伦理委员会协商决策。",
    explanationEs: "Toma de decisiones subrogada: conyuge > hijos adultos (mayoria).",
    difficulty: 'Medium'
  },
  {
    id: 1004, step: 'step3', subject: 'Patient Safety',
    question: "A nurse reports that she almost administered IV potassium chloride to a patient instead of the ordered IV normal saline due to a look-alike label. The error was caught before administration. According to patient safety frameworks, how should this be classified?",
    options: ["Adverse event", "Sentinel event", "Near miss (close call)", "Preventable adverse event", "Negligence"],
    correctAnswer: 2,
    explanationEn: "Near miss (close call): an error that did not reach the patient because it was caught before causing harm. Sentinel event: unexpected death or serious physical/psychological injury. Root cause analysis should be performed to prevent future occurrences. Focus on systems, not individual blame.",
    explanationZh: "近似错误：未到达患者的错误（在造成伤害前被发现）。警讯事件：意外死亡或严重伤害。应进行根本原因分析防止再次发生。关注系统而非个人指责。",
    explanationEs: "Casi error (near miss): error detectado antes de alcanzar al paciente.",
    difficulty: 'Medium'
  },
  {
    id: 1005, step: 'step3', subject: 'Emergency Medicine',
    question: "You are the only physician in a rural ED when two patients arrive simultaneously from a MVA: Patient A is a 20-year-old with a tension pneumothorax who will die without immediate intervention. Patient B is a 40-year-old with an open femur fracture. You can only treat one at a time. Which ethical principle guides treating Patient A first?",
    options: ["Triage (maximize overall survival/best outcomes)", "Justice (treat equally)", "Autonomy (patient choice)", "Beneficence (do good)", "Non-maleficence (do no harm)"],
    correctAnswer: 0,
    explanationEn: "Disaster/mass casualty triage: treat those with the best chance of survival with immediate intervention (Patient A: tension pneumothorax = immediate life-saving intervention; Patient B: open femur fracture = delayed, survivable without immediate care). START triage system categorizes patients by urgency.",
    explanationZh: "灾难/大规模伤亡分诊：优先治疗最有可能通过立即干预存活的（A：张力性气胸=立即救命；B：开放性股骨骨折=延迟处理可存活）。START分诊系统按紧急程度分类。",
    explanationEs: "Triage: priorizar mejor pronostico con intervencion inmediata.",
    difficulty: 'Medium'
  },
  {
    id: 1006, step: 'step3', subject: 'Primary Care',
    question: "A 62-year-old male with BPH presents with urinary frequency, nocturia, and weak stream. He has been on tamsulosin for 2 years with some improvement. PSA is 3.5 ng/mL. He now has incomplete emptying and a post-void residual of 200 mL. Which medication class can be added to improve symptoms?",
    options: ["5-alpha reductase inhibitor (finasteride)", "Anticholinergic (oxybutynin)", "PDE5 inhibitor (tadalafil)", "Beta-3 agonist (mirabegron)", "Switch to terazosin"],
    correctAnswer: 0,
    explanationEn: "BPH with large prostate, high PVR, or PSA >1.5: add 5-alpha reductase inhibitor (finasteride/dutasteride). 5-ARI reduces prostate size by ~25%, lowers PSA by ~50%. Takes 6-12 months for full effect. MTOPS trial: combination (alpha blocker + 5-ARI) superior to either alone.",
    explanationZh: "BPH前列腺大、PVR高或PSA>1.5：加5α-还原酶抑制剂（非那雄胺/度他雄胺）。缩小前列腺~25%、降低PSA~50%。6-12个月起效。MTOPS试验：联合优于单药。",
    explanationEs: "BPH con PVR elevado: agregar inhibidor 5-alfa reductasa.",
    difficulty: 'Medium'
  },
  {
    id: 1007, step: 'step3', subject: 'Primary Care',
    question: "A 30-year-old female on combined OCPs presents with sudden-onset pleuritic chest pain and dyspnea. She has been on the OCP for 5 years and smokes 1 pack/day. Vitals: HR 110, RR 24, SpO2 94%, BP 120/80. What is the next diagnostic test?",
    options: ["D-dimer", "CT pulmonary angiogram (CTPA)", "V/Q scan", "Chest X-ray", "Lower extremity ultrasound"],
    correctAnswer: 0,
    explanationEn: "PE in a low-to-intermediate pre-test probability (Wells criteria): start with D-dimer. If positive → CTPA. High pre-test probability: skip D-dimer, go directly to CTPA. OCPs + smoking increase VTE risk synergistically. CXR is often normal in PE.",
    explanationZh: "PE低中预测概率（Wells标准）：从D-二聚体开始。阳性→CTPA。高预测概率：跳过D-二聚体直接CTPA。OCP+吸烟协同增加VTE风险。PE胸片常正常。",
    explanationEs: "Probabilidad baja-intermedia TEP: dimero-D primero. Positivo → angioTAC.",
    difficulty: 'Medium'
  },
  {
    id: 1008, step: 'step3', subject: 'Emergency Medicine',
    question: "A 70-year-old male presents with acute-onset severe low back pain and a pulsatile abdominal mass on exam. He is hypotensive (80/60) and tachycardic. He has a known AAA. What is the immediate next step in management?",
    options: ["CT angiogram of the abdomen", "Immediate operative intervention (no CT)", "Ultrasound for diagnosis", "IV fluids and serial exams", "MRI angiography"],
    correctAnswer: 1,
    explanationEn: "Ruptured AAA with hypotension: immediate operative intervention WITHOUT preoperative imaging if the diagnosis is certain. Emergency US can be done at bedside to confirm but should not delay OR. Permissive hypotension (SBP 80-90) to avoid disrupting the clot. Mortality of ruptured AAA is >50%.",
    explanationZh: "AAA破裂伴低血压：诊断明确时立即手术干预，无需影像学。允许性低血压（SBP 80-90）避免破坏凝血块。破裂AAA死亡率>50%。",
    explanationEs: "AAA roto con hipotension: cirugia inmediata, sin imagen.",
    difficulty: 'Medium'
  },
  {
    id: 1009, step: 'step3', subject: 'Ethics',
    question: "A competent adult patient with end-stage cancer refuses life-saving treatment. The family demands that you treat the patient against his wishes. What is the ethically correct action?",
    options: ["Treat the patient as the family requests", "Respect the patient's autonomous decision to refuse treatment", "Consult the hospital ethics committee", "Obtain a court order to treat", "Transfer care to another physician"],
    correctAnswer: 1,
    explanationEn: "Autonomy: a competent adult patient has the right to refuse any treatment, even life-saving. This is a fundamental ethical and legal principle. Assess for depression or coercion, but if none, respect the decision. Advance directives and DNR orders must be honored.",
    explanationZh: "自主权：有能力的成年患者有权拒绝任何治疗，即使可挽救生命。这是基本伦理和法律原则。评估抑郁或胁迫，如无则尊重决定。必须遵守预先指示和DNR医嘱。",
    explanationEs: "Autonomia: paciente competente puede rechazar tratamiento.",
    difficulty: 'Medium'
  },
  {
    id: 1010, step: 'step3', subject: 'Patient Safety',
    question: "A hospitalized patient develops a stage 3 pressure ulcer on the sacrum during a 2-week admission for pneumonia. Which intervention has the strongest evidence for prevention?",
    options: ["Repositioning every 2 hours and pressure-reducing support surface", "Topical antibiotic ointment", "Frequent dressing changes", "High-protein diet alone", "Massaging bony prominences"],
    correctAnswer: 0,
    explanationEn: "Pressure ulcer prevention: repositioning every 2 hours + pressure-reducing mattress/surface are the most evidence-based interventions. Braden scale assesses risk. Avoid massaging bony prominences (increases tissue damage). Nutritional support is adjunctive.",
    explanationZh: "压疮预防：每2小时翻身+减压床垫/表面是最循证的干预措施。Braden量表评估风险。避免按摩骨突（增加组织损伤）。营养支持为辅。",
    explanationEs: "Prevencion ulceras por presion: reposicionamiento c/2h + superficie reductora presion.",
    difficulty: 'Medium'
  },
  {
    id: 1011, step: 'step3', subject: 'Primary Care',
    question: "A 40-year-old female with obesity, acanthosis nigricans, and fasting glucose of 118 mg/dL on two occasions. Her A1c is 6.4%. What is the most appropriate diagnosis?",
    options: ["Type 2 diabetes mellitus", "Prediabetes", "Metabolic syndrome", "Insulin resistance only", "Type 1 diabetes"],
    correctAnswer: 1,
    explanationEn: "Prediabetes: IFG (fasting glucose 100-125), IGT (2-hr OGTT 140-199), or A1c 5.7-6.4%. This patient meets 2 criteria (IFG + A1c). Management: intensive lifestyle intervention (DPP study: 7% weight loss + 150 min/week exercise reduced progression to DM by 58%). Consider metformin if BMI >35 or age <60.",
    explanationZh: "糖尿病前期：IFG、IGT或A1c 5.7-6.4%。管理：强化生活方式干预。考虑二甲双胍。",
    explanationEs: "Prediabetes: IFG 100-125, A1c 5.7-6.4%. Intervencion estilo de vida.",
    difficulty: 'Medium'
  },
  {
    id: 1012, step: 'step3', subject: 'Primary Care',
    question: "A 68-year-old male with HTN, T2DM, and CKD stage 3a (eGFR 50) on lisinopril. His potassium is 5.6 mmol/L (previously 4.2). He is asymptomatic. ECG is normal. What is the first step in management?",
    options: ["Discontinue lisinopril", "Start sodium polystyrene sulfonate (Kayexalate)", "Low-potassium diet and repeat labs", "IV calcium gluconate", "Emergent dialysis"],
    correctAnswer: 2,
    explanationEn: "Mild asymptomatic hyperkalemia (5.5-6.0, normal ECG): dietary counseling (low K+ diet) + repeat labs. Discontinue potassium supplements, review medications (NSAIDs, K-sparing diuretics). If persistent, can consider patiromer or sodium zirconium cyclosilicate. Life-threatening (ECG changes): IV calcium gluconate.",
    explanationZh: "轻度无症状高钾血症：低钾饮食+复查。停钾补充剂、审查药物。持续可考虑新型钾结合剂。危及生命（ECG改变）：IV葡萄糖酸钙。",
    explanationEs: "Hiperkalemia leve asintomatica: dieta baja K+ y repetir labs.",
    difficulty: 'Medium'
  },
  {
    id: 1013, step: 'step3', subject: 'Emergency Medicine',
    question: "A patient presents 30 minutes after ingesting an unknown quantity of acetaminophen in a suicide attempt. He is alert and hemodynamically stable. Acetaminophen level returned at 4 hours is 180 mcg/mL. According to the Rumack-Matthew nomogram, treatment is indicated. What is the antidote?",
    options: ["N-acetylcysteine (NAC)", "Flumazenil", "Naloxone", "Fomepizole", "Atropine"],
    correctAnswer: 0,
    explanationEn: "Acetaminophen toxicity: NAC is the antidote, most effective within 8 hours of ingestion. MOA: replenishes glutathione stores. Rumack-Matthew nomogram used for single acute ingestion (plot at 4+ hrs). NAC can be given IV (21-hour protocol) or PO (72-hour protocol).",
    explanationZh: "对乙酰氨基酚中毒：NAC为解毒剂，8小时内最有效。机制：补充谷胱甘肽储备。Rumack-Matthew列线图用于单次急性摄入（4小时后标绘）。可IV或PO给药。",
    explanationEs: "Toxicidad por acetaminofeno: N-acetilcisteina (NAC). Nomograma Rumack-Matthew.",
    difficulty: 'Medium'
  },
  {
    id: 1014, step: 'step3', subject: 'Ethics',
    question: "A 14-year-old female requests contraception without parental knowledge. She is sexually active and does not want her parents to know. In most US states, what is the appropriate course of action?",
    options: ["Refuse unless parents consent", "Provide contraception without parental consent", "Notify child protective services", "Require parental consent but not notification", "Refer to another provider"],
    correctAnswer: 1,
    explanationEn: "Minor consent laws: most states allow minors to consent to contraceptive services, STI testing/treatment, and prenatal care without parental involvement. Title X federal program provides confidential family planning services to all, including minors.",
    explanationZh: "未成年人同意法：大多数州允许未成年人无需父母参与即可同意避孕服务、性病检测/治疗和产前护理。Title X联邦计划向所有人（含未成年人）提供保密计划生育服务。",
    explanationEs: "Menores: servicios anticonceptivos confidenciales en mayoria de estados.",
    difficulty: 'Medium'
  },
  {
    id: 1015, step: 'step3', subject: 'Patient Safety',
    question: "A patient is scheduled for a right knee replacement. In the pre-op holding area, the surgeon marks the left knee. The nurse notices the discrepancy but says nothing, assuming the surgeon knows best. The wrong knee is operated on. This is best addressed through which approach?",
    options: ["Individual punishment for the surgeon", "Mandatory retraining for the nurse", "Implementing a universal protocol with \"time-out\" and team empowerment to speak up", "Firing the entire surgical team", "Legal action against the hospital"],
    correctAnswer: 2,
    explanationEn: "Wrong-site surgery is a sentinel event prevented by implementing the Universal Protocol: pre-procedure verification, site marking by the person performing the procedure, and \"time-out\" immediately before incision. ALL team members must feel empowered to speak up (crew resource management).",
    explanationZh: "错误部位手术是警讯事件，通过实施通用协议预防：术前验证、术者标记部位、切皮前\"暂停\"确认。所有团队成员必须有权提出异议（机组资源管理）。",
    explanationEs: "Cirugia sitio equivocado: protocolo universal (marcar sitio + time-out).",
    difficulty: 'Medium'
  },
  {
    id: 1016, step: 'step3', subject: 'Primary Care',
    question: "A 58-year-old female with a 40-pack-year smoking history and COPD (FEV1 55% predicted, frequent exacerbations) is on LAMA/LABA inhaler. She still has 2 exacerbations per year requiring prednisone bursts. What should be added?",
    options: ["Inhaled corticosteroid (ICS) added to LAMA/LABA", "Theophylline", "Roflumilast (PDE4 inhibitor)", "Chronic azithromycin prophylaxis", "Long-term oxygen therapy"],
    correctAnswer: 0,
    explanationEn: "GOLD guidelines for COPD: if LAMA/LABA still has exacerbations + blood eosinophils >=100, escalate to triple therapy (LAMA/LABA/ICS). Roflumilast: severe FEV1 <50% + chronic bronchitis + frequent exacerbations. Azithromycin: ex-smokers only, risk of hearing loss/QTc prolongation.",
    explanationZh: "GOLD指南：LAMA/LABA仍频繁加重且血嗜酸性粒细胞>=100→升级三联（LAMA/LABA/ICS）。罗氟司特：FEV1<50%+慢性支气管炎+频繁加重。阿奇霉素：仅已戒烟者。",
    explanationEs: "GOLD: triple terapia (LAMA/LABA/ICS) si eosinofilos >=100.",
    difficulty: 'Medium'
  },
  {
    id: 1017, step: 'step3', subject: 'Primary Care',
    question: "A 72-year-old female presents with progressive memory loss over 2 years, getting lost in familiar places, and difficulty naming objects. MMSE score is 22/30. Head CT shows diffuse cortical atrophy with prominent hippocampal atrophy. What is the first-line pharmacological treatment?",
    options: ["Donepezil (acetylcholinesterase inhibitor)", "Memantine", "Donepezil + memantine combination", "Rivastigmine patch", "Vitamin E 2000 IU daily"],
    correctAnswer: 0,
    explanationEn: "Alzheimer disease (mild-moderate MMSE 10-26): acetylcholinesterase inhibitors (donepezil, rivastigmine, galantamine) are first-line. Memantine (NMDA antagonist) for moderate-severe or as add-on. Combination modestly superior. Vitamin E not recommended. Manage behavioral symptoms non-pharmacologically first.",
    explanationZh: "阿尔茨海默病轻度-中度：乙酰胆碱酯酶抑制剂（多奈哌齐等）一线。美金刚用于中重度或联合用药。维生素E不推荐。行为症状首选非药物管理。",
    explanationEs: "Alzheimer leve-moderado: donepezilo (inhibidor acetilcolinesterasa).",
    difficulty: 'Medium'
  },
  {
    id: 1018, step: 'step3', subject: 'Emergency Medicine',
    question: "A 25-year-old male presents with acute scrotal pain for 4 hours, nausea, and vomiting. On exam, the left testicle is tender, swollen, and has a high-riding, horizontal lie. Cremasteric reflex is absent on the left. What is the next step?",
    options: ["Ultrasound with Doppler of the scrotum", "Immediate surgical exploration without imaging", "Urinalysis and culture", "CT scan of the pelvis", "Manual detorsion and discharge"],
    correctAnswer: 1,
    explanationEn: "Testicular torsion: acute scrotal pain, high-riding horizontal testicle, absent cremasteric reflex. Time is testicle: viability drops after 6 hours. If classic presentation: immediate surgical exploration (do NOT delay for ultrasound). If uncertain: rapid Doppler US first. Manual detorsion can be attempted (open book, \"like twisting a bell clapper\").",
    explanationZh: "睾丸扭转：急性阴囊痛、睾丸高位横位、提睾反射消失。时间就是睾丸：6小时后存活率下降。典型表现：立即手术探查（不等超声）。不确定时快速多普勒超声。可尝试手法复位。",
    explanationEs: "Torsion testicular: exploracion quirurgica inmediata. Tiempo = viabilidad.",
    difficulty: 'Medium'
  },
  {
    id: 1019, step: 'step3', subject: 'Primary Care',
    question: "A 62-year-old male with HTN and dyslipidemia on atorvastatin complains of muscle aches and weakness. CK is 850 U/L (<200 normal). What is the most appropriate management?",
    options: ["Continue atorvastatin at same dose and monitor CK", "Reduce atorvastatin dose or switch to alternate statin (pravastatin/fluvastatin)", "Discontinue all statin therapy permanently", "Add coenzyme Q10 supplementation", "Switch to ezetimibe monotherapy"],
    correctAnswer: 1,
    explanationEn: "Statin-associated muscle symptoms (SAMS): if CK <10x ULN and tolerable, try dose reduction or switch to hydrophilic statin (pravastatin, rosuvastatin) or alternate-day dosing. If CK >10x ULN: discontinue, rule out rhabdomyolysis. If truly intolerant: ezetimibe, PCSK9 inhibitor.",
    explanationZh: "他汀相关肌肉症状：CK<10倍正常上限且可耐受→减量或换亲水性他汀。CK>10倍→停药排查横纹肌溶解。确实不耐受：依折麦布或PCSK9抑制剂。",
    explanationEs: "SAMS: CK <10x → reducir dosis o cambiar a estatina hidrofilica.",
    difficulty: 'Medium'
  },
  {
    id: 1020, step: 'step3', subject: 'Ethics',
    question: "A patient with terminal cancer is in severe pain despite escalating doses of opioids. The physician administers a high dose of morphine, knowing it may also suppress respiration and hasten death, with the primary intent to relieve suffering. This is consistent with which ethical principle?",
    options: ["Euthanasia", "Physician-assisted suicide", "Principle of double effect", "Palliative sedation", "Medical futility"],
    correctAnswer: 2,
    explanationEn: "Principle of double effect: an action with both good (pain relief) and potentially harmful (respiratory depression/death) effects is ethically permissible if: 1) action itself is good/neutral, 2) intent is the good effect, 3) good effect not achieved through the bad, 4) proportionality (benefit outweighs risk). Distinct from euthanasia.",
    explanationZh: "双重效应原则：同时有良好（镇痛）和潜在有害（呼吸抑制/死亡）效果的行为在伦理上可允许，如果意图是良好效果、良好效果不通过恶劣效果实现、收益大于风险。与安乐死不同。",
    explanationEs: "Principio del doble efecto: intencion de aliviar dolor, no causar muerte.",
    difficulty: 'Medium'
  },
  {
    id: 1021, step: 'step3', subject: 'Patient Safety',
    question: "During morning rounds, a medical student observes a resident fail to wash hands between examining two patients with C. difficile. The best approach for the student based on patient safety principles is:",
    options: ["Report the resident to the program director anonymously", "Speak up immediately and remind the resident about hand hygiene", "Do nothing — it is not the student's role", "Document the event in the patient's chart", "Report to the state medical board"],
    correctAnswer: 1,
    explanationEn: "Patient safety culture: all team members (including students) have a responsibility to speak up about safety concerns. This is \"crew resource management\" — immediate, respectful verbal intervention. C. difficile requires soap and water (not alcohol-based hand rub). Anonymous reporting is less effective for immediate action.",
    explanationZh: "患者安全文化：所有团队成员（包括学生）有责任对安全问题发声。这是\"机组资源管理\"——立即、尊重的口头干预。艰难梭菌需肥皂和水（非酒精洗手液）。匿名报告即时效果差。",
    explanationEs: "Seguridad: hablar inmediatamente. C. difficile requiere agua y jabon.",
    difficulty: 'Medium'
  },
  {
    id: 1022, step: 'step3', subject: 'Primary Care',
    question: "A 55-year-old male with HIV on ART (CD4 400, undetectable viral load) requests the herpes zoster vaccine. Which vaccine should be administered?",
    options: ["Live zoster vaccine (Zostavax)", "Recombinant zoster vaccine (Shingrix) — 2 doses", "No vaccine needed with CD4 >200", "Varicella vaccine", "Acyclovir prophylaxis instead"],
    correctAnswer: 1,
    explanationEn: "Shingrix (RZV): non-live recombinant vaccine, 2 doses 2-6 months apart. Recommended for all >=50 years and immunocompromised >=19 years. Zostavax (live) is no longer available in the US and was contraindicated in immunocompromised. Shingrix is safe regardless of CD4 count.",
    explanationZh: "Shingrix（RZV）：非活重组疫苗，2剂间隔2-6个月。推荐所有>=50岁及>=19岁免疫功能低下者。Zostavax（活疫苗）美国已停用，免疫功能低下禁用。Shingrix不论CD4均安全。",
    explanationEs: "Shingrix: vacuna recombinante, 2 dosis. Segura en inmunocomprometidos.",
    difficulty: 'Medium'
  },
  {
    id: 1023, step: 'step3', subject: 'Emergency Medicine',
    question: "A 45-year-old female presents with sudden onset of the \"worst headache of her life\" that reached maximum intensity within 60 seconds. She is alert and oriented. Non-contrast CT head is negative. What is the most appropriate next step?",
    options: ["Lumbar puncture (LP) to evaluate for xanthochromia", "CT angiogram of the head", "MRI brain with contrast", "Discharge with neurologist follow-up", "MRA of the head and neck"],
    correctAnswer: 0,
    explanationEn: "Subarachnoid hemorrhage (SAH) with negative CT: LP is the next step. Xanthochromia takes 6-12 hours after bleed onset; if LP <12 hours and negative, consider CTA/MRA to rule out aneurysm. If >2 weeks, MRI may be more sensitive than LP. Revised SAH rule: Ottawa SAH Rule.",
    explanationZh: "SAH CT阴性：LP为下一步。黄变症需出血后6-12小时出现。LP<12小时且阴性可考虑CTA/MRA排除动脉瘤。>2周MRI可能更敏感。",
    explanationEs: "HSA con TAC negativa: PL para xantocromia.",
    difficulty: 'Medium'
  },
  {
    id: 1024, step: 'step3', subject: 'Primary Care',
    question: "A 49-year-old female presents for her annual well-woman exam. She has no breast symptoms and no family history of breast cancer. According to USPSTF guidelines, when should routine screening mammography begin?",
    options: ["Age 40", "Age 45", "Age 50", "Age 55", "Age 35"],
    correctAnswer: 0,
    explanationEn: "USPSTF 2024: biennial screening mammography for women aged 40-74 years (grade B). Previously started at age 50 (2009) then 40 (2023 draft). The update reflects evidence of mortality benefit and higher breast cancer rates in younger women, especially Black women.",
    explanationZh: "USPSTF 2024：40-74岁女性每两年筛查乳腺X线（B级推荐）。此更新反映了年轻女性（尤其黑人女性）死亡率获益和乳腺癌发病率升高的证据。",
    explanationEs: "USPSTF: mamografia cada 2 anos desde los 40.",
    difficulty: 'Medium'
  },
  {
    id: 1025, step: 'step3', subject: 'Patient Safety',
    question: "In a root cause analysis (RCA) following a serious medication error, which of the following is the most productive approach to prevent future errors?",
    options: ["Identify the individual who made the error and provide remediation", "Analyze system-level factors that contributed to the error and implement safeguards", "Require all staff to complete mandatory retraining", "Increase documentation requirements", "Implement zero-tolerance policy for errors"],
    correctAnswer: 1,
    explanationEn: "RCA: focuses on systems and processes, NOT individual blame. Identifies underlying system failures (latent errors) that allowed the active error to reach the patient. \"Swiss cheese model\": multiple layers of defense with holes aligning. Solutions: forcing functions, standardization, checklists.",
    explanationZh: "根本原因分析：关注系统和流程而非个人责备。识别潜在的系统故障。\"瑞士奶酪模型\"：多层防御孔洞对齐。解决方案：强制功能、标准化、检查清单。",
    explanationEs: "RCA: enfocada en sistemas, no culpa individual. Modelo queso suizo.",
    difficulty: 'Medium'
  },
  {
    id: 1026, step: 'step3', subject: 'Ethics',
    question: "A Jehovah's Witness patient with Hb 5.5 g/dL after a GI bleed refuses blood transfusion. She is fully alert and has clearly stated her wishes. Her husband pleads with you to transfuse her against her will. What should you do?",
    options: ["Transfuse per the husband's request to save her life", "Respect her refusal and provide alternative treatments (iron, erythropoietin)", "Obtain emergency court order to transfuse", "Consult psychiatry for capacity evaluation", "Transfer to another facility"],
    correctAnswer: 1,
    explanationEn: "Competent adults have absolute right to refuse treatment, even life-saving, based on religious or personal beliefs. Alternative management: IV iron, erythropoietin, minimize phlebotomy, consider hyperbaric oxygen, prohemostatic agents. Document the informed refusal thoroughly.",
    explanationZh: "有能力的成人有绝对权利基于宗教或个人信仰拒绝治疗。替代管理：IV铁剂、促红细胞生成素、减少抽血、考虑高压氧、止血药物。充分记录知情拒绝。",
    explanationEs: "Testigo Jehova: respetar rechazo. Alternativas: hierro IV, eritropoyetina.",
    difficulty: 'Medium'
  },
  {
    id: 1027, step: 'step3', subject: 'Primary Care',
    question: "A 50-year-old male with recently diagnosed T2DM (A1c 8.5%) also has ASCVD (previous MI 2 years ago). He is already on metformin. Which additional medication class has proven cardiovascular mortality benefit?",
    options: ["Sulfonylurea", "SGLT2 inhibitor (empagliflozin or dapagliflozin)", "DPP-4 inhibitor", "Thiazolidinedione", "Meglitinide"],
    correctAnswer: 1,
    explanationEn: "ADA/EASD: T2DM + ASCVD → SGLT2i (empagliflozin, dapagliflozin) or GLP-1 RA (liraglutide, semaglutide, dulaglutide) with proven CV benefit. EMPA-REG: empagliflozin reduced CV death 38%. LEADER: liraglutide reduced CV death 22%. DPP-4i are CV-neutral.",
    explanationZh: "ADA/EASD：T2DM+ASCVD→SGLT2i或GLP-1RA有心血管获益证据。EMPA-REG：恩格列净降低CV死亡38%。LEADER：利拉鲁肽降低CV死亡22%。DPP-4i为CV中性。",
    explanationEs: "DM2 + EASCVA: iSGLT2 o aGLP-1 con beneficio CV demostrado.",
    difficulty: 'Medium'
  },
  {
    id: 1028, step: 'step3', subject: 'Emergency Medicine',
    question: "A patient presents with acute opioid overdose: unresponsive, pinpoint pupils, respiratory rate 4/min. The nurse is preparing naloxone. What is the appropriate initial dose and route?",
    options: ["Naloxone 0.04 mg IV", "Naloxone 0.4-2 mg IV/IM/IN", "Naloxone 10 mg IV", "Naloxone 0.4 mg PO", "Flumazenil 0.2 mg IV"],
    correctAnswer: 1,
    explanationEn: "Opioid overdose: naloxone 0.4-2 mg IV/IM/IN (intranasal) every 2-3 minutes. Goal: restore adequate respirations (NOT full consciousness, which can precipitate acute withdrawal). Half-life of naloxone (30-90 min) is shorter than most opioids — observe for re-sedation. May need continuous infusion.",
    explanationZh: "阿片类药物过量：纳洛酮0.4-2mg IV/IM/IN，每2-3分钟。目标：恢复足够呼吸（非完全清醒，可诱发急性戒断）。纳洛酮半衰期短于大多数阿片类——观察再镇静。可能需持续输注。",
    explanationEs: "Sobredosis opioides: naloxona 0.4-2 mg IV/IM/IN. Restaurar respiracion.",
    difficulty: 'Medium'
  }]

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
