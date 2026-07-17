const EASY_QUESTIONS = [

{
    question: "Vitamins are best defined as:",
    answers: [
        { text: "Organic compounds required in small amounts for normal growth and metabolism", correct: true },
        { text: "Inorganic compounds needed in large amounts", correct: false },
        { text: "Energy-giving nutrients", correct: false },
        { text: "Body-building nutrients only", correct: false }
    ]
},

{
    question: "Which vitamin is commonly known as ascorbic acid?",
    answers: [
        { text: "Vitamin A", correct: false },
        { text: "Vitamin C", correct: true },
        { text: "Vitamin D", correct: false },
        { text: "Vitamin E", correct: false }
    ]
},

{
    question: "Which of the following is a fat-soluble vitamin?",
    answers: [
        { text: "Vitamin C", correct: false },
        { text: "Vitamin B₁", correct: false },
        { text: "Vitamin D", correct: true },
        { text: "Vitamin B₁₂", correct: false }
    ]
},

{
    question: "Which vitamin deficiency causes scurvy?",
    answers: [
        { text: "Vitamin A", correct: false },
        { text: "Vitamin C", correct: true },
        { text: "Vitamin D", correct: false },
        { text: "Vitamin K", correct: false }
    ]
},

{
    question: "Which vitamin deficiency causes rickets in children?",
    answers: [
        { text: "Vitamin A", correct: false },
        { text: "Vitamin D", correct: true },
        { text: "Vitamin E", correct: false },
        { text: "Vitamin K", correct: false }
    ]
},

{
    question: "Which vitamin is important for normal vision?",
    answers: [
        { text: "Vitamin A", correct: true },
        { text: "Vitamin C", correct: false },
        { text: "Vitamin B₂", correct: false },
        { text: "Vitamin K", correct: false }
    ]
},

{
    question: "The main function of carbohydrates is to:",
    answers: [
        { text: "Build muscles", correct: false },
        { text: "Provide energy", correct: true },
        { text: "Produce hormones", correct: false },
        { text: "Store vitamins", correct: false }
    ]
},

{
    question: "Which of the following is a simple sugar?",
    answers: [
        { text: "Starch", correct: false },
        { text: "Glucose", correct: true },
        { text: "Cellulose", correct: false },
        { text: "Glycogen", correct: false }
    ]
},

{
    question: "Sucrose is composed of:",
    answers: [
        { text: "Glucose and Galactose", correct: false },
        { text: "Glucose and Fructose", correct: true },
        { text: "Fructose and Galactose", correct: false },
        { text: "Glucose and Glucose", correct: false }
    ]
},

{
    question: "Which nutrient is primarily responsible for growth and tissue repair?",
    answers: [
        { text: "Carbohydrates", correct: false },
        { text: "Proteins", correct: true },
        { text: "Fats", correct: false },
        { text: "Water", correct: false }
    ]
},

{
    question: "Proteins are made up of:",
    answers: [
        { text: "Fatty acids", correct: false },
        { text: "Amino acids", correct: true },
        { text: "Monosaccharides", correct: false },
        { text: "Nucleotides", correct: false }
    ]
},

{
    question: "Which disease results from severe protein deficiency?",
    answers: [
        { text: "Rickets", correct: false },
        { text: "Kwashiorkor", correct: true },
        { text: "Scurvy", correct: false },
        { text: "Goiter", correct: false }
    ]
},

{
    question: "Marasmus is mainly caused by deficiency of:",
    answers: [
        { text: "Protein only", correct: false },
        { text: "Protein and calories", correct: true },
        { text: "Vitamin C", correct: false },
        { text: "Iron", correct: false }
    ]
},

{
    question: "Which nutrient provides the highest amount of energy per gram?",
    answers: [
        { text: "Protein", correct: false },
        { text: "Fat", correct: true },
        { text: "Carbohydrate", correct: false },
        { text: "Water", correct: false }
    ]
},

{
    question: "One gram of carbohydrate provides approximately:",
    answers: [
        { text: "2 kcal", correct: false },
        { text: "4 kcal", correct: true },
        { text: "7 kcal", correct: false },
        { text: "9 kcal", correct: false }
    ]
},

{
    question: "One gram of fat provides approximately:",
    answers: [
        { text: "4 kcal", correct: false },
        { text: "5 kcal", correct: false },
        { text: "7 kcal", correct: false },
        { text: "9 kcal", correct: true }
    ]
},

{
    question: "Which mineral is essential for the formation of hemoglobin?",
    answers: [
        { text: "Calcium", correct: false },
        { text: "Iron", correct: true },
        { text: "Magnesium", correct: false },
        { text: "Potassium", correct: false }
    ]
},

{
    question: "Calcium is mainly required for:",
    answers: [
        { text: "Vision", correct: false },
        { text: "Strong bones and teeth", correct: true },
        { text: "Blood glucose regulation", correct: false },
        { text: "Protein digestion", correct: false }
    ]
},

{
    question: "Which mineral is necessary for normal thyroid function?",
    answers: [
        { text: "Iron", correct: false },
        { text: "Iodine", correct: true },
        { text: "Zinc", correct: false },
        { text: "Copper", correct: false }
    ]
},

{
    question: "The largest percentage of the human body is made up of:",
    answers: [
        { text: "Protein", correct: false },
        { text: "Water", correct: true },
        { text: "Fat", correct: false },
        { text: "Minerals", correct: false }
    ]
},

{
    question: "Water helps regulate body temperature mainly through:",
    answers: [
        { text: "Digestion", correct: false },
        { text: "Sweating", correct: true },
        { text: "Chewing", correct: false },
        { text: "Urination only", correct: false }
    ]
},

{
    question: "Digestion of proteins begins mainly in the:",
    answers: [
        { text: "Mouth", correct: false },
        { text: "Stomach", correct: true },
        { text: "Small intestine", correct: false },
        { text: "Large intestine", correct: false }
    ]
},

{
    question: "The end products of protein digestion are:",
    answers: [
        { text: "Glucose", correct: false },
        { text: "Amino acids", correct: true },
        { text: "Fatty acids", correct: false },
        { text: "Glycerol", correct: false }
    ]
},

{
    question: "The end products of fat digestion are:",
    answers: [
        { text: "Glucose and fructose", correct: false },
        { text: "Fatty acids and glycerol", correct: true },
        { text: "Amino acids", correct: false },
        { text: "Maltose", correct: false }
    ]
},

{
    question: "Which organ produces bile that helps in fat digestion?",
    answers: [
        { text: "Pancreas", correct: false },
        { text: "Liver", correct: true },
        { text: "Kidney", correct: false },
        { text: "Stomach", correct: false }
    ]
},

{
    question: "The gall bladder primarily functions to:",
    answers: [
        { text: "Produce bile", correct: false },
        { text: "Store and concentrate bile", correct: true },
        { text: "Digest proteins", correct: false },
        { text: "Produce insulin", correct: false }
    ]
},

{
    question: "Which organ produces insulin?",
    answers: [
        { text: "Liver", correct: false },
        { text: "Pancreas", correct: true },
        { text: "Kidney", correct: false },
        { text: "Stomach", correct: false }
    ]
},

{
    question: "Which vitamin is essential for normal blood clotting?",
    answers: [
        { text: "Vitamin A", correct: false },
        { text: "Vitamin K", correct: true },
        { text: "Vitamin C", correct: false },
        { text: "Vitamin B₁₂", correct: false }
    ]
},

{
    question: "Night blindness is caused by deficiency of:",
    answers: [
        { text: "Vitamin A", correct: true },
        { text: "Vitamin D", correct: false },
        { text: "Vitamin E", correct: false },
        { text: "Vitamin C", correct: false }
    ]
},

{
    question: "Which vitamin is synthesized in the skin in the presence of sunlight?",
    answers: [
        { text: "Vitamin C", correct: false },
        { text: "Vitamin D", correct: true },
        { text: "Vitamin B₆", correct: false },
        { text: "Vitamin K", correct: false }
    ]
},

{
    question: "The main site of nutrient absorption is the:",
    answers: [
        { text: "Large intestine", correct: false },
        { text: "Small intestine", correct: true },
        { text: "Esophagus", correct: false },
        { text: "Stomach", correct: false }
    ]
},

{
    question: "Which food group is mainly responsible for body building?",
    answers: [
        { text: "Carbohydrates", correct: false },
        { text: "Proteins", correct: true },
        { text: "Fats and oils", correct: false },
        { text: "Vitamins", correct: false }
    ]
},

{
    question: "Which food group mainly supplies energy?",
    answers: [
        { text: "Carbohydrates", correct: true },
        { text: "Minerals", correct: false },
        { text: "Water", correct: false },
        { text: "Vitamins", correct: false }
    ]
},

{
    question: "The process by which food is broken down into absorbable substances is called:",
    answers: [
        { text: "Circulation", correct: false },
        { text: "Digestion", correct: true },
        { text: "Respiration", correct: false },
        { text: "Excretion", correct: false }
    ]
},

{
    question: "Which nutrient does NOT provide energy?",
    answers: [
        { text: "Protein", correct: false },
        { text: "Water", correct: true },
        { text: "Fat", correct: false },
        { text: "Carbohydrate", correct: false }
    ]
},

{
    question: "Which mineral is important for healthy bones and teeth?",
    answers: [
        { text: "Iron", correct: false },
        { text: "Calcium", correct: true },
        { text: "Copper", correct: false },
        { text: "Sodium", correct: false }
    ]
},

{
    question: "The digestion of starch begins in the:",
    answers: [
        { text: "Mouth", correct: true },
        { text: "Stomach", correct: false },
        { text: "Small intestine", correct: false },
        { text: "Large intestine", correct: false }
    ]
},

{
    question: "Salivary amylase acts mainly on:",
    answers: [
        { text: "Protein", correct: false },
        { text: "Fat", correct: false },
        { text: "Starch", correct: true },
        { text: "Vitamins", correct: false }
    ]
},

{
    question: "Which organ stores glycogen?",
    answers: [
        { text: "Heart", correct: false },
        { text: "Liver", correct: true },
        { text: "Lungs", correct: false },
        { text: "Kidney", correct: false }
    ]
},

{
    question: "The body mass index (BMI) is used to assess:",
    answers: [
        { text: "Blood pressure", correct: false },
        { text: "Nutritional status", correct: true },
        { text: "Vision", correct: false },
        { text: "Kidney function", correct: false }
    ]
},

{
    question: "The average healthy adult body contains approximately how much water?",
    answers: [
        { text: "20%", correct: false },
        { text: "40%", correct: false },
        { text: "60%", correct: true },
        { text: "90%", correct: false }
    ]
},

{
    question: "Which nutrient is the body's major source of stored energy?",
    answers: [
        { text: "Protein", correct: false },
        { text: "Fat", correct: true },
        { text: "Vitamin C", correct: false },
        { text: "Water", correct: false }
    ]
},

{
    question: "Which vitamin is also known as tocopherol?",
    answers: [
        { text: "Vitamin A", correct: false },
        { text: "Vitamin D", correct: false },
        { text: "Vitamin E", correct: true },
        { text: "Vitamin K", correct: false }
    ]
},

{
    question: "The body's energy requirement at complete rest is called:",
    answers: [
        { text: "Specific Dynamic Action", correct: false },
        { text: "Basal Metabolic Rate", correct: true },
        { text: "Body Mass Index", correct: false },
        { text: "Net Protein Utilization", correct: false }
    ]
},

{
    question: "Specific Dynamic Action (SDA) refers to:",
    answers: [
        { text: "Energy used for digestion and absorption of food", correct: true },
        { text: "Energy used during sleep", correct: false },
        { text: "Energy used only for exercise", correct: false },
        { text: "Energy stored as fat", correct: false }
    ]
},

{
    question: "Which nutrient has the highest Specific Dynamic Action?",
    answers: [
        { text: "Carbohydrate", correct: false },
        { text: "Protein", correct: true },
        { text: "Fat", correct: false },
        { text: "Water", correct: false }
    ]
},

{
    question: "Biological Value (BV) is used to measure the quality of:",
    answers: [
        { text: "Carbohydrates", correct: false },
        { text: "Proteins", correct: true },
        { text: "Fats", correct: false },
        { text: "Minerals", correct: false }
    ]
},

{
    question: "Net Protein Utilization (NPU) measures:",
    answers: [
        { text: "The percentage of ingested protein retained by the body", correct: true },
        { text: "The amount of glucose produced", correct: false },
        { text: "The body's fat storage", correct: false },
        { text: "The body's water balance", correct: false }
    ]
},

{
    question: "Which disease results from iodine deficiency?",
    answers: [
        { text: "Scurvy", correct: false },
        { text: "Goiter", correct: true },
        { text: "Rickets", correct: false },
        { text: "Beriberi", correct: false }
    ]
},

{
    question: "Which of the following is an essential nutrient?",
    answers: [
        { text: "Water", correct: true },
        { text: "Alcohol", correct: false },
        { text: "Cholesterol", correct: false },
        { text: "Caffeine", correct: false }
    ]
}

];

const HARD_QUESTIONS = [

{
    question: "Which vitamin functions primarily as an antioxidant that protects cell membranes from oxidative damage?",
    answers: [
        { text: "Vitamin A", correct: false },
        { text: "Vitamin E", correct: true },
        { text: "Vitamin D", correct: false },
        { text: "Vitamin K", correct: false }
    ]
},

{
    question: "The active form of vitamin D responsible for increasing calcium absorption is:",
    answers: [
        { text: "Calcidiol", correct: false },
        { text: "Calcitriol", correct: true },
        { text: "Ergocalciferol", correct: false },
        { text: "Cholecalciferol", correct: false }
    ]
},

{
    question: "Pellagra results from the deficiency of:",
    answers: [
        { text: "Vitamin B₁", correct: false },
        { text: "Niacin (Vitamin B₃)", correct: true },
        { text: "Vitamin B₆", correct: false },
        { text: "Vitamin C", correct: false }
    ]
},

{
    question: "Beriberi is caused by deficiency of:",
    answers: [
        { text: "Vitamin B₂", correct: false },
        { text: "Vitamin B₁", correct: true },
        { text: "Vitamin B₁₂", correct: false },
        { text: "Vitamin D", correct: false }
    ]
},

{
    question: "The vitamin essential for DNA synthesis and red blood cell maturation is:",
    answers: [
        { text: "Vitamin C", correct: false },
        { text: "Vitamin B₁₂", correct: true },
        { text: "Vitamin E", correct: false },
        { text: "Vitamin K", correct: false }
    ]
},

{
    question: "The Biological Value (BV) of a protein measures:",
    answers: [
        { text: "Its energy value", correct: false },
        { text: "The proportion of absorbed protein retained by the body", correct: true },
        { text: "Its fat content", correct: false },
        { text: "Its vitamin content", correct: false }
    ]
},

{
    question: "Net Protein Utilization (NPU) is calculated based on:",
    answers: [
        { text: "Protein intake and nitrogen retained", correct: true },
        { text: "Body weight only", correct: false },
        { text: "Calorie intake only", correct: false },
        { text: "Water intake", correct: false }
    ]
},

{
    question: "The amino acid most likely to be limiting in cereals is:",
    answers: [
        { text: "Methionine", correct: false },
        { text: "Lysine", correct: true },
        { text: "Leucine", correct: false },
        { text: "Valine", correct: false }
    ]
},

{
    question: "Legumes are generally deficient in which essential amino acid?",
    answers: [
        { text: "Methionine", correct: true },
        { text: "Lysine", correct: false },
        { text: "Histidine", correct: false },
        { text: "Arginine", correct: false }
    ]
},

{
    question: "Combining cereals and legumes improves protein quality because:",
    answers: [
        { text: "They contain more fat", correct: false },
        { text: "Their amino acid deficiencies complement each other", correct: true },
        { text: "They contain more water", correct: false },
        { text: "They reduce digestion", correct: false }
    ]
},

{
    question: "The process of converting excess glucose into glycogen is called:",
    answers: [
        { text: "Glycolysis", correct: false },
        { text: "Glycogenesis", correct: true },
        { text: "Gluconeogenesis", correct: false },
        { text: "Lipolysis", correct: false }
    ]
},

{
    question: "The breakdown of glycogen into glucose is known as:",
    answers: [
        { text: "Glycogenesis", correct: false },
        { text: "Glycogenolysis", correct: true },
        { text: "Gluconeogenesis", correct: false },
        { text: "Proteolysis", correct: false }
    ]
},

{
    question: "The principal storage form of carbohydrate in animals is:",
    answers: [
        { text: "Cellulose", correct: false },
        { text: "Glycogen", correct: true },
        { text: "Sucrose", correct: false },
        { text: "Lactose", correct: false }
    ]
},

{
    question: "The primary function of bile salts is to:",
    answers: [
        { text: "Digest proteins", correct: false },
        { text: "Emulsify fats", correct: true },
        { text: "Digest carbohydrates", correct: false },
        { text: "Absorb vitamins", correct: false }
    ]
},

{
    question: "Which enzyme digests triglycerides in the small intestine?",
    answers: [
        { text: "Pepsin", correct: false },
        { text: "Pancreatic lipase", correct: true },
        { text: "Amylase", correct: false },
        { text: "Trypsin", correct: false }
    ]
},

{
    question: "The major site of fat absorption is the:",
    answers: [
        { text: "Stomach", correct: false },
        { text: "Small intestine", correct: true },
        { text: "Large intestine", correct: false },
        { text: "Esophagus", correct: false }
    ]
},

{
    question: "The principal plasma protein responsible for maintaining osmotic pressure is:",
    answers: [
        { text: "Globulin", correct: false },
        { text: "Albumin", correct: true },
        { text: "Fibrinogen", correct: false },
        { text: "Hemoglobin", correct: false }
    ]
},

{
    question: "Which mineral is required for the synthesis of thyroid hormones?",
    answers: [
        { text: "Iron", correct: false },
        { text: "Iodine", correct: true },
        { text: "Calcium", correct: false },
        { text: "Magnesium", correct: false }
    ]
},

{
    question: "Iron deficiency commonly results in:",
    answers: [
        { text: "Night blindness", correct: false },
        { text: "Microcytic hypochromic anemia", correct: true },
        { text: "Rickets", correct: false },
        { text: "Osteoporosis", correct: false }
    ]
},

{
    question: "The Basal Metabolic Rate (BMR) is usually measured:",
    answers: [
        { text: "Immediately after exercise", correct: false },
        { text: "After an overnight fast and complete rest", correct: true },
        { text: "During digestion", correct: false },
        { text: "After eating a heavy meal", correct: false }
    ]
},

{
    question: "Which nutrient has the greatest thermic effect (Specific Dynamic Action)?",
    answers: [
        { text: "Fat", correct: false },
        { text: "Protein", correct: true },
        { text: "Carbohydrate", correct: false },
        { text: "Water", correct: false }
    ]
},

{
    question: "The Recommended Dietary Allowance (RDA) is intended to:",
    answers: [
        { text: "Meet the needs of nearly all healthy individuals", correct: true },
        { text: "Treat nutritional diseases", correct: false },
        { text: "Measure obesity", correct: false },
        { text: "Calculate BMI", correct: false }
    ]
},

{
    question: "The best indicator of long-term protein nutritional status is:",
    answers: [
        { text: "Serum albumin", correct: true },
        { text: "Blood glucose", correct: false },
        { text: "Hemoglobin only", correct: false },
        { text: "Serum sodium", correct: false }
    ]
},

{
    question: "Which disease is characterized by edema due to severe protein deficiency?",
    answers: [
        { text: "Marasmus", correct: false },
        { text: "Kwashiorkor", correct: true },
        { text: "Scurvy", correct: false },
        { text: "Pellagra", correct: false }
    ]
},

{
    question: "A deficiency of vitamin C impairs collagen synthesis because vitamin C is required for:",
    answers: [
        { text: "Hydroxylation of proline and lysine", correct: true },
        { text: "DNA replication", correct: false },
        { text: "Fat digestion", correct: false },
        { text: "Glycogen synthesis", correct: false }
    ]
},

{
    question: "The primary purpose of nutritional assessment is to:",
    answers: [
        { text: "Diagnose infectious diseases", correct: false },
        { text: "Determine an individual's nutritional status", correct: true },
        { text: "Measure blood pressure only", correct: false },
        { text: "Treat metabolic disorders", correct: false }
    ]
},

{
    question: "Which of the following is an anthropometric measurement?",
    answers: [
        { text: "Blood glucose level", correct: false },
        { text: "Body Mass Index (BMI)", correct: true },
        { text: "Serum albumin", correct: false },
        { text: "Urine pH", correct: false }
    ]
},

{
    question: "A Body Mass Index (BMI) between 18.5 and 24.9 kg/m² is classified as:",
    answers: [
        { text: "Underweight", correct: false },
        { text: "Normal weight", correct: true },
        { text: "Overweight", correct: false },
        { text: "Obese", correct: false }
    ]
},

{
    question: "Which vitamin deficiency is associated with megaloblastic anemia?",
    answers: [
        { text: "Vitamin C", correct: false },
        { text: "Folic acid", correct: true },
        { text: "Vitamin A", correct: false },
        { text: "Vitamin D", correct: false }
    ]
},

{
    question: "Vitamin B₁₂ absorption requires which intrinsic factor secreted by the:",
    answers: [
        { text: "Liver", correct: false },
        { text: "Stomach", correct: true },
        { text: "Pancreas", correct: false },
        { text: "Small intestine", correct: false }
    ]
},

{
    question: "The most abundant mineral in the human body is:",
    answers: [
        { text: "Iron", correct: false },
        { text: "Calcium", correct: true },
        { text: "Sodium", correct: false },
        { text: "Potassium", correct: false }
    ]
},

{
    question: "The major intracellular cation is:",
    answers: [
        { text: "Sodium", correct: false },
        { text: "Potassium", correct: true },
        { text: "Calcium", correct: false },
        { text: "Chloride", correct: false }
    ]
},

{
    question: "The major extracellular cation is:",
    answers: [
        { text: "Potassium", correct: false },
        { text: "Magnesium", correct: false },
        { text: "Sodium", correct: true },
        { text: "Calcium", correct: false }
    ]
},

{
    question: "Which vitamin acts as a coenzyme in many amino acid metabolism reactions?",
    answers: [
        { text: "Vitamin B₆", correct: true },
        { text: "Vitamin A", correct: false },
        { text: "Vitamin D", correct: false },
        { text: "Vitamin K", correct: false }
    ]
},

{
    question: "The process by which amino acids are converted into glucose is known as:",
    answers: [
        { text: "Glycolysis", correct: false },
        { text: "Gluconeogenesis", correct: true },
        { text: "Lipogenesis", correct: false },
        { text: "Ketogenesis", correct: false }
    ]
},

{
    question: "The respiratory quotient (RQ) for carbohydrate metabolism is approximately:",
    answers: [
        { text: "0.7", correct: false },
        { text: "0.8", correct: false },
        { text: "1.0", correct: true },
        { text: "1.5", correct: false }
    ]
},

{
    question: "The respiratory quotient (RQ) for fat metabolism is approximately:",
    answers: [
        { text: "0.7", correct: true },
        { text: "0.9", correct: false },
        { text: "1.0", correct: false },
        { text: "1.2", correct: false }
    ]
},

{
    question: "Which lipoprotein is commonly called the 'good cholesterol'?",
    answers: [
        { text: "LDL", correct: false },
        { text: "HDL", correct: true },
        { text: "VLDL", correct: false },
        { text: "Chylomicrons", correct: false }
    ]
},

{
    question: "Which lipoprotein is commonly called the 'bad cholesterol'?",
    answers: [
        { text: "HDL", correct: false },
        { text: "LDL", correct: true },
        { text: "IDL", correct: false },
        { text: "Chylomicrons", correct: false }
    ]
},

{
    question: "Essential fatty acids include:",
    answers: [
        { text: "Palmitic acid", correct: false },
        { text: "Linoleic acid", correct: true },
        { text: "Stearic acid", correct: false },
        { text: "Oleic acid", correct: false }
    ]
},

{
    question: "The liver stores excess glucose mainly as:",
    answers: [
        { text: "Fat", correct: false },
        { text: "Glycogen", correct: true },
        { text: "Protein", correct: false },
        { text: "Ketone bodies", correct: false }
    ]
},

{
    question: "Which hormone lowers blood glucose concentration?",
    answers: [
        { text: "Glucagon", correct: false },
        { text: "Insulin", correct: true },
        { text: "Cortisol", correct: false },
        { text: "Adrenaline", correct: false }
    ]
},

{
    question: "Glucagon primarily acts to:",
    answers: [
        { text: "Decrease blood glucose", correct: false },
        { text: "Increase blood glucose", correct: true },
        { text: "Increase calcium absorption", correct: false },
        { text: "Increase protein synthesis", correct: false }
    ]
},

{
    question: "Nitrogen balance is considered positive during:",
    answers: [
        { text: "Starvation", correct: false },
        { text: "Growth and pregnancy", correct: true },
        { text: "Severe illness", correct: false },
        { text: "Protein deficiency", correct: false }
    ]
},

{
    question: "Negative nitrogen balance is commonly seen in:",
    answers: [
        { text: "Childhood growth", correct: false },
        { text: "Pregnancy", correct: false },
        { text: "Severe burns", correct: true },
        { text: "Recovery after illness", correct: false }
    ]
},

{
    question: "The principal protein found in connective tissue is:",
    answers: [
        { text: "Albumin", correct: false },
        { text: "Collagen", correct: true },
        { text: "Keratin", correct: false },
        { text: "Actin", correct: false }
    ]
},

{
    question: "The major storage form of fat in the body is:",
    answers: [
        { text: "Phospholipids", correct: false },
        { text: "Triglycerides", correct: true },
        { text: "Cholesterol", correct: false },
        { text: "Glycolipids", correct: false }
    ]
},

{
    question: "The preferred energy source for the brain under normal conditions is:",
    answers: [
        { text: "Fatty acids", correct: false },
        { text: "Glucose", correct: true },
        { text: "Amino acids", correct: false },
        { text: "Cholesterol", correct: false }
    ]
},

{
    question: "The major site of gluconeogenesis is the:",
    answers: [
        { text: "Heart", correct: false },
        { text: "Liver", correct: true },
        { text: "Lungs", correct: false },
        { text: "Spleen", correct: false }
    ]
},

{
    question: "Which of the following provides the most accurate assessment of long-term glycemic control in diabetic patients?",
    answers: [
        { text: "Random blood glucose", correct: false },
        { text: "HbA1c", correct: true },
        { text: "Urine glucose", correct: false },
        { text: "Oral glucose tolerance test", correct: false }
    ]
}
];

const EXTREME_QUESTIONS = [

{
    question: "The coenzyme thiamine pyrophosphate (TPP) is derived from:",
    answers: [
        { text: "Vitamin B₁", correct: true },
        { text: "Vitamin B₂", correct: false },
        { text: "Vitamin B₆", correct: false },
        { text: "Vitamin B₁₂", correct: false }
    ]
},

{
    question: "A patient presents with dermatitis, diarrhea, and dementia. The most likely vitamin deficiency is:",
    answers: [
        { text: "Vitamin B₁", correct: false },
        { text: "Niacin (Vitamin B₃)", correct: true },
        { text: "Vitamin C", correct: false },
        { text: "Vitamin D", correct: false }
    ]
},

{
    question: "Which enzyme requires biotin as its coenzyme?",
    answers: [
        { text: "Pyruvate carboxylase", correct: true },
        { text: "Hexokinase", correct: false },
        { text: "Lactate dehydrogenase", correct: false },
        { text: "Pepsin", correct: false }
    ]
},

{
    question: "The active coenzyme form of vitamin B₆ is:",
    answers: [
        { text: "Pyridoxal phosphate", correct: true },
        { text: "Thiamine pyrophosphate", correct: false },
        { text: "Coenzyme A", correct: false },
        { text: "FAD", correct: false }
    ]
},

{
    question: "Which vitamin functions as tetrahydrofolate (THF) in one-carbon metabolism?",
    answers: [
        { text: "Folic acid", correct: true },
        { text: "Vitamin B₁₂", correct: false },
        { text: "Vitamin C", correct: false },
        { text: "Vitamin D", correct: false }
    ]
},

{
    question: "A deficiency of intrinsic factor primarily leads to deficiency of:",
    answers: [
        { text: "Vitamin B₁", correct: false },
        { text: "Vitamin B₁₂", correct: true },
        { text: "Vitamin C", correct: false },
        { text: "Vitamin K", correct: false }
    ]
},

{
    question: "Which lipoprotein transports dietary triglycerides from the intestine to peripheral tissues?",
    answers: [
        { text: "HDL", correct: false },
        { text: "LDL", correct: false },
        { text: "Chylomicrons", correct: true },
        { text: "VLDL", correct: false }
    ]
},

{
    question: "The major apolipoprotein present in HDL is:",
    answers: [
        { text: "Apo A-I", correct: true },
        { text: "Apo B-100", correct: false },
        { text: "Apo C-II", correct: false },
        { text: "Apo E", correct: false }
    ]
},

{
    question: "Ketone bodies are synthesized mainly in the:",
    answers: [
        { text: "Kidney", correct: false },
        { text: "Liver", correct: true },
        { text: "Brain", correct: false },
        { text: "Pancreas", correct: false }
    ]
},

{
    question: "The principal ketone body utilized by peripheral tissues is:",
    answers: [
        { text: "Acetoacetate", correct: false },
        { text: "β-Hydroxybutyrate", correct: true },
        { text: "Acetone", correct: false },
        { text: "Pyruvate", correct: false }
    ]
},

{
    question: "Which metabolic pathway produces the greatest amount of ATP?",
    answers: [
        { text: "Glycolysis", correct: false },
        { text: "Electron Transport Chain", correct: true },
        { text: "Pentose Phosphate Pathway", correct: false },
        { text: "Urea Cycle", correct: false }
    ]
},

{
    question: "The rate-limiting enzyme of cholesterol synthesis is:",
    answers: [
        { text: "HMG-CoA reductase", correct: true },
        { text: "Acetyl-CoA carboxylase", correct: false },
        { text: "Hormone-sensitive lipase", correct: false },
        { text: "Lipoprotein lipase", correct: false }
    ]
},

{
    question: "Statin drugs primarily inhibit:",
    answers: [
        { text: "Fat absorption", correct: false },
        { text: "HMG-CoA reductase", correct: true },
        { text: "Pancreatic lipase", correct: false },
        { text: "LDL receptors", correct: false }
    ]
},

{
    question: "The rate-limiting enzyme in fatty acid synthesis is:",
    answers: [
        { text: "Acetyl-CoA carboxylase", correct: true },
        { text: "Fatty acid synthase", correct: false },
        { text: "Hormone-sensitive lipase", correct: false },
        { text: "Citrate synthase", correct: false }
    ]
},

{
    question: "Which vitamin deficiency causes increased bleeding time due to impaired synthesis of clotting factors?",
    answers: [
        { text: "Vitamin A", correct: false },
        { text: "Vitamin K", correct: true },
        { text: "Vitamin C", correct: false },
        { text: "Vitamin D", correct: false }
    ]
},

{
    question: "The major storage form of iron in the body is:",
    answers: [
        { text: "Ferritin", correct: true },
        { text: "Hemoglobin", correct: false },
        { text: "Transferrin", correct: false },
        { text: "Myoglobin", correct: false }
    ]
},

{
    question: "The plasma protein responsible for transporting iron is:",
    answers: [
        { text: "Albumin", correct: false },
        { text: "Ferritin", correct: false },
        { text: "Transferrin", correct: true },
        { text: "Ceruloplasmin", correct: false }
    ]
},

{
    question: "A patient with severe vitamin D deficiency is most likely to have:",
    answers: [
        { text: "Hypercalcemia", correct: false },
        { text: "Hypocalcemia", correct: true },
        { text: "Hypernatremia", correct: false },
        { text: "Hyperkalemia", correct: false }
    ]
},

{
    question: "The enzyme responsible for converting angiotensin I to angiotensin II is:",
    answers: [
        { text: "Renin", correct: false },
        { text: "Angiotensin-converting enzyme (ACE)", correct: true },
        { text: "Pepsin", correct: false },
        { text: "Trypsin", correct: false }
    ]
},

{
    question: "Which condition is characterized by excessive ketone body production?",
    answers: [
        { text: "Diabetic ketoacidosis", correct: true },
        { text: "Iron deficiency anemia", correct: false },
        { text: "Pernicious anemia", correct: false },
        { text: "Scurvy", correct: false }
    ]
},

{
    question: "The respiratory quotient (RQ) of a mixed diet is approximately:",
    answers: [
        { text: "0.70", correct: false },
        { text: "0.82", correct: true },
        { text: "1.00", correct: false },
        { text: "1.20", correct: false }
    ]
},

{
    question: "Which organ is the major site of gluconeogenesis during prolonged fasting?",
    answers: [
        { text: "Liver", correct: true },
        { text: "Brain", correct: false },
        { text: "Heart", correct: false },
        { text: "Spleen", correct: false }
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
    question: "Hyperammonemia is most directly associated with disorders of the:",
    answers: [
        { text: "Glycolytic pathway", correct: false },
        { text: "Urea cycle", correct: true },
        { text: "Pentose phosphate pathway", correct: false },
        { text: "Citric acid cycle", correct: false }
    ]
},

{
    question: "The major fuel utilized by skeletal muscle during prolonged exercise is:",
    answers: [
        { text: "Fatty acids", correct: true },
        { text: "Vitamin C", correct: false },
        { text: "Calcium", correct: false },
        { text: "Urea", correct: false }
    ]
},

// ==========================
// EXTREME QUESTIONS (26–50)
// ==========================

{
    question: "The most important factor determining glomerular filtration rate (GFR) is:",
    answers: [
        { text: "Glomerular capillary hydrostatic pressure", correct: true },
        { text: "Blood glucose concentration", correct: false },
        { text: "Plasma protein synthesis", correct: false },
        { text: "Urine volume", correct: false }
    ]
},

{
    question: "Which nephron segment reabsorbs the greatest percentage of filtered water?",
    answers: [
        { text: "Proximal convoluted tubule", correct: true },
        { text: "Loop of Henle", correct: false },
        { text: "Distal convoluted tubule", correct: false },
        { text: "Collecting duct", correct: false }
    ]
},

{
    question: "The filtration membrane prevents filtration mainly of:",
    answers: [
        { text: "Large plasma proteins", correct: true },
        { text: "Water", correct: false },
        { text: "Sodium ions", correct: false },
        { text: "Glucose", correct: false }
    ]
},

{
    question: "Which hormone is responsible for increasing potassium excretion by the kidneys?",
    answers: [
        { text: "Aldosterone", correct: true },
        { text: "ADH", correct: false },
        { text: "Renin", correct: false },
        { text: "Insulin", correct: false }
    ]
},

{
    question: "The normal adult glomerular filtration rate is approximately:",
    answers: [
        { text: "125 mL/min", correct: true },
        { text: "25 mL/min", correct: false },
        { text: "250 mL/min", correct: false },
        { text: "500 mL/min", correct: false }
    ]
},

{
    question: "The major function of the vasa recta is to:",
    answers: [
        { text: "Preserve the medullary osmotic gradient", correct: true },
        { text: "Filter blood", correct: false },
        { text: "Produce urine", correct: false },
        { text: "Secrete renin", correct: false }
    ]
},

{
    question: "The principal buffer system in extracellular fluid is:",
    answers: [
        { text: "Bicarbonate buffer", correct: true },
        { text: "Protein buffer", correct: false },
        { text: "Phosphate buffer", correct: false },
        { text: "Hemoglobin buffer", correct: false }
    ]
},

{
    question: "Hydrogen ions are secreted mainly by which cells in the collecting duct?",
    answers: [
        { text: "Intercalated cells", correct: true },
        { text: "Principal cells", correct: false },
        { text: "Podocytes", correct: false },
        { text: "Mesangial cells", correct: false }
    ]
},

{
    question: "Which condition results from complete absence of ADH secretion?",
    answers: [
        { text: "Central diabetes insipidus", correct: true },
        { text: "Diabetes mellitus", correct: false },
        { text: "Nephrotic syndrome", correct: false },
        { text: "Glomerulonephritis", correct: false }
    ]
},

{
    question: "The kidney activates vitamin D into:",
    answers: [
        { text: "Calcitriol", correct: true },
        { text: "Calcidiol", correct: false },
        { text: "Ergocalciferol", correct: false },
        { text: "Cholecalciferol", correct: false }
    ]
},

{
    question: "A decrease in renal blood flow stimulates:",
    answers: [
        { text: "Renin secretion", correct: true },
        { text: "Insulin secretion", correct: false },
        { text: "Glucagon secretion", correct: false },
        { text: "Calcitonin secretion", correct: false }
    ]
},

{
    question: "The nephron segment most responsible for establishing the medullary osmotic gradient is:",
    answers: [
        { text: "Loop of Henle", correct: true },
        { text: "Proximal tubule", correct: false },
        { text: "Bowman's capsule", correct: false },
        { text: "Distal tubule", correct: false }
    ]
},

{
    question: "The majority of filtered bicarbonate is reabsorbed in the:",
    answers: [
        { text: "Proximal convoluted tubule", correct: true },
        { text: "Distal convoluted tubule", correct: false },
        { text: "Collecting duct", correct: false },
        { text: "Loop of Henle", correct: false }
    ]
},

{
    question: "Which of the following best estimates renal plasma flow?",
    answers: [
        { text: "PAH clearance", correct: true },
        { text: "Creatinine clearance", correct: false },
        { text: "Inulin clearance", correct: false },
        { text: "Urea clearance", correct: false }
    ]
},

{
    question: "The kidney contributes to red blood cell production through secretion of:",
    answers: [
        { text: "Erythropoietin", correct: true },
        { text: "Renin", correct: false },
        { text: "Calcitriol", correct: false },
        { text: "ADH", correct: false }
    ]
},

{
    question: "The filtration slits are formed by:",
    answers: [
        { text: "Podocyte foot processes", correct: true },
        { text: "Mesangial cells", correct: false },
        { text: "Macula densa", correct: false },
        { text: "Endothelial cells", correct: false }
    ]
},

{
    question: "Which acid-base disorder is characterized by decreased blood pH due to excess hydrogen ions?",
    answers: [
        { text: "Metabolic acidosis", correct: true },
        { text: "Metabolic alkalosis", correct: false },
        { text: "Respiratory alkalosis", correct: false },
        { text: "Respiratory compensation", correct: false }
    ]
},

{
    question: "The strongest physiological stimulus for ADH secretion is:",
    answers: [
        { text: "Increased plasma osmolarity", correct: true },
        { text: "Low calcium", correct: false },
        { text: "Low glucose", correct: false },
        { text: "High protein intake", correct: false }
    ]
},

{
    question: "Which nephron segment is known as the diluting segment?",
    answers: [
        { text: "Thick ascending limb of Loop of Henle", correct: true },
        { text: "Descending limb", correct: false },
        { text: "Collecting duct", correct: false },
        { text: "Bowman's capsule", correct: false }
    ]
},

{
    question: "A patient with severe renal failure is most likely to develop:",
    answers: [
        { text: "Hyperkalemia", correct: true },
        { text: "Hypoglycemia", correct: false },
        { text: "Hyperthyroidism", correct: false },
        { text: "Hypocalcemia due to insulin deficiency", correct: false }
    ]
},

{
    question: "The renal threshold for glucose is exceeded in:",
    answers: [
        { text: "Diabetes mellitus", correct: true },
        { text: "Diabetes insipidus", correct: false },
        { text: "Hypothyroidism", correct: false },
        { text: "Asthma", correct: false }
    ]
},

{
    question: "Which cells detect sodium chloride concentration in the distal nephron?",
    answers: [
        { text: "Macula densa cells", correct: true },
        { text: "Podocytes", correct: false },
        { text: "Mesangial cells", correct: false },
        { text: "Principal cells", correct: false }
    ]
},

{
    question: "Which transport mechanism is responsible for glucose reabsorption in the proximal tubule?",
    answers: [
        { text: "Secondary active transport", correct: true },
        { text: "Simple diffusion", correct: false },
        { text: "Osmosis", correct: false },
        { text: "Facilitated diffusion", correct: false }
    ]
},

{
    question: "Countercurrent multiplication primarily occurs in the:",
    answers: [
        { text: "Loop of Henle", correct: true },
        { text: "Collecting duct", correct: false },
        { text: "Bowman's capsule", correct: false },
        { text: "Proximal tubule", correct: false }
    ]
},

{
    question: "The most accurate substance used experimentally to measure GFR is:",
    answers: [
        { text: "Inulin", correct: true },
        { text: "Creatinine", correct: false },
        { text: "Urea", correct: false },
        { text: "Glucose", correct: false }
    ]
}
];