// KaliEdu MVP - Data Store
// Ontario 11U Math Functions Content

const kaliEduData = {
    // Site metadata
    site: {
        title: "KaliEdu",
        tagline: "Your calm guide to 11U Math",
        subtitle: "Frieren's Functions",
        description: "A gentle companion to clarify textbook content, provide step-by-step learning, and reduce math anxiety."
    },

    // Navigation menu
    nav: [
        { id: "home", label: "Home", icon: "✦" },
        { id: "getting-started", label: "Getting Started", icon: "▶" },
        { id: "functions", label: "Functions", icon: "ƒ", subsections: true },
        { id: "trigonometry", label: "Trigonometry", icon: "∆" },
        { id: "sequences", label: "Sequences", icon: "📶" },
        { id: "finance", label: "Finance", icon: "💰" },
        { id: "formulas", label: "Formulas", icon: "∑", external: true }
    ],

    // Getting Started Guide
    gettingStarted: {
        id: "getting-started",
        title: "Getting Started",
        subtitle: "Your Learning Journey Begins",
        intro: `
            <p>Welcome to KaliEdu! This guide will help you make the most of your learning experience.</p>
            <p>Think of this as your friendly companion — here to support you, not to overwhelm you.</p>
        `,
        
        sections: [
            {
                title: "How to Use This Site",
                content: `
                    <ol class="guide-steps">
                        <li><strong>Start with the Introduction</strong> — Read the overview to understand what each topic covers.</li>
                        <li><strong>Read Each Subsection</strong> — Take your time. There's no rush!</li>
                        <li><strong>Use the Tip Boxes</strong> — "Remember This" boxes highlight key concepts. "Consider This" boxes offer helpful thinking tips.</li>
                        <li><strong>Practice, Practice, Practice</strong> — Try the practice questions. Don't worry about getting them right the first time!</li>
                        <li><strong>Check Your Answers</strong> — Use hints when stuck, then check solutions to learn.</li>
                    </ol>
                `
            },
            {
                title: "Study Tips for Success",
                content: `
                    <div class="tip-grid">
                        <div class="tip-item">
                            <span class="tip-icon">⏰</span>
                            <h4>Little and Often</h4>
                            <p>Study for 25-30 minutes, then take a 5 minute break. Your brain learns better this way!</p>
                        </div>
                        <div class="tip-item">
                            <span class="tip-icon">📝</span>
                            <h4>Write It Out</h4>
                            <p>Don't just read — write down formulas and try problems yourself.</p>
                        </div>
                        <div class="tip-item">
                            <span class="tip-icon">❓</span>
                            <h4>Ask Questions</h4>
                            <p>If something doesn't make sense, that's okay! Re-read or try the practice questions.</p>
                        </div>
                        <div class="tip-item">
                            <span class="tip-icon">🌙</span>
                            <h4>Rest Matters</h4>
                            <p>Your brain processes what you've learned while you sleep. Don't pull all-nighters!</p>
                        </div>
                    </div>
                `
            },
            {
                title: "Understanding Function Notation",
                content: `
                    <p>Before diving into Functions, let's make sure you understand the notation. This will make everything else easier!</p>
                    
                    <div class="example-box">
                        <p><strong>What does f(x) mean?</strong></p>
                        <p>f(x) is read as "f of x" — it means "the value of the function f when x is..."</p>
                        <ul>
                            <li>f(3) means "plug 3 into function f"</li>
                            <li>f(x+1) means "plug (x+1) into function f"</li>
                            <li>NOT "f times x" — it's function notation!</li>
                        </ul>
                    </div>
                    
                    <div class="remember-box">
                        <p><strong>Quick Reference:</strong></p>
                        <ul>
                            <li><code>f(x)</code> — function named f of x</li>
                            <li><code>g(x)</code> — function named g of x</li>
                            <li><code>h(x)</code> — function named h of x</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "Quick Reference Card",
                content: `
                    <div class="reference-card">
                        <h4>Essential Function Vocabulary</h4>
                        <table class="reference-table">
                            <tr>
                                <td><strong>Function</strong></td>
                                <td>A relation where each input has exactly one output</td>
                            </tr>
                            <tr>
                                <td><strong>Domain</strong></td>
                                <td>All possible x-values (inputs)</td>
                            </tr>
                            <tr>
                                <td><strong>Range</strong></td>
                                <td>All possible y-values (outputs)</td>
                            </tr>
                            <tr>
                                <td><strong>Linear</strong></td>
                                <td>Form f(x) = mx + b (straight line)</td>
                            </tr>
                            <tr>
                                <td><strong>Quadratic</strong></td>
                                <td>Form f(x) = ax² + bx + c (parabola)</td>
                            </tr>
                            <tr>
                                <td><strong>Slope</strong></td>
                                <td>Rate of change (m in mx + b)</td>
                            </tr>
                            <tr>
                                <td><strong>y-intercept</strong></td>
                                <td>Where line crosses y-axis (b in mx + b)</td>
                            </tr>
                        </table>
                    </div>
                `
            }
        ],
        
        cta: "Ready to Learn? Start with Functions →"
    },

    // Topic: Functions (Flagship Section) with Subsections
    topics: {
        functions: {
            id: "functions",
            title: "Functions",
            subtitle: "Understanding Relations and Functions",
            intro: `
                <p>Welcome to <strong>Functions</strong> — the heart of 11U Mathematics. In this section, we'll explore the fundamental concept that connects algebra to real-world relationships.</p>
                <p>Think of a function as a <em>special machine</em>: you put something in, and it gives you something out, following a consistent rule. Just like Frieren's magic — predictable yet beautiful.</p>
            `,
            
            // Subsections for Functions
            subsections: [
                {
                    id: "intro-functions",
                    title: "Introduction to Functions",
                    icon: "📘"
                },
                {
                    id: "function-notation",
                    title: "Function Notation",
                    icon: "📝"
                },
                {
                    id: "domain-range",
                    title: "Domain & Range",
                    icon: "🎯"
                },
                {
                    id: "linear-functions",
                    title: "Linear Functions",
                    icon: "📈"
                },
                {
                    id: "quadratic-functions",
                    title: "Quadratic Functions",
                    icon: "抛物线"
                },
                {
                    id: "exponential-functions",
                    title: "Exponential Functions",
                    icon: "📊"
                },
                {
                    id: "practice",
                    title: "Practice Questions",
                    icon: "✨"
                }
            ],
            
            // Subsection Content
            subsectionContent: {
                "intro-functions": {
                    title: "Introduction to Functions",
                    content: `
                        <h3>What is a Function?</h3>
                        <p>A <strong>function</strong> is a special type of relation where each input (x-value) produces exactly one output (y-value).</p>
                        <div class="concept-diagram">
                            <div class="machine-illustration">
                                <span class="input">Input x</span>
                                <span class="arrow">→</span>
                                <span class="machine">Function Machine</span>
                                <span class="arrow">→</span>
                                <span class="output">Output y</span>
                            </div>
                        </div>
                        <p>The key idea: <strong>one input, one output</strong></p>
                        
                        <h3>Relations vs Functions</h3>
                        <p>A <em>relation</em> is any set of ordered pairs. A <em>function</em> is a special type of relation where no two ordered pairs have the same x-value but different y-values.</p>
                        
                        <div class="example-box">
                            <p><strong>Examples of Relations:</strong></p>
                            <ul>
                                <li>{(1, 2), (2, 4), (3, 6)} — This IS a function (each x has one y)</li>
                                <li>{(1, 2), (1, 3), (2, 4)} — NOT a function (x=1 has two y-values!)</li>
                            </ul>
                        </div>
                        
                        <h3>The Vertical Line Test</h3>
                        <p>To check if a graph represents a function, imagine drawing vertical lines through the graph. If any vertical line crosses the graph more than once, it's NOT a function!</p>
                    `,
                    remember: [
                        {
                            title: "Function Definition",
                            content: "A function assigns each input exactly ONE output. One input cannot produce two different outputs."
                        }
                    ],
                    consider: [
                        {
                            title: "Common Mistake",
                            content: "Don't confuse the x-value with the y-value. The x is the input (what you put in), the y is the output (what you get out)."
                        }
                    ]
                },
                
                "function-notation": {
                    title: "Function Notation",
                    content: `
                        <h3>Understanding f(x)</h3>
                        <p>We write functions using special notation: <code>f(x)</code></p>
                        <p>This is read as "f of x" and means "the function f evaluated at x."</p>
                        
                        <div class="example-box">
                            <p><strong>Example:</strong> If f(x) = 2x + 3, then:</p>
                            <ul>
                                <li>f(1) = 2(1) + 3 = 5</li>
                                <li>f(2) = 2(2) + 3 = 7</li>
                                <li>f(-1) = 2(-1) + 3 = 1</li>
                                <li>f(0) = 2(0) + 3 = 3</li>
                            </ul>
                        </div>
                        
                        <h3>Evaluating Functions</h3>
                        <p>To evaluate f(x):</p>
                        <ol>
                            <li>Replace every x in the function with the given value</li>
                            <li>Simplify using order of operations (PEMDAS)</li>
                        </ol>
                        
                        <div class="example-box">
                            <p><strong>Example:</strong> Evaluate g(x) = x² - 4x + 2 for g(3)</p>
                            <p>g(3) = (3)² - 4(3) + 2 = 9 - 12 + 2 = -1</p>
                        </div>
                    `,
                    remember: [
                        {
                            title: "Notation Alert!",
                            content: "f(x) does NOT mean f × x. It means 'the value of f at x'."
                        },
                        {
                            title: "Order of Operations",
                            content: "When evaluating, follow PEMDAS: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction."
                        }
                    ],
                    consider: [
                        {
                            title: "Thinking Tip",
                            content: "When you see f(3), think 'what y-value do I get when x = 3?'"
                        }
                    ]
                },
                
                "domain-range": {
                    title: "Domain & Range",
                    content: `
                        <h3>What are Domain and Range?</h3>
                        <p><strong>Domain:</strong> The set of all possible input values (x-values)</p>
                        <p><strong>Range:</strong> The set of all possible output values (y-values)</p>
                        
                        <h3>Finding Domain</h3>
                        <p>Ask yourself: "What x-values would make this impossible?"</p>
                        <ul>
                            <li><strong>Division by zero:</strong> If denominator contains x, set it ≠ 0</li>
                            <li><strong>Square roots:</strong> radicand must be ≥ 0</li>
                            <li><strong>Logarithms:</strong> argument must be > 0</li>
                        </ul>
                        
                        <div class="example-box">
                            <p><strong>Example:</strong> Find the domain of f(x) = 1/(x - 3)</p>
                            <p>x - 3 ≠ 0</p>
                            <p>x ≠ 3</p>
                            <p>Domain: all real numbers except 3</p>
                            <p>In interval notation: (-∞, 3) ∪ (3, ∞)</p>
                        </div>
                        
                        <h3>Finding Range</h3>
                        <p>The range depends on the type of function. For now, focus on identifying what's possible for y.</p>
                    `,
                    remember: [
                        {
                            title: "Domain Restrictions",
                            content: "Denominator ≠ 0, radicand ≥ 0 for even roots, logarithm argument > 0"
                        },
                        {
                            title: "Notation",
                            content: "Use set notation { } or interval notation ( ) [ ] for domain and range"
                        }
                    ],
                    consider: [
                        {
                            title: "Learning Strategy",
                            content: "When finding domain, ask 'What x-values would break this?' — it's easier than thinking about range first."
                        }
                    ]
                },
                
                "linear-functions": {
                    title: "Linear Functions",
                    content: `
                        <h3>What is a Linear Function?</h3>
                        <p>A <strong>linear function</strong> has the form <code>f(x) = mx + b</code> where m ≠ 0</p>
                        <ul>
                            <li><strong>m</strong> = slope (rate of change)</li>
                            <li><strong>b</strong> = y-intercept (where the line crosses the y-axis)</li>
                        </ul>
                        
                        <h3>Slope</h3>
                        <p>Slope = rise/run = (change in y) / (change in x)</p>
                        <p class="formula">m = (y₂ - y₁) / (x₂ - x₁)</p>
                        
                        <div class="example-box">
                            <p><strong>Example:</strong> Find the slope between (2, 5) and (6, 9)</p>
                            <p>m = (9 - 5) / (6 - 2) = 4/4 = 1</p>
                            <p>Slope = 1</p>
                        </div>
                        
                        <h3>Forms of Linear Equations</h3>
                        <ul>
                            <li><strong>Slope-intercept:</strong> y = mx + b</li>
                            <li><strong>Point-slope:</strong> y - y₁ = m(x - x₁)</li>
                            <li><strong>Standard:</strong> Ax + By = C</li>
                        </ul>
                    `,
                    remember: [
                        {
                            title: "Slope-Intercept Form",
                            content: "y = mx + b: m = slope, b = y-intercept"
                        },
                        {
                            title: "Slope Formula",
                            content: "m = (y₂ - y₁) / (x₂ - x₁)"
                        }
                    ],
                    consider: [
                        {
                            title: "Visual Memory",
                            content: "Positive slope goes up (↗), negative slope goes down (↘), zero slope is flat (→)"
                        }
                    ]
                },
                
                "quadratic-functions": {
                    title: "Quadratic Functions",
                    content: `
                        <h3>What is a Quadratic Function?</h3>
                        <p>A <strong>quadratic function</strong> has the form <code>f(x) = ax² + bx + c</code> where a ≠ 0</p>
                        <p>The graph of a quadratic function is a <strong>parabola</strong> — a U-shaped curve.</p>
                        
                        <h3>Key Features</h3>
                        <ul>
                            <li><strong>Vertex:</strong> The highest or lowest point</li>
                            <li><strong>Axis of Symmetry:</strong> Vertical line through the vertex</li>
                            <li><strong>x-intercepts:</strong> Where the parabola crosses the x-axis</li>
                            <li><strong>y-intercept:</strong> Where it crosses the y-axis (at c)</li>
                        </ul>
                        
                        <h3>Opening Direction</h3>
                        <ul>
                            <li>If a > 0: parabola opens <strong>upward</strong> (minimum point)</li>
                            <li>If a < 0: parabola opens <strong>downward</strong> (maximum point)</li>
                        </ul>
                        
                        <div class="example-box">
                            <p><strong>Example:</strong> f(x) = x² - 4</p>
                            <ul>
                                <li>a = 1 (opens upward)</li>
                                <li>Vertex at (0, -4)</li>
                                <li>x-intercepts: x² - 4 = 0, so x = ±2</li>
                                <li>y-intercept: (0, -4)</li>
                            </ul>
                        </div>
                    `,
                    remember: [
                        {
                            title: "Vertex Form",
                            content: "f(x) = a(x - h)² + k where (h, k) is the vertex"
                        },
                        {
                            title: "Axis of Symmetry",
                            content: "x = -b/(2a) for f(x) = ax² + bx + c"
                        }
                    ],
                    consider: [
                        {
                            title: "Common Error",
                            content: "Remember: a cannot equal 0 in a quadratic, or it becomes linear!"
                        }
                    ]
                },
                
                "exponential-functions": {
                    title: "Exponential Functions",
                    content: `
                        <h3>What is an Exponential Function?</h3>
                        <p>An <strong>exponential function</strong> has the form <code>f(x) = a · b^x</code> where:</p>
                        <ul>
                            <li><strong>a</strong> is the initial value (a ≠ 0)</li>
                            <li><strong>b</strong> is the base (b > 0 and b ≠ 1)</li>
                            <li><strong>x</strong> is the exponent (can be any real number)</li>
                        </ul>
                        
                        <h3>Key Characteristics</h3>
                        <ul>
                            <li>The domain is all real numbers</li>
                            <li>The range is y > 0 (always positive)</li>
                            <li>The graph never touches the x-axis (horizontal asymptote)</li>
                            <li>Growth if b > 1, decay if 0 < b < 1</li>
                        </ul>
                        
                        <div class="example-box">
                            <p><strong>Example:</strong> f(x) = 2^x</p>
                            <ul>
                                <li>f(0) = 2^0 = 1</li>
                                <li>f(1) = 2^1 = 2</li>
                                <li>f(2) = 2^2 = 4</li>
                                <li>f(3) = 2^3 = 8</li>
                            </ul>
                            <p>This is <strong>exponential growth</strong> — values double each time!</p>
                        </div>
                        
                        <h3>Exponential Decay</h3>
                        <p>When 0 < b < 1, the function decreases.</p>
                        <div class="example-box">
                            <p><strong>Example:</strong> f(x) = (1/2)^x = 2^{-x}</p>
                            <ul>
                                <li>f(0) = 1</li>
                                <li>f(1) = 1/2</li>
                                <li>f(2) = 1/4</li>
                                <li>f(3) = 1/8</li>
                            </ul>
                        </div>
                    `,
                    remember: [
                        {
                            title: "Growth vs Decay",
                            content: "b > 1 means growth, 0 < b < 1 means decay"
                        },
                        {
                            title: "Range",
                            content: "Exponential functions always have y > 0 (positive)"
                        }
                    ],
                    consider: [
                        {
                            title: "Common Mistake",
                            content: "Don't confuse exponential (x in the exponent) with power functions (x^n)!"
                        }
                    ]
                }
            },
            
            // Key Concepts (kept for backward compatibility)
            concepts: [
                {
                    title: "What is a Function?",
                    content: `
                        <p>A <strong>function</strong> is a special type of relation where each input (x-value) produces exactly one output (y-value).</p>
                        <div class="concept-diagram">
                            <div class="machine-illustration">
                                <span class="input">Input x</span>
                                <span class="arrow">→</span>
                                <span class="machine">Function Machine</span>
                                <span class="arrow">→</span>
                                <span class="output">Output y</span>
                            </div>
                        </div>
                        <p>The key idea: <strong>one input, one output</strong></p>
                    `
                },
                {
                    title: "Function Notation",
                    content: `
                        <p>We write functions using special notation: <code>f(x)</code></p>
                        <p>This is read as "f of x" and means "the function f evaluated at x."</p>
                        <div class="example-box">
                            <p><strong>Example:</strong> If f(x) = 2x + 3, then:</p>
                            <ul>
                                <li>f(1) = 2(1) + 3 = 5</li>
                                <li>f(2) = 2(2) + 3 = 7</li>
                                <li>f(-1) = 2(-1) + 3 = 1</li>
                            </ul>
                        </div>
                    `
                },
                {
                    title: "Domain and Range",
                    content: `
                        <p><strong>Domain:</strong> The set of all possible input values (x-values)</p>
                        <p><strong>Range:</strong> The set of all possible output values (y-values)</p>
                        <div class="example-box">
                            <p>For f(x) = x² with domain {1, 2, 3}:</p>
                            <ul>
                                <li>Domain = {1, 2, 3}</li>
                                <li>Range = {1, 4, 9}</li>
                            </ul>
                        </div>
                    `
                },
                {
                    title: "Linear Functions",
                    content: `
                        <p>A <strong>linear function</strong> has the form <code>f(x) = mx + b</code> where m ≠ 0</p>
                        <ul>
                            <li><strong>m</strong> = slope (rate of change)</li>
                            <li><strong>b</strong> = y-intercept (where the line crosses the y-axis)</li>
                        </ul>
                        <div class="example-box">
                            <p><strong>Example:</strong> f(x) = 2x - 1</p>
                            <ul>
                                <li>Slope (m) = 2</li>
                                <li>y-intercept (b) = -1</li>
                            </ul>
                        </div>
                    `
                },
                {
                    title: "Quadratic Functions",
                    content: `
                        <p>A <strong>quadratic function</strong> has the form <code>f(x) = ax² + bx + c</code> where a ≠ 0</p>
                        <p>The graph of a quadratic function is a <strong>parabola</strong> — a U-shaped curve.</p>
                        <ul>
                            <li>If a > 0: parabola opens upward (minimum point)</li>
                            <li>If a < 0: parabola opens downward (maximum point)</li>
                        </ul>
                        <div class="example-box">
                            <p><strong>Example:</strong> f(x) = x² - 4</p>
                            <ul>
                                <li>Vertex at (0, -4)</li>
                                <li>x-intercepts at x = ±2</li>
                                <li>y-intercept at (0, -4)</li>
                            </ul>
                        </div>
                    `
                }
            ],

            // Remember This boxes
            remember: [
                {
                    title: "Vertical Line Test",
                    content: "To determine if a graph represents a function, draw vertical lines through it. If any vertical line intersects the graph more than once, it's NOT a function."
                },
                {
                    title: "Function Notation",
                    content: "f(x) does NOT mean f × x. It means 'the value of f at x'."
                },
                {
                    title: "Domain Restrictions",
                    content: "For rational functions, the denominator cannot be zero. For square roots, the radicand must be non-negative."
                }
            ],

            // Consider This boxes
            consider: [
                {
                    title: "Common Mistake",
                    content: "Don't confuse f(x) = x² with f(x²). The second one means square the input first, then apply the function."
                },
                {
                    title: "Thinking Tip",
                    content: "When finding domain, ask yourself: 'What x-values would make this impossible?' Common issues: division by zero, square roots of negatives."
                },
                {
                    title: "Learning Insight",
                    content: "Functions model real-world relationships. Think: 'What varies? What depends on what?' This helps identify the independent and dependent variables."
                }
            ],

            // Practice Questions - EXPANDED with more questions
            practice: [
                {
                    id: 1,
                    type: "multiple-choice",
                    question: "Which of the following represents a function?",
                    options: [
                        { text: "{(1,2), (2,3), (1,4)}", correct: false },
                        { text: "{(1,2), (2,3), (3,4)}", correct: true },
                        { text: "{(1,2), (1,3), (2,4)}", correct: false },
                        { text: "{(1,2), (2,2), (2,3)}", correct: false }
                    ],
                    hint: "Remember: a function can only have ONE output for each input.",
                    solution: "The correct answer is {(1,2), (2,3), (3,4)}. Each x-value (1, 2, 3) appears only once, so each input has exactly one output. In the other sets, some x-values repeat with different y-values."
                },
                {
                    id: 2,
                    type: "short-answer",
                    question: "If f(x) = 3x - 2, find f(4).",
                    hint: "Substitute x = 4 into the function.",
                    solution: "f(4) = 3(4) - 2 = 12 - 2 = 10"
                },
                {
                    id: 3,
                    type: "multiple-choice",
                    question: "What is the y-intercept of f(x) = -2x + 5?",
                    options: [
                        { text: "-2", correct: false },
                        { text: "5", correct: true },
                        { text: "2", correct: false },
                        { text: "-5", correct: false }
                    ],
                    hint: "The y-intercept is the constant term (b) in f(x) = mx + b.",
                    solution: "The y-intercept is 5. In f(x) = mx + b form, b = 5 is the y-intercept, which is the point (0, 5)."
                },
                {
                    id: 4,
                    type: "short-answer",
                    question: "State the domain of f(x) = 1/(x - 3).",
                    hint: "What x-value would make the denominator zero?",
                    solution: "Domain: all real numbers except x = 3. Since division by zero is undefined, x cannot equal 3. In interval notation: (-∞, 3) ∪ (3, ∞)."
                },
                {
                    id: 5,
                    type: "multiple-choice",
                    question: "Which parabola opens downward?",
                    options: [
                        { text: "f(x) = x²", correct: false },
                        { text: "f(x) = -x²", correct: true },
                        { text: "f(x) = 2x²", correct: false },
                        { text: "f(x) = x² + 1", correct: false }
                    ],
                    hint: "A parabola opens downward when the coefficient of x² is negative (a < 0).",
                    solution: "f(x) = -x² opens downward because a = -1 < 0. The negative coefficient causes the parabola to open in the negative y-direction."
                },
                {
                    id: 6,
                    type: "short-answer",
                    question: "If g(x) = x² - 2x, find g(3).",
                    hint: "Substitute x = 3 and simplify.",
                    solution: "g(3) = (3)² - 2(3) = 9 - 6 = 3"
                },
                {
                    id: 7,
                    type: "multiple-choice",
                    question: "What is the slope of the line passing through (2, 5) and (6, 9)?",
                    options: [
                        { text: "1", correct: true },
                        { text: "4", correct: false },
                        { text: "2", correct: false },
                        { text: "0.5", correct: false }
                    ],
                    hint: "Slope = (y₂ - y₁) / (x₂ - x₁)",
                    solution: "Slope = (9 - 5) / (6 - 2) = 4/4 = 1"
                },
                {
                    id: 8,
                    type: "short-answer",
                    question: "Is the relation {(2,4), (3,6), (4,8)} a function? Explain.",
                    hint: "Check if each input has exactly one output.",
                    solution: "Yes, it is a function. Each x-value (2, 3, 4) appears only once, so each input produces exactly one output. This is actually f(x) = 2x."
                },
                // NEW PRACTICE QUESTIONS
                {
                    id: 9,
                    type: "multiple-choice",
                    question: "If f(x) = x² + 1, what is f(2)?",
                    options: [
                        { text: "3", correct: false },
                        { text: "5", correct: true },
                        { text: "4", correct: false },
                        { text: "6", correct: false }
                    ],
                    hint: "Substitute x = 2 into f(x) = x² + 1",
                    solution: "f(2) = (2)² + 1 = 4 + 1 = 5"
                },
                {
                    id: 10,
                    type: "short-answer",
                    question: "What is the slope of the line y = -3x + 7?",
                    hint: "In y = mx + b, m is the slope.",
                    solution: "The slope is -3 (the coefficient of x)"
                },
                {
                    id: 11,
                    type: "multiple-choice",
                    question: "Which point lies on the line f(x) = 2x - 1?",
                    options: [
                        { text: "(1, 1)", correct: true },
                        { text: "(0, 0)", correct: false },
                        { text: "(2, 2)", correct: false },
                        { text: "(3, 4)", correct: false }
                    ],
                    hint: "Check each point: does y = 2x - 1?",
                    solution: "(1, 1): 1 = 2(1) - 1 = 1 ✓"
                },
                {
                    id: 12,
                    type: "short-answer",
                    question: "Find the x-intercept of f(x) = 2x - 6",
                    hint: "Set f(x) = 0 and solve for x",
                    solution: "0 = 2x - 6 → 2x = 6 → x = 3. So the x-intercept is (3, 0)"
                },
                {
                    id: 13,
                    type: "multiple-choice",
                    question: "What is the vertex of f(x) = (x - 2)² + 3?",
                    options: [
                        { text: "(2, 3)", correct: true },
                        { text: "(-2, 3)", correct: false },
                        { text: "(2, -3)", correct: false },
                        { text: "(-2, -3)", correct: false }
                    ],
                    hint: "In vertex form f(x) = a(x - h)² + k, vertex is (h, k)",
                    solution: "Vertex is (2, 3) because h = 2 and k = 3"
                },
                {
                    id: 14,
                    type: "short-answer",
                    question: "What type of function is f(x) = 5?",
                    hint: "Think: does this represent a line or a curve?",
                    solution: "This is a constant function (a horizontal line). It's technically linear with slope m = 0."
                },
                {
                    id: 15,
                    type: "multiple-choice",
                    question: "What is the range of f(x) = x² where x ∈ {-2, -1, 0, 1, 2}?",
                    options: [
                        { text: "{-4, -1, 0, 1, 4}", correct: false },
                        { text: "{0, 1, 4}", correct: true },
                        { text: "{-2, -1, 0, 1, 2}", correct: false },
                        { text: "All real numbers", correct: false }
                    ],
                    hint: "Square each x-value and list the unique outputs",
                    solution: "f(-2)=4, f(-1)=1, f(0)=0, f(1)=1, f(2)=4. Range = {0, 1, 4}"
                }
            ]
        },

        // Topic: Trigonometry
        trigonometry: {
            id: "trigonometry",
            title: "Trigonometry",
            subtitle: "Understanding Angles and Ratios",
            intro: "<p>Welcome to <strong>Trigonometry</strong> — the study of triangles, angles, and their relationships. Trigonometry helps us understand the world around us, from architecture to music to astronomy.</p><p>Think of trigonometry as the language that connects angles to side lengths — a powerful tool in any mathematician's toolkit.</p>",
            subsections: [
                { id: "intro-trig", title: "Introduction to Trigonometry", icon: "📐" },
                { id: "trig-ratios", title: "Trigonometric Ratios", icon: "📊" },
                { id: "special-angles", title: "Special Angles", icon: "⭐" },
                { id: "solving-triangles", title: "Solving Triangles", icon: "🔺" },
                { id: "practice-trig", title: "Practice Questions", icon: "✨" }
            ],
            subsectionContent: {
                "intro-trig": {
                    title: "Introduction to Trigonometry",
                    content: "<h3>What is Trigonometry?</h3><p><strong>Trigonometry</strong> (from Greek: trigonon = triangle, metron = measure) is the branch of mathematics that studies relationships between the sides and angles of triangles.</p><h3>The Basics</h3><p>In a right triangle, we have:</p><ul><li><strong>Hypotenuse:</strong> The longest side, opposite the right angle</li><li><strong>Opposite:</strong> The side opposite to the angle we're focusing on</li><li><strong>Adjacent:</strong> The side next to the angle (but not the hypotenuse)</li></ul>",
                    remember: [{ title: "Right Triangle", content: "One angle is exactly 90°. The hypotenuse is always opposite the right angle." }],
                    consider: [{ title: "Key Idea", content: "The labels 'opposite' and 'adjacent' depend on which angle you're considering!" }]
                },
                "trig-ratios": {
                    title: "Trigonometric Ratios",
                    content: "<h3>The Three Main Ratios</h3><p>For a right triangle with angle θ:</p><ul><li><strong>SOH:</strong> sin θ = Opposite / Hypotenuse</li><li><strong>CAH:</strong> cos θ = Adjacent / Hypotenuse</li><li><strong>TOA:</strong> tan θ = Opposite / Adjacent</li></ul><div class='example-box'><p><strong>Memory Trick:</strong> SOH-CAH-TOA</p></div>",
                    remember: [{ title: "SOH-CAH-TOA", content: "Sine:Opposite/Hypotenuse | Cosine:Adjacent/Hypotenuse | Tangent:Opposite/Adjacent" }],
                    consider: [{ title: "Calculator Mode", content: "Make sure your calculator is in DEGREE mode for 11U math!" }]
                },
                "special-angles": {
                    title: "Special Angles",
                    content: "<h3>Key Angles to Memorize</h3><table><tr><th>Angle</th><th>sin</th><th>cos</th><th>tan</th></tr><tr><td>0°</td><td>0</td><td>1</td><td>0</td></tr><tr><td>30°</td><td>1/2</td><td>√3/2</td><td>1/√3</td></tr><tr><td>45°</td><td>√2/2</td><td>√2/2</td><td>1</td></tr><tr><td>60°</td><td>√3/2</td><td>1/2</td><td>√3</td></tr><tr><td>90°</td><td>1</td><td>0</td><td>undefined</td></tr></table>",
                    remember: [{ title: "30-60-90 Pattern", content: "sin 30° = 1/2, sin 60° = √3/2" }],
                    consider: [{ title: "Reciprocal Values", content: "csc(30°) = 2, sec(60°) = 2, cot(45°) = 1" }]
                },
                "solving-triangles": {
                    title: "Solving Triangles",
                    content: "<h3>Using Trigonometry to Find Unknowns</h3><p>When you know one angle and one side, you can find other sides!</p><ol><li>Identify what you know</li><li>Determine which trig ratio to use</li><li>Set up the equation</li><li>Solve for the unknown</li></ol><div class='example-box'><p><strong>Example:</strong> θ = 30°, adjacent = 10. Find hypotenuse.</p><p>cos(30°) = adjacent/hypotenuse</p><p>√3/2 = 10/h</p><p>h = 20/√3 ≈ 11.55</p></div>",
                    remember: [{ title: "Pythagorean Theorem", content: "a² + b² = c² (still applies to right triangles!)" }],
                    consider: [{ title: "Always Check", content: "Hypotenuse is always the longest side!" }]
                }
            },
            practice: [
                { id: 1, type: "multiple-choice", question: "What is sin(θ) equal to?", options: [{ text: "Opposite / Adjacent", correct: false }, { text: "Opposite / Hypotenuse", correct: true }, { text: "Adjacent / Hypotenuse", correct: false }, { text: "Hypotenuse / Opposite", correct: false }], hint: "Think SOH:", solution: "sin(θ) = Opposite / Hypotenuse" },
                { id: 2, type: "short-answer", question: "What is cos(60°)?", hint: "Special angle!", solution: "cos(60°) = 1/2" },
                { id: 3, type: "multiple-choice", question: "Which ratio for opposite and adjacent?", options: [{ text: "Sine", correct: false }, { text: "Cosine", correct: false }, { text: "Tangent", correct: true }, { text: "Cosecant", correct: false }], hint: "TOA", solution: "Tangent = Opposite/Adjacent" },
                { id: 4, type: "short-answer", question: "Find tan(45°).", hint: "45-45-90 triangle", solution: "tan(45°) = 1" },
                { id: 5, type: "multiple-choice", question: "What is sin(30°)?", options: [{ text: "√3/2", correct: false }, { text: "1/2", correct: true }, { text: "√2/2", correct: false }, { text: "1", correct: false }], hint: "Special angle!", solution: "sin(30°) = 1/2" }
            ],
            comingSoon: false
        },
        
        // Topic: Sequences & Series
        sequences: {
            id: "sequences",
            title: "Sequences & Series",
            subtitle: "Patterns and Sums",
            intro: "<p>Welcome to <strong>Sequences & Series</strong> — the study of ordered lists of numbers and their sums. You'll discover how patterns appear everywhere in mathematics!</p><p>From calculating compound interest to understanding population growth, sequences help us model the world.</p>",
            subsections: [
                { id: "intro-sequences", title: "Introduction to Sequences", icon: "📋" },
                { id: "arithmetic-sequences", title: "Arithmetic Sequences", icon: "➕" },
                { id: "geometric-sequences", title: "Geometric Sequences", icon: "✖️" },
                { id: "series-basics", title: "Introduction to Series", icon: "∑" },
                { id: "practice-seq", title: "Practice Questions", icon: "✨" }
            ],
            subsectionContent: {
                "intro-sequences": {
                    title: "Introduction to Sequences",
                    content: "<h3>What is a Sequence?</h3><p>A <strong>sequence</strong> is an ordered list of numbers that follow a specific pattern. Each number in the sequence is called a <strong>term</strong>.</p><h3>Ways to Describe Sequences</h3><ul><li><strong>Listing terms:</strong> 2, 4, 6, 8, ...</li><li><strong>Using a formula:</strong> aₙ = 2n</li><li><strong>Recursively:</strong> a₁ = 2, aₙ₊₁ = aₙ + 2</li></ul><div class='example-box'><p><strong>Example:</strong> 1, 4, 9, 16, 25, ... is the sequence of perfect squares: 1², 2², 3², 4², 5²</p></div>",
                    remember: [{ title: "Notation", content: "aₙ means the nth term. a₁ is the first term, a₂ is the second, etc." }],
                    consider: [{ title: "Pattern Recognition", content: "Look for patterns in how terms change from one to the next!" }]
                },
                "arithmetic-sequences": {
                    title: "Arithmetic Sequences",
                    content: "<h3>What is an Arithmetic Sequence?</h3><p>An <strong>arithmetic sequence</strong> has a constant difference between consecutive terms. This difference is called the <strong>common difference</strong> (d).</p><h3>Formula for the nth Term</h3><p class='formula'>aₙ = a₁ + (n - 1)d</p><h3>Finding the Common Difference</h3><p>d = aₙ₊₁ - aₙ</p><div class='example-box'><p><strong>Example:</strong> 3, 7, 11, 15, ...</p><p>d = 7 - 3 = 4</p><p>a₁ = 3</p><p>aₙ = 3 + (n - 1)4 = 4n - 1</p></div>",
                    remember: [{ title: "Formula", content: "aₙ = a₁ + (n - 1)d" }],
                    consider: [{ title: "Linear Pattern", content: "Arithmetic sequences grow linearly (by adding the same amount each time)" }]
                },
                "geometric-sequences": {
                    title: "Geometric Sequences",
                    content: "<h3>What is a Geometric Sequence?</h3><p>A <strong>geometric sequence</strong> has a constant ratio between consecutive terms. This ratio is called the <strong>common ratio</strong> (r).</p><h3>Formula for the nth Term</h3><p class='formula'>aₙ = a₁ × r^(n-1)</p><h3>Finding the Common Ratio</h3><p>r = aₙ₊₁ / aₙ</p><div class='example-box'><p><strong>Example:</strong> 2, 6, 18, 54, ...</p><p>r = 6/2 = 3</p><p>a₁ = 2</p><p>aₙ = 2 × 3^(n-1)</p></div>",
                    remember: [{ title: "Formula", content: "aₙ = a₁ × r^(n-1)" }],
                    consider: [{ title: "Exponential Growth", content: "Geometric sequences grow exponentially (by multiplying by the same amount)" }]
                },
                "series-basics": {
                    title: "Introduction to Series",
                    content: "<h3>What is a Series?</h3><p>A <strong>series</strong> is the sum of the terms in a sequence.</p><h3>Arithmetic Series Sum</h3><p class='formula'>Sₙ = n(a₁ + aₙ) / 2</p><p>or</p><p class='formula'>Sₙ = n[2a₁ + (n-1)d] / 2</p><h3>Geometric Series Sum</h3><p class='formula'>Sₙ = a₁(1 - r^n) / (1 - r), for r ≠ 1</p><div class='example-box'><p><strong>Example:</strong> Sum of first 5 terms of 2, 4, 6, 8, 10</p><p>S₅ = 5(2 + 10)/2 = 5(12)/2 = 30</p></div>",
                    remember: [{ title: "Sigma Notation", content: "Σ (sigma) means 'sum of'. Σᵢ₌₁⁵ aᵢ means sum from i=1 to i=5" }],
                    consider: [{ title: "Infinite Series", content: "If |r| < 1, an infinite geometric series converges to a finite sum!" }]
                }
            },
            practice: [
                { id: 1, type: "short-answer", question: "What is the 5th term of 2, 5, 8, 11, ...?", hint: "Find the pattern - what's the common difference?", solution: "d = 3, so a₅ = 2 + 4(3) = 14" },
                { id: 2, type: "multiple-choice", question: "What type of sequence is 1, 2, 4, 8, 16, ...?", options: [{ text: "Arithmetic", correct: false }, { text: "Geometric", correct: true }, { text: "Fibonacci", correct: false }, { text: "Harmonic", correct: false }], hint: "What's the ratio between terms?", solution: "Geometric with r = 2" },
                { id: 3, type: "short-answer", question: "Find the 10th term of the arithmetic sequence with a₁ = 3 and d = 4.", hint: "Use aₙ = a₁ + (n-1)d", solution: "a₁₀ = 3 + 9(4) = 39" },
                { id: 4, type: "multiple-choice", question: "What is the sum of the first 5 terms of 1, 2, 4, 8, 16?", options: [{ text: "31", correct: true }, { text: "15", correct: false }, { text: "30", correct: false }, { text: "63", correct: false }], hint: "Add all 5 terms: 1+2+4+8+16", solution: "1+2+4+8+16 = 31" },
                { id: 5, type: "short-answer", question: "Find the common ratio of 9, 3, 1, 1/3, ...", hint: "Divide each term by the previous term", solution: "r = 3/9 = 1/3" }
            ],
            comingSoon: false
        },
        
        // Topic: Finance (Financial Mathematics)
        finance: {
            id: "finance",
            title: "Financial Mathematics",
            subtitle: "Money, Growth, and Investments",
            intro: "<p>Welcome to <strong>Financial Mathematics</strong> — the mathematics of money, investments, and growth. Understanding finance helps you make smart decisions about saving, investing, and borrowing.</p><p>From calculating compound interest to understanding loan payments, these skills are essential for real life!</p>",
            subsections: [
                { id: "intro-finance", title: "Introduction to Finance", icon: "💵" },
                { id: "simple-interest", title: "Simple Interest", icon: "➕" },
                { id: "compound-interest", title: "Compound Interest", icon: "📈" },
                { id: "annuities", title: "Annuities", icon: "💳" },
                { id: "practice-finance", title: "Practice Questions", icon: "✨" }
            ],
            subsectionContent: {
                "intro-finance": {
                    title: "Introduction to Financial Mathematics",
                    content: "<h3>Why Learn Finance?</h3><p><strong>Financial mathematics</strong> helps us understand how money grows over time. Whether you're saving for something special or investing for the future, these concepts apply to everyday life.</p><h3>Key Concepts</h3><ul><li><strong>Principal (P):</strong> The initial amount of money</li><li><strong>Interest (I):</strong> The extra money earned or paid</li><li><strong>Rate (r):</strong> The percentage of principal charged/earned per time period</li><li><strong>Time (t):</strong> The duration of the investment or loan</li></ul><div class='example-box'><p><strong>Real Example:</strong> If you put $1000 in a savings account earning 2% interest per year, after one year you'll have $1020.</p></div>",
                    remember: [{ title: "Key Terms", content: "Principal = Initial Amount | Interest = Earnings/Charge | Rate = Percentage" }],
                    consider: [{ title: "Time Matters", content: "Always pay attention to the time period — rates are usually given per year!" }]
                },
                "simple-interest": {
                    title: "Simple Interest",
                    content: "<h3>What is Simple Interest?</h3><p><strong>Simple interest</strong> is calculated only on the original principal amount. The interest remains constant each period.</p><h3>Formula</h3><p class='formula'>I = P × r × t</p><p class='formula'>A = P(1 + rt)</p><p>Where:</p><ul><li><strong>I</strong> = Interest earned</li><li><strong>P</strong> = Principal (initial amount)</li><li><strong>r</strong> = Annual interest rate (as decimal)</li><li><strong>t</strong> = Time in years</li><li><strong>A</strong> = Final amount</li></ul><div class='example-box'><p><strong>Example:</strong> $5000 invested at 4% per year for 3 years</p><p>I = 5000 × 0.04 × 3 = $600</p><p>A = 5000 + 600 = $5600</p></div>",
                    remember: [{ title: "Simple Interest Formula", content: "I = Prt (Interest = Principal × rate × time)" }],
                    consider: [{ title: "Convert Rate", content: "Convert percentage to decimal: 5% = 0.05" }]
                },
                "compound-interest": {
                    title: "Compound Interest",
                    content: "<h3>What is Compound Interest?</h3><p><strong>Compound interest</strong> is calculated on both the principal AND previously earned interest. This is how investments really grow!</p><h3>Compound Interest Formula</h3><p class='formula'>A = P(1 + r/n)^(nt)</p><p>Where:</p><ul><li><strong>A</strong> = Final amount</li><li><strong>P</strong> = Principal</li><li><strong>r</strong> = Annual interest rate (decimal)</li><li><strong>n</strong> = Number of times compounded per year</li><li><strong>t</strong> = Time in years</li></ul><h3>Compounding Frequencies</h3><ul><li>Annually: n = 1</li><li>Semi-annually: n = 2</li><li>Quarterly: n = 4</li><li>Monthly: n = 12</li><li>Daily: n = 365</li></ul><div class='example-box'><p><strong>Example:</strong> $1000 at 5% compounded annually for 10 years</p><p>A = 1000(1 + 0.05/1)^(1×10) = 1000(1.05)^10 ≈ $1628.89</p></div>",
                    remember: [{ title: "Compound Interest", content: "A = P(1 + r/n)^(nt)" }],
                    consider: [{ title: "More Frequent = More Growth", content: "The more times interest compounds per year, the more money you earn!" }]
                },
                "annuities": {
                    title: "Annuities",
                    content: "<h3>What is an Annuity?</h3><p>An <strong>annuity</strong> is a series of equal payments made at regular intervals. This could be regular deposits to savings or loan payments.</p><h3>Future Value of an Ordinary Annuity</h3><p class='formula'>FV = PMT × [(1 + r/n)^(nt) - 1] / (r/n)</p><h3>Present Value of an Ordinary Annuity</h3><p class='formula'>PV = PMT × [1 - (1 + r/n)^(-nt)] / (r/n)</p><div class='example-box'><p><strong>Example:</strong> $100 monthly deposit at 6% annual rate for 5 years (compounded monthly)</p><p>FV = 100 × [(1 + 0.06/12)^(12×5) - 1] / (0.06/12) ≈ $6,977.69</p></div>",
                    remember: [{ title: "Annuity Types", content: "Ordinary annuity = payments at end of period | Annuity due = payments at beginning" }],
                    consider: [{ title: "Real Applications", content: "Mortgages, car loans, and retirement savings are all annuities!" }]
                }
            },
            practice: [
                { id: 1, type: "short-answer", question: "Calculate simple interest on $2000 at 3% for 4 years.", hint: "Use I = Prt", solution: "I = 2000 × 0.03 × 4 = $240" },
                { id: 2, type: "multiple-choice", question: "What is compound interest calculated on?", options: [{ text: "Only the principal", correct: false }, { text: "Principal and accumulated interest", correct: true }, { text: "Only the interest", correct: false }, { text: "The time period", correct: false }], hint: "Think about what 'compound' means!", solution: "Compound interest is calculated on both principal and accumulated interest" },
                { id: 3, type: "short-answer", question: "Find the amount after 2 years if $5000 is invested at 4% compounded semi-annually.", hint: "Use A = P(1 + r/n)^(nt), n=2", solution: "A = 5000(1 + 0.04/2)^(2×2) = 5000(1.02)^4 ≈ $5412.16" },
                { id: 4, type: "multiple-choice", question: "Which compounding frequency earns the most interest?", options: [{ text: "Annually", correct: false }, { text: "Monthly", correct: false }, { text: "Daily", correct: true }, { text: "Quarterly", correct: false }], hint: "More frequent compounding = more interest!", solution: "Daily compounding earns the most since interest is added most frequently" },
                { id: 5, type: "short-answer", question: "What type of interest keeps the principal constant for calculations?", hint: "Think 'simple'", solution: "Simple interest - it's calculated only on the original principal" }
            ],
            comingSoon: false
        }
    },

    // Homepage content
    homepage: {
        welcome: "Welcome to KaliEdu",
        tagline: "Your calm guide to 11U Math",
        description: `
            <p>Feeling overwhelmed by mathematics? You've come to the right place.</p>
            <p>KaliEdu is designed to be your gentle companion through the Ontario 11U curriculum. We believe that learning math should be as peaceful as a quiet evening in Fernis — no stress, just steady progress.</p>
        `,
        features: [
            {
                icon: "📖",
                title: "Textbook Companion",
                description: "Clear explanations that work alongside your textbook, not against it.",
                link: null
            },
            {
                icon: "✨",
                title: "Step-by-Step Learning",
                description: "Break down complex concepts into manageable, digestible pieces.",
                link: null
            },
            {
                icon: "💡",
                title: "Practice Questions",
                description: "Reinforce your learning with carefully crafted practice problems.",
                link: null
            },
            {
                icon: "📐",
                title: "Formula Reference",
                description: "All the formulas you need, organized by topic. Your cheat sheet for success!",
                link: "formulas.html"
            },
            {
                icon: "🌙",
                title: "Low-Pressure Environment",
                description: "No timed tests, no pressure — just you and the math.",
                link: null
            }
        ],
        cta: "Start Learning",
        ctaSubtext: "Begin your journey with Functions"
    }
};
