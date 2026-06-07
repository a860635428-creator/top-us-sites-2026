"""Remaining 120 USMLE questions: Step2 IDs 1209-1268 (60 more) + Step3 IDs 1269-1328 (60)."""
import sys
sys.path.insert(0, '.')
from gen_200_new import qq, questions

# === STEP 2 continued: IDs 1209-1268 (60 more questions) ===

# ID (5)
questions.append(qq(1209, 'step2', 'Internal Medicine',
    'A 50-year-old with HIV (CD4 180) presents with progressive dyspnea, dry cough, and hypoxia. CXR shows bilateral interstitial infiltrates. Induced sputum silver stain is positive. What is the most likely diagnosis?',
    ['Pneumocystis jirovecii pneumonia (PCP)', 'Tuberculosis', 'CMV pneumonitis', 'Bacterial pneumonia', 'Kaposi sarcoma'],
    0,
    'PCP: caused by Pneumocystis jirovecii (fungus). CD4 <200 is risk. CXR: bilateral interstitial/reticulonodular infiltrates (may be normal early). Diagnosis: induced sputum or BAL with methenamine silver or immunofluorescence. Treatment: TMP-SMX (also used for prophylaxis when CD4 <200). If PaO2 <70 or A-a gradient >35, add prednisone.',
    'PCP：耶氏肺孢子菌（真菌）。CD4<200风险。CXR：双侧间质浸润。诊断：诱导痰或BAL银染。治疗：TMP-SMX（CD4<200时也用于预防）。PaO2<70时加泼尼松。',
    'PCP: Pneumocystis jirovecii, CD4 <200, TMP-SMX.',
    'Medium'
))

questions.append(qq(1210, 'step2', 'Internal Medicine',
    'A patient develops fever, hypotension, and a diffuse erythematous rash with desquamation 3 days after starting antibiotics for a wound infection. Blood cultures are negative. What is the most likely diagnosis?',
    ['Toxic shock syndrome (TSS)', 'Stevens-Johnson syndrome', 'Scarlet fever', 'Kawasaki disease', 'DRESS syndrome'],
    0,
    'TSS: caused by TSST-1 (superantigen) from S. aureus or Strep pyogenes. Features: fever, hypotension, diffuse macular erythematous rash (sunburn-like) with desquamation (palms/soles), multi-organ involvement. TSST-1 is a superantigen → massive T-cell activation → cytokine storm. Blood cultures often negative. Treatment: supportive care, antibiotics, IVIG.',
    'TSS：TSST-1超抗原引起。特征：发热、低血压、弥漫性红斑疹伴脱屑（掌跖）、多器官受累。TSST-1超抗原→大量T细胞活化→细胞因子风暴。血培养常阴性。',
    'SST: TSST-1 (superantigeno), fiebre, hipotension, rash descamativo.',
    'Medium'
))

questions.append(qq(1211, 'step2', 'Internal Medicine',
    'A 40-year-old IV drug user presents with fever, new heart murmur, and Janeway lesions. Blood cultures grow gram-positive cocci in clusters. Which valve is most commonly affected?',
    ['Tricuspid valve', 'Mitral valve', 'Aortic valve', 'Pulmonary valve', 'Prosthetic valve'],
    0,
    'Infective endocarditis in IVDU: tricuspid valve most common (right-sided). Organisms: S. aureus (most common overall in IE), then Strep viridans. Triad: fever + murmur + embolic phenomena (Janeway lesions, splinter hemorrhages, Osler nodes, Roth spots). Right-sided IE: septic pulmonary emboli.',
    'IVDU感染性心内膜炎：三尖瓣最常见（右心）。病原体：金葡菌最多。三联征：发热+杂音+栓塞现象（Janeway损害、裂片出血、Osler结节、Roth斑）。',
    'Endocarditis en UDVP: valvula tricuspide, S. aureus.',
    'Medium'
))

questions.append(qq(1212, 'step2', 'Surgery',
    'A patient presents with acute onset of severe epigastric pain radiating to the back, nausea, vomiting. Amylase and lipase are markedly elevated. What is the most common cause?',
    ['Gallstones and alcohol (combined ~80%)', 'Hypertriglyceridemia', 'Medications', 'ERCP complication', 'Autoimmune'],
    0,
    'Acute pancreatitis: top causes — gallstones (40%), alcohol (30%), idiopathic, hypertriglyceridemia (>1000), post-ERCP, medications, trauma. Diagnosis: 2 of 3 — characteristic pain, lipase/amylase >3x ULN, imaging. Ranson criteria, BISAP for severity. Management: aggressive IV fluids, NPO, pain control.',
    '急性胰腺炎：最常见原因——胆结石（40%）、酒精（30%）。诊断：3项中2项——特征性疼痛、脂肪酶/淀粉酶>3倍正常上限、影像。管理：积极补液、禁食、止痛。',
    'Pancreatitis aguda: calculos biliares (40%) y alcohol (30%).',
    'Medium'
))

questions.append(qq(1213, 'step2', 'Surgery',
    'A 70-year-old presents with abdominal distension, obstipation, and crampy abdominal pain. CT shows dilated colon with a transition point at the sigmoid colon. What is the most likely cause?',
    ['Colorectal cancer causing obstruction', 'Sigmoid volvulus', 'Diverticulitis', 'Fecal impaction', 'Intussusception'],
    0,
    'Large bowel obstruction in elderly: most commonly colorectal cancer. Sigmoid volvulus: coffee-bean sign, older/nursing home patients. Small bowel obstruction: adhesions (#1), hernias, Crohn. CT with transition point is key finding.',
    '老年人大肠梗阻：最常见结直肠癌。乙状结肠扭转：咖啡豆征。小肠梗阻：粘连（最常见）、疝、Crohn病。CT过渡点是关键发现。',
    'Obstruccion de colon en ancianos: cancer colorrectal.',
    'Medium'
))

questions.append(qq(1214, 'step2', 'Surgery',
    'A patient with acute appendicitis undergoes appendectomy. Pathology shows a 1.5 cm carcinoid tumor at the tip of the appendix without invasion. What is the appropriate next step?',
    ['Appendectomy alone is curative (no further treatment)', 'Right hemicolectomy', 'Chemotherapy', 'Octreotide therapy', 'Radiation therapy'],
    0,
    'Appendiceal carcinoid: most common tumor of appendix. If <2 cm and at tip without mesoappendiceal invasion → appendectomy alone curative. If >2 cm, at base, or invasion → right hemicolectomy. Carcinoid syndrome (flushing, diarrhea, wheezing, right-sided heart disease): only with liver metastases.',
    '阑尾类癌：阑尾最常见肿瘤。若<2cm、位于尖端、无系膜侵犯→单纯阑尾切除术即可。若>2cm、位于基底部或有侵犯→右半结肠切除。类癌综合征：仅肝转移时。',
    'Carcinoide apendicular <2 cm → apendicectomia curativa.',
    'Medium'
))

questions.append(qq(1215, 'step2', 'Surgery',
    'A trauma patient with a stab wound to the left chest has decreased breath sounds on the left, tracheal deviation to the right, and hypotension. What is the immediate management?',
    ['Needle decompression (2nd intercostal space, midclavicular line)', 'Chest X-ray', 'CT scan', 'Intubation', 'Pericardiocentesis'],
    0,
    'Tension pneumothorax: tracheal deviation AWAY from affected side, distended neck veins, hypotension, absent breath sounds. Immediate: needle decompression at 2nd ICS midclavicular line → followed by chest tube (5th ICS anterior axillary line). CXR is diagnostic but don\'t delay treatment.',
    '张力性气胸：气管向健侧偏斜、颈静脉怒张、低血压、呼吸音消失。立即：针刺减压（第2肋间锁骨中线）→随后胸腔闭式引流（第5肋间腋前线）。',
    'Neumotorax a tension: descompresion con aguja inmediata.',
    'Medium'
))

questions.append(qq(1216, 'step2', 'Pediatrics',
    'A 2-year-old presents with high fever for 5 days, bilateral conjunctival injection, strawberry tongue, cervical lymphadenopathy, and a polymorphous rash. What is the diagnosis?',
    ['Kawasaki disease', 'Scarlet fever', 'Measles', 'Stevens-Johnson syndrome', 'Rocky Mountain spotted fever'],
    0,
    'Kawasaki disease: acute vasculitis of medium-sized arteries. Diagnostic criteria: fever >5 days + 4 of 5 (conjunctivitis, oral changes, rash, extremity changes, cervical LAD). Treatment: IVIG + high-dose aspirin. Complication: coronary artery aneurysms (leading cause of acquired heart disease in children).',
    '川崎病：中等动脉急性血管炎。诊断标准：发热>5天+5项中4项（结膜炎、口腔改变、皮疹、肢端改变、颈淋巴结肿大）。治疗：IVIG+大剂量阿司匹林。',
    'Kawasaki: fiebre >5 dias + 4/5 criterios. IVIG + aspirina.',
    'Medium'
))

questions.append(qq(1217, 'step2', 'Pediatrics',
    'A 3-month-old presents with episodes of cyanosis, especially when crying. CXR shows a boot-shaped heart. Echocardiogram reveals overriding aorta, VSD, RV outflow obstruction, and RVH. What is the diagnosis?',
    ['Tetralogy of Fallot', 'Transposition of great arteries', 'Truncus arteriosus', 'Tricuspid atresia', 'Total anomalous pulmonary venous return'],
    0,
    'Tetralogy of Fallot: PROV — Pulmonary stenosis (RVOT obstruction), RVH, Overriding aorta, VSD. Boot-shaped heart (coeur en sabot). Tet spells: cyanosis with crying/agitation, squatting (increases SVR → decreases R→L shunt). CXR: decreased pulmonary vascular markings.',
    '法洛四联症：肺动脉狭窄、RVH、主动脉骑跨、VSD。靴形心。缺氧发作：哭闹时发绀、蹲踞（增加SVR→减少右向左分流）。胸片：肺血管纹理减少。',
    'Tetralogia de Fallot: PROV, corazon en bota, crisis de cianosis.',
    'Medium'
))

questions.append(qq(1218, 'step2', 'Pediatrics',
    'A 6-month-old has failure to thrive, steatorrhea, and recurrent pulmonary infections. Sweat chloride test is elevated (75 mmol/L). What is the genetic defect?',
    ['CFTR gene mutation (delta F508 most common)', 'Alpha-1 antitrypsin deficiency', 'Surfactant protein B deficiency', 'Primary ciliary dyskinesia', 'IgA deficiency'],
    0,
    'Cystic fibrosis: AR, CFTR gene mutation chr 7 → defective chloride channel → thick secretions. Sweat chloride >60 mmol/L diagnostic. Pancreatic insufficiency (steatorrhea), recurrent pneumonia (Pseudomonas, Staph aureus), meconium ileus (newborn), male infertility (CBAVD). Treatment: pancreatic enzymes, fat-soluble vitamins, airway clearance, CFTR modulators.',
    '囊性纤维化：AR，CFTR基因突变→氯通道缺陷→黏稠分泌物。汗氯>60诊断。胰腺功能不全、反复肺炎、胎粪性肠梗阻、男性不育。治疗：胰酶、脂溶性维生素、气道清除。',
    'Fibrosis quistica: mutacion CFTR (delta F508), cloro en sudor >60.',
    'Medium'
))

questions.append(qq(1219, 'step2', 'Pediatrics',
    'A newborn is screened and found to have elevated TSH and low T4. What is the most likely cause of congenital hypothyroidism?',
    ['Thyroid dysgenesis (agenesis, hypoplasia, ectopic)', 'Iodine deficiency', 'Maternal antithyroid antibodies', 'TSH receptor mutation', 'Defect in thyroglobulin synthesis'],
    0,
    'Congenital hypothyroidism: most commonly thyroid dysgenesis (85%) — agenesis, hypoplasia, ectopic thyroid. Newborn screening: elevated TSH ± low T4. Treat immediately with levothyroxine to prevent intellectual disability. Physical findings may be subtle at birth (large posterior fontanelle, prolonged jaundice, constipation).',
    '先天性甲减：最常见甲状腺发育不全（85%）。新生儿筛查：TSH升高±T4降低。立即左甲状腺素治疗预防智力障碍。体征：后囟大、黄疸延长、便秘。',
    'Hipotiroidismo congenito: disgenesia tiroidea. TSH elevado neonatal.',
    'Medium'
))

questions.append(qq(1220, 'step2', 'Pediatrics',
    'A 2-year-old refuses to walk and has irritability. X-ray of the knee shows a periosteal reaction. Labs: Hb 9 g/dL, MCV 70. Which vitamin deficiency is most likely?',
    ['Vitamin C deficiency (scurvy)', 'Vitamin D deficiency (rickets)', 'Vitamin A deficiency', 'Vitamin K deficiency', 'Iron deficiency'],
    0,
    'Scurvy (vitamin C deficiency): defective collagen synthesis → weak vessel walls. Features: bleeding gums, perifollicular hemorrhages, subperiosteal hemorrhage (painful, refusal to walk), corkscrew hairs, poor wound healing. Radiographs: periosteal elevation, "scorbutic rosary," Pelkan spurs at metaphyses. Also microcytic anemia (facilitates iron absorption).',
    '坏血病（维生素C缺乏）：胶原合成缺陷→血管壁脆弱。特征：牙龈出血、毛囊周围出血、骨膜下出血（疼痛、拒绝行走）、螺旋状毛发。X线：骨膜抬高。',
    'Escorbuto: deficit de vitamina C, hemorragia subperiostica.',
    'Medium'
))

# OB/GYN (5)
questions.append(qq(1221, 'step2', 'Obstetrics & Gynecology',
    'A 28-year-old G1P0 at 32 weeks presents with severe headache, blurred vision, BP 170/110, and 3+ proteinuria. Platelets are 90,000, AST 120, LDH elevated. What is the diagnosis?',
    ['Preeclampsia with severe features (HELLP syndrome)', 'Gestational hypertension', 'Chronic hypertension', 'Eclampsia', 'Acute fatty liver of pregnancy'],
    0,
    'HELLP syndrome: Hemolysis, Elevated Liver enzymes, Low Platelets. Severe preeclampsia features: BP >160/110, thrombocytopenia, renal insufficiency, pulmonary edema, cerebral/visual symptoms. Definitive treatment: delivery. Magnesium sulfate for seizure prophylaxis (24h postpartum). Antihypertensives if BP >160/110.',
    'HELLP综合征：溶血、肝酶升高、血小板低。重度子痫前期特征：BP>160/110、血小板减少、肾功不全、肺水肿。最终治疗：分娩。硫酸镁预防惊厥。',
    'Sindrome HELLP: hemolisis, enzimas hepaticas elevadas, plaquetas bajas.',
    'Medium'
))

questions.append(qq(1222, 'step2', 'Obstetrics & Gynecology',
    'A 24-year-old G1P0 at 28 weeks presents with painless bright red vaginal bleeding. Uterus is soft and non-tender. Fetal heart tones are present. What is the most likely diagnosis?',
    ['Placenta previa', 'Placental abruption', 'Vasa previa', 'Uterine rupture', 'Cervical polyp'],
    0,
    'Placenta previa: placenta overlies internal os. Painless vaginal bleeding (third trimester). Risk: prior C-section, multiparity, advanced maternal age. Diagnosis: transabdominal ultrasound (transvaginal if needed). Never perform digital cervical exam (can cause catastrophic hemorrhage). Management: C-section delivery.',
    '前置胎盘：胎盘覆盖宫颈内口。无痛性阴道出血（第三孕期）。危险因素：既往剖宫产、多产、高龄。诊断：腹部超声。禁止指检。管理：剖宫产。',
    'Placenta previa: sangrado vaginal indoloro. Nunca tacto vaginal.',
    'Medium'
))

questions.append(qq(1223, 'step2', 'Obstetrics & Gynecology',
    'A 30-year-old G2P1 at 36 weeks presents with sudden-onset severe abdominal pain and dark vaginal bleeding. Uterus is firm and tender. Fetal heart tracing shows late decelerations. What is the most likely diagnosis?',
    ['Placental abruption', 'Placenta previa', 'Uterine rupture', 'Preterm labor', 'Chorioamnionitis'],
    0,
    'Placental abruption: premature separation of placenta. Features: painful vaginal bleeding (may be concealed), uterine hypertonicity/tenderness, fetal distress. Risk factors: HTN, cocaine, trauma, PPROM, prior abruption. Complications: DIC, fetal demise. Management: urgent delivery (C-section if fetal distress).',
    '胎盘早剥：胎盘过早分离。特征：痛性阴道出血（可能隐血）、子宫张力高/压痛、胎儿窘迫。危险因素：高血压、可卡因、创伤。并发症：DIC、胎死。',
    'Desprendimiento de placenta: dolor, sangrado, hipertonia uterina.',
    'Medium'
))

questions.append(qq(1224, 'step2', 'Obstetrics & Gynecology',
    'A 35-year-old woman presents with hirsutism, irregular menses, obesity, and infertility. Ultrasound shows multiple ovarian cysts ("string of pearls" appearance). Labs show elevated LH:FSH ratio and elevated testosterone. What is the diagnosis?',
    ['Polycystic ovary syndrome (PCOS)', 'Congenital adrenal hyperplasia', 'Ovarian tumor (Sertoli-Leydig)', 'Cushing syndrome', 'Hypothyroidism'],
    0,
    'PCOS: Rotterdam criteria (2 of 3): oligo/anovulation, clinical/biochemical hyperandrogenism, polycystic ovaries on US. Elevated LH, insulin resistance. Increased risk: endometrial hyperplasia/cancer, DM2, metabolic syndrome. Treatment: lifestyle modification, OCPs (regulate menses), metformin, clomiphene/letrozole for fertility.',
    'PCOS：鹿特丹标准（3中2）：排卵障碍、临床/生化高雄激素、多囊卵巢。LH升高、胰岛素抵抗。风险：子宫内膜增生/癌、DM2。治疗：生活方式、OCPs、二甲双胍。',
    'SOP: criterios Rotterdam (2/3), hiperandrogenismo, resistencia insulinica.',
    'Medium'
))

questions.append(qq(1225, 'step2', 'Obstetrics & Gynecology',
    'A 55-year-old postmenopausal woman has a 5 mm endometrial stripe on transvaginal ultrasound performed for postmenopausal bleeding. What is the next step?',
    ['Endometrial biopsy', 'D&C', 'Hysterectomy', 'Repeat ultrasound in 6 months', 'Observation'],
    0,
    'Postmenopausal bleeding evaluation: endometrial stripe ≤4 mm → low risk, can observe. Endometrial stripe >4 mm → endometrial biopsy. Most common cause of PMB: endometrial atrophy. Endometrial cancer risk factors: obesity, unopposed estrogen, tamoxifen, nulliparity, early menarche, late menopause.',
    '绝经后出血评估：内膜厚度≤4mm→低风险可观察。>4mm→内膜活检。最常见原因：内膜萎缩。内膜癌风险因素：肥胖、无对抗雌激素、他莫昔芬。',
    'Sangrado postmenopausico + endometrio >4 mm → biopsia endometrial.',
    'Medium'
))

# Psychiatry (5)
questions.append(qq(1226, 'step2', 'Psychiatry',
    'A 22-year-old college student presents with 2 weeks of decreased need for sleep, grandiosity, pressured speech, distractibility, and excessive involvement in risky activities (spending sprees, hypersexuality). What is the most likely diagnosis?',
    ['Bipolar I disorder, manic episode', 'Bipolar II disorder, hypomanic episode', 'ADHD', 'Borderline personality disorder', 'Substance-induced mood disorder'],
    0,
    'Mania: DSM-5 requires ≥1 week (or any duration if hospitalized) of elevated/irritable mood + ≥3 of DIGFAST (Distractibility, Insomnia/decreased need for sleep, Grandiosity, Flight of ideas/racing thoughts, Activity increase, Speech pressured, Thoughtlessness/risky activities). Functional impairment or psychosis → Bipolar I. Hypomania <1 week, no severe impairment → Bipolar II.',
    '躁狂：DSM-5要求≥1周高涨/易激惹情绪+DIGFAST中≥3项。功能损害或精神病→双相I。轻躁狂<1周，无严重损害→双相II。',
    'Mania: >1 semana, DIGFAST, deterioro funcional → bipolar I.',
    'Medium'
))

questions.append(qq(1227, 'step2', 'Psychiatry',
    'A 35-year-old reports 6 months of depressed mood, anhedonia, weight gain, hypersomnia, and leaden paralysis. She also reports mood reactivity and rejection sensitivity. What is the specifier for this depression?',
    ['Atypical depression', 'Melancholic depression', 'Catatonic depression', 'Psychotic depression', 'Seasonal affective disorder'],
    0,
    'Atypical depression: mood reactivity (mood brightens with positive events) + ≥2 of: weight gain/hyperphagia, hypersomnia, leaden paralysis (heavy feeling in limbs), rejection sensitivity. Melancholic: anhedonia, lack of mood reactivity, early morning awakening, weight loss, guilt. Treatment: MAOIs may be particularly effective for atypical.',
    '非典型抑郁：情绪反应性+≥2项：体重增加/食欲亢进、嗜睡、铅样麻痹、拒绝敏感性。忧郁型：快感缺乏、无情绪反应性、早醒、体重下降、内疚。',
    'Depresion atipica: reactividad del animo + hipersomnia/hiperfagia.',
    'Medium'
))

questions.append(qq(1228, 'step2', 'Psychiatry',
    'A 42-year-old has persistent preoccupation with having a serious illness despite normal medical evaluations and reassurance. This has persisted for 8 months. What is the diagnosis?',
    ['Illness anxiety disorder', 'Somatic symptom disorder', 'Conversion disorder', 'Factitious disorder', 'Malingering'],
    0,
    'Illness anxiety disorder (hypochondriasis): preoccupation with having or acquiring a serious illness, minimal/no somatic symptoms, excessive health-related behaviors or maladaptive avoidance, persists >6 months despite reassurance. Somatic symptom disorder: prominent somatic symptoms + excessive thoughts/feelings/behaviors about them.',
    '疾病焦虑障碍（疑病症）：专注于患有严重疾病，极少/无躯体症状，过度健康相关行为，持续>6个月。躯体症状障碍：突出躯体症状+过度思考/感受/行为。',
    'Trastorno de ansiedad por enfermedad: preocupacion excesiva, sin sintomas.',
    'Medium'
))

questions.append(qq(1229, 'step2', 'Psychiatry',
    'A patient with schizophrenia has been stable on haloperidol for 2 years but now develops involuntary tongue protrusion, lip smacking, and neck twisting. What is this movement disorder and what is the treatment?',
    ['Tardive dyskinesia — Switch to clozapine or use VMAT2 inhibitor (valbenazine)', 'Acute dystonia — Benztropine or diphenhydramine', 'Akathisia — Propranolol or benzodiazepine', 'Parkinsonism — Amantadine', 'Neuroleptic malignant syndrome — Dantrolene'],
    0,
    'Tardive dyskinesia: late-onset, involuntary choreoathetoid movements (mouth, tongue, trunk, limbs) after prolonged D2 antagonist use. Pathophysiology: D2 receptor supersensitivity. Treatment: replace FGA with clozapine/quetiapine, or add VMAT2 inhibitors (valbenazine, deutetrabenazine). Acute dystonia (hours-days): anticholinergics.',
    '迟发性运动障碍：长期D2拮抗剂后迟发性不自主舞蹈手足徐动样运动。病理生理：D2受体超敏。治疗：换用氯氮平/喹硫平，或加用VMAT2抑制剂。',
    'Discinesia tardia: movimientos involuntarios, VMAT2 inhibidores.',
    'Hard'
))

questions.append(qq(1230, 'step2', 'Psychiatry',
    'A patient with PTSD experiences intrusive memories, hypervigilance, and nightmares. Which first-line pharmacotherapy is recommended?',
    ['SSRI (sertraline or paroxetine)', 'Benzodiazepine (clonazepam)', 'Antipsychotic (risperidone)', 'Mood stabilizer (valproate)', 'Beta-blocker (propranolol)'],
    0,
    'PTSD first-line: trauma-focused CBT (prolonged exposure, CPT, EMDR) + SSRIs (sertraline, paroxetine FDA-approved). Prazosin for nightmares (though recent evidence mixed). Benzodiazepines: NOT recommended (may worsen symptoms, risk of dependence). Beta-blockers: only for acute prevention immediately post-trauma.',
    'PTSD一线：聚焦创伤CBT+SSRIs（舍曲林、帕罗西汀）。哌唑嗪用于噩梦。苯二氮卓类：不推荐（可能加重症状、依赖风险）。β阻滞剂：仅急性预防。',
    'TEPT: primera linea = CBT + ISRS (sertralina, paroxetina).',
    'Medium'
))

# Neurology (5)
questions.append(qq(1231, 'step2', 'Neurology',
    'A 65-year-old presents with unilateral throbbing headache, jaw claudication, scalp tenderness, and elevated ESR (95 mm/hr). What is the next immediate step?',
    ['Start high-dose corticosteroids immediately; arrange temporal artery biopsy', 'Temporal artery biopsy first; start steroids after results', 'CT head without contrast', 'Lumbar puncture', 'MRI brain'],
    0,
    'Giant cell arteritis (temporal arteritis): granulomatous vasculitis of medium-large arteries, >50 years, elevated ESR/CRP. Symptoms: headache, jaw claudication, scalp tenderness, visual symptoms (diplopia, amaurosis fugax). Treatment: start steroids immediately (don\'t wait for biopsy) — prevents blindness. Biopsy still diagnostic within 2 weeks. Often associated with polymyalgia rheumatica.',
    '巨细胞动脉炎：中-大动脉肉芽肿性血管炎，>50岁，ESR/CRP升高。症状：头痛、颌跛行、头皮压痛、视觉症状。立即开始激素（不等活检）——预防失明。',
    'Arteritis de celulas gigantes: corticoides inmediatos, biopsia en 2 semanas.',
    'Medium'
))

questions.append(qq(1232, 'step2', 'Neurology',
    'A 30-year-old woman presents with unilateral vision loss with pain on eye movement that improves over several weeks. MRI shows periventricular white matter lesions. What is the most likely diagnosis?',
    ['Multiple sclerosis', 'Neuromyelitis optica (NMO)', 'Acute disseminated encephalomyelitis (ADEM)', 'Optic neuritis (isolated)', 'Sarcoidosis'],
    0,
    'Multiple sclerosis: autoimmune demyelination, more common in young women. CIS (clinically isolated syndrome): first demyelinating event (optic neuritis, transverse myelitis, brainstem syndrome). MRI: Dawson fingers (periventricular lesions perpendicular to ventricles). Diagnosis: dissemination in time and space (McDonald criteria). LP: oligoclonal bands.',
    '多发性硬化：自身免疫脱髓鞘，年轻女性多见。CIS：首次脱髓鞘事件。MRI：Dawson手指征（垂直于脑室的脑室旁病变）。诊断：时间和空间播散。',
    'Esclerosis multiple: neuritis optica, lesiones periventriculares, bandas oligoclonales.',
    'Medium'
))

questions.append(qq(1233, 'step2', 'Neurology',
    'A 70-year-old has progressive resting tremor, rigidity, bradykinesia, and postural instability. Symptoms improve with levodopa/carbidopa. What is the pathologic hallmark?',
    ['Lewy bodies (alpha-synuclein aggregates) in substantia nigra', 'Neurofibrillary tangles (tau protein)', 'Beta-amyloid plaques', 'Huntingtin protein aggregates', 'Prion protein deposition'],
    0,
    'Parkinson disease: loss of dopaminergic neurons in substantia nigra pars compacta. Lewy bodies = intraneuronal alpha-synuclein inclusions. Triad: resting tremor (pill-rolling), rigidity (cogwheel), bradykinesia. Postural instability late. Treatment: carbidopa/levodopa (gold standard), dopamine agonists, MAO-B inhibitors. Lewy body dementia: dementia + parkinsonism + visual hallucinations.',
    '帕金森病：黑质致密部多巴胺能神经元丧失。路易小体。三联征：静止性震颤、强直、运动迟缓。治疗：卡比多巴/左旋多巴（金标准）。',
    'Parkinson: cuerpos de Lewy (alfa-sinucleina), triada clasica.',
    'Medium'
))

questions.append(qq(1234, 'step2', 'Neurology',
    'A patient with atrial fibrillation (not on anticoagulation) develops sudden-onset right-sided weakness and aphasia. CT head is normal. What is the next step?',
    ['IV tPA if within 4.5 hours and no contraindications', 'Aspirin only', 'Mechanical thrombectomy only', 'Start warfarin immediately', 'Observation and supportive care'],
    0,
    'Acute ischemic stroke: CT first to rule out hemorrhage. If within 4.5h and no contraindications → IV tPA (alteplase). If large vessel occlusion (ICA, M1, basilar) → mechanical thrombectomy within 6-24h (perfusion imaging selection). BP: allow permissive hypertension (do not lower unless >220/120 or for tPA). Antiplatelets after 24h if no tPA given.',
    '急性缺血性卒中：CT排除出血。若4.5h内且无禁忌→IV tPA。大血管闭塞→机械取栓6-24h内。血压：允许性高血压。24h后抗血小板。',
    'Ictus isquemico agudo: tPA IV en <4.5h si no contraindicaciones.',
    'Medium'
))

questions.append(qq(1235, 'step2', 'Neurology',
    'A 50-year-old develops progressive muscle weakness starting in the hands with fasciculations, hyperreflexia, and eventual dysphagia and respiratory failure. EMG shows widespread denervation. What is the diagnosis?',
    ['Amyotrophic lateral sclerosis (ALS)', 'Myasthenia gravis', 'Guillain-Barre syndrome', 'Multiple sclerosis', 'Spinal muscular atrophy'],
    0,
    'ALS (Lou Gehrig disease): combined UMN (spasticity, hyperreflexia, Babinski) and LMN (weakness, atrophy, fasciculations) signs. Normal sensation. EMG: widespread acute and chronic denervation. Riluzole (modestly prolongs survival). Death from respiratory failure (median survival 3-5 years).',
    'ALS（Lou Gehrig病）：上运动神经元（痉挛、反射亢进、Babinski征）+下运动神经元（无力、萎缩、肌束颤动）体征。感觉正常。利鲁唑适度延长生存期。',
    'ELA: signos de NMS + NMI, fasciculaciones, EMG con denervacion.',
    'Medium'
))

# Rheumatology (5)
questions.append(qq(1236, 'step2', 'Internal Medicine',
    'A 45-year-old woman presents with symmetric swelling and pain in MCP and PIP joints for 8 weeks, with morning stiffness >1 hour. Labs: RF positive, anti-CCP positive. What is the first-line disease-modifying drug?',
    ['Methotrexate', 'Hydroxychloroquine', 'Sulfasalazine', 'Leflunomide', 'Prednisone alone'],
    0,
    'Rheumatoid arthritis: symmetric, inflammatory polyarthritis involving MCP, PIP, wrists. Labs: RF+, anti-CCP+ (more specific). X-ray: periarticular osteopenia, erosions. First-line DMARD: methotrexate (also check baseline CXR, LFTs, renal function). Add folic acid to reduce toxicity. Biologics (TNF inhibitors) if inadequate response.',
    '类风湿关节炎：对称性炎性多关节炎，累及MCP、PIP、腕关节。实验室：RF+、抗CCP+。一线DMARD：甲氨蝶呤（查基线CXR、肝肾功能）。添加叶酸。',
    'Artritis reumatoide: metotrexato primera linea. Anti-CCP especifico.',
    'Medium'
))

questions.append(qq(1237, 'step2', 'Internal Medicine',
    'A 25-year-old man presents with low back pain that improves with activity and worsens with rest. He has morning stiffness and limited chest expansion. X-ray shows sacroiliitis and "bamboo spine." HLA-B27 is positive. What is the diagnosis?',
    ['Ankylosing spondylitis', 'Psoriatic arthritis', 'Reactive arthritis', 'Diffuse idiopathic skeletal hyperostosis (DISH)', 'Lumbar disc herniation'],
    0,
    'Ankylosing spondylitis: chronic inflammatory arthritis of axial skeleton. Features: inflammatory back pain (improves with exercise, worse with rest), morning stiffness, sacroiliitis (X-ray/MRI), bamboo spine (syndesmophytes), uveitis (anterior), aortic regurgitation. HLA-B27+ in 90%. Treatment: NSAIDs, TNF inhibitors. Physical therapy to maintain posture.',
    '强直性脊柱炎：中轴骨骼慢性炎症性关节炎。特征：炎性背痛（活动改善、休息加重）、骶髂关节炎、竹节样脊柱、葡萄膜炎、主动脉瓣反流。',
    'Espondilitis anquilosante: dolor lumbar inflamatorio, HLA-B27.',
    'Medium'
))

questions.append(qq(1238, 'step2', 'Internal Medicine',
    'A 35-year-old woman has malar rash, oral ulcers, arthritis, and pancytopenia. ANA is positive, anti-dsDNA positive, complement C3/C4 low. Urinalysis shows proteinuria and RBC casts. What is the best treatment for her nephritis?',
    ['Mycophenolate mofetil or cyclophosphamide + corticosteroids', 'Hydroxychloroquine alone', 'NSAIDs', 'Rituximab alone', 'Azathioprine alone'],
    0,
    'Lupus nephritis: Class III/IV (proliferative) → induction with mycophenolate mofetil (preferred) or IV cyclophosphamide + high-dose corticosteroids. Class V (membranous): MMF + prednisone. All SLE patients should be on hydroxychloroquine (reduces flares, thrombosis, mortality). Monitor with urine protein:creatinine ratio.',
    '狼疮肾炎：III/IV型（增殖性）→诱导用霉酚酸酯（首选）或IV环磷酰胺+大剂量激素。所有SLE患者应用羟氯喹（减少复发、血栓、死亡率）。',
    'Nefritis lupica III/IV: micofenolato o ciclofosfamida + corticoides.',
    'Hard'
))

questions.append(qq(1239, 'step2', 'Internal Medicine',
    'A 55-year-old with recurrent acute gout attacks has tophi on examination and uric acid 9.5 mg/dL on allopurinol 100 mg daily. What is the next step in management?',
    ['Increase allopurinol dose (target uric acid <6 mg/dL, <5 if tophi)', 'Switch to febuxostat', 'Add colchicine only', 'Add probenecid', 'Continue current dose'],
    0,
    'Gout with tophi: target uric acid <5 mg/dL (without tophi <6). Allopurinol: start low, titrate up (max 800 mg/day). Start colchicine or NSAID prophylaxis when initiating ULT (prevents flares, continue 3-6 months after target achieved). Febuxostat: alternative but higher CV risk. Pegloticase: refractory gout.',
    '痛风伴痛风石：目标尿酸<5mg/dL（无痛风石<6）。别嘌醇：低起始、逐步加量。开始ULT时同时用秋水仙碱/NSAID预防（持续3-6月）。',
    'Gota tofacea: objetivo acido urico <5, aumentar alopurinol.',
    'Medium'
))

questions.append(qq(1240, 'step2', 'Internal Medicine',
    'A 30-year-old has Raynaud phenomenon, sclerodactyly, dysphagia, and interstitial lung disease. ANA positive with anti-Scl-70 (anti-topoisomerase I) antibodies. What is the diagnosis?',
    ['Systemic sclerosis (scleroderma) — diffuse cutaneous type', 'Systemic sclerosis — limited cutaneous type (CREST)', 'Mixed connective tissue disease', 'Dermatomyositis', 'Sjogren syndrome'],
    0,
    'Diffuse systemic sclerosis: anti-Scl-70 (anti-topoisomerase I), skin involvement proximal to elbows/knees + trunk, early internal organ involvement (ILD, renal crisis). Limited (CREST): anti-centromere, skin limited to distal extremities/face, calcinosis, Raynaud, esophageal dysmotility, sclerodactyly, telangiectasias. Renal crisis: sudden HTN + renal failure, treat with ACEi.',
    '弥漫性系统性硬化症：抗Scl-70、皮肤累及近端+躯干、早期内脏受累（ILD、肾危象）。局限型（CREST）：抗着丝粒、皮肤局限于远端。',
    'Esclerosis sistemica difusa: anti-Scl-70, ILD, crisis renal.',
    'Medium'
))

# Dermatology (5)
questions.append(qq(1241, 'step2', 'Internal Medicine',
    'A young adult presents with silvery-white scaly plaques on extensor surfaces (elbows, knees) and scalp. Nails show pitting and onycholysis. What is the most likely diagnosis?',
    ['Psoriasis vulgaris', 'Atopic dermatitis (eczema)', 'Seborrheic dermatitis', 'Lichen planus', 'Pityriasis rosea'],
    0,
    'Psoriasis: sharply demarcated erythematous plaques with silvery scale, extensor surfaces. Auspitz sign (pinpoint bleeding when scale removed). Nail pitting, onycholysis. Associated with psoriatic arthritis (often asymmetric oligoarthritis, DIP involvement). Triggers: stress, infection (strep), medications, trauma (Koebner phenomenon).',
    '银屑病：边界清楚的红斑块伴银白色鳞屑，伸侧。Auspitz征。甲凹点、甲分离。与银屑病关节炎相关。诱因：压力、感染、药物、创伤（Koebner现象）。',
    'Psoriasis: placas eritematoescamosas, codos/rodillas, unas punteadas.',
    'Medium'
))

questions.append(qq(1242, 'step2', 'Internal Medicine',
    'A patient develops a target (iris) lesion rash on palms and soles with mucosal erosions after starting sulfa antibiotics. What is the most likely diagnosis?',
    ['Erythema multiforme', 'Stevens-Johnson syndrome (SJS)', 'Toxic epidermal necrolysis (TEN)', 'Urticaria', 'Fixed drug eruption'],
    0,
    'Erythema multiforme: target/iris lesions, acral distribution (palms/soles), associated with HSV and drugs (sulfa). Minimal mucosal involvement, self-limited. SJS/TEN: widespread blistering, severe mucosal involvement, skin detachment — SJS <10% BSA, SJS/TEN overlap 10-30%, TEN >30%. SJS/TEN are emergencies (stop drug, supportive care in burn unit).',
    '多形红斑：靶形/虹膜样皮损，肢端分布（掌跖），与HSV和药物相关。黏膜受累轻微、自限性。SJS/TEN：广泛水疱、严重黏膜受累、皮肤剥脱——急症。',
    'Eritema multiforme: lesiones en diana, palmas/plantas, autolimitado.',
    'Medium'
))

questions.append(qq(1243, 'step2', 'Internal Medicine',
    'A patient has recurrent crops of tense blisters on flexural areas. Skin biopsy shows linear IgA deposition along the basement membrane. What is the diagnosis?',
    ['Bullous pemphigoid', 'Pemphigus vulgaris', 'Dermatitis herpetiformis', 'Linear IgA disease', 'Epidermolysis bullosa acquisita'],
    0,
    'Bullous pemphigoid: autoimmune subepidermal blistering (anti-BP180/BP230). Tense bullae on flexural areas, often pruritic. Nikolsky sign negative. Elderly >60. Treatment: topical/systemic corticosteroids, doxycycline/niacinamide. Pemphigus vulgaris: intraepidermal, flaccid bullae, positive Nikolsky, mucosal involvement, anti-desmoglein 1/3.',
    '大疱性类天疱疮：表皮下自身免疫性水疱（抗BP180/230）。紧张性大疱在屈侧、瘙痒。Nikolsky征阴性。老年人。治疗：激素、多西环素/烟酰胺。',
    'Penfigoide ampolloso: ampollas tensas, subepidermico, anti-BP180.',
    'Medium'
))

questions.append(qq(1244, 'step2', 'Internal Medicine',
    'A 20-year-old develops erythematous annular patches with central clearing ("ringworm") on the arm. KOH preparation shows septate hyphae. What is the most likely organism?',
    ['Trichophyton (dermatophyte)', 'Candida albicans', 'Malassezia furfur', 'Sporothrix schenckii', 'Aspergillus'],
    0,
    'Tinea corporis (ringworm): dermatophyte infection (Trichophyton, Microsporum, Epidermophyton). Annular plaque with central clearing, scaly border. KOH: septate hyphae. Treatment: topical antifungals (clotrimazole, terbinafine) for localized; oral terbinafine for extensive or tinea capitis. Wood lamp: Microsporum fluoresces green (not Trichophyton).',
    '体癣（钱癣）：皮肤癣菌感染。环形斑块伴中央消退、鳞屑边缘。KOH：分隔菌丝。治疗：局部抗真菌药；广泛或头癣用口服特比萘芬。',
    'Tina corporis: dermatofito, placa anular, KOH con hifas septadas.',
    'Easy'
))

questions.append(qq(1245, 'step2', 'Internal Medicine',
    'A patient with long-standing diabetes develops a non-healing ulcer on the plantar surface of the foot. The ulcer is painless, surrounded by callus. What is the initial management?',
    ['Off-loading (total contact cast, special footwear) + wound care', 'Systemic antibiotics immediately', 'Surgical debridement under general anesthesia', 'Amputation', 'Hyperbaric oxygen as first-line'],
    0,
    'Diabetic foot ulcer: neuropathic (painless, callused) vs ischemic (painful, poor pulses). Initial management: off-loading (most critical), wound debridement, moist wound care, infection control. Antibiotics only if clinical signs of infection (erythema, purulence, systemic symptoms). Vascular assessment (ABI). Prevention: daily foot inspection, proper footwear, glycemic control.',
    '糖尿病足溃疡：神经性（无痛、胼胝）vs缺血性（疼痛、脉搏弱）。初始管理：减压（最关键）、清创、湿性伤口护理。仅感染时用抗生素。',
    'Ulcera diabetica: descarga de presion, desbridamiento, cuidado humedo.',
    'Medium'
))

# ENT & Ophthalmology (5)
questions.append(qq(1246, 'step2', 'Internal Medicine',
    'A 40-year-old presents with vertigo, hearing loss, tinnitus, and aural fullness in episodes lasting 2-4 hours. What is the most likely diagnosis?',
    ['Meniere disease', 'Benign paroxysmal positional vertigo (BPPV)', 'Vestibular neuritis', 'Acoustic neuroma', 'Labyrinthitis'],
    0,
    'Meniere disease: triad of episodic vertigo (hours), sensorineural hearing loss (low-frequency initially), tinnitus, aural fullness. Due to endolymphatic hydrops. BPPV: brief vertigo (<1 min) with position changes, positive Dix-Hallpike. Vestibular neuritis: acute severe vertigo lasting days, no hearing loss. Acoustic neuroma: gradual unilateral hearing loss + tinnitus.',
    '梅尼埃病：三联征——发作性眩晕（数小时）、感音神经性听力下降（早期低频）、耳鸣、耳胀满感。内淋巴积水。BPPV：体位改变短暂眩晕。',
    'Meniere: vertigo episodico + hipoacusia + tinnitus + plenitud aural.',
    'Medium'
))

questions.append(qq(1247, 'step2', 'Surgery',
    'A 3-year-old presents with fever, sore throat, drooling, muffled voice, and stridor. The child is sitting in tripod position. What is the immediate next step?',
    ['Secure airway (OR for intubation/tracheostomy if needed)', 'Lateral neck X-ray', 'Start IV antibiotics', 'Nebulized racemic epinephrine', 'Oral examination with tongue depressor'],
    0,
    'Epiglottitis: H. influenzae type b (now rare due to vaccination), also Strep pneumo, Strep pyogenes. Medical emergency: fever, sore throat, drooling, stridor, tripod position. DO NOT examine throat or agitate child (may cause complete airway obstruction). Immediate: secure airway in OR, then IV antibiotics. Thumbprint sign on lateral neck X-ray.',
    '会厌炎：流感嗜血杆菌b型（现因疫苗罕见）、肺炎链球菌。急症：发热、咽痛、流涎、喘鸣、三脚架体位。勿检查咽部或激惹儿童。立即：手术室气道管理。',
    'Epiglotitis: emergencia, no examinar, asegurar via aerea en quirofano.',
    'Medium'
))

questions.append(qq(1248, 'step2', 'Internal Medicine',
    'A 65-year-old with diabetes presents with acute onset painful red eye, decreased vision, corneal edema, and mid-dilated fixed pupil. Intraocular pressure is 45 mmHg. What is the diagnosis and initial treatment?',
    ['Acute angle-closure glaucoma — Pilocarpine, acetazolamide, timolol, mannitol', 'Open-angle glaucoma — Prostaglandin analog', 'Anterior uveitis — Topical corticosteroids', 'Corneal abrasion — Antibiotic ointment', 'Conjunctivitis — Artificial tears'],
    0,
    'Acute angle-closure glaucoma: ophthalmologic emergency. Features: painful red eye, mid-dilated fixed pupil, cloudy cornea, shallow anterior chamber, elevated IOP (>30). Asians, hyperopes, elderly at risk. Treatment: pilocarpine (constrict pupil), timolol (decrease aqueous), acetazolamide IV/oral, mannitol IV; then laser iridotomy definitively.',
    '急性闭角型青光眼：眼科急症。特征：疼痛红眼、中度散大固定瞳孔、角膜混浊、前房浅、IOP升高。治疗：匹罗卡品、噻吗洛尔、乙酰唑胺、甘露醇；激光虹膜切开术。',
    'Glaucoma agudo de angulo cerrado: emergencia, pilocarpina + acetazolamida.',
    'Medium'
))

questions.append(qq(1249, 'step2', 'Internal Medicine',
    'An 80-year-old presents with acute, painless loss of vision in one eye described as a "curtain coming down." Fundoscopy shows a pale retina with a cherry-red spot at the macula. What is the diagnosis?',
    ['Central retinal artery occlusion (CRAO)', 'Central retinal vein occlusion (CRVO)', 'Retinal detachment', 'Vitreous hemorrhage', 'Amaurosis fugax'],
    0,
    'CRAO: painless acute vision loss, afferent pupillary defect, pale retina with cherry-red spot at fovea. Emergency — irreversible damage after ~90 minutes. Causes: embolism (carotid, cardiac), giant cell arteritis (check ESR in elderly). Treatment: ocular massage, anterior chamber paracentesis, inhale carbogen (5% CO2) to dilate retinal arteries. Poor prognosis.',
    '视网膜中央动脉阻塞：无痛性急性视力丧失、传入性瞳孔障碍、苍白视网膜伴樱桃红斑。急症——约90分钟后不可逆损伤。治疗：眼球按摩、前房穿刺。',
    'Oclusion arteria central retina: indolora, pupila aferente, mancha rojo cereza.',
    'Medium'
))

questions.append(qq(1250, 'step2', 'Internal Medicine',
    'A patient presents with painful oral ulcers, genital ulcers, uveitis, and pathergy test positive. What is the most likely diagnosis?',
    ['Behcet disease', 'Reactive arthritis (Reiter syndrome)', 'Inflammatory bowel disease', 'Lupus erythematosus', 'Pemphigus vulgaris'],
    0,
    'Behcet disease: recurrent oral aphthous ulcers + ≥2 of: genital ulcers, ocular lesions (uveitis, retinal vasculitis), skin lesions (erythema nodosum, pseudofolliculitis), positive pathergy test. Vasculitis affecting both arteries and veins of all sizes. More common in Silk Road countries. Treatment: colchicine, corticosteroids, immunosuppressants.',
    '白塞病：复发性口腔阿弗他溃疡+≥2项：生殖器溃疡、眼部病变（葡萄膜炎）、皮肤病变、针刺反应阳性。大小动静脉均可累及的血管炎。',
    'Behcet: ulceras orales+genitales, uveitis, patergia positiva.',
    'Medium'
))

# ========== STEP 3: 60 questions (IDs 1251-1310) ==========
# Preventive Medicine, Biostats, Screening, Epidemiology, Patient Safety, Ethics, Systems

# Preventive Medicine & Screening (10)
questions.append(qq(1251, 'step3', 'Primary Care',
    'A 50-year-old woman asks about colorectal cancer screening. She has no family history and is asymptomatic. What is the USPSTF recommended screening method and interval?',
    ['Colonoscopy every 10 years OR FIT/FOBT annually', 'Colonoscopy every 5 years', 'Flexible sigmoidoscopy every 10 years', 'CT colonography every 3 years', 'No screening needed'],
    0,
    'USPSTF: CRC screening age 45-75 (Grade A). Options: colonoscopy q10yr, FIT/FOBT annually, flexible sigmoidoscopy q5yr (+ FIT q3yr), CT colonography q5yr, stool DNA-FIT q3yr. Stop screening at 85. Individualize 76-85. High-risk (FDR <60 with CRC, IBD, genetic syndromes): earlier, more frequent.',
    'USPSTF：CRC筛查45-75岁。选择：结肠镜每10年、FIT/FOBT每年、乙状结肠镜每5年。85岁停止。76-85个体化。高危：更早更频繁。',
    'Tamizaje CRC: colonoscopia cada 10 anos o FIT anual, edad 45-75.',
    'Medium'
))

questions.append(qq(1252, 'step3', 'Primary Care',
    'A 55-year-old with a 30 pack-year smoking history is interested in lung cancer screening. What does USPSTF recommend?',
    ['Annual low-dose CT for ages 50-80 with ≥20 pack-year history who currently smoke or quit within 15 years', 'Chest X-ray annually', 'CT chest every 5 years', 'No screening recommended', 'Sputum cytology every 3 years'],
    0,
    'USPSTF lung cancer screening: annual low-dose CT for ages 50-80, ≥20 pack-year smoking history, current smokers or quit within past 15 years. Stop screening if >15 years since quitting, or develops health problem limiting life expectancy. NLST showed 20% reduction in lung cancer mortality.',
    'USPSTF肺癌筛查：每年低剂量CT，50-80岁，≥20包年吸烟史，当前吸烟或戒烟<15年。若戒烟>15年或有健康问题限制预期寿命则停止。',
    'Tamizaje cancer pulmon: TAC baja dosis anual 50-80, >20 paq-ano.',
    'Medium'
))

questions.append(qq(1253, 'step3', 'Primary Care',
    'A 65-year-old woman with no risk factors asks about osteoporosis screening. What does USPSTF recommend?',
    ['DEXA scan at age 65 for all women (and for younger women with risk factors)', 'DEXA scan at age 50', 'DEXA scan only if fracture occurs', 'Quantitative ultrasound at heel', 'No screening recommended'],
    0,
    'Osteoporosis screening (USPSTF): DEXA scan for all women ≥65, and postmenopausal women <65 with risk factors (low body weight, parental hip fracture, smoking, excessive alcohol, glucocorticoid use). Men: insufficient evidence for routine screening. FRAX tool estimates 10-year fracture risk.',
    '骨质疏松筛查（USPSTF）：DEXA扫描所有≥65岁女性，<65岁绝经后女性有风险因素。男性：证据不足。FRAX工具估计10年骨折风险。',
    'Osteoporosis: DEXA en mujeres ≥65. FRAX para riesgo de fractura.',
    'Medium'
))

questions.append(qq(1254, 'step3', 'Primary Care',
    'A sexually active 24-year-old woman asks about cervical cancer screening. She had a normal Pap smear 2 years ago. What is the current recommendation?',
    ['HPV testing every 5 years, or Pap + HPV co-testing every 5 years, or Pap alone every 3 years starting at age 21', 'Annual Pap smear', 'HPV testing every 3 years regardless of Pap', 'No screening until age 30', 'Colposcopy every 5 years'],
    0,
    'Cervical cancer screening: start at age 21 (regardless of sexual history). Age 21-29: Pap every 3 years (HPV testing not recommended — high rate of transient infection). Age 30-65: HPV testing every 5 years (preferred), or Pap+HPV co-testing every 5 years, or Pap alone every 3 years. Stop at 65 if adequate prior screening. Post-hysterectomy for benign reasons: stop screening.',
    '宫颈癌筛查：21岁开始。21-29岁：Pap每3年。30-65岁：HPV检测每5年（首选）、或Pap+HPV每5年、或Pap每3年。65岁且有充分既往筛查则停止。',
    'Tamizaje cervical: 21-29 Pap c/3a, 30-65 HPV c/5a o co-test.',
    'Medium'
))

questions.append(qq(1255, 'step3', 'Primary Care',
    'A 45-year-old man has BP 138/88 at his annual physical. He has no other medical conditions. BP at last visit 3 months ago was 135/86. What is the next step?',
    ['Lifestyle modifications (DASH diet, exercise, sodium reduction)', 'Start ACE inhibitor', 'Start thiazide diuretic', '24-hour ambulatory BP monitoring', 'No intervention needed'],
    0,
    'Stage 1 HTN: 130-139/80-89. For low ASCVD risk (<10% 10-year risk): lifestyle modifications only for 3-6 months, then reassess. Pharmacologic therapy if ASCVD risk ≥10% or if BP remains elevated after lifestyle trial. DASH diet: fruits, vegetables, low-fat dairy, reduced sodium, reduced saturated fat.',
    '1期高血压：130-139/80-89。低ASCVD风险：仅生活方式干预3-6个月，然后重新评估。若ASCVD风险≥10%或生活方式干预后仍高则药物治疗。',
    'HTA etapa 1: modificaciones estilo de vida por 3-6 meses primero.',
    'Medium'
))

questions.append(qq(1256, 'step3', 'Primary Care',
    'A 60-year-old with T2DM, HTN, and hyperlipidemia asks about aspirin for primary prevention. What is the USPSTF recommendation?',
    ['Low-dose aspirin (81 mg) may be considered for ages 40-59 with 10-year ASCVD risk ≥10% (shared decision-making); not recommended ≥60', 'Aspirin 325 mg daily for all diabetics', 'Aspirin recommended for everyone >50', 'Aspirin contraindicated in diabetes', 'Clopidogrel recommended instead of aspirin'],
    0,
    'USPSTF aspirin primary prevention: Age 40-59 with 10-year ASCVD risk ≥10%: small net benefit → shared decision-making (Grade C). Age ≥60: no net benefit, increased bleeding risk outweighs CV benefit → do not initiate (Grade D). Always consider bleeding risk (age, GI bleeding history, anticoagulant/NSAID use).',
    'USPSTF阿司匹林一级预防：40-59岁，10年ASCVD风险≥10%：小净获益→共同决策。≥60岁：无净获益，出血风险超过CV获益→不启动。',
    'Aspirina prevencion primaria: 40-59 riesgo ≥10% → decision compartida.',
    'Medium'
))

questions.append(qq(1257, 'step3', 'Primary Care',
    'A 26-year-old immigrant from a TB-endemic country has a PPD with 12 mm induration. She is asymptomatic and CXR is normal. What is the recommended treatment?',
    ['Isoniazid (INH) for 9 months (or other latent TB regimens)', 'RIPE therapy for 6 months', 'No treatment needed', 'BCG vaccine', 'Isoniazid + rifampin for 12 months'],
    0,
    'Latent TB infection (LTBI): PPD ≥10 mm (or ≥5 mm if immunocompromised) or positive IGRA, asymptomatic, normal CXR. Treatment: INH 9 months (or 6 months), rifampin 4 months, or INH + rifapentine weekly x 12 weeks (3HP). Active TB: RIPE (rifampin, INH, pyrazinamide, ethambutol) 2 months + RI 4 months.',
    '潜伏TB感染：PPD≥10mm或IGRA阳性、无症状、CXR正常。治疗：INH 9个月；利福平4个月；或INH+利福喷丁每周12周。活动性TB：RIPE方案。',
    'TB latente: INH 9 meses, rifampicina 4m, o 3HP (12 semanas).',
    'Medium'
))

questions.append(qq(1258, 'step3', 'Primary Care',
    'A 65-year-old has not received pneumococcal vaccine. Which vaccines are recommended?',
    ['PCV20 alone, or PCV15 followed by PPSV23', 'PPSV23 alone', 'PCV13 alone', 'PCV13 + PPSV23 at age 60', 'No vaccine after age 65'],
    0,
    'Pneumococcal vaccine ≥65: PCV20 alone (covers 20 serotypes) OR PCV15 followed by PPSV23 ≥1 year later. Also recommended for age 19-64 with certain conditions (immunocompromise, CSF leak, cochlear implant, asplenia, chronic heart/lung/liver disease, DM, smoking). Previously, PCV13 + PPSV23 schedule has been updated.',
    '肺炎球菌疫苗≥65岁：PCV20单独；或PCV15后≥1年接种PPSV23。也推荐19-64岁有特定情况者（免疫缺陷、脑脊液漏、人工耳蜗、无脾等）。',
    'Vacuna neumococo ≥65: PCV20 solo o PCV15 + PPSV23.',
    'Medium'
))

questions.append(qq(1259, 'step3', 'Primary Care',
    'A pregnant woman at 28 weeks receives Tdap vaccination. What is the primary purpose?',
    ['Prevent neonatal pertussis via passive antibody transfer', 'Prevent maternal tetanus', 'Prevent congenital diphtheria', 'Boost maternal immunity to all three diseases', 'Required by law without specific benefit'],
    0,
    'Tdap during each pregnancy: 27-36 weeks (preferably early in window) to prevent pertussis in newborns. Passive transfer of maternal antibodies protects infant until they receive DTaP at 2 months. Also recommended for all adults: Tdap once, then Td booster every 10 years.',
    '每次妊娠接种Tdap：27-36周（尽早），预防新生儿百日咳。母体抗体被动转移保护婴儿至2月龄接种DTaP。所有成人：Tdap一次，然后Td每10年加强。',
    'Tdap en cada embarazo (27-36 sem): previene tos ferina neonatal.',
    'Medium'
))

questions.append(qq(1260, 'step3', 'Primary Care',
    'Which of the following hepatitis B serologies indicates immunity from vaccination?',
    ['Anti-HBs positive only (HBsAg negative, anti-HBc negative)', 'Anti-HBs positive, anti-HBc positive', 'HBsAg positive, anti-HBc IgM positive', 'Anti-HBe positive', 'HBV DNA >20,000'],
    0,
    'Vaccination: only Anti-HBs positive. Natural infection: anti-HBs + anti-HBc IgG positive. Chronic infection: HBsAg+ >6 months, anti-HBc IgG+, HBV DNA. Acute infection: HBsAg+, anti-HBc IgM+. Window period: anti-HBc IgM only (HBsAg and anti-HBs both negative).',
    '疫苗接种：仅抗HBs阳性。自然感染：抗HBs+抗HBc IgG阳性。慢性感染：HBsAg+>6个月。急性感染：HBsAg+、抗HBc IgM+。窗口期：仅抗HBc IgM。',
    'Vacunado VHB: solo anti-HBs positivo. HBsAg-, anti-HBc-.',
    'Medium'
))

# Biostatistics & Epidemiology (10)
questions.append(qq(1261, 'step3', 'Primary Care',
    'A study finds that a new drug reduces mortality from 10% to 5% compared to placebo (p = 0.03). What is the absolute risk reduction?',
    ['5% (ARR = 10% - 5%)', '50% (RRR = 5%/10%)', '3% (p value)', '15% (10% + 5%)', '2% (NNT = 1/ARR)'],
    0,
    'ARR = control event rate (CER) - experimental event rate (EER) = 10% - 5% = 5%. RRR = ARR/CER = 5%/10% = 50%. NNT = 1/ARR = 1/0.05 = 20 (need to treat 20 patients to prevent 1 death). RRR alone can be misleading; always report ARR and NNT.',
    'ARR = CER - EER = 10% - 5% = 5%。RRR = ARR/CER = 50%。NNT = 1/ARR = 20（需治疗20例以预防1例死亡）。仅报告RRR可能误导；总应报告ARR和NNT。',
    'RRA = 5%, RRR = 50%, NNT = 20.',
    'Medium'
))

questions.append(qq(1262, 'step3', 'Primary Care',
    'A screening test has sensitivity of 90% and specificity of 85%. In a population with disease prevalence of 5%, what happens to the positive predictive value if the test is applied to a population with prevalence of 1%?',
    ['PPV decreases (lower prevalence → more false positives relative to true positives)', 'PPV increases', 'PPV stays the same', 'PPV becomes 100%', 'PPV cannot be calculated'],
    0,
    'PPV = TP/(TP+FP). PPV depends on prevalence: lower prevalence → more false positives relative to true positives → lower PPV. Sensitivity and specificity are intrinsic test properties (independent of prevalence). NPV increases with lower prevalence. This is why screening is more efficient in high-risk populations.',
    'PPV=TP/(TP+FP)。PPV依赖于患病率：低患病率→相对真阳性更多的假阳性→PPV降低。灵敏度和特异度是测试固有属性。NPV随患病率降低而增加。',
    'VPP disminuye con menor prevalencia. Sensibilidad/especificidad constantes.',
    'Medium'
))

questions.append(qq(1263, 'step3', 'Primary Care',
    'A study comparing a new antihypertensive to placebo reports a hazard ratio (HR) of 0.70 with 95% CI 0.55-0.90 for cardiovascular events. What does this mean?',
    ['Statistically significant 30% reduction in risk (CI excludes 1.0)', 'No significant difference (CI includes 1.0)', '70% reduction in risk', 'Not statistically significant (p >0.05)', 'The result is clinically irrelevant'],
    0,
    'HR = 0.70 means 30% reduction in event rate. 95% CI 0.55-0.90 does NOT include 1.0 → statistically significant. If CI included 1.0 (e.g., 0.80-1.20), result would not be significant. CI width indicates precision: narrower CI = more precise estimate.',
    'HR=0.70意味着事件率降低30%。95%CI 0.55-0.90不包含1.0→有统计学意义。若CI包含1.0（如0.80-1.20）则无意义。CI宽度表示精确度。',
    'HR 0.70 (IC 0.55-0.90): reduccion significativa del 30%.',
    'Medium'
))

questions.append(qq(1264, 'step3', 'Primary Care',
    'A study design where participants are grouped by exposure status and followed forward in time to compare incidence of disease. What is this study type?',
    ['Cohort study', 'Case-control study', 'Cross-sectional study', 'Randomized controlled trial', 'Case series'],
    0,
    'Cohort study: prospective (or retrospective) study where subjects are selected by exposure status and followed to determine disease development. Can calculate incidence and relative risk. Case-control: select by disease status, look back at exposures → can calculate odds ratio only. Cross-sectional: snapshot at one point in time. RCT: participants randomized to intervention.',
    '队列研究：按暴露状态分组并前瞻（或回顾）随访以确定疾病发展。可计算发病率和相对危险度。病例对照：按疾病状态选择，回顾暴露→仅可计算OR。',
    'Estudio de cohorte: por exposicion → seguimiento → incidencia.',
    'Medium'
))

questions.append(qq(1265, 'step3', 'Primary Care',
    'A study on a rare disease recruits 50 patients with the disease and 100 controls without the disease, then looks at their past exposures. What measure of association can be calculated?',
    ['Odds ratio', 'Relative risk', 'Attributable risk', 'Absolute risk reduction', 'Number needed to treat'],
    0,
    'Case-control study: selects by disease status, measures PAST exposure. Can only calculate odds ratio (OR = ad/bc). Cannot calculate incidence or relative risk directly because the investigator sets the case:control ratio. Advantage: efficient for rare diseases and diseases with long latency periods. Disadvantage: recall bias, selection bias.',
    '病例对照研究：按疾病状态选择，测量过去暴露。仅可计算比值比（OR=ad/bc）。不能直接计算发病率或RR。优点：对罕见病和长潜伏期疾病高效。缺点：回忆偏倚。',
    'Casos y controles: solo OR (odds ratio) calculable. Eficiente para enfermedades raras.',
    'Medium'
))

questions.append(qq(1266, 'step3', 'Primary Care',
    'In a clinical trial, participants are randomly assigned to treatment or placebo, and NEITHER the participants NOR the investigators know group assignment. What type of blinding is this?',
    ['Double-blind', 'Single-blind (participants only)', 'Open-label', 'Triple-blind', 'Allocation concealment'],
    0,
    'Double-blind: neither participants nor investigators know assignment. Minimizes both performance bias and detection bias. Single-blind: participants only. Triple-blind: participants, investigators, data analysts. Allocation concealment: prevents selection bias at randomization (always important, different concept from blinding).',
    '双盲：参与者和研究者均不知分组。最小化实施偏倚和检测偏倚。单盲：仅参与者。三盲：参与者、研究者、数据分析员。分配隐藏：防止随机化时的选择偏倚。',
    'Doble ciego: ni participantes ni investigadores conocen asignacion.',
    'Easy'
))

questions.append(qq(1267, 'step3', 'Primary Care',
    'A new screening test for cancer has very high sensitivity but low specificity. What is the primary consequence of implementing this test for population screening?',
    ['Many false positives leading to unnecessary invasive procedures and anxiety', 'Many false negatives leading to missed cancers', 'No significant consequence', 'Overestimation of survival time (lead-time bias)', 'Selection bias'],
    0,
    'High sensitivity + low specificity = many false positives. Consequences: unnecessary anxiety, invasive follow-up tests (biopsies), increased healthcare costs, potential complications. High specificity + low sensitivity = many false negatives (missed cases). Ideal screening: high sensitivity (SnOUT — rules out disease) AND high specificity (SpIN — rules in disease).',
    '高灵敏度+低特异度=许多假阳性。后果：不必要焦虑、侵入性随访检查、增加医疗费用。高特异度+低灵敏度=许多假阴性（漏诊）。理想筛查：两者均高。',
    'Alta sensibilidad + baja especificidad → muchos falsos positivos.',
    'Medium'
))

questions.append(qq(1268, 'step3', 'Primary Care',
    'Which type of bias occurs when a screening test detects disease earlier, making survival appear longer even though the actual time of death is unchanged?',
    ['Lead-time bias', 'Length-time bias', 'Selection bias', 'Recall bias', 'Surveillance bias'],
    0,
    'Lead-time bias: earlier detection by screening makes survival appear longer from diagnosis, but actual death time unchanged. Length-time bias: screening disproportionately detects slow-growing (less aggressive) tumors because they have longer preclinical phase. Overdiagnosis: detecting cancers that would never become clinically significant.',
    '领先时间偏倚：筛查早期发现使从诊断起生存期看似更长，但实际死亡时间不变。长度偏倚：筛查不成比例地检出缓慢生长的肿瘤。过度诊断：检出永远不会临床意义的癌症。',
    'Sesgo de adelanto: deteccion mas temprana → aparente mayor supervivencia.',
    'Medium'
))

questions.append(qq(1269, 'step3', 'Primary Care',
    'A meta-analysis of 10 small RCTs shows a pooled treatment effect with narrow confidence intervals and low heterogeneity (I-squared = 15%). How should this evidence be interpreted?',
    ['Strong, consistent evidence of treatment effect across studies', 'Weak evidence due to small individual studies', 'Evidence cannot be used because of publication bias', 'The treatment effect is likely overestimated', 'Need larger individual trials to confirm'],
    0,
    'Meta-analysis: I-squared <25% = low heterogeneity (consistent results across studies). Narrow CI = precise estimate. Small individual studies can still produce reliable meta-analytic results if consistent. Key concepts: I-squared (heterogeneity), forest plot (individual + pooled effects), funnel plot (publication bias), fixed vs random effects model.',
    'Meta分析：I²<25%=低异质性（研究结果一致）。窄CI=精确估计。即使单个研究小，若结果一致仍可产生可靠meta分析结果。关键概念：森林图、漏斗图。',
    'Meta-analisis: I²<25% = baja heterogeneidad, evidencia consistente.',
    'Medium'
))

questions.append(qq(1270, 'step3', 'Primary Care',
    'A study finds that patients who drink coffee have a lower risk of liver cancer (p <0.01). Before concluding coffee prevents cancer, what must be considered?',
    ['Confounding — coffee drinkers may have other healthy behaviors', 'This is a definitive causal relationship', 'Coffee contains carcinogens', 'The p-value is too high', 'Only applies to decaffeinated coffee'],
    0,
    'Observational studies show association, NOT causation. Confounding: coffee drinkers may also exercise more, smoke less, have better diet. Bradford Hill criteria for causation: strength, consistency, specificity, temporality, biological gradient, plausibility, coherence, experiment, analogy. RCT needed to establish causation.',
    '观察性研究显示关联而非因果。混杂：咖啡饮用者可能也更多运动、少吸烟、饮食更好。Bradford Hill因果关系标准：强度、一致性、特异性、时序性、生物学梯度等。',
    'Asociacion ≠ causalidad. Posible confusion por otros habitos saludables.',
    'Medium'
))

# Patient Safety & Quality Improvement (10)
questions.append(qq(1271, 'step3', 'Patient Safety',
    'A nurse notices that a patient is about to receive a medication to which they have a documented allergy. She intercepts the error before administration. According to the Swiss cheese model, what does this represent?',
    ['A layer of defense (slice of cheese) catching the error before it reaches the patient', 'An active failure', 'A latent condition', 'The root cause', 'A never event'],
    0,
    'Swiss cheese model (Reason): errors occur when holes in multiple defense layers align. Active failures: unsafe acts by frontline providers (slips, lapses, mistakes). Latent conditions: system weaknesses (understaffing, poor design, inadequate training). The interception is a defense layer working as intended.',
    '瑞士奶酪模型（Reason）：多层防御的孔洞对齐时发生错误。主动失误：一线人员的危险行为。潜在条件：系统弱点。拦截是防御层正常工作的表现。',
    'Modelo del queso suizo: capa de defensa intercepta el error.',
    'Medium'
))

questions.append(qq(1272, 'step3', 'Patient Safety',
    'After a wrong-site surgery, a root cause analysis (RCA) is conducted. Which of the following is the PRIMARY goal of an RCA?',
    ['Identify system-level causes and prevent recurrence (NOT to assign individual blame)', 'Identify the individual responsible for the error', 'Determine financial liability', 'Meet regulatory requirements only', 'Punish those involved to deter future errors'],
    0,
    'RCA: systematic process to identify underlying system failures that contributed to an adverse event. Goal: prevent recurrence through system redesign. NOT about individual blame or punishment. Key: "What happened, why did it happen, what can we do to prevent it?" Conducted in a blame-free, just culture environment.',
    'RCA：系统性地识别导致不良事件的潜在系统故障。目标：通过系统重新设计防止再次发生。非个人责备。在无责备、公正文化环境中进行。',
    'ACR: identificar causas del sistema, no culpar individuos.',
    'Medium'
))

questions.append(qq(1273, 'step3', 'Patient Safety',
    'A hospital implements a checklist before central line insertion that includes hand hygiene, chlorhexidine skin prep, and full-barrier precautions. This is an example of which quality improvement approach?',
    ['Standardization of care (reducing variability)', 'Six Sigma methodology', 'Lean methodology', 'Failure mode and effects analysis (FMEA)', 'Balanced scorecard'],
    0,
    'Checklists standardize care to reduce variability and human error. Atul Gawande\'s surgical safety checklist reduced mortality by 47%. Other QI methods: PDSA (Plan-Do-Study-Act) cycles for iterative improvement. Six Sigma: reduce defects to <3.4 per million. Lean: eliminate waste. FMEA: proactive risk assessment.',
    '核查清单标准化医疗以减少变异和人为错误。Gawande手术安全清单降低死亡率47%。其他方法：PDSA循环、六西格玛（减少缺陷）、精益（消除浪费）、FMEA（主动风险评估）。',
    'Lista de verificacion: estandarizacion del cuidado, reduce variabilidad.',
    'Medium'
))

questions.append(qq(1274, 'step3', 'Patient Safety',
    'A patient develops a Stage 3 hospital-acquired pressure ulcer during admission. What is the correct classification of this event?',
    ['Hospital-acquired condition (HAC) — should not occur with proper care', 'Never event (should NEVER occur)', 'Minor complication, acceptable rate', 'Expected outcome for immobile patients', 'Sentinel event requiring immediate Joint Commission report'],
    0,
    'Stage 3/4 pressure ulcers are hospital-acquired conditions (HACs) that CMS considers preventable and does not reimburse at higher rates. Never events: events that should never occur (wrong-site surgery, retained foreign body, wrong patient). Sentinel events: unexpected occurrence involving death or serious injury requiring immediate investigation.',
    '3/4期压疮是医院获得性疾病，CMS视为可预防且不按更高费率报销。绝不应发生事件：错误部位手术、遗留异物。警讯事件：意外死亡或严重损伤需立即调查。',
    'Ulcera por presion grado 3/4: condicion adquirida en hospital, prevenible.',
    'Medium'
))

questions.append(qq(1275, 'step3', 'Patient Safety',
    'During a team meeting, a medical student notices an attending about to order a contraindicated medication but hesitates to speak up. What type of safety barrier does this represent?',
    ['Hierarchy/power distance barrier — psychological safety not established', 'Knowledge deficit barrier', 'Time pressure barrier', 'System design barrier', 'Fatigue barrier'],
    0,
    'Hierarchy/power gradient: team members hesitate to question authority, even when patient safety is at risk. Creating psychological safety: all team members feel safe to speak up. Tools: briefings, debriefings, SBAR communication (Situation, Background, Assessment, Recommendation), flattening hierarchy during critical moments.',
    '层级/权力梯度：团队成员不愿质疑权威，即使患者安全受威胁。建立心理安全：所有成员感到安全可以发言。工具：简报、SBAR沟通、关键时扁平化层级。',
    'Jerarquia: barrera para hablar. Crear seguridad psicologica.',
    'Medium'
))

questions.append(qq(1276, 'step3', 'Patient Safety',
    'A medical error results in patient harm. The attending physician wants to disclose the error to the patient and family. What is the most appropriate approach?',
    ['Full disclosure: explain what happened, apologize, discuss consequences, and outline prevention plan', 'Disclose only if the patient asks directly', 'Report to risk management without telling the patient', 'Disclose but do not apologize (legal liability concerns)', 'Only disclose if another staff member was responsible'],
    0,
    'Ethical duty: full, honest disclosure after adverse events. Components: (1) prompt explanation of facts, (2) sincere apology/expression of regret, (3) discussion of consequences and ongoing care needs, (4) outline of steps to prevent recurrence. Apology laws in most states protect expressions of regret from being used as evidence of liability.',
    '道德义务：不良事件后完全诚实披露。组成：及时解释事实、真诚道歉、讨论后果及后续护理需求、概述预防再发生步骤。多数州道歉法保护遗憾表达不被用作责任证据。',
    'Divulgacion completa: explicar, disculparse, consecuencias, prevencion.',
    'Medium'
))

questions.append(qq(1277, 'step3', 'Patient Safety',
    'A nurse properly administers the correct medication at the correct dose via the correct route, but the patient unexpectedly develops anaphylaxis with no prior history of allergy. How is this event classified?',
    ['Adverse drug reaction (not a medical error)', 'Medical error — wrong medication', 'Medical error — failure to check allergies', 'Negligence', 'Sentinel event'],
    0,
    'Adverse drug reaction: harm from appropriate medication use. Not a medical error (no preventable cause). Medical error: failure of planned action to be completed as intended (error of execution) or wrong plan (error of planning). Preventable adverse event: harm from medical error. Non-preventable adverse event: harm without error.',
    '药物不良反应：适当用药引起的伤害。非医疗错误。医疗错误：计划动作未能按意图完成。可预防不良事件：由医疗错误引起的伤害。不可预防不良事件：无错误的伤害。',
    'Reaccion adversa medicamentosa: no es error medico.',
    'Medium'
))

questions.append(qq(1278, 'step3', 'Patient Safety',
    'A 75-year-old is on warfarin, amiodarone, and ciprofloxacin (for UTI). INR jumps from 2.5 to 8.0 and develops bleeding. What type of error contributed?',
    ['Medication interaction error (failure to recognize drug-drug interactions)', 'Wrong dose error', 'Wrong drug error', 'Monitoring error only', 'No error — expected outcome'],
    0,
    'Warfarin metabolism: CYP2C9. Interactions: amiodarone (inhibits CYP2C9, warfarin metabolism), ciprofloxacin (inhibits CYP1A2, reduces warfarin clearance), other antibiotics. These increase INR and bleeding risk. Always check drug interactions when prescribing antibiotics to patients on warfarin; consider reducing warfarin dose or more frequent INR monitoring.',
    '华法林经CYP2C9代谢。相互作用：胺碘酮（抑制CYP2C9）、环丙沙星（抑制CYP1A2）。增加INR和出血风险。为服用华法林患者处方抗生素时务必检查药物相互作用。',
    'Interaccion medicamentosa: warfarina + amiodarona + ciprofloxacino.',
    'Medium'
))

questions.append(qq(1279, 'step3', 'Patient Safety',
    'Which team communication tool is most effective during a patient handoff or transition of care?',
    ['SBAR (Situation, Background, Assessment, Recommendation)', 'SOAP note', 'Morning report', 'Grand rounds', 'Morbidity and mortality conference'],
    0,
    'SBAR: structured communication tool for critical information transfer. Situation: concise statement of the problem. Background: relevant clinical context. Assessment: analysis and consideration of options. Recommendation: specific action requested. I-PASS also used for handoffs: Illness severity, Patient summary, Action list, Situation awareness, Synthesis.',
    'SBAR：结构化沟通工具。情境：问题简述。背景：相关临床信息。评估：分析和选项考虑。建议：请求的具体行动。I-PASS也用于交接。',
    'SBAR: Situacion, Antecedentes, Evaluacion, Recomendacion.',
    'Medium'
))

questions.append(qq(1280, 'step3', 'Patient Safety',
    'A clinic implements Plan-Do-Study-Act (PDSA) cycles to reduce patient wait times. After testing a change for 2 weeks, the data shows no improvement. What is the next step?',
    ['Study the results, refine the change, and test again (PDSA is iterative)', 'Abandon the project', 'Implement the change permanently anyway', 'Switch to a completely different problem', 'Hire external consultants'],
    0,
    'PDSA cycle: iterative process. Plan: define objective, questions, predictions, plan to carry out. Do: carry out the plan, document problems and observations. Study: analyze data, compare to predictions, summarize learnings. Act: refine change based on learning, determine next cycle. Failure is expected and informative — it guides the next cycle.',
    'PDSA循环：迭代过程。计划、执行、研究、行动。失败是预期的且有信息价值——它指导下一个循环。不要放弃，根据学习改进后再测试。',
    'PDSA: ciclos iterativos. Si no mejora, estudiar, refinar y probar otra vez.',
    'Medium'
))

# Ethics (10)
questions.append(qq(1281, 'step3', 'Ethics',
    'A competent adult patient with terminal cancer refuses life-prolonging chemotherapy and opts for comfort care. The family demands that treatment be continued. What should the physician do?',
    ['Respect the patient\'s autonomous decision; discuss with family but do not override patient\'s wishes', 'Override the patient\'s decision per family request', 'Seek court order to continue treatment', 'Transfer care to another physician who will comply with family', 'Defer decision to the ethics committee'],
    0,
    'Autonomy: competent adult patients have the right to refuse ANY treatment, even life-saving. Family wishes do not override patient autonomy. Physician should: (1) confirm patient is competent and decision is informed and voluntary, (2) explore reasons, (3) discuss with family to help them understand, (4) respect the patient\'s final decision.',
    '自主权：有能力的成年患者有权拒绝任何治疗，即使是挽救生命的。家属意愿不能凌驾患者自主权。医生应确认患者能力、探讨原因、与家属沟通、尊重患者最终决定。',
    'Autonomia: paciente competente tiene derecho a rechazar tratamiento.',
    'Medium'
))

questions.append(qq(1282, 'step3', 'Ethics',
    'A 16-year-old requests contraception but does not want her parents to know. She is sexually active. What is the most appropriate response?',
    ['Provide contraception; minors can consent to reproductive health services in most jurisdictions', 'Refuse because she is a minor', 'Require parental consent before providing any care', 'Notify parents despite her wishes', 'Refer to child protective services'],
    0,
    'Minor consent: most states allow minors to consent to contraceptive services, STI testing/treatment, prenatal care, and substance abuse treatment without parental consent. Emancipated minors and mature minors doctrine also provide exceptions. Always check local laws. Encourage communication with parents but respect confidentiality.',
    '未成年人同意：多数州允许未成年人同意避孕服务、性病检测/治疗、产前护理和药物滥用治疗而无需父母同意。鼓励与父母沟通但尊重隐私。',
    'Menores pueden consentir anticoncepcion en mayoria de jurisdicciones.',
    'Medium'
))

questions.append(qq(1283, 'step3', 'Ethics',
    'A patient with end-stage COPD is intubated in the ICU. The family produces a valid advance directive stating the patient does not want "life support if there is no reasonable chance of recovery." The medical team agrees prognosis is poor. What should be done?',
    ['Follow the advance directive — withdraw life support and provide comfort care', 'Continue full support because the family brought the document too late', 'Ignore the directive and continue treatment', 'Wait for the patient to regain capacity', 'Consult palliative care but continue life support indefinitely'],
    0,
    'Advance directives: living will (specific treatment preferences) and durable power of attorney for healthcare (designates surrogate decision-maker). When valid and applicable to current situation → must be followed. If patient lacks capacity and no advance directive → surrogate decision-maker using substituted judgment (what would patient want?) or best interest standard.',
    '预先指示：生前预嘱和医疗持久授权书。当有效且适用于当前情况时必须遵守。若无预先指示则代理决策者使用替代判断（患者会想要什么？）或最佳利益标准。',
    'Directivas anticipadas: respetar cuando son validas y aplicables.',
    'Medium'
))

questions.append(qq(1284, 'step3', 'Ethics',
    'A physician is asked by an insurance company to limit disclosure of a patient\'s HIV status to reduce premiums. The patient is unaware of this request. What should the physician do?',
    ['Refuse — duty of honesty to patients and cannot withhold relevant medical information', 'Comply to reduce patient\'s financial burden', 'Withhold diagnosis and notify the insurance company', 'Ask hospital administration to decide', 'Defer to risk management'],
    0,
    'Beneficence and non-maleficence: physician must act in patient\'s best interest. Honesty/truth-telling is a fundamental ethical duty. Withholding diagnosis violates patient autonomy and informed decision-making. Insurance considerations do not override the physician-patient relationship. If conflict exists, advocate for patient.',
    '行善和不伤害：医生必须以患者最佳利益行事。诚实是基本道德义务。隐瞒诊断侵犯患者自主权和知情决策。保险考虑不凌驾医患关系。',
    'Deber de honestidad: no ocultar diagnostico de VIH al paciente.',
    'Medium'
))

questions.append(qq(1285, 'step3', 'Ethics',
    'A Jehovah\'s Witness patient with life-threatening bleeding from a GI ulcer refuses blood transfusion. The patient is competent and understands the risks. What should the physician do?',
    ['Respect the refusal; manage with non-blood alternatives (iron, EPO, volume resuscitation, surgical options)', 'Get a court order for transfusion', 'Transfuse against patient\'s will (emergency exception)', 'Declare the patient incompetent based on religious beliefs', 'Transfer to another hospital'],
    0,
    'Competent adult refusing life-saving treatment: must respect autonomy. Jehovah\'s Witnesses: refuse blood products (varies — some accept fractions, albumin, clotting factors). Management alternatives: iron supplementation, erythropoietin, aggressive volume resuscitation, pro-hemostatic agents, blood conservation surgical techniques. Document refusal clearly.',
    '有能力的成人拒绝救生治疗：必须尊重自主权。耶和华见证人拒绝血液制品。管理替代方案：铁剂、EPO、积极容量复苏、促凝血剂、血液保护手术技术。',
    'Testigo de Jehova: respetar rechazo, usar alternativas (hierro, EPO).',
    'Medium'
))

questions.append(qq(1286, 'step3', 'Ethics',
    'A physician discovers that a colleague is diverting narcotics for personal use and appears impaired at work. What is the first step?',
    ['Report to the state medical board or physician health program (PHP)', 'Confront the colleague directly', 'Ignore it (personal matter)', 'Report to law enforcement immediately', 'Anonymously notify hospital administration'],
    0,
    'Impaired physician: duty to report. Physician Health Programs (PHPs) provide confidential monitoring and treatment (preferred route). State medical boards must also be notified. Ignoring places patients at risk. Confrontation alone is insufficient (may not lead to treatment). Goal: protect patients + help colleague get treatment (not punitive).',
    '受损医生：有义务报告。医师健康计划提供保密监测和治疗（首选途径）。也必须通知州医学委员会。忽视会危及患者。目标是保护患者+帮助同事治疗。',
    'Medico deteriorado: reportar al PHP y junta medica. Proteger pacientes.',
    'Medium'
))

questions.append(qq(1287, 'step3', 'Ethics',
    'A clinical trial is being conducted in a developing country. The control group receives placebo despite an effective treatment being available elsewhere. Is this ethical?',
    ['Unethical — control group should receive best proven treatment (Declaration of Helsinki standard)', 'Ethical — placebo controls are always acceptable', 'Ethical if the participants consent', 'Ethical in developing countries only', 'Depends on the disease being studied'],
    0,
    'Declaration of Helsinki: new interventions must be tested against best proven treatment (not placebo) when effective treatment exists. Exception: compelling scientific reasons + patients receiving placebo will not be subject to additional serious/irreversible harm. Exploitation of vulnerable populations is unethical.',
    '赫尔辛基宣言：新干预必须对照最佳已证实治疗（非安慰剂），当有效治疗存在时。例外：有充分科学理由+接受安慰剂者不会遭受额外严重/不可逆伤害。',
    'Declaracion de Helsinki: control debe recibir mejor tratamiento, no placebo.',
    'Medium'
))

questions.append(qq(1288, 'step3', 'Ethics',
    'A 14-year-old is brought in by parents concerned about depression. During the confidential portion of the visit, the patient reveals suicidal ideation with a plan. What is the physician\'s obligation?',
    ['Breach confidentiality — inform parents and ensure safety (danger to self overrides confidentiality)', 'Maintain confidentiality per adolescent privacy rights', 'Only inform parents if the patient agrees', 'Prescribe antidepressants without telling parents', 'Wait until the next visit to reassess'],
    0,
    'Limits of confidentiality: (1) danger to self (suicidal ideation with plan/intent), (2) danger to others (homicidal ideation — Tarasoff duty to warn), (3) child/elder abuse, (4) certain infectious diseases (public health reporting). For adolescents: inform the patient you must tell parents to keep them safe, explain why, involve them in the discussion if possible.',
    '保密限制：自我危险、他人危险（Tarasoff警告义务）、儿童/老人虐待、某些传染病。对青少年：告知患者必须告诉父母以保安全，解释原因，尽量让他们参与讨论。',
    'Confidencialidad limitada: riesgo de suicidio → informar a padres.',
    'Medium'
))

questions.append(qq(1289, 'step3', 'Ethics',
    'A pharmaceutical representative offers a physician an all-expenses-paid trip to Hawaii to attend a "consulting meeting" on a new drug the physician prescribes. What ethical principle does this violate?',
    ['Conflict of interest — gifts create obligation and influence prescribing', 'Patient abandonment', 'Informed consent violation', 'Breach of confidentiality', 'Rationing of care'],
    0,
    'Conflict of interest: even small gifts from pharma influence prescribing behavior. Professional guidelines: decline gifts, meals, travel. Accept only modest items that benefit patients (educational materials) or are related to work. Sunshine Act (Open Payments): requires reporting of payments/transfers of value from manufacturers to physicians.',
    '利益冲突：即使小礼物也影响处方行为。专业指南：拒绝礼物、餐饮、旅行。Sunshine法案要求报告厂商对医生的付款或价值转移。',
    'Conflicto de interes: dones de farmaceuticas influyen prescripcion.',
    'Medium'
))

questions.append(qq(1290, 'step3', 'Ethics',
    'During a pandemic with limited ventilators, a hospital must decide how to allocate resources. Which ethical framework is most commonly used?',
    ['Utilitarian approach — maximize overall benefit (save the most lives/life-years)', 'First-come, first-served', 'Lottery/random allocation', 'Prioritize healthcare workers only', 'Prioritize the youngest patients only'],
    0,
    'Disaster triage/resource allocation: most frameworks use utilitarian principles (maximize lives saved + life-years saved). Also consider: justice (fair distribution, not discriminating), transparency (clear, public criteria), accountability. SOFA scores and triage algorithms. Important: triage decisions should be made by triage team, NOT treating physicians.',
    '灾难分诊/资源分配：多数框架使用功利主义原则（最大化挽救生命+生命年）。也考虑公正、透明、问责。分诊决策应由分诊团队而非治疗医生做出。',
    'Triaje en pandemia: utilitarismo (maximizar vidas salvadas).',
    'Medium'
))

# Systems-based Practice (10)
questions.append(qq(1291, 'step3', 'Primary Care',
    'A 45-year-old uninsured patient is diagnosed with Stage II breast cancer. What is the most important first step in ensuring she receives treatment?',
    ['Connect patient with a social worker to explore insurance options (Medicaid, ACA marketplace, hospital charity care)', 'Start treatment immediately and worry about payment later', 'Tell patient treatment is not available', 'Refer to a private surgeon who requires upfront payment', 'Discharge with follow-up only'],
    0,
    'Systems-based practice: understanding healthcare financing and helping patients navigate the system. Options for uninsured: Medicaid (if eligible), ACA marketplace (subsidies), hospital charity care programs, drug manufacturer patient assistance programs, cancer-specific organizations. Social workers/case managers essential for coordination.',
    '系统实践：了解医疗筹资并帮助患者导航系统。无保险者选择：Medicaid、ACA市场、医院慈善医疗、药厂患者援助项目。社会工作者/个案管理者对协调至关重要。',
    'Paciente sin seguro: trabajador social, opciones de cobertura.',
    'Medium'
))

questions.append(qq(1292, 'step3', 'Primary Care',
    'A Medicare patient with heart failure is discharged from the hospital. Within 30 days, she is readmitted for fluid overload. Which strategy could best reduce this readmission?',
    ['Early post-discharge follow-up appointment (within 7 days) + medication reconciliation + home health services', 'Longer initial hospital stay for all patients', 'Nursing home placement for all heart failure patients', 'Referral to hospice', 'Discontinue all diuretics to prevent dehydration'],
    0,
    'Reducing readmissions: (1) early follow-up (within 7 days), (2) medication reconciliation at transitions, (3) clear discharge instructions, (4) home health services, (5) telehealth follow-up, (6) addressing social determinants (transportation, food insecurity). CMS Hospital Readmissions Reduction Program (HRRP) penalizes excess readmissions for HF, AMI, COPD, pneumonia, TKA/THA.',
    '减少再入院：早期随访（7天内）、药物重整、清晰出院指导、居家健康服务、远程随访、解决社会决定因素。CMS HRRP对超额再入院进行处罚。',
    'Reducir readmisiones: seguimiento temprano + reconciliacion medicacion.',
    'Medium'
))

questions.append(qq(1293, 'step3', 'Primary Care',
    'A patient with limited English proficiency requires complex discharge instructions. What is the legal and ethical requirement for communication?',
    ['Provide a professional medical interpreter (in-person, phone, or video) — NOT family members', 'Have a family member translate', 'Use Google Translate', 'Provide written instructions in English only', 'Simplify instructions to basic English words'],
    0,
    'Laws: Title VI of Civil Rights Act requires meaningful access for LEP patients (federally funded institutions). Joint Commission standards. Use professional interpreters (NOT family/friends — except in emergencies, and even then, offer professional interpretation). Document interpreter ID. Written materials should be in patient\'s preferred language.',
    '法律：民权法案第六篇要求LEP患者有意义获取（联邦资助机构）。使用专业口译员（非家人/朋友）。书面材料应以患者首选语言提供。',
    'Paciente LEP: interprete profesional, no familiares.',
    'Medium'
))

questions.append(qq(1294, 'step3', 'Internal Medicine',
    'A nursing home patient develops a fever, cough, and altered mental status. The family wants "everything done" but the patient has advanced dementia and bed-bound status. What is the most appropriate approach?',
    ['Discuss goals of care with family: explain prognosis, explore what the patient would want, offer comfort-focused options alongside aggressive treatment', 'Immediately transfer to ICU and intubate per family request', 'Refuse treatment because prognosis is poor', 'Make patient DNR without family consent', 'Wait until the patient deteriorates further'],
    0,
    'Goals of care discussion: explore patient values, explain realistic prognosis, offer choices including comfort-focused care alongside aggressive options. Use shared decision-making approach. Ask "What would the patient say if they could speak?" Frame ICU/ventilator as time-limited trial if uncertain. Involve palliative care. Document preferences clearly.',
    '护理目标讨论：探索患者价值观、解释实际预后、提供包括舒适护理在内的选择。使用共享决策。询问"如果患者能说话会怎么说？"时间限制试验框架。',
    'Objetivos de cuidado: explorar valores, pronostico, opciones de confort.',
    'Medium'
))

questions.append(qq(1295, 'step3', 'Internal Medicine',
    'A patient is prescribed a new medication. The physician explains the risks, benefits, and alternatives, and the patient signs a consent form. Which key element of informed consent is missing if the patient was not asked if they had questions?',
    ['Understanding — the patient must comprehend the information (not just hear it)', 'Disclosure of information', 'Voluntariness', 'Capacity/competence', 'Documentation'],
    0,
    'Informed consent elements: (1) Disclosure: nature, risks, benefits, alternatives (including no treatment). (2) Capacity: patient can understand, reason, communicate choice. (3) Voluntariness: free from coercion. (4) Understanding: patient actually comprehends (teach-back method: "Tell me in your own words"). Consent form alone ≠ informed consent.',
    '知情同意要素：披露、能力、自愿、理解（用teach-back方法确认）。仅签署同意书≠知情同意。患者必须真正理解信息。',
    'Consentimiento informado: comprension (teach-back) es esencial.',
    'Medium'
))

questions.append(qq(1296, 'step3', 'Primary Care',
    'A physician prescribes a brand-name medication when an equally effective generic is available. The patient has high out-of-pocket costs. What should guide the prescribing decision?',
    ['Cost-conscious prescribing — choose the most cost-effective option unless clinical indication for brand-name', 'Always prescribe the newest brand-name drug', 'Patient cost is not the physician\'s concern', 'Prescribe whatever drug representatives recommend', 'Base decision solely on physician convenience'],
    0,
    'Cost-conscious/high-value care: prescribe generics when equally effective. Consider patient\'s formulary, out-of-pocket costs. Check prices (GoodRx, insurance formulary). High drug costs → non-adherence. Choose Wisely campaign: avoid unnecessary tests/treatments. Physicians should incorporate cost into prescribing decisions.',
    '成本意识/高价值医疗：同等有效时处方仿制药。考虑患者处方集和自付费用。高昂药费→不依从。选择明智运动：避免不必要的检查/治疗。',
    'Prescripcion consciente del costo: genericos cuando igualmente efectivos.',
    'Medium'
))

questions.append(qq(1297, 'step3', 'Primary Care',
    'A clinic serves a population where 30% of patients have uncontrolled diabetes. The clinic decides to implement group medical visits and community health workers. What type of intervention is this?',
    ['Population health management', 'Individual patient care', 'Purely financial intervention', 'Research study', 'Emergency response'],
    0,
    'Population health: health outcomes of a group, including distribution of outcomes. Approaches: group visits (shared medical appointments), community health workers, patient navigators, telehealth, addressing social determinants (transportation, housing, food security). Triple Aim: better health, better care, lower cost.',
    '人群健康：群体的健康结局及其分布。方法：小组访视、社区卫生工作者、患者导航员、远程医疗、解决社会决定因素。三重目标：更好健康、更好医疗、更低成本。',
    'Salud poblacional: visitas grupales, trabajadores de salud comunitarios.',
    'Medium'
))

questions.append(qq(1298, 'step3', 'Primary Care',
    'A physician admits a patient with chest pain and orders a full cardiac workup including an unnecessary stress test and echo to "be safe." The physician is concerned about a lawsuit if anything is missed. This is an example of:',
    ['Defensive medicine', 'Evidence-based medicine', 'Patient-centered care', 'Appropriate standard of care', 'Cost-effective care'],
    0,
    'Defensive medicine: ordering tests/procedures primarily to avoid malpractice liability, not for patient benefit. Types: assurance behavior (ordering unnecessary tests) and avoidance behavior (refusing high-risk patients). Contributes significantly to healthcare costs. Better approach: shared decision-making, document reasoning, follow guidelines.',
    '防御性医疗：主要为避免医疗诉讼而非患者利益开具检查/操作。类型：保证行为（开不必要检查）和回避行为（拒绝高风险患者）。显著增加医疗成本。',
    'Medicina defensiva: pruebas innecesarias por miedo a demandas.',
    'Medium'
))

questions.append(qq(1299, 'step3', 'Primary Care',
    'A hospital is implementing an electronic health record system. The vendor requires extensive physician training to use the system effectively. What is the hospital administration\'s responsibility?',
    ['Provide protected time for training and ongoing support; recognize EHR transition temporarily reduces productivity', 'Require physicians to train on their own time', 'Cancel the EHR implementation', 'Hire new physicians who already know the system', 'Implement without training to save costs'],
    0,
    'EHR implementation: "meaningful use" requires effective use of certified EHR technology. Challenges: physician burnout (click fatigue, "death by a thousand clicks"), reduced face-to-face time, workflow disruption. Solutions: scribes, voice recognition, protected training time, user-centered design, ongoing optimization with physician input.',
    'EHR实施："有意义使用"需要有效使用认证EHR技术。挑战：医生倦怠、减少面对面时间、工作流中断。解决方案：抄写员、语音识别、受保护培训时间、以用户为中心设计。',
    'Implementacion EHR: tiempo protegido para capacitacion, soporte continuo.',
    'Medium'
))

questions.append(qq(1300, 'step3', 'Primary Care',
    'A rural community has no primary care physician within 50 miles. Which model of care delivery would be most appropriate to improve access?',
    ['Telehealth with regular virtual visits + periodic in-person visits at a mobile clinic', 'Require patients to drive to the nearest city', 'Build a full tertiary care hospital', 'Close the clinic entirely', 'Wait for a physician to relocate to the area voluntarily'],
    0,
    'Telehealth: effective for follow-up visits, chronic disease management, medication management, mental health services (especially in rural areas). Requires broadband access (some rural areas lack this — second digital divide). Models: telemedicine carts at rural clinics, direct-to-consumer telehealth, remote patient monitoring. Combined with periodic in-person care.',
    '远程医疗：有效用于随访、慢病管理、药物管理、心理健康服务（尤其农村地区）。模型：农村诊所远程医疗车、直接面向消费者远程医疗、远程患者监测。',
    'Telesalud para acceso rural: consultas virtuales + clinica movil.',
    'Medium'
))

# More Step 3: Emergency Medicine (10)
questions.append(qq(1301, 'step3', 'Emergency Medicine',
    'A 25-year-old is brought in unresponsive with pinpoint pupils and respiratory depression. Friends report possible heroin use. What is the next step in management?',
    ['Airway management + naloxone 0.4-2 mg IV/IM/IN', 'Activated charcoal', 'Gastric lavage', 'Flumazenil', 'Wait for patient to wake up'],
    0,
    'Opioid overdose: ABCs first — airway, breathing (bag-valve-mask ventilation), then naloxone. Naloxone: opioid antagonist, rapid onset (2-5 min IV), duration 30-90 min. May need repeat dosing or infusion (shorter half-life than most opioids). Precipitated withdrawal: not life-threatening. Observe for re-sedation.',
    '阿片类药物过量：ABCs优先——气道、呼吸（球囊面罩通气），然后纳洛酮。纳洛酮起效快（2-5min IV）、持续30-90min。可能需重复给药或输注。',
    'Sobredosis opioides: ABC primero, luego naloxona.',
    'Medium'
))

questions.append(qq(1302, 'step3', 'Emergency Medicine',
    'A 70-year-old with HTN and DM presents with sudden-onset severe chest pain radiating to the back. BP is 190/100 in the right arm and 140/80 in the left arm. CXR shows widened mediastinum. What is the most likely diagnosis?',
    ['Acute aortic dissection (Stanford Type A)', 'Acute MI', 'Pulmonary embolism', 'Tension pneumothorax', 'Esophageal rupture'],
    0,
    'Aortic dissection: tearing chest pain radiating to back, pulse deficit/differential BP between arms, widened mediastinum on CXR. Type A (ascending aorta): surgical emergency — involves ascending aorta. Type B (descending only): medical management (beta-blockers to reduce dP/dT). Diagnosis: CT angiography or TEE. Complications: tamponade, aortic regurgitation, MI, stroke.',
    '主动脉夹层：撕裂样胸痛向背放射、双上肢血压差异、纵隔增宽。A型（升主动脉）：外科急症。B型（仅降主动脉）：药物治疗（β阻滞剂降低dP/dT）。',
    'Diseccion aortica: dolor desgarrante, diferencia de PA entre brazos.',
    'Medium'
))

questions.append(qq(1303, 'step3', 'Emergency Medicine',
    'A 45-year-old presents with sudden-onset worst headache of life. CT head is normal. What is the next step?',
    ['Lumbar puncture to rule out subarachnoid hemorrhage', 'MRI brain', 'Discharge with analgesics', 'Observation for 24 hours', 'CT angiography'],
    0,
    'SAH: thunderclap headache (worst of life, maximal at onset). CT non-contrast: sensitivity ~95% in first 24h, decreases with time. If CT negative + high suspicion → LP (xanthochromia — yellow CSF from bilirubin, takes 6-12h to develop, peaks at 48h, lasts 2+ weeks). CT angiography if LP non-diagnostic. Most common cause: ruptured berry aneurysm.',
    'SAH：雷击样头痛（一生中最剧烈、发作即达峰值）。CT平扫：24h内灵敏度~95%。CT阴性+高度怀疑→LP（黄变）。最常见原因：浆果动脉瘤破裂。',
    'HSA: cefalea en trueno, TC normal → puncion lumbar.',
    'Medium'
))

questions.append(qq(1304, 'step3', 'Emergency Medicine',
    'A patient presents with right lower quadrant pain, fever, and leukocytosis. On physical exam, pain is referred to the RLQ during palpation of the LLQ. What is this sign called?',
    ['Rovsing sign', 'McBurney sign', 'Psoas sign', 'Obturator sign', 'Murphy sign'],
    0,
    'Rovsing sign: palpation of LLQ causes pain in RLQ (suggestive of appendicitis). McBurney sign: tenderness at McBurney point (2/3 from umbilicus to ASIS). Psoas sign: RLQ pain with right hip extension (retrocecal appendix). Obturator sign: RLQ pain with internal rotation of flexed hip (pelvic appendix). Murphy sign: RUQ pain on inspiration (cholecystitis).',
    'Rovsing征：按压LLQ引起RLQ疼痛（提示阑尾炎）。McBurney征：McBurney点压痛。腰大肌征：伸右髋RLQ痛。闭孔肌征：屈髋内旋RLQ痛。Murphy征：吸气RUQ痛。',
    'Signo de Rovsing: dolor en FID al palpar FII (apendicitis).',
    'Medium'
))

questions.append(qq(1305, 'step3', 'Emergency Medicine',
    'A 55-year-old with DM develops facial pain, black eschar, and bloody nasal discharge. Exam shows necrotic turbinates. What is the most likely diagnosis?',
    ['Mucormycosis (rhinocerebral)', 'Bacterial sinusitis', 'Allergic fungal sinusitis', 'Wegener granulomatosis', 'Cocaine-induced necrosis'],
    0,
    'Rhinocerebral mucormycosis: angioinvasive fungus (Mucor, Rhizopus), affects immunocompromised (DKA, neutropenia). Features: facial pain, black necrotic eschar on palate/turbinates, bloody nasal discharge, cranial nerve involvement. Emergency: high mortality. Treatment: surgical debridement + IV amphotericin B. Broad, non-septate hyphae with right-angle branching.',
    '鼻脑型毛霉菌病：血管侵袭性真菌，影响免疫低下者（DKA、中性粒细胞减少）。特征：面部疼痛、黑色坏死焦痂、血性鼻分泌物。治疗：手术清创+IV两性霉素B。',
    'Mucormicosis rinocerebral: diabetes + necrosis nasal negra.',
    'Medium'
))

questions.append(qq(1306, 'step3', 'Emergency Medicine',
    'A patient on lithium for bipolar disorder develops confusion, coarse tremor, and hyperreflexia. Lithium level is 2.8 mEq/L (toxic). ECG shows T-wave flattening. What is the most important management?',
    ['IV normal saline hydration + consider hemodialysis if level >2.5 or severe symptoms', 'Activated charcoal', 'Gastric lavage', 'Potassium supplementation', 'Discontinue lithium and observe'],
    0,
    'Lithium toxicity: narrow therapeutic index (0.6-1.2 mEq/L). Features: GI (nausea/vomiting), neuro (tremor, confusion, hyperreflexia, seizures), renal (nephrogenic DI), ECG changes. Treatment: (1) discontinue lithium, (2) aggressive IV normal saline (volume repletion increases Li clearance), (3) hemodialysis if level >2.5, severe symptoms, or renal failure.',
    '锂中毒：窄治疗窗（0.6-1.2）。特征：胃肠道、神经系统、肾性尿崩、ECG改变。治疗：停锂、积极NS补液（增加锂清除）、血液透析（>2.5或有严重症状/肾衰）。',
    'Toxicidad por litio: hidratacion IV vigorosa, hemodialisis si grave.',
    'Medium'
))

questions.append(qq(1307, 'step3', 'Emergency Medicine',
    'A 20-year-old college student presents with fever, headache, and altered mental status. LP shows elevated opening pressure, WBC 800 with lymphocytic predominance, normal glucose, elevated protein. What is the most likely diagnosis?',
    ['Viral meningitis/encephalitis (likely HSV)', 'Bacterial meningitis', 'Fungal meningitis', 'Tuberculous meningitis', 'Subarachnoid hemorrhage'],
    0,
    'Viral meningitis: lymphocytic predominance, normal glucose, moderately elevated protein. HSV encephalitis: temporal lobe involvement on MRI, treat with IV acyclovir immediately (don\'t wait for PCR). Bacterial meningitis: neutrophilic predominance, low glucose, high protein. TB/fungal: lymphocytic, very low glucose.',
    '病毒性脑膜炎：淋巴细胞为主、糖正常、蛋白中度升高。HSV脑炎：MRI颞叶受累，立即IV阿昔洛韦。细菌性脑膜炎：中性粒细胞为主、低糖、高蛋白。',
    'Meningitis viral: pleocitosis linfocitica, glucosa normal. Aciclovir si HSV.',
    'Medium'
))

questions.append(qq(1308, 'step3', 'Emergency Medicine',
    'A patient develops sudden dyspnea and pleuritic chest pain. CTA shows multiple bilateral pulmonary emboli. BP is 85/50, HR 130, and patient appears confused. What is the next step?',
    ['Immediate thrombolysis (tPA) for massive PE with shock', 'Unfractionated heparin only', 'DOAC therapy', 'IVC filter', 'Catheter-directed thrombolysis'],
    0,
    'Massive PE: sustained hypotension (SBP <90 ≥15 min or requiring vasopressors). Treatment: systemic thrombolysis (tPA) unless contraindicated. Submassive PE: normotensive + RV dysfunction → anticoagulation (some benefit from catheter-directed lysis). Low-risk PE: anticoagulation, early discharge (Hestia/PESI criteria).',
    '大面积PE：持续低血压（SBP<90持续≥15分钟或需血管活性药物）。治疗：全身溶栓（tPA）。次大面积PE：抗凝。低危PE：抗凝、早期出院。',
    'TEP masivo: hipotension → trombólisis sistémica inmediata.',
    'Medium'
))

questions.append(qq(1309, 'step3', 'Emergency Medicine',
    'A 60-year-old develops acute confusion. Labs: Na 118 (low), serum osmolality 250 (low), urine osmolality 600 (inappropriately high), urine Na 80. What is the most likely cause?',
    ['SIADH', 'Psychogenic polydipsia', 'Adrenal insufficiency', 'Hypothyroidism', 'Diuretic use'],
    0,
    'SIADH: euvolemic hyponatremia. Labs: low serum osmolality, inappropriately concentrated urine (>100, often > serum), urine Na >40. Causes: CNS (stroke, infection), pulmonary (SCLC, pneumonia), drugs (SSRIs, carbamazepine, cyclophosphamide), pain/nausea. Treatment: fluid restriction (<800-1000 mL/day), salt tablets, vaptans (tolvaptan) if refractory. Correct slowly: ≤8 mEq/L/24h to avoid osmotic demyelination.',
    'SIADH：等容量低钠血症。实验室：低血浆渗透压、尿不适当浓缩（>100）、尿钠>40。原因：CNS、肺（SCLC）、药物。治疗：限液、盐片。缓慢纠正。',
    'SIADH: hiponatremia euvolémica, orina concentrada inapropiadamente.',
    'Hard'
))

questions.append(qq(1310, 'step3', 'Emergency Medicine',
    'A patient on a ventilator in the ICU develops sudden desaturation, hypotension, and a "mill-wheel" murmur. What is the most likely diagnosis?',
    ['Venous air embolism', 'Tension pneumothorax', 'Pulmonary embolism', 'Endotracheal tube obstruction', 'Cardiac tamponade'],
    0,
    'Venous air embolism: air enters venous circulation (central line placement/removal, neurosurgery sitting position, penetrating trauma). Features: sudden dyspnea, hypotension, mill-wheel murmur (air in RV). Management: place patient in left lateral decubitus + Trendelenburg (traps air in RV apex away from pulmonary outflow), 100% FiO2, aspirate air from central line.',
    '静脉空气栓塞：空气进入静脉循环（中心静脉置管、神经外科坐位、穿透伤）。特征：突发呼吸困难、低血压、水轮样杂音。管理：左侧卧位+头低脚高、100%FiO2、抽吸空气。',
    'Embolismo aereo: soplo de rueda de molino, posicion decubito lateral izq.',
    'Medium'
))

print(f"\n\nScript complete. Questions ready for insertion.")
print(f"Total questions defined: {len(questions)}")
