document.addEventListener('DOMContentLoaded', function() {
    // Highlight active section in sidebar
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('.doc-nav a');
    
    function setActiveLink() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 100)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === currentSection) {
                link.classList.add('active');
            }
        });
    }
    
    // Smooth scroll to sections
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 20,
                behavior: 'smooth'
            });
        });
    });
    
    window.addEventListener('scroll', setActiveLink);
    setActiveLink();
}); 