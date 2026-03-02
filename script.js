// config AOS
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            disableMutationObserver: true,
            once: true,
            offset: 50,
            duration: 800,
            easing: 'ease-out-cubic'
        });
    }

    // Funcionalidade do Accordion FAQ
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        
        header.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            
            // Fechar todos
            faqItems.forEach(faq => {
                faq.classList.remove('open');
                const content = faq.querySelector('.faq-content');
                if(content) content.style.maxHeight = null;
            });
            
            // Abrir selecionado
            if (!isOpen) {
                item.classList.add('open');
                const content = item.querySelector('.faq-content');
                if(content) content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});
