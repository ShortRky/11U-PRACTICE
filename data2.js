// KaliEdu MVP - Additional Data Store
// Trigonometry and Sequences Content

// Trigonometry Data
const trigonometryData = {
    id: "trigonometry",
    title: "Trigonometry",
    subtitle: "Understanding Angles and Ratios",
    intro: "<p>Welcome to <strong>Trigonometry</strong> - the study of triangles, angles, and their relationships.</p>",
    
    subsections: [
        { id: "intro-trig", title: "Introduction", icon: "📐" },
        { id: "trig-ratios", title: "Trig Ratios", icon: "📊" },
        { id: "special-angles", title: "Special Angles", icon: "⭐" },
        { id: "unit-circle", title: "Unit Circle", icon: "🌀" },
        { id: "identities", title: "Identities & Identities", icon: "📚" },
        { id: "angle-conversion", title: "Angle Conversion", icon: "🔁" },
        { id: "graphs-trig", title: "Graphs of Trig Functions", icon: "📈" },
        { id: "solving-triangles", title: "Solving Triangles", icon: "🔺" },
        { id: "practice-trig", title: "Practice", icon: "✨" }
    ],
    
    subsectionContent: {
        "intro-trig": {
            title: "Introduction to Trigonometry",
            content: "<h3>What is Trigonometry?</h3><p><strong>Trigonometry</strong> studies relationships between sides and angles of triangles.</p><h3>Right Triangle Basics</h3><ul><li><strong>Hypotenuse:</strong> Longest side, opposite 90deg</li><li><strong>Opposite:</strong> Side opposite to angle theta</li><li><strong>Adjacent:</strong> Side next to angle (not hypotenuse)</li></ul>",
            remember: [{ title: "Right Triangle", content: "One angle is 90deg. Hypotenuse is opposite the right angle." }],
            consider: [{ title: "Key Idea", content: "Opposite and adjacent change depending on which angle!" }]
        },
        "trig-ratios": {
            title: "Trigonometric Ratios",
            content: "<h3>SOH-CAH-TOA</h3><ul><li><strong>SOH:</strong> sin theta = Opposite/Hypotenuse</li><li><strong>CAH:</strong> cos theta = Adjacent/Hypotenuse</li><li><strong>TOA:</strong> tan theta = Opposite/Adjacent</li></ul><h3>Reciprocals</h3><ul><li>csc = 1/sin</li><li>sec = 1/cos</li><li>cot = 1/tan</li></ul>",
            remember: [{ title: "SOH-CAH-TOA", content: "Sine:Opposite/Hyp | Cosine:Adj/Hyp | Tangent:Opposite/Adj" }],
            consider: [{ title: "Calculator", content: "Make sure calculator is in DEGREE mode!" }]
        },
        "special-angles": {
            title: "Special Angles",
            content: "<table><tr><th>Angle</th><th>sin</th><th>cos</th><th>tan</th></tr><tr><td>0deg</td><td>0</td><td>1</td><td>0</td></tr><tr><td>30deg</td><td>1/2</td><td>sqrt3/2</td><td>1/sqrt3</td></tr><tr><td>45deg</td><td>sqrt2/2</td><td>sqrt2/2</td><td>1</td></tr><tr><td>60deg</td><td>sqrt3/2</td><td>1/2</td><td>sqrt3</td></tr><tr><td>90deg</td><td>1</td><td>0</td><td>undefined</td></tr></table>",
            remember: [{ title: "30-60-90", content: "sin30=1/2, sin60=sqrt3/2" }, { title: "45-45-90", content: "sin45=cos45=sqrt2/2" }],
            consider: [{ title: "Reciprocals", content: "csc30=2, sec60=2, cot45=1" }]
        },
        "solving-triangles": {
            title: "Solving Triangles",
            content: "<h3>Steps</h3><ol><li>Identify what you know</li><li>Choose trig ratio</li><li>Set up equation</li><li>Solve</li></ol><h3>Example</h3><p>theta=30deg, adjacent=10. Find hypotenuse.</p><p>cos30 = adj/h</p><p>sqrt3/2 = 10/h</p><p>h = 20/sqrt3 = 11.55</p>",
            remember: [{ title: "Pythagorean", content: "a squared + b squared = c squared" }],
            consider: [{ title: "Check", content: "Hypotenuse is always longest side!" }]
        }
        ,
        "unit-circle": {
            title: "The Unit Circle",
            content: "<h3>Unit Circle Basics</h3><p>The unit circle has radius 1 centered at the origin. Each point (x,y) corresponds to (cos θ, sin θ).</p><h3>Quadrants & Signs</h3><p>Use the unit circle to read sign changes: cos is x, sin is y.</p><h3>Key Coordinates</h3><ul><li>0° → (1,0)</li><li>30° → (√3/2,1/2)</li><li>45° → (√2/2,√2/2)</li><li>60° → (1/2,√3/2)</li><li>90° → (0,1)</li></ul>",
            remember: [{ title: "Coordinates", content: "(cosθ, sinθ) on unit circle" }],
            consider: [{ title: "Tip", content: "Memorize key coordinates; reflect for other quadrants." }]
        },
        "identities": {
            title: "Trig Identities",
            content: "<h3>Fundamental Identities</h3><ul><li>sin^2 θ + cos^2 θ = 1</li><li>1 + tan^2 θ = sec^2 θ</li><li>1 + cot^2 θ = csc^2 θ</li></ul><h3>Angle Sum/Difference</h3><ul><li>sin(A ± B) = sinA cosB ± cosA sinB</li><li>cos(A ± B) = cosA cosB ∓ sinA sinB</li><li>tan(A ± B) = (tanA ± tanB) / (1 ∓ tanA tanB)</li></ul>",
            remember: [{ title: "Pythagorean", content: "sin^2 + cos^2 = 1 is core" }],
            consider: [{ title: "Strategy", content: "Use identities to transform expressions and solve equations." }]
        },
        "angle-conversion": {
            title: "Angle Conversion & Radians",
            content: "<h3>Degrees ↔ Radians</h3><p>Radians = degrees × π/180. Degrees = radians × 180/π.</p><h3>Common Conversions</h3><ul><li>30° = π/6</li><li>45° = π/4</li><li>60° = π/3</li><li>90° = π/2</li></ul>",
            remember: [{ title: "Formula", content: "radians = degrees × π/180" }],
            consider: [{ title: "Calculator", content: "Switch modes when calculating; many problems use radians." }]
        },
        "graphs-trig": {
            title: "Graphs of Trig Functions",
            content: "<h3>sin, cos, tan Shapes</h3><p>sin & cos: wave-like with period 2π. tan: period π with vertical asymptotes.</p><h3>Amplitude, Period, Phase</h3><p>y = a sin(bx - c) + d → amplitude = |a|, period = 2π/|b|, phase shift = c/b, vertical shift = d.</p>",
            remember: [{ title: "Period", content: "Period of sin/cos = 2π, tan = π" }],
            consider: [{ title: "Sketching", content: "Find amplitude and period first, then plot key points." }]
        }
    },
    
    practice: [
        { id: 1, type: "multiple-choice", question: "What is sin(theta)?", options: [{ text: "Op/Adj", correct: false }, { text: "Op/Hyp", correct: true }, { text: "Adj/Hyp", correct: false }, { text: "Hyp/Op", correct: false }], hint: "SOH", solution: "sin = Opposite/Hypotenuse" },
        { id: 2, type: "short-answer", question: "What is cos(60deg)?", hint: "Special angle!", solution: "cos60 = 1/2" },
        { id: 3, type: "multiple-choice", question: "Which ratio for opposite and adjacent?", options: [{ text: "Sine", correct: false }, { text: "Cosine", correct: false }, { text: "Tangent", correct: true }, { text: "Secant", correct: false }], hint: "TOA", solution: "Tangent = Op/Adj" },
        { id: 4, type: "short-answer", question: "Find tan(45deg).", hint: "45-45-90", solution: "tan45 = 1" },
        { id: 5, type: "multiple-choice", question: "What is sin(30deg)?", options: [{ text: "sqrt3/2", correct: false }, { text: "1/2", correct: true }, { text: "sqrt2/2", correct: false }, { text: "1", correct: false }], hint: "Special!", solution: "sin30 = 1/2" }
        ,
        { id: 6, type: "short-answer", question: "Give the coordinates for 150° on the unit circle.", hint: "Reflect 30° into QII", solution: "(−√3/2, 1/2)" },
        { id: 7, type: "multiple-choice", question: "What is cos(π/3)?", options: [{ text: "1/2", correct: true }, { text: "√3/2", correct: false }, { text: "0", correct: false }, { text: "1", correct: false }], hint: "Convert to degrees", solution: "cos(π/3)=cos60°=1/2" },
        { id: 8, type: "short-answer", question: "Simplify using identities: sin^2 x + cos^2 x", hint: "Pythagorean identity", solution: "1" }
    ]
};

// Exponential Functions Data
const exponentialData = {
    id: "exponential",
    title: "Exponential Functions",
    subtitle: "Growth, Decay & Applications",
    intro: "<p>Exponential functions model rapid growth or decay: <strong>y = a·b^x</strong> where b>0.</p>",

    subsections: [
        { id: "intro-exp", title: "Introduction", icon: "📈" },
        { id: "growth-decay", title: "Growth & Decay", icon: "📉" },
        { id: "compound", title: "Compound Interest", icon: "🏦" },
        { id: "graphs-exp", title: "Graphs & Transformations", icon: "🧭" },
        { id: "logs", title: "Logs & Solving", icon: "🔎" },
        { id: "worked-examples", title: "Worked Examples", icon: "🧮" },
        { id: "applications", title: "Real-World Apps", icon: "🌍" },
        { id: "practice-exp", title: "Practice", icon: "✨" }
    ],

    subsectionContent: {
        "intro-exp": {
            title: "What is an Exponential Function?",
            content: "<h3>Form</h3><p>y = a·b^x, where a ≠ 0 and b > 0. If b>1 → growth. If 0<b<1 → decay.</p>",
            remember: [{ title: "Base", content: "b is the growth/decay factor" }],
            consider: [{ title: "Domain/Range", content: "Domain: all real x. Range: y>0 if a>0 (unless vertical shifts)." }]
        },
        "growth-decay": {
            title: "Growth and Decay",
            content: "<h3>General</h3><p>Exponential growth: y = a·(1 + r)^t. Decay: y = a·(1 − r)^t.</p><h3>Doubling/Half-life</h3><p>Use b = 2^(1/T) for doubling time T, or b = (1/2)^(1/T) for half-life.</p>",
            remember: [{ title: "Quick Check", content: "If b>1 it grows; if 0<b<1 it decays." }],
            consider: [{ title: "Units", content: "t often represents time; ensure r matches period." }]
        },
        "compound": {
            title: "Compound Interest",
            content: "<h3>Formulas</h3><p>Compound n times per year: A = P(1 + r/n)^{nt}.</p><h3>Continuously</h3><p>A = Pe^{rt} when compounding continuously.</p>",
            remember: [{ title: "Continuous", content: "Use e^{rt} for continuous compounding." }],
            consider: [{ title: "APR vs APY", content: "Different compounding periods change final amount." }]
        },
        "graphs-exp": {
            title: "Graphs & Transformations",
            content: "<h3>Shape</h3><p>Exponential graphs are asymptotic to a horizontal line. Transformations: y = a·b^{(x−h)} + k shifts horizontally by h and vertically by k. Amplitude is not used for exponentials.</p>",
            remember: [{ title: "Asymptote", content: "Horizontal asymptote y=k for y = a·b^{(x−h)}+k" }],
            consider: [{ title: "Graphing Tip", content: "Plot the asymptote, one point at x=h (y=a+k), and a second point; sketch curve approaching the asymptote." }]
        },
        "logs": {
            title: "Logarithms & Solving Exponentials",
            content: "<h3>Logs Definition</h3><p>log_b(y) = x is the inverse of b^x = y. That means x = log_b(y).</p><h3>Solving</h3><p>To solve a·b^x = y: isolate b^x → b^x = y/a → x = log_b(y/a). Use change-of-base: log_b(t) = ln(t)/ln(b).</p>",
            remember: [{ title: "Inverse", content: "Logs undo exponentials: log_b(b^x) = x" }],
            consider: [{ title: "Change-of-base", content: "If calculator lacks log_b, use ln: log_b(t) = ln(t)/ln(b)." }]
        },
        "worked-examples": {
            title: "Worked Examples",
            content: "<h3>Example 1 — Simple power</h3><p>Solve 2^x = 32. Since 32 = 2^5, x = 5.</p><h3>Example 2 — Using logs</h3><p>Solve 3·2^t = 50. Isolate: 2^t = 50/3. Take ln: t = ln(50/3) / ln 2 ≈ 4.058.</p><h3>Example 3 — Continuous growth</h3><p>A = Pe^{rt}. If P=100, r=0.03, A=150 → e^{0.03t} = 1.5 → t = ln(1.5)/0.03 ≈ 13.51.</p>",
            remember: [{ title: "Steps", content: "Isolate the exponential, take logs, solve for the variable." }],
            consider: [{ title: "Units", content: "When using ln for continuous models, r must match the time units of t." }]
        },
        "applications": {
            title: "Real-World Applications",
            content: "<h3>Population Growth</h3><p>Often modelled with P(t)=P_0 e^{rt} for continuous growth.</p><h3>Radioactive Decay</h3><p>Use N(t)=N_0 e^{−λt}. Half-life T_{1/2} relates: λ = ln 2 / T_{1/2}.</p><h3>Finance</h3><p>Compound interest: A = P(1+r/n)^{nt} or A = Pe^{rt} for continuous.</p>",
            remember: [{ title: "Half-life", content: "λ = ln 2 / T_{1/2} lets you convert between half-life and decay constant." }],
            consider: [{ title: "Model Choice", content: "Use discrete compound when compounding intervals are known; use continuous for continuously compounding processes." }]
        }
    },

    practice: [
        { id: 1, type: "short-answer", question: "If y=3·2^x, what is y when x=4?", hint: "Compute 2^4", solution: "y=3·16=48" },
        { id: 2, type: "short-answer", question: "Find t when A=Pe^{rt} with P=100, A=200, r=0.05", hint: "Take natural log", solution: "t = ln(2)/0.05 ≈ 13.86" },
        { id: 3, type: "multiple-choice", question: "Which base gives exponential decay?", options: [{ text: "b = 1.2", correct: false }, { text: "b = 0.8", correct: true }, { text: "b = 1", correct: false }, { text: "b = -2", correct: false }], hint: "0<b<1 means decay", solution: "b=0.8" },
        { id: 4, type: "short-answer", question: "Solve for x: 5^x = 125", hint: "Express 125 as power of 5", solution: "x = 3" },
        { id: 5, type: "short-answer", question: "Solve for t: 250 = 100 e^{0.04t}", hint: "Isolate e^{0.04t} then ln", solution: "t = ln(2.5)/0.04 ≈ 22.99" },
        { id: 6, type: "short-answer", question: "A sum of $1000 is invested at 3% compounded monthly. What is A after 5 years?", hint: "Use A = P(1 + r/n)^{nt}", solution: "A = 1000(1+0.03/12)^{60} ≈ $1,161.62" },
        { id: 7, type: "short-answer", question: "A substance has half-life 8 years. What fraction remains after 20 years?", hint: "Use (1/2)^{t/T_{1/2}}", solution: "(1/2)^{20/8} = (1/2)^{2.5} ≈ 0.1768 (≈17.7%)" }
    ]
};

// Sequences Data
const sequencesData = {
    id: "sequences",
    title: "Sequences & Series",
    subtitle: "Patterns and Sums",
    intro: "<p>Welcome to <strong>Sequences & Series</strong> - ordered lists of numbers following patterns.</p>",
    
    subsections: [
        { id: "intro-sequences", title: "Introduction", icon: "📋" },
        { id: "arithmetic-sequences", title: "Arithmetic", icon: "➕" },
        { id: "geometric-sequences", title: "Geometric", icon: "✖️" },
        { id: "series-basics", title: "Series", icon: "∑" },
        { id: "practice-seq", title: "Practice", icon: "✨" }
    ],
    
    subsectionContent: {
        "intro-sequences": {
            title: "Introduction to Sequences",
            content: "<h3>What is a Sequence?</h3><p>A <strong>sequence</strong> is an ordered list of numbers following a pattern. Each number is a <strong>term</strong>.</p><h3>Ways to Describe</h3><ul><li><strong>List:</strong> 2, 4, 6, 8, ...</li><li><strong>Formula:</strong> a_n = 2n</li><li><strong>Recursive:</strong> a1=2, a_(n+1) = a_n + 2</li></ul>",
            remember: [{ title: "Notation", content: "a_n means nth term. a1 is first, a2 is second." }],
            consider: [{ title: "Patterns", content: "Look for patterns in how terms change!" }]
        },
        "arithmetic-sequences": {
            title: "Arithmetic Sequences",
            content: "<h3>Constant Difference</h3><p>Arithmetic sequences add the same amount each time. This is the <strong>common difference</strong> (d).</p><h3>Formula</h3><p class='formula'>a_n = a1 + (n - 1)d</p><h3>Finding d</h3><p>d = a_(n+1) - a_n</p><h3>Example</h3><p>3, 7, 11, 15, ...</p><p>d = 4</p><p>a_n = 3 + (n-1)4 = 4n - 1</p>",
            remember: [{ title: "Formula", content: "a_n = a1 + (n-1)d" }],
            consider: [{ title: "Linear", content: "Arithmetic grows by adding same amount" }]
        },
        "geometric-sequences": {
            title: "Geometric Sequences",
            content: "<h3>Constant Ratio</h3><p>Geometric sequences multiply by the same amount each time. This is the <strong>common ratio</strong> (r).</p><h3>Formula</h3><p class='formula'>a_n = a1 x r^(n-1)</p><h3>Finding r</h3><p>r = a_(n+1) / a_n</p><h3>Example</h3><p>2, 6, 18, 54, ...</p><p>r = 3</p><p>a_n = 2 x 3^(n-1)</p>",
            remember: [{ title: "Formula", content: "a_n = a1 x r^(n-1)" }],
            consider: [{ title: "Exponential", content: "Geometric grows by multiplying same amount" }]
        },
        "series-basics": {
            title: "Introduction to Series",
            content: "<h3>What is a Series?</h3><p>A <strong>series</strong> is the sum of terms in a sequence.</p><h3>Arithmetic Series</h3><p class='formula'>S_n = n(a1 + a_n) / 2</p><h3>Geometric Series</h3><p class='formula'>S_n = a1(1 - r^n) / (1 - r), r not 1</p><h3>Example</h3><p>Sum of 2+4+6+8+10</p><p>S5 = 5(2+10)/2 = 30</p>",
            remember: [{ title: "Sigma", content: "Sigma means sum. Sum from i=1 to n." }],
            consider: [{ title: "Infinite", content: "If |r| < 1, infinite geometric series converges!" }]
        }
    },
    
    practice: [
        { id: 1, type: "short-answer", question: "5th term of 2,5,8,11,...?", hint: "Common difference?", solution: "d=3, a5 = 2+4(3) = 14" },
        { id: 2, type: "multiple-choice", question: "1,2,4,8,16,...?", options: [{ text: "Arithmetic", correct: false }, { text: "Geometric", correct: true }, { text: "Fibonacci", correct: false }, { text: "Harmonic", correct: false }], hint: "Ratio?", solution: "Geometric, r=2" },
        { id: 3, type: "short-answer", question: "10th term: a1=3, d=4", hint: "a_n = a1+(n-1)d", solution: "a10 = 3+9(4) = 39" },
        { id: 4, type: "multiple-choice", question: "Sum of 1+2+4+8+16?", options: [{ text: "31", correct: true }, { text: "15", correct: false }, { text: "30", correct: false }, { text: "63", correct: false }], hint: "Add them", solution: "31" },
        { id: 5, type: "short-answer", question: "Common ratio of 9,3,1,1/3,...", hint: "Divide by previous", solution: "r = 1/3" }
    ]
};

// --- Merge into global data store (if present) so scrpt.js can render these topics ---
if (typeof kaliEduData !== 'undefined' && kaliEduData && kaliEduData.topics) {
    // Replace or merge trigonometry topic so the app uses the expanded version
    kaliEduData.topics.trigonometry = Object.assign({}, kaliEduData.topics.trigonometry || {}, trigonometryData);

    // Attach exponential content into the Functions subsection content keyed as 'exponential-functions'
    if (!kaliEduData.topics.functions) kaliEduData.topics.functions = {};
    if (!kaliEduData.topics.functions.subsectionContent) kaliEduData.topics.functions.subsectionContent = {};

    // Build a combined HTML string for the exponential subsection from exponentialData
    if (typeof exponentialData !== 'undefined') {
        let combined = exponentialData.intro || '';
        if (exponentialData.subsectionContent) {
            for (const key of Object.keys(exponentialData.subsectionContent)) {
                const part = exponentialData.subsectionContent[key];
                combined += `<h3>${part.title}</h3>` + (part.content || '');
            }
        }

        kaliEduData.topics.functions.subsectionContent['exponential-functions'] = {
            title: exponentialData.title || 'Exponential Functions',
            content: combined,
            remember: [],
            consider: []
        };

        // Optionally attach practice problems from exponentialData into functions practice (append)
        if (Array.isArray(exponentialData.practice) && exponentialData.practice.length > 0) {
            if (!Array.isArray(kaliEduData.topics.functions.practice)) kaliEduData.topics.functions.practice = [];
            // avoid id collisions by offsetting ids if necessary (assume numeric ids)
            const existingIds = new Set(kaliEduData.topics.functions.practice.map(p => p.id));
            exponentialData.practice.forEach(p => {
                let newP = Object.assign({}, p);
                while (existingIds.has(newP.id)) {
                    newP.id = (typeof newP.id === 'number') ? newP.id + 1000 : `${newP.id}-exp`;
                }
                existingIds.add(newP.id);
                kaliEduData.topics.functions.practice.push(newP);
            });
        }
    }
}
