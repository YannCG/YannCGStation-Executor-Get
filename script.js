// Translation objects - kept for language switching functionality
// Even though UI is minimal, we maintain the structure for potential future text or tooltips
const translations = {
    en: {
        "hero.title": "SpaceX",
        "hero.subtitle": "Advancing Space Technology",
        "achievements.title": "Technology Achievements",
        "achievements.falcon9.title": "Falcon 9",
        "achievements.falcon9.content": "Reusable Rocket Technology",
        "achievements.dragon.title": "Dragon",
        "achievements.dragon.content": "Spacecraft Systems",
        "achievements.starship.title": "Starship",
        "achievements.starship.content": "Interplanetary Transport",
        "publications.title": "Research & Publications",
        "pub1.title": "Reusable Launch Systems",
        "pub1.content": "Advanced materials and landing technologies for orbital rocket recovery",
        "pub1.link": "View Paper",
        "pub2.title": "Mars Habitat Design",
        "pub2.content": "Sustainable living solutions for extraterrestrial colonization",
        "pub2.link": "View Paper",
        "pub3.title": "Propulsion Technology",
        "pub3.content": "Next-generation rocket engines for deep space exploration",
        "pub3.link": "View Paper",
        "pub4.title": "Communications Systems",
        "pub4.content": "Deep space network and laser communication technologies",
        "pub4.link": "View Paper",
        "future.title": "Mission Vision",
        "future.content": "Making Life Multiplanetary",
        "footer.text": "© 2026 SpaceX. All Rights Reserved."
    },
    fr: {
        "hero.title": "SpaceX",
        "hero.subtitle": "Progrès Technologique Spatial",
        "achievements.title": "Réalisations Technologiques",
        "achievements.falcon9.title": "Falcon 9",
        "achievements.falcon9.content": "Technologie de Fusée Réutilisable",
        "achievements.dragon.title": "Dragon",
        "achievements.dragon.content": "Systèmes de Vaisseau Spatial",
        "achievements.starship.title": "Starship",
        "achievements.starship.content": "Transport Interplanétaire",
        "publications.title": "Recherche & Publications",
        "pub1.title": "Systèmes de Lanceurs Réutilisables",
        "pub1.content": "Matériaux avancés et technologies d'atterrissage pour la récupération des fusées orbitales",
        "pub1.link": "Voir l'article",
        "pub2.title": "Conception d'Habitat Martien",
        "pub2.content": "Solutions de vie durables pour la colonisation extraterrestre",
        "pub2.link": "Voir l'article",
        "pub3.title": "Technologie de Propulsion",
        "pub3.content": "Moteurs de fusée de prochaine génération pour l'exploration de l'espace profond",
        "pub3.link": "Voir l'article",
        "pub4.title": "Systèmes de Communication",
        "pub4.content": "Technologies de réseau spatial profond et de communication laser",
        "pub4.link": "Voir l'article",
        "future.title": "Vision de Mission",
        "future.content": "Rendre la Vie Multiplanétaire",
        "footer.text": "© 2026 SpaceX. Tous Droits Réservés."
    },
    zh: {
        "hero.title": "SpaceX",
        "hero.subtitle": "推进空间技术",
        "achievements.title": "技术成就",
        "achievements.falcon9.title": "猎鹰9号",
        "achievements.falcon9.content": "可重复使用火箭技术",
        "achievements.dragon.title": "龙飞船",
        "achievements.dragon.content": "航天器系统",
        "achievements.starship.title": "星舰",
        "achievements.starship.content": "星际运输系统",
        "publications.title": "研究与出版物",
        "pub1.title": "可重复使用发射系统",
        "pub1.content": "用于火箭回收的先进材料和着陆技术",
        "pub1.link": "查看论文",
        "pub2.title": "火星栖息地设计",
        "pub2.content": "外星殖民的可持续生活解决方案",
        "pub2.link": "查看论文",
        "pub3.title": "推进技术",
        "pub3.content": "用于深空探索的下一代火箭发动机",
        "pub3.link": "查看论文",
        "pub4.title": "通信系统",
        "pub4.content": "深空网络和激光通信技术",
        "pub4.link": "查看论文",
        "future.title": "使命愿景",
        "future.content": "实现多行星生命",
        "footer.text": "© 2026 SpaceX. 保留所有权利。"
    }
};

// Current language
let currentLanguage = 'en';

// DOM elements that need translation
const translatableElements = document.querySelectorAll('[data-key]');

// Function to update page content based on language
function updateLanguage() {
    // Update all translatable elements
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });

    // Update active state of language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        }
    });
}

// Function to change language
function changeLanguage(lang) {
    currentLanguage = lang;
    updateLanguage();
}

// Initialize page on load
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage();

    // Initialize particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS.load('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#00bcd4"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#00bcd4",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }
});