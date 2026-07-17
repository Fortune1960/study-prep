const EASY_QUESTIONS = [

{
    question: "Which lipoprotein is commonly referred to as 'bad cholesterol'?",
    answers: [
        { text: "HDL", correct: false },
        { text: "LDL", correct: true },
        { text: "VLDL", correct: false },
        { text: "Chylomicron", correct: false }
    ]
},

{
    question: "Which lipoprotein is known as 'good cholesterol'?",
    answers: [
        { text: "LDL", correct: false },
        { text: "HDL", correct: true },
        { text: "IDL", correct: false },
        { text: "VLDL", correct: false }
    ]
},

{
    question: "The primary function of HDL is to:",
    answers: [
        { text: "Transport cholesterol from tissues to the liver", correct: true },
        { text: "Transport triglycerides to muscles", correct: false },
        { text: "Store cholesterol in adipose tissue", correct: false },
        { text: "Digest dietary fats", correct: false }
    ]
},

{
    question: "LDL mainly transports:",
    answers: [
        { text: "Triglycerides", correct: false },
        { text: "Cholesterol to peripheral tissues", correct: true },
        { text: "Proteins", correct: false },
        { text: "Glucose", correct: false }
    ]
},

{
    question: "The simplest glycerophospholipid is:",
    answers: [
        { text: "Phosphatidylcholine", correct: false },
        { text: "Phosphatidic acid", correct: true },
        { text: "Cardiolipin", correct: false },
        { text: "Sphingomyelin", correct: false }
    ]
},

{
    question: "Lipids are mainly composed of:",
    answers: [
        { text: "Carbon, hydrogen and oxygen", correct: true },
        { text: "Carbon, nitrogen and sulfur", correct: false },
        { text: "Calcium and phosphorus", correct: false },
        { text: "Iron and iodine", correct: false }
    ]
},

{
    question: "The major storage form of fat in the body is:",
    answers: [
        { text: "Phospholipids", correct: false },
        { text: "Triglycerides", correct: true },
        { text: "Cholesterol", correct: false },
        { text: "Steroids", correct: false }
    ]
},

{
    question: "Fat digestion mainly occurs in the:",
    answers: [
        { text: "Mouth", correct: false },
        { text: "Stomach", correct: false },
        { text: "Small intestine", correct: true },
        { text: "Large intestine", correct: false }
    ]
},

{
    question: "Which organ produces bile?",
    answers: [
        { text: "Pancreas", correct: false },
        { text: "Liver", correct: true },
        { text: "Gallbladder", correct: false },
        { text: "Kidney", correct: false }
    ]
},

{
    question: "Bile salts primarily help in:",
    answers: [
        { text: "Protein digestion", correct: false },
        { text: "Emulsification of fats", correct: true },
        { text: "Glucose absorption", correct: false },
        { text: "Vitamin synthesis", correct: false }
    ]
},

{
    question: "Which enzyme digests triglycerides?",
    answers: [
        { text: "Amylase", correct: false },
        { text: "Lipase", correct: true },
        { text: "Pepsin", correct: false },
        { text: "Trypsin", correct: false }
    ]
},

{
    question: "The end products of triglyceride digestion are:",
    answers: [
        { text: "Glucose and amino acids", correct: false },
        { text: "Fatty acids and glycerol", correct: true },
        { text: "Peptides", correct: false },
        { text: "Lactose", correct: false }
    ]
},

{
    question: "Which lipoprotein transports dietary lipids from the intestine?",
    answers: [
        { text: "HDL", correct: false },
        { text: "LDL", correct: false },
        { text: "Chylomicrons", correct: true },
        { text: "IDL", correct: false }
    ]
},

{
    question: "Saturated fatty acids contain:",
    answers: [
        { text: "One double bond", correct: false },
        { text: "Two double bonds", correct: false },
        { text: "No double bonds", correct: true },
        { text: "Three double bonds", correct: false }
    ]
},

{
    question: "Unsaturated fatty acids contain:",
    answers: [
        { text: "No double bonds", correct: false },
        { text: "One or more double bonds", correct: true },
        { text: "Only triple bonds", correct: false },
        { text: "No carbon atoms", correct: false }
    ]
},

{
    question: "Palmitic acid is an example of a:",
    answers: [
        { text: "Unsaturated fatty acid", correct: false },
        { text: "Saturated fatty acid", correct: true },
        { text: "Essential fatty acid", correct: false },
        { text: "Omega-3 fatty acid", correct: false }
    ]
},

{
    question: "Beta-oxidation occurs mainly in the:",
    answers: [
        { text: "Nucleus", correct: false },
        { text: "Mitochondria", correct: true },
        { text: "Golgi apparatus", correct: false },
        { text: "Ribosomes", correct: false }
    ]
},

{
    question: "The major product of beta-oxidation is:",
    answers: [
        { text: "Acetyl-CoA", correct: true },
        { text: "Glucose", correct: false },
        { text: "Lactate", correct: false },
        { text: "Pyruvate", correct: false }
    ]
},

{
    question: "Each cycle of beta-oxidation removes:",
    answers: [
        { text: "One carbon atom", correct: false },
        { text: "Two carbon atoms", correct: true },
        { text: "Three carbon atoms", correct: false },
        { text: "Four carbon atoms", correct: false }
    ]
},

{
    question: "Steatorrhea is characterized by:",
    answers: [
        { text: "Blood in urine", correct: false },
        { text: "Excess fat in feces", correct: true },
        { text: "Sugar in urine", correct: false },
        { text: "Protein in urine", correct: false }
    ]
},

{
    question: "The major energy reserve of the human body is:",
    answers: [
        { text: "Protein", correct: false },
        { text: "Lipids", correct: true },
        { text: "Minerals", correct: false },
        { text: "Vitamins", correct: false }
    ]
},

{
    question: "Which vitamin is NOT fat-soluble?",
    answers: [
        { text: "Vitamin A", correct: false },
        { text: "Vitamin C", correct: true },
        { text: "Vitamin D", correct: false },
        { text: "Vitamin E", correct: false }
    ]
},

{
    question: "Fat-soluble vitamins include:",
    answers: [
        { text: "A, D, E and K", correct: true },
        { text: "B, C and D", correct: false },
        { text: "A, B and C", correct: false },
        { text: "B, C, E and K", correct: false }
    ]
},

{
    question: "Cholesterol belongs to which class of lipids?",
    answers: [
        { text: "Sterols", correct: true },
        { text: "Triglycerides", correct: false },
        { text: "Phospholipids", correct: false },
        { text: "Waxes", correct: false }
    ]
},

{
    question: "The primary function of phospholipids is to:",
    answers: [
        { text: "Store energy", correct: false },
        { text: "Form cell membranes", correct: true },
        { text: "Digest proteins", correct: false },
        { text: "Produce glucose", correct: false }
    ]
},

{
    question: "Which lipoprotein is known as 'good cholesterol'?",
    answers: [
        { text: "LDL", correct: false },
        { text: "HDL", correct: true },
        { text: "VLDL", correct: false },
        { text: "Chylomicron", correct: false }
    ]
},

{
    question: "Which lipoprotein is commonly referred to as 'bad cholesterol'?",
    answers: [
        { text: "HDL", correct: false },
        { text: "LDL", correct: true },
        { text: "IDL", correct: false },
        { text: "Chylomicron", correct: false }
    ]
},

{
    question: "Fat digestion mainly occurs in the:",
    answers: [
        { text: "Mouth", correct: false },
        { text: "Stomach", correct: false },
        { text: "Small intestine", correct: true },
        { text: "Large intestine", correct: false }
    ]
},

{
    question: "The major site of fatty acid oxidation is the:",
    answers: [
        { text: "Cytoplasm", correct: false },
        { text: "Mitochondria", correct: true },
        { text: "Nucleus", correct: false },
        { text: "Golgi apparatus", correct: false }
    ]
},

{
    question: "Which vitamin is synthesized from cholesterol in the skin?",
    answers: [
        { text: "Vitamin A", correct: false },
        { text: "Vitamin C", correct: false },
        { text: "Vitamin D", correct: true },
        { text: "Vitamin K", correct: false }
    ]
},

{
    question: "Triglycerides are composed of:",
    answers: [
        { text: "One glycerol and three fatty acids", correct: true },
        { text: "Three glycerols and one fatty acid", correct: false },
        { text: "Two glycerols and two fatty acids", correct: false },
        { text: "Only fatty acids", correct: false }
    ]
},

{
    question: "Which organ stores excess fat in the body?",
    answers: [
        { text: "Liver", correct: false },
        { text: "Adipose tissue", correct: true },
        { text: "Heart", correct: false },
        { text: "Kidney", correct: false }
    ]
},

{
    question: "Which process converts fatty acids into acetyl-CoA?",
    answers: [
        { text: "Glycolysis", correct: false },
        { text: "Beta-oxidation", correct: true },
        { text: "Gluconeogenesis", correct: false },
        { text: "Lipogenesis", correct: false }
    ]
},

{
    question: "Which lipoprotein transports dietary lipids from the intestine?",
    answers: [
        { text: "HDL", correct: false },
        { text: "LDL", correct: false },
        { text: "Chylomicrons", correct: true },
        { text: "VLDL", correct: false }
    ]
},

{
    question: "The smallest lipoprotein is:",
    answers: [
        { text: "HDL", correct: true },
        { text: "LDL", correct: false },
        { text: "VLDL", correct: false },
        { text: "Chylomicron", correct: false }
    ]
},

{
    question: "Which fatty acid is considered essential?",
    answers: [
        { text: "Palmitic acid", correct: false },
        { text: "Linoleic acid", correct: true },
        { text: "Stearic acid", correct: false },
        { text: "Butyric acid", correct: false }
    ]
},

{
    question: "The process of synthesizing fatty acids is called:",
    answers: [
        { text: "Lipolysis", correct: false },
        { text: "Lipogenesis", correct: true },
        { text: "Beta-oxidation", correct: false },
        { text: "Ketogenesis", correct: false }
    ]
},

{
    question: "Which hormone inhibits lipolysis?",
    answers: [
        { text: "Glucagon", correct: false },
        { text: "Insulin", correct: true },
        { text: "Epinephrine", correct: false },
        { text: "Cortisol", correct: false }
    ]
},

{
    question: "Which fatty acid contains no double bonds?",
    answers: [
        { text: "Oleic acid", correct: false },
        { text: "Linoleic acid", correct: false },
        { text: "Palmitic acid", correct: true },
        { text: "Linolenic acid", correct: false }
    ]
},

{
    question: "Steatorrhea refers to:",
    answers: [
        { text: "Excess sugar in urine", correct: false },
        { text: "Excess fat in feces", correct: true },
        { text: "Blood in urine", correct: false },
        { text: "Protein in urine", correct: false }
    ]
},

{
    question: "Which lipoprotein carries endogenous triglycerides from the liver?",
    answers: [
        { text: "HDL", correct: false },
        { text: "VLDL", correct: true },
        { text: "LDL", correct: false },
        { text: "Chylomicron", correct: false }
    ]
},

{
    question: "The major storage form of lipid in the body is:",
    answers: [
        { text: "Phospholipid", correct: false },
        { text: "Triglyceride", correct: true },
        { text: "Cholesterol", correct: false },
        { text: "Steroid", correct: false }
    ]
},

{
    question: "Which enzyme hydrolyzes triglycerides in adipose tissue?",
    answers: [
        { text: "Pancreatic lipase", correct: false },
        { text: "Hormone-sensitive lipase", correct: true },
        { text: "Pepsin", correct: false },
        { text: "Trypsin", correct: false }
    ]
},

{
    question: "Fatty acids are activated by forming:",
    answers: [
        { text: "Fatty acyl-CoA", correct: true },
        { text: "Acetyl phosphate", correct: false },
        { text: "Pyruvate", correct: false },
        { text: "Lactate", correct: false }
    ]
},

{
    question: "Which organ is the major site of ketone body formation?",
    answers: [
        { text: "Brain", correct: false },
        { text: "Liver", correct: true },
        { text: "Heart", correct: false },
        { text: "Kidney", correct: false }
    ]
},

{
    question: "Which ketone body is NOT produced in significant amounts?",
    answers: [
        { text: "Acetoacetate", correct: false },
        { text: "Beta-hydroxybutyrate", correct: false },
        { text: "Acetone", correct: false },
        { text: "Pyruvate", correct: true }
    ]
},

{
    question: "The transport of long-chain fatty acids into mitochondria requires:",
    answers: [
        { text: "Carnitine", correct: true },
        { text: "Biotin", correct: false },
        { text: "Coenzyme A", correct: false },
        { text: "Vitamin C", correct: false }
    ]
},

{
    question: "Excess LDL cholesterol increases the risk of:",
    answers: [
        { text: "Anemia", correct: false },
        { text: "Atherosclerosis", correct: true },
        { text: "Asthma", correct: false },
        { text: "Peptic ulcer", correct: false }
    ]
},

{
    question: "Which lipid is the precursor of steroid hormones?",
    answers: [
        { text: "Triglyceride", correct: false },
        { text: "Cholesterol", correct: true },
        { text: "Phospholipid", correct: false },
        { text: "Glycogen", correct: false }
    ]
},

{
    question: "The end product of complete oxidation of fatty acids is:",
    answers: [
        { text: "Lactate", correct: false },
        { text: "Carbon dioxide and water", correct: true },
        { text: "Pyruvate", correct: false },
        { text: "Glucose", correct: false }
    ]
}
];

const HARD_QUESTIONS = [

{
    question: "Which apolipoprotein is essential for the activation of lipoprotein lipase?",
    answers: [
        { text: "Apo A-I", correct: false },
        { text: "Apo B-48", correct: false },
        { text: "Apo C-II", correct: true },
        { text: "Apo E", correct: false }
    ]
},

{
    question: "The rate-limiting enzyme in cholesterol biosynthesis is:",
    answers: [
        { text: "Acetyl-CoA carboxylase", correct: false },
        { text: "HMG-CoA reductase", correct: true },
        { text: "Fatty acid synthase", correct: false },
        { text: "Hormone-sensitive lipase", correct: false }
    ]
},

{
    question: "Beta-oxidation of fatty acids occurs primarily in the:",
    answers: [
        { text: "Cytoplasm", correct: false },
        { text: "Mitochondrial matrix", correct: true },
        { text: "Nucleus", correct: false },
        { text: "Ribosome", correct: false }
    ]
},

{
    question: "Which enzyme catalyzes the first committed step in fatty acid synthesis?",
    answers: [
        { text: "Fatty acid synthase", correct: false },
        { text: "Acetyl-CoA carboxylase", correct: true },
        { text: "HMG-CoA synthase", correct: false },
        { text: "Malate dehydrogenase", correct: false }
    ]
},

{
    question: "The immediate product of beta-oxidation is:",
    answers: [
        { text: "Pyruvate", correct: false },
        { text: "Acetyl-CoA", correct: true },
        { text: "Oxaloacetate", correct: false },
        { text: "Lactate", correct: false }
    ]
},

{
    question: "Which lipoprotein transports cholesterol from peripheral tissues back to the liver?",
    answers: [
        { text: "LDL", correct: false },
        { text: "HDL", correct: true },
        { text: "VLDL", correct: false },
        { text: "Chylomicron", correct: false }
    ]
},

{
    question: "The transport of long-chain fatty acids into mitochondria requires:",
    answers: [
        { text: "Carnitine", correct: true },
        { text: "Biotin", correct: false },
        { text: "Coenzyme Q", correct: false },
        { text: "FAD", correct: false }
    ]
},

{
    question: "The enzyme that hydrolyzes stored triglycerides in adipose tissue is:",
    answers: [
        { text: "Pancreatic lipase", correct: false },
        { text: "Hormone-sensitive lipase", correct: true },
        { text: "Phospholipase A2", correct: false },
        { text: "Lecithinase", correct: false }
    ]
},

{
    question: "Palmitic acid contains how many carbon atoms?",
    answers: [
        { text: "14", correct: false },
        { text: "16", correct: true },
        { text: "18", correct: false },
        { text: "20", correct: false }
    ]
},

{
    question: "How many acetyl-CoA molecules are produced from one molecule of palmitic acid?",
    answers: [
        { text: "6", correct: false },
        { text: "7", correct: false },
        { text: "8", correct: true },
        { text: "9", correct: false }
    ]
},

{
    question: "Which ketone body cannot be utilized for energy by the liver?",
    answers: [
        { text: "Acetoacetate", correct: false },
        { text: "Beta-hydroxybutyrate", correct: false },
        { text: "Acetone", correct: false },
        { text: "All of the above", correct: true }
    ]
},

{
    question: "Which enzyme is inhibited by statin drugs?",
    answers: [
        { text: "Acetyl-CoA carboxylase", correct: false },
        { text: "HMG-CoA reductase", correct: true },
        { text: "Fatty acid synthase", correct: false },
        { text: "Hormone-sensitive lipase", correct: false }
    ]
},

{
    question: "Which lipoprotein has the highest triglyceride content?",
    answers: [
        { text: "HDL", correct: false },
        { text: "LDL", correct: false },
        { text: "Chylomicron", correct: true },
        { text: "IDL", correct: false }
    ]
},

{
    question: "The synthesis of ketone bodies occurs in the:",
    answers: [
        { text: "Brain", correct: false },
        { text: "Liver mitochondria", correct: true },
        { text: "Kidney cortex", correct: false },
        { text: "Heart muscle", correct: false }
    ]
},

{
    question: "Which hormone stimulates lipolysis?",
    answers: [
        { text: "Insulin", correct: false },
        { text: "Glucagon", correct: true },
        { text: "Thyroxine", correct: false },
        { text: "Growth hormone", correct: false }
    ]
},

{
    question: "Malonyl-CoA inhibits:",
    answers: [
        { text: "Hormone-sensitive lipase", correct: false },
        { text: "Carnitine palmitoyltransferase I", correct: true },
        { text: "Fatty acid synthase", correct: false },
        { text: "HMG-CoA reductase", correct: false }
    ]
},

{
    question: "Which enzyme cleaves HMG-CoA during ketogenesis?",
    answers: [
        { text: "HMG-CoA reductase", correct: false },
        { text: "HMG-CoA lyase", correct: true },
        { text: "Acetyl-CoA synthetase", correct: false },
        { text: "Thiokinase", correct: false }
    ]
},

{
    question: "The essential omega-3 fatty acid is:",
    answers: [
        { text: "Linoleic acid", correct: false },
        { text: "Alpha-linolenic acid", correct: true },
        { text: "Palmitic acid", correct: false },
        { text: "Stearic acid", correct: false }
    ]
},

{
    question: "Phosphatidic acid is the precursor of:",
    answers: [
        { text: "Glycerophospholipids", correct: true },
        { text: "Glucose", correct: false },
        { text: "Purines", correct: false },
        { text: "Hemoglobin", correct: false }
    ]
},

{
    question: "Which enzyme digests triglycerides in the small intestine?",
    answers: [
        { text: "Lingual lipase", correct: false },
        { text: "Pancreatic lipase", correct: true },
        { text: "Pepsin", correct: false },
        { text: "Trypsin", correct: false }
    ]
},

{
    question: "The primary function of bile salts is to:",
    answers: [
        { text: "Digest proteins", correct: false },
        { text: "Emulsify fats", correct: true },
        { text: "Hydrolyze starch", correct: false },
        { text: "Activate pepsin", correct: false }
    ]
},

{
    question: "The main source of cholesterol in the body is:",
    answers: [
        { text: "Diet only", correct: false },
        { text: "Liver synthesis", correct: true },
        { text: "Kidneys", correct: false },
        { text: "Pancreas", correct: false }
    ]
},

{
    question: "Which coenzyme is required for fatty acid synthesis?",
    answers: [
        { text: "Biotin", correct: true },
        { text: "Vitamin C", correct: false },
        { text: "Vitamin K", correct: false },
        { text: "Niacin", correct: false }
    ]
},

{
    question: "A deficiency of carnitine primarily affects:",
    answers: [
        { text: "Fatty acid oxidation", correct: true },
        { text: "Protein synthesis", correct: false },
        { text: "DNA replication", correct: false },
        { text: "Glycolysis", correct: false }
    ]
},

{
    question: "The major lipid stored in adipose tissue is:",
    answers: [
        { text: "Cholesterol", correct: false },
        { text: "Triglyceride", correct: true },
        { text: "Phospholipid", correct: false },
        { text: "Sphingomyelin", correct: false }
    ]
},

{
    question: "Which apolipoprotein is responsible for LDL binding to its receptor?",
    answers: [
        { text: "Apo A-I", correct: false },
        { text: "Apo B-100", correct: true },
        { text: "Apo C-II", correct: false },
        { text: "Apo E", correct: false }
    ]
},

{
    question: "The committed intermediate in fatty acid synthesis is:",
    answers: [
        { text: "Acetyl-CoA", correct: false },
        { text: "Malonyl-CoA", correct: true },
        { text: "Acetoacetate", correct: false },
        { text: "Citrate", correct: false }
    ]
},

{
    question: "Which enzyme converts citrate into acetyl-CoA in the cytosol?",
    answers: [
        { text: "ATP-citrate lyase", correct: true },
        { text: "Citrate synthase", correct: false },
        { text: "Malate dehydrogenase", correct: false },
        { text: "Pyruvate carboxylase", correct: false }
    ]
},

{
    question: "Fatty acid synthase requires which reducing equivalent?",
    answers: [
        { text: "NADH", correct: false },
        { text: "NADPH", correct: true },
        { text: "FADH₂", correct: false },
        { text: "FMN", correct: false }
    ]
},

{
    question: "The first enzyme of β-oxidation is:",
    answers: [
        { text: "Acyl-CoA dehydrogenase", correct: true },
        { text: "Enoyl-CoA hydratase", correct: false },
        { text: "Thiolase", correct: false },
        { text: "HMG-CoA lyase", correct: false }
    ]
},

{
    question: "Which enzyme hydrates trans-Δ²-enoyl-CoA during β-oxidation?",
    answers: [
        { text: "Enoyl-CoA hydratase", correct: true },
        { text: "Thiolase", correct: false },
        { text: "Acyl-CoA synthetase", correct: false },
        { text: "Acyl-CoA oxidase", correct: false }
    ]
},

{
    question: "The final step of β-oxidation is catalyzed by:",
    answers: [
        { text: "Thiolase", correct: true },
        { text: "Acyl-CoA dehydrogenase", correct: false },
        { text: "Enoyl-CoA hydratase", correct: false },
        { text: "Carnitine acyltransferase", correct: false }
    ]
},

{
    question: "Which lipoprotein is the precursor of LDL?",
    answers: [
        { text: "HDL", correct: false },
        { text: "VLDL", correct: true },
        { text: "Chylomicron", correct: false },
        { text: "Albumin", correct: false }
    ]
},

{
    question: "Which enzyme esterifies cholesterol in plasma?",
    answers: [
        { text: "LCAT", correct: true },
        { text: "ACAT", correct: false },
        { text: "Lipoprotein lipase", correct: false },
        { text: "Hormone-sensitive lipase", correct: false }
    ]
},

{
    question: "The enzyme ACAT primarily functions in:",
    answers: [
        { text: "Intracellular cholesterol esterification", correct: true },
        { text: "Bile salt synthesis", correct: false },
        { text: "Fatty acid oxidation", correct: false },
        { text: "Lipolysis", correct: false }
    ]
},

{
    question: "The major ketone body used by extrahepatic tissues is:",
    answers: [
        { text: "Acetone", correct: false },
        { text: "β-Hydroxybutyrate", correct: true },
        { text: "Acetoacetyl-CoA", correct: false },
        { text: "Malonyl-CoA", correct: false }
    ]
},

{
    question: "The brain significantly utilizes ketone bodies during:",
    answers: [
        { text: "Immediately after eating", correct: false },
        { text: "Prolonged fasting", correct: true },
        { text: "Exercise only", correct: false },
        { text: "Sleep", correct: false }
    ]
},

{
    question: "Excessive ketone body production results in:",
    answers: [
        { text: "Hypercholesterolemia", correct: false },
        { text: "Ketoacidosis", correct: true },
        { text: "Hyperlipidemia", correct: false },
        { text: "Jaundice", correct: false }
    ]
},

{
    question: "The enzyme responsible for phosphatidic acid synthesis is:",
    answers: [
        { text: "Glycerol-3-phosphate acyltransferase", correct: true },
        { text: "Lipoprotein lipase", correct: false },
        { text: "LCAT", correct: false },
        { text: "Hormone-sensitive lipase", correct: false }
    ]
},

{
    question: "Sphingomyelin is synthesized from:",
    answers: [
        { text: "Ceramide", correct: true },
        { text: "Glycerol", correct: false },
        { text: "Cholesterol", correct: false },
        { text: "Acetyl-CoA", correct: false }
    ]
},

{
    question: "The major phospholipid found in pulmonary surfactant is:",
    answers: [
        { text: "Phosphatidylcholine", correct: true },
        { text: "Phosphatidylserine", correct: false },
        { text: "Cardiolipin", correct: false },
        { text: "Sphingomyelin", correct: false }
    ]
},

{
    question: "Cardiolipin is found predominantly in the:",
    answers: [
        { text: "Outer mitochondrial membrane", correct: false },
        { text: "Inner mitochondrial membrane", correct: true },
        { text: "Plasma membrane", correct: false },
        { text: "Lysosome", correct: false }
    ]
},

{
    question: "Which enzyme is activated by insulin?",
    answers: [
        { text: "Acetyl-CoA carboxylase", correct: true },
        { text: "Hormone-sensitive lipase", correct: false },
        { text: "Carnitine palmitoyltransferase I", correct: false },
        { text: "Acyl-CoA dehydrogenase", correct: false }
    ]
},

{
    question: "The synthesis of bile acids occurs primarily in the:",
    answers: [
        { text: "Liver", correct: true },
        { text: "Gallbladder", correct: false },
        { text: "Pancreas", correct: false },
        { text: "Kidney", correct: false }
    ]
},

{
    question: "The precursor for all steroid hormones is:",
    answers: [
        { text: "Triglyceride", correct: false },
        { text: "Cholesterol", correct: true },
        { text: "Linoleic acid", correct: false },
        { text: "Acetyl-CoA", correct: false }
    ]
},

{
    question: "Which vitamin deficiency commonly impairs fat absorption?",
    answers: [
        { text: "Vitamin C", correct: false },
        { text: "Vitamin B₁₂", correct: false },
        { text: "Fat-soluble vitamins (A, D, E, K)", correct: true },
        { text: "Vitamin B₆", correct: false }
    ]
},

{
    question: "A deficiency of lipoprotein lipase most likely causes:",
    answers: [
        { text: "Hypoglycemia", correct: false },
        { text: "Hypertriglyceridemia", correct: true },
        { text: "Anemia", correct: false },
        { text: "Hypercalcemia", correct: false }
    ]
},

{
    question: "Which fatty acid is synthesized first by fatty acid synthase?",
    answers: [
        { text: "Oleic acid", correct: false },
        { text: "Palmitic acid", correct: true },
        { text: "Stearic acid", correct: false },
        { text: "Linoleic acid", correct: false }
    ]
},

{
    question: "The enzyme that converts acetyl-CoA into malonyl-CoA requires:",
    answers: [
        { text: "Biotin", correct: true },
        { text: "Vitamin C", correct: false },
        { text: "Vitamin B₁₂", correct: false },
        { text: "Folic acid", correct: false }
    ]
},

{
    question: "The primary biological function of HDL is:",
    answers: [
        { text: "Deliver triglycerides to tissues", correct: false },
        { text: "Reverse cholesterol transport", correct: true },
        { text: "Transport dietary fats", correct: false },
        { text: "Store cholesterol", correct: false }
    ]
}
];

const EXTREME_QUESTIONS = [

{
    question: "Which enzyme catalyzes the rate-limiting step of cholesterol synthesis?",
    answers: [
        { text: "HMG-CoA reductase", correct: true },
        { text: "Acetyl-CoA carboxylase", correct: false },
        { text: "Hormone-sensitive lipase", correct: false },
        { text: "Lipoprotein lipase", correct: false }
    ]
},

{
    question: "Statin drugs lower plasma cholesterol by inhibiting:",
    answers: [
        { text: "HMG-CoA reductase", correct: true },
        { text: "LCAT", correct: false },
        { text: "ACAT", correct: false },
        { text: "Carnitine palmitoyltransferase I", correct: false }
    ]
},

{
    question: "The rate-limiting enzyme of fatty acid synthesis requires which cofactor?",
    answers: [
        { text: "Biotin", correct: true },
        { text: "Vitamin B₁₂", correct: false },
        { text: "Vitamin C", correct: false },
        { text: "Pyridoxal phosphate", correct: false }
    ]
},

{
    question: "Malonyl-CoA inhibits which enzyme?",
    answers: [
        { text: "Carnitine palmitoyltransferase I", correct: true },
        { text: "Acetyl-CoA carboxylase", correct: false },
        { text: "Hormone-sensitive lipase", correct: false },
        { text: "LCAT", correct: false }
    ]
},

{
    question: "The major regulatory enzyme of β-oxidation is:",
    answers: [
        { text: "Carnitine palmitoyltransferase I", correct: true },
        { text: "Thiolase", correct: false },
        { text: "Acyl-CoA dehydrogenase", correct: false },
        { text: "Fatty acid synthase", correct: false }
    ]
},

{
    question: "Long-chain fatty acids enter the mitochondrial matrix via:",
    answers: [
        { text: "The carnitine shuttle", correct: true },
        { text: "Simple diffusion", correct: false },
        { text: "GLUT transporters", correct: false },
        { text: "Sodium-potassium pump", correct: false }
    ]
},

{
    question: "Which enzyme transfers fatty acyl groups to carnitine on the outer mitochondrial membrane?",
    answers: [
        { text: "Carnitine palmitoyltransferase I", correct: true },
        { text: "Carnitine palmitoyltransferase II", correct: false },
        { text: "Acyl-CoA synthetase", correct: false },
        { text: "Acyl-CoA oxidase", correct: false }
    ]
},

{
    question: "The final electron acceptor during β-oxidation is ultimately:",
    answers: [
        { text: "Oxygen", correct: true },
        { text: "Pyruvate", correct: false },
        { text: "Lactate", correct: false },
        { text: "Carbon dioxide", correct: false }
    ]
},

{
    question: "Which lipoprotein contains the highest percentage of cholesterol?",
    answers: [
        { text: "LDL", correct: true },
        { text: "HDL", correct: false },
        { text: "VLDL", correct: false },
        { text: "Chylomicron", correct: false }
    ]
},

{
    question: "Apo C-II is required for activation of:",
    answers: [
        { text: "Lipoprotein lipase", correct: true },
        { text: "LCAT", correct: false },
        { text: "ACAT", correct: false },
        { text: "Hormone-sensitive lipase", correct: false }
    ]
},

{
    question: "The enzyme lecithin-cholesterol acyltransferase (LCAT) is activated by:",
    answers: [
        { text: "Apo A-I", correct: true },
        { text: "Apo B-100", correct: false },
        { text: "Apo C-II", correct: false },
        { text: "Apo E", correct: false }
    ]
},

{
    question: "Reverse cholesterol transport is mainly carried out by:",
    answers: [
        { text: "HDL", correct: true },
        { text: "LDL", correct: false },
        { text: "VLDL", correct: false },
        { text: "Chylomicrons", correct: false }
    ]
},

{
    question: "The liver cannot utilize ketone bodies because it lacks:",
    answers: [
        { text: "Thiophorase", correct: true },
        { text: "HMG-CoA synthase", correct: false },
        { text: "HMG-CoA reductase", correct: false },
        { text: "Carnitine palmitoyltransferase", correct: false }
    ]
},

{
    question: "The principal ketone body circulating in blood is:",
    answers: [
        { text: "β-Hydroxybutyrate", correct: true },
        { text: "Acetone", correct: false },
        { text: "Acetoacetyl-CoA", correct: false },
        { text: "Malonyl-CoA", correct: false }
    ]
},

{
    question: "Which condition strongly stimulates ketogenesis?",
    answers: [
        { text: "Prolonged fasting", correct: true },
        { text: "High-carbohydrate meal", correct: false },
        { text: "Hyperinsulinemia", correct: false },
        { text: "Fed state", correct: false }
    ]
},

{
    question: "The committed step in ketone body synthesis is catalyzed by:",
    answers: [
        { text: "HMG-CoA synthase", correct: true },
        { text: "HMG-CoA reductase", correct: false },
        { text: "Thiolase", correct: false },
        { text: "Acetyl-CoA carboxylase", correct: false }
    ]
},

{
    question: "Peroxisomal β-oxidation mainly oxidizes:",
    answers: [
        { text: "Very-long-chain fatty acids", correct: true },
        { text: "Short-chain fatty acids", correct: false },
        { text: "Medium-chain fatty acids", correct: false },
        { text: "Odd-chain fatty acids only", correct: false }
    ]
},

{
    question: "The first enzyme of peroxisomal β-oxidation is:",
    answers: [
        { text: "Acyl-CoA oxidase", correct: true },
        { text: "Acyl-CoA dehydrogenase", correct: false },
        { text: "Enoyl-CoA hydratase", correct: false },
        { text: "Thiolase", correct: false }
    ]
},

{
    question: "Odd-chain fatty acids produce which additional product during β-oxidation?",
    answers: [
        { text: "Propionyl-CoA", correct: true },
        { text: "Malonyl-CoA", correct: false },
        { text: "Acetoacetate", correct: false },
        { text: "Acetone", correct: false }
    ]
},

{
    question: "Propionyl-CoA is converted into succinyl-CoA with the help of:",
    answers: [
        { text: "Vitamin B₁₂", correct: true },
        { text: "Vitamin C", correct: false },
        { text: "Vitamin E", correct: false },
        { text: "Vitamin K", correct: false }
    ]
},

{
    question: "Which fatty acid is considered essential in humans?",
    answers: [
        { text: "Linoleic acid", correct: true },
        { text: "Palmitic acid", correct: false },
        { text: "Stearic acid", correct: false },
        { text: "Oleic acid", correct: false }
    ]
},

{
    question: "Which omega-3 fatty acid is abundant in fish oil?",
    answers: [
        { text: "EPA", correct: true },
        { text: "Palmitic acid", correct: false },
        { text: "Linoleic acid", correct: false },
        { text: "Arachidonic acid", correct: false }
    ]
},

{
    question: "Arachidonic acid is the precursor of:",
    answers: [
        { text: "Prostaglandins", correct: true },
        { text: "Bile acids", correct: false },
        { text: "Ketone bodies", correct: false },
        { text: "Steroid hormones", correct: false }
    ]
},

{
    question: "Cyclooxygenase (COX) converts arachidonic acid into:",
    answers: [
        { text: "Prostaglandins", correct: true },
        { text: "Leukotrienes", correct: false },
        { text: "Thrombin", correct: false },
        { text: "Ketone bodies", correct: false }
    ]
},

{
    question: "The enzyme inhibited by aspirin is:",
    answers: [
        { text: "Cyclooxygenase (COX)", correct: true },
        { text: "Lipoxygenase", correct: false },
        { text: "HMG-CoA reductase", correct: false },
        { text: "Hormone-sensitive lipase", correct: false }
    ]
},

{
    question: "Leukotrienes are synthesized from arachidonic acid by the enzyme:",
    answers: [
        { text: "Cyclooxygenase", correct: false },
        { text: "Lipoxygenase", correct: true },
        { text: "Phospholipase A₂", correct: false },
        { text: "Acetyl-CoA carboxylase", correct: false }
    ]
},

{
    question: "The primary phospholipid responsible for reducing alveolar surface tension is:",
    answers: [
        { text: "Phosphatidylcholine (DPPC)", correct: true },
        { text: "Phosphatidylserine", correct: false },
        { text: "Cardiolipin", correct: false },
        { text: "Sphingomyelin", correct: false }
    ]
},

{
    question: "Which phospholipid is abundant in the inner mitochondrial membrane?",
    answers: [
        { text: "Cardiolipin", correct: true },
        { text: "Phosphatidylcholine", correct: false },
        { text: "Sphingomyelin", correct: false },
        { text: "Phosphatidylinositol", correct: false }
    ]
},

{
    question: "Sphingolipids are synthesized from:",
    answers: [
        { text: "Ceramide", correct: true },
        { text: "Malonyl-CoA", correct: false },
        { text: "Acetyl-CoA", correct: false },
        { text: "Glycerol", correct: false }
    ]
},

{
    question: "Tay-Sachs disease results from deficiency of:",
    answers: [
        { text: "Hexosaminidase A", correct: true },
        { text: "β-Galactosidase", correct: false },
        { text: "Glucocerebrosidase", correct: false },
        { text: "Sphingomyelinase", correct: false }
    ]
},

{
    question: "Gaucher disease is caused by deficiency of:",
    answers: [
        { text: "Glucocerebrosidase", correct: true },
        { text: "Hexosaminidase A", correct: false },
        { text: "Ceramidase", correct: false },
        { text: "Sphingomyelinase", correct: false }
    ]
},

{
    question: "Niemann-Pick disease is associated with deficiency of:",
    answers: [
        { text: "Sphingomyelinase", correct: true },
        { text: "Hexosaminidase A", correct: false },
        { text: "Glucocerebrosidase", correct: false },
        { text: "Arylsulfatase A", correct: false }
    ]
},

{
    question: "The major lipoprotein responsible for reverse cholesterol transport is:",
    answers: [
        { text: "HDL", correct: true },
        { text: "LDL", correct: false },
        { text: "VLDL", correct: false },
        { text: "IDL", correct: false }
    ]
},

{
    question: "Familial hypercholesterolemia is most commonly caused by mutation of the:",
    answers: [
        { text: "LDL receptor", correct: true },
        { text: "Apo A-I gene", correct: false },
        { text: "LCAT gene", correct: false },
        { text: "Hormone-sensitive lipase gene", correct: false }
    ]
},

{
    question: "Oxidized LDL contributes directly to:",
    answers: [
        { text: "Atherosclerosis", correct: true },
        { text: "Ketosis", correct: false },
        { text: "Hypoglycemia", correct: false },
        { text: "Glycogenesis", correct: false }
    ]
},

{
    question: "Which apolipoprotein mediates hepatic uptake of chylomicron remnants?",
    answers: [
        { text: "Apo E", correct: true },
        { text: "Apo A-I", correct: false },
        { text: "Apo C-II", correct: false },
        { text: "Apo B-48", correct: false }
    ]
},

{
    question: "The intestinal apolipoprotein unique to chylomicrons is:",
    answers: [
        { text: "Apo B-48", correct: true },
        { text: "Apo B-100", correct: false },
        { text: "Apo A-I", correct: false },
        { text: "Apo E", correct: false }
    ]
},

{
    question: "The liver synthesizes VLDL primarily to transport:",
    answers: [
        { text: "Endogenous triglycerides", correct: true },
        { text: "Dietary cholesterol", correct: false },
        { text: "Bile salts", correct: false },
        { text: "Fat-soluble vitamins", correct: false }
    ]
},

{
    question: "Which enzyme hydrolyzes stored triglycerides in adipose tissue?",
    answers: [
        { text: "Hormone-sensitive lipase", correct: true },
        { text: "Lipoprotein lipase", correct: false },
        { text: "Pancreatic lipase", correct: false },
        { text: "Phospholipase C", correct: false }
    ]
},

{
    question: "Hormone-sensitive lipase is activated primarily by:",
    answers: [
        { text: "Epinephrine", correct: true },
        { text: "Insulin", correct: false },
        { text: "Glucagon-like peptide-1", correct: false },
        { text: "Leptin", correct: false }
    ]
},

{
    question: "Insulin inhibits lipolysis mainly by:",
    answers: [
        { text: "Dephosphorylating hormone-sensitive lipase", correct: true },
        { text: "Activating CPT-I", correct: false },
        { text: "Stimulating ketogenesis", correct: false },
        { text: "Activating glucagon receptors", correct: false }
    ]
},

{
    question: "The rate-limiting enzyme of bile acid synthesis is:",
    answers: [
        { text: "Cholesterol 7α-hydroxylase", correct: true },
        { text: "HMG-CoA reductase", correct: false },
        { text: "ACAT", correct: false },
        { text: "LCAT", correct: false }
    ]
},

{
    question: "The major storage form of energy in adipose tissue is:",
    answers: [
        { text: "Triacylglycerol", correct: true },
        { text: "Glycogen", correct: false },
        { text: "Phospholipid", correct: false },
        { text: "Cholesterol", correct: false }
    ]
},

{
    question: "Which organ is the principal site of ketone body production?",
    answers: [
        { text: "Liver", correct: true },
        { text: "Kidney", correct: false },
        { text: "Brain", correct: false },
        { text: "Heart", correct: false }
    ]
},

{
    question: "The brain primarily depends on ketone bodies during:",
    answers: [
        { text: "Prolonged starvation", correct: true },
        { text: "Immediately after meals", correct: false },
        { text: "Normal fed state", correct: false },
        { text: "Light exercise only", correct: false }
    ]
},

{
    question: "The transport of cholesterol out of peripheral tissues is mainly mediated by:",
    answers: [
        { text: "HDL", correct: true },
        { text: "LDL", correct: false },
        { text: "VLDL", correct: false },
        { text: "Chylomicrons", correct: false }
    ]
},

{
    question: "Acetyl-CoA carboxylase is inhibited by:",
    answers: [
        { text: "AMP-activated protein kinase (AMPK)", correct: true },
        { text: "Insulin", correct: false },
        { text: "Citrate", correct: false },
        { text: "Biotin", correct: false }
    ]
},

{
    question: "Which metabolic pathway generates the NADPH required for fatty acid synthesis?",
    answers: [
        { text: "Pentose phosphate pathway", correct: true },
        { text: "Glycolysis", correct: false },
        { text: "β-Oxidation", correct: false },
        { text: "Urea cycle", correct: false }
    ]
},

{
    question: "The major product of de novo fatty acid synthesis is:",
    answers: [
        { text: "Palmitate", correct: true },
        { text: "Oleate", correct: false },
        { text: "Stearate", correct: false },
        { text: "Linoleate", correct: false }
    ]
},

{
    question: "Which statement about HDL is CORRECT?",
    answers: [
        { text: "It removes excess cholesterol from peripheral tissues and transports it to the liver", correct: true },
        { text: "It delivers dietary triglycerides from the intestine to adipose tissue", correct: false },
        { text: "It transports endogenous triglycerides from the liver to tissues", correct: false },
        { text: "It is the most atherogenic lipoprotein because it deposits cholesterol in arteries", correct: false }
    ]
}

];