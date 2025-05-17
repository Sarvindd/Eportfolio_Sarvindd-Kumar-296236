document.addEventListener('DOMContentLoaded', () => {
    // Show the active section based on the current page
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (window.location.pathname.includes(section.id)) {
            section.classList.add('active');
        }
    });

    // Analog Clock and Date/Time
    function updateClock() {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();

        const secondDegrees = (seconds / 60) * 360 + 90;
        const minuteDegrees = (minutes / 60) * 360 + (seconds / 3600) * 360 + 90;
        const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

        document.querySelectorAll('.second-hand').forEach(hand => {
            hand.style.transform = `rotate(${secondDegrees}deg)`;
        });
        document.querySelectorAll('.minute-hand').forEach(hand => {
            hand.style.transform = `rotate(${minuteDegrees}deg)`;
        });
        document.querySelectorAll('.hour-hand').forEach(hand => {
            hand.style.transform = `rotate(${hourDegrees}deg)`;
        });

        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit', 
            timeZone: 'Asia/Kuala_Lumpur' 
        };
        const dateTimeString = now.toLocaleString('en-US', options);
        document.querySelectorAll('#datetime').forEach(element => {
            element.textContent = dateTimeString;
        });
    }
    updateClock();
    setInterval(updateClock, 1000);

    // Language Info Display
    window.showLanguageInfo = function(language) {
        const infoDiv = document.getElementById('language-info');
        let content = '';
        switch (language) {
            case 'English':
                content = 'Native speaker with MUET Band 4, showcasing strong written and verbal skills.';
                break;
            case 'Malay':
                content = 'Fluent in Malay, enabling effective communication in diverse settings.';
                break;
            case 'Tamil':
                content = 'Native speaker, reflecting cultural depth and linguistic versatility.';
                break;
            case 'Japanese':
                content = 'Proficient, with 2nd Runner Up in Japanese Drama Competition and SPM International Language Achievement.';
                break;
        }
        infoDiv.innerHTML = `<p>${content}</p>`;
        infoDiv.style.display = 'block';
        setTimeout(() => infoDiv.style.display = 'none', 5000);
    };

    // Skill Info Display
    window.showSkillInfo = function(skill) {
        const infoDiv = document.getElementById('skill-info');
        let content = '';
        switch (skill) {
            case 'Language':
                content = 'Skilled in multiple languages, enabling cross-cultural communication.';
                break;
            case 'Writing':
                content = 'Proficient in creating clear and engaging content for various audiences.';
                break;
            case 'Computer':
                content = 'Tools I use: Microsoft Office, Adobe Premiere Pro, VS Code, and Google Suite.';
                break;
            case 'Editing':
                content = 'Check out my editing skills: <a href="https://www.youtube.com/watch?v=your-editing-video-id" target="_blank">Watch Video</a>';
                break;
            case 'QuickLearner':
                content = 'Quickly adapted to new technologies during my studies at UUM.';
                break;
            case 'Criticism':
                content = 'Improved projects by incorporating constructive feedback effectively.';
                break;
            case 'Leadership':
                content = 'Led teams in cultural events as an EXCO member at UPSI.';
                break;
            case 'Organized':
                content = 'Balanced academics and extracurriculars with effective time management.';
                break;
        }
        infoDiv.innerHTML = `<p>${content}</p>`;
        infoDiv.style.display = 'block';
        setTimeout(() => infoDiv.style.display = 'none', 5000);
    };

    // Quiz Result Display
    window.showQuizResult = function(language) {
        const resultDiv = document.getElementById('quiz-result');
        resultDiv.innerHTML = `You should learn ${language}! It's a great choice for your linguistic journey.`;
        resultDiv.style.display = 'block';
        setTimeout(() => resultDiv.style.display = 'none', 5000);
    };

    // Lifestyle Section Navigation
    window.showSection = function(sectionId) {
        const sections = document.querySelectorAll('.lifestyle-section');
        sections.forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    };

    // Gallery Filter
    window.applyFilter = function(filter) {
        const images = document.querySelectorAll('.portfolio-img');
        images.forEach(img => {
            img.classList.remove('grayscale', 'sepia');
            if (filter !== 'none') {
                img.classList.add(filter);
            }
        });
    };

    // Lightbox Functionality
    window.openLightbox = function(src, caption) {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxCaption = document.getElementById('lightbox-caption');
        lightboxImg.src = src;
        lightboxCaption.textContent = caption;
        lightbox.classList.add('active');
    };

    window.closeLightbox = function() {
        const lightbox = document.getElementById('lightbox');
        lightbox.classList.remove('active');
    };

    // Audio Control
    const audio = document.getElementById('background-audio');
    const audioToggle = document.getElementById('audio-toggle');
    audio.volume = 0.3;

    // Play music only on Profile page
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname === '/index.html') {
        audio.play().catch(error => console.log("Audio play failed: ", error));
    }

    audioToggle.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            audioToggle.innerHTML = '<i class="fas fa-volume-up"></i> Toggle Music';
        } else {
            audio.pause();
            audioToggle.innerHTML = '<i class="fas fa-volume-mute"></i> Toggle Music';
        }
    });
});