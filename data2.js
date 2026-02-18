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
    },
    
    practice: [
        { id: 1, type: "multiple-choice", question: "What is sin(theta)?", options: [{ text: "Op/Adj", correct: false }, { text: "Op/Hyp", correct: true }, { text: "Adj/Hyp", correct: false }, { text: "Hyp/Op", correct: false }], hint: "SOH", solution: "sin = Opposite/Hypotenuse" },
        { id: 2, type: "short-answer", question: "What is cos(60deg)?", hint: "Special angle!", solution: "cos60 = 1/2" },
        { id: 3, type: "multiple-choice", question: "Which ratio for opposite and adjacent?", options: [{ text: "Sine", correct: false }, { text: "Cosine", correct: false }, { text: "Tangent", correct: true }, { text: "Secant", correct: false }], hint: "TOA", solution: "Tangent = Op/Adj" },
        { id: 4, type: "short-answer", question: "Find tan(45deg).", hint: "45-45-90", solution: "tan45 = 1" },
        { id: 5, type: "multiple-choice", question: "What is sin(30deg)?", options: [{ text: "sqrt3/2", correct: false }, { text: "1/2", correct: true }, { text: "sqrt2/2", correct: false }, { text: "1", correct: false }], hint: "Special!", solution: "sin30 = 1/2" }
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
