// KaliEdu MVP - Main JavaScript
// Handles navigation, page rendering, and interactivity

(function() {
    'use strict';

    // ==================== State ====================
    let currentPage = 'home';
    let answeredQuestions = new Set();

    // ==================== Initialization ====================
    document.addEventListener('DOMContentLoaded', function() {
        initializeApp();
    });

    function initializeApp() {
        renderNavigation();
        renderHomePage();
        setupPageTransition();
    }

    // ==================== Navigation ====================
    function renderNavigation() {
        const navMenu = document.getElementById('navMenu');
        if (!navMenu || !kaliEduData) return;

        navMenu.innerHTML = kaliEduData.nav.map(item => {
            // Handle external/formulas page - regular navigation
            if (item.external || item.id === 'formulas') {
                return `
                    <li class="nav-item">
                        <a class="nav-link" 
                           href="formulas.html"
                           title="Formula reference">
                            <span class="nav-icon">${item.icon}</span>
                            <span class="nav-label">${item.label}</span>
                        </a>
                    </li>
                `;
            }
            return `
                <li class="nav-item">
                    <button class="nav-link ${item.id === currentPage ? 'active' : ''}" 
                            data-page="${item.id}"
                            onclick="navigateTo('${item.id}')">
                        <span class="nav-icon">${item.icon}</span>
                        <span class="nav-label">${item.label}</span>
                    </button>
                </li>
            `;
        }).join('');
    }

    window.navigateTo = function(pageId) {
        // Handle Getting Started
        if (pageId === 'getting-started') {
            renderGettingStartedPage();
            updateNavigation('getting-started');
            return;
        }

        // Handle Functions with subsections
        if (pageId === 'functions') {
            renderFunctionsPageWithSubsections();
            updateNavigation('functions');
            return;
        }

        // Handle Trigonometry with subsections
        if (pageId === 'trigonometry') {
            renderTopicPageWithSubsections('trigonometry');
            updateNavigation('trigonometry');
            return;
        }

        // Handle Sequences with subsections
        if (pageId === 'sequences') {
            renderTopicPageWithSubsections('sequences');
            updateNavigation('sequences');
            return;
        }

        // Handle Finance with subsections
        if (pageId === 'finance') {
            renderTopicPageWithSubsections('finance');
            updateNavigation('finance');
            return;
        }

        if (!kaliEduData.topics[pageId] && pageId !== 'home') return;

        updateNavigation(pageId);

        // Hide all pages
        document.querySelectorAll('.page-section').forEach(section => {
            section.style.display = 'none';
            section.classList.remove('visible');
        });

        // Show selected page
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.style.display = 'block';
            
            // Trigger reflow for animation
            setTimeout(() => {
                targetPage.classList.add('visible');
            }, 10);

            // Render page content if needed
            if (pageId === 'functions' && targetPage.innerHTML.trim() === '') {
                renderFunctionsPageWithSubsections();
            } else if (pageId === 'trigonometry' && targetPage.innerHTML.trim() === '') {
                renderTopicPageWithSubsections('trigonometry');
            } else if (pageId === 'sequences' && targetPage.innerHTML.trim() === '') {
                renderTopicPageWithSubsections('sequences');
            } else if (pageId === 'finance' && targetPage.innerHTML.trim() === '') {
                renderTopicPageWithSubsections('finance');
            }
        }

        currentPage = pageId;
        
        // Scroll to top
        window.scrollTo(0, 0);
    };

    function updateNavigation(pageId) {
        // Update navigation active state
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.toggle('active', link.dataset.page === pageId);
        });

        // Hide all pages
        document.querySelectorAll('.page-section').forEach(section => {
            section.style.display = 'none';
            section.classList.remove('visible');
        });

        // Show selected page
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.style.display = 'block';
            setTimeout(() => {
                targetPage.classList.add('visible');
            }, 10);
        }

        currentPage = pageId;
        window.scrollTo(0, 0);
    }

    // ==================== Page Rendering ====================
    function renderHomePage() {
        const heroTitle = document.getElementById('heroTitle');
        const heroTagline = document.getElementById('heroTagline');
        const heroDescription = document.getElementById('heroDescription');
        const featuresGrid = document.getElementById('featuresGrid');

        if (!kaliEduData.homepage) return;

        if (heroTitle) heroTitle.textContent = kaliEduData.homepage.welcome;
        if (heroTagline) heroTagline.textContent = kaliEduData.homepage.tagline;
        
        if (heroDescription) {
            heroDescription.innerHTML = kaliEduData.homepage.description;
        }

        if (featuresGrid) {
            featuresGrid.innerHTML = kaliEduData.homepage.features.map((feature, index) => {
                const cardContent = `
                    <span class="feature-icon">${feature.icon}</span>
                    <h3>${feature.title}</h3>
                    <p>${feature.description}</p>
                `;
                
                // If feature has a link, wrap in anchor
                if (feature.link) {
                    return `
                        <a href="${feature.link}" class="feature-card fade-in fade-in-delay-${index + 1}" style="display: block; text-decoration: none; color: inherit;">
                            ${cardContent}
                        </a>
                    `;
                }
                
                return `
                    <div class="feature-card fade-in fade-in-delay-${index + 1}">
                        ${cardContent}
                    </div>
                `;
            }).join('');
        }
    }

    // ==================== Getting Started Page ====================
    function renderGettingStartedPage() {
        // Hide all pages
        document.querySelectorAll('.page-section').forEach(section => {
            section.style.display = 'none';
            section.classList.remove('visible');
        });

        // Create or show Getting Started section
        let gettingStartedSection = document.getElementById('getting-started');
        if (!gettingStartedSection) {
            gettingStartedSection = document.createElement('section');
            gettingStartedSection.id = 'getting-started';
            gettingStartedSection.className = 'page-section';
            document.querySelector('.main-content').appendChild(gettingStartedSection);
        }

        const guide = kaliEduData.gettingStarted;
        
        const sectionsHTML = guide.sections.map(section => `
            <div class="guide-section">
                <h2>${section.title}</h2>
                ${section.content}
            </div>
        `).join('');

        gettingStartedSection.innerHTML = `
            <div class="topic-header">
                <h1>${guide.title}</h1>
                <p class="topic-subtitle">${guide.subtitle}</p>
            </div>
            
            <div class="getting-started-intro">
                ${guide.intro}
            </div>
            
            ${sectionsHTML}
            
            <button class="getting-started-cta" onclick="navigateTo('functions')">
                ${guide.cta}
            </button>
        `;

        gettingStartedSection.style.display = 'block';
        setTimeout(() => {
            gettingStartedSection.classList.add('visible');
        }, 10);
    }

    // ==================== Functions Page with Subsections ====================
    function renderFunctionsPageWithSubsections() {
        // Hide all pages
        document.querySelectorAll('.page-section').forEach(section => {
            section.style.display = 'none';
            section.classList.remove('visible');
        });

        let functionsSection = document.getElementById('functions');
        if (!functionsSection) {
            functionsSection = document.createElement('section');
            functionsSection.id = 'functions';
            functionsSection.className = 'page-section';
            document.querySelector('.main-content').appendChild(functionsSection);
        }

        const topic = kaliEduData.topics.functions;
        // Build subsections navigation dynamically (supports added subsections)
        const subsectionsNav = (topic.subsections || []).map(sub => `
            <button class="subsection-btn" data-subsection="${sub.id}" onclick="showSubsection('${sub.id}')">
                <span class="subsection-icon">${sub.icon || ''}</span>
                <span>${sub.title}</span>
            </button>
        `).join('');

        // Build content for each subsection from data (preserves flexibility)
        let subsectionsContentHTML = '';
        if (topic.subsectionContent) {
            for (const [subId, subData] of Object.entries(topic.subsectionContent)) {
                subsectionsContentHTML += `
                    <div class="subsection-content" id="subsection-${subId}">
                        <h2>${subData.title}</h2>
                        ${subData.content}
                        ${renderTipBoxes(subData.remember, subData.consider)}
                    </div>
                `;
            }
        }

        // Add practice questions if available
        if (topic.practice && topic.practice.length > 0) {
            subsectionsContentHTML += `
                <div class="subsection-content" id="subsection-practice">
                    <h2>✨ Practice Questions</h2>
                    ${renderPracticeQuestions(topic.practice)}
                </div>
            `;
        }

        functionsSection.innerHTML = `
            <div class="topic-header">
                <h1>${topic.title}</h1>
                <p class="topic-subtitle">${topic.subtitle}</p>
            </div>

            <div class="topic-intro">
                ${topic.intro}
            </div>

            <div class="subsections-nav">
                ${subsectionsNav}
            </div>

            ${subsectionsContentHTML}
        `;

        functionsSection.style.display = 'block';
        setTimeout(() => {
            functionsSection.classList.add('visible');
            // Show first subsection by default (use first from topic.subsections)
            if (topic.subsections && topic.subsections.length > 0) {
                showSubsection(topic.subsections[0].id);
            }
        }, 10);
    }

    // Helper function to render tip boxes
    function renderTipBoxes(rememberItems, considerItems) {
        let html = '';
        
        if (rememberItems && rememberItems.length > 0) {
            html += rememberItems.map(item => `
                <div class="tip-box remember-box">
                    <p class="tip-content"><strong>✦ Remember:</strong> ${item.content}</p>
                </div>
            `).join('');
        }
        
        if (considerItems && considerItems.length > 0) {
            html += considerItems.map(item => `
                <div class="tip-box consider-box">
                    <p class="tip-content"><strong>💭 Consider:</strong> ${item.content}</p>
                </div>
            `).join('');
        }
        
        return html;
    }

    // Show a specific subsection
    window.showSubsection = function(subsectionId) {
        // Update button states
        document.querySelectorAll('.subsection-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.subsection === subsectionId);
        });

        // Hide all subsections
        document.querySelectorAll('.subsection-content').forEach(content => {
            content.style.display = 'none';
            content.classList.remove('active');
        });

        // Show selected subsection
        const targetContent = document.getElementById(`subsection-${subsectionId}`);
        if (targetContent) {
            targetContent.style.display = 'block';
            setTimeout(() => {
                targetContent.classList.add('active');
            }, 10);
        }

        // Scroll to top of content
        window.scrollTo(0, 300);
    };

    // ==================== Generic Topic Page with Subsections ====================
    function renderTopicPageWithSubsections(topicId) {
        // Hide all pages
        document.querySelectorAll('.page-section').forEach(section => {
            section.style.display = 'none';
            section.classList.remove('visible');
        });

        let topicSection = document.getElementById(topicId);
        if (!topicSection) {
            topicSection = document.createElement('section');
            topicSection.id = topicId;
            topicSection.className = 'page-section';
            document.querySelector('.main-content').appendChild(topicSection);
        }

        const topic = kaliEduData.topics[topicId];
        if (!topic) return;
        
        // Build subsections navigation
        const subsectionsNav = topic.subsections.map(sub => `
            <button class="subsection-btn" data-subsection="${sub.id}" onclick="showSubsection('${sub.id}')">
                <span class="subsection-icon">${sub.icon}</span>
                <span>${sub.title}</span>
            </button>
        `).join('');

        // Build content for each subsection
        let subsectionsContentHTML = '';
        
        if (topic.subsectionContent) {
            for (const [subId, subData] of Object.entries(topic.subsectionContent)) {
                subsectionsContentHTML += `
                    <div class="subsection-content" id="subsection-${subId}">
                        <h2>${subData.title}</h2>
                        ${subData.content}
                        ${renderTipBoxes(subData.remember, subData.consider)}
                    </div>
                `;
            }
        }

        // Add practice questions if available
        if (topic.practice && topic.practice.length > 0) {
            const practiceSubsectionId = topicId === 'trigonometry' ? 'practice-trig' : 
                                         topicId === 'sequences' ? 'practice-seq' :
                                         topicId === 'finance' ? 'practice-finance' : 'practice';
            subsectionsContentHTML += `
                <div class="subsection-content" id="subsection-${practiceSubsectionId}">
                    <h2>✨ Practice Questions</h2>
                    ${renderPracticeQuestions(topic.practice)}
                </div>
            `;
        }

        topicSection.innerHTML = `
            <div class="topic-header">
                <h1>${topic.title}</h1>
                <p class="topic-subtitle">${topic.subtitle}</p>
            </div>

            <div class="topic-intro">
                ${topic.intro}
            </div>

            <div class="subsections-nav">
                ${subsectionsNav}
            </div>

            ${subsectionsContentHTML}
        `;

        topicSection.style.display = 'block';
        setTimeout(() => {
            topicSection.classList.add('visible');
            // Show first subsection by default
            if (topic.subsections && topic.subsections.length > 0) {
                showSubsection(topic.subsections[0].id);
            }
        }, 10);
    }

    function renderFunctionsPage() {
        const page = document.getElementById('functions');
        if (!page || !kaliEduData.topics.functions) return;

        const topic = kaliEduData.topics.functions;

        // Build concepts HTML
        const conceptsHTML = topic.concepts.map(concept => `
            <div class="concept-section">
                <h2>${concept.title}</h2>
                <div class="concept-content">${concept.content}</div>
            </div>
        `).join('');

        // Build Remember boxes
        const rememberHTML = topic.remember.map(item => `
            <div class="tip-box remember-box">
                <p class="tip-content">${item.content}</p>
            </div>
        `).join('');

        // Build Consider boxes
        const considerHTML = topic.consider.map(item => `
            <div class="tip-box consider-box">
                <p class="tip-content">${item.content}</p>
            </div>
        `).join('');

        // Build Practice Questions
        const practiceHTML = renderPracticeQuestions(topic.practice);

        // Combine all content
        page.innerHTML = `
            <div class="topic-header">
                <h1>${topic.title}</h1>
                <p class="topic-subtitle">${topic.subtitle}</p>
            </div>

            <div class="topic-intro">
                ${topic.intro}
            </div>

            ${conceptsHTML}

            <div class="tips-section">
                <h2>Key Tips</h2>
                ${rememberHTML}
                ${considerHTML}
            </div>

            <div class="practice-section">
                <h2>✨ Practice Questions</h2>
                ${practiceHTML}
            </div>
        `;
    }

    function renderTrigonometryPage() {
        const page = document.getElementById('trigonometry');
        if (!page || !kaliEduData.topics.trigonometry) return;

        const topic = kaliEduData.topics.trigonometry;

        page.innerHTML = `
            <div class="topic-header">
                <h1>${topic.title}</h1>
                <p class="topic-subtitle">${topic.subtitle}</p>
            </div>

            <div class="topic-intro">
                ${topic.intro}
            </div>

            <div class="coming-soon">
                <div class="coming-soon-icon">🌙</div>
                <h2>Coming Soon</h2>
                <p>Like the gentle unfolding of a new chapter in a journey, we're preparing something special for you.</p>
            </div>
        `;
    }

    function renderPracticeQuestions(questions) {
        if (!questions || questions.length === 0) return '';

        return questions.map((q, index) => {
            if (q.type === 'multiple-choice') {
                return renderMultipleChoice(q, index);
            } else if (q.type === 'short-answer') {
                return renderShortAnswer(q, index);
            }
            return '';
        }).join('');
    }

    function renderMultipleChoice(question, index) {
        const letters = ['A', 'B', 'C', 'D'];
        
        const optionsHTML = question.options.map((opt, i) => `
            <li class="option-item">
                <label class="option-label" data-question="${question.id}" data-option="${i}">
                    <span class="option-marker">${letters[i]}</span>
                    <span class="option-text">${opt.text}</span>
                </label>
            </li>
        `).join('');

        return `
            <div class="practice-question" data-question-id="${question.id}">
                <div class="question-text">
                    <span class="question-number">${index + 1}</span>
                    <span>${question.question}</span>
                </div>
                <ul class="options-list">
                    ${optionsHTML}
                </ul>
                <div class="question-actions">
                    <button class="hint-button" onclick="showHint(${question.id})">Show Hint</button>
                    <button class="solution-button" onclick="showSolution(${question.id})">Show Solution</button>
                </div>
                <div class="hint-text" id="hint-${question.id}">
                    <strong>Hint:</strong> ${question.hint}
                </div>
                <div class="solution-text" id="solution-${question.id}">
                    <strong>Solution:</strong> ${question.solution}
                </div>
            </div>
        `;
    }

    function renderShortAnswer(question, index) {
        return `
            <div class="practice-question" data-question-id="${question.id}">
                <div class="question-text">
                    <span class="question-number">${index + 1}</span>
                    <span>${question.question}</span>
                </div>
                <input type="text" 
                       class="short-answer-input" 
                       id="answer-${question.id}"
                       placeholder="Type your answer here..."
                       onkeypress="handleEnter(event, ${question.id})">
                <div class="question-actions">
                    <button class="hint-button" onclick="showHint(${question.id})">Show Hint</button>
                    <button class="check-answer-button" onclick="checkShortAnswer(${question.id})">Check Answer</button>
                    <button class="solution-button" onclick="showSolution(${question.id})">Show Solution</button>
                </div>
                <div class="hint-text" id="hint-${question.id}">
                    <strong>Hint:</strong> ${question.hint}
                </div>
                <div class="solution-text" id="solution-${question.id}">
                    <strong>Solution:</strong> ${question.solution}
                </div>
            </div>
        `;
    }

    // ==================== Practice Question Interactions ====================
    window.showHint = function(questionId) {
        const hintElement = document.getElementById(`hint-${questionId}`);
        if (hintElement) {
            hintElement.classList.toggle('visible');
        }
    };

    window.showSolution = function(questionId) {
        const solutionElement = document.getElementById(`solution-${questionId}`);
        if (solutionElement) {
            solutionElement.classList.toggle('visible');
        }
    };

    window.handleEnter = function(event, questionId) {
        if (event.key === 'Enter') {
            checkShortAnswer(questionId);
        }
    };

    window.checkShortAnswer = function(questionId) {
        // Find the practice question data
        const question = kaliEduData.topics.functions.practice.find(q => q.id === questionId);
        if (!question) return;

        const inputElement = document.getElementById(`answer-${questionId}`);
        if (!inputElement) return;

        const userAnswer = inputElement.value.trim().toLowerCase();
        
        // For short answers, we just mark it as attempted and show the solution
        // In a real app, you might want to check against expected answers
        answeredQuestions.add(questionId);
        
        // Show the solution
        const solutionElement = document.getElementById(`solution-${questionId}`);
        if (solutionElement) {
            solutionElement.classList.add('visible');
        }
        
        // Add visual feedback
        inputElement.classList.add('correct');
    };

    // ==================== Multiple Choice Selection ====================
    document.addEventListener('click', function(event) {
        const optionLabel = event.target.closest('.option-label');
        if (!optionLabel) return;

        const questionId = optionLabel.dataset.question;
        const selectedOption = parseInt(optionLabel.dataset.option);
        
        // Find the question data
        const question = kaliEduData.topics.functions.practice.find(q => q.id === parseInt(questionId));
        if (!question || question.type !== 'multiple-choice') return;

        // Remove previous selections for this question
        document.querySelectorAll(`.option-label[data-question="${questionId}"]`).forEach(label => {
            label.classList.remove('selected', 'correct', 'incorrect');
        });

        // Mark as selected
        optionLabel.classList.add('selected');

        // Check if correct
        const isCorrect = question.options[selectedOption].correct;
        
        if (isCorrect) {
            optionLabel.classList.add('correct');
            answeredQuestions.add(parseInt(questionId));
        } else {
            optionLabel.classList.add('incorrect');
            
            // Show the correct answer
            setTimeout(() => {
                question.options.forEach((opt, i) => {
                    if (opt.correct) {
                        const correctLabel = document.querySelector(`.option-label[data-question="${questionId}"][data-option="${i}"]`);
                        if (correctLabel) {
                            correctLabel.classList.add('correct');
                        }
                    }
                });
            }, 500);
        }
    });

    // ==================== Page Transitions ====================
    function setupPageTransition() {
        // Add transition classes when navigating
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.page-section').forEach(section => {
            observer.observe(section);
        });
    }

    // ==================== Keyboard Navigation ====================
    document.addEventListener('keydown', function(event) {
        // Press Escape to go back to home
        if (event.key === 'Escape' && currentPage !== 'home') {
            navigateTo('home');
        }
    });

})();
