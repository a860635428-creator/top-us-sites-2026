"""Combine all question generators and output final 200 questions as TypeScript."""
import sys
sys.path.insert(0, 'scripts')
from gen_200_new import qq, questions
exec(open('scripts/gen_200_remaining.py', encoding='utf-8').read())

# Add 18 more Step2 questions (IDs 1311-1328)
extra = [
    (1311, 'step2', 'Internal Medicine', "A patient on chronic PPIs develops watery diarrhea. Colonoscopy normal, biopsies show lymphocytic infiltration. What is this?",
     ["Microscopic colitis", "Crohn disease", "Celiac disease", "Irritable bowel syndrome", "Lactose intolerance"], 0,
     "Microscopic colitis: chronic watery diarrhea with normal colonoscopy. Biopsy: lymphocytic (>20 IEL/100 enterocytes) or collagenous (>10um subepithelial collagen band). Associated with PPIs, NSAIDs, SSRIs. Treatment: stop offending drug, budesonide.", "显微镜下结肠炎：慢性水样腹泻、结肠镜正常。活检：淋巴细胞性或胶原性。与PPI、NSAID、SSRI相关。治疗：停用致病药物、布地奈德。", "Colitis microscopica: diarrea cronica, colonoscopia normal.", "Medium"),
    (1312, 'step2', 'Internal Medicine', "A 45-year-old woman has TSH 8.5, low free T4, positive anti-TPO. What is the treatment?",
     ["Levothyroxine", "Methimazole", "Radioactive iodine", "Thyroidectomy", "Observation"], 0,
     "Hashimoto thyroiditis: autoimmune hypothyroidism, anti-TPO/anti-Tg+. Most common cause of hypothyroidism in iodine-sufficient areas. Treatment: levothyroxine (1.6 mcg/kg/day). Target TSH 0.5-2.5.", "桥本甲状腺炎：自身免疫性甲减，抗TPO+。碘充足地区甲减最常见原因。治疗：左甲状腺素（1.6mcg/kg/天）。目标TSH 0.5-2.5。", "Hashimoto: autoinmune, levotiroxina.", "Medium"),
    (1313, 'step2', 'Internal Medicine', "A cirrhosis patient develops ascites. What is first-line treatment?",
     ["Sodium restriction (<2g/day) + spironolactone + furosemide", "Therapeutic paracentesis only", "TIPS", "Fluid restriction", "Albumin infusion"], 0,
     "Ascites: sodium restriction + spironolactone 100mg + furosemide 40mg (100:40 ratio). Goal weight loss 0.5 kg/day. Refractory: serial LVP + albumin. Avoid NSAIDs, ACEi.", "腹水：限钠+螺内酯100mg+呋塞米40mg（100:40比例）。目标体重减轻0.5kg/天。难治性：序贯LVP+白蛋白。避免NSAIDs、ACEi。", "Ascitis: restriccion Na + espironolactona + furosemida.", "Medium"),
    (1314, 'step2', 'Internal Medicine', "Community-acquired pneumonia not improving after 72h antibiotics. CXR shows new effusion. What next?",
     ["Thoracentesis (pH, Gram stain, culture, LDH, glucose)", "Change antibiotics only", "Chest CT", "Bronchoscopy", "Continue current antibiotics"], 0,
     "Parapneumonic effusion: if pH <7.2, glucose <60, LDH high -> chest tube. Empyema: frank pus -> chest tube. Loculated -> fibrinolytics or VATS.", "类肺炎旁积液：pH<7.2、糖<60、LDH高→胸腔引流管。明确脓胸→引流管。包裹性→纤溶剂或VATS。", "Derrame paraneumonico: toracocentesis diagnostica.", "Medium"),
    (1315, 'step2', 'Internal Medicine', "A 25F starting isotretinoin for severe acne. What mandatory monitoring is required?",
     ["Monthly pregnancy tests + LFTs + lipids", "CBC only", "Renal function", "ECG", "Audiometry"], 0,
     "Isotretinoin: Category X teratogen. iPledge: 2 negative pregnancy tests before, monthly during, 2 forms of contraception. Monitor LFTs, lipids.", "异维A酸：X类致畸物。iPledge：用药前2次阴性妊娠试验、治疗中每月、2种避孕。监测肝功、血脂。", "Isotretinoina: pruebas embarazo mensuales.", "Medium"),
    (1316, 'step2', 'Internal Medicine', "HIV patient on HAART, CD4=250. Which prophylaxis is indicated?",
     ["No prophylaxis (PCP starts at CD4<200)", "TMP-SMX", "Azithromycin", "Fluconazole", "Valganciclovir"], 0,
     "PCP prophylaxis: CD4<200. Toxoplasmosis: CD4<100+IgG+. MAC: CD4<50. CD4 250 is above all thresholds. Monitor every 3-6 months.", "PCP预防：CD4<200。弓形虫：CD4<100+IgG+。MAC：CD4<50。CD4 250高于所有阈值。每3-6个月监测。", "CD4 250: sin profilaxis aun.", "Medium"),
    (1317, 'step2', 'Surgery', "An incarcerated inguinal hernia cannot be reduced. No strangulation signs. Management?",
     ["Urgent surgical repair (within hours)", "Elective repair in weeks", "Manual reduction under sedation", "Observation", "Hernia truss"], 0,
     "Incarcerated: cannot reduce, blood supply intact -> urgent surgery. Strangulated: compromised blood supply -> surgical emergency.", "嵌顿疝：不能还纳但血供完整→紧急手术。绞窄疝：血供受损→外科急症。", "Hernia incarcerada: cirugia urgente.", "Medium"),
    (1318, 'step2', 'Surgery', "Post-cholecystectomy: fever, jaundice, RUQ pain day 5. ERCP shows retained CBD stone. Management?",
     ["ERCP + sphincterotomy + stone extraction", "Repeat open cholecystectomy", "Observation", "Ursodeoxycholic acid", "PTC"], 0,
     "Retained CBD stone: ERCP first-line. Cholangitis triad (fever, jaundice, RUQ pain) -> urgent ERCP.", "残余CBD结石：ERCP一线。胆管炎三联征→紧急ERCP。", "Calculo retenido: CPRE + esfinterotomia.", "Medium"),
    (1319, 'step2', 'Pediatrics', "Term newborn, day 3, bili 18 mg/dL, unconjugated. Well, breastfed. Next step?",
     ["Phototherapy per Bhutani nomogram", "Exchange transfusion", "Switch to formula", "IVIG", "Phenobarbital"], 0,
     "Neonatal jaundice: treat per Bhutani nomogram (age in hours, GA, risk factors). Phototherapy converts bilirubin to water-soluble isomers.", "新生儿黄疸：按Bhutani列线图治疗。光疗将胆红素转化为水溶性异构体。", "Ictericia: fototerapia segun nomograma.", "Medium"),
    (1320, 'step2', 'Pediatrics', "6-month-old ex-28wk preemie: spastic diplegia, hyperreflexia, periventricular leukomalacia on MRI.",
     ["Cerebral palsy (spastic diplegic)", "Duchenne MD", "SMA", "Spina bifida", "Transverse myelitis"], 0,
     "Cerebral palsy: non-progressive motor disorder. Spastic diplegia: PVL in preterm -> legs > arms.", "脑瘫：非进行性运动障碍。痉挛性双瘫：早产儿PVL→下肢>上肢。", "Paralisis cerebral diplejica: PVL.", "Medium"),
    (1321, 'step2', 'Internal Medicine', "S. aureus bacteremia, persistent BCx despite vancomycin. TTE negative. Next step?",
     ["Transesophageal echo (TEE)", "Add gentamicin", "Change to daptomycin", "Repeat BCx only", "Add rifampin"], 0,
     "S. aureus bacteremia: TEE for all (TTE sensitivity ~60%). Persistent BCx -> suspect IE, metastatic infection.", "金葡菌菌血症：所有患者需TEE。持续BCx→怀疑IE。", "Bacteriemia S. aureus: ETE obligatorio.", "Medium"),
    (1322, 'step2', 'Internal Medicine', "Recurrent miscarriages, prolonged PTT not correcting with mixing. Diagnosis?",
     ["Antiphospholipid syndrome (lupus anticoagulant)", "Hemophilia A", "Hemophilia B", "Vitamin K deficiency", "DIC"], 0,
     "Lupus anticoagulant: antiphospholipid Ab, prolonged PTT with NO mixing correction. Pro-thrombotic (not bleeding). APS: LA+anti-cardiolipin+anti-beta2GPI+clinical thrombosis/pregnancy morbidity.", "狼疮抗凝物：抗磷脂抗体、PTT延长混合不纠正。促血栓（非出血）。APS需LA+抗心磷脂+抗β2GPI+临床。", "Anticoagulante lupico: PTT no corrige.", "Hard"),
    (1323, 'step2', 'Internal Medicine', "HTN at age 25, hypokalemia, metabolic alkalosis, low renin, high aldosterone. Diagnosis?",
     ["Primary hyperaldosteronism (Conn)", "Renal artery stenosis", "Cushing", "Liddle syndrome", "Reninoma"], 0,
     "Primary aldosteronism: low renin, high aldo, ARR >20-30. Most common: bilateral hyperplasia -> spironolactone. Adenoma -> surgery.", "原醛：低肾素、高醛固酮、ARR>20-30。最常见：双侧增生→螺内酯。腺瘤→手术。", "Hiperaldosteronismo: renina baja, aldo alta.", "Medium"),
    (1324, 'step2', 'Internal Medicine', "Patient on MAOI eats aged cheese -> severe HTN 220/120, headache. Cause?",
     ["Tyramine reaction", "Serotonin syndrome", "Neuroleptic malignant syndrome", "Pheochromocytoma", "Cocaine"], 0,
     "MAOI+tyramine -> massive NE release -> hypertensive crisis. Avoid: aged cheese, cured meats, draft beer, soy sauce. Tx: phentolamine or nitroprusside.", "MAOI+酪胺→大量NE释放→高血压危象。避免：陈年奶酪、腌肉、生啤。治疗：酚妥拉明或硝普钠。", "IMAO+tiramina -> crisis hipertensiva.", "Medium"),
    (1325, 'step2', 'Neurology', "Thunderclap headache during sex, CT/LP normal, MRA shows segmental arterial narrowing.",
     ["Reversible cerebral vasoconstriction (RCVS)", "SAH", "Cervical artery dissection", "Migraine", "Cluster headache"], 0,
     "RCVS: thunderclap headache + segmental vasoconstriction, resolves in weeks. Triggers: sex, exertion, SSRIs, postpartum. Normal LP.", "RCVS：雷击样头痛+节段性血管收缩。诱因：性、用力、SSRI、产后。LP正常。", "RCVS: vasoconstriccion cerebral reversible.", "Medium"),
    (1326, 'step2', 'Neurology', "55yo: cognitive decline, visual hallucinations, parkinsonism, fluctuating attention. Diagnosis?",
     ["Dementia with Lewy bodies", "Alzheimer", "Frontotemporal dementia", "PD dementia", "Vascular dementia"], 0,
     "DLB: fluctuating cognition, visual hallucinations, REM sleep behavior disorder, parkinsonism. Alpha-synuclein Lewy bodies. Neuroleptic sensitivity.", "DLB：波动性认知、视幻觉、REM睡眠行为障碍、帕金森症。α-突触核蛋白路易小体。神经安定药敏感。", "DLB: alucinaciones visuales, fluctuacion, parkinsonismo.", "Medium"),
    (1327, 'step2', 'Surgery', "Mechanical mitral valve on warfarin needs appendectomy. INR 3.2. Management?",
     ["Hold warfarin, bridge with heparin, restart post-op", "Proceed on warfarin", "Reverse with vitamin K", "Cancel surgery", "FFP only"], 0,
     "Mechanical mitral valve: highest TE risk. Stop warfarin 5d pre-op, bridge UFH/LMWH. Restart 12-24h post-op. Urgent: 4F-PCC+vitamin K.", "机械二尖瓣：TE风险最高。术前5天停华法林、UFH桥接。术后12-24h重启。急诊：4F-PCC+VitK。", "Valvula mitral: puentear con heparina.", "Hard"),
    (1328, 'step2', 'Internal Medicine', "Severe COPD with resting hypoxia, on home O2. What reduces mortality?",
     ["Long-term oxygen therapy (>15h/day)", "ICS alone", "Theophylline", "N-acetylcysteine", "Roflumilast"], 0,
     "LTOT: only intervention proven to reduce mortality in COPD with resting hypoxemia (PaO2 <=55 or SpO2 <=88%). Use >=15h/day.", "LTOT：唯一证明可降低重度COPD伴静息低氧死亡率的干预措施。PaO2≤55或SpO2≤88%。≥15h/天。", "Oxigenoterapia: reduce mortalidad en EPOC hipoxemico.", "Medium"),
]

for q_tuple in extra:
    questions.append(qq(*q_tuple))

output_lines = []
for q in questions:
    opts_str = str(q['options'])
    output_lines.append(f"  {{\n    id: {q['id']}, step: '{q['step']}', subject: '{q['subject']}',\n    question: \"{q['question']}\",\n    options: {opts_str},\n    correctAnswer: {q['correctAnswer']},\n    explanationEn: \"{q['explanationEn']}\",\n    explanationZh: \"{q['explanationZh']}\",\n    explanationEs: \"{q['explanationEs']}\",\n    difficulty: '{q['difficulty']}'\n  }},")

outpath = 'scripts/new_200_output.ts'
with open(outpath, 'w', encoding='utf-8') as f:
    f.write('\n'.join(output_lines))

steps = {}
for q in questions:
    steps[q['step']] = steps.get(q['step'], 0) + 1
print(f"FINAL: {len(questions)} questions")
for s, c in sorted(steps.items()):
    print(f"  {s}: {c}")
print(f"ID: {questions[0]['id']} - {questions[-1]['id']}")
print(f"Output: {outpath}")
