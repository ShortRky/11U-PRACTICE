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
            content: "<h3>SOH-CAH-TOA</h3><ul><li><strong>SOH:</strong> sinθ = Opposite/Hypotenuse</li><li><strong>CAH:</strong> cosθ = Adjacent/Hypotenuse</li><li><strong>TOA:</strong> tanθ = Opposite/Adjacent</li></ul><h3>Reciprocals</h3><ul><li>csc = 1/sin</li><li>sec = 1/cos</li><li>cot = 1/tan</li></ul>",
            remember: [{ title: "SOH-CAH-TOA", content: "Sine:Opposite/Hyp | Cosine:Adj/Hyp | Tangent:Opposite/Adj" }],
            consider: [{ title: "Calculator", content: "Make sure calculator is in DEGREE mode!" }]
        },
        "special-angles": {
            title: "Special Angles",
            content: "<table><tr><th>Angle</th><th>sin</th><th>cos</th><th>tan</th></tr><tr><td>0°</td><td>0</td><td>1</td><td>0</td></tr><tr><td>30°</td><td>½</td><td>√³⁄₂</td><td>1/√3</td></tr><tr><td>45°</td><td>√²⁄₂</td><td>√²⁄₂</td><td>1</td></tr><tr><td>60°</td><td>√³⁄₂</td><td>½</td><td>√3</td></tr><tr><td>90°</td><td>1</td><td>0</td><td>undefined</td></tr></table>",
            remember: [{ title: "30-60-90", content: "sin30=½, sin60=√³⁄₂" }, { title: "45-45-90", content: "sin45=cos45=√²⁄₂" }],
            consider: [{ title: "Reciprocals", content: "csc30=2, sec60=2, cot45=1" }]
        },
        "solving-triangles": {
            title: "Solving Triangles",
            content: "<h3>Steps</h3><ol><li>Identify what you know</li><li>Choose trig ratio</li><li>Set up equation</li><li>Solve</li></ol><h3>Example</h3><p>θ=30deg, adjacent=10. Find hypotenuse.</p><p>cos30 = adj/h</p><p>√³⁄₂ = 10/h</p><p>h = 20/√3 = 11.55</p>",
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
            content: "<h3>Fundamental Identities</h3><ul><li>sin²θ + cos²θ = 1</li><li>1 + tan²θ = sec²θ</li><li>1 + cot²θ = csc²θ</li></ul><h3>Angle Sum/Difference</h3><ul><li>sin(A ± B) = sinA cosB ± cosA sinB</li><li>cos(A ± B) = cosA cosB ∓ sinA sinB</li><li>tan(A ± B) = (tanA ± tanB) / (1 ∓ tanA tanB)</li></ul>",
            remember: [{ title: "Pythagorean", content: "sin² + cos² = 1 is core" }],
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
        { id: 1, type: "multiple-choice", question: "What is sin(θ)?", options: [{ text: "Op/Adj", correct: false }, { text: "Op/Hyp", correct: true }, { text: "Adj/Hyp", correct: false }, { text: "Hyp/Op", correct: false }], hint: "SOH", solution: "sin = Opposite/Hypotenuse" },
        { id: 2, type: "short-answer", question: "What is cos(60°)?", hint: "Special angle!", solution: "cos60 = ½" },
        { id: 3, type: "multiple-choice", question: "Which ratio for opposite and adjacent?", options: [{ text: "Sine", correct: false }, { text: "Cosine", correct: false }, { text: "Tangent", correct: true }, { text: "Secant", correct: false }], hint: "TOA", solution: "Tangent = Op/Adj" },
        { id: 4, type: "short-answer", question: "Find tan(45°).", hint: "45-45-90", solution: "tan45 = 1" },
        { id: 5, type: "multiple-choice", question: "What is sin(30°)?", options: [{ text: "√3/2", correct: false }, { text: "½", correct: true }, { text: "√2/2", correct: false }, { text: "1", correct: false }], hint: "Special!", solution: "sin30 = ½" }
        ,
        { id: 6, type: "short-answer", question: "Give the coordinates for 150° on the unit circle.", hint: "Reflect 30° into QII", solution: "(−√3/2, ½)" },
        { id: 7, type: "multiple-choice", question: "What is cos(π/3)?", options: [{ text: "½", correct: true }, { text: "√3/2", correct: false }, { text: "0", correct: false }, { text: "1", correct: false }], hint: "Convert to degrees", solution: "cos(π/3)=cos60°=½" },
        { id: 8, type: "short-answer", question: "Simplify using identities: sin² x + cos² x", hint: "Pythagorean identity", solution: "1" }
    ]
};

// Exponential Functions Data
const exponentialData = {
    id: "exponential",
    title: "Exponential Functions",
    subtitle: "Growth, Decay & Applications",
    intro: "<p>Exponential functions model rapid growth or decay: <strong>y = a·bˣ</strong> where b>0.</p>",

    subsections: [
        { id: "basics", title: "Exponential Basics", icon: "📘" },
        { id: "graphs-exp", title: "Graphs & Transformations", icon: "🧭" },
        { id: "logs", title: "Logs & Solving", icon: "🔎" },
        { id: "applications", title: "Real-World Apps", icon: "🌍" }
    ],

    subsectionContent: {
        "basics": {
            title: "Exponential Basics & Examples",
            content: `
                <h3>Form</h3>
                <p>y = a·b^x where a ≠ 0 and b > 0. If b > 1 → growth; if 0 < b < 1 → decay.</p>

                <h3>Key Formulas</h3>
                <p>Discrete compound: A = P(1 + r/n)ⁿᵗ</p>
                <p>Continuous compound: A = Pe^{rt}</p>

                <h3>Worked Examples</h3>
                <p><strong>Example 1 — Simple power:</strong> Solve 2ˣ = 32. Since 32 = 2^5, x = 5.</p>
                <p><strong>Example 2 — Using logs:</strong> Solve 3·2ᵗ = 50. Isolate: 2ᵗ = 50/3. Take ln: t = ln(50/3) / ln 2 ≈ 4.058.</p>
                <p><strong>Example 3 — Continuous growth:</strong> A = Pe½. If P=100, r=0.03, A=150 → e^{0.03t} = 1.5 → t = ln(1.5)/0.03 ≈ 13.51.</p>
            `,
            remember: [{ title: "Quick Steps", content: "Isolate the exponential, take logs if needed, solve for the variable." }],
            consider: [{ title: "Units", content: "Match time units for r and t when using growth/decay formulas." }]
        },
        "graphs-exp": {
            title: "Graphs & Transformations",
            content: "<h3>Shape</h3><p>Exponential graphs are asymptotic to a horizontal line. Transformations: y = a·b^{(x−h)} + k shifts horizontally by h and vertically by k. Amplitude is not used for exponentials.</p>",
            remember: [{ title: "Asymptote", content: "Horizontal asymptote y=k for y = a·b^{(x−h)}+k" }],
            consider: [{ title: "Graphing Tip", content: "Plot the asymptote, one point at x=h (y=a+k), and a second point; sketch curve approaching the asymptote." }]
        },
        "logs": {
            title: "Logarithms & Solving Exponentials",
            content: "<h3>Logs Definition</h3><p>logB(y) = x is the inverse of bˣ = y. That means x = logB(y).</p><h3>Solving</h3><p>To solve a·bˣ = y: isolate bˣ → bˣ = y/a → x = logB(y/a). Use change-of-base: log_b(t) = ln(t)/ln(b).</p>",
            remember: [{ title: "Inverse", content: "Logs undo exponentials: logB(bˣ) = x" }],
            consider: [{ title: "Change-of-base", content: "If calculator lacks logB, use ln: logB(t) = ln(t)/ln(b)." }]
        },
        "applications": {
            title: "Real-World Applications",
            content: "<h3>Population Growth</h3><p>Often modelled with P(t)=P₀ eʳᵗ for continuous growth.</p><h3>Radioactive Decay</h3><p>Use N(t)=N_0 e^{−λt}. Half-life T½ relates: λ = ln 2 / T½.</p><h3>Finance</h3><p>Compound interest: A = P(1+r/n)ⁿᵗ or A = Peʳᵗ for continuous.</p>",
            remember: [{ title: "Half-life", content: "λ = ln 2 / T½ lets you convert between half-life and decay constant." }],
            consider: [{ title: "Model Choice", content: "Use discrete compound when compounding intervals are known; use continuous for continuously compounding processes." }]
        }
    },

    practice: [
        { id: 1, type: "short-answer", question: "If y=3·2ˣ, what is y when x=4?", hint: "Compute 2^4", solution: "y=3·16=48" },
        { id: 2, type: "short-answer", question: "Find t when A=Peʳᵗ with P=100, A=200, r=0.05", hint: "Take natural log", solution: "t = ln(2)/0.05 ≈ 13.86" },
        { id: 3, type: "multiple-choice", question: "Which base gives exponential decay?", options: [{ text: "b = 1.2", correct: false }, { text: "b = 0.8", correct: true }, { text: "b = 1", correct: false }, { text: "b = -2", correct: false }], hint: "0<b<1 means decay", solution: "b=0.8" },
        { id: 4, type: "short-answer", question: "Solve for x: 5^x = 125", hint: "Express 125 as power of 5", solution: "x = 3" },
        { id: 5, type: "short-answer", question: "Solve for t: 250 = 100 e^{0.04t}", hint: "Isolate e^{0.04t} then ln", solution: "t = ln(2.5)/0.04 ≈ 22.99" },
        { id: 6, type: "short-answer", question: "A sum of $1000 is invested at 3% compounded monthly. What is A after 5 years?", hint: "Use A = P(1 + r/n)ⁿᵗ", solution: "A = 1000(1+0.03/12)^{60} ≈ $1,161.62" },
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

    // Attach exponential content into the Functions topic as separate, prefixed subsections
    if (!kaliEduData.topics.functions) kaliEduData.topics.functions = {};
    if (!Array.isArray(kaliEduData.topics.functions.subsections)) kaliEduData.topics.functions.subsections = kaliEduData.topics.functions.subsections || [];
    if (!kaliEduData.topics.functions.subsectionContent) kaliEduData.topics.functions.subsectionContent = {};

    if (typeof exponentialData !== 'undefined') {
        // Merge subsection metadata (prefix ids to avoid collisions)
        if (Array.isArray(exponentialData.subsections)) {
            exponentialData.subsections.forEach(s => {
                const prefixedId = `exponential-${s.id}`;
                // Only add if not already present
                if (!kaliEduData.topics.functions.subsections.find(x => x.id === prefixedId)) {
                    kaliEduData.topics.functions.subsections.push({ id: prefixedId, title: s.title, icon: s.icon });
                }
            });
        }

        // Add each subsection's content under the prefixed key so it renders like other subsections
        if (exponentialData.subsectionContent) {
            for (const [key, part] of Object.entries(exponentialData.subsectionContent)) {
                const prefixedKey = `exponential-${key}`;
                // Only set if not already defined (preserve existing overrides)
                if (!kaliEduData.topics.functions.subsectionContent[prefixedKey]) {
                    kaliEduData.topics.functions.subsectionContent[prefixedKey] = {
                        title: part.title || '',
                        content: part.content || '',
                        remember: Array.isArray(part.remember) ? part.remember : [],
                        consider: Array.isArray(part.consider) ? part.consider : []
                    };
                }
            }
        }

        // Append practice problems from exponentialData into functions practice (append), avoiding id collisions
        if (Array.isArray(exponentialData.practice) && exponentialData.practice.length > 0) {
            if (!Array.isArray(kaliEduData.topics.functions.practice)) kaliEduData.topics.functions.practice = [];
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

        // Remove any accidentally-added exponential 'practice' subsection variants
        kaliEduData.topics.functions.subsections = kaliEduData.topics.functions.subsections.filter(s => !/^exponential-.*practice/.test(s.id));

        // Ensure the pre-existing 'practice' subsection (id === 'practice') is the last item in the list
        const practiceIndex = kaliEduData.topics.functions.subsections.findIndex(s => s.id === 'practice');
        if (practiceIndex !== -1) {
            const [practiceItem] = kaliEduData.topics.functions.subsections.splice(practiceIndex, 1);
            kaliEduData.topics.functions.subsections.push(practiceItem);
        }

        // Combine exponential prefixed subsections (basics, graphs, logs) into a single 'exponential-functions' subsection
        (function combineExponentialSections() {
            const contentKeys = ['exponential-basics', 'exponential-graphs-exp', 'exponential-logs'];
            let combinedHtml = '';
            let combinedRemember = [];
            let combinedConsider = [];

            contentKeys.forEach(key => {
                const part = kaliEduData.topics.functions.subsectionContent[key];
                if (part) {
                    if (part.title) combinedHtml += `<h3>${part.title}</h3>`;
                    combinedHtml += part.content || '';
                    if (Array.isArray(part.remember)) combinedRemember = combinedRemember.concat(part.remember);
                    if (Array.isArray(part.consider)) combinedConsider = combinedConsider.concat(part.consider);

                    // remove the old key
                    delete kaliEduData.topics.functions.subsectionContent[key];
                }
            });

            if (combinedHtml) {
                // Add consolidated subsection content
                kaliEduData.topics.functions.subsectionContent['exponential-functions'] = {
                    title: 'Exponential Functions',
                    content: combinedHtml,
                    remember: combinedRemember,
                    consider: combinedConsider
                };

                // Remove individual prefixed subsection entries from the subsections list
                kaliEduData.topics.functions.subsections = kaliEduData.topics.functions.subsections.filter(s => !contentKeys.includes(s.id));

                // Insert a single subsection entry for the consolidated Exponential Functions, placing it before applications if present
                const appsIndex = kaliEduData.topics.functions.subsections.findIndex(s => s.id === 'exponential-applications' || s.id === 'exponential-applications');
                const insertIndex = appsIndex !== -1 ? appsIndex : kaliEduData.topics.functions.subsections.length;
                // avoid duplicates
                if (!kaliEduData.topics.functions.subsections.find(s => s.id === 'exponential-functions')) {
                    kaliEduData.topics.functions.subsections.splice(insertIndex, 0, { id: 'exponential-functions', title: 'Exponential Functions', icon: '📊' });
                }
            }
        })();
    }
}
