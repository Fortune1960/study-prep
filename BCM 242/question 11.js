const EASY_QUESTIONS = [

{
    question: "Amino acids are primarily known as the building blocks of:",
    answers: [
        { text: "Lipids", correct: false },
        { text: "Proteins", correct: true },
        { text: "Carbohydrates", correct: false },
        { text: "Nucleic acids", correct: false }
    ]
},

{
    question: "Which property allows amino acids to act as both acids and bases?",
    answers: [
        { text: "Hydrophobicity", correct: false },
        { text: "Amphoteric nature", correct: true },
        { text: "Optical activity", correct: false },
        { text: "Denaturation", correct: false }
    ]
},

{
    question: "The amino group of an amino acid is represented by:",
    answers: [
        { text: "-COOH", correct: false },
        { text: "-NH₂", correct: true },
        { text: "-OH", correct: false },
        { text: "-SH", correct: false }
    ]
},

{
    question: "The carboxyl group of an amino acid is represented by:",
    answers: [
        { text: "-COOH", correct: true },
        { text: "-NH₂", correct: false },
        { text: "-CH₃", correct: false },
        { text: "-PO₄", correct: false }
    ]
},

{
    question: "Proteins are polymers made from:",
    answers: [
        { text: "Fatty acids", correct: false },
        { text: "Monosaccharides", correct: false },
        { text: "Amino acids", correct: true },
        { text: "Nucleotides", correct: false }
    ]
},

{
    question: "Which bond joins amino acids together?",
    answers: [
        { text: "Hydrogen bond", correct: false },
        { text: "Peptide bond", correct: true },
        { text: "Ionic bond", correct: false },
        { text: "Phosphodiester bond", correct: false }
    ]
},

{
    question: "Protein denaturation mainly affects the protein's:",
    answers: [
        { text: "Primary structure", correct: false },
        { text: "Secondary and tertiary structures", correct: true },
        { text: "Amino acid sequence", correct: false },
        { text: "Peptide bonds", correct: false }
    ]
},

{
    question: "Albumin is mainly synthesized in the:",
    answers: [
        { text: "Kidney", correct: false },
        { text: "Liver", correct: true },
        { text: "Heart", correct: false },
        { text: "Pancreas", correct: false }
    ]
},

{
    question: "Which plasma protein is most abundant?",
    answers: [
        { text: "Globulin", correct: false },
        { text: "Albumin", correct: true },
        { text: "Fibrinogen", correct: false },
        { text: "Hemoglobin", correct: false }
    ]
},

{
    question: "Globulins mainly function in:",
    answers: [
        { text: "Energy production", correct: false },
        { text: "Immune defense", correct: true },
        { text: "Fat digestion", correct: false },
        { text: "DNA replication", correct: false }
    ]
},

{
    question: "Denaturation of proteins may be caused by:",
    answers: [
        { text: "Heat", correct: true },
        { text: "Cold water only", correct: false },
        { text: "Sunlight only", correct: false },
        { text: "Oxygen only", correct: false }
    ]
},

{
    question: "The process of removing the amino group from amino acids is called:",
    answers: [
        { text: "Hydrolysis", correct: false },
        { text: "Deamination", correct: true },
        { text: "Oxidation", correct: false },
        { text: "Phosphorylation", correct: false }
    ]
},

{
    question: "Transamination involves transfer of:",
    answers: [
        { text: "Carboxyl group", correct: false },
        { text: "Amino group", correct: true },
        { text: "Hydroxyl group", correct: false },
        { text: "Phosphate group", correct: false }
    ]
},

{
    question: "The liver is the major site of:",
    answers: [
        { text: "Protein digestion", correct: false },
        { text: "Amino acid metabolism", correct: true },
        { text: "DNA replication", correct: false },
        { text: "Vitamin synthesis", correct: false }
    ]
},

{
    question: "The main toxic product formed during amino acid breakdown is:",
    answers: [
        { text: "Carbon dioxide", correct: false },
        { text: "Ammonia", correct: true },
        { text: "Water", correct: false },
        { text: "Oxygen", correct: false }
    ]
},

{
    question: "Ammonia is converted into which less toxic compound in humans?",
    answers: [
        { text: "Creatinine", correct: false },
        { text: "Urea", correct: true },
        { text: "Glucose", correct: false },
        { text: "Ketone bodies", correct: false }
    ]
},

{
    question: "The urea cycle mainly occurs in the:",
    answers: [
        { text: "Brain", correct: false },
        { text: "Liver", correct: true },
        { text: "Heart", correct: false },
        { text: "Lungs", correct: false }
    ]
},

{
    question: "Phenylketonuria results from deficiency of:",
    answers: [
        { text: "Phenylalanine hydroxylase", correct: true },
        { text: "Hexokinase", correct: false },
        { text: "Pepsin", correct: false },
        { text: "Lipase", correct: false }
    ]
},

{
    question: "Phenylketonuria is an inherited disorder affecting:",
    answers: [
        { text: "Carbohydrate metabolism", correct: false },
        { text: "Protein metabolism", correct: true },
        { text: "Lipid metabolism", correct: false },
        { text: "Vitamin metabolism", correct: false }
    ]
},

{
    question: "Ketogenic amino acids are amino acids that produce:",
    answers: [
        { text: "Glucose only", correct: false },
        { text: "Ketone bodies", correct: true },
        { text: "Lactic acid", correct: false },
        { text: "Pyruvate only", correct: false }
    ]
},

{
    question: "Leucine is classified as a:",
    answers: [
        { text: "Ketogenic amino acid", correct: true },
        { text: "Glucogenic amino acid", correct: false },
        { text: "Essential fatty acid", correct: false },
        { text: "Vitamin", correct: false }
    ]
},

{
    question: "The process of breaking proteins into amino acids is called:",
    answers: [
        { text: "Hydrolysis", correct: true },
        { text: "Condensation", correct: false },
        { text: "Replication", correct: false },
        { text: "Oxidation", correct: false }
    ]
},

{
    question: "Protein digestion begins in the:",
    answers: [
        { text: "Mouth", correct: false },
        { text: "Stomach", correct: true },
        { text: "Small intestine", correct: false },
        { text: "Colon", correct: false }
    ]
},

{
    question: "The enzyme pepsin functions best in:",
    answers: [
        { text: "Acidic medium", correct: true },
        { text: "Neutral medium", correct: false },
        { text: "Alkaline medium", correct: false },
        { text: "Distilled water", correct: false }
    ]
},

{
    question: "Which of the following is an essential amino acid?",
    answers: [
        { text: "Leucine", correct: true },
        { text: "Alanine", correct: false },
        { text: "Glycine", correct: false },
        { text: "Serine", correct: false }
    ]
},

{
    question: "The main nitrogenous waste product excreted by humans is:",
    answers: [
        { text: "Ammonia", correct: false },
        { text: "Urea", correct: true },
        { text: "Uric acid", correct: false },
        { text: "Creatinine", correct: false }
    ]
},

{
    question: "The enzyme responsible for converting phenylalanine to tyrosine is:",
    answers: [
        { text: "Phenylalanine hydroxylase", correct: true },
        { text: "Tyrosinase", correct: false },
        { text: "Hexokinase", correct: false },
        { text: "Pepsin", correct: false }
    ]
},

{
    question: "Which organ is primarily responsible for eliminating urea from the body?",
    answers: [
        { text: "Liver", correct: false },
        { text: "Kidney", correct: true },
        { text: "Heart", correct: false },
        { text: "Pancreas", correct: false }
    ]
},

{
    question: "Proteins lose their biological activity mainly because of:",
    answers: [
        { text: "Denaturation", correct: true },
        { text: "Hydrolysis", correct: false },
        { text: "Digestion", correct: false },
        { text: "Filtration", correct: false }
    ]
},

{
    question: "The process by which proteins are synthesized from amino acids is called:",
    answers: [
        { text: "Translation", correct: true },
        { text: "Transcription", correct: false },
        { text: "Replication", correct: false },
        { text: "Deamination", correct: false }
    ]
},

{
    question: "Amino acids that cannot be synthesized by the body are called:",
    answers: [
        { text: "Non-essential amino acids", correct: false },
        { text: "Essential amino acids", correct: true },
        { text: "Ketogenic amino acids", correct: false },
        { text: "Glucogenic amino acids", correct: false }
    ]
},

{
    question: "Which of the following is a non-essential amino acid?",
    answers: [
        { text: "Valine", correct: false },
        { text: "Lysine", correct: false },
        { text: "Alanine", correct: true },
        { text: "Methionine", correct: false }
    ]
},

{
    question: "The precursor of catecholamines is:",
    answers: [
        { text: "Tyrosine", correct: true },
        { text: "Leucine", correct: false },
        { text: "Glycine", correct: false },
        { text: "Histidine", correct: false }
    ]
},

{
    question: "Histamine is synthesized from:",
    answers: [
        { text: "Histidine", correct: true },
        { text: "Tryptophan", correct: false },
        { text: "Tyrosine", correct: false },
        { text: "Arginine", correct: false }
    ]
},

{
    question: "Serotonin is synthesized from:",
    answers: [
        { text: "Tryptophan", correct: true },
        { text: "Tyrosine", correct: false },
        { text: "Histidine", correct: false },
        { text: "Valine", correct: false }
    ]
},

{
    question: "The primary function of albumin in blood is to:",
    answers: [
        { text: "Fight infection", correct: false },
        { text: "Maintain osmotic pressure", correct: true },
        { text: "Transport oxygen", correct: false },
        { text: "Digest proteins", correct: false }
    ]
},

{
    question: "Immunoglobulins belong to which class of plasma proteins?",
    answers: [
        { text: "Albumins", correct: false },
        { text: "Globulins", correct: true },
        { text: "Collagens", correct: false },
        { text: "Keratins", correct: false }
    ]
},

{
    question: "Which amino acid contains sulfur?",
    answers: [
        { text: "Methionine", correct: true },
        { text: "Alanine", correct: false },
        { text: "Valine", correct: false },
        { text: "Proline", correct: false }
    ]
},

{
    question: "The enzyme pepsin is secreted by:",
    answers: [
        { text: "Chief cells of the stomach", correct: true },
        { text: "Parietal cells", correct: false },
        { text: "Goblet cells", correct: false },
        { text: "Hepatocytes", correct: false }
    ]
},

{
    question: "The inactive precursor of pepsin is:",
    answers: [
        { text: "Trypsinogen", correct: false },
        { text: "Pepsinogen", correct: true },
        { text: "Chymotrypsinogen", correct: false },
        { text: "Proelastase", correct: false }
    ]
},

{
    question: "The major site of protein digestion after the stomach is the:",
    answers: [
        { text: "Large intestine", correct: false },
        { text: "Small intestine", correct: true },
        { text: "Esophagus", correct: false },
        { text: "Rectum", correct: false }
    ]
},

{
    question: "Trypsin is secreted by the:",
    answers: [
        { text: "Pancreas", correct: true },
        { text: "Liver", correct: false },
        { text: "Stomach", correct: false },
        { text: "Kidney", correct: false }
    ]
},

{
    question: "The process of synthesizing glucose from amino acids is called:",
    answers: [
        { text: "Glycolysis", correct: false },
        { text: "Gluconeogenesis", correct: true },
        { text: "Glycogenesis", correct: false },
        { text: "Lipogenesis", correct: false }
    ]
},

{
    question: "Which vitamin is required for transamination reactions?",
    answers: [
        { text: "Vitamin B6", correct: true },
        { text: "Vitamin C", correct: false },
        { text: "Vitamin D", correct: false },
        { text: "Vitamin K", correct: false }
    ]
},

{
    question: "The central molecule that accepts amino groups during transamination is:",
    answers: [
        { text: "α-Ketoglutarate", correct: true },
        { text: "Pyruvate", correct: false },
        { text: "Oxaloacetate", correct: false },
        { text: "Lactate", correct: false }
    ]
},

{
    question: "Which amino acid is exclusively ketogenic?",
    answers: [
        { text: "Leucine", correct: true },
        { text: "Alanine", correct: false },
        { text: "Glycine", correct: false },
        { text: "Aspartate", correct: false }
    ]
},

{
    question: "The first enzyme of the urea cycle is:",
    answers: [
        { text: "Carbamoyl phosphate synthetase I", correct: true },
        { text: "Arginase", correct: false },
        { text: "Ornithine transcarbamylase", correct: false },
        { text: "Argininosuccinate lyase", correct: false }
    ]
},

{
    question: "The urea cycle occurs partly in the:",
    answers: [
        { text: "Mitochondria", correct: true },
        { text: "Nucleus", correct: false },
        { text: "Golgi apparatus", correct: false },
        { text: "Lysosome", correct: false }
    ]
},

{
    question: "Which plasma protein is essential for blood clotting?",
    answers: [
        { text: "Fibrinogen", correct: true },
        { text: "Albumin", correct: false },
        { text: "Globulin", correct: false },
        { text: "Hemoglobin", correct: false }
    ]
},

{
    question: "The major function of transamination is to:",
    answers: [
        { text: "Produce fatty acids", correct: false },
        { text: "Transfer amino groups between amino acids and keto acids", correct: true },
        { text: "Break peptide bonds", correct: false },
        { text: "Digest proteins in the stomach", correct: false }
    ]
}

];

const HARD_QUESTIONS = [

{
    question: "An amino acid exists predominantly as a zwitterion because it:",
    answers: [
        { text: "Contains only a carboxyl group", correct: false },
        { text: "Contains both ionized amino and carboxyl groups simultaneously", correct: true },
        { text: "Contains only an amino group", correct: false },
        { text: "Lacks charged groups", correct: false }
    ]
},

{
    question: "Which amino acid is both glucogenic and ketogenic?",
    answers: [
        { text: "Leucine", correct: false },
        { text: "Lysine", correct: false },
        { text: "Isoleucine", correct: true },
        { text: "Alanine", correct: false }
    ]
},

{
    question: "The coenzyme required for most transamination reactions is:",
    answers: [
        { text: "Biotin", correct: false },
        { text: "Pyridoxal phosphate (PLP)", correct: true },
        { text: "Thiamine pyrophosphate", correct: false },
        { text: "Coenzyme A", correct: false }
    ]
},

{
    question: "During transamination, the amino group is transferred primarily to:",
    answers: [
        { text: "Pyruvate", correct: false },
        { text: "α-Ketoglutarate", correct: true },
        { text: "Lactate", correct: false },
        { text: "Acetyl-CoA", correct: false }
    ]
},

{
    question: "The enzyme that catalyzes oxidative deamination of glutamate is:",
    answers: [
        { text: "Alanine aminotransferase", correct: false },
        { text: "Glutamate dehydrogenase", correct: true },
        { text: "Aspartate aminotransferase", correct: false },
        { text: "Arginase", correct: false }
    ]
},

{
    question: "Which of the following amino acids is exclusively ketogenic?",
    answers: [
        { text: "Tyrosine", correct: false },
        { text: "Phenylalanine", correct: false },
        { text: "Leucine", correct: true },
        { text: "Valine", correct: false }
    ]
},

{
    question: "The first committed step of the urea cycle is catalyzed by:",
    answers: [
        { text: "Carbamoyl phosphate synthetase I", correct: true },
        { text: "Arginase", correct: false },
        { text: "Ornithine transcarbamylase", correct: false },
        { text: "Argininosuccinate synthetase", correct: false }
    ]
},

{
    question: "Carbamoyl phosphate synthetase I is activated by:",
    answers: [
        { text: "ATP", correct: false },
        { text: "N-Acetylglutamate", correct: true },
        { text: "Glutamine", correct: false },
        { text: "Ammonia", correct: false }
    ]
},

{
    question: "Phenylketonuria results from deficiency of:",
    answers: [
        { text: "Tyrosinase", correct: false },
        { text: "Phenylalanine hydroxylase", correct: true },
        { text: "Tryptophan hydroxylase", correct: false },
        { text: "Glutamate dehydrogenase", correct: false }
    ]
},

{
    question: "Which amino acid is the precursor of catecholamines?",
    answers: [
        { text: "Histidine", correct: false },
        { text: "Tyrosine", correct: true },
        { text: "Tryptophan", correct: false },
        { text: "Arginine", correct: false }
    ]
},

{
    question: "Serotonin is synthesized directly from:",
    answers: [
        { text: "Tyrosine", correct: false },
        { text: "Phenylalanine", correct: false },
        { text: "Tryptophan", correct: true },
        { text: "Histidine", correct: false }
    ]
},

{
    question: "Histamine is formed by decarboxylation of:",
    answers: [
        { text: "Tyrosine", correct: false },
        { text: "Histidine", correct: true },
        { text: "Phenylalanine", correct: false },
        { text: "Leucine", correct: false }
    ]
},

{
    question: "The primary function of albumin in plasma is:",
    answers: [
        { text: "Blood clotting", correct: false },
        { text: "Maintenance of colloid osmotic pressure", correct: true },
        { text: "Oxygen transport", correct: false },
        { text: "Immune defense", correct: false }
    ]
},

{
    question: "Protein denaturation does NOT involve disruption of:",
    answers: [
        { text: "Hydrogen bonds", correct: false },
        { text: "Peptide bonds", correct: true },
        { text: "Hydrophobic interactions", correct: false },
        { text: "Ionic interactions", correct: false }
    ]
},

{
    question: "Which factor is LEAST likely to denature a protein?",
    answers: [
        { text: "Extreme pH", correct: false },
        { text: "Heat", correct: false },
        { text: "Organic solvents", correct: false },
        { text: "Distilled water at room temperature", correct: true }
    ]
},

{
    question: "The major transport form of ammonia from peripheral tissues is:",
    answers: [
        { text: "Alanine", correct: false },
        { text: "Glutamine", correct: true },
        { text: "Aspartate", correct: false },
        { text: "Ornithine", correct: false }
    ]
},

{
    question: "The glucose-alanine cycle primarily transports:",
    answers: [
        { text: "Fatty acids", correct: false },
        { text: "Nitrogen from muscle to liver", correct: true },
        { text: "Ketone bodies", correct: false },
        { text: "Triglycerides", correct: false }
    ]
},

{
    question: "Arginase catalyzes the conversion of arginine into:",
    answers: [
        { text: "Ornithine and urea", correct: true },
        { text: "Citrulline and ammonia", correct: false },
        { text: "Argininosuccinate", correct: false },
        { text: "Carbamoyl phosphate", correct: false }
    ]
},

{
    question: "Which amino acid is an important precursor for nitric oxide synthesis?",
    answers: [
        { text: "Arginine", correct: true },
        { text: "Leucine", correct: false },
        { text: "Methionine", correct: false },
        { text: "Valine", correct: false }
    ]
},

{
    question: "Globulins are primarily responsible for:",
    answers: [
        { text: "Maintaining osmotic pressure", correct: false },
        { text: "Immune protection", correct: true },
        { text: "Blood glucose regulation", correct: false },
        { text: "Lipid digestion", correct: false }
    ]
},

{
    question: "The enzyme pepsin is secreted in the form of:",
    answers: [
        { text: "Pepsinase", correct: false },
        { text: "Pepsinogen", correct: true },
        { text: "Trypsinogen", correct: false },
        { text: "Proelastase", correct: false }
    ]
},

{
    question: "Trypsinogen is activated in the small intestine by:",
    answers: [
        { text: "Pepsin", correct: false },
        { text: "Enteropeptidase", correct: true },
        { text: "Lipase", correct: false },
        { text: "Elastase", correct: false }
    ]
},

{
    question: "Which plasma protein serves as the precursor of fibrin during coagulation?",
    answers: [
        { text: "Albumin", correct: false },
        { text: "Fibrinogen", correct: true },
        { text: "Transferrin", correct: false },
        { text: "Ceruloplasmin", correct: false }
    ]
},

{
    question: "The nitrogen atom that enters the urea cycle is derived mainly from:",
    answers: [
        { text: "Ammonia and aspartate", correct: true },
        { text: "Alanine and glycine", correct: false },
        { text: "Tyrosine and glutamine", correct: false },
        { text: "Leucine and lysine", correct: false }
    ]
},

{
    question: "The major site for complete metabolism of excess amino acids is the:",
    answers: [
        { text: "Brain", correct: false },
        { text: "Liver", correct: true },
        { text: "Heart", correct: false },
        { text: "Spleen", correct: false }
    ]
},

{
    question: "Deficiency of ornithine transcarbamylase leads to accumulation of:",
    answers: [
        { text: "Urea", correct: false },
        { text: "Ammonia", correct: true },
        { text: "Glucose", correct: false },
        { text: "Pyruvate", correct: false }
    ]
},

{
    question: "The carbon atom in urea is derived directly from:",
    answers: [
        { text: "Carbon dioxide (HCO₃⁻)", correct: true },
        { text: "Glucose", correct: false },
        { text: "Alanine", correct: false },
        { text: "Pyruvate", correct: false }
    ]
},

{
    question: "The amino acid that directly donates the second nitrogen atom of urea is:",
    answers: [
        { text: "Aspartate", correct: true },
        { text: "Glutamate", correct: false },
        { text: "Alanine", correct: false },
        { text: "Glycine", correct: false }
    ]
},

{
    question: "The isoelectric point (pI) of an amino acid is the pH at which:",
    answers: [
        { text: "The amino acid is completely protonated", correct: false },
        { text: "The amino acid has no net electrical charge", correct: true },
        { text: "The amino acid becomes negatively charged", correct: false },
        { text: "The amino acid is fully denatured", correct: false }
    ]
},

{
    question: "Which amino acid contains an imidazole side chain?",
    answers: [
        { text: "Histidine", correct: true },
        { text: "Arginine", correct: false },
        { text: "Lysine", correct: false },
        { text: "Methionine", correct: false }
    ]
},

{
    question: "The sulfur-containing amino acid that serves as the universal methyl donor after activation is:",
    answers: [
        { text: "Methionine", correct: true },
        { text: "Cysteine", correct: false },
        { text: "Serine", correct: false },
        { text: "Tyrosine", correct: false }
    ]
},

{
    question: "Which plasma protein primarily transports iron in circulation?",
    answers: [
        { text: "Albumin", correct: false },
        { text: "Transferrin", correct: true },
        { text: "Globulin", correct: false },
        { text: "Ferritin", correct: false }
    ]
},

{
    question: "The immediate precursor of creatine is:",
    answers: [
        { text: "Arginine and glycine", correct: true },
        { text: "Leucine and lysine", correct: false },
        { text: "Phenylalanine and tyrosine", correct: false },
        { text: "Aspartate and glutamate", correct: false }
    ]
},

{
    question: "The major storage protein for iron is:",
    answers: [
        { text: "Transferrin", correct: false },
        { text: "Ferritin", correct: true },
        { text: "Albumin", correct: false },
        { text: "Ceruloplasmin", correct: false }
    ]
},

{
    question: "Which amino acid is synthesized from phenylalanine?",
    answers: [
        { text: "Tyrosine", correct: true },
        { text: "Histidine", correct: false },
        { text: "Methionine", correct: false },
        { text: "Leucine", correct: false }
    ]
},

{
    question: "A deficiency of phenylalanine hydroxylase results in accumulation of:",
    answers: [
        { text: "Phenylalanine", correct: true },
        { text: "Tyrosine", correct: false },
        { text: "Methionine", correct: false },
        { text: "Histidine", correct: false }
    ]
},

{
    question: "Which amino acid is the precursor of melanin?",
    answers: [
        { text: "Tyrosine", correct: true },
        { text: "Tryptophan", correct: false },
        { text: "Histidine", correct: false },
        { text: "Leucine", correct: false }
    ]
},

{
    question: "The major intracellular buffer among amino acids is:",
    answers: [
        { text: "Histidine", correct: true },
        { text: "Alanine", correct: false },
        { text: "Valine", correct: false },
        { text: "Leucine", correct: false }
    ]
},

{
    question: "The digestion of dietary proteins in the small intestine is completed mainly by:",
    answers: [
        { text: "Pancreatic proteases and intestinal peptidases", correct: true },
        { text: "Salivary amylase", correct: false },
        { text: "Pepsin only", correct: false },
        { text: "Lipase", correct: false }
    ]
},

{
    question: "The end product of complete oxidation of the carbon skeleton of amino acids enters:",
    answers: [
        { text: "Central metabolic pathways such as the TCA cycle", correct: true },
        { text: "The urea cycle only", correct: false },
        { text: "DNA synthesis", correct: false },
        { text: "RNA transcription", correct: false }
    ]
},

{
    question: "Which enzyme converts fumarate formed in the urea cycle into malate?",
    answers: [
        { text: "Fumarase", correct: true },
        { text: "Arginase", correct: false },
        { text: "Malate dehydrogenase", correct: false },
        { text: "Succinate dehydrogenase", correct: false }
    ]
},

{
    question: "A positive nitrogen balance is commonly seen during:",
    answers: [
        { text: "Growth and pregnancy", correct: true },
        { text: "Starvation", correct: false },
        { text: "Severe burns", correct: false },
        { text: "Protein deficiency", correct: false }
    ]
},

{
    question: "Negative nitrogen balance is commonly associated with:",
    answers: [
        { text: "Severe trauma and starvation", correct: true },
        { text: "Childhood growth", correct: false },
        { text: "Pregnancy", correct: false },
        { text: "Recovery from illness", correct: false }
    ]
},

{
    question: "The major purpose of the urea cycle is to:",
    answers: [
        { text: "Detoxify ammonia", correct: true },
        { text: "Produce glucose", correct: false },
        { text: "Digest proteins", correct: false },
        { text: "Generate ATP", correct: false }
    ]
},

{
    question: "Which amino acid is both an essential amino acid and aromatic?",
    answers: [
        { text: "Phenylalanine", correct: true },
        { text: "Alanine", correct: false },
        { text: "Glycine", correct: false },
        { text: "Aspartate", correct: false }
    ]
},

{
    question: "The major transport protein responsible for maintaining plasma oncotic pressure is:",
    answers: [
        { text: "Albumin", correct: true },
        { text: "Globulin", correct: false },
        { text: "Fibrinogen", correct: false },
        { text: "Hemoglobin", correct: false }
    ]
},

{
    question: "Which amino acid serves as the precursor for thyroid hormones?",
    answers: [
        { text: "Tyrosine", correct: true },
        { text: "Histidine", correct: false },
        { text: "Tryptophan", correct: false },
        { text: "Arginine", correct: false }
    ]
},

{
    question: "The enzyme that catalyzes the final reaction of the urea cycle is:",
    answers: [
        { text: "Arginase", correct: true },
        { text: "Argininosuccinate lyase", correct: false },
        { text: "Carbamoyl phosphate synthetase I", correct: false },
        { text: "Ornithine transcarbamylase", correct: false }
    ]
},

{
    question: "Protein denaturation by heavy metals occurs primarily because they:",
    answers: [
        { text: "Interact with sulfhydryl (-SH) groups", correct: true },
        { text: "Break peptide bonds", correct: false },
        { text: "Hydrolyze amino acids", correct: false },
        { text: "Convert proteins into carbohydrates", correct: false }
    ]
},

{
    question: "A patient with hyperammonemia is most likely suffering from a defect in:",
    answers: [
        { text: "The urea cycle", correct: true },
        { text: "Glycolysis", correct: false },
        { text: "β-oxidation", correct: false },
        { text: "Glycogenesis", correct: false }
    ]
}

];

const EXTREME_QUESTIONS = [

{
    question: "Which amino acid is classified as both glucogenic and ketogenic?",
    answers: [
        { text: "Leucine", correct: false },
        { text: "Lysine", correct: false },
        { text: "Isoleucine", correct: true },
        { text: "Glycine", correct: false }
    ]
},

{
    question: "The peptide bond has which of the following properties?",
    answers: [
        { text: "Free rotation", correct: false },
        { text: "Partial double bond character", correct: true },
        { text: "Highly ionic", correct: false },
        { text: "Easily hydrolyzed at neutral pH", correct: false }
    ]
},

{
    question: "Which enzyme catalyzes the first reaction of the urea cycle?",
    answers: [
        { text: "Arginase", correct: false },
        { text: "Carbamoyl phosphate synthetase I", correct: true },
        { text: "Argininosuccinate synthetase", correct: false },
        { text: "Ornithine transcarbamylase", correct: false }
    ]
},

{
    question: "The activator of Carbamoyl Phosphate Synthetase I is:",
    answers: [
        { text: "ATP", correct: false },
        { text: "Biotin", correct: false },
        { text: "N-Acetylglutamate", correct: true },
        { text: "Glutamine", correct: false }
    ]
},

{
    question: "Which amino acid is exclusively ketogenic?",
    answers: [
        { text: "Tyrosine", correct: false },
        { text: "Phenylalanine", correct: false },
        { text: "Leucine", correct: true },
        { text: "Methionine", correct: false }
    ]
},

{
    question: "Transamination reactions require which coenzyme?",
    answers: [
        { text: "FAD", correct: false },
        { text: "NAD+", correct: false },
        { text: "Pyridoxal phosphate (PLP)", correct: true },
        { text: "Coenzyme A", correct: false }
    ]
},

{
    question: "Phenylketonuria results primarily from deficiency of:",
    answers: [
        { text: "Tyrosinase", correct: false },
        { text: "Phenylalanine hydroxylase", correct: true },
        { text: "Homogentisate oxidase", correct: false },
        { text: "Arginase", correct: false }
    ]
},

{
    question: "The major nitrogen carrier from muscle to liver is:",
    answers: [
        { text: "Glutamate", correct: false },
        { text: "Alanine", correct: true },
        { text: "Aspartate", correct: false },
        { text: "Serine", correct: false }
    ]
},

{
    question: "Which amino acid is the principal carrier of ammonia in blood?",
    answers: [
        { text: "Alanine", correct: false },
        { text: "Glutamine", correct: true },
        { text: "Aspartate", correct: false },
        { text: "Arginine", correct: false }
    ]
},

{
    question: "Protein denaturation primarily affects the:",
    answers: [
        { text: "Primary structure", correct: false },
        { text: "Secondary and tertiary structures", correct: true },
        { text: "Peptide bonds", correct: false },
        { text: "Amino acid sequence", correct: false }
    ]
},

{
    question: "Which amino acid forms disulfide bonds?",
    answers: [
        { text: "Serine", correct: false },
        { text: "Methionine", correct: false },
        { text: "Cysteine", correct: true },
        { text: "Tyrosine", correct: false }
    ]
},

{
    question: "The final product of the urea cycle is:",
    answers: [
        { text: "Ammonia", correct: false },
        { text: "Creatinine", correct: false },
        { text: "Urea", correct: true },
        { text: "Uric acid", correct: false }
    ]
},

{
    question: "Which amino acid is a precursor for nitric oxide synthesis?",
    answers: [
        { text: "Arginine", correct: true },
        { text: "Lysine", correct: false },
        { text: "Valine", correct: false },
        { text: "Glutamine", correct: false }
    ]
},

{
    question: "Which plasma protein is primarily responsible for maintaining colloid osmotic pressure?",
    answers: [
        { text: "Globulin", correct: false },
        { text: "Albumin", correct: true },
        { text: "Fibrinogen", correct: false },
        { text: "Hemoglobin", correct: false }
    ]
},

{
    question: "The enzyme that hydrolyzes peptide bonds in the stomach is:",
    answers: [
        { text: "Trypsin", correct: false },
        { text: "Pepsin", correct: true },
        { text: "Elastase", correct: false },
        { text: "Carboxypeptidase", correct: false }
    ]
},

{
    question: "Which amino acid is hydroxylated to form DOPA?",
    answers: [
        { text: "Tyrosine", correct: true },
        { text: "Phenylalanine", correct: false },
        { text: "Tryptophan", correct: false },
        { text: "Histidine", correct: false }
    ]
},

{
    question: "The isoelectric point of a protein is the pH at which it:",
    answers: [
        { text: "Has maximum solubility", correct: false },
        { text: "Has no net electrical charge", correct: true },
        { text: "Becomes positively charged", correct: false },
        { text: "Is fully denatured", correct: false }
    ]
},

{
    question: "Kwashiorkor is primarily caused by deficiency of:",
    answers: [
        { text: "Carbohydrates", correct: false },
        { text: "Lipids", correct: false },
        { text: "Protein", correct: true },
        { text: "Vitamin C", correct: false }
    ]
},

{
    question: "Which amino acid is converted directly to serotonin?",
    answers: [
        { text: "Tyrosine", correct: false },
        { text: "Tryptophan", correct: true },
        { text: "Phenylalanine", correct: false },
        { text: "Histidine", correct: false }
    ]
},

{
    question: "The amino acid responsible for buffering blood through histidine residues is mainly found in:",
    answers: [
        { text: "Albumin", correct: false },
        { text: "Hemoglobin", correct: true },
        { text: "Collagen", correct: false },
        { text: "Elastin", correct: false }
    ]
},

{
    question: "Which enzyme converts phenylalanine to tyrosine?",
    answers: [
        { text: "Tyrosinase", correct: false },
        { text: "Phenylalanine hydroxylase", correct: true },
        { text: "Tyrosine aminotransferase", correct: false },
        { text: "Monoamine oxidase", correct: false }
    ]
},

{
    question: "Which amino acid contains an imidazole side chain?",
    answers: [
        { text: "Histidine", correct: true },
        { text: "Arginine", correct: false },
        { text: "Lysine", correct: false },
        { text: "Glutamate", correct: false }
    ]
},

{
    question: "The major transport form of nitrogen from peripheral tissues is:",
    answers: [
        { text: "Ammonia", correct: false },
        { text: "Glutamine", correct: true },
        { text: "Aspartate", correct: false },
        { text: "Urea", correct: false }
    ]
},

{
    question: "Which amino acid cannot undergo transamination?",
    answers: [
        { text: "Lysine", correct: true },
        { text: "Alanine", correct: false },
        { text: "Aspartate", correct: false },
        { text: "Glutamate", correct: false }
    ]
},

{
    question: "Which protein is the major structural protein of connective tissue?",
    answers: [
        { text: "Keratin", correct: false },
        { text: "Collagen", correct: true },
        { text: "Albumin", correct: false },
        { text: "Myosin", correct: false }
    ]
},

{
    question: "The enzyme that converts arginine to urea and ornithine is:",
    answers: [
        { text: "Arginase", correct: true },
        { text: "Argininosuccinate lyase", correct: false },
        { text: "Ornithine transcarbamylase", correct: false },
        { text: "Carbamoyl phosphate synthetase I", correct: false }
    ]
},

{
    question: "Phenylketonuria is primarily caused by deficiency of:",
    answers: [
        { text: "Phenylalanine hydroxylase", correct: true },
        { text: "Tyrosinase", correct: false },
        { text: "Homogentisate oxidase", correct: false },
        { text: "Branched-chain aminotransferase", correct: false }
    ]
},

{
    question: "Which amino acid is exclusively ketogenic?",
    answers: [
        { text: "Leucine", correct: true },
        { text: "Valine", correct: false },
        { text: "Alanine", correct: false },
        { text: "Glutamate", correct: false }
    ]
},

{
    question: "The first reaction in β-oxidation of fatty acids is catalyzed by:",
    answers: [
        { text: "Acyl-CoA dehydrogenase", correct: true },
        { text: "Enoyl-CoA hydratase", correct: false },
        { text: "Thiolase", correct: false },
        { text: "β-Hydroxyacyl-CoA dehydrogenase", correct: false }
    ]
},

{
    question: "Which vitamin is required for transamination reactions?",
    answers: [
        { text: "Vitamin B6 (Pyridoxal phosphate)", correct: true },
        { text: "Vitamin B12", correct: false },
        { text: "Vitamin C", correct: false },
        { text: "Vitamin D", correct: false }
    ]
},

{
    question: "The principal storage form of nitrogen in skeletal muscle is:",
    answers: [
        { text: "Glutamine", correct: true },
        { text: "Ammonia", correct: false },
        { text: "Urea", correct: false },
        { text: "Creatinine", correct: false }
    ]
},

{
    question: "The amino acid responsible for disulfide bond formation is:",
    answers: [
        { text: "Cysteine", correct: true },
        { text: "Methionine", correct: false },
        { text: "Lysine", correct: false },
        { text: "Histidine", correct: false }
    ]
},

{
    question: "Albumin contributes mainly to:",
    answers: [
        { text: "Maintenance of plasma oncotic pressure", correct: true },
        { text: "Blood clotting", correct: false },
        { text: "Immune defense", correct: false },
        { text: "Oxygen transport", correct: false }
    ]
},

{
    question: "The major nitrogen-containing waste product in humans is:",
    answers: [
        { text: "Urea", correct: true },
        { text: "Uric acid", correct: false },
        { text: "Creatine", correct: false },
        { text: "Ammonium chloride", correct: false }
    ]
},

{
    question: "Which enzyme catalyzes oxidative deamination of glutamate?",
    answers: [
        { text: "Glutamate dehydrogenase", correct: true },
        { text: "Alanine aminotransferase", correct: false },
        { text: "Aspartate aminotransferase", correct: false },
        { text: "Glutaminase", correct: false }
    ]
},

{
    question: "The α-helix is stabilized primarily by:",
    answers: [
        { text: "Hydrogen bonds", correct: true },
        { text: "Disulfide bonds", correct: false },
        { text: "Ionic bonds", correct: false },
        { text: "Hydrophobic interactions only", correct: false }
    ]
},

{
    question: "Which plasma protein is primarily responsible for transporting iron?",
    answers: [
        { text: "Transferrin", correct: true },
        { text: "Albumin", correct: false },
        { text: "Ferritin", correct: false },
        { text: "Ceruloplasmin", correct: false }
    ]
},

{
    question: "The peptide bond possesses partial:",
    answers: [
        { text: "Double-bond character", correct: true },
        { text: "Triple-bond character", correct: false },
        { text: "Ionic character only", correct: false },
        { text: "Hydrophobic character", correct: false }
    ]
},

{
    question: "The committed step of the urea cycle is catalyzed by:",
    answers: [
        { text: "Carbamoyl phosphate synthetase I", correct: true },
        { text: "Arginase", correct: false },
        { text: "Glutaminase", correct: false },
        { text: "Aspartate aminotransferase", correct: false }
    ]
},

{
    question: "The process of removing the amino group from an amino acid is called:",
    answers: [
        { text: "Deamination", correct: true },
        { text: "Transamination", correct: false },
        { text: "Carboxylation", correct: false },
        { text: "Hydroxylation", correct: false }
    ]
},

{
    question: "Protein digestion in the small intestine is completed mainly by:",
    answers: [
        { text: "Pancreatic proteases and brush border peptidases", correct: true },
        { text: "Salivary amylase", correct: false },
        { text: "Lingual lipase", correct: false },
        { text: "Bile salts", correct: false }
    ]
},

{
    question: "Which amino acid serves as a precursor for serotonin synthesis?",
    answers: [
        { text: "Tryptophan", correct: true },
        { text: "Tyrosine", correct: false },
        { text: "Histidine", correct: false },
        { text: "Methionine", correct: false }
    ]
},

{
    question: "The most abundant protein in the human body is:",
    answers: [
        { text: "Collagen", correct: true },
        { text: "Albumin", correct: false },
        { text: "Keratin", correct: false },
        { text: "Hemoglobin", correct: false }
    ]
},

{
    question: "Amino acids are absorbed from the intestine mainly by:",
    answers: [
        { text: "Sodium-dependent active transport", correct: true },
        { text: "Simple diffusion only", correct: false },
        { text: "Facilitated diffusion only", correct: false },
        { text: "Pinocytosis", correct: false }
    ]
},

{
    question: "The primary function of chaperone proteins is to:",
    answers: [
        { text: "Assist proper protein folding", correct: true },
        { text: "Digest proteins", correct: false },
        { text: "Transport oxygen", correct: false },
        { text: "Store amino acids", correct: false }
    ]
},

{
    question: "Which condition is caused by deficiency of homogentisate oxidase?",
    answers: [
        { text: "Alkaptonuria", correct: true },
        { text: "Phenylketonuria", correct: false },
        { text: "Maple syrup urine disease", correct: false },
        { text: "Cystinuria", correct: false }
    ]
},

{
    question: "Which amino acid is converted directly into nitric oxide in the body?",
    answers: [
        { text: "Arginine", correct: true },
        { text: "Glycine", correct: false },
        { text: "Valine", correct: false },
        { text: "Proline", correct: false }
    ]
},

{
    question: "The major product formed after complete oxidation of ketogenic amino acids is:",
    answers: [
        { text: "Acetyl-CoA", correct: true },
        { text: "Pyruvate", correct: false },
        { text: "Oxaloacetate", correct: false },
        { text: "Succinyl-CoA", correct: false }
    ]
},

{
    question: "The nitrogen atom of urea is derived mainly from:",
    answers: [
        { text: "Ammonia and aspartate", correct: true },
        { text: "Alanine only", correct: false },
        { text: "Glucose", correct: false },
        { text: "Pyruvate", correct: false }
    ]
},

{
    question: "Which statement about protein denaturation is correct?",
    answers: [
        { text: "It destroys secondary and tertiary structures without breaking peptide bonds", correct: true },
        { text: "It completely hydrolyzes peptide bonds", correct: false },
        { text: "It converts proteins into carbohydrates", correct: false },
        { text: "It always produces biologically active proteins", correct: false }
    ]
}

];